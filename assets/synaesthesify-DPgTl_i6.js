import{f as x,j as v,i as t,h as s,c as f,b as d,E as w,t as a,m as k}from"./index-Bk9s-L8v.js";import{R as S,B as y,H as h,I as c,p}from"./project.module-B0pcYXRR.js";import{T as I,S as i}from"./title-Dr34COSk.js";import{u as q}from"./useInitProject-DDBhSQfc.js";import{B as j}from"./synaesthesify-bg-LwQASnIi.js";import"./picture-C-jyCdgn.js";const _="/assets/at-equinox-lg-BSR6CBE5.jpg",$="/assets/at-equinox-lg-NIWSl_eb.webp",C="/assets/at-equinox-md-Dyop9fi_.jpg",E="/assets/at-equinox-md-BphNDyZD.webp",T="/assets/at-equinox-sm-CX6VlUps.jpg",W="/assets/at-equinox-sm-B1rspy0M.webp",B="/assets/at-equinox-xl-BFtyo1YZ.jpg",A="/assets/at-equinox-xl-CrldTY5x.webp",F="/assets/at-equinox-xs-7YrUrUuq.jpg",M="/assets/at-equinox-xs-C5KFHN4g.webp",D="/assets/at-equinox-x_r7Zn4u.jpg",L="/assets/at-equinox-B4_6Cv2q.webp",X={xs:F,sm:T,md:C,lg:_,xl:B,default:D},G={xs:M,sm:W,md:E,lg:$,xl:A,default:L},N={jpg:X,webp:G},P="/assets/main-screen-lg-Ba381QWv.jpg",H="/assets/main-screen-lg-B7YILnQH.webp",R="/assets/main-screen-md-D4x5s7Mh.jpg",U="/assets/main-screen-md-CvOVw1BD.webp",Y="/assets/main-screen-sm-D3IxYDtj.jpg",Z="/assets/main-screen-sm-BL4I1oCz.webp",O="/assets/main-screen-xl-BtcNsaxO.jpg",V="/assets/main-screen-xl-DZoxbMtT.webp",z="/assets/main-screen-xs-BGyyZXG3.jpg",K="/assets/main-screen-xs-BKm86smG.webp",Q="/assets/main-screen-C55xCIcq.jpg",J="/assets/main-screen-DVd362Pz.webp",ee={xs:z,sm:Y,md:R,lg:P,xl:O,default:Q},te={xs:K,sm:Z,md:U,lg:H,xl:V,default:J},se={jpg:ee,webp:te},ae="/assets/sample-artwork-XUiOll_v.svg",ne="/assets/sample-chart-C0f2yUCw.svg",oe="/assets/sample-tweaks-D3BypgN2.svg";var ie=a("<header><div><img alt=Synaesthesify></div><div class=container-fluid>"),re=a("<h2>Introduction"),le=a("<p>Shortly after I joined Fjord, I was suggested to give a talk at Fjord's biggest annual event – <!> – to share a Creative Technologist's point of view towards the design world."),ce=a("<p>I teamed up with two other new-joiners from Fjord Milan studio – a Visual Designer and another Creative Technologist – to quickly ideate on topics and concepts to talk about. We agreed that data and APIs are rising topics, and it would be inspiring for designers to show what we can do with them."),de=a("<p>We came up with the idea of experimenting with <!> to generate some artworks. Rather than giving a too techy talk, we wanted to engage designers in a more friendly way by producing visual outputs."),pe=a("<h2>Approach"),he=a("<p>The main idea of this project was to <em>play around</em> with data to generate interesting visual outputs. I also personally wanted to generate something that <em>makes sense</em>, rather than being too artistic. I decided to start by making a chart with available data in order to determine which track features would be useful."),me=a("<p>After some trials, I decided to use seven track features shown above to generate a radar chart, with HSL colour extracted from song's key, loudness and tempo. These features are the ones directly related to song itself, which also means they are the most useful to <em>visually</em> find out how a song feels like."),ue=a("<p>At this point, I could already imagine an artwork generated by scattering the shape of radar charts. Also, by stacking them together in one place, I would be able to easily compare multiple song's characteristics at a glance."),ge=a("<p>The first outputs I got were close to what I had expected. I tried to fetch track features from all songs in Global Top 50 chart and generate above visualisations. From here, I started to experiment further by tweaking some parameters."),fe=a("<p>I was inspired by the fact that alignment of each radar charts makes significant difference in the output's look and feel. I quickly added options to toggle randomisations for each chart's position and rotation to see the output."),we=a("<p>As can be seen above, these simple tweaks already generated completely different effects, which was something I could not expect. The shapes of radar charts showed some similar patterns throughout the Global Top 50 chart (as a note, this does not necessarily mean these songs are similar; the pattern may come from different scoring system for each feature) that gave the feeling of directional movement in the left example."),ye=a("<p>Similarly, the charts formed a nice radial pattern as shown on the right example, giving somewhat joyful and playful feeling."),be=a("<p>As I had limited time, I decided to stop here and proceed to make my final product – a visual synthesiser for Spotify albums."),xe=a("<h2>Outcome"),ve=a("<p>I took the physical grid sequencers as a metaphor to my app. I already had some design directions suggested by the visual designer, so I could quickly proceed with my idea."),ke=a("<p>In the final design, users can generate an artwork from a selected album or playlist, and also play around with positions and rotations. Each song in an album is represented as a grid title as shown above, which users can click to check song's features."),Se=a("<p>This work was presented in a pop-up session at Fjord's Equinox event, together with the Milan team with their own version of experiments. We shared our learnings and initiated conversations around the topic with designers from all over the world."),Ie=a("<h2>Learnings"),qe=a("<p>While this mini-project was a simple and quick one, it triggered many discussions in the talk. It became a good opportunity to share experiences from both designers' and Creative Technologists' points of view."),je=a("<p>Many designers were interested in collaborating with Creative Technologists but found the process somewhat difficult. Also, as a team of new joiners, we were also keen to find out what has been the process in other studios and what we could suggest them to improve it."),_e=a("<p>At the end of the talk, one designer from Fjord London studio asked what designers could do to help Creative Technologists; and our suggestion was that they could familiarise themselves in reading developer documentations on APIs to learn what data is available. This will not only help us build our logic but will also become food for thoughts for designing new products and services."),$e=a("<main><div class=container-fluid>");function Ce(){const b=r=>{q("synaesthesify",r)};return[(()=>{var r=ie(),e=r.firstChild,o=e.firstChild,l=e.nextSibling;return x(b,e),v(o,"src",j),t(l,s(I,{title:"Synaesthesify",headline:"A three-day mini experiment with Spotify API by three fresh joiners"}),null),t(l,s(S,{agency:"Fjord",agencyLink:"https://fjordnet.com/",client:"N/A",overview:`
              I created a mini web application to generate artworks from song's
              characteristics. With this work, I gave a talk at Fjord's annual
              event to fellow designers to raise the topic of data and design.
            `,roles:["Concept generation","Web app development"],year:"2017"}),null),f(n=>{var m=p.header,u=p.hero,g=p.bg;return m!==n.e&&d(r,n.e=m),u!==n.t&&d(e,n.t=u),g!==n.a&&d(o,n.a=g),n},{e:void 0,t:void 0,a:void 0}),r})(),(()=>{var r=$e(),e=r.firstChild;return t(e,s(y,{children:"What can we create with Spotify's Track Features API?"}),null),t(e,s(i,{get children(){return[re(),(()=>{var o=le(),l=o.firstChild,n=l.nextSibling;return n.nextSibling,t(o,s(w,{href:"https://www.fjordnet.com/conversations/fjord-equinox-2017-sessions/",children:"Equinox"}),n),o})(),ce(),(()=>{var o=de(),l=o.firstChild,n=l.nextSibling;return n.nextSibling,t(o,s(w,{href:"https://developer.spotify.com/console/get-audio-features-track/",children:"Spotify's Track Features API"}),n),o})()]}}),null),t(e,s(h,{}),null),t(e,s(i,{get children(){return[pe(),he()]}}),null),t(e,s(c,{src:ne,alt:"Exemplary radar charts generated from a track"}),null),t(e,s(i,{get children(){return[me(),ue()]}}),null),t(e,s(c,{src:ae,alt:"Exemplary artworks generated from Global Top 50"}),null),t(e,s(i,{get children(){return ge()}}),null),t(e,s(y,{children:"It's like generating an unexpected output with expected outputs!"}),null),t(e,s(i,{get children(){return fe()}}),null),t(e,s(c,{src:oe,alt:"Exemplary artworks with tweaked parameters"}),null),t(e,s(i,{get children(){return[we(),ye(),be()]}}),null),t(e,s(h,{}),null),t(e,s(i,{get children(){return[xe(),ve()]}}),null),t(e,s(c,{alt:"The final design of Synaesthesify",srcset:se}),null),t(e,s(i,{get children(){return[ke(),Se()]}}),null),t(e,s(h,{}),null),t(e,s(i,{get children(){return[Ie(),qe()]}}),null),t(e,s(c,{alt:"Me presenting Synaesthesify at Fjord's Equinox event",srcset:N}),null),t(e,s(i,{get children(){return[je(),_e()]}}),null),f(()=>d(r,p.main)),r})()]}k({component:Ce,page:"work"});