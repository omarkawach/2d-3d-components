import{o as t,y as l,aV as s,ei as d,an as a,X as p,bg as w}from"./index-8ERthB3p.js";import{i,p as m}from"./UtilityNetwork-BaSgO-Ex.js";let e=class extends w{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,o){const n=new m;return n.globalId=o.fromGlobalId,n.networkSourceId=o.fromNetworkSourceId,n.terminalId=o.fromTerminalId,n}writeFromNetworkElement(r,o){r&&(o.fromGlobalId=r.globalId,o.fromNetworkSourceId=r.networkSourceId,o.fromTerminalId=r.terminalId)}readToNetworkElement(r,o){const n=new m;return n.globalId=o.toGlobalId,n.networkSourceId=o.toNetworkSourceId,n.terminalId=o.toTerminalId,n}writeToNetworkElement(r,o){r&&(o.toGlobalId=r.globalId,o.toNetworkSourceId=r.networkSourceId,o.toTerminalId=r.terminalId)}};t([l({type:String,json:{write:!0}})],e.prototype,"globalId",void 0),t([l({type:i.apiValues,json:{type:i.jsonValues,read:i.read,write:i.write}})],e.prototype,"associationType",void 0),t([l({type:m,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],e.prototype,"fromNetworkElement",void 0),t([s("fromNetworkElement")],e.prototype,"readFromNetworkElement",null),t([d("fromNetworkElement")],e.prototype,"writeFromNetworkElement",null),t([l({type:m,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],e.prototype,"toNetworkElement",void 0),t([s("toNetworkElement")],e.prototype,"readToNetworkElement",null),t([d("toNetworkElement")],e.prototype,"writeToNetworkElement",null),t([l({type:a,json:{write:!0}})],e.prototype,"geometry",void 0),t([l({type:String,json:{write:!0}})],e.prototype,"errorMessage",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"percentAlong",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"errorCode",void 0),t([l({type:Boolean,json:{write:!0}})],e.prototype,"isContentVisible",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"status",void 0),e=t([p("esri.rest.networks.support.Association")],e);const y=e;export{y as d};
