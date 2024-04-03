import{dA as X,dl as J,bW as m,di as U,fc as I,dj as w,dk as P,cj as T,bQ as S,bX as H,co as z,fu as x,bR as W}from"./index-8ERthB3p.js";import{e as k,o as C}from"./mat4f64-Dk4dwAN8.js";import{d as u,l as Q,k as b}from"./sphere-Bf4ezJdT.js";import{l as M}from"./ViewingMode-Dodu7ZZk.js";import{u as Y}from"./boundedPlane-CLJ-Xnn_.js";import{v as q,d as B}from"./verticalOffsetUtils-BYv4Nk2v.js";var l,O;(function(r){r[r.OBJECT=0]="OBJECT",r[r.HUD=1]="HUD",r[r.TERRAIN=2]="TERRAIN",r[r.OVERLAY=3]="OVERLAY",r[r.I3S=4]="I3S",r[r.PCL=5]="PCL",r[r.LOD=6]="LOD",r[r.VOXEL=7]="VOXEL",r[r.TILES3D=8]="TILES3D"})(l||(l={}));let F=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=O.ALL}};(function(r){r[r.MIN=0]="MIN",r[r.MINMAX=1]="MINMAX",r[r.ALL=2]="ALL"})(O||(O={}));let K=class{constructor(t,s,e){this.object=t,this.geometryId=s,this.triangleNr=e}},Z=class extends K{constructor(t,s,e,a){super(t,s,e),this.center=a!=null?X(a):null}};class tt{constructor(t){this.layerUid=t}}let yt=class extends tt{constructor(t,s){super(t),this.graphicUid=s}};function $(r){return(r==null?void 0:r.dist)!=null}function pt(r){return(t,s,e)=>(J(N,t,s,e),!Y(r,N))}function gt(r){return $(r)&&r.intersector===l.OBJECT&&!!r.target}function Ot(r){return $(r)&&r.intersector===l.HUD&&!!r.target&&"center"in r.target&&r.target.center!=null}const N=m(),j=1e-5;class rt{constructor(t){this.options=new F,this._results=new st,this.transform=new q,this.tolerance=j,this.verticalOffset=null,this._ray=u(),this._rayEnd=m(),this._rayBeginTransformed=m(),this._rayEndTransformed=m(),this.viewingMode=t??M.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,s,e){this.resetWithRay(Q(t,s,this._ray),e)}resetWithRay(t,s){this.camera=s,t!==this._ray&&b(t,this._ray),this.options.verticalOffset!==0?this.viewingMode===M.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,U(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(t=null,s,e,a,o){var c;this.point=s,this.filterPredicate=a,this.tolerance=e??j;const f=B(this.verticalOffset);if(t&&t.length>0){const y=o?i=>{o(i)&&this.intersectObject(i)}:i=>{this.intersectObject(i)};for(const i of t){const d=(c=i.getSpatialQueryAccelerator)==null?void 0:c.call(i);d!=null?(f!=null?d.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,y,f):d.forEachAlongRay(this._ray.origin,this._ray.direction,y),this.options.selectionMode&&this.options.hud&&d.forEachDegenerateObject(y)):i.objects.forAll(L=>y(L))}}this.sortResults()}intersectObject(t){const s=t.geometries;if(!s)return;const e=t.effectiveTransformation,a=B(this.verticalOffset);for(const o of s){if(!o.visible)continue;const{material:f,id:c}=o;this.transform.setAndInvalidateLazyTransforms(e,o.transformation),I(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),I(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const y=this.transform.transform;a!=null&&(a.objectTransform=this.transform),f.intersect(o,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(i,d,L,v,_,G)=>{if(i>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,i))return;const n=v?this._results.hud:this._results,E=v?h=>{const V=new Z(t,c,L,G);h.set(l.HUD,V,i,d,C,_)}:h=>h.set(l.OBJECT,{object:t,geometryId:c,triangleNr:L},i,d,y,_);if((n.min.drapedLayerOrder==null||_>=n.min.drapedLayerOrder)&&(n.min.dist==null||i<n.min.dist)&&E(n.min),this.options.store!==O.MIN&&(n.max.drapedLayerOrder==null||_<n.max.drapedLayerOrder)&&(n.max.dist==null||i>n.max.dist)&&E(n.max),this.options.store===O.ALL)if(v){const h=new R(this._ray);E(h),this._results.hud.all.push(h)}else{const h=new p(this._ray);E(h),this._results.all.push(h)}}})}}sortResults(t=this._results.all){t.sort((s,e)=>s.dist!==e.dist?(s.dist??0)-(e.dist??0):s.drapedLayerOrder!==e.drapedLayerOrder?D(s.drapedLayerOrder,e.drapedLayerOrder):D(s.drapedLayerGraphicOrder,e.drapedLayerGraphicOrder))}}function D(r,t){return(t??-Number.MAX_VALUE)-(r??-Number.MAX_VALUE)}function Lt(r){return new rt(r)}class st{constructor(){this.min=new p(u()),this.max=new p(u()),this.hud={min:new R(u()),max:new R(u()),all:new Array},this.ground=new p(u()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}class p{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(w(A,this.ray.direction,this.dist),P(A)):null}getIntersectionPoint(t){return!!$(this)&&(w(A,this.ray.direction,this.dist),U(t,this.ray.origin,A),!0)}getTransformedNormal(t){return T(g,this.normal),g[3]=0,S(g,g,this.transformation),T(t,g),H(t,t)}constructor(t){this.intersector=l.OBJECT,this.normal=m(),this.transformation=k(),this._ray=u(),this.init(t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=l.OBJECT,b(t,this._ray)}set(t,s,e,a,o,f,c){this.intersector=t,this.dist=e,T(this.normal,a??z),x(this.transformation,o??C),this.target=s,this.drapedLayerOrder=f,this.drapedLayerGraphicOrder=c}copy(t){b(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,T(this.normal,t.normal),x(this.transformation,t.transformation)}}class R extends p{constructor(){super(...arguments),this.intersector=l.HUD}}function _t(r){return new p(r)}const A=m(),g=W();function et(r){return r.type==="point"}class Et{constructor(t,s=null,e=0){this.array=t,this.spatialReference=s,this.offset=e}}function it(r){return"array"in r}function Tt(r,t,s="ground"){if(et(t))return r.getElevation(t.x,t.y,t.z||0,t.spatialReference,s);if(it(t)){let e=t.offset;return r.getElevation(t.array[e++],t.array[e++],t.array[e]||0,t.spatialReference??r.spatialReference,s)}return r.getElevation(t[0],t[1],t[2]||0,r.spatialReference,s)}export{j as E,_t as G,Lt as T,$ as a,et as b,Tt as c,Ot as d,tt as e,it as f,pt as g,l as i,yt as o,Et as r,gt as s,O as t};