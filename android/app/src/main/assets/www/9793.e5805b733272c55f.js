/*! For license information please see 9793.e5805b733272c55f.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9793],{89793:(e,i,t)=>{t.r(i),t.d(i,{ion_split_pane:()=>a});var s=t(49671),n=t(19942),o=t(15551);const d="split-pane-main",l="split-pane-side",r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},a=class{constructor(e){(0,n.r)(this,e),this.ionSplitPaneVisible=(0,n.d)(this,"ionSplitPaneVisible",7),this.visible=!1,this.contentId=void 0,this.disabled=!1,this.when=r.lg}visibleChanged(e){const i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)}connectedCallback(){var e=this;return(0,s.Z)((function*(){"undefined"!=typeof customElements&&null!=customElements&&(yield customElements.whenDefined("ion-split-pane")),e.styleChildren(),e.updateState()}))()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return this.visible=!1,void 0;const e=this.when;if("boolean"==typeof e)return this.visible=e,void 0;const i=r[e]||e;if(0===i.length)return this.visible=!1,void 0;if(window.matchMedia){const callback=e=>{this.visible=e.matches},e=window.matchMedia(i);e.addListener(callback),this.rmL=()=>e.removeListener(callback),this.visible=e.matches}}isPane(e){return!!this.visible&&(e.parentElement===this.el&&e.classList.contains(l))}styleChildren(){const e=this.contentId,i=this.el.children,t=this.el.childElementCount;let s=!1;for(let n=0;n<t;n++){const t=i[n],o=void 0!==e&&t.id===e;if(o){if(s)return console.warn("split pane cannot have more than one main node"),void 0;s=!0}setPaneClass(t,o)}s||console.warn("split pane does not have a specified main node")}render(){const e=(0,o.b)(this);return(0,n.h)(n.H,{class:{[e]:!0,[`split-pane-${e}`]:!0,"split-pane-visible":this.visible}},(0,n.h)("slot",null))}get el(){return(0,n.f)(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},setPaneClass=(e,i)=>{let t,s;i?(t=d,s=l):(t=l,s=d);const n=e.classList;n.add(t),n.remove(s)};a.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}"}}}]);