import{$ as l,j as c}from"./utils-C9orUkkj.js";import{o as f}from"./jsonContext-DAHq4PYe.js";import{l as y,b as d,f as v}from"./index-8ERthB3p.js";import{p as o}from"./resourceUtils-Bkr2NG-A.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-BEX39E-1.js";import"./saveUtils-cWMLp1XS.js";import"./resourceUtils-FbGjm3HI.js";const s="Media Layer",x="media-layer-save",N="media-layer-save-as",n=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return f(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||(r.title=a),r.extent=t?await y(t):null,d(r,v.METADATA)}async function O(e,r){return l({layer:e,itemType:s,validateLayer:i,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:n,saveResources:(a,t)=>o(e.resourceReferences,t)},r)}async function P(e,r,a){return c({layer:e,itemType:s,validateLayer:i,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:n,newItem:r,setItemProperties:A,saveResources:(t,u)=>o(e.resourceReferences,u)},a)}export{O as save,P as saveAs};
