import{r as d,h as n,C as h,H as p,g as u}from"./index-8ERthB3p.js";import{g as f,b}from"./dom-bea5da81-_E6DDA15.js";import{c as m,u as g,d as k,I as v}from"./interactive-a992f5df-DKTznAlu.js";import{s as y,a as x,c as E}from"./loadable-0092c6b2-CCLLZPvP.js";import"./guid-9a252389-Cgw_FQNn.js";import"./browser-26f0727c-UGQ_wQp7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const C=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,I=class{constructor(t){d(this,t),this.childElClickHandler=i=>{i.isTrusted||i.stopPropagation()},this.storeTagRef=i=>{this.childEl=i},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}connectedCallback(){m(this)}componentWillLoad(){y(this)}componentDidLoad(){x(this)}componentDidRender(){g(this)}disconnectedCallback(){k(this)}render(){const{download:t,el:i}=this,s=f(i),o=this.href?"a":"span",a=n("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"}),l=n("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"}),e=o,c=o==="span"?"link":null,r=o==="span"?0:null;return n(p,{role:"presentation"},n(v,{disabled:this.disabled},n(e,{class:{[h.rtl]:s==="rtl"},download:e==="a"&&(t===""||t)?t:null,href:e==="a"&&this.href,onClick:this.childElClickHandler,rel:e==="a"&&this.rel,role:c,tabIndex:r,target:e==="a"&&this.target,ref:this.storeTagRef},this.iconStart?a:null,n("slot",null),this.iconEnd?l:null)))}clickHandler(t){this.disabled||t.isTrusted||this.childEl.click()}async setFocus(){await E(this),b(this.childEl)}get el(){return u(this)}};I.style=C;export{I as calcite_link};