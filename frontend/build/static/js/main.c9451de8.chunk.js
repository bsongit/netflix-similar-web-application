(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,i){},69:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),c=i.n(s),l=i(31),o=i.n(l),a=i(12),r=i(5),d=(i(41),i(35)),j=i(4),u=i.n(j),b=i(19),m=i(7),v=i(2),O=i(43).default.create({baseURL:"http://185.212.128.162:3000/api"}),h=i(15);function x(e){var t=Object(r.f)(),i=Object(s.useState)(JSON.parse(localStorage.getItem("currentMovie"))),c=Object(v.a)(i,2),l=c[0],o=c[1],a=Object(s.useState)(!1),j=Object(v.a)(a,2),x=j[0],p=j[1],g=Object(s.useState)(!1),f=Object(v.a)(g,2),w=f[0],N=f[1],y=Object(s.useState)(),k=Object(v.a)(y,2),C=k[0],I=k[1],S=Object(s.useState)(!1),E=Object(v.a)(S,2),T=E[0],R=E[1],F=Object(r.g)().url;function D(){return(D=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/movies/get-by-url",{url:t}).then((function(e){o(e.data),localStorage.setItem("currentMovie",JSON.stringify(e.data)),"filme"===e.data.category?M(e.data):A(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){window.webtor=window.webtor||[],window.webtor.push({id:"player",baseUrl:"https://webtor.io",magnet:e.magnet.split(",")[0],width:"100%",height:"100%",features:{continue:!1},on:function(e){if(e.name===window.webtor.TORRENT_FETCHED){var t,i=Object(b.a)(e.data.files);try{for(i.s();!(t=i.n()).done;){var n=t.value;"1XBET.COM_promo_SHREK_dinheiro_livre.mp4"!==n.name&&"COMANDOTORRENTS.COM.mp4"!==n.name||N(!0),n.name.endsWith(".mkv")}}catch(s){i.e(s)}finally{i.f()}}e.name===window.webtor.TORRENT_ERROR&&console.log("Torrent error!"),e.name,window.webtor.INITED,e.name,window.webtor.OPEN,e.name,window.webtor.OPEN_SUBTITLES}})}function A(e){window.webtor=window.webtor||[],window.webtor.push({id:"player",baseUrl:"https://webtor.io",magnet:e,width:"100%",height:"100%",features:{continue:!1},on:function(e){if(e.name===window.webtor.TORRENT_FETCHED){var t,i=Object(b.a)(e.data.files);try{for(i.s();!(t=i.n()).done;){var n=t.value;"1XBET.COM_promo_SHREK_dinheiro_livre.mp4"!==n.name&&"COMANDOTORRENTS.COM.mp4"!==n.name||N(!0),n.name.endsWith(".mp4")}}catch(s){i.e(s)}finally{i.f()}}e.name===window.webtor.TORRENT_ERROR&&console.log("Torrent error!"),e.name,window.webtor.INITED,e.name,window.webtor.OPEN,e.name,window.webtor.OPEN_SUBTITLES}})}function L(){return(L=Object(m.a)(u.a.mark((function e(){var i,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,n=setInterval((function(){(i>=3600||"/home"===t.location.pathname||"localhost:3000"===t.location.pathname)&&clearInterval(n);var e=Object(d.a)(document.getElementsByTagName("script")),s=(null===e||void 0===e||e.map((function(e){return e.src.includes("p412601")?(e.remove(),e):null})),Object.entries(document.getElementsByTagName("iframe"))),c=0;s.map((function(e){var t;(null===(t=e[1].attributes.src)||void 0===t?void 0:t.value.includes("webtor"))&&1!==c?(c++,console.log(c)):e[1].remove()})),i++}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return(null===e||void 0===e?void 0:e.urlImg3)?e.urlImg3:(null===e||void 0===e?void 0:e.urlImg2)?e.urlImg2:null===e||void 0===e?void 0:e.urlImg}function _(e){return(null===e||void 0===e?void 0:e.title)?null===e||void 0===e?void 0:e.title:(null===e||void 0===e?void 0:e.name)?null===e||void 0===e?void 0:e.name:"NiceFilmes"}return console.log(l),Object(s.useEffect)((function(){window.scrollTo(0,0),console.log(l),"null"===l&&null===l&&l.url===F||function(e){D.apply(this,arguments)}(F),null!==l&&("filme"===l.category?M(l):A(l),I(document.getElementsByTagName("iframe")[0]),function(){L.apply(this,arguments)}(t))}),[]),console.log(F),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"detail-bg",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)("title",{children:(null===l||void 0===l?void 0:l.title)+" assistir online dublado"}),Object(n.jsx)("meta",{property:"og:title",content:"Filme "+_(l)+" assistir online dublado"}),Object(n.jsx)("meta",{name:"description",content:"Filme "+_(l)+" assistir online || 720p Dublado "+_(l)+" || 1080p "+(null===l||void 0===l?void 0:l.name)+" http://nicefilmes.net/"+(null===l||void 0===l?void 0:l.url)+" || "+(null===l||void 0===l?void 0:l.synopsis)}),Object(n.jsx)("meta",{property:"og:description",content:"Filme "+_(l)+" assistir online || 720p Dublado "+_(l)+" || 1080p "+(null===l||void 0===l?void 0:l.name)+" http://nicefilmes.net/"+(null===l||void 0===l?void 0:l.url)+" || "+(null===l||void 0===l?void 0:l.synopsis)}),Object(n.jsx)("meta",{property:"og:url",content:"http://nicefilmes.net/"+(null===l||void 0===l?void 0:l.url)}),Object(n.jsx)("link",{rel:"canonical",href:"http://nicefilmes.net/"+(null===l||void 0===l?void 0:l.url)})]}),Object(n.jsx)("button",{className:"back-button",onClick:function(){return t.pop()}}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"select-series",children:x&&"serie"===(null===l||void 0===l?void 0:l.category)?Object(n.jsxs)("select",{onChange:function(e){A(e.target.value),C.remove()},children:[Object(n.jsx)("option",{default:!0,children:"Selecionar outro eps\xf3dio"}),null===l||void 0===l?void 0:l.eps.map((function(e){return Object(n.jsx)("option",{value:e[Object.keys(e)],children:Object.keys(e)})}))]}):""})}),Object(n.jsxs)("div",{className:"parent-player",children:[Object(n.jsx)("div",{className:"back-bt",children:Object(n.jsx)("button",{onClick:function(){return t.push("/home")},children:"voltar"})}),Object(n.jsx)("div",{className:x?"visibility-show":"",id:"player"})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:T?"skip-anounce":"collapsed",children:"Pause o an\xfancio ou clique em Next para pular:"})}),Object(n.jsx)("div",{className:T?"skip-invisible":"collapsed",onClick:function(){return R(!1)}}),Object(n.jsx)("img",{className:x?"collapsed":"img-resume",src:l?B(l):"",alt:null===l||void 0===l?void 0:l.name}),x?"":Object(n.jsxs)("div",{className:"content-detail",children:[Object(n.jsx)("div",{className:"back-bt",children:Object(n.jsx)("button",{onClick:function(){return t.push("/home")},children:"voltar"})}),Object(n.jsxs)("div",{className:"border-center row d-flex",children:[Object(n.jsxs)("div",{className:"content-item",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h1",{children:null===l||void 0===l?void 0:l.name.toUpperCase()})}),Object(n.jsx)("div",{className:"studio",children:Object(n.jsxs)("span",{children:["(",null===l||void 0===l?void 0:l.studio,")"]})}),Object(n.jsx)("div",{className:"mt-1",children:Object(n.jsxs)("span",{children:["Estreado: ",null===l||void 0===l?void 0:l.release]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["Dura\xe7\xe3o: ",null===l||void 0===l?void 0:l.duration]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["Autor: ",null===l||void 0===l?void 0:l.author]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["G\xeanero: ",null===l||void 0===l?void 0:l.genere]})}),Object(n.jsx)("div",{className:"text-yellow",children:Object(n.jsxs)("span",{children:["Nota: ",null===l||void 0===l?void 0:l.imdb]})}),Object(n.jsx)("div",{className:"text-shadow-light-blue",children:Object(n.jsxs)("p",{children:["Sinopse: ",null===l||void 0===l?void 0:l.synopsis]})}),Object(n.jsx)("div",{className:"bg-dark-blue text-yellow",children:Object(n.jsx)("p",{children:Object(n.jsx)("bold",{children:"Aten\xe7\xe3o : O magnet player pode demorar um pouco para baixar seu filme. Isso sempre depende do hor\xe1rio e quantidade de 'peers || seeders'."})})}),Object(n.jsx)("div",{className:"filme"===(null===l||void 0===l?void 0:l.category)?"mt-2":"collapsed",children:Object(n.jsx)("button",{onClick:function(){return p(!0),void(w&&R(!0))},children:"Assistir filme "})}),Object(n.jsx)("div",{className:"mt-2 w-50 bg-dark-blue",children:"serie"===(null===l||void 0===l?void 0:l.category)?Object(n.jsxs)("select",{onChange:function(e){A(e.target.value),p(!0)},children:[Object(n.jsx)("option",{default:!0,children:"Escolha um eps\xf3dio"}),null===l||void 0===l?void 0:l.eps.map((function(e){return Object(n.jsx)("option",{value:e[Object.keys(e)],children:Object.keys(e)})}))]}):""})]}),Object(n.jsx)("div",{className:"hide-mobile  picture-item",children:Object(n.jsx)("img",{src:B(l),alt:null===l||void 0===l?void 0:l.name})})]}),Object(n.jsx)("div",{className:"lastcontent",children:Object(n.jsxs)("div",{className:"content d-block d-col",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("h2",{children:["Trailler ",null===l||void 0===l?void 0:l.title]})}),Object(n.jsx)("div",{children:Object(n.jsx)("iframe",{title:"trailler",className:"trailer",src:"https://www.youtube-nocookie.com/embed/".concat(null===l||void 0===l?void 0:l.trailer,"?rel=0&modestbranding=1&showinfo=0&autoplay=1"),frameborder:"0",allow:"picture-in-picture; paused",allowfullscreen:!0})}),Object(n.jsx)("div",{className:"text-shadow-light-blue",children:Object(n.jsx)("p",{children:null===l||void 0===l?void 0:l.plot})}),Object(n.jsxs)("div",{className:"mt-1 text-shadow-light-blue",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:["Classifica\xe7\xe3o: ",null===l||void 0===l?void 0:l.classifBR]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:["Or\xe7amento: ",null===l||void 0===l?void 0:l.budget]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:[" Bilheteria: ",null===l||void 0===l?void 0:l.ticketgain]})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===l||void 0===l?void 0:l.releaseCinemaBr})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===l||void 0===l?void 0:l.releaseDigital})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===l||void 0===l?void 0:l.releaseDvD})})]})]})})]})]}),Object(n.jsx)("div",{className:"headline",children:(null===l||void 0===l?void 0:l.cardheadline)?Object(n.jsx)("div",{className:"row text-justify text-shadow-light-blue",children:null===l||void 0===l?void 0:l.cardheadline}):""})]})}function p(e){var t,i,s,c;return Object(n.jsx)("div",{className:"video-component",children:Object(n.jsxs)("video",{id:"video",controls:!0,width:"100%",height:"100%",title:e.movie.title,children:[Object(n.jsx)("source",{src:[null===(t=e.movie)||void 0===t?void 0:t.playerVideo2.slice(0,null===(i=e.movie)||void 0===i?void 0:i.playerVideo2.indexOf("?")),"option_1.php",null===(s=e.movie)||void 0===s?void 0:s.playerVideo2.slice(null===(c=e.movie)||void 0===c?void 0:c.playerVideo2.indexOf("?"))].join("")}),Object(n.jsx)("track",{kind:"subtitles",srcLang:"en",label:"English",src:"./vtts/".concat(e.movie.url1,".vtt"),default:!0}),Object(n.jsx)("track",{kind:"captions",srcLang:"pt",label:"Portugu\xeas",src:"./vtts/".concat(e.movie.url1,".vtt"),default:!0})]})})}function g(e){var t,i=Object(r.f)(),c=Object(s.useState)(JSON.parse(localStorage.getItem("currentMovie"))),l=Object(v.a)(c,2),o=l[0],a=l[1],d=Object(s.useState)(!1),j=Object(v.a)(d,2),b=j[0],x=j[1],g=Object(r.g)().url1;function f(){return(f=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/movies/get-by-url-one",{url1:t}).then((function(e){a(e.data),localStorage.setItem("currentMovie",JSON.stringify(e.data))})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){x(!0),function(){var e=document.querySelector("#player");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}()}function N(e){return(null===e||void 0===e?void 0:e.urlImg3)?e.urlImg3:(null===e||void 0===e?void 0:e.urlImg2)?e.urlImg2:null===e||void 0===e?void 0:e.urlImg}return Object(s.useEffect)((function(){window.scrollTo(0,0),console.log(o),"null"===o&&null===o&&o.url1===g||function(e){f.apply(this,arguments)}(g)}),[]),console.log(g),Object(n.jsxs)("div",{className:"detail-bg",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)("title",{children:(null===o||void 0===o?void 0:o.title)+" assistir online"}),Object(n.jsx)("meta",{name:"description",content:null===o||void 0===o?void 0:o.synopsis}),Object(n.jsx)("meta",{property:"og:title",content:"Filme "+function(e){return(null===e||void 0===e?void 0:e.title)?null===e||void 0===e?void 0:e.title:(null===e||void 0===e?void 0:e.name)?null===e||void 0===e?void 0:e.name:"Assistir filme online"}(o)+" assistir online"}),Object(n.jsx)("meta",{property:"og:url",content:"http://www.nicefilmes.net/assistir/"+(null===o||void 0===o?void 0:o.url1)}),Object(n.jsx)("meta",{property:"og:description",content:null===o||void 0===o?void 0:o.synopsis}),Object(n.jsx)("link",{rel:"canonical",href:"http://nicefilmes.net/"+(null===o||void 0===o?void 0:o.url)})]}),Object(n.jsxs)("div",{className:"parent-player",children:[Object(n.jsx)("div",{className:"back-bt",children:Object(n.jsx)("button",{onClick:function(){return i.push("/home")},children:"voltar"})}),Object(n.jsx)("div",{className:b?"visibility-show":"",id:"player",children:o?Object(n.jsx)(p,{movie:o}):""})]}),Object(n.jsx)("img",{className:b?"collapsed":"img-resume",src:N(o),alt:null===o||void 0===o?void 0:o.name}),b?"":Object(n.jsxs)("div",{className:"content-detail",children:[Object(n.jsx)("div",{className:"back-bt",children:Object(n.jsx)("button",{onClick:function(){return i.push("/home")},children:"voltar"})}),Object(n.jsxs)("div",{className:"border-center row d-flex",children:[Object(n.jsxs)("div",{className:"content-item",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h1",{children:null===o||void 0===o?void 0:o.title.toUpperCase()})}),Object(n.jsx)("div",{className:"studio",children:Object(n.jsxs)("span",{children:["(",null===o||void 0===o?void 0:o.studio,")"]})}),Object(n.jsx)("div",{className:"mt-1",children:Object(n.jsxs)("span",{children:["Estreado: ",null===o||void 0===o?void 0:o.release]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["Dura\xe7\xe3o: ",null===o||void 0===o?void 0:o.duration]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["Autor: ",null===o||void 0===o?void 0:o.author]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["G\xeanero: ",null===o||void 0===o?void 0:o.genere]})}),Object(n.jsx)("div",{className:"text-yellow",children:Object(n.jsxs)("span",{children:["Nota: ",null===o||void 0===o?void 0:o.imdb]})}),Object(n.jsx)("div",{className:"text-shadow-light-blue",children:Object(n.jsxs)("p",{children:["Sinopse: ",null===o||void 0===o?void 0:o.synopsis]})}),Object(n.jsx)("div",{className:"filme"===(null===o||void 0===o?void 0:o.category)?"mt-2":"collapsed",children:Object(n.jsx)("button",{onClick:function(){return w()},children:"Assistir filme"})})]}),Object(n.jsx)("div",{className:"hide-mobile picture-item",children:Object(n.jsx)("img",{src:N(o),alt:null===o||void 0===o?void 0:o.name})})]}),Object(n.jsx)("div",{className:"lastcontent",children:Object(n.jsxs)("div",{className:"content d-block d-col",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:["TRAILER ",null===o||void 0===o||null===(t=o.title)||void 0===t?void 0:t.toUpperCase()]})}),Object(n.jsx)("div",{children:Object(n.jsx)("iframe",{className:"trailer",src:"https://www.youtube-nocookie.com/embed/".concat(null===o||void 0===o?void 0:o.trailer,"?rel=0&modestbranding=1&showinfo=0&autoplay=1"),frameborder:"0",allow:"picture-in-picture; paused",allowfullscreen:!0})}),Object(n.jsx)("div",{className:"text-shadow-light-blue",children:Object(n.jsx)("p",{children:null===o||void 0===o?void 0:o.plot})}),Object(n.jsxs)("div",{className:"mt-1 text-shadow-light-blue",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:["Classifica\xe7\xe3o: ",null===o||void 0===o?void 0:o.classifBR]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:["Or\xe7amento: ",null===o||void 0===o?void 0:o.budget]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("strong",{children:[" Bilheteria: ",null===o||void 0===o?void 0:o.ticketgain]})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===o||void 0===o?void 0:o.releaseCinemaBr})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===o||void 0===o?void 0:o.releaseDigital})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:null===o||void 0===o?void 0:o.releaseDvD})})]})]})})]})]})}function f(e){var t=Object(v.a)(e.contexWindowModal,2),i=t[0],s=t[1];return Object(n.jsxs)("div",{className:"modal",onClick:function(){return s(!i)},children:[Object(n.jsx)("div",{className:"row bg-dark-blue",children:Object(n.jsx)("span",{children:"MODO DE REPRODU\xc7\xc3O DE VIDEO"})}),Object(n.jsxs)("div",{className:"choose-url",children:[Object(n.jsx)("button",{className:e.movieContext.url1?"bg-green":"bg-gray",disabled:!e.movieContext.url1,onClick:function(){return e.selectMovie("assistir/"+e.movieContext.url1)},children:"Player #1\ud83c\udf9e"}),Object(n.jsx)("button",{className:"bg-gray",disabled:!0,onClick:function(){return e.selectMovie(e.movieContext.url2)},children:"Player #2\ud83c\udf9e"}),Object(n.jsx)("button",{className:e.movieContext.url?"bg-green":"bg-gray",disabled:!e.movieContext.url,onClick:function(){return e.selectMovie(e.movieContext.url)},children:"Magnet Player\ud83e\uddf2"})]})]})}function w(e){var t,i,c,l=Object(s.useState)(!1),o=Object(v.a)(l,2),r=o[0],d=o[1];return Object(n.jsxs)("div",{className:"cover",onClick:function(){return e.onClick()},onMouseOver:function(){return d(!0)},onMouseOut:function(){return d(!1)},children:[Object(n.jsx)("img",{alt:"Capa do filme "+e.movie.name,src:(c=e.movie,(c.urlImg3&&!e.isImgLow?c.urlImg3:c.urlImg2&&!e.isImgLow?c.urlImg2:c.urlImg)||"./load.svg")}),e.seeImdb?Object(n.jsxs)("span",{className:"hide-mobile",children:["IMDb: ",e.movie.imdb]}):"",Object(n.jsxs)("div",{className:"".concat(r?"tooltip-synopsis":"collapsed"),children:[Object(n.jsx)("h2",{children:Object(n.jsx)(a.b,{to:"/"+function(e){return(null===e||void 0===e?void 0:e.url2)?e.url2:(null===e||void 0===e?void 0:e.url1)?e.url1:null===e||void 0===e?void 0:e.url}(e.movie),children:(null===(t=e.movie)||void 0===t?void 0:t.title)||(null===(i=e.movie)||void 0===i?void 0:i.name)})}),Object(n.jsx)("p",{children:e.movie.synopsis})]})]})}function N(e){return Object(n.jsxs)("footer",{className:"footer w-100 hide-mobile",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h3",{className:"mr-1",children:"Assistir filme"}),"-",Object(n.jsx)("h3",{className:"ml-1 mr-1",children:"Filme dublado"}),"-"]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h3",{className:"mr-1",children:"Assistir filme online"}),"-",Object(n.jsx)("h3",{className:"ml-1 mr-1",children:"Filme dublado online"})]})]})}var y=i.p+"static/media/logo.4efd7191.png";function k(e){return Object(n.jsxs)("div",{className:"load-component d-col",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("img",{className:"logo",alt:"logo",src:y})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("span",{children:"Loading..."})})]})}var C=["Anima\xe7\xe3o","A\xe7\xe3o","Aventura","Com\xe9dia","Crime","Drama","Document\xe1rio","Fam\xedlia","Fantasia","Faroeste","Fic\xe7\xe3o Cient\xedfica","Guerra","Hist\xf3ria","Kids","Musical","Pol\xedtica","Reality-TV","Romance","Suspense","Terror"];function I(e){var t=Object(v.a)(e.context,2),i=t[0],s=t[1],c=Object(v.a)(e.contextExpanded,2),l=c[0],o=c[1],a=Object(v.a)(e.contextLoad,2),r=a[0],d=a[1],j=Object(v.a)(e.contextArrive,2),b=j[0],O=j[1];function h(){return(h=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!1),setTimeout((function(){return d(!1)}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){s(e),o(t),d(!0),function(){h.apply(this,arguments)}(),window.scrollTo(0,0),console.log(i+l+r+b)}return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("h3",{className:"text-red bold row",children:"CATEGORIAS"}),C.map((function(e){return Object(n.jsx)("button",{onClick:function(){return x(e,!1)},children:e})}))]})}function S(e){var t=Object(s.useState)(!1),i=Object(v.a)(t,2),c=i[0],l=i[1],o=Object(s.useState)(""),r=Object(v.a)(o,2),d=r[0],j=r[1],b=Object(s.useState)(!1),h=Object(v.a)(b,2),x=h[0],p=h[1],g=Object(s.useState)([]),f=Object(v.a)(g,2),w=f[0],N=f[1],k=Object(v.a)(e.context,2),C=k[0],S=k[1],E=Object(v.a)(e.contextLoad,2),T=E[0],R=E[1],F=Object(v.a)(e.contextArrive,2),D=F[0],M=F[1];function A(){return(A=Object(m.a)(u.a.mark((function e(t,i){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.post("/movies/get-by-name",{name:t,category:i}).then((function(e){N(e.data)})).catch((function(e){console.log(e),console.log(T,D)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(!1),setTimeout((function(){return R(!1)}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"box-shadow mobile-nav",children:[Object(n.jsxs)("div",{className:"navbar",onClick:function(){return N([])},children:[Object(n.jsx)("div",{className:d.length>0?"search-box":"collapsed",children:null===w||void 0===w?void 0:w.map((function(t){return Object(n.jsxs)("div",{className:"search-row",onClick:function(){return e.chooseUrlFunc(t)},children:[Object(n.jsx)("span",{children:t.name}),Object(n.jsx)("img",{alt:t.name,src:t.urlImg})]})}))}),Object(n.jsx)("div",{className:"search-mobile",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("button",{className:"w-3",onClick:function(){return l(!c)},children:"\u2630"}),Object(n.jsx)(a.b,{className:"hide-mobile centered cursor-pointer",to:"/",children:Object(n.jsx)("img",{className:"logo",alt:"logo",src:y})})]})}),Object(n.jsxs)("div",{className:"w-50 mt-05 d-flex",children:[Object(n.jsx)("input",{className:x?"":"collapsed",placeholder:"Pesquisar por todo site",onChange:function(e){""!==e.target.value?(!function(e,t){A.apply(this,arguments)}(e.target.value,C),j(e.target.value)):(N([]),p(!1),j(""))}}),Object(n.jsx)("button",{className:x?"collapsed":"mobile-lupa",onClick:function(){return p(!0)},children:"\u2315"})]}),Object(n.jsx)("div",{className:"w-25 mt-05 d-flex",children:Object(n.jsxs)("select",{onChange:function(e){S(e.target.value),R(!0),function(){L.apply(this,arguments)}(),window.scrollTo(0,0)},children:[Object(n.jsx)("option",{value:"",children:"Todos"}),Object(n.jsx)("option",{value:"filme",children:"Filmes"}),Object(n.jsx)("option",{value:"serie",children:"Series"})]})}),Object(n.jsx)("div",{})]}),c?Object(n.jsx)(I,{contextArrive:e.contextArrive,contextLoad:e.contextLoad,context:e.contextSidebar,contextExpanded:[c,l]}):""]})}function E(e){return Object(n.jsx)("div",{className:"pager",children:e.children})}function T(e){var t,i,c,l=Object(s.useState)([]),o=Object(v.a)(l,2),a=o[0],d=o[1],j=Object(s.useState)(),b=Object(v.a)(j,2),x=b[0],p=b[1],g=Object(s.useState)(!1),y=Object(v.a)(g,2),C=y[0],I=y[1],T=Object(s.useState)(),R=Object(v.a)(T,2),F=R[0],D=R[1],M=Object(s.useState)(!1),A=Object(v.a)(M,2),L=A[0],B=A[1],_=Object(s.useState)([]),P=Object(v.a)(_,2),U=P[0],q=P[1],J=Object(s.useState)(0),V=Object(v.a)(J,2),H=V[0],W=V[1],G=Object(s.useState)(0),K=Object(v.a)(G,2),X=K[0],z=K[1],Q=Object(s.useState)(0),Y=Object(v.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(s.useState)(5),te=Object(v.a)(ee,2),ie=te[0],ne=te[1],se=Object(s.useState)(""),ce=Object(v.a)(se,2),le=ce[0],oe=ce[1],ae=Object(s.useState)(""),re=Object(v.a)(ae,2),de=re[0],je=re[1],ue=Object(s.useState)(!0),be=Object(v.a)(ue,2),me=be[0],ve=be[1],Oe=new Array(900).fill(0),he=Object(r.f)();function xe(e,t,i){return pe.apply(this,arguments)}function pe(){return(pe=Object(m.a)(u.a.mark((function e(t,i,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.post("/movies/get15",{skip:t,category:i,genere:n}).then((function(e){d(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return fe.apply(this,arguments)}function fe(){return(fe=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve(!1),setTimeout((function(){return B(!1)}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return(we=Object(m.a)(u.a.mark((function e(t,i){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.post("/movies/get3-carrossel",{category:t,genere:i}).then((function(e){q(e.data),D(e.data[1])})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne=function(e){return"border ml-1 ".concat(X===e?"bg-yellow":"bg-dark-blue")},ye=function(e){B(!0),ge(),window.scrollTo(0,0),e<=Z&&Z-1>-1&&($(Z-1),ne(ie-1)),e>=ie-1&&ie+5<Oe.length&&($(e-2),ne(e+3));var t=15*e;z(e),W(t),xe(t,le,de)};function ke(e){I(!0),p(e),localStorage.setItem("currentMovie",JSON.stringify(e))}function Ce(e){return(null===e||void 0===e?void 0:e.urlImg3)?e.urlImg3:(null===e||void 0===e?void 0:e.urlImg2)?e.urlImg2:null===e||void 0===e?void 0:e.urlImg}return Object(s.useEffect)((function(){!function(e,t){we.apply(this,arguments)}(le,de),xe(H,le,de),Object.entries(document.getElementsByTagName("iframe")).map((function(e){e[1].remove()}))}),[H,le,de]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)("title",{children:"NiceFilmes - Assistir filmes e s\xe9ries online"}),Object(n.jsx)("meta",{name:"description",content:"NiceFilmes. Mais de 16 mil titulos dispon\xedveis via torrent ou player. Downloads e streamings"}),Object(n.jsx)("meta",{property:"og:title",content:"NiceFilmes"}),Object(n.jsx)("meta",{property:"og:url",content:"http://www.nicefilmes.net/"})]}),C&&x?Object(n.jsx)(f,{contexWindowModal:[C,I],movieContext:x,selectMovie:function(e){"undefined"!==e&&(B(!0),ge(),setTimeout((function(){return he.push(e)}),800))}}):"",L?Object(n.jsx)(k,{}):"",Object(n.jsx)(S,{chooseUrlFunc:ke,contextArrive:[me,ve],contextLoad:[L,B],context:[le,oe],contextSidebar:[de,je]}),Object(n.jsxs)("div",{id:"description",className:"hide-mobile hide-pc",children:[Object(n.jsx)("h1",{children:"Onde assistir filmes e temporadas?"}),Object(n.jsx)("p",{children:"Temos os melhores filmes j\xe1 lan\xe7ados em toda hist\xf3ria do cinema."}),Object(n.jsx)("h2",{children:"Assistir filmes e series?"}),Object(n.jsx)("p",{children:"Temos todas as temporadas da sua serie preferida. www.nicefilmes.net"})]}),window.innerWidth>400?Object(n.jsxs)("div",{className:"imgs-home",children:[Object(n.jsx)("img",{src:Ce(U[0])||"./load3.svg",alt:"Filme "+(null===(t=U[0])||void 0===t?void 0:t.name),onClick:function(){return ke(U[0])}}),Object(n.jsx)("img",{src:Ce(U[1])||"./load3.svg",alt:"Filme "+(null===(i=U[1])||void 0===i?void 0:i.name),onClick:function(){return ke(U[1])}}),Object(n.jsx)("img",{src:Ce(U[2])||"./load3.svg",alt:"Filme "+(null===(c=U[2])||void 0===c?void 0:c.name),onClick:function(){return ke(U[2])}})]}):Object(n.jsx)("div",{className:"primary-movie",children:Object(n.jsx)("img",{src:Ce(U[1])||"./load3.svg",alt:null===F||void 0===F?void 0:F.name,onClick:function(){return ke(U[1])}})}),me?Object(n.jsxs)(E,{children:[Object(n.jsx)("h1",{className:"text-shadow-light-blue ml-1",children:"Filmes lan\xe7amentos em 2020"}),0===a.length?Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"})]}):"",Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(0,5).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsx)("h2",{className:"text-shadow-light-blue ml-1",children:"Series online em 2020"}),0===a.length?Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"})]}):"",Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(5,10).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsx)("h2",{className:"text-shadow-light-blue ml-1",children:"Os 5 filmes mais assistidos em 2020"}),0===a.length?Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"})]}):"",Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(10,15).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsx)("h2",{className:"text-shadow-light-blue ml-1",children:"Outros titulos relacionados"}),0===a.length?Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"})]}):"",Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(15,20).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsx)("div",{className:"hide-mobile row mt-1 pager-buttons",children:Object(n.jsxs)("div",{className:"pager-bt w-25 d-flex",children:[Oe.slice(Z,ie).map((function(e,t){return Object(n.jsx)("button",{className:Ne(t+Z),onClick:function(){return ye(t+Z)},children:t+Z+1})})),Object(n.jsx)("button",{className:Ne(-1),disabled:!0,children:"[...]"}),Object(n.jsx)("button",{className:Ne(-1),onClick:function(){return ye(ie+4)},children:5+ie})]})}),Object(n.jsx)(N,{})]}):Object(n.jsxs)(E,{children:[Object(n.jsxs)("h3",{className:"text-shadow-light-blue ml-1",children:["Encontrados : ",le&&de?le+"s de "+de.toLocaleLowerCase():de," "]}),0===a.length?Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"}),Object(n.jsx)("img",{src:"./load3.svg",alt:"svg loading"})]}):"",Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(20,25).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(25,30).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsxs)("div",{className:"row-pager",children:[Object(n.jsx)("span",{className:"hide-pc",children:"........................................................"}),null===a||void 0===a?void 0:a.slice(30,35).map((function(e){return Object(n.jsx)(w,{isImgLow:!0,seeImdb:!0,movie:e,onClick:function(){return ke(e)}})}))]}),Object(n.jsx)("div",{className:"hide-mobile row mt-1 pager-buttons",children:Object(n.jsxs)("div",{className:"pager-bt w-25 d-flex",children:[Oe.slice(Z,ie).map((function(e,t){return Object(n.jsx)("button",{className:Ne(t+Z),onClick:function(){return ye(t+Z)},children:t+Z+1})})),Object(n.jsx)("button",{className:Ne(-1),disabled:!0,children:"[...]"}),Object(n.jsx)("button",{className:Ne(-1),onClick:function(){return ye(ie+4)},children:5+ie})]})}),Object(n.jsx)(N,{})]})]})}function R(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)(r.c,{children:[Object(n.jsx)(r.a,{exact:!0,path:"/",component:T}),Object(n.jsx)(r.a,{exact:!0,path:"/home",component:T}),Object(n.jsx)(r.a,{exact:!0,path:"/:url",component:x}),Object(n.jsx)(r.a,{exact:!0,path:"/assistir/:url1",component:g})]})})}o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c9451de8.chunk.js.map