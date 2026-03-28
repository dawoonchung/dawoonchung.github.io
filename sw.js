/**
 * Service Worker for dawoonchung.com
 *
 * Strategy: Stale-While-Revalidate for static assets, Network-First for
 * HTML pages. This gives instant repeat visits while keeping content fresh.
 */

const CACHE_NAME = 'dwc-v3.0.0';

/** Extensions to cache with stale-while-revalidate. */
const CACHEABLE_EXTENSIONS = [
  '.js',
  '.css',
  '.woff2',
  '.woff',
  '.ttf',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.svg',
  '.ico',
  '.mp4',
  '.webm',
  '.pdf',
];

/** Paths to pre-cache on install (critical resources). */
const PRECACHE_URLS = ['/', '/favicon.ico', '/logo192.png'];

/**
 * Check if a request URL points to a cacheable static asset.
 */
function isCacheableAsset(url) {
  return CACHEABLE_EXTENSIONS.some((ext) => url.endsWith(ext));
}

/**
 * Install: pre-cache critical resources and activate immediately.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

/**
 * Activate: clean up old caches from previous versions.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/**
 * Fetch handler.
 *
 * - Static assets: Stale-While-Revalidate (serve from cache instantly,
 *   update cache in background).
 * - HTML pages: Network-First (try network, fall back to cache).
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests.
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (Typekit, GTM, etc.).
  if (!request.url.startsWith(self.location.origin)) return;

  if (isCacheableAsset(request.url)) {
    // Stale-While-Revalidate for static assets.
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request)
            .then((response) => {
              if (response.ok) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => cached);

          return cached || fetchPromise;
        }),
      ),
    );
  } else {
    // Network-First for HTML pages.
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then(
              (cached) => cached || new Response('Offline', { status: 503 }),
            ),
        ),
    );
  }
});
