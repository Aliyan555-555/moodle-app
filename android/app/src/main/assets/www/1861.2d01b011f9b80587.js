"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1861],{21861:(e,t,n)=>{n.r(t),n.d(t,{CoreCommentsLazyModule:()=>q});var o=n(13386),i=n(67643),s=n(49671),r=n(98370),a=n(53564),m=n(7739),c=n(53532),l=n(31903),d=n(18005),g=n(43555),u=n(10727),_=n(75803),f=n(13010),h=n(45151),C=n(34749),p=n(31381),I=n(2843),w=n(52160),x=n(29540),v=n(81370),y=n(69930),b=n.n(y),D=n(7351),O=n(19212),L=n(96814),N=n(11771),T=n(17418),P=n(55126),Z=n(52133),M=n(66931),A=n(61968),V=n(30300),Q=n(86700),J=n(8947),E=n(29657),k=n(22068),U=n(83369),S=n(89515);function CoreCommentsViewerPage_ion_button_9_ion_icon_2_Template(e,t){1&e&&O._UZ(0,"ion-icon",19)}function CoreCommentsViewerPage_ion_button_9_ion_icon_3_Template(e,t){1&e&&O._UZ(0,"ion-icon",20)}function CoreCommentsViewerPage_ion_button_9_Template(e,t){if(1&e){const e=O.EpF();O.TgZ(0,"ion-button",16),O.NdJ("click",(function CoreCommentsViewerPage_ion_button_9_Template_ion_button_click_0_listener(){O.CHM(e);const t=O.oxw();return O.KtG(t.toggleDelete())})),O.ALo(1,"translate"),O.YNc(2,CoreCommentsViewerPage_ion_button_9_ion_icon_2_Template,1,0,"ion-icon",17)(3,CoreCommentsViewerPage_ion_button_9_ion_icon_3_Template,1,0,"ion-icon",18),O.qZA()}if(2&e){const e=O.oxw();O.uIk("aria-label",O.lcZ(1,3,"core.toggledelete")),O.xp6(2),O.Q6J("ngIf",!e.showDelete),O.xp6(),O.Q6J("ngIf",e.showDelete)}}function CoreCommentsViewerPage_core_empty_box_20_Template(e,t){1&e&&(O._UZ(0,"core-empty-box",21),O.ALo(1,"translate")),2&e&&O.Q6J("message",O.lcZ(1,1,"core.comments.nocomments"))}function CoreCommentsViewerPage_ng_container_23_p_1_Template(e,t){if(1&e&&(O.TgZ(0,"p",24),O._uU(1),O.ALo(2,"coreFormatDate"),O.qZA()),2&e){const e=O.oxw().$implicit;O.xp6(),O.hij(" ",O.xi3(2,1,1e3*e.timecreated,"strftimedayshort")," ")}}function CoreCommentsViewerPage_ng_container_23_Template(e,t){if(1&e){const e=O.EpF();O.ynx(0),O.YNc(1,CoreCommentsViewerPage_ng_container_23_p_1_Template,3,4,"p",22),O.TgZ(2,"core-message",23),O.NdJ("onDeleteMessage",(function CoreCommentsViewerPage_ng_container_23_Template_core_message_onDeleteMessage_2_listener(){const t=O.CHM(e).$implicit,n=O.oxw();return O.KtG(n.deleteComment(t))}))("onUndoDeleteMessage",(function CoreCommentsViewerPage_ng_container_23_Template_core_message_onUndoDeleteMessage_2_listener(){const t=O.CHM(e).$implicit,n=O.oxw();return O.KtG(n.undoDeleteComment(t))})),O.qZA(),O.BQk()}if(2&e){const e=t.$implicit,n=O.oxw();O.xp6(),O.Q6J("ngIf",e.showDate),O.xp6(),O.Q6J("message",e)("text",e.content)("time",1e3*e.timecreated)("user",e)("showDelete",n.showDelete)("contextLevel",n.contextLevel)("instanceId",n.instanceId)("courseId",n.courseId)}}const _c0=e=>({$a:e});function CoreCommentsViewerPage_ion_badge_24_Template(e,t){1&e&&(O.TgZ(0,"ion-badge",25),O._UZ(1,"ion-icon",26),O._uU(2),O.ALo(3,"translate"),O.ALo(4,"lowercase"),O.ALo(5,"translate"),O.qZA()),2&e&&(O.xp6(2),O.hij(" ",O.xi3(3,1,"core.thereisdatatosync",O.VKq(8,_c0,O.lcZ(4,4,O.lcZ(5,6,"core.comments.comments"))))," "))}function CoreCommentsViewerPage_core_message_25_Template(e,t){if(1&e){const e=O.EpF();O.TgZ(0,"core-message",27),O.NdJ("onDeleteMessage",(function CoreCommentsViewerPage_core_message_25_Template_core_message_onDeleteMessage_0_listener(){O.CHM(e);const t=O.oxw();return O.KtG(t.deleteComment(t.offlineComment))})),O.qZA()}if(2&e){const e=O.oxw();O.Q6J("message",e.offlineComment)("text",e.offlineComment.content)("user",e.offlineComment)("showDelete",e.showDelete)("contextLevel",e.contextLevel)("instanceId",e.instanceId)("courseId",e.courseId)}}function CoreCommentsViewerPage_ion_footer_26_Template(e,t){if(1&e){const e=O.EpF();O.TgZ(0,"ion-footer",28)(1,"ion-toolbar")(2,"core-send-message-form",29),O.NdJ("onSubmit",(function CoreCommentsViewerPage_ion_footer_26_Template_core_send_message_form_onSubmit_2_listener(t){O.CHM(e);const n=O.oxw();return O.KtG(n.addComment(t))})),O.ALo(3,"translate"),O.qZA()()()}if(2&e){const e=O.oxw();O.xp6(2),O.Q6J("sendDisabled",e.sending)("message",e.newComment)("placeholder",O.lcZ(3,3,"core.comments.addcomment"))}}let R=(()=>{var e;class CoreCommentsViewerPage{constructor(e){this.route=e,this.comments=[],this.commentsLoaded=!1,this.itemId=0,this.area="",this.page=0,this.title="",this.canLoadMore=!1,this.loadMoreError=!1,this.canAddComments=!1,this.canDeleteComments=!1,this.showDelete=!1,this.hasOffline=!1,this.refreshIcon=d.i.ICON_LOADING,this.syncIcon=d.i.ICON_LOADING,this.sending=!1,this.newComment="",this.addDeleteCommentsAvailable=!1,this.viewDestroyed=!1,this.currentUserId=a.m9.getCurrentSiteUserId(),this.syncObserver=r.R.on(c.I.AUTO_SYNCED,(e=>{e.contextLevel==this.contextLevel&&e.instanceId==this.instanceId&&e.componentName==this.componentName&&e.itemId==this.itemId&&e.area==this.area&&(this.showSyncWarnings(e.warnings),this.commentsLoaded=!1,this.refreshIcon=d.i.ICON_LOADING,this.syncIcon=d.i.ICON_LOADING,this.page=0,this.comments=[],this.fetchComments(!1))}),a.m9.getCurrentSiteId()),this.isOnline=v.AS.isOnline(),this.onlineObserver=v.AS.onChange().subscribe((()=>{u.R0.run((()=>{this.isOnline=v.AS.isOnline()}))}))}ngOnInit(){var e=this;return(0,s.Z)((function*(){try{e.contextLevel=g.b.getRequiredRouteParam("contextLevel"),e.instanceId=g.b.getRequiredRouteNumberParam("instanceId"),e.componentName=g.b.getRequiredRouteParam("componentName"),e.itemId=g.b.getRequiredRouteNumberParam("itemId"),e.area=g.b.getRouteParam("area")||"",e.title=g.b.getRouteParam("title")||u.vN.instant("core.comments.comments"),e.courseId=g.b.getRouteNumberParam("courseId")}catch(e){return f.OQ.showErrorModal(e),g.b.back(),void 0}e.addDeleteCommentsAvailable=yield m.N.isAddCommentsAvailable(),e.currentUserId=a.m9.getCurrentSiteUserId(),e.commentsLoaded=!1,yield e.fetchComments(!0)}))()}fetchComments(e,t=!1){var n=this;return(0,s.Z)((function*(){n.loadMoreError=!1,e&&(yield _.Tr.ignoreErrors(n.syncComments(t)));try{const e=yield m.N.getComments(n.contextLevel,n.instanceId,n.componentName,n.itemId,n.area,n.page);n.canAddComments=n.addDeleteCommentsAvailable&&!!e.canpost;let t=e.comments.sort(((e,t)=>e.timecreated-t.timecreated));n.canLoadMore=void 0!==e.count?n.comments.length+t.length<e.count:e.comments.length>0&&e.comments.length>=m.t.pageSize,t=yield Promise.all(t.map((e=>n.loadCommentProfile(e)))),n.comments=t.concat(n.comments),n.comments.forEach(((e,t)=>n.calculateCommentData(e,n.comments[t-1]))),n.canDeleteComments=n.addDeleteCommentsAvailable&&(n.hasOffline||n.comments.some((e=>!!e.delete))),yield n.loadOfflineData()}catch(e){n.loadMoreError=!0,e&&"assignsubmission_comments"==n.componentName?f.OQ.showAlertTranslated("core.notice","core.comments.commentsnotworking"):f.OQ.showErrorModalDefault(e,u.vN.instant("core.error")+": get_comments")}finally{n.commentsLoaded=!0,n.refreshIcon=d.i.ICON_REFRESH,n.syncIcon=d.i.ICON_SYNC,0==n.page&&n.scrollToBottom()}}))()}calculateCommentData(e,t){var n;e.showDate=this.showDate(e,t),e.showUserData=this.showUserData(e,t),e.showTail=this.showTail(e,t),e.delete=null!==(n=e.delete)&&void 0!==n&&n}loadPrevious(e){var t=this;return(0,s.Z)((function*(){t.page++,t.canLoadMore=!1;try{yield t.fetchComments(!0)}finally{e&&e()}}))()}refreshComments(e,t){var n=this;return(0,s.Z)((function*(){n.commentsLoaded=!1,n.refreshIcon=d.i.ICON_LOADING,n.syncIcon=d.i.ICON_LOADING,yield _.Tr.ignoreErrors(n.invalidateComments()),n.page=0,n.comments=[];try{yield n.fetchComments(!0,e)}finally{null==t||t.complete()}}))()}showSyncWarnings(e){const t=C._1.buildMessage(e);t&&f.OQ.showAlert(void 0,t)}syncComments(e){var t=this;return(0,s.Z)((function*(){try{const e=yield c.Y.syncComments(t.contextLevel,t.instanceId,t.componentName,t.itemId,t.area);t.showSyncWarnings((null==e?void 0:e.warnings)||[])}catch(t){throw e&&f.OQ.showErrorModalDefault(t,"core.errorsync",!0),new p.G(t)}}))()}addComment(e){var t=this;return(0,s.Z)((function*(){x.z.closeKeyboard();const n=yield f.OQ.showModalLoading("core.sending",!0);t.sending=!0;try{const n=yield m.N.addComment(e,t.contextLevel,t.instanceId,t.componentName,t.itemId,t.area);if(f.OQ.showToast(n?"core.comments.eventcommentcreated":"core.datastoredoffline",!0,f.O2.LONG),n){t.invalidateComments();const e=yield t.loadCommentProfile(n);t.calculateCommentData(e,t.comments[t.comments.length-1]),t.comments=t.comments.concat([e]),t.canDeleteComments=t.addDeleteCommentsAvailable,r.R.trigger(m.t.COMMENTS_COUNT_CHANGED_EVENT,{contextLevel:t.contextLevel,instanceId:t.instanceId,component:t.componentName,itemId:t.itemId,area:t.area,countChange:1},a.m9.getCurrentSiteId()),t.refreshInBackground()}else!1===n&&(yield t.loadOfflineData())}catch(e){f.OQ.showErrorModal(e)}finally{n.dismiss(),t.sending=!1,t.scrollToBottom()}}))()}deleteComment(e){var t=this;return(0,s.Z)((function*(){const n=w.D.userDate(1e3*("lastmodified"in e?e.lastmodified:e.timecreated),"core.strftimerecentfull"),o={contextlevel:t.contextLevel,instanceid:t.instanceId,component:t.componentName,itemid:t.itemId,area:t.area,content:e.content,id:"id"in e?e.id:void 0};try{yield f.OQ.showDeleteConfirm("core.comments.deletecommentbyon",{$a:{user:e.fullname||"",time:n}})}catch{return}try{const n=yield m.N.deleteComment(o);if(t.showDelete=!1,n&&"id"in e){const n=t.comments.findIndex((t=>t.id==e.id));n>=0&&(t.comments.splice(n,1),r.R.trigger(m.t.COMMENTS_COUNT_CHANGED_EVENT,{contextLevel:t.contextLevel,instanceId:t.instanceId,component:t.componentName,itemId:t.itemId,area:t.area,countChange:-1},a.m9.getCurrentSiteId()),t.refreshInBackground())}else t.loadOfflineData();t.invalidateComments(),f.OQ.showToast("core.comments.eventcommentdeleted",!0,f.O2.LONG)}catch(e){f.OQ.showErrorModalDefault(e,"Delete comment failed.")}}))()}invalidateComments(){return m.N.invalidateCommentsData(this.contextLevel,this.instanceId,this.componentName,this.itemId,this.area)}loadCommentProfile(e){return(0,s.Z)((function*(){if(!e.userid)return e;try{const t=yield h.My.getProfile(e.userid,void 0,!0);e.profileimageurl=t.profileimageurl,e.fullname=t.fullname}catch{}return e}))()}showUserData(e,t){return!(e.userid==this.currentUserId||t&&t.userid==e.userid&&!e.showDate)}showTail(e,t){return!t||t.userid!=e.userid||!!t.showDate}showDate(e,t){return!t||!b()(1e3*e.timecreated).isSame(1e3*t.timecreated,"day")}loadOfflineData(){var e=this;return(0,s.Z)((function*(){const t=[];let n=!1;t.push(I.v.getComment(e.contextLevel,e.instanceId,e.componentName,e.itemId,e.area).then(function(){var t=(0,s.Z)((function*(t){e.offlineComment=t,e.offlineComment&&(""==e.newComment&&(e.newComment=e.offlineComment.content),e.offlineComment.userid=e.currentUserId,e.offlineComment.pending=!0)}));return function(e){return t.apply(this,arguments)}}())),t.push(I.v.getDeletedComments(e.contextLevel,e.instanceId,e.componentName,e.itemId,e.area).then((t=>{n=t&&t.length>0,n&&t.forEach((t=>{const n=e.comments.find((e=>e.id==t.commentid));n&&(n.deleted=!!t.deleted)}))}))),yield Promise.all(t),e.hasOffline=!!e.offlineComment||n}))()}undoDeleteComment(e){var t=this;return(0,s.Z)((function*(){yield I.v.undoDeleteComment(e.id),e.deleted=!1,t.showDelete=!1}))()}scrollToBottom(){setTimeout((()=>{var e;this.viewDestroyed||(null===(e=this.content)||void 0===e||e.scrollToBottom())}),100)}toggleDelete(){this.showDelete=!this.showDelete}refreshInBackground(){var e=this;return(0,s.Z)((function*(){yield _.Tr.ignoreErrors(e.invalidateComments());const t=[];for(let n=0;n<=e.page;n++)t.push(m.N.getComments(e.contextLevel,e.instanceId,e.componentName,e.itemId,e.area,n));yield Promise.all(t)}))()}ngOnDestroy(){var e;null===(e=this.syncObserver)||void 0===e||e.off(),this.onlineObserver.unsubscribe(),this.viewDestroyed=!0}}return(e=CoreCommentsViewerPage).ɵfac=function CoreCommentsViewerPage_Factory(t){return new(t||e)(O.Y36(i.gz))},e.ɵcmp=O.Xpm({type:e,selectors:[["page-core-comments-viewer"]],viewQuery:function CoreCommentsViewerPage_Query(e,t){if(1&e&&O.Gf(l.W2,5),2&e){let e;O.iGM(e=O.CRH())&&(t.content=e.first)}},decls:27,vars:34,consts:[["slot","start"],[3,"text"],[3,"text","contextLevel","contextInstanceId","courseId"],["slot","end"],["slot","end","fill","clear",3,"click",4,"ngIf"],[3,"hidden","priority","content","iconAction","closeOnClick","action"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["icon","fas-comments",3,"message",4,"ngIf"],["position","top",3,"enabled","error","action"],[1,"addon-messages-discussion-container"],[4,"ngFor","ngForOf"],["class","ion-text-wrap","color","info",4,"ngIf"],[3,"message","text","user","showDelete","contextLevel","instanceId","courseId","onDeleteMessage",4,"ngIf"],["class","footer-adjustable",4,"ngIf"],["slot","end","fill","clear",3,"click"],["name","fas-pen","slot","icon-only","aria-hidden","true",4,"ngIf"],["name","fas-check","slot","icon-only","aria-hidden","true",4,"ngIf"],["name","fas-pen","slot","icon-only","aria-hidden","true"],["name","fas-check","slot","icon-only","aria-hidden","true"],["icon","fas-comments",3,"message"],["class","ion-text-center addon-messages-date",4,"ngIf"],[3,"message","text","time","user","showDelete","contextLevel","instanceId","courseId","onDeleteMessage","onUndoDeleteMessage"],[1,"ion-text-center","addon-messages-date"],["color","info",1,"ion-text-wrap"],["name","fas-triangle-exclamation","aria-hidden","true"],[3,"message","text","user","showDelete","contextLevel","instanceId","courseId","onDeleteMessage"],[1,"footer-adjustable"],[3,"sendDisabled","message","placeholder","onSubmit"]],template:function CoreCommentsViewerPage_Template(e,t){1&e&&(O.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),O._UZ(3,"ion-back-button",1),O.ALo(4,"translate"),O.qZA(),O.TgZ(5,"ion-title")(6,"h1"),O._UZ(7,"core-format-text",2),O.qZA()(),O.TgZ(8,"ion-buttons",3),O.YNc(9,CoreCommentsViewerPage_ion_button_9_Template,4,5,"ion-button",4),O.TgZ(10,"core-context-menu")(11,"core-context-menu-item",5),O.NdJ("action",(function CoreCommentsViewerPage_Template_core_context_menu_item_action_11_listener(){return t.refreshComments(!1)})),O.ALo(12,"translate"),O.qZA(),O.TgZ(13,"core-context-menu-item",5),O.NdJ("action",(function CoreCommentsViewerPage_Template_core_context_menu_item_action_13_listener(){return t.refreshComments(!0)})),O.ALo(14,"translate"),O.qZA()()()()(),O.TgZ(15,"ion-content")(16,"ion-refresher",6),O.NdJ("ionRefresh",(function CoreCommentsViewerPage_Template_ion_refresher_ionRefresh_16_listener(e){return t.refreshComments(!1,e.target)})),O._UZ(17,"ion-refresher-content",7),O.ALo(18,"translate"),O.qZA(),O.TgZ(19,"core-loading",8),O.YNc(20,CoreCommentsViewerPage_core_empty_box_20_Template,2,3,"core-empty-box",9),O.TgZ(21,"core-infinite-loading",10),O.NdJ("action",(function CoreCommentsViewerPage_Template_core_infinite_loading_action_21_listener(e){return t.loadPrevious(e)})),O.qZA(),O.TgZ(22,"ion-list",11),O.YNc(23,CoreCommentsViewerPage_ng_container_23_Template,3,9,"ng-container",12)(24,CoreCommentsViewerPage_ion_badge_24_Template,6,10,"ion-badge",13)(25,CoreCommentsViewerPage_core_message_25_Template,1,7,"core-message",14),O.qZA()()(),O.YNc(26,CoreCommentsViewerPage_ion_footer_26_Template,4,5,"ion-footer",15)),2&e&&(O.xp6(3),O.Q6J("text",O.lcZ(4,26,"core.back")),O.xp6(4),O.Q6J("text",t.title)("contextLevel",t.contextLevel)("contextInstanceId",t.instanceId)("courseId",t.courseId),O.xp6(2),O.Q6J("ngIf",t.canDeleteComments),O.xp6(2),O.Q6J("hidden",!(t.commentsLoaded&&!t.hasOffline))("priority",100)("content",O.lcZ(12,28,"core.refresh"))("iconAction",t.refreshIcon)("closeOnClick",!0),O.xp6(2),O.Q6J("hidden",!(t.commentsLoaded&&t.hasOffline&&t.isOnline))("priority",100)("content",O.lcZ(14,30,"core.settings.synchronizenow"))("iconAction",t.syncIcon)("closeOnClick",!1),O.xp6(3),O.Q6J("disabled",!t.commentsLoaded),O.xp6(),O.s9C("pullingText",O.lcZ(18,32,"core.pulltorefresh")),O.xp6(2),O.Q6J("hideUntil",t.commentsLoaded),O.xp6(),O.Q6J("ngIf",!(null!=t.comments&&t.comments.length||t.offlineComment)),O.xp6(),O.Q6J("enabled",t.canLoadMore)("error",t.loadMoreError),O.xp6(2),O.Q6J("ngForOf",t.comments),O.xp6(),O.Q6J("ngIf",t.hasOffline),O.xp6(),O.Q6J("ngIf",t.hasOffline&&t.offlineComment),O.xp6(),O.Q6J("ngIf",t.commentsLoaded&&t.canAddComments))},dependencies:[L.sg,L.O5,N.P,T.l,P.z,Z.n,M.r,A.F,V.j,Q.I,J.r,E.t,k.O,l.yp,l.YG,l.Sm,l.W2,l.fr,l.Gu,l.gu,l.q_,l.nJ,l.Wo,l.wd,l.sr,l.oU,L.i8,U.o,S.X$],styles:[".ios[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child, .ios   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child{padding-bottom:4px;min-height:0}ion-content[_ngcontent-%COMP%]{--content-background: var(--background-alternative);--background: var(--content-background)}ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:0!important}.addon-messages-discussion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:16px!important;background:var(--content-background)}.addon-messages-date[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}","ion-badge[_ngcontent-%COMP%]{margin:8px auto}"],data:{animation:[D.j.SLIDE_IN_OUT]}}),CoreCommentsViewerPage})();const G=[{path:":contextLevel/:instanceId/:componentName/:itemId",component:R}];let q=(()=>{var e;class CoreCommentsLazyModule{}return(e=CoreCommentsLazyModule).ɵfac=function CoreCommentsLazyModule_Factory(t){return new(t||e)},e.ɵmod=O.oAB({type:e}),e.ɵinj=O.cJS({imports:[i.Bz.forChild(G),o.L]}),CoreCommentsLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&O.kYT(q,{declarations:[R],imports:[i.Bz,o.L]}))}}]);