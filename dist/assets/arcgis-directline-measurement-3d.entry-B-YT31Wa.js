import{aA as s,aB as n,aC as a,aD as r}from"./index-8ERthB3p.js";import{r as c,i as h}from"./index-f6afcedb-CZuD5wYN.js";import{r as d,c as o,a as w}from"./component-utils-858627d8-DRqmNtSu.js";import{o as u}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const m="",l=class{constructor(i){s(this,i),this.arcgisDirectLineMeasurement3dReady=n(this,"arcgisDirectLineMeasurement3dReady",7),this._watchHandles=[],this.referenceElement=void 0,this.analysis=void 0,this.icon=void 0,this.unit=void 0,this.unitOptions=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(i){d(this,i)}iconWatcher(i){this.widget&&(this.widget.icon=i,this.widget.iconClass=i)}unitWatcher(i){this.widget&&(this.widget.unit=i)}unitOptionsWatcher(i){this.widget&&(this.widget.unitOptions=i)}positionWatcher(i){i!==void 0&&this.widget&&this.view.ui.move(this.childElem,i)}viewWatcher(i){i!==void 0&&this.widget&&(this.widget.view=i)}async clear(){var i;(i=this.widget)==null||i.viewModel.clear()}async start(){var i;(i=this.widget)==null||i.viewModel.start()}async componentDidLoad(){const i=this._createParams(),t=await c(i);this.widget=t,await this._addWatchers(),this._addContainer(),this.arcgisDirectLineMeasurement3dReady.emit(),o(this)}disconnectedCallback(){u(this)}render(){return a("div",{ref:i=>this.childElem=i})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:i,whenOnce:t}=await h();w(this,i(()=>this.widget.analysis,e=>this.analysis=e,{initial:!0})),await t(()=>this.widget.unitOptions),this.unitOptions=this.widget.unitOptions}_createParams(){const i={};return this.icon&&(i.icon=this.icon,i.iconClass=this.icon),this.view&&(i.view=this.view),this.unit&&(i.unit=this.unit),this.unitOptions&&(i.unitOptions=this.unitOptions),i}get el(){return r(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],icon:["iconWatcher"],unit:["unitWatcher"],unitOptions:["unitOptionsWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};l.style=m;export{l as arcgis_directline_measurement_3d};
