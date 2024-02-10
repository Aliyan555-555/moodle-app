/*! For license information please see 4764.4c38ab1002efcfa3.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4764],{14764:(t,e,n)=>{n.r(e),n.d(e,{ion_route:()=>u,ion_route_redirect:()=>l,ion_router:()=>m,ion_router_link:()=>p});var r=n(49671),o=n(19942),i=n(50512),s=n(4459),a=n(15551);const u=class{constructor(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.d)(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length!==r.length)return this.onUpdate(t),void 0;for(const r of n)if(t[r]!==e[r])return this.onUpdate(t),void 0}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},l=class{constructor(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.d)(this,"ionRouteRedirectChanged",7),this.from=void 0,this.to=void 0}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},c="root",h="forward",generatePath=t=>"/"+t.filter((t=>t.length>0)).join("/"),writeSegments=(t,e,n,r,o,i,s)=>{const a=((t,e,n)=>{let r=generatePath(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...parsePath(e).segments,...r],n,s);o===h?t.pushState(i,"",a):t.replaceState(i,"",a)},parsePath=t=>{let e,n=[""];if(null!=t){const r=t.indexOf("?");r>-1&&(e=t.substring(r+1),t=t.substring(0,r)),n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===n.length&&(n=[""])}return{segments:n,queryString:e}},d=function(){var t=(0,r.Z)((function*(t,e,n,r,o=!1,s){try{const a=searchNavNode(t);if(r>=e.length||!a)return o;yield new Promise((t=>(0,i.c)(a,t)));const u=e[r],l=yield a.setRouteId(u.id,u.params,n,s);return l.changed&&(n=c,o=!0),o=yield d(l.element,e,n,r+1,o,s),l.markVisible&&(yield l.markVisible()),o}catch(t){return console.error(t),!1}}));return function writeNavState(e,n,r,o){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)((function*(t){const e=[];let n,r=t;for(;n=searchNavNode(r);){const t=yield n.getRouteId();if(!t)break;r=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}}));return function readNavState(e){return t.apply(this,arguments)}}(),g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=t=>{if(!t)return;if(t.matches(g))return t;const e=t.querySelector(g);return null!=e?e:void 0},findRouteRedirect=(t,e)=>e.find((e=>((t,e)=>{const{from:n,to:r}=e;if(void 0===r)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const r=n[e];if("*"===r)return!0;if(r!==t[e])return!1}return n.length===t.length})(t,e))),matchesIDs=(t,e)=>{const n=Math.min(t.length,e.length);let r=0;for(let o=0;o<n;o++){const n=t[o],i=e[o];if(n.id.toLowerCase()!==i.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===i.segments.length){const e=t.map((t=>`:${t}`));for(let t=0;t<e.length&&e[t].toLowerCase()===i.segments[t];t++)r++}}r++}return r},matchesSegments=(t,e)=>{const n=new RouterSegments(t);let r,o=!1;for(let t=0;t<e.length;t++){const i=e[t].segments;if(""===i[0])o=!0;else{for(const e of i){const o=n.next();if(":"===e[0]){if(""===o)return null;r=r||[];(r[t]||(r[t]={}))[e.slice(1)]=o}else if(o!==e)return null}o=!1}}return!o||o===(""===n.next())?r?e.map(((t,e)=>({id:t.id,segments:t.segments,params:mergeParams(t.params,r[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):e:null},mergeParams=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,findChainForSegments=(t,e)=>{let n=null,r=0;for(const o of e){const e=matchesSegments(t,o);if(null!==e){const t=computePriority(e);t>r&&(r=t,n=e)}}return n},computePriority=t=>{let e=1,n=1;for(const r of t)for(const t of r.segments)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class RouterSegments{constructor(t){this.segments=t.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const readProp=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,readRedirects=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const e=readProp(t,"to");return{from:parsePath(readProp(t,"from")).segments,to:null==e?void 0:parsePath(e)}})),readRoutes=t=>flattenRouterTree(readRouteNodes(t)),readRouteNodes=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const e=readProp(t,"component");return{segments:parsePath(readProp(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:readRouteNodes(t)}})),flattenRouterTree=t=>{const e=[];for(const n of t)flattenNode([],e,n);return e},flattenNode=(t,e,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],0===n.children.length)return e.push(t),void 0;for(const r of n.children)flattenNode(t,e,r)},m=class{constructor(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.d)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){var t=this;return(0,r.Z)((function*(){yield searchNavNode(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",(()=>t()),{once:!0})}));const e=yield t.runGuards(t.getSegments());if(!0!==e){if("object"==typeof e){const{redirect:n}=e,r=parsePath(n);t.setSegments(r.segments,c,r.queryString),yield t.writeNavStateRoot(r.segments,c)}}else yield t.onRoutesChanged()}))()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,i.q)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,i.q)(this.onRoutesChanged.bind(this),100))}onPopState(){var t=this;return(0,r.Z)((function*(){const e=t.historyDirection();let n=t.getSegments();const r=yield t.runGuards(n);if(!0!==r){if("object"!=typeof r)return!1;n=parsePath(r.redirect).segments}return t.writeNavStateRoot(n,e)}))()}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}canTransition(){var t=this;return(0,r.Z)((function*(){const e=yield t.runGuards();return!0===e||"object"==typeof e&&e.redirect}))()}push(t,e="forward",n){var o=this;return(0,r.Z)((function*(){var r;if(t.startsWith(".")){const e=null!==(r=o.previousPath)&&void 0!==r?r:"/",n=new URL(t,`https://host/${e}`);t=n.pathname+n.search}let i=parsePath(t);const s=yield o.runGuards(i.segments);if(!0!==s){if("object"!=typeof s)return!1;i=parsePath(s.redirect)}return o.setSegments(i.segments,e,i.queryString),o.writeNavStateRoot(i.segments,e,n)}))()}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var t=this;return(0,r.Z)((function*(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach((e=>t.push(...e.segments)));const n=e.map((t=>t.id));console.debug(`%c ${generatePath(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(readRoutes(t.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${generatePath(e.from)}`,"font-weight: bold"," TO: ",`$c ${generatePath(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(readRedirects(t.el))}))()}navChanged(t){var e=this;return(0,r.Z)((function*(){if(e.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:r}=yield f(window.document.body),o=((t,e)=>{let n=null,r=0;for(const o of e){const e=matchesIDs(t,o);e>r&&(n=o,r=e)}return n?n.map(((e,n)=>{var r;return{id:e.id,segments:e.segments,params:mergeParams(e.params,null===(r=t[n])||void 0===r?void 0:r.params)}})):null})(n,readRoutes(e.el));if(!o)return console.warn("[ion-router] no matching URL for ",n.map((t=>t.id))),!1;const i=(t=>{const e=[];for(const n of t)for(const t of n.segments)if(":"===t[0]){const r=n.params&&n.params[t.slice(1)];if(!r)return null;e.push(r)}else""!==t&&e.push(t);return e})(o);return i?(e.setSegments(i,t),yield e.safeWriteNavState(r,o,c,i,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}))()}onRedirectChanged(){const t=this.getSegments();t&&findRouteRedirect(t,readRedirects(this.el))&&this.writeNavStateRoot(t,c)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),c)}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?h:n<r?"back":c}writeNavStateRoot(t,e,n){var o=this;return(0,r.Z)((function*(){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const r=readRedirects(o.el),i=findRouteRedirect(t,r);let s=null;if(i){const{segments:n,queryString:r}=i.to;o.setSegments(n,e,r),s=i.from,t=n}const a=readRoutes(o.el),u=findChainForSegments(t,a);return u?o.safeWriteNavState(document.body,u,e,t,s,0,n):(console.error("[ion-router] the path does not match any route"),!1)}))()}safeWriteNavState(t,e,n,o,i,s=0,a){var u=this;return(0,r.Z)((function*(){const r=yield u.lock();let l=!1;try{l=yield u.writeNavState(t,e,n,o,i,s,a)}catch(t){console.error(t)}return r(),l}))()}lock(){var t=this;return(0,r.Z)((function*(){const e=t.waitPromise;let n;return t.waitPromise=new Promise((t=>n=t)),void 0!==e&&(yield e),n}))()}runGuards(t=this.getSegments(),e){var n=this;return(0,r.Z)((function*(){if(void 0===e&&(e=parsePath(n.previousPath).segments),!t||!e)return!0;const r=readRoutes(n.el),o=findChainForSegments(e,r),i=o&&o[o.length-1].beforeLeave,s=!i||(yield i());if(!1===s||"object"==typeof s)return s;const a=findChainForSegments(t,r),u=a&&a[a.length-1].beforeEnter;return!u||u()}))()}writeNavState(t,e,n,o,i,s=0,a){var u=this;return(0,r.Z)((function*(){if(u.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;u.busy=!0;const r=u.routeChangeEvent(o,i);r&&u.ionRouteWillChange.emit(r);const l=yield d(t,e,n,s,!1,a);return u.busy=!1,r&&u.ionRouteDidChange.emit(r),l}))()}setSegments(t,e,n){this.state++,writeSegments(window.history,this.root,this.useHash,t,e,this.state,n)}getSegments(){return((t,e,n)=>{const r=parsePath(e).segments,o=n?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(r,parsePath(o).segments)})(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,r=generatePath(t);if(this.previousPath=r,r===n)return null;return{from:n,redirectedFrom:e?generatePath(e):null,to:r}}get el(){return(0,o.f)(this)}},p=class{constructor(t){(0,o.r)(this,t),this.onClick=t=>{(0,s.o)(this.href,t,this.routerDirection,this.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}render(){const t=(0,a.b)(this),e={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,s.c)(this.color,{[t]:!0,"ion-activatable":!0})},(0,o.h)("a",Object.assign({},e),(0,o.h)("slot",null)))}};p.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},4459:(t,e,n)=>{n.d(e,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>i});var r=n(49671);const hostContext=(t,e)=>null!==e.closest(t),createColorClasses=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,getClassMap=t=>{const e={};return(t=>{if(void 0!==t)return(Array.isArray(t)?t:t.split(" ")).filter((t=>null!=t)).map((t=>t.trim())).filter((t=>""!==t));return[]})(t).forEach((t=>e[t]=!0)),e},o=/^[a-z][a-z0-9+\-.]*:/,i=function(){var t=(0,r.Z)((function*(t,e,n,r){if(null!=t&&"#"!==t[0]&&!o.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,r)}return!1}));return function openURL(e,n,r,o){return t.apply(this,arguments)}}()}}]);