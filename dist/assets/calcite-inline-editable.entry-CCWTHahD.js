import{r as l,e as a,h as i,g as c}from"./index-8ERthB3p.js";import{d as o}from"./dom-bea5da81-_E6DDA15.js";import{c as d,d as r,u as h,I as u}from"./interactive-a992f5df-DKTznAlu.js";import{c as p,d as b,g}from"./label-ce4d8e83-DSRVKKBm.js";import{s as E,a as f,c as m}from"./loadable-0092c6b2-CCLLZPvP.js";import{c as C,d as y}from"./locale-ccbc05e8-Cx61mxV1.js";import{c as v}from"./observers-fe652afa-BKcjSNKG.js";import{c as w,s as k,d as I,u as B}from"./t9n-e5ee6b09-BmFnC5TI.js";import"./guid-9a252389-Cgw_FQNn.js";import"./browser-26f0727c-UGQ_wQp7.js";import"./component-ec9f9062-CiBiWYk6.js";import"./key-c94e53b5-wu7cp3Vu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const n={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"},L=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-color-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-color-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-color-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",H=class{constructor(t){l(this,t),this.calciteInlineEditableEditCancel=a(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=a(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=a(this,"calciteInternalInlineEditableEnableEditingChange",6),this.mutationObserver=v("mutation",()=>this.mutationObserverCallback()),this.enableEditing=()=>{var e,s;this.valuePriorToEditing=(e=this.inputElement)==null?void 0:e.value,this.editingEnabled=!0,(s=this.inputElement)==null||s.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async e=>{var s;e.defaultPrevented||(e.key==="Escape"&&(e.preventDefault(),this.cancelEditing()),e.key==="Tab"&&this.shouldShowControls&&(!e.shiftKey&&e.target===this.inputElement&&(e.preventDefault(),this.cancelEditingButton.setFocus()),e.shiftKey&&e.target===this.cancelEditingButton&&(e.preventDefault(),(s=this.inputElement)==null||s.setFocus())))},this.cancelEditingHandler=async e=>{e.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async e=>{this.disabled||e.target===this.cancelEditingButton||e.target===this.confirmEditingButton||(e.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async e=>{e.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch{}finally{this.loading=!1}},this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.scale=void 0,this.afterConfirm=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0}disabledWatcher(t){this.inputElement&&(this.inputElement.disabled=t)}editingEnabledWatcher(t,e){this.inputElement&&(this.inputElement.editingEnabled=t),!t&&e&&(this.shouldEmitCancel=!0)}onMessagesChange(){}connectedCallback(){var t;d(this),p(this),C(this),w(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0}),this.mutationObserverCallback()}async componentWillLoad(){E(this),await k(this)}componentDidLoad(){f(this)}disconnectedCallback(){var t;r(this),b(this),y(this),I(this),(t=this.mutationObserver)==null||t.disconnect()}componentDidRender(){h(this)}render(){return i(u,{disabled:this.disabled},i("div",{class:n.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},i("div",{class:n.inputWrapper},i("slot",null)),i("div",{class:n.controlsWrapper},i("calcite-button",{appearance:"transparent",class:n.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:t=>this.enableEditingButton=t}),this.shouldShowControls&&[i("div",{class:n.cancelEditingButtonWrapper},i("calcite-button",{appearance:"transparent",class:n.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:t=>this.cancelEditingButton=t})),i("calcite-button",{appearance:"solid",class:n.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:t=>this.confirmEditingButton=t})])))}blurHandler(){this.controls||this.disableEditing()}effectiveLocaleChange(){B(this,this.effectiveLocale)}async setFocus(){var t;await m(this),(t=this.el)==null||t.focus()}mutationObserverCallback(){var t;this.updateSlottedInput(),this.scale=this.scale||((t=this.inputElement)==null?void 0:t.scale)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=o(this.el,{matches:"calcite-input"});this.inputElement=t,t&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||g(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return c(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=L;export{H as calcite_inline_editable};
