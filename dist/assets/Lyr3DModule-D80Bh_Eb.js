function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-BY70muwv.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/lyr3DWorker-D8mxX4ag.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,dO as r}from"./index-8ERthB3p.js";function _(){return new Promise(t=>i(()=>import("./lyr3DMain-BY70muwv.js"),__vite__mapDeps([0,1])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function u(){return new Promise(t=>i(()=>import("./lyr3DWorker-D8mxX4ag.js"),__vite__mapDeps([2,1])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,_ as n};
