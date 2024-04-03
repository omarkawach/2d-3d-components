import{i as n,d as l}from"./debounce-00101a41-wTZ0BIwd.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */var g="Expected a function";function f(t,a,i){var r=!0,e=!0;if(typeof t!="function")throw new TypeError(g);return n(i)&&(r="leading"in i?!!i.leading:r,e="trailing"in i?!!i.trailing:e),l(t,a,{leading:r,maxWait:a,trailing:e})}export{f as t};
