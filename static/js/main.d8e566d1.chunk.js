(this["webpackJsonpip-app"]=this["webpackJsonpip-app"]||[]).push([[0],{14:function(t,e,a){t.exports={narrow:"App_narrow__SiuTA",title:"App_title__Zi-KC",st0:"App_st0__1aPOG"}},18:function(t,e,a){t.exports={result:"Result_result__NtMLz",flag:"Result_flag__3qdat"}},25:function(t,e,a){t.exports={marker:"Map_marker__3TXMr"}},26:function(t,e,a){t.exports={search:"Search_search__DeuRc"}},27:function(t,e,a){t.exports={examples:"Examples_examples__1-80J"}},34:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),i=(a(34),a(8)),o=a.n(i),u=a(9),l=a(10),p=a(3),d=a(14),j=a.n(d),h=a(4),b=function(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",viewBox:"-30 20 107 122.88",width:"7%",children:Object(h.jsx)("g",{children:Object(h.jsx)("path",{className:j.a.st0,d:"M90.73,63.42c-3.11,15.04-10.8,30.33-22.18,42.8l-0.03,0.05c-5.6,6.12-12.09,11.61-19.42,16.06 c-0.88,0.66-2.13,0.75-3.13,0.11c-10.8-6.87-19.85-15.13-26.99-24.09C9.15,86.02,2.94,72.34,0.83,59.16 c-2.15-13.36-0.14-26.2,6.51-36.68c2.63-4.13,5.97-7.89,10.07-11.14C26.78,3.88,37.51-0.07,48.17,0 c10.28,0.09,20.42,3.9,29.22,11.93c3.09,2.81,5.67,5.99,7.78,9.48C92.32,33.18,93.86,48.22,90.73,63.42L90.73,63.42z M29.21,31.63 h8.91v28.73h-8.91V31.63L29.21,31.63z M42.98,31.63h14.77c3.22,0,5.63,0.76,7.23,2.29c1.6,1.53,2.4,3.71,2.4,6.54 c0,2.9-0.88,5.18-2.62,6.81c-1.75,1.64-4.41,2.45-8,2.45h-4.87v10.63h-8.91V31.63L42.98,31.63z M51.89,43.91h2.19 c1.73,0,2.94-0.3,3.63-0.9c0.7-0.6,1.04-1.36,1.04-2.29c0-0.9-0.3-1.66-0.91-2.29c-0.6-0.63-1.74-0.94-3.41-0.94h-2.54V43.91 L51.89,43.91z M46.13,13.25c9.23,0,17.62,3.75,23.65,9.81c6.06,6.06,9.81,14.41,9.81,23.65c0,9.23-3.75,17.62-9.81,23.65 c-6.06,6.06-14.41,9.81-23.65,9.81c-9.23,0-17.62-3.75-23.65-9.81c-6.06-6.06-9.81-14.41-9.81-23.65c0-9.23,3.75-17.61,9.81-23.65 C28.55,17,36.89,13.25,46.13,13.25L46.13,13.25L46.13,13.25z"})})})},f=a(21),x=a(25),O=a.n(x);a(40);var m=function(t){var e=Object(n.useState)({width:"100%",height:450}),a=Object(p.a)(e,2),c=a[0],r=a[1];Object(n.useEffect)((function(){r((function(e){return Object(u.a)(Object(u.a)({},e),{},{latitude:t.location.latitude,longitude:t.location.longitude,zoom:9})}))}),[t.location]);var s=Object(n.useCallback)((function(){return Object(h.jsxs)(f.a,{longitude:t.location.longitude,latitude:t.location.latitude,children:[Object(h.jsx)("div",{className:O.a.marker})," ",Object(h.jsx)("b",{children:t.ip})]})}),[t.location,t.ip]);return Object(h.jsx)(f.b,Object(u.a)(Object(u.a)({mapStyle:"mapbox://styles/mapbox/outdoors-v9",mapboxApiAccessToken:"pk.eyJ1IjoiemFidGFuaSIsImEiOiJja3NicXZjaW4wOTR3MnZxcTFkbWc0OWsxIn0.FMBuaDyD8jhKrhAVAzrJyQ"},c),{},{onViewportChange:function(t){return r(t)},children:s()}))},y=a(18),v=a.n(y),g=function(t){return Object(h.jsxs)("div",{className:v.a.resultsSections,children:[Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:v.a.result,children:[Object(h.jsxs)("h2",{children:["Results for",t.data.isDataOfClient?" Your":" Searched"," IP:"," ",t.data.ip]}),Object(h.jsxs)("h3",{children:[t.data.city," - ",t.data.country]}),Object(h.jsx)("img",{className:v.a.flag,alt:t.data.country,src:t.data.flag}),Object(h.jsx)("img",{alt:t.data.country,src:t.data.img})]})}),Object(h.jsx)("section",{children:t.data.ready&&Object(h.jsx)(m,{ip:t.data.ip,location:{latitude:t.data.location.latitude,longitude:t.data.location.longitude}})})]})},w=a(26),_=a.n(w),k=c.a.forwardRef((function(t,e){return Object(h.jsxs)("div",{className:_.a.search,children:[Object(h.jsx)("input",{id:"ip",type:"text",placeholder:"type IP here...",ref:e}),Object(h.jsx)("label",{htmlFor:"ip",children:" type something like: 8.209.36.0 "}),Object(h.jsx)("button",{type:"button",onClick:t.search,children:"Search"})]})})),C=a(27),N=a.n(C),S=function(t){return Object(h.jsx)("div",{className:N.a.examples,children:[{state:"Uruguay",ip:"200.108.241.198"},{state:"Norway",ip:"92.42.70.36"},{state:"Italy",ip:"2.16.135.255"},{state:"Japan",ip:"1.21.255.255"},{state:"Germany",ip:"2.16.23.0"},{state:"Sweden",ip:"2.16.66.0"}].map((function(e){return Object(h.jsx)("button",{type:"button",onClick:t.fetchExample.bind(undefined,e.ip,!1),children:"".concat(e.ip," (").concat(e.state,")")},e.state)}))})},I=a(28),E=Object(I.a)({accessKey:"0oJhi_V8eHNlNtyOLjykytXjPWxFd79JZ7FWUduq0vk"}),L=function(){var t=Object(l.a)(o.a.mark((function t(e){var a,n,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a={error:!1,data:null},t.prev=1,!(e.toString().length>20)){t.next=4;break}throw new Error("mobile");case 4:return t.next=6,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=8d8e8d860b914ac78cda85b380926ccb&ip=".concat(e));case 6:return n=t.sent,t.next=9,n.json();case 9:if((c=t.sent).country_name){t.next=12;break}throw new Error;case 12:return t.next=14,M(c.country_name);case 14:r=t.sent,console.log(c),a.data={flag:c.country_flag,img:r,city:c.city,country:c.country_name,location:{latitude:1*c.latitude,longitude:1*c.longitude}},t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),a.error="mobile"===t.t0?"App support PC IP only. Enjoy!":"Sorry,no results fot this IP address.";case 22:return t.prev=22,t.abrupt("return",a);case 25:case"end":return t.stop()}}),t,null,[[1,19,22,25]])})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(l.a)(o.a.mark((function t(e){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.search.getPhotos({query:e});case 3:n=t.sent,a=n.response.results[0].urls.small,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a="https://www.globe.gov/o/gov.globe.home.explorelearnearth.web/images/learn-earth-system-clean.png";case 10:return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.cloudflare.com/cdn-cgi/trace");case 2:return e=t.sent,t.next=5,e.text();case 5:return a=t.sent,n=/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/,a=a.match(n)[0],t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J={country:null,ip:null,isDataOfClient:!1,ready:null};var P=function(){var t=Object(n.useState)(J),e=Object(p.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(!1),s=Object(p.a)(r,2),i=s[0],d=s[1],f=Object(n.useRef)(),x=Object(n.useCallback)(function(){var t=Object(l.a)(o.a.mark((function t(e,a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(),d(!1),t.next=4,L(e);case 4:(n=t.sent).error?(c(J),d(n.error)):c((function(t){return Object(u.a)(Object(u.a)({},t),{},{ready:!0,ip:e,isDataOfClient:a},n.data)}));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[]),O=function(){f.current.value=""};return Object(n.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:e=t.sent,x(e,!0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[x]),Object(h.jsxs)("div",{className:j.a.app,children:[Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{className:j.a.title,children:[Object(h.jsx)("h1",{children:"Check that "})," ",Object(h.jsx)(b,{})]}),Object(h.jsx)(k,{search:function(){x(f.current.value,!1)},ref:f}),Object(h.jsx)(S,{fetchExample:x})]}),a.ready?Object(h.jsx)(g,{data:a}):Object(h.jsx)("section",{children:i||"Loading IP Data.."})]})};s.a.render(Object(h.jsx)(P,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d8e566d1.chunk.js.map