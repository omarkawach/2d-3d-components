import{eT as O,aw as X,U as D,a8 as _,I as B,k as E,bl as A,an as z,gd as k,P as G,bi as N,gC as H,s as K}from"./index-8ERthB3p.js";import{r as L,o as q,i as w,s as F}from"./normalizeUtilsCommon-DRIluWnF.js";import{f as Q}from"./utils-1zmckiYC.js";import{r as V,o as Y}from"./utils-D-bI9C7C.js";async function Z(e,n,l,s){const t=Q(e),r=n[0].spatialReference,i={...s,responseType:"json",query:{...t.query,f:"json",sr:O(r),target:JSON.stringify({geometryType:X(n[0]),geometries:n}),cutter:JSON.stringify(l)}},o=await D(t.path+"/cut",i),{cutIndexes:a,geometries:u=[]}=o.data;return{cutIndexes:a,geometries:u.map(p=>{const m=_(p);return m.spatialReference=r,m})}}async function ee(e,n,l){const s=typeof e=="string"?B(e):e,t=n[0].spatialReference,r=X(n[0]),i={...l,query:{...s.query,f:"json",sr:O(t),geometries:JSON.stringify(V(n))}},{data:o}=await D(s.path+"/simplify",i);return Y(o.geometries,r,t)}const W=()=>G.getLogger("esri.geometry.support.normalizeUtils");function te(e){return e.type==="polygon"}function ne(e){return e[0].type==="polygon"}function se(e){return e[0].type==="polyline"}function T(e){const n=[];let l=0,s=0;for(let t=0;t<e.length;t++){const r=e[t];let i=null;for(let o=0;o<r.length;o++)i=r[o],n.push(i),o===0?(l=i[0],s=l):(l=Math.min(l,i[0]),s=Math.max(s,i[0]));i&&n.push([(l+s)/2,0])}return n}function oe(e,n){if(!(e instanceof z||e instanceof N)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw W().error(t),new K(t)}const l=q(e),s=[];for(const t of l){const r=[];s.push(r),r.push([t[0][0],t[0][1]]);for(let i=0;i<t.length-1;i++){const o=t[i][0],a=t[i][1],u=t[i+1][0],p=t[i+1][1],m=Math.sqrt((u-o)*(u-o)+(p-a)*(p-a)),h=(p-a)/m,x=(u-o)/m,g=m/n;if(g>1){for(let R=1;R<=g-1;R++){const b=R*n,c=x*b+o,f=h*b+a;r.push([c,f])}const $=(m+Math.floor(g-1)*n)/2,P=x*$+o,S=h*$+a;r.push([P,S])}r.push([u,p])}}return te(e)?new N({rings:s,spatialReference:e.spatialReference}):new z({paths:s,spatialReference:e.spatialReference})}function C(e,n,l){if(n){const s=oe(e,1e6);e=H(s,!0)}return l&&(e=F(e,l)),e}function J(e,n,l){if(Array.isArray(e)){const s=e[0];if(s>n){const t=w(s,n);e[0]=s+t*(-2*n)}else if(s<l){const t=w(s,l);e[0]=s+t*(-2*l)}}else{const s=e.x;if(s>n){const t=w(s,n);e=e.clone().offset(t*(-2*n),0)}else if(s<l){const t=w(s,l);e=e.clone().offset(t*(-2*l),0)}}return e}function ie(e,n){let l=-1;for(let s=0;s<n.cutIndexes.length;s++){const t=n.cutIndexes[s],r=n.geometries[s],i=q(r);for(let o=0;o<i.length;o++){const a=i[o];a.some(u=>{if(u[0]<180)return!0;{let p=0;for(let h=0;h<a.length;h++){const x=a[h][0];p=x>p?x:p}p=Number(p.toFixed(9));const m=-360*w(p,180);for(let h=0;h<a.length;h++){const x=r.getPoint(o,h);r.setPoint(o,h,x.clone().offset(m,0))}return!0}})}if(t===l){if(ne(e))for(const o of q(r))e[t]=e[t].addRing(o);else if(se(e))for(const o of q(r))e[t]=e[t].addPath(o)}else l=t,e[t]=r}return e}async function re(e,n,l){if(!Array.isArray(e))return re([e],n);n&&typeof n!="string"&&W().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const s=typeof n=="string"?n:(n==null?void 0:n.url)??E.geometryServiceUrl;let t,r,i,o,a,u,p,m,h=0;const x=[],g=[];for(const c of e)if(c!=null)if(t||(t=c.spatialReference,r=A(t),i=t.isWebMercator,u=i?102100:4326,o=L[u].maxX,a=L[u].minX,p=L[u].plus180Line,m=L[u].minus180Line),r)if(c.type==="mesh")g.push(c);else if(c.type==="point")g.push(J(c.clone(),o,a));else if(c.type==="multipoint"){const f=c.clone();f.points=f.points.map(y=>J(y,o,a)),g.push(f)}else if(c.type==="extent"){const f=c.clone()._normalize(!1,!1,r);g.push(f.rings?new N(f):f)}else if(c.extent){const f=c.extent,y=w(f.xmin,a)*(2*o);let d=y===0?c.clone():F(c.clone(),y);f.offset(y,0),f.intersects(p)&&f.xmax!==o?(h=f.xmax>h?f.xmax:h,d=C(d,i),x.push(d),g.push("cut")):f.intersects(m)&&f.xmin!==a?(h=f.xmax*(2*o)>h?f.xmax*(2*o):h,d=C(d,i,360),x.push(d),g.push("cut")):g.push(d)}else g.push(c.clone());else g.push(c);else g.push(c);let $=w(h,o),P=-90;const S=$,R=new z;for(;$>0;){const c=360*$-180;R.addPath([[c,P],[c,-1*P]]),P*=-1,$--}if(x.length>0&&S>0){const c=ie(x,await Z(s,x,R,l)),f=[],y=[];for(let M=0;M<g.length;M++){const j=g[M];if(j!=="cut")y.push(j);else{const I=c.shift(),v=e[M];v!=null&&v.type==="polygon"&&v.rings&&v.rings.length>1&&I.rings.length>=v.rings.length?(f.push(I),y.push("simplify")):y.push(i?k(I):I)}}if(!f.length)return y;const d=await ee(s,f,l),U=[];for(let M=0;M<y.length;M++){const j=y[M];j!=="simplify"?U.push(j):U.push(i?k(d.shift()):d.shift())}return U}const b=[];for(let c=0;c<g.length;c++){const f=g[c];if(f!=="cut")b.push(f);else{const y=x.shift();b.push(i===!0?k(y):y)}}return b}function ue(e){if(!e)return null;const n=e.extent;if(!n)return null;const l=e.spatialReference&&A(e.spatialReference);if(!l)return n;const[s,t]=l.valid,r=2*t,{width:i}=n;let o,{xmin:a,xmax:u}=n;if([a,u]=[u,a],e.type==="extent"||i===0||i<=t||i>r||a<s||u>t)return n;switch(e.type){case"polygon":if(!(e.rings.length>1))return n;o=T(e.rings);break;case"polyline":if(!(e.paths.length>1))return n;o=T(e.paths);break;case"multipoint":o=e.points}const p=n.clone();for(let m=0;m<o.length;m++){let h=o[m][0];h<0?(h+=t,u=Math.max(h,u)):(h-=t,a=Math.min(h,a))}return p.xmin=a,p.xmax=u,p.width<i?(p.xmin-=t,p.xmax-=t,p):n}function pe(e,n,l){const s=A(l);if(s==null)return e;const[t,r]=s.valid,i=2*r;let o=0,a=0;n>r?o=Math.ceil(Math.abs(n-r)/i):n<t&&(o=-Math.ceil(Math.abs(n-t)/i)),e>r?a=Math.ceil(Math.abs(e-r)/i):e<t&&(a=-Math.ceil(Math.abs(e-t)/i));let u=e+(o-a)*i;const p=u-n;return p>r?u-=i:p<t&&(u+=i),u}function he(e,n){const l=A(n);if(l){const[s,t]=l.valid,r=t-s;if(e<s)for(;e<s;)e+=r;if(e>t)for(;e>t;)e-=r}return e}export{he as L,oe as M,pe as P,re as R,ue as v};
