import{n as M,d as Ce,T as De,F as We,I as Xe,g as Ke}from"./index-DdMA3nMK.js";import{R as g,r as v}from"./index-CjB5IWj2.js";import{g as Me}from"./_commonjsHelpers-BosuxZz1.js";import{r as Ve,a as re,b as Ae}from"./index-BVmsOFc2.js";import"./iframe-CQ3_AFLS.js";import"../sb-preview/runtime.js";import"./index-9xDr244E.js";import"./index-DTjmqu0B.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function N(){return(N=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(r[u]=l[u])}return r}).apply(this,arguments)}function oe(r,i){if(r==null)return{};var l,u,e={},o=Object.keys(r);for(u=0;u<o.length;u++)i.indexOf(l=o[u])>=0||(e[l]=r[l]);return e}function Q(r){var i=v.useRef(r),l=v.useRef(function(u){i.current&&i.current(u)});return i.current=r,l.current}var I=function(r,i,l){return i===void 0&&(i=0),l===void 0&&(l=1),r>l?l:r<i?i:r},$=function(r){return"touches"in r},Z=function(r){return r&&r.ownerDocument.defaultView||self},ue=function(r,i,l){var u=r.getBoundingClientRect(),e=$(i)?function(o,n){for(var t=0;t<o.length;t++)if(o[t].identifier===n)return o[t];return o[0]}(i.touches,l):i;return{left:I((e.pageX-(u.left+Z(r).pageXOffset))/u.width),top:I((e.pageY-(u.top+Z(r).pageYOffset))/u.height)}},fe=function(r){!$(r)&&r.preventDefault()},ae=g.memo(function(r){var i=r.onMove,l=r.onKey,u=oe(r,["onMove","onKey"]),e=v.useRef(null),o=Q(i),n=Q(l),t=v.useRef(null),a=v.useRef(!1),s=v.useMemo(function(){var d=function(y){fe(y),($(y)?y.touches.length>0:y.buttons>0)&&e.current?o(ue(e.current,y,t.current)):p(!1)},m=function(){return p(!1)};function p(y){var b=a.current,k=Z(e.current),E=y?k.addEventListener:k.removeEventListener;E(b?"touchmove":"mousemove",d),E(b?"touchend":"mouseup",m)}return[function(y){var b=y.nativeEvent,k=e.current;if(k&&(fe(b),!function(q,L){return L&&!$(q)}(b,a.current)&&k)){if($(b)){a.current=!0;var E=b.changedTouches||[];E.length&&(t.current=E[0].identifier)}k.focus(),o(ue(k,b,t.current)),p(!0)}},function(y){var b=y.which||y.keyCode;b<37||b>40||(y.preventDefault(),n({left:b===39?.05:b===37?-.05:0,top:b===40?.05:b===38?-.05:0}))},p]},[n,o]),c=s[0],f=s[1],h=s[2];return v.useEffect(function(){return h},[h]),g.createElement("div",N({},u,{onTouchStart:c,onMouseDown:c,className:"react-colorful__interactive",ref:e,onKeyDown:f,tabIndex:0,role:"slider"}))}),S=function(r){return r.filter(Boolean).join(" ")},ie=function(r){var i=r.color,l=r.left,u=r.top,e=u===void 0?.5:u,o=S(["react-colorful__pointer",r.className]);return g.createElement("div",{className:o,style:{top:100*e+"%",left:100*l+"%"}},g.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:i}}))},w=function(r,i,l){return i===void 0&&(i=0),l===void 0&&(l=Math.pow(10,i)),Math.round(l*r)/l},Ge={grad:.9,turn:360,rad:360/(2*Math.PI)},Ue=function(r){return Ie(ee(r))},ee=function(r){return r[0]==="#"&&(r=r.substring(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?w(parseInt(r[3]+r[3],16)/255,2):1}:{r:parseInt(r.substring(0,2),16),g:parseInt(r.substring(2,4),16),b:parseInt(r.substring(4,6),16),a:r.length===8?w(parseInt(r.substring(6,8),16)/255,2):1}},Ye=function(r,i){return i===void 0&&(i="deg"),Number(r)*(Ge[i]||1)},Je=function(r){var i=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return i?Qe({h:Ye(i[1],i[2]),s:Number(i[3]),l:Number(i[4]),a:i[5]===void 0?1:Number(i[5])/(i[6]?100:1)}):{h:0,s:0,v:0,a:1}},Qe=function(r){var i=r.s,l=r.l;return{h:r.h,s:(i*=(l<50?l:100-l)/100)>0?2*i/(l+i)*100:0,v:l+i,a:r.a}},Ze=function(r){return tt(Re(r))},Ne=function(r){var i=r.s,l=r.v,u=r.a,e=(200-i)*l/100;return{h:w(r.h),s:w(e>0&&e<200?i*l/100/(e<=100?e:200-e)*100:0),l:w(e/2),a:w(u,2)}},te=function(r){var i=Ne(r);return"hsl("+i.h+", "+i.s+"%, "+i.l+"%)"},H=function(r){var i=Ne(r);return"hsla("+i.h+", "+i.s+"%, "+i.l+"%, "+i.a+")"},Re=function(r){var i=r.h,l=r.s,u=r.v,e=r.a;i=i/360*6,l/=100,u/=100;var o=Math.floor(i),n=u*(1-l),t=u*(1-(i-o)*l),a=u*(1-(1-i+o)*l),s=o%6;return{r:w(255*[u,t,n,n,a,u][s]),g:w(255*[a,u,u,t,n,n][s]),b:w(255*[n,n,a,u,u,t][s]),a:w(e,2)}},et=function(r){var i=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return i?Ie({r:Number(i[1])/(i[2]?100/255:1),g:Number(i[3])/(i[4]?100/255:1),b:Number(i[5])/(i[6]?100/255:1),a:i[7]===void 0?1:Number(i[7])/(i[8]?100:1)}):{h:0,s:0,v:0,a:1}},j=function(r){var i=r.toString(16);return i.length<2?"0"+i:i},tt=function(r){var i=r.r,l=r.g,u=r.b,e=r.a,o=e<1?j(w(255*e)):"";return"#"+j(i)+j(l)+j(u)+o},Ie=function(r){var i=r.r,l=r.g,u=r.b,e=r.a,o=Math.max(i,l,u),n=o-Math.min(i,l,u),t=n?o===i?(l-u)/n:o===l?2+(u-i)/n:4+(i-l)/n:0;return{h:w(60*(t<0?t+6:t)),s:w(o?n/o*100:0),v:w(o/255*100),a:e}},qe=g.memo(function(r){var i=r.hue,l=r.onChange,u=S(["react-colorful__hue",r.className]);return g.createElement("div",{className:u},g.createElement(ae,{onMove:function(e){l({h:360*e.left})},onKey:function(e){l({h:I(i+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":w(i),"aria-valuemax":"360","aria-valuemin":"0"},g.createElement(ie,{className:"react-colorful__hue-pointer",left:i/360,color:te({h:i,s:100,v:100,a:1})})))}),Oe=g.memo(function(r){var i=r.hsva,l=r.onChange,u={backgroundColor:te({h:i.h,s:100,v:100,a:1})};return g.createElement("div",{className:"react-colorful__saturation",style:u},g.createElement(ae,{onMove:function(e){l({s:100*e.left,v:100-100*e.top})},onKey:function(e){l({s:I(i.s+100*e.left,0,100),v:I(i.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+w(i.s)+"%, Brightness "+w(i.v)+"%"},g.createElement(ie,{className:"react-colorful__saturation-pointer",top:1-i.v/100,left:i.s/100,color:te(i)})))}),$e=function(r,i){if(r===i)return!0;for(var l in r)if(r[l]!==i[l])return!1;return!0},Se=function(r,i){return r.replace(/\s/g,"")===i.replace(/\s/g,"")},nt=function(r,i){return r.toLowerCase()===i.toLowerCase()||$e(ee(r),ee(i))};function Te(r,i,l){var u=Q(l),e=v.useState(function(){return r.toHsva(i)}),o=e[0],n=e[1],t=v.useRef({color:i,hsva:o});v.useEffect(function(){if(!r.equal(i,t.current.color)){var s=r.toHsva(i);t.current={hsva:s,color:i},n(s)}},[i,r]),v.useEffect(function(){var s;$e(o,t.current.hsva)||r.equal(s=r.fromHsva(o),t.current.color)||(t.current={hsva:o,color:s},u(s))},[o,r,u]);var a=v.useCallback(function(s){n(function(c){return Object.assign({},c,s)})},[]);return[o,a]}var rt=typeof window<"u"?v.useLayoutEffect:v.useEffect,ot=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},he=new Map,je=function(r){rt(function(){var i=r.current?r.current.ownerDocument:document;if(i!==void 0&&!he.has(i)){var l=i.createElement("style");l.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,he.set(i,l);var u=ot();u&&l.setAttribute("nonce",u),i.head.appendChild(l)}},[])},at=function(r){var i=r.className,l=r.colorModel,u=r.color,e=u===void 0?l.defaultColor:u,o=r.onChange,n=oe(r,["className","colorModel","color","onChange"]),t=v.useRef(null);je(t);var a=Te(l,e,o),s=a[0],c=a[1],f=S(["react-colorful",i]);return g.createElement("div",N({},n,{ref:t,className:f}),g.createElement(Oe,{hsva:s,onChange:c}),g.createElement(qe,{hue:s.h,onChange:c,className:"react-colorful__last-control"}))},it={defaultColor:"000",toHsva:Ue,fromHsva:function(r){return Ze({h:r.h,s:r.s,v:r.v,a:1})},equal:nt},st=function(r){return g.createElement(at,N({},r,{colorModel:it}))},lt=function(r){var i=r.className,l=r.hsva,u=r.onChange,e={backgroundImage:"linear-gradient(90deg, "+H(Object.assign({},l,{a:0}))+", "+H(Object.assign({},l,{a:1}))+")"},o=S(["react-colorful__alpha",i]),n=w(100*l.a);return g.createElement("div",{className:o},g.createElement("div",{className:"react-colorful__alpha-gradient",style:e}),g.createElement(ae,{onMove:function(t){u({a:t.left})},onKey:function(t){u({a:I(l.a+t.left)})},"aria-label":"Alpha","aria-valuetext":n+"%","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100"},g.createElement(ie,{className:"react-colorful__alpha-pointer",left:l.a,color:H(l)})))},Fe=function(r){var i=r.className,l=r.colorModel,u=r.color,e=u===void 0?l.defaultColor:u,o=r.onChange,n=oe(r,["className","colorModel","color","onChange"]),t=v.useRef(null);je(t);var a=Te(l,e,o),s=a[0],c=a[1],f=S(["react-colorful",i]);return g.createElement("div",N({},n,{ref:t,className:f}),g.createElement(Oe,{hsva:s,onChange:c}),g.createElement(qe,{hue:s.h,onChange:c}),g.createElement(lt,{hsva:s,onChange:c,className:"react-colorful__last-control"}))},ct={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Je,fromHsva:H,equal:Se},ut=function(r){return g.createElement(Fe,N({},r,{colorModel:ct}))},ft={defaultColor:"rgba(0, 0, 0, 1)",toHsva:et,fromHsva:function(r){var i=Re(r);return"rgba("+i.r+", "+i.g+", "+i.b+", "+i.a+")"},equal:Se},ht=function(r){return g.createElement(Fe,N({},r,{colorModel:ft}))},D,de;function dt(){return de||(de=1,D={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),D}var W,ge;function ze(){if(ge)return W;ge=1;const r=dt(),i={};for(const e of Object.keys(r))i[r[e]]=e;const l={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};W=l;for(const e of Object.keys(l)){if(!("channels"in l[e]))throw new Error("missing channels property: "+e);if(!("labels"in l[e]))throw new Error("missing channel labels property: "+e);if(l[e].labels.length!==l[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:o,labels:n}=l[e];delete l[e].channels,delete l[e].labels,Object.defineProperty(l[e],"channels",{value:o}),Object.defineProperty(l[e],"labels",{value:n})}l.rgb.hsl=function(e){const o=e[0]/255,n=e[1]/255,t=e[2]/255,a=Math.min(o,n,t),s=Math.max(o,n,t),c=s-a;let f,h;s===a?f=0:o===s?f=(n-t)/c:n===s?f=2+(t-o)/c:t===s&&(f=4+(o-n)/c),f=Math.min(f*60,360),f<0&&(f+=360);const d=(a+s)/2;return s===a?h=0:d<=.5?h=c/(s+a):h=c/(2-s-a),[f,h*100,d*100]},l.rgb.hsv=function(e){let o,n,t,a,s;const c=e[0]/255,f=e[1]/255,h=e[2]/255,d=Math.max(c,f,h),m=d-Math.min(c,f,h),p=function(y){return(d-y)/6/m+1/2};return m===0?(a=0,s=0):(s=m/d,o=p(c),n=p(f),t=p(h),c===d?a=t-n:f===d?a=1/3+o-t:h===d&&(a=2/3+n-o),a<0?a+=1:a>1&&(a-=1)),[a*360,s*100,d*100]},l.rgb.hwb=function(e){const o=e[0],n=e[1];let t=e[2];const a=l.rgb.hsl(e)[0],s=1/255*Math.min(o,Math.min(n,t));return t=1-1/255*Math.max(o,Math.max(n,t)),[a,s*100,t*100]},l.rgb.cmyk=function(e){const o=e[0]/255,n=e[1]/255,t=e[2]/255,a=Math.min(1-o,1-n,1-t),s=(1-o-a)/(1-a)||0,c=(1-n-a)/(1-a)||0,f=(1-t-a)/(1-a)||0;return[s*100,c*100,f*100,a*100]};function u(e,o){return(e[0]-o[0])**2+(e[1]-o[1])**2+(e[2]-o[2])**2}return l.rgb.keyword=function(e){const o=i[e];if(o)return o;let n=1/0,t;for(const a of Object.keys(r)){const s=r[a],c=u(e,s);c<n&&(n=c,t=a)}return t},l.keyword.rgb=function(e){return r[e]},l.rgb.xyz=function(e){let o=e[0]/255,n=e[1]/255,t=e[2]/255;o=o>.04045?((o+.055)/1.055)**2.4:o/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92;const a=o*.4124+n*.3576+t*.1805,s=o*.2126+n*.7152+t*.0722,c=o*.0193+n*.1192+t*.9505;return[a*100,s*100,c*100]},l.rgb.lab=function(e){const o=l.rgb.xyz(e);let n=o[0],t=o[1],a=o[2];n/=95.047,t/=100,a/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;const s=116*t-16,c=500*(n-t),f=200*(t-a);return[s,c,f]},l.hsl.rgb=function(e){const o=e[0]/360,n=e[1]/100,t=e[2]/100;let a,s,c;if(n===0)return c=t*255,[c,c,c];t<.5?a=t*(1+n):a=t+n-t*n;const f=2*t-a,h=[0,0,0];for(let d=0;d<3;d++)s=o+1/3*-(d-1),s<0&&s++,s>1&&s--,6*s<1?c=f+(a-f)*6*s:2*s<1?c=a:3*s<2?c=f+(a-f)*(2/3-s)*6:c=f,h[d]=c*255;return h},l.hsl.hsv=function(e){const o=e[0];let n=e[1]/100,t=e[2]/100,a=n;const s=Math.max(t,.01);t*=2,n*=t<=1?t:2-t,a*=s<=1?s:2-s;const c=(t+n)/2,f=t===0?2*a/(s+a):2*n/(t+n);return[o,f*100,c*100]},l.hsv.rgb=function(e){const o=e[0]/60,n=e[1]/100;let t=e[2]/100;const a=Math.floor(o)%6,s=o-Math.floor(o),c=255*t*(1-n),f=255*t*(1-n*s),h=255*t*(1-n*(1-s));switch(t*=255,a){case 0:return[t,h,c];case 1:return[f,t,c];case 2:return[c,t,h];case 3:return[c,f,t];case 4:return[h,c,t];case 5:return[t,c,f]}},l.hsv.hsl=function(e){const o=e[0],n=e[1]/100,t=e[2]/100,a=Math.max(t,.01);let s,c;c=(2-n)*t;const f=(2-n)*a;return s=n*a,s/=f<=1?f:2-f,s=s||0,c/=2,[o,s*100,c*100]},l.hwb.rgb=function(e){const o=e[0]/360;let n=e[1]/100,t=e[2]/100;const a=n+t;let s;a>1&&(n/=a,t/=a);const c=Math.floor(6*o),f=1-t;s=6*o-c,c&1&&(s=1-s);const h=n+s*(f-n);let d,m,p;switch(c){default:case 6:case 0:d=f,m=h,p=n;break;case 1:d=h,m=f,p=n;break;case 2:d=n,m=f,p=h;break;case 3:d=n,m=h,p=f;break;case 4:d=h,m=n,p=f;break;case 5:d=f,m=n,p=h;break}return[d*255,m*255,p*255]},l.cmyk.rgb=function(e){const o=e[0]/100,n=e[1]/100,t=e[2]/100,a=e[3]/100,s=1-Math.min(1,o*(1-a)+a),c=1-Math.min(1,n*(1-a)+a),f=1-Math.min(1,t*(1-a)+a);return[s*255,c*255,f*255]},l.xyz.rgb=function(e){const o=e[0]/100,n=e[1]/100,t=e[2]/100;let a,s,c;return a=o*3.2406+n*-1.5372+t*-.4986,s=o*-.9689+n*1.8758+t*.0415,c=o*.0557+n*-.204+t*1.057,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),c=Math.min(Math.max(0,c),1),[a*255,s*255,c*255]},l.xyz.lab=function(e){let o=e[0],n=e[1],t=e[2];o/=95.047,n/=100,t/=108.883,o=o>.008856?o**(1/3):7.787*o+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,t=t>.008856?t**(1/3):7.787*t+16/116;const a=116*n-16,s=500*(o-n),c=200*(n-t);return[a,s,c]},l.lab.xyz=function(e){const o=e[0],n=e[1],t=e[2];let a,s,c;s=(o+16)/116,a=n/500+s,c=s-t/200;const f=s**3,h=a**3,d=c**3;return s=f>.008856?f:(s-16/116)/7.787,a=h>.008856?h:(a-16/116)/7.787,c=d>.008856?d:(c-16/116)/7.787,a*=95.047,s*=100,c*=108.883,[a,s,c]},l.lab.lch=function(e){const o=e[0],n=e[1],t=e[2];let a;a=Math.atan2(t,n)*360/2/Math.PI,a<0&&(a+=360);const c=Math.sqrt(n*n+t*t);return[o,c,a]},l.lch.lab=function(e){const o=e[0],n=e[1],a=e[2]/360*2*Math.PI,s=n*Math.cos(a),c=n*Math.sin(a);return[o,s,c]},l.rgb.ansi16=function(e,o=null){const[n,t,a]=e;let s=o===null?l.rgb.hsv(e)[2]:o;if(s=Math.round(s/50),s===0)return 30;let c=30+(Math.round(a/255)<<2|Math.round(t/255)<<1|Math.round(n/255));return s===2&&(c+=60),c},l.hsv.ansi16=function(e){return l.rgb.ansi16(l.hsv.rgb(e),e[2])},l.rgb.ansi256=function(e){const o=e[0],n=e[1],t=e[2];return o===n&&n===t?o<8?16:o>248?231:Math.round((o-8)/247*24)+232:16+36*Math.round(o/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5)},l.ansi16.rgb=function(e){let o=e%10;if(o===0||o===7)return e>50&&(o+=3.5),o=o/10.5*255,[o,o,o];const n=(~~(e>50)+1)*.5,t=(o&1)*n*255,a=(o>>1&1)*n*255,s=(o>>2&1)*n*255;return[t,a,s]},l.ansi256.rgb=function(e){if(e>=232){const s=(e-232)*10+8;return[s,s,s]}e-=16;let o;const n=Math.floor(e/36)/5*255,t=Math.floor((o=e%36)/6)/5*255,a=o%6/5*255;return[n,t,a]},l.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n},l.hex.rgb=function(e){const o=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!o)return[0,0,0];let n=o[0];o[0].length===3&&(n=n.split("").map(f=>f+f).join(""));const t=parseInt(n,16),a=t>>16&255,s=t>>8&255,c=t&255;return[a,s,c]},l.rgb.hcg=function(e){const o=e[0]/255,n=e[1]/255,t=e[2]/255,a=Math.max(Math.max(o,n),t),s=Math.min(Math.min(o,n),t),c=a-s;let f,h;return c<1?f=s/(1-c):f=0,c<=0?h=0:a===o?h=(n-t)/c%6:a===n?h=2+(t-o)/c:h=4+(o-n)/c,h/=6,h%=1,[h*360,c*100,f*100]},l.hsl.hcg=function(e){const o=e[1]/100,n=e[2]/100,t=n<.5?2*o*n:2*o*(1-n);let a=0;return t<1&&(a=(n-.5*t)/(1-t)),[e[0],t*100,a*100]},l.hsv.hcg=function(e){const o=e[1]/100,n=e[2]/100,t=o*n;let a=0;return t<1&&(a=(n-t)/(1-t)),[e[0],t*100,a*100]},l.hcg.rgb=function(e){const o=e[0]/360,n=e[1]/100,t=e[2]/100;if(n===0)return[t*255,t*255,t*255];const a=[0,0,0],s=o%1*6,c=s%1,f=1-c;let h=0;switch(Math.floor(s)){case 0:a[0]=1,a[1]=c,a[2]=0;break;case 1:a[0]=f,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=c;break;case 3:a[0]=0,a[1]=f,a[2]=1;break;case 4:a[0]=c,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=f}return h=(1-n)*t,[(n*a[0]+h)*255,(n*a[1]+h)*255,(n*a[2]+h)*255]},l.hcg.hsv=function(e){const o=e[1]/100,n=e[2]/100,t=o+n*(1-o);let a=0;return t>0&&(a=o/t),[e[0],a*100,t*100]},l.hcg.hsl=function(e){const o=e[1]/100,t=e[2]/100*(1-o)+.5*o;let a=0;return t>0&&t<.5?a=o/(2*t):t>=.5&&t<1&&(a=o/(2*(1-t))),[e[0],a*100,t*100]},l.hcg.hwb=function(e){const o=e[1]/100,n=e[2]/100,t=o+n*(1-o);return[e[0],(t-o)*100,(1-t)*100]},l.hwb.hcg=function(e){const o=e[1]/100,t=1-e[2]/100,a=t-o;let s=0;return a<1&&(s=(t-a)/(1-a)),[e[0],a*100,s*100]},l.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},l.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},l.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},l.gray.hsl=function(e){return[0,0,e[0]]},l.gray.hsv=l.gray.hsl,l.gray.hwb=function(e){return[0,100,e[0]]},l.gray.cmyk=function(e){return[0,0,0,e[0]]},l.gray.lab=function(e){return[e[0],0,0]},l.gray.hex=function(e){const o=Math.round(e[0]/100*255)&255,t=((o<<16)+(o<<8)+o).toString(16).toUpperCase();return"000000".substring(t.length)+t},l.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]},W}var X,me;function gt(){if(me)return X;me=1;const r=ze();function i(){const o={},n=Object.keys(r);for(let t=n.length,a=0;a<t;a++)o[n[a]]={distance:-1,parent:null};return o}function l(o){const n=i(),t=[o];for(n[o].distance=0;t.length;){const a=t.pop(),s=Object.keys(r[a]);for(let c=s.length,f=0;f<c;f++){const h=s[f],d=n[h];d.distance===-1&&(d.distance=n[a].distance+1,d.parent=a,t.unshift(h))}}return n}function u(o,n){return function(t){return n(o(t))}}function e(o,n){const t=[n[o].parent,o];let a=r[n[o].parent][o],s=n[o].parent;for(;n[s].parent;)t.unshift(n[s].parent),a=u(r[n[s].parent][s],a),s=n[s].parent;return a.conversion=t,a}return X=function(o){const n=l(o),t={},a=Object.keys(n);for(let s=a.length,c=0;c<s;c++){const f=a[c];n[f].parent!==null&&(t[f]=e(f,n))}return t},X}var K,be;function mt(){if(be)return K;be=1;const r=ze(),i=gt(),l={},u=Object.keys(r);function e(n){const t=function(...a){const s=a[0];return s==null?s:(s.length>1&&(a=s),n(a))};return"conversion"in n&&(t.conversion=n.conversion),t}function o(n){const t=function(...a){const s=a[0];if(s==null)return s;s.length>1&&(a=s);const c=n(a);if(typeof c=="object")for(let f=c.length,h=0;h<f;h++)c[h]=Math.round(c[h]);return c};return"conversion"in n&&(t.conversion=n.conversion),t}return u.forEach(n=>{l[n]={},Object.defineProperty(l[n],"channels",{value:r[n].channels}),Object.defineProperty(l[n],"labels",{value:r[n].labels});const t=i(n);Object.keys(t).forEach(s=>{const c=t[s];l[n][s]=o(c),l[n][s].raw=e(c)})}),K=l,K}var bt=mt();const _=Me(bt);var V,ve;function vt(){if(ve)return V;ve=1;var r=Ve(),i=function(){return r.Date.now()};return V=i,V}var A,pe;function pt(){if(pe)return A;pe=1;var r=/\s/;function i(l){for(var u=l.length;u--&&r.test(l.charAt(u)););return u}return A=i,A}var G,ye;function yt(){if(ye)return G;ye=1;var r=pt(),i=/^\s+/;function l(u){return u&&u.slice(0,r(u)+1).replace(i,"")}return G=l,G}var U,xe;function xt(){if(xe)return U;xe=1;var r=yt(),i=re(),l=Ae(),u=NaN,e=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,n=/^0o[0-7]+$/i,t=parseInt;function a(s){if(typeof s=="number")return s;if(l(s))return u;if(i(s)){var c=typeof s.valueOf=="function"?s.valueOf():s;s=i(c)?c+"":c}if(typeof s!="string")return s===0?s:+s;s=r(s);var f=o.test(s);return f||n.test(s)?t(s.slice(2),f?2:8):e.test(s)?u:+s}return U=a,U}var Y,we;function wt(){if(we)return Y;we=1;var r=re(),i=vt(),l=xt(),u="Expected a function",e=Math.max,o=Math.min;function n(t,a,s){var c,f,h,d,m,p,y=0,b=!1,k=!1,E=!0;if(typeof t!="function")throw new TypeError(u);a=l(a)||0,r(s)&&(b=!!s.leading,k="maxWait"in s,h=k?e(l(s.maxWait)||0,a):h,E="trailing"in s?!!s.trailing:E);function q(x){var C=c,O=f;return c=f=void 0,y=x,d=t.apply(O,C),d}function L(x){return y=x,m=setTimeout(T,a),b?q(x):d}function Pe(x){var C=x-p,O=x-y,ce=a-C;return k?o(ce,h-O):ce}function se(x){var C=x-p,O=x-y;return p===void 0||C>=a||C<0||k&&O>=h}function T(){var x=i();if(se(x))return le(x);m=setTimeout(T,Pe(x))}function le(x){return m=void 0,E&&c?q(x):(c=f=void 0,d)}function Le(){m!==void 0&&clearTimeout(m),y=0,c=p=f=m=void 0}function Be(){return m===void 0?d:le(i())}function B(){var x=i(),C=se(x);if(c=arguments,f=this,p=x,C){if(m===void 0)return L(p);if(k)return clearTimeout(m),m=setTimeout(T,a),q(p)}return m===void 0&&(m=setTimeout(T,a)),d}return B.cancel=Le,B.flush=Be,B}return Y=n,Y}var J,ke;function kt(){if(ke)return J;ke=1;var r=wt(),i=re(),l="Expected a function";function u(e,o,n){var t=!0,a=!0;if(typeof e!="function")throw new TypeError(l);return i(n)&&(t="leading"in n?!!n.leading:t,a="trailing"in n?!!n.trailing:a),r(e,o,{leading:t,maxWait:o,trailing:a})}return J=u,J}var _t=kt();const Et=Me(_t);var Ct=M.div({position:"relative",maxWidth:250}),Mt=M(Ce)({position:"absolute",zIndex:1,top:4,left:4}),Nt=M.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Rt=M(De)(({theme:r})=>({fontFamily:r.typography.fonts.base})),It=M.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),qt=M.div(({theme:r,active:i})=>({width:16,height:16,boxShadow:i?`${r.appBorderColor} 0 0 0 1px inset, ${r.textMutedColor}50 0 0 0 4px`:`${r.appBorderColor} 0 0 0 1px inset`,borderRadius:r.appBorderRadius})),Ot=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,_e=({value:r,active:i,onClick:l,style:u,...e})=>{let o=`linear-gradient(${r}, ${r}), ${Ot}, linear-gradient(#fff, #fff)`;return g.createElement(qt,{...e,active:i,onClick:l,style:{...u,backgroundImage:o}})},$t=M(We.Input)(({theme:r})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base})),St=M(Xe)(({theme:r})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color})),He=(r=>(r.RGB="rgb",r.HSL="hsl",r.HEX="hex",r))(He||{}),F=Object.values(He),Tt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,jt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ft=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,ne=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,zt=/^\s*#?([0-9a-f]{3})\s*$/i,Ht={hex:st,rgb:ht,hsl:ut},z={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},Ee=r=>{let i=r==null?void 0:r.match(Tt);if(!i)return[0,0,0,1];let[,l,u,e,o=1]=i;return[l,u,e,o].map(Number)},R=r=>{if(!r)return;let i=!0;if(jt.test(r)){let[n,t,a,s]=Ee(r),[c,f,h]=_.rgb.hsl([n,t,a])||[0,0,0];return{valid:i,value:r,keyword:_.rgb.keyword([n,t,a]),colorSpace:"rgb",rgb:r,hsl:`hsla(${c}, ${f}%, ${h}%, ${s})`,hex:`#${_.rgb.hex([n,t,a]).toLowerCase()}`}}if(Ft.test(r)){let[n,t,a,s]=Ee(r),[c,f,h]=_.hsl.rgb([n,t,a])||[0,0,0];return{valid:i,value:r,keyword:_.hsl.keyword([n,t,a]),colorSpace:"hsl",rgb:`rgba(${c}, ${f}, ${h}, ${s})`,hsl:r,hex:`#${_.hsl.hex([n,t,a]).toLowerCase()}`}}let l=r.replace("#",""),u=_.keyword.rgb(l)||_.hex.rgb(l),e=_.rgb.hsl(u),o=r;if(/[^#a-f0-9]/i.test(r)?o=l:ne.test(r)&&(o=`#${l}`),o.startsWith("#"))i=ne.test(o);else try{_.keyword.hex(o)}catch{i=!1}return{valid:i,value:o,keyword:_.rgb.keyword(u),colorSpace:"hex",rgb:`rgba(${u[0]}, ${u[1]}, ${u[2]}, 1)`,hsl:`hsla(${e[0]}, ${e[1]}%, ${e[2]}%, 1)`,hex:o}},Pt=(r,i,l)=>{if(!r||!(i!=null&&i.valid))return z[l];if(l!=="hex")return(i==null?void 0:i[l])||z[l];if(!i.hex.startsWith("#"))try{return`#${_.keyword.hex(i.hex)}`}catch{return z.hex}let u=i.hex.match(zt);if(!u)return ne.test(i.hex)?i.hex:z.hex;let[e,o,n]=u[1].split("");return`#${e}${e}${o}${o}${n}${n}`},Lt=(r,i)=>{let[l,u]=v.useState(r||""),[e,o]=v.useState(()=>R(l)),[n,t]=v.useState((e==null?void 0:e.colorSpace)||"hex");v.useEffect(()=>{let f=r||"",h=R(f);u(f),o(h),t((h==null?void 0:h.colorSpace)||"hex")},[r]);let a=v.useMemo(()=>Pt(l,e,n).toLowerCase(),[l,e,n]),s=v.useCallback(f=>{let h=R(f),d=(h==null?void 0:h.value)||f||"";u(d),d===""&&(o(void 0),i(void 0)),h&&(o(h),t(h.colorSpace),i(h.value))},[i]),c=v.useCallback(()=>{let f=F.indexOf(n)+1;f>=F.length&&(f=0),t(F[f]);let h=(e==null?void 0:e[F[f]])||"";u(h),i(h)},[e,n,i]);return{value:l,realValue:a,updateValue:s,color:e,colorSpace:n,cycleColorSpace:c}},P=r=>r.replace(/\s*/,"").toLowerCase(),Bt=(r,i,l)=>{let[u,e]=v.useState(i!=null&&i.valid?[i]:[]);v.useEffect(()=>{i===void 0&&e([])},[i]);let o=v.useMemo(()=>(r||[]).map(t=>typeof t=="string"?R(t):t.title?{...R(t.color),keyword:t.title}:R(t.color)).concat(u).filter(Boolean).slice(-27),[r,u]),n=v.useCallback(t=>{t!=null&&t.valid&&(o.some(a=>P(a[l])===P(t[l]))||e(a=>a.concat(t)))},[l,o]);return{presets:o,addPreset:n}},Dt=({name:r,value:i,onChange:l,onFocus:u,onBlur:e,presetColors:o,startOpen:n=!1})=>{let t=v.useCallback(Et(l,200),[l]),{value:a,realValue:s,updateValue:c,color:f,colorSpace:h,cycleColorSpace:d}=Lt(i,t),{presets:m,addPreset:p}=Bt(o,f,h),y=Ht[h];return g.createElement(Ct,null,g.createElement(Mt,{startOpen:n,closeOnOutsideClick:!0,onVisibleChange:()=>p(f),tooltip:g.createElement(Nt,null,g.createElement(y,{color:s==="transparent"?"#000000":s,onChange:c,onFocus:u,onBlur:e}),m.length>0&&g.createElement(It,null,m.map((b,k)=>g.createElement(Ce,{key:`${b.value}-${k}`,hasChrome:!1,tooltip:g.createElement(Rt,{note:b.keyword||b.value})},g.createElement(_e,{value:b[h],active:f&&P(b[h])===P(f[h]),onClick:()=>c(b.value)})))))},g.createElement(_e,{value:s,style:{margin:4}})),g.createElement($t,{id:Ke(r),value:a,onChange:b=>c(b.target.value),onFocus:b=>b.target.select(),placeholder:"Choose color..."}),a?g.createElement(St,{icon:"markup",onClick:d}):null)},Zt=Dt;export{Dt as ColorControl,Zt as default};
