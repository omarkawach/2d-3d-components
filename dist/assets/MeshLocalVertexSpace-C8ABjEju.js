import{dZ as s,o as e,bC as i,y as n,X as p,bg as l,bW as a}from"./index-8ERthB3p.js";let o=class extends s(l){constructor(t){super(t),this.type="georeferenced",this.origin=null}};e([i({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),e([n({type:[Number],nonNullable:!1,json:{write:!0}})],o.prototype,"origin",void 0),o=e([p("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const y=o;let r=class extends s(l){constructor(t){super(t),this.type="local",this.origin=a()}};e([i({local:"local"},{readOnly:!0})],r.prototype,"type",void 0),e([n({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=e([p("esri.geometry.support.MeshLocalVertexSpace")],r);const d=r;export{d as a,y as i};