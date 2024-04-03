import{ak as n,aQ as l,aS as o,cr as p,ej as y,eK as d,o as s,y as i,X as u,aY as h}from"./index-8ERthB3p.js";import{v as r}from"./LineOfSightAnalysis-CWozDaRo.js";import{f as g,u as m}from"./LineOfSightAnalysisTarget-CsA1UFD4.js";import"./Analysis-BVF2oUso.js";import"./elevationInfoUtils-sHEwmo9N.js";import"./persistable-DTlPUvTn.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-5aSW4bDb.js";const c=n.ofType(g);let t=class extends l(o(h)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new r,this.opacity=1}initialize(){this.addHandles(p(()=>this.analysis,(e,a)=>{a!=null&&a.parent===this&&(a.parent=null),e!=null&&(e.parent=this)},y))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return(e=this.analysis)==null?void 0:e.observer}set observer(e){const{analysis:a}=this;a&&(a.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new n}set targets(e){var a;d(e,(a=this.analysis)==null?void 0:a.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new r)}};s([i({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],t.prototype,"operationalLayerType",void 0),s([i({type:m,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],t.prototype,"observer",null),s([i({type:c,json:{read:!0,write:{ignoreOrigin:!0}}})],t.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"analysis",void 0),s([i({readOnly:!0})],t.prototype,"fullExtent",null),s([i({readOnly:!0})],t.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),s([i({type:["show","hide"]})],t.prototype,"listMode",void 0),t=s([u("esri.layers.LineOfSightLayer")],t);const x=t;export{x as default};