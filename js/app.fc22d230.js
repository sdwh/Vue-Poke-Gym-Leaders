(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5f2b4023"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"2d99b8d7"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){s=b[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07ff":function(e,t,n){"use strict";n("c5c4")},4267:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["f"])("Home"),c=Object(r["f"])("Gen 1"),u=Object(r["f"])("Let's Go"),i=Object(r["f"])("Let's Go 2nd"),s={class:"mt-5 d-inline-block w-100"},l=Object(r["f"])(" Designed By "),b=Object(r["e"])("a",{target:"_blank",href:"https://sdwh.dev"},"sdwh.dev",-1),f=Object(r["e"])("br",null,null,-1),d=Object(r["f"])(" Pokémon Images & Data Copyright From "),p=Object(r["e"])("a",{target:"_blank",href:"https://bulbapedia.bulbagarden.net/wiki/Gym_Leader"},"bulbagarden",-1),m=Object(r["f"])(" & "),h=Object(r["e"])("a",{target:"_blank",href:"https://pokemondb.net/"},"Pokémon Database",-1),O=Object(r["f"])(),g=Object(r["e"])("br",null,null,-1);function j(e,t){var n=Object(r["x"])("router-link"),j=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/",class:Object(r["m"])(["btn btn-secondary me-2",{"btn-primary":!0}])},{default:Object(r["C"])((function(){return[a]})),_:1}),Object(r["g"])(n,{to:"/Generation1",class:"btn btn-secondary me-2"},{default:Object(r["C"])((function(){return[c]})),_:1}),Object(r["g"])(n,{to:"/Letsgo",class:"btn btn-secondary me-2 mt-3 mt-md-0"},{default:Object(r["C"])((function(){return[u]})),_:1}),Object(r["g"])(n,{to:"/Letsgo2nd",class:"btn btn-secondary me-2 mt-3 mt-md-0"},{default:Object(r["C"])((function(){return[i]})),_:1})]),Object(r["g"])(j),Object(r["e"])("footer",s,[l,b,f,d,p,m,h,O,g,Object(r["f"])(" All Pokémon images & names © 1995-"+Object(r["z"])((new Date).getFullYear())+" Nintendo/Game Freak. ",1)])],64)}n("924e");var v=n("6b0d"),y=n.n(v);const w={},k=y()(w,[["render",j]]);var _=k,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P=n("ae63"),G=n.n(P),C=function(e){return Object(r["t"])("data-v-2e7f4334"),e=e(),Object(r["r"])(),e},x=C((function(){return Object(r["e"])("div",{class:"home"},[Object(r["e"])("img",{alt:"Home Logo",src:G.a})],-1)})),E=C((function(){return Object(r["e"])("h1",{class:"mt-3 display-5 font-bolder fw-bolder m-auto"}," Gym Leaders And Their Happy Partners. ",-1)}));function S(e,t,n,o,a,c){return Object(r["q"])(),Object(r["d"])(r["a"],null,[x,E],64)}var A={name:"Home"};n("07ff");const T=y()(A,[["render",S],["__scopeId","data-v-2e7f4334"]]);var D=T,H=[{path:"/",name:"Home",component:D},{path:"/Generation1",name:"Generation1",component:function(){return n.e("about").then(n.bind(null,"00d3"))}},{path:"/LetsGo",name:"LetsGo",component:function(){return n.e("about").then(n.bind(null,"3e1e"))}},{path:"/LetsGo2nd",name:"LetsGo2nd",component:function(){return n.e("about").then(n.bind(null,"64ec"))}}],N=Object(L["a"])({history:Object(L["b"])(),routes:H}),B=N;Object(r["c"])(_).use(B).mount("#app")},"924e":function(e,t,n){"use strict";n("4267")},ae63:function(e,t,n){e.exports=n.p+"img/Blue.ef44d34b.png"},c5c4:function(e,t,n){}});
//# sourceMappingURL=app.fc22d230.js.map