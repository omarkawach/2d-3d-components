function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngine-MBwx6Ib1.js","assets/geometryEngineBase-Cz__5BKm.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-7yclY7Co.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{ac as V,ld as z,le as G,dU as L,gM as B,o as p,X as $,y,cr as H,gl as K,bO as P,v as Q,P as O,gN as J,gP as X,dr as Y,q as W,dt as Z,f$ as T,O as D,_ as ee,jb as R,dp as te,dq as re,fY as ne}from"./index-8ERthB3p.js";import{a as ie,n as oe,b as se}from"./TemporalSceneLayerView-DbfVwYek.js";import{u as le}from"./LayerView-DO6TerBv.js";const ae={setAttribute(){},rollback(){},commit(){}};var E;function Fe(e,r){const t=r.attributes[e.objectIdField];if(t==null)return ae;const o=e.sessions.get(t);if(o)return o;const a=V(r.attributes),l=new Set,d=e.i3sOverrides.createInteractiveEditSession(t),u=new Map,n=(c,f)=>{const g=u.get(c);if(g==null){const h=f.indexOf(t);return u.set(c,h),h}return g};let s=E.EDITING;const i={setAttribute(c,f){if(s!==E.EDITING)return;const g=e.fieldsIndex.get(c);if(!g)return;const h=e.attributeStorageInfo.findIndex(F=>F.name===g.name);if(h<0)return;if(!(c in a))throw new Error(`Attribute "${c}" is not an attribute of the edited feature.`);d.setAttribute(h,f);const I=e.attributeStorageInfo[h];let b=!1;l.add(c),e.forEachNode((F,x)=>{const _=n(F,x);if(_===-1)return;const v=e.getAttributeData(F.index);if(v){const A=v[I.name];A&&(A[_]=f,e.setAttributeData(F.index,v,r),b=!0)}}),b&&e.clearMemCache()},rollback(){if(s===E.EDITING){for(const c of l)this.setAttribute(c,a[c]);d.remove(),s=E.ROLLED_BACK,e.sessions.delete(t)}},commit(){s===E.EDITING&&(d.remove(),s=E.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,i),i}function de(e,r,t){const{gidToFeatureInfo:o,oidToFeatureInfo:a,fieldsIndex:l,objectIdField:d,globalIdField:u,featureOrIdentifierList:n}=t;if(!t.featuresResolved&&n!=null){for(const s of n){const i={feature:null,oid:-1,gid:null};if("attributes"in s){i.feature=s;const c=s.attributes;if(c!=null)for(const f in c){if(i.oid!==-1&&i.gid!=null)break;const g=l.normalizeFieldName(f);g===d&&(i.oid=c[f]??-1),g===u&&(i.gid=c[f])}}else i.oid=s.objectId??-1,i.gid=s.globalId;i.gid!=null&&o.set(i.gid,i),i.oid!==-1&&a.set(i.oid,i)}t.featuresResolved=!0}return(e!==-1?a.get(e):null)??(r!=null?o.get(r):null)}function N(e,r,t,o,a=null,l=!0){const d=[],u={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:t==null,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:t};for(const n of r){if(n.error!=null)continue;const s=n.objectId??-1,i=n.globalId,c=(s===-1||l?de(s,i,u):null)??{feature:null,oid:s,gid:i},f={oid:s===-1?c.oid:s,gid:i??c.gid,feature:c.feature,result:n};if(d.push(f),f.oid===-1&&f.gid!=null&&a!=null&&(f.oid=a.get(f.gid)??-1),f.oid===-1&&f.gid!=null){let g=o.get(f.gid);g==null&&(g=[],o.set(f.gid,g)),g.push(f)}}return d}async function Ie(e,r){var d,u,n;const t=new Map,o=N(e,r.addedFeatures,(d=r.edits)==null?void 0:d.addFeatures,t),a=N(e,r.updatedFeatures,(u=r.edits)==null?void 0:u.updateFeatures,t),l=N(e,r.deletedFeatures,(n=r.edits)==null?void 0:n.deleteFeatures,t,r.globalIdToObjectId,!1);return t.size>0&&await ue(e,t),{adds:o.filter(s=>s.oid!==-1),updates:a.filter(s=>s.oid!==-1),deletes:l.filter(s=>s.oid!==-1)}}async function ue(e,r){const t=e.i3sOverrides.layer.associatedLayer;if((t==null?void 0:t.globalIdField)==null)return;const o=t.createQuery(),{objectIdField:a,globalIdField:l}=t;o.where=Array.from(r.keys()).map(n=>`${l}='${n}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,l],o.cacheHint=!1;const d=await z(G(t,o));if(!d.ok)return;const u=d.value.features;for(const n of u){const s=n.attributes[l],i=n.attributes[a];if(s==null||i==null||i===-1)continue;const c=r.get(s);if(c!=null)for(const f of c)f.oid=i}}function we(e,r){var d,u;const t=new Map,o=r.adds,a=r.updates,l=r.deletes;if(o.length>0)for(const n of o){const s=n.oid,i=n.feature;((d=i==null?void 0:i.geometry)==null?void 0:d.type)==="mesh"&&t.set(s,i.geometry)}if(a.length>0)for(const n of a){const s=n.oid,i=n.feature;((u=i==null?void 0:i.geometry)==null?void 0:u.type)==="mesh"&&t.set(s,i.geometry)}if(l.length>0)for(const n of l)t.set(n.oid,null);for(const[n,s]of t)e.i3sOverrides.updateGeometry(n,s)}function Ee(e,r){var f;const t=fe(e,r),o=ce(e,r);if(t.size===0&&o.size===0)return;const a=new Map;for(let g=0;g<e.attributeStorageInfo.length;g++)a.set(e.attributeStorageInfo[g].name,g);let l=!1;t.forEach((g,h)=>{const I=e.getAttributeData(h);let b=!1;g.forEach((F,x)=>{const _=I!=null?I[x]:null,v=a.get(x);for(const{featureIndex:A,value:M,featureId:k}of F)_&&(_[A]=M,b=!0,l=!0),e.i3sOverrides.updateAttributeValue(k,v,M)}),b&&e.setAttributeData(h,I,null)}),l&&e.clearMemCache();const{fieldsIndex:d,i3sOverrides:u,objectIdField:n,globalIdField:s}=e,i=(f=u.layer.associatedLayer)==null?void 0:f.infoFor3D,c=new Set(i?[...Object.values(i.assetMapFieldRoles),...Object.values(i.transformFieldRoles)]:[]);for(const[g,h]of o){u.featureAdded(g);const{attributes:I}=h;for(const b in I){if(b!==n&&b!==s&&c.has(b))continue;const F=d.normalizeFieldName(b),x=F!=null?a.get(F):null;if(x==null)continue;const _=I[b];u.updateAttributeValue(g,x,_)}}}function ce(e,r){var a;const t=new Map,o=r.adds;if(!o||o.length===0||e.globalIdField==null)return t;for(const l of o){const d=l.oid,u=l.feature;((a=u==null?void 0:u.geometry)==null?void 0:a.type)==="mesh"&&t.set(d,u)}return t}function fe(e,r){const t=r.updates;if(!t||t.length===0)return new S;const o=new S,a=new Map;for(let l=0;l<e.attributeStorageInfo.length;l++)a.set(e.attributeStorageInfo[l].name,l);return e.forEachNode((l,d)=>{for(const u of t){if(u.feature==null)continue;const n=u.feature,s=u.oid,i=d.indexOf(s);for(const c in n.attributes){const f=e.fieldsIndex.normalizeFieldName(c),g=ge(o,l.index,f),h=n.attributes[c];g.push({featureIndex:i,featureId:s,value:h})}}}),o}function ge(e,r,t){const o=pe(e,r),a=t!=null&&o.get(t);if(a)return a;const l=new Array;return o.set(t,l),l}function pe(e,r){const t=e.get(r);if(t)return t;const o=new ye;return e.set(r,o),o}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(E||(E={}));const ye=Map,S=Map;function xe(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:r},requiredFields:t}=this;return e.outFields?L(r,[...B(r,e.outFields),...t]):L(r,t)}}}}const U=e=>{let r=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(t,o){const a=Q(async l=>{++this._numUpdating;try{const d=await l;this.destroyed||this._set(t,d)}catch{O.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating});return H(o,a,K)}};return p([y({readOnly:!0})],r.prototype,"updating",null),p([y()],r.prototype,"_numUpdating",void 0),r=p([$("esri.core.AsyncUpdate")],r),r};let q=class extends U(P){};q=p([$("esri.core.AsyncUpdate")],q);const C="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let w=class extends U(P){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:t,labelingFields:o,viewFilterFields:a}=this;return L(e,[...r??[],...t??[],...o??[],...a??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?j(t=>r.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?j(r=>J(r,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,mergedFilter:r}=this.layerView;return j(t=>X(t,e,r))})])}};async function j(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(t){return O.getLogger(C).error(t),null}}p([y()],w.prototype,"layerView",void 0),p([y()],w.prototype,"layer",null),p([y()],w.prototype,"requiredFields",null),p([y()],w.prototype,"rendererFields",void 0),p([y()],w.prototype,"labelingFields",void 0),p([y()],w.prototype,"viewFilterFields",void 0),w=p([$(C)],w);let m=class extends le{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return ie(this._layerFilter)}get _layerFilter(){var u;const e=(u=this.layer)==null?void 0:u.filter;if(e==null||e.geometries.length<1)return null;const r=this._geometryEngine;if(r==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return oe;const t=e.geometries.at(0).spatialReference,o=e.geometries.toArray().map(n=>{try{n=r.simplify(n)}catch{return O.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(n==null)return null;if(n.spatialReference.equals(t))return n;try{return Y(n,t)}catch{return O.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(W).sort((n,s)=>n.extent.xmin-s.extent.xmin),a=new Set,l=new Array,d=new Array;for(let n of o){const s=n.extent.xmin;if(l.length=0,a.forEach(i=>{if(s>=i.extent.xmax)return d.push(i),void a.delete(i);n.extent.ymin<=i.extent.ymax&&n.extent.ymax>=i.extent.ymin&&r.intersects(n,i)&&l.push(i)}),l.length>0){l.push(n);try{n=r.union(l)}catch{O.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}l.pop(),l.forEach(i=>a.delete(i))}a.add(n)}return a.forEach(n=>d.push(n)),d.length>0?{spatialRelationship:e.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const r=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(r)&&!Z(t,r))}get layerFilterUpdating(){return se(this._layerFilter)}initialize(){const{signal:e}=this._abortController;T(()=>{var r,t,o;return this.destroyed||!this._geometryEngine&&((o=(t=(r=this.layer)==null?void 0:r.filter)==null?void 0:t.geometries)==null?void 0:o.length)},e).then(async()=>{D(e),this._geometryEngine=await ee(()=>import("./geometryEngine-MBwx6Ib1.js"),__vite__mapDeps([0,1,2,3,4,5]))}).catch(R),this._projectionEngineLoaded=te(),T(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{D(e),await re(),this._projectionEngineLoaded=!0}).catch(R)}destroy(){this._abortController=ne(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}};p([y()],m.prototype,"layer",void 0),p([y()],m.prototype,"availableFields",null),p([y()],m.prototype,"maximumNumberOfFeatures",null),p([y({readOnly:!0})],m.prototype,"maximumNumberOfFeaturesExceeded",null),p([y()],m.prototype,"filter",void 0),p([y({readOnly:!0})],m.prototype,"layerFilter",null),p([y({readOnly:!0})],m.prototype,"_layerFilter",null),p([y()],m.prototype,"_geometryEngine",void 0),p([y()],m.prototype,"_projectionEngineLoaded",void 0),p([y()],m.prototype,"_filterNeedsProjectionEngine",null),p([y()],m.prototype,"layerFilterUpdating",null),m=p([$("esri.views.layers.SceneLayerView")],m);const ve=m;export{xe as a,w as c,we as d,Ee as f,Fe as i,Ie as u,ve as w};
