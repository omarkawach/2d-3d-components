import{r as y,e as C,h as i,H as w,g as E}from"./index-8ERthB3p.js";import{c as z,d as S}from"./conditionalSlot-5707efa9-BJA5o8Ix.js";import{s as g,a as f,f as T}from"./dom-bea5da81-_E6DDA15.js";import{a as H,s as L,c as O}from"./loadable-0092c6b2-CCLLZPvP.js";import{c as D,d as G}from"./locale-ccbc05e8-Cx61mxV1.js";import{c as m}from"./observers-fe652afa-BKcjSNKG.js";import{u as B,c as M,s as k,d as q}from"./t9n-e5ee6b09-BmFnC5TI.js";import{t as d,E as P,o as F,q as R,g as W,a as I,b as U}from"./ExpandToggle-6e6d607b-C9YgC5vz.js";import{d as _}from"./debounce-00101a41-wTZ0BIwd.js";import"./guid-9a252389-Cgw_FQNn.js";import"./key-c94e53b5-wu7cp3Vu.js";import"./resources-7869c2de-CtVHmEmu.js";import"./resources-55aa4dd7-BrYEYfw8.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const j={actionGroupEnd:"action-group--end"},u={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},N=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",J=class{constructor(o){y(this,o),this.calciteActionBarToggle=C(this,"calciteActionBarToggle",6),this.mutationObserver=m("mutation",()=>{const{el:e,expanded:t}=this;d({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=m("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(s=>{t.includes(s)||(s.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:s}=e.contentRect;this.resize({width:t,height:s})},this.resize=_(({width:e,height:t})=>{const{el:s,expanded:h,expandDisabled:a,layout:l,overflowActionsDisabled:c}=this;if(c||l==="vertical"&&!t||l==="horizontal"&&!e)return;const r=R(s),p=a?r.length:r.length+1,n=Array.from(s.querySelectorAll("calcite-action-group"));this.setGroupLayout(n);const b=this.hasActionsEnd||this.hasBottomActions||!a?n.length+1:n.length,{actionHeight:x,actionWidth:v}=W(r),A=U({layout:l,actionCount:p,actionHeight:x,actionWidth:v,height:t,width:e,groupCount:b});I({actionGroups:n,expanded:h,overflowCount:A})},F),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=g(e).filter(s=>s.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=f(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=f(e)},this.handleTooltipSlotChange=e=>{const t=g(e).filter(s=>s==null?void 0:s.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:o,expanded:e}=this;d({el:o,expanded:e}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(o){var e,t;if(o){(e=this.resizeObserver)==null||e.disconnect();return}(t=this.resizeObserver)==null||t.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){B(this,this.effectiveLocale)}componentDidLoad(){const{el:o,expanded:e}=this;H(this),d({el:o,expanded:e}),this.overflowActions()}connectedCallback(){var t,s;const{el:o,expanded:e}=this;D(this),M(this),d({el:o,expanded:e}),(t=this.mutationObserver)==null||t.observe(o,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(s=this.resizeObserver)==null||s.observe(o),this.overflowActions(),z(this)}async componentWillLoad(){L(this),await k(this)}disconnectedCallback(){var o,e;(o=this.mutationObserver)==null||o.disconnect(),(e=this.resizeObserver)==null||e.disconnect(),S(this),G(this),q(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await O(this),T(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(o){o.forEach(e=>e.layout=this.layout)}renderBottomActionGroup(){const{expanded:o,expandDisabled:e,el:t,position:s,toggleExpand:h,scale:a,layout:l,messages:c,actionsEndGroupLabel:r,overlayPositioning:p}=this,n=e?null:i(P,{collapseText:c.collapse,el:t,expandText:c.expand,expanded:o,position:s,scale:a,toggle:h,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return i("calcite-action-group",{class:j.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:r,layout:l,overlayPositioning:p,scale:a},i("slot",{name:u.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),i("slot",{name:u.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),i("slot",{name:u.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),n)}render(){return i(w,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},i("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return E(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};J.style=N;export{J as calcite_action_bar};