(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{317:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"TooltipPositions",{enumerable:!0,get:function(){return p.Positions}}),e.TooltipContainer=e.default=e.TooltipLayer=e.TooltipColors=void 0;var n,i,r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=T();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=n?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(0)),s=y(o(8)),u=y(o(70)),l=o(176),c=o(71),d=o(134),f=y(o(99)),p=o(324),h=o(174),v=y(o(5462));function y(t){return t&&t.__esModule?t:{default:t}}function T(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return T=function(){return t},t}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function g(t,e,o,n){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=n;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:i,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}e.TooltipColors=r,function(t){t.PRIMARY="primary",t.BLACK="black",t.GREY="grey",t.BRAND="brand",t.GREEN="green",t.YELLOW="yellow",t.RED="red"}(r||(e.TooltipColors=r={}));var m=Object.freeze({}),b=Object.freeze(((n={})[p.Positions.TOP]=v.default.tooltipTop,n[p.Positions.BOTTOM]=v.default.tooltipBottom,n[p.Positions.LEFT]=v.default.tooltipLeft,n[p.Positions.RIGHT]=v.default.tooltipRight,n[r.PRIMARY]=v.default.tooltipPrimary,n[r.BLACK]=v.default.tooltipBlack,n[r.GREY]=v.default.tooltipGrey,n[r.BRAND]=v.default.tooltipBrand,n[r.GREEN]=v.default.tooltipGreen,n[r.YELLOW]=v.default.tooltipYellow,n[r.RED]=v.default.tooltipRed,n)),O=function(t){var e=t.targetElementRef,o=t.position,n=t.color,i=t.children,r=t.tooltipClassName,a=t.tooltipContentClassName,u=t.spacing,c=void 0===u?8:u,d=t.animationStyle,f=t.disableTooltipPointerEvents,y=void 0!==f&&f,T=t.allowOverflow,S=void 0!==T&&T,m=("string"==typeof i?i:"")+":"+o;return g(h.AppReferencePositionLayer,{disablePointerEvents:y,reference:e,position:o,align:p.Align.CENTER,positionKey:m,spacing:c},void 0,(function(t){var e,u,c=t.position;return g(l.animated.div,{className:(0,s.default)(v.default.tooltip,b[null!=c?c:o],b[n],(e={},e[v.default.tooltipDisablePointerEvents]=y,e),r),style:d},void 0,g("div",{className:v.default.tooltipPointer}),g("div",{className:(0,s.default)(v.default.tooltipContent,(u={},u[v.default.tooltipContentAllowOverflow]=S,u),a)},void 0,i))}))};e.TooltipLayer=O,O.displayName="TooltipLayer";var _={scale:.95,opacity:0},I={scale:1,opacity:0},M={scale:1,opacity:1},A={tension:2400,friction:52},E=function(t){var e=t.isVisible,o=t.onAnimationRest,n=t.targetElementRef,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,["isVisible","onAnimationRest","targetElementRef"]),r=a.useContext(d.AccessibilityPreferencesContext).reducedMotion;return(0,l.useTransition)(e,{keys:function(t){return t?"tooltip":"empty"},config:A,from:r.enabled?I:_,enter:M,leave:r.enabled?I:_,onRest:o})((function(t,e){return e?a.createElement(O,S({animationStyle:t,targetElementRef:n},i)):null}))},N=function(t){var e,o;function n(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).showTimeout=new c.Timeout,e.domElementRef=a.createRef(),e.hasDomElement=!1,e.state={shouldShowTooltip:!1},e.handleMouseEnter=function(){e.show()},e.handleMouseLeave=function(){e.hide()},e.handleFocus=function(){f.default.keyboardModeEnabled&&e.show()},e.handleBlur=function(){e.hide()},e.handleClick=function(){e.props.hideOnClick&&e.hide()},e.handleContextMenu=function(){e.hide()},e}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n.getDerivedStateFromProps=function(t,e){return e.shouldShowTooltip&&null==t.text?{shouldShowTooltip:!1}:null};var i=n.prototype;return i.componentDidMount=function(){this.shouldShowTooltip(this.props,this.state)&&this.setDomElement()},i.componentDidUpdate=function(t,e){var o=this.shouldShowTooltip(this.props,this.state);o!==this.shouldShowTooltip(t,e)&&(o?this.setDomElement():this.hasDomElement=!1)},i.setDomElement=function(){var t=u.default.findDOMNode(this);if(null==t||1!==t.nodeType)throw new Error("Tooltip cannot find DOM node");this.domElementRef.current=t,this.hasDomElement=!0,this.forceUpdate()},i.componentWillUnmount=function(){this.showTimeout.stop(),this.domElementRef.current=null},i.render=function(){var t,e=this.props,o=e.children,n=e.text,i=e["aria-label"];return null==n?o(m):("string"==typeof i?t=i:"string"==typeof n&&!1!==i&&(t=n),g(a.Fragment,{},void 0,o({onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onContextMenu:this.handleContextMenu,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-label":t}),this.renderTooltip()))},i.shouldShowTooltip=function(t,e){return t.shouldShow&&(e.shouldShowTooltip||t.forceOpen)},i.renderTooltip=function(){var t=this.props,e=t.text,o=t.position,n=t.color,i=t.spacing,r=t.tooltipClassName,a=t.tooltipContentClassName,s=t.disableTooltipPointerEvents,u=t.onAnimationRest,l=t.allowOverflow;return g(E,{disableTooltipPointerEvents:s,targetElementRef:this.domElementRef,tooltipClassName:r,tooltipContentClassName:a,position:o,color:n,spacing:i,isVisible:this.shouldShowTooltip(this.props,this.state)&&this.hasDomElement,onAnimationRest:u,allowOverflow:l},void 0,e)},i.show=function(){var t=this,e=this.props.delay;null!=e?this.showTimeout.start(e,(function(){return t.toggleShow(!0)}),!1):this.toggleShow(!0)},i.hide=function(){this.showTimeout.stop(),this.toggleShow(!1)},i.toggleShow=function(t){this.state.shouldShowTooltip!==t&&this.setState({shouldShowTooltip:t})},n}(a.Component);e.default=N,N.displayName="Tooltip",N.Positions=p.Positions,N.Colors=r,N.defaultProps={disableTooltipPointerEvents:!0,hideOnClick:!0,position:p.Positions.TOP,color:r.PRIMARY,forceOpen:!1,spacing:8,shouldShow:!0,allowOverflow:!1};var w=function(t){var e=t.text,o=t.hideOnClick,n=t.position,i=t.color,r=t.delay,s=t.children,u=t.element,l=void 0===u?"div":u,c=t.forceOpen,d=void 0!==c&&c,f=t.className,p=t["aria-label"],h=t.tooltipClassName,v=t.tooltipContentClassName,y=t.disableTooltipPointerEvents,T=t.allowOverflow;return g(N,{text:e,"aria-label":p,hideOnClick:null!=o?o:void 0,position:n,color:i,delay:r,tooltipClassName:h,tooltipContentClassName:v,forceOpen:d,disableTooltipPointerEvents:y,allowOverflow:void 0!==T&&T},void 0,(function(t){return a.createElement(l,null!=f?S({},t,{className:f}):t,s)}))};e.TooltipContainer=w,w.displayName="TooltipContainer"},5043:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.determineIsAnimated=P,Object.defineProperty(e,"Sizes",{enumerable:!0,get:function(){return d.Sizes}}),e.AnimatedAvatar=e.default=void 0;var n,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=g();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=n?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(0)),r=S(o(8)),a=o(176),s=S(o(113)),u=S(o(108)),l=S(o(317)),c=o(5265),d=o(932),f=S(o(5342)),p=o(628),h=o(5325),v=o(1),y=S(o(7)),T=S(o(5465));function S(t){return t&&t.__esModule?t:{default:t}}function g(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return g=function(){return t},t}function m(t,e,o,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function O(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}var _={tension:1200,friction:70};function I(t){var e=t.size,o=t.isMobile,n=t.isTyping,r=O(t,["size","isMobile","isTyping"]),a=(0,d.getAvatarSpecs)(e),s=a.status*(o&&!n?d.MOBILE_HEIGHT_RATIO:1),u=a.status*(n?d.TYPING_WIDTH_RATIO:1),l=n?(a.status*d.TYPING_WIDTH_RATIO-a.status)/2:0,c=a.size-a.status-l-a.offset,f=a.size-s-a.offset;return i.createElement("rect",b({x:c,y:f,width:u,height:s,fill:"transparent","aria-hidden":!0},r))}function M(t,e,o,n){if(null==t)return p.MaskIDs.AVATAR_DEFAULT;if(n)switch(e){case d.Sizes.SIZE_16:return p.MaskIDs.AVATAR_STATUS_TYPING_16;case d.Sizes.SIZE_24:return p.MaskIDs.AVATAR_STATUS_TYPING_24;case d.Sizes.SIZE_32:return p.MaskIDs.AVATAR_STATUS_TYPING_32;case d.Sizes.SIZE_40:return p.MaskIDs.AVATAR_STATUS_TYPING_40;case d.Sizes.SIZE_80:return p.MaskIDs.AVATAR_STATUS_TYPING_80;case d.Sizes.SIZE_120:return p.MaskIDs.AVATAR_STATUS_TYPING_120}if(t===v.StatusTypes.ONLINE&&o)switch(e){case d.Sizes.SIZE_16:return p.MaskIDs.AVATAR_STATUS_MOBILE_16;case d.Sizes.SIZE_24:return p.MaskIDs.AVATAR_STATUS_MOBILE_24;case d.Sizes.SIZE_32:return p.MaskIDs.AVATAR_STATUS_MOBILE_32;case d.Sizes.SIZE_40:return p.MaskIDs.AVATAR_STATUS_MOBILE_40;case d.Sizes.SIZE_80:return p.MaskIDs.AVATAR_STATUS_MOBILE_80;case d.Sizes.SIZE_120:return p.MaskIDs.AVATAR_STATUS_MOBILE_120}switch(e){case d.Sizes.SIZE_16:return p.MaskIDs.AVATAR_STATUS_ROUND_16;case d.Sizes.SIZE_24:return p.MaskIDs.AVATAR_STATUS_ROUND_24;case d.Sizes.SIZE_32:return p.MaskIDs.AVATAR_STATUS_ROUND_32;case d.Sizes.SIZE_40:return p.MaskIDs.AVATAR_STATUS_ROUND_40;case d.Sizes.SIZE_80:return p.MaskIDs.AVATAR_STATUS_ROUND_80;case d.Sizes.SIZE_120:return p.MaskIDs.AVATAR_STATUS_ROUND_120}throw new Error("getMaskId(): Unsupported type, size: "+e+", status: "+t+", isMobile: "+(o?"true":"false"))}function A(t){var e=t.status,o=t.isMobile,n=t.isTyping,i=t.size,r=o&&!n&&e===v.StatusTypes.ONLINE,a=(0,d.getAvatarSpecs)(i);return b({},function(t,e,o){var n=t.size,i=t.status,r=t.stroke,a=t.offset,s=o?i*d.TYPING_WIDTH_RATIO:i,u=(s-i)/2,l=e?i*d.MOBILE_HEIGHT_RATIO:i;return{avatarCutoutX:n-s+u-r-a,avatarCutoutY:n-l-r-a,avatarCutoutWidth:s+2*r,avatarCutoutHeight:l+2*r,avatarCutoutRadius:e?(l+2*r)*d.CUTOUT_BORDER_RADIUS:(i+2*r)/2}}(a,r,n),{},(0,h.getStatusValues)({status:e,size:a.status,isMobile:r,isTyping:n,topOffset:2,leftOffset:6}))}function E(t){var e=t.children,o=t.size,n=t.onClick,i=t.onContextMenu,a=t.onMouseEnter,s=t.onMouseLeave,l=t.className,f=t.tabIndex,p=t.ariaLabel,h=t.ariaHidden,v=t.status,S=t.isMobile,g={width:(0,d.getAvatarSize)(o),height:(0,d.getAvatarSize)(o)},b=null==p||h?void 0:function(t,e,o){return void 0===o&&(o=!1),null!=e?y.default.Messages.LABEL_WITH_ONLINE_STATUS.format({label:t,status:(0,c.humanizeStatus)(e,o)}):t}(p,v,S);return null!=n?m(u.default,{className:(0,r.default)(l,T.default.wrapper,T.default.pointer),style:g||void 0,onClick:n,tabIndex:f,onContextMenu:i,onMouseEnter:a||void 0,onMouseLeave:s||void 0,"aria-label":b,"aria-hidden":h},void 0,e):m("div",{className:(0,r.default)(l,T.default.wrapper),style:g,onContextMenu:i||void 0,onMouseEnter:a||void 0,onMouseLeave:s||void 0,role:"img","aria-label":b,"aria-hidden":h},void 0,e)}I.displayName="TooltipActivation",E.displayName="renderWrapper";var N=function(t){var e=t.src,o=t.status,n=t.className,a=t.size,s=t.statusColor,u=t.onClick,p=t.isMobile,v=void 0!==p&&p,y=t.isTyping,S=void 0!==y&&y,g=t.statusTooltip,O=void 0!==g&&g,_=t.onContextMenu,I=t.tabIndex,A=t.onMouseEnter,N=t.onMouseLeave,w=t["aria-hidden"],R=void 0!==w&&w,k=t["aria-label"];var P=(0,d.getAvatarSpecs)(a),C=Math.ceil((P.status*d.TYPING_WIDTH_RATIO-P.status)/2);return E({children:m("svg",{width:P.size+C,height:P.size,viewBox:"0 0 "+(P.size+C)+" "+P.size,className:(0,r.default)(T.default.mask,T.default.svg),"aria-hidden":!0},void 0,m("foreignObject",{x:0,y:0,width:P.size,height:P.size,mask:"url(#"+M(o,a,v,S)+")"},void 0,m("img",{src:e||void 0,alt:" ",className:T.default.avatar,"aria-hidden":!0})),null!=o?m(l.default,{text:O?(0,c.humanizeStatus)(o):null,"aria-label":!1,position:l.default.Positions.TOP,spacing:5+1.5*P.stroke},void 0,(function(t){return i.createElement(i.Fragment,null,i.createElement("rect",b({},t,function(t,e,o,n){void 0===n&&(n=!1);var i=(0,h.getStatusSize)(t.status,e,o,n);return b({},i,{x:(n?t.size-(i.width/2+t.status/2):t.size-i.width)-t.offset,y:t.size-i.height-t.offset})}(P,o,v,S),{fill:s||(0,h.getStatusColor)(o),mask:"url(#"+(0,h.getStatusMask)(o,v,S)+")",className:T.default.pointerEvents})),S?m(f.default,{dotRadius:P.status/4,x:P.size-1.375*P.status-P.offset,y:P.size-P.status/1.333-P.offset}):null)})):null),size:a,onClick:u,onContextMenu:_,onMouseEnter:A,onMouseLeave:N,className:n,ariaLabel:k,tabIndex:I,ariaHidden:R,isMobile:v,status:o})};N.Sizes=d.Sizes;var w=N;function R(t,e,o,n){return void 0===n&&(n=!1),5-(o&&!n?0:.5*t)+1.5*e}e.default=w;var k=function(t){var e=t.className,o=t.fromIsMobile,n=void 0===o||o,u=t.fromStatus,p=t.fromColor,v=t.isMobile,y=void 0!==v&&v,S=t.isTyping,g=void 0!==S&&S,M=t.onClick,N=t.onContextMenu,w=t.onMouseEnter,k=t.onMouseLeave,P=t.size,C=t.src,D=t.status,L=t.statusColor,z=t.statusTooltip,x=void 0!==z&&z,U=t.tabIndex,j=t["aria-hidden"],Y=void 0!==j&&j,W=t["aria-label"];var H=i.useState((function(){return{avatarMask:s.default.v4(),statusIconMask:s.default.v4(),fromSpecs:b({fill:p},A({size:P,status:u,isMobile:n,isTyping:!1}))}}))[0],B=H.avatarMask,G=H.statusIconMask,V=H.fromSpecs,X=i.useMemo((function(){return b({fill:null==L?(0,h.getStatusColor)(D):L},A({size:P,status:D,isMobile:y,isTyping:g}))}),[P,D,y,g,L]),F=(0,a.useSpring)({immediate:!document.hasFocus(),config:_,from:V,to:X}),Z=F.avatarCutoutX,$=F.avatarCutoutY,K=F.avatarCutoutWidth,J=F.avatarCutoutHeight,q=F.avatarCutoutRadius,Q=F.fill,tt=O(F,["avatarCutoutX","avatarCutoutY","avatarCutoutWidth","avatarCutoutHeight","avatarCutoutRadius","fill"]),et=(0,d.getAvatarSize)(P),ot=(0,d.getAvatarSpecs)(P),nt=ot.status*d.TYPING_WIDTH_RATIO,it=ot.status*d.MOBILE_HEIGHT_RATIO,rt=(ot.status*d.TYPING_WIDTH_RATIO-ot.status)/2,at=ot.size-ot.status-rt-ot.offset,st=ot.size-it-ot.offset;return E({children:m("svg",{width:ot.size+Math.ceil(rt),height:ot.size,viewBox:"0 0 "+(ot.size+Math.ceil(rt))+" "+ot.size,className:(0,r.default)(T.default.mask,T.default.svg),"aria-hidden":!0},void 0,m("mask",{id:B,width:et,height:et},void 0,m("circle",{cx:et/2,cy:et/2,r:et/2,fill:"white"}),m(a.animated.rect,{color:"black",x:Z,y:$,width:K,height:J,rx:q,ry:q})),m("foreignObject",{x:0,y:0,width:et,height:et,mask:"url(#"+B+")"},void 0,m("img",{src:C||void 0,alt:" ",className:T.default.avatar,"aria-hidden":!0})),m(l.default,{text:x?(0,c.humanizeStatus)(D):null,"aria-label":!1,position:l.default.Positions.TOP,spacing:R(ot.status,ot.stroke,y,g)},void 0,(function(t){return i.createElement(i.Fragment,null,m("svg",{x:at,y:st,width:nt,height:it,viewBox:"0 0 "+nt+" "+it,className:x?T.default.cursorDefault:void 0},void 0,(0,h.renderStatusMask)(tt,ot.status,G),m(a.animated.rect,{fill:Q,width:nt,height:it,mask:"url(#"+G+")"}),m(f.default,{dotRadius:ot.status/4,x:.15*nt,y:.5*it,hide:!g})),i.createElement(I,b({size:P,isMobile:y,isTyping:g,className:T.default.pointerEvents},t)))}))),size:P,onClick:M,onContextMenu:N,onMouseEnter:w,onMouseLeave:k,className:e,tabIndex:U,ariaLabel:W,ariaHidden:Y,isMobile:y,status:D})};function P(t,e,o,n,i){return null!=o&&null!=e&&!!(t||e!==o||e===v.StatusTypes.ONLINE&&n!==i)}var C=i.memo((function(t){var e=t.statusColor,o=t.status,n=O(t,["statusColor","status"]),r=n.isMobile,a=void 0!==r&&r,s=n.isTyping,u=void 0!==s&&s,l=i.useRef(o),c=i.useRef(a),d=null==e?(0,h.getStatusColor)(o):e,f=i.useRef(d),p=i.useRef(!1),v=p.current||P(u,o,l.current,a,c.current);return i.useLayoutEffect((function(){p.current=v,l.current=o,c.current=a,f.current=d}),[o,a,d,v]),null!=o&&null!=l.current&&v?i.createElement(k,b({},n,{status:o,statusColor:d,fromStatus:l.current,fromIsMobile:c.current,fromColor:f.current})):i.createElement(N,b({},n,{status:o,statusColor:d}))}));e.AnimatedAvatar=C},5144:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n,i,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=n?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(0)),a=(n=o(39))&&n.__esModule?n:{default:n};function s(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function l(t,e,o,n){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=n;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:i,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function c(t){var e=t.width,o=void 0===e?16:e,n=t.height,i=void 0===n?16:n,s=t.color,c=void 0===s?"currentColor":s,d=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,["width","height","color"]);return r.createElement("svg",u({},(0,a.default)(d),{width:o,height:i,viewBox:"0 0 16 15.2"}),l("path",{d:"M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",fill:c}))}c.displayName="Verified"},5265:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.humanizeStatus=function(t,e){void 0===e&&(e=!1);switch(t){case r.StatusTypes.ONLINE:return e?a.default.Messages.STATUS_ONLINE_MOBILE:a.default.Messages.STATUS_ONLINE;case r.StatusTypes.OFFLINE:return a.default.Messages.STATUS_OFFLINE;case r.StatusTypes.IDLE:return a.default.Messages.STATUS_IDLE;case r.StatusTypes.DND:return a.default.Messages.STATUS_DND;case r.StatusTypes.INVISIBLE:return a.default.Messages.STATUS_INVISIBLE;case r.StatusTypes.STREAMING:return a.default.Messages.STATUS_STREAMING;case r.StatusTypes.UNKNOWN:default:return a.default.Messages.STATUS_DND}},e.accountAgeInRange=s,e.isNewUser=function(t){return s(t,{maxDaysOld:7,minDaysOld:0})};var n,i=o(226),r=o(1),a=(n=o(7))&&n.__esModule?n:{default:n};function s(t,e){var o=e.maxDaysOld,n=e.minDaysOld,r=void 0===n?0:n;if(null==t)return!1;var a=(0,i.now)()-t.createdAt.getTime();return!!((null==o||a<=864e5*o)&&a>=864e5*r)}},5325:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStatusColor=S,e.getStatusValues=b,e.renderStatusMask=_,e.getStatusMask=M,e.getStatusSize=A,Object.defineProperty(e,"StatusTypes",{enumerable:!0,get:function(){return d.StatusTypes}}),e.Status=e.AnimatedStatus=void 0;var n,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=h();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=n?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(0)),r=p(o(8)),a=o(255),s=o(176),u=p(o(113)),l=o(932),c=p(o(628)),d=o(1),f=p(o(5464));function p(t){return t&&t.__esModule?t:{default:t}}function h(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return h=function(){return t},t}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function y(t,e,o,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}var T={tension:600,friction:70};function S(t){switch(t){case d.StatusTypes.ONLINE:return d.Colors.STATUS_GREEN;case d.StatusTypes.IDLE:return d.Colors.STATUS_YELLOW;case d.StatusTypes.DND:return d.Colors.STATUS_RED;case d.StatusTypes.STREAMING:return d.Colors.TWITCH;case d.StatusTypes.INVISIBLE:case d.StatusTypes.UNKNOWN:case d.StatusTypes.OFFLINE:default:return d.Colors.STATUS_GREY}}function g(t,e,o,n){return"scale("+e+") translate("+(.5625*t+n)+" "+(.75*t+o)+")"}function m(t,e,o){return.5625*t+o+"px "+(.75*t+e)+"px"}function b(t){var e=t.size,o=t.status,n=t.isMobile,i=t.isTyping,r=t.topOffset,a=void 0===r?0:r,s=t.leftOffset,u=a/8*e,c=(void 0===s?0:s)/8*e;if(i)return{bgRadius:.5*e,bgY:.25*e+u,bgX:0,bgHeight:e,bgWidth:e*l.TYPING_WIDTH_RATIO,cutoutX:.5*e+c,cutoutY:.75*e+u,cutoutWidth:0,cutoutHeight:0,cutoutRadius:0,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0};switch(o){case d.StatusTypes.ONLINE:return n?{bgRadius:e*l.MOBILE_HEIGHT_RATIO*l.MOBILE_ICON_RADIUS,bgY:0,bgX:c,bgHeight:e*l.MOBILE_HEIGHT_RATIO,bgWidth:e,cutoutX:.125*e+c,cutoutY:.25*e,cutoutWidth:.75*e,cutoutHeight:.75*e,cutoutRadius:0,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:1.25*e,dotX:.5*e+c,dotRadius:.125*e}:{bgRadius:.5*e,bgY:.25*e+u,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.5*e+c,cutoutY:.75*e+u,cutoutWidth:0,cutoutHeight:0,cutoutRadius:0,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0};case d.StatusTypes.IDLE:return{bgRadius:.5*e,bgY:.25*e+u,bgX:c,bgHeight:e,bgWidth:e,cutoutX:-.125*e+c,cutoutY:.125*e+u,cutoutWidth:.75*e,cutoutHeight:.75*e,cutoutRadius:.375*e,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0};case d.StatusTypes.DND:return{bgRadius:.5*e,bgY:.25*e+u,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.125*e+c,cutoutY:.625*e+u,cutoutWidth:.75*e,cutoutHeight:.25*e,cutoutRadius:.125*e,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0};case d.StatusTypes.STREAMING:return{bgRadius:.5*e,bgY:.25*e+u,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.5*e+c,cutoutY:.75*e+u,cutoutWidth:0,cutoutHeight:0,cutoutRadius:.25*e,polygonScale:g(e,1,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0};case d.StatusTypes.INVISIBLE:case d.StatusTypes.UNKNOWN:case d.StatusTypes.OFFLINE:default:return{bgRadius:.5*e,bgY:.25*e+u,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.25*e+c,cutoutY:.5*e+u,cutoutWidth:.5*e,cutoutHeight:.5*e,cutoutRadius:.25*e,polygonScale:g(e,0,u,c),polygonOrigin:m(e,u,c),dotY:.75*e+u,dotX:.5*e+c,dotRadius:0}}}function O(t){return"-"+.216506*t+",-"+.25*t+" "+.216506*t+",0 -"+.216506*t+","+.25*t}function _(t,e,o){var n=t.bgRadius,i=t.bgY,r=t.bgX,a=t.bgHeight,u=t.bgWidth,l=t.cutoutX,c=t.cutoutY,d=t.cutoutWidth,f=t.cutoutHeight,p=t.cutoutRadius,h=t.polygonScale,v=t.polygonOrigin,T=t.dotY,S=t.dotX,g=t.dotRadius;return y("mask",{id:o},void 0,y(s.animated.rect,{x:r,y:i,width:u,height:a,rx:n,ry:n,fill:"white"}),y(s.animated.rect,{x:l,y:c,width:d,height:f,rx:p,ry:p,fill:"black"}),y(s.animated.polygon,{points:O(e),fill:"black",transform:h,style:{transformOrigin:v}}),y(s.animated.circle,{fill:"black",cx:S,cy:T,r:g}))}_.displayName="renderStatusMask";var I=function(t){var e=t.status,o=t.isMobile,n=void 0!==o&&o,c=t.size,p=void 0===c?8:c,h=t.color,v=t.className,g=t.style,m=(0,a.useLazyValue)((function(){return u.default.v4()})),O=e===d.StatusTypes.ONLINE&&n,I=i.useMemo((function(){return b({size:p,status:e,isMobile:O})}),[p,e,O]),M=(0,s.useSpring)({config:T,to:I}),A=null==h?S(e):h,E=(0,s.useSpring)({config:T,fill:A},[A])[0].fill,N=p,w=Math.ceil(p*l.MOBILE_HEIGHT_RATIO);return y("svg",{width:N,height:w,viewBox:"0 0 "+N+" "+w,className:(0,r.default)(f.default.mask,v),style:g},void 0,_(M,p,m),y(s.animated.rect,{x:0,y:0,width:N,height:w,fill:E,mask:"url(#"+m+")"}))};function M(t,e,o){if(void 0===o&&(o=!1),o)return c.default.Masks.STATUS_TYPING;switch(t){case d.StatusTypes.IDLE:return c.default.Masks.STATUS_IDLE;case d.StatusTypes.DND:return c.default.Masks.STATUS_DND;case d.StatusTypes.STREAMING:return c.default.Masks.STATUS_STREAMING;case d.StatusTypes.INVISIBLE:case d.StatusTypes.UNKNOWN:case d.StatusTypes.OFFLINE:return c.default.Masks.STATUS_OFFLINE;case d.StatusTypes.ONLINE:default:return e?c.default.Masks.STATUS_ONLINE_MOBILE:c.default.Masks.STATUS_ONLINE}}function A(t,e,o,n){return void 0===n&&(n=!1),e===d.StatusTypes.ONLINE&&o&&!n?{width:t,height:t*l.MOBILE_HEIGHT_RATIO}:{width:n?t*l.TYPING_WIDTH_RATIO:t,height:t}}e.AnimatedStatus=I,I.displayName="AnimatedStatus";var E=function(t){var e=t.status,o=t.isMobile,n=void 0!==o&&o,a=t.size,s=void 0===a?8:a,u=t.className,l=t.style,p=t.color,h=e===d.StatusTypes.ONLINE&&n;return i.createElement(c.default,v({mask:M(e,h),className:(0,r.default)(f.default.mask,u),style:l},A(s,e,h)),y("div",{style:{backgroundColor:null==p?S(e):p},className:f.default.status}))};e.Status=E,E.displayName="Status"},5342:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=n?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(0)),r=u(o(8)),a=o(176),s=u(o(5463));function u(t){return t&&t.__esModule?t:{default:t}}function l(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function c(t,e,o,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function d(t,e,o,n,i,r,a){try{var s=t[r](a),u=s.value}catch(t){return void o(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function p(){return document.hasFocus()}var h={config:{friction:50,tension:900,mass:1},unique:!0,initial:{dotPosition:1},from:{dotPosition:0},enter:{dotPosition:1},leave:{dotPosition:0}},v={config:{duration:2400},from:{dotCycle:2.8},reset:!0};function y(t){var e=t%2;return e>1?1-(e-1):e}var T=i.memo((function(t){var e=t.dotRadius,o=t.dotPosition,n=i.useRef(p()),r=i.useRef(!0);i.useEffect((function(){return function(){r.current=!1}}),[]);var s=(0,a.useSpring)((function(){return f({},v,{to:(t=regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=2.8;case 1:if(r.current){t.next=4;break}return t.abrupt("break",21);case 4:if(n.current=p(),n.current){t.next=16;break}if(2.8===o){t.next=12;break}return o=2.8,t.next=10,e({dotCycle:o,immediate:!0});case 10:t.next=14;break;case 12:return t.next=14,new Promise((function(t){return setTimeout(t,1e3)}));case 14:t.next=19;break;case 16:return o+=4,t.next=19,e({dotCycle:o,immediate:!1});case 19:t.next=1;break;case 21:case"end":return t.stop()}}),t)})),e=function(){var e=this,o=arguments;return new Promise((function(n,i){var r=t.apply(e,o);function a(t){d(r,n,i,a,s,"next",t)}function s(t){d(r,n,i,a,s,"throw",t)}a(void 0)}))},function(t){return e.apply(this,arguments)})});var t,e}))[0],u=(2*e*3+e/4*2)/2;return[0,1,2].map((function(t){var i=.25*t,r=e+t*(2.5*e);return c(a.animated.circle,{cx:o.to([0,1],[u,r]),cy:e,r:s.dotCycle.to((function(t){return y(t-i)})).to([0,.4,.8,1],[.8*e,.8*e,e,e]).to((function(t){return n.current?t:e})),fill:"currentColor",style:{opacity:s.dotCycle.to((function(t){return y(t-i)})).to([0,.4,.8,1],[.3,.3,1,1]).to((function(t){return n.current?t:1}))}},t)}))})),S=i.memo((function(t){var e=t.dotRadius,o=t.x,n=t.y,i=t.hide,u=void 0!==i&&i,l=t.themed,d=void 0!==l&&l,v=t.className;return(0,a.useTransition)(u,f({},h,{key:function(t){return t?"true":"false"},immediate:!p()}))((function(t,i,u){var l=t.dotPosition,f=u.key;return i?null:c("svg",{x:o,y:n,width:2*e*3+e/2*2,height:2*e,className:(0,r.default)(v,s.default.dots,d?s.default.themed:null)},f,c(a.animated.g,{style:{opacity:l.to((function(t){return Math.min(1,Math.max(t,0))}))}},void 0,c(T,{dotRadius:e,dotPosition:l})))}))}));e.default=S}}]);
//# sourceMappingURL=bdaec9a755b28334c4af.js.map