(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{257:function(e,t,n){"use strict";n.r(t);var a=n(124),c=n.n(a),o=n(0),r=n.n(o),l=n(251),i=n.n(l),u=null,s=null,h=["hsl(205, 67%, 45%)","hsl(205, 74%, 65%)","hsl(29, 80%, 44%)","hsl(48, 95%, 76%)","hsl(209, 34%, 30%)","hsl(211, 27%, 70%)","hsl(185, 81%, 29%)","hsl(184, 65%, 59%)","hsl(360, 72%, 38%)","hsl(360, 77%, 78%)","hsl(166, 72%, 28%)","hsl(158, 58%, 62%)","#F0F0F0","#A4A4A4","#000","#fff"],f=function(e,t){if(Object(e).hasOwnProperty("clientX")&&Object(e).hasOwnProperty("clientY")){var n=e;return{x:n.clientX-t.left,y:n.clientY-t.top}}if(Object(e).hasOwnProperty("touches")){var a=e;return{x:a.touches[0].clientX-t.left,y:a.touches[0].clientY-t.top}}return{x:-1/0,y:-1/0}},v=function(e,t,n){e.beginPath(),e.lineWidth=3,e.moveTo(t,n)},b=function(e,t,n){e.lineTo(t,n),e.stroke()},d=function(e){var t=e.clientWidth,n=e.clientHeight;e.width===t&&e.height===n||(e.width=t,e.height=n)},m=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],a=Object(o.useState)(0),l=a[0],m=a[1],w=Object(o.useRef)(null),p=Object(o.useCallback)(function(e){if(t||(s=null),w&&w.current&&t){var n=w.current;u&&cancelAnimationFrame(u);var a=n.getBoundingClientRect(),c=f(e,a),o=c.x,r=c.y;u=requestAnimationFrame(function(){var e=n.getContext("2d");e&&(d(n),e.strokeStyle=h[l],v(e,o,r),s?(b(e,s.x,s.y),s={x:o,y:r}):s={x:o,y:r})})}},[w,t]),y=Object(o.useCallback)(function(e){var t=1===e.buttons;n(t)},[]),O=Object(o.useCallback)(function(e){requestAnimationFrame(function(){s=null}),n(!0)},[]),k=Object(o.useCallback)(function(e){n(!1),requestAnimationFrame(function(){s=null})},[]),j=Object(o.useCallback)(function(e){return function(){m(e)}},[]);return r.a.createElement("div",{className:i.a.container},r.a.createElement("canvas",{ref:w,className:i.a.canvas,onMouseMove:p,onMouseUp:y,onMouseDown:y,onTouchStart:O,onTouchEnd:k,onTouchMove:p}),r.a.createElement("div",{className:i.a["color-palette"]},h.map(function(e,t){return r.a.createElement("div",{key:e,className:c()(i.a.color,t===l&&i.a["active-color"]),onMouseUp:j(t),style:{backgroundColor:e}})})))};n.d(t,"frontmatter",function(){return w});t.default=m;var w={title:"Canvas Draw",description:"Pick a color, and draw on a canvas with your mouse or touch.",categories:["canvas","2d","draw"]}}}]);
//# sourceMappingURL=component---src-pages-experiments-canvas-draw-tsx-bb27fc572b0d34d9a9e6.js.map