import{T as a,b_ as k,b$ as u,c0 as m,c1 as C,c2 as i,c3 as l}from"./index-8ERthB3p.js";const U=new a(k),n=new a(u),e=new a(m),T=new a(C);function g(t){const p=r.get(t);if(p)return p;let s=U;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,c=t.latestWkid;if(o!=null||c!=null)i(o)||i(c)?s=n:(l(o)||l(c))&&(s=e);else{const w=t.wkt2??t.wkt;if(w){const f=w.toUpperCase();f===$?s=n:f===b&&(s=e)}}}return r.set(t,s),s}const r=new Map,$=n.wkt.toUpperCase(),b=e.wkt.toUpperCase();export{g as a,U as p,T as w};