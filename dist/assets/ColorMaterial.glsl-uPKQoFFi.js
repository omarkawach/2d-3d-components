function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{lh as Te,_ as we,o as u,dg as Z,fc as G,bX as pe,dm as ct,dj as L,fp as pt,cj as N,dk as W,fm as dt,bV as ut,cf as ft,bU as ht,di as J,bG as $e,jo as vt,bW as j,bR as _e,ci as gt,dE as de,w as Ee,qr as mt,qs as Ot,ms as bt,g3 as yt,c5 as St,jm as xt,jU as Pt,ds as Ct,lN as At,lP as Tt,lO as wt,ku as $t,ip as _t,jT as Et,jR as zt,jS as Dt}from"./index-8ERthB3p.js";import{n as ue}from"./mat3-CqxUQBLP.js";import{e as ze}from"./mat3f64-BBpwCtoL.js";import{e as De}from"./mat4f64-Dk4dwAN8.js";import{n as Rt,r as jt}from"./vec2f64-Diu2Kaa8.js";import{x as It}from"./BufferView-CHYzaV9A.js";import{g as Re,f as Ft,h as R,o as B,p as Vt,ar as je,a8 as Lt,i as Ie,v as Fe,a as Ve,P as Le,aq as Nt,e as Ne,M as Me,T as Ue,y as fe,b as g,k as q,F as he,l as Be,r as He,m as Ge,n as We,A as w,aL as Q,aM as Mt,S as Ut,U as Bt,as as Ht,af as Gt,ag as Wt,ah as qt,q as K,aA as kt,s as Yt,aB as Xt}from"./Texture-C7A05GrI.js";import{O as qe,c as ke,t as Zt,s as Jt,f as Qt,d as ve,L as Kt,h as eo,a as to}from"./Material-DwPnlQDw.js";import{H as Ye}from"./InterleavedLayout-s3MgOYN8.js";import{s as Xe,f as oo,g as Ze,t as io,h as ao,i as ro,u as so,l as no,b as lo,O as co,S as po,p as ge,y as me,R as uo,o as fo,e as ho,a as vo,r as go}from"./VertexColor.glsl-CScvx9pF.js";import{s as mo}from"./Util-B8vYs4k8.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";import{l as Oo}from"./ViewingMode-Dodu7ZZk.js";import{o as _,s as bo,a as Je,S as Qe,A as Ke,_ as et,c as yo,h as So,l as xo,e as Po,f as Co}from"./OrderIndependentTransparency-Cua2R8AE.js";import{R as Oe,O as Ao,E as be}from"./enums-DSseSvdG.js";import{r as f}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{e as ae}from"./projectVectorToVector-C3SBBDgz.js";import{o as To,x as wo}from"./hydratedFeatures-DqrDm0_F.js";import{e as re}from"./basicInterfaces-DngWxyLO.js";import{o as ie,r as $o}from"./vec2-Dt9Foiri.js";import"./BindType-BmZEZMMh.js";import{o as c}from"./interfaces-B8ge7Jg9.js";import{J as _o,K as ye,P as Eo,L as zo,M as Do,N as Ro,Q as jo,S as Io}from"./RenderGeometry-rcUvJmRA.js";import"./floatRGBA-CCqnXShd.js";import"./Texture-O7Pyotwx.js";function Fo(t){return t instanceof Float32Array&&t.length>=16}function Vo(t){return Array.isArray(t)&&t.length>=16}function Lo(t){return Fo(t)||Vo(t)}const tt=.5;function No(t,e){t.include(Xe),t.attributes.add(h.POSITION,"vec3"),t.attributes.add(h.NORMAL,"vec3"),t.attributes.add(h.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;Re(o,e),Ft(o,e),o.uniforms.add(new R("viewport",(i,a)=>a.camera.fullViewport),new B("polygonOffset",i=>i.shaderPolygonOffset),new B("cameraGroundRelative",(i,a)=>a.camera.aboveGround?1:-1)),e.hasVerticalOffset&&oo(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(c`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(c`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?c.float(0):c`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Vt(o),e.draped||(o.uniforms.add(new B("perDistancePixelRatio",(i,a)=>Math.tan(a.camera.fovY/2)/(a.camera.fullViewport[2]/2))),o.code.add(c`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.float(tt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&je(o),e.hasScreenSizePerspective&&Ze(o),o.code.add(c`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?c`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":c`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let Mo=class{constructor(){this.factor=new Se,this.factorAlignment=new Se}};class Se{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function se(t){t.uniforms.add(new Lt("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(c`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(c`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Uo(t,e){const{vertex:o,fragment:i}=t;o.include(se),e.multipassEnabled&&(o.include(_o),t.varyings.add("depth","float")),o.code.add(c`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?c`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Ie,e),i.code.add(c`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?c`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function Bo(t){t.vertex.uniforms.add(new B("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ye.Occluded?1:o.hudRenderStyle===ye.NotOccluded?0:.75),new R("viewport",(e,o)=>o.camera.fullViewport),new Fe("hudVisibilityTexture",(e,o)=>{var i;return(i=o.hudVisibility)==null?void 0:i.getTexture()})),t.vertex.include(se),t.vertex.code.add(c`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ot(t){const e=new Ve,o=t.signedDistanceFieldEnabled;if(e.include(No,t),e.include(Le,t),t.occlusionPass)return e.include(Uo,t),e;const{vertex:i,fragment:a}=e;e.include(Xe),a.include(Nt),a.include(Ne),e.include(Me,t),e.include(Ue,t),e.include(Bo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),i.uniforms.add(new R("viewport",(s,v)=>v.camera.fullViewport),new fe("screenOffset",(s,v)=>ie(it,2*s.screenOffset[0]*v.camera.pixelRatio,2*s.screenOffset[1]*v.camera.pixelRatio)),new fe("anchorPosition",s=>H(s)),new R("materialColor",s=>s.color)),je(i),o&&(i.uniforms.add(new R("outlineColor",s=>s.outlineColor)),a.uniforms.add(new R("outlineColor",s=>xe(s)?s.outlineColor:Te),new B("outlineSize",s=>xe(s)?s.outlineSize:0))),t.pixelSnappingEnabled&&i.include(se),t.hasScreenSizePerspective&&(io(i),Ze(i)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.COLOR,"vec4"),e.attributes.add(h.SIZE,"vec2"),e.attributes.add(h.FEATUREATTRIBUTE,"vec4"),i.code.add(c`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?c`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=c`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,l=t.pixelSnappingEnabled?o?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;i.code.add(c`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===g.ObjectAndLayerIdColor?c`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${c.float(q)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.float(q)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${l}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?c`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new Fe("tex",s=>s.texture));const n=t.debugDrawLabelBorder?c`(isBorder > 0.0 ? 0.0 : ${c.float(he)})`:c.float(he),d=c`
    ${t.debugDrawLabelBorder?c`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?c`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:c`
      vec2 samplePos = vtc;
      `}

    ${o?c`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?c`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case g.Color:a.code.add(c`
        void main() {
          ${d}
          ${t.transparencyPassType===_.FrontFace?"fragColor.rgb /= fragColor.a;":""}
        }`);break;case g.Alpha:a.code.add(c`
        void main() {
          ${d}
          fragColor = vec4(fragColor.a);
        }`);break;case g.ObjectAndLayerIdColor:a.code.add(c`
        void main() {
          ${d}
          outputObjectAndLayerIdColor();
        }`);break;case g.Highlight:a.constants.add("occludedHighlightFlag","vec4",ao),a.constants.add("unoccludedHighlightFlag","vec4",ro),a.code.add(c`
        void main() {
          ${d}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function xe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function H(t,e=it){return t.textureIsSignedDistanceField?Ho(t.anchorPosition,t.distanceFieldBoundingBox,e):$o(e,t.anchorPosition),e}function Ho(t,e,o){e!=null?ie(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):ie(o,0,0)}const it=Rt(),Go=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"}));class k extends He{initializeConfiguration(e,o){o.spherical=e.viewingMode===Oo.Global}initializeProgram(e){return new Ge(e.rctx,k.shader.get().build(this.configuration),qe)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,i=e===_.NONE,a=e===_.FrontFace,r=this.configuration.hasPolygonOffset?Wo:null,l=o.draped?null:(i||a)&&o.output!==g.Highlight&&(o.depthEnabled||o.occlusionPass)?Je:null;return Qe({blending:o.output===g.Color||o.output===g.Alpha||o.output===g.Highlight?i?qo:Ke(e):null,depthTest:o.draped?null:{func:Ao.LEQUAL},depthWrite:l,colorWrite:et,polygonOffset:r})}get primitiveType(){return this.configuration.occlusionPass?be.POINTS:be.TRIANGLES}}k.shader=new Be(Go,()=>we(()=>Promise.resolve().then(()=>vi),void 0));const Wo={factor:0,units:-4},qo=bo(Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);class m extends We{constructor(){super(...arguments),this.output=g.Color,this.transparencyPassType=_.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}u([f({count:g.COUNT})],m.prototype,"output",void 0),u([f({count:_.COUNT})],m.prototype,"transparencyPassType",void 0),u([f()],m.prototype,"screenCenterOffsetUnitsEnabled",void 0),u([f()],m.prototype,"spherical",void 0),u([f()],m.prototype,"occlusionTestEnabled",void 0),u([f()],m.prototype,"signedDistanceFieldEnabled",void 0),u([f()],m.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),u([f()],m.prototype,"vvSize",void 0),u([f()],m.prototype,"vvColor",void 0),u([f()],m.prototype,"hasVerticalOffset",void 0),u([f()],m.prototype,"hasScreenSizePerspective",void 0),u([f()],m.prototype,"debugDrawLabelBorder",void 0),u([f()],m.prototype,"hasSlicePlane",void 0),u([f()],m.prototype,"hasPolygonOffset",void 0),u([f()],m.prototype,"depthEnabled",void 0),u([f()],m.prototype,"pixelSnappingEnabled",void 0),u([f()],m.prototype,"draped",void 0),u([f()],m.prototype,"multipassEnabled",void 0),u([f()],m.prototype,"cullAboveGround",void 0),u([f()],m.prototype,"occlusionPass",void 0),u([f()],m.prototype,"objectAndLayerIdColorInstanced",void 0),u([f({constValue:!0})],m.prototype,"hasSliceInVertexProgram",void 0),u([f({constValue:!1})],m.prototype,"hasVvInstancing",void 0);class Hi extends ke{constructor(e){super(e,new ii),this._configuration=new m,this.produces=new Map([[w.HUD_MATERIAL,o=>Q(o)&&!this.parameters.drawInSecondSlot],[w.LABEL_MATERIAL,o=>Q(o)&&this.parameters.drawInSecondSlot],[w.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[w.DRAPED_MATERIAL,o=>Q(o)]])}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===w.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===g.Color&&(this._configuration.debugDrawLabelBorder=!!Zt.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,i,a,r,l){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const n=this.parameters,d=i.point,s=i.camera;let{scaleX:v,scaleY:b}=this._getScreenScale(e);v*=s.pixelRatio,b*=s.pixelRatio,ue(te,o),e.attributes.has(h.FEATUREATTRIBUTE)&&Xo(te);const p=e.attributes.get(h.POSITION),S=e.attributes.get(h.SIZE),A=e.attributes.get(h.NORMAL),T=e.attributes.get(h.CENTEROFFSETANDDISTANCE);mo(p.size>=3);const I=H(n),D=this.parameters.centerOffsetUnits==="screen";for(let O=0;O<p.data.length/p.size;O++){const $=O*p.size;Z(x,p.data[$],p.data[$+1],p.data[$+2]),G(x,x,o);const F=O*S.size;E[0]=S.data[F]*v,E[1]=S.data[F+1]*b,G(x,x,s.viewMatrix);const V=O*T.size;if(Z(C,T.data[V],T.data[V+1],T.data[V+2]),!D&&(x[0]+=C[0],x[1]+=C[1],C[2]!==0)){const X=C[2];pe(C,x),ct(x,x,L(C,C,X))}const Y=O*A.size;if(Z(U,A.data[Y],A.data[Y+1],A.data[Y+2]),this._normalAndViewAngle(U,te,s,oe),this._applyVerticalOffsetTransformationView(x,oe,s,ee),s.applyProjection(x,P),P[0]>-1){D&&(C[0]||C[1])&&(P[0]+=C[0]*s.pixelRatio,C[1]!==0&&(P[1]+=Jt(C[1],ee.factorAlignment)*s.pixelRatio),s.unapplyProjection(P,x)),P[0]+=this.parameters.screenOffset[0]*s.pixelRatio,P[1]+=this.parameters.screenOffset[1]*s.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),Qt(E,ee.factor,E);const X=ei*s.pixelRatio;let ne=0;if(n.textureIsSignedDistanceField&&(ne=n.outlineSize*s.pixelRatio/2),Pe(d,P[0],P[1],E,X,ne,n,I)){const le=i.ray;if(G(Ce,x,pt(Jo,s.viewMatrix)),P[0]=d[0],P[1]=d[1],s.unprojectFromRenderScreen(P,x)){const M=j();N(M,le.direction);const ce=1/W(M);L(M,M,ce),l(dt(le.origin,x)*ce,M,-1,!0,1,Ce)}}}}}intersectDraped(e,o,i,a,r,l){const n=e.attributes.get(h.POSITION),d=e.attributes.get(h.SIZE),s=this.parameters,v=H(s);let{scaleX:b,scaleY:p}=this._getScreenScale(e);b*=e.screenToWorldRatio,p*=e.screenToWorldRatio;const S=ti*e.screenToWorldRatio;for(let A=0;A<n.data.length/n.size;A++){const T=A*n.size,I=n.data[T],D=n.data[T+1],O=A*d.size;E[0]=d.data[O]*b,E[1]=d.data[O+1]*p;let $=0;s.textureIsSignedDistanceField&&($=s.outlineSize*e.screenToWorldRatio/2),Pe(a,I,D,E,S,$,s,v)&&r(l.dist,l.normal,-1,!1)}}createBufferWriter(){return new ri(this)}_normalAndViewAngle(e,o,i,a){return Lo(o)&&(o=ue(Zo,o)),ut(a.normal,e,o),G(a.normal,a.normal,i.viewInverseTransposeMatrix),a.cosAngle=ft(at,oi),a}_updateScaleInfo(e,o,i){const a=this.parameters;a.screenSizePerspective!=null?ve(i,o,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?ve(i,o,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,i,a,r,l,n){const d=this._normalAndViewAngle(o,i,r,oe);return this._applyVerticalGroundOffsetView(e,d,r,n),this._applyVerticalOffsetTransformationView(n,d,r,l),this._applyPolygonOffsetView(n,d,a[3],r,n),this._applyCenterOffsetView(n,a,n),n}applyShaderOffsetsNDC(e,o,i,a,r){return this._applyCenterOffsetNDC(e,o,i,a),r!=null&&N(r,a),this._applyPolygonOffsetNDC(a,o,i,a),a}_applyPolygonOffsetView(e,o,i,a,r){const l=a.aboveGround?1:-1;let n=Math.sign(i);n===0&&(n=l);const d=l*n;if(this.parameters.shaderPolygonOffset<=0)return N(r,e);const s=ht(Math.abs(o.cosAngle),.01,1),v=1-Math.sqrt(1-s*s)/s/a.viewport[2];return L(r,e,d>0?v:1/v),r}_applyVerticalGroundOffsetView(e,o,i,a){const r=W(e),l=i.aboveGround?1:-1,n=i.computeRenderPixelSizeAtDist(r)*tt,d=L(x,o.normal,l*n);return J(a,e,d),a}_applyVerticalOffsetTransformationView(e,o,i,a){var s;const r=this.parameters;if(!((s=r.verticalOffset)!=null&&s.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const v=W(e);this._updateScaleInfo(a,v,o.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const l=W(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,d=Kt(i,l,r.verticalOffset,o.cosAngle,n);return this._updateScaleInfo(a,l,o.cosAngle),L(o.normal,o.normal,d),J(e,e,o.normal)}_applyCenterOffsetView(e,o,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&N(i,e),a&&(i[0]+=o[0],i[1]+=o[1],o[2]&&(pe(U,i),J(i,i,L(U,U,o[2])))),i}_applyCenterOffsetNDC(e,o,i,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&N(a,e),r||(a[0]+=o[0]/i.fullWidth*2,a[1]+=o[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,o,i,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&N(a,e),r){const l=i.aboveGround?1:-1,n=l*Math.sign(o[3]);a[2]-=(n||l)*r}return a}createGLMaterial(e){return new ko(e)}calculateRelativeScreenBounds(e,o,i=$e()){return Yo(this.parameters,e,o,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}_getScreenScale(e){const o=e.attributes.get(h.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const i=vt(o.data,Ko),[a,r]=Mt(Qo,this.parameters,i);return{scaleX:a,scaleY:r}}}class ko extends so{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(k,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function Yo(t,e,o,i){i[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*o,i[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*o}function Xo(t){const e=t[0],o=t[1],i=t[2],a=t[3],r=t[4],l=t[5],n=t[6],d=t[7],s=t[8],v=1/Math.sqrt(e*e+o*o+i*i),b=1/Math.sqrt(a*a+r*r+l*l),p=1/Math.sqrt(n*n+d*d+s*s);return t[0]=e*v,t[1]=o*v,t[2]=i*v,t[3]=a*b,t[4]=r*b,t[5]=l*b,t[6]=n*p,t[7]=d*p,t[8]=s*p,t}function Pe(t,e,o,i,a,r,l,n){let d=e-a-(n[0]>0?i[0]*n[0]:0),s=d+i[0]+2*a,v=o-a-(n[1]>0?i[1]*n[1]:0),b=v+i[1]+2*a;const p=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&p!=null&&(d+=i[0]*p[0],v+=i[1]*p[1],s-=i[0]*(1-p[2]),b-=i[1]*(1-p[3]),d-=r,s+=r,v-=r,b+=r),t[0]>d&&t[0]<s&&t[1]>v&&t[1]<b}const ee=new Mo,x=j(),U=j(),P=_e(),at=j(),Ce=j(),te=ze(),Zo=ze(),Jo=De(),C=j(),Qo=j(),Ko=_e(),oe={normal:at,cosAngle:0},ei=1,ti=2,E=[0,0],oi=gt(0,0,1);class ii extends no{constructor(){super(...arguments),this.renderOccluded=eo.Occlude,this.isDecoration=!1,this.color=de(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=jt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=de(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const rt=Ye().vec3f(h.POSITION).vec3f(h.NORMAL).vec2f(h.UV0).vec4u8(h.COLOR).vec2f(h.SIZE).vec4f(h.CENTEROFFSETANDDISTANCE).vec4f(h.FEATUREATTRIBUTE),ai=rt.clone().vec4u8(h.OBJECTANDLAYERIDCOLOR);class ri{constructor(e){this._material=e,this.vertexBufferLayout=Ee("enable-feature:objectAndLayerId-rendering")?ai:rt}elementCount(e){return 6*e.attributes.get(h.POSITION).indices.length}write(e,o,i,a,r){var D;lo(i.attributes.get(h.POSITION),e,a.position,r,6),co(i.attributes.get(h.NORMAL),o,a.normal,r,6);const l=i.attributes.get(h.UV0).data;let n,d,s,v;if(l==null||l.length<4){const O=this._material.parameters;n=0,d=0,s=O.texCoordScale[0],v=O.texCoordScale[1]}else n=l[0],d=l[1],s=l[2],v=l[3];s=Math.min(1.99999,s+1),v=Math.min(1.99999,v+1);let b=i.attributes.get(h.POSITION).indices.length,p=r;const S=a.uv0;for(let O=0;O<b;++O)S.set(p,0,n),S.set(p,1,d),p++,S.set(p,0,s),S.set(p,1,d),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,d),p++;po(i.attributes.get(h.COLOR),4,a.color,r,6);const{data:A,indices:T}=i.attributes.get(h.SIZE);b=T.length;const I=a.size;p=r;for(let O=0;O<b;++O){const $=A[2*T[O]],F=A[2*T[O]+1];for(let V=0;V<6;++V)I.set(p,0,$),I.set(p,1,F),p++}if(i.attributes.get(h.CENTEROFFSETANDDISTANCE)?ge(i.attributes.get(h.CENTEROFFSETANDDISTANCE),a.centerOffsetAndDistance,r,6):me(a.centerOffsetAndDistance,r,6*b),i.attributes.get(h.FEATUREATTRIBUTE)?ge(i.attributes.get(h.FEATUREATTRIBUTE),a.featureAttribute,r,6):me(a.featureAttribute,r,6*b),i.objectAndLayerIdColor!=null){const O=(D=i.attributes.get(h.POSITION))==null?void 0:D.indices;if(O){const $=O.length,F=a.getField(h.OBJECTANDLAYERIDCOLOR,It);uo(i.objectAndLayerIdColor,F,$,r,6)}}}}function Gi(t,e){if(t.type==="point")return z(t,e,!1);if(To(t))switch(t.type){case"extent":return z(t.center,e,!1);case"polygon":return z(t.centroid,e,!1);case"polyline":return z(Ae(t),e,!0);case"mesh":return z(t.origin,e,!1)}else switch(t.type){case"extent":return z(si(t),e,!0);case"polygon":return z(ni(t),e,!0);case"polyline":return z(Ae(t),e,!0)}}function Ae(t){const e=t.paths[0];if(!e||e.length===0)return null;const o=mt(e,Ot(e)/2);return ae(o[0],o[1],o[2],t.spatialReference)}function si(t){return ae(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function ni(t){const e=t.rings[0];if(!e||e.length===0)return null;const o=bt(t.rings,!!t.hasZ);return ae(o[0],o[1],o[2],t.spatialReference)}function z(t,e,o){const i=o?t:wo(t);return e&&t?yt(t,i,e)?i:null:i}function Wi(t,e,o,i=0){if(t){e||(e=$e());const a=t;let r=.5*a.width*(o-1),l=.5*a.height*(o-1);return a.width<1e-7*a.height?r+=l/20:a.height<1e-7*a.width&&(l+=r/20),St(e,a.xmin-r-i,a.ymin-l-i,a.xmax+r+i,a.ymax+l+i),e}return null}function qi(t,e,o=null){const i=xt(Pt);return t!=null&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),e!=null?i[3]=e:t!=null&&t.length>3&&(i[3]=t[3]),o&&(i[0]*=o,i[1]*=o,i[2]*=o,i[3]*=o),i}function ki(t,e,o,i,a,r=[0,0,0,0]){for(let l=0;l<3;++l)r[l]=(t==null?void 0:t[l])!=null?t[l]:(o==null?void 0:o[l])!=null?o[l]:a[l];return r[3]=e??i??a[3],r}function Yi(t=_t,e,o,i=1){const a=new Array(3);if(e==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let r,l=0;for(let n=2;n>=0;n--){const d=t[n];let s;const v=d!=null,b=n===0&&!r&&!v,p=o[n];d==="symbol-value"||b?s=p!==0?e[n]/p:1:v&&d!=="proportional"&&isFinite(d)&&(s=p!==0?d/p:1),s!=null&&(a[n]=s,r=s,l=Math.max(l,Math.abs(s)))}for(let n=2;n>=0;n--)a[n]==null?a[n]=r:a[n]===0&&(a[n]=.001*l)}for(let r=2;r>=0;r--)a[r]/=i;return $t(a)}function li(t){return t.isPrimitive!=null}function Xi(t){return ci(li(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function ci(t){const e=o=>o==null||o>=0;return Array.isArray(t)?t.every(e):e(t)}function Zi(t,e,o,i=De()){return t&&Et(i,i,-t/180*Math.PI),e&&zt(i,i,e/180*Math.PI),o&&Dt(i,i,o/180*Math.PI),i}function Ji(t,e,o){if(o.minDemResolution!=null)return o.minDemResolution;const i=Ct(e),a=At(t)*i,r=Tt(t)*i,l=wt(t)*(e.isGeographic?1:i);return a===0&&r===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(a,r,l)}class pi extends ke{intersect(e,o,i,a,r,l){return to(e,i,a,r,void 0,l)}}function st(t){const e=new Ve,{vertex:o,fragment:i,attributes:a,varyings:r}=e;Re(o,t),e.include(fo,t),e.include(ho,t),e.include(Me,t),e.include(Ue,t),a.add(h.POSITION,"vec3"),t.vvColor&&a.add(h.COLORFEATUREATTRIBUTE,"float"),r.add("vColor","vec4"),r.add("vpos","vec3");const l=t.multipassEnabled&&(t.output===g.Color||t.output===g.Alpha);l&&r.add("depth","float"),o.uniforms.add(new R("eColor",s=>s.color));const n=t.output===g.LinearDepth;n&&(e.include(Ut,t),Bt(e),Ht(e)),o.code.add(c`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${n?c`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c`transformPosition(proj, view, vpos);`}
    }
  `),e.include(Le,t),l&&e.include(Ie,t),i.include(Ne);const d=t.output===g.Highlight;return d&&e.include(vo,t),i.code.add(c`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===g.ObjectAndLayerIdColor?c`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.float(q)}) {
      discard;
    }

    ${t.output===g.Alpha?c`fragColor = vec4(fColor.a);`:""}

    ${t.output===g.Color?c`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===_.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${d?c`outputHighlight();`:""};
    ${t.output===g.LinearDepth?c`outputDepth(linearDepth);`:""};
    ${t.output===g.ObjectAndLayerIdColor?c`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const di=Object.freeze(Object.defineProperty({__proto__:null,build:st},Symbol.toStringTag,{value:"Module"}));let nt=class lt extends He{initializeProgram(e){return new Ge(e.rctx,lt.shader.get().build(this.configuration),qe)}_createPipeline(e,o){const i=this.configuration,a=e===_.NONE,r=e===_.FrontFace;return Qe({blending:i.output!==g.Color&&i.output!==g.Alpha||!i.transparent?null:a?yo:Ke(e),culling:So(i.cullFace),depthTest:i.draped?null:{func:xo(e)},depthWrite:i.draped?null:(a||r)&&i.writeDepth?Je:null,colorWrite:et,stencilWrite:i.hasOccludees?Gt:null,stencilTest:i.hasOccludees?o?Wt:qt:null,polygonOffset:a||r?i.polygonOffset?ui:null:Po(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};nt.shader=new Be(di,()=>we(()=>Promise.resolve().then(()=>gi),void 0));const ui={factor:1,units:1};class y extends We{constructor(){super(...arguments),this.output=g.Color,this.cullFace=re.None,this.transparencyPassType=_.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}u([f({count:g.COUNT})],y.prototype,"output",void 0),u([f({count:re.COUNT})],y.prototype,"cullFace",void 0),u([f({count:_.COUNT})],y.prototype,"transparencyPassType",void 0),u([f()],y.prototype,"hasSlicePlane",void 0),u([f()],y.prototype,"hasVertexColors",void 0),u([f()],y.prototype,"transparent",void 0),u([f()],y.prototype,"polygonOffset",void 0),u([f()],y.prototype,"enableOffset",void 0),u([f()],y.prototype,"writeDepth",void 0),u([f()],y.prototype,"hasOccludees",void 0),u([f()],y.prototype,"multipassEnabled",void 0),u([f()],y.prototype,"cullAboveGround",void 0),u([f()],y.prototype,"objectAndLayerIdColorInstanced",void 0),u([f()],y.prototype,"vvColor",void 0),u([f()],y.prototype,"draped",void 0),u([f({constValue:!1})],y.prototype,"occlusionPass",void 0),u([f({constValue:!0})],y.prototype,"hasVvInstancing",void 0),u([f({constValue:!1})],y.prototype,"vvSize",void 0),u([f({constValue:!1})],y.prototype,"vvOpacity",void 0);class Qi extends pi{constructor(e){super(e,new hi),this.supportsEdges=!0,this.produces=new Map([[w.OPAQUE_MATERIAL,o=>o===g.Highlight||K(o)&&!this._isTransparent],[w.OPAQUE_NO_SSAO_DEPTH,o=>o===g.LinearDepth&&this.parameters.writeLinearDepth&&!this._isTransparent],[w.TRANSPARENT_MATERIAL,o=>K(o)&&this._isTransparent&&this.parameters.writeDepth],[w.TRANSPARENT_NO_SSAO_DEPTH,o=>o===g.LinearDepth&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[w.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(K(o)||o===g.LinearDepth&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[w.DRAPED_MATERIAL,o=>kt(o)]]),this._configuration=new y}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Co,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new fi(e)}createBufferWriter(){const e=Ye().vec3f(h.POSITION);return Ee("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4u8(h.COLOR),new go(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class fi extends Yt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==g.Color&&this._output!==g.Alpha||this._updateOccludeeState(e),this.ensureTechnique(nt,e)}}class hi extends Xt{constructor(){super(...arguments),this.color=Te,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=re.None,this.hasOccludees=!1,this.draped=!1}}const vi=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"})),Ki=Object.freeze(Object.defineProperty({__proto__:null,build:Eo,ribbonlineNumRoundJoinSubdivisions:zo},Symbol.toStringTag,{value:"Module"})),ea=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Do,build:Ro},Symbol.toStringTag,{value:"Module"})),ta=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:jo,build:Io},Symbol.toStringTag,{value:"Module"})),gi=Object.freeze(Object.defineProperty({__proto__:null,build:st},Symbol.toStringTag,{value:"Module"}));export{ki as A,Yi as B,qi as F,Xi as I,ta as O,Wi as P,Hi as Q,Ki as R,ci as S,ea as T,Zi as U,Qi as _,Mo as a,Gi as b,No as d,pi as e,Ji as k,se as o,Bo as t};
