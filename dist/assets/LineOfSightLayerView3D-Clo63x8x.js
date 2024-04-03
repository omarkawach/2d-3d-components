function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LineOfSightAnalysisView3D-DTZBy3HU.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/AnalysisView3D-BwgdxIXS.js","assets/LineOfSightAnalysisTarget-CsA1UFD4.js","assets/persistable-DTlPUvTn.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/resourceExtension-5aSW4bDb.js","assets/UpdatingHandles-ugzlsvZF.js","assets/WaterSurface.glsl-JBHYhfkH.js","assets/RenderGeometry-rcUvJmRA.js","assets/vec2f64-Diu2Kaa8.js","assets/vec3f32-Cw9Q6TO_.js","assets/DoubleArray-068mylUp.js","assets/Texture-C7A05GrI.js","assets/interfaces-B8ge7Jg9.js","assets/BindType-BmZEZMMh.js","assets/Util-B8vYs4k8.js","assets/enums-DSseSvdG.js","assets/Texture-O7Pyotwx.js","assets/VertexAttribute-BnAa5VW0.js","assets/basicInterfaces-DngWxyLO.js","assets/mat3-CqxUQBLP.js","assets/mat3f64-BBpwCtoL.js","assets/mat4f64-Dk4dwAN8.js","assets/ShaderTechniqueConfiguration-D3UbJ2mX.js","assets/doublePrecisionUtils-B0owpBza.js","assets/Material-DwPnlQDw.js","assets/ContentObject-BTgEhnct.js","assets/ViewingMode-Dodu7ZZk.js","assets/vec2-Dt9Foiri.js","assets/requestImageUtils-DP1V3HlH.js","assets/Indices-DP3oX5Sg.js","assets/plane-Du3EYICn.js","assets/quatf64-BrpT0VRp.js","assets/mathUtils-iSLnUy_4.js","assets/sphere-Bf4ezJdT.js","assets/ObjectStack-BPo9QGhV.js","assets/Attribute-B-NAci_J.js","assets/Geometry-CqGtfd4N.js","assets/triangle-CTblFuF6.js","assets/lineSegment-DVvvMBnG.js","assets/computeTranslationToOriginAndRotation-BbJd4iYX.js","assets/ElevationProvider-Bd4qfXCi.js","assets/boundedPlane-CLJ-Xnn_.js","assets/verticalOffsetUtils-BYv4Nk2v.js","assets/orientedBoundingBox-BQvYwCTM.js","assets/quat-DUnoL8dP.js","assets/spatialReferenceEllipsoidUtils-CmEPjh7T.js","assets/hydratedFeatures-DqrDm0_F.js","assets/projectVectorToVector-C3SBBDgz.js","assets/projectPointToVector-qKp-AJ2b.js","assets/axisAngleDegrees-CaSFQR2z.js","assets/weather-D00pIeau.js","assets/RenderState-DaVlEYWY.js","assets/NestedMap-DgiGbX8E.js","assets/frustum-BrAPXuhm.js","assets/Octree-E7a40xr7.js","assets/InterleavedLayout-s3MgOYN8.js","assets/BufferView-CHYzaV9A.js","assets/types-D0PSWh4d.js","assets/OrderIndependentTransparency-Cua2R8AE.js","assets/floatRGBA-CCqnXShd.js","assets/Intersector-8rpRuT_8.js","assets/glUtil-DS73TAjp.js","assets/VertexElementDescriptor-BOD-G50G.js","assets/VertexArrayObject-Cv4RwmVi.js","assets/BufferObject-CaEbWulZ.js","assets/Scheduler-DaHJO6l7.js","assets/signal-DoM1gSF0.js","assets/debugFlags-BbJIqrPU.js","assets/ColorMaterial.glsl-uPKQoFFi.js","assets/VertexColor.glsl-CScvx9pF.js","assets/vec2f32-BbH2jxlN.js","assets/dehydratedFeatures-Cp-_lWz0.js","assets/featureConversionUtils-BzfH5fda.js","assets/OptimizedFeature-CXeSoBCN.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/OptimizedGeometry-DLPswkPy.js","assets/edgeUtils-D8J_3GIe.js","assets/earcut-BqgeR2O3.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/vec3-DPXcG_yS.js","assets/SnappingCandidate-O5eRSE6e.js","assets/triangulationUtils-C0V38kt7.js","assets/deduplicate-j8p9VETP.js","assets/Normals-BAXqRpCA.js","assets/objectResourceUtils-D-wPKn4W.js","assets/devEnvironmentUtils-Blrp8lZ5.js","assets/DefaultMaterial_COLOR_GAMMA-D4SZcGoz.js","assets/resourceUtils-ayGD6aG4.js","assets/symbolColorUtils-B_k_VgHH.js","assets/CIMSymbolHelper-C-U_lWVp.js","assets/BidiEngine-DL33fnW5.js","assets/fontUtils-Dz0hN_7q.js","assets/GeometryUtils-_MjrRDxY.js","assets/enums-BRqP_wXA.js","assets/definitions-B54owTRu.js","assets/mat2d-D9yIh3Tx.js","assets/mat2df32-orApM5a3.js","assets/Rect-CUzevAry.js","assets/BoundingBox-BhuXqU4L.js","assets/cimSymbolUtils-DwzauUMk.js","assets/utils-j-RBNfeR.js","assets/lineStippleUtils-B9K4R8oO.js","assets/projectVectorToPoint-CPW7kXva.js","assets/MeshComponent-BCGFLGQh.js","assets/imageUtils-D1MsbWS6.js","assets/meshVertexSpaceUtils-KRc33Yrq.js","assets/MeshLocalVertexSpace-C8ABjEju.js","assets/georeference-CwPKO8dc.js","assets/interfaces-DkjgzG8v.js","assets/DefaultLayouts-BrmJbx_o.js","assets/webStyleSymbolUtils-BzDS5WjL.js","assets/Intersector-CTjLkyei.js","assets/elevationInfoUtils-sHEwmo9N.js","assets/ElevationQueryTileCache-CV2Fph_A.js","assets/LayerConstants-B33OP6sh.js","assets/ray-CCzLdiTI.js","assets/LineVisualElement-DVtpCq1A.js","assets/Object3DVisualElement-D2TYUCro.js","assets/VisualElement-CI1nOGdz.js","assets/RenderObject-BqR7Zmh-.js","assets/interfaces-D6pIddIh.js","assets/manipulatorUtils-uzcmbeQs.js","assets/LaserlineVisualElement-CzVKEaBL.js","assets/DefaultUI-DIlogOoy.js","assets/jsxFactory-BxQYPm-b.js","assets/screenUtils-BuM_Fswi.js","assets/GraphicsCollection-CKieR40M.js","assets/ReactiveMap-C-O0lKvJ.js","assets/IViewEvents-Bci6PjlS.js","assets/heightModelInfoUtils-CdtST1Ra.js","assets/Viewpoint-CB1GAuK3.js","assets/Cyclical-BY9qISY1.js","assets/mat2df64-CBKYtunK.js","assets/normalizeUtils-Cm7zySIZ.js","assets/normalizeUtilsCommon-DRIluWnF.js","assets/utils-1zmckiYC.js","assets/utils-D-bI9C7C.js","assets/capabilities-C84AMSCg.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-DfZw-NIf.js","assets/accessibleHandler-DsewpcQ5.js","assets/Compass-C-feYp_a.js","assets/utils-DsJqvptN.js","assets/GoTo-BzS22eXk.js","assets/NavigationToggle-QjJqvxo5.js","assets/Zoom-Ct1er6X1.js","assets/ShadedColorMaterial.glsl-CbYoK34J.js","assets/InteractiveToolBase-yKkEJSmV.js","assets/drawUtils-C6Di23Hl.js","assets/Laserlines.glsl-CH220B6j.js","assets/analysisViewUtils-BqEqPSZg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{cr as h,ej as w,s as y,cB as d,gJ as c,fY as _,g0 as V,_ as u,o as a,y as n,X as p}from"./index-8ERthB3p.js";import{n as A}from"./LayerView3D-y7LfmsJ-.js";import{u as f}from"./LayerView-DO6TerBv.js";import"./heightModelInfoUtils-CdtST1Ra.js";import"./UpdatingHandles-ugzlsvZF.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=c(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),V(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-DTZBy3HU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const L=i;export{L as default};
