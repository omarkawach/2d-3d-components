function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-BGRBzuhy.js","assets/button-Csva0FHl.js","assets/jsxFactory-BxQYPm-b.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/form-DjQ2sEGP.js","assets/dom-BvFmd0Ey.js","assets/guid-Cgw_FQNn.js","assets/interactive-juHwuDyB.js","assets/label2-D3Hkhas-.js","assets/component-CiBiWYk6.js","assets/loadable-C9pgOBpc.js","assets/locale-czPJjPyG.js","assets/key-wu7cp3Vu.js","assets/observers-hu61Hn6M.js","assets/t9n-GCZDzKCw.js","assets/icon-DyzVx5Y-.js","assets/loader-DeANvmkY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{o as e,y as i,X as u,bO as h,f_ as w,_ as g}from"./index-8ERthB3p.js";import{e as z,O as Z,r as O,n as m,i as _}from"./jsxFactory-BxQYPm-b.js";import{e as p}from"./globalCss-DfZw-NIf.js";let r=class extends h{get canZoomIn(){var n,s,d;if(!((n=this.view)==null?void 0:n.ready))return!1;const o=(d=(s=this.view)==null?void 0:s.constraints)==null?void 0:d.effectiveMaxScale;return o===0||this._scale>o}get canZoomOut(){var s;const{view:t}=this;if(!(t==null?void 0:t.ready))return!1;const n=(s=t.constraints)==null?void 0:s.effectiveMinScale;return n===0||this._scale<n}get _scale(){var o,n,s;const t=(n=(o=this.view)==null?void 0:o.animation)==null?void 0:n.target;return(t&&"then"in t||t==null?void 0:t.scale)??((s=this.view)==null?void 0:s.scale)??0}};e([i({readOnly:!0})],r.prototype,"canZoomIn",null),e([i({readOnly:!0})],r.prototype,"canZoomOut",null),e([i()],r.prototype,"view",void 0),e([i()],r.prototype,"_scale",null),r=e([u("esri.widgets.Zoom.ZoomConditions2D")],r);const I=r;let c=class extends h{get canZoomIn(){return!!this.view.ready}get canZoomOut(){return!!this.view.ready}};e([i({readOnly:!0})],c.prototype,"canZoomIn",null),e([i({readOnly:!0})],c.prototype,"canZoomOut",null),e([i()],c.prototype,"view",void 0),c=e([u("esri.widgets.Zoom.ZoomConditions3D")],c);const b=c;let l=class extends h{constructor(o){super(o)}destroy(){this.view=null}get canZoomIn(){return this._zoomConditions!=null&&this._zoomConditions.canZoomIn}get canZoomOut(){var o;return this._zoomConditions!=null&&((o=this._zoomConditions)==null?void 0:o.canZoomOut)}get state(){var o;return(o=this.view)!=null&&o.ready?"ready":"disabled"}set view(o){o?o.type==="2d"?this._zoomConditions=new I({view:o}):o.type==="3d"&&(this._zoomConditions=new b({view:o})):this._zoomConditions=null,this._set("view",o)}zoomIn(){if(!this.canZoomIn)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomIn():w(o.goTo({zoomFactor:2}))}zoomOut(){if(!this.canZoomOut)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomOut():w(o.goTo({zoomFactor:.5}))}};e([i()],l.prototype,"_zoomConditions",void 0),e([i()],l.prototype,"canZoomIn",null),e([i()],l.prototype,"canZoomOut",null),e([i({readOnly:!0})],l.prototype,"state",null),e([i()],l.prototype,"view",null),l=e([u("esri.widgets.Zoom.ZoomViewModel")],l);const y=l,v={base:"esri-zoom",widgetIcon:_.zoomInMagnifyingGlass,horizontalLayout:"esri-zoom--horizontal"};let a=class extends Z{constructor(t,o){super(t,o),this.iconClass=v.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new y,this.zoomIn=()=>this.viewModel.zoomIn(),this.zoomOut=()=>this.viewModel.zoomOut()}loadDependencies(){return O({button:()=>g(()=>import("./calcite-button-BGRBzuhy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))})}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}set layout(t){t!=="horizontal"&&(t="vertical"),this._set("layout",t)}set view(t){this.viewModel.view=t}get view(){return this.viewModel.view}render(){const t={[v.horizontalLayout]:this.layout==="horizontal"},{canZoomIn:o,canZoomOut:n}=this.viewModel,{zoomIn:s,zoomOut:d}=this.messages;return m("div",{class:this.classes(v.base,p.widget,t)},m("calcite-button",{class:p.widgetButton,disabled:!o,iconStart:"plus",kind:"neutral",label:s,onclick:this.zoomIn,title:s}),m("calcite-button",{class:p.widgetButton,disabled:!n,iconStart:"minus",kind:"neutral",label:d,onclick:this.zoomOut,title:d}))}};e([i()],a.prototype,"iconClass",void 0),e([i()],a.prototype,"icon",void 0),e([i()],a.prototype,"label",null),e([i({value:"vertical"})],a.prototype,"layout",null),e([i(),z("esri/widgets/Zoom/t9n/Zoom")],a.prototype,"messages",void 0),e([i()],a.prototype,"view",null),e([i({type:y})],a.prototype,"viewModel",void 0),a=e([u("esri.widgets.Zoom")],a);const x=a;export{x as default};