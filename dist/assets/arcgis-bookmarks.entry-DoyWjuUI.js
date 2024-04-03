import{aA as s,aB as i,aC as l,aD as n}from"./index-8ERthB3p.js";import{h as a,i as d}from"./index-f6afcedb-CZuD5wYN.js";import{r as o,c as h,a as r}from"./component-utils-858627d8-DRqmNtSu.js";import{o as m}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const c="",b=class{constructor(e){s(this,e),this.arcgisBookmarksReady=i(this,"arcgisBookmarksReady",7),this.bookmarkEdit=i(this,"bookmarkEdit",7),this.bookmarkSelect=i(this,"bookmarkSelect",7),this._watchHandles=[],this.referenceElement=void 0,this.bookmarks=void 0,this.defaultCreateOptions=void 0,this.defaultEditOptions=void 0,this.disabled=!1,this.dragEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.icon=void 0,this.visibleElementsAddBookmarkButton=!1,this.visibleElementsCloseButton=!1,this.visibleElementsCollapseButton=!1,this.visibleElementsEditBookmarkButton=!1,this.visibleElementsFilter=!1,this.visibleElementsFlow=!0,this.visibleElementsHeading=!1,this.visibleElementsThumbnail=!0,this.visibleElementsTime=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){o(this,e)}bookmarksWatcher(e){e!==void 0&&this.widget&&(this.widget.bookmarks=e)}defaultCreateOptionsWatcher(e){e!==void 0&&this.widget&&(this.widget.defaultCreateOptions=e)}defaultEditOptionsWatcher(e){e!==void 0&&this.widget&&(this.widget.defaultEditOptions=e)}disabledWatcher(e,t){this.widget&&e!==t&&(this.widget.disabled=e)}dragEnabledWatcher(e){this.widget&&(this.widget.dragEnabled=e)}filterPlaceholderWatcher(e){this.widget&&(this.widget.filterPlaceholder=e)}filterTextWatcher(e){this.widget&&(this.widget.filterText=e)}iconWatcher(e){this.widget&&(this.widget.icon=e,this.widget.iconClass=e)}visibleElementsAddBookmarkButtonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,addBookmarkButton:e})}visibleElementsCloseButtonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,closeButton:e})}visibleElementsCollapseButtonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,collapseButton:e})}visibleElementsEditBookmarkButtonWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,editBookmarkButton:e})}visibleElementsFilterWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,filter:e})}visibleElementsFlowWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,flow:e})}visibleElementsHeadingWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,heading:e})}visibleElementsThumbnailWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,thumbnail:e})}visibleElementsTimeWatcher(e){this.widget&&(this.widget.visibleElements={...this.widget.visibleElements,time:e})}positionWatcher(e){e!==void 0&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async componentDidLoad(){const e=this._createParams(),t=await a(e);this.widget=t,await this._addWatchers(),this._proxyEvents(),this._addContainer(),this.arcgisBookmarksReady.emit(),h(this)}disconnectedCallback(){m(this)}render(){return l("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await d();r(this,[e(()=>this.widget.disabled,t=>this.disabled=t)])}_createParams(){const e={};return e.visibleElements={addBookmarkButton:this.visibleElementsAddBookmarkButton,closeButton:this.visibleElementsCloseButton,collapseButton:this.visibleElementsCollapseButton,editBookmarkButton:this.visibleElementsEditBookmarkButton,filter:this.visibleElementsFilter,flow:this.visibleElementsFlow,heading:this.visibleElementsHeading,thumbnail:this.visibleElementsThumbnail,time:this.visibleElementsTime},this.view&&(e.view=this.view),this.bookmarks&&(e.bookmarks=this.bookmarks),this.defaultCreateOptions&&(e.defaultCreateOptions=this.defaultCreateOptions),this.defaultEditOptions&&(e.defaultEditOptions=this.defaultEditOptions),this.dragEnabled!==void 0&&(e.dragEnabled=this.dragEnabled),this.filterPlaceholder&&(e.filterPlaceholder=this.filterPlaceholder),this.filterText&&(e.filterText=this.filterText),this.icon&&(e.icon=this.icon,e.iconClass=this.icon),e}_proxyEvents(){this.widget.on("bookmark-edit",e=>this.bookmarkEdit.emit(e)),this.widget.on("bookmark-select",e=>this.bookmarkSelect.emit(e))}get el(){return n(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],bookmarks:["bookmarksWatcher"],defaultCreateOptions:["defaultCreateOptionsWatcher"],defaultEditOptions:["defaultEditOptionsWatcher"],disabled:["disabledWatcher"],dragEnabled:["dragEnabledWatcher"],filterPlaceholder:["filterPlaceholderWatcher"],filterText:["filterTextWatcher"],icon:["iconWatcher"],visibleElementsAddBookmarkButton:["visibleElementsAddBookmarkButtonWatcher"],visibleElementsCloseButton:["visibleElementsCloseButtonWatcher"],visibleElementsCollapseButton:["visibleElementsCollapseButtonWatcher"],visibleElementsEditBookmarkButton:["visibleElementsEditBookmarkButtonWatcher"],visibleElementsFilter:["visibleElementsFilterWatcher"],visibleElementsFlow:["visibleElementsFlowWatcher"],visibleElementsHeading:["visibleElementsHeadingWatcher"],visibleElementsThumbnail:["visibleElementsThumbnailWatcher"],visibleElementsTime:["visibleElementsTimeWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};b.style=c;export{b as arcgis_bookmarks};
