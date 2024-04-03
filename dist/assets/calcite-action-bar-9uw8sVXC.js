import{p as C,H as w,c as z,h as s,b as H}from"./jsxFactory-BxQYPm-b.js";import{c as L,d as D}from"./conditionalSlot-DvaCB6Om.js";import{u as f,e as m,f as S}from"./dom-BvFmd0Ey.js";import{a as T,s as O,c as B}from"./loadable-C9pgOBpc.js";import{c as G,d as k}from"./locale-czPJjPyG.js";import{c as g}from"./observers-hu61Hn6M.js";import{u as M,c as $,s as P,d as q}from"./t9n-GCZDzKCw.js";import{t as r,E as F,o as _,q as R,g as W,a as U,b as j}from"./ExpandToggle-BuE4XGzk.js";import{d as I}from"./action-CR32yz_4.js";import{d as J}from"./action-group-COr3dt9S.js";import{d as K}from"./action-menu-BfqOv3CZ.js";import{d as Q}from"./icon-DyzVx5Y-.js";import{d as V}from"./loader-DeANvmkY.js";import{d as X}from"./popover-CVy_TqWd.js";import{d as Y}from"./debounce-Bd3Yf8RP.js";import"./index-8ERthB3p.js";import"./guid-Cgw_FQNn.js";import"./key-wu7cp3Vu.js";import"./interactive-juHwuDyB.js";import"./component-CiBiWYk6.js";import"./array-CG_obv_6.js";import"./floating-ui-azNa5k60.js";import"./focusTrapComponent-DOljTw4q.js";import"./openCloseComponent-C40eKxzi.js";import"./Heading-CWhq9JWU.js";import"./FloatingArrow-Dv49hS4C.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const Z={actionGroupEnd:"action-group--end"},u={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},N=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",b=C(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=z(this,"calciteActionBarToggle",6),this.mutationObserver=g("mutation",()=>{const{el:e,expanded:t}=this;r({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=g("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=Y(({width:e,height:t})=>{const{el:o,expanded:i,expandDisabled:c,layout:n,overflowActionsDisabled:d}=this;if(d||n==="vertical"&&!t||n==="horizontal"&&!e)return;const a=R(o),h=c?a.length:a.length+1,l=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(l);const p=this.hasActionsEnd||this.hasBottomActions||!c?l.length+1:l.length,{actionHeight:A,actionWidth:y}=W(a),E=j({layout:n,actionCount:h,actionHeight:A,actionWidth:y,height:t,width:e,groupCount:p});U({actionGroups:l,expanded:i,overflowCount:E})},_),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=f(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=m(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=m(e)},this.handleTooltipSlotChange=e=>{const t=f(e).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;r({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){var t,o;if(e){(t=this.resizeObserver)==null||t.disconnect();return}(o=this.resizeObserver)==null||o.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){M(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;T(this),r({el:e,expanded:t}),this.overflowActions()}connectedCallback(){var o,i;const{el:e,expanded:t}=this;G(this),$(this),r({el:e,expanded:t}),(o=this.mutationObserver)==null||o.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(i=this.resizeObserver)==null||i.observe(e),this.overflowActions(),L(this)}async componentWillLoad(){O(this),await P(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),D(this),k(this),q(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await B(this),S(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:i,toggleExpand:c,scale:n,layout:d,messages:a,actionsEndGroupLabel:h,overlayPositioning:l}=this,p=t?null:s(F,{collapseText:a.collapse,el:o,expandText:a.expand,expanded:e,position:i,scale:n,toggle:c,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return s("calcite-action-group",{class:Z.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:h,layout:d,overlayPositioning:l,scale:n},s("slot",{name:u.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),s("slot",{name:u.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),s("slot",{name:u.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),p)}render(){return s(H,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},s("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return N}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function v(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,b);break;case"calcite-action":customElements.get(e)||I();break;case"calcite-action-group":customElements.get(e)||J();break;case"calcite-action-menu":customElements.get(e)||K();break;case"calcite-icon":customElements.get(e)||Q();break;case"calcite-loader":customElements.get(e)||V();break;case"calcite-popover":customElements.get(e)||X();break}})}v();const Le=b,De=v;export{Le as CalciteActionBar,De as defineCustomElement};
