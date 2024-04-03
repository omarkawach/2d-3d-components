import{r as b,e as s,h as e,H as u,g}from"./index-8ERthB3p.js";import{a as m,d as i,t as d}from"./dom-bea5da81-_E6DDA15.js";import{c as f,d as v}from"./locale-ccbc05e8-Cx61mxV1.js";import{c as k,d as x,s as w,u as y}from"./t9n-e5ee6b09-BmFnC5TI.js";import{c as C,a as S,s as D}from"./loadable-0092c6b2-CCLLZPvP.js";import{c as z,u as M,d as E,I}from"./interactive-a992f5df-DKTznAlu.js";import{i as H}from"./key-c94e53b5-wu7cp3Vu.js";import"./guid-9a252389-Cgw_FQNn.js";import"./observers-fe652afa-BKcjSNKG.js";import"./browser-26f0727c-UGQ_wQp7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const a={container:"container",contentWrapper:"content-wrapper",header:"header",footer:"footer",heading:"heading",description:"description",checkboxWrapper:"checkbox-wrapper",checkboxWrapperDeprecated:"checkbox-wrapper-deprecated",thumbnailWrapper:"thumbnail-wrapper",headerTextContainer:"header-text-container",cardContent:"card-content",hasSlottedContent:"has-slotted-content"},o={thumbnail:"thumbnail",heading:"heading",description:"description",footerStart:"footer-start",footerEnd:"footer-end",title:"title",subtitle:"subtitle"},l={selected:"check-square-f",unselected:"square",selectedSingle:"circle-f",unselectedSingle:"circle"},L=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;--calcite-card-corner-radius:var(--calcite-corner-radius-sharp);--calcite-card-background-color:var(--calcite-color-foreground-1);--calcite-card-border-color:var(--calcite-color-border-3);--calcite-card-shadow:var(--calcite-shadow-none);--calcite-card-accent-color-selected:var(--calcite-color-brand);--calcite-card-selection-background-color:transparent;--calcite-card-selection-background-color-hover:var(--calcite-color-transparent-hover);--calcite-card-selection-background-color-active:var(--calcite-color-transparent-press);--calcite-card-selection-background-color-selected:transparent;--calcite-card-selection-icon-color:var(--calcite-color-text-3);--calcite-card-selection-icon-color-hover:var(--calcite-color-text-2);--calcite-card-selection-icon-color-selected:var(--calcite-color-brand)}.content-wrapper{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border:var(--calcite-border-width-sm) solid var(--calcite-card-border-color);border-radius:var(--calcite-card-corner-radius);background-color:var(--calcite-card-background-color);box-shadow:var(--calcite-card-shadow);pointer-events:none}::slotted(*){pointer-events:auto}:host(:not([selectable])) .content-wrapper:not(.non-interactive){outline-color:transparent}:host(:not([selectable])) .content-wrapper:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .content-wrapper *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header{display:flex;flex-direction:row;align-items:flex-start}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:var(--calcite-spacing-md);padding-block-start:var(--calcite-spacing-xxs);padding-block-end:var(--calcite-spacing-md)}.header-text-container{display:flex;inline-size:100%;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem}.header-text-container:not(:only-child){padding-inline-end:0.125rem}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{block-size:auto;font-size:var(--calcite-font-size--2);line-height:1.375}.has-slotted-content{padding:0.75rem}:host([selected]) .content-wrapper{box-shadow:inset 0 -4px 0 0 var(--calcite-card-accent-color-selected)}:host([selectable]) .header{padding-inline-end:var(--calcite-spacing-xxxl)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}slot[name=heading]::slotted(*),*::slotted([slot=heading]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=description]::slotted(*),*::slotted([slot=description]){margin:0px;margin-block-start:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto;color:var(--calcite-color-text-3)}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3)}.checkbox-wrapper-deprecated{pointer-events:auto;position:absolute;inset-block-start:var(--calcite-spacing-sm);inset-inline-end:var(--calcite-spacing-sm);margin:0;padding:0}.checkbox-wrapper{pointer-events:auto;margin:0.5rem;cursor:pointer;padding:0.5rem;outline-color:transparent;background-color:var(--calcite-card-selection-background-color);display:flex;align-items:center;justify-items:center;--calcite-ui-icon-color:var(--calcite-card-selection-icon-color)}.checkbox-wrapper:hover{background-color:var(--calcite-card-selection-background-color-hover);--calcite-ui-icon-color:var(--calcite-card-selection-icon-color-hover)}.checkbox-wrapper:active{background-color:var(--calcite-card-selection-background-color-active)}.checkbox-wrapper calcite-icon{pointer-events:none}:host([selected]) .checkbox-wrapper{--calcite-ui-icon-color:var(--calcite-card-selection-icon-color-selected);background-color:var(--calcite-card-selection-background-color-selected)}:host([selected]) .checkbox-wrapper:hover{background-color:var(--calcite-card-selection-background-color-hover)}:host([selected]) .checkbox-wrapper:active{background-color:var(--calcite-card-selection-background-color-active)}:host(:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper{background-color:var(--calcite-card-selection-background-color-hover);--calcite-ui-icon-color:var(--calcite-card-selection-icon-color-hover)}:host([selected]:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper{background-color:var(--calcite-card-selection-background-color-active);--calcite-ui-icon-color:var(--calcite-card-selection-icon-color-selected)}.thumbnail-wrapper{display:flex}.content-wrapper.inline{flex-direction:row}.content-wrapper.inline>.container{inline-size:60%}.content-wrapper.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.content-wrapper.inline slot[name=thumbnail]::slotted(img),.content-wrapper.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,F=class{constructor(c){b(this,c),this.calciteCardSelect=s(this,"calciteCardSelect",6),this.calciteInternalCardKeyEvent=s(this,"calciteInternalCardKeyEvent",6),this.handleDefaultSlotChange=t=>{this.hasContent=m(t)},this.keyDownHandler=t=>{if(t.target===this.containerEl&&!this.selectable&&!this.disabled)if(H(t.key)&&this.selectionMode!=="none")this.calciteCardSelect.emit(),t.preventDefault();else switch(t.key){case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalCardKeyEvent.emit(t),t.preventDefault();break}},this.cardBodyClickHandler=t=>{t.target===this.containerEl&&!this.selectable&&!this.disabled&&this.selectionMode!=="none"&&this.calciteCardSelect.emit()},this.cardSelectKeyDownDeprecated=t=>{switch(t.key){case" ":case"Enter":this.selectCardDeprecated(),t.preventDefault();break}},this.selectCardDeprecated=()=>{this.selected=!this.selected,this.calciteCardSelect.emit()},this.cardSelectClick=t=>{this.disabled||(t.preventDefault(),this.calciteCardSelect.emit(),this.setFocus())},this.loading=!1,this.thumbnailPosition="block-start",this.disabled=!1,this.label=void 0,this.selectable=!1,this.selected=!1,this.messages=void 0,this.selectionMode="none",this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.hasContent=!1}onMessagesChange(){}async setFocus(){var c;await C(this),this.disabled||(c=this.containerEl)==null||c.focus()}connectedCallback(){z(this),f(this),k(this)}componentDidLoad(){S(this)}componentDidRender(){M(this)}disconnectedCallback(){E(this),v(this),x(this)}async componentWillLoad(){D(this),await w(this)}effectiveLocaleChange(){y(this,this.effectiveLocale)}renderCheckboxDeprecated(){return e("calcite-label",{class:a.checkboxWrapperDeprecated},e("calcite-checkbox",{checked:this.selected,label:this.messages.select,onClick:this.selectCardDeprecated,onKeyDown:this.cardSelectKeyDownDeprecated}))}renderThumbnail(){return i(this.el,o.thumbnail)?e("section",{class:a.thumbnailWrapper},e("slot",{name:o.thumbnail})):null}renderSelectionIcon(){const c=this.selectionMode==="multiple"&&this.selected?l.selected:this.selectionMode==="multiple"?l.unselected:this.selected?l.selectedSingle:l.unselectedSingle;return e("div",{class:a.checkboxWrapper,onPointerDown:this.cardSelectClick,tabIndex:-1},e("calcite-icon",{icon:c,scale:"s"}))}renderHeader(){const{el:c}=this,t=i(c,o.heading),n=i(c,o.description),r=t||n,h=i(c,o.subtitle),p=i(c,o.title);return r||(h||p)?e("header",{class:a.header},this.selectable?this.renderCheckboxDeprecated():null,e("div",{class:a.headerTextContainer},e("slot",{key:"heading-slot",name:o.heading}),e("slot",{key:"description-slot",name:o.description}),e("slot",{key:"deprecated-title-slot",name:o.title}),e("slot",{key:"deprecated-subtitle-slot",name:o.subtitle})),this.selectionMode!=="none"&&this.renderSelectionIcon()):null}renderFooter(){const{el:c}=this,t=i(c,o.footerStart),n=i(c,o.footerEnd);return t||n?e("footer",{class:a.footer},e("slot",{name:o.footerStart}),e("slot",{name:o.footerEnd})):null}render(){const c=this.thumbnailPosition.startsWith("inline"),t=this.thumbnailPosition.endsWith("start"),n=this.selectionMode==="multiple"?"checkbox":this.selectionMode!=="none"?"radio":void 0;return e(u,null,e(I,{disabled:this.disabled},e("div",{"aria-checked":this.selectionMode!=="none"?d(this.selected):void 0,"aria-disabled":this.disabled,"aria-label":this.label,class:{[a.contentWrapper]:!0,inline:c},onClick:this.cardBodyClickHandler,onKeyDown:this.keyDownHandler,role:n,tabIndex:!this.selectable||this.disabled?0:-1,ref:r=>this.containerEl=r},this.loading?e("div",{"aria-live":"polite",class:"calcite-card-loader-container"},e("calcite-loader",{label:this.messages.loading})):null,t&&this.renderThumbnail(),e("section",{"aria-busy":d(this.loading),class:{[a.container]:!0}},this.renderHeader(),e("div",{class:{[a.cardContent]:!0,[a.hasSlottedContent]:this.hasContent}},e("slot",{onSlotchange:this.handleDefaultSlotChange})),this.renderFooter()),!t&&this.renderThumbnail())))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};F.style=L;export{F as calcite_card};
