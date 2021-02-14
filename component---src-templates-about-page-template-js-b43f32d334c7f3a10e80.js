/*! For license information please see component---src-templates-about-page-template-js-b43f32d334c7f3a10e80.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Ie8z:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=["video","audio","picture","iframe","img"],d=i.forwardRef((function(e,t){var a=e.children,o=e.classes,d=e.className,s=e.component,u=void 0===s?"div":s,m=e.image,b=e.src,f=e.style,v=Object(n.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(u),p=!h&&m?Object(r.a)({backgroundImage:'url("'.concat(m,'")')},f):f;return i.createElement(u,Object(r.a)({className:Object(l.default)(o.root,d,h&&o.media,-1!=="picture img".indexOf(u)&&o.img),ref:t,style:p,src:h?m||b:void 0},v),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d)},VxdY:function(e,t,a){},b0HY:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("ivWS"),o=a.n(l),c=a("lO0E"),d=a("PsDL"),s=a("ytJY"),u=a.n(s),m=a("ofer"),b=a("/4kY"),f=a("9NZZ");var v=function(e){var t=e.children,a=Object(f.a)({disableHysteresis:!0,threshold:0});return n.a.cloneElement(t,{elevation:a?4:0})};t.a=function(e){var t=e.title,a=e.description,r=e.location,l=e.navigate,s=e.siteMeta,f=e.children,h=r.state,p=void 0===h?{}:h,g=p&&p.referrer?p.referrer:Object(i.d)("/");return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{title:t,description:a,siteMeta:s}),n.a.createElement(v,null,n.a.createElement(o.a,{color:"primary",position:"fixed"},n.a.createElement(c.a,null,n.a.createElement(d.a,{onClick:function(){return l(g)},edge:"start",color:"inherit","aria-label":"menu"},n.a.createElement(u.a,null)),n.a.createElement(m.a,{variant:"subtitle1",color:"inherit"},t)))),f)}},gxI0:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=(a("VxdY"),a("Ji2X")),l=a("lO0E"),o=a("hlFM"),c=a("kKAo"),d=a("ofer"),s=a("Ie8z"),u=a("wb2y"),m=a("XX3T"),b=a("Cekx"),f=a.n(b),v=a("H2TA"),h=a("aDnJ"),p=a("FCJB"),g=a("CN8t"),E=a("IAH9");a("b0HY");t.default=Object(v.a)((function(e){return{cardMedia:{height:"450px"},date:{paddingTop:e.spacing(2),fontSize:14},author:{fontSize:14}}}))((function(e){var t=e.classes,a=e.data,r=e.location,b=e.navigate,v=Object(E.a)(),x=a.markdownRemark,O=x.html,k=x.excerpt,y=x.frontmatter,j=y.title,w=y.date,I=y.publishedBy,M=y.image.publicURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{title:j,description:k,siteMeta:v,location:r,navigate:b}),n.a.createElement(l.a,{id:"back-to-top-anchor"}),n.a.createElement(o.a,{clone:!0,pt:8,pb:2},n.a.createElement(i.a,{maxWidth:"md"},n.a.createElement(c.a,{elevation:1},n.a.createElement(s.a,{className:t.cardMedia,image:M}),n.a.createElement(o.a,{pt:2,pr:2,pb:2,pl:2},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:O}}),n.a.createElement(o.a,{pt:1,pb:1},n.a.createElement(u.a,{variant:"fullWidth"})),n.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary"},"Published: ",w),n.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary"},"PublishedBy: ",I))))),n.a.createElement(g.a,{siteMeta:v}),n.a.createElement(p.a,null,n.a.createElement(m.a,{color:"secondary","aria-label":"scroll back to top"},n.a.createElement(f.a,null))))}))},wb2y:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=a("ye/S"),d=i.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,d=e.className,s=e.component,u=void 0===s?"hr":s,m=e.flexItem,b=void 0!==m&&m,f=e.light,v=void 0!==f&&f,h=e.orientation,p=void 0===h?"horizontal":h,g=e.role,E=void 0===g?"hr"!==u?"separator":void 0:g,x=e.variant,O=void 0===x?"fullWidth":x,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(r.a)({className:Object(l.default)(c.root,d,"fullWidth"!==O&&c[O],o&&c.absolute,b&&c.flexItem,v&&c.light,"vertical"===p&&c.vertical),role:E,ref:t},k))}));t.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d)},ytJY:function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),l=(0,r(a("8/g6")).default)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=l}}]);
//# sourceMappingURL=component---src-templates-about-page-template-js-b43f32d334c7f3a10e80.js.map