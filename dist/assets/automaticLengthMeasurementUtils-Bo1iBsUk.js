import{a1 as D,dR as U,jn as S,fm as d,dg as W,bW as c}from"./index-8ERthB3p.js";import{i as p}from"./quantityUtils-9zDVxeky.js";import{n as y}from"./projectVectorToVector-C3SBBDgz.js";import{i as j}from"./measurementUtils-CUrVHWre.js";import{b as k,l as q,c as w}from"./SnappingManager-DUlqpdAB.js";var o;function A(n){return B(n,o.Horizontal)}function B(n,r){const{hasZ:t,spatialReference:e}=n,a=j(e);let u=0;const s=S(a);if(s==null)return null;const z=r===o.Direct?G:H;for(const $ of n.paths){if($.length<2)continue;const M=$.length-1;for(let m=0;m<M;++m){const g=$[m];i[0]=g[0],i[1]=g[1],i[2]=t?g[2]:0;const x=$[m+1];l[0]=x[0],l[1]=x[1],l[2]=t?x[2]:0;const b=z(i,l,e);if(b==null)return null;u+=b.value}}return p(u,s)}function O(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,G(i,l,t)):null}function C(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,H(i,l,t)):null}function P(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,F(i,l,t)):null}function Q(n){return n!=null?E(n.hasZ?n.z:0,n.spatialReference):null}function E(n,r){const t=U(r);return t!=null?p(n??0,t):null}function G(n,r,t){const e=V(n,r,t,o.Direct);return e!=null?p(e.direct,e.unit):null}function H(n,r,t){const e=V(n,r,t,o.Horizontal);return e!=null?p(e.horizontal,e.unit):null}function F(n,r,t){const e=V(n,r,t,o.Vertical);return e!=null?p(e.verticalSigned,e.unit):null}function V(n,r,t,e){const a=j(t),u=S(a);if(u==null)return null;const s=r[2]-n[2];if(e===o.Vertical)return{verticalSigned:s,unit:u};if(!y(n,t,v,a)||!y(r,t,R,a))return null;if(e===o.Direct)return{direct:d(R,v),unit:u};if(W(Z,n[0],n[1],r[2]),!y(Z,t,Z,a))return null;const z=d(Z,R);return e===o.Horizontal?{horizontal:z,unit:u}:{direct:d(R,v),horizontal:z,vertical:Math.abs(s),unit:u}}(function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"})(o||(o={}));const i=c(),l=c(),v=c(),R=c(),Z=c();function T(n){return k(n)??A(n)}function X(n,r){return q(n,r)??C(n,r)}function Y(n,r,t){return f[0]=n[0],f[1]=n[1],f[2]=n.length===3?n[2]:0,h[0]=r[0],h[1]=r[1],h[2]=r.length===3?r[2]:0,w(f,h,t)??H(f,h,t)}const f=c(),h=c();export{Q as R,G as Z,O as a,T as c,F as g,X as m,Y as u,E as v,P as y};