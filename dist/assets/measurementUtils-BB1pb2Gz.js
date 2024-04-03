import{bi as M,T as h,bW as c,dg as b,di as j,dj as P,dC as S,cf as W,fm as q,cj as m,bX as $,cg as T}from"./index-8ERthB3p.js";import{geodesicArea as k}from"./geometryEngine-MBwx6Ib1.js";import{c as d}from"./projectPointToVector-qKp-AJ2b.js";import{t as w}from"./projectPointToWGS84ComparableLonLat-D5kdMIn_.js";import{t as g}from"./projectVectorToWGS84ComparableLonLat-DuPw0-Mv.js";import{j as x,z as G}from"./geodesicUtils-D1kRRrco.js";import{Z as z}from"./sphere-Bf4ezJdT.js";import{U as C}from"./mathUtils-iSLnUy_4.js";function _(t,n){const e=z(n);b(e,0,0,0);for(let r=0;r<t.length;++r)j(e,e,t[r]);P(e,e,1/t.length);let f=0;for(let r=0;r<t.length;++r)f=Math.max(f,S(e,t[r]));n[3]=Math.sqrt(f)}function B(t,n){if(t.length<3)throw new Error("need at least 3 points to fit a plane");C(t[0],t[1],t[2],n)}function D(t,n){return W(t,n)+t[3]}function F(t,n,e){return d(t,a,e)&&d(n,u,e)?q(a,u):0}function H(t,n){if(!w(t,a)||!w(n,u))return 0;const e=new G;return x(e,[a[0],a[1]],[u[0],u[1]],h.WGS84),e.distance}function I(t,n,e){const f=new G;return x(f,[t[0],t[1]],[n[0],n[1]],e??h.WGS84),f.distance}function J(t,n,e,f){const r=E;return g(t,f,a)&&g(n,f,u)&&g(e,f,p)?(r.setPoint(0,0,a),r.setPoint(0,1,u),r.setPoint(0,2,p),Math.abs(k(r,"square-meters"))):0}function K(t,n=null,e=!0){const r=(i,s)=>{if(s[0]===0&&s[1]===0&&s[2]===0)return!1;for(let l=0;l<i.length;++l)if(W(s,i[l])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return n&&m(n,t[0]),!0;b(o,0,0,0);for(let i=0;i<t.length;++i)j(o,o,t[i]);if($(o,o),r(t,o))return n&&m(n,o),!0;if(!e)return!1;for(let i=0;i<t.length;++i)for(let s=0;s<t.length;++s)if(i!==s&&(T(o,t[i],t[s]),$(o,o),r(t,o)))return n&&m(n,o),!0;return!1}function N(t){return t.pointerType!=="mouse"||t.button===0}const a=c(),u=c(),p=c(),E=new M({rings:[[a,u,p]],spatialReference:h.WGS84}),o=c();export{D as G,I as L,_ as S,J as T,F as W,H as d,K as k,N as q,B as w};