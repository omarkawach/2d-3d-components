import{a as R}from"./quantityUtils-9zDVxeky.js";import{h8 as U,bW as a,dg as g,ft as W,dB as b}from"./index-8ERthB3p.js";import{i as j}from"./earcut-BqgeR2O3.js";import{n as x}from"./projectVectorToVector-C3SBBDgz.js";import{b as y,v as F,F as k,K as q}from"./plane-Du3EYICn.js";import{S as w}from"./triangle-CTblFuF6.js";import{i as A}from"./measurementUtils-CUrVHWre.js";function J(t,e=$()){return d(t,e)}function L(t,e=$()){return d(t,e,!1)}function d(t,e,i=t.hasZ){const s=A(t.spatialReference),f=U(s);if(f==null)return null;const v=(l,r)=>!(r.length<2)&&(g(l,r[0],r[1],i&&r[2]||0),!0);let m=0;for(const l of t.rings){const r=l.length;if(r<3)continue;const{positionsWorldCoords:o}=e;for(;o.length<r;)o.push(a());const p=B,u=g(K,0,0,0),C=1/r;for(let n=0;n<r;n++){if(!v(p,l[n])||!x(p,t.spatialReference,o[n],s))return null;W(u,u,o[n],C)}const h=y(o[0],o[1],u,F());if(b(k(h))===0)continue;for(let n=0;n<r;n++)q(h,u,o[n],o[n]);const c=S(o);for(let n=0;n<c.length;n+=3)m+=w(o[c[n]],o[c[n+1]],o[c[n+2]])}return R(m,f)}const B=a(),K=a();function $(){return{positionsWorldCoords:[]}}function S(t){return j(V(t),[],2)}function V(t){const e=new Float64Array(2*t.length);for(let i=0;i<t.length;++i){const s=t[i],f=2*i;e[f]=s[0],e[f+1]=s[1]}return e}export{$ as U,J as g,L as j,S as k};