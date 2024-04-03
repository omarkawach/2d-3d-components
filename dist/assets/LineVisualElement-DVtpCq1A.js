import{dF as g,dE as y,dg as h,g6 as f,g5 as _,fc as C,bW as n,jm as u}from"./index-8ERthB3p.js";import{c as P}from"./ElevationProvider-Bd4qfXCi.js";import{e as w}from"./mat4f64-Dk4dwAN8.js";import{a as O}from"./Object3DVisualElement-D2TYUCro.js";import{R,b as G}from"./lineStippleUtils-B9K4R8oO.js";import{h as v}from"./Material-DwPnlQDw.js";import{H as E}from"./RenderGeometry-rcUvJmRA.js";function D(d,e,r,s=!1){const t=g(d,e);return t==null?null:(t.hasZ&&!s||r==null||(t.z=P(r,t)??0),t)}function M(d,e,r){r.warnOnce(`Failed to project analysis geometry (id: '${d.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}class S extends O{constructor(e,r){super(e),this._hasExternalMaterial=!1,this._hasExternalMaterial=r!=null,this._material=r??new E({width:1,color:y(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:v.OccludeAndTransparent,isDecoration:!!e.isDecoration,writeDepth:!0}),this.applyProperties(e)}setGeometryFromRenderSpacePoint(e,r=1e3){this.geometry=[[[e[0]-r,e[1],e[2]],[e[0]+r,e[1],e[2]]],[[e[0],e[1]-r,e[2]],[e[0],e[1]+r,e[2]]],[[e[0],e[1],e[2]-r],[e[0],e[1],e[2]+r]]]}setGeometryFromExtent(e){const r=this.view.spatialReference,s=n(),t=n(),i=100,o=[];h(s,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),h(s,e[2],e[1],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),h(s,e[2],e[3],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),h(s,e[0],e[3],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),h(s,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),h(s,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(s,r,t),o.push([t[0],t[1],t[2]]),this.geometry=[o]}setGeometryFromFrustum(e){const r=[];e.lines.forEach(s=>{r.push([s.origin[0],s.origin[1],s.origin[2]]),r.push([s.endpoint[0],s.endpoint[1],s.endpoint[2]])}),this.geometry=[r]}setGeometryFromBoundedPlane(e){const r=[],s=e.origin,t=e.basis1,i=e.basis2,o=.5,a=n(),l=n(),m=n(),p=n();a[0]=s[0]-t[0]*o-i[0]*o,a[1]=s[1]-t[1]*o-i[1]*o,a[2]=s[2]-t[2]*o-i[2]*o,l[0]=s[0]-t[0]*o+i[0]*o,l[1]=s[1]-t[1]*o+i[1]*o,l[2]=s[2]-t[2]*o+i[2]*o,m[0]=s[0]+t[0]*o+i[0]*o,m[1]=s[1]+t[1]*o+i[1]*o,m[2]=s[2]+t[2]*o+i[2]*o,p[0]=s[0]+t[0]*o-i[0]*o,p[1]=s[1]+t[1]*o-i[1]*o,p[2]=s[2]+t[2]*o-i[2]*o,r.push([a[0],a[1],a[2]]),r.push([l[0],l[1],l[2]]),r.push([m[0],m[1],m[2]]),r.push([p[0],p[1],p[2]]),r.push([a[0],a[1],a[2]]),this.geometry=[r]}setGeometryFromSegment(e){const r=e.endRenderSpace;this.transform=f(c,r);const{points:s}=e.createRenderGeometry(r,this.view.renderCoordsHelper);this.geometry=[s]}setGeometryFromSegments(e,r=_){this.transform=f(c,r),this.geometry=e.map(s=>s.createRenderGeometry(r,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return this._geometry==null?null:this._geometry.map(e=>e.map(r=>C(n(),r,this.transform)))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(e){this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(e){this._material.setParameters({width:e})}get color(){return this._material.parameters.color}set color(e){const r=e[3]===1;this._material.setParameters({color:u(e),writeDepth:r})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(e){this._material.setParameters({innerWidth:e})}get innerColor(){return this._material.parameters.innerColor}set innerColor(e){this._material.setParameters({innerColor:e!=null?u(e):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(e){this._material!=null&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(e){this._material.setParameters({stippleOffColor:e!=null?u(e):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(e){this._material.setParameters({stipplePreferContinuous:e})}get falloff(){return this._material.parameters.falloff}set falloff(e){this._material.setParameters({falloff:e})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(e){this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){}destroyExternalResources(){}createGeometries(e){for(const r of R(this.geometry)){const s=G(this._material,r);e.addGeometry(s)}}forEachExternalMaterial(e){this._hasExternalMaterial||e(this._material)}}const c=w();export{S as f,D as r,M as t};
