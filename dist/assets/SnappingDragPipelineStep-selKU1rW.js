import{cr as G,fY as A,cX as L,f_ as M,v as N}from"./index-8ERthB3p.js";import{a as Y}from"./dehydratedFeatureComparison-DdCJ1gSj.js";import{x as D}from"./hydratedFeatures-DqrDm0_F.js";import{w as X}from"./elevationInfoUtils-sHEwmo9N.js";import{Y as _}from"./InteractiveToolBase-yKkEJSmV.js";import{e as q}from"./SnappingContext-Cpn1WUY8.js";import{I as B,F as J}from"./Scheduler-DaHJO6l7.js";function an({predicate:n=()=>!0,snappingManager:e,snappingContext:o,updatingHandles:l,useZ:t=!0}){const i=new _;if(e==null)return{snappingStep:[z,i],cancelSnapping:z};let p,u=null,a=null,c=null;const f=()=>{u=A(u),e.doneSnapping(),a==null||a.frameTask.remove(),a=null,p=L(p),c=null},g=K(e,t,i);let d=null,s=null,Z=null;return{snappingStep:[r=>{if(!n(r))return r;const{action:P}=r;if(P==="start"){const{info:x}=r,v=Q(e.view);if(a=R(o,r,v),a.context.selfSnappingZ=null,!t&&x!=null){const m=W(o.coordinateHelper,x.handle.component);m!=null&&(a.context.selfSnappingZ={value:m,elevationInfo:o.elevationInfo??X})}}if(a!=null){const{context:x,originalScenePos:v,originalPos:m}=a,{mapEnd:T,mapStart:k,scenePoints:H}=r,S=C(m,y(T,k)),w=y(k,m),O={...r,action:"update"},U=a.context,h=V(v,H),I=e.update({point:S,scenePoint:h,context:x});if(Z=I,E(T,I,w,t),d=S,s=h,P!=="end"){const{frameTask:b}=a;u==null&&(u=new AbortController),c=F=>{l.addPromise(M(g({frameTask:b,event:O,context:U,point:S,scenePoint:h,delta:w,getLastState:()=>({point:d,scenePoint:s,updatePoint:F.forceUpdate?null:Z})},u.signal)))},c({forceUpdate:!1}),p==null&&(p=G(()=>e.options.effectiveEnabled,()=>c==null?void 0:c({forceUpdate:!0})))}}return P==="end"&&f(),r},i],cancelSnapping:r=>(f(),r)}}function K(n,e,o){return N(async({frameTask:l,point:t,scenePoint:i,context:p,event:u,delta:a,getLastState:c},f)=>{const g=await l.schedule(()=>n.snap({point:t,scenePoint:i,context:p,signal:f}),f);if(g.valid){let d=await l.schedule(()=>g.apply(),f);const s=c();s.point!=null&&t!==s.point&&(d=n.update({point:s.point,scenePoint:s.scenePoint,context:p})),s.updatePoint!=null&&Y(d,s.updatePoint)||(E(u.mapEnd,d,a,e),o.execute(u))}})}function Q(n){return n.type==="3d"?n.resourceController.scheduler.registerTask(B.SNAPPING):J}function R(n,e,o){return{context:new q({editGeometryOperations:n.editGeometryOperations,elevationInfo:n.elevationInfo,pointer:n.pointer,vertexHandle:e.info!=null?e.info.handle:null,excludeFeature:n.excludeFeature,feature:n.feature,visualizer:n.visualizer}),originalPos:e.snapOrigin!=null?n.coordinateHelper.vectorToDehydratedPoint(e.snapOrigin):e.mapStart,originalScenePos:e.scenePoints!=null?e.scenePoints.sceneStart:null,frameTask:o}}function C(n,[e,o,l]){const t=D(n);return t.x+=e,t.y+=o,t.hasZ&&(t.z+=l),t}function V(n,e){return n==null||e==null?null:C(n,y(e.sceneEnd,e.sceneStart))}function y(n,e){const o=n.hasZ&&e.hasZ?n.z-e.z:0;return[n.x-e.x,n.y-e.y,o]}function E(n,e,[o,l,t],i){n.x=e.x+o,n.y=e.y+l,i&&n.hasZ&&e.hasZ&&(n.z=e.z+t)}function W(n,e){if(!n.hasZ())return null;const o=e.vertices;let l=null;for(const t of o){const i=n.getZ(t.pos);if(l!=null&&i!=null&&Math.abs(i-l)>1e-6)return null;l==null&&(l=i)}return l}function z(n){return n}export{an as f};