import{o as t,y as r,X as f,bg as v,s as c,U as w}from"./index-8ERthB3p.js";import{f as y,n as g,s as j}from"./utils-1zmckiYC.js";import{r as b}from"./serverVersionUtils-BfJfWaCL.js";let o=class extends v{constructor(e){super(e),this.hasConflicts=!1,this.moment=null,this.didPost=!1,this.success=!1}};t([r({type:Boolean,json:{write:!0}})],o.prototype,"hasConflicts",void 0),t([r({type:Date,json:{type:Number,write:{writer:(e,s)=>{s.moment=e?e.getTime():null}}}})],o.prototype,"moment",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"didPost",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"success",void 0),o=t([f("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")],o);const q=o,n=new Map;async function N(e,s,p,l){n.has(e)||await b(n,e);const i=n.get(e);if(((i==null?void 0:i.serverVersion)??0)<=11.1)throw new c("reconcile:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!s)throw new c("reconcile:missing-guid","guid for version is missing");const a=y(e),m=p.toJSON(),h=g(a.query,{query:j({...m,f:"json"}),...l,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const u=`${a.path}/versions/${s}/reconcile`,{data:d}=await w(u,h);return q.fromJSON(d)}export{N as reconcile,n as serverVersionCacheMap};