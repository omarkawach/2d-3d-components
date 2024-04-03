import{c as n,d as l}from"./debounce-Bd3Yf8RP.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */var g="Expected a function";function c(t,a,r){var e=!0,i=!0;if(typeof t!="function")throw new TypeError(g);return n(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),l(t,a,{leading:e,maxWait:a,trailing:i})}export{c as t};
