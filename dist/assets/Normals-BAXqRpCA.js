import{bU as M,bV as g,bW as m,bX as p}from"./index-8ERthB3p.js";function i(n,r,o,s,t,a=2){const e=1/(Math.abs(o)+Math.abs(s)+Math.abs(t)),c=o*e,b=s*e,l=t<=0?(c>=0?1:-1)*(1-Math.abs(b)):c,$=t<=0?(b>=0?1:-1)*(1-Math.abs(c)):b,f=r*a;n[f]=h(l),n[f+1]=h($)}function y(n){const r=n.length/3,o=new Int16Array(2*r);let s=0;for(let t=0;t<r;++t)i(o,t,n[s++],n[s++],n[s++]);return o}function A(n,r){const o=n.length/3,s=new Int16Array(2*o);let t=0;const a=m();for(let e=0;e<o;++e)a[0]=n[t++],a[1]=n[t++],a[2]=n[t++],g(a,a,r),i(s,e,a[0],a[1],a[2]);return s}function I(n,r,o,s=2){const t=o*s,a=u(r[t]),e=u(r[t+1]),c=1-Math.abs(a)-Math.abs(e);n[2]=c,c<0?(n[0]=(a>=0?1:-1)*(1-Math.abs(e)),n[1]=(e>=0?1:-1)*(1-Math.abs(a))):(n[0]=a,n[1]=e),p(n,n)}function h(n){return M(Math.round(32767*n),-32767,32767)}function u(n){return M(n/32767,-1,1)}export{A as c,y as e,I as f,i as s};
