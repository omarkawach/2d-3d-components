import{w as z,s as m,P as k}from"./index-8ERthB3p.js";import{C as x,c as T,P as s,B as M,G as d,A as K,M as g,U as G,L as R,D as q,V as F}from"./enums-DSseSvdG.js";const j=()=>k.getLogger("esri.views.webgl.checkWebGLError");function Z(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const H=!!z("enable-feature:webgl-debug");function $(){return H}function ue(){return H}function S(t){if($()){const e=t.getError();if(e){const i=Z(t,e),a=new Error().stack;j().error(new m("webgl-error","WebGL error occurred",{message:i,stack:a}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function J(t){switch(t){case x.BYTE:case x.UNSIGNED_BYTE:return 1;case x.SHORT:case x.UNSIGNED_SHORT:return 2;case x.FLOAT:case x.INT:case x.UNSIGNED_INT:return 4}}function Q(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function _e(t,e){return t.vertexBuffers[e].usedMemory/ee(t.layout[e])}function ee(t){return t[0].stride}function de(t,e,i,a,r=0){var h;const c=t.gl;t.bindBuffer(i);for(const n of a){const o=e.get(n.name);if(o===void 0){console.warn(`There is no location for vertex attribute '${n.name}' defined.`);continue}const u=r*n.stride;if(n.count<=4)c.vertexAttribPointer(o,n.count,n.type,n.normalized,n.stride,n.offset+u),c.enableVertexAttribArray(o),n.divisor>0&&t.gl.vertexAttribDivisor(o,n.divisor);else if(n.count===9)for(let l=0;l<3;l++)c.vertexAttribPointer(o+l,3,n.type,n.normalized,n.stride,n.offset+12*l+u),c.enableVertexAttribArray(o+l),n.divisor>0&&t.gl.vertexAttribDivisor(o+l,n.divisor);else if(n.count===16)for(let l=0;l<4;l++)c.vertexAttribPointer(o+l,4,n.type,n.normalized,n.stride,n.offset+16*l+u),c.enableVertexAttribArray(o+l),n.divisor>0&&((h=t.gl)==null||h.vertexAttribDivisor(o+l,n.divisor));else console.error("Unsupported vertex attribute element count: "+n.count);if($()){const l=Q(t),_=J(n.type),p=n.offset,E=Math.round(_/p)!==_/p?`. Offset not a multiple of stride. DataType requires ${_} bytes, but descriptor has an offset of ${p}`:"";l&&console.error(`Unable to bind vertex attribute "${n.name}" with baseInstanceOffset ${u}${E}:`,l,n)}}}function pe(t,e,i,a){var c,h,n;const r=t.gl;t.bindBuffer(i);for(const o of a){const u=e.get(o.name);if(o.count<=4)r.disableVertexAttribArray(u),o.divisor&&o.divisor>0&&((c=t.gl)==null||c.vertexAttribDivisor(u,0));else if(o.count===9)for(let l=0;l<3;l++)r.disableVertexAttribArray(u+l),o.divisor&&o.divisor>0&&((h=t.gl)==null||h.vertexAttribDivisor(u+l,0));else if(o.count===16)for(let l=0;l<4;l++)r.disableVertexAttribArray(u+l),o.divisor&&o.divisor>0&&((n=t.gl)==null||n.vertexAttribDivisor(u+l,0));else console.error("Unsupported vertex attribute element count: "+o.count)}t.unbindBuffer(K.ARRAY_BUFFER)}function te(t){switch(t){case d.ALPHA:case d.LUMINANCE:case d.RED:case d.RED_INTEGER:case s.R8:case s.R8I:case s.R8UI:case s.R8_SNORM:case M.STENCIL_INDEX8:return 1;case d.LUMINANCE_ALPHA:case d.RG:case d.RG_INTEGER:case s.RGBA4:case s.R16F:case s.R16I:case s.R16UI:case s.RG8:case s.RG8I:case s.RG8UI:case s.RG8_SNORM:case s.RGB565:case s.RGB5_A1:case M.DEPTH_COMPONENT16:return 2;case d.DEPTH_COMPONENT:case d.RGB:case d.RGB_INTEGER:case s.RGB8:case s.RGB8I:case s.RGB8UI:case s.RGB8_SNORM:case s.SRGB8:case M.DEPTH_COMPONENT24:return 3;case d.DEPTH_STENCIL:case d.DEPTH24_STENCIL8:case d.RGBA:case d.RGBA_INTEGER:case s.RGBA8:case s.R32F:case s.R11F_G11F_B10F:case s.RG16F:case s.R32I:case s.R32UI:case s.RG16I:case s.RG16UI:case s.RGBA8I:case s.RGBA8UI:case s.RGBA8_SNORM:case s.SRGB8_ALPHA8:case s.RGB9_E5:case s.RGB10_A2UI:case s.RGB10_A2:case M.DEPTH_STENCIL:case M.DEPTH_COMPONENT32F:case M.DEPTH24_STENCIL8:return 4;case M.DEPTH32F_STENCIL8:return 5;case s.RGB16F:case s.RGB16I:case s.RGB16UI:return 6;case s.RG32F:case s.RG32I:case s.RG32UI:case s.RGBA16F:case s.RGBA16I:case s.RGBA16UI:return 8;case s.RGB32F:case s.RGB32I:case s.RGB32UI:return 12;case s.RGBA32F:case s.RGBA32I:case s.RGBA32UI:return 16;case T.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.COMPRESSED_R11_EAC:case T.COMPRESSED_SIGNED_R11_EAC:case T.COMPRESSED_RGB8_ETC2:case T.COMPRESSED_SRGB8_ETC2:case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case T.COMPRESSED_RG11_EAC:case T.COMPRESSED_SIGNED_RG11_EAC:case T.COMPRESSED_RGBA8_ETC2_EAC:case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class re{constructor(e=0,i=e){this.width=e,this.height=i,this.target=g.TEXTURE_2D,this.pixelFormat=d.RGBA,this.dataType=G.UNSIGNED_BYTE,this.samplingMode=R.LINEAR,this.wrapMode=q.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function ie(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:te(t.internalFormat)))}class B extends re{constructor(e,i){switch(super(),this.context=e,Object.assign(this,i),this.internalFormat){case s.R16F:case s.R16I:case s.R16UI:case s.R32F:case s.R32I:case s.R32UI:case s.R8_SNORM:case s.R8:case s.R8I:case s.R8UI:this.pixelFormat=d.RED}}static validate(e,i){return new B(e,i)}}const C=4;let se=class f{constructor(e,i=null,a=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a=i;else{const r=B.validate(e,i);if(!r)throw new m("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return ie(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(F.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,i){const a=this._descriptor;if(a.width!==e||a.height!==i){if(this._wasImmutablyAllocated)throw new m("Immutable textures can't be resized!");a.width=e,a.height=i,this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let i=g.TEXTURE_CUBE_MAP_POSITIVE_X;i<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z;i++)this._setData(e,i)}setData(e){this._setData(e)}_setData(e,i){var u;if(!((u=this._descriptor.context)!=null&&u.gl))return;const a=this._descriptor.context.gl;S(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(F.Texture,this)),e===void 0&&(e=null);const r=this._descriptor,c=i??r.target,h=b(c);e===null&&(r.width=r.width||C,r.height=r.height||C,h&&(r.depth=r.depth??1));const n=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),w(r),this._configurePixelStorage(),S(a);const o=this._deriveInternalFormat();if(y(e)){let l="width"in e?e.width:e.codedWidth,_="height"in e?e.height:e.codedHeight;const p=1;e instanceof HTMLVideoElement&&(l=e.videoWidth,_=e.videoHeight),r.width&&r.height,h&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,r.hasMipmap,l,_,p),this._texImage(c,0,o,l,_,p,e),S(a),r.hasMipmap&&this.generateMipmap(),r.width||(r.width=l),r.height||(r.height=_),h&&!r.depth&&(r.depth=p)}else{const{width:l,height:_,depth:p}=r;if(l==null||_==null)throw new m("Width and height must be specified!");if(h&&p==null)throw new m("Depth must be specified!");if(r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,r.hasMipmap,l,_,p),P(e)){const E=e.levels,D=X(c,l,_,p),I=Math.min(D-1,E.length-1);a.texParameteri(r.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,I);const A=o;if(!oe(A))throw new m("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((N,U,V,W)=>{const Y=E[Math.min(N,E.length-1)];this._compressedTexImage(c,N,A,U,V,W,Y)},I)}else this._texImage(c,0,o,l,_,p,e),S(a),r.hasMipmap&&this.generateMipmap()}L(a,this._descriptor),v(a,this._descriptor),ae(this._descriptor.context,this._descriptor),S(a),this._descriptor.context.bindTexture(n,f.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,i,a,r,c,h,n=0){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._descriptor,u=this._deriveInternalFormat(),{context:l,pixelFormat:_,dataType:p,target:E,isImmutable:D}=o;if(D&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");const I=l.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES,!0);(i<0||a<0||r>o.width||c>o.height||i+r>o.width||a+c>o.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:A}=l;n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,n),y(h)?A.texSubImage2D(E,e,i,a,r,c,_,p,h):P(h)?A.compressedTexSubImage2D(E,e,i,a,r,c,u,h.levels[e]):A.texSubImage2D(E,e,i,a,r,c,_,p,h),n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,0),l.bindTexture(I,f.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,i,a,r,c,h,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const u=this._descriptor,l=this._deriveInternalFormat(),{context:_,pixelFormat:p,dataType:E,isImmutable:D,target:I}=u;if(D&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");b(I)||console.warn("Attempting to set 3D texture data on a non-3D texture");const A=_.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);_.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),(i<0||a<0||r<0||c>u.width||h>u.height||n>u.depth||i+c>u.width||a+h>u.height||r+n>u.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:N}=_;if(P(o))o=o.levels[e],N.compressedTexSubImage3D(I,e,i,a,r,c,h,n,l,o);else{const U=o;N.texSubImage3D(I,e,i,a,r,c,h,n,p,E,U)}_.bindTexture(A,f.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new m("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,w(e)}e.samplingMode===R.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=R.LINEAR_MIPMAP_NEAREST):e.samplingMode===R.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=R.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,f.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,w(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,i=e.context.gl;this._samplingModeDirty&&(L(i,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(v(i,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===d.DEPTH_STENCIL&&(this._descriptor.internalFormat=d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case G.FLOAT:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=s.RGBA32F;case d.RGB:return this._descriptor.internalFormat=s.RGB32F;default:throw new m("Unable to derive format")}case G.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=s.RGBA8;case d.RGB:return this._descriptor.internalFormat=s.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===d.DEPTH_STENCIL?d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:i,flipped:a,preMultiplyAlpha:r}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,i,a,r,c,h){const{gl:n}=this._descriptor.context;if(!ne(i))throw new m("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const o=a?X(e,r,c,h):1;if(b(e)){if(h==null)throw new m("Missing depth dimension for 3D texture upload");n.texStorage3D(e,o,i,r,c,h)}else n.texStorage2D(e,o,i,r,c);this._wasImmutablyAllocated=!0}_texImage(e,i,a,r,c,h,n){const o=this._descriptor.context.gl,u=b(e),{isImmutable:l,pixelFormat:_,dataType:p}=this._descriptor;if(l){if(n!=null){const E=n;if(u){if(h==null)throw new m("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,i,0,0,0,r,c,h,_,p,E)}else o.texSubImage2D(e,i,0,0,r,c,_,p,E)}}else{const E=n;if(u){if(h==null)throw new m("Missing depth dimension for 3D texture upload");o.texImage3D(e,i,a,r,c,h,0,_,p,E)}else o.texImage2D(e,i,a,r,c,0,_,p,E)}}_compressedTexImage(e,i,a,r,c,h,n){const o=this._descriptor.context.gl,u=b(e);if(this._descriptor.isImmutable){if(n!=null)if(u){if(h==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,i,0,0,0,r,c,h,a,n)}else o.compressedTexSubImage2D(e,i,0,0,r,c,a,n)}else if(u){if(h==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,i,a,r,c,h,0,n)}else o.compressedTexImage2D(e,i,a,r,c,0,n)}_forEachMipmapLevel(e,i=1/0){let{width:a,height:r,depth:c,hasMipmap:h,target:n}=this._descriptor;const o=n===g.TEXTURE_3D;if(a==null||r==null||o&&c==null)throw new m("Missing texture dimensions for mipmap calculation");for(let u=0;e(u,a,r,c),h&&(a!==1||r!==1||o&&c!==1)&&!(u>=i);++u)a=Math.max(1,a>>1),r=Math.max(1,r>>1),o&&(c=Math.max(1,c>>1))}};function w(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function L(t,e){let i=e.samplingMode,a=e.samplingMode;i===R.LINEAR_MIPMAP_NEAREST||i===R.LINEAR_MIPMAP_LINEAR?(i=R.LINEAR,e.hasMipmap||(a=R.LINEAR)):i!==R.NEAREST_MIPMAP_NEAREST&&i!==R.NEAREST_MIPMAP_LINEAR||(i=R.NEAREST,e.hasMipmap||(a=R.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}function v(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function ae(t,e){const i=t.capabilities.textureFilterAnisotropic;i&&t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function ne(t){return t in s}function oe(t){return t in T}function P(t){return t!=null&&"type"in t&&t.type==="compressed"}function ce(t){return t!=null&&"byteLength"in t}function y(t){return t!=null&&!P(t)&&!ce(t)}function b(t){return t===g.TEXTURE_3D||t===g.TEXTURE_2D_ARRAY}function X(t,e,i,a=1){let r=Math.max(e,i);return t===g.TEXTURE_3D&&(r=Math.max(r,a)),Math.round(Math.log(r)/Math.LN2)+1}se.TEXTURE_UNIT_FOR_UPDATES=0;export{de as E,pe as _,te as a,O as b,$ as c,ue as d,re as e,_e as i,se as m,H as n,Q as o,J as s,S as u};
