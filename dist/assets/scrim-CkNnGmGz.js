import{p as o,H as r,h as t}from"./jsxFactory-BxQYPm-b.js";import{c as l,d}from"./locale-czPJjPyG.js";import{u as h,c as m,s as f,d as g}from"./t9n-GCZDzKCw.js";import{c as u}from"./observers-hu61Hn6M.js";import{r as p}from"./dom-BvFmd0Ey.js";import{d as v}from"./loader-DeANvmkY.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const i={scrim:"scrim",content:"content"},n={s:72,l:480},C=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",b=o(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=u("resize",()=>this.handleResize()),this.handleDefaultSlotChange=e=>{this.hasContent=p(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){h(this,this.effectiveLocale)}connectedCallback(){var e;l(this),m(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await f(this)}disconnectedCallback(){var e;d(this),g(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:c}=this;return t("div",{class:i.scrim},s?t("calcite-loader",{label:c.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,t("div",{class:i.content,hidden:!e},t("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<n.s?"s":e>=n.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return C}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function S(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,b);break;case"calcite-loader":customElements.get(e)||v();break}})}S();export{b as S,S as d};