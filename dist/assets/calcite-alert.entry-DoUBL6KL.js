import{r as f,e as o,h as i,H as v,g as b}from"./index-8ERthB3p.js";import{a as k,c as w,t as x,d as y}from"./dom-bea5da81-_E6DDA15.js";import{g as u}from"./component-ec9f9062-CiBiWYk6.js";import{s as C,a as q,c as A}from"./loadable-0092c6b2-CCLLZPvP.js";import{N as T,c as z,d as S}from"./locale-ccbc05e8-Cx61mxV1.js";import{o as h}from"./openCloseComponent-fb5847f4-CSs8Ejz-.js";import{c as I,s as L,d as O,u as E}from"./t9n-e5ee6b09-BmFnC5TI.js";import{K as B}from"./resources-7f471cf5-CHu7Xeb7.js";import"./guid-9a252389-Cgw_FQNn.js";import"./key-c94e53b5-wu7cp3Vu.js";import"./observers-fe652afa-BKcjSNKG.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const l={slow:14e3,medium:1e4,fast:6e3},a={actionsEnd:"actions-end",title:"title",message:"message",link:"link"},s={actionsEnd:"actions-end",close:"close",container:"container",containerBottom:"container--bottom",containerBottomEnd:"container--bottom-end",containerBottomStart:"container--bottom-start",containerQueued:"container--queued",containerTop:"container--top",containerTopEnd:"container--top-end",containerTopStart:"container--top-start",content:"content",contentContainer:"content-container",dismissProgress:"dismiss-progress",footer:"footer",icon:"icon",containerSlottedInShell:"container--slotted-in-shell",queueCount:"queue-count",queueCountActive:"queue-count--active",textContainer:"text-container"},D=`:host{--calcite-alert-edge-distance:2rem;--calcite-alert-dismiss-progress-background:var(--calcite-color-transparent-tint);display:block}.container{pointer-events:none;position:fixed;z-index:var(--calcite-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-color-border-3);border-block-end:1px solid var(--calcite-color-border-3);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - var(--calcite-alert-edge-distance) * 2);transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto;padding-inline-start:var(--calcite-alert-spacing-token-large)}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;padding:var(--calcite-alert-spacing-token-large);outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:hover,.close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.close:active{background-color:var(--calcite-color-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-color-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem;--calcite-alert-footer-height:2rem;--calcite-alert-footer-divider-gap:0.125rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem;--calcite-alert-footer-height:3rem;--calcite-alert-footer-divider-gap:0.25rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem;--calcite-alert-footer-height:4rem;--calcite-alert-footer-divider-gap:0.5rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host([open]) .container:not(.container--queued){border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.container--queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.container--queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-color-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-color-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-color-status-info)}:host([kind=info]) .container .icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-color-status-success)}:host([kind=success]) .container .icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-color-status-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--slotted-in-shell{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}`,F=class{constructor(e){f(this,e),this.calciteAlertBeforeClose=o(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=o(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=o(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=o(this,"calciteAlertOpen",6),this.calciteInternalAlertSync=o(this,"calciteInternalAlertSync",6),this.calciteInternalAlertRegister=o(this,"calciteInternalAlertRegister",6),this.autoCloseTimeoutId=null,this.totalOpenTime=0,this.totalHoverTime=0,this.openTransitionProp="opacity",this.setTransitionEl=t=>{this.transitionEl=t},this.closeAlert=()=>{this.autoCloseTimeoutId=null,this.queued=!1,this.open=!1,this.queue=this.queue.filter(t=>t!==this.el),this.determineActiveAlert(),this.calciteInternalAlertSync.emit({queue:this.queue})},this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=k(t)},this.handleMouseOver=()=>{window.clearTimeout(this.autoCloseTimeoutId),this.totalOpenTime=Date.now()-this.initialOpenTime,this.lastMouseOverBegin=Date.now()},this.handleMouseLeave=()=>{const t=Date.now()-this.lastMouseOverBegin,n=l[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?t+this.totalHoverTime:t,this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),n)},this.open=!1,this.autoClose=!1,this.autoCloseDuration="medium",this.kind="brand",this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.numberingSystem=void 0,this.placement="bottom",this.scale="m",this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.numberStringFormatter=new T,this.hasEndActions=!1,this.queue=[],this.queueLength=0,this.queued=!1}openHandler(){h(this),this.open&&!this.queued&&this.calciteInternalAlertRegister.emit(),this.open||(this.queue=this.queue.filter(e=>e!==this.el),this.calciteInternalAlertSync.emit({queue:this.queue}))}onMessagesChange(){}updateDuration(){this.autoClose&&this.autoCloseTimeoutId&&(window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),l[this.autoCloseDuration]))}connectedCallback(){z(this),I(this),this.open&&!this.queued&&this.calciteInternalAlertRegister.emit(),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}async componentWillLoad(){C(this),await L(this),this.open&&h(this)}componentDidLoad(){q(this)}disconnectedCallback(){window.dispatchEvent(new CustomEvent("calciteInternalAlertUnregister",{detail:{alert:this.el}})),window.clearTimeout(this.autoCloseTimeoutId),window.clearTimeout(this.queueTimeout),S(this),O(this),this.slottedInShell=!1}render(){const{open:e,autoClose:t,label:n,placement:m,queued:r}=this,g=t?"alert":"alertdialog",c=!e,d=w(B,this.icon,this.kind),p=this.queueLength>1;return i(v,{"aria-hidden":x(c),"aria-label":n,"calcite-hydrated-hidden":c,role:g},i("div",{class:{[s.container]:!0,[s.containerQueued]:r,[`${s.container}--${m}`]:!0,[s.containerSlottedInShell]:this.slottedInShell},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseLeave:null,ref:this.setTransitionEl},d&&this.renderIcon(d),i("div",{class:s.textContainer},i("slot",{name:a.title}),i("slot",{name:a.message}),i("slot",{name:a.link})),this.renderActionsEnd(),p?this.renderQueueCount():null,this.renderCloseButton(),e&&!r&&t?i("div",{class:s.dismissProgress}):null))}renderCloseButton(){return i("button",{"aria-label":this.messages.close,class:s.close,key:"close",onClick:this.closeAlert,type:"button",ref:e=>this.closeButton=e},i("calcite-icon",{icon:"x",scale:u(this.scale)}))}renderQueueCount(){const e=this.queueLength>2?this.queueLength-1:1,t=this.numberStringFormatter.numberFormatter.format(e);return i("div",{class:{[s.queueCount]:!0,[s.queueCountActive]:this.queueLength>1},key:"queue-count"},i("calcite-chip",{scale:this.scale,value:t},t))}renderActionsEnd(){return i("div",{class:s.actionsEnd},i("slot",{name:a.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(e){return i("div",{class:s.icon},i("calcite-icon",{flipRtl:this.iconFlipRtl,icon:e,scale:u(this.scale)}))}alertSync(e){this.queue!==e.detail.queue&&(this.queue=e.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert(),e.stopPropagation()}alertRegister(){this.open&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.determineActiveAlert()}alertUnregister(e){const t=this.queue.filter(n=>n!==e.detail.alert);this.queue=t,window.dispatchEvent(new CustomEvent("calciteInternalAlertSync",{detail:{queue:t}}))}async setFocus(){await A(this);const e=y(this.el,{selector:"calcite-link"});if(!(!this.closeButton&&!e)){if(e)return e.setFocus();this.closeButton&&this.closeButton.focus()}}effectiveLocaleChange(){E(this,this.effectiveLocale),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}numberingSystemChange(){this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}determineActiveAlert(){var e;if(((e=this.queue)==null?void 0:e[0])===this.el)this.openAlert(),this.autoClose&&!this.autoCloseTimeoutId&&(this.initialOpenTime=Date.now(),this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),l[this.autoCloseDuration]));else return}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}openAlert(){window.clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout(()=>this.queued=!1,300)}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],autoCloseDuration:["updateDuration"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}}};F.style=D;export{F as calcite_alert};
