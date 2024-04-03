import{r as v,e as l,h as r,H as g,g as T}from"./index-8ERthB3p.js";import{t as E,q as w,i as H,y}from"./dom-bea5da81-_E6DDA15.js";import{c as d,b as C,a as b,r as L,F as h}from"./floating-ui-d61390f6-BU9hLXkm.js";import{g as R}from"./guid-9a252389-Cgw_FQNn.js";import{o as c}from"./openCloseComponent-fb5847f4-CSs8Ejz-.js";import{F as O}from"./FloatingArrow-67f9fe1c-3WeNHor2.js";import"./debounce-00101a41-wTZ0BIwd.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const k={container:"container"},S=300,x=500,f="aria-describedby";function p(o){const{referenceElement:e}=o;return(typeof e=="string"?w(o,{id:e}):e)||null}class A{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find(n=>t.has(n));return t.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t!=null&&t.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=p(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this;if((i==null?void 0:i.open)&&t.includes(i)){this.clearHoverTimeout();return}const s=this.queryTooltip(t);this.hoveredTooltip=s,!this.isClosableClickedTooltip(s)&&(this.clickedTooltip=null,s?this.openHoveredTooltip(s):i&&this.closeHoveredTooltip())},this.pointerDownHandler=e=>{if(!H(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,t!=null&&t.closeOnClick&&(this.toggleTooltip(t,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout(()=>{this.hoverOpenTimeout!==null&&(this.clearHoverCloseTimeout(),this.activeTooltip!==this.hoveredTooltip&&(this.closeActiveTooltip(),e===this.hoveredTooltip&&this.toggleTooltip(e,!0)))},this.activeTooltip?0:S)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout(()=>{this.hoverCloseTimeout!==null&&this.closeActiveTooltip()},x)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0}),e.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0}),e.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:!0}),window.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),window.addEventListener("focusin",this.focusInHandler,{capture:!0}),window.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),window.removeEventListener("focusin",this.focusInHandler,{capture:!0}),window.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeActiveTooltip(){const{activeTooltip:e}=this;e!=null&&e.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){this.closeActiveTooltip(),t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}queryFocusedTooltip(e,t){const i=this.queryTooltip(e.composedPath());!i||this.isClosableClickedTooltip(i)||this.toggleFocusedTooltip(i,t)}isClosableClickedTooltip(e){return(e==null?void 0:e.closeOnClick)&&e===this.clickedTooltip}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=(t.get(e)??0)+1;i===1&&this.addShadowListeners(e),t.set(e,i)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e)-1;i===0&&this.removeShadowListeners(e),t.set(e,i)}getReferenceElShadowRootNode(e){return e instanceof Element?y(e):null}}const D=":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}",u=new A,P=class{constructor(o){v(this,o),this.calciteTooltipBeforeClose=l(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=l(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=l(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=l(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${R()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=p(this.el),d(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:n}=this;e&&i&&!n&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(f,t),u.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(f),u.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=C,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){c(this),this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded),this.open&&c(this),d(this,this.effectiveReferenceElement,this.el)}async componentWillLoad(){this.open&&c(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),b(this,this.effectiveReferenceElement,this.el)}async reposition(o=!1){const{el:e,effectiveReferenceElement:t,placement:i,overlayPositioning:n,offsetDistance:s,offsetSkidding:a,arrowEl:m}=this;return L(this,{floatingEl:e,referenceEl:t,overlayPositioning:n,placement:i,offsetDistance:s,offsetSkidding:a,arrowEl:m,type:"tooltip"},o)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:o,label:e,open:t,floatingLayout:i}=this,n=o&&t,s=!n;return r(g,{"aria-hidden":E(s),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":s,id:this.getId(),role:"tooltip"},r("div",{class:{[h.animation]:!0,[h.animationActive]:n},ref:this.setTransitionEl},r(O,{floatingLayout:i,ref:a=>this.arrowEl=a}),r("div",{class:k.container},r("slot",null))))}get el(){return T(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};P.style=D;export{P as calcite_tooltip};
