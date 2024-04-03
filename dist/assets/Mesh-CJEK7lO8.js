function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/loadGLTFMesh-xxTJBwWc.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/mat3-CqxUQBLP.js","assets/mat3f64-BBpwCtoL.js","assets/MeshComponent-BCGFLGQh.js","assets/imageUtils-D1MsbWS6.js","assets/BufferView-CHYzaV9A.js","assets/vec2-Dt9Foiri.js","assets/vec3-DPXcG_yS.js","assets/DefaultMaterial_COLOR_GAMMA-D4SZcGoz.js","assets/mat4f64-Dk4dwAN8.js","assets/enums-DSseSvdG.js","assets/quat-DUnoL8dP.js","assets/quatf64-BrpT0VRp.js","assets/resourceUtils-ayGD6aG4.js","assets/basicInterfaces-DngWxyLO.js","assets/Indices-DP3oX5Sg.js","assets/types-D0PSWh4d.js","assets/georeference-CwPKO8dc.js","assets/spatialReferenceEllipsoidUtils-CmEPjh7T.js","assets/computeTranslationToOriginAndRotation-BbJd4iYX.js","assets/DoubleArray-068mylUp.js","assets/axisAngleDegrees-CaSFQR2z.js","assets/meshVertexSpaceUtils-KRc33Yrq.js","assets/MeshLocalVertexSpace-C8ABjEju.js","assets/gltfexport-B7USYXkD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as G,n1 as at,bD as ct,js as lt,M as Se,P as _,dm as Re,di as ut,bW as w,hi as Fe,_ as te,a0 as ie,Z as F,b7 as pt,n2 as ft,hj as ht,g0 as mt,c_ as dt,o as d,y as g,X as _e,i8 as gt,ak as xt,ct as yt,bV as ne,bX as wt,fp as vt,fc as Ie,dg as re,n3 as ke,ip as $t,g5 as Z,fv as je,kE as Me,g7 as Pe,n4 as Oe,kM as Le,fr as bt,dj as At,t as St,gI as Rt,cr as Ft,ci as ee,bi as _t,kd as It,gA as kt}from"./index-8ERthB3p.js";import{b as Ee,A as Te,y as H,k as Ne,w as jt}from"./axisAngleDegrees-CaSFQR2z.js";import{h as D,l as Q}from"./MeshComponent-BCGFLGQh.js";import{i as oe,a as Mt}from"./MeshLocalVertexSpace-C8ABjEju.js";import{G as Pt,c as ae,Q as Ot,I as Lt,V as Et,_ as Tt,d as Y,O as ze,j as De,h as Ce,E as Ve,a as Ue,b as Be}from"./georeference-CwPKO8dc.js";import{g as K,p as Ge,u as pe,h as fe,l as he}from"./meshVertexSpaceUtils-KRc33Yrq.js";import{f as Nt}from"./triangulationUtils-C0V38kt7.js";import{c as A}from"./projectPointToVector-qKp-AJ2b.js";import{u as me,y as zt,h as Dt}from"./External-tJCk07ZV.js";import{e as Ye}from"./mat3f64-BBpwCtoL.js";import{n as Ct}from"./mat3-CqxUQBLP.js";import{e as J}from"./mat4f64-Dk4dwAN8.js";import{I as Vt}from"./quat-DUnoL8dP.js";import{e as Ut,o as Bt}from"./quatf64-BrpT0VRp.js";import{a as ce}from"./spatialReferenceEllipsoidUtils-CmEPjh7T.js";import{R as We}from"./computeTranslationToOriginAndRotation-BbJd4iYX.js";const Gt="Mesh must be loaded before applying operations",Yt="Provided component is not part of the list of components",Wt="Expected polygon to be a Polygon instance",B="Expected location to be a Point instance";let de=class extends G{constructor(){super("invalid-input:location",B)}};function qt([e,t,n,r,o,s],i,a,l){ge??(ge=new Float64Array(24));const c=ge;return c[0]=e,c[1]=t,c[2]=n,c[3]=e,c[4]=o,c[5]=n,c[6]=r,c[7]=o,c[8]=n,c[9]=r,c[10]=t,c[11]=n,c[12]=e,c[13]=t,c[14]=s,c[15]=e,c[16]=o,c[17]=s,c[18]=r,c[19]=o,c[20]=s,c[21]=r,c[22]=t,c[23]=s,Pt({positions:c,transform:i,vertexSpace:a,inSpatialReference:l,outSpatialReference:l,outPositions:c}),He(c,l)}let ge=null;function qe(e){if(e.length===0)return at;const t=ct([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return lt(t,e),t}function He(e,t){const[n,r,o,s,i,a]=qe(e);return new Se({xmin:n,ymin:r,zmin:o,xmax:s,ymax:i,zmax:a,spatialReference:t})}const W="esri.geometry.support.meshUtils.centerAt";function Ht(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.anchor,s=n==null?void 0:n.geographic,i=ae(W,r,o.spatialReference,s);K(r)?Qt(e,t,o):i?Kt(e,t,o):Xt(e,t,o)}function Qt(e,t,n){const{vertexSpace:r}=e;if(!K(r))return;const o=Ke,s=Qe;if(!A(t,s,e.spatialReference))return void _.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!A(n,o,e.spatialReference)){const a=e.origin;o[0]=a.x,o[1]=a.y,o[2]=a.z,_.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const i=Re(Jt,s,o);r.origin=ut(w(),r.origin,i)}function Kt(e,t,n){const r=Ot(e.vertexAttributes,n),{position:o,normal:s,tangent:i}=Lt(r,t,!1);e.vertexAttributes.position=o,e.vertexAttributes.normal=s,e.vertexAttributes.tangent=i,e.vertexAttributesChanged()}function Xt(e,t,n){const r=Ke,o=Qe;if(A(t,o,e.spatialReference)){if(!A(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,_.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}Zt(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else _.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function Zt(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Qe=w(),Ke=w(),Jt=w();async function en(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Fe(te(()=>import("./loadGLTFMesh-xxTJBwWc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),n),s=await nn(r,n);ie(n);const i=o(new F({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:tn(s),signal:n==null?void 0:n.signal,expectedType:s.type});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:l}=await i;e.vertexAttributes=a,e.components=l}function tn(e){const t=pt(e.url);return n=>{const r=ft(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function nn(e,t){if(Array.isArray(e)){if(!e.length)throw new G("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?on(e):sn(e,t)}return Xe(e)}async function rn(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new C(n[0].partUrl);const s=await e.toBlob(t);return ie(t),C.fromBlob(s,tt(o,r))}function Xe(e){return C.fromBlob(e,tt(e.name,e.type))}function on(e){return et(e.map(t=>({name:t.name,mimeType:t.type,source:Xe(t)})))}async function sn(e,t){const n=await ht(e.map(async r=>{const o=await rn(r);return ie(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(mt(t))throw n.forEach(r=>r.source.dispose()),dt();return et(n)}const Ze=/^model\/gltf\+json$/,Je=/^model\/gltf-binary$/,se=/\.gltf$/i,an=/\.glb$/i;function et(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:s,source:i}of e)r===null&&(Ze.test(s)||se.test(o)?(r=i.url,n="gltf"):(Je.test(s)||an.test(o))&&(r=i.url,n="glb")),t.set(o,i.url),i.files.forEach((a,l)=>t.set(l,a));if(r==null)throw new G("mesh-load-external:missing-files","Missing files to load external mesh source");return new C(r,()=>e.forEach(({source:o})=>o.dispose()),t,n)}class C{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new C(r,()=>URL.revokeObjectURL(r),void 0,n)}}function tt(e,t){return Ze.test(t)||se.test(e)?"gltf":Je.test(t)||se.test(e)?"glb":void 0}let j=class extends gt{constructor(){super(),this.externalSources=new xt,this._explicitDisplaySource=null,this.addHandles(yt(()=>this.externalSources,"after-remove",({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!me(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!zt(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Dt(t,e))}get _implicitDisplaySource(){return this.externalSources.find(me)}};d([g()],j.prototype,"externalSources",void 0),d([g()],j.prototype,"displaySource",null),d([g()],j.prototype,"_implicitDisplaySource",null),d([g()],j.prototype,"_explicitDisplaySource",void 0),j=d([_e("esri.geometry.support.meshUtils.Metadata")],j);function cn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=xn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,h=0;for(let f=0;f<e.length;f++){const p=e[f],y=l/3;for(const $ of t)a[h++]=y+$;const V=p.corners;for(let $=0;$<4;$++){const M=V[$];let v=0;i[u++]=.25*n[$][0]+p.uvOrigin[0],i[u++]=p.uvOrigin[1]-.25*n[$][1];for(let S=0;S<3;S++)p.axis[S]!==0?(o[l++]=.5*p.axis[S],s[c++]=p.axis[S]):(o[l++]=.5*M[v++],s[c++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function ln(e,t){const n=e.components[0],r=n.faces,o=yn[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let l=0,c=0;for(let u=0;u<r.length;u++)u>=s&&u<s+6?i[l++]=r[u]:a[c++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),h=4*o*2,f=[0,1,1,1,1,0,0,0];for(let p=0;p<f.length;p++)u[h+p]=f[p];e.vertexAttributes.uv=u}return e.components=[new D({faces:i,material:n.material}),new D({faces:a})],e}function un(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let l=0,c=0,u=0,h=0;for(let f=0;f<=t;f++){const p=f/t*Math.PI+.5*Math.PI,y=Math.cos(p),V=Math.sin(p);m[2]=V;const $=f===0||f===t,M=$?n-1:n;for(let v=0;v<=M;v++){const S=v/M*2*Math.PI;m[0]=-Math.sin(S)*y,m[1]=Math.cos(S)*y;for(let I=0;I<3;I++)o[l]=.5*m[I],s[l]=m[I],++l;i[c++]=(v+($?.5:0))/n,i[c++]=f/t,f!==0&&v!==n&&(f!==t&&(a[u++]=h,a[u++]=h+1,a[u++]=h-n),f!==1&&(a[u++]=h,a[u++]=h-n,a[u++]=h-n-1)),h++}}return{position:o,normal:s,uv:i,faces:a}}function pn(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let l=0,c=0,u=0,h=0,f=0;for(let p=0;p<=5;p++){const y=p===0||p===5,V=p<=1||p>=4,$=p===2||p===4,M=y?n-1:n;for(let v=0;v<=M;v++){const S=v/M*2*Math.PI,I=y?0:.5;m[0]=I*Math.sin(S),m[1]=I*-Math.cos(S),m[2]=p<=2?.5:-.5;for(let P=0;P<3;P++)o[l++]=m[P],s[c++]=V?P===2?p<=1?1:-1:0:P===2?0:m[P]/I;i[u++]=(v+(y?.5:0))/n,i[u++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,$||p===0||v===n||(p!==5&&(a[h++]=f,a[h++]=f+1,a[h++]=f-n),p!==1&&(a[h++]=f,a[h++]=f-n,a[h++]=f-n-1)),f++}}return{position:o,normal:s,uv:i,faces:a}}function fn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function hn(e){const t=U.facingAxisOrderSwap[e],n=U.position,r=U.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const l=i;for(let c=0;c<3;c++){const u=t[c],h=Math.abs(u)-1,f=u>=0?1:-1;o[i]=n[l+h]*f,s[i]=r[l+h]*f,i++}}return{position:o,normal:s,uv:new Float32Array(U.uv),faces:new Uint32Array(U.faces),isPlane:!0}}const O=1,L=2,E=3,U={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[E,O,L],west:[-E,-O,L],north:[-O,E,L],south:[O,-E,L],up:[O,L,E],down:[O,-L,-E]}};function q(e,t,n){e.isPlane||mn(e),gn(e,dn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const{vertexAttributes:r,vertexSpace:o,transform:s}=Et(e,t,{vertexSpace:n==null?void 0:n.vertexSpace,geographic:n==null?void 0:n.geographic});return{vertexAttributes:new Q({...r,uv:e.uv}),vertexSpace:o,transform:s,components:[new D({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function mn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function dn(e,t,n){const r=Tt(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function gn(e,t){if(t!=null){k[0]=t[0],k[4]=t[1],k[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];ne(m,m,k);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){k[0]=1/t[0],k[4]=1/t[1],k[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];ne(m,m,k),wt(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const xn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},yn={south:0,east:1,north:2,west:3,up:4,down:5},m=w(),k=Ye();function nt(e,t,{vertexSpace:n,spatialReference:r}){if(n.type==="georeferenced"){const c=e;if(!A(t,c,r))return!1;const{origin:u}=n;return Re(e,c,u),!0}const o=ce(r),s=e;if(!A(t,s,o))return!1;const{origin:i}=n,a=xe;if(!We(r,i,a,o))return!1;const l=vt(xe,a);return l!=null&&(Ie(e,s,l),!0)}const xe=J(),le="esri.geometry.support.meshUtils.rotate";function wn(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=ae(le,o,r,i);Ge(e)?vn(e,t,s):a?$n(e,t,s):bn(e,t,s)}function vn(e,t,n){e.transform??(e.transform=new Y);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,l]=r.origin,c=new F({x:i,y:a,z:l,spatialReference:s}),u=T;if(c.equals(n))re(u,0,0,0);else if(!nt(u,n,e))return void _.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);Vt($e,H(t),Te(t));const h=ke(ye,$e,Z,$t,u),{localMatrix:f}=o,p=je(ye,h,f);o.scale=Me(w(),p),Pe(p,p,Oe(T,o.scale)),o.rotation=Ne(p),o.translation=Le(w(),p)}function $n(e,t,n){const r=e.spatialReference,o=ce(r),s=rt;A(n,s,o)||A(e.origin,s,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(i.length),u=a!=null?new Float32Array(a.length):null,h=l!=null?new Float32Array(l.length):null;We(o,s,X,o),Ct(ve,X);const f=we;ne(H(we),H(t),ve),f[3]=t[3],ze(i,r,c),a!=null&&u!=null&&De(a,i,c,r,u),l!=null&&h!=null&&Ce(l,i,c,r,h),z(c,f,3,s),Ve(c,i,r),a!=null&&u!=null&&(z(u,f,3),Ue(u,i,c,r,a)),l!=null&&h!=null&&(z(h,f,4),Be(h,i,c,r,l)),e.vertexAttributesChanged()}function bn(e,t,n){const r=rt;if(!A(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,_.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}z(e.vertexAttributes.position,t,3,r),z(e.vertexAttributes.normal,t,3),z(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function z(e,t,n,r=Z){if(e!=null){bt(X,Te(t),H(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)T[s]=e[o+s]-r[s];Ie(T,T,X);for(let s=0;s<3;s++)e[o+s]=T[s]+r[s]}}}const T=w(),ye=J(),we=Ee(),X=J(),ve=Ye(),rt=w(),$e=Ut(),ue="esri.geometry.support.meshUtils.scale";function An(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=ae(ue,r,o,i);Ge(e)?Sn(e,t,s):a?Rn(e,t,s):Fn(e,t,s)}function Sn(e,t,n){e.transform??(e.transform=new Y);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,l]=r.origin,c=new F({x:i,y:a,z:l,spatialReference:s}),u=N;if(c.equals(n))re(u,0,0,0);else if(!nt(u,n,e))return void _.getLogger(ue).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);const h=re(_n,t,t,t),f=ke(be,Bt,Z,h,u),{localMatrix:p}=o,y=je(be,f,p);o.scale=Me(w(),y),Pe(y,y,Oe(N,o.scale)),o.rotation=Ne(y),o.translation=Le(w(),y)}function Rn(e,t,n){const r=e.spatialReference,o=ce(r),s=st;A(n,s,o)||A(e.origin,s,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(i.length),u=a!=null?new Float32Array(a.length):null,h=l!=null?new Float32Array(l.length):null;ze(i,r,c),a!=null&&u!=null&&De(a,i,c,r,u),l!=null&&h!=null&&Ce(l,i,c,r,h),ot(c,t,s),Ve(c,i,r),a!=null&&u!=null&&Ue(u,i,c,r,a),l!=null&&h!=null&&Be(h,i,c,r,l),e.vertexAttributesChanged()}function Fn(e,t,n){const r=st;if(!A(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,_.getLogger(ue).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function ot(e,t,n=Z){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)N[o]=e[r+o]-n[o];At(N,N,t);for(let o=0;o<3;o++)e[r+o]=N[o]+n[o]}}const N=w(),_n=w(),be=J(),st=w();var b;const it="esri.geometry.Mesh";function R(){return _.getLogger(it)}const In={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:oe,local:Mt}};let x=b=class extends St.LoadableMixin(Rt(kt)){constructor(e){super(e),this.components=null,this.vertexSpace=new oe,this.transform=null,this.metadata=new j,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new Q,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Ft(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new Se({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(K(r)){const{_untransformedBounds:s,transform:i}=this;return qt(s,i,r,t)}return He(o,t)}get _untransformedBounds(){return qe(this.vertexAttributes.position)}get anchor(){const e=pe(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new F({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=pe(this.vertexSpace,this.spatialReference);return e??this._transformedExtent.center}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(D.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}R().error("removeComponent()",Yt)}}rotate(e,t,n,r){return jt(e,t,n,Ae),wn(this,Ae,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o==null?void 0:o.position;if(!s)return this;if(K(r)){const[i,a,l]=r.origin;r.origin=ee(i+e,a+t,l+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(An(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Ht(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(en(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){var r;let t=null;if(this.components){const o=new Map,s=new Map;t=this.components.map(i=>i.cloneWithDeduplication(o,s))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:((r=this.transform)==null?void 0:r.clone())??null,metadata:this.metadata.clone()};return new b(n)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=te(()=>import("./gltfexport-B7USYXkD.js"),__vite__mapDeps([26,1,2,11,13,4,14,25,5,6,19,3,20,21,22,23,24,9,7,8,12,15,16])),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(R().error(e,Gt),!1)}static createBox(e,t){if(!(e instanceof F))return R().error(".createBox()",B),null;const n=new b(q(cn(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?ln(n,t.imageFace):n}static createSphere(e,t){return e instanceof F?new b(q(un((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createSphere()",B),null)}static createCylinder(e,t){return e instanceof F?new b(q(pn((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createCylinder()",B),null)}static createPlane(e,t){if(!(e instanceof F))return R().error(".createPlane()",B),null;const n=(t==null?void 0:t.facing)??"up",r=fn(n,t==null?void 0:t.size);return new b(q(hn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof _t))return R().error(".createFromPolygon()",Wt),null;const n=Nt(e);return new b({vertexAttributes:new Q({position:n.position}),components:[new D({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new oe})}static async createFromGLTF(e,t,n){if(!(e instanceof F)){const o=new de;throw R().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await Fe(te(()=>import("./loadGLTFMesh-xxTJBwWc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){It(R(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>R().error(".createFromFiles()",o.message);if(!(e instanceof F)){const o=new de;throw r(o),o}if(!(n!=null&&n.layer))throw new G("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var p;const r=(n==null?void 0:n.extent)??null,{x:o,y:s,z:i,spatialReference:a}=e,l=((p=n==null?void 0:n.transform)==null?void 0:p.clone())??new Y,c=ee(o,s,i??0),u=fe((n==null?void 0:n.vertexSpace)??he(a),c),h={source:t,extent:r},f=new j;return f.externalSources.push(h),new b({metadata:f,transform:l,vertexSpace:u,spatialReference:a})}static createIncomplete(e,t){var u;const{x:n,y:r,z:o,spatialReference:s}=e,i=((u=t==null?void 0:t.transform)==null?void 0:u.clone())??new Y,a=ee(n,r,o??0),l=fe((t==null?void 0:t.vertexSpace)??he(s),a),c=new b({transform:i,vertexSpace:l,spatialReference:s});return c.addResolvingPromise(Promise.reject(new G("mesh-incomplete","Mesh resources are not complete"))),c}};d([g({type:[D],json:{write:!0}})],x.prototype,"components",void 0),d([g({nonNullable:!0,types:In,constructOnly:!0,json:{write:!0}})],x.prototype,"vertexSpace",void 0),d([g({type:Y,json:{write:!0}})],x.prototype,"transform",void 0),d([g({constructOnly:!0})],x.prototype,"metadata",void 0),d([g()],x.prototype,"hasExtent",null),d([g()],x.prototype,"_transformedExtent",null),d([g()],x.prototype,"_untransformedBounds",null),d([g()],x.prototype,"anchor",null),d([g()],x.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],x.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],x.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],x.prototype,"hasM",void 0),d([g({type:Q,nonNullable:!0,json:{write:!0}})],x.prototype,"vertexAttributes",void 0),x=b=d([_e(it)],x);const Ae=Ee(),Wn=x;export{Wn as $};
