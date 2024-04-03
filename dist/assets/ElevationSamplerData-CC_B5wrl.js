import{Z as x,f3 as m,bG as d,P as R,b0 as $,ds as y,hz as v,dc as w}from"./index-8ERthB3p.js";const h=()=>R.getLogger("esri.layers.support.ElevationSampler");class p{queryElevation(t){return g(t.clone(),this)}on(){return $()}projectIfRequired(t,e){return f(t,e)}}class A extends p{get spatialReference(){return this.extent.spatialReference}constructor(t,e,i){super(),this.tile=t,this.noDataValue=i;const s=t.tile.extent;this.extent=m(s,e.spatialReference),this.extent.zmin=t.zmin,this.extent.zmax=t.zmax,this._aaExtent=s;const a=y(e.spatialReference),o=e.lodAt(t.tile.level).resolution*a;this.demResolution={min:o,max:o}}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return e!=null&&this.containsAt(e.x,e.y)}containsAt(t,e){return v(this._aaExtent,t,e)}elevationAt(t,e){if(!this.containsAt(t,e)){const i=this.extent,s=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return h().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${s})`),this.noDataValue}return this.tile.sample(t,e)??this.noDataValue}}class b extends p{get spatialReference(){return this.extent.spatialReference}constructor(t,e,i){let s;super(),typeof e=="number"?(this.noDataValue=e,s=null):(s=e,this.noDataValue=i),this.samplers=s?t.map(o=>new A(o,s,this.noDataValue)):t;const a=this.samplers[0];if(a){this.extent=a.extent.clone();const{min:o,max:c}=a.demResolution;this.demResolution={min:o,max:c};for(let r=1;r<this.samplers.length;r++){const u=this.samplers[r];this.extent.union(u.extent),this.demResolution.min=Math.min(this.demResolution.min,u.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,u.demResolution.max)}}else this.extent=m(d(),s.spatialReference),this.demResolution={min:0,max:0}}elevationAt(t,e){let i,s=!1;for(const a of this.samplers)if(a.containsAt(t,e)&&(s=!0,i=a.elevationAt(t,e),i!==a.noDataValue))return i;return i??(s||h().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler`),this.noDataValue)}}function g(n,t){const e=f(n,t.spatialReference);if(!e)return null;switch(n.type){case"point":D(n,e,t);break;case"polyline":V(n,e,t);break;case"multipoint":k(n,e,t)}return n}function f(n,t){if(n==null)return null;const e=n.spatialReference;if(e.equals(t))return n;const i=w(n,t);return i||h().error(`Cannot project geometry spatial reference (wkid:${e.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),i}function D(n,t,e){n.z=e.elevationAt(t.x,t.y)}function V(n,t,e){l.spatialReference=t.spatialReference;const i=n.hasM&&!n.hasZ;for(let s=0;s<n.paths.length;s++){const a=n.paths[s],o=t.paths[s];for(let c=0;c<a.length;c++){const r=a[c],u=o[c];l.x=u[0],l.y=u[1],i&&(r[3]=r[2]),r[2]=e.elevationAt(l.x,l.y)}}n.hasZ=!0}function k(n,t,e){l.spatialReference=t.spatialReference;const i=n.hasM&&!n.hasZ;for(let s=0;s<n.points.length;s++){const a=n.points[s],o=t.points[s];l.x=o[0],l.y=o[1],i&&(a[3]=a[2]),a[2]=e.elevationAt(l.x,l.y)}n.hasZ=!0}const l=new x;let Z=class{constructor(t,e){this.data=t,this.safeWidth=.99999999*(t.width-1),this.dx=(t.width-1)/(e[2]-e[0]),this.dy=(t.width-1)/(e[3]-e[1]),this.x0=e[0],this.y1=e[3]}};export{g as p,Z as t,b as u};
