import{q as w,dr as g,Z as R,ci as _,dA as C,bU as x,ac as T,g8 as z,ak as F,o as u,y as h,X as $,bO as D,ag as I,P as O}from"./index-8ERthB3p.js";import{g as P,u as q}from"./meshVertexSpaceUtils-KRc33Yrq.js";import{k as U,x as G}from"./hydratedFeatures-DqrDm0_F.js";import{a as W}from"./interfaces-DkjgzG8v.js";import{v as b}from"./elevationInfoUtils-sHEwmo9N.js";import{r as S}from"./drawUtils-C6Di23Hl.js";import{o as m}from"./interfaces-D6pIddIh.js";function V(a,t){let e=null,n=null;return i=>{if(i.action==="cancel")return void(n!=null&&(n.execute({action:"cancel"}),e=null,n=null));const r={action:i.action,screenStart:i.start,screenEnd:i.screenPoint};i.action==="start"&&e==null&&(e=new E,n=new E,t(a,e,n,i.pointerType,r)),e!=null&&e.execute(r),i.action==="end"&&e!=null&&(e=null,n=null)}}function it(a,t){return a.events.on("drag",V(a,t))}function rt(a,t){const e=[a.x,a.y,a.z??0],n=t,i=[Math.cos(n),Math.sin(n)],r=Math.sqrt(i[0]*i[0]+i[1]*i[1]);if(r===0)return null;i[0]/=r,i[1]/=r;const s=o=>{const c=(o.x-e[0])*i[0]+(o.y-e[1])*i[1];o.x=e[0]+c*i[0],o.y=e[1]+c*i[1]};return o=>(s(o.mapStart),s(o.mapEnd),{...o,axis:i})}function X(a){let t=null;return e=>{if(e.action==="start"&&(t=N(a,e.mapStart.spatialReference)),t==null)return null;const n=e.mapEnd.x-e.mapStart.x,i=e.mapEnd.y-e.mapStart.y,r=e.mapEnd.z-e.mapStart.z;return t.move(n,i,r,e.action),{...e,translationX:n,translationY:i,translationZ:r}}}function A(a,t){return a==null?null:a.spatialReference.equals(t)?a.clone():g(a,t)}function N(a,t){const e=a.geometry,n=U(t);if(e==null)return null;if(e.type==="mesh")return Z(a,e,n);const i=A(e,n),r=e.spatialReference;return i==null?null:{move:(s,o,c)=>{const p=S(i.clone(),s,o,c);p.spatialReference.equals(r)?a.geometry=p:a.geometry=g(p,r)}}}function Z(a,t,e){if(P(t.vertexSpace))return H(a,t,t.vertexSpace,e);if(!t.spatialReference.equals(e))return null;let n=0,i=0,r=0;return{move:(s,o,c)=>{const p=s-n,d=o-i,v=c-r;if(p||d||v){const y=new R(t.anchor.x+p,t.anchor.y+d,(t.anchor.z??0)+v,t.anchor.spatialReference);t.centerAt(y),a.notifyGeometryChanged(),n=s,i=o,r=c}}}}function H(a,t,e,n){const i=A(q(t.vertexSpace,t.spatialReference),n),r=t.spatialReference;return i==null?null:{move:(s,o,c,p)=>{const d=S(i.clone(),s,o,c);if(d.spatialReference.equals(r))e.origin=_(d.x,d.y,d.z??0);else{const y=g(d,r);y!=null&&(e.origin=_(y.x,y.y,y.z??0))}const v=p==="end";a.notifyMeshTransformChanged(v?{action:W.UpdateFastLocalOrigin}:{})}}}function ot(a,t=null,e){var s;let n=null;const i=t==null||(s=a.spatialReference)!=null&&s.equals(t)?o=>o:o=>o!=null?g(o,t):o,r={exclude:[],...e};return o=>{if(o.action==="start"&&(n=i(a.toMap(o.screenStart,r))),n==null)return null;const c=i(a.toMap(o.screenEnd,r));return c!=null?{...o,mapStart:n,mapEnd:c}:null}}function st(a){const t=a.map(e=>X(e)).filter(w);return e=>{const n=e.mapEnd.x-e.mapStart.x,i=e.mapEnd.y-e.mapStart.y,r=e.mapEnd.z-e.mapStart.z;return t.forEach(s=>s(e)),{...e,translationX:n,translationY:i,translationZ:r}}}function L(a,t){const e=new Map;for(const n of t)e.set(n,T(a[n]));return n=>(e.forEach((i,r)=>{a[r]=i}),n)}function Y(a){return a.geometry!=null&&a.geometry.type==="mesh"?k(a,a.geometry):L(a,["geometry"])}function k(a,t){var r;const{vertexSpace:e}=t;if(e.type==="georeferenced"){const s=t.vertexAttributes.clonePositional();return o=>(t.vertexAttributes=s,a.notifyGeometryChanged(),o)}const n=C(e.origin),i=(r=t.transform)==null?void 0:r.clone();return s=>(t.transform=i,t.vertexSpace.origin=n,a.notifyMeshTransformChanged(),s)}function lt(a){const t=a.map(e=>Y(e)).filter(e=>e!=null);return e=>(t.forEach(n=>n(e)),e)}function ut(){let a=0,t=0,e=0;return n=>{n.action==="start"&&(a=n.mapStart.x,t=n.mapStart.y,e=n.mapStart.z);const i=n.mapEnd.x-a,r=n.mapEnd.y-t,s=n.mapEnd.z-e;return a=n.mapEnd.x,t=n.mapEnd.y,e=n.mapEnd.z,{...n,mapDeltaX:i,mapDeltaY:r,mapDeltaZ:s,mapDeltaSpatialReference:n.mapStart.spatialReference}}}function ct(){let a=0,t=0;return e=>{e.action==="start"&&(a=e.screenStart.x,t=e.screenStart.y);const n=e.screenEnd.x-a,i=e.screenEnd.y-t;return a=e.screenEnd.x,t=e.screenEnd.y,{...e,screenDeltaX:n,screenDeltaY:i}}}function ht(a,t){let e=null,n=0,i=0;return r=>{var p;if(r.action==="start"&&(e=(p=a.toScreen)==null?void 0:p.call(a,t),e!=null&&(e.x<0||e.x>a.width||e.y<0||e.y>a.height?e=null:(n=r.screenStart.x-e.x,i=r.screenStart.y-e.y))),e==null)return null;const s=x(r.screenEnd.x-n,0,a.width),o=x(r.screenEnd.y-i,0,a.height),c=z(s,o);return r.screenStart=e,r.screenEnd=c,r}}const j=()=>{};class E{constructor(){this.execute=j}next(t,e=new E){return t!=null&&(this.execute=n=>{const i=t(n);i!=null&&e.execute(i)}),e}}function pt(a,t,e=[]){if(a.type==="2d")return i=>i;let n=null;return i=>{i.action==="start"&&(n=a.toMap(i.screenStart,{exclude:e}),n!=null&&(n.z=b(n,a,t)));const r=a.toMap(i.screenEnd,{exclude:e});r!=null&&(r.z=b(r,a,t));const s=n!=null&&r!=null?{sceneStart:n,sceneEnd:r}:null;return{...i,scenePoints:s}}}function M(a,t,e){const n=t.elevationProvider.getElevation(a.x,a.y,a.z??0,a.spatialReference,"scene")??0,i=G(a);return i.z=n,i.hasZ=!0,i.z=b(i,t,e),i}function dt(a,t){if(a.type==="2d")return n=>n;let e=null;return n=>{n.action==="start"&&(e=M(n.mapStart,a,t));const i=M(n.mapEnd,a,t),r=e!=null&&i!=null?{sceneStart:e,sceneEnd:i}:null;return{...n,scenePoints:r}}}var f;(function(a){a[a.WhenToolEditable=0]="WhenToolEditable",a[a.WhenToolNotEditable=1]="WhenToolNotEditable",a[a.Always=2]="Always"})(f||(f={}));class B{constructor(){this._isToolEditable=!0,this._manipulators=new F,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t,e=f.WhenToolEditable){this.addMany([t],e)}addMany(t,e=f.WhenToolEditable){for(const n of t){const i={manipulator:n,visibilityPredicate:e,attached:!1};this._manipulators.add(i),this._attached&&this._updateManipulatorAttachment(i)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.at(e).manipulator===t){const n=this._manipulators.splice(e,1)[0];this._detachManipulator(n);break}}removeAll(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(t=>{this._updateManipulatorAttachment(t)}),this._attached=!0}detach(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach(({manipulator:t})=>t.destroy()),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,n=>{e(n)})}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach(e=>t.push(e.manipulator)),t}intersect(t,e){let n=null,i=Number.MAX_VALUE;return this._manipulators.forEach(({manipulator:r,attached:s})=>{if(!s||!r.interactive)return;const o=r.intersectionDistance(t,e);o!=null&&o<i&&(i=o,n=r)}),n}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return;const e=t.manipulator;e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===f.Always||(this._isToolEditable?t.visibilityPredicate===f.WhenToolEditable:t.visibilityPredicate===f.WhenToolNotEditable)}}let l=class extends D{constructor(t){super(t),this.manipulators=new B,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[m.MANAGER,!0],[m.USER,!0]]),this._creationFinishedResolver=I()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(m.USER)}set editable(t){this.setEditableFlag(m.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){this.view!=null?(this.view.focus(),this.onActivate()):O.getLogger(this).error("Can't activate tool if view is not defined.")}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===m.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){return this._editableFlags.get(t)??!1}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(m.USER)&&this.getEditableFlag(m.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};u([h({constructOnly:!0})],l.prototype,"view",void 0),u([h({readOnly:!0})],l.prototype,"active",null),u([h({value:!0})],l.prototype,"visible",null),u([h({value:!0})],l.prototype,"editable",null),u([h({readOnly:!0})],l.prototype,"manipulators",void 0),u([h({readOnly:!0})],l.prototype,"updating",null),u([h()],l.prototype,"cursor",null),u([h({readOnly:!0})],l.prototype,"automaticManipulatorSelection",void 0),u([h()],l.prototype,"hasFocusedManipulators",null),u([h()],l.prototype,"hasGrabbedManipulators",void 0),u([h()],l.prototype,"hasHoveredManipulators",void 0),u([h()],l.prototype,"firstGrabbedManipulator",void 0),u([h({readOnly:!0})],l.prototype,"created",void 0),u([h({readOnly:!0})],l.prototype,"removeIncompleteOnCancel",void 0),l=u([$("esri.views.interactive.InteractiveToolBase")],l);export{dt as A,ht as C,ut as D,L as M,ct as P,st as R,X as S,E as Y,pt as Z,rt as h,B as i,ot as j,l,lt as q,Y as w,it as x};