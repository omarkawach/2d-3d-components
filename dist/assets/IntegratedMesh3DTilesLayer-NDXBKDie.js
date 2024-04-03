import{aP as j,aQ as z,aR as V,e1 as P,aS as W,eS as X,eR as k,T as b,M as w,cl as A,ci as x,dm as F,di as p,fc as I,cj as M,de as $,c1 as S,fd as R,fe as T,ff as f,s as G,O as N,U as K,P as D,o as h,y as u,fg as O,aX as q,X as Q,aY as Y,bW as g}from"./index-8ERthB3p.js";import{I as U,x as Z,Z as B}from"./elevationInfoUtils-sHEwmo9N.js";let y=class extends j(z(V(P(W(X(k(Y))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var E,L;const i=(E=a.root)==null?void 0:E.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(L=a.root)==null?void 0:L.transform,c=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=A(t[0]),n=A(t[1]),r=t[4],s=A(t[2]),e=A(t[3]),m=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:r,xmax:s,ymax:e,zmax:m,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),r=g();F(r,l,x(-n,-n,-n));const s=g();if(p(s,l,x(n,n,n)),o&&this._verifyArray(o,16)){const v=o;I(c,r,v),M(r,c),I(c,s,v),M(s,c)}$(r,S,0,r,b.WGS84,0,1),$(s,S,0,s,b.WGS84,0,1);const e=g(),m=g();R(e,r,s),T(m,r,s),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:m[0],ymax:m[1],zmax:m[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),r=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let d=0;d<8;++d)e.push(g());if(p(e[0],l,n),p(e[0],e[0],r),p(e[0],e[0],s),f(e[1],l,n),p(e[1],e[1],r),p(e[1],e[1],s),p(e[2],l,n),f(e[2],e[2],r),p(e[2],e[2],s),f(e[3],l,n),f(e[3],e[3],r),p(e[3],e[3],s),p(e[4],l,n),p(e[4],e[4],r),f(e[4],e[4],s),f(e[5],l,n),p(e[5],e[5],r),f(e[5],e[5],s),p(e[6],l,n),f(e[6],e[6],r),f(e[6],e[6],s),f(e[7],l,n),f(e[7],e[7],r),f(e[7],e[7],s),o&&this._verifyArray(o,16)){const d=o;for(let _=0;_<8;++_)I(e[_],e[_],d)}const m=x(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let d=0;d<8;++d)$(e[d],S,0,e[d],b.WGS84,0,1),R(v,v,e[d]),T(m,m,e[d]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:m[0],ymax:m[1],zmax:m[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var c;if((c=o.typeKeywords)!=null&&c.includes("IntegratedMesh"))return!0;throw new G("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){N(o)}this.url&&await K(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(c=>{this._initFullExtent(c.data)},c=>{N(c)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";U(D.getLogger(this),Z(i,"absolute-height",a)),U(D.getLogger(this),B(i,a))}};h([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),h([u({type:b})],y.prototype,"spatialReference",void 0),h([u({type:w})],y.prototype,"fullExtent",void 0),h([u(O)],y.prototype,"elevationInfo",null),h([u({type:["show","hide"]})],y.prototype,"listMode",void 0),h([u(q)],y.prototype,"url",void 0),h([u({readOnly:!0})],y.prototype,"type",void 0),h([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),h([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}}}}})],y.prototype,"minScale",void 0),h([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}}}}})],y.prototype,"maxScale",void 0),y=h([Q("esri.layers.IntegratedMesh3DTilesLayer")],y);const J=y;export{J as default};
