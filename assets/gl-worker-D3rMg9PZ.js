(function(){function e(e,t,n,r){let i=new Float32Array(16),a=e*Math.PI/180,o=1/Math.tan(a/2),s=1/(n-r);return i[0]=o/t,i[5]=o,i[10]=(n+r)*s,i[11]=-1,i[14]=2*n*r*s,i}function t(e,t,n=[0,1,0]){let r=new Float32Array(16),i=e[0]-t[0],a=e[1]-t[1],o=e[2]-t[2],s=Math.sqrt(i*i+a*a+o*o);i/=s,a/=s,o/=s;let c=n[1]*o-n[2]*a,l=n[2]*i-n[0]*o,u=n[0]*a-n[1]*i,d=Math.sqrt(c*c+l*l+u*u);c/=d,l/=d,u/=d;let f=a*u-o*l,p=o*c-i*u,m=i*l-a*c;return r[0]=c,r[1]=f,r[2]=i,r[4]=l,r[5]=p,r[6]=a,r[8]=u,r[9]=m,r[10]=o,r[12]=-(c*e[0]+l*e[1]+u*e[2]),r[13]=-(f*e[0]+p*e[1]+m*e[2]),r[14]=-(i*e[0]+a*e[1]+o*e[2]),r[15]=1,r}function n(e,t){let[n,r,i]=e,[a,o,s]=t,c=Math.cos(a),l=Math.sin(a),u=Math.cos(o),d=Math.sin(o),f=Math.cos(s),p=Math.sin(s),m=new Float32Array(16);return m[0]=u*f,m[1]=c*p+l*d*f,m[2]=l*p-c*d*f,m[4]=-u*p,m[5]=c*f-l*d*p,m[6]=l*f+c*d*p,m[8]=d,m[9]=-l*u,m[10]=c*u,m[12]=n,m[13]=r,m[14]=i,m[15]=1,m}function r(e,t){let n=new Float32Array(16);for(let r=0;r<4;r++)for(let i=0;i<4;i++)n[i*4+r]=e[r]*t[i*4]+e[4+r]*t[i*4+1]+e[8+r]*t[i*4+2]+e[12+r]*t[i*4+3];return n}function i(e,t,n,r){let[i,a,o]=e,s=t[3]*i+t[7]*a+t[11]*o+t[15],c=(t[0]*i+t[4]*a+t[8]*o+t[12])/s,l=(t[1]*i+t[5]*a+t[9]*o+t[13])/s;return[n/2*(c+1),r/2*(-l+1)]}function a(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function o(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function s(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function c(e){return[e[0],e[1],e[2]]}function l(e,t,r,i=[0,0,0],a=[0,0,0]){let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,r,e.DYNAMIC_DRAW);let s=e.createVertexArray();e.bindVertexArray(s),e.bindBuffer(e.ARRAY_BUFFER,o);let l=e.getAttribLocation(t,`a_position`);e.enableVertexAttribArray(l),e.vertexAttribPointer(l,3,e.FLOAT,!1,0,0),e.bindVertexArray(null);let u=e.createBuffer(),d=e.createBuffer(),f=r.byteLength;e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,f,e.DYNAMIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.DYNAMIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null);let p=e.createVertexArray();e.bindVertexArray(p),e.bindBuffer(e.ARRAY_BUFFER,u),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,d),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,0,0),e.bindVertexArray(null);let m=new Float32Array(r);return{vao:s,lerpVao:p,vbo:o,vertexCount:r.length/3,position:c(i),rotation:c(a),opacity:1,getModelMatrix(){return n(this.position,this.rotation)},setAnimationSource(t,n){e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferSubData(e.ARRAY_BUFFER,0,t),e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferSubData(e.ARRAY_BUFFER,0,n),e.bindBuffer(e.ARRAY_BUFFER,null)},setCpuVertices(e){m=e},updateVertices(t){m=t,e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferSubData(e.ARRAY_BUFFER,0,t),e.bindBuffer(e.ARRAY_BUFFER,null)},getVertices(){return m},dispose(){e.deleteBuffer(o),e.deleteBuffer(u),e.deleteBuffer(d),e.deleteVertexArray(s),e.deleteVertexArray(p)}}}let u=[34/255,34/255,34/255];function d(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`Shader compilation failed: ${t}`)}return r}function f(e,t,n){let r=e.createProgram();if(e.attachShader(r,d(e,e.VERTEX_SHADER,t)),e.attachShader(r,d(e,e.FRAGMENT_SHADER,n)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let t=e.getProgramInfoLog(r);throw e.deleteProgram(r),Error(`Program linking failed: ${t}`)}return r}function p(e,t){return{modelViewMatrix:e.getUniformLocation(t,`u_modelViewMatrix`),projectionMatrix:e.getUniformLocation(t,`u_projectionMatrix`),pointSize:e.getUniformLocation(t,`u_pointSize`),scale:e.getUniformLocation(t,`u_scale`),fogColor:e.getUniformLocation(t,`u_fogColor`),fogDensity:e.getUniformLocation(t,`u_fogDensity`),opacity:e.getUniformLocation(t,`u_opacity`)}}function m(e){let t=d(e,e.VERTEX_SHADER,`#version 300 es

layout(location = 0) in vec3 a_src0;
layout(location = 1) in vec3 a_delta;

uniform float u_progress;

out vec3 v_result;

void main() {
    v_result = a_src0 + a_delta * u_progress;
    // gl_Position is unused — rasterisation is disabled during the TF pass.
    gl_Position = vec4(0.0);
}
`),n=d(e,e.FRAGMENT_SHADER,`#version 300 es
void main() {}`),r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.transformFeedbackVaryings(r,[`v_result`],e.SEPARATE_ATTRIBS),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`TF lerp program linking failed: ${e.getProgramInfoLog(r)}`);return e.deleteShader(t),e.deleteShader(n),r}function h(n){let i=n.getContext(`webgl2`,{alpha:!1,antialias:!1,powerPreference:`low-power`}),a=f(i,`#version 300 es

in vec3 a_position;

uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;
uniform float u_pointSize;
uniform float u_scale;

out float v_fogDepth;

void main() {
    vec4 mvPosition = u_modelViewMatrix * vec4(a_position, 1.0);
    gl_Position = u_projectionMatrix * mvPosition;

    // Point size with distance attenuation.
    // Matches Three.js PointsMaterial: size * (scale / -mvPosition.z)
    // where scale = canvasHeight(physical px, i.e. CSS px * DPR) * 0.5
    gl_PointSize = u_pointSize * (u_scale / -mvPosition.z);

    // Pass view-space depth for fog calculation.
    v_fogDepth = -mvPosition.z;
}
`,`#version 300 es
precision highp float;

uniform vec3 u_fogColor;
uniform float u_fogDensity;
uniform float u_opacity;

in float v_fogDepth;
out vec4 outColor;

void main() {
    // Render a circle using gl_PointCoord.
    // gl_PointCoord ranges from (0,0) at top-left to (1,1) at bottom-right.
    float dist = length(gl_PointCoord - vec2(0.5));

    // Discard fragments outside the circle (alphaTest: 0.1 equivalent).
    if (dist > 0.5) discard;

    // Smooth antialiased edge.
    float alpha = 1.0 - smoothstep(0.45, 0.5, dist);

    // Exponential fog: matches Three.js FogExp2 formula.
    // fogFactor = exp(-(density * distance)^2)
    float fogAmount = u_fogDensity * v_fogDepth;
    float fogFactor = exp(-fogAmount * fogAmount);
    fogFactor = clamp(fogFactor, 0.0, 1.0);

    // Mix white point color with fog color.
    vec3 color = mix(u_fogColor, vec3(1.0), fogFactor);

    outColor = vec4(color, alpha * u_opacity);
}
`),o=p(i,a),s=m(i),c=i.getUniformLocation(s,`u_progress`),d=i.createTransformFeedback();i.useProgram(a),i.enable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),i.clearColor(u[0],u[1],u[2],1),i.uniform3fv(o.fogColor,u),i.uniform1f(o.fogDensity,.01),i.uniform1f(o.pointSize,1),i.uniform1f(o.scale,n.height*.5);let h={position:[0,0,200],target:[0,0,0],fov:45,aspect:n.width/n.height,near:1,far:1e3},g=[];function _(e,t,n){let r=l(i,a,e,t,n);return g.push(r),r}let v=e(h.fov,h.aspect,h.near,h.far);function y(){i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT);let e=t(h.position,h.target);for(let t of g){let n=r(e,t.getModelMatrix());i.uniformMatrix4fv(o.modelViewMatrix,!1,n),i.uniformMatrix4fv(o.projectionMatrix,!1,v),i.uniform1f(o.opacity,t.opacity),i.bindVertexArray(t.vao),i.drawArrays(i.POINTS,0,t.vertexCount)}i.bindVertexArray(null)}function b(t,r,a=1){n.width=t*a,n.height=r*a,`style`in n&&(n.style.width=`${t}px`,n.style.height=`${r}px`),i.viewport(0,0,n.width,n.height),h.aspect=t/r,v=e(h.fov,h.aspect,h.near,h.far),i.uniform1f(o.scale,n.height*.5)}function x(e,t){let n=e;i.useProgram(s),i.uniform1f(c,t),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,d),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,n.vbo),i.enable(i.RASTERIZER_DISCARD),i.beginTransformFeedback(i.POINTS),i.bindVertexArray(n.lerpVao),i.drawArrays(i.POINTS,0,n.vertexCount),i.endTransformFeedback(),i.disable(i.RASTERIZER_DISCARD),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.bindVertexArray(null),i.useProgram(a)}function S(){for(let e of g)e.dispose();i.deleteProgram(a),i.deleteProgram(s),i.deleteTransformFeedback(d)}return{gl:i,program:a,uniforms:o,camera:h,createPointCloud:_,render:y,resize:b,lerpPoints:x,dispose:S}}let g=[1e4,1500,700],_=[110,30,20],v=[30,20,15],y={mobile:[[[50,-120,0],[-60,0,-35],[40,40,-60]],[[80,-80,-20],[35,0,-25],[20,30,-35]],[[150,-100,-70],[130,0,-90],[110,30,-110]],[[30,0,-50],[30,0,-50],[30,0,-50]],[[-30,0,-55],[0,0,-35],[20,0,-15]],[[-20,0,-20],[-20,0,-10],[-20,0,0]],[[150,-100,-70],[130,0,-90],[110,30,-110]]],default:[[[50,-100,0],[-60,0,-35],[40,40,-60]],[[80,-100,0],[50,0,-20],[30,30,-30]],[[150,-100,-70],[130,0,-90],[110,30,-110]],[[50,0,-50],[50,0,-50],[50,0,-50]],[[30,0,-55],[90,0,-35],[50,0,-15]],[[0,0,-55],[0,0,-35],[0,0,-15]],[[150,-100,-70],[130,0,-90],[110,30,-110]]]};function b(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function x(e,t,n,r){return[e*Math.sin(t)*Math.cos(n)*r,e*Math.sin(t)*Math.sin(n)*r,e*Math.cos(t)*r]}function S(e,t,n){let r=e()*2*Math.PI,i=e()*2-1,a=e();return x(n??Math.cbrt(a),Math.acos(i),r,t)}function C(e,t,n){let r=e()*Math.PI*2,i=t*Math.sqrt(e()),a=n*e();return[i*Math.cos(r),i*Math.sin(r),a]}function w(e,t){let n={positions:t,data:[],spreadOut:[]};for(let r=0;r<3;r+=1){let i=[],a=[];for(let n=0;n<t.length;n+=1){let t=[];for(let i=0;i<g[r];i+=1){let i;if(n<3||n===6)i=S(e,_[r]);else if(n===3){i=S(e,40);let t=S(e,40,3);a.push(t[0],t[1],t[2])}else i=C(e,v[r],6);n!==5&&t.push(i[0],i[1],i[2])}n===5?i.push(i[4]):i.push(new Float32Array(t))}n.spreadOut.push(new Float32Array(a)),n.data.push(i)}return n}function T(e=42){let t=b(e),n=b(e+1);return{mobile:w(t,y.mobile),default:w(n,y.default)}}function E(e){return e}let{cbrt:D,sqrt:O,PI:k}=Math,ee=(e,t,n,r,i)=>{let a=t+n*e,o=a**2+r;if(o>0){let e=O(o);return D(a+e)+D(a-e)-i}let s=D(O(a*a-o)),c=a?Math.atan(O(-o)/a):-k/2,l;return l=n<0?(a>0?2*k:k)-c:i<0?(a>0?2*k:-3*k)+c:(a>0?0:k)+c,2*s*Math.cos(l/3)-i},A=(e,t,n,r)=>((t*e+3*n)*e+r)*e;function j(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw Error(`bezier x values must be in [0, 1] range`);if(e===t&&n===r)return E;let i=6*(3*e-3*n+1),a=6*(n-2*e),o=3*e,s=i*i,c=a*a,l=a/i,u=3*a*o/s-c*a/(s*i),d=2*o/i-c/s,f=d*d*d,p=3/i,m=3*t-3*r+1,h=r-2*t,g=3*t,_=i?ee:E;return function(e){return e===0||e===1?e:A(_(e,u,p,f,l),m,h,g)}}function M(n,a,o,s){return i(n,r(e(a.fov,a.aspect,a.near,a.far),t(a.position,a.target)),o,s)}let N=j(.645,.045,.355,1);function P(e,t){let n=performance.now();return N(Math.min((t-(e-n))/t,1))}var te=`// WebGPU compute shader: GPU-side vertex lerp.
// Replaces WebGL2 Transform Feedback.
// One invocation per float in the position buffer.
// Dispatch with ceil(count / 64) workgroups.

struct Params {
    progress : f32,
    count    : u32,
}

@group(0) @binding(0) var<storage, read>       src0   : array<f32>;
@group(0) @binding(1) var<storage, read>       delta  : array<f32>;
@group(0) @binding(2) var<storage, read_write> output : array<f32>;
@group(0) @binding(3) var<uniform>             params : Params;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    let i = id.x;
    if (i >= params.count) { return; }
    output[i] = src0[i] + delta[i] * params.progress;
}
`;function ne(e,t,n,r=[0,0,0],i=[0,0,0]){let a=n.byteLength,o=e.createBuffer({label:`point-cloud-positions`,size:a,usage:136});e.queue.writeBuffer(o,0,n);let s=e.createBuffer({label:`point-cloud-src0`,size:a,usage:136}),l=e.createBuffer({label:`point-cloud-delta`,size:a,usage:136}),u=e.createBuffer({label:`point-cloud-lerp-params`,size:16,usage:72}),d=new Float32Array(n),f=null;function p(){f=e.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:s}},{binding:1,resource:{buffer:l}},{binding:2,resource:{buffer:o}},{binding:3,resource:{buffer:u}}]})}p();let m={positionBuf:o,computeBindGroup:f,vertexCount:n.length/3,position:c(r),rotation:c(i),opacity:1,setAnimationSource(t,n){e.queue.writeBuffer(s,0,t),e.queue.writeBuffer(l,0,n)},setCpuVertices(e){d=new Float32Array(e)},getVertices(){return d},dispose(){o.destroy(),s.destroy(),l.destroy(),u.destroy()}};return m._paramsBuf=u,m}var re=`// WebGPU render shaders: instanced quad rendering with SDF circle.
// WebGPU has no gl.POINTS or gl_PointCoord, so each point is drawn as
// a 6-vertex quad (2 triangles). The vertex shader reads world position
// from a storage buffer via instance_index.

// ── Uniforms ────────────────────────────────────────────────────────────────
// Shared across all draw calls in a frame (fog, projection).
struct FrameUniforms {
    projectionMatrix : mat4x4<f32>,
    fogColor         : vec3<f32>,
    fogDensity       : f32,
    pointSize        : f32,
    viewportWidth    : f32,
    viewportHeight   : f32,
    _pad             : f32,
}

// Per-draw-call (one per point cloud).
struct DrawUniforms {
    modelViewMatrix : mat4x4<f32>,
    opacity         : f32,
    scale           : f32,
    _pad            : vec2<f32>,
}

@group(0) @binding(0) var<uniform> frame : FrameUniforms;
@group(1) @binding(0) var<uniform> draw  : DrawUniforms;
@group(1) @binding(1) var<storage, read> positions : array<f32>;

// ── Quad geometry ────────────────────────────────────────────────────────────
// 6 vertices forming 2 triangles in [-1, 1] local space.
var<private> quadPos : array<vec2<f32>, 6> = array<vec2<f32>, 6>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 1.0, -1.0),
    vec2<f32>(-1.0,  1.0),
    vec2<f32>(-1.0,  1.0),
    vec2<f32>( 1.0, -1.0),
    vec2<f32>( 1.0,  1.0),
);

// UVs in [0, 1]² — used for the SDF distance from centre.
var<private> quadUV : array<vec2<f32>, 6> = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
);

// ── Vertex output ────────────────────────────────────────────────────────────
struct VertOut {
    @builtin(position) position : vec4<f32>,
    @location(0)       uv       : vec2<f32>,
    @location(1)       fogDepth : f32,
}

// ── Vertex shader ────────────────────────────────────────────────────────────
@vertex
fn vs_main(
    @builtin(vertex_index)   vi : u32,
    @builtin(instance_index) ii : u32,
) -> VertOut {
    // Read world position for this instance from the storage buffer.
    let base     = ii * 3u;
    let worldPos = vec4<f32>(positions[base], positions[base + 1u], positions[base + 2u], 1.0);

    // Transform to view space, then to clip space.
    let mvPos  = draw.modelViewMatrix * worldPos;
    let clip   = frame.projectionMatrix * mvPos;

    // Perspective-correct point size in pixels.
    // Matches: gl_PointSize = u_pointSize * (u_scale / -mvPosition.z)
    let pxSize = frame.pointSize * (draw.scale / -mvPos.z);

    // Expand the quad vertex in NDC space (multiply by clip.w for perspective).
    let offset = quadPos[vi] * pxSize;
    let ndcX   = offset.x / frame.viewportWidth;
    let ndcY   = offset.y / frame.viewportHeight;

    var out : VertOut;
    out.position = vec4<f32>(
        clip.x + ndcX * clip.w,
        clip.y + ndcY * clip.w,
        clip.z,
        clip.w,
    );
    out.uv       = quadUV[vi];
    out.fogDepth = -mvPos.z;
    return out;
}

// ── Fragment shader ──────────────────────────────────────────────────────────
@fragment
fn fs_main(in : VertOut) -> @location(0) vec4<f32> {
    // SDF circle — matches WebGL2 fragment shader exactly.
    let dist = length(in.uv - vec2<f32>(0.5));
    if (dist > 0.5) { discard; }

    // Smooth antialiased edge.
    let alpha = 1.0 - smoothstep(0.45, 0.5, dist);

    // Exponential fog matching Three.js FogExp2: exp(-(density * depth)²)
    let fogAmount = frame.fogDensity * in.fogDepth;
    let fogFactor = clamp(exp(-fogAmount * fogAmount), 0.0, 1.0);
    let color     = mix(frame.fogColor, vec3<f32>(1.0), fogFactor);

    return vec4<f32>(color, alpha * draw.opacity);
}
`;let F=[34/255,34/255,34/255];async function ie(){if(!(`gpu`in navigator))return!1;try{return await navigator.gpu.requestAdapter()!==null}catch{return!1}}async function ae(i){let a=await navigator.gpu.requestAdapter({powerPreference:`low-power`});if(!a)throw Error(`[WebGPU] No suitable adapter found.`);let o=await a.requestDevice();o.lost.then(e=>{console.error(`[WebGPU] Device lost (${e.reason}): ${e.message}`)});let s=i.getContext(`webgpu`),c=navigator.gpu.getPreferredCanvasFormat();s.configure({device:o,format:c,alphaMode:`opaque`});let l=o.createTexture({size:[i.width,i.height],format:`depth24plus`,usage:16}),u=o.createShaderModule({code:te}),d=o.createBindGroupLayout({entries:[{binding:0,visibility:4,buffer:{type:`read-only-storage`}},{binding:1,visibility:4,buffer:{type:`read-only-storage`}},{binding:2,visibility:4,buffer:{type:`storage`}},{binding:3,visibility:4,buffer:{type:`uniform`}}]}),f=o.createComputePipeline({layout:o.createPipelineLayout({bindGroupLayouts:[d]}),compute:{module:u,entryPoint:`main`}}),p=o.createShaderModule({code:re}),m=o.createBindGroupLayout({entries:[{binding:0,visibility:3,buffer:{type:`uniform`}}]}),h=o.createBindGroupLayout({entries:[{binding:0,visibility:3,buffer:{type:`uniform`}},{binding:1,visibility:1,buffer:{type:`read-only-storage`}}]}),g=o.createRenderPipeline({layout:o.createPipelineLayout({bindGroupLayouts:[m,h]}),vertex:{module:p,entryPoint:`vs_main`},fragment:{module:p,entryPoint:`fs_main`,targets:[{format:c,blend:{color:{srcFactor:`src-alpha`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},depthStencil:{format:`depth24plus`,depthWriteEnabled:!0,depthCompare:`less`},primitive:{topology:`triangle-list`}}),_=o.createBuffer({size:96,usage:72}),v=o.createBindGroup({layout:m,entries:[{binding:0,resource:{buffer:_}}]}),y={position:[0,0,200],target:[0,0,0],fov:45,aspect:i.width/i.height,near:1,far:1e3},b=e(y.fov,y.aspect,y.near,y.far),x=i.width,S=i.height,C=i.height*.5,w=[],T=[],E=[];function D(e,t){if(T[e])return;let n=o.createBuffer({size:80,usage:72});T[e]=n,E[e]=o.createBindGroup({layout:h,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:t.positionBuf}}]})}function O(){let e=new ArrayBuffer(96),t=new Float32Array(e);t.set(b,0),t[16]=F[0],t[17]=F[1],t[18]=F[2],t[19]=.01,t[20]=1,t[21]=x,t[22]=S,o.queue.writeBuffer(_,0,e)}function k(e,t,n){let r=new ArrayBuffer(80),i=new Float32Array(r);i.set(n,0),i[16]=t.opacity,i[17]=C,o.queue.writeBuffer(T[e],0,r)}function ee(){O();let e=t(y.position,y.target),i=o.createCommandEncoder(),a=i.beginRenderPass({colorAttachments:[{view:s.getCurrentTexture().createView(),clearValue:{r:F[0],g:F[1],b:F[2],a:1},loadOp:`clear`,storeOp:`store`}],depthStencilAttachment:{view:l.createView(),depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:`store`}});a.setPipeline(g),a.setBindGroup(0,v);for(let t=0;t<w.length;t++){let i=w[t];D(t,i);let o=n(i.position,i.rotation),s=new Float32Array(r(e,o));k(t,i,s),a.setBindGroup(1,E[t]),a.draw(6,i.vertexCount)}a.end(),o.queue.submit([i.finish()])}function A(t,n,r=1){i.width=t*r,i.height=n*r,x=i.width,S=i.height,C=i.height*.5,y.aspect=t/n,b=e(y.fov,y.aspect,y.near,y.far),l.destroy(),l=o.createTexture({size:[i.width,i.height],format:`depth24plus`,usage:16}),s.configure({device:o,format:c,alphaMode:`opaque`})}function j(e,t){let n=e,r=n.vertexCount*3,i=new ArrayBuffer(16);new Float32Array(i)[0]=t,new Uint32Array(i)[1]=r,o.queue.writeBuffer(n._paramsBuf,0,i);let a=o.createCommandEncoder(),s=a.beginComputePass();s.setPipeline(f),s.setBindGroup(0,n.computeBindGroup),s.dispatchWorkgroups(Math.ceil(r/64)),s.end(),o.queue.submit([a.finish()])}function M(e,t,n){let r=ne(o,d,e,t,n);return w.push(r),r}function N(){for(let e of w)e.dispose();for(let e of T)e?.destroy();_.destroy(),l.destroy(),o.destroy()}return console.log(`[engine] WebGPU initialised`),{camera:y,createPointCloud:M,render:ee,resize:A,lerpPoints:j,dispose:N}}let I=[0,0,200],oe=[0,0,50],L=[0,0,100],se=[L,L,L,L,[0,0,90],[100,0,0],L],R=2e3,z=1500,B=[Math.PI/4,3*Math.PI/4,0],V,H,U,W=0,G=0,K=1,q,J=!1,Y=0,ce=[!0,!0,!0],X=0,Z=[void 0,void 0,void 0],Q=[null,null,null],$=null;function le(e){postMessage(e)}function ue(){if(!H)return;let e=W<768;(e!==J||!U)&&(J=e,U=J?H.mobile:H.default)}function de(){if(!(!V||!U))for(let e=0;e<3;e++){let t=U.positions[0][e],n=U.data[e][0];Z[e]=V.createPointCloud(n,t,B)}}function fe(e){let t=V.camera,n=performance.now(),r=n+R;return{position0:[...t.position],moveDistance:a(e,t.position),start:n,end:r,isAnimating:!0}}function pe(e){let t=Q[e];if(t?.isAnimating){let e=P(t.end,z),n=new Float32Array(t.vertices0.length);for(let r=0;r<n.length;r++)n[r]=t.vertices0[r]+t.vertices1[r]*e;return n}return Z[e].getVertices()}function me(e,t){if(!U||!Z[e])return null;let n=Z[e],r=ce[e],i=r?U.data[e][Y]:U.spreadOut[e],o=pe(e),s=performance.now(),l=s+z,u=c(n.position),d=U.positions[Y][e],f=new Float32Array(o),p=new Float32Array(o.length),m=n.opacity,h=r?1:.1,g=c(n.rotation),_=t||B;for(let e=0;e<o.length;e++)p[e]=i[e]-o[e];return n.setAnimationSource(f,p),{position0:u,position1:a(d,u),vertices0:f,vertices1:p,opacity0:m,opacity1:h,rotation0:g,rotation1:_,start:s,end:l,isAnimating:!0}}function he(){if(V){if(Y===0&&X>0){let e=I[2]-oe[2];V.camera.position[2]=I[2]-X*e,V.camera.target=[0,0,0]}else if($?.isAnimating){let{position0:e,moveDistance:t,end:n}=$,r=P(n,R),i=s(t,r);V.camera.position[0]=e[0]+i[0],V.camera.position[1]=e[1]+i[1],V.camera.position[2]=e[2]+i[2],V.camera.target=[0,0,0],r>=1&&($.isAnimating=!1)}for(let e=0;e<3;e++){let t=Z[e];if(!t)continue;t.rotation[2]+=3e-4;let n=Q[e];if(n?.isAnimating){let{position0:e,position1:r,vertices0:i,vertices1:c,opacity0:l,opacity1:u,rotation0:d,rotation1:f,end:p}=n,m=P(p,z),h=s(r,m);V.lerpPoints(t,m),t.position[0]=e[0]+h[0],t.position[1]=e[1]+h[1],t.position[2]=e[2]+h[2],t.opacity=l+(u-l)*m;let g=o(d,s(a(f,d),m));if(t.rotation[0]=g[0],t.rotation[1]=g[1],m>=1){n.isAnimating=!1;let e=new Float32Array(i.length);for(let t=0;t<e.length;t++)e[t]=i[t]+c[t];t.setCpuVertices(e)}}}}}function ge(){if(!V)return;let e=[];for(let t=0;t<3;t++){let n=Z[t];if(!n){e.push({x:0,y:0,opacity:0});continue}let r=Q[t]?.isAnimating??!1;if(Y===1&&!r){let t=M(n.position,V.camera,W,G);e.push({x:t[0],y:t[1],opacity:1})}else e.push({x:0,y:0,opacity:0})}le({type:`POPUP_POSITIONS`,positions:e})}function _e(){V&&(he(),V.render(),ge(),q=requestAnimationFrame(_e))}self.onmessage=e=>{let t=e.data;switch(t.type){case`INIT`:(async()=>{W=t.width,G=t.height,K=t.dpr,await ie()?V=await ae(t.canvas):(V=h(t.canvas),console.log(`[engine] WebGL2 fallback initialised`)),V.resize(W,G,K),H=T(t.seed),ue(),de(),le({type:`READY`}),_e()})();break;case`RESIZE`:W=t.width,G=t.height,K=t.dpr,ue(),V?.resize(W,G,K);break;case`SET_STAGE`:if(Y=t.stage,V){$=fe(se[Y]);let e=Y>=4?[0,0,0]:void 0;for(let t=0;t<3;t++)Q[t]=me(t,e)}break;case`TOGGLE_POINTS`:if(ce[t.index]=t.isActive,V){let e=Y>=4?[0,0,0]:void 0;Q[t.index]=me(t.index,e)}break;case`SET_INTRO_SCROLL_PROGRESS`:X=t.progress;break;case`DESTROY`:cancelAnimationFrame(q),V?.dispose(),V=void 0;break}}})();