(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{7409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ActionType:!0,useGridNavigator:!0,useListNavigator:!0,useMenuNavigator:!0,useTreeNavigator:!0,Path:!0};Object.defineProperty(t,"ActionType",{enumerable:!0,get:function(){return u.ActionType}}),Object.defineProperty(t,"useGridNavigator",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useListNavigator",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useMenuNavigator",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useTreeNavigator",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Path",{enumerable:!0,get:function(){return s.Path}});var u=n(644),o=l(n(9848));Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var c=l(n(9850));Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var i=l(n(9852));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var a=l(n(9853));Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var s=n(9206);function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},9205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return o({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){return o({},e,{focusedIndex:Math.min(e.focusedIndex+1,e.itemCount-1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return o({},e,{focusedIndex:e.itemCount-1})}(e);case r.UPDATE_ITEM_COUNT:return function(e,t){var n=t.itemCount;return o({},e,{itemCount:n,focusedIndex:Math.min(n-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return o({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Listbox navigator was given an unhandled action "+t.type)}return e},t.ListActionType=void 0;var r,u=n(644);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.ListActionType=r,function(e){e.UPDATE_ITEM_COUNT="UPDATE_ITEM_COUNT",e.SET_FOCUSED_INDEX="SET_FOCUSED_INDEX"}(r||(t.ListActionType=r={}))},9206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=i(e),r=a(e);if(null==r)return e;var u=(c(r,n)-1)%r.length;u<0&&(u=r.length-1);return null==r[u]?e:o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=i(e),r=a(e);if(null==r)return e;var u=(c(r,n)+1)%r.length;return null==r[u]?e:o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])})}(e);case u.ActionType.NAVIGATE_IN:return function(e,t){var n,r=i(e),u=a(e);if(null==u)return e;var s=u[c(u,r)],f=null==s||null===(n=s.children)||void 0===n?void 0:n[0];return null==f?e:o({},e,{focusPath:[].concat(e.focusPath,[f.key])})}(e);case u.ActionType.NAVIGATE_OUT:return function(e,t){return e.focusPath.length<=1?e:o({},e,{focusPath:e.focusPath.slice(0,-1)})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items;return o({},e,{items:n,focusPath:s(n,e.focusPath)})}(e,t);case r.SET_FOCUS_PATH:return function(e,t){var n=t.path;return o({},e,{focusPath:s(e.items,n)})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:throw new Error("Menu navigator was given an unhandled action "+t.type)}return e},t.MenuActionType=void 0;var r,u=n(644);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){return e.findIndex((function(e){return t===e.key}))}function i(e){return e.focusPath[e.focusPath.length-1]}function a(e){for(var t=e.items,n=0;n<e.focusPath.length-1;n++){if(null==t)return;t=t[c(t,e.focusPath[n])].children}return t}function s(e,t){for(var n=e,r=[],u=0;u<t.length&&null!=n;u++){var o=t[u],i=c(n,o);if(i<0||i>=n.length){var a=n[0];null!=a&&r.push(a.key);break}r.push(o),n=n[i].children}return r}t.MenuActionType=r,function(e){e.UPDATE_ITEMS="UPDATE_ITEMS",e.SET_FOCUS_PATH="SET_FOCUS_PATH"}(r||(t.MenuActionType=r={}))},9848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.navId,n=e.columnCounts,i=e.focusedX,a=void 0===i?0:i,d=e.focusedY,p=void 0===d?0:d,T=e.onSelect,y=e.prepareFocus,A=e.getNewFocusPosition,E=e.maintainFocusPosition,v=void 0===E||E,I=e.enabled,N=void 0===I||I,_=e.onDispatch,O=e.autoFocusElement,m=void 0===O||O,b=r.useCallback((function(e,t){var n=(0,u.default)(e,t);return null!=_&&_(e,n,t),n}),[_]),g=r.useReducer(b,{focusedX:a,focusedY:p,columnCounts:n}),P=g[0],h=g[1],S=P.columnCounts,C=P.focusedX,D=P.focusedY,M=r.useState((function(){return(0,c.throttle)(h,16)}))[0];return r.useEffect((function(){h({type:u.GridActionType.UPDATE_COLUMN_COUNTS,columnCounts:n})}),[n]),function(e){var t=e.navId,n=e.columnCounts,i=e.focusedX,a=e.focusedY,d=e.onSelect,p=e.prepareFocus,T=e.getNewFocusPosition,y=e.dispatch,A=e.maintainFocusPosition,E=e.enabled,v=e.autoFocusElement,I=r.useRef();I.current=E;var N=l(f(t,i,a)),_=r.useState(!1),O=_[0],m=_[1],b=r.useState(!1),g=b[0],P=b[1],h=r.useState(!1),S=h[0],C=h[1],D=r.useState((function(){return new c.HandlerMemoizer((function(e){var t=e.split(",").map(Number),n=t[0],r=t[1];return function(){m(!0),y({type:u.GridActionType.SET_FOCUSED_POSITION,x:n,y:r})}}))}))[0];r.useEffect((function(){return function(){return D.clean()}}),[D]);var M=r.useCallback((function(e){if(!I.current||!v)return!1;e.focus()}),[v]),x=r.useCallback((function(e,n){var r=f(t,e,n);(null!=p?p(e,n,r):Promise.resolve()).then((function(){var e=l(r);null!=e?(M(e),P(!1)):requestAnimationFrame((function(){return P(!0)}))}))}),[t,p,M]),G=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=T?T(i,a):[i,a],r=n[0],o=n[1];if(r===i&&o===a||(y({type:u.GridActionType.SET_FOCUSED_POSITION,x:r,y:o}),e)){var c=l(f(t,r,o));null!=c&&(C(!0),M(c))}else C(!0)}),[y,i,a,T,t,M]),F=r.useState(!1),U=F[0],k=F[1];r.useEffect((function(){if(U&&O){k(!1);var e=l(f(t,i,a));if(null==e){m(!1);var n=l(f(t));null!=n&&M(n)}else M(e)}}),[t,U,O,M,i,a]);var j=r.useCallback((function(e){I.current&&null==e&&k(!0)}),[]);r.useEffect((function(){O&&g&&null!=N&&(M(N),P(!1))}),[g,N]),r.useEffect((function(){O&&(S||x(i,a),C(!1))}),[i,a]);var w=r.useCallback((function(e){if(I.current){if(s.includes(e.key)&&!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)&&e.currentTarget===e.target)return e.preventDefault(),e.stopPropagation(),void G();var t,r=function(e){switch(e.key){case o.Keys.ENTER:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.HOME:return e.ctrlKey?o.ActionType.NAVIGATE_START:o.ActionType.NAVIGATE_INLINE_START;case o.Keys.END:return e.ctrlKey?o.ActionType.NAVIGATE_END:o.ActionType.NAVIGATE_INLINE_END}return}(e);switch(r){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_INLINE_START:case o.ActionType.NAVIGATE_INLINE_END:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:return 0===n.length||0===i&&0===a&&r===o.ActionType.NAVIGATE_LEFT||(e.preventDefault(),e.stopPropagation()),void y({type:r});case o.ActionType.SELECT_FOCUSED_ITEM:if(v&&(t=N,document.activeElement!==t))return;if(e.repeat)return;e.preventDefault(),e.stopPropagation(),y({type:r}),null!=d?d(i,a,e):null!=N&&N.click()}}}),[G,y,v,N,d,i,a]),V=r.useCallback((function(e){return e.currentTarget!==e.target?(O||(m(!0),C(!0)),!1):O?(G(!1),!1):void(A&&null!=N?x(i,a):G(!0))}),[O,A,N,G,x,i,a]),L=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;m(!1)}}),[]),K=r.useMemo((function(){return Math.max.apply(Math,n)}),[n]),R=r.useCallback((function(){return{role:"grid","aria-rowcount":n.length,"aria-colcount":K,tabIndex:O&&A?-1:0,"data-ref-id":t,onKeyDown:w,onFocus:V,onBlur:L}}),[n.length,K,O,A,t,w,V,L]),W=r.useCallback((function(e,n){var r={role:"gridcell","aria-rowindex":n+1,"aria-colindex":e+1,id:(0,c.makeGridId)(t,e,n),tabIndex:A&&e===i&&n===a?0:-1,onFocus:D.get(e+","+n)};return e===i&&n===a&&(r.ref=j),r}),[t,A,i,a,D,j]),X=r.useCallback((function(e){return{role:"row","aria-rowindex":e+1}}),[]);return r.useMemo((function(){return{dispatch:y,getContainerProps:R,getItemProps:W,getRowProps:X}}),[y,R,W,X])}({navId:t,columnCounts:S,focusedX:C,focusedY:D,dispatch:M,onSelect:T,prepareFocus:y,getNewFocusPosition:A,maintainFocusPosition:v,enabled:N,autoFocusElement:m})},Object.defineProperty(t,"GridActionType",{enumerable:!0,get:function(){return u.GridActionType}});var r=a(n(0)),u=a(n(9849)),o=n(644),c=n(365);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var s=[o.Keys.TAB];function f(e,t,n){return null!=t&&null!=n?"#"+(0,c.makeGridId)(e,t,n):"[data-ref-id="+e+"]"}function l(e){return document.querySelector(e)}},9849:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=c(0,e.focusedY-1);return o({},e,{focusedX:i(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=i(e.focusedY+1,e.columnCounts.length-1);return o({},e,{focusedX:i(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=!(e.focusedY===e.columnCounts.length-1)&&e.focusedX+1===e.columnCounts[e.focusedY],r=n?0:i(e.focusedX+1,e.columnCounts[e.focusedY]-1),u=n?e.focusedY+1:e.focusedY;return o({},e,{focusedX:r,focusedY:u})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=!(0===e.focusedY)&&0===e.focusedX,r=n?e.focusedY-1:e.focusedY,u=n?e.columnCounts[r]-1:c(0,e.focusedX-1);return o({},e,{focusedX:u,focusedY:r})}(e);case u.ActionType.NAVIGATE_INLINE_START:return function(e,t){return o({},e,{focusedX:0})}(e);case u.ActionType.NAVIGATE_INLINE_END:return function(e,t){return o({},e,{focusedX:e.columnCounts[e.focusedY]-1})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedX:0,focusedY:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){var n=e.columnCounts.length-1;return o({},e,{focusedX:e.columnCounts[n]-1,focusedY:n})}(e);case r.UPDATE_COLUMN_COUNTS:return function(e,t){var n=t.columnCounts,r=i(c(0,n.length-1),e.focusedY);return o({},e,{columnCounts:n,focusedX:i(null==n[r]?0:n[r]-1,e.focusedX),focusedY:r})}(e,t);case r.SET_FOCUSED_POSITION:return function(e,t){var n=t.x,r=c(0,i(t.y,e.columnCounts.length-1));return o({},e,{focusedX:c(0,i(n,e.columnCounts[r]-1)),focusedY:r})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Grid navigator was given an unhandled action "+t.type)}return e},t.GridActionType=void 0;var r,u=n(644);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){return Number.isNaN(e)?t:Number.isNaN(t)?e:Math.max(e,t)}function i(e,t){return Number.isNaN(e)?t:Number.isNaN(t)?e:Math.min(e,t)}t.GridActionType=r,function(e){e.UPDATE_COLUMN_COUNTS="UPDATE_COLUMN_COUNTS",e.SET_FOCUSED_POSITION="SET_FOCUSED_POSITION"}(r||(t.GridActionType=r={}))},9850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSparseListNavigator=function(e){var t=e.navId,n=e.items,u=e.focusedIndex,c=void 0===u?0:u,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,p=e.includeSetSizes,y=void 0===p||p,A=e.focusOnMount,E=void 0===A||A,v=e.enabled,I=void 0===v||v,N=e.onDispatch,_=e.makeId,O=e.getIndexFromId,m=r.useCallback((function(e,t){var n=(0,o.default)(e,t);return null!=N&&N(e,n,t),n}),[N]),b=r.useReducer(m,{focusedIndex:c,itemCount:n.length,items:n}),g=b[0],P=b[1],h=g.itemCount,S=g.focusedIndex,C=r.useState((function(){return(0,i.throttle)(P,16)}))[0];return r.useEffect((function(){P({type:o.SparseListActionType.UPDATE_ITEMS,items:n})}),[n]),T({navId:t,itemCount:h,focusedIndex:S,dispatch:C,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:y,focusOnMount:E,enabled:I,makeId:_,getIndexFromId:O})},t.default=function(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,c=void 0===o?0:o,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,p=e.includeSetSizes,y=void 0===p||p,A=e.focusOnMount,E=void 0===A||A,v=e.enabled,I=void 0===v||v,N=e.onDispatch,_=r.useCallback((function(e,t){var n=(0,u.default)(e,t);return null!=N&&N(e,n,t),n}),[N]),O=r.useReducer(_,{focusedIndex:c,itemCount:n}),m=O[0],b=O[1],g=m.itemCount,P=m.focusedIndex,h=r.useState((function(){return(0,i.throttle)(b,16)}))[0];return r.useEffect((function(){b({type:u.ListActionType.UPDATE_ITEM_COUNT,itemCount:n})}),[n]),T({navId:t,itemCount:g,focusedIndex:P,dispatch:h,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:y,focusOnMount:E,enabled:I})},Object.defineProperty(t,"ListAction",{enumerable:!0,get:function(){return u.ListAction}}),Object.defineProperty(t,"ListActionType",{enumerable:!0,get:function(){return u.ListActionType}}),Object.defineProperty(t,"SparseListAction",{enumerable:!0,get:function(){return o.SparseListAction}}),Object.defineProperty(t,"SparseListState",{enumerable:!0,get:function(){return o.SparseListState}});var r=s(n(0)),u=s(n(9205)),o=s(n(9851)),c=n(644),i=n(365);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var f=[c.Keys.TAB,c.Keys.UP,c.Keys.DOWN];function l(e,t,n){return null!=n?"#"+e(t,n):"#"+t}function d(e){return document.querySelector(e)}function p(e){var t;null===(t=document.getElementById(e))||void 0===t||t.focus()}function T(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,a=e.onSelect,s=e.setFocus,T=void 0===s?p:s,y=e.getNewFocusIndex,A=e.dispatch,E=e.maintainFocusPosition,v=e.includeSetSizes,I=e.focusOnMount,N=e.enabled,_=e.makeId,O=void 0===_?i.makeId:_,m=e.getIndexFromId,b=r.useRef(n),g=r.useRef(m);g.current=m,b.current=n;var P=r.useRef();r.useEffect((function(){P.current=N}),[N]);var h=r.useState(!1),S=h[0],C=h[1],D=r.useState((function(){return new i.HandlerMemoizer((function(e){return function(){var t=null!=g.current&&"string"==typeof e?g.current(e):e;"number"!=typeof t||t<0||A({type:u.ListActionType.SET_FOCUSED_INDEX,index:t})}}))}))[0];r.useEffect((function(){return function(){return D.clean()}}),[D]);var M=r.useCallback((function(e,t){P.current&&T(e,t)}),[T]),x=r.useState(!0),G=x[0],F=x[1];r.useEffect((function(){!G||I?M(O(t,o),o):F(!1)}),[o]);var U=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=y?y(o):o;n!==o&&A({type:u.ListActionType.SET_FOCUSED_INDEX,index:n}),e&&M(O(t,n),n)}),[O,o,y,A,t,M]),k=r.useCallback((function(e){if(P.current){if(f.includes(e.key)&&!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)&&e.currentTarget===e.target)return e.preventDefault(),e.stopPropagation(),void U();var n,r=function(e){switch(e.key){case c.Keys.ENTER:case c.Keys.SPACE:return c.ActionType.SELECT_FOCUSED_ITEM;case c.Keys.UP:return c.ActionType.NAVIGATE_UP;case c.Keys.DOWN:return c.ActionType.NAVIGATE_DOWN;case c.Keys.HOME:return c.ActionType.NAVIGATE_START;case c.Keys.END:return c.ActionType.NAVIGATE_END}}(e);switch(r){case c.ActionType.NAVIGATE_UP:case c.ActionType.NAVIGATE_DOWN:case c.ActionType.NAVIGATE_START:case c.ActionType.NAVIGATE_END:return e.preventDefault(),e.stopPropagation(),void A({type:r});case c.ActionType.SELECT_FOCUSED_ITEM:var u=d(l(O,t,o));if(n=u,document.activeElement!==n)return;if(e.repeat)return;if(e.preventDefault(),e.stopPropagation(),A({type:r}),null!=a)return void a(o);null==u||u.click()}}}),[O,t,A,o,U,a]),j=r.useCallback((function(){!S&&C(!0)}),[S]),w=r.useCallback((function(){S||(E?M(O(t,o),o):U(!0))}),[O,t,M,E,S,o,U]),V=r.useCallback((function(e){e.currentTarget.contains(e.relatedTarget)||requestAnimationFrame((function(){null!=d(l(O,t,o))?C(!1):M(t)}))}),[O,t,o,M]),L=r.useRef(null);r.useLayoutEffect((function(){var e=L.current;if(null!=e)return e.addEventListener("focusin",j),e.addEventListener("focus",w),e.addEventListener("focusout",V),function(){e.removeEventListener("focusin",j),e.removeEventListener("focus",w),e.removeEventListener("focusout",V)}}),[w,j,V]);var K=r.useCallback((function(){return{role:"list",tabIndex:S&&E?-1:0,id:t,onKeyDown:k,ref:L}}),[t,S,k,E]),R=r.useCallback((function(e){var n=e.index;return{role:"listitem","aria-setsize":v?b.current:void 0,"aria-posinset":v?n+1:void 0,id:O(t,n),tabIndex:E&&n===o?0:-1,onFocus:D.get(null!=g.current?O(t,n):n)}}),[O,t,o,E,D,v]);return r.useMemo((function(){return{dispatch:A,getContainerProps:K,getItemProps:R}}),[A,K,R])}},9851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case o.ActionType.NAVIGATE_UP:return function(e,t){for(var n=e.items,r=e.focusedIndex,u=-1,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return c({},e,{focusedIndex:Math.max(0,u)})}(e);case o.ActionType.NAVIGATE_DOWN:return function(e,t){for(var n=e.items,r=e.itemCount,u=e.focusedIndex,o=1/0,i=u+1;i<r-1;i++)if(void 0!==n[i]){o=i;break}return c({},e,{focusedIndex:Math.min(o,r-1)})}(e);case o.ActionType.NAVIGATE_START:return function(e,t){for(var n=e.items,r=e.itemCount,u=0,o=0;o<r;o++)if(void 0!==n[o]){u=o;break}return c({},e,{focusedIndex:u})}(e);case o.ActionType.NAVIGATE_END:return function(e,t){for(var n=e.items,r=e.itemCount,u=r,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return c({},e,{focusedIndex:u})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items,r=n.length,u=e.items[e.focusedIndex],o=n.indexOf(u);return c({},e,{itemCount:r,items:n,focusedIndex:-1===o?Math.min(e.focusedIndex,r):o})}(e,t);case u.ListActionType.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return c({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case o.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("SparseListReducer was given an unhandled action "+t.type)}return e},t.SparseListActionType=void 0;var r,u=n(9205),o=n(644);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.SparseListActionType=r,function(e){e.UPDATE_ITEMS="UPDATE_ITEMS"}(r||(t.SparseListActionType=r={}))},9852:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.navId,n=e.items,i=e.initialFocusPath,a=e.onSelect,s=e.enabled,f=void 0===s||s,l=e.closeMenu,d=r.useRef(f);r.useLayoutEffect((function(){d.current=f}),[f]);var p=r.useReducer(u.default,{items:n,focusPath:i}),T=p[0],y=p[1],A=r.useMemo((function(){return(0,c.throttle)(y,30)}),[y]);r.useEffect((function(){y({type:u.MenuActionType.UPDATE_ITEMS,items:n})}),[n]);var E=T.focusPath,v=r.useState(!1),I=v[0],N=v[1],_=r.useState((function(){return{onItemFocusMemoizer:new c.HandlerMemoizer((function(e){return function(){N(!0),y({type:u.MenuActionType.SET_FOCUS_PATH,path:e.split("--")})}})),onItemMouseEnterMemoizer:new c.HandlerMemoizer((function(e){return function(){y({type:u.MenuActionType.SET_FOCUS_PATH,path:e.split("--")})}}))}}))[0],O=_.onItemFocusMemoizer,m=_.onItemMouseEnterMemoizer,b=r.useCallback((function(e){var n;if(d.current){e.key===o.Keys.ESCAPE&&null!=l&&(e.stopPropagation(),e.preventDefault(),l());var r,u,i=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_IN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_OUT}return}(e);switch(i){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_IN:case o.ActionType.NAVIGATE_OUT:return e.preventDefault(),e.stopPropagation(),void A({type:i});case o.ActionType.SELECT_FOCUSED_ITEM:if(e.repeat)return;if(e.target.tabIndex>=0)return;if(e.preventDefault(),e.stopPropagation(),A({type:i}),null!=a)return void a(E);var s=null!==(n=e.target.ownerDocument)&&void 0!==n?n:document,f=(r=s,u=function(e,t){return null!=t?""+(0,c.makeId)(e,t.join("--")):e}(t,E),r.getElementById(u));null==f||f.click()}}}),[A,t,E,a]),g=r.useCallback((function(){I||N(!0)}),[I]),P=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return;I&&N(!1)}}),[I]),h=r.useCallback((function(){y({type:u.MenuActionType.SET_FOCUS_PATH,path:[]}),N(!1)}),[]),S=r.useCallback((function(e){return e.every((function(e,t){return E[t]===e}))}),[E]),C=r.useCallback((function(){return{role:"menu",id:t,tabIndex:-1,onKeyDown:b,onFocus:g,onBlur:P,onMouseLeave:h,"aria-activedescendant":E.length>0?(0,c.makeId)(t,E.join("--")):void 0}}),[t,b,g,P,h,E]),D=r.useCallback((function(e){var n=e.path;return{role:"menu",tabIndex:-1,"aria-activedescendant":S(n)?(0,c.makeId)(t,E.join("--")):void 0}}),[t,E,S]),M=r.useCallback((function(e){var n=e.path,r=e.role,u=void 0===r?"menuitem":r,o=n.join("--");return{role:u,id:(0,c.makeId)(t,o),tabIndex:-1,onFocus:O.get(o),onMouseEnter:m.get(o)}}),[t,O,m]);return r.useMemo((function(){return{dispatch:A,getContainerProps:C,getSubmenuProps:D,getItemProps:M,isFocused:S}}),[A,C,D,M,S])},Object.defineProperty(t,"MenuActionType",{enumerable:!0,get:function(){return u.MenuActionType}}),Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return u.MenuItem}});var r=a(n(0)),u=a(n(9206)),o=n(644),c=n(365);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},9853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.nodes,n=e.rootIds,i=e.navId,a=e.enabled,l=void 0===a||a,d=e.onSelect,p=r.useReducer(u.default,void 0,(function(){return(0,u.treeReducerInitializer)(t,n)})),T=p[0],y=p[1],A=r.useState((function(){return(0,c.throttle)(y,16)}))[0],E=r.useState((function(){return new u.TreeNavigatorStore(T)}))[0];E._updateState(T);var v=r.useState(!1),I=v[0],N=v[1],_=r.useState(!1),O=_[0],m=_[1],b=r.useRef();b.current=l;var g=E.getFocusedIndex(),P=E.getFocusedNode(),h=f(s(i,g)),S=r.useState((function(){return new c.HandlerMemoizer((function(e){return function(){m(!0),A({type:u.TreeActionType.SET_FOCUSED_NODE,nodeId:e})}}))}))[0];r.useEffect((function(){return function(){return S.clean()}}),[S]);var C=r.useCallback((function(e){if(!b.current)return!1;document.activeElement!=e&&e.focus()}),[]);r.useEffect((function(){A({type:u.TreeActionType.UPDATE_NODES,newNodes:t,rootIds:n})}),[t,n,A]),r.useEffect((function(){if(O)if(I)N(!1);else{var e=f(s(i,g));null!=e&&C(e)}}),[g]);var D=r.useCallback((function(e){if(b.current){var t,n=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.HOME:return o.ActionType.NAVIGATE_START;case o.Keys.END:return o.ActionType.NAVIGATE_END}return}(e);switch(n){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:return e.preventDefault(),e.stopPropagation(),void A({type:n});case o.ActionType.SELECT_FOCUSED_ITEM:if(t=h,document.activeElement!==t)return;if(e.repeat)return;e.preventDefault(),e.stopPropagation(),A({type:n}),null!=d?null!=P&&d(P):null!=h&&h.click()}}}),[A,P,h,d]),M=r.useCallback((function(){O||(m(!0),N(!0))}),[O]),x=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;O&&m(!1)}}),[O]),G=r.useCallback((function(){return{role:"tree","data-ref-id":i,tabIndex:-1,onKeyDown:D,onFocus:M,onBlur:x}}),[D,x,M,i]),F=r.useCallback((function(e){var t,n=e.id,r=E.getNode(n),u=null!==(t=E.getVisibleNodeIndex(n))&&void 0!==t?t:-1,o=null!=r&&r.children.length>0,a={role:"treeitem",tabIndex:u===g?0:-1,"aria-setsize":E.getVisibleNodeCount(),"aria-posinset":u+1,"data-ref-id":(0,c.makeId)(i,u),onFocus:S.get(n)};return o&&(a["aria-expanded"]=null!=r&&r.expanded),a}),[i,g,E,S]);return{store:E,dispatch:A,getContainerProps:G,getItemProps:F}},Object.defineProperty(t,"TreeActionType",{enumerable:!0,get:function(){return u.TreeActionType}}),Object.defineProperty(t,"TreeNode",{enumerable:!0,get:function(){return u.TreeNode}});var r=a(n(0)),u=a(n(9854)),o=n(644),c=n(365);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}function s(e,t){return null!=t?"[data-ref-id="+(0,c.makeId)(e,t)+"]":"[data-ref-id="+e+"]"}function f(e){return document.querySelector(e)}},9854:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return c({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){return c({},e,{focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex+1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return c({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return c({},e,{focusedIndex:Math.max(0,e.visibleNodeList.length-1)})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=a(e);if(null==n)return e;if(n.expanded)return f(e,n.id,c({},n,{expanded:!1}));if(null!=n.parent){var r,u=null!==(r=s(e,n.parent))&&void 0!==r?r:0;return c({},e,{focusedIndex:u})}return e}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=a(e);if(null==n)return e;var r=n.children.length>0;if(r&&!n.expanded)return f(e,n.id,c({},n,{expanded:!0}));if(r&&n.expanded){var u,o=null!==(u=s(e,n.children[0]))&&void 0!==u?u:0;return c({},e,{focusedIndex:o})}return e}(e);case r.UPDATE_NODE:return function(e,t){var n=t.node;return f(e,n.id,n)}(e,t);case r.UPDATE_NODES:return function(e,t){var n=t.newNodes,r=t.rootIds;return function(e,t,n){var r,u=a(e),o=c({},e,{nodes:t,rootIds:n});return o.visibleNodeList=l(o),c({},o,{focusedIndex:null!=u&&null!==(r=s(o,u.id))&&void 0!==r?r:0})}(e,n,r)}(e,t);case r.REMOVE_NODE:return function(e,t){var n=t.node,r=e.nodes,u=n.id,i=(r[u],function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(r,[u].map(o)));return c({},e,{nodes:i,visibleNodeList:l(e),focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_NODE:return function(e,t){var n,r=t.nodeId,u=null!==(n=s(e,r))&&void 0!==n?n:0;return c({},e,{focusedIndex:u})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Tree navigator was given an unhandled action "+t.type)}return e},t.treeReducerInitializer=function(e,t){var n={nodes:e,rootIds:t,visibleNodeList:[],focusedIndex:0};return n.visibleNodeList=l(n),n},t.TreeNavigatorStore=t.TreeActionType=void 0;var r,u=n(644);function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return e.nodes[t]}function a(e){return i(e,e.visibleNodeList[e.focusedIndex])}function s(e,t){if(null!=t){var n=e.visibleNodeList.indexOf(t);return-1===n?void 0:n}}function f(e,t,n){var r,u,o=a(e),i=c({},e,{nodes:c({},e.nodes,(r={},r[t]=n,r))});return i.visibleNodeList=l(i),c({},i,{focusedIndex:null!=o&&null!==(u=s(i,o.id))&&void 0!==u?u:0})}function l(e){var t=[];return e.rootIds.forEach((function(n){Array.prototype.push.apply(t,function e(t,n){if(null==n)return[];var r=i(t,n);if(null==r)return[];if(!r.expanded||0===r.children.length)return[n];var u=[n];return r.children.forEach((function(n){var r=e(t,n);Array.prototype.push.apply(u,r)})),u}(e,n))})),t}t.TreeActionType=r,function(e){e.UPDATE_NODE="UPDATE_NODE",e.UPDATE_NODES="UPDATE_NODES",e.REMOVE_NODE="REMOVE_NODE",e.SET_FOCUSED_NODE="SET_FOCUSED_NODE"}(r||(t.TreeActionType=r={}));var d=function(){function e(e){this.state=e}var t=e.prototype;return t._updateState=function(e){this.state=e},t.getNodes=function(){return this.state.nodes},t.getNode=function(e){return i(this.state,e)},t.getVisibleNodeIndex=function(e){return s(this.state,e)},t.getVisibleNodeCount=function(){return this.state.visibleNodeList.length},t.getFocusedIndex=function(){return this.state.focusedIndex},t.getFocusedNode=function(){return a(this.state)},t.isHighlighted=function(e){var t=this.getFocusedNode();return null!=t&&t.id===e},e}();t.TreeNavigatorStore=d}}]);
//# sourceMappingURL=508dc39d48e4c5a031ad.js.map