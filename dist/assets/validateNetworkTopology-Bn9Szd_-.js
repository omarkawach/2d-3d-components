import{U as m,s as g}from"./index-8ERthB3p.js";import{f as p,s as v,n as y}from"./utils-1zmckiYC.js";import{b as S}from"./UtilityNetwork-BaSgO-Ex.js";async function J(a,t,s){var l;const o=p(a),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n={...i,returnEdits:!0,f:"json"},r=v({...o.query,...n}),e=y(r,{...s,method:"post"}),c=`${o.path}/validateNetworkTopology`,{data:f}=await m(c,e),d=S.fromJSON(f);return d.serviceEdits=((l=d.serviceEdits)==null?void 0:l.map(u=>({layerId:u.id,editedFeatures:u.editedFeatures})))??[],d}async function h(a,t,s){if(!t.gdbVersion)throw new g("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=p(a),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n=y(o.query,{query:v({...i,returnEdits:!0,async:!0,f:"json"}),...s,method:"post"}),r=`${o.path}/validateNetworkTopology`,{data:e}=await m(r,n);return e?e.statusUrl:null}export{h as submitValidateNetworkTopologyJob,J as validateNetworkTopology};