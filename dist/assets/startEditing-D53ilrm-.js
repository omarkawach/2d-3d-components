import{s as d,U as c}from"./index-8ERthB3p.js";import{f,n as u,s as g}from"./utils-1zmckiYC.js";async function h(r,s,o,a){if(!s)throw new d("start-editing:missing-guid","guid for version is missing");const t=f(r),e=u(t.query,{query:g({sessionId:o,f:"json"}),...a,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${t.path}/versions/${s}/startEditing`,{data:i}=await c(n,e);return!!i&&i.success}export{h as startEditing};
