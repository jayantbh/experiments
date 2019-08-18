(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(e,t,a){"use strict";a.r(t);var n=a(124),r=a.n(n),o=a(96),l=a(0),c=a.n(l),i=a(268),s=a(438);var u=a(246),m=a.n(u),p=function(e,t,a){Object(l.useEffect)(function(){var a=setInterval(e,t);return function(){return clearInterval(a)}},a)},h={type:"spring",damping:20,stiffness:300},d=function(){var e=Object(l.useState)(f),t=e[0],a=e[1];return p(function(){return a(function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return[].concat(e)}(t))},1500,[t]),l.createElement("ul",{className:m.a["tiles-container"]},t.map(function(e){return l.createElement(o.b.li,{key:e,layoutTransition:h,style:{background:e},className:m.a["color-tile"]})}))},f=["#FF008C","#D309E1","#9C1AFF","#7700FF"],E=function(e){var t=e.location;return c.a.createElement(o.a,{initial:!1,exitBeforeEnter:!1},c.a.createElement(o.b.div,{key:t?t.pathname:"no-location",className:m.a["routes-wrapper"],initial:{clipPath:"circle(calc(0% - 80px) at top center)",zIndex:0},animate:{clipPath:"circle(calc(100% - 80px) at top center)",zIndex:1},exit:{clipPath:"circle(calc(100.1% - 80px) at top center)",zIndex:0},transition:{duration:1,ease:"easeOut"}},c.a.createElement(i.d,{location:t},c.a.createElement(i.b,{path:"/route-1",component:v}),c.a.createElement(i.b,{path:"/route-2",component:b}),c.a.createElement(i.b,{path:"/route-3",component:w}),c.a.createElement(i.a,{to:"/route-1"}))))},v=function(){return c.a.createElement("div",{className:r()(m.a["route-container"],m.a["route-1"])},c.a.createElement("h1",null,"Route 1"),c.a.createElement("h2",null,"This is an experiment in clip-path based route animations."),c.a.createElement("div",{className:m.a.shapes},c.a.createElement("div",{className:r()(m.a.shape,m.a.triangle)}),c.a.createElement("div",{className:r()(m.a.shape,m.a.square)}),c.a.createElement("div",{className:r()(m.a.shape,m.a.pentagon)})),c.a.createElement("h2",null,"You'll see that there's a small amount of content here."))},b=function(){return c.a.createElement("div",{className:r()(m.a["route-container"],m.a["route-2"])},c.a.createElement("h1",null,"Route 2"),c.a.createElement("h2",null,"This screen has some animated stuff to simulate a lot of different things going on."),c.a.createElement("div",null,c.a.createElement(d,null)),c.a.createElement("h2",null,"This is a basic color tiles shuffle example taken from Framer Motion's examples."),c.a.createElement("p",null,"This is a good example about why you should not use this approach when transitioning in/out of sites that already have a lot of stuff going on."),c.a.createElement("p",null,"This is best suited for static content views."))},w=function(){var e=Object(l.useState)(window.performance.memory),t=e[0],a=e[1];return p(function(){return t&&a(window.performance.memory)},1e3,[]),c.a.createElement("div",{className:r()(m.a["route-container"],m.a["route-3"])},c.a.createElement("h1",null,"Route 3"),c.a.createElement("h2",null,"This is just another page to showcase some content."),t?c.a.createElement("div",null,c.a.createElement("div",{className:m.a["memory-bar"]},c.a.createElement("div",{style:{width:t.usedJSHeapSize/t.totalJSHeapSize*100+"%"}})),c.a.createElement("div",null,(t.usedJSHeapSize/1e7).toFixed(2)," MBs / ",(t.totalJSHeapSize/1e7).toFixed(2)," MBs"),c.a.createElement("div",null,"This is the amount of heap memory used, out of the available heap memory.")):c.a.createElement("div",null,"Your browser doesn't support ",c.a.createElement("code",null,"window.performance.memory"),". If it did, you'd see current memory usage here right now."))},g=function(){var e=Object(l.useState)(!1),t=e[0],a=e[1];return Object(l.useEffect)(function(){a(!0)},[]),t?c.a.createElement(s.a,null,c.a.createElement("div",{className:m.a.container},c.a.createElement("div",{className:m.a.navigation},c.a.createElement(s.b,{to:"/route-1",activeClassName:m.a.active},"Go to 1"),c.a.createElement(s.b,{to:"/route-2",activeClassName:m.a.active},"Go to 2"),c.a.createElement(s.b,{to:"/route-3",activeClassName:m.a.active},"Go to 3")),c.a.createElement(i.b,{path:"/",component:E}))):c.a.createElement(c.a.Fragment,null)};a.d(t,"frontmatter",function(){return y});t.default=g;var y={title:"Clip Path Route Transition",description:"Switch between multiple routes with a nice clip-path animation.",categories:["canvas","2d","draw"]}}}]);
//# sourceMappingURL=component---src-pages-experiments-clip-path-route-tsx-8bff3f258c23a3f93829.js.map