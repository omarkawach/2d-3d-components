import{dE as n,cd as u,c4 as h,bU as g,js as f,dg as S,bW as x}from"./index-8ERthB3p.js";import{n as _}from"./projectVectorToVector-C3SBBDgz.js";import{c as p}from"./plane-Du3EYICn.js";import{a as v}from"./Object3DVisualElement-D2TYUCro.js";import{A as b,B as z,l as y,o as E,D as I,F as C}from"./RenderGeometry-rcUvJmRA.js";import{e as o}from"./VertexAttribute-BnAa5VW0.js";import{Q as P}from"./ColorMaterial.glsl-uPKQoFFi.js";import"./mat4f64-Dk4dwAN8.js";import"./vec2-Dt9Foiri.js";import"./vec2f64-Diu2Kaa8.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./Texture-C7A05GrI.js";import{v as $,V as M,A as T}from"./LaserlineVisualElement-CzVKEaBL.js";import"./lineSegment-DVvvMBnG.js";import"./sphere-Bf4ezJdT.js";class k extends v{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=n(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=n(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){u(e,this._color)||(h(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){u(e,this._outlineColor)||(h(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material&&this._material.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(e==null)return;const t=e.geometries[0];if(t==null)return;const i=t.getMutableAttribute(o.SIZE).data,r=this._geometrySize;i[0]=r,i[1]=r,e.geometryVertexAttributeUpdated(e.geometries[0],o.SIZE)}get _materialParameters(){var e;return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:b(this._primitive),distanceFieldBoundingBox:w,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:(e=this._texture)==null?void 0:e.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/s}createExternalResources(){this._texture=z(this._primitive,this._preferredTextureSize),this._material=new P(this._materialParameters);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();t!=null&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return g(2*this._geometrySize,16,128)}calculateMapBounds(e){var r;const t=(r=this.object)==null?void 0:r.geometries[0];if(!t)return!1;const i=t.attributes.get(o.POSITION).data;return _(i,this.view.renderCoordsHelper.spatialReference,m,this.view.spatialReference),f(e,m),!0}_createRenderGeometry(){const{geometry:e,_material:t}=this;if(e==null||t==null)return null;const{renderCoordsHelper:i,elevationProvider:r}=this.view,d=y(e,r,E.fromElevationInfo(this.elevationInfo),i),c=S(p.get(),e.x,e.y,d),a=p.get();_(c,e.spatialReference,a,i.spatialReference);const l=this._geometrySize;return I(t,null,a,null,[l,l],[0,0,0,1])}}const s=C,w=[s/2,s/2,1-s/2,1-s/2],m=x(),J=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"})),K=Object.freeze(Object.defineProperty({__proto__:null,build:M,defaultAngleCutoff:T},Symbol.toStringTag,{value:"Module"}));export{J as L,K as a,k as x};