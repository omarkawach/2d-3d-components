import{o as n,y as p,e2 as E,T as S,aV as y,M as g,aW as T,aX as L,ei as O,X as K,v as j,i0 as U,p as $,i1 as P,i2 as V,P as w,i3 as C,I as M,s as u,U as x,S as q,Q as z}from"./index-8ERthB3p.js";import{i as b}from"./originUtils-D69mHv66.js";import{r as J}from"./I3SIndexInfo-CWyEOqXW.js";import{o as N}from"./jsonContext-DAHq4PYe.js";import{p as k,n as F}from"./resourceUtils-Bkr2NG-A.js";import{i as R}from"./saveAPIKeyUtils-BEX39E-1.js";import{t as B}from"./saveUtils-cWMLp1XS.js";let D=null;function X(){return D}const te=c=>{let s=class extends c{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=j(async(e,t,i)=>{switch(e){case v.SAVE:return this._save(t);case v.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return S.fromJSON(e.spatialReference);const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new S(r):null}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const a=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return g.fromJSON(a,i)}const r=t.store,o=this._readSpatialReference(t);return o==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(a=>a<I)?null:new g({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var o;const i=(o=this.portalItem)==null?void 0:o.title;if(this.sublayerTitleMode==="item-title")return U(this.url,t.name);let r=t.name;if(!r&&this.url){const a=$(this.url);a!=null&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),P(r)}set url(e){const t=V({layer:this,url:e,nonStandardUrlAllowed:!1,logger:w.getLogger(this)});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){C(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=M(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=J(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,w.getLogger(this),t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,o;if((e==null?void 0:e.type)==="page"){const a=e.rootIndex%e.pageSize,l=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[a];if(((r=l==null?void 0:l.obb)==null?void 0:r.center)==null||l.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<I||this.fullExtent==null||this.fullExtent.hasZ)return;const d=l.obb.halfSize,h=l.obb.center[2],f=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.fullExtent.zmin=h-f,this.fullExtent.zmax=h+f}else if((e==null?void 0:e.type)==="node"){const a=(o=e.rootNode)==null?void 0:o.mbs;if(!Array.isArray(a)||a.length!==4||a[0]<I)return;const l=a[2],d=a[3],{fullExtent:h}=this;h&&(h.zmin=l-d,h.zmax=l+d)}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await x(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var o;const t=await x(((o=this.parsedUrl)==null?void 0:o.path)??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await x(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const o of r)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((o,a,l)=>l.indexOf(o)===a),i===m.newItem&&(e.typeKeywords=e.typeKeywords.filter(o=>o!=="Hosted Service")))}async _saveAs(e,t){var d;const i={...A,...t};let r=q.from(e);if(!r)throw new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");R(r),r.id&&(r=r.clone(),r.id=null);const o=r.portal||z.getDefault();await this._ensureLoadBeforeSave(),r.type=_,r.portal=o;const a=N(r,"portal-item",!0),l={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(l,a,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,m.newItem),await o.signIn(),await((d=o.user)==null?void 0:d.addItem({item:r,folder:i==null?void 0:i.folder,data:l})),await k(this.resourceReferences,a),this.portalItem=r,b(a),a.portalItem=r,r}async _save(e){const t={...A,...e};if(!this.portalItem)throw new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(R(this.portalItem),this.portalItem.type!==_)throw new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`);await this._ensureLoadBeforeSave();const i=N(this.portalItem,"portal-item",!0),r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,m.existingItem),await F(this.portalItem,r,this.resourceReferences,i),b(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const r=i==null?void 0:i.validationOptions;B(t,{errorName:"sceneservice:save"},{ignoreUnsupported:r==null?void 0:r.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const o=r==null?void 0:r.enabled,a=X();if(o&&a){const l=(await a()).validate(e,i.portalItemLayerType);if(!l.length)return;const d=`Layer item did not validate:
${l.join(`
`)}`;if(w.getLogger(this).error(`_validateAgainstJSONSchema(): ${d}`),r.failPolicy==="throw"){const h=l.map(f=>new u("sceneservice:schema-validation",f));throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:h})}}}};return n([p(E)],s.prototype,"id",void 0),n([p({type:S})],s.prototype,"spatialReference",void 0),n([y("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),n([p({type:g})],s.prototype,"fullExtent",void 0),n([y("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),n([p({readOnly:!0,type:T})],s.prototype,"heightModelInfo",void 0),n([p({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),n([p({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),n([p({readOnly:!0})],s.prototype,"version",void 0),n([y("version",["store.version"])],s.prototype,"readVersion",null),n([p({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),n([p({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),n([p({type:String})],s.prototype,"title",void 0),n([y("portal-item","title")],s.prototype,"readTitlePortalItem",null),n([y("service","title",["name"])],s.prototype,"readTitleService",null),n([p({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),n([p(L)],s.prototype,"url",null),n([O("url")],s.prototype,"writeUrl",null),n([p()],s.prototype,"parsedUrl",null),n([p({readOnly:!0})],s.prototype,"store",void 0),n([p({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=n([K("esri.layers.mixins.SceneService")],s),s},I=-1e38;var m;(function(c){c[c.existingItem=0]="existingItem",c[c.newItem=1]="newItem"})(m||(m={}));const _="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var v;(function(c){c[c.SAVE=0]="SAVE",c[c.SAVE_AS=1]="SAVE_AS"})(v||(v={}));export{te as L,v as P};
