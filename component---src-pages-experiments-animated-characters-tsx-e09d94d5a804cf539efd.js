(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,t,s){"use strict";s.r(t);var n=s(170),o=s(0),a=s.n(o),r=(s(63),s(85),s(281)),i=s.n(r),g=function(e){var t=e.fontSize,s=void 0===t?100:t,n=e.staggerDuration,r=void 0===n?0:n,i=e.index,g=e.delay,c=void 0===g?0:g,v=e.id;return Object(o.useLayoutEffect)(function(){return function(){setTimeout(function(){return function(e,t){var s=(void 0===t?{}:t).staggerDuration,n=void 0===s?0:s;if(!e)return;e.querySelectorAll("path").forEach(function(t){!function(e){var t=String(e.getTotalLength());e.style.strokeDashoffset=t,e.style.strokeDasharray=t}(t),setTimeout(function(){return function(e,t){e.style.visibility="visible",t.style.transition="stroke-dashoffset 2s",t.style.strokeDashoffset="0"}(e,t)},n)})}(document.getElementById(v),{staggerDuration:c+r*i})})}}),a.a.createElement("div",{style:{height:s,width:s/1.2}})},c=function(e){var t=e.index,n=void 0===t?0:t,r=e.letter,c=void 0===r?"A":r,v=e.font,u=void 0===v?"Product Sans":v,l=e.fontSize,d=void 0===l?100:l,S=e.staggerDuration,m=void 0===S?0:S,f=e.delay,F=void 0===f?0:f,I=function(e,t){return void 0===e&&(e="A"),void 0===t&&(t="Product Sans"),Object(o.lazy)(function(){return s(284)("./"+t+"/"+e+".svg")})}(c,u),b=i()();return a.a.createElement(o.Suspense,{fallback:a.a.createElement(g,{fontSize:d,staggerDuration:m,delay:F,id:b,index:n})},a.a.createElement(I,{id:b,style:{visibility:"hidden"},height:d}))},v=function(e){var t=e.text,s=void 0===t?"Hello":t,n=e.font,o=void 0===n?"Product Sans":n,r=e.staggerDuration,i=void 0===r?0:r,g=e.delay,v=void 0===g?0:g;return a.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},s.split("").map(function(e,t){return a.a.createElement(c,{key:t,index:t,letter:e,font:o,staggerDuration:i,delay:v})}))};s(160);var u=function(){return a.a.createElement(n.a,null,a.a.createElement("div",{className:"styles-module--container--26ndE"},a.a.createElement(v,{text:"ANIMATED",font:"Ink Free",staggerDuration:300}),a.a.createElement("br",null),a.a.createElement(v,{text:"LETTERS",font:"Ink Free",staggerDuration:300,delay:1500})))};s.d(t,"frontmatter",function(){return l});t.default=u;var l={title:"Animated Characters",description:"Animated stroke paths of letters in different font sets.",categories:["svg","animation"]}},164:function(e,t,s){var n;e.exports=(n=s(168))&&n.default||n},167:function(e){e.exports={data:{allSitePage:{edges:[{node:{componentPath:null,path:"/dev-404-page/"}},{node:{componentPath:"/Users/jayant/Projects/jayant/src/pages/index.tsx",path:"/"}},{node:{componentPath:"/Users/jayant/Projects/jayant/src/pages/404.tsx",path:"/404.html"}},{node:{componentPath:"/Users/jayant/Projects/jayant/src/pages/404.tsx",path:"/404"}},{node:{componentPath:"/Users/jayant/Projects/jayant/src/pages/experiments/animated-characters.tsx",path:"/experiments/animated-characters"}}]},allJavascriptFrontmatter:{edges:[{node:{frontmatter:{title:"Animated Characters",categories:["svg","animation"],description:"Animated stroke paths of letters in different font sets.",error:!1},fileAbsolutePath:"/Users/jayant/Projects/jayant/src/pages/experiments/animated-characters.tsx"}}]}}}},168:function(e,t,s){"use strict";s.r(t);s(17);var n=s(0),o=s.n(n),a=s(4),r=s.n(a),i=s(60),g=s(2),c=function(e){var t=e.location,s=g.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({location:t,pageResources:s},s.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},170:function(e,t,s){"use strict";s(17),s(84);var n=s(167),o=s(181),a=s.n(o),r=s(177),i=s.n(r),g=s(0),c=s.n(g),v=s(4),u=s.n(v),l=s(36),d=s.n(l);s(164),c.a.createContext({});u.a.object,u.a.string.isRequired,u.a.func,u.a.func;var S=s(183),m=s(61),f=s(59),F=(s(155),S.b.div({enter:{x:"0%",transition:{ease:"easeOut",duration:350}},exit:{x:"-100%",transition:{ease:"easeIn",duration:350}}})),I=function(e){return{active:e.application.showSidebar}},b=function(e){return{toggleSidebar:function(){return e(Object(m.b)())}}},p=function(){var e=Object(g.useCallback)(function(){return b(Object(f.b)())},[]),t=Object(g.useCallback)(I,[]),s=Object(f.c)(t).active,o=e().toggleSidebar,r=Object(g.useMemo)(function(){return(e=n.data)?e.allJavascriptFrontmatter.edges.map(function(t){var s=e.allSitePage.edges.find(function(e){return e.node.componentPath===t.node.fileAbsolutePath});return Object.assign({},t.node.frontmatter,{path:s.node.path})}):[];var e},[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"styles-module--activation-button--s2k3Y",onClick:o},c.a.createElement(i.a,{className:"styles-module--icon--7ZweG",fontSize:"large"})),s&&c.a.createElement("div",{className:"styles-module--invisible-overlay--3UoM5",onClick:o}),c.a.createElement(S.a,null,s&&c.a.createElement(F,{key:"sidebar",className:"styles-module--container--2BrcM"},c.a.createElement("div",{className:"styles-module--sidebar-brand--2faHS"},c.a.createElement(a.a,{fontSize:"large",className:"styles-module--icon--7ZweG styles-module--close-icon--3sh8j",onClick:o}),c.a.createElement(d.a,{to:"/",className:"styles-module--sidebar-label--LBNkL"},"EXPERIMENTS")),r.map(function(e){return c.a.createElement(d.a,{className:"styles-module--nav-link--1jy6J",to:e.path},e.title)}))))},P=s(182),y=s(156),k=s.n(y);t.a=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.Helmet,{title:"jayant.dev"}),c.a.createElement(p,null),c.a.createElement("div",{className:k.a.container},t))}},284:function(e,t,s){var n={"./Courier New/A.svg":285,"./Courier New/B.svg":286,"./Courier New/C.svg":287,"./Courier New/D.svg":288,"./Courier New/E.svg":289,"./Courier New/F.svg":290,"./Courier New/G.svg":291,"./Courier New/H.svg":292,"./Courier New/I.svg":293,"./Courier New/J.svg":294,"./Courier New/K.svg":295,"./Courier New/L.svg":296,"./Courier New/M.svg":297,"./Courier New/N.svg":298,"./Courier New/O.svg":299,"./Courier New/P.svg":300,"./Courier New/Q.svg":301,"./Courier New/R.svg":302,"./Courier New/S.svg":303,"./Courier New/T.svg":304,"./Courier New/U.svg":305,"./Courier New/V.svg":306,"./Courier New/W.svg":307,"./Courier New/X.svg":308,"./Courier New/Y.svg":309,"./Courier New/Z.svg":310,"./Ink Free/A.svg":311,"./Ink Free/B.svg":312,"./Ink Free/C.svg":313,"./Ink Free/D.svg":314,"./Ink Free/E.svg":315,"./Ink Free/F.svg":316,"./Ink Free/G.svg":317,"./Ink Free/H.svg":318,"./Ink Free/I.svg":319,"./Ink Free/J.svg":320,"./Ink Free/K.svg":321,"./Ink Free/L.svg":322,"./Ink Free/M.svg":323,"./Ink Free/N.svg":324,"./Ink Free/O.svg":325,"./Ink Free/P.svg":326,"./Ink Free/Q.svg":327,"./Ink Free/R.svg":328,"./Ink Free/S.svg":329,"./Ink Free/T.svg":330,"./Ink Free/U.svg":331,"./Ink Free/V.svg":332,"./Ink Free/W.svg":333,"./Ink Free/X.svg":334,"./Ink Free/Y.svg":335,"./Ink Free/Z.svg":336,"./Product Sans/A.svg":337,"./Product Sans/B.svg":338,"./Product Sans/C.svg":339,"./Product Sans/D.svg":340,"./Product Sans/E.svg":341,"./Product Sans/F.svg":342,"./Product Sans/G.svg":343,"./Product Sans/H.svg":344,"./Product Sans/I.svg":345,"./Product Sans/J.svg":346,"./Product Sans/K.svg":347,"./Product Sans/L.svg":348,"./Product Sans/M.svg":349,"./Product Sans/N.svg":350,"./Product Sans/O.svg":351,"./Product Sans/P.svg":352,"./Product Sans/Q.svg":353,"./Product Sans/R.svg":354,"./Product Sans/S.svg":355,"./Product Sans/T.svg":356,"./Product Sans/U.svg":357,"./Product Sans/V.svg":358,"./Product Sans/W.svg":359,"./Product Sans/X.svg":360,"./Product Sans/Y.svg":361,"./Product Sans/Z.svg":362,"./Roboto/A.svg":363,"./Roboto/B.svg":364,"./Roboto/C.svg":365,"./Roboto/D.svg":366,"./Roboto/E.svg":367,"./Roboto/F.svg":368,"./Roboto/G.svg":369,"./Roboto/H.svg":370,"./Roboto/I.svg":371,"./Roboto/J.svg":372,"./Roboto/K.svg":373,"./Roboto/L.svg":374,"./Roboto/M.svg":375,"./Roboto/N.svg":376,"./Roboto/O.svg":377,"./Roboto/P.svg":378,"./Roboto/Q.svg":379,"./Roboto/R.svg":380,"./Roboto/S.svg":381,"./Roboto/T.svg":382,"./Roboto/U.svg":383,"./Roboto/V.svg":384,"./Roboto/W.svg":385,"./Roboto/X.svg":386,"./Roboto/Y.svg":387,"./Roboto/Z.svg":388,"./San Francisco/A.svg":389,"./San Francisco/B.svg":390,"./San Francisco/C.svg":391,"./San Francisco/D.svg":392,"./San Francisco/E.svg":393,"./San Francisco/F.svg":394,"./San Francisco/G.svg":395,"./San Francisco/H.svg":396,"./San Francisco/I.svg":397,"./San Francisco/J.svg":398,"./San Francisco/K.svg":399,"./San Francisco/L.svg":400,"./San Francisco/M.svg":401,"./San Francisco/N.svg":402,"./San Francisco/O.svg":403,"./San Francisco/P.svg":404,"./San Francisco/Q.svg":405,"./San Francisco/R.svg":406,"./San Francisco/S.svg":407,"./San Francisco/T.svg":408,"./San Francisco/U.svg":409,"./San Francisco/V.svg":410,"./San Francisco/W.svg":411,"./San Francisco/X.svg":412,"./San Francisco/Y.svg":413,"./San Francisco/Z.svg":414,"./Segoe UI/A.svg":415,"./Segoe UI/B.svg":416,"./Segoe UI/C.svg":417,"./Segoe UI/D.svg":418,"./Segoe UI/E.svg":419,"./Segoe UI/F.svg":420,"./Segoe UI/G.svg":421,"./Segoe UI/H.svg":422,"./Segoe UI/I.svg":423,"./Segoe UI/J.svg":424,"./Segoe UI/K.svg":425,"./Segoe UI/L.svg":426,"./Segoe UI/M.svg":427,"./Segoe UI/N.svg":428,"./Segoe UI/O.svg":429,"./Segoe UI/P.svg":430,"./Segoe UI/Q.svg":431,"./Segoe UI/R.svg":432,"./Segoe UI/S.svg":433,"./Segoe UI/T.svg":434,"./Segoe UI/U.svg":435,"./Segoe UI/V.svg":436,"./Segoe UI/W.svg":437,"./Segoe UI/X.svg":438,"./Segoe UI/Y.svg":439,"./Segoe UI/Z.svg":440};function o(e){return a(e).then(s)}function a(e){return Promise.resolve().then(function(){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t})}o.keys=function(){return Object.keys(n)},o.resolve=a,o.id=284,e.exports=o}}]);
//# sourceMappingURL=component---src-pages-experiments-animated-characters-tsx-e09d94d5a804cf539efd.js.map