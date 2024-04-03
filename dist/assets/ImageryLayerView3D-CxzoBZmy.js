import{v as s,cs as n,o as d,X as l}from"./index-8ERthB3p.js";import{N as h}from"./DynamicLayerView3D-BApUxaBW.js";import{u}from"./ImageryLayerView-Cf1qWB8Z.js";import"./RenderGeometry-rcUvJmRA.js";import"./vec2f64-Diu2Kaa8.js";import"./vec3f32-Cw9Q6TO_.js";import"./DoubleArray-068mylUp.js";import"./Texture-C7A05GrI.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./Util-B8vYs4k8.js";import"./enums-DSseSvdG.js";import"./Texture-O7Pyotwx.js";import"./VertexAttribute-BnAa5VW0.js";import"./basicInterfaces-DngWxyLO.js";import"./mat3-CqxUQBLP.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import"./doublePrecisionUtils-B0owpBza.js";import"./Material-DwPnlQDw.js";import"./ContentObject-BTgEhnct.js";import"./ViewingMode-Dodu7ZZk.js";import"./vec2-Dt9Foiri.js";import"./requestImageUtils-DP1V3HlH.js";import"./Indices-DP3oX5Sg.js";import"./plane-Du3EYICn.js";import"./quatf64-BrpT0VRp.js";import"./mathUtils-iSLnUy_4.js";import"./sphere-Bf4ezJdT.js";import"./ObjectStack-BPo9QGhV.js";import"./Attribute-B-NAci_J.js";import"./Geometry-CqGtfd4N.js";import"./triangle-CTblFuF6.js";import"./lineSegment-DVvvMBnG.js";import"./computeTranslationToOriginAndRotation-BbJd4iYX.js";import"./ElevationProvider-Bd4qfXCi.js";import"./boundedPlane-CLJ-Xnn_.js";import"./verticalOffsetUtils-BYv4Nk2v.js";import"./orientedBoundingBox-BQvYwCTM.js";import"./quat-DUnoL8dP.js";import"./spatialReferenceEllipsoidUtils-CmEPjh7T.js";import"./hydratedFeatures-DqrDm0_F.js";import"./projectVectorToVector-C3SBBDgz.js";import"./projectPointToVector-qKp-AJ2b.js";import"./axisAngleDegrees-CaSFQR2z.js";import"./weather-D00pIeau.js";import"./RenderState-DaVlEYWY.js";import"./NestedMap-DgiGbX8E.js";import"./frustum-BrAPXuhm.js";import"./Octree-E7a40xr7.js";import"./InterleavedLayout-s3MgOYN8.js";import"./BufferView-CHYzaV9A.js";import"./types-D0PSWh4d.js";import"./OrderIndependentTransparency-Cua2R8AE.js";import"./floatRGBA-CCqnXShd.js";import"./Intersector-8rpRuT_8.js";import"./glUtil-DS73TAjp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-Cv4RwmVi.js";import"./BufferObject-CaEbWulZ.js";import"./Scheduler-DaHJO6l7.js";import"./signal-DoM1gSF0.js";import"./debugFlags-BbJIqrPU.js";import"./LayerView3D-y7LfmsJ-.js";import"./heightModelInfoUtils-CdtST1Ra.js";import"./projectExtentUtils-9sG7uFGp.js";import"./geometryServiceUtils-B-h5lvUN.js";import"./project-7u3NBcq6.js";import"./utils-1zmckiYC.js";import"./utils-D-bI9C7C.js";import"./ImageMaterial.glsl-BKacu54w.js";import"./VertexColor.glsl-CScvx9pF.js";import"./DefaultLayouts-BrmJbx_o.js";import"./ColorMaterial.glsl-uPKQoFFi.js";import"./LayerView-DO6TerBv.js";import"./UpdatingHandles-ugzlsvZF.js";import"./RefreshableLayerView-B0936Ssp.js";import"./layerViewUtils-Bi2wmOiN.js";import"./popupUtils-BHYiW8I-.js";let o=class extends u(h){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=s(async t=>{this.redraw((i,r)=>this._redrawImage(i,r),t)},2e3)}initialize(){this.addHandles([n(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>{var t,i;return(i=(t=this.layer)==null?void 0:t.exportImageServiceParameters)==null?void 0:i.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.renderer},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(t,i,r){i.imageOrCanvasElement?t.image=i.imageOrCanvasElement:(t.image=document.createElement("canvas"),t.pixelData=i.pixelData,await this._redrawImage(t,r))}async _redrawImage(t,i){if(!(t.image instanceof HTMLCanvasElement)||t.pixelData==null)throw new Error;const r=t.image,m=r.getContext("2d"),p=await this.layer.applyRenderer(t.pixelData,{signal:i}),e=this.layer.applyFilter(p).pixelBlock;if(e==null)throw new Error;r.width=e.width,r.height=e.height;const a=m.createImageData(e.width,e.height);a.data.set(e.getAsRGBA()),m.putImageData(a,0,0)}};o=d([l("esri.views.3d.layers.ImageryLayerView3D")],o);const Gt=o;export{Gt as default};