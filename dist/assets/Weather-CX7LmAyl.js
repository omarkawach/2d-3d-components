function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-label-CkrtQ7VS.js","assets/label-ZryjpMoB.js","assets/jsxFactory-BxQYPm-b.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/label2-D3Hkhas-.js","assets/dom-BvFmd0Ey.js","assets/guid-Cgw_FQNn.js","assets/component-CiBiWYk6.js","assets/calcite-slider-CEaONAv2.js","assets/form-DjQ2sEGP.js","assets/interactive-juHwuDyB.js","assets/key-wu7cp3Vu.js","assets/loadable-C9pgOBpc.js","assets/locale-czPJjPyG.js","assets/observers-hu61Hn6M.js","assets/math-hDEtwxmJ.js","assets/calcite-button-BGRBzuhy.js","assets/button-Csva0FHl.js","assets/t9n-GCZDzKCw.js","assets/icon-DyzVx5Y-.js","assets/loader-DeANvmkY.js","assets/calcite-checkbox-DkooX0M9.js","assets/calcite-icon-DW07N_Fi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{o as n,y as i,X as _,_ as g,bO as E,cr as S,ej as L,P as V}from"./index-8ERthB3p.js";import{t as W}from"./memoize-DsJmrG76.js";import{n as B,u as D,c as A,a as O,b as P,s as x,d as I}from"./weather-D00pIeau.js";import{i as N,O as T,n as o,r as $,e as R,g as f,l as b}from"./jsxFactory-BxQYPm-b.js";import{e as k}from"./globalCss-DfZw-NIf.js";import{e as z}from"./Heading-BZW3Ifza.js";const y="esri-weather",p={base:y,widgetIcon:N.partlyCloudy,content:`${y}__content`,hasError:`${y}__content--has-error`,selector:`${y}__selector`,options:`${y}__options`,optionsHidden:`${y}__options--hidden`,error:`${y}__error`,warning:`${y}__warning`},H={base:`${`${y}__labeled-slider`}`};var u,c;(function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"})(u||(u={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.NoAtmosphere="no-atmosphere",e.UnsupportedView="unsupported-view"}(c||(c={}));let d=class extends T{constructor(t){super(t),this._onChange=r=>{this.onChange(r.target.value)}}render(){const{label:t}=this;return o("div",{class:H.base},o("calcite-label",{scale:"s"},t,o("calcite-slider",{"aria-label":t,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderChange:this._onChange,onCalciteSliderInput:this._onChange})))}loadDependencies(){return $({label:()=>g(()=>import("./calcite-label-CkrtQ7VS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),slider:()=>g(()=>import("./calcite-slider-CEaONAv2.js"),__vite__mapDeps([9,2,3,4,7,6,10,11,12,5,8,13,14,15,16]))})}};n([i()],d.prototype,"value",void 0),n([i()],d.prototype,"onChange",void 0),n([i()],d.prototype,"disabled",void 0),d=n([_("esri.widgets.Weather.LabeledSlider")],d);let w=class extends E{constructor(e){super(e),this.header=!0}};n([i({type:Boolean,nonNullable:!0})],w.prototype,"header",void 0),w=n([_("esri.widgets.Weather.VisibleElements")],w);const M=w;let h=class extends E{constructor(e){super(e),this.view=null,this._weatherByType={sunny:new B,cloudy:new D,rainy:new A,snowy:new O,foggy:new P},this._settingWeather=!1}initialize(){this.addHandles([S(()=>this.current,e=>{this._settingWeather||e==null||(this._weatherByType={...this._weatherByType,[e.type]:e})},L)])}get state(){const e=this.view;return e!=null&&e.ready?this.error!=null?this.error===c.NotVisible?u.Ready:u.Error:u.Ready:u.Disabled}get weatherByType(){return this._weatherByType}get error(){const e=this.view;return e!=null&&e.ready?e.type!=="3d"?c.UnsupportedView:e.viewingMode==="local"?c.LocalScene:e.environment.atmosphereEnabled?e.environmentManager.weatherVisible?null:c.NotVisible:c.NoAtmosphere:null}get current(){var e;return((e=this._environment)==null?void 0:e.weather)??this._weatherByType.sunny}set current(e){const t=this._environment;t&&(t.weather=e)}get _environment(){const e=this.view;return e!=null&&e.type==="3d"?e.environment:null}setWeatherByType(e){if(!x(e,V.getLogger(this)))return;const t=this._environment;t!=null&&(this._settingWeather=!0,t.weather=this._weatherByType[e],this._settingWeather=!1)}setSnowCoverEnabled(e){const t=this.current;"snowCover"in t&&(t.snowCover=e?"enabled":"disabled")}};n([i()],h.prototype,"view",void 0),n([i()],h.prototype,"state",null),n([i()],h.prototype,"_weatherByType",void 0),n([i()],h.prototype,"weatherByType",null),n([i()],h.prototype,"error",null),n([i()],h.prototype,"current",null),n([i()],h.prototype,"_environment",null),h=n([_("esri.widgets.Weather.WeatherViewModel")],h);const U=h,j={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};let l=class extends T{constructor(e){super(e),this.viewModel=new U,this.headingLevel=4,this.visibleElements=new M,this.iconClass=p.widgetIcon,this.icon=null,this._renderWeatherTypeButton=t=>{const r=this.viewModel,a=this.messages[t].label,s=r.state===u.Disabled,v=!s&&r.current.type===t;return o("calcite-button",{appearance:v?"solid":"outline","aria-checked":v?"true":"false",disabled:s,iconStart:j[t],key:`${t}-type-button`,kind:v?"brand":"neutral",label:a,onclick:()=>{v||r.setWeatherByType(t)},scale:"l",title:a})},this._memoizedCallbacks=W(t=>({onCloudCoverChange:r=>{"cloudCover"in t&&(t.cloudCover=r)},onPrecipitationChange:r=>{"precipitation"in t&&(t.precipitation=r)},onFogStrengthChange:r=>{"fogStrength"in t&&(t.fogStrength=r)},onSnowCoverChange:r=>{this.viewModel.setSnowCoverEnabled(r.target.checked)}}))}render(){const e=this.viewModel.state===u.Disabled;return o("div",{"aria-label":this.messages.widgetLabelAccessible,class:this.classes(p.base,k.widget,e&&k.widgetDisabled),role:"region"},this._renderContent())}loadDependencies(){return $({button:()=>g(()=>import("./calcite-button-BGRBzuhy.js"),__vite__mapDeps([17,18,2,3,4,10,6,7,11,5,8,13,14,12,15,19,20,21])),checkbox:()=>g(()=>import("./calcite-checkbox-DkooX0M9.js"),__vite__mapDeps([22,2,3,4,6,7,10,11,12,5,8,13])),icon:()=>g(()=>import("./calcite-icon-DW07N_Fi.js"),__vite__mapDeps([23,20,2,3,4,6,7,15])),label:()=>g(()=>import("./calcite-label-CkrtQ7VS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))})}get view(){var e;return(e=this.viewModel)==null?void 0:e.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get _errorMessage(){const e=this.messages.error;switch(this.viewModel.error){case c.LocalScene:return e.localScene;case c.NoAtmosphere:return e.noAtmosphere;case c.UnsupportedView:return e.unsupported;default:return null}}get _warningMessage(){var e;return this.viewModel.error===c.NotVisible&&this.view!=null&&((e=this.view)==null?void 0:e.type)==="3d"&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null}_renderContent(){const{headingLevel:e,messages:t,viewModel:r,visibleElements:a}=this,s=this._warningMessage,v=r.current,C=r.state===u.Error;return o(b,null,a.header?o(z,{level:e},t.widgetLabel):null,C?o("div",{class:p.error,key:"error"},this._errorMessage):null,o("div",{class:f({[p.content]:!0,[p.hasError]:C}),key:"content"},o("div",{"aria-label":t.weatherType,class:p.selector,key:"type-selector",role:"radiogroup"},I.map(this._renderWeatherTypeButton)),Object.values(r.weatherByType).map(m=>o("div",{class:f({[p.options]:!0,[p.optionsHidden]:m.type!==(v==null?void 0:v.type)}),key:"options-container"},this._renderOptions(m))),s!=null?this._renderWarning(s):null))}_renderOptions(e){const{viewModel:t,messages:r}=this,a=t.state===u.Disabled,s=this._memoizedCallbacks(e);switch(e.type){case"sunny":return o(d,{disabled:a,key:"sunny-cover",label:r.sunny.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange});case"cloudy":return o(d,{disabled:a,key:"cloudy-cover",label:r.cloudy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange});case"rainy":return o(b,null,o(d,{disabled:a,key:"rainy-cover",label:r.rainy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange}),o(d,{disabled:a,key:"rainy-precipitation",label:r.rainy.precipitation,value:e.precipitation,onChange:s.onPrecipitationChange}));case"snowy":return o(b,null,o(d,{disabled:a,key:"snowy-cloud-cover",label:r.snowy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange}),o(d,{disabled:a,key:"snowy-precipitation",label:r.snowy.precipitation,value:e.precipitation,onChange:s.onPrecipitationChange}),o("calcite-label",{key:"snow-cover",layout:"inline",scale:"s",title:r.snowy.snowCoverTooltip},o("calcite-checkbox",{checked:e.snowCover==="enabled",disabled:a,onCalciteCheckboxChange:s.onSnowCoverChange}),r.snowy.snowCover));case"foggy":return o(d,{disabled:a,key:"foggy-cover",label:r.foggy.fogStrength,value:e.fogStrength,onChange:s.onFogStrengthChange})}}_renderWarning(e){return o("div",{class:p.warning,key:"warning"},o("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),e)}};n([i()],l.prototype,"viewModel",void 0),n([i()],l.prototype,"view",null),n([i()],l.prototype,"headingLevel",void 0),n([i({type:M,nonNullable:!0})],l.prototype,"visibleElements",void 0),n([i()],l.prototype,"iconClass",void 0),n([i()],l.prototype,"icon",void 0),n([i()],l.prototype,"label",null),n([i(),R("esri/widgets/Weather/t9n/Weather")],l.prototype,"messages",void 0),n([i()],l.prototype,"_errorMessage",null),n([i()],l.prototype,"_warningMessage",null),l=n([_("esri.widgets.Weather")],l);const Y=l;export{Y as default};