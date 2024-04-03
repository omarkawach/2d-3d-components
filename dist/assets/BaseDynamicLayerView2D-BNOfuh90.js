import{a_ as e,P as a,o,y as p,X as s}from"./index-8ERthB3p.js";import{a as h}from"./BitmapContainer-Cmneaqp9.js";import{m as n}from"./LayerView2D-BSaaWl8y.js";import{v as d}from"./ExportStrategy-D5tWx3Ul.js";import{u}from"./LayerView-DO6TerBv.js";import{i as c}from"./RefreshableLayerView-B0936Ssp.js";import"./WGLContainer-DrWw77ek.js";import"./definitions-B54owTRu.js";import"./LabelMetric-B0IKUycz.js";import"./enums-DSseSvdG.js";import"./enums-BRqP_wXA.js";import"./Texture-O7Pyotwx.js";import"./Program-BB52p2Mx.js";import"./BufferObject-CaEbWulZ.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BhuXqU4L.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-Cv4RwmVi.js";import"./WGLBrushVTLSymbol-DSNnpuOI.js";import"./DefaultUI-DIlogOoy.js";import"./jsxFactory-BxQYPm-b.js";import"./UpdatingHandles-ugzlsvZF.js";import"./screenUtils-BuM_Fswi.js";import"./signal-DoM1gSF0.js";import"./GraphicsCollection-CKieR40M.js";import"./ReactiveMap-C-O0lKvJ.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./heightModelInfoUtils-CdtST1Ra.js";import"./ViewingMode-Dodu7ZZk.js";import"./Viewpoint-CB1GAuK3.js";import"./Cyclical-BY9qISY1.js";import"./mat2d-D9yIh3Tx.js";import"./mat2df32-orApM5a3.js";import"./mat2df64-CBKYtunK.js";import"./mat3-CqxUQBLP.js";import"./vec2-Dt9Foiri.js";import"./vec2f64-Diu2Kaa8.js";import"./normalizeUtils-Cm7zySIZ.js";import"./normalizeUtilsCommon-DRIluWnF.js";import"./utils-1zmckiYC.js";import"./utils-D-bI9C7C.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-DfZw-NIf.js";import"./accessibleHandler-DsewpcQ5.js";import"./Compass-C-feYp_a.js";import"./utils-DsJqvptN.js";import"./GoTo-BzS22eXk.js";import"./NavigationToggle-QjJqvxo5.js";import"./Zoom-Ct1er6X1.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-BlB59bbU.js";import"./DefaultVertexAttributeLayouts-Co_GH1pH.js";import"./DisplayObject-B9oc5ibO.js";import"./TileKey-Drwp1tmy.js";import"./Container-lXzdRU2v.js";import"./EffectView-C6VBe3AA.js";import"./highlightReasons-LsVPCozu.js";import"./Tile-BZM3wEBG.js";import"./quickselect-D0_cvEX6.js";import"./earcut-BqgeR2O3.js";import"./featureConversionUtils-BzfH5fda.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./scaleUtils-0K_Ry6I1.js";import"./ClipRect-tFFfZq22.js";import"./TileInfo-BsGWbS2H.js";import"./TileKey-DZd6gJy7.js";import"./Bitmap-B3-IcBfD.js";import"./TileStrategy-BMTAwxMt.js";import"./QueueProcessor-DFkcFyJt.js";let t=class extends c(n(u)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const Xt=t;export{Xt as default};