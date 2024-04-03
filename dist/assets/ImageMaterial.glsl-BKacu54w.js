function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{y as $}from"./BufferView-CHYzaV9A.js";import{a as O,g as b,P as A,i as S,v as x,o as C,b as l,F as E,e as D,l as w,r as N,m as R,af as V,ag as M,ah as F,n as L,A as f,aG as g,aH as U}from"./Texture-C7A05GrI.js";import{e as v}from"./basicInterfaces-DngWxyLO.js";import{o as z,u as B,r as G,d as j,A as W}from"./VertexColor.glsl-CScvx9pF.js";import{u as H}from"./Material-DwPnlQDw.js";import{o as u,s as k,S as q,A as Q,h as J,l as K,a as X,E as Y,_ as Z,e as ee,f as te}from"./OrderIndependentTransparency-Cua2R8AE.js";import{s as ae}from"./Util-B8vYs4k8.js";import{e as p}from"./VertexAttribute-BnAa5VW0.js";import{c as se}from"./DefaultLayouts-BrmJbx_o.js";import{e as re}from"./ColorMaterial.glsl-uPKQoFFi.js";import{_ as ie,o as i}from"./index-8ERthB3p.js";import{o as c}from"./interfaces-B8ge7Jg9.js";import{r as o}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{R as y}from"./enums-DSseSvdG.js";import"./mat4f64-Dk4dwAN8.js";import"./BindType-BmZEZMMh.js";import"./mat3f64-BBpwCtoL.js";function T(a){const e=new O,{vertex:t,fragment:s}=e;return b(t,a),e.include(z,a),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),a.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),a.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${a.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${a.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(A,a),e.include(S,a),s.uniforms.add(new x("tex",n=>n.texture),new C("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===l.Alpha?s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(E)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(D),s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(E)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class _ extends N{initializeProgram(e){return new R(e.rctx,_.shader.get().build(this.configuration),I)}_setPipelineState(e,t){const s=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return q({blending:s.output!==l.Color&&s.output!==l.Alpha||!s.transparent?null:n?ne:Q(e),culling:J(s.cullFace),depthTest:{func:K(e)},depthWrite:n?s.writeDepth?X:null:Y(e),colorWrite:Z,stencilWrite:s.hasOccludees?V:null,stencilTest:s.hasOccludees?t?M:F:null,polygonOffset:n||d?null:ee(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new w(oe,()=>ie(()=>Promise.resolve().then(()=>ue),void 0));const ne=k(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends L{constructor(){super(...arguments),this.output=l.Color,this.cullFace=v.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:l.COUNT})],r.prototype,"output",void 0),i([o({count:v.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const I=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);class xe extends re{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===l.Highlight||g(t)&&!this.parameters.transparent],[f.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[f.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>U(t)]]),this._vertexAttributeLocations=I,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<te,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new pe(e)}createBufferWriter(){const e=se.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new le(e)}}class pe extends B{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==l.Color&&this._output!==l.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class le extends G{write(e,t,s,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const m=s.attributes.get(h);if(m)if(h===p.PERSPECTIVEDIVIDE){ae(m.size===1);const P=n.getField(h,$);P&&j(m,P,d)}else W(h,m,e,t,n,d)}}}class ce extends H{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=v.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{xe as T};
