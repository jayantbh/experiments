(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{254:function(e,t,n){"use strict";n.r(t);var a=n(124),i=n.n(a),r=n(0),l=n.n(r),c=n(270),o=n(272),s=function(e){var t=Object(r.useRef)();return Object(r.useEffect)(function(){t.current=e}),t.current||{}},m=n(253),u=n.n(m),f={height:"100px",width:"100px",left:"200px"},d={height:"200px",width:"200px",left:"-200px"},h=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=t[0],a=t[1],c=Object(r.useCallback)(function(){return a(!n)},[n]);return function(e,t){var n=Object(r.useState)(null),a=n[0],i=n[1],l=s({animated:t}).animated;Object(r.useLayoutEffect)(function(){if(t!==l&&e&&e.current){var n=e.current,r=a,c=n.getBoundingClientRect();if(i(n.getBoundingClientRect()),r&&c){var o=r.left-c.left,s=r.top-c.top,m=r.width/c.width,u=r.height/c.height;n.animate([{transformOrigin:"top left",transform:"translate("+o+"px, "+s+"px) scale("+m+", "+u+")"},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-in-out",fill:"both"})}}},[e,t,l,a])}(e,n),l.a.createElement("div",{className:u.a.container,onClick:c},l.a.createElement("h2",null,"Without child transitions handling"),l.a.createElement("div",{className:u.a["element-wrapper"]},l.a.createElement("div",{ref:e,className:u.a["element-common-styles"],style:n?f:d},"FLIP")),l.a.createElement("div",{className:u.a["element-wrapper"]},l.a.createElement("div",{className:i()(u.a["element-common-styles"],u.a["non-flip"]),style:n?f:d},"Non-FLIP")))},p=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=t[0],a=t[1],c=Object(r.useCallback)(function(){return a(!n)},[n]);return function(e,t){var n=Object(r.useState)(null),a=n[0],i=n[1],l=Object(r.useState)(null),c=l[0],o=l[1],m=s({animated:t}).animated;Object(r.useLayoutEffect)(function(){if(t!==m&&e&&e.current){var n=e.current,r=e.current.querySelector("div");if(r){var l=a,s=n.getBoundingClientRect(),u=c,f=r.getBoundingClientRect();if(i(n.getBoundingClientRect()),o(r.getBoundingClientRect()),l&&s&&u&&f){var d=l.left-s.left,h=l.top-s.top,p=l.width/s.width,g=l.height/s.height,v=s.width/l.width,E=s.height/l.height;n.animate([{transformOrigin:"top left",transform:"translate("+d+"px, "+h+"px) scale("+p+", "+g+")"},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-in-out",fill:"both"}),r.animate([{transformOrigin:"center",transform:"scale("+v+", "+E+")"},{transformOrigin:"center",transform:"none"}],{duration:300,easing:"ease-in-out",fill:"both"})}}}},[e,t,m,a,c])}(e,n),l.a.createElement("div",{className:u.a.container,onClick:c},l.a.createElement("h2",null,"With child transitions handling"),l.a.createElement("div",{className:u.a["element-wrapper"]},l.a.createElement("div",{ref:e,className:u.a["element-common-styles"],style:n?f:d},l.a.createElement("div",null,"FLIP"))),l.a.createElement("div",{className:u.a["element-wrapper"]},l.a.createElement("div",{className:i()(u.a["element-common-styles"],u.a["non-flip"]),style:n?f:d},l.a.createElement("div",null,"Non-FLIP"))))},g=function(e){var t=e.location;return l.a.createElement(c.d,{location:t},l.a.createElement(c.b,{path:"/route-1",component:h}),l.a.createElement(c.b,{path:"/route-2",component:p}),l.a.createElement(c.a,{to:"/route-1"}))},v=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(r.useEffect)(function(){n(!0)},[]),t?l.a.createElement(o.a,null,l.a.createElement("div",{className:u.a.container},l.a.createElement("div",{className:u.a.navigation},l.a.createElement(o.b,{to:"/route-1",activeClassName:u.a.active},"FLIP w/o Children"),l.a.createElement(o.b,{to:"/route-2",activeClassName:u.a.active},"FLIP w/ Children")),l.a.createElement("h2",null,"Click to toggle animation state"),l.a.createElement(c.b,{path:"/",component:g}))):l.a.createElement(l.a.Fragment,null)};n.d(t,"frontmatter",function(){return E});t.default=v;var E={title:"FLIP Animation Technique",description:"An example with first-last-invert-play animation technique",categories:["css","animations","flip","transitions","transform"]}}}]);
//# sourceMappingURL=component---src-pages-experiments-flip-animation-technique-tsx-c9367aa22ed48449725c.js.map