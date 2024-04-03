function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/basis_transcoder-TwdTFZEo.js","assets/_commonjsHelpers-DCkdB7M8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{bT as me,bS as pt,gh as ge,s as ze,P as gt,fG as we,bI as Kt,bW as v,ci as He,dg as z,cj as N,g4 as Qt,bU as Ue,dj as Ke,di as _t,dl as Yt,g_ as D,g5 as Ge,kL as fe,o as Z,bO as Zt,hH as Jt,jT as er,jR as tr,jS as rr,fu as ar,j1 as nr,fv as or,g7 as ir,p2 as Qe,fc as Ce,dm as Tt,bR as St,c5 as Ye,_ as sr,dO as lr,bE as cr,ey as Ze,m_ as ur,dd as Q,nZ as Y,a0 as Je,nG as dr,cY as mr,c_ as fr,cX as hr}from"./index-8ERthB3p.js";import{o as s,n as _e}from"./interfaces-B8ge7Jg9.js";import{a as d}from"./BindType-BmZEZMMh.js";import{s as Be}from"./Util-B8vYs4k8.js";import{E as vr,O as I,I as h,c as y,G,L as W,D as Le}from"./enums-DSseSvdG.js";import{c as pr,m as J,a as gr,e as _r}from"./Texture-O7Pyotwx.js";import{e as _}from"./VertexAttribute-BnAa5VW0.js";import{a as Tr,N as P,u as ee}from"./basicInterfaces-DngWxyLO.js";import{j as Sr,n as xr}from"./mat3-CqxUQBLP.js";import{e as k}from"./mat3f64-BBpwCtoL.js";import{e as j,o as et}from"./mat4f64-Dk4dwAN8.js";import{r as te,t as Ar}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{o as Er,r as br}from"./doublePrecisionUtils-B0owpBza.js";import{t as $r,h as yr}from"./Material-DwPnlQDw.js";import{o as tt}from"./vec2-Dt9Foiri.js";import{n as Rr}from"./vec2f64-Diu2Kaa8.js";import{t as wr}from"./requestImageUtils-DP1V3HlH.js";import{r as Cr,e as Lr}from"./ContentObject-BTgEhnct.js";function Cn(e,t=!1){return e<=me?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function Ln(e){return pt(e)?e.length<me?e:new Float32Array(e):e.length<me?Array.from(e):e}function Pn(e){return(pt(e)?e.length:e.byteLength/8)<=me?Array.from(e):new Float32Array(e)}function In(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}var x;function Pr(e,t){switch(t.textureCoordinateType){case x.Default:return e.attributes.add(_.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case x.Compressed:return e.attributes.add(_.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case x.Atlas:return e.attributes.add(_.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(_.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:ge(t.textureCoordinateType);case x.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case x.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(x||(x={}));function xt(e){e.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ir(e){e.include(xt),e.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function Fn(e){e.code.add(s`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}let T=class{constructor(t,r,a,n,o=null){if(this.name=t,this.type=r,this.arraySize=o,this.bind={[d.Pass]:null,[d.Draw]:null},n)switch(a){case d.Pass:this.bind[d.Pass]=n;break;case d.Draw:this.bind[d.Draw]=n}}equals(t){return this.type===t.type&&this.name===t.name&&this.arraySize===t.arraySize}},g=class extends T{constructor(t,r){super(t,"vec3",d.Pass,(a,n,o)=>a.setUniform3fv(t,r(n,o)))}};function Fr(e){e.uniforms.add(new g("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function Mr(e){e.uniforms.add(new g("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Nn(e){Fr(e.fragment),Mr(e.fragment),e.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}let Ve=class extends T{constructor(t,r){super(t,"vec2",d.Pass,(a,n,o)=>a.setUniform2fv(t,r(n,o)))}},Dr=class extends T{constructor(t,r){super(t,"vec4",d.Pass,(a,n,o)=>a.setUniform4fv(t,r(n,o)))}},Nr=class extends T{constructor(t,r){super(t,"float",d.Pass,(a,n,o)=>a.setUniform1f(t,r(n,o)))}},B=class extends T{constructor(t,r){super(t,"mat4",d.Pass,(a,n,o)=>a.setUniformMatrix4fv(t,r(n,o)))}};const At=()=>gt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Et=class{constructor(){this._includedModules=new Map}include(t,r){if(this._includedModules.has(t)){const a=this._includedModules.get(t);if(a!==r){At().error("Shader module included multiple times with different configuration.");const n=new Set;for(const o of Object.keys(a))a[o]!==t[o]&&n.add(o);for(const o of Object.keys(t))a[o]!==t[o]&&n.add(o);n.forEach(o=>console.error(`  ${o}: current ${a[o]} new ${t[o]}`))}}else this._includedModules.set(t,r),t(this.builder,r)}},Bn=class extends Et{constructor(){super(...arguments),this.vertex=new rt,this.fragment=new rt,this.attributes=new Hr,this.varyings=new Ur,this.extensions=new Pe,this.constants=new bt,this.outputs=new Fe}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(t){const r=this.extensions.generateSource(t),a=this.attributes.generateSource(t),n=this.varyings.generateSource(t),o=t==="vertex"?this.vertex:this.fragment,i=o.uniforms.generateSource(),l=o.code.generateSource(),c=t==="vertex"?Br:Gr,F=this.constants.generateSource().concat(o.constants.generateSource()),R=this.outputs.generateSource(t);return`#version 300 es
${r.join(`
`)}

${c}

${F.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${n.join(`
`)}

${R.join(`
`)}

${l.join(`
`)}`}generateBindPass(t){const r=new Map;this.vertex.uniforms.entries.forEach(o=>{const i=o.bind[d.Pass];i&&r.set(o.name,i)}),this.fragment.uniforms.entries.forEach(o=>{const i=o.bind[d.Pass];i&&r.set(o.name,i)});const a=Array.from(r.values()),n=a.length;return(o,i)=>{for(let l=0;l<n;++l)a[l](t,o,i)}}generateBindDraw(t){const r=new Map;this.vertex.uniforms.entries.forEach(o=>{const i=o.bind[d.Draw];i&&r.set(o.name,i)}),this.fragment.uniforms.entries.forEach(o=>{const i=o.bind[d.Draw];i&&r.set(o.name,i)});const a=Array.from(r.values()),n=a.length;return(o,i,l)=>{for(let c=0;c<n;++c)a[c](t,o,i,l)}}},Or=class{constructor(){this._entries=new Map}add(...t){for(const r of t)this._add(r)}get(t){return this._entries.get(t)}_add(t){if(t!=null){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new ze(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else At().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(t=>t.arraySize!=null?`uniform ${t.type} ${t.name}[${t.arraySize}];`:`uniform ${t.type} ${t.name};`)}get entries(){return Array.from(this._entries.values())}},zr=class{constructor(){this._entries=new Array}add(t){this._entries.push(t)}generateSource(){return this._entries}},rt=class extends Et{constructor(){super(...arguments),this.uniforms=new Or,this.code=new zr,this.constants=new bt}get builder(){return this}},Hr=class{constructor(){this._entries=new Array}add(t,r){this._entries.push([t,r])}generateSource(t){return t==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},Ur=class{constructor(){this._entries=new Map}add(t,r){this._entries.has(t)&&Be(this._entries.get(t)===r),this._entries.set(t,r)}generateSource(t){const r=new Array;return this._entries.forEach((a,n)=>r.push(t==="vertex"?`out ${a} ${n};`:`in ${a} ${n};`)),r}},Pe=class Ie{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Ie.ALLOWLIST_VERTEX:Ie.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(a=>r.includes(a)).map(a=>`#extension ${a} : enable`)}};Pe.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Pe.ALLOWLIST_VERTEX=[];let Fe=class Me{constructor(){this._entries=new Map}add(t,r,a=0){const n=this._entries.get(a);n?Be(n.name===t&&n.type===r,`Fragment shader output location ${a} occupied`):this._entries.set(a,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Me.DEFAULT_NAME,type:Me.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((a,n)=>r.push(`layout(location = ${n}) out ${a.type} ${a.name};`)),r}};Fe.DEFAULT_TYPE="vec4",Fe.DEFAULT_NAME="fragColor";let bt=class m{constructor(){this._entries=new Set}add(t,r,a){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=m._numberToFloatStr(a);break;case"int":n=m._numberToIntStr(a);break;case"bool":n=a.toString();break;case"vec2":n=`vec2(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])})`;break;case"vec3":n=`vec3(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])},                            ${m._numberToFloatStr(a[2])})`;break;case"vec4":n=`vec4(${m._numberToFloatStr(a[0])},                            ${m._numberToFloatStr(a[1])},                            ${m._numberToFloatStr(a[2])},                            ${m._numberToFloatStr(a[3])})`;break;case"ivec2":n=`ivec2(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])})`;break;case"ivec3":n=`ivec3(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])},                             ${m._numberToIntStr(a[2])})`;break;case"ivec4":n=`ivec4(${m._numberToIntStr(a[0])},                             ${m._numberToIntStr(a[1])},                             ${m._numberToIntStr(a[2])},                             ${m._numberToIntStr(a[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(a,o=>m._numberToFloatStr(o)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${n};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Gr=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Br=`precision highp float;
precision highp sampler2D;`;let ue=class extends T{constructor(t,r){super(t,"sampler2D",d.Pass,(a,n,o)=>a.bindTexture(t,r(n,o)))}},Qn=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Zn=class{constructor(t,r,a){this.release=a,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=we(this._program),this._pipeline=this._configuration=null}reload(t){we(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return vr.TRIANGLES}getPipeline(t,r,a){return this._pipeline}initializeConfiguration(t,r){}},eo=class{constructor(t,r,a){this._context=t,this._locations=a,this._textures=new Map,this._freeTextureUnits=new Kt({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=pr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((r==null?void 0:r.glName)==null){const n=this._textures.get(t);return n&&(this._context.bindTexture(null,n.unit),this._freeTextureUnit(n),this._textures.delete(t)),null}let a=this._textures.get(t);return a==null?(a=this._allocTextureUnit(r),this._textures.set(t,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(t,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){var t;this._context.useProgram(this),this._textures.forEach((r,a)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(a,r.unit)}),(t=this._fragmentUniforms)==null||t.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};var at,nt;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(at||(at={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(nt||(nt={}));const he=16;function ro(e){return Math.ceil(e/he)*he}function ao(e){return Math.floor(e/he)*he}function Vr(e,t){let o=e.width*e.height;if(o<4096)return e instanceof ImageData?$t(e):e;let i=e.width,l=e.height;do i=Math.ceil(i/2),l=Math.ceil(l/2),o=i*l;while(o>1048576||t!=null&&(i>t||l>t));return We(e,i,l)}function Wr(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const a=t/r;return We(e,Math.round(e.width*a),Math.round(e.height*a))}function We(e,t,r){if(e instanceof ImageData)return We($t(e),t,r);const a=document.createElement("canvas");return a.width=t,a.height=r,a.getContext("2d").drawImage(e,0,0,a.width,a.height),a}function $t(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new ze("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}function no(e,t=!0){e.attributes.add(_.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function kr(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function jr(e,t){switch(e.include(Pr,t),t.textureCoordinateType){case x.Default:case x.Compressed:return void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case x.Atlas:return e.include(kr),void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:ge(t.textureCoordinateType);case x.None:case x.COUNT:return}}let E=class extends T{constructor(t,r){super(t,"vec3",d.Draw,(a,n,o,i)=>a.setUniform3fv(t,r(n,o,i)))}},Ae=class extends T{constructor(t,r){super(t,"sampler2D",d.Draw,(a,n,o)=>a.bindTexture(t,r(n,o)))}},so=class{constructor(t){this._material=t.material,this._techniqueRepository=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(t,r){return this._technique=this._techniqueRepository.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return Tr.LOADED}};var S;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(S||(S={}));function co(e,t){const r=e.fragment,a=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===S.Normal&&a&&e.include(jr,t),t.pbrMode!==S.Schematic)if(t.pbrMode!==S.Disabled){if(t.pbrMode===S.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const n=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(n===d.Pass?new ue("texMetallicRoughness",o=>o.textureMetallicRoughness):new Ae("texMetallicRoughness",o=>o.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(n===d.Pass?new ue("texEmission",o=>o.textureEmissive):new Ae("texEmission",o=>o.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(n===d.Pass?new ue("texOcclusion",o=>o.textureOcclusion):new Ae("texOcclusion",o=>o.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),n===d.Pass?r.uniforms.add(new g("emissionFactor",o=>o.emissiveFactor),new g("mrrFactors",o=>o.mrrFactors)):r.uniforms.add(new E("emissionFactor",o=>o.emissiveFactor),new E("mrrFactors",o=>o.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s`applyEmission(${t.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s`applyOcclusion(${t.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function yt(e){e.vertex.code.add(s`const float PI = 3.141592653589793;`),e.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}let uo=class extends T{constructor(t,r){super(t,"bool",d.Pass,(a,n,o)=>a.setUniform1b(t,r(n,o)))}};function fo(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}let Te=class extends T{constructor(t,r){super(t,"mat3",d.Pass,(a,n,o)=>a.setUniformMatrix3fv(t,r(n,o)))}};function vo(e,t){if(!t.multipassEnabled)return;e.fragment.include(Ir),e.fragment.uniforms.add(new ue("terrainDepthTexture",(a,n)=>{var o;return(o=n.multipassTerrain.linearDepth)==null?void 0:o.getTexture()}),new Ve("nearFar",(a,n)=>n.camera.nearFar));const r=t.occlusionPass;e.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?s`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:s`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}let po=class{constructor(){this.cullAboveGround=!1}};var ot;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"})(ot||(ot={}));let Xr=class{constructor(t=v()){this.intensity=t}},qr=class{constructor(t=v(),r=He(.57735,.57735,.57735)){this.intensity=t,this.direction=r}},De=class{constructor(t=v(),r=He(.57735,.57735,.57735),a=!0,n=1,o=1){this.intensity=t,this.direction=r,this.castShadows=a,this.specularStrength=n,this.environmentStrength=o}},Rt=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Kr(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t[a];return r}function Ee(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t;return r}function V(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]+t[a];return r}function wt(e){return(e+1)*(e+1)}function Qr(e){return Ue(Math.floor(Math.sqrt(e)-1),0,2)}function Ct(e,t,r){const a=e[0],n=e[1],o=e[2],i=r||[];return i.length=wt(t),t>=0&&(i[0]=.28209479177),t>=1&&(i[1]=.4886025119*a,i[2]=.4886025119*o,i[3]=.4886025119*n),t>=2&&(i[4]=1.09254843059*a*n,i[5]=1.09254843059*n*o,i[6]=.31539156525*(3*o*o-1),i[7]=1.09254843059*a*o,i[8]=.54627421529*(a*a-n*n)),i}function Yr(e,t){const r=wt(e),a=t||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=r;for(let n=0;n<r;n++)a.r[n]=a.g[n]=a.b[n]=0;return a}function Zr(e,t){const r=Qr(t.r.length);for(const a of e)Qt(Ne,a.direction),Ct(Ne,r,$),Kr($,de),Ee($,a.intensity[0],H),V(t.r,H),Ee($,a.intensity[1],H),V(t.g,H),Ee($,a.intensity[2],H),V(t.b,H);return t}function Jr(e,t){Ct(Ne,0,$);for(const r of e)t.r[0]+=$[0]*de[0]*r.intensity[0]*4*Math.PI,t.g[0]+=$[0]*de[0]*r.intensity[1]*4*Math.PI,t.b[0]+=$[0]*de[0]*r.intensity[2]*4*Math.PI;return t}function ea(e,t,r,a){Yr(t,a),z(r.intensity,0,0,0);let n=!1;const o=ta,i=ra,l=aa;o.length=0,i.length=0,l.length=0;for(const c of e)c instanceof De&&!n?(N(r.direction,c.direction),N(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,n=!0):c instanceof De||c instanceof qr?o.push(c):c instanceof Xr?i.push(c):c instanceof Rt&&l.push(c);Zr(o,a),Jr(i,a);for(const c of l)V(a.r,c.r),V(a.g,c.g),V(a.b,c.b)}const ta=[],ra=[],aa=[],$=[0],H=[0],Ne=v(),de=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let it=class{constructor(){this.color=v(),this.intensity=1}},na=class{constructor(){this.direction=v(),this.ambient=new it,this.diffuse=new it}};const oa=.4;let bo=class{constructor(){this._shOrder=2,this._legacy=new na,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Rt,this._mainLight=new De(v(),He(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(t){ea(t,this._shOrder,this._mainLight,this._sphericalHarmonics),N(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,Ke(this._legacy.diffuse.color,this._mainLight.intensity,r),N(oe,this._legacy.diffuse.color),Ke(oe,oe,oa*this.globalFactor),_t(this._legacy.ambient.color,this._legacy.ambient.color,oe)}copyFrom(t){this._sphericalHarmonics.r=Array.from(t.sh.r),this._sphericalHarmonics.g=Array.from(t.sh.g),this._sphericalHarmonics.b=Array.from(t.sh.b),N(this._mainLight.direction,t.mainLight.direction),N(this._mainLight.intensity,t.mainLight.intensity),this._mainLight.castShadows=t.mainLight.castShadows,this._mainLight.specularStrength=t.mainLight.specularStrength,this._mainLight.environmentStrength=t.mainLight.environmentStrength,this.globalFactor=t.globalFactor,this.noonFactor=t.noonFactor}lerpLighting(t,r,a){if(Yt(this._mainLight.intensity,t.mainLight.intensity,r.mainLight.intensity,a),this._mainLight.environmentStrength=D(t.mainLight.environmentStrength,r.mainLight.environmentStrength,a),this._mainLight.specularStrength=D(t.mainLight.specularStrength,r.mainLight.specularStrength,a),N(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=D(t.globalFactor,r.globalFactor,a),this.noonFactor=D(t.noonFactor,r.noonFactor,a),t.sh.r.length===r.sh.r.length)for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=D(t.sh.r[n],r.sh.r[n],a),this._sphericalHarmonics.g[n]=D(t.sh.g[n],r.sh.g[n],a),this._sphericalHarmonics.b[n]=D(t.sh.b[n],r.sh.b[n],a);else for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=r.sh.r[n],this._sphericalHarmonics.g[n]=r.sh.g[n],this._sphericalHarmonics.b[n]=r.sh.b[n]}};const oe=v();var u;function yo(e){return ia(e)||e===u.Depth||e===u.LinearDepth||e===u.Normal||e===u.ObjectAndLayerIdColor}function ia(e){return e===u.Shadow||e===u.ShadowHighlight||e===u.ShadowExcludeHighlight}function Ro(e){return ca(e)||e===u.Normal}function Lt(e){return e===u.Highlight||e===u.ObjectAndLayerIdColor}function wo(e){return e===u.Color||Lt(e)}function ke(e){return e===u.Color||e===u.Alpha}function Co(e){return ke(e)||e===u.ObjectAndLayerIdColor}function sa(e){return ke(e)||e===u.Highlight}function Lo(e){return sa(e)||e===u.LinearDepth}function la(e){return ke(e)||Lt(e)}function ca(e){return la(e)||e===u.LinearDepth}(function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"})(u||(u={}));function Pt({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let ua=class extends T{constructor(t,r){super(t,"mat4",d.Draw,(a,n,o)=>a.setUniformMatrix4fv(t,r(n,o)))}};function Io(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",Ge):e.uniforms.add(new E("cameraPosition",(r,a)=>z(It,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Fo(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new B("proj",(a,n)=>n.camera.projectionMatrix),new ua("view",(a,n)=>fe(st,n.camera.viewMatrix,a.origin)),new E("localOrigin",a=>a.origin));const r=a=>z(It,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new B("proj",(a,n)=>n.camera.projectionMatrix),new B("view",(a,n)=>fe(st,n.camera.viewMatrix,r(n))),new g("localOrigin",(a,n)=>r(n)))}const st=j(),It=v();function da(e){e.uniforms.add(new B("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function Mo(e){e.uniforms.add(new Nr("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}class Oe extends Ar{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}Z([te()],Oe.prototype,"instancedDoublePrecision",void 0),Z([te()],Oe.prototype,"hasModelTransformation",void 0);const lt=k();function Do(e,t){const r=t.hasModelTransformation,a=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new B("model",o=>o.modelTransformation??et)),e.vertex.uniforms.add(new Te("normalLocalOriginFromModel",o=>(Sr(lt,o.modelTransformation??et),lt)))),t.instanced&&a&&(e.attributes.add(_.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(_.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(_.INSTANCEMODEL,"mat3"),e.attributes.add(_.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;a&&(n.include(Pt,t),n.uniforms.add(new E("viewOriginHi",(o,i)=>Er(z(ie,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),ie)),new E("viewOriginLo",(o,i)=>br(z(ie,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),ie)))),n.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===u.Normal&&(da(n),n.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ie=v();let be=class extends Oe{};Z([te({constValue:!0})],be.prototype,"hasSliceHighlight",void 0),Z([te({constValue:!1})],be.prototype,"hasSliceInVertexProgram",void 0),Z([te({constValue:d.Pass})],be.prototype,"pbrTextureBindType",void 0);function ma(e){e.attributes.add(_.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}let Ft=class extends T{constructor(t,r){super(t,"mat3",d.Draw,(a,n,o)=>a.setUniformMatrix3fv(t,r(n,o)))}};function Mt(e,t){e.include(ma);const r=e.vertex;r.include(Pt,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new g("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new g("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new Te("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new B("transformProjFromView",a=>a.transformProjFromView),new Ft("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new E("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new E("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new g("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let fa=class extends _e{constructor(){super(...arguments),this.transformWorldFromViewTH=v(),this.transformWorldFromViewTL=v(),this.transformViewFromCameraRelativeRS=k(),this.transformProjFromView=j()}},ha=class extends _e{constructor(){super(...arguments),this.transformWorldFromModelRS=k(),this.transformWorldFromModelTH=v(),this.transformWorldFromModelTL=v()}};function ct(e){e.varyings.add("linearDepth","float")}function va(e){e.vertex.uniforms.add(new Ve("nearFar",(t,r)=>r.camera.nearFar))}function pa(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Uo(e,t){const{vertex:r}=e;switch(t.output){case u.Color:if(t.receiveShadows)return ct(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case u.LinearDepth:case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:return e.include(Mt,t),ct(e),va(e),pa(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}const ga={required:[]},Go={required:[u.LinearDepth]},Bo={required:[u.CompositeColor]},Vo={required:[u.Highlight]},Wo={required:[u.Depth,u.Normal]};let Se=class extends Zt{consumes(){return ga}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(t){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(t){return!1}},jo=class extends Se{},qo=class extends Se{constructor(){super(...arguments),this.drapedPriority=0}},Qo=class extends Se{},Zo=class extends Se{};function ei(e){return"prepareTechnique"in e}function ti(e){return"prepareTechniques"in e}var p,ut;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(p||(p={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(ut||(ut={}));class je{constructor(t){this.field=t}}let _a=class extends je{constructor(t){super(t),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[p.Undefined,p.Undefined,p.Undefined]}},Ta=class extends je{constructor(t){super(t),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},Sa=class extends je{constructor(t){super(t),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}};class xa{}function q(e){return e!=null}function U(e){return typeof e=="number"}function xe(e){return typeof e=="string"}function Aa(e){return e==null||xe(e)}function f(e,t){e&&e.push(t)}function Ea(e,t,r,a=j()){const n=e||0,o=t||0,i=r||0;return n!==0&&er(a,a,-n/180*Math.PI),o!==0&&tr(a,a,o/180*Math.PI),i!==0&&rr(a,a,i/180*Math.PI),a}function C(e,t,r,a,n){var l;const o=e.minSize,i=e.maxSize;if(e.expression)return f(n,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const c=a.symbolSize[r];return t.minSize[r]=c,t.maxSize[r]=c,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=p.DefinedSize,!0}if(q(e.field))return q(e.stops)?e.stops.length===2&&U(e.stops[0].size)&&U(e.stops[1].size)?(dt(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=p.DefinedSize,!0):(f(n,"Could not convert size info: stops only supported with 2 elements"),!1):U(o)&&U(i)&&q(e.minDataValue)&&q(e.maxDataValue)?(dt(o,i,e.minDataValue,e.maxDataValue,t,r),t.type[r]=p.DefinedSize,!0):e.valueUnit==="unknown"?(f(n,"Could not convert size info: proportional size not supported"),!1):Qe[e.valueUnit]!=null?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/Qe[e.valueUnit],t.type[r]=p.DefinedSize,!0):(f(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!q(e.field)){if((l=e.stops)!=null&&l[0]&&U(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=p.DefinedSize,!0;if(U(o))return t.minSize[r]=o,t.maxSize[r]=o,t.offset[r]=o,t.factor[r]=0,t.type[r]=p.DefinedSize,!0}return f(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function dt(e,t,r,a,n,o){const i=Math.abs(a-r)>0?(t-e)/(a-r):0;n.minSize[o]=i>0?e:t,n.maxSize[o]=i>0?t:e,n.offset[o]=e-r*i,n.factor[o]=i}function ba(e,t,r,a){if(e.normalizationField||e.valueRepresentation)return f(a,"Could not convert size info: unsupported property"),null;if(!Aa(e.field))return f(a,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return f(a,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new _a(e.field);let n;switch(e.axis){case"width":return n=C(e,t.size,0,r,a),n?t:null;case"height":return n=C(e,t.size,2,r,a),n?t:null;case"depth":return n=C(e,t.size,1,r,a),n?t:null;case"width-and-depth":return n=C(e,t.size,0,r,a),n&&C(e,t.size,1,r,a),n?t:null;case null:case void 0:case"all":return n=C(e,t.size,0,r,a),n=n&&C(e,t.size,1,r,a),n=n&&C(e,t.size,2,r,a),n?t:null;default:return f(a,`Could not convert size info: unknown axis "${e.axis}""`),null}}function $a(e,t,r){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===p.DefinedSize&&(o*=t.modelSize[n],e.type[n]=p.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let a;if(e.type[0]!==p.Undefined)a=0;else if(e.type[1]!==p.Undefined)a=1;else{if(e.type[2]===p.Undefined)return f(r,"No size axis contains a valid size or scale"),!1;a=2}for(let n=0;n<3;++n)e.type[n]===p.Undefined&&(e.minSize[n]=e.minSize[a],e.maxSize[n]=e.maxSize[a],e.offset[n]=e.offset[a],e.factor[n]=e.factor[a],e.type[n]=e.type[a]);return!0}function mt(e,t,r){e[4*t]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function ya(e,t,r){if(e.normalizationField)return f(r,"Could not convert color info: unsupported property"),null;if(xe(e.field)){if(!e.stops)return f(r,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return f(r,"Could not convert color info: too many color stops"),null;t.color=new Ta(e.field);const a=e.stops;for(let n=0;n<8;++n){const o=a[Math.min(n,a.length-1)];t.color.values[n]=o.value,mt(t.color.colors,n,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return f(r,"Could not convert color info: no field and no colors/stops"),null;{const a=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)t.color.values[n]=1/0,mt(t.color.colors,n,a)}}return t}function Ra(e,t,r){if(e.normalizationField)return f(r,"Could not convert opacity info: unsupported property"),null;if(xe(e.field)){if(!e.stops)return f(r,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return f(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new Sa(e.field);const a=e.stops;for(let n=0;n<8;++n){const o=a[Math.min(n,a.length-1)];t.opacity.values[n]=o.value,t.opacity.opacityValues[n]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return f(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const a=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)t.opacity.values[n]=1/0,t.opacity.opacityValues[n]=a}}return t}function $e(e,t,r){const a=r===2&&e.rotationType==="arithmetic";t.offset[r]=a?90:0,t.factor[r]=a?-1:1,t.type[r]=1}function wa(e,t,r){if(!xe(e.field))return f(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return f(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return $e(e,t.rotation,0),t;case"roll":return $e(e,t.rotation,1),t;case null:case void 0:case"heading":return $e(e,t.rotation,2),t;default:return f(r,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}let oi=class{constructor(t,r=[1,1,1],a=[1,1,1],n=1,o=[0,0,0],i=[1,1,1],l=[0,0,0]){this.supports=t,this.modelSize=r,this.symbolSize=a,this.unitInMeters=n,this.anchor=o,this.scale=i,this.rotation=l}};function Dt(e,t,r){if(!e)return null;const a=e.reduce((n,o)=>{if(!n)return n;if(o.valueExpression)return f(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(o.type){case"size":return t.supports.size?ba(o,n,t,r):n;case"color":return t.supports.color?ya(o,n,r):n;case"opacity":return t.supports.opacity?Ra(o,n,r):null;case"rotation":return t.supports.rotation?wa(o,n,r):n;default:return null}},new xa);return!(e.length>0&&a)||a.size||a.color||a.opacity||a.rotation?a!=null&&a.size&&!$a(a.size,t,r)?null:a:null}let Ca=class{constructor(t,r,a){this.visualVariables=t,this.materialParameters=r,this.requiresShaderTransformation=a}};function li(e,t){if(!e||$r.TESTS_DISABLE_FAST_UPDATES)return null;const r=Dt(e.visualVariables,t);return r?new Ca(r,Ot(r,t),!!r.size):null}function ci(e,t,r){if(!t||!e)return!1;const a=e.visualVariables,n=Dt(t.visualVariables,r);return!!n&&!!(se(a.size,n.size,"size")&&se(a.color,n.color,"color")&&se(a.rotation,n.rotation,"rotation")&&se(a.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=Ot(n,r),e.requiresShaderTransformation=!!n.size,!0)}function se(e,t,r){if(!!e!=!!t||e&&e.field!==(t==null?void 0:t.field))return!1;if(e&&r==="rotation"){const a=e,n=t;for(let o=0;o<3;o++)if(a.type[o]!==n.type[o]||a.offset[o]!==n.offset[o]||a.factor[o]!==n.factor[o])return!1}return!0}class Nt extends _e{constructor(t){super(),this.vvSize=(t==null?void 0:t.size)??null,this.vvColor=(t==null?void 0:t.color)??null,this.vvOpacity=(t==null?void 0:t.opacity)??null}}function Ot(e,t){const r=new Nt(e);return r.vvSize&&(r.vvSymbolAnchor=t.anchor,Jt(re),Ea(t.rotation[2],t.rotation[0],t.rotation[1],re),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||k(),xr(r.vvSymbolRotationMatrix,re)),r}function ui(e,t,r){if(!e.vvSize)return r;ar(L,r);const a=e.vvSymbolRotationMatrix;nr(re,a[0],a[1],a[2],0,a[3],a[4],a[5],0,a[6],a[7],a[8],0,0,0,0,1),or(L,L,re);for(let n=0;n<3;++n){const o=e.vvSize.offset[n]+t[0]*e.vvSize.factor[n];ft[n]=Ue(o,e.vvSize.minSize[n],e.vvSize.maxSize[n])}return ir(L,L,ft),fe(L,L,e.vvSymbolAnchor),L}function di(e,t,r){if(!t.vvSize)return z(e,1,1,1),e;for(let a=0;a<3;++a){const n=t.vvSize.offset[a]+r[0]*t.vvSize.factor[a];e[a]=Ue(n,t.vvSize.minSize[a],t.vvSize.maxSize[a])}return e}function mi(e,t){const r=e==null?0:t.attributes[e];return typeof r=="number"&&isFinite(r)?r:0}const L=j(),ft=v(),re=j();let fi=class extends _e{constructor(t){super(),this.slicePlaneLocalOrigin=t}};function vi(e,t){zt(e,t,new g("slicePlaneOrigin",(r,a)=>Bt(t,r,a)),new g("slicePlaneBasis1",(r,a)=>{var n;return ve(t,r,a,(n=a.slicePlane)==null?void 0:n.basis1)}),new g("slicePlaneBasis2",(r,a)=>{var n;return ve(t,r,a,(n=a.slicePlane)==null?void 0:n.basis2)}))}function pi(e,t){zt(e,t,new E("slicePlaneOrigin",(r,a)=>Bt(t,r,a)),new E("slicePlaneBasis1",(r,a)=>{var n;return ve(t,r,a,(n=a.slicePlane)==null?void 0:n.basis1)}),new E("slicePlaneBasis2",(r,a)=>{var n;return ve(t,r,a,(n=a.slicePlane)==null?void 0:n.basis2)}))}function zt(e,t,...r){if(!t.hasSlicePlane){const i=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const a=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?s`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(o)}function Ht(e,t,r){return e.instancedDoublePrecision?z(La,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Ut(e,t){return e!=null?Tt(pe,t.origin,e):t.origin}function Gt(e,t,r){return e.hasSliceTranslatedView?t!=null?fe(Pa,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Bt(e,t,r){if(r.slicePlane==null)return Ge;const a=Ht(e,t,r),n=Ut(a,r.slicePlane),o=Gt(e,a,r);return o!=null?Ce(pe,n,o):n}function ve(e,t,r,a){if(a==null||r.slicePlane==null)return Ge;const n=Ht(e,t,r),o=Ut(n,r.slicePlane),i=Gt(e,n,r);return i!=null?(_t(K,a,o),Ce(pe,o,i),Ce(K,K,i),Tt(K,K,pe)):a}const La=v(),pe=v(),K=v(),Pa=j();function gi(e,t){const r=t.output===u.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a?e.attributes.add(_.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(_.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?a?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),e.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}let Ia=class extends T{constructor(t,r,a){super(t,"vec4",d.Pass,(n,o,i)=>n.setUniform4fv(t,r(o,i)),a)}},Fa=class extends T{constructor(t,r,a){super(t,"float",d.Pass,(n,o,i)=>n.setUniform1fv(t,r(o,i)),a)}},Si=class extends Nt{constructor(){super(...arguments),this.renderOccluded=yr.Occlude,this.isDecoration=!1}};const ye=8;function Ai(e,t){const{vertex:r,attributes:a}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&a.add(_.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new g("vvSizeMinSize",n=>n.vvSize.minSize)),r.uniforms.add(new g("vvSizeMaxSize",n=>n.vvSize.maxSize)),r.uniforms.add(new g("vvSizeOffset",n=>n.vvSize.offset)),r.uniforms.add(new g("vvSizeFactor",n=>n.vvSize.factor)),r.uniforms.add(new Te("vvSymbolRotationMatrix",n=>n.vvSymbolRotationMatrix)),r.uniforms.add(new g("vvSymbolAnchor",n=>n.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",ye),r.uniforms.add(new Fa("vvColorValues",n=>n.vvColor.values,ye),new Ia("vvColorColors",n=>n.vvColor.colors,ye)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}const Ei=.1,bi=.001;function Ma(e,t){switch(t.normalType){case A.Compressed:e.attributes.add(_.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case A.Attribute:e.attributes.add(_.NORMAL,"vec3"),e.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case A.ScreenDerivative:e.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:ge(t.normalType);case A.COUNT:case A.Ground:}}var A;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(A||(A={}));function $i(e,t){switch(t.normalType){case A.Attribute:case A.Compressed:e.include(Ma,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ft("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Te("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case A.Ground:e.include(Mt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case A.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:ge(t.normalType);case A.COUNT:}}let yi=class extends fa{constructor(){super(...arguments),this.transformNormalViewFromGlobal=k()}};class wi extends ha{constructor(){super(...arguments),this.transformNormalGlobalFromModel=k(),this.toMapSpace=St()}}const Ci={func:I.LESS},Li={func:I.ALWAYS},Pi={mask:255},Ii={mask:0},Fi=e=>({function:{func:I.NOTEQUAL,ref:e,mask:e},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.KEEP}}),Mi=e=>({function:{func:I.ALWAYS,ref:e,mask:e},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.REPLACE}}),Di={function:{func:I.ALWAYS,ref:P.OutlineVisualElementMask,mask:P.OutlineVisualElementMask},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.ZERO}},Ni={function:{func:I.ALWAYS,ref:P.OutlineVisualElementMask,mask:P.OutlineVisualElementMask},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.REPLACE}},Oi={function:{func:I.EQUAL,ref:P.OutlineVisualElementMask,mask:P.OutlineVisualElementMask},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.KEEP}},zi={function:{func:I.NOTEQUAL,ref:P.OutlineVisualElementMask,mask:P.OutlineVisualElementMask},operation:{fail:h.KEEP,zFail:h.KEEP,zPass:h.KEEP}};let Hi=class extends T{constructor(t,r){super(t,"int",d.Pass,(a,n,o)=>a.setUniform1i(t,r(n,o)))}};function Da(e){e.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function Gi(e,t){switch(t.output){case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:e.fragment.include(Da),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case u.LinearDepth:e.fragment.include(xt),e.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Bi=3e5,Vi=5e5;function Wi(e){e.fragment.uniforms.add(new Dr("projInfo",(t,r)=>Na(r.camera))),e.fragment.uniforms.add(new Ve("zScale",(t,r)=>Oa(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Na(e){const t=e.projectionMatrix;return t[11]===0?Ye(ht,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):Ye(ht,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const ht=St();function Oa(e){return e.projectionMatrix[11]===0?tt(vt,0,1):tt(vt,1,0)}const vt=Rr();function za(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ki(e,t){const r=e.fragment.code;e.include(yt),t.pbrMode!==S.Normal&&t.pbrMode!==S.Schematic&&t.pbrMode!==S.Simplified&&t.pbrMode!==S.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==S.Normal&&t.pbrMode!==S.Schematic||(e.include(za),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ji(e,t){const r=e.fragment.code;e.include(yt),r.add(s`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}function Ha(){if(Re==null){const e=t=>lr(`esri/libs/basisu/${t}`);Re=sr(()=>import("./basis_transcoder-TwdTFZEo.js"),__vite__mapDeps([0,1])).then(t=>t.b).then(({default:t})=>t({locateFile:e}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Re}let Re;var O;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(O||(O={}));let b=null,le=null;async function Vt(){return le==null&&(le=Ha(),b=await le),le}function Ua(e,t){if(b==null)return e.byteLength;const r=new b.BasisFile(new Uint8Array(e)),a=kt(r)?Wt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),a}function Ga(e,t){if(b==null)return e.byteLength;const r=new b.KTX2File(new Uint8Array(e)),a=jt(r)?Wt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),a}function Wt(e,t,r,a,n){const o=gr(t?y.COMPRESSED_RGBA8_ETC2_EAC:y.COMPRESSED_RGB8_ETC2),i=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*a*o*i)}function kt(e){return e.getNumImages()>=1&&!e.isUASTC()}function jt(e){return e.getFaces()>=1&&e.isETC1S()}async function Ba(e,t,r){b==null&&(b=await Vt());const a=new b.BasisFile(new Uint8Array(r));if(!kt(a))return null;a.startTranscoding();const n=Xt(e,t,a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),(o,i)=>a.getImageTranscodedSizeInBytes(0,o,i),(o,i,l)=>a.transcodeImage(l,0,o,i,0,0));return a.close(),a.delete(),n}async function Va(e,t,r){b==null&&(b=await Vt());const a=new b.KTX2File(new Uint8Array(r));if(!jt(a))return null;a.startTranscoding();const n=Xt(e,t,a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),(o,i)=>a.getImageTranscodedSizeInBytes(o,0,0,i),(o,i,l)=>a.transcodeImage(l,o,0,0,i,0,-1,-1));return a.close(),a.delete(),n}function Xt(e,t,r,a,n,o,i,l){const{compressedTextureETC:c,compressedTextureS3TC:F}=e.capabilities,[R,ne]=c?a?[O.ETC2_RGBA,y.COMPRESSED_RGBA8_ETC2_EAC]:[O.ETC1_RGB,y.COMPRESSED_RGB8_ETC2]:F?a?[O.BC3_RGBA,y.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[O.BC1_RGB,y.COMPRESSED_RGB_S3TC_DXT1_EXT]:[O.RGBA32,G.RGBA],X=t.hasMipmap?r:Math.min(1,r),M=[];for(let w=0;w<X;w++)M.push(new Uint8Array(i(w,R))),l(w,R,M[w]);return t.internalFormat=ne,t.hasMipmap=M.length>1,t.samplingMode=t.hasMipmap?W.LINEAR_MIPMAP_LINEAR:W.LINEAR,t.width=n,t.height=o,new J(e,t,{type:"compressed",levels:M})}const ce=()=>gt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Wa=542327876,ka=131072,ja=4;function Xe(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Xa(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const qa=Xe("DXT1"),Ka=Xe("DXT3"),Qa=Xe("DXT5"),Ya=31,Za=0,Ja=1,en=2,tn=3,rn=4,an=7,nn=20,on=21;function sn(e,t,r){const a=ln(r,t.hasMipmap??!1);if(a==null)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:i,height:l}=a;return t.samplingMode=n.levels.length>1?W.LINEAR_MIPMAP_LINEAR:W.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=i,t.height=l,new J(e,t,n)}function ln(e,t){const r=new Int32Array(e,0,Ya);if(r[Za]!==Wa)return ce().error("Invalid magic number in DDS header"),null;if(!(r[nn]&ja))return ce().error("Unsupported format, must contain a FourCC code"),null;const a=r[on];let n,o;switch(a){case qa:n=8,o=y.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ka:n=16,o=y.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Qa:n=16,o=y.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ce().error("Unsupported FourCC code:",Xa(a)),null}let i=1,l=r[rn],c=r[tn];!(3&l)&&!(3&c)||(ce().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const F=l,R=c;let ne,X;r[en]&ka&&t!==!1&&(i=Math.max(1,r[an]));let M=r[Ja]+4;const w=[];for(let qe=0;qe<i;++qe)X=(l+3>>2)*(c+3>>2)*n,ne=new Uint8Array(e,M,X),w.push(ne),M+=X,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:w},internalFormat:o,width:F,height:R}}class Xi extends Cr{get parameters(){return this._parameters}constructor(t,r){super(),this._data=t,this.type=Lr.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new cr,this._parameters={...un,...r},this._startPreload(t)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(t){t!=null&&(t instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(t,r),this._startPreloadVideoElement(t)):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(Ze(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const a=()=>{t.removeEventListener("canplay",a),t.play()};t.addEventListener("canplay",a)}}}_startPreloadImageElement(t){ur(t.src)||Ze(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}_createDescriptor(t){const r=new _r;return r.wrapMode=this._parameters.wrap??Le.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?W.LINEAR_MIPMAP_LINEAR:W.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?t.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var t;return((t=this._glTexture)==null?void 0:t.usedMemory)||cn(this._data,this._parameters)}load(t){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new J(t,this._createDescriptor(t),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(t,r):r instanceof Image?this._loadFromImageElement(t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r):(Q(r)||Y(r))&&this._parameters.encoding===ee.DDS_ENCODING?this._loadFromDDSData(t,r):(Q(r)||Y(r))&&this._parameters.encoding===ee.KTX2_ENCODING?this._loadFromKTX2(t,r):(Q(r)||Y(r))&&this._parameters.encoding===ee.BASIS_ENCODING?this._loadFromBasis(t,r):Y(r)?this._loadFromPixelData(t,r):Q(r)?this._loadFromPixelData(t,new Uint8Array(r)):null)}_frameUpdate(t,r){return this._glTexture==null||t.readyState<ae.HAVE_CURRENT_DATA||r===t.currentTime?r:(this._glTexture.setData(t),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),t.currentTime)}_loadFromDDSData(t,r){return this._glTexture=sn(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>Va(t,this._createDescriptor(t),r).then(a=>(this._glTexture=a,a)))}_loadFromBasis(t,r){return this._loadAsync(()=>Ba(t,this._createDescriptor(t),r).then(a=>(this._glTexture=a,a)))}_loadFromPixelData(t,r){Be(this._parameters.width>0&&this._parameters.height>0);const a=this._createDescriptor(t);return a.pixelFormat=this._parameters.components===1?G.LUMINANCE:this._parameters.components===3?G.RGB:G.RGBA,a.width=this._parameters.width??0,a.height=this._parameters.height??0,this._glTexture=new J(t,a,r),this._glTexture}_loadFromURL(t,r){return this._loadAsync(async a=>{const n=await wr(r,{signal:a});return Je(a),this._loadFromImage(t,n)})}_loadFromImageElement(t,r){return r.complete?this._loadFromImage(t,r):this._loadAsync(async a=>{const n=await dr(r,r.src,!1,a);return Je(a),this._loadFromImage(t,n)})}_loadFromVideoElement(t,r){return r.readyState>=ae.HAVE_CURRENT_DATA?this._loadFromImage(t,r):this._loadFromVideoElementAsync(t,r)}_loadFromVideoElementAsync(t,r){return this._loadAsync(a=>new Promise((n,o)=>{const i=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),hr(F)},l=()=>{r.readyState>=ae.HAVE_CURRENT_DATA&&(i(),n(this._loadFromImage(t,r)))},c=R=>{i(),o(R||new ze("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const F=mr(a,()=>c(fr()))}))}_loadFromImage(t,r){let a=r;if(!(a instanceof HTMLVideoElement)){const{maxTextureSize:i}=t.parameters;a=this._parameters.downsampleUncompressed?Vr(a,i):Wr(a,i)}const n=qt(a);this._parameters.width=n.width,this._parameters.height=n.height;const o=this._createDescriptor(t);return o.pixelFormat=this._parameters.components===3?G.RGB:G.RGBA,o.width=n.width,o.height=n.height,this._glTexture=new J(t,o,a),this._glTexture}_loadAsync(t){const r=new AbortController;this._loadingController=r;const a=t(r.signal);this._loadingPromise=a;const n=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===a&&(this._loadingPromise=null)};return a.then(n,n),a}unload(){if(this._glTexture=we(this._glTexture),this._loadingController!=null){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}function cn(e,t){if(e==null)return 0;if(Q(e)||Y(e))return t.encoding===ee.KTX2_ENCODING?Ga(e,!!t.mipmap):t.encoding===ee.BASIS_ENCODING?Ua(e,!!t.mipmap):e.byteLength;const{width:r,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?qt(e):t;return(t.mipmap?4/3:1)*r*a*(t.components||4)||0}function qt(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var ae;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(ae||(ae={}));const un={wrap:{s:Le.REPEAT,t:Le.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};export{ga as $,ot as A,no as B,qo as C,Go as D,Vr as E,Ei as F,Vt as G,Ln as H,S as I,Hi as J,T as K,Pr as L,Ai as M,Xi as N,Ma as O,pi as P,$i as Q,A as R,Gi as S,gi as T,va as U,jr as V,Ae as W,Te as X,Fn as Y,Vi as Z,Wo as _,Bn as a,Mt as a$,at as a0,Bi as a1,oa as a2,ki as a3,yt as a4,Fr as a5,Mr as a6,Nn as a7,uo as a8,Da as a9,wo as aA,Si as aB,ro as aC,ao as aD,nt as aE,Xr as aF,ke as aG,sa as aH,fi as aI,ua as aJ,E as aK,la as aL,di as aM,mi as aN,li as aO,ci as aP,oi as aQ,Lo as aR,Zo as aS,ui as aT,In as aU,ye as aV,Ia as aW,Lt as aX,De as aY,qr as aZ,Fi as a_,ma as aa,Do as ab,Uo as ac,co as ad,yi as ae,Pi as af,Ni as ag,Di as ah,wi as ai,Ro as aj,ia as ak,bo as al,po as am,Pn as an,ji as ao,Fa as ap,xt as aq,Mo as ar,ct as as,yo as at,Li as au,zi as av,Ii as aw,Oi as ax,Ci as ay,ca as az,u as b,kr as b0,vi as b1,Mi as b2,Qo as b3,ei as b4,ti as b5,Bo as b6,Vo as b7,fa as b8,ha as b9,Ft as ba,Pt as bb,jo as c,x as d,fo as e,Io as f,Fo as g,Dr as h,vo as i,g as j,bi as k,Qn as l,eo as m,be as n,Nr as o,da as p,Co as q,Zn as r,so as s,Cn as t,pa as u,ue as v,Ir as w,Wi as x,Ve as y,B as z};
