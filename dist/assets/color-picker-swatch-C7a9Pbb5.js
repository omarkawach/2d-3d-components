import{p as Z,H as V,h as k,F as P}from"./jsxFactory-BxQYPm-b.js";import{D as tt}from"./dom-BvFmd0Ey.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */function T(t,e,n){return n={path:e,exports:{},require:function(r,s){return et()}},t(n,n.exports),n.exports}function et(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},nt=function(e){return!e||typeof e=="string"?!1:e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&e.constructor.name!=="String")},E=T(function(t){var e=Array.prototype.concat,n=Array.prototype.slice,r=t.exports=function(a){for(var i=[],o=0,l=a.length;o<l;o++){var c=a[o];nt(c)?i=e.call(i,n.call(c)):i.push(c)}return i};r.wrap=function(s){return function(){return s(r(arguments))}}}),H=T(function(t){var e=Object.hasOwnProperty,n=Object.create(null);for(var r in q)e.call(q,r)&&(n[q[r]]=r);var s=t.exports={to:{},get:{}};s.get=function(o){var l=o.substring(0,3).toLowerCase(),c,u;switch(l){case"hsl":c=s.get.hsl(o),u="hsl";break;case"hwb":c=s.get.hwb(o),u="hwb";break;default:c=s.get.rgb(o),u="rgb";break}return c?{model:u,value:c}:null},s.get.rgb=function(o){if(!o)return null;var l=/^#([a-f0-9]{3,4})$/i,c=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,u=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,y=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,M=/^(\w+)$/,g=[0,0,0,1],f,d,C;if(f=o.match(c)){for(C=f[2],f=f[1],d=0;d<3;d++){var I=d*2;g[d]=parseInt(f.slice(I,I+2),16)}C&&(g[3]=parseInt(C,16)/255)}else if(f=o.match(l)){for(f=f[1],C=f[3],d=0;d<3;d++)g[d]=parseInt(f[d]+f[d],16);C&&(g[3]=parseInt(C+C,16)/255)}else if(f=o.match(u)){for(d=0;d<3;d++)g[d]=parseInt(f[d+1],0);f[4]&&(f[5]?g[3]=parseFloat(f[4])*.01:g[3]=parseFloat(f[4]))}else if(f=o.match(y)){for(d=0;d<3;d++)g[d]=Math.round(parseFloat(f[d+1])*2.55);f[4]&&(f[5]?g[3]=parseFloat(f[4])*.01:g[3]=parseFloat(f[4]))}else return(f=o.match(M))?f[1]==="transparent"?[0,0,0,0]:e.call(q,f[1])?(g=q[f[1]],g[3]=1,g):null:null;for(d=0;d<3;d++)g[d]=a(g[d],0,255);return g[3]=a(g[3],0,1),g},s.get.hsl=function(o){if(!o)return null;var l=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,c=o.match(l);if(c){var u=parseFloat(c[4]),y=(parseFloat(c[1])%360+360)%360,M=a(parseFloat(c[2]),0,100),g=a(parseFloat(c[3]),0,100),f=a(isNaN(u)?1:u,0,1);return[y,M,g,f]}return null},s.get.hwb=function(o){if(!o)return null;var l=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,c=o.match(l);if(c){var u=parseFloat(c[4]),y=(parseFloat(c[1])%360+360)%360,M=a(parseFloat(c[2]),0,100),g=a(parseFloat(c[3]),0,100),f=a(isNaN(u)?1:u,0,1);return[y,M,g,f]}return null},s.to.hex=function(){var o=E(arguments);return"#"+i(o[0])+i(o[1])+i(o[2])+(o[3]<1?i(Math.round(o[3]*255)):"")},s.to.rgb=function(){var o=E(arguments);return o.length<4||o[3]===1?"rgb("+Math.round(o[0])+", "+Math.round(o[1])+", "+Math.round(o[2])+")":"rgba("+Math.round(o[0])+", "+Math.round(o[1])+", "+Math.round(o[2])+", "+o[3]+")"},s.to.rgb.percent=function(){var o=E(arguments),l=Math.round(o[0]/255*100),c=Math.round(o[1]/255*100),u=Math.round(o[2]/255*100);return o.length<4||o[3]===1?"rgb("+l+"%, "+c+"%, "+u+"%)":"rgba("+l+"%, "+c+"%, "+u+"%, "+o[3]+")"},s.to.hsl=function(){var o=E(arguments);return o.length<4||o[3]===1?"hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)":"hsla("+o[0]+", "+o[1]+"%, "+o[2]+"%, "+o[3]+")"},s.to.hwb=function(){var o=E(arguments),l="";return o.length>=4&&o[3]!==1&&(l=", "+o[3]),"hwb("+o[0]+", "+o[1]+"%, "+o[2]+"%"+l+")"},s.to.keyword=function(o){return n[o.slice(0,3)]};function a(o,l,c){return Math.min(Math.max(l,o),c)}function i(o){var l=Math.round(o).toString(16).toUpperCase();return l.length<2?"0"+l:l}}),L={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const j={};for(const t of Object.keys(L))j[L[t]]=t;const h={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var A=h;for(const t of Object.keys(h)){if(!("channels"in h[t]))throw new Error("missing channels property: "+t);if(!("labels"in h[t]))throw new Error("missing channel labels property: "+t);if(h[t].labels.length!==h[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=h[t];delete h[t].channels,delete h[t].labels,Object.defineProperty(h[t],"channels",{value:e}),Object.defineProperty(h[t],"labels",{value:n})}h.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(e,n,r),a=Math.max(e,n,r),i=a-s;let o,l;a===s?o=0:e===a?o=(n-r)/i:n===a?o=2+(r-e)/i:r===a&&(o=4+(e-n)/i),o=Math.min(o*60,360),o<0&&(o+=360);const c=(s+a)/2;return a===s?l=0:c<=.5?l=i/(a+s):l=i/(2-a-s),[o,l*100,c*100]};h.rgb.hsv=function(t){let e,n,r,s,a;const i=t[0]/255,o=t[1]/255,l=t[2]/255,c=Math.max(i,o,l),u=c-Math.min(i,o,l),y=function(M){return(c-M)/6/u+1/2};return u===0?(s=0,a=0):(a=u/c,e=y(i),n=y(o),r=y(l),i===c?s=r-n:o===c?s=1/3+e-r:l===c&&(s=2/3+n-e),s<0?s+=1:s>1&&(s-=1)),[s*360,a*100,c*100]};h.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const s=h.rgb.hsl(t)[0],a=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[s,a*100,r*100]};h.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(1-e,1-n,1-r),a=(1-e-s)/(1-s)||0,i=(1-n-s)/(1-s)||0,o=(1-r-s)/(1-s)||0;return[a*100,i*100,o*100,s*100]};function rt(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}h.rgb.keyword=function(t){const e=j[t];if(e)return e;let n=1/0,r;for(const s of Object.keys(L)){const a=L[s],i=rt(t,a);i<n&&(n=i,r=s)}return r};h.keyword.rgb=function(t){return L[t]};h.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const s=e*.4124+n*.3576+r*.1805,a=e*.2126+n*.7152+r*.0722,i=e*.0193+n*.1192+r*.9505;return[s*100,a*100,i*100]};h.rgb.lab=function(t){const e=h.rgb.xyz(t);let n=e[0],r=e[1],s=e[2];n/=95.047,r/=100,s/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const a=116*r-16,i=500*(n-r),o=200*(r-s);return[a,i,o]};h.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let s,a,i;if(n===0)return i=r*255,[i,i,i];r<.5?s=r*(1+n):s=r+n-r*n;const o=2*r-s,l=[0,0,0];for(let c=0;c<3;c++)a=e+1/3*-(c-1),a<0&&a++,a>1&&a--,6*a<1?i=o+(s-o)*6*a:2*a<1?i=s:3*a<2?i=o+(s-o)*(2/3-a)*6:i=o,l[c]=i*255;return l};h.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,s=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,s*=a<=1?a:2-a;const i=(r+n)/2,o=r===0?2*s/(a+s):2*n/(r+n);return[e,o*100,i*100]};h.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const s=Math.floor(e)%6,a=e-Math.floor(e),i=255*r*(1-n),o=255*r*(1-n*a),l=255*r*(1-n*(1-a));switch(r*=255,s){case 0:return[r,l,i];case 1:return[o,r,i];case 2:return[i,r,l];case 3:return[i,o,r];case 4:return[l,i,r];case 5:return[r,i,o]}};h.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,s=Math.max(r,.01);let a,i;i=(2-n)*r;const o=(2-n)*s;return a=n*s,a/=o<=1?o:2-o,a=a||0,i/=2,[e,a*100,i*100]};h.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const s=n+r;let a;s>1&&(n/=s,r/=s);const i=Math.floor(6*e),o=1-r;a=6*e-i,i&1&&(a=1-a);const l=n+a*(o-n);let c,u,y;switch(i){default:case 6:case 0:c=o,u=l,y=n;break;case 1:c=l,u=o,y=n;break;case 2:c=n,u=o,y=l;break;case 3:c=n,u=l,y=o;break;case 4:c=l,u=n,y=o;break;case 5:c=o,u=n,y=l;break}return[c*255,u*255,y*255]};h.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,s=t[3]/100,a=1-Math.min(1,e*(1-s)+s),i=1-Math.min(1,n*(1-s)+s),o=1-Math.min(1,r*(1-s)+s);return[a*255,i*255,o*255]};h.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let s,a,i;return s=e*3.2406+n*-1.5372+r*-.4986,a=e*-.9689+n*1.8758+r*.0415,i=e*.0557+n*-.204+r*1.057,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,s=Math.min(Math.max(0,s),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[s*255,a*255,i*255]};h.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const s=116*n-16,a=500*(e-n),i=200*(n-r);return[s,a,i]};h.lab.xyz=function(t){const e=t[0],n=t[1],r=t[2];let s,a,i;a=(e+16)/116,s=n/500+a,i=a-r/200;const o=a**3,l=s**3,c=i**3;return a=o>.008856?o:(a-16/116)/7.787,s=l>.008856?l:(s-16/116)/7.787,i=c>.008856?c:(i-16/116)/7.787,s*=95.047,a*=100,i*=108.883,[s,a,i]};h.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let s;s=Math.atan2(r,n)*360/2/Math.PI,s<0&&(s+=360);const i=Math.sqrt(n*n+r*r);return[e,i,s]};h.lch.lab=function(t){const e=t[0],n=t[1],s=t[2]/360*2*Math.PI,a=n*Math.cos(s),i=n*Math.sin(s);return[e,a,i]};h.rgb.ansi16=function(t,e=null){const[n,r,s]=t;let a=e===null?h.rgb.hsv(t)[2]:e;if(a=Math.round(a/50),a===0)return 30;let i=30+(Math.round(s/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(i+=60),i};h.hsv.ansi16=function(t){return h.rgb.ansi16(h.hsv.rgb(t),t[2])};h.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];return e===n&&n===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};h.ansi16.rgb=function(t){let e=t%10;if(e===0||e===7)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=(~~(t>50)+1)*.5,r=(e&1)*n*255,s=(e>>1&1)*n*255,a=(e>>2&1)*n*255;return[r,s,a]};h.ansi256.rgb=function(t){if(t>=232){const a=(t-232)*10+8;return[a,a,a]}t-=16;let e;const n=Math.floor(t/36)/5*255,r=Math.floor((e=t%36)/6)/5*255,s=e%6/5*255;return[n,r,s]};h.rgb.hex=function(t){const n=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};h.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];e[0].length===3&&(n=n.split("").map(o=>o+o).join(""));const r=parseInt(n,16),s=r>>16&255,a=r>>8&255,i=r&255;return[s,a,i]};h.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.max(Math.max(e,n),r),a=Math.min(Math.min(e,n),r),i=s-a;let o,l;return i<1?o=a/(1-i):o=0,i<=0?l=0:s===e?l=(n-r)/i%6:s===n?l=2+(r-e)/i:l=4+(e-n)/i,l/=6,l%=1,[l*360,i*100,o*100]};h.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let s=0;return r<1&&(s=(n-.5*r)/(1-r)),[t[0],r*100,s*100]};h.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let s=0;return r<1&&(s=(n-r)/(1-r)),[t[0],r*100,s*100]};h.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(n===0)return[r*255,r*255,r*255];const s=[0,0,0],a=e%1*6,i=a%1,o=1-i;let l=0;switch(Math.floor(a)){case 0:s[0]=1,s[1]=i,s[2]=0;break;case 1:s[0]=o,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=i;break;case 3:s[0]=0,s[1]=o,s[2]=1;break;case 4:s[0]=i,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=o}return l=(1-n)*r,[(n*s[0]+l)*255,(n*s[1]+l)*255,(n*s[2]+l)*255]};h.hcg.hsv=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);let s=0;return r>0&&(s=e/r),[t[0],s*100,r*100]};h.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let s=0;return r>0&&r<.5?s=e/(2*r):r>=.5&&r<1&&(s=e/(2*(1-r))),[t[0],s*100,r*100]};h.hcg.hwb=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);return[t[0],(r-e)*100,(1-r)*100]};h.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,s=r-e;let a=0;return s<1&&(a=(r-s)/(1-s)),[t[0],s*100,a*100]};h.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]};h.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]};h.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]};h.gray.hsl=function(t){return[0,0,t[0]]};h.gray.hsv=h.gray.hsl;h.gray.hwb=function(t){return[0,100,t[0]]};h.gray.cmyk=function(t){return[0,0,0,t[0]]};h.gray.lab=function(t){return[t[0],0,0]};h.gray.hex=function(t){const e=Math.round(t[0]/100*255)&255,r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r};h.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};function st(){const t={},e=Object.keys(A);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}function ot(t){const e=st(),n=[t];for(e[t].distance=0;n.length;){const r=n.pop(),s=Object.keys(A[r]);for(let a=s.length,i=0;i<a;i++){const o=s[i],l=e[o];l.distance===-1&&(l.distance=e[r].distance+1,l.parent=r,n.unshift(o))}}return e}function at(t,e){return function(n){return e(t(n))}}function it(t,e){const n=[e[t].parent,t];let r=A[e[t].parent][t],s=e[t].parent;for(;e[s].parent;)n.unshift(e[s].parent),r=at(A[e[s].parent][s],r),s=e[s].parent;return r.conversion=n,r}var lt=function(t){const e=ot(t),n={},r=Object.keys(e);for(let s=r.length,a=0;a<s;a++){const i=r[a];e[i].parent!==null&&(n[i]=it(i,e))}return n};const z={},ct=Object.keys(A);function ht(t){const e=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),t(n))};return"conversion"in t&&(e.conversion=t.conversion),e}function ut(t){const e=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const s=t(n);if(typeof s=="object")for(let a=s.length,i=0;i<a;i++)s[i]=Math.round(s[i]);return s};return"conversion"in t&&(e.conversion=t.conversion),e}ct.forEach(t=>{z[t]={},Object.defineProperty(z[t],"channels",{value:A[t].channels}),Object.defineProperty(z[t],"labels",{value:A[t].labels});const e=lt(t);Object.keys(e).forEach(r=>{const s=e[r];z[t][r]=ut(s),z[t][r].raw=ht(s)})});var S=z;const K=["keyword","gray","hex"],_={};for(const t of Object.keys(S))_[[...S[t].labels].sort().join("")]=t;const R={};function v(t,e){if(!(this instanceof v))return new v(t,e);if(e&&e in K&&(e=null),e&&!(e in S))throw new Error("Unknown model: "+e);let n,r;if(t==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof v)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if(typeof t=="string"){const s=H.get(t);if(s===null)throw new Error("Unable to parse color from string: "+t);this.model=s.model,r=S[this.model].channels,this.color=s.value.slice(0,r),this.valpha=typeof s.value[r]=="number"?s.value[r]:1}else if(t.length>0){this.model=e||"rgb",r=S[this.model].channels;const s=Array.prototype.slice.call(t,0,r);this.color=B(s,r),this.valpha=typeof t[r]=="number"?t[r]:1}else if(typeof t=="number")this.model="rgb",this.color=[t>>16&255,t>>8&255,t&255],this.valpha=1;else{this.valpha=1;const s=Object.keys(t);"alpha"in t&&(s.splice(s.indexOf("alpha"),1),this.valpha=typeof t.alpha=="number"?t.alpha:0);const a=s.sort().join("");if(!(a in _))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=_[a];const{labels:i}=S[this.model],o=[];for(n=0;n<i.length;n++)o.push(t[i[n]]);this.color=B(o)}if(R[this.model])for(r=S[this.model].channels,n=0;n<r;n++){const s=R[this.model][n];s&&(this.color[n]=s(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}v.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in H.to?this:this.rgb();e=e.round(typeof t=="number"?t:1);const n=e.valpha===1?e.color:[...e.color,this.valpha];return H.to[e.model](n)},percentString(t){const e=this.rgb().round(typeof t=="number"?t:1),n=e.valpha===1?e.color:[...e.color,this.valpha];return H.to.rgb.percent(n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=S[this.model],{labels:n}=S[this.model];for(let r=0;r<e;r++)t[n[r]]=this.color[r];return this.valpha!==1&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,this.valpha!==1&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,this.valpha!==1&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new v([...this.color.map(dt(t)),this.valpha],this.model)},alpha(t){return t!==void 0?new v([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:p("rgb",0,w(255)),green:p("rgb",1,w(255)),blue:p("rgb",2,w(255)),hue:p(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:p("hsl",1,w(100)),lightness:p("hsl",2,w(100)),saturationv:p("hsv",1,w(100)),value:p("hsv",2,w(100)),chroma:p("hcg",1,w(100)),gray:p("hcg",2,w(100)),white:p("hwb",1,w(100)),wblack:p("hwb",2,w(100)),cyan:p("cmyk",0,w(100)),magenta:p("cmyk",1,w(100)),yellow:p("cmyk",2,w(100)),black:p("cmyk",3,w(100)),x:p("xyz",0,w(95.047)),y:p("xyz",1,w(100)),z:p("xyz",2,w(108.833)),l:p("lab",0,w(100)),a:p("lab",1),b:p("lab",2),keyword(t){return t!==void 0?new v(t):S[this.model].keyword(this.color)},hex(t){return t!==void 0?new v(t):H.to.hex(this.rgb().round().color)},hexa(t){if(t!==void 0)return new v(t);const e=this.rgb().round().color;let n=Math.round(this.valpha*255).toString(16).toUpperCase();return n.length===1&&(n="0"+n),H.to.hex(e)+n},rgbNumber(){const t=this.rgb().color;return(t[0]&255)<<16|(t[1]&255)<<8|t[2]&255},luminosity(){const t=this.rgb().color,e=[];for(const[n,r]of t.entries()){const s=r/255;e[n]=s<=.04045?s/12.92:((s+.055)/1.055)**2.4}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(t[0]*2126+t[1]*7152+t[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=t[0]*.3+t[1]*.59+t[2]*.11;return v.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let n=e.color[0];return n=(n+t)%360,n=n<0?360+n:n,e.color[0]=n,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const n=t.rgb(),r=this.rgb(),s=e===void 0?.5:e,a=2*s-1,i=n.alpha()-r.alpha(),o=((a*i===-1?a:(a+i)/(1+a*i))+1)/2,l=1-o;return v.rgb(o*n.red()+l*r.red(),o*n.green()+l*r.green(),o*n.blue()+l*r.blue(),n.alpha()*s+r.alpha()*(1-s))}};for(const t of Object.keys(S)){if(K.includes(t))continue;const{channels:e}=S[t];v.prototype[t]=function(...n){return this.model===t?new v(this):n.length>0?new v(n,t):new v([...gt(S[this.model][t].raw(this.color)),this.valpha],t)},v[t]=function(...n){let r=n[0];return typeof r=="number"&&(r=B(n,e)),new v(r,t)}}function ft(t,e){return Number(t.toFixed(e))}function dt(t){return function(e){return ft(e,t)}}function p(t,e,n){t=Array.isArray(t)?t:[t];for(const r of t)(R[r]||(R[r]=[]))[e]=n;return t=t[0],function(r){let s;return r!==void 0?(n&&(r=n(r)),s=this[t](),s.color[e]=r,s):(s=this[t]().color[e],n&&(s=n(s)),s)}}function w(t){return function(e){return Math.max(0,Math.min(t,e))}}function gt(t){return Array.isArray(t)?t:[t]}function B(t,e){for(let n=0;n<e;n++)typeof t[n]!="number"&&(t[n]=0);return t}var pt=v;/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const At=/^[0-9A-F]$/i,bt=/^#[0-9A-F]{3}$/i,mt=/^#[0-9A-F]{6}$/i,yt=/^#[0-9A-F]{4}$/i,wt=/^#[0-9A-F]{8}$/i,Ft=t=>Number((t*100).toFixed()),Ht=t=>Number((t/100).toFixed(2));function J(t,e=!1){return G(t,e)||vt(t,e)}function Q(t,e,n){return t?t.length===e&&n.test(t):!1}function G(t,e=!1){return Q(t,e?5:4,e?yt:bt)}function vt(t,e=!1){return Q(t,e?9:7,e?wt:mt)}function zt(t,e=!1,n=!1){if(t=t.toLowerCase(),t.startsWith("#")||(t=`#${t}`),G(t,e))return D(U(t,e));if(e&&n&&J(t,!1)){const r=G(t,!1);return D(U(`${t}${r?"f":"ff"}`,!0))}return t}function N(t,e=!1){return e?t.hexa():t.hex()}function D(t){const{r:e,g:n,b:r}=t,s=$(e),a=$(n),i=$(r),o="a"in t?$(t.a*255):"";return`#${s}${a}${i}${o}`.toLowerCase()}function $(t){return t.toString(16).padStart(2,"0")}function qt(t){const e={...t,a:t.alpha??1};return delete e.alpha,e}function Et(t){const e={...t,alpha:t.a??1};return delete e.a,e}function U(t,e=!1){if(!J(t,e))return null;t=t.replace("#","");let n,r,s,a;if(t.length===3||t.length===4){const[o,l,c,u]=t.split("");n=parseInt(`${o}${o}`,16),r=parseInt(`${l}${l}`,16),s=parseInt(`${c}${c}`,16),a=parseInt(`${u}${u}`,16)/255}else n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16),a=parseInt(t.slice(6,8),16)/255;return isNaN(a)?{r:n,g:r,b:s}:{r:n,g:r,b:s,a}}const Y=t=>t,b=Y({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"}),m=Y({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function Lt(t){if(typeof t=="string"){if(t.startsWith("#")){const{length:e}=t;if(e===4||e===7)return b.HEX;if(e===5||e===9)return b.HEXA}if(t.startsWith("rgba("))return b.RGBA_CSS;if(t.startsWith("rgb("))return b.RGB_CSS;if(t.startsWith("hsl("))return b.HSL_CSS;if(t.startsWith("hsla("))return b.HSLA_CSS}if(typeof t=="object"){if(F(t,"r","g","b"))return F(t,"a")?m.RGBA:m.RGB;if(F(t,"h","s","l"))return F(t,"a")?m.HSLA:m.HSL;if(F(t,"h","s","v"))return F(t,"a")?m.HSVA:m.HSV}return null}function F(t,...e){return e.every(n=>n&&t&&`${n}`in t)}function $t(t,e){return(t==null?void 0:t.rgb().array().toString())===(e==null?void 0:e.rgb().array().toString())}function Ot(t){return t===b.HEXA||t===b.RGBA_CSS||t===b.HSLA_CSS||t===m.RGBA||t===m.HSLA||t===m.HSVA}function Rt(t){return t===b.HEX?b.HEXA:t===b.RGB_CSS?b.RGBA_CSS:t===b.HSL_CSS?b.HSLA_CSS:t===m.RGB?m.RGBA:t===m.HSL?m.HSLA:t===m.HSV?m.HSVA:t}function _t(t){return t===b.HEXA?b.HEX:t===b.RGBA_CSS?b.RGB_CSS:t===b.HSLA_CSS?b.HSL_CSS:t===m.RGBA?m.RGB:t===m.HSLA?m.HSL:t===m.HSVA?m.HSV:t}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const O={swatch:"swatch",noColorSwatch:"swatch--no-color",checker:"checker"},W={borderLight:"rgba(0, 0, 0, 0.3)",borderDark:"rgba(255, 255, 255, 0.15)"},X=4,x={squareSize:X,size:X*2},kt=":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}",St=Z(class extends V{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(e){this.internalColor=e?pt(e):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const e=!this.internalColor,n={[O.swatch]:!0,[O.noColorSwatch]:e};return k("svg",{class:n,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:e,el:n,internalColor:r}=this,s=e?"100%":"0",i=tt(n)==="light"?W.borderLight:W.borderDark,o={height:"100%",rx:s,stroke:i,"stroke-width":"2",width:"100%"};if(!r)return k(P,null,k("clipPath",{id:"shape"},k("rect",{height:"100%",rx:s,width:"100%"})),k("rect",{"clip-path":`inset(0 round ${s})`,rx:s,...o}),k("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const c=r.alpha(),u=N(r),y=N(r,c<1);return k(P,null,k("title",null,y),k("defs",null,k("pattern",{height:x.size,id:"checker",patternUnits:"userSpaceOnUse",width:x.size,x:"0",y:"0"},k("rect",{class:O.checker,height:x.squareSize,width:x.squareSize,x:"0",y:"0"}),k("rect",{class:O.checker,height:x.squareSize,width:x.squareSize,x:x.squareSize,y:x.squareSize}))),k("rect",{fill:"url(#checker)",height:"100%",rx:s,width:"100%"}),k("rect",{fill:u,style:{"clip-path":c<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${s})`},...o}),c<1?k("rect",{fill:y,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...o}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return kt}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]},void 0,{color:["handleColorChange"]}]);function xt(){if(typeof customElements>"u")return;["calcite-color-picker-swatch"].forEach(e=>{switch(e){case"calcite-color-picker-swatch":customElements.get(e)||customElements.define(e,St);break}})}xt();export{St as C,J as a,Ft as b,pt as c,xt as d,At as e,b as f,Ot as g,N as h,vt as i,Et as j,$t as k,_t as l,qt as m,zt as n,Ht as o,Lt as p,D as r,Rt as t};
