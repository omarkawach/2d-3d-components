import{aA as t,aB as s,aC as a,aD as n}from"./index-8ERthB3p.js";import{H as r,i as d}from"./index-f6afcedb-CZuD5wYN.js";import{r as h,c,a as o}from"./component-utils-858627d8-DRqmNtSu.js";import{o as l}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const f="",g=class{constructor(e){t(this,e),this.arcgisLegendReady=s(this,"arcgisLegendReady",7),this._watchHandles=[],this.referenceElement=void 0,this.activeLayerInfos=void 0,this.basemapLegendVisible=!1,this.hideLayersNotInCurrentView=!1,this.icon=void 0,this.respectLayerVisibilityDisabled=!1,this.legendStyle="classic",this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){h(this,e)}activeLayerInfosWatcher(e){this.widget&&(this.widget.activeLayerInfos=e)}basemapLegendVisibleWatcher(e){e!==void 0&&this.widget&&(this.widget.basemapLegendVisible=e)}hideLayersNotInCurrentViewWatcher(e){e!==void 0&&this.widget&&(this.widget.hideLayersNotInCurrentView=e)}iconWatcher(e){this.widget&&this.widget.icon!==e&&(this.widget.icon=e,this.widget.iconClass=e)}respectLayerVisibilityDisabledWatcher(e){e!==void 0&&this.widget&&(this.widget.respectLayerVisibility=!e)}styleWatcher(e){e!==void 0&&this.widget&&(this.widget.style=e)}positionWatcher(e){e!==void 0&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async componentDidLoad(){const e=this._createParams(),i=await r(e);this.widget=i,await this._addWatchers(),this._addContainer(),this.arcgisLegendReady.emit(),c(this)}disconnectedCallback(){l(this)}render(){return a("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await d();o(this,[e(()=>this.widget.activeLayerInfos,i=>{this.activeLayerInfos=i})])}_createParams(){const e={};return this.activeLayerInfos&&(e.activeLayerInfos=this.activeLayerInfos),this.basemapLegendVisible!==void 0&&(e.basemapLegendVisible=this.basemapLegendVisible),this.hideLayersNotInCurrentView!==void 0&&(e.hideLayersNotInCurrentView=this.hideLayersNotInCurrentView),this.respectLayerVisibilityDisabled!==void 0&&(e.respectLayerVisibility=!this.respectLayerVisibilityDisabled),this.legendStyle&&(e.style=this.legendStyle),this.view&&(e.view=this.view),e}get el(){return n(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],activeLayerInfos:["activeLayerInfosWatcher"],basemapLegendVisible:["basemapLegendVisibleWatcher"],hideLayersNotInCurrentView:["hideLayersNotInCurrentViewWatcher"],icon:["iconWatcher"],respectLayerVisibilityDisabled:["respectLayerVisibilityDisabledWatcher"],legendStyle:["styleWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};g.style=f;export{g as arcgis_legend};
