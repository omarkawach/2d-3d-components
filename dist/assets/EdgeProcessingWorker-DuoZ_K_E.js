import{u as a}from"./workerHelper-CE2O_zfa.js";import{f as p,u as c,a as u,I as d,d as f,m as g}from"./edgeProcessing-Crq4tMpw.js";import"./InterleavedLayout-s3MgOYN8.js";import"./BufferView-CHYzaV9A.js";import"./vec2-Dt9Foiri.js";import"./index-8ERthB3p.js";import"./types-D0PSWh4d.js";import"./Util-B8vYs4k8.js";import"./vec2f64-Diu2Kaa8.js";import"./deduplicate-j8p9VETP.js";import"./Indices-DP3oX5Sg.js";import"./VertexAttribute-BnAa5VW0.js";import"./glUtil-DS73TAjp.js";import"./enums-DSseSvdG.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-BAXqRpCA.js";class q{async extract(t){const e=o(t),r=p(e),n=[e.data.buffer];return{result:m(r,n),transferList:n}}async extractComponentsEdgeLocations(t){const e=o(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),n=u(r,D,l),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}async extractEdgeLocations(t){const e=o(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),n=u(r,w,l),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}}function o(i){return{data:d.createView(i.dataBuffer),indices:i.indicesType==="Uint32Array"?new Uint32Array(i.indices):i.indicesType==="Uint16Array"?new Uint16Array(i.indices):i.indices,indicesLength:i.indicesLength,writerSettings:i.writerSettings,skipDeduplicate:i.skipDeduplicate}}function m(i,t){return t.push(i.regular.lodInfo.lengths.buffer),t.push(i.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(i.regular.instancesData,t),lodInfo:{lengths:i.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(i.silhouette.instancesData,t),lodInfo:{lengths:i.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:i.averageEdgeLength}}class h{allocate(t){return f.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1)}}class L{allocate(t){return g.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1),t.componentIndex.set(e,r.componentIndex)}}const w=new h,D=new L,l={allocate:()=>null,write:()=>{},trim:()=>null};export{q as default};