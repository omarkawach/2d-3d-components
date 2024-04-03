import{d2 as w,bt as g,aJ as h,bx as v,cD as y,aI as b,d3 as x,d4 as $,d5 as E,s as d,P as F,d6 as A}from"./index-8ERthB3p.js";const f=()=>F.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},T={getAttribute:(r,t)=>r.field(t)};async function j(r,t,c){if(!r||!r.symbol||!t)return p;const l=r.where,u=x(r);let a;if(u.type==="arcade"){const e=await $(u.expression,c,t);if(e==null)return p;a={type:"arcade",evaluate(o,n){try{const s="attributes"in o?e.repurposeFeature(o):o;s.contextTimeZone=n??null;const i=e.evaluate({$view:{timeZone:n},$feature:s},e.services);if(i!=null)return i.toString()}catch(s){f().error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:s,feature:o,expression:u}))}return null},needsHydrationToEvaluate:()=>A(u.expression)==null}}else a={type:"simple",evaluate:e=>u.expression.replaceAll(/{[^}]*}/g,o=>{const n=o.slice(1,-1),s=t.get(n);if(!s)return o;let i=null;return"attributes"in e?e&&e.attributes&&(i=e.attributes[s.name]):i=e.field(s.name),i==null?"":V(i,s)})};if(l){let e;try{e=await E(l,t)}catch(n){return f().error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:n})),p}const o=a.evaluate;a.evaluate=(n,s)=>{const i="attributes"in n?void 0:T;try{if(e.testFeature(n,i))return o(n,s)}catch(m){f().error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:n,error:m}))}return null}}return a}function V(r,t){if(r==null)return"";const c=t.domain;if(c){if(c.type==="codedValue"||c.type==="coded-value"){const u=r;for(const a of c.codedValues)if(a.code===u)return a.name}else if(c.type==="range"){const{max:u,min:a}=w(t),e=+r;if(a!=null&&u!=null&&a<=e&&e<=u)return c.name}}let l=r;return g(t)?l=h(l,v("short-date")):y(t)&&(l=b(+l)),l||""}export{V as g,j as w};