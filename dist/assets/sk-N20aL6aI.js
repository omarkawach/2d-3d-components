import{d as p}from"./calcite-input-time-picker-DRznKTNy.js";import"./index-8ERthB3p.js";import"./jsxFactory-BxQYPm-b.js";import"./form-DjQ2sEGP.js";import"./dom-BvFmd0Ey.js";import"./guid-Cgw_FQNn.js";import"./interactive-juHwuDyB.js";import"./key-wu7cp3Vu.js";import"./label2-D3Hkhas-.js";import"./component-CiBiWYk6.js";import"./loadable-C9pgOBpc.js";import"./locale-czPJjPyG.js";import"./observers-hu61Hn6M.js";import"./focusTrapComponent-DOljTw4q.js";import"./t9n-GCZDzKCw.js";import"./math-hDEtwxmJ.js";import"./icon-DyzVx5Y-.js";import"./openCloseComponent-C40eKxzi.js";import"./Validation-BbCdGpug.js";import"./action-CR32yz_4.js";import"./loader-DeANvmkY.js";import"./input-message-DJd4uB0t.js";import"./input-text-Dv0uyr6G.js";import"./input-eashyq5M.js";import"./progress-434a5olE.js";import"./popover-CVy_TqWd.js";import"./floating-ui-azNa5k60.js";import"./debounce-Bd3Yf8RP.js";import"./Heading-CWhq9JWU.js";import"./FloatingArrow-Dv49hS4C.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */function a(m){return m>1&&m<5&&~~(m/10)!==1}function t(m,r,n,o){var e=m+" ";switch(n){case"s":return r||o?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":o?"minútu":"minútou";case"mm":return r||o?e+(a(m)?"minúty":"minút"):e+"minútami";case"h":return r?"hodina":o?"hodinu":"hodinou";case"hh":return r||o?e+(a(m)?"hodiny":"hodín"):e+"hodinami";case"d":return r||o?"deň":"dňom";case"dd":return r||o?e+(a(m)?"dni":"dní"):e+"dňami";case"M":return r||o?"mesiac":"mesiacom";case"MM":return r||o?e+(a(m)?"mesiace":"mesiacov"):e+"mesiacmi";case"y":return r||o?"rok":"rokom";case"yy":return r||o?e+(a(m)?"roky":"rokov"):e+"rokmi"}}var i={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};p.locale(i,null,!0);export{i as default};
