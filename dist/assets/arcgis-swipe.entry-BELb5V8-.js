import{aA as t,aB as s,aC as r,aD as n}from"./index-8ERthB3p.js";import{X as a}from"./index-f6afcedb-CZuD5wYN.js";import{r as d,c as h}from"./component-utils-858627d8-DRqmNtSu.js";import{o as c}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const o="arcgis-swipe{}",g=class{constructor(e){t(this,e),this.widgetReady=s(this,"widgetReady",7),this._watchHandles=[],this.referenceElement=void 0,this.direction=void 0,this.dragLabel=void 0,this.leadingLayers=void 0,this.swipePosition=void 0,this.trailingLayers=void 0,this.view=void 0,this.position="bottom-left",this.widget=void 0}directionWatcher(e){e!==void 0&&this.widget&&(this.widget.direction=e)}dragLabelWatcher(e){e!==void 0&&this.widget&&(this.widget.dragLabel=e)}leadingLayersWatcher(e){e!==void 0&&this.widget&&(this.widget.leadingLayers=e)}swipePositionWatcher(e){e!==void 0&&this.widget&&(this.widget.position=e)}trailingLayersWatcher(e){e!==void 0&&this.widget&&(this.widget.trailingLayers=e)}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}referenceElementWatcher(e){d(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async componentDidLoad(){const e=this._createParams(),i=await a(e);this.widget=i,this.widgetReady.emit({widget:this.widget}),h(this)}disconnectedCallback(){c(this)}render(){return r("div",{ref:e=>this.childElem=e})}_createParams(){const e={container:this.childElem};return this.view&&(e.view=this.view),e}get el(){return n(this)}static get watchers(){return{direction:["directionWatcher"],dragLabel:["dragLabelWatcher"],leadingLayers:["leadingLayersWatcher"],swipePosition:["swipePositionWatcher"],trailingLayers:["trailingLayersWatcher"],position:["positionWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};g.style=o;export{g as arcgis_swipe};
