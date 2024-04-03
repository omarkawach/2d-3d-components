import{aA as s,aB as n,aC as o,aD as r}from"./index-8ERthB3p.js";import{l as a,i as h}from"./index-f6afcedb-CZuD5wYN.js";import{r as d,c as l,a as c}from"./component-utils-858627d8-DRqmNtSu.js";import{o as m}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const g="",u=class{constructor(t){s(this,t),this.arcgisCoordinateConversionReady=n(this,"arcgisCoordinateConversionReady",7),this._watchHandles=[],this.referenceElement=void 0,this.conversions=void 0,this.currentLocation=void 0,this.formats=void 0,this.icon=void 0,this.locationSymbol=void 0,this.mode="live",this.multipleConversions=!0,this.orientation="auto",this.storageEnabled=!0,this.storageType="session",this.visibleElementsSettingsButton=!0,this.visibleElementsEditButton=!0,this.visibleElementsExpandButton=!0,this.visibleElementsCaptureButton=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(t){d(this,t)}conversionsWatcher(t){this.widget&&(this.widget.conversions=t)}formatsWatcher(t){this.widget&&(this.widget.formats=t)}iconWatcher(t){this.widget&&(this.widget.icon=t)}locationSymbolWatcher(t){this.widget&&(this.widget.locationSymbol=t)}modeWatcher(t){this.widget&&(this.widget.mode=t)}multipleConversionsWatcher(t){this.widget&&(this.widget.multipleConversions=t)}orientationWatcher(t){this.widget&&(this.widget.orientation=t)}storageEnabledWatcher(t){t!==void 0&&this.widget&&(this.widget.storageEnabled=t)}storageTypeWatcher(t){this.widget&&(this.widget.storageType=t)}visibleElementsSettingsButtonWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,settingsButton:t})}visibleElementsEditButtonWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,editButton:t})}visibleElementsExpandButtonWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,expandButton:t})}visibleElementsCaptureButtonWatcher(t){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,captureButton:t})}positionWatcher(t){t!==void 0&&this.widget&&this.view.ui.move(this.childElem,t)}viewWatcher(t){t!==void 0&&this.widget&&(this.widget.view=t)}async reverseConvert(t,e){var i;return await((i=this.widget)==null?void 0:i.reverseConvert(t,e))}async componentDidLoad(){const t=this._createParams(),e=await a(t);this.widget=e,await this._addWatchers(),this._addContainer(),this.arcgisCoordinateConversionReady.emit(),l(this)}disconnectedCallback(){m(this)}render(){return o("div",{ref:t=>this.childElem=t})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:t,whenOnce:e}=await h();c(this,t(()=>this.widget.currentLocation,i=>this.currentLocation=i,{initial:!0})),await e(()=>this.widget.formats),this.formats=this.widget.formats}_createParams(){const t={};return t.visibleElements={settingsButton:this.visibleElementsSettingsButton,editButton:this.visibleElementsEditButton,expandButton:this.visibleElementsExpandButton,captureButton:this.visibleElementsCaptureButton},this.conversions&&(t.conversions=this.conversions),this.icon&&(t.icon=this.icon),this.formats&&(t.formats=this.formats),this.locationSymbol&&(t.locationSymbol=this.locationSymbol),this.mode&&(t.mode=this.mode),this.multipleConversions&&(t.multipleConversions=this.multipleConversions),this.orientation&&(t.orientation=this.orientation),this.storageEnabled!==void 0&&(t.storageEnabled=this.storageEnabled),this.storageType&&(t.storageType=this.storageType),this.view&&(t.view=this.view),t}get el(){return r(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],conversions:["conversionsWatcher"],formats:["formatsWatcher"],icon:["iconWatcher"],locationSymbol:["locationSymbolWatcher"],mode:["modeWatcher"],multipleConversions:["multipleConversionsWatcher"],orientation:["orientationWatcher"],storageEnabled:["storageEnabledWatcher"],storageType:["storageTypeWatcher"],visibleElementsSettingsButton:["visibleElementsSettingsButtonWatcher"],visibleElementsEditButton:["visibleElementsEditButtonWatcher"],visibleElementsExpandButton:["visibleElementsExpandButtonWatcher"],visibleElementsCaptureButton:["visibleElementsCaptureButtonWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};u.style=g;export{u as arcgis_coordinate_conversion};
