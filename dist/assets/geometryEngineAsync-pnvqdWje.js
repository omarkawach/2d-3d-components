import{Z as l,a8 as w,a$ as h}from"./index-8ERthB3p.js";function n(e){var t;return Array.isArray(e)?(t=e[0])==null?void 0:t.spatialReference:e==null?void 0:e.spatialReference}function p(e){return e&&(Array.isArray(e)?e.map(p):e.toJSON?e.toJSON():e)}function c(e){return Array.isArray(e)?e.map(t=>w(t)):w(e)}function S(e,t){let a;return Array.isArray(e)?a=e:(a=[],a.push(e),t!=null&&a.push(t)),a}let f;async function d(){return f||(f=h("geometryEngineWorker",{strategy:"distributed"})),f}async function r(e,t){return(await d()).invoke("executeGEOperation",{operation:e,parameters:p(t)})}async function m(e,t){const a=await d();return Promise.all(a.broadcast("executeGEOperation",{operation:e,parameters:p(t)}))}function R(e){return r("extendedSpatialReferenceInfo",[e])}async function A(e,t){return c(await r("clip",[n(e),e,t]))}async function O(e,t){return c(await r("cut",[n(e),e,t]))}function D(e,t){return r("contains",[n(e),e,t])}function J(e,t){return r("crosses",[n(e),e,t])}function N(e,t,a){return r("distance",[n(e),e,t,a])}function L(e,t){return r("equals",[n(e),e,t])}function T(e,t){return r("intersects",[n(e),e,t])}function V(e,t){return r("touches",[n(e),e,t])}function v(e,t){return r("within",[n(e),e,t])}function E(e,t){return r("disjoint",[n(e),e,t])}function b(e,t){return r("overlaps",[n(e),e,t])}function z(e,t,a){return r("relate",[n(e),e,t,a])}function H(e){return r("isSimple",[n(e),e])}async function I(e){return c(await r("simplify",[n(e),e]))}async function P(e,t=!1){return c(await r("convexHull",[n(e),e,t]))}async function $(e,t){return c(await r("difference",[n(e),e,t]))}async function j(e,t){return c(await r("symmetricDifference",[n(e),e,t]))}async function k(e,t){return c(await r("intersect",[n(e),e,t]))}async function q(e,t=null){const a=S(e,t);return c(await r("union",[n(a),a]))}async function B(e,t,a,i,s,u){return c(await r("offset",[n(e),e,t,a,i,s,u]))}async function C(e,t,a,i=!1){const s=[n(e),e,t,a,i];return c(await r("buffer",s))}async function G(e,t,a,i,s,u){const g=[n(e),e,t,a,i,s,u];return c(await r("geodesicBuffer",g))}async function W(e,t,a=!0){const i=await r("nearestCoordinate",[n(e),e,t,a]);return{...i,coordinate:l.fromJSON(i.coordinate)}}async function Z(e,t){const a=await r("nearestVertex",[n(e),e,t]);return{...a,coordinate:l.fromJSON(a.coordinate)}}async function F(e,t,a,i){return(await r("nearestVertices",[n(e),e,t,a,i])).map(s=>({...s,coordinate:l.fromJSON(s.coordinate)}))}function y(e){var t;return"xmin"in e?e.center:"x"in e?e:(t=e.extent)==null?void 0:t.center}async function K(e,t,a){if(e==null)throw new o;const i=e.spatialReference;if((a=a??y(e))==null)throw new o;const s=e.constructor.fromJSON(await r("rotate",[i,e,t,a]));return s.spatialReference=i,s}async function M(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await r("flipHorizontal",[a,e,t]));return i.spatialReference=a,i}async function Q(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await r("flipVertical",[a,e,t]));return i.spatialReference=a,i}async function U(e,t,a,i){return c(await r("generalize",[n(e),e,t,a,i]))}async function X(e,t,a){return c(await r("densify",[n(e),e,t,a]))}async function Y(e,t,a,i=0){return c(await r("geodesicDensify",[n(e),e,t,a,i]))}function _(e,t){return r("planarArea",[n(e),e,t])}function ee(e,t){return r("planarLength",[n(e),e,t])}function te(e,t,a){return r("geodesicArea",[n(e),e,t,a])}function ae(e,t,a){return r("geodesicLength",[n(e),e,t,a])}async function re(e,t){return c(await r("intersectLinesToPoints",[n(e),e,t]))}async function ne(e,t){await m("changeDefaultSpatialReferenceTolerance",[e,t])}async function ie(e){await m("clearDefaultSpatialReferenceTolerance",[e])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{C as buffer,ne as changeDefaultSpatialReferenceTolerance,ie as clearDefaultSpatialReferenceTolerance,A as clip,D as contains,P as convexHull,J as crosses,O as cut,X as densify,$ as difference,E as disjoint,N as distance,L as equals,R as extendedSpatialReferenceInfo,M as flipHorizontal,Q as flipVertical,U as generalize,te as geodesicArea,G as geodesicBuffer,Y as geodesicDensify,ae as geodesicLength,k as intersect,re as intersectLinesToPoints,T as intersects,H as isSimple,W as nearestCoordinate,Z as nearestVertex,F as nearestVertices,B as offset,b as overlaps,_ as planarArea,ee as planarLength,z as relate,K as rotate,I as simplify,j as symmetricDifference,V as touches,q as union,v as within};
