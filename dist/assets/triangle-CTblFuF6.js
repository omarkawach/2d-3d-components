import{s as c}from"./ObjectStack-BPo9QGhV.js";import{dA as s,bW as o,dm as t,dk as d,cg as b}from"./index-8ERthB3p.js";import{v as w}from"./lineSegment-DVvvMBnG.js";import"./plane-Du3EYICn.js";function M(r){return r?{p0:s(r.p0),p1:s(r.p1),p2:s(r.p2)}:{p0:o(),p1:o(),p2:o()}}function v(r,p,n){const i=p[0]-r[0],e=p[1]-r[1],f=n[0]-r[0],u=n[1]-r[1];return .5*Math.abs(i*u-e*f)}function x(r,p,n){return t(m,p,r),t(a,n,r),.5*d(b(m,m,a))}new c(w);new c(()=>M());const m=o(),a=o();export{v as S,x as d};