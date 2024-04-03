import{o as t,y as o,X as v,bg as h,ac as f,n as j,G as y,aV as d,ei as m,i5 as x,N as w}from"./index-8ERthB3p.js";var g;let l=g=class extends h{constructor(e){super(e),this.enabled=!1,this.longNames=!1,this.minimized=!1,this.pinnedLevels=!1,this.site=null,this.facility=null,this.level=null}clone(){return new g(f({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))}};t([o({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],l.prototype,"enabled",void 0),t([o({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],l.prototype,"longNames",void 0),t([o({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],l.prototype,"minimized",void 0),t([o({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],l.prototype,"pinnedLevels",void 0),t([o({type:String,json:{read:{source:"site"},write:{target:"site"}}})],l.prototype,"site",void 0),t([o({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],l.prototype,"facility",void 0),t([o({type:String,json:{read:{source:"level"},write:{target:"level"}}})],l.prototype,"level",void 0),l=g=t([v("esri.webdoc.widgets.FloorFilter")],l);const E=l;var T;const c=new j({slider:"slider",picker:"picker"});let u=T=class extends h{constructor(e){super(e),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new T({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};t([o({type:c.apiValues,nonNullable:!0,json:{type:c.jsonValues,default:null,read:{reader:c.read},write:{isRequired:!0,writer:c.write}}})],u.prototype,"interactionMode",void 0),t([o({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const e=this.stopInterval!=null;return{enabled:!e,isRequired:!e}}}}})],u.prototype,"numStops",void 0),t([o({type:Number,json:{write:{overridePolicy(){return{isRequired:this.numStops==null}}}}})],u.prototype,"stopInterval",void 0),u=T=t([v("esri.webdoc.widgets.Range")],u);const I=u;var b;let i=b=class extends h{constructor(e){super(e),this.currentTimeExtent=null,this.fullTimeExtent=null,this.loop=!1,this.numStops=null,this.numThumbs=null,this.stopDelay=null,this.stopInterval=null,this.stops=null}readCurrentTimeExtent(e){if(!e)return;const n=e[0]!=null?new Date(e[0]):null,r=e[1]!=null?new Date(e[1]):null;return new y({start:n,end:r})}writeCurrentTimeExtent(e,n,r){e&&w(r,[e.start!=null?e.start.getTime():null,e.end!=null?e.end.getTime():null],n)}readFullTimeExtent(e,n){const r=n.properties;if(!r)return;const s=r.endTime!=null?new Date(r.endTime):null,p=r.startTime!=null?new Date(r.startTime):null;return new y({start:p,end:s})}writeFullTimeExtent(e,n){if(!e)return;const r=n.properties=n.properties||{},s=e.end,p=e.start;s&&(r.endTime=s!=null?s.getTime():null),p&&(r.startTime=p!=null?p.getTime():null)}readStopInterval(e,n,r){return e?x.fromJSON({value:e.interval,unit:e.units},r):null}writeStopInterval(e,n,r,s){if(!e)return;const p=e.toJSON(s);w(r,{interval:p.value,units:p.unit},n)}readStops(e){return e!=null&&e.length?e.map(n=>new Date(n)):null}writeStops(e,n,r){e!=null&&e.length&&w(r,e.map(s=>s.getTime()),n)}clone(){return new b(f({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))}};t([o({type:y,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],i.prototype,"currentTimeExtent",void 0),t([d("currentTimeExtent")],i.prototype,"readCurrentTimeExtent",null),t([m("currentTimeExtent")],i.prototype,"writeCurrentTimeExtent",null),t([o({type:y,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],i.prototype,"fullTimeExtent",void 0),t([d("fullTimeExtent")],i.prototype,"readFullTimeExtent",null),t([m("fullTimeExtent")],i.prototype,"writeFullTimeExtent",null),t([o({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],i.prototype,"loop",void 0),t([o({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var s;const e=!!this.stopInterval,n=!!((s=this.stops)!=null&&s.length),r=!(e||n);return{enabled:r,isRequired:r}}}}})],i.prototype,"numStops",void 0),t([o({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],i.prototype,"numThumbs",void 0),t([o({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],i.prototype,"stopDelay",void 0),t([o({type:x,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){var r;const e=this.numStops!=null,n=!!((r=this.stops)!=null&&r.length);return{enabled:!n,isRequired:!(e||n)}}}}})],i.prototype,"stopInterval",void 0),t([d("stopInterval")],i.prototype,"readStopInterval",null),t([m("stopInterval")],i.prototype,"writeStopInterval",null),t([o({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:this.numStops==null&&!this.stopInterval}}}}})],i.prototype,"stops",void 0),t([d("stops")],i.prototype,"readStops",null),t([m("stops")],i.prototype,"writeStops",null),i=b=t([v("esri.webdoc.widgets.TimeSlider")],i);const N=i;var S;let a=S=class extends h{constructor(e){super(e),this.range=null,this.timeSlider=null,this.floorFilter=null}clone(){return new S(f({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))}};t([o({type:I,json:{write:!0}})],a.prototype,"range",void 0),t([o({type:N,json:{write:!0}})],a.prototype,"timeSlider",void 0),t([o({type:E,json:{write:!0}})],a.prototype,"floorFilter",void 0),a=S=t([v("esri.webdoc.Widgets")],a);const $=a;export{$ as a,N as c,E as n};