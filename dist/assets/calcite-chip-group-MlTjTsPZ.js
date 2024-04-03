import{p,H as m,c as u,h as n}from"./jsxFactory-BxQYPm-b.js";import{x as o,t as f}from"./dom-BvFmd0Ey.js";import{c as b,d as C,u as g,I}from"./interactive-juHwuDyB.js";import{c as y}from"./observers-hu61Hn6M.js";import{a as E,s as S,c as k}from"./loadable-C9pgOBpc.js";import"./index-8ERthB3p.js";import"./guid-Cgw_FQNn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const v=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",l=p(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipGroupSelect=u(this,"calciteChipGroupSelect",6),this.mutationObserver=y("mutation",()=>this.updateItems()),this.items=[],this.updateItems=e=>{var s;const t=e?e.target:this.slotRefEl;this.items=t==null?void 0:t.assignedElements({flatten:!0}).filter(i=>i==null?void 0:i.matches("calcite-chip")),(s=this.items)==null||s.forEach(i=>{i.interactive=!0,i.scale=this.scale,i.selectionMode=this.selectionMode}),this.setSelectedItems(!1)},this.setSelectedItems=(e,t)=>{var s,i;t&&((s=this.items)==null||s.forEach(c=>{const a=t===c;switch(this.selectionMode){case"multiple":a&&(c.selected=!c.selected);break;case"single":c.selected=a?!c.selected:!1;break;case"single-persist":c.selected=!!a;break}})),this.selectedItems=(i=this.items)==null?void 0:i.filter(c=>c.selected),e&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}connectedCallback(){var e;b(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}componentDidRender(){C(this),g(this)}componentDidLoad(){E(this)}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}async componentWillLoad(){S(this)}calciteInternalChipKeyEventListener(e){var t;if(e.composedPath().includes(this.el)){const s=(t=this.items)==null?void 0:t.filter(i=>!i.disabled);switch(e.detail.key){case"ArrowRight":o(s,e.detail.target,"next");break;case"ArrowLeft":o(s,e.detail.target,"previous");break;case"Home":o(s,e.detail.target,"first");break;case"End":o(s,e.detail.target,"last");break}}}calciteChipCloseListener(e){var s,i,c,a;const t=e.target;(s=this.items)!=null&&s.includes(t)&&(((i=this.items)==null?void 0:i.indexOf(t))>0?o(this.items,t,"previous"):((c=this.items)==null?void 0:c.indexOf(t))===0?o(this.items,t,"next"):o(this.items,t,"first")),this.items=(a=this.items)==null?void 0:a.filter(h=>h!==t)}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target)}async setFocus(){var e;if(await k(this),!this.disabled)return(e=this.selectedItems[0]||this.items[0])==null?void 0:e.setFocus()}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup",{disabled:t}=this;return n(I,{disabled:t},n("div",{"aria-disabled":f(t),"aria-label":this.label,class:"container",role:e},n("slot",{onSlotchange:this.updateItems,ref:s=>this.slotRefEl=s})))}get el(){return this}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}static get style(){return v}},[1,"calcite-chip-group",{disabled:[516],label:[1],scale:[513],selectionMode:[513,"selection-mode"],selectedItems:[1040],setFocus:[64]},[[0,"calciteInternalChipKeyEvent","calciteInternalChipKeyEventListener"],[0,"calciteChipClose","calciteChipCloseListener"],[0,"calciteChipSelect","calciteChipSelectListener"]],{selectionMode:["onSelectionModeChange"]}]);function r(){if(typeof customElements>"u")return;["calcite-chip-group"].forEach(e=>{switch(e){case"calcite-chip-group":customElements.get(e)||customElements.define(e,l);break}})}r();const R=l,_=r;export{R as CalciteChipGroup,_ as defineCustomElement};