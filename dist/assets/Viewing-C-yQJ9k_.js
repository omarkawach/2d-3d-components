import{o as e,y as t,X as n,bg as a,bC as M,cy as N,eW as q,ac as j,ak as E,aV as R,ei as A}from"./index-8ERthB3p.js";let p=class extends a{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],p.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"sublayerId",void 0),p=e([n("esri.layers.support.FacilityLayerInfo")],p);const B=p;let s=class extends a{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};e([t({type:String,json:{write:!0}})],s.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelNumberField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"longNameField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"shortNameField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"verticalOrderField",void 0),s=e([n("esri.layers.support.LevelLayerInfo")],s);const V=s;let y=class extends a{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],y.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],y.prototype,"sublayerId",void 0),y=e([n("esri.layers.support.SiteLayerInfo")],y);const O=y;let c=class extends a{constructor(i){super(i),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};e([t({type:V,json:{write:!0}})],c.prototype,"levelLayer",void 0),e([t({type:B,json:{write:!0}})],c.prototype,"facilityLayer",void 0),e([t({type:O,json:{write:!0}})],c.prototype,"siteLayer",void 0),c=e([n("esri.support.MapFloorInfo")],c);const Q=c,k={width:600,height:400},v=1.5;function U(r,i){i=i||k;let{width:o,height:d}=i;const x=o/d;return x<v?d=o/v:x>v&&(o=d*v),o>r.width&&(d*=r.width/o,o=r.width),d>r.height&&(o*=r.height/d,d=r.height),{width:Math.round(o),height:Math.round(d)}}function L(r){return{enabled:!!(r!=null&&r.length)}}var S;let h=S=class extends a{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new S({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],h.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],h.prototype,"name",void 0),e([M(N)],h.prototype,"type",void 0),h=S=e([n("esri.webdoc.applicationProperties.SearchLayerField")],h);const C=h;var I;let u=I=class extends a{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null}clone(){return new I(j({field:this.field,id:this.id,subLayer:this.subLayer}))}};e([t({type:C,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],u.prototype,"id",void 0),e([t({type:q,json:{write:!0}})],u.prototype,"subLayer",void 0),u=I=e([n("esri.webdoc.applicationProperties.SearchLayer")],u);const W=u;var F;let w=F=class extends a{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new F({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],w.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"name",void 0),e([M(N)],w.prototype,"type",void 0),w=F=e([n("esri.webdoc.applicationProperties.SearchTableField")],w);const X=w;var f;let b=f=class extends a{constructor(r){super(r),this.field=null,this.id=null}clone(){return new f(j({field:this.field,id:this.id}))}};e([t({type:X,json:{write:{isRequired:!0}}})],b.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],b.prototype,"id",void 0),b=f=e([n("esri.webdoc.applicationProperties.SearchTable")],b);const z=b;var m;const P=E.ofType(W),T=E.ofType(z);let l=m=class extends a{constructor(r){super(r),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new P,this.tables=new T}readAddressSearchEnabled(r){return!r}writeAddressSearchEnabled(r,i,o){i[o]=!r}clone(){return new m(j({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e([t({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"addressSearchEnabled",void 0),e([R("addressSearchEnabled")],l.prototype,"readAddressSearchEnabled",null),e([A("addressSearchEnabled")],l.prototype,"writeAddressSearchEnabled",null),e([t({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],l.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"hintText",void 0),e([t({type:P,json:{write:{overridePolicy:L},origins:{"web-scene":{write:{isRequired:!0}}}}})],l.prototype,"layers",void 0),e([t({type:T,json:{read:!0,write:{overridePolicy:L}}})],l.prototype,"tables",void 0),l=m=e([n("esri.webdoc.applicationProperties.Search")],l);const D=l;var $;let g=$=class extends a{constructor(r){super(r),this.search=null}clone(){return new $(j({search:this.search}))}};e([t({type:D,json:{write:!0}})],g.prototype,"search",void 0),g=$=e([n("esri.webdoc.applicationProperties.Viewing")],g);const Y=g;export{U as a,Y as i,Q as l};