import{r as h,e as i,h as c,g as u}from"./index-8ERthB3p.js";import{t as d}from"./dom-bea5da81-_E6DDA15.js";import{s as g,a as p,c as b}from"./loadable-0092c6b2-CCLLZPvP.js";import{c as f,d as m}from"./locale-ccbc05e8-Cx61mxV1.js";import{c as v,s as C,d as x,u as y}from"./t9n-e5ee6b09-BmFnC5TI.js";import{c as H,u as L,d as T}from"./interactive-a992f5df-DKTznAlu.js";import"./guid-9a252389-Cgw_FQNn.js";import"./key-c94e53b5-wu7cp3Vu.js";import"./observers-fe652afa-BKcjSNKG.js";import"./browser-26f0727c-UGQ_wQp7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const r={handle:"handle",handleSelected:"handle--selected"},A={drag:"drag"},s={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},S=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,w=class{constructor(e){h(this,e),this.calciteHandleChange=i(this,"calciteHandleChange",6),this.calciteHandleNudge=i(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=i(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=t=>{if(!this.disabled)switch(t.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),t.preventDefault();break;case"ArrowUp":if(!this.selected)return;t.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;t.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){H(this),v(this),f(this)}async componentWillLoad(){g(this),await C(this)}componentDidLoad(){p(this)}componentDidRender(){L(this)}disconnectedCallback(){T(this),x(this),m(this)}effectiveLocaleChange(){y(this,this.effectiveLocale)}async setFocus(){var e;await b(this),(e=this.handleButton)==null||e.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(s.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:l,messages:a,selected:o}=this;return!a||!l||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?a.dragHandleChange:a.dragHandleIdle:o?a.dragHandleActive:a.dragHandleCommit).replace(s.position,t.toString()).replace(s.itemLabel,l).replace(s.total,n.toString())}render(){return c("span",{"aria-disabled":this.disabled?d(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),"aria-pressed":this.disabled?null:d(this.selected),class:{[r.handle]:!0,[r.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabIndex:this.disabled?null:0,title:this.getTooltip(),ref:e=>{this.handleButton=e}},c("calcite-icon",{icon:A.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return u(this)}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=S;export{w as calcite_handle};
