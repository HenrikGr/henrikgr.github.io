(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9aa":function(e,t,a){var n=a("NykK"),r=a("ExA7"),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==o}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,a){a("SRfc");var n=a("dVn5"),r=a("fo6e"),o=a("dt0z"),i=a("9NmV");e.exports=function(e,t,a){return e=o(e),void 0===(t=a?void 0:t)?r(e)?i(e):n(e):e.match(t)||[]}},"7IPp":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"tag":"JavaScript"},{"tag":"Node.js"},{"tag":"React.js"}]}}}')},"9NmV":function(e,t,a){a("SRfc"),a("Oyvg");var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",i="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+c+"|"+l+")",p="(?:"+d+"|"+l+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,u].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),b="(?:"+[i,s,u].join("|")+")"+v,g=RegExp([d+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,d,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,d+m,"$"].join("|")+")",d+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,b].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},AP2z:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),r=Object.prototype,o=r.hasOwnProperty,i=r.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),a=e[c];try{e[c]=void 0;var n=!0}catch(l){}var r=i.call(e);return n&&(t?e[c]=a:delete e[c]),r}},EOad:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"The Gatsby web site project has reached a milestone and is now published at Github Pages. The project is ongoing and more\\ncontent as well as features will be added…","timeToRead":4,"fields":{"slug":"/projects/gatsby-web-site-project/"},"frontmatter":{"title":"Gatsby static web site project","subtitle":"Project Gatsby powered web site","date":"2019-11-11","publishedBy":"Henrik Grönvall","image":{"publicURL":"/static/web-development-150-4903f08d4e7698e0e3b3e5ae42f5186e.png"}}}}]}}}')},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,a){var n=a("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},NykK:function(e,t,a){var n=a("nmnc"),r=a("AP2z"),o=a("KfNM"),i="[object Null]",c="[object Undefined]",l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?r(e):o(e)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("hlFM"),i=a("lO0E"),c=a("XX3T"),l=a("Cekx"),s=a.n(l),u=a("aDnJ"),d=a("Ji2X"),m=a("tRbT"),p=a("wb2y"),f=a("Z3vd"),v=a("H2TA"),b=a("X4R9"),g=a("7IPp");var x=a("N1om");var h=Object(v.a)((function(e){return{toolbar:{justifyContent:"space-around",overflowX:"auto"},link:{padding:e.spacing(1),flexShrink:0}}}))((function(e){var t,a=e.classes,n=((t=g.data.allMarkdownRemark.group.map((function(e){return e.tag}))).unshift("All"),t);return r.a.createElement(i.a,{component:"nav",variant:"dense",className:a.toolbar},n.map((function(e){var t="All"===e?"/articles/":"/articles/tags/"+x(e)+"/";return r.a.createElement(f.a,{key:e,component:b.b,to:t,variant:"outlined",size:"small",color:"secondary"},e)})))})),w=a("kKAo"),y=a("ofer"),E=a("gZiG");var k=Object(v.a)((function(e){var t;return{root:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginTop:e.spacing(1),marginBottom:e.spacing(1),backgroundImage:"url(https://source.unsplash.com/user/erondu)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},content:(t={position:"relative",padding:e.spacing(3)},t[e.breakpoints.up("md")]={padding:e.spacing(6),paddingRight:0},t)}}))((function(e){var t=e.classes,a=E.data.allMarkdownRemark.edges[0].node,n=a.excerpt,o=a.timeToRead,i=a.fields.slug,c=a.frontmatter,l=c.title,s=c.date;return r.a.createElement(w.a,{className:t.root},r.a.createElement("img",{style:{display:"none"},src:"https://source.unsplash.com/daily?news",alt:"latest article background"}),r.a.createElement("div",{className:t.overlay}),r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,md:6},r.a.createElement("div",{className:t.content},r.a.createElement(y.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},l),r.a.createElement(y.a,{component:"div",variant:"caption",color:"inherit"},s),r.a.createElement(y.a,{component:"div",variant:"caption",color:"inherit",gutterBottom:!0},o+" minutes"),r.a.createElement(y.a,{variant:"h5",color:"inherit",paragraph:!0},n),r.a.createElement(b.b,{variant:"subtitle1",color:"inherit",to:i},"Continue reading …")))))})),j=a("lFIR"),O=a("30+C"),D=a("oa/T"),U=a("k1TG"),N=a("aXB2"),R=a("17x9"),A=a.n(R),T=(a("rGqo"),a("yt8O"),a("Btvt"),a("LK8F"),a("DNiP"),a("V+eJ"),a("t8Zj")),S=a("A+CX"),M=a("2mql"),z=a.n(M),I=a("tr08"),L=a("LEIi"),B=(a("pIFo"),a("aXM8")),C=!1;var G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(B.a)(),n=Object(S.a)({theme:a,name:"MuiUseMediaQuery",props:{}}),o="function"==typeof e?e(a):e;o=o.replace(/^@media( ?)/m,"");var i="undefined"!=typeof window&&void 0!==window.matchMedia,c=Object(U.a)({},n,{},t),l=c.defaultMatches,s=void 0!==l&&l,u=c.noSsr,d=void 0!==u&&u,m=c.ssrMatchMedia,p=void 0===m?null:m,f=r.a.useState((function(){return(C||d)&&i?window.matchMedia(o).matches:p?p(o).matches:s})),v=f[0],b=f[1];return r.a.useEffect((function(){var e=!0;if(C=!0,i){var t=window.matchMedia(o),a=function(){e&&b(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[o,i]),v},Z=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a?L.b.indexOf(e)<=L.b.indexOf(t):L.b.indexOf(e)<L.b.indexOf(t)},J=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a?L.b.indexOf(t)<=L.b.indexOf(e):L.b.indexOf(t)<L.b.indexOf(e)},F="undefined"==typeof window?r.a.useEffect:r.a.useLayoutEffect,K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.withTheme,n=void 0!==a&&a,o=e.noSSR,i=void 0!==o&&o,c=e.initialWidth;function l(e){var a=Object(I.a)(),o=e.theme||a,l=Object(S.a)({theme:o,name:"MuiWithWidth",props:Object(U.a)({},e)}),s=l.initialWidth,u=l.width,d=Object(N.a)(l,["initialWidth","width"]),m=r.a.useState(!1),p=m[0],f=m[1];F((function(){f(!0)}),[]);var v=Object(T.a)(o.breakpoints.keys).reverse().reduce((function(e,t){var a=G(o.breakpoints.up(t));return!e&&a?t:e}),null),b=Object(U.a)({width:u||(p||i?v:void 0)||s||c},n?{theme:o}:{},{},d);return void 0===b.width?null:r.a.createElement(t,b)}return z()(l,t),l}};function W(e){var t=e.children,a=e.only,n=e.width,r=Object(I.a)(),o=!0;if(a)if(Array.isArray(a))for(var i=0;i<a.length;i+=1){if(n===a[i]){o=!1;break}}else a&&n===a&&(o=!1);if(o)for(var c=0;c<r.breakpoints.keys.length;c+=1){var l=r.breakpoints.keys[c],s=e["".concat(l,"Up")],u=e["".concat(l,"Down")];if(s&&Z(l,n)||u&&J(l,n)){o=!1;break}}return o?t:null}W.propTypes={children:A.a.node,className:A.a.string,implementation:A.a.oneOf(["js","css"]),initialWidth:A.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:A.a.bool,lgUp:A.a.bool,mdDown:A.a.bool,mdUp:A.a.bool,only:A.a.oneOfType([A.a.oneOf(["xs","sm","md","lg","xl"]),A.a.arrayOf(A.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:A.a.bool,smUp:A.a.bool,width:A.a.string.isRequired,xlDown:A.a.bool,xlUp:A.a.bool,xsDown:A.a.bool,xsUp:A.a.bool};var q=K()(W),P=(a("8+KV"),a("RW0V"),a("FqMR")),Y=a("NqtD");var H=Object(v.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(a,n){return a["only".concat(Object(Y.a)(n))]=Object(P.a)({},e.breakpoints.only(n),t),a["".concat(n,"Up")]=Object(P.a)({},e.breakpoints.up(n),t),a["".concat(n,"Down")]=Object(P.a)({},e.breakpoints.down(n),t),a}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,a=e.classes,n=e.className,o=(e.lgDown,e.lgUp,e.mdDown,e.mdUp,e.only),i=(e.smDown,e.smUp,e.xlDown,e.xlUp,e.xsDown,e.xsUp,Object(N.a)(e,["children","classes","className","lgDown","lgUp","mdDown","mdUp","only","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]),Object(I.a)()),c=[];n&&c.push(n);for(var l=0;l<i.breakpoints.keys.length;l+=1){var s=i.breakpoints.keys[l],u=e["".concat(s,"Up")],d=e["".concat(s,"Down")];u&&c.push(a["".concat(s,"Up")]),d&&c.push(a["".concat(s,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach((function(e){c.push(a["only".concat(Object(Y.a)(e))])})),r.a.createElement("div",{className:c.join(" ")},t)}));var V=function(e){var t=e.implementation,a=void 0===t?"js":t,n=e.lgDown,o=void 0!==n&&n,i=e.lgUp,c=void 0!==i&&i,l=e.mdDown,s=void 0!==l&&l,u=e.mdUp,d=void 0!==u&&u,m=e.smDown,p=void 0!==m&&m,f=e.smUp,v=void 0!==f&&f,b=e.xlDown,g=void 0!==b&&b,x=e.xlUp,h=void 0!==x&&x,w=e.xsDown,y=void 0!==w&&w,E=e.xsUp,k=void 0!==E&&E,j=Object(N.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===a?r.a.createElement(q,Object(U.a)({lgDown:o,lgUp:c,mdDown:s,mdUp:d,smDown:p,smUp:v,xlDown:g,xlUp:h,xsDown:y,xsUp:k},j)):r.a.createElement(H,Object(U.a)({lgDown:o,lgUp:c,mdDown:s,mdUp:d,smDown:p,smUp:v,xlDown:g,xlUp:h,xsDown:y,xsUp:k},j))},X=a("Ie8z"),$=a("rytY");var _=Object(v.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}})((function(e){var t=e.classes,a=$.data.allMarkdownRemark.edges[0].node,n=a.excerpt,o=a.timeToRead,i=a.fields.slug,c=a.frontmatter,l=c.title,s=c.date;return r.a.createElement(j.a,{component:b.b,to:i},r.a.createElement(O.a,{className:t.card},r.a.createElement("div",{className:t.cardDetails},r.a.createElement(D.a,null,r.a.createElement(y.a,{variant:"caption"},"Latest article"),r.a.createElement(y.a,{component:"h2",variant:"h5",color:"primary"},l),r.a.createElement(y.a,{component:"div",variant:"caption",color:"textSecondary"},s),r.a.createElement(y.a,{component:"div",variant:"caption",color:"textSecondary",gutterBottom:!0},o+" minutes"),r.a.createElement(y.a,{variant:"subtitle2",paragraph:!0},n),r.a.createElement(y.a,{variant:"subtitle2",color:"secondary"},"Continue reading..."))),r.a.createElement(V,{xsDown:!0},r.a.createElement(X.a,{className:t.cardMedia,image:"https://source.unsplash.com/daily?javascript",title:"Image title"}))))})),Q=a("EOad");var ee=Object(v.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}})((function(e){var t=e.classes,a=Q.data.allMarkdownRemark.edges[0].node,n=a.excerpt,o=a.timeToRead,i=a.fields.slug,c=a.frontmatter,l=c.title,s=c.date;return r.a.createElement(j.a,{component:b.b,to:i},r.a.createElement(O.a,{className:t.card},r.a.createElement("div",{className:t.cardDetails},r.a.createElement(D.a,null,r.a.createElement(y.a,{variant:"caption"},"Latest project"),r.a.createElement(y.a,{component:"h2",variant:"h5",color:"primary"},l),r.a.createElement(y.a,{component:"div",variant:"caption",color:"textSecondary"},s),r.a.createElement(y.a,{component:"div",variant:"caption",color:"textSecondary",gutterBottom:!0},o+" minutes"),r.a.createElement(y.a,{variant:"subtitle2",paragraph:!0},n),r.a.createElement(y.a,{variant:"subtitle2",color:"secondary"},"Continue reading..."))),r.a.createElement(V,{xsDown:!0},r.a.createElement(X.a,{className:t.cardMedia,image:"https://source.unsplash.com/weekly?agile",title:"Image title"}))))})),te=["March 2020","February 2020","January 2020","December 2019","November 2019","October 2019","September 2019","August 2019","July 2019","June 2019","May 2019","April 2019"];var ae=function(){return r.a.createElement(o.a,{clone:!0,p:1},r.a.createElement(w.a,{elevation:1},r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Article archives"),te.map((function(e){return r.a.createElement(b.b,{display:"block",variant:"body1",to:"/",key:e},e)}))))},ne=["GitHub","Twitter","Facebook"];var re=function(){return r.a.createElement(o.a,{clone:!0,p:1},r.a.createElement(w.a,{elevation:1},r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Social"),ne.map((function(e){return r.a.createElement(b.b,{display:"block",variant:"body1",to:"/",key:e},e)}))))};var oe=function(e){return e.classes,r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(h,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(p.a,{variant:"fullWidth"})),r.a.createElement(k,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(p.a,{variant:"fullWidth"})),r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12,md:8},r.a.createElement(_,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(ee,null))),r.a.createElement(m.a,{item:!0,xs:12,md:4},r.a.createElement(ae,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(re,null)))))},ie=a("FCJB"),ce=a("CN8t");t.default=function(e){var t=e.location,a=e.navigate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:"Latest news, article, and project",location:t,navigate:a}),r.a.createElement(i.a,{id:"back-to-top-anchor"}),r.a.createElement(o.a,{pt:8,pr:2,pb:2,pl:2},r.a.createElement(oe,null)),r.a.createElement(ie.a,null,r.a.createElement(c.a,{color:"secondary","aria-label":"scroll back to top"},r.a.createElement(s.a,null))),r.a.createElement(ce.a,null))}},TKrE:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("qRkn"),r=a("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,n).replace(i,"")}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},Z0cm:function(e,t,a){a("LK8F");var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,a,n){var r=-1,o=null==e?0:e.length;for(n&&o&&(a=e[++r]);++r<o;)a=t(a,e[r],r,e);return a}},dVn5:function(e,t,a){a("SRfc");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,a){var n=a("zoYe");e.exports=function(e){return null==e?"":n(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},fo6e:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},gZiG:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"Earlier today this web site got a proper domain, henrikgronvall.com and the it was not difficult at all. If you used the old\\none, henrikgr.github.io make sure you…","timeToRead":1,"fields":{"slug":"/news/news-custom-domain/"},"frontmatter":{"title":"Yesterday this site got a proper domain","subtitle":"The site hosted on Github Pages now have a proper custom domain","date":"2019-11-14","publishedBy":"Henrik Grönvall","image":{"publicURL":"/static/new-web-site-gatsby-150-1dfd03d87e33c7879e9ffc75a0efc04e.png"}}}}]}}}')},nmnc:function(e,t,a){var n=a("Kz5y").Symbol;e.exports=n},qRkn:function(e,t,a){var n=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},rytY:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"Worker Threads are available in the Node.js module. Before we dive into my example use of Worker threads in Node.js, \\nwe will see what are worker threads and why we…","timeToRead":6,"fields":{"slug":"/articles/nodejs-worker-threads/"},"frontmatter":{"title":"Node.js worker threads","subtitle":"The new worker threads in Node.js and a simple way to use them","date":"2019-11-13","publishedBy":"Henrik Grönvall","image":{"publicURL":"/static/nodejs-new-pantone-white-150-4d8f00e1a6868e46748ec2f65e5cbcaa.png"}}}}]}}}')},sgoq:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("asDA"),r=a("TKrE"),o=a("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(o(r(t).replace(i,"")),e,"")}}},zoYe:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),r=a("eUgh"),o=a("Z0cm"),i=a("/9aa"),c=1/0,l=n?n.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(i(t))return s?s.call(t):"";var a=t+"";return"0"==a&&1/t==-c?"-0":a}}}]);
//# sourceMappingURL=component---src-pages-index-js-6e3934c80bea6e6af0ea.js.map