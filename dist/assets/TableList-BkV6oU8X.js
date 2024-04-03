function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-action-ZdVFPgt3.js","assets/action-CR32yz_4.js","assets/jsxFactory-BxQYPm-b.js","assets/index-8ERthB3p.js","assets/index-CzRN3C0i.css","assets/dom-BvFmd0Ey.js","assets/guid-Cgw_FQNn.js","assets/interactive-juHwuDyB.js","assets/loadable-C9pgOBpc.js","assets/locale-czPJjPyG.js","assets/key-wu7cp3Vu.js","assets/observers-hu61Hn6M.js","assets/component-CiBiWYk6.js","assets/t9n-GCZDzKCw.js","assets/icon-DyzVx5Y-.js","assets/loader-DeANvmkY.js","assets/calcite-action-group-CkjR39cc.js","assets/action-group-COr3dt9S.js","assets/conditionalSlot-DvaCB6Om.js","assets/action-menu-BfqOv3CZ.js","assets/array-CG_obv_6.js","assets/popover-CVy_TqWd.js","assets/floating-ui-azNa5k60.js","assets/debounce-Bd3Yf8RP.js","assets/focusTrapComponent-DOljTw4q.js","assets/openCloseComponent-C40eKxzi.js","assets/Heading-CWhq9JWU.js","assets/FloatingArrow-Dv49hS4C.js","assets/calcite-action-menu-fEbpeGsu.js","assets/calcite-button-BGRBzuhy.js","assets/button-Csva0FHl.js","assets/form-DjQ2sEGP.js","assets/label2-D3Hkhas-.js","assets/calcite-flow-xQpOKDcb.js","assets/calcite-flow-item-D1TgTmys.js","assets/panel-DgFCqyCW.js","assets/scrim-CkNnGmGz.js","assets/calcite-icon-DW07N_Fi.js","assets/calcite-list-DXRoRXYC.js","assets/utils3-Ckz8Mzud.js","assets/filter-Dr_d0q4i.js","assets/input2-KR1QZnYy.js","assets/Validation-BbCdGpug.js","assets/input-eashyq5M.js","assets/input-message-DJd4uB0t.js","assets/progress-434a5olE.js","assets/calcite-list-item-CEYbVI0q.js","assets/handle-DFlYXJDV.js","assets/calcite-notice-bdrVVIis.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d_ as q,o as s,y as o,X as F,ak as $,gn as Y,go as Z,gp as ee,bO as j,cr as C,gl as D,j4 as R,fb as te,bE as ie,_ as v,j7 as M,P as T}from"./index-8ERthB3p.js";import{t as V,n as se}from"./actionUtils-CxJVN_n7.js";import{i as oe,O as G,n as r,e as H,r as le}from"./jsxFactory-BxQYPm-b.js";import{b as ne,a as ae,t as re,e as de,q as U,i as ce}from"./layerListUtils-DD1BqbFJ.js";import{e as k}from"./globalCss-DfZw-NIf.js";import{e as me}from"./vmEvent-D4Ubqkbq.js";import{e as W}from"./widget-D7hEnZDA.js";import"./substitute-DkE5N3Tl.js";const L="esri-table-list",E=`${L}__item`,p={base:L,widgetIcon:oe.table,filterNoResults:`${L}__filter-no-results`,item:E,itemContent:`${E}-content`,itemContentBottom:`${E}-content-bottom`,itemMessage:`${E}-message`,itemActionIcon:`${E}-action-icon`,itemActionImage:`${E}-action-image`,itemTemporaryIcon:`${E}-temporary-icon`,publishing:`${L}__publishing`,statusIndicator:`${L}__status-indicator`};let b=class extends q(G){constructor(t,i){super(t,i),this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get className(){const{image:t}=this,i=this._getFirstWidget();return this._get("className")||(!t&&i?i.iconClass??"":"")}set className(t){this._override("className",t)}get disabled(){return!(this.content&&this.listItem)}set disabled(t){this._overrideIfSome("disabled",t)}get title(){var t;return this._get("title")||(((t=this._getFirstWidget())==null?void 0:t.label)??"")}set title(t){this._override("title",t)}render(){return r("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(t){const{disabled:i}=this;return!t||i?null:typeof t=="string"?r("div",{innerHTML:t,key:t}):W(t)?r("div",{key:"content-widget"},t.render()):t instanceof HTMLElement?r("div",{afterCreate:this._attachToNode,bind:t,key:"content-element"}):null}_renderContents(){const{content:t}=this;return Array.isArray(t)?t.map(i=>this._renderContent(i)):this._renderContent(t)}_attachToNode(t){t.appendChild(this)}_getWidget(t){return W(t)?t:null}_getFirstWidget(){const{content:t}=this;return Array.isArray(t)?t.map(i=>this._getWidget(i)).find(i=>i):this._getWidget(t)}};s([o()],b.prototype,"className",null),s([o()],b.prototype,"content",void 0),s([o()],b.prototype,"disabled",null),s([o()],b.prototype,"flowEnabled",void 0),s([o()],b.prototype,"image",void 0),s([o()],b.prototype,"listItem",void 0),s([o()],b.prototype,"open",void 0),s([o()],b.prototype,"title",null),s([o()],b.prototype,"visible",void 0),b=s([F("esri.widgets.TableList.ListItemPanel")],b);const z=b;var N;const pe=$.ofType({key:"type",defaultKeyValue:"button",base:Y,typeMap:{button:Z,toggle:ee,slider:ne}}),K=$.ofType(pe),he="esri.widgets.TableList.ListItem";let m=N=class extends q(j){constructor(e){super(e),this.actionsSections=new K,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.panel=null,this.sortable=!0}initialize(){if(this.addHandles([C(()=>this.panel,e=>this._setListItemOnPanel(e),D)]),typeof this.listItemCreatedFunction=="function"){const e={item:this};this.listItemCreatedFunction.call(null,e)}}get error(){var e;return(e=this.layer)==null?void 0:e.loadError}castPanel(e){var t;return(t=this.panel)!=null&&t.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new z(e):null}get publishing(){var i;const{layer:e,checkPublishStatusEnabled:t}=this;return(t&&e&&"publishingInfo"in e&&((i=e.publishingInfo)==null?void 0:i.status)==="publishing")??!1}get title(){var t;const e=R(this,"layer.layer");return(!e||e&&R(this,"layer.layer.loaded")?(t=this.layer)==null?void 0:t.title:null)??""}set title(e){this._overrideIfSome("title",e)}clone(){return new N({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,panel:this.panel,sortable:this.sortable,title:this.title})}_setListItemOnPanel(e){e&&(e.listItem=this)}};s([o({type:K})],m.prototype,"actionsSections",void 0),s([o()],m.prototype,"actionsOpen",void 0),s([o()],m.prototype,"checkPublishStatusEnabled",void 0),s([o({readOnly:!0})],m.prototype,"error",null),s([o()],m.prototype,"hidden",void 0),s([o()],m.prototype,"layer",void 0),s([o()],m.prototype,"listItemCreatedFunction",void 0),s([o({type:z})],m.prototype,"panel",void 0),s([te("panel")],m.prototype,"castPanel",null),s([o({readOnly:!0})],m.prototype,"publishing",null),s([o()],m.prototype,"sortable",void 0),s([o()],m.prototype,"title",null),m=N=s([F(he)],m);const x=m,w={map:"map",tables:"tables",layerListMode:"layer-list-mode"},ue="hide",X=$.ofType(x);let f=class extends ie.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.tableItems=new X,this.map=null}initialize(){this.addHandles([C(()=>{var e;return[this.map,(e=this.map)==null?void 0:e.loadStatus]},()=>this._mapHandles(),D),C(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled],()=>this._recompileList())],w.map)}destroy(){this.map=null,this.tableItems.removeAll()}get state(){const{map:e}=this;if(!e)return"disabled";const t=e==null?void 0:e.loadStatus;return typeof t=="string"?t==="loaded"?"ready":t==="loading"?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_mapHandles(){this.removeHandles(w.tables),!this.map||this.map.loadStatus&&this.map.loadStatus!=="loaded"?this._removeAllItems():this.addHandles(C(()=>{var e,t;return(t=(e=this.map)==null?void 0:e.allTables)==null?void 0:t.toArray()},()=>this._compileList(),D),w.tables)}_removeAllItems(){this.tableItems.removeAll()}_getViewableTables(e){if(e)return e.filter(t=>ae(t)!==ue)}_watchTablesListMode(e){this.removeHandles(w.layerListMode),e&&e.forEach(t=>{this.addHandles(C(()=>t.listMode,()=>this._compileList()),w.layerListMode)})}_compileList(){var i;const e=(i=this.map)==null?void 0:i.tables;this._watchTablesListMode(e);const t=this._getViewableTables(e);t!=null&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:i,checkPublishStatusEnabled:l}=this;e.forEach(n=>{t.some(d=>d.layer===n)||t.add(new x({checkPublishStatusEnabled:l,layer:n,listItemCreatedFunction:i}))})}_removeItems(e){const{tableItems:t}=this;t.forEach(i=>{if(!i)return;(e==null?void 0:e.find(n=>i.layer===n))||t.remove(i)})}_sortItems(e){const{tableItems:t}=this;t.sort((i,l)=>{const n=e.indexOf(i.layer),d=e.indexOf(l.layer);return n>d?-1:n<d?1:0})}_recompileList(){this._removeAllItems(),this._compileList()}};s([o()],f.prototype,"checkPublishStatusEnabled",void 0),s([o()],f.prototype,"listItemCreatedFunction",void 0),s([o({type:X,readOnly:!0})],f.prototype,"tableItems",void 0),s([o()],f.prototype,"map",void 0),s([o({readOnly:!0})],f.prototype,"state",null),s([o()],f.prototype,"totalItems",null),f=s([F("esri.widgets.TableList.TableListViewModel")],f);const J=f;let y=class extends j{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};s([o({type:Boolean,nonNullable:!0})],y.prototype,"closeButton",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"collapseButton",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"errors",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"filter",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"flow",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"heading",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"statusIndicators",void 0),s([o({type:Boolean,nonNullable:!0})],y.prototype,"temporaryTableIndicators",void 0),y=s([F("esri.widgets.TableList.TableListVisibleElements")],y);const Q=y;function S(e){return e["data-item"]}function ge(e,t){e==null||e.sort((i,l)=>{const n=t.indexOf(i.uid),d=t.indexOf(l.uid);return n>d?-1:n<d?1:0})}const _e=$.ofType(x),be="table";let a=class extends G{constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.icon=null,this.iconClass=p.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=re,this.minFilterItems=de,this.selectedItems=new _e,this.selectionMode="none",this.viewModel=new J,this.visibleElements=new Q,this._canMove=({dragEl:i,fromEl:l,toEl:n},d)=>{const h=d==="pull"?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,u=S(i);if(!(u!=null&&u.sortable))return!1;const _=S(l),I=U(l),c=S(n),A=U(n),O=!!I&&!!A&&I===A,P={selected:u,from:_,to:c};return l.group&&n.group&&typeof h=="function"?h.call(null,P):O},this._onCalciteListOrderChange=i=>{var I;const{_lastDragDetail:l}=this,{toEl:n,fromEl:d,dragEl:h,newIndex:u}=i;if(!d||!n||(l==null?void 0:l.newIndex)===u&&(l==null?void 0:l.dragEl)===h&&(l==null?void 0:l.toEl)===n&&(l==null?void 0:l.fromEl)===d)return;this._lastDragDetail=i;const _=Array.from(d.children).filter(c=>c==null?void 0:c.matches("calcite-list-item")).map(c=>c.value);ge((I=this.map)==null?void 0:I.tables,_)}}loadDependencies(){return le({action:()=>v(()=>import("./calcite-action-ZdVFPgt3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),"action-group":()=>v(()=>import("./calcite-action-group-CkjR39cc.js"),__vite__mapDeps([16,17,2,3,4,18,11,8,9,5,6,10,13,19,20,1,7,12,14,15,21,22,23,24,25,26,27])),"action-menu":()=>v(()=>import("./calcite-action-menu-fEbpeGsu.js"),__vite__mapDeps([28,19,2,3,4,20,5,6,10,8,1,7,9,11,12,13,14,15,21,22,23,24,25,26,27])),button:()=>v(()=>import("./calcite-button-BGRBzuhy.js"),__vite__mapDeps([29,30,2,3,4,31,5,6,7,32,12,8,9,10,11,13,14,15])),flow:()=>v(()=>import("./calcite-flow-xQpOKDcb.js"),__vite__mapDeps([33,2,3,4,11,8])),"flow-item":()=>v(()=>import("./calcite-flow-item-D1TgTmys.js"),__vite__mapDeps([34,2,3,4,5,6,7,8,9,10,11,13,35,19,20,1,12,14,15,21,22,23,24,25,26,27,36])),icon:()=>v(()=>import("./calcite-icon-DW07N_Fi.js"),__vite__mapDeps([37,14,2,3,4,5,6,11])),list:()=>v(()=>import("./calcite-list-DXRoRXYC.js"),__vite__mapDeps([38,2,3,4,5,6,7,11,39,8,13,9,10,40,23,14,41,31,32,12,42,43,44,45,15,36])),"list-item":()=>v(()=>import("./calcite-list-item-CEYbVI0q.js"),__vite__mapDeps([46,2,3,4,5,6,7,39,9,10,11,13,8,1,12,14,15,47])),notice:()=>v(()=>import("./calcite-notice-bdrVVIis.js"),__vite__mapDeps([48,2,3,4,18,11,5,6,8,9,10,13,25,12,14]))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return M(T.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode==="multiple"}set multipleSelectionEnabled(e){M(T.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return M(T.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.selectionMode!=="none"&&this.dragEnabled}set selectionEnabled(e){M(T.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var l,n;const e=(l=this.viewModel)==null?void 0:l.state,t={[k.hidden]:e==="loading",[k.disabled]:e==="disabled"},i=(n=this.tableItems)==null?void 0:n.filter(d=>!d.hidden&&(this.visibleElements.errors||!d.error));return r("div",{class:this.classes(p.base,k.widget,k.panel,t)},i!=null&&i.length?this._renderItems(i):this._renderNoItems())}_renderNoItemsMessage(){return r("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return r("div",{class:p.itemMessage,key:"esri-layer-list__no-items"},r("calcite-notice",{icon:"information",kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e==null?void 0:e.toArray().filter(({panel:t})=>(t==null?void 0:t.open)&&!t.disabled&&t.flowEnabled).map(({title:t,panel:i})=>{const l=()=>this._handlePanelFlowItemBack(i);return r("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:n=>{n.preventDefault(),l()}},i.render(),r("calcite-button",{appearance:"transparent",onclick:l,slot:"footer-actions",width:"full"},this.messagesCommon.back))})}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:l,collapseButton:n,heading:d,flow:h},_dragEnabled:u,_filterEnabled:_,selectionMode:I,messages:c,filterPlaceholder:A,filterText:O}=this,P=[r("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!t,collapsed:i,collapsible:n,heading:d?c.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},r("calcite-list",{canPull:g=>this._canMove(g,"pull"),canPut:g=>this._canMove(g,"put"),"data-layer-type":be,dragEnabled:u,filterEnabled:_,filterPlaceholder:A,filterText:_?O:"",group:ce,key:"root-list",label:c.widgetLabel,selectionAppearance:"border",selectionMode:I,onCalciteListChange:g=>this._handleCalciteListChange(g),onCalciteListDragEnd:g=>this._handleCalciteListDragEnd(g.detail),onCalciteListFilter:g=>{var B;return this.filterText=((B=g.target)==null?void 0:B.filterText)??""},onCalciteListOrderChange:g=>this._onCalciteListOrderChange(g.detail)},e==null?void 0:e.toArray().map(g=>this._renderItem(g)),e!=null&&e.length&&_?r("div",{class:p.filterNoResults,slot:"filter-no-results"},r("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?h?r("calcite-flow",{key:"root-flow"},P):P:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:l}=e;t.insertBefore(i,t.children[l])}_renderItemMessage(e){return e.error?r("div",{class:p.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},r("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},r("div",{slot:"message"},this.messages.tableError))):null}_renderItem(e){var _,I;const{_selectedDragItemLayerUid:t,selectionMode:i,selectedItems:l,messages:n}=this,d=e.title||n.untitledTable,h=this._filterActions(e.actionsSections),u=this._countActions(h);return r("calcite-list-item",{afterCreate:c=>this._focusSelectedDragEl(c,e),afterUpdate:c=>this._focusSelectedDragEl(c,e),class:p.item,"data-item":e,dragDisabled:!e.sortable,dragSelected:e.layer.uid===t,id:(_=e.layer)==null?void 0:_.uid,key:`list-item-${e.layer.uid}`,label:d,metadata:{title:d},selected:i!=="none"&&l.includes(e),title:d,value:(I=e.layer)==null?void 0:I.uid,onCalciteListItemDragHandleChange:c=>this._handleCalciteListItemDragHandleChange(c,e)},r("div",{class:p.itemContent,slot:"content"},d),this._renderItemStatus(e),this._renderItemTemporaryIcon(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),u>1?this._renderActionsSections(e,h):u===1?this._renderAction({item:e,action:this._getSingleActionButton(h),textEnabled:!1}):null)}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryTableIndicators&&!e.layer.persistenceEnabled?r("calcite-icon",{class:p.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemStatus(e){const{visibleElements:t}=this;if(!t.statusIndicators)return null;const{publishing:i}=e;return r("calcite-icon",{class:this.classes({[p.statusIndicator]:!0,[p.publishing]:i}),icon:"stop-square",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(e){return!(e!=null&&e.open)||e.disabled||e.flowEnabled?null:r("div",{class:p.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!(e!=null&&e.visible))return null;const{open:t,title:i,disabled:l}=e;return r("calcite-action",{active:t,appearance:"transparent",disabled:l,icon:V(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return r("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:i=>e.actionsOpen=i.target.open},r("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:this.messagesCommon.options,title:this.messagesCommon.options}),t.toArray().map((i,l)=>this._renderActionSection(e,i,l)))}_renderActionSection(e,t,i){return r("calcite-action-group",{key:`action-section-${i}`},t.toArray().map(l=>this._renderAction({item:e,action:l,textEnabled:!0})))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const l="image"in e?e.image:void 0,n={[p.itemActionIcon]:!!t,[p.itemActionImage]:!!l};return t&&(n[t]=!0),l||t?r("span",{"aria-hidden":"true",class:this.classes(p.itemActionIcon,n),key:"icon",styles:se(l)}):null}_renderAction(e){const{item:t,action:i,textEnabled:l}=e,{active:n,disabled:d,title:h,type:u,indicator:_}=i;return r("calcite-action",{active:u==="toggle"&&i.value,appearance:"transparent",disabled:d,icon:V(i),indicator:_,key:`action-${i.uid}`,loading:n,onclick:()=>this._triggerAction(t,i),scale:"s",slot:l?void 0:"actions-end",text:h??"",textEnabled:l,title:h??void 0},this._renderFallbackIcon(i))}_filterActions(e){return e.map(t=>t.filter(i=>i.visible))}_getSingleActionButton(e){return e.reduce(t=>t).filter(t=>t&&t.type==="button").at(0)}_countActions(e){return e.reduce((t,i)=>t+i.length,0)}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame(()=>e==null?void 0:e.setFocus())}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if(t==="none")return;const l=e.target.selectedItems.map(n=>S(n)).filter(Boolean);i.removeAll(),i.addMany(l)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_triggerAction(e,t){t&&e&&(t.type==="toggle"&&(t.value=!t.value),this.triggerAction(t,e))}};s([o()],a.prototype,"_focusRootFlowItem",void 0),s([o()],a.prototype,"_focusPanelFlowItem",void 0),s([o()],a.prototype,"_dragEnabled",null),s([o()],a.prototype,"_filterEnabled",null),s([o()],a.prototype,"collapsed",void 0),s([o()],a.prototype,"dragEnabled",void 0),s([o()],a.prototype,"filterPlaceholder",void 0),s([o()],a.prototype,"filterText",void 0),s([o()],a.prototype,"headingLevel",void 0),s([o()],a.prototype,"icon",void 0),s([o()],a.prototype,"iconClass",void 0),s([o()],a.prototype,"label",null),s([o()],a.prototype,"listItemCanGiveFunction",void 0),s([o()],a.prototype,"listItemCanReceiveFunction",void 0),s([o()],a.prototype,"listItemCreatedFunction",null),s([o()],a.prototype,"map",null),s([o(),H("esri/widgets/TableList/t9n/TableList")],a.prototype,"messages",void 0),s([o(),H("esri/t9n/common")],a.prototype,"messagesCommon",void 0),s([o()],a.prototype,"minDragEnabledItems",void 0),s([o()],a.prototype,"minFilterItems",void 0),s([o()],a.prototype,"multipleSelectionEnabled",null),s([o()],a.prototype,"selectionEnabled",null),s([o()],a.prototype,"selectedItems",void 0),s([o()],a.prototype,"selectionMode",void 0),s([o({readOnly:!0})],a.prototype,"tableItems",null),s([me("trigger-action"),o({type:J})],a.prototype,"viewModel",void 0),s([o({type:Q,nonNullable:!0})],a.prototype,"visibleElements",void 0),a=s([F("esri.widgets.TableList")],a);const Ae=a;export{Ae as default};
