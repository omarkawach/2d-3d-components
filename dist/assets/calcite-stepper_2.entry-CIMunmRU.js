import{r as g,e as l,h as s,H as b,az as m,g as f}from"./index-8ERthB3p.js";import{s as k,h as p}from"./dom-bea5da81-_E6DDA15.js";import{c as u}from"./observers-fe652afa-BKcjSNKG.js";import{g as A}from"./guid-9a252389-Cgw_FQNn.js";import{c as v,d as y,n as h}from"./locale-ccbc05e8-Cx61mxV1.js";import{c as I,s as z,d as S,u as x}from"./t9n-e5ee6b09-BmFnC5TI.js";import{c as P,u as E,d as L,I as R}from"./interactive-a992f5df-DKTznAlu.js";import{s as D,a as M,c as H}from"./loadable-0092c6b2-CCLLZPvP.js";import"./key-c94e53b5-wu7cp3Vu.js";import"./browser-26f0727c-UGQ_wQp7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const a={stepBar:"step-bar",stepBarActive:"step-bar--active",stepBarComplete:"step-bar--complete",stepBarDisabled:"step-bar--disabled",stepBarError:"step-bar--error",stepBarInActive:"step-bar--inactive"},B=({disabled:e,active:t,complete:i,error:r,key:o})=>s("svg",{class:{[a.stepBar]:!0},key:o},s("rect",{class:{[a.stepBarActive]:t,[a.stepBarComplete]:i,[a.stepBarDisabled]:e,[a.stepBarError]:r,[a.stepBarInActive]:!0},width:"100%",x:"0",y:"0"})),d={actionIcon:"action-icon",actionIconStart:"action-icon--start",actionIconEnd:"action-icon--end",actionContainer:"action-container",stepBarContainer:"step-bar-container",singleView:"single-view"},F=':host([scale=s]){--calcite-internal-stepper-item-spacing-unit-s:0.25rem;--calcite-internal-stepper-action-block-size:2.75rem;--calcite-internal-stepper-action-inline-size:2rem;--calcite-internal-step-bar-gap:0.25rem}:host([scale=m]){--calcite-internal-stepper-item-spacing-unit-s:0.5rem;--calcite-internal-stepper-action-block-size:3.25rem;--calcite-internal-stepper-action-inline-size:2.5rem}:host([scale=l]){--calcite-internal-stepper-item-spacing-unit-s:0.75rem;--calcite-internal-stepper-action-block-size:4rem;--calcite-internal-stepper-action-inline-size:3rem;--calcite-internal-step-bar-gap:0.75rem}:host{display:flex}.container{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]) .container{flex:1 1 auto;flex-direction:column}:host([layout=horizontal]) .container,:host([layout=horizontal-single]) .container{display:grid;grid-template-areas:"items" "content";gap:0.5rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=s]) .container,:host([layout=horizontal-single][scale=s]) .container{gap:0.25rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .container,:host([layout=horizontal-single][scale=l]) .container{gap:0.75rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .container.single-view{display:flex;grid-template-columns:none}.action-icon{position:relative;display:flex;flex-grow:0;block-size:var(--calcite-internal-stepper-action-block-size);inline-size:var(--calcite-internal-stepper-action-inline-size)}.action-container{position:absolute;display:flex;justify-content:space-between;padding-block:0.25rem;inline-size:100%}.step-bar{display:flex;block-size:100%;inline-size:100%}.step-bar-container{position:absolute;display:flex;align-items:flex-start;justify-content:space-between;block-size:0.125rem;inline-size:100%;gap:var(--calcite-internal-step-bar-gap, 0.5rem)}.step-bar--inactive{fill:var(--calcite-color-border-3, #dfdfdf);fill-opacity:1;block-size:100%}.step-bar--active{fill:var(--calcite-color-brand)}.step-bar--complete{fill:var(--calcite-color-brand);fill-opacity:0.5}.step-bar--error{fill:var(--calcite-color-status-danger)}.step-bar--disabled{opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}',O=class{constructor(e){g(this,e),this.calciteStepperItemChange=l(this,"calciteStepperItemChange",6),this.calciteInternalStepperItemChange=l(this,"calciteInternalStepperItemChange",6),this.enabledItems=[],this.itemMap=new Map,this.items=[],this.mutationObserver=u("mutation",()=>this.updateItems()),this.multipleViewMode=!1,this.guid=`calcite-stepper-action-${A()}`,this.resizeObserver=u("resize",t=>this.elWidth=t[0].contentRect.width),this.handleActionClick=t=>{const i=this.currentActivePosition;t.target.getAttribute("data-position")==="start"?this.prevStep():this.nextStep(),typeof this.currentActivePosition=="number"&&i!==this.currentActivePosition&&!this.items[this.currentActivePosition].disabled&&this.calciteStepperItemChange.emit()},this.setContainerEl=t=>{this.containerEl=t},this.handleDefaultSlotChange=t=>{const i=k(t).filter(o=>(o==null?void 0:o.tagName)==="CALCITE-STEPPER-ITEM");this.items=i;const r=Array(i.length).fill("1fr").join(" ");this.containerEl.style.gridTemplateAreas=r,this.containerEl.style.gridTemplateColumns=r,this.setStepperItemNumberingSystem()},this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.messages=void 0,this.numberingSystem=void 0,this.selectedItem=null,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.currentActivePosition=void 0,this.elWidth=void 0}handleItemPropChange(){this.updateItems()}numberingSystemChange(){this.setStepperItemNumberingSystem()}onMessagesChange(){}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateItems(),I(this),v(this)}async componentWillLoad(){await z(this)}componentDidLoad(){var e;if((e=this.resizeObserver)==null||e.observe(this.containerEl),typeof this.currentActivePosition!="number"){const t=this.getFirstEnabledStepperPosition();t===0&&(this.currentActivePosition=t),this.calciteInternalStepperItemChange.emit({position:t})}}disconnectedCallback(){var e,t;(e=this.resizeObserver)==null||e.disconnect(),S(this),y(this),(t=this.mutationObserver)==null||t.disconnect()}render(){return s(b,{"aria-label":this.messages.label,role:"region"},s("div",{class:{container:!0,[d.singleView]:this.layout==="horizontal-single"},ref:this.setContainerEl},this.layout==="horizontal-single"&&s("div",{class:{[d.stepBarContainer]:!0}},this.items.map((e,t)=>s(B,{active:t===this.currentActivePosition,complete:e.complete&&t!==this.currentActivePosition&&!e.error,disabled:e.disabled&&t!==this.currentActivePosition,error:e.error&&t!==this.currentActivePosition,key:t}))),this.layout==="horizontal-single"&&s("div",{class:{[d.actionContainer]:!0}},this.renderAction("start"),this.renderAction("end")),s("slot",{onSlotchange:this.handleDefaultSlotChange})))}calciteInternalStepperItemKeyEvent(e){const t=e.detail.item,i=e.target;switch(t.key){case"ArrowDown":case"ArrowRight":p(this.enabledItems,i,"next");break;case"ArrowUp":case"ArrowLeft":p(this.enabledItems,i,"previous");break;case"Home":p(this.enabledItems,i,"first");break;case"End":p(this.enabledItems,i,"last");break}e.stopPropagation()}registerItem(e){const t=e.target,{content:i,position:r}=e.detail;this.itemMap.set(t,{position:r,content:i}),this.enabledItems=this.filterItems(),e.stopPropagation()}updateItem(e){const{position:t}=e.detail;typeof t=="number"&&(this.currentActivePosition=t,this.selectedItem=e.target),this.calciteInternalStepperItemChange.emit({position:t})}handleUserRequestedStepperItemSelect(){this.calciteStepperItemChange.emit()}async nextStep(){const e=this.getEnabledStepIndex(this.currentActivePosition+1,"next");typeof e=="number"&&this.updateStep(e)}async prevStep(){const e=this.getEnabledStepIndex(this.currentActivePosition-1,"previous");typeof e=="number"&&this.updateStep(e)}async goToStep(e){const t=e-1;this.currentActivePosition!==t&&this.updateStep(t)}async startStep(){const e=this.getEnabledStepIndex(0,"next");typeof e=="number"&&this.updateStep(e)}async endStep(){const e=this.getEnabledStepIndex(this.items.length-1,"previous");typeof e=="number"&&this.updateStep(e)}effectiveLocaleChange(){x(this,this.effectiveLocale)}handlePositionChange(){m(()=>{this.determineActiveStepper()})}handleElWidthChange(){m(()=>{this.determineActiveStepper()})}updateItems(){this.el.querySelectorAll("calcite-stepper-item").forEach(e=>{e.icon=this.icon,e.numbered=this.numbered,e.layout=this.layout,e.scale=this.scale})}determineActiveStepper(){const e=this.items.length;if(!this.elWidth||!e||this.layout!=="horizontal-single"||e===1)return;const t=this.currentActivePosition||0;this.layout==="horizontal-single"&&(this.multipleViewMode=!1,this.items.forEach((i,r)=>{i.hidden=r!==t}))}getEnabledStepIndex(e,t="next"){var c;const{items:i,currentActivePosition:r}=this;let o=e;for(;(c=i[o])!=null&&c.disabled&&this.layout!=="horizontal-single";)o=o+(t==="previous"?-1:1);return o!==r&&o<i.length&&o>=0?o:null}updateStep(e){this.currentActivePosition=e,this.calciteInternalStepperItemChange.emit({position:e})}filterItems(){return this.items.filter(e=>!e.disabled)}setStepperItemNumberingSystem(){this.items.forEach(e=>{e.numberingSystem=this.numberingSystem})}renderAction(e){const t=e==="start",i=t?"chevron-left":"chevron-right",{currentActivePosition:r,multipleViewMode:o,layout:c}=this,C=this.items.length,w=`${this.guid}-${t?"start":"end"}`;return c==="horizontal-single"&&!o?s("calcite-action",{alignment:"center",appearance:"transparent",class:{[d.actionIcon]:!0},compact:!0,"data-position":e,disabled:r===0&&t||r===C-1&&!t,icon:i,iconFlipRtl:!0,id:w,onClick:this.handleActionClick,scale:this.scale,text:t?this.messages.previousStep:this.messages.nextStep}):null}getFirstEnabledStepperPosition(){const e=this.items.findIndex(t=>!t.disabled);return e>-1?e:0}static get assetsDirs(){return["assets"]}get el(){return f(this)}static get watchers(){return{icon:["handleItemPropChange"],layout:["handleItemPropChange"],numbered:["handleItemPropChange"],scale:["handleItemPropChange"],numberingSystem:["numberingSystemChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],currentActivePosition:["handlePositionChange"],elWidth:["handleElWidthChange"]}}};O.style=F;const n={container:"container",stepperItemContent:"stepper-item-content",stepperItemDescription:"stepper-item-description",stepperItemHeader:"stepper-item-header",stepperItemHeading:"stepper-item-heading",stepperItemHeaderText:"stepper-item-header-text",stepperItemNumber:"stepper-item-number",visuallyHidden:"visually-hidden"},q=`:host([layout=horizontal][disabled]) .stepper-item-header,:host([layout=horizontal-single][disabled]) .stepper-item-header,:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal][disabled]) .stepper-item-header *,:host([layout=horizontal-single][disabled]) .stepper-item-header *,:host([disabled]) *,:host([layout=horizontal][disabled]) .stepper-item-header ::slotted(*),:host([layout=horizontal-single][disabled]) .stepper-item-header ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;--calcite-internal-stepper-action-inline-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;--calcite-internal-stepper-action-inline-size:2.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;--calcite-internal-stepper-action-inline-size:3rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);color:var(--calcite-color-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-color-text-3);opacity:var(--calcite-opacity-disabled);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .stepper-item-description{color:var(--calcite-color-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-color-brand)}:host([error]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-status-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-color-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-color-status-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-status-danger-hover)}:host([layout=horizontal]),:host([layout=horizontal-single]){display:contents}:host([layout=horizontal]) .container,:host([layout=horizontal-single]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header,:host([layout=horizontal-single]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);outline-color:transparent;grid-row:items}:host([layout=horizontal]) .stepper-item-header:focus,:host([layout=horizontal-single]) .stepper-item-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal-single]) .stepper-item-header{grid-area:1/1/1/-1}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][complete]) .stepper-item-header,:host([layout=horizontal-single][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal][error]) .stepper-item-header,:host([layout=horizontal-single][error]) .stepper-item-header{border-color:var(--calcite-color-status-danger)}:host([layout=horizontal][selected]) .stepper-item-header,:host([layout=horizontal-single][selected]) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-status-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}:host([layout=horizontal-single]) .stepper-item-header{margin-inline-end:0px;box-sizing:border-box;border-style:none;inline-size:100%;padding-inline:calc(var(--calcite-internal-stepper-action-inline-size) + 0.5rem)}:host([layout=horizontal-single][error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error][selected]),:host([layout=horizontal-single][complete][selected]) .container{color:var(--calcite-color-text-3)}:host([layout=horizontal-single][error][selected]) .stepper-item-heading,:host([layout=horizontal-single][complete][selected]) .container .stepper-item-heading{color:var(--calcite-color-text-2)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-icon{opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-number{color:var(--calcite-color-text-3)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`,W=class{constructor(e){g(this,e),this.calciteInternalStepperItemKeyEvent=l(this,"calciteInternalStepperItemKeyEvent",6),this.calciteInternalStepperItemSelect=l(this,"calciteInternalStepperItemSelect",6),this.calciteInternalUserRequestedStepperItemSelect=l(this,"calciteInternalUserRequestedStepperItemSelect",6),this.calciteInternalStepperItemRegister=l(this,"calciteInternalStepperItemRegister",6),this.keyDownHandler=t=>{if(!this.disabled&&t.target===this.el)switch(t.key){case" ":case"Enter":this.emitUserRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteInternalStepperItemKeyEvent.emit({item:t}),t.preventDefault();break}},this.handleItemClick=t=>{this.disabled||this.layout==="horizontal"&&t.composedPath().some(i=>{var r;return(r=i.classList)==null?void 0:r.contains("stepper-item-content")})||this.emitUserRequestedItem()},this.emitUserRequestedItem=()=>{if(this.emitRequestedItem(),!this.disabled){const t=this.itemPosition;this.calciteInternalUserRequestedStepperItemSelect.emit({position:t})}},this.emitRequestedItem=()=>{if(!this.disabled){const t=this.itemPosition;this.calciteInternalStepperItemSelect.emit({position:t})}},this.selected=!1,this.complete=!1,this.error=!1,this.disabled=!1,this.heading=void 0,this.description=void 0,this.iconFlipRtl=!1,this.numberingSystem=void 0,this.icon=!1,this.layout=void 0,this.messages=void 0,this.numbered=!1,this.scale="m",this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}selectedHandler(){this.selected&&this.emitRequestedItem()}disabledWatcher(){this.registerStepperItem()}onMessagesChange(){}effectiveLocaleWatcher(e){h.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1},x(this,this.effectiveLocale)}connectedCallback(){P(this),v(this),I(this)}async componentWillLoad(){D(this),this.parentStepperEl=this.el.parentElement,this.itemPosition=this.getItemPosition(),this.registerStepperItem(),this.selected&&this.emitRequestedItem(),await z(this)}componentDidLoad(){M(this)}componentDidRender(){E(this)}disconnectedCallback(){L(this),y(this),S(this)}render(){return s(b,{"aria-current":this.selected?"step":"false",onClick:this.handleItemClick,onKeyDown:this.keyDownHandler,tabIndex:this.disabled?-1:0},s(R,{disabled:this.disabled},s("div",{class:n.container},this.complete&&s("span",{"aria-live":"polite",class:n.visuallyHidden},this.messages.complete),s("div",{class:n.stepperItemHeader,tabIndex:this.layout==="horizontal"&&!this.disabled?0:null,ref:e=>this.headerEl=e},this.icon?this.renderIcon():null,this.numbered?s("div",{class:n.stepperItemNumber},this.renderNumbers(),"."):null,s("div",{class:n.stepperItemHeaderText},s("span",{class:n.stepperItemHeading},this.heading),s("span",{class:n.stepperItemDescription},this.description))),s("div",{class:n.stepperItemContent},s("slot",null)))))}updateActiveItemOnChange(e){(e.target===this.parentStepperEl||e.composedPath().includes(this.parentStepperEl))&&(this.selectedPosition=e.detail.position,this.determineSelectedItem())}async setFocus(){var e;await H(this),(e=this.layout==="vertical"?this.el:this.headerEl)==null||e.focus()}renderIcon(){let e="circle";return this.selected&&(this.layout!=="horizontal-single"||!this.error&&!this.complete)?e="circleF":this.error?e="exclamationMarkCircleF":this.complete&&(e="checkCircleF"),s("calcite-icon",{class:"stepper-item-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}determineSelectedItem(){this.selected=!this.disabled&&this.itemPosition===this.selectedPosition}registerStepperItem(){this.calciteInternalStepperItemRegister.emit({position:this.itemPosition})}getItemPosition(){var e;return Array.from((e=this.parentStepperEl)==null?void 0:e.querySelectorAll("calcite-stepper-item")).indexOf(this.el)}renderNumbers(){return h.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1},h.numberFormatter.format(this.itemPosition+1)}static get assetsDirs(){return["assets"]}get el(){return f(this)}static get watchers(){return{selected:["selectedHandler"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};W.style=q;export{O as calcite_stepper,W as calcite_stepper_item};
