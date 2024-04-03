import{fx as Z,bW as w,bG as O,U as z,hR as B,hS as H,w as J,hT as V,s as b,hU as Q,W as X,T as A,dt as Y,fp as ee,bH as W,dg as te,fc as T,hV as N,hW as ne,cj as re}from"./index-8ERthB3p.js";import{e as G}from"./mat4f64-Dk4dwAN8.js";import{a as oe}from"./spatialReferenceEllipsoidUtils-CmEPjh7T.js";import{n as D}from"./projectVectorToVector-C3SBBDgz.js";import{Z as ae}from"./sphere-Bf4ezJdT.js";import{I as se}from"./I3SBinaryReader-Y2aVLbE7.js";import{R as ie}from"./computeTranslationToOriginAndRotation-BbJd4iYX.js";import{f as le,a as ce}from"./edgeUtils-D8J_3GIe.js";import{e as ue,n as _}from"./symbolColorUtils-B_k_VgHH.js";import{O as fe,J as he}from"./orientedBoundingBox-BQvYwCTM.js";function pe(e,t,n,r){const o=de(e,t,n),a=G();return ie(n,o,a,r),a}const K=1,F=5-K;function de(e,t,n){const r=w(),o=e[3],a=2**(Math.ceil(Math.log(o)*Math.LOG2E/F)*F+K);if(n.isGeographic){const c=a/Z(n).radius*180/Math.PI,l=Math.round(e[1]/c),d=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(d)-c/2)/180*Math.PI),m=Math.round(e[0]/f)*f;r[0]=m,r[1]=d}else{const c=Math.round(e[0]/a),l=Math.round(e[1]/a);r[0]=c*a,r[1]=l*a}const i=e[2]+t,s=Math.round(i/a);return r[2]=s*a,r}function P(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function je(e){var t;if(J("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const r of n.geometryBuffers)if(((t=r.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function Ze(e,t,n,r){n.traverse(t,o=>{const a=o.serviceMbsInIndexSR;return(a!=null&&me(e,a))!==S.OUTSIDE&&(r(o),!0)})}function ze(e,t,n){let r=0,o=0;for(let a=0;a<t.length&&r<e.length;a++)e[r]===t[a]&&(n(a)&&(e[o]=e[r],o++),r++);e.length=o}function Be(e,t,n){let r=0,o=0;for(;r<n.length;)V(e,n[r])>=0===t&&(n[o]=n[r],o++),r++;n.length=o}const I=O();function He(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return I[0]=(e[0]-t.position[0])/t.rotationScale[0],I[1]=(e[1]-t.position[1])/t.rotationScale[4],I[2]=(e[2]-t.position[0])/t.rotationScale[0],I[3]=(e[3]-t.position[1])/t.rotationScale[4],I}var S;function me(e,t){const n=t[0],r=t[1],o=t[3],a=e[0]-n,i=n-e[2],s=e[1]-r,c=r-e[3],l=Math.max(a,i,0),d=Math.max(s,c,0),f=l*l+d*d;return f>o*o?S.OUTSIDE:f>0?S.INTERSECTS_CENTER_OUTSIDE:-Math.max(a,i,s,c)>o?S.INSIDE:S.INTERSECTS_CENTER_INSIDE}function ye(e,t,n){const r=[],o=n==null?void 0:n.missingFields,a=n==null?void 0:n.originalFields;for(const i of e){const s=i.toLowerCase();let c=!1;for(const l of t)if(s===l.name.toLowerCase()){r.push(l.name),c=!0,a&&a.push(i);break}!c&&o&&o.push(i)}return r}async function Je(e,t,n,r,o,a){if(t.length===0)return[];const i=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await be(e.associatedLayer,t,n,r,a)}catch(s){if(e.associatedLayer.loaded)throw s}if(i){const s=ge(t,n,o);if(s==null)throw new b("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(s.map(l=>we(c,i,l.node,l.indices,r,e.apiKey,e.customParameters,a).then(d=>{for(let f=0;f<l.graphics.length;f++){const m=l.graphics[f],y=d[f];if(m.attributes)for(const u in m.attributes)u in y||(y[u]=m.attributes[u]);m.attributes=y}return l.graphics})))).flat()}throw new b("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function ge(e,t,n){const r=new Map,o=[],a=n();for(const i of e){const s=i.attributes[t];for(let c=0;c<a.length;c++){const l=a[c],d=l.featureIds.indexOf(s);if(d>=0){let f=r.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},o.push(f),r.set(l.node,f)),f.indices.push(d),f.graphics.push(i);for(let m=c;m>0;m--)a[m]=a[m-1];a[0]=l;break}}}return o}async function be(e,t,n,r,o){t.sort((l,d)=>l.attributes[n]-d.attributes[n]);const a=t.map(l=>l.attributes[n]),i=[],s=ye(r,e.fields,{originalFields:i}),c=await j(e,a,s,o);for(let l=0;l<t.length;l++){const d=t[l],f=c[l],m={};if(d.attributes)for(const y in d.attributes)m[y]=d.attributes[y];for(let y=0;y<i.length;y++)m[i[y]]=f[s[y]];d.attributes=m}return t}function j(e,t,n,r){const o=e.capabilities.query.maxRecordCount;if(o!=null&&t.length>o){const i=Q(t,o);return Promise.all(i.map(s=>j(e,s,n,r))).then(s=>s.flat())}const a=new X({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(a,r).then(i=>{if(i&&i.features&&i.features.length===t.length)return i.features.map(s=>s.attributes);throw new b("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function we(e,t,n,r,o,a,i,s){return Se(e,t,n.resources.attributes,r,o,a,i,s)}async function Se(e,t,n,r,o,a,i,s){const c=[];for(const f of t)if(f&&o.includes(f.name)){const m=`${e}/nodes/${n}/attributes/${f.key}/0`;c.push({url:m,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>z(f.url,{responseType:"array-buffer",query:{...i,token:a},signal:s==null?void 0:s.signal}).then(m=>se(f.storageInfo,m.data)))),d=[];for(const f of r){const m={};for(let y=0;y<l.length;y++){const u=l[y];if(u.status==="fulfilled"){const h=u.value;m[c[y].storageInfo.name]=Ee(h,f)}}d.push(m)}return d}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(S||(S={}));const Te=-32768,Ie=-(2**31);function Ee(e,t){if(!e)return null;const n=e[t];return B(e)?n===Te?null:n:H(e)?n===Ie?null:n:n!=n?null:n}function Me(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=n===void 0?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new b("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new b("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new A(P(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function ve(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=n===void 0?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new b("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new b("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new A(P(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function Ve(e,t){return t==null?"@null":t===oe(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function k(e,t,n){if(!Y(e,t))throw new b("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Re(e,t))throw new b("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function Qe(e,t,n){var r,o,a,i;if(((r=e.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)!==((o=t.serviceUpdateTimeStamp)==null?void 0:o.lastUpdate)||!n.isEmpty||((a=e.associatedLayer)==null?void 0:a.url)!==((i=t.associatedLayer)==null?void 0:i.url))throw new b("layerview:recycle-failed")}function Re(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function xe(e,t,n){const r=Me(e),o=ve(e);k(r,t,n),k(o,t,n)}function $e(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function Xe(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!$e(e.store.defaultGeometrySchema))throw new b("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Ye(e,t){xe(e,t.spatialReference,t.viewingMode)}function Ce(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function et(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ce(e.store.defaultGeometrySchema))throw new b("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function tt(e,t){k(e.spatialReference,t.spatialReference,t.viewingMode)}function Ne(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function Ue(e){return e.type==="mesh-3d"}function nt(e){var n;if(e==null||!Ne(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const r of t){if(!Ue(r)||r.symbolLayers.length===0)return!0;for(const o of r.symbolLayers.items)if(o.type!=="fill"||((n=o.material)==null?void 0:n.color)==null||o.material.colorMixMode!=="replace")return!0}return!1}const rt=le({color:[0,0,0,0],opacity:0});class ke{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function ot(e){const t=new ke;let n=!1,r=!1;for(const o of e.symbolLayers.items)if(o.type==="fill"&&o.enabled){const a=o.material,i=o.edges;if(a!=null&&!n){const s=a.color,c=ue(a.colorMixMode);t.material=s!=null?{color:[s.r/255,s.g/255,s.b/255],alpha:s.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:_.Multiply},t.castShadows=o.castShadows,n=!0}i==null||r||(t.edgeMaterial=ce(i,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:_.Multiply}),t}function at(e,t){return(0|e)+(0|t)|0}function st(e,t,n,r,o,a,i){if(!a||a.length===0||t==null||!e.serviceMbsInIndexSR)return null;const s=pe(e.serviceMbsInIndexSR,o,n,t);ee(R,s);let c=null;const l=()=>{if(!c)if(c=Oe,W(v),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(L,n,t,o,i),L.getCorners(c);for(const u of c)T(u,u,R),N(v,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const h=u[3];D(ae(u),n,p,t),T(p,p,R),p[2]+=o;for(let g=0;g<8;++g){const E=1&g?h:-h,x=2&g?h:-h,$=4&g?h:-h,M=c[g];re(M,[p[0]+E,p[1]+x,p[2]+$]),N(v,M)}}};let d=1/0,f=-1/0;const m=u=>{if(u.type!=="replace")return;const h=u.geometry;if(!(h!=null&&h.hasZ))return;W(U);const g=h.spatialReference||r,E=h.rings.reduce((x,$)=>$.reduce((M,C)=>(te(p,C[0],C[1],C[2]),D(p,g,p,t),T(p,p,R),N(U,p),Math.min(p[2],M)),x),1/0);l(),ne(v,U)&&(d=Math.min(d,E),f=Math.max(f,E))};if(a.forEach(u=>m(u)),d===1/0)return null;const y=(u,h,g)=>{T(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,g[2]=d,T(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,g[2]=f,T(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2]};for(let u=0;u<8;++u)y(q.data,3*u,c[u]);return he(q)}function it(e){return e[3]>=0}function lt(e){e!=null&&(e[3]=-1)}const Oe=[w(),w(),w(),w(),w(),w(),w(),w()],U=O(),v=O(),L=new fe,p=w(),q={data:new Array(72),size:3,exclusive:!0,stride:3},R=G();export{Se as $,Je as A,ze as D,S as F,ve as H,Ve as J,ye as L,je as N,me as O,Ee as Q,Be as W,k as X,Qe as Y,Me as Z,et as a,at as d,de as e,rt as f,lt as g,st as h,pe as i,Ze as k,ot as m,Ye as n,Xe as o,He as q,tt as s,xe as t,nt as u,it as y};