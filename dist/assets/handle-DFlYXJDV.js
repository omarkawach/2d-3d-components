import{p as u,H as g,c as i,h as c}from"./jsxFactory-BxQYPm-b.js";import{t as d}from"./dom-BvFmd0Ey.js";import{s as f,a as b,c as p}from"./loadable-C9pgOBpc.js";import{c as m,d as v}from"./locale-czPJjPyG.js";import{c as C,s as x,d as y,u as T}from"./t9n-GCZDzKCw.js";import{c as A,u as H,d as L}from"./interactive-juHwuDyB.js";import{d as S}from"./icon-DyzVx5Y-.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const r={handle:"handle",handleSelected:"handle--selected"},w={drag:"drag"},a={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},k=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,D=u(class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=i(this,"calciteHandleChange",6),this.calciteHandleNudge=i(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=i(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){A(this),C(this),m(this)}async componentWillLoad(){f(this),await x(this)}componentDidLoad(){b(this)}componentDidRender(){H(this)}disconnectedCallback(){L(this),y(this),v(this)}effectiveLocaleChange(){T(this,this.effectiveLocale)}async setFocus(){var e;await p(this),(e=this.handleButton)==null||e.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(a.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:l,messages:s,selected:o}=this;return!s||!l||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?s.dragHandleChange:s.dragHandleIdle:o?s.dragHandleActive:s.dragHandleCommit).replace(a.position,t.toString()).replace(a.itemLabel,l).replace(a.total,n.toString())}render(){return c("span",{"aria-disabled":this.disabled?d(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),"aria-pressed":this.disabled?null:d(this.selected),class:{[r.handle]:!0,[r.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabIndex:this.disabled?null:0,title:this.getTooltip(),ref:e=>{this.handleButton=e}},c("calcite-icon",{icon:w.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return k}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function I(){if(typeof customElements>"u")return;["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,D);break;case"calcite-icon":customElements.get(e)||S();break}})}I();export{I as d};
