function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-BGRBzuhy.js","assets/button-Csva0FHl.js","assets/jsxFactory-BxQYPm-b.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/form-DjQ2sEGP.js","assets/dom-BvFmd0Ey.js","assets/guid-Cgw_FQNn.js","assets/interactive-juHwuDyB.js","assets/label2-D3Hkhas-.js","assets/component-CiBiWYk6.js","assets/loadable-C9pgOBpc.js","assets/locale-czPJjPyG.js","assets/key-wu7cp3Vu.js","assets/observers-hu61Hn6M.js","assets/t9n-GCZDzKCw.js","assets/icon-DyzVx5Y-.js","assets/loader-DeANvmkY.js","assets/calcite-loader-s-EjqyOZ.js","assets/calcite-tooltip-CCCijpCd.js","assets/floating-ui-azNa5k60.js","assets/debounce-Bd3Yf8RP.js","assets/openCloseComponent-C40eKxzi.js","assets/FloatingArrow-Dv49hS4C.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{o as i,y as a,X as E,j5 as T,s as w,a_ as C,j6 as P,eJ as I,_ as p,j7 as b,P as f}from"./index-8ERthB3p.js";import{e as _,O as N,r as S,n as c,i as $}from"./jsxFactory-BxQYPm-b.js";import{r as A}from"./actions-BEqjg5J0.js";import{b as D}from"./GeolocationPositioning-BGhm_5z8.js";import{p as x}from"./geolocationUtils-DC0Ggqpt.js";import{e as y}from"./globalCss-DfZw-NIf.js";import{e as G}from"./vmEvent-D4Ubqkbq.js";import"./GoTo-BzS22eXk.js";import"./project-7u3NBcq6.js";import"./utils-1zmckiYC.js";import"./utils-D-bI9C7C.js";async function k(){const e=await P("esri/widgets/Locate/t9n/Locate");return new I({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[A.clone()],content:[{type:"fields"}]})}let s=class extends D{constructor(t){super(t),this._locateController=null,this.error=void 0,this.popupEnabled=!0,this.locate=this.locate.bind(this)}initialize(){this.addHandles([T(()=>{var n;const{graphic:t,view:o}=this;if(!t)return;((n=o==null?void 0:o.graphics)==null?void 0:n.includes(t))&&this._updatePopupTemplate(t)})])}destroy(){this.cancelLocate()}get state(){var t;return this._geolocationUsable?(t=this.view)!=null&&t.ready?this._locateController?"locating":this.error!=null?"error":"ready":"disabled":"feature-unsupported"}async locate(){if(this.cancelLocate(),this.state==="disabled")throw new w("locate:disabled-state","Cannot locate when disabled.");if(this.state==="feature-unsupported")throw new w("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const t=new AbortController;this._locateController=t,this.error=void 0;try{const o=await x(this.geolocationOptions);if(await this.updatePosition(o,t),this._locateController!==t)return null;const{graphic:l}=this;return l&&await this._updatePopupTemplate(l),this._addGraphic(),this.emit("locate",{position:o}),this._locateController=null,o}catch(o){if(C(o))return null;throw t===this._locateController&&(this._locateController=null),this.error=o,this.emit("locate-error",{error:o}),o}}cancelLocate(){this._clearGraphic(),this._locateController&&this._locateController.abort(),this._locateController=null}async _updatePopupTemplate(t){if(!this.popupEnabled)return;const o=await k(),l=t!==this.graphic;this.destroyed||l||(t.popupTemplate=o)}};i([a()],s.prototype,"_locateController",void 0),i([a()],s.prototype,"error",void 0),i([a()],s.prototype,"popupEnabled",void 0),i([a({readOnly:!0})],s.prototype,"state",null),i([a()],s.prototype,"locate",null),i([a()],s.prototype,"cancelLocate",null),s=i([E("esri.widgets.Locate.LocateViewModel")],s);const L=s,u={base:"esri-locate",widgetIcon:$.northNavigation},R="gps-off";let r=class extends N{constructor(e,t){super(e,t),this.iconClass=u.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new L,this._locate=()=>{const{viewModel:o}=this;o.state==="locating"?o.cancelLocate():o.locate().catch(()=>{})}}loadDependencies(){return S({button:()=>p(()=>import("./calcite-button-BGRBzuhy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),loader:()=>p(()=>import("./calcite-loader-s-EjqyOZ.js"),__vite__mapDeps([18,17,2,3,4,7])),tooltip:()=>p(()=>import("./calcite-tooltip-CCCijpCd.js"),__vite__mapDeps([19,2,3,4,6,7,20,21,22,23]))})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(e){this.viewModel.geolocationOptions=e}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(e){this.viewModel.goToLocationEnabled=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get graphic(){return this.viewModel.graphic}set graphic(e){this.viewModel.graphic=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(e){this.viewModel.popupEnabled=e}get rotationEnabled(){return b(f.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled}set rotationEnabled(e){b(f.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled=e}get scale(){return this.viewModel.scale}set scale(e){this.viewModel.scale=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){var v;const{viewModel:e,icon:t,iconClass:o}=this,{state:l}=e,n=l==="locating",h=n?this.messagesCommon.cancel:this.messages.title,M=l==="feature-unsupported",d=o===u.widgetIcon?void 0:o,O=d===void 0?R:void 0,g=t==null&&d,m=this._localizeError((v=this.viewModel)==null?void 0:v.error);return c("div",{class:this.classes(u.base,y.widget)},!M&&c("calcite-button",{class:y.widgetButton,disabled:l==="disabled",iconStart:n?void 0:t??O,kind:"neutral",label:h,onclick:this._locate,scale:g?"s":"m",title:h},n?c("calcite-loader",{inline:!0,label:"",scale:"m"}):g?this._renderLegacyIcon(d):null),m?c("calcite-tooltip",{open:!0,overlayPositioning:"fixed",referenceElement:this.container},m):null)}_renderLegacyIcon(e){return c("span",{"aria-hidden":"true",class:e,styles:{display:"flex"}})}_localizeError(e){var t,o,l;return e instanceof GeolocationPositionError?e.code===GeolocationPositionError.PERMISSION_DENIED?(t=this.messages)==null?void 0:t.permissionError:e.code===GeolocationPositionError.TIMEOUT?(o=this.messages)==null?void 0:o.timeoutError:(l=this.messages)==null?void 0:l.positionUnavailable:e instanceof Error?e.message:void 0}};i([a()],r.prototype,"geolocationOptions",null),i([a()],r.prototype,"goToLocationEnabled",null),i([a()],r.prototype,"goToOverride",null),i([a()],r.prototype,"graphic",null),i([a()],r.prototype,"iconClass",void 0),i([a()],r.prototype,"icon",void 0),i([a()],r.prototype,"label",null),i([a(),_("esri/widgets/Locate/t9n/Locate")],r.prototype,"messages",void 0),i([a(),_("esri/t9n/common")],r.prototype,"messagesCommon",void 0),i([a()],r.prototype,"popupEnabled",null),i([a()],r.prototype,"rotationEnabled",null),i([a()],r.prototype,"scale",null),i([a()],r.prototype,"view",null),i([a({type:L}),G(["locate","locate-error"])],r.prototype,"viewModel",void 0),r=i([E("esri.widgets.Locate")],r);const W=r;export{W as default};
