import{f as x,j as v,i as t,h as s,c as f,b as d,E as w,a as k,t as a,m as S}from"./template-ByEHfdYF.js";import{R as I,B as y,H as h,I as c,p}from"./project.module-CfcmTz4O.js";import{T as _,S as i}from"./title-D785si6n.js";import{u as q}from"./useInitProject-D_rdr1bV.js";import{B as j}from"./synaesthesify-bg-LwQASnIi.js";import"./picture-DoVBIOq-.js";const $="/assets/at-equinox-lg-BSR6CBE5.jpg",C="/assets/at-equinox-lg-NIWSl_eb.webp",E="/assets/at-equinox-md-Dyop9fi_.jpg",T="/assets/at-equinox-md-BphNDyZD.webp",W="/assets/at-equinox-sm-CX6VlUps.jpg",B="/assets/at-equinox-sm-B1rspy0M.webp",A="/assets/at-equinox-xl-BFtyo1YZ.jpg",F="/assets/at-equinox-xl-CrldTY5x.webp",P="/assets/at-equinox-xs-7YrUrUuq.jpg",M="/assets/at-equinox-xs-C5KFHN4g.webp",D="/assets/at-equinox-x_r7Zn4u.jpg",L="/assets/at-equinox-B4_6Cv2q.webp",X={xs:P,sm:W,md:E,lg:$,xl:A,default:D},G={xs:M,sm:B,md:T,lg:C,xl:F,default:L},N={jpg:X,webp:G},H="/assets/main-screen-lg-Ba381QWv.jpg",R="/assets/main-screen-lg-B7YILnQH.webp",U="/assets/main-screen-md-D4x5s7Mh.jpg",Y="/assets/main-screen-md-CvOVw1BD.webp",Z="/assets/main-screen-sm-D3IxYDtj.jpg",O="/assets/main-screen-sm-BL4I1oCz.webp",V="/assets/main-screen-xl-BtcNsaxO.jpg",z="/assets/main-screen-xl-DZoxbMtT.webp",K="/assets/main-screen-xs-BGyyZXG3.jpg",Q="/assets/main-screen-xs-BKm86smG.webp",J="/assets/main-screen-C55xCIcq.jpg",ee="/assets/main-screen-DVd362Pz.webp",te={xs:K,sm:Z,md:U,lg:H,xl:V,default:J},se={xs:Q,sm:O,md:Y,lg:R,xl:z,default:ee},ae={jpg:te,webp:se},ne="/assets/sample-artwork-XUiOll_v.svg",oe="/assets/sample-chart-C0f2yUCw.svg",ie="/assets/sample-tweaks-D3BypgN2.svg";var re=a("<header><div><img alt=Synaesthesify></div><div class=container-fluid>"),le=a("<h2>Introduction"),ce=a("<p>Shortly after I joined Fjord, I was suggested to give a talk at Fjord&apos;s biggest annual event – <!> – to share a Creative Technologist&apos;s point of view towards the design world."),de=a("<p>I teamed up with two other new-joiners from Fjord Milan studio – a Visual Designer and another Creative Technologist – to quickly ideate on topics and concepts to talk about. We agreed that data and APIs are rising topics, and it would be inspiring for designers to show what we can do with them."),pe=a("<p>We came up with the idea of experimenting with <!> to generate some artworks. Rather than giving a too techy talk, we wanted to engage designers in a more friendly way by producing visual outputs."),he=a("<h2>Approach"),me=a("<p>The main idea of this project was to <em>play around</em> with data to generate interesting visual outputs. I also personally wanted to generate something that <em>makes sense</em>, rather than being too artistic. I decided to start by making a chart with available data in order to determine which track features would be useful."),ue=a("<p>After some trials, I decided to use seven track features shown above to generate a radar chart, with HSL colour extracted from song&apos;s key, loudness and tempo. These features are the ones directly related to song itself, which also means they are the most useful to <em>visually</em> find out how a song feels like."),ge=a("<p>At this point, I could already imagine an artwork generated by scattering the shape of radar charts. Also, by stacking them together in one place, I would be able to easily compare multiple song&apos;s characteristics at a glance."),fe=a("<p>The first outputs I got were close to what I had expected. I tried to fetch track features from all songs in Global Top 50 chart and generate above visualisations. From here, I started to experiment further by tweaking some parameters."),we=a("<p>I was inspired by the fact that alignment of each radar charts makes significant difference in the output&apos;s look and feel. I quickly added options to toggle randomisations for each chart&apos;s position and rotation to see the output."),ye=a("<p>As can be seen above, these simple tweaks already generated completely different effects, which was something I could not expect. The shapes of radar charts showed some similar patterns throughout the Global Top 50 chart (as a note, this does not necessarily mean these songs are similar; the pattern may come from different scoring system for each feature) that gave the feeling of directional movement in the left example."),be=a("<p>Similarly, the charts formed a nice radial pattern as shown on the right example, giving somewhat joyful and playful feeling."),xe=a("<p>As I had limited time, I decided to stop here and proceed to make my final product – a visual synthesiser for Spotify albums."),ve=a("<h2>Outcome"),ke=a("<p>I took the physical grid sequencers as a metaphor to my app. I already had some design directions suggested by the visual designer, so I could quickly proceed with my idea."),Se=a("<p>In the final design, users can generate an artwork from a selected album or playlist, and also play around with positions and rotations. Each song in an album is represented as a grid title as shown above, which users can click to check song&apos;s features."),Ie=a("<p>This work was presented in a pop-up session at Fjord&apos;s Equinox event, together with the Milan team with their own version of experiments. We shared our learnings and initiated conversations around the topic with designers from all over the world."),_e=a("<h2>Learnings"),qe=a("<p>While this mini-project was a simple and quick one, it triggered many discussions in the talk. It became a good opportunity to share experiences from both designers&apos; and Creative Technologists&apos; points of view."),je=a("<p>Many designers were interested in collaborating with Creative Technologists but found the process somewhat difficult. Also, as a team of new joiners, we were also keen to find out what has been the process in other studios and what we could suggest them to improve it."),$e=a("<p>At the end of the talk, one designer from Fjord London studio asked what designers could do to help Creative Technologists; and our suggestion was that they could familiarise themselves in reading developer documentations on APIs to learn what data is available. This will not only help us build our logic but will also become food for thoughts for designing new products and services."),Ce=a("<main><div class=container-fluid>");function Ee(){const b=r=>{q("synaesthesify",r)};return[(()=>{var r=re(),e=r.firstChild,o=e.firstChild,l=e.nextSibling;return x(b,e),v(o,"src",j),t(l,s(_,{title:"Synaesthesify",headline:"A three-day mini experiment with Spotify API by three fresh joiners"}),null),t(l,s(I,{agency:"Fjord",agencyLink:"https://fjordnet.com/",client:"N/A",overview:`
              I created a mini web application to generate artworks from song's
              characteristics. With this work, I gave a talk at Fjord's annual
              event to fellow designers to raise the topic of data and design.
            `,roles:["Concept generation","Web app development"],year:"2017"}),null),f(n=>{var m=p.header,u=p.hero,g=p.bg;return m!==n.e&&d(r,n.e=m),u!==n.t&&d(e,n.t=u),g!==n.a&&d(o,n.a=g),n},{e:void 0,t:void 0,a:void 0}),r})(),(()=>{var r=Ce(),e=r.firstChild;return t(e,s(y,{children:"What can we create with Spotify's Track Features API?"}),null),t(e,s(i,{get children(){return[le(),(()=>{var o=ce(),l=o.firstChild,n=l.nextSibling;return n.nextSibling,t(o,s(w,{href:"https://www.fjordnet.com/conversations/fjord-equinox-2017-sessions/",children:"Equinox"}),n),o})(),de(),(()=>{var o=pe(),l=o.firstChild,n=l.nextSibling;return n.nextSibling,t(o,s(w,{href:"https://developer.spotify.com/console/get-audio-features-track/",children:"Spotify's Track Features API"}),n),o})()]}}),null),t(e,s(h,{}),null),t(e,s(i,{noPadding:!0,get children(){return[he(),me()]}}),null),t(e,s(c,{src:oe,alt:"Exemplary radar charts generated from a track"}),null),t(e,s(i,{noPadding:!0,get children(){return[ue(),ge()]}}),null),t(e,s(c,{src:ne,alt:"Exemplary artworks generated from Global Top 50"}),null),t(e,s(i,{noPadding:!0,get children(){return fe()}}),null),t(e,s(y,{children:"It's like generating an unexpected output with expected outputs!"}),null),t(e,s(i,{noPadding:!0,get children(){return we()}}),null),t(e,s(c,{src:ie,alt:"Exemplary artworks with tweaked parameters"}),null),t(e,s(i,{get children(){return[ye(),be(),xe()]}}),null),t(e,s(h,{}),null),t(e,s(i,{noPadding:!0,get children(){return[ve(),ke()]}}),null),t(e,s(c,{alt:"The final design of Synaesthesify",srcset:ae}),null),t(e,s(i,{get children(){return[Se(),Ie()]}}),null),t(e,s(h,{}),null),t(e,s(i,{noPadding:!0,get children(){return[_e(),qe()]}}),null),t(e,s(c,{alt:"Me presenting Synaesthesify at Fjord's Equinox event",srcset:N}),null),t(e,s(i,{get children(){return[je(),$e()]}}),null),f(()=>d(r,k("synaesthesify__content",p.main))),r})()]}S({component:Ee,page:"work"});