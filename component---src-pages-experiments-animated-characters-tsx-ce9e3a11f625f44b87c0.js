(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(e,o,s){"use strict";s.r(o);var r=s(0),n=s.n(r),t=(s(18),s(278)),g=s.n(t),v=s(279),a=s.n(v),i=function(e){var o=e.fontSize,s=void 0===o?100:o,t=e.staggerDuration,g=void 0===t?0:t,v=e.index,a=e.delay,i=void 0===a?0:a,c=e.id;return Object(r.useLayoutEffect)(function(){return function(){setTimeout(function(){return function(e,o){var s=(void 0===o?{}:o).staggerDuration,r=void 0===s?0:s;if(!e)return;e.querySelectorAll("path").forEach(function(o){!function(e){var o=String(e.getTotalLength());e.style.strokeDashoffset=o,e.style.strokeDasharray=o}(o),setTimeout(function(){return function(e,o){e.style.visibility="visible",o.style.transition="stroke-dashoffset 2s",o.style.strokeDashoffset="0"}(e,o)},r)})}(document.getElementById(c),{staggerDuration:i+g*v})})}}),n.a.createElement("div",{style:{height:s,width:s/1.2}})},c=function(e){var o=e.index,r=void 0===o?0:o,t=e.letter,v=void 0===t?"A":t,c=e.font,u=void 0===c?"Product Sans":c,S=e.fontSize,d=void 0===S?100:S,I=e.staggerDuration,F=void 0===I?0:I,l=e.delay,f=void 0===l?0:l,k=a()(),w=function(e,o,r){return void 0===e&&(e="A"),void 0===o&&(o="Product Sans"),g()({loader:function(){return s(283)("./"+o+"/"+e+".svg")},loading:function(){return n.a.createElement(i,r)},render:function(e,o){var s=e.default;return n.a.createElement(s,o)}})}(v,u,{fontSize:d,staggerDuration:F,delay:f,id:k,index:r});return n.a.createElement(w,{id:k,style:{visibility:"hidden"},height:d})},u=function(e){var o=e.text,s=void 0===o?"Hello":o,r=e.font,t=void 0===r?"Product Sans":r,g=e.staggerDuration,v=void 0===g?0:g,a=e.delay,i=void 0===a?0:a;return n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},s.split("").map(function(e,o){return n.a.createElement(c,{key:o,index:o,letter:e,font:t,staggerDuration:v,delay:i})}))};s(249);var S=function(){return n.a.createElement("div",{className:"styles-module--container--26ndE"},n.a.createElement(u,{text:"ANIMATED",font:"Ink Free",staggerDuration:300}),n.a.createElement("br",null),n.a.createElement(u,{text:"LETTERS",font:"Ink Free",staggerDuration:300,delay:1500}))};s.d(o,"frontmatter",function(){return d});o.default=S;var d={title:"Animated Characters",description:"Animated stroke paths of letters in different font sets.",categories:["svg","animation"]}},283:function(e,o,s){var r={"./Courier New/A.svg":284,"./Courier New/B.svg":285,"./Courier New/C.svg":286,"./Courier New/D.svg":287,"./Courier New/E.svg":288,"./Courier New/F.svg":289,"./Courier New/G.svg":290,"./Courier New/H.svg":291,"./Courier New/I.svg":292,"./Courier New/J.svg":293,"./Courier New/K.svg":294,"./Courier New/L.svg":295,"./Courier New/M.svg":296,"./Courier New/N.svg":297,"./Courier New/O.svg":298,"./Courier New/P.svg":299,"./Courier New/Q.svg":300,"./Courier New/R.svg":301,"./Courier New/S.svg":302,"./Courier New/T.svg":303,"./Courier New/U.svg":304,"./Courier New/V.svg":305,"./Courier New/W.svg":306,"./Courier New/X.svg":307,"./Courier New/Y.svg":308,"./Courier New/Z.svg":309,"./Ink Free/A.svg":310,"./Ink Free/B.svg":311,"./Ink Free/C.svg":312,"./Ink Free/D.svg":313,"./Ink Free/E.svg":314,"./Ink Free/F.svg":315,"./Ink Free/G.svg":316,"./Ink Free/H.svg":317,"./Ink Free/I.svg":318,"./Ink Free/J.svg":319,"./Ink Free/K.svg":320,"./Ink Free/L.svg":321,"./Ink Free/M.svg":322,"./Ink Free/N.svg":323,"./Ink Free/O.svg":324,"./Ink Free/P.svg":325,"./Ink Free/Q.svg":326,"./Ink Free/R.svg":327,"./Ink Free/S.svg":328,"./Ink Free/T.svg":329,"./Ink Free/U.svg":330,"./Ink Free/V.svg":331,"./Ink Free/W.svg":332,"./Ink Free/X.svg":333,"./Ink Free/Y.svg":334,"./Ink Free/Z.svg":335,"./Product Sans/A.svg":336,"./Product Sans/B.svg":337,"./Product Sans/C.svg":338,"./Product Sans/D.svg":339,"./Product Sans/E.svg":340,"./Product Sans/F.svg":341,"./Product Sans/G.svg":342,"./Product Sans/H.svg":343,"./Product Sans/I.svg":344,"./Product Sans/J.svg":345,"./Product Sans/K.svg":346,"./Product Sans/L.svg":347,"./Product Sans/M.svg":348,"./Product Sans/N.svg":349,"./Product Sans/O.svg":350,"./Product Sans/P.svg":351,"./Product Sans/Q.svg":352,"./Product Sans/R.svg":353,"./Product Sans/S.svg":354,"./Product Sans/T.svg":355,"./Product Sans/U.svg":356,"./Product Sans/V.svg":357,"./Product Sans/W.svg":358,"./Product Sans/X.svg":359,"./Product Sans/Y.svg":360,"./Product Sans/Z.svg":361,"./Roboto/A.svg":362,"./Roboto/B.svg":363,"./Roboto/C.svg":364,"./Roboto/D.svg":365,"./Roboto/E.svg":366,"./Roboto/F.svg":367,"./Roboto/G.svg":368,"./Roboto/H.svg":369,"./Roboto/I.svg":370,"./Roboto/J.svg":371,"./Roboto/K.svg":372,"./Roboto/L.svg":373,"./Roboto/M.svg":374,"./Roboto/N.svg":375,"./Roboto/O.svg":376,"./Roboto/P.svg":377,"./Roboto/Q.svg":378,"./Roboto/R.svg":379,"./Roboto/S.svg":380,"./Roboto/T.svg":381,"./Roboto/U.svg":382,"./Roboto/V.svg":383,"./Roboto/W.svg":384,"./Roboto/X.svg":385,"./Roboto/Y.svg":386,"./Roboto/Z.svg":387,"./San Francisco/A.svg":388,"./San Francisco/B.svg":389,"./San Francisco/C.svg":390,"./San Francisco/D.svg":391,"./San Francisco/E.svg":392,"./San Francisco/F.svg":393,"./San Francisco/G.svg":394,"./San Francisco/H.svg":395,"./San Francisco/I.svg":396,"./San Francisco/J.svg":397,"./San Francisco/K.svg":398,"./San Francisco/L.svg":399,"./San Francisco/M.svg":400,"./San Francisco/N.svg":401,"./San Francisco/O.svg":402,"./San Francisco/P.svg":403,"./San Francisco/Q.svg":404,"./San Francisco/R.svg":405,"./San Francisco/S.svg":406,"./San Francisco/T.svg":407,"./San Francisco/U.svg":408,"./San Francisco/V.svg":409,"./San Francisco/W.svg":410,"./San Francisco/X.svg":411,"./San Francisco/Y.svg":412,"./San Francisco/Z.svg":413,"./Segoe UI/A.svg":414,"./Segoe UI/B.svg":415,"./Segoe UI/C.svg":416,"./Segoe UI/D.svg":417,"./Segoe UI/E.svg":418,"./Segoe UI/F.svg":419,"./Segoe UI/G.svg":420,"./Segoe UI/H.svg":421,"./Segoe UI/I.svg":422,"./Segoe UI/J.svg":423,"./Segoe UI/K.svg":424,"./Segoe UI/L.svg":425,"./Segoe UI/M.svg":426,"./Segoe UI/N.svg":427,"./Segoe UI/O.svg":428,"./Segoe UI/P.svg":429,"./Segoe UI/Q.svg":430,"./Segoe UI/R.svg":431,"./Segoe UI/S.svg":432,"./Segoe UI/T.svg":433,"./Segoe UI/U.svg":434,"./Segoe UI/V.svg":435,"./Segoe UI/W.svg":436,"./Segoe UI/X.svg":437,"./Segoe UI/Y.svg":438,"./Segoe UI/Z.svg":439};function n(e){return t(e).then(s)}function t(e){return Promise.resolve().then(function(){var o=r[e];if(!(o+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return o})}n.keys=function(){return Object.keys(r)},n.resolve=t,n.id=283,e.exports=n}}]);
//# sourceMappingURL=component---src-pages-experiments-animated-characters-tsx-ce9e3a11f625f44b87c0.js.map