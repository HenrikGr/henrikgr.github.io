/*! For license information please see 875d5575f84d2db311b8feddedb7ed30b8fce884-8e0df0fbb1f2b518c4b4.js.LICENSE.txt */
(self.webpackChunkhgc_ab=self.webpackChunkhgc_ab||[]).push([[985],{5420:function(t,e,n){"use strict";var i=n(2122),r=n(1253),o=n(7294),a=n(5505),s=n(8063),l=n(4621),c=o.forwardRef((function(t,e){var n=t.classes,l=t.className,c=t.raised,u=void 0!==c&&c,d=(0,r.Z)(t,["classes","className","raised"]);return o.createElement(s.Z,(0,i.Z)({className:(0,a.Z)(n.root,l),elevation:u?8:1,ref:e},d))}));e.Z=(0,l.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},1293:function(t,e,n){"use strict";var i=n(2122),r=n(1253),o=n(6156),a=n(7294),s=n(5505),l=n(4621),c=n(1664),u=a.forwardRef((function(t,e){var n=t.classes,o=t.className,l=t.component,u=void 0===l?"div":l,d=t.disableGutters,p=void 0!==d&&d,m=t.fixed,f=void 0!==m&&m,h=t.maxWidth,b=void 0===h?"lg":h,g=(0,r.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(u,(0,i.Z)({className:(0,s.Z)(n.root,o,f&&n.fixed,p&&n.disableGutters,!1!==b&&n["maxWidth".concat((0,c.Z)(String(b)))]),ref:e},g))}));e.Z=(0,l.Z)((function(t){return{root:(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var i=t.breakpoints.values[n];return 0!==i&&(e[t.breakpoints.up(n)]={maxWidth:i}),e}),{}),maxWidthXs:(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,o.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,o.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,o.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,o.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},9995:function(t,e,n){"use strict";var i=n(1253),r=n(2122),o=n(7294),a=n(5505),s=n(4621),l=n(7055),c=n(1664),u=o.forwardRef((function(t,e){var n=t.children,s=t.classes,u=t.className,d=t.color,p=void 0===d?"default":d,m=t.component,f=void 0===m?"button":m,h=t.disabled,b=void 0!==h&&h,g=t.disableFocusRipple,v=void 0!==g&&g,x=t.focusVisibleClassName,E=t.size,Z=void 0===E?"large":E,k=t.variant,y=void 0===k?"round":k,C=(0,i.Z)(t,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(l.Z,(0,r.Z)({className:(0,a.Z)(s.root,u,"round"!==y&&s.extended,"large"!==Z&&s["size".concat((0,c.Z)(Z))],b&&s.disabled,{primary:s.primary,secondary:s.secondary,inherit:s.colorInherit}[p]),component:f,disabled:b,focusRipple:!v,focusVisibleClassName:(0,a.Z)(s.focusVisible,x),ref:e},C),o.createElement("span",{className:s.label},n))}));e.Z=(0,s.Z)((function(t){return{root:(0,r.Z)({},t.typography.button,{boxSizing:"border-box",minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:t.shadows[6],"&:active":{boxShadow:t.shadows[12]},color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],"&:hover":{backgroundColor:t.palette.grey.A100,"@media (hover: none)":{backgroundColor:t.palette.grey[300]},"&$disabled":{backgroundColor:t.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:t.shadows[6]},"&$disabled":{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.primary.dark,"@media (hover: none)":{backgroundColor:t.palette.primary.main}}},secondary:{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.main,"&:hover":{backgroundColor:t.palette.secondary.dark,"@media (hover: none)":{backgroundColor:t.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},9701:function(t,e,n){"use strict";n.d(e,{n:function(){return i},C:function(){return r}});var i=function(t){return t.scrollTop};function r(t,e){var n=t.timeout,i=t.style,r=void 0===i?{}:i;return{duration:r.transitionDuration||"number"==typeof n?n:n[e.mode]||0,delay:r.transitionDelay}}},9859:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(2122),r=n(1253),o=n(7294);function a(t,e){var n=e.disableHysteresis,i=void 0!==n&&n,r=e.threshold,o=void 0===r?100:r,a=e.target,s=t.current;return a&&(t.current=void 0!==a.pageYOffset?a.pageYOffset:a.scrollTop),!(!i&&void 0!==s&&t.current<s)&&t.current>o}var s="undefined"!=typeof window?window:null;function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getTrigger,n=void 0===e?a:e,l=t.target,c=void 0===l?s:l,u=(0,r.Z)(t,["getTrigger","target"]),d=o.useRef(),p=o.useState((function(){return n(d,u)})),m=p[0],f=p[1];return o.useEffect((function(){var t=function(){f(n(d,(0,i.Z)({target:c},u)))};return t(),c.addEventListener("scroll",t),function(){c.removeEventListener("scroll",t)}}),[c,n,JSON.stringify(u)]),m}},8631:function(t,e,n){"use strict";var i=n(5318),r=n(862);e.Z=void 0;var o=r(n(7294)),a=(0,i(n(8786)).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");e.Z=a},4429:function(t,e,n){"use strict";var i=n(5318),r=n(862);e.Z=void 0;var o=r(n(7294)),a=(0,i(n(8786)).default)(o.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");e.Z=a},6725:function(t,e,n){"use strict";var i=n(5318),r=n(862);e.Z=void 0;var o=r(n(7294)),a=(0,i(n(8786)).default)(o.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");e.Z=a},1423:function(t,e,n){"use strict";n.d(e,{ZP:function(){return b}});var i=n(9756),r=n(3552),o=n(7294),a=n(3935),s=!1,l=n(1278),c="unmounted",u="exited",d="entering",p="entered",m="exiting",f=function(t){function e(e,n){var i;i=t.call(this,e,n)||this;var r,o=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?o?(r=u,i.appearStatus=d):r=p:r=e.unmountOnExit||e.mountOnEnter?c:u,i.state={status:r},i.nextCallback=null,i}(0,r.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:u}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(e=d):n!==d&&n!==p||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!=typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===u&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,r=this.props.nodeRef?[i]:[a.findDOMNode(this),i],o=r[0],l=r[1],c=this.getTimeouts(),u=i?c.appear:c.enter;!t&&!n||s?this.safeSetState({status:p},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,l),this.safeSetState({status:d},(function(){e.props.onEntering(o,l),e.onTransitionEnd(u,(function(){e.safeSetState({status:p},(function(){e.props.onEntered(o,l)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);e&&!s?(this.props.onExit(i),this.safeSetState({status:m},(function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=r[0],s=r[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(t,r):o.cloneElement(o.Children.only(n),r))},e}(o.Component);function h(){}f.contextType=l.Z,f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},f.UNMOUNTED=c,f.EXITED=u,f.ENTERING=d,f.ENTERED=p,f.EXITING=m;var b=f},362:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i=n(7294),r=n(8266),o=n(453),a=n(4621);var s=function(t){var e=t.company;return i.createElement(i.Fragment,null,"Copyright © ",(new Date).getFullYear()," ",e)},l=n(3729),c=n(4850),u=n(4429);var d=(0,a.Z)((function(t){return{root:{color:t.palette.common.white,backgroundColor:t.palette.primary.main}}}))((function(t){var e=t.classes,n=t.url;return i.createElement(l.Z,{className:e.root,"aria-label":"github",component:c.Z,href:n,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},i.createElement(u.Z,null))})),p=n(8631);var m=(0,a.Z)((function(t){return{root:{color:t.palette.common.white,backgroundColor:t.palette.primary.main}}}))((function(t){var e=t.classes,n="mailto:"+t.email;return i.createElement(l.Z,{className:e.root,"aria-label":"email",component:c.Z,href:n,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},i.createElement(p.Z,null))}));var f=(0,a.Z)((function(t){return{root:{color:t.palette.common.white,backgroundColor:t.palette.primary.main,marginTop:t.spacing(8),padding:t.spacing(6,2)}}}))((function(t){var e=t.classes,n=t.siteMeta,a=n.siteUrl,l=n.gitHubUrl,c=n.company,u=n.contact,p=u.name,f=u.email;return i.createElement(r.Z,{className:e.root},i.createElement(o.Z,{variant:"subtitle2",gutterBottom:!0},p),i.createElement(r.Z,null,i.createElement(d,{url:l}),i.createElement(m,{email:f})),i.createElement(o.Z,{variant:"subtitle2",align:"right"},i.createElement(s,{company:c,siteUrl:a,email:f})))}))},6395:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(7294),r=n(2122),o=n(4699),a=n(1253),s=n(1423),l=n(381),c=n(9355),u=n(9701),d=n(1291),p={entering:{transform:"none"},entered:{transform:"none"}},m={enter:l.x9.enteringScreen,exit:l.x9.leavingScreen},f=i.forwardRef((function(t,e){var n=t.children,l=t.disableStrictModeCompat,f=void 0!==l&&l,h=t.in,b=t.onEnter,g=t.onEntered,v=t.onEntering,x=t.onExit,E=t.onExited,Z=t.onExiting,k=t.style,y=t.timeout,C=void 0===y?m:y,S=t.TransitionComponent,w=void 0===S?s.ZP:S,N=(0,a.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=(0,c.Z)(),T=R.unstable_strictMode&&!f,M=i.useRef(null),W=(0,d.Z)(n.ref,e),O=(0,d.Z)(T?M:void 0,W),L=function(t){return function(e,n){if(t){var i=T?[M.current,e]:[e,n],r=(0,o.Z)(i,2),a=r[0],s=r[1];void 0===s?t(a):t(a,s)}}},D=L(v),z=L((function(t,e){(0,u.n)(t);var n=(0,u.C)({style:k,timeout:C},{mode:"enter"});t.style.webkitTransition=R.transitions.create("transform",n),t.style.transition=R.transitions.create("transform",n),b&&b(t,e)})),V=L(g),I=L(Z),U=L((function(t){var e=(0,u.C)({style:k,timeout:C},{mode:"exit"});t.style.webkitTransition=R.transitions.create("transform",e),t.style.transition=R.transitions.create("transform",e),x&&x(t)})),G=L(E);return i.createElement(w,(0,r.Z)({appear:!0,in:h,nodeRef:T?M:void 0,onEnter:z,onEntered:V,onEntering:D,onExit:U,onExited:G,onExiting:I,timeout:C},N),(function(t,e){return i.cloneElement(n,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==t||h?void 0:"hidden"},p[t],k,n.props.style),ref:O},e))}))})),h=n(4621),b=n(9859);var g=(0,h.Z)((function(t){return{root:{position:"fixed",bottom:t.spacing(2),right:t.spacing(2)}}}))((function(t){var e=t.classes,n=t.children,r=(0,b.Z)({disableHysteresis:!0,threshold:100});return i.createElement(f,{in:r},i.createElement("div",{onClick:function(t){var e=(t.target.ownerDocument||document).querySelector("#back-to-top-anchor");e&&e.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:e.root},n))}))}}]);
//# sourceMappingURL=875d5575f84d2db311b8feddedb7ed30b8fce884-8e0df0fbb1f2b518c4b4.js.map