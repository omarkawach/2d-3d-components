import{ad as y,T as E,a7 as S,M as w,Z as D,fh as h,P as M}from"./index-8ERthB3p.js";import{$ as d}from"./Mesh-CJEK7lO8.js";import{d as N}from"./georeference-CwPKO8dc.js";import{o as T,i as F}from"./External-tJCk07ZV.js";import{s as I}from"./infoFor3D-CxOdoily.js";import"./axisAngleDegrees-CaSFQR2z.js";import"./quat-DUnoL8dP.js";import"./mat3f64-BBpwCtoL.js";import"./quatf64-BrpT0VRp.js";import"./MeshComponent-BCGFLGQh.js";import"./imageUtils-D1MsbWS6.js";import"./MeshLocalVertexSpace-C8ABjEju.js";import"./meshVertexSpaceUtils-KRc33Yrq.js";import"./vec3-DPXcG_yS.js";import"./triangulationUtils-C0V38kt7.js";import"./earcut-BqgeR2O3.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./DoubleArray-068mylUp.js";import"./Indices-DP3oX5Sg.js";import"./deduplicate-j8p9VETP.js";import"./plane-Du3EYICn.js";import"./mat4f64-Dk4dwAN8.js";import"./vec2f64-Diu2Kaa8.js";import"./mathUtils-iSLnUy_4.js";import"./Attribute-B-NAci_J.js";import"./ContentObject-BTgEhnct.js";import"./Geometry-CqGtfd4N.js";import"./basicInterfaces-DngWxyLO.js";import"./Util-B8vYs4k8.js";import"./triangle-CTblFuF6.js";import"./ObjectStack-BPo9QGhV.js";import"./lineSegment-DVvvMBnG.js";import"./VertexAttribute-BnAa5VW0.js";import"./doublePrecisionUtils-B0owpBza.js";import"./projectPointToVector-qKp-AJ2b.js";import"./mat3-CqxUQBLP.js";import"./spatialReferenceEllipsoidUtils-CmEPjh7T.js";import"./computeTranslationToOriginAndRotation-BbJd4iYX.js";import"./BufferView-CHYzaV9A.js";import"./vec2-Dt9Foiri.js";const l=()=>M.getLogger("esri.rest.support.meshFeatureSet");function wt(t,r,e){const o=e.features;e.features=[],delete e.geometryType;const n=y.fromJSON(e);if(n.geometryType="mesh",!e.assetMaps)return n;const s=$(r,e.assetMaps),i=t.sourceSpatialReference??E.WGS84,p=e.globalIdFieldName,{outFields:a}=t,f=a!=null&&a.length>0?x(a.includes("*")?null:new Set(a)):()=>({});for(const u of o){const m=L(u,p,i,r,s);m!=null&&n.features.push(new S({geometry:m,attributes:f(u)}))}return n}function x(t){return({attributes:r})=>{if(!r)return{};if(!t)return r;for(const e in r)t.has(e)||delete r[e];return r}}function L(t,r,e,o,n){const s=t.attributes[r],i=n.get(s);if(i==null)return l().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",t),null;if(!t.geometry)return l().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",t),null;const p=O(t,e,o),a=w.fromJSON(t.geometry);a.spatialReference=e;const f=P(t.attributes,o),u=e.isGeographic?"local":"georeferenced",m=A(i);return m?d.createWithExternalSource(p,m,{extent:a,transform:f,vertexSpace:u}):d.createIncomplete(p,{extent:a,transform:f,vertexSpace:u})}function O({attributes:t},r,{transformFieldRoles:e}){const o=t[e.originX],n=t[e.originY],s=t[e.originZ];return new D({x:o,y:n,z:s,spatialReference:r})}function P(t,{transformFieldRoles:r}){return new N({translation:[t[r.translationX],-t[r.translationZ],t[r.translationY]],rotationAxis:[t[r.rotationX],-t[r.rotationZ],t[r.rotationY]],rotationAngle:t[r.rotationDeg],scale:[t[r.scaleX],t[r.scaleZ],t[r.scaleY]]})}var c;function $(t,r){const e=new Map;for(const o of r){const n=o.parentGlobalId;if(n==null)continue;const s=o.assetName,i=o.assetType,p=o.assetHash,a=o.assetURL,f=o.conversionStatus,u=o.seqNo,m=I(i,t.supportedFormats);if(!m){l().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const g=h(e,n,()=>({files:new Map}));h(g.files,s,()=>({name:s,type:i,mimeType:m,status:b(f),parts:[]})).parts[u]={hash:p,url:a}}return e}function A(t){const r=Array.from(t.files.values()),e=new Array;for(const o of r){if(o.status!==c.COMPLETED)return null;const n=new Array;for(const s of o.parts){if(!s)return null;n.push(new T(s.url,s.hash))}e.push(new F(o.name,o.mimeType,n))}return e}function b(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{$ as assetMapFromAssetMapsJSON,L as extractMesh,wt as meshFeatureSetFromJSON};
