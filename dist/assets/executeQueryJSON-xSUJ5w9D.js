import{f as i}from"./utils-1zmckiYC.js";import{c as s}from"./query-BtFvR4zF.js";import{ad as e,W as m}from"./index-8ERthB3p.js";async function y(r,a,o){const t=await p(r,a,o);return e.fromJSON(t)}async function p(r,a,o){const t=i(r),c={...o},n=m.from(a),{data:f}=await s(t,n,n.sourceSpatialReference,c);return f}export{p as a,y as s};