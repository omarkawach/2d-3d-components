import{d as n}from"./calcite-input-time-picker_2.entry-54B84vfw.js";import"./index-8ERthB3p.js";import"./interactive-a992f5df-DKTznAlu.js";import"./locale-ccbc05e8-Cx61mxV1.js";import"./focusTrapComponent-6b2f2d88-CO8gTCXw.js";import"./form-3f199679-n9hgX90j.js";import"./dom-bea5da81-_E6DDA15.js";import"./guid-9a252389-Cgw_FQNn.js";import"./key-c94e53b5-wu7cp3Vu.js";import"./label-ce4d8e83-DSRVKKBm.js";import"./component-ec9f9062-CiBiWYk6.js";import"./loadable-0092c6b2-CCLLZPvP.js";import"./math-246b75fd-hDEtwxmJ.js";import"./t9n-e5ee6b09-BmFnC5TI.js";import"./openCloseComponent-fb5847f4-CSs8Ejz-.js";import"./Validation-3bdaf762-pHCQNhI9.js";import"./browser-26f0727c-UGQ_wQp7.js";import"./observers-fe652afa-BKcjSNKG.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */var o={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function e(i,t,a){var r=o[a];return Array.isArray(r)&&(r=r[t?0:1]),r.replace("%d",i)}var m={name:"de-ch",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(t){return t+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};n.locale(m,null,!0);export{m as default};