import{bO as v,a0 as c,gl as m,cr as S,ct as w,hj as b,cB as k,dG as E,bi as F,dt as $,dr as C,cN as G,cx as I,o as a,y as l,X as P,hi as A,hk as H}from"./index-8ERthB3p.js";import{t as O}from"./memoize-DsJmrG76.js";import{h as R}from"./UpdatingHandles-ugzlsvZF.js";import{a as x}from"./normalizeUtilsSync-CrK-RMPr.js";import{o as z}from"./featureConversionUtils-BzfH5fda.js";import{t as Z}from"./OptimizedFeature-CXeSoBCN.js";import{m as M}from"./FeatureStore-BZ4BTL-O.js";import{$ as L}from"./QueryEngine-BnxbU8wo.js";import{E as W}from"./elevationInfoUtils-sHEwmo9N.js";import{J as y}from"./utils-j-RBNfeR.js";import{c as j,y as N}from"./angularMeasurementUtils-CATp35qy.js";import{a as q,o as J}from"./queryEngineUtils-CFWg6M0r.js";import{i as g,r as T,n as _}from"./symbologySnappingCandidates-BKKcwF4Y.js";import{I as U}from"./Scheduler-DaHJO6l7.js";import"./normalizeUtilsCommon-DRIluWnF.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./BoundsStore-CvIYB3Tm.js";import"./PooledRBush-CjYPNqwP.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./timeSupport-BFvqZpey.js";import"./normalizeUtils-Cm7zySIZ.js";import"./utils-1zmckiYC.js";import"./utils-D-bI9C7C.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DY8fepQr.js";import"./centroid-DdLmOD72.js";import"./WhereClause-CDY1MzWK.js";import"./TimeOnly-CdukLkzZ.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-RSnx-Q9D.js";import"./utils-B6UP7_Wm.js";import"./utils-8IYHD2E1.js";import"./ClassBreaksDefinition-CNLSnW5r.js";import"./SnappingCandidate-O5eRSE6e.js";import"./cimSymbolUtils-DwzauUMk.js";import"./vec2-Dt9Foiri.js";import"./vec2f64-Diu2Kaa8.js";import"./geodesicUtils-D1kRRrco.js";import"./plane-Du3EYICn.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-BrpT0VRp.js";import"./mathUtils-iSLnUy_4.js";import"./sphere-Bf4ezJdT.js";import"./ObjectStack-BPo9QGhV.js";import"./geometry2dUtils-DoOkpuKA.js";import"./projectVectorToVector-C3SBBDgz.js";import"./projectPointToVector-qKp-AJ2b.js";import"./screenUtils-BuM_Fswi.js";import"./signal-DoM1gSF0.js";import"./Cyclical-BY9qISY1.js";import"./quantityUtils-9zDVxeky.js";import"./SnappingManager-DUlqpdAB.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./layerViewUtils-Bi2wmOiN.js";import"./viewUtils-DC86MEAQ.js";import"./geometryEngine-MBwx6Ib1.js";import"./geometryEngineBase-Cz__5BKm.js";import"./hydrated-7yclY7Co.js";import"./projectVectorToWGS84ComparableLonLat-DuPw0-Mv.js";import"./geodesicMeasurementUtils-BcTpN3Xi.js";import"./VertexSnappingCandidate-C6L9NQCx.js";import"./PointSnappingHint-DFYGb6IS.js";import"./debugFlags-BbJIqrPU.js";import"./RenderState-DaVlEYWY.js";const f="graphics-collections";let n=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const t=this.view;return t!=null&&t.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,i=t!=null&&t.type==="3d";if(!i||e.type==="map-notes")return g();const o=async(r,s)=>(await A(t.whenLayerView(e),s)).elevationAlignPointsInFeatures(r,s);return g(i,{elevationInfo:e.elevationInfo,alignPointsInFeatures:o})}get _snappingElevationFilter(){const{view:t}=this,e=t!=null&&t.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource,i=t!=null&&t.type==="3d",o=this._extrudedPolygonSymbolsCount>0;return i&&e.type!=="map-notes"&&o?_(o,async(r,s)=>{const p=await t.whenLayerView(e);return c(s),p.queryForSymbologySnapping({candidates:r,spatialReference:t.spatialReference},s)}):_()}constructor(t){super(t),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new R,this._memoizedMakeGetGroundElevation=O(J)}destroy(){for(const t of this._pendingAdds)t.task.abort();this._pendingAdds.length=0,this._mapSources(t=>this._destroySource(t)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const o of i)this._addMany(o.graphics.toArray()),this.addHandles([o.on("graphic-update",r=>this._onGraphicUpdate(r)),this._updatingHandles.addOnCollectionChange(()=>o.graphics,r=>this._onGraphicsChanged(r))],f)},m);const{view:t}=this,{layer:e}=this.layerSource;t!=null&&t.type==="3d"&&e.type!=="map-notes"&&t.elevationProvider&&this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{W(i,e.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),S(()=>e.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),m),w(()=>e,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(t,e){const{point:i,coordinateHelper:{spatialReference:o}}=t,r=await b(this._mapSources(d=>this._fetchCandidatesForSource(d,t,e)));c(e);const s=this._memoizedMakeGetGroundElevation(this.view,o),p=r.flat().map(d=>q(d,s));return j(i,p),p}async _fetchCandidatesForSource(t,e,i){var u;const o=N(e,((u=this.view)==null?void 0:u.type)??"2d"),r=await t.queryEngine.executeQueryForSnapping(o,i);c(i);const s=await this._snappingElevationAligner.alignCandidates(r.candidates,e.coordinateHelper.spatialReference,i);c(i);const p=await this._symbologySnappingFetcher.fetch(s,i);c(i);const d=p.length===0?s:[...s,...p];return this._snappingElevationFilter.filter(o,d)}refresh(){}_onGraphicUpdate(t){if(this.getGraphicsLayers().some(e=>e.graphics.includes(t.graphic)))switch(t.property){case"geometry":case"visible":this._remove(t.graphic),this._addMany([t.graphic])}}_onGraphicsChanged(t){for(const e of t.removed)this._remove(e);this._addMany(t.added)}_addMany(t){const e=[],i=new Map;for(const o of t)o.geometry!=null&&(this._needsInitializeProjection(o.geometry.spatialReference)?(e.push(o.geometry.spatialReference),i.set(o.uid,o)):this._add(o));this._createPendingAdd(e,i)}_createPendingAdd(t,e){if(!t.length)return;const i=k(async s=>{await E(t.map(p=>({source:p,dest:this.spatialReference})),{signal:s}),this._markLoadedSpatialReferences(t);for(const[,p]of e)this._add(p)});this._updatingHandles.addPromise(i.promise);const o={task:i,graphics:e},r=()=>H(this._pendingAdds,o);i.promise.then(r,r),this._pendingAdds.push(o)}_markLoadedSpatialReferences(t){for(const e of t){e.wkid!=null&&this._loadedWkids.add(e.wkid);const i=e.wkt2||e.wkt;i&&this._loadedWkts.add(i)}}_add(t){if(t.geometry==null||!t.visible)return;let e=t.geometry;if(e.type==="mesh")return;e.type==="extent"&&(e=F.fromExtent(e));const i=this._ensureSource(e.type);if(i==null)return;const o=this._createOptimizedFeature(t.uid,e);o!=null&&(i.featureStore.add(o),y(t.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(t){if(t.wkid!=null&&this._loadedWkids.has(t.wkid))return!1;const e=t.wkt2||t.wkt;return(!e||!this._loadedWkts.has(e))&&!$(t,this.spatialReference)}_createOptimizedFeature(t,e){const i=C(x(e),this.spatialReference);if(!i)return null;const o=this._ensureGeometryHasZ(i),r=z(o,this._hasZ,!1);return new Z(r,{[h]:t},null,t)}_ensureGeometryHasZ(t){if(!this._hasZ)return t;const e=o=>{for(;o.length<3;)o.push(0)},i=t.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(e);break;case"polyline":i.paths.forEach(o=>o.forEach(e));break;case"polygon":i.rings.forEach(o=>o.forEach(e))}return i}_ensureSource(t){const e=this._sources[t];if(e!=null)return e;const i=this._createSource(t);return this._sources[t]=i,i}_createSource(t){const e=G.toJSON(t),i=this._hasZ,o=new M({geometryType:e,hasZ:i,hasM:!1});return{featureStore:o,queryEngine:new L({featureStore:o,fieldsIndex:I.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:e,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:U.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:t}}_remove(t){this._mapSources(e=>this._removeFromSource(e,t));for(const e of this._pendingAdds)e.graphics.delete(t.uid),e.graphics.size===0&&e.task.abort()}_removeFromSource(t,e){const i=e.uid;t.featureStore.has(i)&&(t.featureStore.removeById(e.uid),y(e.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(t){t.queryEngine.destroy(),this._sources[t.type]=null}_mapSources(t){const{point:e,polygon:i,polyline:o,multipoint:r}=this._sources,s=[];return e!=null&&s.push(t(e)),i!=null&&s.push(t(i)),o!=null&&s.push(t(o)),r!=null&&s.push(t(r)),s}};a([l()],n.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],n.prototype,"layerSource",void 0),a([l({constructOnly:!0})],n.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],n.prototype,"view",void 0),a([l({readOnly:!0})],n.prototype,"updating",null),a([l({readOnly:!0})],n.prototype,"availability",void 0),a([l()],n.prototype,"_hasZ",null),a([l()],n.prototype,"_snappingElevationAligner",null),a([l()],n.prototype,"_snappingElevationFilter",null),a([l()],n.prototype,"_symbologySnappingFetcher",null),a([l()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),n=a([P("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const h="OBJECTID";export{n as GraphicsSnappingSource};