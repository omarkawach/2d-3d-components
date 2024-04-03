import{p as w,H as f,h as a}from"./jsxFactory-BxQYPm-b.js";import{j as x}from"./dom-BvFmd0Ey.js";import{c as v,u as E,d as g,I as C}from"./interactive-juHwuDyB.js";import{s as y,a as k,c as F}from"./loadable-C9pgOBpc.js";import{d as I}from"./button-Csva0FHl.js";import{d as R}from"./icon-DyzVx5Y-.js";import{d as S}from"./loader-DeANvmkY.js";import"./index-8ERthB3p.js";import"./guid-Cgw_FQNn.js";import"./form-DjQ2sEGP.js";import"./label2-D3Hkhas-.js";import"./component-CiBiWYk6.js";import"./locale-czPJjPyG.js";import"./key-wu7cp3Vu.js";import"./observers-hu61Hn6M.js";import"./t9n-GCZDzKCw.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const L={button:"button"},_={plus:"plus"},$=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:var(--calcite-shadow-md);--tw-shadow-colored:var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}",s=w(class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.appearance="solid",this.kind="brand",this.disabled=!1,this.icon=_.plus,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1}connectedCallback(){v(this)}componentWillLoad(){y(this)}componentDidLoad(){k(this)}componentDidRender(){E(this)}disconnectedCallback(){g(this)}async setFocus(){await F(this),x(this.buttonEl)}render(){const{appearance:t,kind:l,disabled:e,loading:c,scale:d,textEnabled:r,icon:p,label:o,text:h,iconFlipRtl:b}=this,u=r?null:o||h||null;return a(C,{disabled:e},a("calcite-button",{appearance:t==="solid"?"solid":"outline-fill",class:L.button,disabled:e,iconFlipRtl:b?"start":null,iconStart:p,kind:l,label:o,loading:c,round:!0,scale:d,title:u,type:"button",width:"auto",ref:m=>{this.buttonEl=m}},this.textEnabled?this.text:null))}get el(){return this}static get style(){return $}},[1,"calcite-fab",{appearance:[513],kind:[513],disabled:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],setFocus:[64]}]);function i(){if(typeof customElements>"u")return;["calcite-fab","calcite-button","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-fab":customElements.get(t)||customElements.define(t,s);break;case"calcite-button":customElements.get(t)||I();break;case"calcite-icon":customElements.get(t)||R();break;case"calcite-loader":customElements.get(t)||S();break}})}i();const V=s,X=i;export{V as CalciteFab,X as defineCustomElement};