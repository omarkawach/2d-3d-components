import{ak as d,o as s,y as r,eL as f,X as v,cr as m,ej as x,eK as b,eM as $,eN as z,eO as E,eP as _}from"./index-8ERthB3p.js";import{c as O}from"./Analysis-BVF2oUso.js";import{f as w,u as P}from"./LineOfSightAnalysisTarget-CsA1UFD4.js";import{i as R}from"./elevationInfoUtils-sHEwmo9N.js";const a=d.ofType(w);let t=class extends O{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(m(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},x))}get targets(){return this._get("targets")||new a}set targets(e){this._set("targets",b(e,this.targets,a))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var g;const e=this.spatialReference;if(((g=this.observer)==null?void 0:g.position)==null||e==null)return null;const p=i=>R(i.position,i.elevationInfo)==="absolute-height",n=this.observer.position,u=$(n.x,n.y,n.z,n.x,n.y,n.z);for(const i of this.targets)if(i.position!=null){const o=z(i.position,e);if(o.pending!=null)return{pending:o.pending,extent:null};if(o.geometry!=null){const{x:h,y,z:c}=o.geometry;E(u,[h,y,c])}}const l=_(u,e);return p(this.observer)&&this.targets.every(p)||(l.zmin=void 0,l.zmax=void 0),{pending:null,extent:l}}clear(){this.observer=null,this.targets.removeAll()}};s([r({type:["line-of-sight"]})],t.prototype,"type",void 0),s([r({type:P,json:{read:!0,write:!0}})],t.prototype,"observer",void 0),s([r({cast:f,type:a,nonNullable:!0,json:{read:!0,write:!0}})],t.prototype,"targets",null),s([r({value:null,readOnly:!0})],t.prototype,"extent",void 0),s([r({readOnly:!0})],t.prototype,"spatialReference",null),s([r({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",null),t=s([v("esri.analysis.LineOfSightAnalysis")],t);const K=t;export{K as v};
