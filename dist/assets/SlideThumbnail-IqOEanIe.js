import{o as e,y as s,X as i,bg as n}from"./index-8ERthB3p.js";const a="https://.*";function o(t){return!!t&&/^https:\/\/.*/i.test(t)}function l(t){return!!t&&/data:([-\w]+\/[-+\w.]+)?(;?\w+=[-\w]+)*(;base64)?,.*/gu.test(t)}var u;let r=u=class extends n{constructor(){super(...arguments),this.url=""}destroy(){this.url=""}get isSecureUrl(){return o(this.url)}get isDataURI(){return l(this.url)}clone(){return new u({url:this.url})}};e([s({type:String,json:{write:{isRequired:!0}}})],r.prototype,"url",void 0),e([s()],r.prototype,"isSecureUrl",null),e([s()],r.prototype,"isDataURI",null),r=u=e([i("esri.webdoc.support.SlideThumbnail")],r);export{a as t,r as u};
