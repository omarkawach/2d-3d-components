import{b as a}from"./angularMeasurementUtils-CATp35qy.js";import{r as d,a as i}from"./SnappingManager-DUlqpdAB.js";import{r as g}from"./VertexSnappingCandidate-C6L9NQCx.js";function r({x:t,y:e,z:n}){return a(t,e,n??0)}function p(t,e){switch(t.type){case"edge":return t.draped?new d({edgeStart:r(t.start),edgeEnd:r(t.end),targetPoint:r(t.target),objectId:t.objectId,getGroundElevation:e}):new i({edgeStart:r(t.start),edgeEnd:r(t.end),targetPoint:r(t.target),objectId:t.objectId,isDraped:!1});case"vertex":return new g({targetPoint:r(t.target),objectId:t.objectId,isDraped:!1})}}function b(t,e){return t!=null&&t.type==="3d"?(n,o)=>t.elevationProvider.getElevation(n,o,0,e,"ground"):()=>null}export{p as a,b as o};