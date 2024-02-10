/*! For license information please see 962.f83b0e86a73a2f0c.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[962],{70962:(e,t,n)=>{n.d(t,{c:()=>createAnimation});const o="undefined"!=typeof window?window:void 0;"undefined"!=typeof document&&document;var i=n(93630);let a;const convertCamelCaseToHypen=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),getAnimationPrefix=e=>{if(void 0===a){a=!(void 0!==e.style.animationName)&&void 0!==e.style.webkitAnimationName?"-webkit-":""}return a},setStyleProperty=(e,t,n)=>{const o=t.startsWith("animation")?getAnimationPrefix(e):"";e.style.setProperty(o+t,n)},removeStyleProperty=(e,t)=>{const n=t.startsWith("animation")?getAnimationPrefix(e):"";e.style.removeProperty(n+t)},r=[],addClassToArray=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},createAnimation=e=>{let t,n,a,s,l,f,d,c,m,h,u,p,g,y=[],v=[],E=[],$=!1,A={},b=[],w=[],C={},k=0,T=!1,S=!1,D=!0,L=!1,P=!0,R=!1;const F=e,N=[],O=[],W=[],x=[],I=[],K=[],j=[],M=[],q=[],z=[],Z=[],B="function"==typeof AnimationEffect||void 0!==o&&"function"==typeof o.AnimationEffect,G="function"==typeof Element&&"function"==typeof Element.prototype.animate&&B,getWebAnimations=()=>Z,cleanUp=e=>{cleanUpElements(),e&&cleanUpStyleSheets()},clearCallback=(e,t)=>{const n=t.findIndex((t=>t.c===e));n>-1&&t.splice(n,1)},onFinish=(e,t)=>(((null==t?void 0:t.oneTimeCallback)?O:N).push({c:e,o:t}),g),clearOnFinish=()=>(N.length=0,O.length=0,g),cleanUpElements=()=>{if(G)Z.forEach((e=>{e.cancel()})),Z.length=0;else{const e=x.slice();(0,i.r)((()=>{e.forEach((e=>{removeStyleProperty(e,"animation-name"),removeStyleProperty(e,"animation-duration"),removeStyleProperty(e,"animation-timing-function"),removeStyleProperty(e,"animation-iteration-count"),removeStyleProperty(e,"animation-delay"),removeStyleProperty(e,"animation-play-state"),removeStyleProperty(e,"animation-fill-mode"),removeStyleProperty(e,"animation-direction")}))}))}},cleanUpStyleSheets=()=>{K.forEach((e=>{(null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),K.length=0},getFill=()=>void 0!==l?l:d?d.getFill():"both",getDirection=()=>void 0!==m?m:void 0!==f?f:d?d.getDirection():"normal",getEasing=()=>T?"linear":void 0!==a?a:d?d.getEasing():"linear",getDuration=()=>S?0:void 0!==h?h:void 0!==n?n:d?d.getDuration():0,getIterations=()=>void 0!==s?s:d?d.getIterations():1,getDelay=()=>void 0!==u?u:void 0!==t?t:d?d.getDelay():0,updateKeyframes=e=>{G?getWebAnimations().forEach((t=>{const n=t.effect;if(n.setKeyframes)n.setKeyframes(e);else{const o=new KeyframeEffect(n.target,e,n.getTiming());t.effect=o}})):initializeCSSAnimation()},animationFinish=()=>{0!==k&&(k--,0===k&&((()=>{clearCSSAnimationsTimeout(),q.forEach((e=>e())),z.forEach((e=>e()));const e=D?1:0,t=b,n=w,o=C;x.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&setStyleProperty(e,t,o[t])})),h=void 0,m=void 0,u=void 0,N.forEach((t=>t.c(e,g))),O.forEach((t=>t.c(e,g))),O.length=0,P=!0,D&&(L=!0),D=!0})(),d&&d.animationFinish()))},initializeCSSAnimation=(t=!0)=>{cleanUpStyleSheets();const n=(e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const o=convertCamelCaseToHypen(t);o!==t&&(e[o]=n,delete e[t])}}})),e))(y);x.forEach((o=>{if(n.length>0){const a=((e=[])=>e.map((e=>{const t=e.offset,n=[];for(const t in e)e.hasOwnProperty(t)&&"offset"!==t&&n.push(`${t}: ${e[t]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "))(n);p=void 0!==e?e:(e=>{let t=r.indexOf(e);return t<0&&(t=r.push(e)-1),`ion-animation-${t}`})(a);const s=((e,t,n)=>{var o;const i=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),a=getAnimationPrefix(n),r=i.querySelector("#"+e);if(r)return r;const s=(null!==(o=n.ownerDocument)&&void 0!==o?o:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,i.appendChild(s),s})(p,a,o);K.push(s),setStyleProperty(o,"animation-duration",`${getDuration()}ms`),setStyleProperty(o,"animation-timing-function",getEasing()),setStyleProperty(o,"animation-delay",`${getDelay()}ms`),setStyleProperty(o,"animation-fill-mode",getFill()),setStyleProperty(o,"animation-direction",getDirection());const l=getIterations()===1/0?"infinite":getIterations().toString();setStyleProperty(o,"animation-iteration-count",l),setStyleProperty(o,"animation-play-state","paused"),t&&setStyleProperty(o,"animation-name",`${s.id}-alt`),(0,i.r)((()=>{setStyleProperty(o,"animation-name",s.id||null)}))}}))},initializeAnimation=(e=!0)=>{(()=>{j.forEach((e=>e())),M.forEach((e=>e()));const e=v,t=E,n=A;x.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&setStyleProperty(o,e,n[e])}))})(),y.length>0&&(G?(x.forEach((e=>{const t=e.animate(y,{id:F,delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()});t.pause(),Z.push(t)})),Z.length>0&&(Z[0].onfinish=()=>{animationFinish()})):initializeCSSAnimation(e)),$=!0},setAnimationStep=e=>{if(e=Math.min(Math.max(e,0),.9999),G)Z.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+getDuration()*e,t.pause()}));else{const t=`-${getDuration()*e}ms`;x.forEach((e=>{y.length>0&&(setStyleProperty(e,"animation-delay",t),setStyleProperty(e,"animation-play-state","paused"))}))}},updateWebAnimation=e=>{Z.forEach((e=>{e.effect.updateTiming({delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()})})),void 0!==e&&setAnimationStep(e)},updateCSSAnimation=(e=!0,t)=>{(0,i.r)((()=>{x.forEach((n=>{setStyleProperty(n,"animation-name",p||null),setStyleProperty(n,"animation-duration",`${getDuration()}ms`),setStyleProperty(n,"animation-timing-function",getEasing()),setStyleProperty(n,"animation-delay",void 0!==t?`-${t*getDuration()}ms`:`${getDelay()}ms`),setStyleProperty(n,"animation-fill-mode",getFill()||null),setStyleProperty(n,"animation-direction",getDirection()||null);const o=getIterations()===1/0?"infinite":getIterations().toString();setStyleProperty(n,"animation-iteration-count",o),e&&setStyleProperty(n,"animation-name",`${p}-alt`),(0,i.r)((()=>{setStyleProperty(n,"animation-name",p||null)}))}))}))},update=(e=!1,t=!0,n)=>(e&&I.forEach((o=>{o.update(e,t,n)})),G?updateWebAnimation(n):updateCSSAnimation(t,n),g),pauseAnimation=()=>{$&&(G?Z.forEach((e=>{e.pause()})):x.forEach((e=>{setStyleProperty(e,"animation-play-state","paused")})),R=!0)},onAnimationEndFallback=()=>{c=void 0,animationFinish()},clearCSSAnimationsTimeout=()=>{c&&clearTimeout(c)},clearCSSAnimationPlayState=()=>{x.forEach((e=>{removeStyleProperty(e,"animation-duration"),removeStyleProperty(e,"animation-delay"),removeStyleProperty(e,"animation-play-state")}))},play=e=>new Promise((t=>{(null==e?void 0:e.sync)&&(S=!0,onFinish((()=>S=!1),{oneTimeCallback:!0})),$||initializeAnimation(),L&&(void(G?(setAnimationStep(0),updateWebAnimation()):updateCSSAnimation()),L=!1),P&&(k=I.length+1,P=!1);const onStopCallback=()=>{clearCallback(onFinishCallback,O),t()},onFinishCallback=()=>{clearCallback(onStopCallback,W),t()};onFinish(onFinishCallback,{oneTimeCallback:!0}),((e,t)=>{W.push({c:e,o:t})})(onStopCallback,{oneTimeCallback:!0}),I.forEach((e=>{e.play()})),G?(Z.forEach((e=>{e.play()})),0!==y.length&&0!==x.length||animationFinish()):(()=>{if(clearCSSAnimationsTimeout(),(0,i.r)((()=>{x.forEach((e=>{y.length>0&&setStyleProperty(e,"animation-play-state","running")}))})),0===y.length||0===x.length)animationFinish();else{const e=getDelay()||0,t=getDuration()||0,n=getIterations()||1;isFinite(n)&&(c=setTimeout(onAnimationEndFallback,e+t*n+100)),((e,t)=>{let n;const o={passive:!0},unregister=()=>{n&&n()},onTransitionEnd=n=>{e===n.target&&(unregister(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",onTransitionEnd,o),e.addEventListener("animationend",onTransitionEnd,o),n=()=>{e.removeEventListener("webkitAnimationEnd",onTransitionEnd,o),e.removeEventListener("animationend",onTransitionEnd,o)})})(x[0],(()=>{clearCSSAnimationsTimeout(),(0,i.r)((()=>{clearCSSAnimationPlayState(),(0,i.r)(animationFinish)}))}))}})(),R=!1})),from=(e,t)=>{const n=y[0];return void 0===n||void 0!==n.offset&&0!==n.offset?y=[{offset:0,[e]:t},...y]:n[e]=t,g};return g={parentAnimation:d,elements:x,childAnimations:I,id:F,animationFinish,from,to:(e,t)=>{const n=y[y.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?y=[...y,{offset:1,[e]:t}]:n[e]=t,g},fromTo:(e,t,n)=>from(e,t).to(e,n),parent:e=>(d=e,g),play,pause:()=>(I.forEach((e=>{e.pause()})),pauseAnimation(),g),stop:()=>{I.forEach((e=>{e.stop()})),$&&(cleanUpElements(),$=!1),T=!1,S=!1,P=!0,m=void 0,h=void 0,u=void 0,k=0,L=!1,D=!0,R=!1,W.forEach((e=>e.c(0,g))),W.length=0},destroy:e=>(I.forEach((t=>{t.destroy(e)})),cleanUp(e),x.length=0,I.length=0,y.length=0,clearOnFinish(),$=!1,P=!0,g),keyframes:e=>{const t=y!==e;return y=e,t&&updateKeyframes(y),g},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(g),I.push(t);else e.parent(g),I.push(e);return g},addElement:e=>{if(null!=e)if(1===e.nodeType)x.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)x.push(e[t]);else console.error("Invalid addElement value");return g},update,fill:e=>(l=e,update(!0),g),direction:e=>(f=e,update(!0),g),iterations:e=>(s=e,update(!0),g),duration:e=>(G||0!==e||(e=1),n=e,update(!0),g),easing:e=>(a=e,update(!0),g),delay:e=>(t=e,update(!0),g),getWebAnimations,getKeyframes:()=>y,getFill,getDirection,getDelay,getIterations,getEasing,getDuration,afterAddRead:e=>(q.push(e),g),afterAddWrite:e=>(z.push(e),g),afterClearStyles:(e=[])=>{for(const t of e)C[t]="";return g},afterStyles:(e={})=>(C=e,g),afterRemoveClass:e=>(w=addClassToArray(w,e),g),afterAddClass:e=>(b=addClassToArray(b,e),g),beforeAddRead:e=>(j.push(e),g),beforeAddWrite:e=>(M.push(e),g),beforeClearStyles:(e=[])=>{for(const t of e)A[t]="";return g},beforeStyles:(e={})=>(A=e,g),beforeRemoveClass:e=>(E=addClassToArray(E,e),g),beforeAddClass:e=>(v=addClassToArray(v,e),g),onFinish,isRunning:()=>0!==k&&!R,progressStart:(e=!1,t)=>(I.forEach((n=>{n.progressStart(e,t)})),pauseAnimation(),T=e,$||initializeAnimation(),update(!1,!0,t),g),progressStep:e=>(I.forEach((t=>{t.progressStep(e)})),setAnimationStep(e),g),progressEnd:(e,t,n)=>(T=!1,I.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&(h=n),L=!1,D=!0,0===e?(m="reverse"===getDirection()?"normal":"reverse","reverse"===m&&(D=!1),G?(update(),setAnimationStep(1-t)):(u=(1-t)*getDuration()*-1,update(!1,!1))):1===e&&(G?(update(),setAnimationStep(t)):(u=t*getDuration()*-1,update(!1,!1))),void 0===e||d||play(),g)}}}}]);