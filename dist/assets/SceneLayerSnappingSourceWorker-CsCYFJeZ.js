import{ft as l,fm as h,di as g,o as x,X as E,bW as p,a0 as v,dA as m}from"./index-8ERthB3p.js";import{v as y,b as L,j as V}from"./lineSegment-DVvvMBnG.js";import{w as j,Z as _,s as b}from"./sphere-Bf4ezJdT.js";import{W as C}from"./Octree-E7a40xr7.js";import{m as P}from"./edgeProcessing-Crq4tMpw.js";import"./ObjectStack-BPo9QGhV.js";import"./plane-Du3EYICn.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-BrpT0VRp.js";import"./vec2f64-Diu2Kaa8.js";import"./mathUtils-iSLnUy_4.js";import"./frustum-BrAPXuhm.js";import"./Util-B8vYs4k8.js";import"./deduplicate-j8p9VETP.js";import"./Indices-DP3oX5Sg.js";import"./InterleavedLayout-s3MgOYN8.js";import"./BufferView-CHYzaV9A.js";import"./vec2-Dt9Foiri.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BnAa5VW0.js";import"./glUtil-DS73TAjp.js";import"./enums-DSseSvdG.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-BAXqRpCA.js";const S=1e3;function I(t,o,e){const i=j(),n=_(i);return l(n,n,t,.5),l(n,n,o,.5),i[3]=h(n,t),g(n,n,e),i}let f=class{constructor(){this._idToComponent=new Map,this._components=new C(t=>t.bounds),this._edges=new C(t=>t.bounds),this._tmpLineSegment=y(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),v(o),await this._ensureEdgeLocations(t,o);const e=[];return this._edges.forEachNeighbor(i=>(this._addCandidates(t,i,e),e.length<S),t.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(t,o){const e=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;e.push({id:c,uid:r})}return!0},t.bounds),!e.length)return;const i={components:e},n=await this.remoteClient.invoke("fetchAllEdgeLocations",i,o??{});for(const s of n.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const e=[];this._edges.forEachNeighbor(i=>(i.component===o&&e.push(i),!0),o.bounds),this._edges.remove(e),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const e=P.createView(t.locations),i=new Array(e.count),n=p(),s=p();for(let d=0;d<e.count;d++){e.position0.getVec(d,n),e.position1.getVec(d,s);const a=I(n,s,t.origin),w=new T(o,d,a);i[d]=w}this._edges.add(i);const{objectIds:c,origin:r}=t;o.info={locations:e,objectIds:c,origin:r}}_addCandidates(t,o,e){const{info:i}=o.component,{origin:n,objectIds:s}=i,c=i.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);g(r,r,n),g(d,d,n);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,e),this._addVertexCandidate(t,a,r,e),this._addVertexCandidate(t,a,d,e)}_addEdgeCandidate(t,o,e,i,n){if(!t.returnEdge)return;const s=_(t.bounds),c=L(e,i,this._tmpLineSegment),r=V(c,s,this._tmpP3);b(t.bounds,r)&&n.push({type:"edge",objectId:o,target:m(r),distance:h(s,r),start:m(e),end:m(i)})}_addVertexCandidate(t,o,e,i){if(!t.returnVertex||!b(t.bounds,e))return;const n=_(t.bounds);i.push({type:"vertex",objectId:o,target:m(e),distance:h(n,e)})}};f=x([E("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const it=f;class u{constructor(o,e){this.id=o,this.bounds=e,this.info=null,this.uid=++u.uid}}u.uid=0;class T{constructor(o,e,i){this.component=o,this.index=e,this.bounds=i}}export{it as default};