import{r as g,e as s,h as o,H as w,g as b}from"./index-8ERthB3p.js";import{t as u,i as A,h as p,b as I}from"./dom-bea5da81-_E6DDA15.js";import{f as T,c as h,d as F,a as G,F as k,r as L}from"./floating-ui-d61390f6-BU9hLXkm.js";import{g as M}from"./guid-9a252389-Cgw_FQNn.js";import{c as R,u as E,d as $,I as x}from"./interactive-a992f5df-DKTznAlu.js";import{i as B}from"./key-c94e53b5-wu7cp3Vu.js";import{c as C,s as S,a as O}from"./loadable-0092c6b2-CCLLZPvP.js";import{c as f}from"./observers-fe652afa-BKcjSNKG.js";import{o as y}from"./openCloseComponent-fb5847f4-CSs8Ejz-.js";import{g as m}from"./component-ec9f9062-CiBiWYk6.js";import"./debounce-00101a41-wTZ0BIwd.js";import"./browser-26f0727c-UGQ_wQp7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const K={dropdownTrigger:"trigger"},W=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}",N=class{constructor(e){g(this,e),this.calciteDropdownSelect=s(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=s(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=s(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=s(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=s(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=f("mutation",()=>this.updateItems()),this.resizeObserver=f("resize",t=>this.resizeObserverCallback(t)),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${M()}`,this.defaultAssignedElements=[],this.slotChangeHandler=t=>{this.defaultAssignedElements=t.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:i}=this;this.filteredFlipPlacements=i?T(i,t):null},this.updateTriggers=t=>{this.triggers=t.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map(t=>Array.from(t==null?void 0:t.querySelectorAll("calcite-dropdown-item"))).reduce((t,i)=>[...t,...i],[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach(t=>t.scale=this.scale)},this.updateGroups=t=>{const i=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-dropdown-group"));this.groups=i,this.updateItems()},this.resizeObserverCallback=t=>{t.forEach(i=>{const{target:n}=i;n===this.referenceEl?this.setDropdownWidth():n===this.scrollerEl&&this.setMaxScrollerHeight()})},this.setDropdownWidth=()=>{const{referenceEl:t,scrollerEl:i}=this,n=t==null?void 0:t.clientWidth;!n||!i||(i.style.minWidth=`${n}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:t}=this;if(!t)return;this.reposition(!0);const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=t=>{this.resizeObserver.observe(t),this.scrollerEl=t,this.transitionEl=t},this.setReferenceEl=t=>{this.referenceEl=t,h(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(t)},this.setFloatingEl=t=>{this.floatingEl=t,h(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=t=>{if(!t.composedPath().includes(this.referenceEl))return;const{defaultPrevented:i,key:n}=t;if(!i){if(this.open){if(n==="Escape"){this.closeCalciteDropdown(),t.preventDefault();return}else if(t.shiftKey&&n==="Tab"){this.closeCalciteDropdown(),t.preventDefault();return}}B(n)?(this.openCalciteDropdown(),t.preventDefault()):n==="Escape"&&(this.closeCalciteDropdown(),t.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.getTraversableItems().find(t=>t.selected)||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=F,this.selectedItems=[],this.type="click",this.widthScale=void 0,this.scale="m"}openHandler(){if(y(this),this.disabled){this.open=!1;return}this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}async setFocus(){await C(this),this.el.focus()}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(),y(this)),R(this),this.updateItems(),h(this,this.referenceEl,this.floatingEl)}componentWillLoad(){S(this)}componentDidLoad(){O(this),this.reposition(!0)}componentDidRender(){E(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),$(this),G(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return o(w,null,o(x,{disabled:this.disabled},o("div",{class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},o("slot",{"aria-controls":`${t}-menu`,"aria-expanded":u(e),"aria-haspopup":"menu",name:K.dropdownTrigger,onSlotchange:this.updateTriggers})),o("div",{"aria-hidden":u(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},o("div",{"aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[k.animation]:!0,[k.animationActive]:e},id:`${t}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},o("slot",{onSlotchange:this.updateGroups})))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:n,overlayPositioning:a,filteredFlipPlacements:c}=this;return L(this,{floatingEl:t,referenceEl:i,overlayPositioning:a,placement:n,flipPlacements:c,type:"menu"},e)}closeCalciteDropdownOnClick(e){this.disabled||!A(e)||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||this.type!=="hover"||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||this.type!=="hover"||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter(e=>!e.disabled&&!e.hidden)}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,n=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":p(n,i,"next");break;case"ArrowUp":p(n,i,"previous");break;case"Home":p(n,i,"first");break;case"End":p(n,i,"last");break}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||e.detail.requestedDropdownGroup.selectionMode==="none")&&this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter(e=>e.selected)}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i=0,n=0,a;return this.groups.forEach(c=>{e>0&&i<e&&Array.from(c.children).forEach((l,d)=>{d===0&&(isNaN(a)&&(a=l.offsetTop),n+=a),i<e&&(n+=l.offsetHeight,i+=1)})}),t.length>e?n:0}closeCalciteDropdown(e=!0){this.open=!1,e&&I(this.triggers[0])}getFocusableElement(e){e&&I(e)}updateTabIndexOfItems(e){this.items.forEach(t=>{t.tabIndex=e!==t?-1:0})}static get delegatesFocus(){return!0}get el(){return b(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}};N.style=W;const r={container:"container",containerLink:"container--link",containerMulti:"container--multi-selection",containerSingle:"container--single-selection",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon-end",iconStart:"dropdown-item-icon-start",itemContent:"dropdown-item-content",link:"dropdown-link"},U=":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}",_=class{constructor(e){g(this,e),this.calciteInternalDropdownItemChange=s(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(t=>t.selectionMode=this.selectionMode)},this.mutationObserver=f("mutation",()=>this.updateItems()),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){var e;this.updateItems(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const e=this.groupTitle?o("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,t=this.groupPosition>0?o("div",{class:"dropdown-separator",role:"separator"}):null;return o(w,{"aria-label":this.groupTitle,role:"group"},o("div",{class:{[r.container]:!0,[`${r.container}--${this.scale}`]:!0}},t,e,o("slot",null)))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return b(this)}static get watchers(){return{selectionMode:["handlePropsChange"]}}};_.style=U;const X=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container--link .dropdown-link,:host(:active:not([disabled])) .container--link .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-color-brand)}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,Y=class{constructor(e){g(this,e),this.calciteDropdownItemSelect=s(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=s(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=s(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=s(this,"calciteInternalDropdownCloseRequest",6),this.disabled=!1,this.href=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.label=void 0,this.rel=void 0,this.selected=!1,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){var e;await C(this),(e=this.el)==null||e.focus()}componentWillLoad(){S(this),this.initialize()}componentDidLoad(){O(this)}connectedCallback(){this.initialize()}componentDidRender(){E(this)}render(){const{href:e,selectionMode:t,label:i,iconFlipRtl:n,scale:a}=this,c=o("calcite-icon",{class:r.iconStart,flipRtl:n==="start"||n==="both",icon:this.iconStart,scale:m(this.scale)}),l=o("span",{class:r.itemContent},o("slot",null)),d=o("calcite-icon",{class:r.iconEnd,flipRtl:n==="end"||n==="both",icon:this.iconEnd,scale:m(this.scale)}),v=this.iconStart&&this.iconEnd?[c,l,d]:this.iconStart?[c,l]:this.iconEnd?[l,d]:l,z=e?o("a",{"aria-label":i,class:r.link,href:e,rel:this.rel,tabIndex:-1,target:this.target,ref:q=>this.childLink=q},v):v,P=e?null:t==="single"?"menuitemradio":t==="multiple"?"menuitemcheckbox":"menuitem",H=t!=="none"?u(this.selected):null,{disabled:D}=this;return o(w,{"aria-checked":H,"aria-label":e?"":i,role:P,tabIndex:D?-1:0},o(x,{disabled:D},o("div",{class:{[r.container]:!0,[r.containerLink]:!!e,[`${r.container}--${a}`]:!0,[r.containerMulti]:t==="multiple",[r.containerSingle]:t==="single",[r.containerNone]:t==="none"}},t!=="none"?o("calcite-icon",{class:r.icon,icon:t==="multiple"?"check":"bullet-point",scale:m(this.scale)}):null,z)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),this.selectionMode==="none"&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return b(this)}};Y.style=X;export{N as calcite_dropdown,_ as calcite_dropdown_group,Y as calcite_dropdown_item};