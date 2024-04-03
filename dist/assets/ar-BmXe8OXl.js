import{d as i}from"./calcite-input-time-picker-DRznKTNy.js";import"./index-8ERthB3p.js";import"./jsxFactory-BxQYPm-b.js";import"./form-DjQ2sEGP.js";import"./dom-BvFmd0Ey.js";import"./guid-Cgw_FQNn.js";import"./interactive-juHwuDyB.js";import"./key-wu7cp3Vu.js";import"./label2-D3Hkhas-.js";import"./component-CiBiWYk6.js";import"./loadable-C9pgOBpc.js";import"./locale-czPJjPyG.js";import"./observers-hu61Hn6M.js";import"./focusTrapComponent-DOljTw4q.js";import"./t9n-GCZDzKCw.js";import"./math-hDEtwxmJ.js";import"./icon-DyzVx5Y-.js";import"./openCloseComponent-C40eKxzi.js";import"./Validation-BbCdGpug.js";import"./action-CR32yz_4.js";import"./loader-DeANvmkY.js";import"./input-message-DJd4uB0t.js";import"./input-text-Dv0uyr6G.js";import"./input-eashyq5M.js";import"./progress-434a5olE.js";import"./popover-CVy_TqWd.js";import"./floating-ui-azNa5k60.js";import"./debounce-Bd3Yf8RP.js";import"./Heading-CWhq9JWU.js";import"./FloatingArrow-Dv49hS4C.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */var o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),p={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},e={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,meridiem:function(r){return r>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(m){return e[m]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(m){return p[m]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};i.locale(_,null,!0);export{_ as default};