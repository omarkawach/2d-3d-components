function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/uploadAssets-CJOR7CzI.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/External-tJCk07ZV.js","assets/infoFor3D-CxOdoily.js","assets/uploadAssetErrors-BGUPPV0P.js","assets/progressUtils-DVjrhSUb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{n as D,o as F,y as I,t as P,v as L,w as J,x,U as p,q as v,z as Q,A as j,B as V,D as G,s as _,E as H,M as B,G as z,J as K,V as k,_ as W,K as X,N as Y,O as Z,P as U,R as tt,T as et,W as st,X as at,Y as rt}from"./index-8ERthB3p.js";import{g as it,a as nt}from"./meshVertexSpaceUtils-KRc33Yrq.js";import{v as ot}from"./External-tJCk07ZV.js";import{R as T,p as C,g as ut,m as lt,h as ct,b as dt,I as pt}from"./applyEditsUtils-Bml9xaqK.js";import{o as ht}from"./clientSideDefaults-BLqxyzFA.js";import{x as yt}from"./QueryTask-tBMLzRI4.js";import{F as mt}from"./infoFor3D-CxOdoily.js";import{s as ft}from"./executeQueryJSON-xSUJ5w9D.js";import"./MeshLocalVertexSpace-C8ABjEju.js";import"./vec3-DPXcG_yS.js";import"./editingSupport-Do2EBIMO.js";import"./normalizeUtils-Cm7zySIZ.js";import"./normalizeUtilsCommon-DRIluWnF.js";import"./utils-1zmckiYC.js";import"./utils-D-bI9C7C.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./executeForIds-DtHSMBEn.js";import"./query-BtFvR4zF.js";import"./pbfQueryUtils-D79yLlDs.js";import"./pbf-C8CvrhFv.js";import"./OptimizedGeometry-DLPswkPy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryPBF-BpUcVTYB.js";import"./featureConversionUtils-BzfH5fda.js";const gt=new D({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),wt=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),qt=new D({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let O=class extends P{constructor(){super(...arguments),this.type="feature-layer",this.refresh=L(async()=>{var s,a;await this.load();const e=(s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==((a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate);return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,s=this._fetchService(t,{...e}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e)).then(()=>this._ensureLatestMetadata(e));return this.addResolvingPromise(s),Promise.resolve(this)}get queryTask(){var d;const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=J("featurelayer-pbf")&&(e==null?void 0:e.query.supportsFormatPBF)&&a==null,u=((d=e==null?void 0:e.operations)==null?void 0:d.supportsQueryAttachments)??!1;return new yt({url:t.path,pbfSupported:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:s}=this;await x(s,"editing");const a=e.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,n.query);try{const o=await p(r,{body:i});return T(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(a,o)}}async updateAttachment(e,t,s){await this.load();const{layer:a}=this;await x(a,"editing");const r=e.attributes[a.objectIdField],n=a.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,i.query);try{const u=await p(n,{body:o});return T(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(e,t){var y,S,b,N,$,M;await this.load();const{layer:s}=this;await x(s,"editing");const a=s.infoFor3D,r=a!=null,n=r||((t==null?void 0:t.globalIdUsed)??!1),i=r?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,o=((y=e.addFeatures)==null?void 0:y.map(m=>C(this.layer,m,a)))??[],u=(await Promise.all(o)).filter(v),d=((S=e.updateFeatures)==null?void 0:S.map(m=>C(this.layer,m,a)))??[],c=(await Promise.all(d)).filter(v),g=ut(this.layer,e.deleteFeatures,n);Q(u,c,s.spatialReference);const f=await lt(this.layer,e),R=s.capabilities.editing.supportsAsyncApplyEdits&&r,w=(t==null?void 0:t.gdbVersion)||s.gdbVersion,l={gdbVersion:w,rollbackOnFailure:t==null?void 0:t.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:t==null?void 0:t.returnEditMoment,usePreviousEditMoment:t==null?void 0:t.usePreviousEditMoment,async:R};await j(this.layer.url,w,!0);const A=V(this.layer.url,w||null);if(await G(s.url,w,s.historicMoment))throw new _("feature-layer-source:historic-version","Editing a historic version is not allowed");t!=null&&t.returnServiceEditsOption?(l.edits=JSON.stringify([{id:s.layerId,adds:u,updates:c,deletes:g,attachments:f,assetMaps:i}]),l.returnServiceEditsOption=gt.toJSON(t==null?void 0:t.returnServiceEditsOption),l.returnServiceEditsInSourceSR=t==null?void 0:t.returnServiceEditsInSourceSR):(l.adds=u.length?JSON.stringify(u):null,l.updates=c.length?JSON.stringify(c):null,l.deletes=g.length?n?JSON.stringify(g):g.join(","):null,l.attachments=f&&JSON.stringify(f),l.assetMaps=i!=null?JSON.stringify(i):void 0);const h=this._getLayerRequestOptions({method:"post",query:l});A&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=H);const q=t!=null&&t.returnServiceEditsOption?s.url:s.parsedUrl.path;let E;try{E=R?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}catch(m){if(!ct(m))throw m;h.authMode="immediate",E=R?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}if(!((b=s.capabilities.operations)!=null&&b.supportsEditing)&&(($=(N=s.effectiveCapabilities)==null?void 0:N.operations)!=null&&$.supportsEditing)){const m=(M=rt)==null?void 0:M.findCredential(s.url);await(m==null?void 0:m.refreshToken())}return this._createEditsResult(E)}async deleteAttachments(e,t){await this.load();const{layer:s}=this;await x(s,"editing");const a=e.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await p(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(T)}catch(n){throw this._createAttachmentErrorResult(a,n)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const s=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:n}=await p(`${r}/${a}`,s),{id:i,extent:o,fullExtent:u,timeExtent:d}=n,c=o||u;return{id:i,fullExtent:c&&B.fromJSON(c),timeExtent:d&&z.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){var a;await this.load();const s=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return(a=e.outStatistics)!=null&&a.length&&s.features.length&&s.features.forEach(r=>{var i;const n=r.attributes;(i=e.outStatistics)==null||i.forEach(({outStatisticFieldName:o})=>{if(o){const u=o.toLowerCase();u&&u in n&&o!==u&&(n[o]=n[u],delete n[u])}})}),s}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!K(this.layer.url))return"unavailable";const e=k(this.layer.url,"status"),t=await p(e,{query:{f:"json"}});return qt.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:s}=await W(()=>import("./uploadAssets-CJOR7CzI.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return s(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const s=(await p(e,t)).data.statusUrl;for(;;){const a=(await p(s,{query:{f:"json"},responseType:"json"})).data;switch(a.status){case"Completed":return p(a.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new _("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new _("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await X(St)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const a={};J("featurelayer-advanced-symbols")&&(a.returnAdvancedSymbols=!0),t!=null&&t.cacheBust&&(a._ts=Date.now());const{data:r}=await p(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a,signal:t==null?void 0:t.signal}));e=r}this.sourceJSON=await this._patchServiceJSON(e,t==null?void 0:t.signal);const s=e.type;if(!wt.has(s))throw new _("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(e,t){var s;if(e.type!=="Table"&&e.geometryType&&!((s=e==null?void 0:e.drawingInfo)!=null&&s.renderer)&&!e.defaultSymbol){const a=ht(e.geometryType).renderer;Y("drawingInfo.renderer",a,e)}if(e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e.extent==null)try{const{data:a}=await p(this.layer.url,this._getLayerRequestOptions({signal:t}));a.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(a){Z(a)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!(t!=null&&t.length))return null;const s=await this._filterRedundantAssetMaps(t);if(!(t!=null&&t.length))return null;const a=new Array,r=new Map;for(const n of s){const{geometry:i}=n,{vertexSpace:o}=i;if(it(o))a.push(i);else{const u=nt(i);r.set(u,i),n.geometry=u,a.push(u)}}await this.uploadAssets(a);for(const[n,i]of r)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,s=this.layer.globalIdField,a=this.layer.parsedUrl;for(const r of e){const n=r.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(a),u=r.getAttribute(s);if(o.length===0){U.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(ot)??o[0];for(const c of d)c.parts.length===1?t.push({globalId:tt(),parentGlobalId:u,assetName:c.assetName,assetHash:c.parts[0].partHash,flags:[]}):U.getLogger(this).error(`Skipping asset ${c.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(t))for(const i of t)a.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===s&&(r={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else r=t;const n=dt(r);if(a.length>0){n.editedFeatureResults=[];for(const i of a){const{editedFeatures:o}=i,u=o!=null&&o.spatialReference?new et(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:pt(o,u)})}}return n}_createAttachmentErrorResult(e,t){var r;const s=((r=t.details.messages)==null?void 0:r[0])||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new _("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const a in t){const r=t[a];r!=null&&(s.set?s.set(a,r):s.append(a,r))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:s,infoFor3D:a,parsedUrl:r}=t;if(a==null||s==null)return e;const n=mt(a);if(n==null)return e;const i=k(r.path,`../${n.id}`),o=new Array,u=new Array;for(const l of e)l.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(l):o.push(l);const d=u.map(l=>l.getAttribute(s)).filter(v);if(d.length===0)return e;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:g}}=a,f=new st;f.where=`${c} IN (${d.map(l=>`'${l}'`)})`,f.outFields=[g,c],f.returnGeometry=!1;const R=await ft(i,f),{features:w}=R;return w.length===0?e:[...o,...u.filter(l=>{const A=l.getAttribute(s);if(!A)return!0;const{metadata:h}=l.geometry,q=w.filter(y=>y.getAttribute(c)===A);if(q.length===0)return!0;const E=q.map(y=>y.getAttribute(g));return h.getExternalSourcesOnService(r).flatMap(({source:y})=>y.flatMap(S=>S.parts.map(b=>b.partHash))).some(y=>E.every(S=>y!==S))})]}};F([I()],O.prototype,"type",void 0),F([I({constructOnly:!0})],O.prototype,"layer",void 0),F([I({readOnly:!0})],O.prototype,"queryTask",null),O=F([at("esri.layers.graphics.sources.FeatureLayerSource")],O);const St=1e3,Ht=O;export{Ht as default};
