import{d as _}from"./calcite-input-time-picker-DRznKTNy.js";import"./index-8ERthB3p.js";import"./jsxFactory-BxQYPm-b.js";import"./form-DjQ2sEGP.js";import"./dom-BvFmd0Ey.js";import"./guid-Cgw_FQNn.js";import"./interactive-juHwuDyB.js";import"./key-wu7cp3Vu.js";import"./label2-D3Hkhas-.js";import"./component-CiBiWYk6.js";import"./loadable-C9pgOBpc.js";import"./locale-czPJjPyG.js";import"./observers-hu61Hn6M.js";import"./focusTrapComponent-DOljTw4q.js";import"./t9n-GCZDzKCw.js";import"./math-hDEtwxmJ.js";import"./icon-DyzVx5Y-.js";import"./openCloseComponent-C40eKxzi.js";import"./Validation-BbCdGpug.js";import"./action-CR32yz_4.js";import"./loader-DeANvmkY.js";import"./input-message-DJd4uB0t.js";import"./input-text-Dv0uyr6G.js";import"./input-eashyq5M.js";import"./progress-434a5olE.js";import"./popover-CVy_TqWd.js";import"./floating-ui-azNa5k60.js";import"./debounce-Bd3Yf8RP.js";import"./Heading-CWhq9JWU.js";import"./FloatingArrow-Dv49hS4C.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */function t(i,u,o,e){var r={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},n={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},m=e&&!u?n:r,a=m[o];return i<10?a.replace("%d",m.numbers[i]):a.replace("%d",i)}var s={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};_.locale(s,null,!0);export{s as default};