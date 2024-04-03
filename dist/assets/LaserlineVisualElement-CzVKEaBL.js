function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Laserlines.glsl-CH220B6j.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/projectVectorToVector-C3SBBDgz.js","assets/projectPointToVector-qKp-AJ2b.js","assets/plane-Du3EYICn.js","assets/mat3f64-BBpwCtoL.js","assets/mat4f64-Dk4dwAN8.js","assets/quatf64-BrpT0VRp.js","assets/vec2f64-Diu2Kaa8.js","assets/mathUtils-iSLnUy_4.js","assets/Object3DVisualElement-D2TYUCro.js","assets/VisualElement-CI1nOGdz.js","assets/RenderGeometry-rcUvJmRA.js","assets/vec3f32-Cw9Q6TO_.js","assets/DoubleArray-068mylUp.js","assets/Texture-C7A05GrI.js","assets/interfaces-B8ge7Jg9.js","assets/BindType-BmZEZMMh.js","assets/Util-B8vYs4k8.js","assets/enums-DSseSvdG.js","assets/Texture-O7Pyotwx.js","assets/VertexAttribute-BnAa5VW0.js","assets/basicInterfaces-DngWxyLO.js","assets/mat3-CqxUQBLP.js","assets/ShaderTechniqueConfiguration-D3UbJ2mX.js","assets/doublePrecisionUtils-B0owpBza.js","assets/Material-DwPnlQDw.js","assets/ContentObject-BTgEhnct.js","assets/ViewingMode-Dodu7ZZk.js","assets/vec2-Dt9Foiri.js","assets/requestImageUtils-DP1V3HlH.js","assets/Indices-DP3oX5Sg.js","assets/sphere-Bf4ezJdT.js","assets/ObjectStack-BPo9QGhV.js","assets/Attribute-B-NAci_J.js","assets/Geometry-CqGtfd4N.js","assets/triangle-CTblFuF6.js","assets/lineSegment-DVvvMBnG.js","assets/computeTranslationToOriginAndRotation-BbJd4iYX.js","assets/ElevationProvider-Bd4qfXCi.js","assets/boundedPlane-CLJ-Xnn_.js","assets/verticalOffsetUtils-BYv4Nk2v.js","assets/orientedBoundingBox-BQvYwCTM.js","assets/quat-DUnoL8dP.js","assets/spatialReferenceEllipsoidUtils-CmEPjh7T.js","assets/hydratedFeatures-DqrDm0_F.js","assets/axisAngleDegrees-CaSFQR2z.js","assets/weather-D00pIeau.js","assets/RenderState-DaVlEYWY.js","assets/NestedMap-DgiGbX8E.js","assets/frustum-BrAPXuhm.js","assets/Octree-E7a40xr7.js","assets/InterleavedLayout-s3MgOYN8.js","assets/BufferView-CHYzaV9A.js","assets/types-D0PSWh4d.js","assets/OrderIndependentTransparency-Cua2R8AE.js","assets/floatRGBA-CCqnXShd.js","assets/Intersector-8rpRuT_8.js","assets/glUtil-DS73TAjp.js","assets/VertexElementDescriptor-BOD-G50G.js","assets/VertexArrayObject-Cv4RwmVi.js","assets/BufferObject-CaEbWulZ.js","assets/Scheduler-DaHJO6l7.js","assets/signal-DoM1gSF0.js","assets/debugFlags-BbJIqrPU.js","assets/ColorMaterial.glsl-uPKQoFFi.js","assets/VertexColor.glsl-CScvx9pF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{kL as be,_ as te,bW as c,dg as q,dm as ie,o as _,cp as N,bX as R,dk as U,fm as ne,fc as P,cj as b,bQ as se,cg as ve,di as re,bR as we,ci as B,y as I,X as Ve,aT as F,fG as xe,dA as G}from"./index-8ERthB3p.js";import{l as De,v as W,m as A,h as Ee}from"./lineSegment-DVvvMBnG.js";import{t as Le}from"./VisualElement-CI1nOGdz.js";import{a as ye,y as Ce,m as Se,p as Me,g as Re}from"./frustum-BrAPXuhm.js";import{Z as Ae,w as $e,p as Te}from"./sphere-Bf4ezJdT.js";import{l as X}from"./ViewingMode-Dodu7ZZk.js";import{t as Oe}from"./DoubleArray-068mylUp.js";import{r as qe}from"./glUtil-DS73TAjp.js";import{H as Ie}from"./InterleavedLayout-s3MgOYN8.js";import{r as ze}from"./RenderGeometry-rcUvJmRA.js";import{e as p}from"./VertexAttribute-BnAa5VW0.js";import{w as We,x as Ne,o as d,j as m,v as k,y as L,a as ae,z as Q,l as le,r as oe,m as ce,B as He,h as S,C as je,A as Z,D as Ue}from"./Texture-C7A05GrI.js";import{e as Be}from"./mat4f64-Dk4dwAN8.js";import{o as he}from"./vec2-Dt9Foiri.js";import{n as de}from"./vec2f64-Diu2Kaa8.js";import{o as a,n as Fe}from"./interfaces-B8ge7Jg9.js";import{R as $,E as Ge,F as Xe}from"./enums-DSseSvdG.js";import{S as pe,s as ue,_ as fe}from"./OrderIndependentTransparency-Cua2R8AE.js";import{h as ke}from"./BufferObject-CaEbWulZ.js";import{O as Qe,b as Ze}from"./Material-DwPnlQDw.js";import{r as V,t as Je}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{E as Ke,j as Ye}from"./plane-Du3EYICn.js";function ge(e,t){const n=e.fragment;n.include(We),e.include(Ne),n.uniforms.add(new d("globalAlpha",i=>i.globalAlpha),new m("glowColor",i=>i.glowColor),new d("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new d("glowFalloff",i=>i.glowFalloff),new m("innerColor",i=>i.innerColor),new d("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new k("depthMap",(i,s)=>{var r;return(r=s.linearDepth)==null?void 0:r.getTexture()}),new L("nearFar",(i,s)=>s.camera.nearFar),new k("frameColor",(i,s)=>s.mainColor)),n.code.add(a`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(a`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(a`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(a`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),t.contrastControlEnabled?(n.uniforms.add(new d("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost!=null?i.globalAlphaContrastBoost:1)),n.code.add(a`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):n.code.add(a`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function et(e){const t=new ae;t.include(ge,e);const{vertex:n,fragment:i}=t;return n.uniforms.add(new Q("modelView",(s,r)=>be(it,r.camera.viewMatrix,s.origin)),new Q("proj",(s,r)=>r.camera.projectionMatrix),new d("glowWidth",(s,r)=>s.glowWidth*r.camera.pixelRatio),new L("pixelToNDC",(s,r)=>he(tt,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))),t.attributes.add(p.START,"vec3"),t.attributes.add(p.END,"vec3"),t.attributes.add(p.UP,"vec3"),t.attributes.add(p.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),n.code.add(a`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),i.uniforms.add(new d("perScreenPixelRatio",(s,r)=>r.camera.perScreenPixelRatio)),i.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const tt=de(),it=Be(),nt=Object.freeze(Object.defineProperty({__proto__:null,build:et},Symbol.toStringTag,{value:"Module"}));class T extends oe{initializeProgram(t){return new ce(t.rctx,T.shader.get().build(this.configuration),_e)}initializePipeline(){return pe({blending:ue($.ONE,$.ONE_MINUS_SRC_ALPHA),colorWrite:fe})}}T.shader=new le(nt,()=>te(()=>import("./Laserlines.glsl-CH220B6j.js").then(e=>e.L),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67])));const _e=new Map([[p.START,0],[p.END,1],[p.UP,2],[p.EXTRUDE,3]]);class J{constructor(t){this._renderCoordsHelper=t,this._buffers=null,this._origin=c(),this._dirty=!1,this._count=0,this._vao=null}set vertices(t){const n=Oe(3*t.length);let i=0;for(const s of t)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(t){if(this._buffers=t,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);q(this._origin,n[i],n[i+1],n[i+2])}else q(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const n=this._ensureVAO(t);n!=null&&(t.bindVAO(n),t.drawArrays(Ge.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}_ensureVAO(t){return this._buffers==null?null:(this._vao==null&&(this._vao=this._createVAO(t,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(t,n){const i=this._createDataBuffer(n);return this._dirty=!1,new ze(t,_e,{data:qe(Y)},{data:ke.createVertex(t,Xe.STATIC_DRAW,i)})}_ensureVertexData(t,n){var s;if(!this._dirty)return;const i=this._createDataBuffer(n);(s=t.vertexBuffers.data)==null||s.setData(i),this._dirty=!1}_numberOfRenderVertices(t){return 3*(2*(t.length/3-1))}_createDataBuffer(t){const n=t.reduce((g,u)=>g+this._numberOfRenderVertices(u),0);this._count=n;const i=Y.createBuffer(n),s=this._origin;let r=0,l=0;for(const g of t){for(let u=0;u<g.length;u+=3){const C=q(K,g[u],g[u+1],g[u+2]);u===0?l=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,l);const w=this._renderCoordsHelper.worldUpAtPosition(C,st),o=r+2*u,j=ie(K,C,s);if(u<g.length-3){i.up.setVec(o,w),i.up.setVec(o+3,w),i.up.setVec(o+5,w);for(let v=0;v<6;v++)i.start.setVec(o+v,j);i.extrude.setValues(o,0,-1),i.extrude.setValues(o+1,1,-1),i.extrude.setValues(o+2,1,1),i.extrude.setValues(o+3,0,-1),i.extrude.setValues(o+4,1,1),i.extrude.setValues(o+5,0,1)}if(u>0){i.up.setVec(o-2,w),i.up.setVec(o-4,w),i.up.setVec(o-5,w);for(let v=-6;v<0;v++)i.end.setVec(o+v,j)}}r+=this._numberOfRenderVertices(g)}return i.buffer}}const st=c(),K=c(),Y=Ie().vec3f(p.START).vec3f(p.END).vec3f(p.UP).vec2f(p.EXTRUDE);class H extends Je{constructor(){super(...arguments),this.contrastControlEnabled=!1}}_([V()],H.prototype,"contrastControlEnabled",void 0);const me=N(6);function rt(e){const t=new ae;t.include(He),t.include(ge,e);const n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new d("maxPixelDistance",(i,s)=>e.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const i=(r,l,g)=>P(r,l.heightManifoldTarget,g.camera.viewMatrix),s=(r,l)=>P(r,[0,0,0],l.camera.viewMatrix);n.uniforms.add(new S("heightManifoldOrigin",(r,l)=>(i(f,r,l),s(x,l),ie(x,x,f),R(h,x),h[3]=U(x),h)),new m("globalOrigin",(r,l)=>s(f,l)),new d("cosSphericalAngleThreshold",(r,l)=>1-Math.max(2,ne(l.camera.eye,r.heightManifoldTarget)*l.camera.perRenderPixelRatio)/U(r.heightManifoldTarget))),n.code.add(a`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(a`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new d("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(a`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new d("perScreenPixelRatio",(i,s)=>s.camera.perScreenPixelRatio)),n.code.add(a`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(a`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.code.add(a`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){n.uniforms.add(new L("angleCutoff",s=>M(s)),new S("heightPlane",(s,r)=>Pe(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,f),r.camera.viewMatrix)));const i=e.spherical?a`normalize(globalOrigin - pos)`:a`heightPlane.xyz`;n.code.add(a`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(n.uniforms.add(new L("angleCutoff",i=>M(i)),new S("pointDistanceSphere",(i,s)=>at(i,s))),n.code.add(a`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new L("angleCutoff",i=>M(i)),new S("lineVerticalPlane",(i,s)=>lt(i,s)),new m("lineVerticalStart",(i,s)=>ot(i,s)),new m("lineVerticalEnd",(i,s)=>ct(i,s))),n.code.add(a`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new L("angleCutoff",i=>M(i)),new m("intersectsLineStart",(i,s)=>P(f,i.lineStartWorld,s.camera.viewMatrix)),new m("intersectsLineEnd",(i,s)=>P(f,i.lineEndWorld,s.camera.viewMatrix)),new m("intersectsLineDirection",(i,s)=>(b(h,i.intersectsLineSegment.vector),h[3]=0,R(f,se(h,h,s.camera.viewMatrix)))),new d("intersectsLineRadius",i=>i.intersectsLineRadius)),n.code.add(a`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),n.code.add(a`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function M(e){return he(ht,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-N(2))))}function at(e,t){return P(Ae(z),e.pointDistanceOrigin,t.camera.viewMatrix),z[3]=ne(e.pointDistanceOrigin,e.pointDistanceTarget),z}function lt(e,t){const n=De(e.lineVerticalPlaneSegment,.5,f),i=e.renderCoordsHelper.worldUpAtPosition(n,dt),s=R(x,e.lineVerticalPlaneSegment.vector),r=ve(f,i,s);return R(r,r),Pe(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}function ot(e,t){const n=b(f,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),P(n,n,t.camera.viewMatrix)}function ct(e,t){const n=re(f,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),P(n,n,t.camera.viewMatrix)}function Pe(e,t,n){return P(ee,e,n),b(h,t),h[3]=0,se(h,h,n),Ye(ee,h,pt)}const ht=de(),f=c(),h=we(),dt=c(),x=c(),ee=c(),pt=Ke(),z=$e(),ut=Object.freeze(Object.defineProperty({__proto__:null,build:rt,defaultAngleCutoff:me},Symbol.toStringTag,{value:"Module"}));class ft extends Fe{constructor(){super(...arguments),this.innerColor=B(1,1,1),this.innerWidth=1,this.glowColor=B(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=N(6),this.pointDistanceOrigin=c(),this.pointDistanceTarget=c(),this.lineVerticalPlaneSegment=W(),this.intersectsLineSegment=W(),this.intersectsLineRadius=3,this.heightManifoldTarget=c(),this.lineStartWorld=c(),this.lineEndWorld=c()}}class O extends oe{initializeProgram(t){return new ce(t.rctx,O.shader.get().build(this.configuration),Qe)}initializePipeline(){return pe({blending:ue($.ONE,$.ONE_MINUS_SRC_ALPHA),colorWrite:fe})}}O.shader=new le(ut,()=>te(()=>import("./Laserlines.glsl-CH220B6j.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67])));class D extends H{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}_([V()],D.prototype,"heightManifoldEnabled",void 0),_([V()],D.prototype,"pointDistanceEnabled",void 0),_([V()],D.prototype,"lineVerticalPlaneEnabled",void 0),_([V()],D.prototype,"intersectsLineEnabled",void 0),_([V()],D.prototype,"spherical",void 0);let E=class extends je{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=X.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new ft,this.produces=new Map([[Z.LASERLINES,()=>!this.contrastControlEnabled],[Z.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return Ue}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){b(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){b(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){b(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){A(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){A(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,this._pathVerticalPlaneData!=null&&this._requestRender())}set pathVerticalPlaneVertices(e){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new J(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new J(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){Ze(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new D;const t=new H;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(T,t)}uninitializeRenderContext(){this._technique=F(this._technique),this._pathVerticalPlaneData=xe(this._pathVerticalPlaneData),this._pathTechnique=F(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===X.Global,this._technique=this._techniqueRepository.releaseAndAcquire(O,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const n=e.rctx;this._updatePassParameters(e),n.bindTechnique(t,e.bindParameters,this._passParameters),n.screen.draw()}_renderPath(e){if(this._pathVerticalPlaneData==null||this._pathTechnique==null)return;const t=e.rctx,n=this._pathTechnique;t.bindTechnique(n,e.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(Ce(Te(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),y),y.c0=-Number.MAX_VALUE,!Se(t.frustum,y))return;Me(y,this._passParameters.lineStartWorld),Re(y,this._passParameters.lineEndWorld)}else b(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),re(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){return{passParameters:this._passParameters}}};_([I({constructOnly:!0})],E.prototype,"contrastControlEnabled",void 0),_([I({constructOnly:!0})],E.prototype,"_isDecoration",void 0),_([I({constructOnly:!0})],E.prototype,"renderCoordsHelper",void 0),E=_([Ve("esri.views.3d.support.LaserLineRenderer")],E);const y=ye();class zt extends Le{constructor(t){super(t),this._angleCutoff=me,this._style={},this._heightManifoldTarget=c(),this._heightManifoldEnabled=!1,this._intersectsLine=W(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(t)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(t){this._angleCutoff!==t&&(this._angleCutoff=t,this._syncAngleCutoff())}get style(){return this._style}set style(t){this._style=t,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){t!=null?(b(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(t){if(t==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(t,gt);this.intersectsLine=Ee(t,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){t!=null?(A(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){this._intersectsLineInfinite=t,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=t!=null?A(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(t){this._pathVerticalPlaneBuffers=t,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=t!=null?{origin:G(t.origin),target:t.target?G(t.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new E({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){this._renderer!=null&&(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){this._renderer!=null&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const t=this._pointDistanceLine,n=t!=null;this._renderer.pointDistanceEnabled=n&&t.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=t.origin,t.target!=null&&(this._renderer.pointDistanceTarget=t.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const gt=c();export{me as A,rt as V,zt as c,et as v};
