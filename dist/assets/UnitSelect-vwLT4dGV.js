function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-label-CkrtQ7VS.js","assets/label-ZryjpMoB.js","assets/jsxFactory-BxQYPm-b.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/label2-D3Hkhas-.js","assets/dom-BvFmd0Ey.js","assets/guid-Cgw_FQNn.js","assets/component-CiBiWYk6.js","assets/calcite-option-BKQ8Tpdp.js","assets/observers-hu61Hn6M.js","assets/calcite-select-D8mWwcXY.js","assets/form-DjQ2sEGP.js","assets/interactive-juHwuDyB.js","assets/loadable-C9pgOBpc.js","assets/Validation-BbCdGpug.js","assets/icon-DyzVx5Y-.js","assets/input-message-DJd4uB0t.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{o as s,y as o,X as v,_ as c,fI as m}from"./index-8ERthB3p.js";import{e as b,O as g,r as y,n as i}from"./jsxFactory-BxQYPm-b.js";const n="esri-unit-select",p={base:n,label:`${n}__label`,select:`${n}__select`};let e=class extends g{constructor(l,r){super(l,r),this._onSelectChange=a=>{this.onChange(a.target.value)}}loadDependencies(){return y({label:()=>c(()=>import("./calcite-label-CkrtQ7VS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),option:()=>c(()=>import("./calcite-option-BKQ8Tpdp.js"),__vite__mapDeps([9,2,3,4,10])),select:()=>c(()=>import("./calcite-select-D8mWwcXY.js"),__vite__mapDeps([11,2,3,4,6,7,12,13,5,8,14,10,15,16,17]))})}render(){const{messages:l,options:r,selectLabel:a,value:d,_onSelectChange:u}=this;return i("div",{class:p.base,key:"units"},i("calcite-label",{class:p.label},a,i("calcite-select",{class:p.select,label:a,onCalciteSelectChange:u},r.map(t=>{var _;return i("calcite-option",{key:t,selected:t===d,value:t},m(t)?l.systems[t]:(_=l.units[t])==null?void 0:_.pluralCapitalized)}))))}};s([o()],e.prototype,"options",void 0),s([o()],e.prototype,"onChange",void 0),s([o()],e.prototype,"selectLabel",void 0),s([o()],e.prototype,"value",void 0),s([o(),b("esri/core/t9n/Units")],e.prototype,"messages",void 0),e=s([v("esri.widgets.support.UnitSelect")],e);export{e as n};