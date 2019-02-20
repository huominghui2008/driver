(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+Cau":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiverMap=t.createMessageBucket=void 0
var a=r(n("MVZn")),l=r(n("zkrS")),u=n("upRB")
t.createMessageBucket=function(o){var i=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"*"
return e&&window.parent.postMessage(JSON.stringify({event:e,payload:t}),n)},e=function(t){if(t.source!==window&&!t.origin.includes("qiyukf")&&t.data&&"string"==typeof t.data)try{var e=JSON.parse(t.data),n=e.event,r=e.payload,a=void 0===r?{}:r
o[n]&&o[n](i,{type:n,payload:a,event:t})}catch(e){console.warn("[receive] error message data",e,t)}}
return window.addEventListener("message",e),{send:i,clear:function(){return window.removeEventListener("message",e)}}}
var o={"message:get:preview-state":function(e){var t=s(),n=t.state,r=t.isHighlight
e("message:data:preview-state",(0,a.default)({},n.model.current,{isHighlight:r}))},"message:set:preview-state":function(e,t){var n=t.payload,r=n.isHighlight,a=n.screenCid,o=s(),i=o.state.model,l=i.current,u=i.screens,c=o.dispatch
if(void 0!==r&&c({type:"reducer:preview-toolbar:update:highlight",payload:{isHighlight:r}}),l.screenCid&&void 0!==a&&a!==l.screenCid){if(!u.find(function(e){return e.cid===a}))return console.warn("[message:set:preview-state] invalid screenCid")
c({type:"entry:sync-runner:set-screen",payload:{cid:a}})}},"message:get:screen-list":function(e){var t=l.default.MB.webpackInterface.store.getState().model,n=t.current
e("message:data:screen-list",t.screens.filter(function(e){return e.project_cid===n.projectCid}).map(function(e){return{cid:e.cid,name:e.name,position:e.position,parent_cid:e.parent_cid,project_cid:e.project_cid}}))},"message:get:notification-state":function(e){var t=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-state",{unreadCount:t?t.notifications.unreadNum:0})},"message:get:notification-list":function(e){var t=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-list",t?t.notifications.notifications:[])}}
t.receiverMap=o
var s=function(){var e=l.default.MB.webpackInterface.store,t=e.getState,n=e.dispatch,r=t(),a=(0,u.getIsHighlight)(r),o=r.model.current.projectCid,i=o&&r.model.projects.find(function(e){return e.cid===o})
return{getState:t,dispatch:n,state:r,project:i,isHighlight:a}}},"+IKJ":function(e,t,n){"use strict"
function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.r(t),n.d(t,"adjustHue",function(){return ge}),n.d(t,"animation",function(){return Xe}),n.d(t,"backgroundImages",function(){return Ge}),n.d(t,"backgrounds",function(){return Ze}),n.d(t,"between",function(){return v}),n.d(t,"border",function(){return Qe}),n.d(t,"borderColor",function(){return A}),n.d(t,"borderRadius",function(){return $e}),n.d(t,
"borderStyle",function(){return et}),n.d(t,"borderWidth",function(){return tt}),n.d(t,"buttons",function(){return it}),n.d(t,"clearFix",function(){return y}),n.d(t,"complement",function(){return ye}),n.d(t,"cover",function(){return b}),n.d(t,"darken",function(){return we}),n.d(t,"desaturate",function(){return Ee}),n.d(t,"directionalProperty",function(){return a}),n.d(t,"ellipsis",function(){return S}),n.d(t,"em",function(){return u}),n.d(t,"fluidRange",function(){return w}),n.d(t,"fontFace",function(){
return C}),n.d(t,"getLuminance",function(){return ke}),n.d(t,"getValueAndUnit",function(){return g}),n.d(t,"grayscale",function(){return _e}),n.d(t,"invert",function(){return xe}),n.d(t,"hideText",function(){return E}),n.d(t,"hideVisually",function(){return k}),n.d(t,"hiDPI",function(){return _}),n.d(t,"hsl",function(){return oe}),n.d(t,"hsla",function(){return ie}),n.d(t,"lighten",function(){return Me}),n.d(t,"margin",function(){return lt}),n.d(t,"mix",function(){return Ie}),n.d(t,"modularScale",function(
){return p}),n.d(t,"normalize",function(){return x}),n.d(t,"opacify",function(){return Re}),n.d(t,"padding",function(){return ut}),n.d(t,"parseToHsl",function(){return $}),n.d(t,"parseToRgb",function(){return Q}),n.d(t,"placeholder",function(){return T}),n.d(t,"position",function(){return st}),n.d(t,"radialGradient",function(){return N}),n.d(t,"readableColor",function(){return Pe}),n.d(t,"rem",function(){return h}),n.d(t,"retinaImage",function(){return I}),n.d(t,"rgb",function(){return le}),n.d(t,"rgba",
function(){return ue}),n.d(t,"saturate",function(){return je}),n.d(t,"selection",function(){return O}),n.d(t,"setHue",function(){return De}),n.d(t,"setLightness",function(){return Fe}),n.d(t,"setSaturation",function(){return We}),n.d(t,"shade",function(){return ze}),n.d(t,"size",function(){return dt}),n.d(t,"stripUnit",function(){return l}),n.d(t,"textInputs",function(){return ht}),n.d(t,"timingFunctions",function(){return P}),n.d(t,"tint",function(){return Ye}),n.d(t,"toColorString",function(){return he}),
n.d(t,"transitions",function(){return mt}),n.d(t,"transparentize",function(){return Je}),n.d(t,"triangle",function(){return B}),n.d(t,"wordWrap",function(){return F})
var s=["Top","Right","Bottom","Left"]
function d(e,t){if(!e)return t.toLowerCase()
var n=e.split("-")
if(1<n.length)return n.splice(1,0,t),n.reduce(function(e,t){return""+e+o(t)})
var r=e.replace(/([a-z])([A-Z])/g,"$1"+t+"$2")
return e===r?""+e+t:r}function a(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var a=n[0],o=n[1],i=void 0===o?a:o,l=n[2],u=void 0===l?a:l,c=n[3]
return function(e,t){for(var n={},r=0;r<t.length;r+=1)(t[r]||0===t[r])&&(n[d(e,s[r])]=t[r])
return n}(e,[a,i,u,void 0===c?i:c])}function i(e,t){return e.substr(-t.length)===t}function l(e){var t=parseFloat(e)
return isNaN(t)?e:t}var r=function(a){return function(e,t){void 0===t&&(t="16px")
var n=e,r=t
if("string"==typeof e){if(!i(e,"px"))throw new Error('Expected a string ending in "px" or a number passed as the first argument to '+a+'(), got "'+e+'" instead.')
n=l(e)}if("string"==typeof t){if(!i(t,"px"))throw new Error('Expected a string ending in "px" or a number passed as the second argument to '+a+'(), got "'+t+'" instead.')
r=l(t)}if("string"==typeof n)throw new Error('Passed invalid pixel value ("'+e+'") to '+a+'(), please pass a value like "12px" or 12.')
if("string"==typeof r)throw new Error('Passed invalid base value ("'+t+'") to '+a+'(), please pass a value like "12px" or 12.')
return""+n/r+a}},u=r("em"),c=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
function g(e){if("string"!=typeof e)return[e,""]
var t=e.match(c)
return t?[parseFloat(e),t[2]]:[e,void 0]}var f={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4}
function p(e,t,n){if(void 0===t&&(t="1em"),void 0===n&&(n="perfectFourth"),"number"!=typeof e)throw new Error("Please provide a number of steps to the modularScale helper.")
if("string"==typeof n&&!f[n])throw new Error("Please pass a number or one of the predefined scales to the modularScale helper as the ratio.")
var r="string"==typeof t?l(t):t,a="string"==typeof n?f[n]:n
if("string"==typeof r)throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "'+t+'"')
return r*Math.pow(a,e)+"em"}var h=r("rem")
function v(e,t,n,r){void 0===n&&(n="320px"),void 0===r&&(r="1200px")
var a=g(e),o=a[0],i=a[1],l=g(t),u=l[0],c=l[1],s=g(n),d=s[0],f=s[1],p=g(r),h=p[0],m=p[1]
if("number"!=typeof d||"number"!=typeof h||!f||!m||f!==m)throw new Error("minScreen and maxScreen must be provided as stringified numbers with the same units.")
if("number"!=typeof o||"number"!=typeof u||!i||!c||i!==c)throw new Error("fromSize and toSize must be provided as stringified numbers with the same units.")
var v=(o-u)/(d-h)
return"calc("+(u-v*h).toFixed(2)+i+" + "+(100*v).toFixed(2)+"vw)"}function y(e){var t
return void 0===e&&(e="&"),(t={})[e+"::after"]={clear:"both",content:'""',display:"table"},t}function b(e){return void 0===e&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function S(e){return void 0===e&&(e="100%"),{display:"inline-block",maxWidth:e,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"}}function w(e,t,n){if(void 0===t&&(t="320px"),void 0===n&&(n="1200px"),!Array.isArray(e)&&"object"!=typeof e||null===e)throw new Error(
"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.")
if(Array.isArray(e)){var r={},a={},o=e,i=Array.isArray(o),l=0
for(o=i?o:o[Symbol.iterator]();;){var u,c,s
if(i){if(l>=o.length)break
s=o[l++]}else{if((l=o.next()).done)break
s=l.value}var d=s
if(!d.prop||!d.fromSize||!d.toSize)throw new Error("expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.")
a[d.prop]=d.fromSize,r["@media (min-width: "+t+")"]=m({},r["@media (min-width: "+t+")"],((u={})[d.prop]=v(d.fromSize,d.toSize,t,n),u)),r["@media (min-width: "+n+")"]=m({},r["@media (min-width: "+n+")"],((c={})[d.prop]=d.toSize,c))}return m({},a,r)}var f,p,h
if(!e.prop||!e.fromSize||!e.toSize)throw new Error("expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.")
return(h={})[e.prop]=e.fromSize,h["@media (min-width: "+t+")"]=((f={})[e.prop]=v(e.fromSize,e.toSize,t,n),f),h["@media (min-width: "+n+")"]=((p={})[e.prop]=e.toSize,p),h}function C(e){var t=e.fontFamily,n=e.fontFilePath,r=e.fontStretch,a=e.fontStyle,o=e.fontVariant,i=e.fontWeight,l=e.fileFormats,u=void 0===l?["eot","woff2","woff","ttf","svg"]:l,c=e.localFonts,s=e.unicodeRange,d=e.fontDisplay,f=e.fontVariationSettings,p=e.fontFeatureSettings
if(!t)throw new Error("fontFace expects a name of a font-family.")
if(!n&&!c)throw new Error("fontFace expects either the path to the font file(s) or a name of a local copy.")
if(c&&!Array.isArray(c))throw new Error("fontFace expects localFonts to be an array.")
if(!Array.isArray(u))throw new Error("fontFace expects fileFormats to be an array.")
var h,m,v,g,y,b={"@font-face":{fontFamily:t,src:(h=n,m=c,v=u,y=[],m&&y.push(m.map(function(e){return'local("'+e+'")'}).join(", ")),h&&y.push((g=h,v.map(function(e){return'url("'+g+"."+e+'")'}).join(", "))),y.join(", ")),unicodeRange:s,fontStretch:r,fontStyle:a,fontVariant:o,fontWeight:i,fontDisplay:d,fontVariationSettings:f,fontFeatureSettings:p}}
return JSON.parse(JSON.stringify(b))}function E(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function k(){return{border:"0",clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function _(e){return void 0===e&&(e=1.3),
"\n    @media only screen and (-webkit-min-device-pixel-ratio: "+e+"),\n    only screen and (min--moz-device-pixel-ratio: "+e+"),\n    only screen and (-o-min-device-pixel-ratio: "+e+"/1),\n    only screen and (min-resolution: "+Math.round(96*e)+"dpi),\n    only screen and (min-resolution: "+e+"dppx)\n  "}function x(){var e
return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e["b,\n    strong"]={fontWeight:"bolder"},e["code,\n    kbd,\n    samp"]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e["sub,\n    sup"]={fontSize:"75%",
lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e["button,\n    input,\n    optgroup,\n    select,\n    textarea"]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e["button,\n    input"]={overflow:"visible"},e["button,\n    select"]={textTransform:"none"},e['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]']={WebkitAppearance:"button"},
e['button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner']={borderStyle:"none",padding:"0"},e['button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring']={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},
e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e['[type="checkbox"],\n    [type="radio"]']={boxSizing:"border-box",padding:"0"},e['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button']={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"}
,e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}function T(e,t){var n
return void 0===t&&(t="&"),(n={})[t+"::-webkit-input-placeholder"]=m({},e),n[t+":-moz-placeholder"]=m({},e),n[t+"::-moz-placeholder"]=m({},e),n[t+":-ms-input-placeholder"]=m({},e),n}function M(){var e,t,n=(e=["radial-gradient(","","","",")"],t||(t=e.slice(0)),e.raw=t,e)
return M=function(){return n},n}function N(e){var t,n=e.colorStops,r=e.extent,a=e.fallback,o=e.position,i=e.shape
if(!n||n.length<2)throw new Error("radialGradient requries at least 2 color-stops to properly render.")
return{backgroundColor:a||(t=n,t[0].split(" ")[0]),backgroundImage:function(e){for(var t="",n=0;n<e.length;n+=1)t+=e[n],3===n&&(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])&&((arguments.length<=1?void 0:arguments[1])||(arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3]))?(t=t.slice(0,-1),t+=", "+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])):3!==n||n+1<1||arguments.length<=n+1||!arguments[n+1]||(arguments.length<=1?void 0:arguments[1])||(
arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3])?(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])&&(t+=(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])+" "):t+=""+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])
return t.trim()}(M(),o,i,r,n.join(", "))}}function I(e,t,n,r,a){var o
if(void 0===n&&(n="png"),void 0===a&&(a="_2x"),!e)throw new Error("Please supply a filename to retinaImage() as the first argument.")
var i=n.replace(/^\./,""),l=r?r+"."+i:""+e+a+"."+i
return(o={backgroundImage:"url("+e+"."+i+")"})[_()]=m({backgroundImage:"url("+l+")"},t?{backgroundSize:t}:{}),o}function O(e,t){var n
return void 0===t&&(t=""),(n={})[t+"::-moz-selection"]=m({},e),n[t+"::selection"]=m({},e),n}var R={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",
easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",
easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"}
function P(e){return R[e]}function A(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["borderColor"].concat(t))}var j=function(e,t,n){switch(e){case"top":return"0 "+n[0]/2+n[1]+" "+t[0]+t[1]+" "+n[0]/2+n[1]
case"left":return""+t[0]/2+t[1]+" "+n[0]+n[1]+" "+t[0]/2+t[1]+" 0"
case"bottom":return""+t[0]+t[1]+" "+n[0]/2+n[1]+" 0 "+n[0]/2+n[1]
case"right":return""+t[0]/2+t[1]+" 0 "+t[0]/2+t[1]+" "+n[0]+n[1]
default:throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")}},L=["bottom","left","top","right"],D=/(\d*\.?\d*)/
function B(e){var t=e.pointingDirection,n=e.height,r=e.width,a=e.foregroundColor,o=e.backgroundColor,i=void 0===o?"transparent":o,l=[parseFloat(r),String(r).replace(D,"")||"px"],u=[parseFloat(n),String(n).replace(D,"")||"px"]
if(isNaN(u[0])||isNaN(l[0]))throw new Error("Passed an invalid value to `height` or `width`. Please provide a pixel based unit")
var c=L.indexOf(t)
return m({width:"0",height:"0",borderWidth:j(t,u,l),borderStyle:"solid"},A.apply(void 0,Array.from({length:4}).map(function(e,t){return t===c?a:i})))}function F(e){return void 0===e&&(e="break-word"),{overflowWrap:e,wordWrap:e,wordBreak:"break-word"===e?"break-all":e}}function U(e){return Math.round(255*e)}function W(e,t,n){return U(e)+","+U(t)+","+U(n)}function q(e,t,n,r){if(void 0===r&&(r=W),0===t)return r(n,n,n)
var a=e%360/60,o=(1-Math.abs(2*n-1))*t,i=o*(1-Math.abs(a%2-1)),l=0,u=0,c=0
0<=a&&a<1?(l=o,u=i):1<=a&&a<2?(l=i,u=o):2<=a&&a<3?(u=o,c=i):3<=a&&a<4?(u=i,c=o):4<=a&&a<5?(l=i,c=o):5<=a&&a<6&&(l=o,c=i)
var s=n-o/2
return r(l+s,u+s,c+s)}var z={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",
darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",
gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",
lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",
olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",
slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}
var H=/^#[a-fA-F0-9]{6}$/,Y=/^#[a-fA-F0-9]{8}$/,V=/^#[a-fA-F0-9]{3}$/,J=/^#[a-fA-F0-9]{4}$/,X=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,G=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,Z=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,K=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/
function Q(e){if("string"!=typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.")
var t=function(e){if("string"!=typeof e)return e
var t=e.toLowerCase()
return z[t]?"#"+z[t]:e}(e)
if(t.match(H))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)}
if(t.match(Y)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2))
return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(V))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)}
if(t.match(J)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2))
return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var a=X.exec(t)
if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)}
var o=G.exec(t)
if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])}
var i=Z.exec(t)
if(i){var l="rgb("+q(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",u=X.exec(l)
if(!u)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+l+".")
return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10)}}var c=K.exec(t)
if(c){var s="rgb("+q(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",d=X.exec(s)
if(!d)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+s+".")
return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+c[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}function $(e){return function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),i=Math.min(n,r,a),l=(o+i)/2
if(o===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l}
var u=o-i,c=.5<l?u/(2-o-i):u/(o+i)
switch(o){case n:t=(r-a)/u+(r<a?6:0)
break
case r:t=(a-n)/u+2
break
default:t=(n-r)/u+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:l,alpha:e.alpha}:{hue:t,saturation:c,lightness:l}}(Q(e))}var ee=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e}
function te(e){var t=e.toString(16)
return 1===t.length?"0"+t:t}function ne(e){return te(Math.round(255*e))}function re(e,t,n){return ee("#"+ne(e)+ne(t)+ne(n))}function ae(e,t,n){return q(e,t,n,re)}function oe(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return ae(e,t,n)
if("object"==typeof e&&void 0===t&&void 0===n)return ae(e.hue,e.saturation,e.lightness)
throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")}function ie(e,t,n,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return 1<=r?ae(e,t,n):"rgba("+q(e,t,n)+","+r+")"
if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return 1<=e.alpha?ae(e.hue,e.saturation,e.lightness):"rgba("+q(e.hue,e.saturation,e.lightness)+","+e.alpha+")"
throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")}function le(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return ee("#"+te(e)+te(t)+te(n))
if("object"==typeof e&&void 0===t&&void 0===n)return ee("#"+te(e.red)+te(e.green)+te(e.blue))
throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function ue(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var a=Q(e)
return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return 1<=r?le(e,t,n):"rgba("+e+","+t+","+n+","+r+")"
if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return 1<=e.alpha?le(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"
throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}var ce=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},se=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},de=function(e){
return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},fe=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha},pe="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object."
function he(e){if("object"!=typeof e)throw new Error(pe)
if(se(e))return ue(e)
if(ce(e))return le(e)
if(fe(e))return ie(e)
if(de(e))return oe(e)
throw new Error(pe)}function me(e){return function t(n,r,a){return function(){var e=a.concat(Array.prototype.slice.call(arguments))
return e.length>=r?n.apply(this,e):t(n,r,e)}}(e,e.length,[])}function ve(e,t){var n=$(t)
return he(m({},n,{hue:(n.hue+parseFloat(e))%360}))}var ge=me(ve)
function ye(e){var t=$(e)
return he(m({},t,{hue:(t.hue+180)%360}))}function be(e,t,n){return Math.max(e,Math.min(t,n))}function Se(e,t){var n=$(t)
return he(m({},n,{lightness:be(0,1,n.lightness-parseFloat(e))}))}var we=me(Se)
function Ce(e,t){var n=$(t)
return he(m({},n,{saturation:be(0,1,n.saturation-parseFloat(e))}))}var Ee=me(Ce)
function ke(e){var n=Q(e),t=Object.keys(n).map(function(e){var t=n[e]/255
return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}),r=t[0],a=t[1],o=t[2]
return parseFloat((.2126*r+.7152*a+.0722*o).toFixed(3))}function _e(e){return he(m({},$(e),{saturation:0}))}function xe(e){var t=Q(e)
return he(m({},t,{red:255-t.red,green:255-t.green,blue:255-t.blue}))}function Te(e,t){var n=$(t)
return he(m({},n,{lightness:be(0,1,n.lightness+parseFloat(e))}))}var Me=me(Te)
function Ne(e,t,n){var r=Q(t),a=m({},r,{alpha:"number"==typeof r.alpha?r.alpha:1}),o=Q(n),i=m({},o,{alpha:"number"==typeof o.alpha?o.alpha:1}),l=a.alpha-i.alpha,u=2*parseFloat(e)-1,c=((u*l==-1?u:u+l)/(1+u*l)+1)/2,s=1-c
return ue({red:Math.floor(a.red*c+i.red*s),green:Math.floor(a.green*c+i.green*s),blue:Math.floor(a.blue*c+i.blue*s),alpha:a.alpha+(i.alpha-a.alpha)*(parseFloat(e)/1)})}var Ie=me(Ne)
function Oe(e,t){var n=Q(t)
return ue(m({},n,{alpha:be(0,1,(100*("number"==typeof n.alpha?n.alpha:1)+100*parseFloat(e))/100)}))}var Re=me(Oe)
function Pe(e){return.179<ke(e)?"#000":"#fff"}function Ae(e,t){var n=$(t)
return he(m({},n,{saturation:be(0,1,n.saturation+parseFloat(e))}))}var je=me(Ae)
function Le(e,t){return he(m({},$(t),{hue:parseFloat(e)}))}var De=me(Le)
function Be(e,t){return he(m({},$(t),{lightness:parseFloat(e)}))}var Fe=me(Be)
function Ue(e,t){return he(m({},$(t),{saturation:parseFloat(e)}))}var We=me(Ue)
function qe(e,t){return Ie(parseFloat(e),"rgb(0, 0, 0)",t)}var ze=me(qe)
function He(e,t){return Ie(parseFloat(e),"rgb(255, 255, 255)",t)}var Ye=me(He)
function Ve(e,t){var n=Q(t)
return ue(m({},n,{alpha:be(0,1,(100*("number"==typeof n.alpha?n.alpha:1)-100*parseFloat(e))/100)}))}var Je=me(Ve)
function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Array.isArray(t[0])
if(!r&&8<t.length)throw new Error("The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation")
return{animation:t.map(function(e){if(r&&!Array.isArray(e)||!r&&Array.isArray(e))throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')")
if(Array.isArray(e)&&8<e.length)throw new Error("The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation")
return Array.isArray(e)?e.join(" "):e}).join(", ")}}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return{backgroundImage:t.join(", ")}}function Ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return{background:t.join(", ")}}var Ke=["top","right","bottom","left"]
function Qe(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var a
return"string"==typeof e&&0<=Ke.indexOf(e)?((a={})["border"+o(e)+"Width"]=n[0],a["border"+o(e)+"Style"]=n[1],a["border"+o(e)+"Color"]=n[2],a):(n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]})}function $e(e,t){var n,r,a=o(e)
if(!t&&0!==t)throw new Error("borderRadius expects a radius value as a string or number as the second argument.")
if("Top"===a||"Bottom"===a)return(n={})["border"+a+"RightRadius"]=t,n["border"+a+"LeftRadius"]=t,n
if("Left"!==a&&"Right"!==a)throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.')
return(r={})["borderTop"+a+"Radius"]=t,r["borderBottom"+a+"Radius"]=t,r}function et(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["borderStyle"].concat(t))}function tt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["borderWidth"].concat(t))}function nt(e,t){return e(t?":"+t:"")}function rt(e,t,n){if(!t)throw new Error("You must provide a template to this method.")
if(0===e.length)return nt(t,null)
for(var r=[],a=0;a<e.length;a+=1){if(n&&n.indexOf(e[a])<0)throw new Error("You passed an unsupported selector state to this method.")
r.push(nt(t,e[a]))}return r=r.join(",")}var at=[void 0,null,"active","focus","hover"]
function ot(e){return"button"+e+',\n  input[type="button"]'+e+',\n  input[type="reset"]'+e+',\n  input[type="submit"]'+e}function it(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return rt(t,ot,at)}function lt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["margin"].concat(t))}function ut(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["padding"].concat(t))}var ct=["absolute","fixed","relative","static","sticky"]
function st(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return 0<=ct.indexOf(e)?m({position:e},a.apply(void 0,[""].concat(n))):a.apply(void 0,["",e].concat(n))}function dt(e,t){return void 0===t&&(t=e),{height:e,width:t}}var ft=[void 0,null,"active","focus","hover"]
function pt(e){return'input[type="color"]'+e+',\n    input[type="date"]'+e+',\n    input[type="datetime"]'+e+',\n    input[type="datetime-local"]'+e+',\n    input[type="email"]'+e+',\n    input[type="month"]'+e+',\n    input[type="number"]'+e+',\n    input[type="password"]'+e+',\n    input[type="search"]'+e+',\n    input[type="tel"]'+e+',\n    input[type="text"]'+e+',\n    input[type="time"]'+e+',\n    input[type="url"]'+e+',\n    input[type="week"]'+e+",\n    input:not([type])"+e+",\n    textarea"+e}
function ht(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return rt(t,pt,ft)}function mt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(Array.isArray(t[0])&&2===t.length){var r=t[1]
if("string"!=typeof r)throw new Error("Property must be a string value.")
return{transition:t[0].map(function(e){return e+" "+r}).join(", ")}}return{transition:t.join(", ")}}},"+c4W":function(e,t,n){var r=n("711d"),a=n("4/ic"),o=n("9ggG"),i=n("9Nap")
e.exports=function(e){return o(e)?r(i(e)):a(e)}},"/5+U":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.immutableTransformCache=function(e){var t,n
return function(){return function(e,t){if(!e||e.length!==t.length)return!1
for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1
return!0}(n,arguments)||(t=e.apply(null,arguments),n=arguments),t}},t.delRecentColor=t.saveRecentColor=t.getHistoryColor=t.isChinese=t.isEnglish=t.downloadFail=t.setTimeoutAsync=t.getMinBoundingRect=t.save2Digital=t.downloadWithATag=t.adjustImageRect=t.adapterScreen=t.unescapeHTML=void 0
var r={"&amp;":"&","&lt;":"<","&gt;":">"},a=/(&amp;|&lt;|&gt;)/g,o=function(e){return r[e]||e}
t.unescapeHTML=function(e){return e&&e.replace(a,o)}
t.adapterScreen=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0
return Number(parseFloat((1/t*e).toFixed(2)))+n}
t.adjustImageRect=function(e){var t=e.image,n=e.adjust,r=t.naturalWidth
t.naturalHeight<=r?t.style.maxWidth=n+"px":t.style.maxHeight=n+"px"}
var u=/\s|<|>|《|》|:|：|？|\?|\\|\/|"|”|\||\./g
t.downloadWithATag=function(e){var t,n=e.url,r=e.name,a=e.type,o=document.createElement("a"),i=(t=r)&&t.replace(u,"_")||"未命名",l="".concat(encodeURIComponent(i))
o.href=a?"".concat(n,"?attname=").concat(l,".").concat(a):(o.setAttribute("download",l),"".concat(n)),o.click()}
t.save2Digital=function(e){return Number(e.toFixed(2))}
t.getMinBoundingRect=function(e){var t=e.width,n=e.height,r=e.left,a=e.top,o=e.rotate,i=void 0===o?0:o
if(0===i)return[a,r,t,n]
var l=MB.atan2(t,n),u=l-i,c=u-2*l,s=u+180,d=c+180,f=r+t/2,p=a+n/2,h=MB.hypotenuse(t/2,n/2),m=1/0,v=1/0,g=-1/0,y=-1/0
return[u,c,s,d].forEach(function(e){var t=Math.round(f+h*MB.cos(e)),n=Math.round(p+h*MB.sin(e))
t<m&&(m=t),n<v&&(v=n),g<t&&(g=t),y<n&&(y=n)}),[v,m,g-m,y-v]}
t.setTimeoutAsync=function(t){return new Promise(function(e){return setTimeout(e,t)})}
t.downloadFail=function(){return console.error("下载失败")}
t.isChinese=function(e){var t="".concat(e).charCodeAt(0)
return 19968<=t&&t<=40869}
t.isEnglish=function(e){return/\w/.test(e)}
var i=function(){try{var e=MB.localStorageDelegate.getItem("user_pick_color")
return JSON.parse(e||"[]")}catch(e){return[]}}
t.getHistoryColor=i
t.saveRecentColor=function(e){var t=i()
return t.includes(e)?{history:t,focusColor:e}:(t.unshift(e),40<t.length&&t.pop(),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),{history:t,focusColor:null})}
t.delRecentColor=function(e){var t=i(),n=t.indexOf(e)
return t.splice(n,1),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),t}},"/9aa":function(e,t){e.exports=function(){return!1}},"/MKq":function(e,t){function u(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function n(l){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=l.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var r,a=(r=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.join("").replace(/<br>/g,"<br/>").replace(/&nbsp;/g," ").replace(l,""))
case 1:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})
t.prepareHTMLString=a
var o,i=(o=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","<style>".concat(c).concat(t.join(""),"</style>").replace(/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,"").replace(/#iefix&/g,"").replace(l,""))
case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})
t.prepareCSSString=i
var l=/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,c='\ninput[type="radio"] { -webkit-appearance: radio; -moz-appearance: radio; }\ninput[type="checkbox"] { -webkit-appearance: checkbox; -moz-appearance: checkbox; }\ninput[type="radio"], input[type="checkbox"] { box-sizing: border-box; max-width: 20px; max-height: 20px; }\ninput { -webkit-appearance: textfield; -moz-appearance: textfield; }\nselect { -webkit-appearance: menulist; -moz-appearance: menulist; }\n'
t.prepareSVGString=function(e){var t=e.domString,n=e.width,r=e.height
return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="'.concat(n,'" height="').concat(r,'">\n<switch>\n  <foreignObject width="').concat(n,'" height="').concat(r,'">\n    <body xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px">').concat(t,'</body>\n  </foreignObject>\n  <text font-size="24">\n    <tspan x="').concat(n/2,'" y="').concat(r/2,'" text-anchor="middle">Feature not supported</tspan>\n  </text>\n</switch>\n</svg>')},
t.prepareImageElement=function(e){var r=e.svgDataUrl,a=e.width,o=e.height
return new Promise(function(e,t){var n=document.createElement("img")
n.addEventListener("error",t),n.addEventListener("load",function(){return e(n)}),n.crossOrigin="anonymous",n.width=a,n.height=o,n.src=r})},t.prepareCanvasElement=function(e){var n=e.imageElement,r=e.width,a=e.height
return new Promise(function(e){var t=document.createElement("canvas")
t.width=r,t.height=a,setTimeout(function(){t.getContext("2d").drawImage(n,0,0),e(t)},0)})}},"/N2d":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"collectScreenVariantData",{enumerable:!0,get:function(){return i.collectScreenVariantData}}),Object.defineProperty(t,"collectScreenVariantBaseData",{enumerable:!0,get:function(){return i.collectScreenVariantBaseData}}),t.getScreenThumbnailZoom=t.doRenderScreenToCanvasElement=t.doRenderScreenToHTMLString=t.renderScreenToCanvasElement=t.renderScreenToHTMLString=t.collectScreenModelData=void 0
var s=r(n("o0o1")),a=r(n("yXPU")),u=r(n("q1tI")),c=r(n("KAy6")),d=n("t5S/"),o=n("87hQ"),f=r(n("zkrS")),i=n("wUZt"),p=n("Hn6C");(0,o.setFetchOption)({method:"GET",cache:"default",mode:"no-cors",credentials:"same-origin"})
var h=function(e){var t=e.canvasData.canvasZoom,n=e.screen,r=e.screenState,a=f.default.Global.$("body"),o=a.data("scale"),i=r?r.cid:"default"
a.data("scale",100)
var l=c.default.renderToString(u.default.createElement(p.MBScreenSnapshot,{screen:n,canvasZoom:t,state_cid:i}))
return a.data("scale",o),l}
t.collectScreenModelData=h
var m=function(e){var t=e.canvasData,n=e.screen,r=e.screenState
return h({canvasData:t,screen:n,screenState:r})}
t.renderScreenToHTMLString=m
var v=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,l,u,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.canvasData,r=t.screen,a=t.screenState,n.canvasZoom,o=n.canvasWidth,i=n.canvasHeight,l=h({canvasData:n,screen:r,screenState:a}),e.next=5,(0,d.createSnapshotFromHTMLSourceList)({htmlSourceList:[l],width:o,height:i})
case 5:return u=e.sent,u.svgString,u.imageElement,c=u.canvasElement,e.abrupt("return",c)
case 11:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.renderScreenToCanvasElement=v
t.doRenderScreenToHTMLString=function(e){var t=e.screenCid,n=e.screenStateCid,r=e.canvasZoom,a=g(t,n,r),o=a.canvasData,i=a.screen,l=a.screenState
return{canvasData:o,htmlString:m({canvasData:o,screen:i,screenState:l})}}
var l=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,l,u,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.screenCid,r=t.screenStateCid,a=t.canvasZoom,o=g(n,r,a),i=o.canvasData,l=o.screen,u=o.screenState,e.next=4,v({canvasData:i,screen:l,screenState:u})
case 4:return c=e.sent,e.abrupt("return",{canvasData:i,canvasElement:c})
case 6:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doRenderScreenToCanvasElement=l
var g=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default",e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=f.default.SpineModel.Screen.all().find(function(e){return e.cid===t}),a=f.default.SpineModel.Screenstate.all().find(function(e){return e.cid===n})
return{canvasData:(0,i.collectScreenVariantBaseData)(r,a,e),screen:r,screenState:a}}
t.getScreenThumbnailZoom=function(e,t){return Number((128/Math.max(e,t)).toFixed(2))}},"/OM1":function(e,t,n){e.exports={scroll_bar_container:"_1mGhCSr1Vi5Ce5afxkyMak"}},"/Q2I":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),S=r(n("q1tI")),f=a(n("17x9")),w=n("i8i4"),p=a(n("Y+p1")),C=a(n("i6OX"))
n("NYM8")
var h=[],m=Object.assign(document.createElement("div"),{className:"modal-portal"}),E=function(e){return e.stopPropagation()},v=function(e){function a(){var e,b;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return b=(0,l.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(b)),"onOpen",function(){h.unshift((0,s.default)((0,s.default)(b))),setTimeout(function(){return b.portal.classList.add("is-open")},50),b.focusOnConfirmBtn(),b.reassignPosiY()}),(0,d.default)((0,s.default)((0,s.default)(b)),"onClose",function(){var e=h.indexOf((0,s.default)((0,s.default)(b)))
setTimeout(function(){return h.splice(e,1)}),setTimeout(function(){return b.portal.classList.remove("is-open")},50),setTimeout(function(){return(0,w.render)(S.default.createElement("div",null),b.portal)},500)}),(0,d.default)((0,s.default)((0,s.default)(b)),"focusOnConfirmBtn",function(){return setTimeout(function(){var e=b.portal.querySelector("footer .confirm-btn")
e&&e.focus()},50)}),(0,d.default)((0,s.default)((0,s.default)(b)),"listenToKey",function(e){var t=e.key,n=e.target,r=b.props,a=r.isOpen,o=r.canCloseOnEsc,i=r.onClose,l=r.canConfirmOnEnter,u=r.onConfirm,c=r.isOnConfirmDisabled
"Escape"===t&&!n.matches("input, textarea, [type=select]")&&a&&o&&i&&(0,s.default)((0,s.default)(b))===h[0]&&i(),"Enter"===t&&!n.matches("textarea")&&a&&l&&u&&!c&&(0,s.default)((0,s.default)(b))===h[0]&&u()}),(0,d.default)((0,s.default)((0,s.default)(b)),"reassignPosiY",function(){return setTimeout(function(){var e=b.props.type,t=b.portal.querySelector(".modal-mask > div")
if(t&&"alert"!==e){var n=window.innerHeight,r=t.offsetHeight,a=n<=r||(n-r)/2<.2*n?"add":"remove"
t.classList[a]("is-posi-centered")}},50)}),(0,d.default)((0,s.default)((0,s.default)(b)),"renderRealModal",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:b.props,t=e.type,n=e.title,r=e.className,a=e.maskClassName,o=e.children,i=e.onClose,l=e.canCloseOnClickMask,u=e.onConfirm,c=e.confirmText,s=e.isOnConfirmDisabled,d=e.onCancel,f=e.cancelText,p=e.isOnCancelDisabled,h=e.onDone,m=e.doneText,v=e.isOnDoneDisabled,g="alert"===t||d||u||h,y=S.default.createElement("div",{
className:"modal-mask ".concat(a," ").concat(l?"can-close":""),onClick:l?i:null},S.default.createElement("div",{className:"".concat(t,"-modal ").concat(r),onClick:E},S.default.createElement("header",null,n,i&&S.default.createElement("button",{className:"close-btn",onClick:i},S.default.createElement(C.default,{name:"times"}))),S.default.createElement("div",{className:"content"},o),g&&S.default.createElement("footer",null,d&&S.default.createElement("button",{className:"cancel-btn",onClick:d,disabled:p},f),
u&&S.default.createElement("button",{className:"confirm-btn",onClick:u,disabled:s},c),h&&S.default.createElement("button",{className:"done-btn",onClick:h,disabled:v},m))));(0,w.render)(y,b.portal)}),b}return(0,c.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){var e=this.props,t=e.isOpen,n=e.portalClassName
Object.assign(this,{portal:m.cloneNode()}),document.body.appendChild(this.portal),this.portal.className+=" ".concat(n),window.addEventListener("resize",this.reassignPosiY),document.addEventListener("keydown",this.listenToKey),t&&(this.renderRealModal(),this.onOpen())}},{key:"componentWillReceiveProps",value:function(e){(0,p.default)(this.props,e)||this.renderRealModal(e)
var t=e.isOpen,n=this.props.isOpen
!n&&t?this.onOpen():n&&!t&&this.onClose()}},{key:"componentWillUnmount",value:function(){(0,w.unmountComponentAtNode)(this.portal),this.portal&&this.portal.remove(),document.removeEventListener("keydown",this.listenToKey),window.removeEventListener("resize",this.reassignPosiY)}}]),a}(S.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{isOpen:f.default.bool,type:f.default.oneOf(["alert","functional","display"]),title:f.default.any,className:f.default.string,maskClassName:f.default.string,portalClassName:f.default.string,children:f.default.any,onClose:f.default.func,onCloseText:f.default.string,canCloseOnClickMask:f.default.bool,canCloseOnEsc:f.default.bool,canConfirmOnEnter:f.default.bool,onConfirm:f.default.func,confirmText:f.default.string,isOnConfirmDisabled:f.default.bool,
onCancel:f.default.func,isOnCancelDisabled:f.default.bool,cancelText:f.default.string,onDone:f.default.func,isOnDoneDisabled:f.default.bool,doneText:f.default.string}),(0,d.default)(v,"defaultProps",{isOpen:!1,type:"functional",className:"",maskClassName:"",portalClassName:"",onClose:function(){return null},canCloseOnClickMask:!0,canCloseOnEsc:!0,canConfirmOnEnter:!0,onCloseText:I18N.close,confirmText:I18N.confirm,isOnConfirmDisabled:!1,cancelText:I18N.cancel,isOnCancelDisabled:!1,doneText:I18N.done,
isOnDoneDisabled:!1})},"/TnQ":function(e,t,n){"use strict"
var r=n("ANjH").compose
t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},"/cyv":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"container:modal:open":return(0,a.default)({},r,{isOpen:!0})
case"container:modal:close":return(0,a.default)({},e,{isOpen:!1})}return e}
var a=r(n("MVZn")),o={isOpen:!1,type:"alert",alertType:"alert",title:"",desc:"",onClose:function(){return null},onCancel:null,onConfirm:null,cancelText:void 0,confirmText:void 0,canCancel:!0,canConfirm:!0,canClose:!0}},"/rSK":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarker=void 0
var c=a(n("pVnL")),i=a(n("MVZn")),l=a(n("lwsE")),o=a(n("W8MJ")),s=a(n("a1gu")),d=a(n("Nsbk")),u=a(n("7W2i")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=a(n("vOnD")),v=n("fiFu"),g=function(e){function r(e){var u;(0,l.default)(this,r),u=(0,s.default)(this,(0,d.default)(r).call(this,e))
var a={isDragging:!1,position:{left:0,top:0}},t=(0,i.default)({},b,{mousemove:(0,v.muteEvent)(function(e){var t,n,r,a,o=u.props,i=o.commentThread,l=o.markerOperations.getMarkerPosition(e);(u.state.isDragging||(n=l,r=(t=i).left-n.left,a=t.top-n.top,S<=r*r+a*a))&&u.setState({isDragging:!0,position:l})}),mouseup:(0,v.muteEvent)(function(e){if(o(),u.state.isDragging){var t=u.props,n=t.commentThread,r=t.markerOperations
r.doUpdateCommentThread((0,i.default)({cid:n.cid},r.getMarkerPosition(e)))}else setTimeout(function(){var e=u.props,t=e.isFocus,n=e.commentThread
e.markerOperations.setFocusCommentThreadCid(t?null:n.cid)},0)
u.setState(a)}),mouseleave:function(){o(),u.props.markerOperations.setHoverFocusCommentThreadCid(null),u.setState(a)}}),n=(0,i.default)({},b,{mouseup:t.mouseup}),o=function(){return u.props.markerOperations.removeContainerEventListener(u.props.isEditable?t:n)}
return u.markerListenerMap={onMouseDown:(0,v.muteEvent)(function(){return u.props.markerOperations.addContainerEventListener(u.props.isEditable?t:n)}),onMouseEnter:(0,v.muteEvent)(function(){return!u.props.isFocus&&u.props.markerOperations.setHoverFocusCommentThreadCid(u.props.commentThread.cid)}),onMouseLeave:(0,v.muteEvent)(function(){return u.props.isFocus&&u.props.markerOperations.setHoverFocusCommentThreadCid(null)}),onMouseUp:v.MUTE_EVENT,onDoubleClick:v.MUTE_EVENT,onClick:v.MUTE_EVENT},u.state=a,u}
return(0,u.default)(r,e),(0,o.default)(r,[{key:"render",value:function(){var e=this.props,t=e.commentThread,n=e.scale,r=e.isFocus,a=e.isFade,o=e.commentMarkerIndex,i=this.state,l=i.isDragging,u=i.position
return p.default.createElement(y,{className:r?"focus":!r&&a?"fade":"",style:{left:"".concat((l?u.left:t.left)*n,"px"),top:"".concat((l?u.top:t.top)*n,"px")}},p.default.createElement("span",(0,c.default)({tabIndex:o},this.markerListenerMap),o))}}]),r}(p.PureComponent)
t.CommentMarker=g,(0,f.default)(g,"propTypes",{commentMarkerIndex:h.default.number.isRequired,commentThread:h.default.object.isRequired,scale:h.default.number.isRequired,isEditable:h.default.bool,isFocus:h.default.bool,isFade:h.default.bool,markerOperations:h.default.object.isRequired})
var y=m.default.div.withConfig({displayName:"CommentMarkerPanelMarker__CommentMarkerDiv",componentId:"kuapf2-0"})(["position:absolute;width:","px;height:","px;overflow:visible;& > span{display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;margin-left:","px;margin-top:","px;width:","px;height:","px;font-size:14px;line-height:",
"px;box-shadow:0 2px 10px rgba(108,0,0,0.22);border:2px solid #fff;border-radius:100%;background:#ff7100;color:#fbfbfc;transition:all 0.1s ease-in;transform:scale(1);}&.focus > span{transform:scale(1.21);}&.fade > span{opacity:0.5;}"],0,0,-14,-14,28,28,28),b={mouseup:v.MUTE_EVENT,mousedown:v.MUTE_EVENT,mousemove:v.MUTE_EVENT,mouseleave:v.MUTE_EVENT,mouseout:v.MUTE_EVENT,click:v.MUTE_EVENT,dblclick:v.MUTE_EVENT},S=225},"00a+":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.withTooltip=t.TooltipContext=t.withTheme=t.ThemeContext=void 0
var o=a(n("pVnL")),i=a(n("MVZn")),l=a(n("QILm")),u=a(n("lwsE")),c=a(n("W8MJ")),s=a(n("a1gu")),d=a(n("Nsbk")),f=a(n("7W2i")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v={light:"plain",grey:"core",dark:"core"},g=m.default.createContext("light")
t.ThemeContext=g
t.withTheme=function(r){var n=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,n=(0,l.default)(e,["forwardedRef"])
return m.default.createElement(g.Consumer,null,function(e){return m.default.createElement(r,(0,i.default)({ref:t,theme:v[e]},n))})}}]),t}(m.PureComponent)
return(0,p.default)(n,"propTypes",{forwardedRef:h.default.object}),m.default.forwardRef(function(e,t){return m.default.createElement(n,(0,o.default)({},e,{forwardedRef:t}))})}
var y=m.default.createContext()
t.TooltipContext=y
t.withTooltip=function(r){var n=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,n=(0,l.default)(e,["forwardedRef"])
return m.default.createElement(y.Consumer,null,function(e){return m.default.createElement(r,(0,i.default)({ref:t,tipClassName:e},n))})}}]),t}(m.PureComponent)
return(0,p.default)(n,"propTypes",{forwardedRef:h.default.object}),m.default.forwardRef(function(e,t){return m.default.createElement(n,(0,o.default)({},e,{forwardedRef:t}))})}},"0JQy":function(e,t){var n="\\ud800-\\udfff",r="["+n+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^"+n+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+a+"|"+o+")"+"?",s="[\\ufe0e\\ufe0f]?",d=s+c+("(?:\\u200d(?:"+[i,l,u].join("|")+")"+s+c+")*"),
f="(?:"+[i+a+"?",a,l,u,r].join("|")+")",p=RegExp(o+"(?="+o+")|"+f+d,"g")
e.exports=function(e){return e.match(p)||[]}},"0L8M":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,l.getModalElement)()
i.default.render(o.default.createElement(e,(0,a.default)({},t,{onClose:function(){return setTimeout(function(){i.default.unmountComponentAtNode(n),document.body.removeChild(n)})}})),n)}
var a=r(n("pVnL")),o=r(n("q1tI")),i=r(n("i8i4")),l=n("6x+O")},"0ZTe":function(e,t,n){var o=n("wy8a"),i=n("quyA"),l=n("Em2t"),u=n("dt0z")
e.exports=function(a){return function(e){e=u(e)
var t=i(e)?l(e):void 0,n=t?t[0]:e.charAt(0),r=t?o(t,1).join(""):e.slice(1)
return n[a]()+r}}},"0k54":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getNewItems=t.getTreeBoundingRect=t.mapItemsToTrees=void 0
var S=n("l0oT"),w=n("DdHt"),C=n("eMfL")
t.mapItemsToTrees=function(e){var t={},n={root:[]}
return e.forEach(function(e){(t[e.cid]=e).gid?(n[e.gid]=n[e.gid]||[],n[e.gid].push(e)):n.root.push(e)}),n.root.map(function(e){return{cid:e.cid,widget:e,children:n[e.cid]||[]}})}
t.getTreeBoundingRect=function(e){return"group"===e.type?a(e):r(e.widget)}
var r=function(e){var t=e.t(),n=e.l(),r=e.r(),a=e.b()
return{minX:Math.min(n,r),minY:Math.min(t,a),maxX:Math.max(n,r),maxY:Math.max(t,a)}},a=function n(e){var r=1/0,a=1/0,o=-1/0,i=-1/0
if("group"===e.type)e.children.forEach(function(e){var t=n(e)
r=Math.min(r,t.minX),a=Math.min(a,t.minY),o=Math.max(o,t.maxX),i=Math.max(i,t.maxY)})
else{var t=e.widget.rect()
r=t.left,a=t.top,o=t.right,i=t.bottom}return{minX:r,minY:a,maxX:o,maxY:i}}
t.getNewItems=function(e,t){if(e.every(function(e){return e.gid})){var n,r,a=(0,C.findNodeByCid)(e[0].gid,t),o=a.widget.ro,i=a.children.map(function(e){return e.widget}),l=(0,w.itemsGetRect)(i),u=l.left,c=l.top,s=l.bottom,d=l.right,f={},p=e.map(function(e){return f[e.cid]=e.dup(),e.cid}),h=i.map(function(e){return p.includes(e.cid)?f[e.cid]:e.dup()}),m=(0,w.itemsGetRect)(h),v=m.left,g=m.top,y=m.bottom,b=m.right
return v===u&&g===c&&b===d&&y===s||((n=u-v)&&h.forEach(function(e){e.top-=Math.round(n/2*(0,S.sin)(o)),e.left+=Math.round(n/2-n/2*(0,S.cos)(o))}),(r=c-g)&&h.forEach(function(e){e.left+=Math.round(r/2*(0,S.sin)(o)),e.top+=Math.round(r/2-r/2*(0,S.cos)(o))}),(r=y-s)&&h.forEach(function(e){e.left-=Math.round(r/2*(0,S.sin)(o)),e.top-=Math.round(r/2-r/2*(0,S.cos)(o))}),(n=b-d)&&h.forEach(function(e){e.top+=Math.round(n/2*(0,S.sin)(o)),e.left-=Math.round(n/2-n/2*(0,S.cos)(o))})),h}return e}},"0uCA":function(e,t,n
){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(n("lwsE")),a=r(n("W8MJ")),l=r(n("a1gu")),u=r(n("Nsbk")),c=r(n("7W2i")),s=r(n("PJYZ")),d=r(n("lSNA")),f=r(n("q1tI")),o=r(n("17x9")),p=n("1qiG"),h=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,l.default)(this,(e=(0,u.default)(o)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(a)),"genLines",function(e,t){var n=a.props.style,r=[]
return 0<e.top&&r.push(f.default.createElement("div",{key:"top",className:"line top",style:{borderTopStyle:"".concat(n.dashed?"dashed":"solid"),borderTopColor:n.colorForLines,top:(0,p.toPercentage)(e.top/t.height)}})),e.left+e.width<t.width&&r.push(f.default.createElement("div",{key:"right",className:"line right",style:{borderLeftStyle:"".concat(n.dashed?"dashed":"solid"),borderLeftColor:n.colorForLines,left:(0,p.toPercentage)((e.left+e.width)/t.width)}})),e.top+e.height<t.height&&r.push(
f.default.createElement("div",{key:"bottom",className:"line bottom",style:{borderTopStyle:"".concat(n.dashed?"dashed":"solid"),borderTopColor:n.colorForLines,top:(0,p.toPercentage)((e.top+e.height)/t.height)}})),0<e.left&&r.push(f.default.createElement("div",{key:"left",className:"line left",style:{borderLeftStyle:"".concat(n.dashed?"dashed":"solid"),borderLeftColor:n.colorForLines,left:(0,p.toPercentage)(e.left/t.width)}})),r}),a}return(0,c.default)(o,e),(0,a.default)(o,[{key:"render",value:function(){
var e=this.props,t=e.refRect,n=e.screen
return f.default.createElement("div",{className:"verbose-auxiliary-lines"},this.genLines(t,n))}}]),o}(f.default.Component);(t.default=h).propTypes={refRect:o.default.object,screen:o.default.object,style:o.default.object}},"1Uxz":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ImageInfo=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9")),h=n("RUem"),m=a(n("sEfC")),v=n("/5+U"),g=function(e){function o(){var e,r;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(r)),"imageRef",function(e){return r.$image=e}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleClick",function(){var e=r.props,t=e.imageSetZip,n=e.name;(0,v.downloadWithATag)({url:t,name:n,type:"zip"})}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleOnload",function(){(0,v.adjustImageRect)({image:r.$image,adjust:38}),r.setState({imageLoad:!0})}),(0,f.default)((0,d.default)((
0,d.default)(r)),"handleError",function(){console.error("image info error")}),(0,f.default)((0,d.default)((0,d.default)(r)),"debounceClick",(0,m.default)(r.handleClick,500,{leading:!0})),r}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.imageSet,n=e.name,r=t[0].src,a={background:"url(".concat(y,") left top"),backgroundSize:"cover"}
return p.default.createElement(h.WrapComponent,null,p.default.createElement("div",{className:"slice-title"},I18N.preview_panel.export,p.default.createElement("span",{onClick:this.debounceClick},I18N.preview_panel.download_single)),p.default.createElement("div",{className:"slice-panel"},p.default.createElement("div",{className:"slice-item-wrap",style:a},p.default.createElement("img",{src:r,alt:n,ref:this.imageRef,onLoad:this.handleOnload,onError:this.handleError})),p.default.createElement("p",{
className:"slice-item-name"},n)))}}]),o}(p.PureComponent)
t.ImageInfo=g,(0,f.default)(g,"propTypes",{imageSetZip:o.default.string,imageSet:o.default.array,name:o.default.string})
var y="/images/preview/slice-bg.png"},"1hJj":function(e,t,n){var r=n("Z0cm")
e.exports=function(){if(!arguments.length)return[]
var e=arguments[0]
return r(e)?e:[e]}},"1iCU":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SHELL_TYPE_LIST_WITHOUT_DEVICE=t.SHELL_TYPE_LIST=t.TOOLBAR_TRAKING_CONFIG=t.PREVIEW_OFFLINE_ICON_LIST=t.PREVIEW_ICON_LIST=t.PREVIEW_CONFIG=t.COMMENT=t.PREVIEW=t.INSPECT=void 0
var r="inspect"
t.INSPECT=r
var a="preview",o="comment",i=[t.PREVIEW=a,r,t.COMMENT=o]
t.PREVIEW_CONFIG=i
var l=[{label:I18N.preview.preview,icon:a},{label:I18N.preview_panel.developer_mode,icon:r},{label:I18N.preview_panel.comment,icon:o}],u=(t.PREVIEW_ICON_LIST=l).slice(0,2)
t.PREVIEW_OFFLINE_ICON_LIST=u
t.TOOLBAR_TRAKING_CONFIG={preview:"打开了预览界面",inspect:"切换到标注页面",comment:"切换到评论页面"}
var c=[{value:"device",label:I18N.device_shell},{value:"default",label:I18N.default_shell},{value:"none",label:I18N.none_shell}],s=(t.SHELL_TYPE_LIST=c).concat().splice(1,2)
t.SHELL_TYPE_LIST_WITHOUT_DEVICE=s},"1mjR":function(e,t,n){},"1qiG":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.toPercentage=t.getDistancesForDirections=void 0
var u=n("ZXhj")
t.getDistancesForDirections=function(e,t){if((0,u.checkIfTwoRectsOverlap)(e,t))return{top:e.top-t.top,right:t.left+t.width-(e.left+e.width),bottom:t.top+t.height-(e.top+e.height),left:e.left-t.left}
var n={},r=function(e,t){var n=[],r=(0,u.getMinContainingRect)(e,t)
if(r.width<e.width+t.width)n[0]=null
else{var a=r.width-(e.width+t.width),o=t.left>e.left
n[0]=o?a:-a}if(r.height<e.height+t.height)n[1]=null
else{var i=r.height-(e.height+t.height),l=t.top>e.top
n[1]=l?i:-i}return n}(e,t)
return 0<r[0]?n.right=r[0]:r[0]<0&&(n.left=Math.abs(r[0])),0<r[1]?n.bottom=r[1]:r[1]<0&&(n.top=Math.abs(r[1])),n}
t.toPercentage=function(e){return"".concat(100*e,"%")}},"2AqR":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("H27A")),l=n("upRB"),i=(0,a.connect)(function(e){var t=e.model.unreadComment.hasUnreadComment,n=e.container,r=n.common.scale,a=n.previewSetting,o=a.toolbarActiveItem,i=a.loadSliceUrl
return{scale:r,project:(0,l.getCurrentProject)(e),toolbarActiveItem:o,hasUnreadComment:t,loadSliceUrl:i,isScrollable:(0,l.getIsScrollable)(e),isHighlight:(0,l.getIsHighlight)(e),isStickyShow:(0,l.getIsStickyShow)(e),shellType:(0,l.getShellType)(e)}})(o.default)
t.default=i},"2EV6":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.canProjectSetOrientation=t.getProjectPlatformByDevice=t.getProjectType=void 0
t.getProjectType=function(e){return e.combo?"combo":e.template||e.user_template?"template":"project"}
t.getProjectPlatformByDevice=function(e){switch(e){case"iphone":case"ipad":case"apple_watch":return"ios"
case"android":return"android"
default:return"others"}}
t.canProjectSetOrientation=function(e){return!e.template&&!e.combo&&["android","ipad","iphone"].includes(e.device)}},"2b0G":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("6XO9")
n("mxnB")
var h=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{className:"last-screen","data-action":"last",onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"left-arrow",name:"angle_bracket_left"})),f.default.createElement("span",{className:"next-screen","data-action":"next",
onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"right-arrow",name:"angle_bracket_right"})))}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{onClick:d.default.func})},"2eJi":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var y=r(n("J4zp")),a=r(n("MVZn")),b=n("upRB"),o=n("6UMJ"),i=n("CWx7"),l=n("4daP"),S=n("Gbs1"),u=(0,a.default)({},o.keyEntry,i.runnerEntry,l.playSettingEntry,{"entry:init:preview:scale":function(e){var t=e.getState,n=e.dispatch,r=t(),a=(0,b.getCurrentProject)(r)
if(MB.isUIChina()&&"geely_center_control"===a.model)n({type:"preview:set:scale",payload:{scale:40}})
else{var o,i=a.cid,l=(o=i,Number(MB.localStorageDelegate.getItem("preview_scale_".concat(o))))
l&&!MB.isForum()?n({type:"preview:set:scale",payload:{scale:l}}):n({type:"entry:auto-fit:preview:scale"})}},"entry:auto-fit:preview:scale":function(e){var t=e.getState,n=e.dispatch,r=t(),a=r.container.previewSetting.isFullScreenMode,o=(0,b.getCurrentProject)(r),i=(0,b.getCurrentScreen)(r),l=(0,b.getShellType)(r),u=(0,S.getProjectShell)(o,l),c="landscape"===i.orientation?[u.height,u.width]:[u.width,u.height],s=(0,y.default)(c,2),d=s[0],f=s[1],p=o.template?.8:1,h=a||MB.isForum()?0:500,m=window.innerWidth*p-h,
v=window.innerHeight*p-56,g=100*Math.min((v-40)/f,(m-40)/d)
n({type:"preview:set:scale",payload:{scale:Math.min(Math.max(g,20),100)}})},"entry:preview:set:scale":function(e,t){var n,r,a=e.dispatch,o=e.getState,i=t.payload.scale,l=o(),u=l.model.current.projectCid
!l.container.previewSetting.isFullScreenMode&&(n=u,r=i,MB.localStorageDelegate.setItem("preview_scale_".concat(n),r)),a({type:"preview:set:scale",payload:{scale:i}})},"entry:preview:set:canvas:offset":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload.offset,o=n(),i=(0,b.getCurrentScreen)(o),l=(0,b.getCurrentScale)(o),u=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),c=u.width,s=u.height,d=Math.max(3.5*c,i.width*l/100*2),f=Math.max(3.5*s,i.height*l/100*2),p=a.x,h=a.y
r({type:"preview:set:canvas:offset",payload:{offset:{x:p=-Math.max(Math.min(-p,d/2),-d/2),y:h=-Math.max(Math.min(-h,f/2),-f/2)}}})},"entry:enter:full-screen-mode":function(e){var t=e.dispatch
MB.event("ga","全屏模式开启","运行页"),MB.event("zhuge","运行页-全屏模式开启"),t({type:"entry:preview:select",payload:{toolbarActiveItem:"preview"}}),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!0}}),t({type:"entry:auto-fit:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:-28}}})},"entry:exit:fill-screen-mode":function(e){var t=e.dispatch
MB.event("ga","全屏模式关闭","运行页"),MB.event("zhuge","运行页-全屏模式关闭"),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),t({type:"entry:init:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}})
t.entryMap=u},"2g7H":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("MVZn")),l=n("upRB"),u={useTransform:!1,disableTouch:!1,disablePointer:!0,preventDefault:!0,ignoreEventException:function(e){var t=$(e.target).closest(".widget")
if(t.length){if(t.hasClass("webpage"))return!0
if(t.hasClass("map_view"))return!0
if(t.find("input").length)return!0}var n=$(e.target).closest(".ppanel")
if(n.length){var r=Panel.find(n.data("cid")),a=r.getState(MB.currentScreen.state_cid),o=r.ct()
if(o.height>a.height||o.width>a.width)return!0}return!1}},c=(0,i.default)({},u,{probeType:3,scrollbars:!0,mouseWheel:!0,disableMouse:!1,interactiveScrollbars:!0,shrinkScrollbars:"scale",fadeScrollbars:!0,HWCompositing:!1}),s=function(){function e(){(0,a.default)(this,e),this.iScrollMap={}}return(0,o.default)(e,[{key:"clear",value:function(){this.destroyScrollBar()}},{key:"setObjectUrl",value:function(e,t){e&&(e.contentWindow?e.contentWindow.location.replace(t):e.setAttribute("src",t))}},{key:"deviceOrient",
value:function(){return $(window).width()>$(window).height()?"landscape":"portrait"}},{key:"toggleScrollBar",value:function(t){Object.values(this.iScrollMap).forEach(function(e){t?e.enable():e.disable()})}},{key:"renderScrollbar",value:function(e){this.iScrollMap[e]?this._refreshScrollBar(e):this._initScrollBar(e)}},{key:"_initScrollBar",value:function(e){if(!this.iScrollMap[e]){var n=document.querySelector("#pscreen".concat(e," .screen-content"))
if(!n)throw new Error("初始化滚动条失败, 找不到对应的DOM元素"+e)
var t=MB.isMobile()?u:c,r=new window.IScroll(n,t),a=document.querySelector("#sticky-container")
a&&r.on("scroll",function(e){var t=n.querySelector(".widgets")
a.querySelector("#stickies").style.marginTop=t.style.top}),MB.isMobile()||$(n).on("wheel",function(e){n.offsetHeight!==n.scrollHeight&&e.stopPropagation()}),this.iScrollMap[e]=r}}},{key:"_refreshScrollBar",value:function(e){this.iScrollMap[e]&&this.iScrollMap[e].refresh()}},{key:"resetScreenScrollState",value:function(e){var t=this.iScrollMap[e]
t&&t.scrollTo(0,0)
var n=document.querySelector("#stickies")
n&&(n.style.marginTop=0)}},{key:"destroyScrollBar",value:function(){Object.values(this.iScrollMap).forEach(function(e){$(e.wrapper).off("wheel"),e.destroy()}),this.iScrollMap={}}},{key:"destroyScrollBarByCid",value:function(e){var t=this.iScrollMap[e]
t&&($(t.wrapper).off("wheel"),t.destroy(),delete this.iScrollMap[e])}},{key:"resetScrollState",value:function(){Object.values(this.iScrollMap).forEach(function(e){return e.scrollTo(0,0)})
var e=document.querySelector("#stickies")
e&&(e.style.marginTop=0)}},{key:"setupStatusBar",value:function(e){var t=$(".pcanvas.active .status_bar").removeClass("standalone light")
if(window.innerHeight>window.innerWidth){t.addClass("standalone")
var n=e.sb()
!n||n.th&&"light"!=n.th||t.addClass("light")}if(MB.isIOS9()&&this.deviceOrient()===e.orient()){var r=MB.COMPONENTS.status_bar.height
$("#app").css({top:0-r,height:window.innerHeight+r})}}},{key:"hideScreen",value:function(e){$(e).hide(),$(e).find(".iframe").each(function(e,t){MB.runner.runnerUtil.setObjectUrl(t,"about:blank")})}},{key:"getIsImmersive",value:function(){return(0,l.getIsImmersive)(MB.webpackInterface.store.getState())}},{key:"getIsHighlight",value:function(){return(0,l.getIsHighlight)(MB.webpackInterface.store.getState())}},{key:"getIsScreenExpanded",value:function(){return(0,l.getIsScreenExpanded)(
MB.webpackInterface.store.getState())}},{key:"getCurrentScreen",value:function(){var e=(0,l.getRunnerActiveScreenCid)(MB.webpackInterface.store.getState())
return Screen.find(e)}}]),e}()
t.default=s},"2mf/":function(e,t,n){"use strict"
t.__esModule=!0
var r,a=n("q1tI"),l=(r=a)&&r.__esModule?r:{default:r},u=n("ta7q"),c=n("CWLX")
function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(o){function i(){var e,t
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i)
for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a]
return(e=t=s(this,o.call.apply(o,[this].concat(r)))).state="function"==typeof t.props.start?t.props.start():t.props.start,t.checkTransitionStatus=function(){t.TRANSITION_SCHEDULES||(t.interval.stop(),!1===t.props.show&&(t.renderNull=!0,t.setState(function(e){return e})))},t.interval=null,t.renderNull=!0,s(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,o),i.prototype.componentWillMount=function(){!0===this.props.show&&(this.renderNull=!1)},i.prototype.componentDidMount=function(){var e=this.props,t=e.enter,n=e.show
t&&!0===n&&c.transition.call(this,"function"==typeof t?t():t)},i.prototype.componentWillReceiveProps=function(e){var t=this,n=e.show,r=e.start,a=e.enter,o=e.update,i=e.leave
!1===this.props.show&&!0===this.renderNull&&!0===n?(this.renderNull=!1,this.setState(function(){return"function"==typeof r?r():r},function(){a&&c.transition.call(t,"function"==typeof a?a():a)})):!0===this.props.show&&!1===n?i?(c.transition.call(this,"function"==typeof i?i():i),this.interval=(0,u.interval)(this.checkTransitionStatus)):(this.renderNull=!0,this.setState(function(e){return e})):!0===n&&o&&(this.interval&&this.interval.stop(),c.transition.call(this,"function"==typeof o?o():o))},
i.prototype.componentWillUnmount=function(){this.interval&&this.interval.stop(),c.stop.call(this)},i.prototype.render=function(){if(!0===this.renderNull)return null
var e=this.props.children(this.state)
return e&&l.default.Children.only(e)},i}(a.Component)
o.defaultProps={show:!0},t.default=o},"2rMq":function(n,r,a){var o
!function(){"use strict"
var e=!("undefined"==typeof window||!window.document||!window.document.createElement),t={canUseDOM:e,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen}
void 0===(o=function(){return t}.call(r,a,r,n))||(n.exports=o)}()},"2rXa":function(e,t,n){},"2s0x":function(e,t,n){e.exports={"slice-container":"_2FLjTBOWTdJe3M3sw-VdYI","slice-load-wrap":"_3KRRSNQeMq8ecSlOMYMVeF","slice-item":"_33HowBUzwgAHj2ZrVfoG3D",active:"oKXaiboaXdf8OtZ5FC5BI",download:"_1fom5UBbirvQ9gHFIkoaaz","icon-download":"_1bkbkk-E2IExD0mLX66FYn","no-slice":"_2lJKTFDIEz2pCYIaVad38l",spinner:"_3_b065M_IA1bQOZX-cJx3-","rotate-infinite":"pHICLqPtUNQ0NhVXRboiI",
"download-slice-load":"_2VjpVdYeSW_HDEeGZ3M2DG"}},"3V46":function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,a=n("2mf/"),o=(r=a)&&r.__esModule?r:{default:r}
t.default=o.default},"3X8Y":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){return(new Date).getTime()},l=function(){function e(){(0,a.default)(this,e),this.coolDownTime=i(),this.coolDownInterval=200}return(0,o.default)(e,[{key:"isCoolDown",value:function(){var e=i()-this.coolDownTime
return this.coolDownTime+=e,e>this.coolDownInterval}},{key:"resetCoolDown",value:function(){this.coolDownTime-=this.coolDownInterval}}]),e}()
t.default=l},"3caq":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createWorkspacePusher=void 0
var u,S=r(n("o0o1")),c=r(n("yXPU")),s=r(n("MVZn")),d=n("Hmy9"),f=n("Clcl"),p=n("LPEl"),h=n("RrAf"),m=n("qYFl"),v=window.MB
t.createWorkspacePusher=function(e){var n=e.filterStaleData,t=(0,s.default)({},h.initialSocketState,{projectCidList:[]}),a=(0,h.createSocketStore)(t)
a.openSocket({userId:v.user.id})
var l=a.getState().userSocket
l.on("broadcast:user:notification",function(e){return a.dispatchEvent({type:"socket:broadcast:user:notification",payload:e})}),l.on("broadcast:user:data",function(e){return a.dispatchEvent({type:"socket:broadcast:user:data",payload:e})}),l.on("broadcast:project:data",function(e){return a.dispatchEvent({type:"socket:broadcast:project:data",payload:e})}),l.on("broadcast:project:batch-save",function(e){return a.dispatchEvent({type:"socket:broadcast:project:batch-save",payload:e})}),l.on(
"broadcast:upgrade-notice:new",function(e){var t=-1!==location.hostname.indexOf("pro")||-1!==location.hostname.indexOf("mockingbot.com")||-1!==location.hostname.indexOf("mockingbot.in")?2:1
"free"===e.target_users&&2===t||"pro"===e.target_users&&1===t||a.dispatchEvent({type:"socket:broadcast:upgrade-notice:new",payload:e.data})})
var r=(i=(0,c.default)(S.default.mark(function e(t){var n,r
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState(),r=n.projectCidList,e.abrupt("return",!r.includes(t)&&l.emitAsync("join:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket joined project",e),a.setState({projectCidList:(0,p.arrayMatchPush)(r,t)})},f.REPORT_ERROR))
case 2:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)}),o=function(){var e=a.getState().projectCidList
return l.emitAsync("leave:projects",{projectCidList:e}).then(function(e){console.log("userSocket left all project",e),a.setState({projectCidList:[]})},f.REPORT_ERROR)},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=a.getServerTimestamp(),t=e.reduce(function(e,t){var n=t.object,r=n.cid,a=n.mtime,o=void 0===a?i:a
return e[r]=o,e},{})
return n(t)}
var i
return a.addEventListener("socket:open",(0,c.default)(S.default.mark(function e(){var t,n,r
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.getState(),n=t.userSocket,r=t.projectCidList,e.t0=r.length,e.t0)return e.next=5,n.emitAsync("join:projects",{projectCidList:r}).catch(f.REPORT_ERROR)
e.next=5
break
case 5:case"end":return e.stop()}},e,this)}))),a.addEventListener("socket:broadcast:user:notification",function(e){var t=e.type,n=e.payload
console.log("[SocketBroadcastData]",t,n),u&&(0,d.handleNotification)(n,u)}),a.addEventListener("socket:broadcast:user:data",function(e){var t=e.type,n=e.payload
console.log("[SocketBroadcastData]",t,n)
var r=b(n).remoteStaleCidSet,a=!0,o=!1,i=void 0
try{for(var l,u=n[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value,s=c.action,d=c.className,f=c.object
y(r,d,s,f)}}catch(e){o=!0,i=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}}),a.addEventListener("socket:broadcast:project:data",function(e){var p=e.type,h=e.payload
return a.queueAsync((0,c.default)(S.default.mark(function e(){var t,n,r,a,o,i,l,u,c,s,d,f
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",p,h),t=b(h),n=t.remoteStaleCidSet,a=!(r=!0),o=void 0,e.prev=5,i=h[Symbol.iterator]()
case 7:if(r=(l=i.next()).done){e.next=14
break}return u=l.value,c=u.action,s=u.className,d=u.object,f=u.extraInfo,e.next=11,w(n,s,c,d,f)
case 11:r=!0,e.next=7
break
case 14:e.next=20
break
case 16:e.prev=16,e.t0=e.catch(5),a=!0,o=e.t0
case 20:e.prev=20,e.prev=21,r||null==i.return||i.return()
case 23:if(e.prev=23,a)throw o
e.next=26
break
case 26:return e.finish(23)
case 27:return e.finish(20)
case 28:case"end":return e.stop()}},e,this,[[5,16,20,28],[21,,23,27]])})))}),a.addEventListener("socket:broadcast:project:batch-save",function(e){var g=e.type,y=e.payload
return a.queueAsync((0,c.default)(S.default.mark(function e(){var t,n,r,a,o,i,l,u,c,s,d,f,p,h,m,v
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",g,y),t=y.fromUser,n=y.rootProjectCid,r=y.batchSaveQueue,a=(void 0===r?[]:r).map(function(e){var t=e.method,n=e.body,r=e.extraInfo
return{className:r.className,action:"PUT"===t?"update":"DELETE"===t?"destroy":"POST"===t?"create":"",object:n?JSON.parse(n):{cid:r.cid},extraInfo:r}}),o=b(a),i=o.remoteStaleCidSet,u=!(l=!0),c=void 0,e.prev=7,s=a[Symbol.iterator]()
case 9:if(l=(d=s.next()).done){e.next=16
break}return f=d.value,p=f.className,h=f.action,m=f.object,v=f.extraInfo,e.next=13,w(i,p,h,m,v,n,t)
case 13:l=!0,e.next=9
break
case 16:e.next=22
break
case 18:e.prev=18,e.t0=e.catch(7),u=!0,c=e.t0
case 22:e.prev=22,e.prev=23,l||null==s.return||s.return()
case 25:if(e.prev=25,u)throw c
e.next=28
break
case 28:return e.finish(25)
case 29:return e.finish(22)
case 30:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])})))}),a.addEventListener("socket:broadcast:upgrade-notice:new",function(e){return e.type,e.payload,a.queueAsync((0,c.default)(S.default.mark(function e(){return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v.action("entry:update:upgrade-notice-indicator-status",{status:"TWINKLE"})
case 1:case"end":return e.stop()}},e,this)})))}),(0,s.default)({},a,{requestBatchSave:function(e){var t=e.batchSaveQueue,n=void 0===t?[]:t,r=e.rootProjectCid,a=void 0===r?"":r,o=e.fromUser,i=void 0===o?{}:o
return l.emitAsync("request:project:batch-save",{batchSaveQueue:n,rootProjectCid:a,fromUser:i})},joinProject:r,leaveProject:function(t){var n=a.getState().projectCidList
return n.includes(t)&&l.emitAsync("leave:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket left project",e),a.setState({projectCidList:(0,p.arrayMatchDelete)(n,t)})},f.REPORT_ERROR)},leaveAllProject:o,enableSocketChannel:r,resetSocketChannel:o,enableNotifier:g})}
var g=function(){u=u||(0,d.createNotifier)()},y=function(e,t,n,r){e.has(r.cid)||(0,m.isRemoteMtimeStale)(t,r.cid,r.mtime)||("Team"===t?(0,m.updateTeam)(n,r):"Project"===t?(0,m.updateProject)(n,r):"Collaborator"===t&&(0,m.updateCollaborator)(n,r))},w=function(){var i=(0,c.default)(S.default.mark(function e(t,n,r,a,o,i){var l,u,c,s,d=arguments
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l=6<d.length&&void 0!==d[6]?d[6]:{},t.has(a.cid)||(0,m.isRemoteMtimeStale)(n,a.cid,a.mtime))return e.abrupt("return")
e.next=3
break
case 3:if("Asset"===n)return e.abrupt("return",(0,m.updateAsset)(r,a))
e.next=5
break
case 5:if("PointComments::Comment"===n||"Comment"===n)return e.abrupt("return",v.webpackInterface&&v.webpackInterface.pushData("comments",r,a))
e.next=7
break
case 7:if("PointComments::Thread"===n||"CommentThread"===n)return e.abrupt("return",v.webpackInterface&&v.webpackInterface.pushData("comment-threads",r,a))
e.next=9
break
case 9:if(v.f.inSharing||!v.currentProject)return e.abrupt("return")
e.next=11
break
case 11:if(e.t0=m.updateWorkspaceMap[n],e.t0)return e.next=15,m.updateWorkspaceMap[n](r,a,o)
e.next=15
break
case 15:l.id&&(!(u="Screen"===n?a.cid:a.screen_cid)&&a.screenstate_cid&&(c=Screenstate.find(a.screenstate_cid))&&(u=c.screen_cid),(s=CoWorker.find(l.id)||new CoWorker({cid:l.id,name:l.name,avatar:l.avatar})).screen_cid=u,s.last_seen=new Date,s.save(),v.renderCoWorkers&&v.renderCoWorkers())
case 16:case"end":return e.stop()}},e,this)}))
return function(e,t,n,r,a,o){return i.apply(this,arguments)}}()},"3xeE":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentLayer=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),p=r(n("q1tI")),f=a(n("17x9")),h=a(n("vOnD")),m=n("+IKJ"),v=n("6XO9"),g=a(n("zkrS")),y=n("FC/4"),b=n("3xoc"),S=n("U9kS"),w=n("fiFu"),C=g.default.I18N,E=function(e){function n(e){var a;(0,o.default)(this,n),a=(0,l.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(a)),"renderContentReply",function(){var e=a.props.userAuthStatus,t=a.state.isValidReply
return p.default.createElement("div",{className:"reply-footer"},e===w.USER_AUTH_STATUS_COLLABORATOR&&p.default.createElement(y.TextEditComponent,{textEditStore:a.replyStore,placeholder:C.preview.comment.comment_placeholder,minHeight:20,autoHeight:!0,multiline:!0}),e===w.USER_AUTH_STATUS_COLLABORATOR&&(0,b.getDarkerButton)(C.preview.comment.thread_create,a.replyStore.endEdit,!t),e===w.USER_AUTH_STATUS_NOT_SIGN_IN&&p.default.createElement(v.CoreButton,{onClick:_},C.preview.comment.tip_signin),
e===w.USER_AUTH_STATUS_NOT_COLLABORATOR&&p.default.createElement("span",null,C.preview.comment.tip_not_collaborator))})
var t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return a.props.focusCommentThreadCid!==e&&a.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:e,focusSource:"panel"}})}
return a.commentOperations={getPermission:function(e){return a.props.permissionPack.getPermission(e)},getUserProfile:function(e){return a.props.getUserProfile(e)},setFocusCommentThreadCid:t,setHoverFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return!a.props.tempCommentThreadMarker&&t(e)},doDeleteCommentThread:function(e){return a.props.dispatch({type:"entry:comment-threads:delete",payload:{cid:e}})},doDeleteComment:function(e){return a.props.dispatch({type:"comments:delete",payload:e})},doUpdateComment:function(e){return a.props.dispatch({type:"entry:comments:update",payload:e})},doCreateComment:function(e,t){return e&&a.props.dispatch({type:"entry:comments:add",payload:{thread_cid:t,message:e}})}},a.doCreateCommentThread=function(e){
var t=a.props.tempCommentThreadMarker||{top:0,left:0},n=t.left,r=t.top
e&&a.props.dispatch({type:"entry:comment-threads:add",payload:{top:r,left:n,message:e}}),setTimeout(function(){a.scrollRef&&(a.scrollRef.scrollTop=a.scrollRef.scrollHeight-a.scrollRef.offsetHeight)},0)},a.replyStore=(0,y.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return a.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value,n=void 0===t?"":t
a.doCreateCommentThread(n.trim()),a.resetReply()}}),a.resetReply=function(){a.replyStore.startEdit(),a.replyStore.setValue(""),a.setState({isValidReply:!1})},a.focusReply=function(){a.replyStore.endEdit(),a.replyStore.startEdit()},a.setScrollRef=function(e){a.scrollRef=e},a.scrollRef=null,a.state={isValidReply:!1},a}return(0,c.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){!this.props.isLoaded&&this.props.dispatch({type:"entry:comment:init-project-data"}),this.props.dispatch({
type:"unread-comment:set-read"}),MB.AutoSaver&&(this.prevAutoSaverDelay=MB.AutoSaver.getDelay(),MB.AutoSaver.setDelay(500))}},{key:"componentDidUpdate",value:function(e){this.props.tempCommentThreadMarker&&!e.tempCommentThreadMarker&&this.focusReply(),this.props.hasUnreadComment&&this.props.dispatch({type:"unread-comment:set-read"})}},{key:"componentWillUnmount",value:function(){MB.AutoSaver&&MB.AutoSaver.setDelay(this.prevAutoSaverDelay)}},{key:"render",value:function(){var i=this,e=this.props,
t=e.screenName,n=e.userAuthStatus,r=e.commentThreadList,l=e.commentListMap,a=e.permissionPack,o=e.isLoaded,u=e.focusCommentThreadCid,c=e.focusSource,s=e.tempCommentThreadMarker
if(!o)return p.default.createElement(k,null)
var d=u||s&&s.cid,f=0!==r.length
return p.default.createElement(k,null,f&&p.default.createElement("div",{className:"comment-title"},"".concat(t," (").concat(r.length,")")),f&&p.default.createElement("div",{ref:this.setScrollRef,className:"comment-thread"},r.map(function(e,t){var n=l[e.cid]||[],r=t+1,a="marker"===c&&d===e.cid,o=Boolean(s||"marker"===c&&null!==d&&!a)
return p.default.createElement(S.CommentThread,{key:e.cid,commentThreadCid:e.cid,commentMarkerIndex:r,isScrollFocus:a,isBlur:o,commentList:n,permission:i.commentOperations.getPermission(e.user_id),commentOperations:i.commentOperations})})),!f&&p.default.createElement("div",{className:"comment-thread-empty"},p.default.createElement("img",{src:x}),p.default.createElement("h3",null,C.preview.comment.add_comment),p.default.createElement("span",null,a.permissionDenyMessage||(
n===w.USER_AUTH_STATUS_NOT_SIGN_IN?C.preview.comment.thread_none_tip_signin:C.preview.comment.thread_none_tip))),a.isAllow?this.renderContentReply():null,p.default.createElement(S.CommentHeaderGlobalStyle,null))}}]),n}(p.PureComponent)
t.CommentLayer=E,(0,d.default)(E,"propTypes",{permissionPack:f.default.object,getUserProfile:f.default.func,userAuthStatus:f.default.string,screenName:f.default.string,commentThreadList:f.default.array,commentListMap:f.default.object,hasUnreadComment:f.default.bool,isLoaded:f.default.bool,focusCommentThreadCid:f.default.string,focusSource:f.default.string,tempCommentThreadMarker:f.default.object,dispatch:f.default.func})
var k=h.default.div.withConfig({displayName:"CommentLayer__CommentPanelDiv",componentId:"wnjiq4-0"})([
"position:relative;display:flex;flex-flow:column;width:260px;height:100%;font-size:12px;background-color:#fff;box-shadow:0 -2px 30px rgba(39,54,78,0.11);z-index:1;& > .comment-title{display:flex;align-items:center;height:50px;margin:0 20px;border-bottom:1px solid #d9d9d9;}& > .comment-thread{flex:1;overflow-y:auto;padding:0 20px;}& > .comment-thread-empty{flex:1;display:flex;flex-flow:column;align-items:center;justify-content:center;& > img{width:90px;margin:0 10px;}& > h3{padding:10px;}& > span{padding:0 10px;text-align:center;}}& > .reply-footer{display:flex;align-items:flex-end;background:#fff;border-top:1px solid #eaebed;padding:10px 14px;box-shadow:0 -2px 10px rgba(26,58,109,0.12);& > div{margin:0 8px -4px 0;width:174px;max-height:120px;> label{"
,";& > textarea{padding:3px 8px;min-height:28px;}}}& > button{flex:1;height:28px;font-size:12px;}}"],(0,m.placeholder)({color:"#a9afb8"})),_=function(){window.location.href="/signin?next=".concat(window.location.pathname)},x="/images/preview/no-comment@2x.png"},"3xoc":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getDarkerButton=void 0
var a=r(n("q1tI")),o=n("6XO9"),i={backgroundColor:"#5b6b73"},l={opacity:.6}
t.getDarkerButton=function(e,t,n){return a.default.createElement(o.Button,{type:"primary",style:n?l:i,onClick:t,disabled:n},e)}},"4/ic":function(e,t,n){var r=n("ZWtO")
e.exports=function(t){return function(e){return r(e,t)}}},"4MIG":function(e,t,n){},"4Nrh":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("MVZn")),o=n("WVP6"),c=r(n("zkrS")),s=function(e){return c.default.Storage.setItem("".concat(e,"_commentTickV2"),JSON.stringify(Math.ceil(.001*Date.now()+2)))},i=(0,o.createStateStore)({projectCid:null,hasUnreadComment:!1}),l=i.getState,u=i.setState,d=i.wrapEntry,f={entryMap:{"unread-comment:init-for-project":d(function(e,t,n){var r,a=t.dispatch,o=n.payload,i=o.projectCid,l=o.commentList,u=(r=i,JSON.parse(c.default.Storage.getItem("".concat(r,"_commentTickV2"))||"0"))
a({type:"reducer:unread-comment:update",payload:{projectCid:i,hasUnreadComment:Boolean(l.find(function(e){var t=e.updated_at
return u<t}))}}),s(i),function(){for(var e=.001*Date.now()-2592e3,t=[],n=0,r=c.default.Storage.length;n<r;n++){var a=c.default.Storage.key(n)
a.endsWith("_commentTick")?t.push(a):a.endsWith("_commentTickV2")&&!(e<JSON.parse(c.default.Storage.getItem(a)||"0"))&&t.push(a)}t.forEach(function(e){return c.default.Storage.removeItem(e)})}()}),"unread-comment:set-unread":d(function(e,t){var n=t.dispatch
e.hasUnreadComment||(n({type:"reducer:unread-comment:update",payload:(0,a.default)({},e,{hasUnreadComment:!0})}),s(e.projectCid))}),"unread-comment:set-read":d(function(e,t){var n=t.dispatch
e.hasUnreadComment&&(n({type:"reducer:unread-comment:update",payload:(0,a.default)({},e,{hasUnreadComment:!1})}),s(e.projectCid))})},getState:l,setState:u}
t.default=f},"4QcC":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),o=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("M8nv")),h=a(n("17x9")),m=n("6XO9"),v=a(n("Lyer")),g=a(n("EDI8")),y=a(n("UbMB")).default.bind(g.default),b=MB.config.SCALES,S=function(e){function t(){var o
return(0,i.default)(this,t),o=(0,l.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(o)),"handleZoomIn",function(){var e=o.props,t=e.scale,n=e.dispatch,r=e.fromFullScreen
MB.event("*","运行页-预览-点击放大显示倍率"),r&&MB.event("ga","全屏模式缩放","运行页")
var a=b.findIndex(function(e){return t<e})
n({type:"entry:preview:set:scale",payload:{scale:b[a]||b[b.length-1]}})}),(0,d.default)((0,s.default)((0,s.default)(o)),"handleZoomOut",function(){var e=o.props,t=e.scale,n=e.dispatch,r=e.fromFullScreen
MB.event("*","运行页-预览-点击缩小显示倍率"),r&&MB.event("ga","全屏模式缩放","运行页")
var a=b.findIndex(function(e){return t<=e})
n({type:"entry:preview:set:scale",payload:{scale:b[a-1]||b[0]}})}),(0,d.default)((0,s.default)((0,s.default)(o)),"handleResetScale",function(){(0,o.props.dispatch)({type:"entry:preview:set:scale",payload:{scale:100}})}),(0,d.default)((0,s.default)((0,s.default)(o)),"handleKeyDown",function(e){w(e,o.handleZoomIn,o.handleZoomOut,o.handleResetScale)}),o.state={isGuideShow:!1},o}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this
this.props.fromFullScreen||(this.openGuideTimer=setTimeout(function(){e.setState({isGuideShow:!0})},600))}},{key:"componentWillUnmout",value:function(){clearTimeout(this.openGuideTimer)}},{key:"render",value:function(){var e=this.props.scale,t=this.state.isGuideShow,n=e<400,r=20<e
return f.default.createElement(v.default,{id:"preview-zoom",localeKey:"zoom",X:"left",isOpen:t,gotItBtn:!0,noCloseBtn:!0},f.default.createElement("div",{className:y("zoom-count","preview-zoom-btn")},f.default.createElement("a",{id:"zoomout",disabled:!r,title:I18N.zoomout,onClick:this.handleZoomOut,className:"fs-16"},f.default.createElement(m.SVG,{name:"scale_reduce"})),f.default.createElement("span",null,"".concat(Math.round(e),"%")),f.default.createElement("a",{id:"zoomin",disabled:!n,title:I18N.zoomin,
onClick:this.handleZoomIn,className:"fs-16"},f.default.createElement(m.SVG,{name:"scale_enlarge"})),f.default.createElement(p.default,{onKeyDown:this.handleKeyDown})))}}]),t}(f.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{scale:h.default.number,fromFullScreen:h.default.bool,dispatch:h.default.func}),(0,d.default)(S,"defaultProps",{fromFullScreen:!1})
var w=function(e,t,n,r){(e.ctrlKey||e.metaKey)&&(187==e.keyCode&&(e.preventDefault(),t()),189==e.keyCode&&(e.preventDefault(),n()),48==e.keyCode&&(e.preventDefault(),r()))}},"4WDG":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var N=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),I=r(n("q1tI")),O=a(n("M8nv")),R=a(n("foKU")),P=a(n("tBsX")),A=n("oose"),j=a(n("dYO+")),L=a(n("DdUa")),D=a(n("kJQk")),B=a(n("9ZUU")),F=a(n("TSYQ"))
n("fSKh")
var p=function(e){function a(){var e,l;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return l=(0,u.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(l)),"handleKeyDown",function(e){var t=l.props.dispatch,n=e.target.matches("input")||e.target.matches("textarea")
32===e.keyCode&&!n&&(e.preventDefault(),t({type:"preview:set:key:flags",payload:{isSpaceDown:!0}}))}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleKeyUp",function(e){l.props.dispatch({type:"preview:reset:key:flags"})}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleMouseDown",function(e){l.props.isSpaceDown&&l.handleDrag(e)}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleDrag",function(e){var n=e.clientX,r=e.clientY,t=l.props.canvasOffset,a=t.x,o=t.y,i=function(e){var t={x:a+(
e.clientX-n),y:o+(e.clientY-r)}
l.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:t}})}
document.addEventListener("mousemove",i),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleScaleChange",function(e){l.props.dispatch({type:"entry:preview:set:scale",payload:{scale:e}})}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleOffsetChange",function(e,t){l.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:{x:e,y:t}}})}),l}return(0,
l.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.scale,n=e.canvasOffset,r=e.project,a=e.screen,o=e.isSpaceDown,i=e.isStickyShow,l=e.isScrollable,u=e.shellType,c=e.isLayerActive,s=e.isCommentActive,d=e.isColorPickerActive,f=e.isFullScreenMode,p=n.x,h=n.y,m="landscape"===a.orientation,v=c||s,g=v||!l?"none":u,y=r.width,b=r.height,S=m?[b,y]:[y,b],w=(0,N.default)(S,2),C=w[0],E=w[1],k={width:C,height:E,minWidth:C,minHeight:E,transform:"matrix(1, 0, 0, 1, ".concat(p,", "
).concat(h,")")},_={transform:"scale(".concat(t/100,")")},x={width:"".concat(t,"%"),height:"".concat(t,"%")},T={width:a.width*t/100,height:a.height*t/100},M=(0,F.default)({"wait-drag":o,"is-immersive":v,"is-layer-active":c,"is-screen-expanded":v||!l})
return I.default.createElement(R.default,{x:p,y:h,scale:t,id:"simulator-container",className:M,onMouseDown:this.handleMouseDown,onScaleChange:this.handleScaleChange,onOffsetChange:this.handleOffsetChange},function(e,t,n){return I.default.createElement("div",{key:"1",className:(0,F.default)("screen-viewport",{"is-fullscreen":f,"is-geely":"geely_center_control"===r.model}),style:k},I.default.createElement("div",{className:"zoom-area",style:_},I.default.createElement(L.default,null),
!v&&I.default.createElement(j.default,{project:r,shellType:g,isLandscape:m}),i&&I.default.createElement(B.default,null)),I.default.createElement("div",{className:"no-zoom-area-wrapper",style:x},I.default.createElement("div",{className:"no-zoom-area",style:T},I.default.createElement("div",{id:"ui-layers",className:"ui-layers ".concat(c?"is-active":"")},d&&I.default.createElement(D.default,null),c&&!d&&I.default.createElement(P.default,null)),I.default.createElement("div",{id:"ui-comment-marker-panel"},
I.default.createElement(A.CommentMarkerPanelContainer,{isActive:s,scale:n/100})))))},I.default.createElement(O.default,{onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}))}}]),a}(I.PureComponent);(t.default=p).propTypes={scale:f.default.number,canvasOffset:f.default.object,screen:f.default.object,project:f.default.object,shellType:f.default.string,isStickyShow:f.default.bool,isScrollable:f.default.bool,isSpaceDown:f.default.bool,isLayerActive:f.default.bool,isCommentActive:f.default.bool,
isColorPickerActive:f.default.bool,dispatch:f.default.func,isFullScreenMode:f.default.bool}},"4YeV":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.ProjectAlike,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:projects:update",payload:o(e,a,i)})})},s={entryMap:{"projects:refresh":c(a.refreshStateList,!1),"projects:add":c(a.addState,!1),"projects:add-local":c(a.addState,!0),"projects:update":c(a.updateState,!1),"projects:update-local":c(a.updateState,!0),"projects:delete":c(a.deleteState,!1),"projects:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},"4daP":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.playSettingEntry=void 0
var i=n("upRB"),l=n("7Qib"),u="preview-is-scrollable",c="preview-is-stickyshow",s="preview-is-highlight",d="preview-shell-type",r={"entry:init:preview-setting":function(e){var t=e.getState,n=e.dispatch,r=t(),a=(0,i.getCurrentProject)(r),o=(0,l.localStorageGetItem)(d)?(0,l.localStorageGetItem)(d):a.shell_type
n({type:"reducer:preview-toolbar:update",payload:{isScrollable:"false"!==(0,l.localStorageGetItem)(u),isStickyShow:"false"!==(0,l.localStorageGetItem)(c),isHighlight:(0,l.localStorageGetItem)(s)?"false"!==(0,l.localStorageGetItem)(s):a.highlight,shellType:o}})},"entry:preview-setting:update:is-highlight":function(e,t){var n=e.dispatch,r=t.payload.isHighlight;(0,l.localStorageSetItem)(s,r),n({type:"reducer:preview-toolbar:update",payload:{isHighlight:r}})},"entry:preview-setting:update:shell-type":function(e
,t){var n=e.dispatch,r=t.payload.shellType;(0,l.localStorageSetItem)(d,r),n({type:"reducer:preview-toolbar:update",payload:{shellType:r}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-scrollable":function(e,t){var n=e.dispatch,r=t.payload.isScrollable;(0,l.localStorageSetItem)(u,r),n({type:"reducer:preview-toolbar:update",payload:{isScrollable:r}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-sticky-show":function(e,t){var n=e.dispatch,
r=t.payload.isStickyShow;(0,l.localStorageSetItem)(c,r),n({type:"reducer:preview-toolbar:update",payload:{isStickyShow:r}})}}
t.playSettingEntry=r},"4dyd":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("UJpD")),m=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleResize",function(){var e=t.elem.getBoundingClientRect()
t.props.onResize(e)}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidMount",value:function(){this.elem.contentWindow.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){var e=this.elem.contentWindow
e&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var t=this
return p.default.createElement("iframe",{ref:function(e){return t.elem=e},className:h.default.detector})}}]),o}(p.PureComponent);(t.default=m).propTypes={onResize:o.default.func.isRequired}},"4sCl":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),m=r(n("q1tI")),v=a(n("TSYQ")),g=a(n("SFPg")),p=n("/5+U"),y=n("veUc")
n("oKLx")
var h=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"state",{ifHideLayer:!1}),(0,f.default)((0,d.default)((0,d.default)(t)),"onMouseLeave",function(){"number"==typeof t.props.activeLayerID?t.props.enterLayer("artboard-base"):t.props.enterLayer(t.props.currentScreen.cid)}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentWillReceiveProps",value:function(e){var t=e.currentScreen,n=e.activeLayerID,r=this.props,
a=r.currentScreen,o=r.enterLayer
t!=a&&o(-1),-1!==n&&n?this.setState({ifHideLayer:!1}):this.setState({ifHideLayer:!0})}},{key:"render",value:function(){var e=this.props,t=e.isShowLayerList,n=e.layers,r=e.currentScreen,a=e.unit,o=e.ratio,i=e.activeLayerID,l=e.enteredLayerID,u=e.enterLayer,c=e.requestSelectLayer,s=e.handleShowlayerInfo,d=this.state.ifHideLayer,f=(0,y.transformLayersFormat)(n),p=b(a,o,u,i,l,c,s),h={top:0,left:0,width:r.width,height:r.height}
return m.default.createElement("div",{className:(0,v.default)("LayerList",{hiddenLayer:d&&t}),onMouseLeave:this.onMouseLeave},f.map(function(e){return m.default.createElement(g.default,{key:e.id,layer:e,parentRect:h,treeProps:p})}))}}]),o}(m.Component)
t.default=h,(0,f.default)(h,"propTypes",{isSpaceDown:o.default.bool,layers:o.default.array,requestSelectLayer:o.default.func,resetLayer:o.default.func,artboard:o.default.object,enterLayer:o.default.func,handleShowlayerInfo:o.default.func,currentScreen:o.default.object,activeLayerID:o.default.oneOfType([o.default.number,o.default.string]),enteredLayerID:o.default.oneOfType([o.default.number,o.default.string]),isShowLayerList:o.default.bool,unit:o.default.string,ratio:o.default.number,dispatch:o.default.func}
)
var b=(0,p.immutableTransformCache)(function(e,t,n,r,a,o,i){return{unit:e,ratio:t,enterLayer:n,activeLayerID:r,enteredLayerID:a,requestSelectLayer:o,handleShowlayerInfo:i}})},"4sDh":function(e,t,n){var l=n("4uTw"),u=n("03A+"),c=n("Z0cm"),s=n("wJg7"),d=n("shjB"),f=n("9Nap")
e.exports=function(e,t,n){for(var r=-1,a=(t=l(t,e)).length,o=!1;++r<a;){var i=f(t[r])
if(!(o=null!=e&&n(e,i)))break
e=e[i]}return o||++r!=a?o:!!(a=null==e?0:e.length)&&d(a)&&s(i,a)&&(c(e)||u(e))}},"4uTw":function(e,t,n){var r=n("Z0cm"),a=n("9ggG"),o=n("GNiM"),i=n("dt0z")
e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(i(e))}},"4vJh":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:preview-panel:search":return(0,a.default)({},e,r)
case"reducer:preview-panel:reset":return o
default:return e}}
var a=r(n("MVZn")),o={screenSearch:""}},"4x8W":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case"event-sign-up:close:modal":return(0,a.default)({open:!1},e)
case"event-sign-up:set:event":return t.payload
default:return e}}
var a=r(n("MVZn")),o={open:!1,event:{}}},"5Mi5":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("a1gu")),l=r(n("Nsbk")),u=r(n("7W2i")),c=r(n("lSNA")),s=r(n("17x9")),d=n("q1tI"),f=n("2EV6"),p=window.key,h="preview",m=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch
p.setScope(h),p("command+enter, ctrl+enter",h,function(){e({type:"entry:enter:full-screen-mode"})}),p("command+p, ctrl+p",h,function(){return!1}),p("esc",h,function(){if("project"===(0,f.getProjectType)(MB.currentProject))return e({type:"entry:preview:escape:key"}),!1})}},{key:"componentWillUnmount",value:function(){p.deleteScope(h),p.setScope("design")}},{key:"render",value:function(){return null}}]),t}(d.PureComponent)
t.default=m,(0,c.default)(m,"propTypes",{dispatch:s.default.func})},"6PGs":function(e,t,n){e.exports={"screen-info":"_1AJNH2RNIDeT2zJnKkRP2E"}},"6UMJ":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.keyEntry=void 0
var a=n("upRB"),r={"entry:preview:escape:key":function(e){var t=e.getState,n=e.dispatch,r=t();(0,a.getIsFullScreenMode)(r)?(n({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),n({type:"entry:init:preview:scale"}),n({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})):MB.designer&&MB.designer.backDesign()}}
t.keyEntry=r},"6Y1W":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("x3zb")),m=a(n("ibfc")),v=function(e){function t(e){var a
return(0,o.default)(this,t),a=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(a)),"handleHomeScreenLoad",function(e){console.log("HomeScreenLoad",e),MB.runner.doneTransition(e)}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleTransitionEnd",function(e){var t=a.props.transition,n=t.name,r=t.callback;/(menu|drawer)-reverse/.test(n)&&(console.log("menu - closed"),MB.runner.currentMenu=MB.runner.currentScreen=null),console.log("transition - end"),
MB.runner.doneTransition(e),r&&r()}),a.state={prevScreenCid:"",currentScreenCid:e.activeCid},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){console.log("mb runner did mount",{props:this.props.activeCid,state:this.state.currentScreenCid})}},{key:"componentWillUnmount",value:function(){console.log("mb runner will unmount")}},{key:"render",value:function(){var e=this.props,t=e.screenInfoMap,n=e.transition,i=e.widgetQueryMap,r=this.state,l=r.prevScreenCid,
u=r.currentScreenCid
return u?p.default.createElement(h.default,{activeCid:u,transition:n,onHomeScreenLoad:this.handleHomeScreenLoad,onTransitionEnd:this.handleTransitionEnd},function(a,o){return Object.values(t).map(function(e){var t=e.cid===l,n=e.cid===u,r=t?a:n?o:null
return p.default.createElement(m.default,{key:e.cid,isShow:t||n,screen:e,style:r,isActive:u===e.cid,widgetQueryMap:i})})}):null}}]),t}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{widgetQueryMap:f.default.object,screenInfoMap:f.default.object,activeCid:f.default.string,transition:f.default.object}),(0,d.default)(v,"getDerivedStateFromProps",function(e,t){return e.activeCid!==t.currentScreenCid?{prevScreenCid:t.currentScreenCid,currentScreenCid:e.activeCid}:null})},"6ZRU":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("MVZn")),o=n("/MKj"),i=r(n("/cyv")),l=r(n("HfeQ")),u={Alert:(0,o.connect)(function(e){return(0,a.default)({},e.container.alert)})(l.default)},c={reducers:i.default,containers:u}
t.default=c},"6acW":function(e,t,n){var r=n("dt0z"),a=n("gQMU")
e.exports=function(e){return a(r(e).toLowerCase())}},"6cfl":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("/MKj"),m=a(n("bNtH")),v=a(n("4dyd")),g=a(n("/OM1")),y=function(e){function o(){var e,r;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(r)),"handleResize",function(){var e=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),t=e.width,n=e.height
r.props.dispatch({type:"preview:scrollbar:viewport",payload:{width:t,height:n}})}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleScroll",function(e){return r.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:e}})}),r}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidMount",value:function(){this.handleResize()}},{key:"render",value:function(){var e=this.props,t=e.canvasOffset,n=e.screen,r=e.scale,a=e.viewport,o=a.width,i=a.height,l={x:Math.max(3.5*o,n.width*r/100*2),
y:Math.max(3.5*i,n.height*r/100*2)}
return p.default.createElement("div",{className:g.default.scroll_bar_container,id:"preview_scrollBar_viewport"},p.default.createElement(m.default,{canvasOffset:t,viewportWidth:o,viewportHeight:i,canvasRange:l,onScroll:this.handleScroll}),p.default.createElement(v.default,{onResize:this.handleResize}))}}]),o}(p.PureComponent);(0,f.default)(y,"propTypes",{canvasOffset:o.default.object,dispatch:o.default.func,scale:o.default.number,screen:o.default.object,viewport:o.default.object})
var b=(0,h.connect)(function(e){var t=e.container.common,n=t.offset,r=t.scale,a=t.viewport,o=e.model,i=o.current.screenCid
return{canvasOffset:n,scale:r,screen:o.screens.find(function(e){return e.cid===i}),viewport:a}})(y)
t.default=b},"6gQ3":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("rESR")),i=n("/5+U"),l=(0,a.connect)(function(e){var t=e.model,n=t.user,r=t.current.projectCid,a=t.projects,o=t.screens,i=e.container,l=i.common.offset,u=i.previewSetting.toolbarActiveItem,c=!!n.id,s=Boolean(l.x||l.y),d=h(a,r),f=p.has(d.access_token)
return{isLoggedIn:c,isDisplaced:s,screensCount:o.reduce(function(e,t){return t.project_cid===r?e+1:e},0),project:d,isDemo:f,toolbarActiveItem:u}})(o.default)
t.default=l
var p=new Set(["demo","cS1AXKF5jtrJePbEKiYcdcHosQPdzrk","workout","sI3GY2tDz76RrZ4MGFiIcZTZpAHyluC","UMQzYmknxWeHNvvVyeyJDuSkgyvi6Xw","9Py1L5RdC8ZPRSmnWEt4uuUUSDUAxkM"]),h=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})})},"6iHT":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentHeaderGlobalStyle=t.ContentHeader=t.ContentMessage=t.commonContentFooter=void 0
var o=a(n("VkAN")),l=a(n("q1tI")),i=a(n("17x9")),u=r(n("vOnD")),c=n("6XO9"),s=a(n("zkrS")),d=a(n("i6OX")),f=n("wYtL"),p=n("FC/4"),h=n("3xoc")
function m(){var e=(0,o.default)(["\n  .comment-header-edit li:hover { color: #1e98ea; }\n  .comment-header-delete li:hover { color: #eb5648; }\n"])
return m=function(){return e},e}var v=s.default.I18N,g=s.default.L10N
t.commonContentFooter=function(e,t,n,r,a){return[l.default.createElement(y,{key:"footer"},g.parseTimeAgo(1e3*e.updated_at),r&&l.default.createElement(b,{onClick:t?a:r},l.default.createElement(d.default,{type:"dora",name:"reply"}),t?v.preview.comment.cancel_reply:v.preview.comment.comment_create)),t&&l.default.createElement(S,{key:"reply"},l.default.createElement(p.TextEditComponent,{textEditStore:t,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),(0,
h.getDarkerButton)(v.preview.comment.comment_create,t.endEdit,!n))]}
var y=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentFooterDiv",componentId:"sc-1lkzl71-0"})(["display:flex;align-items:center;justify-content:space-between;padding:0 10px 10px;line-height:20px;color:#8d9ea7;opacity:0.75;"]),b=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ReplyToggleDiv",componentId:"sc-1lkzl71-1"})(["cursor:pointer;&:hover,&:active{color:#525e71;}> span{margin-right:6px;opacity:0.5;}"]),S=u.default.div.withConfig({
displayName:"CommentLayerThreadContent__ReplyDropdownDiv",componentId:"sc-1lkzl71-2"})(["padding:10px 0;background:#fff;> button{width:100%;height:24px;font-size:12px;}"]),w=function(e){var t=e.sub,n=e.comment,r=e.textEditStore,a=e.cancelEdit
return l.default.createElement(C,{className:t?"sub":""},r?l.default.createElement(k,null,l.default.createElement(p.TextEditComponent,{textEditStore:r,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),l.default.createElement(_,null,l.default.createElement(c.Button,{onClick:a},v.preview.comment.cancelEdit),l.default.createElement(c.Button,{type:"primary",onClick:r.endEdit},v.preview.comment.updateEdit))):l.default.createElement(E,null,n.message))};(t.ContentMessage=w
).propTypes={sub:i.default.bool,comment:i.default.object,textEditStore:i.default.object,cancelEdit:i.default.func}
var C=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentMessageDiv",componentId:"sc-1lkzl71-3"})(["display:flex;flex-flow:column;width:100%;height:auto;color:#5b6b73;white-space:nowrap;text-overflow:ellipsis;span{padding:10px;}&.sub span{padding:0 10px 10px;}"]),E=u.default.span.withConfig({displayName:"CommentLayerThreadContent__EditableSpanSpan",componentId:"sc-1lkzl71-4"})(["user-select:text;word-break:break-all;white-space:pre-line;text-overflow:ellipsis;"]),
k=u.default.div.withConfig({displayName:"CommentLayerThreadContent__EditableSpanDiv",componentId:"sc-1lkzl71-5"})(["background:#fff;> textarea{margin-bottom:5px;padding:10px;border:1px solid #d3dce6;}"]),_=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ButtonPanelDiv",componentId:"sc-1lkzl71-6"})(["display:flex;justify-content:flex-end;width:100%;> button{width:60px;height:24px;font-size:12px;margin-left:10px;}"]),x=function(e){var t=e.sub,n=e.avatar,r=e.name,a=e.markIndex,o=e.startEdit,
i=e.doDelete
return l.default.createElement(T,{className:t?"sub":""},l.default.createElement(I,null,l.default.createElement("img",{src:n,width:24,height:24}),l.default.createElement("div",null,a&&l.default.createElement("span",{className:"index"},"#".concat(a)),l.default.createElement("span",{className:"name"},r))),l.default.createElement(M,null,o&&l.default.createElement(O,{onSelect:o,menuClassName:"comment-header-edit",iconName:"cog",text:v.preview.comment.modify_edit}),i&&l.default.createElement(O,{onSelect:i,
menuClassName:"comment-header-delete",iconName:"trash",text:v.preview.comment.modify_delete})))};(t.ContentHeader=x).propTypes={avatar:i.default.string,name:i.default.string,markIndex:i.default.number,startEdit:i.default.func,doDelete:i.default.func,sub:i.default.bool}
var T=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderDiv",componentId:"sc-1lkzl71-7"})(["display:flex;justify-content:space-between;padding-bottom:10px;width:100%;&.sub{padding:10px;}"]),M=u.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderEditDiv",componentId:"sc-1lkzl71-8"})(["display:flex;align-items:center;.icon{color:#c8cdd0;margin-left:5px;&:hover,&:active{color:#8d9ea7;}}"]),N=(0,u.createGlobalStyle)(m())
t.CommentHeaderGlobalStyle=N
var I=u.default.div.withConfig({displayName:"CommentLayerThreadContent__UserInfoDiv",componentId:"sc-1lkzl71-9"})(["display:flex;height:24px;> img{margin-right:10px;border-radius:100%;}> div{display:flex;flex-flow:column;justify-content:center;max-height:24px;font-weight:bold;line-height:12px;.index{vertical-align:middle;color:#f55d54;}.name{max-width:140px;color:#5b6b73;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}"]),O=function(e){var t=e.onSelect,n=e.text,r=e.iconName,a=e.menuClassName
return l.default.createElement(f.Tooltip,{content:{hover:n},duration:1e3},l.default.createElement(c.Dropdown,{opener:l.default.createElement(d.default,{type:"dora",name:r}),onSelect:t,menuClassName:a,menuList:[n],menuX:"left",arrowed:!0}))}
O.propTypes={onSelect:i.default.func.isRequired,text:i.default.string.isRequired,iconName:i.default.string.isRequired,menuClassName:i.default.string.isRequired}},"6nK8":function(e,t,n){var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),i=n("9NmV")
e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?i(e):r(e):e.match(t)||[]}},"6x+O":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getModalElement=function(){var e=document.createElement("div")
return document.body.appendChild(e),e},t.getDomInfo=function(){var e=document.querySelector(".mb-viewport").getBoundingClientRect()
return{screenTop:e.top,screenLeft:e.left,screenWidth:e.width,screenHeight:e.height}},t.getContentRect=function(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e),r=n.paddingTop,a=n.paddingLeft,o=n.paddingRight,i=n.paddingBottom,l=parseInt(r),u=parseInt(a),c=parseInt(o),s=parseInt(i)
return{top:t.top+l,left:t.left+u,width:t.width-(u+c),height:t.height-(l+s)}},t.elementsFromPoint=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.body
if("function"==typeof document.elementsFromPoint)return document.elementsFromPoint(e,t)
if("function"==typeof document.msElementsFromPoint)return document.msElementsFromPoint(e,t)
var r=[],a=[],o=0,i=document.elementFromPoint(e,t)
for(;i&&i!==n&&i!==document.body&&!(5<o++);)console.log(i),r.push(i),a.push(i.style.pointerEvents),i.style.pointerEvents="none",i=document.elementFromPoint(e,t)
for(var l=0;l<a.length;l++)r[l].style.pointerEvents=a[l]
return r},t.isVisible=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.right,o=t.bottom,i=document.elementFromPoint((r+a)/2,(n+o)/2)
return e.contains(i)},t.getSelectionAttributes=function(){var e=document.getSelection()
if(!(0<e.rangeCount))return{}
var t=e.getRangeAt(0),n={},r=t.commonAncestorContainer
for(;r&&"P"!==r.nodeName&&"text_editor"!==r.id;){if(1===r.nodeType)switch(r.nodeName){case"I":n.italic=!0
break
case"B":n.bold=!0
break
case"U":n.underline=!0
break
case"STRIKE":n.lineThrough=!0
break
case"FONT":n.tc=r.color
var a=r.style.backgroundColor
a&&(n.bg=MB.rgb2hex(a))
break
case"SPAN":n.bg=MB.rgb2hex(r.style.backgroundColor)}r=r.parentNode}return n},t.createDownload=t.stopReactEventPropagation=void 0
t.stopReactEventPropagation=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}
t.createDownload=function(e,t){var n=Object.assign(document.createElement("a"),{download:e,href:t})
document.body.appendChild(n),n.click(),document.body.removeChild(n)}},"6xEa":function(e,t,n){var r,a=function(){var g=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={}
function o(e,t){if(!a[e]){a[e]={}
for(var n=0;n<e.length;n++)a[e][e.charAt(n)]=n}return a[e][t]}var i={compressToBase64:function(e){if(null==e)return""
var t=i._compress(e,6,function(e){return n.charAt(e)})
switch(t.length%4){default:case 0:return t
case 1:return t+"==="
case 2:return t+"=="
case 3:return t+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,function(e){return o(n,t.charAt(e))})},compressToUTF16:function(e){return null==e?"":i._compress(e,15,function(e){return g(e+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(e){for(var t=i.compress(e),n=new Uint8Array(2*t.length),r=0,a=t.length;r<a;r++){var o=t.charCodeAt(r)
n[2*r]=o>>>8,n[2*r+1]=o%256}return n},decompressFromUint8Array:function(e){if(null==e)return i.decompress(e)
for(var t=new Array(e.length/2),n=0,r=t.length;n<r;n++)t[n]=256*e[2*n]+e[2*n+1]
var a=[]
return t.forEach(function(e){a.push(g(e))}),i.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return r.charAt(e)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,function(e){return o(r,t.charAt(e))}))},compress:function(e){return i._compress(e,16,function(e){return g(e)})},_compress:function(e,t,n){if(null==e)return""
var r,a,o,i={},l={},u="",c="",s="",d=2,f=3,p=2,h=[],m=0,v=0
for(o=0;o<e.length;o+=1)if(u=e.charAt(o),Object.prototype.hasOwnProperty.call(i,u)||(i[u]=f++,l[u]=!0),c=s+u,Object.prototype.hasOwnProperty.call(i,c))s=c
else{if(Object.prototype.hasOwnProperty.call(l,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)m<<=1,v==t-1?(v=0,h.push(n(m)),m=0):v++
for(a=s.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}else{for(a=1,r=0;r<p;r++)m=m<<1|a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a=0
for(a=s.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}0==--d&&(d=Math.pow(2,p),p++),delete l[s]}else for(a=i[s],r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
0==--d&&(d=Math.pow(2,p),p++),i[c]=f++,s=String(u)}if(""!==s){if(Object.prototype.hasOwnProperty.call(l,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)m<<=1,v==t-1?(v=0,h.push(n(m)),m=0):v++
for(a=s.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}else{for(a=1,r=0;r<p;r++)m=m<<1|a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a=0
for(a=s.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}0==--d&&(d=Math.pow(2,p),p++),delete l[s]}else for(a=i[s],r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
0==--d&&(d=Math.pow(2,p),p++)}for(a=2,r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
for(;;){if(m<<=1,v==t-1){h.push(n(m))
break}v++}return h.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,t,n){var r,a,o,i,l,u,c,s=[],d=4,f=4,p=3,h="",m=[],v={val:n(0),position:t,index:1}
for(r=0;r<3;r+=1)s[r]=r
for(o=0,l=Math.pow(2,2),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
switch(o){case 0:for(o=0,l=Math.pow(2,8),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
c=g(o)
break
case 1:for(o=0,l=Math.pow(2,16),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
c=g(o)
break
case 2:return""}for(a=s[3]=c,m.push(c);;){if(v.index>e)return""
for(o=0,l=Math.pow(2,p),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
switch(c=o){case 0:for(o=0,l=Math.pow(2,8),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
s[f++]=g(o),c=f-1,d--
break
case 1:for(o=0,l=Math.pow(2,16),u=1;u!=l;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
s[f++]=g(o),c=f-1,d--
break
case 2:return m.join("")}if(0==d&&(d=Math.pow(2,p),p++),s[c])h=s[c]
else{if(c!==f)return null
h=a+a.charAt(0)}m.push(h),s[f++]=a+h.charAt(0),a=h,0==--d&&(d=Math.pow(2,p),p++)}}}
return i}()
void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)},"711d":function(e,t){e.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"79/T":function(e,t,n){var r=n("sgoq")(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})
e.exports=r},"7GkX":function(e,t,n){var r=n("kekF")(Object.keys,Object)
e.exports=r},"7Qib":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setHidden=function(e){return e?{hidden:!0}:{}},t.camelizeKeys=function(e){return Object.entries(e).reduce(function(e,t){var n=(0,i.default)(t,2),r=n[0],a=n[1]
return Object.assign(e,(0,o.default)({},(0,l.default)(r),a))},{})},t.snakizeKeys=function(e){return Object.entries(e).reduce(function(e,t){var n=(0,i.default)(t,2),r=n[0],a=n[1]
return Object.assign(e,(0,o.default)({},(0,u.default)(r),a))},{})},Object.defineProperty(t,"requestJSON",{enumerable:!0,get:function(){return a.requestJSON}}),Object.defineProperty(t,"submitForm",{enumerable:!0,get:function(){return a.submitForm}}),Object.defineProperty(t,"post",{enumerable:!0,get:function(){return a.post}}),t.localStorageSetItem=t.localStorageGetItem=void 0
var o=r(n("lSNA")),i=r(n("J4zp")),l=r(n("u6S6")),u=r(n("79/T")),a=n("t3Un")
t.localStorageGetItem=function(e){return MB.localStorageDelegate.getItem(e)}
t.localStorageSetItem=function(e,t){return MB.localStorageDelegate.setItem(e,t)}},"7Rdd":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(n("q1tI")),a=r(n("17x9")),l=n("1qiG"),o=function(e){var t=e.refRect,n=e.screen,r=e.style,a=r.dashed,o=r.colorForLines
return i.default.createElement("div",{style:{position:"absolute",pointerEvents:"none",width:(0,l.toPercentage)(t.width/n.width),height:(0,l.toPercentage)(t.height/n.height),left:(0,l.toPercentage)(t.left/n.width),top:(0,l.toPercentage)(t.top/n.height),border:"1px ".concat(a?"dashed":"solid"," ").concat(o)}})}
o.propTypes={refRect:a.default.object,screen:a.default.object,style:a.default.object}
var u=o
t.default=u},"7bO/":function(e,t,n){"use strict"
n.r(t)
var r={}
n.r(r),n.d(r,"TASK",function(){return z.e}),n.d(r,"SAGA_ACTION",function(){return z.c}),n.d(r,"noop",function(){return z.u}),n.d(r,"is",function(){return z.q}),n.d(r,"deferred",function(){return z.l}),n.d(r,"arrayOfDeffered",function(){return z.g}),n.d(r,"createMockTask",function(){return z.j}),n.d(r,"cloneableGenerator",function(){return z.i}),n.d(r,"asEffect",function(){return V.d}),n.d(r,"CHANNEL_END",function(){return G})
var z=n("Ev6p"),H=n("92lH"),Y=n("udQi"),V=n("tw9P"),J=n("mbVZ"),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var S="proc first argument (Saga function result) must be an iterator",G={toString:function(){return"@@redux-saga/CHANNEL_END"}},Z={toString:function(){return"@@redux-saga/TASK_CANCEL"}},o={wildcard:function(){return z.r},default:function(t){return"symbol"===(void 0===t?"undefined":a(t))?function(e){return e.type===t}:function(e){return e.type===String(t)}},array:function(e){return function(t){return e.some(function(e){return K(e)(t)})}},predicate:function(t){return function(e){return t(e)}}}
function K(e){return("*"===e?o.wildcard:z.q.array(e)?o.array:z.q.stringableFunc(e)?o.default:z.q.func(e)?o.predicate:o.default)(e)}var Q=function(e){return{fn:e}}
function w(r){var T=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return z.u},M=2<arguments.length&&void 0!==arguments[2]?arguments[2]:z.u,N=3<arguments.length&&void 0!==arguments[3]?arguments[3]:z.u,e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},c=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{},a=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0,I=7<arguments.length&&void 0!==arguments[7]?arguments[7]:"anonymous",t=arguments[8]
Object(z.h)(r,z.q.iterator,S)
var n="[...effects]",O=Object(z.n)(q,Object(z.z)(n,"all("+n+")")),R=c.sagaMonitor,o=c.logger,i=c.onError,l=o||z.s,P=function(e){var t=e.sagaStack
!t&&e.stack&&(t=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack),l("error","uncaught at "+I,t||e.message||e)},A=Object(H.f)(T),j=Object.create(e)
y.cancel=z.u
var u,s,d,f,p,h,m,L=(u=a,s=I,f=t,(d=r)._deferredEnd=null,(h={})[z.e]=!0,h.id=u,h.name=s,(m={})[p="done"]=m[p]||{},m[p].get=function(){if(d._deferredEnd)return d._deferredEnd.promise
var e=Object(z.l)()
return d._deferredEnd=e,d._isRunning||(d._error?e.reject(d._error):e.resolve(d._result)),e.promise},h.cont=f,h.joiners=[],h.cancel=g,h.isRunning=function(){return d._isRunning},h.isCancelled=function(){return d._isCancelled},h.isAborted=function(){return d._isAborted},h.result=function(){return d._result},h.error=function(){return d._error},h.setContext=function(e){Object(z.h)(e,z.q.object,Object(z.k)("task",e)),z.v.assign(j,e)},function(e,t){for(var n in t){var r=t[n]
r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}}(h,m),h),D={name:I,cancel:function(){D.isRunning&&!D.isCancelled&&(D.isCancelled=!0,y(Z))},isRunning:!0},v=function(e,r,a){var o=[],i=void 0,l=!1
function u(e){n(),a(e,!0)}function t(n){o.push(n),n.cont=function(e,t){l||(Object(z.w)(o,n),n.cont=z.u,t?u(e):(n===r&&(i=e),o.length||(l=!0,a(i))))}}function n(){l||(l=!0,o.forEach(function(e){e.cont=z.u,e.cancel()}),o=[])}return t(r),{addTask:t,cancelAll:n,abort:u,getTasks:function(){return o},taskNames:function(){return o.map(function(e){return e.name})}}}(0,D,b)
function g(){r._isRunning&&!r._isCancelled&&(r._isCancelled=!0,v.cancelAll(),b(Z))}return t&&(t.cancel=g),r._isRunning=!0,y(),L
function y(e,t){if(!D.isRunning)throw new Error("Trying to resume an already finished generator")
try{var n=void 0;(n=t?r.throw(e):e===Z?(D.isCancelled=!0,y.cancel(),z.q.func(r.return)?r.return(Z):{done:!0,value:Z}):e===G?z.q.func(r.return)?r.return():{done:!0}:r.next(e)).done?(D.isMainRunning=!1,D.cont&&D.cont(n.value)):B(n.value,a,"",y)}catch(e){D.isCancelled&&P(e),D.isMainRunning=!1,D.cont(e,!0)}}function b(t,n){r._isRunning=!1,A.close(),n?(t instanceof Error&&Object.defineProperty(t,"sagaStack",{value:"at "+I+" \n "+(t.sagaStack||t.stack),configurable:!0}),L.cont||(t instanceof Error&&i?i(t):P(t)),
r._error=t,r._isAborted=!0,r._deferredEnd&&r._deferredEnd.reject(t)):(r._result=t,r._deferredEnd&&r._deferredEnd.resolve(t)),L.cont&&L.cont(t,n),L.joiners.forEach(function(e){return e.cb(t,n)}),L.joiners=null}function B(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],a=Object(z.y)()
R&&R.effectTriggered({effectId:a,parentEffectId:t,label:n,effect:e})
var o=void 0
function i(e,t){o||(o=!0,r.cancel=z.u,R&&(t?R.effectRejected(a,e):R.effectResolved(a,e)),r(e,t))}i.cancel=z.u,r.cancel=function(){if(!o){o=!0
try{i.cancel()}catch(e){P(e)}i.cancel=z.u,R&&R.effectCancelled(a)}}
var l,u,c,s,d,f,p,h,m,v,g,y,b,S,w,C,E,k,_,x=void 0
return z.q.promise(e)?F(e,i):z.q.helper(e)?W(Q(e),a,i):z.q.iterator(e)?U(e,a,I,i):z.q.array(e)?O(e,a,i):(x=V.d.take(e))?function(e,t){var n=e.channel,r=e.pattern,a=e.maybe
n=n||A
var o=function(e){return e instanceof Error?t(e,!0):Object(H.e)(e)&&!a?t(G):t(e)}
try{n.take(o,K(r))}catch(e){return t(e,!0)}t.cancel=o.cancel}(x,i):(x=V.d.put(e))?(C=i,E=(w=x).channel,k=w.action,_=w.resolve,void Object(Y.a)(function(){var e=void 0
try{e=(E?E.put:M)(k)}catch(e){if(E||_)return C(e,!0)
P(e)}if(!_||!z.q.promise(e))return C(e)
F(e,C)})):(x=V.d.all(e))?q(x,a,i):(x=V.d.race(e))?(m=x,v=a,g=i,y=void 0,b=Object.keys(m),S={},b.forEach(function(a){var e=function(e,t){if(!y)if(t)g.cancel(),g(e,!0)
else if(!Object(H.e)(e)&&e!==G&&e!==Z){var n
g.cancel(),y=!0
var r=((n={})[a]=e,n)
g(z.q.array(m)?[].slice.call(X({},r,{length:b.length})):r)}}
e.cancel=z.u,S[a]=e}),g.cancel=function(){y||(y=!0,b.forEach(function(e){return S[e].cancel()}))},void b.forEach(function(e){y||B(m[e],v,e,S[e])})):(x=V.d.call(e))?function(e,t,n){var r=e.context,a=e.fn,o=e.args,i=void 0
try{i=a.apply(r,o)}catch(e){return n(e,!0)}return z.q.promise(i)?F(i,n):z.q.iterator(i)?U(i,t,a.name,n):n(i)}(x,a,i):(x=V.d.cps(e))?function(e,n){var t=e.context,r=e.fn,a=e.args
try{var o=function(e,t){return z.q.undef(e)?n(t):n(e,!0)}
r.apply(t,a.concat(o)),o.cancel&&(n.cancel=function(){return o.cancel()})}catch(e){return n(e,!0)}}(x,i):(x=V.d.fork(e))?W(x,a,i):(x=V.d.join(e))?function(e,t){if(e.isRunning()){var n={task:L,cb:t}
t.cancel=function(){return Object(z.w)(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())}(x,i):(x=V.d.cancel(e))?function(e,t){e===z.d&&(e=L)
e.isRunning()&&e.cancel()
t()}(x,i):(x=V.d.select(e))?function(e,t){var n=e.selector,r=e.args
try{var a=n.apply(void 0,[N()].concat(r))
t(a)}catch(e){t(e,!0)}}(x,i):(x=V.d.actionChannel(e))?(d=i,f=(s=x).pattern,p=s.buffer,(h=K(f)).pattern=f,void d(Object(H.d)(T,p||J.a.fixed(),h))):(x=V.d.flush(e))?(c=i,void x.flush(c)):(x=V.d.cancelled(e))?void i(!!D.isCancelled):(x=V.d.getContext(e))?void i(j[x]):(x=V.d.setContext(e))?(l=x,u=i,z.v.assign(j,l),void u()):i(e)}function F(e,t){var n=e[z.a]
z.q.func(n)?t.cancel=n:z.q.func(e.abort)&&(t.cancel=function(){return e.abort()}),e.then(t,function(e){return t(e,!0)})}function U(e,t,n,r){w(e,T,M,N,j,c,t,n,r)}function W(e,t,n){var r=e.context,a=e.fn,o=e.args,i=e.detached,l=function(e){var t=e.context,n=e.fn,r=e.args
if(z.q.iterator(n))return n
var a,o,i=void 0,l=void 0
try{i=n.apply(t,r)}catch(e){l=e}return z.q.iterator(i)?i:l?Object(z.t)(function(){throw l}):Object(z.t)((a=void 0,o={done:!1,value:i},function(e){return a?{done:!0,value:e}:(a=!0,o)}))}({context:r,fn:a,args:o})
try{Object(Y.c)()
var u=w(l,T,M,N,j,c,t,a.name,i?null:z.u)
i?n(u):l._isRunning?(v.addTask(u),n(u)):l._error?v.abort(l._error):n(u)}finally{Object(Y.b)()}}function q(r,t,a){var o=Object.keys(r)
if(!o.length)return a(z.q.array(r)?[]:{})
var i=0,l=void 0,u={},c={}
o.forEach(function(n){var e=function(e,t){l||(t||Object(H.e)(e)||e===G||e===Z?(a.cancel(),a(e,t)):(u[n]=e,++i===o.length&&(l=!0,a(z.q.array(r)?z.f.from(X({},u,{length:o.length})):u))))}
e.cancel=z.u,c[n]=e}),a.cancel=function(){l||(l=!0,o.forEach(function(e){return c[e].cancel()}))},o.forEach(function(e){return B(r[e],t,e,c[e])})}}var v="runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!"
function s(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o=void 0
z.q.iterator(e)?(o=e,e=t):(Object(z.h)(t,z.q.func,v),o=t.apply(void 0,r),Object(z.h)(o,z.q.iterator,v))
var i=e,l=i.subscribe,u=i.dispatch,c=i.getState,s=i.context,d=i.sagaMonitor,f=i.logger,p=i.onError,h=Object(z.y)()
d&&(d.effectTriggered=d.effectTriggered||z.u,d.effectResolved=d.effectResolved||z.u,d.effectRejected=d.effectRejected||z.u,d.effectCancelled=d.effectCancelled||z.u,d.actionDispatched=d.actionDispatched||z.u,d.effectTriggered({effectId:h,root:!0,parentEffectId:0,effect:{root:!0,saga:t,args:r}}))
var m=w(o,l,Object(z.A)(u),c,s,{sagaMonitor:d,logger:f,onError:p},h,t.name)
return d&&d.effectResolved(h,m),m}var i=n("q09E"),l=n("oZtI")
n.d(t,"runSaga",function(){return s}),n.d(t,"END",function(){return H.a}),n.d(t,"eventChannel",function(){return H.d}),n.d(t,"channel",function(){return H.b}),n.d(t,"buffers",function(){return J.a}),n.d(t,"takeEvery",function(){return i.a}),n.d(t,"takeLatest",function(){return i.c}),n.d(t,"throttle",function(){return i.e}),n.d(t,"delay",function(){return z.m}),n.d(t,"CANCEL",function(){return z.a}),n.d(t,"detach",function(){return V.i}),n.d(t,"effects",function(){return l}),n.d(t,"utils",function(){return r
})
t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.context,a=void 0===t?{}:t,o=function(e,t){var n={}
for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}(e,["context"]),i=o.sagaMonitor,l=o.logger,u=o.onError
if(z.q.func(o))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead")
if(l&&!z.q.func(l))throw new Error("`options.logger` passed to the Saga middleware is not a function!")
if(u&&!z.q.func(u))throw new Error("`options.onError` passed to the Saga middleware is not a function!")
if(o.emitter&&!z.q.func(o.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!")
function c(e){var t=e.getState,n=e.dispatch,r=Object(H.c)()
return r.emit=(o.emitter||z.o)(r.emit),c.run=s.bind(null,{context:a,subscribe:r.subscribe,dispatch:n,getState:t,sagaMonitor:i,logger:l,onError:u}),function(n){return function(e){i&&i.actionDispatched&&i.actionDispatched(e)
var t=n(e)
return r.emit(e),t}}}return c.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},c.setContext=function(e){Object(z.h)(e,z.q.object,Object(z.k)("sagaMiddleware",e)),z.v.assign(a,e)},c}},"7bR1":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setVisibilityScreen=v,t.default=k
var c=r(n("o0o1")),y=r(n("MVZn")),a=r(n("J2m7")),s=n("oZtI"),d=n("upRB"),f=n("JfQ8"),u=n("Kkl0"),b=n("jvRN"),p=n("7q5O"),h=c.default.mark(v),o=c.default.mark(g),m=c.default.mark(w),i=c.default.mark(C),l=c.default.mark(k),S=[]
function v(e){var t,n,r,a,o,v,g,i,l,u
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,n=t.container.layers,r=n.resourceByScreen,a=n.visibilityScreenID,o=t.model.widgets,v=(0,d.getCurrentScreen)(t),r[a]&&!r[a].error){e.next=26
break}if(S.includes(a)){e.next=26
break}return S.push(a),e.prev=8,e.next=11,(0,s.call)(p.getLayerData,v,o)
case 11:return g=e.sent,i=(0,b.getMockingBotWidgets)(t),l=[{type:"screen",id:v.cid,name:v.name,top:0,left:0,width:v.width,height:v.height,src_left:0,src_top:0,src_width:g.artboard.width,src_height:g.artboard.height,bg_colors:[{value:(0,b.checkColor)(v.bgcolor)}]}].concat(g.layers).concat(i).reduce(function(e,t){var n=t.id,r=t.top,a=t.left,o=t.width,i=t.height
if("group"===t.name)return e.push(t),e
var l=(0,b.isSketchLayer)(n)?g.artboard.widgetWidth/g.artboard.width:1,u=r*l,c=a*l,s=o*l,d=i*l,f=Math.min(Math.max(c,0),v.width),p=Math.min(Math.max(c+s,0),v.width),h=Math.min(Math.max(u,0),v.height),m=Math.min(Math.max(u+d,0),v.height)
return p-f!=0&&m-h!=0&&e.push((0,y.default)({},t,{left:f,top:h,width:p-f,height:m-h,src_top:Number(parseFloat(Math.max(r,0)).toFixed(2)),src_left:Number(parseFloat(Math.max(a,0)).toFixed(2)),src_width:Number(parseFloat(Math.min(a+o,g.artboard.width)-Math.max(a,0)).toFixed(2)),src_height:Number(parseFloat(Math.min(r+i,g.artboard.height)-Math.max(r,0)).toFixed(2))})),e},[]),u=(0,y.default)({},g,{layers:l}),S.splice(S.indexOf(a),1),e.next=18,(0,s.put)((0,f.receiveResourceSuccess)(a,u))
case 18:e.next=26
break
case 20:return e.prev=20,e.t0=e.catch(8),console.log(e.t0.stack),S.splice(S.indexOf(a),1),e.next=26,(0,s.put)((0,f.receiveResourceError)(a,e.t0.message))
case 26:case"end":return e.stop()}},h,this,[[8,20]])}function g(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)(f.SET_VISIBILITY_SCREEN,v)
case 2:case"end":return e.stop()}},o,this)}function w(t){var n,r,a,o,i,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.layerID,e.next=3,(0,s.select)()
case 3:return r=e.sent,a=r.container.layers,o=a.resourceByScreen,i=a.visibilityScreenID,l=E(o[i].layers,n),e.next=9,(0,s.put)((0,u.selectLayer)(l))
case 9:return e.next=11,(0,s.put)((0,u.activateLayer)(l))
case 11:case"end":return e.stop()}},m,this)}function C(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)(u.REQUEST_SELECT_LAYER,w)
case 2:case"end":return e.stop()}},i,this)}var E=function(e,t){var n=(0,a.default)(e,{id:t})
if(!n||!n.parent||n.image_set_zip)return t
for(;n;){var r=(0,a.default)(e,{id:n.parent})
if(!r||!r.image_set_zip||!r.parent)return t
if(r.image_set_zip)return n.parent
n=r.parent}}
function k(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[g(),C()]
case 2:case"end":return e.stop()}},l,this)}},"7eYF":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=r(n("RIqP")),c=r(n("MVZn")),d=r(n("o0o1")),f=n("ANjH"),p=n("WVP6"),h=r(n("7bO/")),a=n("/TnQ"),s=n("IV71"),m=n("mreW"),v=n("nU12"),g=(0,a.composeWithDevTools)({})
t.default=function(e){var t=e.viewMap,n=e.containerReducerMap,r=e.sagaMap,a=e.extendCallback,o=new s.WebpackInterface
if(t)for(var i in t)o.setView(i,t[i])
var l=function(e){var n,t=e.entryMap,r=e.reducerMap,a=e.sagaMap,o=(0,p.createReduxEntry)(),i=o.middleware;(0,o.setEntryMap)(t)
var l=[i]
a&&(n=(0,h.default)(),l.push(n))
var u=(0,f.createStore)((0,f.combineReducers)(r),g(f.applyMiddleware.apply(void 0,l)))
if(a){var c=function(t){n.run(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a[t]()
case 3:e.next=0
break
case 5:case"end":return e.stop()}},e,this)}))}
for(var s in a)c(s)}return{store:u}}({initialState:{model:{},container:{}},entryMap:(0,c.default)({},v.entryMap,m.entryMap,{"entry:webpack-interface:view:call":function(e,t){var n=t.payload
setTimeout(function(){return o.callViewMethod.apply(o,[n.name,n.method].concat((0,u.default)(n.args||{})))},0)}}),reducerMap:{model:(0,f.combineReducers)(v.reducerMap),container:(0,f.combineReducers)(n)},sagaMap:r}).store
return o.setStore(l),a&&a(o),o}},"7q5O":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getLayerData=void 0
var l=r(n("o0o1")),a=r(n("yXPU")),u=n("t3Un"),o=function(){var n=(0,a.default)(l.default.mark(function e(r,a){var o,i
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=r.artboard_id&&a.find(function(e){return e.screen_cid===r.cid&&"image_view"===e.name&&e.image&&-1!==e.image.indexOf(String("/artboard_"))}))){e.next=13
break}if(!window.MBArtboards){e.next=6
break}n=r.cid,i=window.MBArtboards[n],e.next=9
break
case 6:return e.next=8,t=r.artboard_id,(0,u.requestJSON)("".concat("/api/v2/sketch","/artboards/").concat(t,".json"))
case 8:i=e.sent
case 9:s(i,o),c(i),e.next=14
break
case 13:i={artboard:{top:0,left:0,width:r.width,height:r.height},layers:[],document:{document_colors:[],text_styles:[],global_colors:[]}}
case 14:return e.abrupt("return",i)
case 15:case"end":return e.stop()}var t,n},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.getLayerData=o
var c=function(e){e.layers.some(function(e){return e.z})?e.layers.sort(function(e,t){return e.z-t.z}):e.layers.sort(function(e,t){return parseInt(t.width)*parseInt(t.height)-parseInt(e.width)*parseInt(e.height)})},s=function(e,t){Object.assign(e.artboard,{widgetZ:t.z,widgetTop:t.top,widgetLeft:t.left,widgetWidth:t.width,widgetHeight:t.height}),e.layers.push({id:"artboard-base",name:e.artboard.name,type:"screen",top:0,left:0,z:t.z,width:e.artboard.width,height:e.artboard.height,bg_colors:[{value:t.bg}],
timestamp:t.timestamp+1})}},"7tbW":function(e,t,n){var r=n("LGYb")
e.exports=function(e){return e&&e.length?r(e):[]}},"80la":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:slice:success":return(0,a.default)({},e,r,{loading:!1})
case"reducer:slice:fail":return(0,a.default)({},e,r,{error:!0})
default:return e}}
var a=r(n("MVZn")),o={slices:[],loading:!0,error:!1}},"81q6":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("i6OX")),m=n("iLpg"),v=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"setInputRef",function(e){return t.$input=e}),(0,f.default)((0,d.default)((0,d.default)(t)),"focus",function(){return t.$input.focus()}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleChange",function(e){t.props.onChange(e.target.value)}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleClear",function(){t.props.onChange("")}),(0,f.default)((0,d.default)((0,d.default)(t)),
"handleMouseDown",function(e){e.preventDefault()}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleKeyDown",function(e){"Escape"===e.key&&t.props.onExit&&t.props.onExit()}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.placeholder,r=e.className,a=e.inputStyle
return p.default.createElement(m.StyledSearchBar,{type:"search",className:r},p.default.createElement(h.default,{type:"dora",name:"scale",className:"search-icon"}),p.default.createElement("input",{ref:this.setInputRef,style:a,type:"text",value:t,placeholder:n,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),0<t.length&&p.default.createElement(h.default,{type:"dora",name:"times_fc",className:"clear-icon",onMouseDown:this.handleMouseDown,onClick:this.handleClear}))}}]),o}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{value:o.default.string,inputStyle:o.default.object,placeholder:o.default.string,className:o.default.string,onChange:o.default.func,onExit:o.default.func})},"87hQ":function(e,t){function u(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function n(l){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=l.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var r,a=window,o=a.fetch,i=a.FileReader,l=a.URL,c=(r=n(regeneratorRuntime.mark(function e(t){var n,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t)
case 2:return n=e.sent,e.next=5,n.blob()
case 5:return r=e.sent,e.abrupt("return",l.createObjectURL(r))
case 7:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})
t.dataUrlToBlobUrl=c
var s=function(n){return new Promise(function(e){var t=new i
t.addEventListener("load",function(){return e(t.result)},!1),t.readAsDataURL(n)})}
t.blobToDataUrl=s
var d={method:"GET",cache:"default",mode:"cors",credentials:"same-origin"}
t.setFetchOption=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
d=Object.assign({},d,e)}
var f={},p={}
t.resetFetchCache=function(){f={},p={}},t.fetchTextWithCache=function(e){return f[e]||(f[e]=o(e,d).then(function(e){return e.text()})),f[e]}
var h=function(e){return p[e]||(p[e]=o(e,d).then(function(e){return e.blob()})),p[e]}
t.fetchBlobWithCache=h
var m,v=(m=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,h(t)
case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1))
case 5:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)})
t.fetchDataUrlWithCache=v},"8Fba":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),h=r(n("q1tI")),m=a(n("M8nv")),p=a(n("17x9")),v=n("/5+U")
n("v8PR")
var g="hidden",y=function(e){function n(e){var s;(0,o.default)(this,n),s=(0,l.default)(this,(0,c.default)(n).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(s)),"cancelColorPicker",function(e){s.imageCanvas.contains(e.target)||s.cancelPickerMode()}),(0,f.default)((0,d.default)((0,d.default)(s)),"cancelPickerMode",function(){return s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1}})}),(0,f.default)((0,d.default)((0,d.default)(s)),"renderImageCanvas",function(){
var e=s.imageCanvas.getBoundingClientRect(),t=e.width,n=e.height
s.lastCanvasRect={width:t,height:n},s.imageCanvas.width=t,s.imageCanvas.height=n,s.imageCtx.drawImage(s.image,0,0,t,n)}),(0,f.default)((0,d.default)((0,d.default)(s)),"calculateCenterPoint",function(e){var t=s.image.getBoundingClientRect(),n=t.left,r=t.top
s.centerPoint={centerX:Math.floor(e.clientX-n),centerY:Math.floor(e.clientY-r)}}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleMove",function(e){s.image.complete&&s.state.visibility===g&&s.setState({visibility:"visible"}),s.calculateCenterPoint(e)
var t=s.props,n=t.glassHeight,r=t.glassWidth,a=t.scale,o=s.centerPoint,i=o.centerX,l=o.centerY,u=Math.floor(i-r/2),c=Math.floor(l-n/2)
s.setState({glassLeft:u,glassTop:c}),l<0&&s.clearGlassRect(),s.glassCtx.clearRect(0,0,r,n),a<1&&console.warn("Can't make the galss scale less than 1, It will make bed invision"),k(s.glassCtx,!1),s.glassCtx.drawImage(s.imageCanvas,Math.floor(i-r/2/s.finallyScale),Math.floor(l-n/2/s.finallyScale),Math.floor(r/s.finallyScale),Math.floor(n/s.finallyScale),-5,-5,r,n),E(s.glassCtx,"lightgray",10,10),_(s.glassCtx),x(s.glassCtx,"black",Math.floor((r-10)/2),Math.floor((n-10)/2),10,10),s.getColor()}),(0,f.default)((0
,d.default)((0,d.default)(s)),"getColor",function(){var e=s.centerPoint,t=e.centerX,n=e.centerY,r=s.imageCtx.getImageData(t,n,1,1).data,a=b(r),o=a.rgba,i=a.R,l=a.G,u=a.B
s.setState({color:o,R:i,G:l,B:u}),s.color=o}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleClick",function(){s.getColor()
var e=s.color,t=(0,v.saveRecentColor)(e),n=t.history,r=t.focusColor
clearTimeout(s.timeoutToken),s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:n,focusColor:r}}),s.timeoutToken=setTimeout(function(){s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:n,focusColor:null}})},1e3)}),(0,f.default)((0,d.default)((0,d.default)(s)),"clearGlassRect",function(){var e=s.props,t=e.glassHeight,n=e.glassWidth
s.glassCtx.clearRect(0,0,n,t),s.setState({visibility:g})}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleMouseLeave",function(){s.clearGlassRect()}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleKeyDown",function(e){"escape"===e.key.toLowerCase()&&(s.clearGlassRect(),s.cancelPickerMode())}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleLoad",function(){s.renderImageCanvas()}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleError",function(){s.cancelPickerMode()})
var t=s.props.scale
return s.iamgeContainerRef=function(e){return s.image=e},s.getImageCanvasRef=function(e){return s.imageCanvas=e},s.glassCanvasRef=function(e){return s.glassCanvas=e},s.finallyScale=10*(t<1?1:t),s.state={visibility:g,glassLeft:0,glassTop:0,color:"#fff",R:0,G:0,B:0},s}return(0,s.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.imageCtx=this.imageCanvas.getContext("2d"),this.glassCtx=this.glassCanvas.getContext("2d")}},{key:"componentDidCatch",value:function(e){console.log(e),
this.cancelPickerMode()}},{key:"componentDidUpdate",value:function(){if(this.imageCanvas){var e=this.imageCanvas.getBoundingClientRect(),t=e.width,n=e.height,r=this.lastCanvasRect||{width:0,height:0},a=r.width,o=r.height
a==t&&o==n||(this.clearGlassRect(),this.renderImageCanvas())}else this.handleError()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r=e.glassWidth,a=e.glassHeight,o=e.src,i=this.state,l=i.visibility,u=i.glassLeft,c=i.glassTop,s=i.color,d=i.R,f=i.G,p=i.B
return h.default.createElement("div",{className:"mb-picker-container"},h.default.createElement("img",{ref:this.iamgeContainerRef,className:"mb-picker-image",width:t,height:n,src:o,onLoad:this.handleLoad,onError:this.handleError}),h.default.createElement("canvas",{ref:this.getImageCanvasRef,onMouseMove:this.handleMove,onMouseLeave:this.handleMouseLeave,onClick:this.handleClick,style:{width:t,height:n,opacity:0}}),h.default.createElement("div",{className:"mb-glass",style:{width:r,height:a,visibility:l,left:u,
top:c}},h.default.createElement("div",{className:"shadow"}),h.default.createElement("canvas",{ref:this.glassCanvasRef,width:r,height:a,style:{width:r,height:a}}),h.default.createElement("div",{style:{top:a/2+15},className:"mb-glass-text"},h.default.createElement("div",{className:"mb-rgba-color"},"R:".concat(d," G:").concat(f," B:").concat(p," ").concat(String(w(s).hex).toUpperCase())))),h.default.createElement(m.default,{onKeyDown:this.handleKeyDown,onClick:this.cancelColorPicker}))}}]),n}(h.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{src:p.default.string,width:p.default.oneOfType([p.default.string,p.default.number]),height:p.default.oneOfType([p.default.string,p.default.number]),glassHeight:p.default.number,glassWidth:p.default.number,scale:p.default.number,dispatch:p.default.func}),(0,f.default)(y,"defaultProps",{src:"/sec3.png",width:1300,height:769,glassWidth:200,glassHeight:200,scale:1,pickColor:function(e){return console.log(e)}})
var b=function(e){return e[3]=parseFloat(e[3]/255),{rgba:"rgba(".concat(e.join(", "),")"),R:e[0],G:e[1],B:e[2]}},S=/rgba?\((\d+),(\d+),(\d+),?(\d+)?/,w=function(e){var t=S.exec(e.replace(/ /g,"").toLowerCase())
if(!t||!t[3])return e
var n=(0,u.default)(t,5),r=n[1],a=n[2],o=n[3],i=n[4],l=void 0===i?"1":i
return{hex:"#".concat(C(r)).concat(C(a)).concat(C(o)),o:Number(l)}},C=function(e){var t=parseInt(e,10).toString(16)
return 1===t.length?"0".concat(t):t},E=function(e,t,n,r){e.strokeStyle=t,e.lineWidth=.5
for(var a=n+5.5;a<e.canvas.width-n;a+=n)e.beginPath(),e.moveTo(a,0),e.lineTo(a,e.canvas.height),e.stroke()
for(var o=r+5.5;o<e.canvas.height-n;o+=r)e.beginPath(),e.moveTo(0,o),e.lineTo(e.canvas.width,o),e.stroke()},k=function(e,t){e.mozImageSmoothingEnabled=t,e.webkitImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t,e.imageSmoothingEnabled=t},_=function(e){e.beginPath(),e.strokeStyle="#8D9EA7",e.lineWidth=8,e.arc(100,100,96,0,2*Math.PI),e.stroke(),e.strokeStyle="#D4D7DC",e.lineWidth=5,e.arc(100,100,96,0,2*Math.PI),e.stroke()},x=function(e,t,n,r,a,o){e.beginPath(),n+=.5,r+=.5,e.strokeStyle=t,e.lineWidth=1,
e.moveTo(n,r),e.lineTo(n+a,r),e.lineTo(n+a,r+o),e.lineTo(n,r+o),e.lineTo(n,r),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="white",e.moveTo(n-1,r-1),e.lineTo(n+a+1,r-1),e.lineTo(n+a+1,r+1+o),e.lineTo(n-1,r+o+1),e.lineTo(n-1,r-1),e.stroke()}},"8jgF":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("MVZn")),l=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9"),v=a(n("i6OX")),g=n("zAG7"),y=n("7Qib")
n("oSKl")
var b=function(e){function a(){var e,o;(0,l.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,u.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(o)),"state",{formData:{name:"",email:"",pwd:""},submitErrMsg:"",submitted:!1}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleFormDataChange",function(t){return function(e){return o.setState({formData:(0,i.default)({},o.state.formData,(0,f.default)({},t,e))})}}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleEmailChange",function(e){return o.setState({formData:(0,i.default)(
{},o.state.formData,{email:e})})}),(0,f.default)((0,d.default)((0,d.default)(o)),"resetSubmitErrMsg",function(){return o.setState({submitErrMsg:""})}),(0,f.default)((0,d.default)((0,d.default)(o)),"verifyEmail",function(e){return g.EMAIL_REG.test(e)}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleSignUp",function(){var e=o.props.event,t=o.state.formData,n=t.name,r=t.email,a=t.pwd
if(o.resetSubmitErrMsg(),!o.verifyEmail(r))return o.setState({submitErrMsg:I18N.design.verify_email_address});(0,y.post)("/events/sign_up.json",{username:n,email:r,password:a,locale:"zh-CN",event:e.name}).then(function(){return(0,y.post)("/sessions.json",{email:r,password:a}).then(function(){return o.setState({submitted:!0})})},function(e){return o.setState({submitErrMsg:e.detail})})}),o}return(0,s.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.inMobile,n=e.isOpen,
r=e.event,a=this.state,o=a.formData,i=o.name,l=o.email,u=o.pwd,c=a.submitErrMsg,s=a.submitted,d=!!i&&!!l&&!!u
return p.default.createElement(m.Modal,{className:"sign-up-modal ".concat(t?"modal-in-mobile":""),maskClassName:"modal-mask",title:I18N.design.register_account,isOpen:n},s?p.default.createElement("div",{className:"award-view"},p.default.createElement("img",{className:"award",src:"/images/event/award.png"}),p.default.createElement("p",{className:"success-tip"},r.successTip)):p.default.createElement("div",{className:"sign-up-view"},p.default.createElement("p",{className:"event-desc"},r.desc),
p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"user"}),p.default.createElement(m.Input,{className:"input",placeholder:I18N.design.user_name,defaultValue:i,onChange:this.handleFormDataChange("name")})),p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"mail"}),p.default.createElement(m.InputEmail,{className:"input",placeholder:I18N.design.user_email,
defaultValue:l,onChange:this.handleEmailChange})),p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"lock"}),p.default.createElement(m.Input,{className:"input",placeholder:I18N.design.user_password,type:"password",defaultValue:u,onChange:this.handleFormDataChange("pwd")})),!!c&&p.default.createElement("p",{className:"error-msg"},"* ".concat(c)),p.default.createElement(m.Button,{className:"primary-button",type:"primary",isDisabled:!d,
onClick:this.handleSignUp},I18N.design.sign_up),p.default.createElement("p",{className:"agree-terms"},I18N.design.click_register_meant_agree,p.default.createElement("a",{href:"/tos",target:"_blank"},I18N.design.terms_of_service))))}}]),a}(p.PureComponent);(t.default=b).propTypes={event:h.default.object,isOpen:h.default.bool,inMobile:h.default.bool}},"92lH":function(e,t,n){"use strict"
n.d(t,"a",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"f",function(){return m})
var l=n("Ev6p"),u=n("mbVZ"),r=n("udQi"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="@@redux-saga/CHANNEL_END",c={type:o},i=function(e){return e&&e.type===o}
function s(){var a=[]
return{subscribe:function(e){return a.push(e),function(){return Object(l.w)(a,e)}},emit:function(e){for(var t=a.slice(),n=0,r=t.length;n<r;n++)t[n](e)}}}var d="invalid buffer passed to channel factory function",f="Saga was provided with an undefined action"
function p(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u.a.fixed(),a=!1,o=[]
function i(){if(a&&o.length)throw Object(l.p)("Cannot have a closed channel with pending takers")
if(o.length&&!r.isEmpty())throw Object(l.p)("Cannot have pending takers with non empty buffer")}return Object(l.h)(r,l.q.buffer,d),{take:function(e){i(),Object(l.h)(e,l.q.func,"channel.take's callback must be a function"),a&&r.isEmpty()?e(c):r.isEmpty()?(o.push(e),e.cancel=function(){return Object(l.w)(o,e)}):e(r.take())},put:function(e){if(i(),Object(l.h)(e,l.q.notUndef,f),!a){if(!o.length)return r.put(e)
for(var t=0;t<o.length;t++){var n=o[t]
if(!n[l.b]||n[l.b](e))return o.splice(t,1),n(e)}}},flush:function(e){i(),Object(l.h)(e,l.q.func,"channel.flush' callback must be a function"),a&&r.isEmpty()?e(c):e(r.flush())},close:function(){if(i(),!a&&(a=!0,o.length)){var e=o
o=[]
for(var t=0,n=e.length;t<n;t++)e[t](c)}},get __takers__(){return o},get __closed__(){return a}}}function h(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:u.a.none(),n=arguments[2]
2<arguments.length&&Object(l.h)(n,l.q.func,"Invalid match function passed to eventChannel")
var r=p(t),a=function(){r.__closed__||(o&&o(),r.close())},o=e(function(e){i(e)?a():n&&!n(e)||r.put(e)})
if(r.__closed__&&o(),!l.q.func(o))throw new Error("in eventChannel: subscribe should return a function to unsubscribe")
return{take:r.take,flush:r.flush,close:a}}function m(e){var n=h(function(t){return e(function(e){e[l.c]?t(e):Object(r.a)(function(){return t(e)})})})
return a({},n,{take:function(e,t){1<arguments.length&&(Object(l.h)(t,l.q.func,"channel.take's matcher argument must be a function"),e[l.b]=t),n.take(e)}})}},"92wE":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),g=r(n("q1tI")),p=a(n("9DAG")),h=a(n("WtCM")),y=n("qNz0"),m=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"setPanelScreenRef",function(e){return t.$screen=e}),(0,f.default)((0,d.default)((0,d.default)(t)),"getScreenElement",function(){return t.$screen}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.chameleon,n=e.top,r=e.left,a=e.treeData,o=e.transition,i=e.stateCid,l=e.widgetQueryMap,u=t.v&&Link.find(t.link_cids),c=u?u.cid:"",
s=u&&"tap"!==u.gesture?u.gesture:"",d="ppanel panel".concat(u?" clickable":""),f=(0,y.getPanelStyle)(t,!0,n,r),p=t.ct(),h=p.homeScreen(),m={width:p.width,height:p.height},v={width:h.w(),height:h.h(),backgroundColor:h.bgcolor,backgroundImage:h.bgimage?"url(".concat(h.bgimage,")"):""}
return g.default.createElement("div",{"data-cid":t.cid,"data-link_cid":c,className:d,id:"panel".concat(t.cid,"p"),style:f},g.default.createElement("div",{className:"panel-scroll-box",style:m},g.default.createElement("div",{ref:this.setPanelScreenRef,id:"state".concat(t.cid).concat(h.cid,"p"),className:"pstate state active","data-cid":h.cid,style:v},g.default.createElement(b,{treeData:a,screenCid:h.cid,stateCid:i,transition:o,widgetQueryMap:l,getScreenElement:this.getScreenElement}))),
g.default.createElement("div",{className:"region gesture ".concat(s)}))}}]),o}(g.PureComponent)
t.default=m,(0,f.default)(m,"propTypes",{chameleon:o.default.object,stateCid:o.default.string,transition:o.default.object,treeData:o.default.object,top:o.default.number,left:o.default.number,widgetQueryMap:o.default.object}),(0,f.default)(m,"defaultProps",{transition:{delay:0,duration:0}})
var b=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.screenCid,n=e.stateCid,r=e.transition,a=e.widgetQueryMap,o=e.getScreenElement
return g.default.createElement(h.default,{screenCid:t,stateCid:n,transition:r,widgetQueryMap:a,getScreenElement:o},function(e){return g.default.createElement(p.default,{widgetTreeData:e})})}}]),t}(g.PureComponent);(0,f.default)(b,"propTypes",{screenCid:o.default.string,stateCid:o.default.string,transition:o.default.object,widgetQueryMap:o.default.object,getScreenElement:o.default.func})},"94Et":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarkerPanel=void 0
var c=a(n("pVnL")),o=a(n("J4zp")),l=a(n("MVZn")),u=a(n("lwsE")),i=a(n("W8MJ")),s=a(n("a1gu")),d=a(n("Nsbk")),f=a(n("7W2i")),p=a(n("lSNA")),h=r(n("q1tI")),m=a(n("17x9")),v=n("/rSK"),g=n("fiFu"),y="TEMP_MARKER_CID",b=function(e){function n(e){var i;(0,u.default)(this,n),(i=(0,s.default)(this,(0,d.default)(n).call(this,e))).addTempCommentThreadListener=(0,g.muteEvent)(function(e){var t=i.props,n=t.isActive,r=t.permissionPack,a=t.markerDomPack,o=t.dispatch
n&&r.getPermission().create&&S(e,a.getSimulatorContainerElement().getBoundingClientRect())&&o({type:"container:comment:focus-temp-marker",payload:(0,l.default)({},i.markerOperations.getMarkerPosition(e),{cid:y})})})
var t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return i.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:e,focusSource:"marker"}})}
return i.markerOperations={addContainerEventListener:function(e){var a=i.props.markerDomPack.getSimulatorContainerElement()
a&&Object.entries(e).forEach(function(e){var t=(0,o.default)(e,2),n=t[0],r=t[1]
return a.addEventListener(n,r)})},removeContainerEventListener:function(e){var a=i.props.markerDomPack.getSimulatorContainerElement()
a&&Object.entries(e).forEach(function(e){var t=(0,o.default)(e,2),n=t[0],r=t[1]
return a.removeEventListener(n,r)})},setFocusCommentThreadCid:t,setHoverFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return!i.props.tempCommentThreadMarker&&t(e)},doUpdateCommentThread:function(e){var t=e.cid,n=e.top,r=e.left
return i.props.dispatch({type:t!==y?"entry:comment-threads:update":"container:comment:focus-temp-marker",payload:{cid:t,top:n,left:r}})},getMarkerPosition:function(e){var t=i.props,n=t.scale,r=t.markerDomPack,a=r.getScreenContainerElement().getBoundingClientRect(),o=r.getSimulatorContainerElement().getBoundingClientRect()
return{left:((0,g.clamp)(e.clientX,o.left+20,o.right-20)-a.left)/n,top:((0,g.clamp)(e.clientY,o.top+20,o.bottom-20)-a.top)/n}}},i}return(0,f.default)(n,e),(0,i.default)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isActive,r=t.markerDomPack.getSimulatorContainerElement()
n!==e.isActive&&r&&(n?r.addEventListener("dblclick",this.addTempCommentThreadListener):r.removeEventListener("dblclick",this.addTempCommentThreadListener))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.markerDomPack,n=e.dispatch,r=t.getSimulatorContainerElement()
r&&r.removeEventListener("dblclick",this.addTempCommentThreadListener),n({type:"container:comment:focus-temp-marker",payload:null})}},{key:"render",value:function(){var a=this,e=this.props,t=e.isActive,o=e.scale,i=e.permissionPack,n=e.commentThreadList,r=e.isLoaded,l=e.focusCommentThreadCid,u=e.tempCommentThreadMarker
return t&&r?h.default.createElement("div",null,n.map(function(e,t){var n=Boolean(!u&&l===e.cid),r=Boolean(u||l&&!n)
return h.default.createElement(v.CommentMarker,(0,c.default)({key:e.cid},{commentMarkerIndex:t+1,commentThread:e,scale:o,isEditable:i.getPermission(e.user_id).update,isFocus:n,isFade:r,markerOperations:a.markerOperations}))}),u&&h.default.createElement(v.CommentMarker,{commentMarkerIndex:n.length+1,commentThread:u,scale:o,isEditable:!0,isFocus:!0,isFade:!1,markerOperations:this.markerOperations})):null}}]),n}(h.PureComponent)
t.CommentMarkerPanel=b,(0,p.default)(b,"propTypes",{scale:m.default.number,isActive:m.default.bool,permissionPack:m.default.object,markerDomPack:m.default.object,commentThreadList:m.default.array,isLoaded:m.default.bool,focusCommentThreadCid:m.default.string,tempCommentThreadMarker:m.default.object,dispatch:m.default.func})
var S=function(e,t){var n=t.left,r=t.top,a=t.width,o=t.height
return n<=e.clientX&&r<=e.clientY&&n+a>=e.clientX&&r+o>=e.clientY}},"9DAG":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=a(n("oJEp")),h=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.widgetTreeData,n=e.isSnapshot
return t.children.map(function(e){return f.default.createElement(p.default,{key:e.cid,treeData:e,offSetX:0,offSetY:0,isSnapshot:n})})}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{widgetTreeData:d.default.object,isSnapshot:d.default.bool})},"9Nap":function(e,t){e.exports=function(e){return e}},"9NmV":function(e,t){var n="\\ud800-\\udfff",r="\\u2700-\\u27bf",a="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",
i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="["+i+"]",u="\\d+",c="["+r+"]",s="["+a+"]",d="[^"+n+i+u+r+a+o+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+o+"]",m="(?:"+s+"|"+d+")",v="(?:"+h+"|"+d+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",
b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",S="[\\ufe0e\\ufe0f]?",w=S+b+("(?:\\u200d(?:"+["[^"+n+"]",f,p].join("|")+")"+S+b+")*"),C="(?:"+[c,f,p].join("|")+")"+w,E=RegExp([h+"?"+s+"+"+g+"(?="+[l,h,"$"].join("|")+")",v+"+"+y+"(?="+[l,h+m,"$"].join("|")+")",h+"?"+m+"+"+g,h+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,C].join("|"),"g")
e.exports=function(e){return e.match(E)||[]}},"9ZUU":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("Hrzm")),i=n("upRB"),l=(0,a.connect)(function(e){var t=(0,i.getRunnerState)(e),n=t.activeCid,r=t.screenInfoMap
return{screenCid:n,stateCid:r[n]&&r[n].stateCid}})(o.default)
t.default=l},"9ggG":function(e,t,n){var r=n("Z0cm"),a=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||i.test(e)||!o.test(e)||null!=t&&e in Object(t)}},An9T:function(e,t,n){e.exports={shell:"_38-tXAYs8SyeFiNeAicHOH"}},B3BZ:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createNotifierWrap=void 0
var u=function(){return"Notification"in window}
t.createNotifierWrap=function(){return{init:function(){u()&&("default"!==Notification.permission||MB.localStorageDelegate.getItem("neverAskForNotificationPermission")||Notification.requestPermission())},notify:function(e){var t=e.title,n=e.opts,r=e.duration,a=e.onClick,o=e.onError,i=e.onNotSupport
if(u()&&"granted"===Notification.permission){var l=new Notification(t,n)
return setTimeout(l.close.bind(l),r||3e3),l.onclick=function(e){return a&&a(e,function(){return l.close()})},l.onerror=o,l}i&&i()}}}},BkxA:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),l=n("upRB"),o=r(n("oqsN")),i=(0,a.connect)(function(e,t){var n=(0,l.getRunnerState)(e),r=t.panel,a=r.cid,o=r.screen_cid,i=n.screenInfoMap[o].panelInfoMap[a]
return{cid:a,activeScreenCid:i.activeScreenCid,mountedScreenCids:i.panelScreens,transition:i.transition||{name:"none",delay:0,duration:0,offset:100}}})(o.default)
t.default=i},CMye:function(e,t,n){var r=n("GoyQ")
e.exports=function(e){return e==e&&!r(e)}},CUi3:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.arrayActMap=t.objectActMap=t.ArrayOf=t.ObjectAs=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("JGuq"),o=n("OBS2"),i=a.Operation.objectSet,l=a.Operation.objectDelete,u=a.Operation.objectMerge,c=a.Operation.arraySet,s=a.Operation.arrayDelete,d=a.Operation.arrayInsert,f=a.Operation.arrayPush,p=a.Operation.arrayUnshift,h=a.Operation.arrayPop,m=a.Operation.arrayShift,v=a.Operation.arrayConcat,g=a.Operation.arrayMatchPush,y=a.Operation.arrayMatchDelete,b=a.Operation.arrayMatchMove,S=a.Operation.arrayFindPush,
w=a.Operation.arrayFindDelete,C=a.Operation.arrayFindMove,E=a.Operation.arrayFindSet,k={set:function(e,t){var n=t.key,r=t.value
return i(e,n,r)},delete:function(e,t){var n=t.key
return l(e,n)},merge:function(e,t){var n=t.merge
return u(e,n)}},_={set:function(e,t){var n=t.index,r=t.value
return c(e,n,r)},delete:function(e,t){var n=t.index
return s(e,n)},insert:function(e,t){var n=t.index,r=t.value
return d(e,n,r)},push:function(e,t){var n=t.value
return f(e,n)},pop:function(e,t){return h(e)},shift:function(e,t){return m(e)},unshift:function(e,t){var n=t.value
return p(e,n)},concat:function(e,t){var n=t.concat
return v(e,n)},matchPush:function(e,t){var n=t.value
return g(e,n)},matchDelete:function(e,t){var n=t.value
return y(e,n)},matchMove:function(e,t){var n=t.index,r=t.value
return b(e,n,r)},findPush:function(e,t){var n=t.find,r=t.value
return S(e,n,r)},findDelete:function(e,t){var n=t.find
return w(e,n)},findMove:function(e,t){var n=t.find,r=t.index
return C(e,n,r)},findSet:function(e,t){var n=t.find,r=t.value
return E(e,n,r)}}
t.ObjectAs=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
return new o.ObjectScheme(e,r({},t),r({},k,n))},t.ArrayOf=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
return new o.ArrayScheme(e,[t],r({},_,n))},t.objectActMap=k,t.arrayActMap=_},CWLX:function(e,t,n){"use strict"
t.__esModule=!0
var r=n("nbeO")
Object.defineProperty(t,"transition",{enumerable:!0,get:function(){return o(r).default}})
var a=n("Q9tK")
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"stop",{enumerable:!0,get:function(){return o(a).default}})},CWx7:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.runnerEntry=void 0
var d=r(n("QILm")),y=r(n("MVZn")),g=r(n("RIqP")),b=r(n("lSNA")),S=n("upRB"),w=n("RKRO"),C=function(t){var n={},r={}
return Panel.all().forEach(function(e){e.screen_cid===t&&(e.multi_states?r[e.cid]=k(e):n[e.cid]=E(e))}),Screen.find(t).setState("default",!0),{cid:t,stateCid:"default",panelInfoMap:n,chameleonInfoMap:r}},E=function(e){var t=e.mainState().cid
return{cid:e.cid,activeScreenCid:t,panelScreens:[t]}},k=function(e,t){var n=e.ct().homeScreen(),r=e.mainState().cid
return n.setState(r,!0),{cid:e.cid,stateCid:e.mainState().cid,transition:t}},a={"entry:runner:init:home-screen":function(e,t){var n=e.dispatch,r=t.payload.activeCid
n({type:"runner:update:state",payload:{transition:{name:"none",delay:0,duration:0,offset:100},screenInfoMap:(0,b.default)({},r,C(r)),history:[]}})},"entry:runner:reload:screen":function(e,t){var n=e.dispatch,r=t.payload.activeCid
n({type:"entry:runner:init:home-screen",payload:{activeCid:r}}),n({type:"entry:runner:activate:screen",payload:{screenCid:r}})},"entry:runner:activate:screen":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.screenCid,i=a.transition,l=a.resetTargetScreen,u=void 0===l||l,c=n(),s=(0,S.getRunnerState)(c),d=s.activeCid,f=s.screenInfoMap,p=s.history;/drawer|menu/.test((i=i||{name:"none",delay:0,duration:0,offset:100}).name)?(MB.runner.currentScreen=d,MB.runner.currentMenu=o
):MB.runner.currentScreen=MB.runner.currentMenu=null
var h=[o].concat((0,g.default)(p.filter(function(e){return e!==o}))),m=f[o],v=m&&!u?m:C(o)
u&&MB.runner.runnerUtil.resetScreenScrollState(o),r({type:"runner:update:state",payload:{transition:i,screenInfoMap:(0,y.default)({},f,(0,b.default)({},o,v)),activeCid:o,history:h}})},"entry:runner:activate:screen-state":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.screenCid,i=a.stateCid,l=a.transition,u=n(),c=(0,S.getRunnerState)(u),s=c.activeCid,d=c.screenInfoMap
if(s===o&&d[s].stateCid!==i){var f=Screen.find(s),p=f.height-(f.headerHeight()+f.footerHeight())
f.setState(i,!0)
var h=f.height-(f.headerHeight()+f.footerHeight()),m=(0,y.default)({},l,{callback:function(){console.log("状态切换完成"),p!==h&&MB.runner.runnerUtil.renderScrollbar(s),MB.runner.timerHandler.setupPageTimers(f,i)}}),v={},g={}
f.cpanels().forEach(function(e){var t=Panelstate.find(i+e.cid)||e
t.cid=e.cid,t.screen_cid=f.cid,t.multi_states=e.multi_states,t.template_cid=e.template_cid,t.multi_states?g[e.cid]=k(t,l):v[e.cid]=E(t)}),r({type:"entry:runner:update:screen",payload:{screenCid:o,stateCid:i,panelInfoMap:v,chameleonInfoMap:g,transition:m}})}},"entry:runner:back-to-prev-page":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=void 0===a?{}:a,i=n(),l=(0,S.getRunnerState)(i),u=l.history,c=l.transition,s=c.name,d=c.duration,f=c.offset
if(1!==u.length){var p,h=Screen.find(u[0]),m=Screen.find(u[1])
p=h.orient()!==m.orient()?{name:"none",delay:0,duration:0,offset:100}:o.transition?o.transition:{name:(0,w.getReverseTransitionName)(s),delay:0,duration:d,offset:f,callback:o.callback}
var v=u.slice(1)
r({type:"runner:update:state",payload:{activeCid:v[0],transition:p,history:v}})}},"entry:runner:update:screen":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.screenCid,i=(0,d.default)(a,["screenCid"])
console.log("entry:runner:update:screen",o,i)
var l=n(),u=(0,S.getRunnerState)(l).screenInfoMap,c=u[o]
if(!c)throw new Error("更新了尚未加载的页面!!")
var s=(0,y.default)({},c,i)
r({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},u,(0,b.default)({},o,s))}})},"entry:runner:activate:panel-screen":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.panelCid,i=a.panelScreenCid,l=a.transition,u=n(),c=(0,S.getRunnerState)(u).screenInfoMap,s=Panel.find(o).screen_cid,d=c[s],f=d.panelInfoMap[o],p=new Set(f.panelScreens)
p.add(i)
var h=(0,y.default)({},f,{transition:l,activeScreenCid:i,panelScreens:Array.from(p)}),m=(0,y.default)({},d,{panelInfoMap:(0,y.default)({},d.panelInfoMap,(0,b.default)({},o,h))})
r({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},c,(0,b.default)({},s,m))}})},"entry:runner:preload:screens":function(e){var t=e.getState,n=e.dispatch,r=t(),a=(0,S.getCurrentProject)(r),o=(0,S.getRunnerState)(r),i=o.activeCid,l=o.screenInfoMap,u=o.history.slice(0,2)
Link.all().forEach(function(e){if(e.target_cid&&e.screen_cid===i&&"none"!==e.transition&&"prev"!==e.target_cid){var t=Screen.find(e.target_cid)
t&&t.project_cid===a.cid&&u.push(e.target_cid)}})
var c={}
u.forEach(function(e){c[e]=l[e]||C(e)}),n({type:"runner:update:state",payload:{screenInfoMap:c}})},"entry:runner:update:chameleon":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.chameleonCid,i=a.stateCid,l=a.transition,u=n(),c=(0,S.getRunnerState)(u).screenInfoMap,s=Panel.find(o),d=s.screen_cid,f=c[d],p=f.chameleonInfoMap[o],h=(0,y.default)({},p,{stateCid:i,transition:(0,y.default)({},l,{callback:function(){MB.runner.timerHandler.setupPanelTimers(s,i)}})}),m=(0,y.default)({},f,{
chameleonInfoMap:(0,y.default)({},f.chameleonInfoMap,(0,b.default)({},o,h))})
r({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},c,(0,b.default)({},d,m))}})}}
t.runnerEntry=a},Clcl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NUKE=t.REPORT_ERROR=t.SETUP_REPORT_INTERVAL=t.POST_REPORT=void 0
var a=r(n("MVZn")),o=n("os03"),i=function(){if(MB.user&&MB.user.id){var e=MB.user
return{id:e.id,name:e.name,email:e.email,current_plan:e.current_plan,paid:e.paid,next_billing_on:e.next_billing_on,login_times:e.login_times}}},u=function(e){return(0,o.fetchLikeRequest)("/api/v2/reports",{timeout:1e4,method:"POST",body:JSON.stringify((0,a.default)({href:window.parent.location.href,userAgent:navigator.userAgent,user:i(),currentProjectCid:MB.currentProject&&MB.currentProject.cid||"",currentScreenCid:MB.currentScreen&&MB.currentScreen.cid||""},e))})}
t.POST_REPORT=u
t.SETUP_REPORT_INTERVAL=function(e){var t=e.timeInterval,n=void 0===t?6e5:t,r=e.type,a=void 0===r?"DEFAULT":r,o=e.getReportObject
if(n&&o){var i=(new Date).toISOString(),l=Date.now()
return setInterval(function(){return u({timeInit:i,timeDelta:Date.now()-l,type:a,state:o()}).then(function(){l=Date.now()},function(e){return console.warn("[Error] report ".concat(a," failed:"),e)})},n)}}
var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t[0]instanceof Error&&t.shift()||new Error("DEFAULT_ERROR"),a=t.map(function(t){try{return JSON.stringify(t)}catch(e){return t.toString()}}).join("\n")
console.warn("[REPORT_ERROR]",a,r)
var o=i()
return window.Raven&&window.Raven.isSetup()&&(window.Raven.setUserContext(o),window.Raven.captureException(r,{extra:{message:a},tags:{report_version:"v1",origin:location.origin,user_current_plan:o&&o.current_plan}})),MB.event&&MB.event("ga-0","send","event","report-error",a,r.stack||r.toString()),{error:r,message:a}}
t.REPORT_ERROR=l
var c=function(){var e=l.apply(void 0,arguments),t=e.error,n=e.message
console.warn("[NUKE]",n,t),setInterval(function(){window.alert([window.I18N&&I18N.error_happened,n,t].join("\n")),location.reload()},5e3)}
t.NUKE=c},CpT9:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfScreenHasGestureConflictWithAlert=t.createNewScreen=t.getScreenFileName=t.getScreenClassName=void 0
var i=n("2EV6")
t.getScreenClassName=function(e,t){var n,r,a=(0,i.getProjectPlatformByDevice)(t.device),o=(n=e,"customize"===(r=t).model?n.width!=r.width?"landscape":"portrait":n.orientation.toLowerCase())
return"mb-screen ".concat(a," ").concat(t.device," ").concat(t.model," ").concat(o)}
t.getScreenFileName=function(e){for(var t="".concat(e.position,"_").concat(e.name);e=e.parent();)t="".concat(e.position,"_").concat(t)
return t}
t.createNewScreen=function(e,t){return new Screen({cid:"s"+Math.uuid(10,16)+(new Date).valueOf(),project_cid:e,name:"".concat(I18N.state," ").concat(t),position:t,bgcolor:"transparent",orientation:"portrait"})}
t.checkIfScreenHasGestureConflictWithAlert=function(e,t){var n=function(e){for(var t=e.clinks(),n=0,r=0;r<t.length;r++){var a=t[r]
if(["up","down"].includes(a.gesture)){if(e.height>e.dH()){n=1
break}}else if(["left","right"].includes(a.gesture)&&e.cpanels().some(function(e){return e.width<e.ct().width})){n=2
break}}return n}(e)
1===n?t({title:I18N.gesture_conflict,desc:I18N.vertical_conflict}):2===n&&t({title:I18N.gesture_conflict,desc:I18N.horizontal_conflict})}},DJvY:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("4WDG")),c=n("upRB"),i=(0,a.connect)(function(e){var t=e.container,n=t.common,r=n.offset,a=n.keyFlags.isSpaceDown,o=t.previewSetting,i=o.toolbarActiveItem,l=o.isShowColorPicker,u=o.isFullScreenMode
return{scale:(0,c.getCurrentScale)(e),canvasOffset:r,screen:(0,c.getCurrentScreen)(e),project:(0,c.getCurrentProject)(e),shellType:(0,c.getShellType)(e),isSpaceDown:a,isStickyShow:(0,c.getIsStickyShow)(e),isScrollable:(0,c.getIsScrollable)(e),isLayerActive:"inspect"==i,isCommentActive:"comment"==i,isFullScreenMode:u,isColorPickerActive:l}})(o.default)
t.default=i},DdHt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.itemsGetGids=function(e){var t=[]
return e.forEach(function(e){return e.gid&&!t.includes(e.gid)&&t.push(e.gid)}),t},t.itmesGetLinkCids=function(e){var t=new Set
return e.forEach(function(e){return e.link_cids&&t.add(e.link_cids)}),Array.from(t)},t.itemsGetIds=i,t.itemsGetNames=function(e){return e.map(function(e){return"panel"===e.name?e.display_name||Template.find(e.template_cid).name:e.display_name})},t.itemsGetRect=f,t.itemsCanGroup=function(e){return!e.some(function(e){return"sticky"===e.name||"pg"===e.name})&&1<i(e).length},t.itemsCanUngroup=function(e){return e.some(function(e){return"group"===e.name})},t.itemsCanDistribute=function(e){var n=[]
return e.forEach(function(e){var t=e.cid
n.includes(t)||n.push(t)}),2<n.length},t.itemsCanSetWidth=function(e){return 0!==e.length&&(1!==e.length||!e[0].locked&&/w|e/.test(e[0].zoomable))},t.itemsGroupByGid=function(e){var n={}
return e.forEach(function(e){var t=e.gid||e.cid
n[t]||(n[t]=[]),n[t].push(e)}),n},t.itemsCanCreateCombo=function(e){return 1===e.length&&"panel"===e[0].name&&e[0].multi_states||e.every(function(e){return"panel"!==e.name})},t.itemsCanCreateTemplate=function(e){return 1===e.length&&"panel"===e[0].name&&!0===e[0].ct().break_away||e.every(function(e){return"panel"!==e.name})},t.itemsGetAttr=function e(t,n){if(0===t.length)return""
var r=n.split(":"),a=(0,s.default)(r),o=a[0],i=a.slice(1)
if(d.includes(o)&&1<t.length)return f(t)[o]
var l=t.find(function(e){return e.inspectables().includes(o)})
if(!l)return
var u
if(0<i.length){var c=JSON.parse(e([l],o))
u=i.reduce(function(e,t){return e[t]},c)}else u=l[o]
return u||0===u?u:p(l,o)},t.getDefaultAttrValueForWidget=void 0
var s=r(n("SA+Z")),o=r(n("cl8F")),a=n("ZXhj"),d=["top","left","width","height"]
function i(e){var n=[]
return e.forEach(function(e){var t=e.gid||e.cid
n.includes(t)||n.push(t)}),n}function f(e){var t=e.map(function(e){return e.rect()})
return(0,a.getTotalRect)(t)}var p=function(e,t){var n=e.name,r="".concat(n,"_").concat(MB.currentProject.device),a=o.default[r]||o.default[n]
return a&&a[t]?a[t]:o.default[t]||""}
t.getDefaultAttrValueForWidget=p},DdUa:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=r(n("J4zp")),a=n("/MKj"),p=n("upRB"),o=r(n("m/Xg")),i=(0,a.connect)(function(e){var t=(0,p.getCurrentScreen)(e),n=(0,p.getCurrentProject)(e),r=(0,p.getIsImmersive)(e),a=(0,p.getIsScrollable)(e),o=r||!a,i=MB.isMobile(),l=MB.isEmbedded(),u=i||l,c=l&&"landscape"===Project.find(n.cid).homeScreen().orientation?[n.height,n.width]:[n.width,n.height],s=l?c:[window.innerWidth,window.innerHeight],d=(0,f.default)(s,2)
return{screen:t,project:n,isLite:u,isImmersive:r,isScreenExpanded:o,viewportWidth:d[0],viewportHeight:d[1]}})(o.default)
t.default=i},DqDi:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationBar=t.NavItem=t.default=void 0
var i=a(n("PJYZ")),l=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("i6OX")),m=a(n("UbMB")),v=a(n("G916")),g=m.default.bind(v.default)
var y=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e,t,n,r,a,o=this.props,i=o.activeIndex,l=o.hideBorder,u=o.className,c=o.children,s=o.onTabChange,d=(e=i,t=p.Children.count(c),n=l,r=0===e,a=e===t-1,{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:n&&r?"transparent":"",borderRightColor:n&&a?"transparent":""})
return p.default.createElement("ol",{type:"slide-nav",className:g("nav",u)},p.Children.map(c,function(e,t){var n={index:t,active:t===i,BgStyle:0===t?d:null,onClick:s}
return p.default.cloneElement(e,n)}))}}]),t}(p.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{className:o.default.string,activeIndex:o.default.number,hideBorder:o.default.bool,children:o.default.array,onTabChange:o.default.func}),(0,f.default)(y,"defaultProps",{hideBorder:!1,activeIndex:0})
var b=function(e){function o(){var e,r;(0,l.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,i.default)((0,i.default)(r)),"handleClick",function(e){var t=r.props,n=t.index;(0,t.onClick)(n)}),r}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.active,r=e.icon,a=e.label,o=e.title,i=e.BgStyle
return p.default.createElement("li",{className:g("nav-item",{active:n}),title:o,onClick:this.handleClick},0===t&&p.default.createElement("div",{className:"background-cube",style:i}),r&&p.default.createElement("div",{className:"nav-icon"},"string"==typeof r?p.default.createElement(h.default,{type:"dora",name:r}):r),a&&p.default.createElement("span",{className:"nav-label"},a))}}]),o}(p.PureComponent)
t.NavItem=b,(0,f.default)(b,"propTypes",{index:o.default.number,icon:o.default.oneOfType([o.default.string,o.default.object]),title:o.default.string,label:o.default.string,active:o.default.bool,BgStyle:o.default.object,onClick:o.default.func})
var S=function(e){var t=e.tabs,n=e.activeIndex,r=e.onChange,a=e.className,o=e.hideBorder,i=e.BgStyle
return p.default.createElement(y,{activeIndex:n,hideBorder:o,onTabChange:r,className:a},t.map(function(e){var t=e.label,n=e.icon
return p.default.createElement(b,{key:t,icon:n,label:t,BgStyle:i})}))};(t.NavigationBar=S).propTypes={tabs:o.default.array,activeIndex:o.default.number,onChange:o.default.func,className:o.default.string,hideBorder:o.default.bool,BgStyle:o.default.object}},EDI8:function(e,t,n){e.exports={"zoom-count":"_3bJjkHIbbJ3_hpAgUkjNFN"}},ER7e:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("6XO9")
n("peLG")
var h=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"top-right-action"},f.default.createElement("div",{className:"mode"},f.default.createElement(p.SVG,{name:"preview/daynight"}),f.default.createElement("span",{className:"light","data-mode":"light",onClick:this.props.onClickMode}),f.default.createElement("span",{
className:"dark","data-mode":"dark",onClick:this.props.onClickMode})),f.default.createElement("div",{className:"exit-full-screen",onClick:this.props.onClickExit},f.default.createElement(p.SVG,{name:"preview/exit"})))}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{onClickMode:d.default.func,onClickExit:d.default.func})},EWR0:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("NcbO")),m=a(n("GWLA")),v=a(n("YCqe")),g=a(n("UbMB")).default.bind(v.default),y=function(e){function t(){var n
return(0,o.default)(this,t),n=(0,l.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(n)),"handleTabClick",function(e){var t=Number(e.target.dataset.index)
n.setState({tabIndex:t})}),n.state={isShow:!1,tabIndex:1},MB.debugRunner=function(){return n.setState({isShow:!n.state.isShow})},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.runnerState,n=e.dispatch,r=this.state,a=r.isShow,o=r.tabIndex
return a?p.default.createElement("div",{className:g("debug-panel")},p.default.createElement("ul",{className:"tab"},p.default.createElement("li",{"data-index":"0",className:g({active:0===o}),onClick:this.handleTabClick},"状态"),p.default.createElement("li",{"data-index":"1",className:g({active:1===o}),onClick:this.handleTabClick},"控制")),p.default.createElement("div",{className:"content"},0===o&&p.default.createElement(h.default,{runnerState:t,dispatch:n}),1===o&&p.default.createElement(m.default,{dispatch:n}))
):null}}]),t}(p.PureComponent)
t.default=y,(0,d.default)(y,"propTypes",{runnerState:f.default.object,dispatch:f.default.func})},Ehhz:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_OPERATION_MAP=void 0
var s=r(n("MVZn")),a=r(n("RIqP")),d=n("IT1M"),f=r(n("zkrS")),i=f.default.SpineModel,o={Team:"t",Project:"p",Combo:"c",Template:"t",UserTemplate:"ut",Screen:"s",Collaborator:"co",Comment:"cm",CommentThread:"cmth",Widget:"w"},l=Object.keys(o),p=l.reduce(function(e,t){return e[t]=i[t].attributes,e},{})
p.Widget=(0,a.default)(p.Widget).concat(["id"])
var u=l.reduce(function(e,t){var u=i[t],r=p[t],c=o[t],l=function(e,t){return{dataState:e.find(function(e){return e.cid===t}),dataModel:u.findByAttribute("cid",t)}}
return e[t]={refreshStateList:function(e){return u.all().map(function(e){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
return r.forEach(function(e){return n[e]=t[e]}),n}(e,{})})},saveState:function(e,t,n){var r=t.cid,a=l(e,r),o=a.dataState,i=a.dataModel
return o&&i&&(i.lsave(!n),!n&&f.default.SpineModel.queueSave()),e},addState:function(e,t,n){var r,a,o,i=t.cid||f.default.SpineModel.requestCid(c)
r=i,a=e.find(function(e){return e.cid===r}),o=u.findByAttribute("cid",r),Boolean(a||o)&&(i=f.default.SpineModel.requestCid(c))
var l=(0,s.default)({},t,{cid:i})
return new u(l).lsave(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayPush(e,l)},updateState:function(e,t,n){var r=t.cid,a=l(e,r),o=a.dataState,i=a.dataModel
return o&&i?(o=(0,s.default)({},o,t),Object.assign(i,o),i.lsave(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayFindSet(e,function(e){return e.cid===r},o)):e},deleteState:function(e,t,n){var r=t.cid,a=l(e,r),o=a.dataState,i=a.dataModel
return o&&i?(i.ldestroy(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayFindDelete(e,function(e){return e.cid===r})):e}},e},{}),c=function(o){return function(e,t,n){var r=t.cid,a=i.Project.findByAttribute("cid",r)?"Project":i.Template.findByAttribute("cid",r)?"Template":i.Combo.findByAttribute("cid",r)?"Combo":null
return u[a][o](e,t,n)}};(t.MODEL_OPERATION_MAP=u).ProjectAlike={refreshStateList:function(e){return(0,a.default)(u.Combo.refreshStateList()).concat((0,a.default)(u.Project.refreshStateList()),(0,a.default)(u.Template.refreshStateList()),(0,a.default)(u.UserTemplate.refreshStateList()))},saveState:c("saveState"),addState:c("addState"),updateState:c("updateState"),deleteState:c("deleteState")}},Em2t:function(e,t,n){var r=n("bahg"),a=n("quyA"),o=n("0JQy")
e.exports=function(e){return a(e)?o(e):r(e)}},Emwt:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Screen,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:screens:update",payload:o(e,a,i)})})},s={entryMap:{"screens:refresh":c(a.refreshStateList,!1),"screens:add":c(a.addState,!1),"screens:add-local":c(a.addState,!0),"screens:update":c(a.updateState,!1),"screens:update-local":c(a.updateState,!0),"screens:delete":c(a.deleteState,!1),"screens:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},Ev6p:function(e,t,n){"use strict"
n.d(t,"x",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"r",function(){return p}),n.d(t,"u",function(){return h}),n.d(t,"o",function(){return m}),n.d(t,"h",function(){return v}),n.d(t,"q",function(){return b}),n.d(t,"v",function(){return S}),n.d(t,"w",function(){return w}),n.d(t,"f",function(){return C}),n.d(t,"l",function(){return E}),n.d(t,"g",function(){return k}),
n.d(t,"m",function(){return _}),n.d(t,"j",function(){return x}),n.d(t,"y",function(){return M}),n.d(t,"t",function(){return O}),n.d(t,"s",function(){return R}),n.d(t,"n",function(){return P}),n.d(t,"z",function(){return A}),n.d(t,"p",function(){return j}),n.d(t,"k",function(){return L}),n.d(t,"A",function(){return D}),n.d(t,"i",function(){return B})
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return"@@redux-saga/"+e},i=o("TASK"),l=o("HELPER"),u=o("MATCH"),c=o("CANCEL_PROMISE"),s=o("SAGA_ACTION"),d=o("SELF_CANCELLATION"),f=function(e){return function(){return e}},p=f(!0),h=function(){},m=function(e){
return e}
function v(e,t,n){if(!t(e))throw R("error","uncaught at check",n),new Error(n)}var g=Object.prototype.hasOwnProperty
function y(e,t){return b.notUndef(e)&&g.call(e,t)}var b={undef:function(e){return null==e},notUndef:function(e){return null!=e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},string:function(e){return"string"==typeof e},array:Array.isArray,object:function(e){return e&&!b.array(e)&&"object"===(void 0===e?"undefined":a(e))},promise:function(e){return e&&b.func(e.then)},iterator:function(e){return e&&b.func(e.next)&&b.func(e.throw)},iterable:function(e){
return e&&b.func(Symbol)?b.func(e[Symbol.iterator]):b.array(e)},task:function(e){return e&&e[i]},observable:function(e){return e&&b.func(e.subscribe)},buffer:function(e){return e&&b.func(e.isEmpty)&&b.func(e.take)&&b.func(e.put)},pattern:function(e){return e&&(b.string(e)||"symbol"===(void 0===e?"undefined":a(e))||b.func(e)||b.array(e))},channel:function(e){return e&&b.func(e.take)&&b.func(e.close)},helper:function(e){return e&&e[l]},stringableFunc:function(e){return b.func(e)&&y(e,"toString")}},S={
assign:function(e,t){for(var n in t)y(t,n)&&(e[n]=t[n])}}
function w(e,t){var n=e.indexOf(t)
0<=n&&e.splice(n,1)}var C={from:function(e){var t=Array(e.length)
for(var n in e)y(e,n)&&(t[n]=e[n])
return t}}
function E(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=r({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t})
return n.promise=t,n}function k(e){for(var t=[],n=0;n<e;n++)t.push(E())
return t}function _(t){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r=void 0,e=new Promise(function(e){r=setTimeout(function(){return e(n)},t)})
return e[c]=function(){return clearTimeout(r)},e}function x(){var e,t=!0,n=void 0,r=void 0
return(e={})[i]=!0,e.isRunning=function(){return t},e.result=function(){return n},e.error=function(){return r},e.setRunning=function(e){return t=e},e.setResult=function(e){return n=e},e.setError=function(e){return r=e},e}function T(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0
return function(){return++e}}var M=T(),N=function(e){throw e},I=function(e){return{value:e,done:!0}}
function O(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:N,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],a={name:n,next:e,throw:t,return:I}
return r&&(a[l]=!0),"undefined"!=typeof Symbol&&(a[Symbol.iterator]=function(){return a}),a}function R(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:""
"undefined"==typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e](t,n)}function P(e,t){return function(){return e.apply(void 0,arguments)}}var A=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"},j=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")},L=function(e
,t){return(e?e+".":"")+"setContext(props): argument "+t+" is not a plain object"},D=function(t){return function(e){return t(Object.defineProperty(e,s,{value:!0}))}},B=function o(i){return function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]
var r=[],a=i.apply(void 0,n)
return{next:function(e){return r.push(e),a.next(e)},clone:function(){var t=o(i).apply(void 0,n)
return r.forEach(function(e){return t.next(e)}),t},return:function(e){return a.return(e)},throw:function(e){return a.throw(e)}}}}},FAev:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("hkUU")),l=function(){function e(){(0,a.default)(this,e),this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket=new i.default}return(0,o.default)(e,[{key:"resetPageTimerFlag",value:function(){this.timerFired=!1}},{key:"getIsPageTimerFired",value:function(){return this.timerFired}},{key:"getIsPanelTimerFired",value:function(e){return this.panelTimerMap[e]}},{key:"resetPanelTimerFlag",value:function(e){this.panelTimerMap[e]=!1}},{key:"clear",value:function(){
this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket.clear()}},{key:"setupPageTimers",value:function(e){var t=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default"
if(!MB.runner.runnerUtil.getIsImmersive()){this.timeoutBucket.clear()
var a=e.globalLinks(r)
e.citems().forEach(function(e){if("pg"!==e.name){var t="panel"===e.name?Panelstate.find(r+e.cid)||e:Widgetstate.find(r+e.cid)||e,n=Link.find(t.link_cids)
n&&a.push(n)}}),a.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===r)&&t.pageTimer(e)}),e.cpanels().forEach(function(e){t.setupPanelTimers(e,e.mainState().cid)})}}},{key:"setupPanelTimers",value:function(t,r){var n=this
if(this.timeoutBucket.clearTimeoutByKey(t.cid),this.panelTimerMap[t.cid]=!1,t.multi_states){var e=t.ct().homeScreen(),a=e.globalLinks(r)
e.cwidgets().forEach(function(e){if("pg"!==e.name){var t=Widgetstate.find(r+e.cid)||e,n=Link.find(t.link_cids)
n&&a.push(n)}}),a.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===r)&&(e.state_cid?n.pageTimer(e):n.panelTimer(e,t))})}else{var o=Screen.find(r)
o.clinks().forEach(function(e){0<parseFloat(e.timer)&&n.panelTimer(e,t)}),Link.findAllByAttribute("state_cid",o.cid).forEach(function(e){0<parseFloat(e.timer)&&n.pageTimer(e)})}}},{key:"pageTimer",value:function(e){var t=this
this.timeoutBucket.setTimeout(e.cid,function(){t.timerFired||(t.timerFired=!0,MB.runner.runnerUtil.getIsImmersive()||MB.runner.j(e))},1e3*parseFloat(e.timer))}},{key:"panelTimer",value:function(e,t){var n=this
this.timeoutBucket.setTimeout(t.cid,function(){n.timerFired||n.panelTimerMap[t.cid]||(n.panelTimerMap[t.cid]=!0,MB.runner.runnerUtil.getIsImmersive()||(e.targetstate_cid?MB.runner.chameleonTransition(t.cid,e):MB.runner.panelScreenTransition(t.cid,e)))},1e3*parseFloat(e.timer))}}]),e}()
t.default=l},"FC/4":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextEditComponent=t.createTextEditStore=t.INITIAL_STATE=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("MVZn")),f=r(n("q1tI")),p=a(n("17x9")),h=a(n("vOnD")),m=n("6XO9"),v=n("LPEl"),g={value:"",startValue:"",isEditing:!1}
t.INITIAL_STATE=g
t.createTextEditStore=function(e,t){var n=t.onStart,r=t.onChange,a=t.onEnd;(e=(0,d.default)({},g,e)).startValue=e.value
var o=(0,v.createStateStore)(e),i=o.subscribe,l=o.unsubscribe,u=o.getState,c=o.setState
return{subscribe:i,unsubscribe:l,getState:u,startEdit:function(){c({isEditing:!0}),n&&n(u()),c({startValue:u().value})},endEdit:function(){c({isEditing:!1}),a&&a(u())},setValue:function(e){u().isEditing&&(c({value:e}),r&&r(u()))}}}
var y=function(e){function a(e){var n;(0,o.default)(this,a),n=(0,l.default)(this,(0,u.default)(a).call(this,e))
var t=function(e,t){n.setState(e),!t.isEditing&&e.isEditing&&setTimeout(n.focusTextarea,0)}
n.bindEditStore=function(e){n.setState(e.getState()),e.subscribe(t)},n.unbindEditStore=function(e){e.unsubscribe(t)},n.onChange=function(e){return n.props.textEditStore.setValue(e)},n.onKeyDown=function(e){("Enter"===e.key||13===e.which)&&(!n.props.multiline||!e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),n.props.textEditStore.endEdit())}
var r=null
return n.setRef=function(e){r=e&&e.querySelector("textarea")},n.focusTextarea=function(){if(r){r.focus&&r.focus()
var e=r.value.length
r.setSelectionRange(e,e)}},n.autoHeightTextarea=function(){n.props.autoHeight&&r&&(r.style.height="auto",r.style.height="".concat(Math.max(r.scrollHeight+2,r.offsetHeight,n.props.minHeight),"px"))},n}return(0,c.default)(a,e),(0,i.default)(a,[{key:"componentDidMount",value:function(){this.bindEditStore(this.props.textEditStore),this.focusTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.textEditStore!==e.textEditStore&&(this.unbindEditStore(e.textEditStore),this.bindEditStore(
this.props.textEditStore)),this.autoHeightTextarea()}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=void 0===t?"":t,r=e.textEditStore.getState().value
return f.default.createElement(b,{ref:this.setRef},f.default.createElement(m.Textarea,{value:r,placeholder:n,rows:1,onChange:this.onChange,onKeyDown:this.onKeyDown}))}}]),a}(f.PureComponent)
t.TextEditComponent=y,(0,s.default)(y,"propTypes",{textEditStore:p.default.object.isRequired,placeholder:p.default.string,multiline:p.default.bool,autoHeight:p.default.bool,minHeight:p.default.number})
var b=h.default.div.withConfig({displayName:"TextEditComponent__HackStyleDiv",componentId:"sc-1wltfay-0"})(["&&& label{width:100%;}&&& textarea{font-size:12px;resize:none;}"])},FJlG:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:preview-toolbar:update":return(0,a.default)({},e,r)
case"reducer:preview-toolbar:active-item:init":return(0,a.default)({},e,{toolbarActiveItem:o.PREVIEW})
case"reducer:preview-toolbar:fullscreen":return(0,a.default)({},e,{isFullScreenMode:r.isFullScreenMode})
case"reducer:preview-toolbar:update:highlight":return(0,a.default)({},e,{isHighlight:r.isHighlight})
default:return e}}
var a=r(n("MVZn")),o=n("1iCU"),i=n("/5+U"),l={ratio:1,emPixel:16,unit:"px",colorUnit:"hex",language:"css",toolbarActiveItem:o.PREVIEW,isShowColorPicker:!1,isSelectLayer:!1,userPickColor:(0,i.getHistoryColor)(),focusColor:null,loadSliceUrl:"",isFullScreenMode:!1,isScrollable:!0,isStickyShow:!0,isHighlight:!0,shellType:"device"}},FYsW:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"runner:generate:widgets-query-map":return(0,a.default)({},e,{widgetQueryMap:(0,o.getScreenWidgetsMap)(Widget.irecords)})
case"runner:update:state":return(0,a.default)({},e,r)
case"runner:reset:state":return i
default:return e}}
var a=r(n("MVZn")),o=n("IB8Z"),i={widgetQueryMap:{},activeCid:"",transition:{name:"slideleft",delay:0,duration:2e3,offset:100,callback:function(){}},history:[],screenInfoMap:{}}},FkXu:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontWeightStrDepandOnBoldType=t.getFontWeightNumDepandOnBoldType=t.getFontWeightStr=t.getFontFamilyAndWeightText=t.getTypeWeightList=t.WESTERN_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=void 0
var a=r(n("RIqP")),o=r(n("yl0K")),i=o.default.HOSTED_COMMERCIAL_FANGZHENG_LIST,l=o.default.HOSTED_COMMON_LIST,u=o.default.WESTERN_COMMON_LIST,c=(0,a.default)(i).concat((0,a.default)(l),(0,a.default)(u)),s=function(e){return{label:e.label,value:e.family,limitedDevices:e.limitedDevices}},d=i.map(s)
t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=d
var f=l.map(s)
t.HOSTED_COMMON_FONT_FAMILY_LIST=f
var p=u.map(s)
t.WESTERN_COMMON_FONT_FAMILY_LIST=p
var h={regular:400,light:300,bold:700},m={regular:I18N.rich_text_settings.weight.regular,light:I18N.rich_text_settings.weight.light,bold:I18N.rich_text_settings.weight.bold}
t.getTypeWeightList=function(t){var e=c.find(function(e){return e.family===t})
return e?e.typeList.map(function(e){return{label:m[e],value:e}}):[]}
t.getFontFamilyAndWeightText=function(t,e){var n=i.find(function(e){return e.family===t})
return n?"".concat(n.label,"-").concat(m[e]):"".concat(t,"-").concat(e)}
var v=function(t){return h[t]?t:Object.keys(h).find(function(e){return String(h[e])===String(t)})||"regular"}
t.getFontWeightStr=v
t.getFontWeightNumDepandOnBoldType=function(e,t){var n=h[e]
return Number(t)?700:n}
t.getFontWeightStrDepandOnBoldType=function(e,t,n){var r=v(e)
return Number(n)?t:r}},G3NE:function(e,t,n){"use strict"
n.r(t),n.d(t,"getRichTextAttr",function(){return b}),n.d(t,"getHTML",function(){return L}),n.d(t,"setAttrForParas",function(){return Se}),n.d(t,"checkIsAttrManagedInsideEditor",function(){return ke}),n.d(t,"configureEditor",function(){return h}),n.d(t,"editorBridge",function(){return xe})
var r=n("q1tI"),a=n.n(r),o=n("17x9"),i=n.n(o),c="--mb--rich-text-editor",T="--mb--rich-text",l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t},M=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},E=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)},p={defaultStyle:{fontFamily:"Arial",fontSize:16,fontWeight:"regular",color:"#101010",letterSpacing:0,fontStyle:"normal",textDecoration:"none"},getStyleStr:{},clipboard:{stripOutsidePastedStyle:!0}},h=function(e){Object.entries(e).forEach(function(e){var t=M(e,2),n=t[0],r=t[1]
p[n]=C({},p[n],r)})}
function m(e,t){var n="NORMAL_LINE_HEIGHT_MEASURE_NODE",r=document.getElementById(n)
return r||((r=document.createElement("div")).id=n,document.body.appendChild(r)),r.style.whiteSpace="pre",r.style.lineHeight="normal",e&&(r.style.fontFamily=e),t&&(r.style.fontSize=t+"px"),r.innerHTML=" ",r.getBoundingClientRect().height}var v=p.defaultStyle,g=["fontFamily","fontWeight","fontSize","color","fontStyle","textDecoration","letterSpacing","lineHeight"],N=function e(t,n){if("fontFamily"===n)return t.fontFamily||v.fontFamily
if("fontWeight"===n)return t.fontWeight||v.fontWeight
if("boldType"===n)return Number(t.boldType)?1:0
if("fontSize"===n)return t.fontSize||v.fontSize
if("color"===n)return t.color||v.color
if("fontStyle"===n)return t.fontStyle||v.fontStyle
if("textDecoration"===n)return t.textDecoration||v.textDecoration
if("letterSpacing"===n)return t.letterSpacing||v.letterSpacing
if("lineHeight"===n){var r=t.lineHeight
return r&&"normal"!==r?r:Math.ceil(m(e(t,"fontFamily"),e(t,"fontSize")))}},y=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments[2],r=t[0],a=t[1],o=e[r].children[a]
return N(o,n)},b=function(e,t,n){if(!e)return null
var r={fontFamily:y(e,t,"fontFamily"),fontWeight:y(e,t,"fontWeight"),boldType:y(e,t,"boldType"),fontSize:y(e,t,"fontSize"),color:y(e,t,"color"),fontStyle:y(e,t,"fontStyle"),textDecoration:y(e,t,"textDecoration"),letterSpacing:y(e,t,"letterSpacing"),lineHeight:y(e,t,"lineHeight"),paraSpacing:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[0]
if("paraSpacing"===arguments[2])return e[t[0]].paraSpacing}(e,t,"paraSpacing")}
return n?r[n]:r},S={regular:400,light:300,bold:700},w=function(t){return S[t]?t:Object.keys(S).find(function(e){return String(S[e])===String(t)})||"regular"},k=function(e){return"marginTop"===e?"paraSpacing":e},_=function(i,l,e){var t,n,r,a,u={}
return g.forEach(function(e){var t,n,r,a,o=(n=i[t=e],r=k(t),a=n.replace(/'|"/g,""),["fontSize","lineHeight","letterSpacing","paraSpacing"].includes(r)&&"px"===a.slice(-2)&&(a=Number(a.slice(0,-2))),a||l[e])
u[e]=o}),u.fontFamily=(u.fontFamily||"").split(",")[0].trim(),u.fontWeight=(t=u.fontWeight,n=l.fontWeight,r=e,a=w(t),Number(r)?n:a),u},x=function(e,u){var t=Array.from(e.getElementsByTagName("p"))
return 0===t.length?[{paraSpacing:u.paraSpacing,children:[C({},u.child,{text:""})]}]:t.map(function(e,t,n){var r,a,o,i=void 0,l=Array.from(e.getElementsByTagName("span"))
return i=0===l.length?[C({},u.child,{text:""})]:l.map(function(e){return C({text:e.innerText.replace(/(\r\n|\n|\r)/gm,""),boldType:Number(e.dataset.boldtype)?1:0},_(e.style,u.child,Number(e.dataset.boldtype)))}),{paraSpacing:(r=t,a=n,o=r===a.length-1&&1<a.length?r-1:r,Number(a[o].style.marginBottom.replace("px",""))),children:i}})},I=[["&","&amp;"],["<","&lt;"],[">","&gt;"]],O=[].concat(I).reverse(),R=function(e){var a=e
return I.forEach(function(e){var t=M(e,2),n=t[0],r=t[1]
return a=a.replace(new RegExp(n,"g"),r)}),a},P=p.getStyleStr,A=function(e){return Object.entries(e).map(function(e){var t=M(e,2),n=t[0],r=t[1]
return n.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})+":"+r+";"}).join(" ")},j=function(e){var t,n,r,a,o=N(e,"fontFamily"),i=N(e,"fontWeight"),l=N(e,"boldType")
return{fontFamily:(a=o,P.fontFamily?P.fontFamily(a):a),fontWeight:(t=i,n=l,r=S[t],Number(n)?700:r),fontSize:N(e,"fontSize")+"px",color:N(e,"color"),fontStyle:N(e,"fontStyle"),letterSpacing:N(e,"letterSpacing")+"px",lineHeight:N(e,"lineHeight")+"px",textDecoration:N(e,"textDecoration")}},L=function(e,t,n){for(var r="",a=t||{start:[0,0,0],end:[]},o=M(a.start,3),i=o[0],l=o[1],u=o[2],c=M(a.end,3),s=c[0],d=c[1],f=c[2],p=[],h=i;;h++){for(var m=e[h],v=[],g=h===i,y=h===s,b=h===i?l:0;;b++){var S=g&&b===l,w=y&&b===d,
C=m.children[b],E=C.text.slice(S?u:0,w?f:C.text.length),k=R(E)
if(v.push('<span class="'+T+'" data-boldtype="'+N(C,"boldType")+'" style="'+A(j(C))+'">'+(""===C.text?"<br>":k)+"</span>"),n&&(r+=E),b===(w?d:m.children.length-1))break}var _=v.join("")
if(p.push('<p style="'+A({lineHeight:0,marginBottom:m.paraSpacing+"px"})+'">'+_+"</p>"),n&&h!==s&&(r+="\n"),h===(y?s:e.length-1))break}var x=p.join("")
return n?{text:r,HTML:x}:x},D=function(e){var t=e.parentNode
return Array.from(t.childNodes).indexOf(e)},B=function(e){var t=[],n=window.getSelection(),r=void 0,a=void 0
"focus"===e?(r=n.focusNode,a=n.focusOffset):"anchor"===e&&(r=n.anchorNode,a=n.anchorOffset)
var o="#text"===r.nodeName?r.parentNode:r,i=o.closest("."+c+" span"),l=o.closest("."+c+" p")
if(l){if(!i&&l)t=[D(l),0,a]
else if(i&&l){for(var u=o;"P"!==u.parentNode.nodeName;)u=u.parentNode
t=[D(l),D(u),a]}}else t=[0,0,a]
return t},F=function(e){var t=e.start,n=e.end
return t.every(function(e,t){return e===n[t]})},U=function(e){for(var t=e.start,n=e.end,r=0;r<t.length;r++){if(t[r]>n[r])return"backwards"
if(t[r]<n[r])return"forwards"}return"forwards"},W=function(e,t){var n=U(e),r="object"===(void 0===t?"undefined":l(t))?U(t):t
return r&&r!==n?{start:e.end,end:e.start}:C({},e)},q=function(e){return{start:[0,0,0],end:[e.length-1,e[e.length-1].children.length-1,e[e.length-1].children[e[e.length-1].children.length-1].text.length]}},z=function(e,t){var n=M(t,3),r=(n[0],n[1]),a=n[2],o=[],i=[]
return e.children.forEach(function(e,t){t<r&&o.push(C({},e)),r<t&&i.push(C({},e)),t===r&&0!==a&&o.push(C({},e,{text:e.text.slice(0,a)})),t===r&&a!==e.text.length&&i.push(C({},e,{text:e.text.slice(a)}))}),{before:o,after:i}},H=function(e,t,n){var d=n.start,f=n.end,p=t.replace(/[\r\n\t\v\f]+/g,"\n").split(/\n/),r=1===p.length&&""===p[0],a=M(d,2),h=a[0],o=a[1],i=M(f,2),m=i[0],l=i[1],v=[],g=[]
return e.forEach(function(u,e,c){if(e<h||m<e)v.push(C({},u))
else if(e===h)if(r){var t=z(c[h],d).before,n=z(c[m],f).after
v.push({paraSpacing:u.paraSpacing,children:t.length+n.length===0?[C({},c[m].children[l],{text:""})]:[].concat(E(t),E(n))}),g[0]=h,g[1]=t.length?t.length-1:0,g[2]=t.length?t[t.length-1].text.length:0}else{var s=c[h].children[o]
p.forEach(function(e,t){var n=C({},s,{text:e}),r={paraSpacing:u.paraSpacing,children:[]}
if(0===t){var a,o=z(c[h],d).before
if(0<o.length)o[o.length-1].text+=e,(a=r.children).push.apply(a,E(o))
else r.children.push(n)}if(0<t&&r.children.push(n),t===p.length-1){var i
g[0]=h+p.length-1,g[1]=r.children.length-1,g[2]=r.children[r.children.length-1].text.length
var l=z(c[m],f).after
0<l.length&&(i=r.children).push.apply(i,E(l))}v.push(r)})}}),{paras:v,selection:{start:g,end:g}}},Y=p.defaultStyle,V=function(e){for(var t,n,r=(t=e,(n=[]).push.apply(n,[function(e){return e.replace(/<!--.*?-->/g,"")},function(e){return/<body>([^]*?)<\/body>/.test(e)?e.match(/<body>([^]*?)<\/body>/)[1]:e},function(e){return e.trim()},function(e){return e.replace(/[\r\n\t\v\f]/g,pe)}]),n.reduce(function(e,t){return t(e)},t)),a=0,l=[],u=[],c=0;a!==r.length;){var o=G(r,a),i=M(o,5),s=i[1],d=i[2],f=i[3],p=i[4]
if(s){var h=J(s)
if(de.includes(h)){a+=s.length
continue}if(se.includes(h)&&!u[c]){var m=Z(s)
u[c]={paraSpacing:m,children:[]}}var v=K(s,l)
l.push(v)}if(d)!function(){var o=ce(l),i=d.split(pe)
i.forEach(function(e,t){var a,n=(a=e,O.forEach(function(e){var t=M(e,2),n=t[0],r=t[1]
return a=a.replace(new RegExp(r,"g"),n)}),a),r=C({text:n},o)
u[c]||(u[c]={paraSpacing:0,children:[]}),u[c].children.push(r),t<i.length-1&&(c+=1)})}()
else if(s&&J(s)===fe&&p){var g=ce(l),y=C({text:""},g)
u[c]||(u[c]={paraSpacing:0,children:[]}),u[c].children.push(y)}if(p){var b=J(f)
se.includes(b)?l.length=0:l.pop(),se.includes(b)&&u[c]&&u[c].children.length&&(c+=1)}if(!s&&f&&de.includes(J(f)))a+=f.length
else{var S=(s?s.length:0)+(d?d.length:0)+(p?f.length:0)
if(0===S){console.warn("RichTextEditor: manually break infinite loop while parsing pasted HTML")
break}a+=S}}return u[u.length-1]&&!u[u.length-1].children.length&&u.pop(),u},J=function(e){return e.match(/<\/??([^/]*?(?=\s|>))/)[1]},X=new RegExp(/(<(?!\/).*?>)?(.*?)(<(\/?).*?>)/),G=function(e,t){return e.slice(t).match(X)},Z=function(e){var t=J(e),n=e.match(new RegExp("margin"+Q.source))||e.match(new RegExp("margin-bottom"+Q.source))
if(n){var r=n[1].split(" "),a=r.length<3?0:2
return Number(r[a].replace(/px$/,""))}return!n&&/^h\d$/.test(t)?ue(t):0},K=function(e,t){var n=ne(e,t)
return{fontFamily:ee(e),fontWeight:te(e),fontSize:n,textDecoration:re(e),color:ae(e),lineHeight:oe(e,n),letterSpacing:ie(e)}},Q=/:\s?(.*?);/,$=/="(.*?)"/,ee=function(e){var t=J(e),n=void 0
return(n="font"===t?e.replace(/&quot;/g,"").match(new RegExp("family"+$.source)):e.replace(/&quot;/g,"").match(new RegExp("font-family"+Q.source)))||"pre"!==t?n?n[1].split(",")[0].trim():void 0:"Courier New"},te=function(e){var t=J(e)
if("b"===t||"strong"===t)return"bold"
var n=e.match(new RegExp("font-weight"+Q.source))
return n?w(n[1]):/^h\d$/.test(t)?"bold":void 0},ne=function(e,t){var n,r=0<t.length?t[t.length-1].fontSize:Y.fontSize,a=J(e),o=void 0
if(!(o="font"===a?e.match(new RegExp("size"+$.source)):e.match(new RegExp("font-size"+Q.source))))return/^h\d$/.test(a)?le(a):r
if(/px$/.test(o[1]))return parseInt(o[1].replace(/px$/,""))
if(isNaN(o[1])){if(/rem$/.test(o[1])){var i=Y.fontSize
return Math.round(i*o[1].replace(/rem$/,""))}return/em$/.test(o[1])?Math.round(r*o[1].replace(/em$/,"")):r}return 1==(n=o[1])?10:2==n?13:3==n?16:4==n?18:5==n?24:6==n?32:7==n?48:void 0},re=function(e){var t=J(e)
if("u"===t)return"underline"
if("s"===t)return"line-through"
var n=e.match(new RegExp("text-decoration"+Q.source))||e.match(new RegExp("text-decoration-line"+Q.source))
return n?/underline/.test(n[1])?"underline":/line-through/.test(n[1])?"line-through":"none":"none"},ae=function(e){var t=e.match(/((?!-).{1}|^)color:\s?(.*?);/)
return t?t[2]:void 0},oe=function(e,t){var n=e.match(new RegExp("line-height"+Q.source))
if(n){if(/px$/.test(n[1]))return Number(n[1].replace(/px$/,""))
if(!isNaN(n[1])){var r=t
return Math.round(r*n[1])}}},ie=function(e){var t=e.match(new RegExp("letter-spacing"+Q.source))
if(t)return/px$/.test(t[1])?Number(t[1].replace(/px$/,"")):"normal"===t[1]?0:void 0},le=function(e){var t=Y.fontSize
return"h1"===e?parseInt(2*t):"h2"===e?parseInt(1.5*t):"h3"===e?parseInt(1.17*t):"h4"===e?parseInt(1*t):"h5"===e?parseInt(.83*t):"h6"===e?parseInt(.67*t):void 0},ue=function(e){var t=Y.fontSize
return"h1"===e?parseInt(.67*t):"h2"===e?parseInt(.83*t):"h3"===e?parseInt(1*t):"h4"===e?parseInt(1.33*t):"h5"===e?parseInt(1.67*t):"h6"===e?parseInt(2.33*t):void 0},ce=function(e){return e.reduce(function(a,e){return Object.entries(e).forEach(function(e){var t=M(e,2),n=t[0],r=t[1]
void 0!==r&&(a[n]=r)}),a},{})},se=["div","ul","li","p","h1","h2","h3","h4","h5","h6","address","article","aside","blockquote","dd","dl","dt","table","tfoot","footer","header","hgroup","hr","main","nav","pre","section"],de=["img","input"],fe="br",pe="__MB__NL__2349639398"
var he=function(e,r,a){var t=e.children.reduce(function(e,t,n){return n!==r?e.push(C({},t)):e.push.apply(e,[C({},t,{text:t.text.slice(0,a)}),C({},t,{text:t.text.slice(a)})]),e},[])
return{paraSpacing:e.paraSpacing,children:t}},me=function(e,t){var n=M(e,3),r=n[0],a=n[1],o=n[2],i=t[r].children[a].text
return"<br>"!==i&&(0<o&&o<i.length)},ve=["fontFamily","fontSize"],ge=function(e){var t,n,r,a=e.span,o=e.attr,i=e.value,l=C({},a)
return ve.includes(o)&&(t=l.fontFamily,n=l.fontSize,r=l.lineHeight,Math.ceil(m(t,n))===r)?(l[o]=i,l.lineHeight=Math.ceil(m(l.fontFamily,l.fontSize))):l[o]=i,"fontFamily"==o&&(l.fontWeight="regular"),l},ye=function(e){var t=e.paras,p=e.boundary,h=e.attr,m=e.value,v=void 0,n=void 0
if(p){var r=function(e,t,n){var r=[].concat(E(n)),a=[].concat(E(e)),o=[].concat(E(t)),i=me(a,r)
if(i){var l=M(a,3),u=l[0],c=l[1],s=l[2],d=he(r[u],c,s)
r[u]=d,a=[u,c+1,0]}if(i&&(e[0]===t[0]&&(o[1]+=1),e[0]===t[0]&&e[1]===t[1]&&(o[2]-=e[2])),me(o,r)){var f=M(o,3),p=f[0],h=f[1],m=f[2],v=he(r[p],h,m)
r[p]=v}return{boundary:{start:a,end:o},paras:r}}(p.start,p.end,t)
v=r.boundary,n=r.paras}return{paras:(n||t).map(function(e,f){var t=e.children.map(function(e,t){return!p||(n=f,r=t,o=M((a=v).start,2),i=o[0],l=o[1],u=M(a.end,2),c=u[0],s=u[1],d=Math.max(r,l,s)+1,i*d+l<=n*d+r&&n*d+r<=c*d+s)?ge({span:e,attr:h,value:m}):C({},e)
var n,r,a,o,i,l,u,c,s,d})
return{paraSpacing:e.paraSpacing,children:t}}),boundary:v}},be=function(e,t){var n=M(t.start,1)[0],r=M(t.end,1)[0]
return n<=e&&e<=r},Se=function(e){var t,n,r,a,o,i,l,u,c,s,d,f=e.paras,p=e.boundary,h=e.attr,m=e.value,v=void 0,g=void 0
if(we.includes(h)){if(p&&(s=(c=p).start,d=c.end,s.every(function(e,t){return e===d[t]})))return
var y=ye({paras:f,boundary:p,attr:h,value:m})
v=y.paras,g=y.boundary}else h===Ce?(i=(o={paras:f,boundary:p,value:m}).paras,l=o.boundary,u=o.value,v=i.map(function(e,n){var t=e.children.map(function(e,t){return!l||be(n,l)?ge({span:e,attr:"lineHeight",value:u}):C({},e)})
return{paraSpacing:e.paraSpacing,children:t}})):h===Ee&&(n=(t={paras:f,boundary:p,value:m}).paras,r=t.boundary,a=t.value,v=n.map(function(e,t){return{paraSpacing:!r||be(t,r)?a:e.paraSpacing,children:e.children}}))
return{paras:v,boundary:g||p}},we=["fontFamily","fontWeight","boldType","fontSize","color","fontStyle","textDecoration","letterSpacing"],Ce="lineHeight",Ee="paraSpacing",ke=function(e){return["text"].concat(we,[Ce,Ee]).includes(e)}
!function(e,t){void 0===t&&(t={})
var n=t.insertAt
if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style")
a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".--mb--rich-text-editor {\n  outline: none;\n  border-color: transparent;\n  user-select: text;\n}\n\n  .--mb--rich-text-editor p {\n    margin: 0;\n  }\n\n  .--mb--rich-text-editor p:last-child {\n    margin-bottom: 0 !important;\n  }\n")
var _e=function(e){function t(e){u(this,t)
var w=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
return w.getInitialSelection=function(e){var t=e.paras
return e.selection||q(t)},w.getPresentState=function(){return w.state.present},w.pushPresentState=function(i){return new Promise(function(e,t){var n=w.state,r=n.past,a=n.present,o=[].concat(E(r),[a])
50<o.length+1&&o.shift(),w.setState({past:o,present:i,future:[]},e)})},w.buildEditorBridge=function(e){return e(w.getPresentState,w.handleSetRichAttr)},w.manuallyUpdate=function(){return w.$editor.innerHTML=L(w.getPresentState().paras)},w.restoreSelection=function(){return new Promise(function(e,t){var n=w.getPresentState().selection,r=M(n.start,3),a=r[0],o=r[1],i=r[2],l=M(n.end,3),u=l[0],c=l[1],s=l[2],d=w.$editor.childNodes[a].childNodes[o],f="#text"===d.childNodes[0].nodeName?d.childNodes[0]:d,
p=w.$editor.childNodes[u].childNodes[c],h="#text"===p.childNodes[0].nodeName?p.childNodes[0]:p,m=document.createRange()
m.setStart(f,i)
var v=window.getSelection()
v.removeAllRanges(),v.addRange(m),v.extend(h,s),e()})},w.handleSetRichAttr=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"add",r=w.state,a=r.past,o=r.present,i=o.paras,l=o.selection,u=W(l,"forwards"),c=Se({attr:e,value:t,paras:i,boundary:u})
if(c){var s=void 0
"add"===n?50<(s=[].concat(E(a),[o])).length+1&&s.shift():"replaceLast"===n&&(s=a)
var d=W(c.boundary,l)
w.setState({past:s,present:{paras:c.paras,selection:d},future:[]})}},w.handleSetBoldType=function(){var e=w.getPresentState(),t=e.paras,n=e.selection,r=b(t,n.start,"boldType")
w.handleSetRichAttr("boldType",1-r)},w.handleSetItalic=function(){var e=w.getPresentState(),t=e.paras,n=e.selection
"italic"!==b(t,n.start,"fontStyle")?w.handleSetRichAttr("fontStyle","italic"):w.handleSetRichAttr("fontStyle","normal")},w.handleSetLineThrough=function(){var e=w.getPresentState(),t=e.paras,n=e.selection
"line-through"!==b(t,n.start,"textDecoration")?w.handleSetRichAttr("textDecoration","line-through"):w.handleSetRichAttr("textDecoration","none")},w.handleSetUnderline=function(){var e=w.getPresentState(),t=e.paras,n=e.selection
"underline"!==b(t,n.start,"textDecoration")?w.handleSetRichAttr("textDecoration","underline"):w.handleSetRichAttr("textDecoration","none")},w.handleSelectionChange=function(e){if(!w.isInputtingComposition){var t=w.getSelection()
w.setSelection(t),w.recordlastFocusStyle()}},w.getSelection=function(){return{start:B("anchor"),end:B("focus")}},w.setSelection=function(e){w.setState(C({},w.state,{present:C({},w.state.present,{selection:e})}))},w.recordlastFocusStyle=function(){var e=window.getSelection(),t=void 0
if("SPAN"===e.focusNode.nodeName)t=e.focusNode
else if("#text"===e.focusNode.nodeName)t=e.focusNode.parentNode
else{if("P"!==e.focusNode.nodeName)return w.lastFocusStyle={paraSpacing:0,child:{}}
t=e.focusNode.childNodes[0]}var n=t.parentNode,r=D(n),a=D(t),o=w.getPresentState().paras
w.lastFocusStyle={paraSpacing:o[r].paraSpacing,child:C({},o[r].children[a],{text:void 0})}},w.popSelectionChange=function(){w.props.onSelectionChange&&w.props.onSelectionChange(w.getPresentState())},w.handleInput=function(e){if(!w.isInputtingComposition){var t=x(e.target,w.lastFocusStyle),n=w.getSelection()
w.setParasAndSelection(t,n)}},w.handleCompositionStart=function(e){w.toggleCompositionFlag()},w.handleCompositionEnd=function(e){w.toggleCompositionFlag()
var t=x(e.target,w.lastFocusStyle),n=w.getSelection()
w.setParasAndSelection(t,n)},w.toggleCompositionFlag=function(){return w.isInputtingComposition=!w.isInputtingComposition},w.setParasAndSelection=function(e,t){w.pushPresentState({paras:e,selection:t}).then(w.popContentChange)},w.popContentChange=function(){w.props.onContentChange&&w.props.onContentChange(w.getPresentState())},w.handleKeyDown=function(e){var t
return" "===e.key&&((t=e).stopPropagation(),t.nativeEvent.stopImmediatePropagation()),"a"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w.setSelection(q(w.getPresentState().paras))),"b"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w.handleSetBoldType()),"i"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w.handleSetItalic()),"u"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w.handleSetUnderline()),"s"===e.key&&(e.ctrlKey||e.metaKey)&&e.shiftKey&&(e.preventDefault(),
w.handleSetLineThrough()),"z"===e.key&&(e.ctrlKey||e.metaKey)?(e.preventDefault(),w.handleUndo()):"y"===e.key&&(e.ctrlKey||e.metaKey)?(e.preventDefault(),w.handleRedo()):void 0},w.handleUndo=function(){var e=w.state,t=e.past,n=e.present,r=e.future
if(0!==t.length){var a=t[t.length-1],o=t.slice(0,t.length-1),i=[n].concat(E(r))
50<1+o.length+i.length&&i.pop(),w.setState({past:o,present:a,future:i})}},w.handleRedo=function(){var e=w.state,t=e.past,n=e.present,r=e.future
if(0!==r.length){var a=r[0],o=r.slice(1),i=[].concat(E(t),[n])
50<1+i.length+o.length&&i.shift(),w.setState({past:i,present:a,future:o})}},w.handleCopy=function(e){var t=w.getPresentState(),n=t.paras,r=t.selection
if(!F(r)){var a=W(r,"forwards"),o=L(n,a,!0),i=o.HTML,l=o.text
e.clipboardData.setData("text/html",i),e.clipboardData.setData("text/plain",l),e.preventDefault()}},w.handleCut=function(e){var t=w.getPresentState(),n=t.paras,r=t.selection
if(!F(r)){var a=W(r,"forwards"),o=L(n,a)
e.clipboardData.setData("text/html",o)
var i=H(n,"",a),l=i.paras,u=i.selection
w.setParasAndSelection(l,u),e.preventDefault()}},w.handlePaste=function(e){e.preventDefault()
var t,n=p.clipboard.stripOutsidePastedStyle,r=e.clipboardData.getData("text/html").replace(/^<meta.*?>/,""),a=(t=r,new RegExp(T).test(t))
n&&!a?w.insertPastedAsPlainText(e):w.insertPastedAsHTML(e)},w.insertPastedAsHTML=function(e){var t=w.getPresentState(),n=t.paras,r=t.selection,a=W(r,"forwards"),o=e.clipboardData.getData("text/html").replace(/^<meta.*?>/,"")
if(o){var i,s,l,d,f,p,u,h,m,v,g,c=V(o),y=(i=n,s=c,d=(l=a).start,f=l.end,p=d[0],u=M(f,2),h=u[0],m=u[1],v=[],g=[],i.forEach(function(u,e,c){if(e<p||h<e)v.push(C({},u))
else if(e===p)if(0===s.length){var t=z(c[p],d).before,n=z(c[h],f).after
v.push({paraSpacing:u.paraSpacing,children:t.length+n.length===0?[C({},c[h].children[m],{text:""})]:[].concat(E(t),E(n))}),g[0]=p,g[1]=t.length?t.length-1:0,g[2]=t.length?t[t.length-1].text.length:0}else s.forEach(function(e,t){var n,r={paraSpacing:void 0!==e.paraSpacing?e.paraSpacing:u.paraSpacing,children:[]}
if(0===t){var a,o=z(c[p],d).before
0<o.length&&(a=r.children).push.apply(a,E(o))}if((n=r.children).push.apply(n,E(e.children)),t===s.length-1){var i
g[0]=p+s.length-1,g[1]=r.children.length-1,g[2]=e.children[e.children.length-1].text.length
var l=z(c[h],f).after
0<l.length&&(i=r.children).push.apply(i,E(l))}v.push(r)})}),{paras:v,selection:{start:g,end:g}}),b=y.paras,S=y.selection
w.setParasAndSelection(b,S)}},w.insertPastedAsPlainText=function(e){var t=w.getPresentState(),n=t.paras,r=t.selection,a=W(r,"forwards"),o=e.clipboardData.getData("text/plain"),i=H(n,o,a),l=i.paras,u=i.selection
w.setParasAndSelection(l,u)},w.lastFocusStyle=null,w.isInputtingComposition=!1,w.state={past:[],present:{paras:e.store.paras,selection:w.getInitialSelection(e.store)},future:[]},w}return d(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this
this.buildEditorBridge(this.props.editorBridgeBuilder),setTimeout(function(){return e.restoreSelection().then(e.popSelectionChange)},0)}},{key:"componentDidUpdate",value:function(){var t=this
0===this.$editor.childNodes.length&&this.manuallyUpdate(),this.restoreSelection().catch(function(e){console.warn(e),t.manuallyUpdate()}).then(this.popSelectionChange)}},{key:"render",value:function(){var t=this,e=this.getPresentState().paras
return a.a.createElement("div",{contentEditable:!0,dangerouslySetInnerHTML:{__html:L(e)},ref:function(e){return t.$editor=e},className:c,style:this.props.style,onKeyDown:this.handleKeyDown,onCompositionStart:this.handleCompositionStart,onCompositionEnd:this.handleCompositionEnd,onInput:this.handleInput,onSelect:this.handleSelectionChange,onCopy:this.handleCopy,onCut:this.handleCut,onPaste:this.handlePaste})}}]),t}(r.PureComponent)
_e.propTypes={style:i.a.object,store:i.a.object,onSelectionChange:i.a.func,onContentChange:i.a.func,editorBridgeBuilder:i.a.func}
var xe={getStore:function(){},setAttr:function(){}},Te=function(e,t){var n,r
xe.getStore=(n=e,function(){return n()}),xe.setAttr=(r=t,function(e,t,n){return r(e,t,n)})},Me=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),s(t,[{key:"render",value:function(){return a.a.createElement(_e,C({},this.props,{editorBridgeBuilder:Te}))}}]),t}(a.a.Component)
t.default=Me},G4qV:function(e,t,n){"use strict"
function a(e,t){return e===t}function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a,n=null,r=null
return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1
for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1
return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}function o(u){for(var e=arguments.length,c=Array(1<e?e-1:0),t=1;t<e;t++)c[t-1]=arguments[t]
return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=0,a=t.pop(),o=function(e){var t=Array.isArray(e[0])?e[0]:e
if(t.every(function(e){return"function"==typeof e}))return t
var n=t.map(function(e){return typeof e}).join(", ")
throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}(t),i=u.apply(void 0,[function(){return r++,a.apply(null,arguments)}].concat(c)),l=u(function(){for(var e=[],t=o.length,n=0;n<t;n++)e.push(o[n].apply(null,arguments))
return i.apply(null,e)})
return l.resultFunc=a,l.dependencies=o,l.recomputations=function(){return r},l.resetRecomputations=function(){return r=0},l}}n.r(t),n.d(t,"defaultMemoize",function(){return r}),n.d(t,"createSelectorCreator",function(){return o}),n.d(t,"createSelector",function(){return i}),n.d(t,"createStructuredSelector",function(){return l})
var i=o(r)
function l(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i
if("object"!=typeof t)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof t)
var r=Object.keys(t)
return e(r.map(function(e){return t[e]}),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.reduce(function(e,t,n){return e[r[n]]=t,e},{})})}},G916:function(e,t,n){e.exports={nav:"Hiz6yu3fLMLU-8yBEpNTi","nav-item":"_10LJDTQtIaisEickywA9Y6"}},GDhZ:function(e,t,n){var a=n("wF/u"),o=n("mwIZ"),i=n("hgQt"),l=n("9ggG"),u=n("CMye"),c=n("IOzZ"),s=n("9Nap")
e.exports=function(n,r){return l(n)&&u(r)?c(s(n),r):function(e){var t=o(e,n)
return void 0===t&&t===r?i(e,n):a(r,t,3)}}},GEF2:function(e,t,n){e.exports={"preview-panel-wrapper":"_1odVOmUf_L2bz8rxxzZqJ1","preview-panel":"_11Nr2FMyfINVLHP_k3fz6w",expand:"_3aj4P9yx1sCcaQso-4Z71o"}},GNiM:function(e,t,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(e){var a=[]
return 46===e.charCodeAt(0)&&a.push(""),e.replace(o,function(e,t,n,r){a.push(n?r.replace(i,"$1"):t||e)}),a})
e.exports=a},GWLA:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=a(n("17x9")),h=r(n("q1tI")),m=n("6XO9"),v=n("wYtL"),g=(a(n("JSCU")),n("h0FN")),y=a(n("zy85")),b=a(n("UbMB")).default.bind(y.default),S={type:0,name:"自定义链接",target_cid:"screen-cid-1",transition:{name:"slide-left",duration:2e3}},w=[{value:1,label:"screen-link"},{value:2,label:"state-link"},{value:3,label:"panel-link"},{value:4,label:"widget-link"}],C=Link.TYPE,E=C.screen_link,
k=C.state_link,_=C.panel_link,x=C.widget_link,T=function(e){function n(){var t
return(0,i.default)(this,n),t=(0,u.default)(this,(0,c.default)(n).call(this)),(0,f.default)((0,d.default)((0,d.default)(t)),"handleLinkType",function(e){t.updateLinkAttr({type:Number(e)})}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleLinkTarget",function(e){return t.updateLinkAttr({targetCid:e})}),(0,f.default)((0,d.default)((0,d.default)(t)),"updateLinkAttr",function(e){t.setState({currentLink:(0,o.default)({},t.state.currentLink,e)})}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleSubmit",
function(){var e=t.state.currentLink
t.props.dispatch,console.log(e)}),t.state={currentLink:S},t}return(0,s.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){var e=this.state.currentLink
return h.default.createElement("div",{className:b("runner-control-panel")},h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"链接类型"),h.default.createElement(v.Select,{value:e.type,optionList:w,onChange:this.handleLinkType})),M(e),h.default.createElement("button",{className:"submit",onClick:this.handleSubmit},"执行"))}}]),n}(h.PureComponent)
t.default=T,(0,f.default)(T,"propTypes",{dispatch:p.default.func})
var M=function(e){switch(e.type){case E:return h.default.createElement(N,{link:e})
case k:return h.default.createElement(I,{link:e})
case _:return h.default.createElement(O,{link:e})
case x:return h.default.createElement(R,{link:e})
default:return null}},N=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[]
return MB.currentProject.cscreens().forEach(function(e){e.cid!==MB.currentScreen.cid&&t.push({value:e.cid,label:e.name})}),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标页面"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"动画名称"),h.default.createElement(v.Select,{value:e.transition,
optionList:g.TRANSITIONS,onChange:this.handleLinkTarget})))}}]),t}(h.PureComponent),I=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[{cid:"default",name:"默认状态"}]
return MB.currentScreen.cscreenstates().forEach(function(e){e.cid!==MB.currentScreen.state_cid&&t.push({value:e.cid,label:e.name})}),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(
m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent),O=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cpanels().map(function(e){return{value:e.cid,label:e.display_name}})
return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent),R=function(e){
function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cwidgets().map(function(e){return{value:e.cid,label:e.display_name}})
return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent)},Gbs1:function(e,t,
n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getProjectShell=t.getProjectShellSizeWithOrientation=t.canSetDeviceShell=void 0
var a=r(n("MVZn")),d=r(n("J4zp")),l=n("2EV6")
t.canSetDeviceShell=function(e){return!["customize","desktop"].includes(e.model)}
t.getProjectShellSizeWithOrientation=function(e,t,n){var r,a,o=f(e,t),i="landscape"===n
if("device"===t&&o.bg){var l=i?[o.height,o.width]:[o.width,o.height],u=(0,d.default)(l,2)
r=u[0],a=u[1]}else{var c=i?[e.height,e.width]:[e.width,e.height],s=(0,d.default)(c,2)
r=s[0],a=s[1]}return{width:r,height:a}}
var f=function(e,t){return o(e,t)||i(e,t)}
t.getProjectShell=f
var o=function(e,t){var n=e.device,r=e.model
return"device"!==t?null:MB.SHELLS[r]||MB.SHELLS[n]?(0,a.default)({},MB.SHELLS[r]||MB.SHELLS[n]):null},i=function(e,t){var n="none"===t?0:12,r=e.width+2*n,a=e.height+2*n,o=(0,l.canProjectSetOrientation)(e)?[Math.min(r,a),Math.max(r,a)]:[r,a],i=(0,d.default)(o,2)
return{device:"default",top:n,left:n,width:i[0],height:i[1]}}},H27A:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),i=a(n("lwsE")),l=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),v=r(n("q1tI")),h=a(n("17x9")),g=n("DqDi"),y=a(n("i6OX")),b=a(n("4QcC")),S=a(n("Ur7v")),w=a(n("lCKy")),C=a(n("iX79")),m=n("/5+U"),E=n("1iCU"),k=n("t3Un"),_=n("2EV6"),x=n("Gbs1"),T=a(n("rtgd")),M=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,c.default)(this,(0,s.default)(t).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(r)),"handleTabChange",function(e){var t=r.props.dispatch,n=E.PREVIEW_CONFIG[e]
t({type:"entry:preview:select",payload:{toolbarActiveItem:E.PREVIEW_CONFIG[e]}}),MB.event("ga","".concat(E.TOOLBAR_TRAKING_CONFIG[n]),"运行页")}),e.dispatch({type:"reducer:preview-toolbar:active-item:init"}),I()&&r.props.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:E.INSPECT}}),r}return(0,d.default)(t,e),(0,l.default)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.toolbarActiveItem,n=e.loadSliceUrl
t!=this.props.toolbarActiveItem&&this.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1,isSelectLayer:!1}}),n!=this.props.loadSliceUrl&&N(n)}},{key:"render",value:function(){var e=this.props,t=e.scale,n=e.project,r=e.dispatch,a=e.toolbarActiveItem,o=e.hasUnreadComment,i=e.isScrollable,l=e.isHighlight,u=e.isStickyShow,c=e.shellType,s=E.PREVIEW_CONFIG.indexOf(a)||0,d=a!=E.PREVIEW,f=n.name||"",p=MB.isHTMLZip()?E.PREVIEW_OFFLINE_ICON_LIST:E.PREVIEW_ICON_LIST,h=!MB.isHTMLZip(
)&&o,m=v.default.createElement(b.default,{scale:t,dispatch:r})
return"project"!==(0,_.getProjectType)(n)?m:v.default.createElement("header",{className:T.default["preview-toolbar"]},v.default.createElement("div",{className:"toolbar-left"},MB.designer&&v.default.createElement("a",{title:I18N.back,onClick:MB.designer.backDesign},v.default.createElement(y.default,{name:"back_fc",type:"dora",className:"fs-16"})),v.default.createElement("span",{className:"project-name",title:f},f)),v.default.createElement("div",{className:"toolbar-main"},m,v.default.createElement("div",{
className:"toolbar-main-wrapper"},v.default.createElement(g.NavigationBar,{tabs:p,activeIndex:s,onChange:this.handleTabChange,className:"preview-toolbar-nav",hideBorder:!0}),h&&v.default.createElement("span",{className:"unread"}))),v.default.createElement("div",{className:"toolbar-right"},v.default.createElement(w.default,{canSetDeviceShell:(0,x.canSetDeviceShell)(n),disabled:d,isScrollable:i,isHighlight:l,isStickyShow:u,shellType:c,dispatch:r}),v.default.createElement("span",{className:"line"}),
v.default.createElement(S.default,{dispatch:r}),v.default.createElement("span",{className:"line"}),v.default.createElement(C.default,{dispatch:r})))}}]),t}(v.PureComponent)
t.default=M,(0,p.default)(M,"propTypes",{scale:h.default.number,project:h.default.object,toolbarActiveItem:h.default.string,hasUnreadComment:h.default.bool,loadSliceUrl:h.default.string,isScrollable:h.default.bool,isHighlight:h.default.bool,isStickyShow:h.default.bool,shellType:h.default.string,dispatch:h.default.func})
var N=function(){var t=(0,o.default)(u.default.mark(function e(n){var r,a,o,i,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,o=1
case 2:if(r)return e.next=5,(0,m.setTimeoutAsync)(Math.min(2e3*o++,1e4))
e.next=16
break
case 5:return e.next=7,t=n,(0,k.requestJSON)(t,null,{method:"POST"})
case 7:if(i=e.sent,l=i.url,"ok"===i.status&&(r=!1,a=l),20<o)return(0,m.downloadFail)(),e.abrupt("return",!1)
e.next=14
break
case 14:e.next=2
break
case 16:return(0,m.downloadWithATag)({url:"/".concat(a),name:void 0,type:"zip"}),e.abrupt("return",!0)
case 18:case"end":return e.stop()}var t},e,this)}))
return function(e){return t.apply(this,arguments)}}(),I=function(){return new URLSearchParams(location.search).has("inspect")}},HDyB:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},HFhh:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),b=n("IT1M"),a={id:null,name:"",email:"",avatar:"",plan:{state:"",type:"free",rawType:"free",collaboratorLimitation:0,daysLeft:""}},o=(0,r.createStateStore)(a),i=o.getState,l=o.setState,u=o.wrapEntry
var c={entryMap:{"user:set":u(function(e,t,n){var r,a,o,i,l,u,c=t.dispatch,s=n.payload,d=s.id,f=void 0===d?null:d,p=s.name,h=void 0===p?"":p,m=s.email,v=void 0===m?"":m,g=s.avatar,y=void 0===g?"":g
c({type:"reducer:user:update",payload:b.Operation.objectMerge(e,{id:f,name:h,email:v,avatar:y,plan:(r=s,a=r.plan,o=r.state,i=r.limitation,l=r.days_left,u="active"===o,{state:o||"",type:u&&a||"free",rawType:a||"free",collaboratorLimitation:u&&i||0,daysLeft:l||""})})})}),"user:clear":u(function(e,t,n){(0,t.dispatch)({type:"reducer:user:update",payload:a})})},getState:i,setState:l}
t.default=c},HLqo:function(e,t,n){},HNPj:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("a1gu")),l=r(n("Nsbk")),u=r(n("7W2i")),c=r(n("q1tI")),s=r(n("17x9")),d=r(n("Y69h")),f=r(n("7Rdd")),p=r(n("0uCA")),h=r(n("mCdf")),m=n("ZXhj"),v=n("IdPL"),g=r(n("TjoA")),y=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"shouldComponentUpdate",value:function(e){return!((0,m.checkSameRect)(e.baseRect,this.props.baseRect)&&(0,m.checkSameRect)(e.refRect,
this.props.refRect)&&(0,m.checkSameRect)(e.screen,this.props.screen)&&e.theme===this.props.theme)}},{key:"render",value:function(){var e=this.props,t=e.baseRect,n=e.refRect,r=e.screen,a=e.theme,o=e.renderValue,i=v.STYLE_MAP[a].verboseAuxiliaryLines
return c.default.createElement("div",{className:g.default["distance-measurement-container"]},c.default.createElement(d.default,{baseRect:t,refRect:n,screen:r,style:v.STYLE_MAP[a].distanceMarks,renderValue:o}),i?c.default.createElement(p.default,{refRect:n,screen:r,style:v.STYLE_MAP[a].auxiliaryLines}):c.default.createElement(h.default,{baseRect:t,refRect:n,screen:r,style:v.STYLE_MAP[a].auxiliaryLines}),c.default.createElement(f.default,{refRect:n,screen:r,style:v.STYLE_MAP[a].refRectBorder}))}}]),t}(
c.default.Component);(t.default=y).propTypes={baseRect:s.default.object,refRect:s.default.object,screen:s.default.object,theme:s.default.string,renderValue:s.default.func}},HfeQ:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),w=r(n("q1tI")),C=n("6XO9")
n("wfO3")
var f=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.isOpen,r=e.type,a=e.alertType,o=e.title,i=e.desc,l=void 0===i?o:i,u=e.isHTML,c=e.onClose,s=void 0===c?function(){return t({type:"container:modal:close"})}:c,d=e.onCancel,f=void 0===d?function(){return null}:d,p=e.onConfirm,h=e.canClose,m=e.canCancel,v=e.canConfirm,g=e.cancelText,
y=e.confirmText,b=m?function(){f&&f(),s&&s()}:void 0,S=v?function(){p&&p(),s&&s()}:void 0
return w.default.createElement(C.Modal,{isOpen:n,type:r,portalClassName:"global-alert-portal",title:o!==l&&o?o:I18N.reminder,onClose:function(){"function"==typeof f&&f(),s()},canClose:h,onCancel:b,onConfirm:S,cancelText:g,confirmText:y},u?w.default.createElement("p",{className:"desc",dangerouslySetInnerHTML:{__html:l}}):w.default.createElement("div",{className:"desc"},l),"prompt"===a&&w.default.createElement(C.FormLabel,{name:I18N.password},w.default.createElement(C.Input,{type:"password",
className:"prompt-pwd"})))}}]),t}(w.PureComponent)
t.default=f,(0,s.default)(f,"propTypes",{dispatch:d.default.func,isOpen:d.default.bool,type:d.default.string,alertType:d.default.oneOf(["confirm","alert","prompt"]),onClose:d.default.func,onCancel:d.default.func,onConfirm:d.default.func,canClose:d.default.bool,canCancel:d.default.bool,canConfirm:d.default.bool,confirmText:d.default.string,cancelText:d.default.string,title:d.default.string,desc:d.default.any,isHTML:d.default.bool}),(0,s.default)(f,"defaultProps",{type:"alert"})},Hlt7:function(e,t,n){
"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.scrollParent=t.checkInvision=t.checkOverflowVisbile=t.filterSearch=void 0
var s=r(n("MVZn")),d=r(n("J4zp")),p=r(n("i8i4"))
t.filterSearch=function(e,t,n){for(var r=[],a=0,o=Object.entries(e),i=0;i<o.length;i++){var l=(0,d.default)(o[i],2),u=l[0],c=l[1]
t&&0<t.length&&c.toLowerCase().includes(t)&&r.push((0,s.default)({},n[u],{index:a++}))}return r}
var a=function(e){if(!e)return document.documentElement
for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement
var a=window.getComputedStyle(r),o=a.position,i=a.overflow,l=a["overflow-x"],u=a["overflow-y"]
if("static"===o&&t&&(r=r.parentNode),n.test(i)&&n.test(l)&&n.test(u))return r
r=r.parentNode}return e.ownerDocument||e.documentElement||document.documentElement}
t.scrollParent=a
var h=0,m=0,o=function(e,t){var n,r,a=p.default.findDOMNode(e)
try{var o=t.getBoundingClientRect()
n=o.top,r=o.height}catch(e){n=h,r=m}var i,l,u=window.innerHeight||document.documentElement.clientHeight,c=Math.max(n,0),s=Math.min(u,n+r)-c
try{var d=a.getBoundingClientRect()
i=d.top,l=d.height}catch(e){i=h,l=m}var f=i-c
return f<=s&&0<=f+l}
t.checkOverflowVisbile=o
t.checkInvision=function(e){var t=p.default.findDOMNode(e),n=a(t)
return!!o(e,n)}},Hmy9:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createNotifier=t.notifyFallback=t.handleNotification=void 0
var a=r(n("i8i4")),o=n("B3BZ"),i=window,l=i.$,u=i.MB
t.handleNotification=function(r,e){if(!("new_thread_comment"===r.event_type&&u.commentModeOn||r.org)){e.notify({title:I18N.got_message,opts:{body:r.message,icon:"/images/mockingbot-logo80x80.png"},duration:1e4,onClick:function(e,t){e.preventDefault(),t()
var n=window
n.focus(),u.notification.markRead(r.id,function(){return u.notification.gotoDataUrl(r.url,n,r.need_reload,r.need_new_win)})},onNotSupport:function(){return c(r)}})
var t=l("#header .notifications-dropdown")[0]
t&&(a.default.unmountComponentAtNode(t),u.renderNotifications(t))}}
var c=function(t){l("#notification").addClass("active"),setTimeout(function(){return l("#notification").removeClass("active")},1e4)
var e=l("#notification .message")
e.text(t.message),t.url&&(e.off("click"),e.on("click",function(e){e.preventDefault(),u.notification.markRead(t.id,function(){return u.notification.gotoDataUrl(t.url,window,t.need_reload,t.need_new_win)})}))}
t.notifyFallback=c
t.createNotifier=function(){var e=(0,o.createNotifierWrap)()
return e.init(),e}},Hn6C:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.MBScreenSnapshot=void 0
var a=r(n("17x9")),c=r(n("q1tI")),s=r(n("9DAG")),d=n("S9W4"),f=n("IB8Z"),p=n("CpT9"),h=n("QDPf"),o=function(e){var t=e.screen,n=e.canvasZoom,r=e.state_cid,a=(0,f.getScreenWidgetsMap)(Widget.irecords),o=(0,d.generateItems)(t,r,a),i=(0,h.generateTreeData)(o,t.cid).widgetTreeData,l=(0,p.getScreenClassName)(t,t.cp()),u={position:"relative",width:t.width,height:t.height,transform:"scale(".concat(n,")"),transformOrigin:"top left",backgroundColor:t.bg(),backgroundImage:t.bgimage?"url(".concat(t.bgimage,")"):"",
backgroundSize:"100% auto",zIndex:1}
return c.default.createElement("div",{className:l,style:u},c.default.createElement(s.default,{widgetTreeData:i,isSnapshot:!0}))};(t.MBScreenSnapshot=o).propTypes={screen:a.default.object,state_cid:a.default.string,canvasZoom:a.default.number}},Hrzm:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("uavl"),m=n("zQyp")
n("dAiO")
var v=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(a)),"renderStickies",function(){var e=a.props,t=e.screenCid,n=e.stateCid
if(!t||!n)return null
var r=[]
return Widget.all().forEach(function(e){"sticky"===e.name&&e.screen_cid===t&&r.push(Widgetstate.find(n+e.cid)||e)}),r.map(function(e){return p.default.createElement(g,{key:e.cid,sticky:e})})}),a}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){return p.default.createElement("div",{id:"sticky-container",onClick:this.handleClick},p.default.createElement("div",{id:"stickies"},this.renderStickies()))}}]),o}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{screenCid:o.default.string,stateCid:o.default.string})
var g=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"handleClick",function(e){var t=n.props.sticky
Link.find(t.link_cids)&&MB.runner.eventHandler.prepareJump(e,["tap","click"])}),n}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props.sticky,t=(0,m.getWidgetClassName)(e,"p"),n=(0,m.getWidgetStyle)(e,"p"),r=Link.find(e.link_cids)?e.link_cids:""
return p.default.createElement("div",{key:e.cid,"data-cid":e.cid,"data-link_cid":r,id:"widget".concat(e.cid,"p"),className:t,style:n,onClick:this.handleClick},(0,h.getWidgetContent)(e))}}]),o}(p.PureComponent);(0,f.default)(g,"propTypes",{sticky:o.default.object})},I01J:function(e,t){e.exports=function(e){return e}},I19b:function(e,t,n){},IB8Z:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getPanelWidgetList=t.getProjectScreenWidgetList=t.getWidgetsByScreenCid=t.getScreenWidgetsMap=void 0
t.getScreenWidgetsMap=function(e){var t={}
for(var n in e){var r=e[n]
t[r.screen_cid]?t[r.screen_cid].push(r):t[r.screen_cid]=[r]}return t}
t.getWidgetsByScreenCid=function(e,t){return(t[e]||[]).map(function(e){return e.clone()})}
var a=function(e,t){var n=Screen.find(e)
t=t||n.state_cid,n._widgetsByName=null,n.lsave(!1)
var r=[]
n.cwidgets().forEach(function(e){e.setState(t,!0),r.push(e.dup())})
var a=new Set
return n.cpanels().forEach(function(e){e.valid()&&(e.setState(t,!0),r.push(e.dup()),a.add(e.template_cid))}),a.forEach(function(e){Template.find(e).cscreens().forEach(function(n){n.cwidgets().forEach(function(e){e.setState(n.state_cid,!0)
var t=e.dup()
r.push(t)})})}),r}
t.getProjectScreenWidgetList=a
t.getPanelWidgetList=function(e,t){var n,r
return r=e.multi_states?(n=e.ct().homeScreen().cid,t):(n=t||e.mainState().cid,"default"),a(n,r)}},IDhZ:function(e,t,n){"use strict"
var y=n("MgzW"),b=n("q1tI")
function S(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1])
!function(e,t,n,r,a,o,i,l){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var u=[n,r,a,o,i,l],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var r="function"==typeof Symbol&&Symbol.for,l=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for(
"react.provider"):60109,d=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116
function w(e){if(null==e)return null
if("function"==typeof e)return e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case p:return"ConcurrentMode"
case u:return"Fragment"
case l:return"Portal"
case s:return"Profiler"
case c:return"StrictMode"
case m:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case d:return"Context.Consumer"
case f:return"Context.Provider"
case h:var t=e.render
return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")
case v:return w(e.type)
case g:if(e=1===e._status?e._result:null)return w(e)}return null}var a=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
a.hasOwnProperty("ReactCurrentDispatcher")||(a.ReactCurrentDispatcher={current:null})
var C={}
function E(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var k=new Uint16Array(16),o=0;o<15;o++)k[o]=o+1
k[15]=0
var i=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_=Object.prototype.hasOwnProperty,x={},T={}
function M(e){return!!_.call(T,e)||!_.call(x,e)&&(i.test(e)?T[e]=!0:!(x[e]=!0))}function N(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e)
default:return!1}}(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||t<1}return!1}function I(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t}var O={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new I(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0]
O[t]=new I(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new I(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new I(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new I(e,3,!1,
e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new I(e,3,!0,e,null)}),["capture","download"].forEach(function(e){O[e]=new I(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){O[e]=new I(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){O[e]=new I(e,5,!1,e.toLowerCase(),null)})
var R=/[\-:]([a-z])/g
function P(e){return e[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(
" ").forEach(function(e){var t=e.replace(R,P)
O[t]=new I(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,P)
O[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,P)
O[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null)})
var A=/["'&<>]/
function j(e){if("boolean"==typeof e||"number"==typeof e)return""+e
e=""+e
var t=A.exec(e)
if(t){var n,r="",a=0
for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;"
break
case 38:t="&amp;"
break
case 39:t="&#x27;"
break
case 60:t="&lt;"
break
case 62:t="&gt;"
break
default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}var L=null,D=null,B=null,F=!1,U=!1,W=null,q=0
function z(){return null===L&&S("307"),L}function H(){return 0<q&&S("312"),{memoizedState:null,queue:null,next:null}}function Y(){return null===B?null===D?(F=!1,D=B=H()):(F=!0,B=D):B=null===B.next?(F=!1,B.next=H()):(F=!0,B.next),B}function V(e,t,n,r){for(;U;)U=!1,q+=1,B=null,n=e(t,r)
return D=L=null,q=0,B=W=null,n}function J(e,t){return"function"==typeof t?t(e):t}function X(e,t,n){if(L=z(),B=Y(),F){var r=B.queue
if(t=r.dispatch,null===W||void 0===(n=W.get(r)))return[B.memoizedState,t]
for(W.delete(r),r=B.memoizedState;r=e(r,n.action),null!==(n=n.next););return[B.memoizedState=r,t]}return e=e===J?"function"==typeof t?t():t:void 0!==n?n(t):t,B.memoizedState=e,e=(e=B.queue={last:null,dispatch:null}).dispatch=function(e,t,n){if(q<25||S("301"),e===L)if(U=!0,e={action:n,next:null},null===W&&(W=new Map),void 0===(n=W.get(t)))W.set(t,e)
else{for(t=n;null!==t.next;)t=t.next
t.next=e}}.bind(null,L,e),[B.memoizedState,e]}function G(){}var Z=0,K={readContext:function(e){var t=Z
return E(e,t),e[t]},useContext:function(e){z()
var t=Z
return E(e,t),e[t]},useMemo:function(e,t){if(L=z(),t=void 0===t?null:t,null!==(B=Y())){var n=B.memoizedState
if(null!==n&&null!==t){e:{var r=n[1]
if(null===r)r=!1
else{for(var a=0;a<r.length&&a<t.length;a++){var o=t[a],i=r[a]
if((o!==i||0===o&&1/o!=1/i)&&(o==o||i==i)){r=!1
break e}}r=!0}}if(r)return n[0]}}return e=e(),B.memoizedState=[e,t],e},useReducer:X,useRef:function(e){L=z()
var t=(B=Y()).memoizedState
return null===t?(e={current:e},B.memoizedState=e):t},useState:function(e){return X(J,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:G,useEffect:G,useDebugValue:G},Q="http://www.w3.org/1999/xhtml"
function $(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}var ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},te=y({menuitem:!0},ee),ne={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,
gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"]
Object.keys(ne).forEach(function(t){re.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ne[e]=ne[t]})})
var ae=/([A-Z])/g,oe=/^ms-/,ie=b.Children.toArray,le=a.ReactCurrentDispatcher,ue={listing:!0,pre:!0,textarea:!0},ce=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,se={},de={}
var fe=Object.prototype.hasOwnProperty,pe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null}
function he(e,t){void 0===e&&S("152",w(t)||"Component")}function me(f,p,h){function e(e,t){var n=function(e,t,n){var r=e.contextType
if("object"==typeof r&&null!==r)return E(r,n),r[n]
if(e=e.contextTypes){for(var a in n={},e)n[a]=t[a]
t=n}else t=C
return t}(t,p,h),r=[],a=!1,o={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===r)return null},enqueueReplaceState:function(e,t){a=!0,r=[t]},enqueueSetState:function(e,t){if(null===r)return null
r.push(t)}},i=void 0
if(t.prototype&&t.prototype.isReactComponent){if(i=new t(e.props,n,o),"function"==typeof t.getDerivedStateFromProps){var l=t.getDerivedStateFromProps.call(null,e.props,i.state)
null!=l&&(i.state=y({},i.state,l))}}else if(L={},i=t(e.props,n,o),null==(i=V(t,e.props,i,n))||null==i.render)return void he(f=i,t)
if(i.props=e.props,i.context=n,i.updater=o,void 0===(o=i.state)&&(i.state=o=null),"function"==typeof i.UNSAFE_componentWillMount||"function"==typeof i.componentWillMount)if("function"==typeof i.componentWillMount&&"function"!=typeof t.getDerivedStateFromProps&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&"function"!=typeof t.getDerivedStateFromProps&&i.UNSAFE_componentWillMount(),r.length){o=r
var u=a
if(r=null,a=!1,u&&1===o.length)i.state=o[0]
else{l=u?o[0]:i.state
var c=!0
for(u=u?1:0;u<o.length;u++){var s=o[u]
null!=(s="function"==typeof s?s.call(i,l,e.props,n):s)&&(c?(c=!1,l=y({},l,s)):y(l,s))}i.state=l}}else r=null
if(he(f=i.render(),t),e=void 0,"function"==typeof i.getChildContext&&"object"==typeof(n=t.childContextTypes))for(var d in e=i.getChildContext())d in n||S("108",w(t)||"Unknown",d)
e&&(p=y({},p,e))}for(;b.isValidElement(f);){var t=f,n=t.type
if("function"!=typeof n)break
e(t,n)}return{child:f,context:p}}var ve=function(){function i(e,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function")
e=b.isValidElement(e)?e.type!==u?[e]:(e=e.props.children,b.isValidElement(e)?[e]:ie(e)):ie(e),e={type:null,domNamespace:Q,children:e,childIndex:0,context:C,footer:""}
var n=k[0]
if(0===n){var r=k,a=2*(n=r.length)
a<=65536||S("304")
var o=new Uint16Array(a)
for(o.set(r),(k=o)[0]=n+1,r=n;r<a-1;r++)k[r]=r+1
k[a-1]=0}else k[0]=k[n]
this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return i.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0
var e=this.threadID
k[e]=k[0],k[0]=e}},i.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID
E(n,r)
var a=n[r]
this.contextStack[t]=n,this.contextValueStack[t]=a,n[r]=e.props.value},i.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e]
this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},i.prototype.read=function(e){if(this.exhausted)return null
var t=Z
Z=this.threadID
var n=le.current
le.current=K
try{for(var r=[""],a=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0
var o=this.threadID
k[o]=k[0],k[0]=o
break}var i=this.stack[this.stack.length-1]
if(a||i.childIndex>=i.children.length){var l=i.footer
if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===i.type)this.currentSelectValue=null
else if(null!=i.type&&null!=i.type.type&&i.type.type.$$typeof===f)this.popProvider(i.type)
else if(i.type===m){this.suspenseDepth--
var u=r.pop()
if(a){a=!1
var c=i.fallbackFrame
c||S("303"),this.stack.push(c)
continue}r[this.suspenseDepth]+=u}r[this.suspenseDepth]+=l}else{var s=i.children[i.childIndex++],d=""
try{d+=this.render(s,i.context,i.domNamespace)}catch(e){throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=d}}return r[0]}finally{le.current=n,Z=t}},i.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?j(n):this.previousWasTextNode?"\x3c!-- --\x3e"+j(n):(this.previousWasTextNode=!0,j(n))
if(e=(t=me(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return""
if(!b.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var r=e.$$typeof
r===l&&S("257"),S("258",r.toString())}return e=ie(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(r=e.type))return this.renderDOM(e,t,n)
switch(r){case c:case p:case s:case u:return e=ie(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""
case m:S("294")}if("object"==typeof r&&null!==r)switch(r.$$typeof){case h:L={}
var a=r.render(e.props,e.ref)
return a=V(r.render,e.props,a,e.ref),a=ie(a),this.stack.push({type:null,domNamespace:n,children:a,childIndex:0,context:t,footer:""}),""
case v:return e=[b.createElement(r.type,y({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""
case f:return n={type:e,domNamespace:n,children:r=ie(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),""
case d:r=e.type,a=e.props
var o=this.threadID
return E(r,o),r=ie(a.children(r[o])),this.stack.push({type:e,domNamespace:n,children:r,childIndex:0,context:t,footer:""}),""
case g:S("295")}S("130",null==r?r:typeof r,"")},i.prototype.renderDOM=function(e,t,n){var r=e.type.toLowerCase()
n===Q&&$(r),se.hasOwnProperty(r)||(ce.test(r)||S("65",r),se[r]=!0)
var a=e.props
if("input"===r)a=y({type:void 0},a,{defaultChecked:void 0,defaultValue:void 0,value:null!=a.value?a.value:a.defaultValue,checked:null!=a.checked?a.checked:a.defaultChecked})
else if("textarea"===r){var o=a.value
if(null==o){o=a.defaultValue
var i=a.children
null!=i&&(null!=o&&S("92"),Array.isArray(i)&&(i.length<=1||S("93"),i=i[0]),o=""+i),null==o&&(o="")}a=y({},a,{value:void 0,children:""+o})}else if("select"===r)this.currentSelectValue=null!=a.value?a.value:a.defaultValue,a=y({},a,{value:void 0})
else if("option"===r){i=this.currentSelectValue
var l=function(e){if(null==e)return e
var t=""
return b.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(a.children)
if(null!=i){var u=null!=a.value?a.value+"":l
if(o=!1,Array.isArray(i)){for(var c=0;c<i.length;c++)if(""+i[c]===u){o=!0
break}}else o=""+i===u
a=y({selected:void 0,children:void 0},a,{selected:o,children:l})}}for(g in(o=a)&&(te[r]&&(null!=o.children||null!=o.dangerouslySetInnerHTML)&&S("137",r,""),null!=o.dangerouslySetInnerHTML&&(null!=o.children&&S("60"),"object"==typeof o.dangerouslySetInnerHTML&&"__html"in o.dangerouslySetInnerHTML||S("61")),null!=o.style&&"object"!=typeof o.style&&S("62","")),o=a,i=this.makeStaticMarkup,l=1===this.stack.length,u="<"+e.type,o)if(fe.call(o,g)){var s=o[g]
if(null!=s){if("style"===g){c=void 0
var d="",f=""
for(c in s)if(s.hasOwnProperty(c)){var p=0===c.indexOf("--"),h=s[c]
if(null!=h){var m=c
if(de.hasOwnProperty(m))m=de[m]
else{var v=m.replace(ae,"-$1").toLowerCase().replace(oe,"-ms-")
m=de[m]=v}d+=f+m+":",f=c,d+=p=null==h||"boolean"==typeof h||""===h?"":p||"number"!=typeof h||0===h||ne.hasOwnProperty(f)&&ne[f]?(""+h).trim():h+"px",f=";"}}s=d||null}c=null
e:if(p=r,h=o,-1===p.indexOf("-"))p="string"==typeof h.is
else switch(p){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":p=!1
break e
default:p=!0}p?pe.hasOwnProperty(g)||(c=M(c=g)&&null!=s?c+'="'+j(s)+'"':""):(p=g,c=s,s=O.hasOwnProperty(p)?O[p]:null,(h="style"!==p)&&(h=null!==s?0===s.type:2<p.length&&("o"===p[0]||"O"===p[0])&&("n"===p[1]||"N"===p[1])),c=h||N(p,c,s,!1)?"":null!==s?(p=s.attributeName,3===(s=s.type)||4===s&&!0===c?p+'=""':p+'="'+j(c)+'"'):M(p)?p+'="'+j(c)+'"':""),c&&(u+=" "+c)}}i||l&&(u+=' data-reactroot=""')
var g=u
o="",ee.hasOwnProperty(r)?g+="/>":(g+=">",o="</"+e.type+">")
e:{if(null!=(i=a.dangerouslySetInnerHTML)){if(null!=i.__html){i=i.__html
break e}}else if("string"==typeof(i=a.children)||"number"==typeof i){i=j(i)
break e}i=null}return null!=i?(a=[],ue[r]&&"\n"===i.charAt(0)&&(g+="\n"),g+=i):a=ie(a.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?$(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:r,children:a,childIndex:0,context:t,footer:o}),this.previousWasTextNode=!1,g},i}(),ge={renderToString:function(e){e=new ve(e,!1)
try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new ve(e,!0)
try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){S("207")},renderToStaticNodeStream:function(){S("208")},version:"16.8.2"},ye=ge
e.exports=ye.default||ye},IOzZ:function(e,t){e.exports=function(t,n){return function(e){return null!=e&&e[t]===n&&(void 0!==n||t in Object(e))}}},IT1M:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n("JGuq")
Object.defineProperty(t,"Operation",{enumerable:!0,get:function(){return r.Operation}})
var a=n("OBS2")
Object.defineProperty(t,"Scheme",{enumerable:!0,get:function(){return a.Scheme}}),Object.defineProperty(t,"ObjectScheme",{enumerable:!0,get:function(){return a.ObjectScheme}}),Object.defineProperty(t,"ArrayScheme",{enumerable:!0,get:function(){return a.ArrayScheme}})
var o=n("CUi3")
Object.defineProperty(t,"ObjectAs",{enumerable:!0,get:function(){return o.ObjectAs}}),Object.defineProperty(t,"ArrayOf",{enumerable:!0,get:function(){return o.ArrayOf}}),Object.defineProperty(t,"objectActMap",{enumerable:!0,get:function(){return o.objectActMap}}),Object.defineProperty(t,"arrayActMap",{enumerable:!0,get:function(){return o.arrayActMap}})},IV71:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebpackInterface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"mixConfig",{enumerable:!0,get:function(){return o.default}}),t.default=void 0
var a=r(n("jeLk")),o=r(n("JPxj")),i=a.default
t.default=i},Ibie:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.patchWidgetSize=void 0
t.patchWidgetSize=function(e,t){var n,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:20
switch(e.name){case"status_bar":n=0
break
case"keyboard":case"tab_bar":n=t.height-e.height
break
case"navigation_bar":n=r
break
default:n=e.top}return e.top=n,a(e.name)&&(e.width=t.width),e}
var a=function(e){return["status_bar","keyboard","tab_bar"].includes(e)}},IdPL:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.STYLE_MAP=void 0
t.STYLE_MAP={design:{distanceMarks:{showStartAndEndBoundary:!1,dashed:!1,colorForLines:"#eb5648",colorForText:"#eb5648"},refRectBorder:{dashed:!1,colorForLines:"#eb5648"},verboseAuxiliaryLines:!1,auxiliaryLines:{dashed:!0,colorForLines:"#eb5648"}},preview:{distanceMarks:{showStartAndEndBoundary:!0,dashed:!0,colorForLines:"#ff7100"},refRectBorder:{dashed:!0,colorForLines:"#1e98ea"},verboseAuxiliaryLines:!0,auxiliaryLines:{dashed:!0,colorForLines:"#1e98ea"}}}},Ij3M:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ColorInfo=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=n("wYtL"),m=n("XrEr"),v=a(n("UbMB")),g=a(n("mfFm")),y=v.default.bind(g.default),b=function(e){function n(e){var t
return(0,o.default)(this,n),t=(0,l.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleClick",function(){t.setState(function(e){return{activeColor:e.colorList[e.index%4],index:e.index+1}})}),t.state={index:0,activeColor:e.stateColor,colorList:"transparent"===e.rgbaColor?Array(4).fill("transparent"):S(e.rgbaColor)||[]},t}return(0,c.default)(n,e),(0,i.default)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.stateColor
this.setState(function(e){return{activeColor:t}})}},{key:"render",value:function(){var e=this.state.activeColor,t=this.props,n=t.title,r=t.rgbaColor,a=y("panel","panel-bottom-8")
return f.default.createElement("div",{className:a,"data-value":n},f.default.createElement("div",{className:"panel-item panel-item-color item-flex-1"},f.default.createElement(h.Tooltip,{className:"panel-item-value textEllipsis",content:{click:I18N.preview_panel.copied},"data-type":"copy",arrowed:!1,"data-clipboard-text":e},e),f.default.createElement("div",{className:"panel-item-color-block",style:{backgroundColor:r},onClick:this.handleClick})))}}]),n}(f.PureComponent)
t.ColorInfo=b
var S=function(e){if(e)return[(0,m.getColorFromUnit)(e,"rgba"),(0,m.getColorFromUnit)(e,"rgb"),(0,m.getColorFromUnit)(e,"argb"),(0,m.getColorFromUnit)(e,"hex")]}
b.propTypes={rgbaColor:p.default.string.isRequired,stateColor:p.default.string,title:p.default.string}},Iusu:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0
var v=r(n("q1tI")),a=r(n("17x9")),g=n("wYtL"),y=n("RUem"),b=n("XrEr"),o=r(n("UbMB")),i=r(n("mfFm")),S=o.default.bind(i.default),l=function(e){var t=e.title,n=e.dataValue,r=void 0===n?[]:n,a=e.data,o=void 0===a?[]:a,i=e.text,l=e.color,u=e.className,c=e.colorUnit,s=e.first,d=(0,b.getColorFromUnit)(l,"rgba"),f=(0,b.getColorFromUnit)(l,c),p=0<r.length,h=4===r.length,m=S("panel","".concat(u),{"panel-bottom-8":!p,"panel-item-text":!!i,"shadow-panel":h})
return l?v.default.createElement(y.ColorInfo,{title:t,rgbaColor:d,stateColor:f}):v.default.createElement("div",{className:m,"data-value":t},i?v.default.createElement(g.Tooltip,{arrowed:!1,className:"panel-item item-flex-1",content:{click:I18N.preview_panel.copied},duration:1e3},v.default.createElement("pre",{"data-type":"copy","data-placement":"top","data-clipboard-text":i,className:"panel-item-value text-content",dangerouslySetInnerHTML:{__html:i}})):v.default.createElement("div",{className:"".concat(
o.length<2?"single-panel-box":"mult-panel-box")},(s?o.slice(0,1):o).map(function(e,t){return v.default.createElement(g.Tooltip,{key:t,arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:"panel-item","data-value":r[t]},v.default.createElement("div",{"data-type":"copy","data-clipboard-text":e,className:"panel-item-value"},e))})))};(t.Base=l).propTypes={title:a.default.string,data:a.default.array,dataValue:a.default.array,text:a.default.string,color:a.default.string,
colorUnit:a.default.string,first:a.default.bool,className:a.default.string}},J2m7:function(e,t,n){var r=n("XKAG")(n("UfWW"))
e.exports=r},JGuq:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}var r={objectSet:function(e,t,n){return e[t]!==n?i({},e,(o=n,(a=t)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)):e
var r,a,o},objectDelete:function(e,t){if(!(t in e))return e
var n=i({},e)
return delete n[t],n},objectMerge:function(e,t){for(var n in t){var r=t[n]
if(e[n]!==r)return i({},e,t)}return e},arraySet:function(e,t,n){if(e[t]===n)return e
var r=[].concat(o(e))
return r[t]=n,r},arrayDelete:function(e,t){return 0<=t&&t<=e.length-1?[].concat(o(e.slice(0,t)),o(e.slice(t+1))):e},arrayInsert:function(e,t,n){return t=Math.min(Math.max(t,0),e.length),[].concat(o(e.slice(0,t)),[n],o(e.slice(t)))},arrayPush:function(e,t){return[].concat(o(e),[t])},arrayUnshift:function(e,t){return[t].concat(o(e))},arrayPop:function(e){if(0===e.length)return e
var t=[].concat(o(e))
return t.pop(),t},arrayShift:function(e){if(0===e.length)return e
var t=[].concat(o(e))
return t.shift(),t},arrayConcat:function(e,t){return t&&t.length?[].concat(o(e),o(t)):e},arrayMatchPush:function(e,t){return e.includes(t)?e:[].concat(o(e),[t])},arrayMatchDelete:function(e,t){var n=e.indexOf(t)
return~n?[].concat(o(e.slice(0,n)),o(e.slice(n+1))):e},arrayMatchMove:function(e,t,n){t=Math.min(Math.max(t,0),e.length-1)
var r=e.indexOf(n)
return~r&&r!==t?r<t?[].concat(o(e.slice(0,r)),o(e.slice(r+1,t+1)),[n],o(e.slice(t+1))):[].concat(o(e.slice(0,t)),[n],o(e.slice(t,r)),o(e.slice(r+1))):e},arrayFindPush:function(e,t,n){return void 0===e.find(t)?[].concat(o(e),[n]):e},arrayFindDelete:function(e,t){var n=e.findIndex(t)
return~n?[].concat(o(e.slice(0,n)),o(e.slice(n+1))):e},arrayFindMove:function(e,t,n){var r=e.findIndex(t),a=e[r]
return~r&&r!==n?r<n?[].concat(o(e.slice(0,r)),o(e.slice(r+1,n+1)),[a],o(e.slice(n+1))):[].concat(o(e.slice(0,n)),[a],o(e.slice(n,r)),o(e.slice(r+1))):e},arrayFindSet:function(e,t,n){var r=e.findIndex(t)
if(!~r||e[r]===n)return e
var a=[].concat(o(e))
return a[r]=n,a}}
t.Operation=r},JPxj:function(e,t,n){"use strict"
function r(e,t,n){return n?t?e(t,n):n:t}function a(e,t){var n={}
function r(e,t){n[e]=t}for(var a in e)r(a,e[a])
for(var o in t)r(o,t[o])
return n}function o(e,t){return function(){return e.apply(void 0,arguments),t.apply(void 0,arguments)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={containerReducerMap:{},viewMap:{},sagaMap:{},extendCallback:null}
return e.forEach(function(e){t.containerReducerMap=r(a,t.containerReducerMap,e.containerReducerMap),t.viewMap=r(a,t.viewMap,e.viewMap),t.extendCallback=r(o,t.extendCallback,e.extendCallback),t.sagaMap=r(a,t.sagaMap,e.sagaMap)}),t}},JSCU:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("TSYQ")),m=a(n("ctY3")),v=function(e){function n(e){var t
return(0,o.default)(this,n),t=(0,l.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleChange",function(e){return t.setState({value:e})}),(0,d.default)((0,s.default)((0,s.default)(t)),"handleBlur",function(){""===t.state.value&&t.setState({value:t.initialValue}),t.props.onConfirm(t.state.value)}),t.state={value:e.value},t.initialValue=e.value,t}return(0,c.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,t=e.isEditing,n=e.className,
r=this.state.value
return p.default.createElement(m.default,{value:r,className:(0,h.default)("editable-span",n),editing:t,onBlur:this.handleBlur,onChange:this.handleChange})}}]),n}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{value:f.default.string,className:f.default.string,isEditing:f.default.bool,onConfirm:f.default.func})},JXIg:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=(0,n("WVP6").createStateStore)({teamCid:null,projectCid:null,screenCid:null,userRole:"guest"}),a=r.getState,o=r.setState,i={"current:set":(0,r.wrapEntry)(function(e,t,n){var r,a=t.dispatch,o=n.payload,i=o.project,l=o.screen,u=o.userCollaborator
a({type:"reducer:current:update",payload:{teamCid:i&&i.team_cid||null,projectCid:i&&i.cid||null,screenCid:l&&l.cid||null,userRole:(r=u&&u.role,c.has(r)?r:"guest")}})})},c=new Set(["owner","admin","editor","viewer"])
var l={entryMap:i,getState:a,setState:o}
t.default=l},JfQ8:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiveResourceError=t.RECEIVE_RESOURCE_ERROR=t.receiveResourceSuccess=t.RECEIVE_RESOURCE_SUCCESS=t.SET_VISIBILITY_SCREEN=void 0
var o=r(n("MVZn"))
t.SET_VISIBILITY_SCREEN="SET_VISIBILITY_SCREEN"
var i="RECEIVE_RESOURCE_SUCCESS"
t.RECEIVE_RESOURCE_SUCCESS=i
t.receiveResourceSuccess=function(e,t){var n=t.document,r=t.layers,a=t.artboard
return{type:i,payload:(0,o.default)({screenID:e},n,{layers:r,artboard:a})}}
var a="RECEIVE_RESOURCE_ERROR"
t.RECEIVE_RESOURCE_ERROR=a
t.receiveResourceError=function(e,t){return{type:a,payload:{screenID:e,error:t}}}},Juji:function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},KAy6:function(e,t,n){"use strict"
e.exports=n("IDhZ")},KHYK:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(n("pVnL")),l=r(n("lwsE")),o=r(n("W8MJ")),u=r(n("a1gu")),c=r(n("Nsbk")),s=r(n("7W2i")),d=r(n("PJYZ")),f=r(n("lSNA")),a=r(n("MVZn")),p=r(n("J4zp")),h=r(n("17x9")),m=r(n("q1tI")),v=r(n("HNPj")),g=n("/5+U"),y=r(n("dZ9F")),b=function(e){var t=e.kind?0:e.rotation,n=(0,g.getMinBoundingRect)((0,a.default)({},e,{rotate:t})),r=(0,p.default)(n,4)
return{top:r[0],left:r[1],width:r[2],height:r[3]}},S=function(e){function a(){var e,o;(0,l.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,u.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(o)),"renderValue",function(e){var t=o.props,n=t.ratio,r=t.distanceUnit,a=o.getValueRatio()
return m.default.createElement(y.default,(0,i.default)({ratio:n,unit:r,valueRatio:a},e))}),(0,f.default)((0,d.default)((0,d.default)(o)),"getValueRatio",function(){var e=o.props.selectedLayer,t=e.src_width,n=e.width
return t?t/n:1}),o}return(0,s.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.show,n=e.selectedLayer,r=e.hoveringLayer,a=e.screen
if(!t)return null
var o=b(n),i=r?b(r):{top:0,left:0,width:a.width,height:a.height}
return m.default.createElement(v.default,{baseRect:o,refRect:i,screen:a,renderValue:this.renderValue,theme:"preview"})}}]),a}(m.default.Component)
S.propTypes={show:h.default.bool,selectedLayer:h.default.object,hoveringLayer:h.default.object,screen:h.default.object}
var w=S
t.default=w},KKmY:function(e,t,n){},Kkl0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.enterLayer=t.ENTER_LAYER=t.activateLayer=t.ACTIVATE_LAYER=t.selectLayer=t.SELECT_LAYER=t.requestSelectLayer=t.REQUEST_SELECT_LAYER=void 0
var r="REQUEST_SELECT_LAYER"
t.REQUEST_SELECT_LAYER=r
t.requestSelectLayer=function(e){!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
return{type:r,payload:{layerID:e}}}
var a="SELECT_LAYER"
t.SELECT_LAYER=a
t.selectLayer=function(e){return{type:a,payload:{layerID:e}}}
var o="ACTIVATE_LAYER"
t.ACTIVATE_LAYER=o
t.activateLayer=function(e){return MB.event("ga","点击了 Layer 元素","运行页"),{type:o,payload:{layerID:e}}}
var i="ENTER_LAYER"
t.ENTER_LAYER=i
t.enterLayer=function(e){return{type:i,payload:{layerID:e}}}},KuHM:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),p=r(n("q1tI")),h=n("qNz0"),m=n("jT+R"),f=a(n("oJEp")),v=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.treeData,r=t.top,a=t.left,o=n.widget,i=o.mainState().cid,l=(0,m.getPanelTreeData)(o,n,i),u=o.v&&Link.find(o.link_cids),c=u?u.cid:"",
s=u&&"tap"!==u.gesture?u.gesture:"",d="ppanel panel".concat(u?" clickable":""),f=(0,h.getPanelStyle)(o,!0,r,a)
return e=o.multi_states?o.ct().homeScreen():o.mainState(),p.default.createElement("div",{"data-cid":o.cid,"data-link_cid":c,className:d,id:"panel".concat(o.cid,"p"),style:f},p.default.createElement(g,{panelCid:o.cid,screen:e,stateCid:i,widgetTreeData:l}),p.default.createElement("div",{className:"region gesture ".concat(s)}))}}]),t}(p.PureComponent)
t.default=v,(0,s.default)(v,"propTypes",{treeData:d.default.object,top:d.default.number,left:d.default.number})
var g=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.panelCid,n=e.screen,r=e.widgetTreeData,a="state".concat(t).concat(n.cid,"p"),o={backgroundImage:n.bgimage?"url(".concat(n.bgimage,")"):"",backgroundColor:n.bgcolor,width:n.w(),height:n.h()}
return p.default.createElement("div",{id:a,className:"pstate state","data-cid":n.cid,style:o},r.children.map(function(e){return p.default.createElement(f.default,{key:e.cid,treeData:e,offSetX:0,offSetY:0,isSnapshot:!0})}))}}]),t}(p.PureComponent);(0,s.default)(g,"propTypes",{panelCid:d.default.string,screen:d.default.object,widgetTreeData:d.default.object})},Kurm:function(e,t,n){e.exports={"full-screen-actions":"_2lLtO5YYxmdjnpavi3vbxH"}},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,
o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o
return-1}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,a=e.length
t<0&&(t=a<-t?0:a+t),(n=a<n?a:n)<0&&(n+=a),a=n<t?0:n-t>>>0,t>>>=0
for(var o=Array(a);++r<a;)o[r]=e[r+t]
return o}},L0cU:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("4dyd")),m=a(n("xtk/")),v=n("/N2d"),g=n("MURh"),y=function(e){function t(e){var n
return(0,o.default)(this,t),n=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(n)),"setContainerRef",function(e){return n.$container=e}),(0,d.default)((0,s.default)((0,s.default)(n)),"updateContainerRect",function(){return n.setState({containerRect:n.$container.getBoundingClientRect()})}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleScroll",function(){return n.updateContainerRect()}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleResize",function(){
return n.updateContainerRect()}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleScrollIntoView",function(e){var t=n.state.containerRect
n.$container.scrollTop+=e.top-t.top}),n.state={containerRect:null},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.updateContainerRect()}},{key:"render",value:function(){var n=this,e=this.props,t=e.screenList,r=e.projectToken,a=e.activeScreenCid,o=e.className,i=e.screenTimestampMap,l=e.onClickScreenItem,u=e.treeProps,c=e.editingCid,s=e.hoverCid,d=this.state.containerRect
return p.default.createElement(g.StyledThumbnailList,{ref:this.setContainerRef,className:o,onScroll:this.handleScroll},p.default.createElement("ol",{className:"thumbnail-list"},0===t.length&&p.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match),t.map(function(e,t){return p.default.createElement(m.default,{key:e.cid,screen:e,isEditing:e.cid===c,isHover:e.cid===s,projectToken:r,version:i[e.cid],canvasZoom:(0,v.getScreenThumbnailZoom)(e.width,e.height),isActive:e.cid===a,
containerRect:d,onActivate:l,scrollIntoView:n.handleScrollIntoView,treeProps:u})})),p.default.createElement(h.default,{onResize:this.handleResize}))}}]),t}(p.PureComponent);(t.default=y).propTypes={className:f.default.string,screenList:f.default.array,projectToken:f.default.string,editingCid:f.default.string,hoverCid:f.default.string,activeScreenCid:f.default.string,screenTimestampMap:f.default.object,onClickScreenItem:f.default.func,treeProps:f.default.object},y.defaultProps={screenTimestampMap:{}}},
LGYb:function(e,t,n){var p=n("1hJj"),h=n("jbM+"),m=n("Xt/L"),v=n("xYSL"),g=n("dQpi"),y=n("rEGp")
e.exports=function(e,t,n){var r=-1,a=h,o=e.length,i=!0,l=[],u=l
if(n)i=!1,a=m
else if(200<=o){var c=t?null:g(e)
if(c)return y(c)
i=!1,a=v,u=new p}else u=t?[]:l
e:for(;++r<o;){var s=e[r],d=t?t(s):s
if(s=n||0!==s?s:0,i&&d==d){for(var f=u.length;f--;)if(u[f]===d)continue e
t&&u.push(d),l.push(s)}else a(u,d,n)||(u!==l&&u.push(d),l.push(s))}return l}},LPEl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createStateStore=t.arrayMatchDelete=t.arrayMatchPush=t.objectMerge=void 0
var a=r(n("RIqP")),l=r(n("MVZn")),u=r(n("J4zp")),o=function(e,t){for(var n=Object.entries(t),r=0;r<n.length;r++){var a=(0,u.default)(n[r],2),o=a[0],i=a[1]
if(e[o]!==i)return(0,l.default)({},e,t)}return e}
t.objectMerge=o
var i=function(e,t){return e.includes(t)?e:(0,a.default)(e).concat([t])}
t.arrayMatchPush=i
var c=function(e,t){var n=e.indexOf(t)
return~n?(0,a.default)(e.slice(0,n)).concat((0,a.default)(e.slice(n+1))):e}
t.arrayMatchDelete=c
t.createStateStore=function(n){var r=[]
return{subscribe:function(e){r=i(r,e)},unsubscribe:function(e){r=c(r,e)},getState:function(){return n},setState:function(e){if((e=o(n,e))===n)return n
var t=n
return n=e,r.forEach(function(e){return e(n,t)}),n}}}},LVRM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.BasicAttributes=void 0
var u=r(n("q1tI")),a=r(n("17x9")),c=n("RUem"),o=function(e){var t=e.adapterLeft,n=e.adapterTop,r=e.adapterWidth,a=e.adapterHeight,o=e.opacity,i=e.radius,l=e.rotate
return u.default.createElement(c.WrapComponent,null,I18N.preview_panel.basic_attribute,t&&u.default.createElement(c.Base,{title:I18N.preview_panel.position,dataValue:[I18N.preview_panel._x,I18N.preview_panel._y],data:[t,n]}),r&&u.default.createElement(c.Base,{title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[r,a]}),l&&u.default.createElement(c.Base,{title:I18N.preview_panel.rotation,data:[l]}),i&&u.default.createElement(c.Base,{
title:I18N.preview_panel.border_radius,data:[i]}),o&&u.default.createElement(c.Base,{title:I18N.preview_panel.opacity,data:[o]}))};(t.BasicAttributes=o).propTypes={adapterLeft:a.default.string,adapterHeight:a.default.string,adapterTop:a.default.string,adapterWidth:a.default.string,opacity:a.default.oneOfType([a.default.string,a.default.bool]),rotate:a.default.oneOfType([a.default.string,a.default.bool]),radius:a.default.oneOfType([a.default.string,a.default.number])}},LbTH:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfItemTextIsNewVersion=void 0
t.checkIfItemTextIsNewVersion=function(e){return"rich_text"===e.name}},Lyer:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=a(n("pVnL")),p=a(n("QILm")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),h=a(n("lSNA")),o=a(n("17x9")),m=r(n("q1tI")),v=n("6XO9"),g=a(n("rwIS")),y=function(e){return MB.localStorageDelegate.setItem("guide_closed_".concat(e),!0)},b=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,h.default)((0,d.default)((0,d.default)(a)),"setGuideRef",function(e){return a.guide=e}),(0,h.default)((0,d.default)((0,d.default)(a)),"handleCloseGuideManually",function(){y(a.props.id)}),(0,h.default)((0,d.default)((0,d.default)(a)),"autoClose",function(){var e=a.props,t=e.duration,n=e.autoClose,r=e.id
e.isOpen&&t&&(a.timer=setTimeout(function(){n(),y(r)},t))}),a}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidUpdate",value:function(e){e.isOpen!==this.props.isOpen&&this.autoClose()}},{key:"componentWillUnmout",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,n=t.id,r=t.isOpen,a=t.children,o=t.localeKey,i=t.position,l=t.className,u=(0,p.default)(t,["id","isOpen","children","localeKey","position","className"])
if(e=n,"true"===MB.localStorageDelegate.getItem("guide_closed_".concat(e)))return a
var c=I18N.guide_base[o||n],s=c.header,d=c.content
return m.default.createElement(v.Guide,(0,f.default)({ref:this.setGuideRef,isOpen:r,position:i,onClose:this.handleCloseGuideManually,className:"".concat(g.default["guide-button"]," ").concat(l),header:s,guide:m.default.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),X:"right"},u),a)}}]),o}(m.PureComponent);(t.default=b).propTypes={id:o.default.string.isRequired,isOpen:o.default.bool,duration:o.default.number,localeKey:o.default.string,children:o.default.element,autoClose:o.default.func,
className:o.default.string,position:o.default.string},b.defaultProps={gotItText:I18N.guide_base.got_it}},M8nv:function(e,t,n){e.exports=n("eaeY")},MGhH:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.footerFilter=t.headerFilter=void 0
var a=r(n("MVZn")),o=n("0k54")
t.headerFilter=function(e,t){var n=e.children.filter(function(e){return 0===e.widget.primary_fixed&&("group"!==e.type?e.widget.t()<t:(0,o.getTreeBoundingRect)(e).minY<t)})
return(0,a.default)({},e,{children:n})}
t.footerFilter=function(e,n,r){var t=e.children.filter(function(e){if(0!==e.widget.primary_fixed)return!1
var t=n-e.widget.b()
return"group"!==e.type?t<r:n-(0,o.getTreeBoundingRect)(e).maxY<r})
return(0,a.default)({},e,{children:t})}},MURh:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledThumbnailList=void 0
var a=r(n("vOnD")),o=n("mggN"),i=a.default.div.withConfig({displayName:"styles__StyledThumbnailList",componentId:"sc-8dwe2g-0"})([
"width:100%;height:100%;overflow-x:hidden;overflow-y:auto;.thumbnail-list{padding:2px 0 0 2px;display:flex;flex-wrap:wrap;width:calc(100% + 15px);color:#415058;.thumbnail-item{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:85px;position:relative;margin-right:10px;margin-bottom:10px;cursor:pointer;.Tooltip{width:100%;}.image-wrapper{width:100%;height:93px;padding:6px;background-color:",";border:1px solid ",
";border-radius:2px;display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-out;img{max-width:100%;max-height:100%;pointer-events:none;}.toggle-comment{position:absolute;right:0;top:0;line-height:10px;transform:none;}.actions{display:none;position:absolute;z-index:1;top:4px;right:4px;height:24px;justify-content:space-around;align-items:center;&.is-hover{display:flex;}}&:hover,&.hover{border-width:2px;border-color:#79baff;padding:5px;.actions{display:flex;}}}.screen-name{height:26px;max-width:100%;line-height:26px;"
,";}&.active .image-wrapper{border-width:1px;padding:6px;border-color:#1e98ea;box-shadow:0 0 1px 0 rgba(34,162,237,0.66);}}}"],function(e){return e.theme.thumbnail.bg},function(e){return e.theme.thumbnail.border_color},o.textEllipsis)
t.StyledThumbnailList=i},Mn07:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("RIqP")),p=a(n("17x9")),h=r(n("q1tI")),m=a(n("L0cU")),v=function(e){function t(e){var a
return(0,o.default)(this,t),a=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(a)),"handleActivateScreen",function(e){var t=a.props,n=t.activeCid,r=t.dispatch
e!==n&&r({type:"entry:sync-runner:set-screen",payload:{cid:e}})}),a.treeProps={renderItem:e.renderCommentIcon},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCid,n=function r(e,a,o){var i=o[e]?[o[e]]:[]
return a[e]&&a[e].forEach(function(e){var t=e.cid,n=r(t,a,o)
i.push.apply(i,(0,f.default)(n))}),i}("root",e.screenTreeMap,e.screenDataMap)
return h.default.createElement(m.default,{screenList:n,projectToken:MB.currentProject.access_token,activeScreenCid:t,onClickScreenItem:this.handleActivateScreen,treeProps:this.treeProps})}}]),t}(h.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{activeCid:p.default.string,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},MzIM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("pVnL")),i=r(n("QILm")),l=r(n("lwsE")),u=r(n("W8MJ")),c=r(n("a1gu")),s=r(n("Nsbk")),d=r(n("7W2i")),f=r(n("PJYZ")),p=r(n("lSNA")),h=r(n("q1tI")),o=r(n("17x9")),m=n("6XO9"),v=function(e){function o(){var e,t;(0,l.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(r))),(0,p.default)((0,f.default)((0,f.default)(t)),"handleChange",function(e){return t.props.onChange(e,t.props.attr)}),t}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,n=(e.attr,e.size),r=(e.onChange,(0,i.default)(e,["forwardedRef","attr","size","onChange"]))
return h.default.createElement(m.Select,(0,a.default)({},r,{ref:t,size:n,onChange:this.handleChange}))}}]),o}(h.default.PureComponent);(0,p.default)(v,"propTypes",{forwardedRef:o.default.object,attr:o.default.string,size:o.default.oneOf(["regular","small"]),onChange:o.default.func}),(0,p.default)(v,"defaultProps",{size:"small"})
var g=h.default.forwardRef(function(e,t){return h.default.createElement(v,(0,a.default)({forwardedRef:t},e))})
t.default=g},"N/gT":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("yLV6")),l=window.Shake,u=function(){function e(){(0,a.default)(this,e),this.hightTimer=null}return(0,o.default)(e,[{key:"init",value:function(e){var t=this,n=new i.default(e,{touchAction:"auto",inputClass:MB.isMobile()?i.default.TouchInput:null})
n.get("swipe").set({direction:i.default.DIRECTION_ALL,velocity:.05,threshold:50}),n.on("swipeleft",function(e){t.prepareJump(e,"left")}),n.on("swiperight",function(e){t.prepareJump(e,"right")}),n.on("swipeup",function(e){t.prepareJump(e,"up")}),n.on("swipedown",function(e){t.prepareJump(e,"down")}),n.on("press",function(e){t.prepareJump(e,["hold","longpress"])}),n.on("tap",function(e){1===e.tapCount&&t.prepareJump(e,["tap","click"]),2===e.tapCount&&(MB.runner.eventBucket.resetCoolDown(),t.prepareJump(e,[
"dtap","dbclick"]))}),new l({threshold:15}).start(),window.addEventListener("shake",function(e){t.prepareJump(e,"shake")},!1),this.hammertime=n}},{key:"prepareJump",value:function(e,t){var n=MB.runner,r=n.eventBucket,a=n.runnerUtil,o=n.timerHandler,i=n.currentMenu
if(!a.getIsImmersive()){var l=o.getIsPageTimerFired()
if(r.isCoolDown()&&!l){var u,c=$(e.target).closest(".clickable"),s=$(e.target).closest(".ppanel")
if(u=t.includes("shake")?i?$("#pscreen".concat(i)):$(".pcanvas.active"):$(e.target).closest(".pcanvas"),i&&u.data("cid")!==i)return MB.runner.closeMenu()
if(s.length){if(this.panelEventHandler(e,t))return}else if(c.length){var d=Link.find(c.attr("data-link_cid"))
if(d&&t.includes(d.gesture))return MB.runner.j(d)}var f=u.data("cid"),p=Screen.find(f)
if(p){var h=[]
Link.records.forEach(function(e){e.widget_cids===p.cid&&e.sourcestate_cid===p.state_cid&&t.includes(e.gesture)&&h.push(e)})
var m=p.globalLinks(p.state_cid).filter(function(e){return t.includes(e.gesture)})
m.length?MB.runner.j(m[0]):t.includes("hold")&&MB.messageBucket&&!window.parent.webkit?MB.messageBucket.send("settings"):MB.runner.runnerUtil.getIsHighlight()&&this.highlightClickables()}}}}},{key:"panelEventHandler",value:function(e,r){var t=$(e.target).closest(".clickable"),n=$(e.target).closest(".ppanel"),a=n.find(".pstate.active"),o=n.data("cid"),i=Panel.find(o)
if(t.length){var l=Link.find(t.attr("data-link_cid"))
if(!l)return!1
if("prev"===l.target_cid)return MB.runner.j(l),!0
if(r.includes(l.gesture)){if(n[0]===t[0])MB.runner.j(l)
else{var u=Screen.find(l.target_cid)
if(u&&u.project_cid!==i.template_cid)MB.runner.j(l)
else{if(MB.runner.timerHandler.getIsPanelTimerFired(i.cid))return!1
l.targetstate_cid?MB.runner.chameleonTransition(o,l):MB.runner.panelScreenTransition(i.cid,l)}}return!0}}if(MB.runner.timerHandler.getIsPanelTimerFired(i.cid))return!1
var c=Screen.find(a.data("cid"))
if(!c)return!1
var s=null
return c.cwidgets().forEach(function(e){if(!s&&"pg"===e.name){var t=Widgetstate.find(c.state_cid+e.cid)||e,n=Link.find(t.link_cids)
n&&r.includes(n.gesture)&&(n.targetstate_cid?MB.runner.chameleonTransition(o,n):MB.runner.panelScreenTransition(i.cid,n),s=!0)}}),!!s}},{key:"highlightClickables",value:function(){var e=$(".pcanvas.active .region")
e.show(),$(".pcanvas.active .pg").css({display:"flex",opacity:.8}),this.hightTimer=setTimeout(function(){e.hide(),$(".pcanvas.active .pg").css("opacity","0").hide()},400)}},{key:"setupPageGesture",value:function(e){var t=[]
e.clinks().forEach(function(e){"left"!==e.gesture&&"right"!==e.gesture||-1===t.indexOf("pan-y")&&t.push("pan-y"),"up"!==e.gesture&&"down"!==e.gesture||-1===t.indexOf("pan-x")&&t.push("pan-x")})
var n=t.length?t.join(" "):"auto"
this.hammertime.touchAction.actions=n,$(".pcanvas.active .widgets").css("touch-action",n)}}]),e}()
t.default=u},NYM8:function(e,t,n){},NcbO:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("ibhU")),m=a(n("UbMB")).default.bind(h.default),v=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleBack",function(){return t.props.dispatch({type:"entry:runner:back-to-prev-page"})}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props.runnerState,i=e.activeCid,t=e.transition,n=e.history,r=e.screenInfoMap
if(!i)return null
var a=Screen.find(i)
return p.default.createElement("div",{className:m("runner-state-panel")},p.default.createElement("div",{className:"debug-title"},p.default.createElement("button",{onClick:this.handleBack},"上一页"),p.default.createElement("span",null,"当前页面: ".concat(a.name))),p.default.createElement("div",{className:"debug-info"},p.default.createElement("div",null,"访问历史:"),n.map(function(e){return p.default.createElement("span",{key:e},Screen.find(e).name)})),p.default.createElement("div",{className:"debug-info"},
p.default.createElement("div",null,"页面切换动画:"),p.default.createElement("span",null,"name: ".concat(t.name)),p.default.createElement("span",null,"duration: ".concat(t.duration)),p.default.createElement("span",null,"delay: ".concat(t.delay))),p.default.createElement("ul",null,Object.values(r).map(function(e){var t=e.cid,n=e.stateCid,r=e.transition,a=e.panelInfoMap,o=e.chameleonInfoMap
return p.default.createElement("li",{key:t,className:m({highlight:t===i})},p.default.createElement("span",null,Screen.find(t).name),p.default.createElement("span",null,"当前状态: ".concat(n)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(r))),p.default.createElement(g,{panelInfoMap:a}),p.default.createElement(y,{chameleonInfoMap:o}))})))}}]),o}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{runnerState:o.default.object,dispatch:o.default.func})
var g=function(e){var t=e.panelInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"green",marginTop:10}},"页面母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,n=e.activeScreenCid,r=e.transition,a=e.panelScreens
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版页面: ".concat(n)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(r))),p.default.createElement("span",null,"已加载页面"),p.default.createElement("ul",null,a.map(function(e){return p.default.createElement("li",{key:e,className:m({active:e===n})},e)})))})))},y=function(e){var t=e.chameleonInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"blue",marginTop:10}},"状态母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,n=e.stateCid,r=e.transition
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版状态: ".concat(n)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(r))))})))}},Nu6V:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSliceZip=t.default=void 0
var r=n("t3Un")
t.default=function(e){return(0,r.requestJSON)("".concat("/api/v2","/sketch/slices.json?project_cid=").concat(e))}
t.fetchSliceZip=function(e){return(0,r.requestJSON)("".concat("/api/v2","/sketch/slices/build_zip.json?project_cid=").concat(e),null,{method:"POST"})}},NyBV:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return MB.localStorageDelegate.getItem(m)?null:p.default.createElement(o,e)}
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=n("6XO9")
n("bTYh")
var o=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"state",{isOpen:!0}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.setState({isOpen:!1}),MB.localStorageDelegate.setItem(m,!0)},4e3)}},{key:"render",value:function(){var e=this.state.isOpen
return p.default.createElement(h.Guide,{className:"commercial-font-tip",isOpen:e,noCloseBtn:!0,guide:I18N.commercial_font_tip_preview,X:"center",Y:"top"})}}]),o}(p.Component)
var m="commercialFontTipShownInPreview"},NyG0:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9"),v=n("wYtL"),g=a(n("m48X")),y=a(n("i6OX")),b=a(n("UbMB")),S=a(n("a1Ia")),w=b.default.bind(S.default),C=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,u.default)(this,(0,c.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(r)),"updateSubToolbar",function(e){r.props.dispatch({type:"reducer:preview-toolbar:update",payload:(0,o.default)({},e)})}),(0,f.default)((0,d.default)((0,d.default)(r)),"pickColor",function(e){e.nativeEvent.stopImmediatePropagation(),MB.event("ga","在标注模式中使用了自定义取色","运行页"),r.updateSubToolbar({isShowColorPicker:!0,showLayerList:!1,isSelectLayer:!1})}),(0,f.default)((0,d.default)((0,
d.default)(r)),"updateDeviceUnit",function(e){var t=r.props.emPixel,n=O(e,t)
r.updateSubToolbar(n?{unit:e,ratio:n}:{unit:e}),MB.event("ga","在".concat(e,"下切换倍率为").concat(n),"运行页")}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateLanguage",function(e){MB.event("ga","代码切换".concat(e),"运行页"),r.updateSubToolbar({language:e})}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateColorUnit",function(e){r.updateSubToolbar({colorUnit:e})}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateEmPixel",function(e){var t=Number(e)
r.updateSubToolbar({emPixel:t,ratio:t}),r.setState({customEmPixel:""})
var n=r.props.unit
MB.event("ga","在".concat(n,"下切换倍率为").concat(t),"运行页")}),(0,f.default)((0,d.default)((0,d.default)(r)),"onTypingEmPixel",function(e){if(e){r.setState({customEmPixel:e}),r.updateSubToolbar({emPixel:e,ratio:e})
var t=r.props.unit
MB.event("ga","在".concat(t,"在设置自定义倍率").concat(e),"运行页")}}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleMobileChange",function(e){var t=r.props.unit
r.updateSubToolbar({ratio:Number(e)}),MB.event("ga","在".concat(t,"下切换倍率为").concat(e),"运行页")}),r.state={showLogin:!1,customEmPixel:""},r}return(0,s.default)(t,e),(0,l.default)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.unit
this.props.unit!==t&&t===E&&this.updateSubToolbar({ratio:1})}},{key:"render",value:function(){var e=this.props,t=e.unit,n=e.emPixel,r=e.ratio,a=e.language,o=e.isShowColorPicker,i=e.colorUnit,l=e.isLogin,u=this.state.customEmPixel,c=t===_||t===k,s=t===E,d=t===_?I:N,f=[{value:10,label:"10px"},{value:12,label:"12px"},{value:14,label:"14px"},{value:16,label:"16px"},{value:n,label:"".concat(n,"px")},p.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},p.default.createElement(
m.InputNumber,{size:"small",min:1,max:99,precision:0,value:u,placeholder:I18N.custom,onChange:this.onTypingEmPixel}))]
return p.default.createElement("div",{className:w("sub-toolbar","preview-sub-toolbar")},p.default.createElement("div",{className:"mode"},p.default.createElement(y.default,{name:"cursor",type:"dora",className:(0,m.trimList)(["cursor",!o&&"is-active"])}),p.default.createElement(v.Tooltip,{arrowed:!0,position:"bottom",duration:1500,className:(0,m.trimList)(["picker",o&&"is-active"]),tipClassName:"marign-top-20",content:{click:l?null:I18N.preview.guide_login,hover:I18N.preview.color_picker}},
p.default.createElement(y.default,{name:"tube",type:"dora",onClick:this.pickColor}))),p.default.createElement("div",{className:"param"},p.default.createElement(g.default,{className:"color-unit",menuClassName:"PreviewSubToolbarSelectMenu",value:i,optionList:M,onChange:this.updateColorUnit}),p.default.createElement(g.default,{menuClassName:"PreviewSubToolbarSelectMenu",placeholder:" ",optionList:T,value:a,onChange:this.updateLanguage}),p.default.createElement(g.default,{className:"device-unit",
menuClassName:"PreviewSubToolbarSelectMenu",optionList:x,value:t,onChange:this.updateDeviceUnit}),c?p.default.createElement(g.default,{menuClassName:"PreviewSubToolbarSelectMenu",optionList:d,value:r,onChange:this.handleMobileChange}):s?p.default.createElement("span",{className:"px-ratio"},"@1x"):p.default.createElement(g.default,{className:"em-pixel",menuClassName:"PreviewSubToolbarSelectMenu scale-select-menu",optionList:f,value:n,onChange:this.updateEmPixel})))}}]),t}(p.PureComponent)
t.default=C,(0,f.default)(C,"propTypes",{unit:h.default.string,language:h.default.string,ratio:h.default.number,colorUnit:h.default.string,isShowColorPicker:h.default.bool,emPixel:h.default.number,isLogin:h.default.bool,dispatch:h.default.func})
var E="px",k="pt",_="dp",x=[E,"em","rem",_,k],T=[{value:"swift",label:"Swift"},{value:"android",label:"Android"},{value:"css",label:"CSS"},{value:"less",label:"Less"},{value:"sass",label:"Sass"},{value:"stylus",label:"Stylus"}],M=[{value:"hex",label:"Hex"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"argb",label:"ARGB"}],N=[1,2,3].map(function(e){return{value:e,label:"@".concat(e,"x")}}),I=[.75,1,1.5,2,3,4].map(function(e){return{value:e,label:"@".concat(e,"x")}}),O=function(e,t){
return"em"===e||"rem"===e?t:1}},O7RO:function(e,t,n){var o=n("CMye"),i=n("7GkX")
e.exports=function(e){for(var t=i(e),n=t.length;n--;){var r=t[n],a=e[r]
t[n]=[r,a,o(a)]}return t}},OBS2:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}()
function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function(t,n){return n.forEach(function(e){t.has(e)&&console.error("duplicate name in set",t,n,e),t.add(e)}),t},o=function(e){return n="toStructJSON",(t=e)instanceof Object&&n in t?e.toStructJSON():e
var t,n},l=function(e,t){return console.error("DEFAULT_REDUCER",e,t),e},m=function(){function r(e,t,n){p(this,r),this.name=e,this.struct=t,this.actMap=n,this.initialState=null,this.acceptNameSet=null,this.actionReducer=null,this.structReducer=null,this.reducer=null}return a(r,[{key:"getActionReducer",value:function(){var o=this.actMap
return function(e,t){var n=t.type,r=t.payload,a=o[n]
return a?a(e,r):e}}},{key:"getReducer",value:function(){var n=this.name,r=this.initialState,a=this.acceptNameSet,o=this.actionReducer,i=this.structReducer,l=function(e,t){return void 0!==t.type&&t.name===n?o(e,t):i(e,t)}
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1]
return a.has(t.name)?void 0!==t.batch&&t.name===n?t.batch.reduce(l,e):l(e,t):e}}},{key:"toStructJSON",value:function(){return o(this.struct)}}]),r}(),i=function(e){function s(e,t,n){p(this,s)
var r=f(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,t,n)),a={},o=new Set
o.add(r.name)
var i=[]
for(var l in r.struct)if(r.struct.hasOwnProperty(l)){var u=r.struct[l],c=u instanceof m
a[l]=c?u.initialState:u,c&&(h(o,u.acceptNameSet),i.push(l))}return r.initialState=a,r.acceptNameSet=o,r.structReducer=s.getStructReducer(i,r.struct),r.actionReducer=r.getActionReducer(),r.reducer=r.getReducer(),r}return r(s,m),a(s,[{key:"toStructJSON",value:function(){return function(e,t){var n={}
for(var r in e)n[r]=t(e[r],r)
return n}(this.struct,o)}}],[{key:"getStructReducer",value:function(c,s){return function(e,t){for(var n=!1,r={},a=0;a<c.length;a++){var o=c[a],i=s[o],l=e[o],u=i.reducer(l,t)
r[o]=u,n=n||u!==l}return n?d({},e,r):e}}}]),s}(),u=function(e){function c(e,t,n){p(this,c)
var r=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e,t,n)),a=r.struct[0],o=a instanceof m,i=new Set
return i.add(r.name),r.initialState=[],r.acceptNameSet=i,r.structReducer=o?c.getStructReducer(a):l,r.actionReducer=r.getActionReducer(),r.reducer=r.getReducer(),r}return r(c,m),a(c,[{key:"toStructJSON",value:function(){return this.struct.map(o)}}],[{key:"getStructReducer",value:function(u){return function(a,n){var o=!1,i=null
function r(e,t,n){var r=u.reducer(e,t)
e!==r&&(o||(i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(a))),i[n]=r,o=!0)}if(void 0!==n.index)r(a[n.index],n.payload,n.index)
else if(void 0!==n.filter){var l=c.getFilter(n.filter)
l&&a.forEach(function(e,t){return l(e,t)&&r(e,n.payload,t)})}return o?i:a}}},{key:"getFilter",value:function(e){switch(e.type){case"key-value":var n=e.key,r=e.value
return function(e,t){return e[n]===r}}return null}}]),c}()
t.Scheme=m,t.ObjectScheme=i,t.ArrayScheme=u},OVdA:function(e,t,n){e.exports={"text-wrapper":"_2Q7780091rmwUdJheR5GPh","text-no-editing":"_1KyFLtyjq2MMPQk1NN80C7"}},P3rE:function(e,t,n){},PYuP:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),i=a(n("pVnL")),l=a(n("MVZn")),s=a(n("lwsE")),c=a(n("W8MJ")),d=a(n("a1gu")),f=a(n("Nsbk")),p=a(n("7W2i")),h=a(n("PJYZ")),m=a(n("lSNA")),v=r(n("q1tI")),g=a(n("17x9")),y=n("6XO9"),b=n("wCGR"),S=n("7Qib"),w=n("nLLt"),C=n("XkTy"),E=n("rbsZ"),k=n("zAG7")
n("mnpx")
var _=I18N.open_parenthesis+I18N.pending+I18N.close_parenthesis,x={user:0,owner:1,admin:2,editor:3,viewer:4},T=function(e){var t=e.host,n=e.userRole
return(t.isTeam()&&(0,w.PermissionCheck)("team-collaborator-update","admin",n)?["viewer","editor","admin"]:["viewer","editor"]).map(function(e){return{value:e,label:"".concat(I18N.roles[e]).concat(I18N.colon).concat(I18N.roles[e+"_desc"])}})},M=function(e,t){var n=x[e.user_id===MB.user.id?"user":e.role],r=x[t.user_id===MB.user.id?"user":t.role]
return n!==r?n-r:e.name&&t.name?e.name.localeCompare(t.name):!e.name&&t.name?1:e.name&&!t.name?-1:e.email.localeCompare(t.email)},N=function(e){function o(){var e,t;(0,s.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,d.default)(this,(e=(0,f.default)(o)).call.apply(e,[this].concat(r))),(0,m.default)((0,h.default)((0,h.default)(t)),"onChangeRole",function(e){t.props.onChangeRole({collaborator:t.props.collaborator,role:e}),t.forceUpdate()}),(0,m.default)((0,h.default)((0,h.default)(t)),"onDeleteCollaborator",function(){return t.props.onDeleteCollaborator(t.props.collaborator)}),t}return(0,p.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e,t,n,r,a=this.props,o=a.collaborator,i=a.host,
l=a.userRole,u=o.avatar,c=o.name,s=o.email,d=o.role,f=T({host:i,userRole:l}),p=(t=(e={host:i,collaborator:o,userRole:l}).host,n=e.collaborator,r=e.userRole,(0,w.PermissionCheck)(t.isTeam()&&"team","collaborator-update",n.role,r))
return v.default.createElement("li",{className:"collaborator"},v.default.createElement("div",{className:"user"},v.default.createElement("img",{className:"avatar",src:u}),v.default.createElement("span",{className:"user-name"},c||s),!c&&v.default.createElement("span",{className:"pending"},_)),p?v.default.createElement(y.Select,{unstyled:!0,size:"small",optionList:f,value:d,onChange:this.onChangeRole}):v.default.createElement("span",{className:"role"},I18N.roles[d]),p&&v.default.createElement(y.Button,{
type:"text",size:"small",className:"delete",onClick:this.onDeleteCollaborator},I18N.delete))}}]),o}(v.PureComponent);(0,m.default)(N,"propTypes",{host:g.default.object,userRole:g.default.any,collaborator:g.default.object,onChangeRole:g.default.func,onDeleteCollaborator:g.default.func})
var I=function(e){function a(e){var c;(0,s.default)(this,a),c=(0,d.default)(this,(0,f.default)(a).call(this,e)),(0,m.default)((0,h.default)((0,h.default)(c)),"errorMsg",function(){var e=c.props.host,t=""
if(e&&e.collaborators().length>=e.limitation.collaborators+1){var n=e.limitation.collaborators?"collaborators":"cant_invite",r=e.owner_id==MB.user.id?"user":e.isTeam()?"team":"project",a=e.isTeam()?"renew":"upgrade"
t=MB.renewMsg&&MB.renewMsg(n,{role:r,action:a,collaborators:e.limitation.collaborators,plan:e.owner_plan})}return t}),(0,m.default)((0,h.default)((0,h.default)(c)),"updateComponent",function(){c.forceUpdate(),MB.webpackInterface&&MB.webpackInterface.refreshAll(),MB.AutoSaver&&MB.AutoSaver.triggerSave()}),(0,m.default)((0,h.default)((0,h.default)(c)),"focusOnInput",function(){return setTimeout(function(){var e=document.querySelector('.collaborator-modal input[type="email"]')
e&&e.focus()},100)}),(0,m.default)((0,h.default)((0,h.default)(c)),"updateEmail",function(e){var t=e.target.value
return c.updatePromptList(t.trim().toLowerCase())}),(0,m.default)((0,h.default)((0,h.default)(c)),"updateRole",function(n){return c.setState(function(e){var t=e.formData
return{formData:(0,l.default)({},t,{role:n})}})}),(0,m.default)((0,h.default)((0,h.default)(c)),"updatePromptList",function(n){if(n!==c.state.email){c.promptMapCached||(c.dedupEmailSetCached=new Set(c.props.host.collaborators().map(function(e){return e.email.toLowerCase()})),c.promptMapCached=Collaborator.all().filter(function(e){var t=e.cid,n=e.user_id,r=e.email
return!(n===MB.user.id||t.startsWith("co_MOCK_c")||t.startsWith("co_MOCK_t")&&!t.startsWith("co_MOCK_te")||c.dedupEmailSetCached.has(r.toLowerCase()))}).reduce(function(e,t){return t.name&&(e[t.name.toLowerCase()]=t),t.email&&(e[t.email.toLowerCase()]=t),e},{}))
var e=n&&new RegExp(n,"i"),t=new Set(c.dedupEmailSetCached),r=new Set
for(var a in c.promptMapCached){if(10<=r.size)break
var o=c.promptMapCached[a],i=o.email.toLowerCase()
e&&!e.test(a)||!i||t.has(i)||(t.add(i),r.add(o))}c.setState(function(e){var t=e.formData
return{formData:(0,l.default)({},t,{email:n}),isPromptListOpen:!0,promptList:Array.from(r)}})}}),(0,m.default)((0,h.default)((0,h.default)(c)),"showPromptList",function(){return c.updatePromptList(c.state.formData.email)}),(0,m.default)((0,h.default)((0,h.default)(c)),"hidePromptList",function(){return setTimeout(function(){c.dedupEmailSetCached=null,c.promptMapCached=null,c.setState({isPromptListOpen:!1})},100)}),(0,m.default)((0,h.default)((0,h.default)(c)),"createOnClickPromptListItemHandler",function(n
){return function(){return c.setState(function(e){var t=e.formData
return{formData:(0,l.default)({},t,{email:n}),promptList:[]}})}}),(0,m.default)((0,h.default)((0,h.default)(c)),"renderPromptList",function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=c.state.promptList
return e=e||0===t.length,v.default.createElement("ul",(0,i.default)({className:"prompt-list"},(0,S.setHidden)(e)),t.map(function(e){return v.default.createElement("li",{key:e.email,onMouseDown:c.createOnClickPromptListItemHandler(e.email)},v.default.createElement("img",{className:"avatar",src:e.avatar}),v.default.createElement("span",{className:"user-name"},e.name||e.email),e.name?v.default.createElement("span",{className:"user-email"},e.email):v.default.createElement("span",{className:"pending"},_))}))}),(
0,m.default)((0,h.default)((0,h.default)(c)),"onInvite",function(){var e=c.props.host,t=c.state.formData,n=t.email,r=t.role
MB.event("zhuge","我的团队-邀请团队成员",{"成员类型":r,"邮箱":n})
var a=e.limitation,o=void 0===a?MB.user.limitation:a,i=e.collaborators(),l=void 0!==i.find(function(e){return e.email===n}),u=n&&k.EMAIL_REG.test(n)?n===MB.user.email?I18N.cant_invite_yourself:l?I18N.already_invited:i.length>o.collaborators?c.errorMsg():null:I18N.invalid_email
u?(c.focusOnInput(),c.setState({errorMsg:u,promptPricing:i.length>o.collaborators})):(c.createCollaborator({email:n,role:r}),c.setState({formData:{email:"",role:"viewer"},promptPricing:!0}))}),(0,m.default)((0,h.default)((0,h.default)(c)),"createCollaborator",function(e){var t=e.email,n=e.role,r=c.props.host,a=r.isTeam(),o=new Collaborator({email:t,role:n,cid:"co".concat(Math.uuid(10,16)).concat((new Date).valueOf()),avatar:"/images/avatar.png"})
Object.assign(o,{team_cid:a&&r.cid,project_cid:!a&&r.cid}),o.lsave(),c.updateComponent()}),(0,m.default)((0,h.default)((0,h.default)(c)),"onChangeRole",function(e){var t=e.collaborator,n=e.role,r=c.props,a=r.host,o=r.userRole,i=a.isTeam()
!(0,w.PermissionCheck)(i&&"team","collaborator-update",[t.role,n],o)||(Object.assign(t,{role:n}),t.lsave(),c.updateComponent())}),(0,m.default)((0,h.default)((0,h.default)(c)),"onDeleteCollaborator",function(){var t=(0,o.default)(u.default.mark(function e(t){var n,r,a,o,i,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.props,r=n.host,a=n.userRole,o=n.openAccountConfirmAsync,i=r.isTeam(),!(0,w.PermissionCheck)(i&&"team","collaborator-delete",t.role,a))return e.abrupt("return")
e.next=5
break
case 5:return l=v.default.createElement(b.ConfirmMsg,{variableMap:{verb:"delete",noun:"teamMember",ugn:v.default.createElement(y.User,{name:t.name||t.email,withQuote:!0,withQuestionMark:"en"===window.MBLocale})}}),e.next=8,(o||C.confirmAsync)({title:I18N.del_collaborator_title,desc:l})
case 8:if(!e.sent){e.next=12
break}t.ldestroy(),c.updateComponent(),c.setState({errorMsg:null})
case 12:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()),c.dedupEmailSetCached=null,c.promptMapCached=null
var t=!(0,w.PermissionCheck)(e.host.isTeam()&&"team","collaborator-create","viewer",e.userRole),n=t?I18N.owner_only:c.errorMsg(),r=!t
return c.state={formData:{email:"",role:"viewer"},promptList:[],isPromptListOpen:!1,errorMsg:n,promptPricing:r},c}return(0,p.default)(a,e),(0,c.default)(a,[{key:"componentDidUpdate",value:function(e){!e.isOpen&&this.props.isOpen&&this.focusOnInput()}},{key:"render",value:function(){var e,t,n,r,a=this,o=this.props,i=o.isOpen,l=o.onClose,u=o.host,c=o.userRole,s=this.state,d=s.formData,f=s.errorMsg,p=s.isPromptListOpen,h=s.promptPricing,m=T({host:u,userRole:c})
return v.default.createElement(y.Modal,{isOpen:i,title:I18N.manage_collaborators,className:"collaborator-modal",onClose:l},(t=(e={host:u,userRole:c,collaborator:{role:"viewer"}}).host,n=e.collaborator,r=e.userRole,(0,w.PermissionCheck)(t.isTeam()&&"team","collaborator-create",n.role,r)&&v.default.createElement("div",{className:"add-via-email"},v.default.createElement("input",{type:"email",placeholder:I18N.email_placeholder,onChange:this.updateEmail,onClick:this.showPromptList,onBlur:this.hidePromptList,
value:d.email,autoComplete:"off"}),v.default.createElement(y.Select,{unstyled:!0,size:"small",optionList:m,value:d.role,onChange:this.updateRole}),v.default.createElement(y.Button,{type:"primary",size:"small",isDisabled:!d.email,onClick:this.onInvite},I18N.invite),this.renderPromptList(!p))),f&&v.default.createElement("div",{className:"error-msg ".concat(h?"has-prompt-pricing-btn":"")},v.default.createElement("span",null,f),h&&v.default.createElement("button",{onClick:E.goToPricingPage},I18N.check_pricing))
,v.default.createElement("ul",{className:"collaborator-list"},u.collaborators().sort(M).map(function(e){return v.default.createElement(N,{key:e.email,host:u,userRole:c,collaborator:e,onChangeRole:a.onChangeRole,onDeleteCollaborator:a.onDeleteCollaborator})})))}}]),a}(v.PureComponent)
t.default=I,(0,m.default)(I,"propTypes",{isOpen:g.default.bool,onClose:g.default.func.isRequired,host:g.default.object,userRole:g.default.any,openAccountConfirmAsync:g.default.func})},PqLM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.lineIsParallelWithAxis=t.getLineAttrsAfterRotate=t.getLineAttrsAsWidget=t.getLineAttrsAfterUngroup=t.getVectorInOtherSystem=t.degreeToRadians=t.getLength=t.getAngle=t.getLineAngle=t.getLineGeneralInfo=void 0
var N=r(n("J4zp")),k=function(e){e.top,e.left
var t=e.width,n=e.height,r=e.bs,a=e.points,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=Math.sqrt(t*t+n*n),l=r,u=JSON.parse(a).map(function(e){return e.point}),c=s(t,n,u)
return{length:o?Math.round(i):i,angle:o?Math.round(c)%360:c,thickness:l}}
t.getLineGeneralInfo=k
var s=function(e,t,n){var r=(0,N.default)(n,2),a=r[0],o=r[1],i=(o[0]-a[0])*e,l=(o[1]-a[1])*t
return u(i,l)}
t.getLineAngle=s
var u=function(e,t){var n=a(e,t)
return 0===n?0:0<=e?(360+o(Math.asin(t/n)))%360:180-o(Math.asin(t/n))}
t.getAngle=u
var a=function(e,t){return Math.sqrt(e*e+t*t)}
t.getLength=a
var o=function(e){return 180*e/Math.PI},_=function(e){return e/180*Math.PI}
t.degreeToRadians=_
var I=function(e,t){var n=(0,N.default)(e,2),r=n[0],a=n[1],o=_(t)
return[Math.cos(o)*r+Math.sin(o)*a,-Math.sin(o)*r+Math.cos(o)*a]}
t.getVectorInOtherSystem=I
t.getLineAttrsAfterUngroup=function(e,t,n,r){var a=(0,N.default)(e,2),o=a[0],i=a[1],l=(0,N.default)(t,2),u=l[0],c=l[1],s=r.top,d=r.left,f=r.width,p=r.height,h=r.points,m=JSON.parse(h).map(function(e){return e.point}),v=(0,N.default)(m,2),g=(0,N.default)(v[0],2),y=g[0],b=g[1],S=(0,N.default)(v[1],2),w=S[0],C=S[1],E=[d-u,s-c],k=[E[0]+w*f,E[1]+C*p],_=I([E[0]+y*f,E[1]+b*p],-n),x=I(k,-n),T=[o+_[0],i+_[1]],M=[o+x[0],i+x[1]]
return O(T,M)}
var O=function(e,t){var n=(0,N.default)(e,2),r=n[0],a=n[1],o=(0,N.default)(t,2),i=o[0],l=o[1],u=Math.min(a,l),c=Math.min(r,i),s=Math.abs(i-r),d=Math.abs(l-a),f=[[0===s?.5:(r-c)/s,0===d?.5:(a-u)/d],[0===s?.5:(i-c)/s,0===d?.5:(l-u)/d]].map(function(e){return{point:e}})
return{top:Math.round(u),left:Math.round(c),width:Math.max(Math.round(s),1),height:Math.max(Math.round(d),1),points:JSON.stringify(f)}}
t.getLineAttrsAsWidget=O
t.getLineAttrsAfterRotate=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,r=_(t),a=e.top,o=e.left,i=e.width,l=e.height,u=e.points,c=JSON.parse(u).map(function(e){return e.point}),s=(0,N.default)(c,2),d=(0,N.default)(s[0],2),f=d[0],p=d[1],h=(0,N.default)(s[1],2),m=h[0],v=h[1],g=k(e).length,y=[o+i*f,a+l*p],b=[o+i*m,a+l*v],S=[y[0]+(b[0]-y[0])*n,y[1]+(b[1]-y[1])*n],w=[y[0]+g*Math.cos(r),y[1]+g*Math.sin(r)],C=[y[0]+(w[0]-y[0])*n,y[1]+(w[1]-y[1])*n],E=[S[0]-C[0],S[1]-C[1]]
return O([y[0]+E[0],y[1]+E[1]],[w[0]+E[0],w[1]+E[1]])}
t.lineIsParallelWithAxis=function(e){var t=(0,N.default)(e,2),n=(0,N.default)(t[0],2),r=n[0],a=n[1],o=(0,N.default)(t[1],2),i=o[0],l=o[1]
return.5===r&&.5===i||.5===a&&.5===l}},Q24S:function(e,t,n){"use strict"
t.__esModule=!0
var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.default=function(e,t,n,r,a){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{},i=e.TRANSITION_SCHEDULES
if(i){if(n in i)return}else e.TRANSITION_SCHEDULES={}
!function(i,l,e){var u=i.TRANSITION_SCHEDULES,c=m({},e),s=c.tweens.length,d=new Array(s)
function f(e){if(c.state!==g)return h()
for(var t in u){var n=u[t]
if(n.stateKey===c.stateKey){if(n.state===b)return(0,v.timeout)(f)
n.state===S?(n.state=C,n.timer.stop(),n.events.interrupt&&"function"==typeof n.events.interrupt&&n.events.interrupt.call(this),delete u[t]):+t<l&&(n.state=C,n.timer.stop(),delete u[t])}}if((0,v.timeout)(function(){c.state===b&&(c.state=S,c.timer.restart(p,c.delay,c.time),p(e))}),c.state=y,c.events.start&&"function"==typeof c.events.start&&c.events.start.call(i),c.state===y){c.state=b
for(var r=-1,a=0;a<s;++a){var o=c.tweens[a].call(i)
o&&(d[++r]=o)}d.length=r+1}}function p(e){var t=1
e<c.duration?t=c.ease.call(null,e/c.duration):(c.timer.restart(h),c.state=w)
for(var n=-1;++n<d.length;)d[n].call(null,t)
c.state===w&&(c.events.end&&"function"==typeof c.events.end&&c.events.end.call(i),h())}function h(){for(var e in c.state=C,c.timer.stop(),delete u[l],u)return
delete i.TRANSITION_SCHEDULES}(u[l]=c).timer=(0,v.timer)(function(e){c.state=g,c.timer.restart(f,c.delay,c.time),c.delay<=e&&f(e-c.delay)},0,c.time)}(e,n,m({stateKey:t,events:o,tweens:a},r,{timer:null,state:l}))}
var v=n("ta7q"),l=0,g=1,y=2,b=3,S=4,w=5,C=6},Q9tK:function(e,t,n){"use strict"
t.__esModule=!0,t.default=function(){var t=this.TRANSITION_SCHEDULES
t&&Object.keys(t).forEach(function(e){t[e].timer.stop()})}},QDPf:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.generateTreeData=void 0
var s=r(n("J4zp"))
t.generateTreeData=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:MB.currentScreen.cid,n=i(e,t),r=n.widgetMap,a=n.groupMap,o={cid:"root",children:[]}
return a.root.children.forEach(function(e){return o.children.push(l(e,a,r))}),{widgetMap:r,groupMap:a,widgetTreeData:o}}
var i=function(e,o){var i={},t={},l={}
e.forEach(function(e){i[e.cid]=e,l[e.screen_cid]=l[e.screen_cid]||[],e.gid?(t[e.gid]=t[e.gid]||{gid:e.gid,screen_cid:e.screen_cid,children:[]},t[e.gid].children.push(e)):l[e.screen_cid].push(e)})
var u={root:{cid:"root",children:[]}}
Object.values(t).forEach(function(e){var t=e.gid,n=e.screen_cid,r=e.children
r.sort(d)
var a=i[t]
if(!a){if(1===r.length)return r[0].gid="",void l[n].push(r[0])
a=f(t,n,r),i[a.cid]=a,l[n].push(a)}u[t]={cid:t,gid:a.gid,widget:a,children:r.map(function(e){return e.cid})}}),Object.entries(l).forEach(function(e){var t=(0,s.default)(e,2),n=t[0],r=t[1],a=n===o?"root":n
u[a]={cid:a,children:r.sort(d).map(function(e){return e.cid})}})
var n=[]
for(var r in i)"group"===i[r].name&&void 0===u[r]&&(delete i[r],n.push(r))
for(var a in u){var c=u[a].children
u[a].children=c.filter(function(e){return!n.includes(e)})}return{widgetMap:i,groupMap:u}},d=function(e,t){return e.z-t.z||e.timestamp-t.timestamp},l=function n(e,r,a){var t=a[e]
if("group"===t.name){var o=r[e]||{children:[]}
return{cid:t.cid,type:"group",widget:t,children:o.children.map(function(e){return n(e,r,a)})}}if("panel"!==t.name)return{cid:t.cid,type:"widget",widget:t,children:[]}
var i=t.ct().cscreens()
return{cid:t.cid,type:"panel",widget:t,children:i.map(function(e){var t=r[e.cid]?r[e.cid].children:[]
return{cid:e.cid,widget:e,type:"panel-screen",children:t.map(function(e){return n(e,r,a)})}})}},f=function(e,t,n){var r=n[n.length-1],a=r.primary_fixed
return a!==Widget.FIXED_TYPE.not_fixed&&n.forEach(function(e){return e.primary_fixed=Widget.FIXED_TYPE.not_fixed}),new Widget({cid:e,name:"group",link_cids:e,screen_cid:t,z:r.z,primary_fixed:a})}},QIyF:function(e,t,n){var r=n("Kz5y")
e.exports=function(){return r.Date.now()}},QdB0:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=i.find(function(e){var t=e.checker
return t()})
return e?e.info:null}
var a=r(n("ThAd")),o={info:{name:"lisankebook",desc:"李三科送给你的专属福利，现在注册墨刀即可享受一个月个人版会员",successTip:"注册成功，恭喜你获得墨刀一个月个人版会员"},checker:function(){return(0,a.default)().utm_source===o.info.name}},i=[o]},QlAn:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalAttributes=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),h=r(n("q1tI")),o=n("/MKj"),p=a(n("17x9")),m=n("6XO9"),v=n("wYtL"),g=a(n("i6OX")),y=n("RUem"),b=n("XrEr"),S=n("/5+U"),w=a(n("mfFm")),C=a(n("UbMB")).default.bind(w.default),E=function(){return h.default.createElement("div",null,"Error in GlobalAttributes")},k=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"handleDelColor",function(e){var t=(0,S.delRecentColor)((0,b.getColorFromUnit)(e,"rgba"))
n.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:t}}),MB.event("ga","删除了自选颜色","运行页")}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleClick",function(e){var t=e.target.dataset.trackId
t&&MB.event("ga","复制".concat(t),"运行页")}),n}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidCatch",value:function(e,t){return console.log(e,t),h.default.createElement(E,null)}},{key:"render",value:function(){var e=this.props,t=e.adapterWidth,n=e.adapterHeight,r=e.screenColor,a=void 0===r?[]:r,o=e.documentColor,i=void 0===o?[]:o,l=e.globalText,u=void 0===l?[]:l,c=e.globalColor,s=void 0===c?[]:c,d=e.userPickColor,f=void 0===d?[]:d,p=e.colorUnit
i.concat(s)
return h.default.createElement("div",{className:C("global-attributes"),onClick:this.handleClick},h.default.createElement("div",{className:C("container","global-layer")},h.default.createElement(y.Base,{trackId:"宽高",title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[t,n]})),h.default.createElement(y.WrapComponent,null,I18N.preview_panel.color_title,h.default.createElement(T,{trackId:"自选颜色",title:I18N.preview_panel.pick_color,handleDelColor:this.handleDelColor,
colorBlockMap:f,colorUnit:p,canDel:!0}),h.default.createElement(x,{trackId:"页面颜色",title:I18N.preview_panel.screen_color,handleDelColor:this.handleDelColor,colorBlockMap:a,colorUnit:p})),0<u.length&&h.default.createElement(y.WrapComponent,null,I18N.preview_panel.font_title,h.default.createElement(_,{globalText:u})))}}]),o}(h.PureComponent);(t.GlobalAttributes=k).propTypes={adapterWidth:p.default.string.isRequired,adapterHeight:p.default.string.isRequired,colorUnit:p.default.string.isRequired,
screenColor:p.default.array,userPickColor:p.default.array,documentColor:p.default.array,globalText:p.default.array,globalColor:p.default.array,dispatch:p.default.func}
var _=function(e){return e.globalText.map(function(e){return h.default.createElement(y.Base,{key:e,className:"global-font",data:[e]})})}
_.propTypes={globalText:p.default.array}
var x=function(e){var a=e.trackId,t=e.title,n=e.colorBlockMap,o=e.fromSketch,i=e.handleDelColor,l=e.canDel,u=e.colorUnit,c=e.focusColor
return h.default.createElement("div",null,h.default.createElement("span",{className:"second-title"},t),h.default.createElement("div",{className:"panel-row"},n.length?n.map(function(e,t){var n=M(o,e,"rgba"),r=(0,b.getColorFromUnit)(n,u)
return h.default.createElement(N,{key:"".concat(t).concat(e),canDel:l,trackId:a,handleDelColor:i,color:r,rgbaColor:n,colorUnit:u,focusColor:c})}):h.default.createElement(I,null)))}
x.propTypes={trackId:p.default.string,title:p.default.string.isRequired,colorBlockMap:p.default.array.isRequired,handleDelColor:p.default.func.isRequired,fromSketch:p.default.bool,canDel:p.default.bool,colorUnit:p.default.string,focusColor:p.default.string}
var T=(0,o.connect)(function(e){var t=e.container.previewSetting
return{userPickColor:t.userPickColor,focusColor:t.focusColor}})(x),M=function(e,t,n){return(0,b.getColorFromUnit)(e?(0,b.parseSketchColor2rgba)(t):t,n)},N=function(e){var t=e.color,n=e.rgbaColor,r=e.colorUnit,a=e.handleDelColor,o=e.canDel,i=e.trackId,l=e.focusColor,u=t===(0,b.getColorFromUnit)(l,r)
return h.default.createElement(m.Dropdown,{shouldOpenOnHover:!0,className:C("color-dropdown",{"is-focus":u}),opener:h.default.createElement(v.Tooltip,{arrowed:!1,"data-type":"copy","data-track-id":i,"data-clipboard-text":t,className:"row-item color-block",style:{background:n},duration:1e3,content:{click:I18N.preview_panel.copied}}),inflexible:!0,arrowed:!0,menuX:"left",menuY:"top",menu:h.default.createElement(O,{color:t,rgbaColor:n,canDel:o,handleDelColor:a}),menuClassName:(0,m.trimList)([
"palette-dropdown-menu",r])})}
N.propTypes={color:p.default.string.isRequired,trackId:p.default.string,handleDelColor:p.default.func,colorUnit:p.default.string,rgbaColor:p.default.string,canDel:p.default.bool,focusColor:p.default.string}
var I=function(){return h.default.createElement("div",{className:"forbid-color"},h.default.createElement("div",{className:"transparent"}))},O=function(e){function o(){var e,r;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(r)),"handleClick",function(e){var t=r.props,n=t.rgbaColor;(0,t.handleDelColor)(n)}),r}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.canDel
return h.default.createElement("div",null,h.default.createElement("span",null,t),n&&h.default.createElement(g.default,{type:"dora",name:"trash",className:"trash",onClick:this.handleClick}))}}]),o}(h.PureComponent)
O.propTypes={color:p.default.string.isRequired,rgbaColor:p.default.string,handleDelColor:p.default.func.isRequired,canDel:p.default.bool}},QoRX:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0
return!1}},QqLw:function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},"R/W3":function(e,t){e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r
return-1}},RJdT:function(e,t,n){"use strict"
var r=n("xI34"),a=n("aFF0"),o=n("t77w"),i=n("Clcl")
window.MB=window.MB||{},MB.widgetMigrator=r.widgetMigrator,MB.panelMigrator=r.panelMigrator,MB.setScreenStateGlobally=a.setScreenStateGlobally,MB.saveWidgetByDefaultState=a.saveWidgetByDefaultState,Widget.refreshWidgetAfterDecompress=function(e,t){var r=[]
return e.forEach(function(t){var n=(0,o.decompressRichText)(t)
if("rich_text"===t.name)try{JSON.parse(n.text)}catch(e){return(0,i.REPORT_ERROR)(e,t.cid,t.text,n.text),void new Widget(n).ldestroy()}r.push(n)}),Widget.refresh.call(this,r,t)},Widgetstate.refreshWidgetstateAfterDecompress=function(e,t){var r=[]
return e.forEach(function(t){var n=(0,o.decompressRichText)(t)
if("rich_text"===t.name)try{JSON.parse(n.text)}catch(e){return(0,i.REPORT_ERROR)(e,t.cid,t.text,n.text),void new Widgetstate(n).ldestroy()}r.push(n)}),Widgetstate.refresh.call(this,r,t)}},RKRO:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getReverseTransitionName=t.getScreenStyle=void 0
var b=r(n("MVZn")),S=r(n("J4zp"))
t.getScreenStyle=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:100,r=w(e,t),a=(0,S.default)(r,2),o=a[0],i=a[1],l=C(e),u=(0,S.default)(l,2),c=u[0],s=u[1],d=E(e,t),f=(0,S.default)(d,2),p=f[0],h=f[1],m=k(e,t,n),v=(0,S.default)(m,2),g=v[0],y=v[1]
return[(0,b.default)({display:o},p,{zIndex:c,transform:g}),(0,b.default)({display:i},h,{zIndex:s,transform:y})]}
t.getReverseTransitionName=function(e){switch(e){case"none":return"none"
case"leftmenu":return"leftmenu-reverse"
case"rightmenu":return"rightmenu-reverse"
case"leftdrawer":return"leftdrawer-reverse"
case"rightdrawer":return"rightdrawer-reverse"
case"slideright":return"slideleft"
case"slideleft":return"slideright"
case"slidetop":return"slidebottom"
case"slidebottom":return"slidetop"
case"slideleft2":return"leftout"
case"slideright2":return"rightout"
case"topin":return"topout"
case"popin":return"popout"
case"leftout":return"slideleft2"
case"rightout":return"slideright2"
case"topout":return"topin"
case"popout":return"popin"}}
var a=["leftmenu","rightmenu","leftdrawer","rightdrawer"],w=function(e,t){return"none"===e?t<1?["","none"]:["none",""]:t<1?["",""]:[a.includes(e)?"":"none",""]},o=["leftout","rightout","topout","popout","slideleft2-reverse","slideright2-reverse","topin-reverse","popin-reverse","leftmenu","rightmenu","leftdrawer-reverse","rightdrawer-reverse"],C=function(e,t,n){return o.includes(e)?[3,2]:[2,3]},i={boxShadow:"0 0 8px #aaa",borderLeft:"1px solid #bbb"},l={boxShadow:"0 0 8px #aaa",borderRight:"1px solid #bbb"},
u={boxShadow:"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22), 0 0 10px 1000px rgba(0, 0, 0, 0.2)"},E=function(e,t){switch(e){case"leftmenu":return[i,null]
case"leftmenu-reverse":return t<1?[null,i]:[null,null]
case"rightmenu":return[l,null]
case"rightmenu-reverse":return t<1?[null,l]:[null,null]
case"leftdrawer":return[null,u]
case"leftdrawer-reverse":return t<1?[u,null]:[null,null]
case"rightdrawer":return[null,u]
case"rightdrawer-reverse":return t<1?[u,null]:[null,null]
default:return[null,null]}},k=function(e,t,n){var r=t*n
switch(e){case"none":return["none","none"]
case"leftmenu":return["translateX(".concat(0+r,"%)"),"translateX(".concat(-100+r,"%)")]
case"leftmenu-reverse":return["translateX(".concat(-100+n-r,"%)"),"translateX(".concat(0+n-r,"%)")]
case"rightmenu":return["translateX(".concat(0-r,"%)"),"translateX(".concat(100-r,"%)")]
case"rightmenu-reverse":return["translateX(".concat(100-n+r,"%)"),"translateX(".concat(0-n+r,"%)")]
case"leftdrawer":return["none","translateX(".concat(-100+r,"%)")]
case"leftdrawer-reverse":return["translateX(".concat(-100+n-r,"%)"),"none"]
case"rightdrawer":return["none","translateX(".concat(100-r,"%)")]
case"rightdrawer-reverse":return["translateX(".concat(100-n+r,"%)"),"none"]
case"slideright":return["translateX(".concat(r,"%)"),"translateX(".concat(-100+r,"%)")]
case"slideleft":return["translateX(".concat(0-r,"%)"),"translateX(".concat(100-r,"%)")]
case"slidetop":return["translateY(".concat(r,"%)"),"translateY(".concat(-100+r,"%)")]
case"slidebottom":return["translateY(".concat(0-r,"%)"),"translateY(".concat(100-r,"%)")]
case"slideleft2":return["none","translateX(".concat(-100+r,"%)")]
case"slideright2":return["none","translateX(".concat(100-r,"%)")]
case"topin":return["none","translateY(".concat(-100+r,"%)")]
case"popin":return["none","translateY(".concat(100-r,"%)")]
case"leftout":return["translateX(".concat(0-r,"%)"),"none"]
case"rightout":return["translateX(".concat(r,"%)"),"none"]
case"topout":return["translateY(".concat(0-r,"%)"),"none"]
case"popout":return["translateY(".concat(r,"%)"),"none"]
default:return console.error("发现未知动画名称: "+e),["none","none"]}}},RNpe:function(e,t,n){var r=n("87hQ")
function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(e,t){if(c.exec(e))return e
var n,r,a=(n=c.exec(t)||[""],r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],o="/"!==e[0]?[].concat(u(t.split("/").slice(0,-1)),u(e.split("/"))):[a.slice(0,-1)].concat(u(e.split("/").slice(1))),i=[]
return o.forEach(function(e){return".."===e?i.pop():i.push(e)}),i.join("/")}
t.getAbsoluteUrl=a
var c=/((https?:)?\/\/)?[-\w@:%._+~#=]{2,256}\.[a-z]{2,63}(:\d{1,5})?\//,m=function(e,t){if(e.startsWith("data:"))return e
if(e.startsWith("blob:"))return(0,r.fetchDataUrlWithCache)(e)
t&&(e=a(e,t))
var n=i.exec(e)
return n&&d[n[1].toLowerCase()]?(0,r.fetchDataUrlWithCache)(e):""}
t.convertDataUrl=m
var o,s,i=/\.([0-9a-z]{3,5})(?:[?#]|$)/i,d={woff2:"font/woff2",woff:"font/woff",ttf:"font/ttf",otf:"font/otf",svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",ico:"image/x-icon"},f=(s=regeneratorRuntime.mark(function e(t){var n,r,a,o,i,l,u,c,s,d,f,p
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.urlMap,r=void 0===n?{}:n,a=t.fragList,o=void 0===a?[]:a,i=Object.values(r),l=0
case 3:if(!(l<i.length)){e.next=20
break}if(u=i[l],c=u.urlString,s=u.originUrl,!u.isIgnore){e.next=10
break}e.t0=c,e.next=16
break
case 10:return e.next=12,m(c,s)
case 12:if(e.t1=e.sent,e.t1){e.next=15
break}e.t1=""
case 15:e.t0=e.t1
case 16:u.dataUrl=e.t0
case 17:l++,e.next=3
break
case 20:for(d=0,f=o.length;d<f;d++)"object"===h(p=o[d])&&(o[d]=p.dataUrl)
return e.abrupt("return",o)
case 22:case"end":return e.stop()}},e,this)}),o=function(){var e=this,i=arguments
return new Promise(function(t,n){var r=s.apply(e,i)
function a(e){l(r,t,n,a,o,"next",e)}function o(e){l(r,t,n,a,o,"throw",e)}a(void 0)})},function(e){return o.apply(this,arguments)})
t.convertFragListWithUrlMap=f},RUem:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Base",{enumerable:!0,get:function(){return r.Base}}),Object.defineProperty(t,"ColorInfo",{enumerable:!0,get:function(){return a.ColorInfo}}),Object.defineProperty(t,"TextLayerInfo",{enumerable:!0,get:function(){return o.TextLayerInfo}}),Object.defineProperty(t,"BasicAttributes",{enumerable:!0,get:function(){return i.BasicAttributes}}),Object.defineProperty(t,"GlobalAttributes",{enumerable:!0,get:function(){return l.GlobalAttributes}})
,Object.defineProperty(t,"CodeBox",{enumerable:!0,get:function(){return u.CodeBox}}),Object.defineProperty(t,"ImageInfo",{enumerable:!0,get:function(){return c.ImageInfo}}),Object.defineProperty(t,"CopyBtn",{enumerable:!0,get:function(){return s.CopyBtn}}),Object.defineProperty(t,"Shadows",{enumerable:!0,get:function(){return d.Shadows}}),Object.defineProperty(t,"Fills",{enumerable:!0,get:function(){return d.Fills}}),Object.defineProperty(t,"LayerName",{enumerable:!0,get:function(){return d.LayerName}}),
Object.defineProperty(t,"BorderInfo",{enumerable:!0,get:function(){return d.BorderInfo}}),Object.defineProperty(t,"Loading",{enumerable:!0,get:function(){return d.Loading}}),Object.defineProperty(t,"WrapComponent",{enumerable:!0,get:function(){return d.WrapComponent}})
var r=n("Iusu"),a=n("Ij3M"),o=n("wQP3"),i=n("LVRM"),l=n("QlAn"),u=n("bekf"),c=n("1Uxz"),s=n("h9XN"),d=n("WyLE")},RcoH:function(e,t,n){"use strict"
n.r(t)
var o={}
n.r(o),n.d(o,"easeLinear",function(){return s}),n.d(o,"easeQuad",function(){return p}),n.d(o,"easeQuadIn",function(){return d}),n.d(o,"easeQuadOut",function(){return f}),n.d(o,"easeQuadInOut",function(){return p}),n.d(o,"easeCubic",function(){return v}),n.d(o,"easeCubicIn",function(){return h}),n.d(o,"easeCubicOut",function(){return m}),n.d(o,"easeCubicInOut",function(){return v}),n.d(o,"easePoly",function(){return b}),n.d(o,"easePolyIn",function(){return g}),n.d(o,"easePolyOut",function(){return y}),n.d(o,
"easePolyInOut",function(){return b}),n.d(o,"easeSin",function(){return x}),n.d(o,"easeSinIn",function(){return k}),n.d(o,"easeSinOut",function(){return _}),n.d(o,"easeSinInOut",function(){return x}),n.d(o,"easeExp",function(){return N}),n.d(o,"easeExpIn",function(){return T}),n.d(o,"easeExpOut",function(){return M}),n.d(o,"easeExpInOut",function(){return N}),n.d(o,"easeCircle",function(){return R}),n.d(o,"easeCircleIn",function(){return I}),n.d(o,"easeCircleOut",function(){return O}),n.d(o,
"easeCircleInOut",function(){return R}),n.d(o,"easeBounce",function(){return H}),n.d(o,"easeBounceIn",function(){return z}),n.d(o,"easeBounceOut",function(){return H}),n.d(o,"easeBounceInOut",function(){return Y}),n.d(o,"easeBack",function(){return X}),n.d(o,"easeBackIn",function(){return V}),n.d(o,"easeBackOut",function(){return J}),n.d(o,"easeBackInOut",function(){return X}),n.d(o,"easeElastic",function(){return K}),n.d(o,"easeElasticIn",function(){return Z}),n.d(o,"easeElasticOut",function(){return K}),
n.d(o,"easeElasticInOut",function(){return Q})
var r=n("q1tI"),w=n.n(r),a=n("17x9"),i=n.n(a),l=n("2rMq"),u=n.n(l),c=n("3V46"),C=n.n(c)
function s(e){return+e}function d(e){return e*e}function f(e){return e*(2-e)}function p(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function h(e){return e*e*e}function m(e){return--e*e*e+1}function v(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var g=function e(t){function n(e){return Math.pow(e,t)}return t=+t,n.exponent=e,n}(3),y=function e(t){function n(e){return 1-Math.pow(1-e,t)}return t=+t,n.exponent=e,n}(3),b=function e(t){function n(e){return((e*=2)<=1?Math.pow(e,t):2-Math.pow(2-e,t))/2}return t=+t,
n.exponent=e,n}(3),S=Math.PI,E=S/2
function k(e){return 1-Math.cos(e*E)}function _(e){return Math.sin(e*E)}function x(e){return(1-Math.cos(S*e))/2}function T(e){return Math.pow(2,10*e-10)}function M(e){return 1-Math.pow(2,-10*e)}function N(e){return((e*=2)<=1?Math.pow(2,10*e-10):2-Math.pow(2,10-10*e))/2}function I(e){return 1-Math.sqrt(1-e*e)}function O(e){return Math.sqrt(1- --e*e)}function R(e){return((e*=2)<=1?1-Math.sqrt(1-e*e):Math.sqrt(1-(e-=2)*e)+1)/2}var P=4/11,A=6/11,j=8/11,L=.75,D=9/11,B=10/11,F=.9375,U=21/22,W=63/64,q=1/P/P
function z(e){return 1-H(1-e)}function H(e){return(e=+e)<P?q*e*e:e<j?q*(e-=A)*e+L:e<B?q*(e-=D)*e+F:q*(e-=U)*e+W}function Y(e){return((e*=2)<=1?1-H(1-e):H(e-1)+1)/2}var V=function e(t){function n(e){return e*e*((t+1)*e-t)}return t=+t,n.overshoot=e,n}(1.70158),J=function e(t){function n(e){return--e*e*((t+1)*e+t)+1}return t=+t,n.overshoot=e,n}(1.70158),X=function e(t){function n(e){return((e*=2)<1?e*e*((t+1)*e-t):(e-=2)*e*((t+1)*e+t)+2)/2}return t=+t,n.overshoot=e,n}(1.70158),G=2*Math.PI,Z=function t(n,r){
var a=Math.asin(1/(n=Math.max(1,n)))*(r/=G)
function e(e){return n*Math.pow(2,10*--e)*Math.sin((a-e)/r)}return e.amplitude=function(e){return t(e,r*G)},e.period=function(e){return t(n,e)},e}(1,.3),K=function t(n,r){var a=Math.asin(1/(n=Math.max(1,n)))*(r/=G)
function e(e){return 1-n*Math.pow(2,-10*(e=+e))*Math.sin((e+a)/r)}return e.amplitude=function(e){return t(e,r*G)},e.period=function(e){return t(n,e)},e}(1,.3),Q=function t(n,r){var a=Math.asin(1/(n=Math.max(1,n)))*(r/=G)
function e(e){return((e=2*e-1)<0?n*Math.pow(2,10*e)*Math.sin((a-e)/r):2-n*Math.pow(2,-10*e)*Math.sin((a+e)/r))/2}return e.amplitude=function(e){return t(e,r*G)},e.period=function(e){return t(n,e)},e}(1,.3)
function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t,n){return t&&te(e.prototype,t),n&&te(e,n),e}function re(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?oe(e):t}function ae(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}var ie=function(e){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}},le=function(e){function t(){var e
return ee(this,t),(e=re(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))).handleClick=e.handleClick.bind(oe(e)),e}return ae(t,w.a.Component),ne(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.previousSlide()}},{key:"render",value:function(){var e=0===this.props.currentSlide&&!this.props.wrapAround||0===this.props.slideCount
return w.a.createElement("button",{style:ie(e),disabled:e,onClick:this.handleClick,"aria-label":"previous"},"PREV")}}]),t}(),ue=function(e){function t(){var e
return ee(this,t),(e=re(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))).handleClick=e.handleClick.bind(oe(e)),e}return ae(t,w.a.Component),ne(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.nextSlide()}},{key:"render",value:function(){var e=this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround
return w.a.createElement("button",{style:ie(e),disabled:e,onClick:this.handleClick,"aria-label":"next"},"NEXT")}}]),t}(),ce=function(e){function t(){return ee(this,t),re(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return ae(t,w.a.Component),ne(t,[{key:"getIndexes",value:function(e,t){for(var n=[],r=0;r<e;r+=t)n.push(r)
return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(e){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,fontSize:24,opacity:e?1:.5}}},{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll)
return w.a.createElement("ul",{style:this.getListStyles()},e.map(function(e){return w.a.createElement("li",{style:t.getListItemStyles(),key:e},w.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide.bind(null,e),"aria-label":"slide ".concat(e+1," bullet")},"•"))}))}}]),t}()
function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}var pe=function(e){function a(e){var t,n,r
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=this,(t=!(r=(a.__proto__||Object.getPrototypeOf(a)).call(this,e))||"object"!==se(r)&&"function"!=typeof r?fe(n):r).getListStyles=t.getListStyles.bind(fe(t)),t}var t,n,r
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,w.a.Component),t=a,(n=[{key:"getSlideDirection",value:function(e,t,n){var r=0
return e===t?r:r=n?e<t?-1:1:e<t?1:-1}},{key:"getSlideTargetPosition",value:function(e,t){var n=(this.props.slideWidth+this.props.cellSpacing)*e,r=Math.min(Math.abs(Math.floor(t/this.props.slideWidth)),this.props.slideCount-1),a=0
if("zoom"===this.props.animation&&(this.props.currentSlide===e+1||0===this.props.currentSlide&&e===this.props.children.length-1)?a=this.props.slideOffset:"zoom"===this.props.animation&&(this.props.currentSlide===e-1||this.props.currentSlide===this.props.children.length-1&&0===e)&&(a=-this.props.slideOffset),this.props.wrapAround&&e!==r){var o=this.getSlideDirection(r,this.props.currentSlide,this.props.isWrappingAround),i=Math.floor((this.props.slideCount-1)/2),l=this.props.slideCount-i-1
if(o<0){var u=i
i=l,l=u}var c=Math.abs(r-e)
e<r?i<c&&(n=(this.props.slideWidth+this.props.cellSpacing)*(this.props.slideCount+e)):l<c&&(n=(this.props.slideWidth+this.props.cellSpacing)*(this.props.slideCount-e)*-1)}return n+a}},{key:"formatChildren",value:function(e){var r=this,t=this.props,n=t.top,a=t.left,o=t.currentSlide,i=t.slidesToShow,l=this.props.vertical?n:a
return w.a.Children.map(e,function(e,t){var n=o<=t&&t<o+i
return w.a.createElement("li",{className:"slider-slide".concat(n?" slide-visible":""),style:r.getSlideStyles(t,l),key:t},e)})}},{key:"getSlideStyles",value:function(e,t){var n=this.getSlideTargetPosition(e,t)
return{boxSizing:"border-box",display:this.props.vertical?"block":"inline-block",height:"auto",left:this.props.vertical?0:n,listStyleType:"none",marginBottom:this.props.vertical?this.props.cellSpacing/2:"auto",marginLeft:this.props.vertical?"auto":this.props.cellSpacing/2,marginRight:this.props.vertical?"auto":this.props.cellSpacing/2,marginTop:this.props.vertical?this.props.cellSpacing/2:"auto",MozBoxSizing:"border-box",position:"absolute",top:this.props.vertical?n:0,
transform:"zoom"===this.props.animation&&this.props.currentSlide!==e?"scale(0.85)":"scale(1.0)",transition:"transform .4s linear",verticalAlign:"top",width:this.props.vertical?"100%":this.props.slideWidth}}},{key:"getListStyles",value:function(e){var t=e.deltaX,n=e.deltaY,r=this.props.slideWidth*w.a.Children.count(this.props.children),a=this.props.cellSpacing*w.a.Children.count(this.props.children),o="translate3d(".concat(t,"px, ").concat(n,"px, 0)")
return{transform:o,WebkitTransform:o,msTransform:"translate(".concat(t,"px, ").concat(n,"px)"),position:"relative",display:"block",margin:this.props.vertical?"".concat(this.props.cellSpacing/2*-1,"px 0px"):"0px ".concat(this.props.cellSpacing/2*-1,"px"),padding:0,height:this.props.vertical?r+a:this.props.slideHeight,width:this.props.vertical?"auto":r+a,cursor:!0===this.props.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box",touchAction:"pinch-zoom ".concat(
this.props.vertical?"pan-x":"pan-y")}}},{key:"render",value:function(){var e=this.formatChildren(this.props.children),t=this.props.deltaX,n=this.props.deltaY
return w.a.createElement("ul",{className:"slider-list",style:this.getListStyles({deltaX:t,deltaY:n})},e)}}])&&de(t.prototype,n),r&&de(t,r),a}()
function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e
throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}pe.propTypes={animation:i.a.oneOf(["zoom"]),cellSpacing:i.a.number,currentSlide:i.a.number,deltaX:i.a.number,deltaY:i.a.number,dragging:i.a.bool,isWrappingAround:i.a.bool,left:i.a.number,slideCount:i.a.number,slideHeight:i.a.number,slideOffset:i.a.number,slideWidth:i.a.number,top:i.a.number,vertical:i.a.bool,wrapAround:i.a.bool},pe.defaultProps={cellSpacing:0,currentSlide:0,deltaX:0,deltaY:0,dragging:!1,
isWrappingAround:!1,left:0,slideCount:0,slideHeight:0,slideWidth:0,top:0,vertical:!1,wrapAround:!1}
var ge=function(e){function n(e){var t
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=ve(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))).fadeFromSlide=e.currentSlide,t}var t,r,a
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,w.a.Component),t=n,(r=[{key:"formatChildren",value:function(e,r){var a=this,t=this.props,o=t.currentSlide,i=t.slidesToShow
return w.a.Children.map(e,function(e,t){var n=o<=t&&t<o+i
return w.a.createElement("li",{className:"slider-slide".concat(n?" slide-visible":""),style:a.getSlideStyles(t,r),key:t},e)})}},{key:"getSlideOpacityAndLeftMap",value:function(e,t,n){var r=t
n<e&&0===e?r=e-this.props.slidesToShow:e<n&&e+this.props.slidesToShow>this.props.slideCount-1&&(r=e+this.props.slidesToShow)
var a={}
if(e===t)a[e]=1
else{var o=e-r
a[e]=(n-r)/o,a[t]=(e-n)/o}for(var i={},l=0;l<this.props.slidesToShow;l++)i[e+l]={opacity:a[e],left:this.props.slideWidth*l},i[t+l]={opacity:a[t],left:this.props.slideWidth*l}
return i}},{key:"getSlideStyles",value:function(e,t){return{boxSizing:"border-box",display:"block",height:"auto",left:t[e]?t[e].left:0,listStyleType:"none",marginBottom:"auto",marginLeft:this.props.cellSpacing/2,marginRight:this.props.cellSpacing/2,marginTop:"auto",MozBoxSizing:"border-box",opacity:t[e]?t[e].opacity:0,position:"absolute",top:0,verticalAlign:"top",visibility:t[e]?"inherit":"hidden",width:this.props.slideWidth}}},{key:"getContainerStyles",value:function(){
var e=this.props.slideWidth*this.props.slidesToShow
return{boxSizing:"border-box",cursor:!0===this.props.dragging?"pointer":"inherit",display:"block",height:this.props.slideHeight,margin:this.props.vertical?"".concat(this.props.cellSpacing/2*-1,"px 0px"):"0px ".concat(this.props.cellSpacing/2*-1,"px"),MozBoxSizing:"border-box",padding:0,touchAction:"none",width:e}}},{key:"render",value:function(){var e=-(this.props.deltaX||this.props.deltaY)/this.props.slideWidth
parseInt(e)===e&&(this.fadeFromSlide=e)
var t=this.getSlideOpacityAndLeftMap(this.fadeFromSlide,this.props.currentSlide,e),n=this.formatChildren(this.props.children,t)
return w.a.createElement("ul",{className:"slider-list",style:this.getContainerStyles()},n)}}])&&me(t.prototype,r),a&&me(t,a),n}()
ge.propTypes={cellSpacing:i.a.number,currentSlide:i.a.number,deltaX:i.a.number,deltaY:i.a.number,dragging:i.a.bool,isWrappingAround:i.a.bool,left:i.a.number,slideCount:i.a.number,slideHeight:i.a.number,slidesToShow:i.a.number,slideWidth:i.a.number,top:i.a.number,vertical:i.a.bool,wrapAround:i.a.bool},ge.defaultProps={cellSpacing:0,currentSlide:0,deltaX:0,deltaY:0,dragging:!1,isWrappingAround:!1,left:0,slideCount:0,slideHeight:0,slidesToShow:1,slideWidth:0,top:0,vertical:!1,wrapAround:!1}
var ye={fade:ge,scroll:pe},be=function(e){var t=e.message
return w.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},tabIndex:-1},t)}
var Se=function(e,t,n){null!=e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n)},we=function(e,t,n){null!=e&&(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on".concat(t),n):e["on".concat(t)]=null)},Ce=function(t,e){var n=t.slidesToShow,r=t.transitionMode,a={}
return"fade"===r?e.forEach(function(e){switch(e){case"slidesToShow":case"slidesToScroll":a[e]=Math.max(parseInt(n),1)
break
case"cellAlign":a[e]="left"
break
default:a[e]=t[e]}}):e.forEach(function(e){a[e]=t[e]}),a},Ee=function(e,t,n,r,a){var o=e-t,i=n-r,l=Math.atan2(i,o),u=Math.round(180*l/Math.PI)
return u<0&&(u=360-Math.abs(u)),u<=45&&0<=u?1:u<=360&&315<=u?1:135<=u&&u<=225?-1:!0===a?35<=u&&u<=135?1:-1:0}
function ke(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_e(t,e,n[e])})}return t}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=function(e){return w.a.Children.toArray(e)}
function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}n.d(t,"default",function(){return Oe}),n.d(t,"NextButton",function(){return ue}),n.d(t,"PreviousButton",function(){return le}),n.d(t,"PagingDots",function(){return ce})
var Oe=function(e){function d(){var e,t,n,r,a,o,i,l,u,c,s
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),t=this,(e=!(n=(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))||"object"!==Te(n)&&"function"!=typeof n?Ie(t):n).displayName="Carousel",e.clickDisabled=!1,e.isTransitioning=!1,e.touchObject={},e.controlsMap=[{funcName:"renderTopLeftControls",key:"TopLeft"},{funcName:"renderTopCenterControls",key:"TopCenter"},{funcName:"renderTopRightControls",key:"TopRight"},{
funcName:"renderCenterLeftControls",key:"CenterLeft"},{funcName:"renderCenterCenterControls",key:"CenterCenter"},{funcName:"renderCenterRightControls",key:"CenterRight"},{funcName:"renderBottomLeftControls",key:"BottomLeft"},{funcName:"renderBottomCenterControls",key:"BottomCenter"},{funcName:"renderBottomRightControls",key:"BottomRight"}],e.state=function(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r
t=a,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return a}({currentSlide:e.props.slideIndex,dragging:!1,easing:O,isWrappingAround:!1,left:0,resetWrapAroundPosition:!1,slideCount:xe(e.props.children).length,top:0,wrapToIndex:null},(r=e.props,a=Ce(r,["slidesToScroll","slidesToShow","cellAlign"]),o=a.slidesToScroll,i=a.slidesToShow,l=a.cellAlign,u=r.vertical?r.initialSlideHeight||0:r.initialSlideWidth||0,c=r.vertical?(r.initialSlideHeight||0
)*r.slidesToShow:r.initialSlideHeight||0,s=c+r.cellSpacing*(i-1),{slideWidth:u,slideHeight:c,frameWidth:r.vertical?s:"100%",slidesToScroll:o,slidesToShow:i,cellAlign:l})),e.autoplayIterator=e.autoplayIterator.bind(Ie(e)),e.calcSlideHeightAndWidth=e.calcSlideHeightAndWidth.bind(Ie(e)),e.getChildNodes=e.getChildNodes.bind(Ie(e)),e.getMouseEvents=e.getMouseEvents.bind(Ie(e)),e.getOffsetDeltas=e.getOffsetDeltas.bind(Ie(e)),e.getTargetLeft=e.getTargetLeft.bind(Ie(e)),e.getTouchEvents=e.getTouchEvents.bind(Ie(e))
,e.goToSlide=e.goToSlide.bind(Ie(e)),e.handleClick=e.handleClick.bind(Ie(e)),e.handleKeyPress=e.handleKeyPress.bind(Ie(e)),e.handleMouseOut=e.handleMouseOut.bind(Ie(e)),e.handleMouseOver=e.handleMouseOver.bind(Ie(e)),e.handleSwipe=e.handleSwipe.bind(Ie(e)),e.nextSlide=e.nextSlide.bind(Ie(e)),e.onReadyStateChange=e.onReadyStateChange.bind(Ie(e)),e.onResize=e.onResize.bind(Ie(e)),e.onVisibilityChange=e.onVisibilityChange.bind(Ie(e)),e.previousSlide=e.previousSlide.bind(Ie(e)),
e.renderControls=e.renderControls.bind(Ie(e)),e.resetAutoplay=e.resetAutoplay.bind(Ie(e)),e.setDimensions=e.setDimensions.bind(Ie(e)),e.setLeft=e.setLeft.bind(Ie(e)),e.setSlideHeightAndWidth=e.setSlideHeightAndWidth.bind(Ie(e)),e.startAutoplay=e.startAutoplay.bind(Ie(e)),e.stopAutoplay=e.stopAutoplay.bind(Ie(e)),e}var t,n,r
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,w.a.Component),t=d,(n=[{key:"componentDidMount",value:function(){this.mounted=!0,this.setLeft(),this.setDimensions(),this.bindEvents(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){var n=xe(t.children).length,r=n!==this.state.slideCount
this.setState(function(e){return{slideCount:n,currentSlide:r?t.slideIndex:e.currentSlide}}),n<=this.state.currentSlide&&this.goToSlide(Math.max(n-1,0),t),(r||function(e,t,n){for(var r=!1,a=0;a<n.length;a++)if(e[n[a]]!==t[n[a]]){r=!0
break}return r}(this.props,t,["cellSpacing","vertical","slideWidth","slideHeight","heightMode","slidesToScroll","slidesToShow","transitionMode","cellAlign"]))&&this.setDimensions(t),this.props.slideIndex===t.slideIndex||t.slideIndex===this.state.currentSlide||this.state.isWrappingAround||this.goToSlide(t.slideIndex,this.props),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentDidUpdate",value:function(e,t){var n=t.currentSlide!==this.state.currentSlide,
r=e.heightMode!==this.props.heightMode;(n||r)&&this.setSlideHeightAndWidth()}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),this.mounted=!1}},{key:"getTouchEvents",value:function(){var r=this
return!1===this.props.swiping?{onTouchStart:function(){r.handleMouseOver()},onTouchEnd:function(){r.handleMouseOut()}}:{onTouchStart:function(e){r.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},r.handleMouseOver(),r.setState({dragging:!0})},onTouchMove:function(e){var t=Ee(r.touchObject.startX,e.touches[0].pageX,r.touchObject.startY,e.touches[0].pageY,r.props.vertical)
0!==t&&e.preventDefault()
var n=r.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-r.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-r.touchObject.startX,2)))
r.touchObject={startX:r.touchObject.startX,startY:r.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:n,direction:t},r.setState({left:r.props.vertical?0:r.getTargetLeft(r.touchObject.length*r.touchObject.direction),top:r.props.vertical?r.getTargetLeft(r.touchObject.length*r.touchObject.direction):0})},onTouchEnd:function(e){r.handleSwipe(e),r.handleMouseOut()},onTouchCancel:function(e){r.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var r=this
return!1===this.props.dragging?{onMouseOver:function(){return r.handleMouseOver()},onMouseOut:function(){return r.handleMouseOut()}}:{onMouseOver:function(){return r.handleMouseOver()},onMouseOut:function(){return r.handleMouseOut()},onMouseDown:function(e){r.touchObject={startX:e.clientX,startY:e.clientY},r.setState({dragging:!0})},onMouseMove:function(e){if(r.state.dragging){var t=Ee(r.touchObject.startX,e.clientX,r.touchObject.startY,e.clientY,r.props.vertical)
0!==t&&e.preventDefault()
var n=r.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-r.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-r.touchObject.startX,2)))
10<=n&&(r.clickDisabled=!0),r.touchObject={startX:r.touchObject.startX,startY:r.touchObject.startY,endX:e.clientX,endY:e.clientY,length:n,direction:t},r.setState({left:r.props.vertical?0:r.getTargetLeft(r.touchObject.length*r.touchObject.direction),top:r.props.vertical?r.getTargetLeft(r.touchObject.length*r.touchObject.direction):0})}},onMouseUp:function(e){0!==r.touchObject.length&&void 0!==r.touchObject.length?r.handleSwipe(e):r.setState({dragging:!1})},onMouseLeave:function(e){
r.state.dragging&&r.handleSwipe(e)}}}},{key:"pauseAutoplay",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"unpauseAutoplay",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleMouseOver",value:function(){this.props.pauseOnHover&&this.pauseAutoplay()}},{key:"handleMouseOut",value:function(){this.autoplayPaused&&this.unpauseAutoplay()}},{key:"handleClick",value:function(e){if(
!0===this.clickDisabled){if(e.metaKey||e.shiftKey||e.altKey||e.ctrlKey)return
e.preventDefault(),e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopPropagation()}}},{key:"handleSwipe",value:function(){var e=this,t=this.state.slidesToShow
"auto"===this.props.slidesToScroll&&(t=this.state.slidesToScroll),this.touchObject.length>this.state.slideWidth/t/5?1===this.touchObject.direction?this.state.currentSlide>=this.state.slideCount-t&&!this.props.wrapAround?this.setState({easing:o[this.props.edgeEasing]}):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.setState({easing:o[this.props.edgeEasing]}):this.previousSlide()):this.goToSlide(this.state.currentSlide),setTimeout(function(){
e.clickDisabled=!1},0),this.touchObject={},this.setState({dragging:!1})}},{key:"handleKeyPress",value:function(e){if(this.props.enableKeyboardControls)switch(e.keyCode){case 39:case 68:case 38:case 87:this.nextSlide()
break
case 37:case 65:case 40:case 83:this.previousSlide()
break
case 81:this.goToSlide(0,this.props)
break
case 69:this.goToSlide(this.state.slideCount-1,this.props)
break
case 32:if(this.state.pauseOnHover&&this.props.autoplay){this.setState({pauseOnHover:!1}),this.pauseAutoplay()
break}this.setState({pauseOnHover:!0}),this.unpauseAutoplay()}}},{key:"autoplayIterator",value:function(){this.props.wrapAround?this.nextSlide():this.state.currentSlide!==this.state.slideCount-this.state.slidesToShow?this.nextSlide():this.stopAutoplay()}},{key:"startAutoplay",value:function(){this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval)}},{key:"resetAutoplay",value:function(){this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{
key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"getTargetLeft",value:function(e,t){var n,r=t||this.state.currentSlide
switch(this.state.cellAlign){case"left":n=0,n-=this.props.cellSpacing*r
break
case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=this.props.cellSpacing*r
break
case"right":n=this.state.frameWidth-this.state.slideWidth,n-=this.props.cellSpacing*r}var a=this.state.slideWidth*r
return 0<this.state.currentSlide&&r+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(a=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=this.props.cellSpacing*(this.state.slideCount-1)),-1*(a-(n-=e||0))}},{key:"getOffsetDeltas",value:function(){var e=0
return e=this.state.isWrappingAround?this.getTargetLeft(null,this.state.wrapToIndex):this.getTargetLeft(this.touchObject.length*this.touchObject.direction),{tx:[this.props.vertical?0:e],ty:[this.props.vertical?e:0]}}},{key:"goToSlide",value:function(t,n){var r=this
if(void 0===n&&(n=this.props),!this.isTransitioning){this.setState({easing:o[n.easing]}),this.isTransitioning=!0
var e=this.state.currentSlide
if(t>=this.state.slideCount||t<0){if(!n.wrapAround)return void(this.isTransitioning=!1)
if(t>=this.state.slideCount)return n.beforeSlide(this.state.currentSlide,0),void this.setState(function(e){return{left:n.vertical?0:r.getTargetLeft(r.state.slideWidth,e.currentSlide),top:n.vertical?r.getTargetLeft(r.state.slideWidth,e.currentSlide):0,currentSlide:0,isWrappingAround:!0,wrapToIndex:t}},function(){setTimeout(function(){r.resetAutoplay(),r.isTransitioning=!1,t!==e&&r.props.afterSlide(0)},n.speed)})
var a=this.state.slideCount-this.state.slidesToScroll
return n.beforeSlide(this.state.currentSlide,a),void this.setState(function(e){return{left:n.vertical?0:r.getTargetLeft(0,e.currentSlide),top:n.vertical?r.getTargetLeft(0,e.currentSlide):0,currentSlide:a,isWrappingAround:!0,wrapToIndex:t}},function(){setTimeout(function(){r.resetAutoplay(),r.isTransitioning=!1,t!==e&&r.props.afterSlide(r.state.slideCount-1)},n.speed)})}this.props.beforeSlide(this.state.currentSlide,t),this.setState({currentSlide:t},function(){return setTimeout(function(){r.resetAutoplay(),
r.isTransitioning=!1,t!==e&&r.props.afterSlide(t)},n.speed)})}}},{key:"nextSlide",value:function(){var e=this.state.slideCount,t=this.state.slidesToShow
if("auto"===this.props.slidesToScroll&&(t=this.state.slidesToScroll),!(this.state.currentSlide>=e-t)||this.props.wrapAround||"left"!==this.props.cellAlign)if(this.props.wrapAround)this.goToSlide(this.state.currentSlide+this.state.slidesToScroll)
else{if(1!==this.props.slideWidth)return void this.goToSlide(this.state.currentSlide+this.state.slidesToScroll)
var n=this.state.currentSlide+this.state.slidesToScroll,r="left"!==this.props.cellAlign?n:Math.min(n,e-t)
this.goToSlide(r)}}},{key:"previousSlide",value:function(){this.state.currentSlide<=0&&!this.props.wrapAround||(this.props.wrapAround?this.goToSlide(this.state.currentSlide-this.state.slidesToScroll):this.goToSlide(Math.max(0,this.state.currentSlide-this.state.slidesToScroll)))}},{key:"bindEvents",value:function(){u.a.canUseDOM&&(Se(window,"resize",this.onResize),Se(document,"readystatechange",this.onReadyStateChange),Se(document,"visibilitychange",this.onVisibilityChange),Se(document,"keydown",
this.handleKeyPress))}},{key:"onResize",value:function(){this.setDimensions(null,this.props.onResize)}},{key:"onReadyStateChange",value:function(){this.setDimensions()}},{key:"onVisibilityChange",value:function(){document.hidden?this.pauseAutoplay():this.unpauseAutoplay()}},{key:"unbindEvents",value:function(){u.a.canUseDOM&&(we(window,"resize",this.onResize),we(document,"readystatechange",this.onReadyStateChange),we(document,"visibilitychange",this.onVisibilityChange),we(document,"keydown",
this.handleKeyPress))}},{key:"calcSlideHeightAndWidth",value:function(e){e=e||this.props
var t,n=this.getChildNodes(),r=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],r=e.heightMode,a=e.vertical,o=e.initialSlideHeight,i=t.slidesToShow,l=t.currentSlide,u=n[0]
return u&&"first"===r?a?u.offsetHeight*i:u.offsetHeight:"max"===r?function(e){for(var t=0,n=0;n<e.length;n++)e[n].offsetHeight>t&&(t=e[n].offsetHeight)
return t}(n):"current"===r?n[l].offsetHeight:o||100}(e,this.state,n),a=Ce(e,["slidesToShow"]).slidesToShow,o=this.frame
return t="zoom"===this.props.animation?o.offsetWidth-15*o.offsetWidth/100:"number"!=typeof e.slideWidth?parseInt(e.slideWidth):e.vertical?r/a*e.slideWidth:o.offsetWidth/a*e.slideWidth,e.vertical||(t-=e.cellSpacing*((100-100/a)/100)),{slideHeight:r,slideWidth:t}}},{key:"setSlideHeightAndWidth",value:function(){this.setState(this.calcSlideHeightAndWidth())}},{key:"setDimensions",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){}
e=e||this.props
var r=Ce(e,["slidesToShow","cellAlign"]),a=r.slidesToShow,o=r.cellAlign,i=this.frame,l=this.calcSlideHeightAndWidth(e),u=l.slideHeight,c=l.slideWidth,s=u+e.cellSpacing*(a-1),d=e.vertical?s:i.offsetWidth,f=Ce(e,["slidesToScroll"]).slidesToScroll
"auto"===f&&(f=Math.floor(d/(c+e.cellSpacing))),this.setState({frameWidth:d,slideHeight:u,slidesToScroll:f,slidesToShow:a,slideWidth:c,cellAlign:o,left:e.vertical?0:this.getTargetLeft(),top:e.vertical?this.getTargetLeft():0},function(){n(),t.setLeft()})}},{key:"getChildNodes",value:function(){return this.frame.childNodes[0].childNodes}},{key:"setLeft",value:function(){var e=this.props.vertical?0:this.getTargetLeft(),t=this.props.vertical?this.getTargetLeft():0
e===this.state.left&&t===this.state.top||this.setState({left:e,top:t})}},{key:"renderControls",value:function(){var a=this
return this.props.withoutControls?this.controlsMap.map(function(){return null}):this.controlsMap.map(function(e){var t=e.funcName,n=e.key,r=a.props[t]
return r&&"function"==typeof r&&w.a.createElement("div",{className:"slider-control-".concat(n.toLowerCase()),style:function(e){switch(e){case"TopLeft":return{position:"absolute",top:0,left:0}
case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"}
case"TopRight":return{position:"absolute",top:0,right:0}
case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"}
case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"}
case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"}
case"BottomLeft":return{position:"absolute",bottom:0,left:0}
case"BottomCenter":return{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"}
case"BottomRight":return{position:"absolute",bottom:0,right:0}
default:return{position:"absolute",top:0,left:0}}}(n),key:n},r({cellSpacing:a.props.cellSpacing,currentSlide:a.state.currentSlide,frameWidth:a.state.frameWidth,goToSlide:function(e){return a.goToSlide(e)},nextSlide:function(){return a.nextSlide()},previousSlide:function(){return a.previousSlide()},slideCount:a.state.slideCount,slidesToScroll:a.state.slidesToScroll,slidesToShow:a.state.slidesToShow,slideWidth:a.state.slideWidth,wrapAround:a.props.wrapAround}))})}},{key:"render",value:function(){var e,t,n,r,
u=this,a=this.state,c=a.currentSlide,o=a.slideCount,i=a.frameWidth,l=this.props,s=l.frameOverflow,d=l.vertical,f=l.framePadding,p=l.slidesToShow,h=l.renderAnnounceSlideMessage,m=this.state.dragging||this.state.resetWrapAroundPosition?0:this.props.speed,v=(t=i,{boxSizing:"border-box",display:"block",height:(e=d)?t||"initial":"100%",margin:f,MozBoxSizing:"border-box",msTransform:"translate(0, 0)",overflow:s,padding:0,position:"relative",touchAction:"pinch-zoom ".concat(e?"pan-x":"pan-y"),
transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)"}),g=this.getTouchEvents(),y=this.getMouseEvents(),b=ye[this.props.transitionMode],S=xe(this.props.children)
return w.a.createElement("div",{className:["slider",this.props.className||""].join(" "),style:Me({},(n=this.props.width,r=this.state.slideWidth,{boxSizing:"border-box",display:"block",height:"auto",MozBoxSizing:"border-box",position:"relative",visibility:r?"inherit":"hidden",width:n}),this.props.style)},!this.props.autoplay&&w.a.createElement(be,{message:h({currentSlide:c,slideCount:o})}),w.a.createElement(C.a,{show:!0,start:{tx:0,ty:0},update:Me({},this.getOffsetDeltas(this.touchObject,this.props,
this.state),{timing:{duration:m,ease:this.state.easing},events:{end:function(){var e=u.props.vertical?0:u.getTargetLeft(),t=u.props.vertical?u.getTargetLeft():0
e===u.state.left&&t===u.state.top||u.setState({left:e,top:t,isWrappingAround:!1,resetWrapAroundPosition:!0},function(){u.setState({resetWrapAroundPosition:!1})})}}}),children:function(e){var t,r,a,n,o,i=e.tx,l=e.ty
return w.a.createElement("div",Me({className:"slider-frame",ref:function(e){return u.frame=e},style:v},g,y,{onClickCapture:u.handleClick}),w.a.createElement(b,Me({},(n=u.props,o=u.state,{animation:n.animation,cellSpacing:n.cellSpacing,currentSlide:o.currentSlide,dragging:n.dragging,isWrappingAround:o.isWrappingAround,left:o.left,slideCount:o.slideCount,slideHeight:o.slideHeight,slideOffset:n.slideOffset,slidesToShow:o.slidesToShow,slideWidth:o.slideWidth,top:o.top,vertical:n.vertical,wrapAround:n.wrapAround
}),{deltaX:i,deltaY:l}),(t=S,a=c,1<(r=p)?w.a.Children.map(t,function(e,t){var n=a<=t&&t<r+a?{"aria-hidden":"false",tabIndex:0}:{"aria-hidden":"true"}
return w.a.cloneElement(e,ke({},e.props,n))}):w.a.Children.map(t,function(e,t){var n=t!==a?{"aria-hidden":"true"}:{"aria-hidden":"false",tabIndex:0}
return w.a.cloneElement(e,ke({},e.props,n))}))))}}),this.renderControls(),this.props.autoGenerateStyleTag&&w.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }"}}))}}])&&Ne(t.prototype,n),r&&Ne(t,r),d}()
Oe.propTypes={afterSlide:i.a.func,animation:i.a.oneOf(["zoom"]),autoGenerateStyleTag:i.a.bool,autoplay:i.a.bool,autoplayInterval:i.a.number,beforeSlide:i.a.func,cellAlign:i.a.oneOf(["left","center","right"]),cellSpacing:i.a.number,enableKeyboardControls:i.a.bool,dragging:i.a.bool,easing:i.a.string,edgeEasing:i.a.string,frameOverflow:i.a.string,framePadding:i.a.string,heightMode:i.a.oneOf(["first","current","max"]),initialSlideHeight:i.a.number,initialSlideWidth:i.a.number,onResize:i.a.func,
pauseOnHover:i.a.bool,renderAnnounceSlideMessage:i.a.func,renderBottomCenterControls:i.a.func,renderBottomLeftControls:i.a.func,renderBottomRightControls:i.a.func,renderCenterCenterControls:i.a.func,renderCenterLeftControls:i.a.func,renderCenterRightControls:i.a.func,renderTopCenterControls:i.a.func,renderTopLeftControls:i.a.func,renderTopRightControls:i.a.func,slideIndex:i.a.number,slideOffset:i.a.number,slidesToScroll:i.a.oneOfType([i.a.number,i.a.oneOf(["auto"])]),slidesToShow:i.a.number,
slideWidth:i.a.oneOfType([i.a.string,i.a.number]),speed:i.a.number,swiping:i.a.bool,transitionMode:i.a.oneOf(["scroll","fade"]),vertical:i.a.bool,width:i.a.string,withoutControls:i.a.bool,wrapAround:i.a.bool},Oe.defaultProps={afterSlide:function(){},autoGenerateStyleTag:!0,autoplay:!1,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,enableKeyboardControls:!1,dragging:!0,easing:"easeCircleOut",edgeEasing:"easeElasticOut",frameOverflow:"hidden",framePadding:"0px",heightMode:"max",
onResize:function(){},pauseOnHover:!0,renderAnnounceSlideMessage:function(e){var t=e.currentSlide,n=e.slideCount
return"Slide ".concat(t+1," of ").concat(n)},renderBottomCenterControls:function(e){return w.a.createElement(ce,e)},renderCenterLeftControls:function(e){return w.a.createElement(le,e)},renderCenterRightControls:function(e){return w.a.createElement(ue,e)},slideIndex:0,slideOffset:25,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,style:{},swiping:!0,transitionMode:"scroll",vertical:!1,width:"100%",withoutControls:!1,wrapAround:!1}},Rm7n:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("pVnL")),i=r(n("QILm")),l=r(n("lwsE")),u=r(n("W8MJ")),c=r(n("a1gu")),s=r(n("Nsbk")),d=r(n("7W2i")),f=r(n("PJYZ")),p=r(n("lSNA")),h=r(n("q1tI")),o=r(n("17x9")),m=n("6XO9"),v=function(e){function o(){var e,r;(0,l.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(n))),(0,p.default)((0,f.default)((0,f.default)(r)),"handleChange",function(e,t,n){return r.props.onChange(n,r.props.attr)}),r}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props,t=(e.attr,e.size),n=(e.onChange,(0,i.default)(e,["attr","size","onChange"]))
return h.default.createElement(m.Check,(0,a.default)({},n,{size:t,onChange:this.handleChange}))}}]),o}(h.default.PureComponent);(t.default=v).propTypes={attr:o.default.string,size:o.default.oneOf(["regular","small"]),onChange:o.default.func},v.defaultProps={size:"small"}},Ro3d:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transfromProptype=void 0
var D=r(n("lSNA")),a=n("XrEr"),B=n("qOCw")
t.transfromProptype=function(e){var t=e.attr,n=e.language,r=e.unit,a=(0,B.selectWithlanguageUnit)(n),o=t.width,i=t.height,l=t.lineHeight,u=t.opacity,c=t.borderRadius,s=t.borderWidth,d=t.borderColor,f=t.backgroundColor,p=t.color,h=t.fontSize,m=t.fontFamily,v=t.fontStyle,g=t.boxShadow,y=t.textAlign,b=t.x,S=t.y,w=b&&(0,D.default)({},U[a].x,F(b,r,a)),C=S&&(0,D.default)({},U[a].y,F(S,r,a)),E=o&&(0,D.default)({},U[a].width,F(o,r,a)),k=i&&(0,D.default)({},U[a].height,F(i,r,a)),_=l&&(0,D.default)({},U[a].lineHeight
,F(l,r,a)),x=u&&(0,D.default)({},U[a].opacity,F(u,r,a)),T=c&&(0,D.default)({},U[a].borderRadius,F(c,r,a)),M=f&&(0,D.default)({},U[a].backgroundColor,F(f,r,a,!0)),N=p&&(0,D.default)({},U[a].color,F(p,r,a,!0)),I=h&&(0,D.default)({},U[a].fontSize,F(h,r,a)),O=m&&(0,D.default)({},U[a].fontFamily,F(m,r,a)),R=v&&(0,D.default)({},U[a].fontStyle,F(v,r,a)),P=g&&(0,D.default)({},U[a].shadows,g),A=s&&(0,D.default)({},U[a].borderWidth,F(s,r,a)),j=d&&(0,D.default)({},U[a].borderColor,F(d,r,a,!0)),L=y&&(0,D.default)({},
U[a].textAlign,y)
return Object.assign({},w,C,E,k,_,x,T,A,j,M,N,I,R,L,P,O)}
var F=function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3]
return e=e.toString(),"pt"!==n?e.replace(t,n):r?(0,a.getUIColor)(e):e.replace(t,"")},U={px:{x:"left",y:"top",width:"width",height:"height",lineHeight:"line-height",opacity:"opacity",border:"border",borderRadius:"border-radius",borderColor:"border-color",borderWidth:"border-width",backgroundColor:"background-color",color:"color",fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",textAlign:"text-align",shadows:"box-shadow",innerShadows:"inner-shadow"},dp:{x:"left",y:"top",
width:"layout_width",height:"layout_height",border:"border",opacity:"opacity",color:"textColor",fontSize:"textSize",fontFamily:"font-family",fontStyle:"font-style",textAlign:"gravity",backgroundColor:"background",borderRadius:"radius",borderColor:"border-color",lineHeight:"line-height",borderWidth:"border-width",shadows:"box-shadow",innerShadows:"inner-shadow"},pt:{x:"x",y:"y",width:"width",height:"height",opacity:"opacity",border:"border",backgroundColor:"backgroundColor",color:"text-color",
textAlign:"alignment",fontSize:"fontSize",fontFamily:"fontFamily",fontStyle:"font-style",borderRadius:"cornerRadius",borderColor:"borderColor",borderWidth:"border-width",lineHeight:"lineSpacing"}}},RrAf:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createSocketStore=t.initialSocketState=void 0
var c=r(n("MVZn")),s=r(n("o0o1")),d=r(n("yXPU")),f=n("r9Vx"),p=n("os03"),h=n("LPEl"),m=function(){},v=function(e){console.error("ERROR",e)},g={userSocket:null}
t.initialSocketState=g
t.createSocketStore=function(){var n,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:g,e=(0,p.createEventTarget)(),r=e.clear,a=e.addEventListener,o=e.removeEventListener,i=e.dispatchEvent,l=(0,h.createStateStore)(t),u=function(){var e=l.getState().userSocket
e&&e.close(),r(),n=Promise.resolve("HEAD"),l.setState(t)}
return(0,c.default)({},l,{clear:u,queueAsync:function(e){var t=n.then(e)
return n=t.then(m,v),t},getIsOpen:function(){var e=l.getState().userSocket
return Boolean(e&&e.connected)},getServerTimestamp:function(){var e=l.getState().userSocket
return e?e.getServerTimestamp():Date.now()},openSocket:function(e){var t=e.userId
u(),t||console.warn("[SocketStore][openSocket] use dummy socket")
var n,r=t?(0,f.createUserSocket)({userId:t,socketUrl:location.origin,socketPath:"/imock-socket"}):{DUMMY_SOCKET:"DUMMY_SOCKET",connected:!1,close:function(){},on:function(){},emitAsync:(n=(0,d.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),getServerTimestamp:function(){return.001*Date.now()}}
r.on("error",function(e){console.log("socket error",e)}),r.on("connect",(0,d.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("user socket connected"),e.next=3,r.calibrateTimestampOffsetAsync()
case 3:i({type:"socket:open",payload:{userSocket:r}}),console.log("user socket open")
case 6:case"end":return e.stop()}},e,this)}))),l.setState({userSocket:r})},dispatchEvent:i,addEventListener:a,removeEventListener:o})}},RtVw:function(e,t,n){e.exports={fullscreen:"_1yqBFlDRjPD3syHb3ZboIK"}},S7Zs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArtboardsByProjectCid=void 0
var r=n("t3Un")
t.fetchArtboardsByProjectCid=function(e){return window.MBArtboards?{artboards:Object.values(window.MBArtboards).map(function(e){return e.artboard})}:(0,r.requestJSON)("".concat("/api/v2/sketch","/artboards.json?project_cid=").concat(e))}},S8MF:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var y=a(n("RIqP")),o=a(n("o0o1")),l=a(n("yXPU")),u=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),b=r(n("q1tI")),h=a(n("17x9")),S=n("rbsZ"),m=n("t3Un"),v=n("XkTy"),w=n("Gbs1"),C=n("1iCU"),E=n("6XO9"),k=a(n("PYuP"))
n("cWnZ")
var g=window.MBServer,_="file:"===location.protocol?"https://".concat(g):"https://".concat(location.host),x=[{value:"highlight",label:I18N.highlight_clickable},{value:"wechat",label:I18N.view_in_browser}],T=function(e){function t(e){var i
return(0,u.default)(this,t),i=(0,c.default)(this,(0,s.default)(t).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(i)),"updateEmbeddedHTML",function(){var o=i.props.app
if(o.homeScreen()){var e=(0,w.getProjectShellSizeWithOrientation)(o,o.shell_type,o.homeScreen().orientation),t=80+e.width,n=80+e.height
i.setState({embeddedHTML:'<iframe src="'.concat(_,"/app/").concat(o.access_token,'/embed" ')+'width="'.concat(t,'" height="').concat(n,'" ')+'allowTransparency="true" frameborder="0"></iframe>'})}else(0,m.requestJSON)("/api/v2/projects/orientations.json",{}).then(function(e){var t=e.projects.find(function(e){return e.cid===o.cid}).orientation,n=(0,w.getProjectShellSizeWithOrientation)(o,o.shell_type,t),r=80+n.width,a=80+n.height
i.setState({embeddedHTML:'<iframe src="'.concat(_,"/app/").concat(o.access_token,'/embed" ')+'width="'.concat(r,'" height="').concat(a,'" ')+'allowTransparency="true" frameborder="0"></iframe>'})})}),(0,p.default)((0,f.default)((0,f.default)(i)),"setQRCodeRef",function(e){return i.$qrcode=e}),(0,p.default)((0,f.default)((0,f.default)(i)),"refreshQRCode",function(){return $(i.$qrcode).empty().qrcode({text:i.state.sharingURL+"?via=qrcode",width:100,height:100})}),(0,p.default)((0,f.default)((0,f.default)(i)),
"handleSelectAll",function(e){return e.target.select()}),(0,p.default)((0,f.default)((0,f.default)(i)),"generateSharingURL",function(e){return i.setState({sharingURL:"https://".concat(MB.isHTMLZip()?window.MBServer:location.host,"/app/").concat(e)})}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleRefresh",(0,l.default)(o.default.mark(function e(){var t
return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.confirmAsync)({title:I18N.regenerate_url_title,desc:I18N.regenerate_url_desc})
case 2:if(!e.sent){e.next=6
break}t=Math.uuid(31),i.generateSharingURL(t),i.setAttr("access_token",t)
case 6:case"end":return e.stop()}},e,this)}))),(0,p.default)((0,f.default)((0,f.default)(i)),"handleUpdateShell",function(e){var t=i.props.app
t.shell_type=e,t.lsave(MB.user.id===t.owner_id),MB.AutoSaver&&MB.AutoSaver.triggerSave(),i.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t.shell_type}}),i.forceUpdate()}),(0,p.default)((0,f.default)((0,f.default)(i)),"handlePasswordChange",function(e){return i.setAttr("password",e)}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleAccess",function(e){var t=e.value
"restricted"===t&&(i.props.app.password=""),i.setAttr("access",t)}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleCollaborators",function(){i.setState({isCollaboratorModalOpen:!0})}),(0,p.default)((0,f.default)((0,f.default)(i)),"handlePreviewSettings",function(e){var t=e.idxList,n=i.props.app,r=new Set(t)
Object.assign(n,{highlight:r.has(0),wechat:r.has(1)}),n.lsave(),MB.AutoSaver&&MB.AutoSaver.triggerSave(),i.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:n.highlight}}),i.forceUpdate()}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleSlackWebHook",function(e){return i.setAttr("slack_web_hook_url",e.target.value)}),(0,p.default)((0,f.default)((0,f.default)(i)),"onCloseCollaboratorModal",function(){return i.setState({isCollaboratorModalOpen:!1})}),i.state={
sharingURL:"",embeddedHTML:"en"===window.MBLocale?"generating code…":"正在生成…",isCollaboratorModalOpen:!1},i}return(0,d.default)(t,e),(0,i.default)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.app
this.generateSharingURL(e.access_token)}},{key:"componentDidMount",value:function(){this.updateEmbeddedHTML(),setTimeout(this.refreshQRCode,50)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.app,n=e.isOpen,r=this.props.isOpen
r&&!n?(this.setState({sharingURL:"",embeddedHTML:"en"===window.MBLocale?"generating code…":"正在生成…"}),$(this.$qrcode).empty()):!r&&n&&(this.updateEmbeddedHTML(),this.generateSharingURL(t.access_token))}},{key:"componentDidUpdate",value:function(e,t){var n=e.isOpen,r=t.sharingURL,a=this.props.isOpen,o=this.state.sharingURL;(!n&&a||r!==o)&&setTimeout(this.refreshQRCode,50)}},{key:"setAttr",value:function(e,t){this.props.app[e]=t,this.props.app.lsave(),MB.AutoSaver&&MB.AutoSaver.triggerSave(),this.forceUpdate()
}},{key:"render",value:function(){var e=this.props,t=e.isOpen,n=e.onClose,r=e.app,a=e.dispatch,o=this.state,i=o.sharingURL,l=o.embeddedHTML,u=o.isCollaboratorModalOpen,c=/edge.modao.cc/.test(location.href),s=r.owner_id===MB.user.id,d=s||r.canAdmin(),f=s||r.canEdit(),p=!/^\/app\//i.test(location.pathname),h=[{value:"restricted",label:b.default.createElement("span",{className:"restricted-access"},b.default.createElement("span",null,I18N.restricted_intro),"restricted"===r.access&&b.default.createElement(
E.Button,{type:"text",className:"manage-collaborators",onClick:this.handleCollaborators},I18N.manage))},{value:"private",label:b.default.createElement("span",null,I18N.private_intro,b.default.createElement("p",null,"private"===r.access&&(MB.user.id&&MB.user.limitation.encryptable?b.default.createElement(E.Input,{placeholder:I18N.sharing_password,value:r.password||"",onChange:this.handlePasswordChange,readOnly:!d}):b.default.createElement(E.Button,{type:"text",className:"renew",onClick:S.goToPricingPage},
I18N.password_protection))))}],m=x.reduce(function(e,t,n){return r[t.value]?(0,y.default)(e).concat([t.value]):e},[]),v=r.team_cid?r.cteam():r,g=(0,w.canSetDeviceShell)(r)?C.SHELL_TYPE_LIST:C.SHELL_TYPE_LIST_WITHOUT_DEVICE
return b.default.createElement(E.Modal,{isOpen:t,className:"sharing-modal",title:I18N.share,onClose:n},b.default.createElement("section",{className:"qrcode",ref:this.setQRCodeRef}),b.default.createElement("section",{className:"sharing-url"},b.default.createElement(E.Input,{readOnly:!0,value:i,onClick:this.handleSelectAll}),d&&b.default.createElement(E.Button,{type:"primary",onClick:this.handleRefresh},I18N.regenerate)),b.default.createElement("section",{className:"sharing-code"},b.default.createElement("p",
null,I18N.embed_tips),b.default.createElement(E.Textarea,{readOnly:!0,onClick:this.handleSelectAll,value:l})),p&&b.default.createElement("section",null,b.default.createElement(E.FormEntry,{name:I18N.access_permission},b.default.createElement(E.RadioGroup,{isDisabled:!d,optionList:h,onChange:this.handleAccess,value:r.access}))),f&&b.default.createElement("section",null,b.default.createElement(E.FormLabel,{name:I18N.default_shell_field},b.default.createElement(E.Select,{optionList:g,value:r.shell_type,
onChange:this.handleUpdateShell}))),d&&b.default.createElement("section",null,b.default.createElement(E.FormEntry,{name:I18N.preview_settings},b.default.createElement(E.CheckGroup,{optionList:x,onChange:this.handlePreviewSettings,valueList:m}))),c&&b.default.createElement(E.FormEntry,{name:"Slack Web Hook"},b.default.createElement("input",{type:"text",value:r.slack_web_hook_url||"",onBlur:this.handleSlackWebHook})),b.default.createElement(k.default,{isOpen:u,onClose:this.onCloseCollaboratorModal,dispatch:a,
host:v,userRole:v.owner_id===MB.user.id?"owner":v.roleByUid(MB.user.id)}))}}]),t}(b.PureComponent)
t.default=T,(0,p.default)(T,"propTypes",{dispatch:h.default.func.isRequired,isOpen:h.default.bool,onClose:h.default.func,app:h.default.object})},S9W4:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.generateItems=t.getItemsWithPrevData=void 0
var u=n("IB8Z")
t.getItemsWithPrevData=function(r,a){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,t=3<arguments.length?arguments[3]:void 0,i=[];(0,u.getWidgetsByScreenCid)(r.cid,t).forEach(function(e){if("sticky"!==e.name){var t=Widgetstate.find(a+e.cid)||Widgetstate.find("default"+e.cid)||e,n=Widgetstate.find(o+e.cid)||Widgetstate.find("default"+e.cid)||e
Object.assign(t,{z:n.z,gid:n.gid,timestamp:n.timestamp}),t.cid=e.cid,t.screen_cid=r.cid,i.push(t)}})
var l=new Set,e=r.cpanels().map(function(e){l.add(e.template_cid)
var t=Panelstate.find(a+e.cid)||Panelstate.find("default"+e.cid)||e,n=Panelstate.find(o+e.cid)||Panelstate.find("default"+e.cid)||e
return Object.assign(t,{z:n.z,gid:n.gid,timestamp:n.timestamp}),t.cid=e.cid,t.template_cid=e.template_cid,t.multi_states=e.multi_states,t.screen_cid=r.cid,t})
return l.forEach(function(e){Template.find(e).cscreens().forEach(function(e){(0,u.getWidgetsByScreenCid)(e.cid,t).forEach(function(e){"sticky"!==e.name&&i.push(e)})})}),e.concat(i)}
t.generateItems=function(n,r,t){var a=[];(0,u.getWidgetsByScreenCid)(n.cid,t).forEach(function(e){if("sticky"!==e.name){var t=Widgetstate.find(r+e.cid)||Widgetstate.find("default"+e.cid)||e
t.cid=e.cid,t.screen_cid=n.cid,a.push(t)}})
var o=new Set,e=n.cpanels().map(function(e){o.add(e.template_cid)
var t=Panelstate.find(r+e.cid)||Panelstate.find("default"+e.cid)||e
return t.cid=e.cid,t.template_cid=e.template_cid,t.multi_states=e.multi_states,t.screen_cid=n.cid,t})
return o.forEach(function(e){Template.find(e).cscreens().forEach(function(e){(0,u.getWidgetsByScreenCid)(e.cid,t).forEach(function(e){"sticky"!==e.name&&a.push(e)})})}),e.concat(a)}},S9rr:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScrollBar=void 0
var a=r(n("vOnD")).default.div.withConfig({displayName:"styles__StyledScrollBar",componentId:"sc-1i763xb-0"})(["position:absolute;top:",";left:",";right:0;bottom:0;z-index:4;.track{position:absolute;background:",";pointer-events:auto;.handler{position:absolute;cursor:pointer;.thumb{position:absolute;pointer-events:none;border-radius:4px;transition:background 0.2s ease-in-out;}}}.x-track{left:0;right:11px;bottom:0;height:12px;.handler{bottom:2px;height:10px;.thumb{bottom:0;width:100%;height:6px;background:",
";}}}.y-track{top:0;bottom:11px;right:0;width:12px;.handler{right:2px;width:10px;.thumb{right:0;height:100%;width:6px;background:",";}}}.x-track .handler:hover .thumb{background:",";}.y-track .handler:hover .thumb{background:",";}"],"17px","17px",function(e){return e.theme.scrollbar.track.bg},function(e){return e.theme.scrollbar.thumb.x_bg},function(e){return e.theme.scrollbar.thumb.y_bg},function(e){return e.theme.scrollbar.thumb.x_hover_bg},function(e){return e.theme.scrollbar.thumb.y_hover_bg})
t.StyledScrollBar=a},"SA+Z":function(e,t,n){var r=n("wTVA"),a=n("EbDI"),o=n("wkBT")
e.exports=function(e){return r(e)||a(e)||o()}},SFPg:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var E=a(n("pVnL")),k=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),_=r(n("q1tI")),x=a(n("vmbo")),T=n("/5+U"),f=function(e){function C(){return(0,o.default)(this,C),(0,l.default)(this,(0,u.default)(C).apply(this,arguments))}return(0,c.default)(C,e),(0,i.default)(C,[{key:"render",value:function(){var e=this.props,t=e.layer,n=e.parentRect,r=e.treeProps,a=t.width,o=t.height,i=t.top,l=t.left,u=t.z,c=t.childrenLayers
if(!1===t.v)return null
var s="layer"===t.kind?0:t.rotation||0,d=(0,T.getMinBoundingRect)({width:a,height:o,rotate:s,top:i,left:l}),f=(0,k.default)(d,4),p=f[0],h=f[1],m=f[2],v=f[3],g={top:i,left:l,width:a,height:o},y=h,b=m,S=v,w={top:(p-n.top)/n.height*100+"%",left:(y-n.left)/n.width*100+"%",width:b/n.width*100+"%",height:S/n.height*100+"%",zIndex:u||0}
return _.default.createElement("div",{"data-id":t.id,className:"layer-tree-node",style:w},_.default.createElement(x.default,(0,E.default)({layer:t},r)),c&&0<c.length&&c.map(function(e){return _.default.createElement(C,{key:e.id,layer:e,parentRect:g,treeProps:r})}))}}]),C}(_.Component)
t.default=f,(0,s.default)(f,"propTypes",{layer:d.default.object,parentRect:d.default.object,treeProps:d.default.object})},Sxd8:function(e,t){e.exports=function(e){return e}},T7iu:function(e,t,n){"use strict"
n("edRh"),n("Xgir"),n("fRjM"),n("4MIG"),n("rXnp"),n("xl64"),n("HLqo"),n("2rXa"),n("dSX7")},TKrE:function(e,t){e.exports=function(e){return e}},TT1N:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.FormEntry=i,t.FormLabel=function(e){return l.default.createElement(i,(0,a.default)({},e,{isLabel:!0}))}
var a=r(n("pVnL")),l=r(n("q1tI")),o=r(n("17x9"))
function i(e){var t=e.className,n=e.name,r=e.children,a=e.type,o=e.isLabel,i=e.isRequired
return l.default.createElement(o?"label":"div",{className:"form-entry ".concat(t),type:a},n&&l.default.createElement("span",{className:"key"},n,i&&l.default.createElement("span",{className:"required-sign"},"*")),l.default.createElement("span",{className:"val"},r))}n("qY2g"),i.propTypes={className:o.default.string,children:o.default.any,name:o.default.any,type:o.default.string,isLabel:o.default.bool,isRequired:o.default.bool},i.defaultProps={className:"",isLabel:!1}},TZdj:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Comment,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:comments:update",payload:o(e,a,i)})})},s={entryMap:{"comments:refresh":c(a.refreshStateList,!1),"comments:add":c(a.addState,!1),"comments:add-local":c(a.addState,!0),"comments:update":c(a.updateState,!1),"comments:update-local":c(a.updateState,!0),"comments:delete":c(a.deleteState,!1),"comments:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},ThAd:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=location.search
0===e.indexOf("?")&&(e=e.substr(1))
var o={}
return e.split("&").forEach(function(e){var t=e.split("="),n=(0,i.default)(t,2),r=n[0],a=n[1]
r&&(o[r]=!a||decodeURIComponent(a))}),o}
var i=r(n("J4zp"))},TjoA:function(e,t,n){e.exports={"distance-measurement-container":"ofVDlkqpF9Yunky2QkBPn"}},U9kS:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentHeaderGlobalStyle",{enumerable:!0,get:function(){return g.CommentHeaderGlobalStyle}}),t.CommentThread=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),v=r(n("q1tI")),d=a(n("17x9")),f=a(n("vOnD")),p=a(n("zkrS")),h=n("l0oT"),m=n("FC/4"),g=n("6iHT"),y=p.default.MB,b=p.default.I18N,S=function(e){function n(e){var t
return(0,o.default)(this,n),(t=(0,l.default)(this,(0,u.default)(n).call(this,e))).focusThread=function(){return!t.props.isScrollFocus&&t.props.commentOperations.setHoverFocusCommentThreadCid(t.props.commentThreadCid)},t.blurThread=function(){return t.props.isBlur&&t.props.commentOperations.setHoverFocusCommentThreadCid(null)},t.setRef=function(e){t.mainRef=e},t.mainRef=null,t.toggleUnfoldComment=function(){t.setState({isUnfold:!t.state.isUnfold}),y.event("ga","展开评论","运行页")},t.state={isUnfold:!1},t}return(0,
c.default)(n,e),(0,i.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.commentList.length>e.commentList.length&&this.setState({isUnfold:!0}),this.props.isScrollFocus&&this.props.isScrollFocus!==e.isScrollFocus&&this.mainRef){var t=this.mainRef.parentElement,n=t.getBoundingClientRect().top,r=t.scrollTop+this.mainRef.getBoundingClientRect().top-n;(0,h.scrollTo)(t,r,20)}}},{key:"render",value:function(){var e=this.props,t=e.commentList,n=e.permission,r=e.commentMarkerIndex,
a=e.commentOperations,o=e.isBlur
if(!t.length)return null
var i=this.state.isUnfold,l=t[0],u=3<t.length,c=i||!u?t.slice(1):t.slice(1,3)
return v.default.createElement(w,{ref:this.setRef,className:o?"comment-blur":"",onMouseEnter:this.focusThread,onMouseLeave:this.blurThread},v.default.createElement(E,{markIndex:r,comment:l,permission:n,commentOperations:a}),c.map(function(e){return v.default.createElement(E,{sub:!0,key:e.cid,comment:e,permission:a.getPermission(e.user_id),commentOperations:a})}),u&&v.default.createElement("div",{className:"unfold",onClick:this.toggleUnfoldComment},i?b.preview.comment.fold:b.preview.comment.unfold))}}]),n}(
v.PureComponent)
t.CommentThread=S,(0,s.default)(S,"propTypes",{permission:d.default.object,isScrollFocus:d.default.bool,isBlur:d.default.bool,commentList:d.default.array,commentMarkerIndex:d.default.number,commentThreadCid:d.default.string,commentOperations:d.default.object})
var w=f.default.div.withConfig({displayName:"CommentLayerThread__CommentThreadDiv",componentId:"sc-18dqjl1-0"})(["width:220px;padding:20px 0;&.comment-blur{opacity:0.4;}& > .unfold{cursor:pointer;display:flex;justify-content:flex-end;}"]),C=f.default.div.withConfig({displayName:"CommentLayerThread__EntryMainBgDiv",componentId:"sc-18dqjl1-1"})(["width:100%;margin-bottom:10px;border-radius:4px;background:#f7f7fa;"]),E=function(e){function t(e){var n
return(0,o.default)(this,t),(n=(0,l.default)(this,(0,u.default)(t).call(this,e))).operationPack={getCommentValue:function(){return n.props.comment.message},doCreateComment:function(e){return e&&n.props.commentOperations.doCreateComment(e,n.props.comment.thread_cid)},doUpdateComment:function(e){return n.props.commentOperations.doUpdateComment({cid:n.props.comment.cid,message:e})},doDeleteCard:function(){return n.props.sub?n.props.commentOperations.doDeleteComment(n.props.comment
):n.props.commentOperations.doDeleteCommentThread(n.props.comment.thread_cid)}},n.startEdit=function(){n.setState({editStore:(0,m.createTextEditStore)({value:n.operationPack.getCommentValue(),isEditing:!0},{onEnd:function(e){var t=e.value
t=(t||"").trim(),n.operationPack.doUpdateComment(t),n.closeEdit()}})}),y.event("ga","二次编辑","运行页")},n.closeEdit=function(){return n.setState({editStore:null})},n.startReply=function(){return n.setState({replyStore:(0,m.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return n.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value;(t=(t||"").trim())&&n.operationPack.doCreateComment(t),n.closeReply()}})})},n.closeReply=function(){return n.setState({replyStore:null,isValidReply:!1})},n.state={editStore:null,replyStore:null,isValidReply:!1},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,n=e.markIndex,r=e.comment,a=e.permission,o=e.commentOperations,i=this.state,l=i.editStore,u=i.replyStore,c=i.isValidReply,
s=o.getUserProfile(r.user_id),d=s.avatar,f=s.name,p=v.default.createElement(g.ContentMessage,{sub:t,comment:r,textEditStore:l,cancelEdit:this.closeEdit}),h=!l&&(0,g.commonContentFooter)(r,u,c,a.create&&this.startReply,this.closeReply),m=t?l?"sub remove-background":"sub":""
return v.default.createElement(k,{className:m},v.default.createElement(g.ContentHeader,{sub:t,avatar:d,name:f,markIndex:n,startEdit:!l&&a.update?this.startEdit:null,doDelete:!l&&a.delete?this.operationPack.doDeleteCard:null}),!t&&v.default.createElement(C,null,p,h),t&&p,t&&h)}}]),t}(v.PureComponent);(0,s.default)(E,"propTypes",{sub:d.default.bool,markIndex:d.default.number,comment:d.default.object.isRequired,permission:d.default.object.isRequired,commentOperations:d.default.object.isRequired})
var k=f.default.div.withConfig({displayName:"CommentLayerThread__CommentCardDiv",componentId:"sc-18dqjl1-2"})(["display:flex;flex-flow:column;border-radius:4px;&.sub{margin:0 0 10px 20px;width:200px;background:#f7f7fa;}&.remove-background{background:#fff;}"])},UJpD:function(e,t,n){e.exports={detector:"_2Wbc2EU813xLnapfNPnrUi"}},ULaQ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=n("G4qV"),i=n("upRB"),l=r(n("EWR0")),u=(0,o.createSelector)([i.getRunnerState],function(e){return{runnerState:e}}),c=(0,a.connect)(function(e){return u(e)})(l.default)
t.default=c},UUBB:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9")),h=n("vbsp"),m=a(n("TSYQ")),v=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"handleChange",function(e){if(!n.props.disabled&&!e.currentTarget.classList.contains("disabled")){var t=e.currentTarget.dataset.value
n.props.handleChange(t)}}),(0,f.default)((0,d.default)((0,d.default)(n)),"getBgStyle",function(e,t){var n=0===e,r=e===t-1
if(0<=e)return{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:n?"transparent":"",borderRightColor:r?"transparent":""}}),n}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var l=this,e=this.props,t=e.options,u=e.value,n=e.disabled,r=e.className,c=t.findIndex(function(e){return e.value===u}),s=this.getBgStyle(c,t.length)
return p.default.createElement(h.StyledRadioLine,{className:(0,m.default)("radio-line",r,{disabled:n})},t.map(function(e,t){var n=e.label,r=e.value,a=e.compatibleValues,o=e.disabled,i=!o&&(a?a.includes(u):u===r)
return p.default.createElement("li",{className:(0,m.default)("radio-option",{active:i},{disabled:o}),key:r,"data-value":r,onClick:l.handleChange},0===t&&p.default.createElement("div",{className:(0,m.default)("move-cube",{active:0<=c}),style:s}),p.default.createElement("div",{className:"radio-content"},n))}))}}]),o}(p.PureComponent);(t.default=v).propTypes={options:o.default.arrayOf(o.default.shape({label:o.default.node,value:o.default.any})),className:o.default.string,value:o.default.any,
disabled:o.default.bool,handleChange:o.default.func}},UbMB:function(e,t,n){var r
!function(){"use strict"
var o={}.hasOwnProperty
function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t]
if(n){var r=typeof n
if("string"===r||"number"===r)e.push(this&&this[n]||n)
else if(Array.isArray(n))e.push(i.apply(this,n))
else if("object"===r)for(var a in n)o.call(n,a)&&n[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},UfWW:function(e,t,n){var o=n("KwMD"),i=n("ut/Y"),l=n("Sxd8"),u=Math.max
e.exports=function(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var a=null==n?0:l(n)
return a<0&&(a=u(r+a,0)),o(e,i(t,3),a)}},Ur7v:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=n("wYtL"),m=a(n("i6OX")),v=a(n("S8MF")),g=function(e){function t(){var e
return(0,o.default)(this,t),e=(0,l.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(e)),"handleShare",function(){e.setState({isSharingModalOpen:!0}),MB.event("ga","点击了分享按钮","运行页")}),(0,d.default)((0,s.default)((0,s.default)(e)),"onCloseSharingModal",function(){MB.event("zhuge","运行页-预览-分享弹窗",{"边框类型":MB.project().shell_type,"链接高亮":MB.project().highlight?"开启":"关闭"}),e.setState({isSharingModalOpen:!1})}),e.state={isSharingModalOpen:!1},e}return(0,c.default)(t,e),(0,i.default
)(t,[{key:"render",value:function(){var e=this.props.dispatch,t=this.state.isSharingModalOpen
return p.default.createElement(h.Tooltip,{position:"bottom",duration:1e3,content:{hover:I18N.preview.share},tipClassName:"marign-top-20"},p.default.createElement(m.default,{type:"dora",name:"share",className:"share-icon",onClick:this.handleShare}),t&&p.default.createElement(v.default,{dispatch:e,isOpen:t,onClose:this.onCloseSharingModal,app:MB.project()}))}}]),t}(p.PureComponent);(t.default=g).propTypes={dispatch:f.default.func}},"Uu/L":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScreenItem=t.StyledScreenList=void 0
var a=r(n("vOnD")),o=n("mggN"),i=a.default.ul.withConfig({displayName:"styles__StyledScreenList",componentId:"sc-1v51q5m-0"})(["&,ol,li{list-style:none;}"])
t.StyledScreenList=i
var l=a.default.div.withConfig({displayName:"styles__StyledScreenItem",componentId:"sc-1v51q5m-1"})([""," .screen-name{display:flex;align-items:center;width:100%;padding-right:5px;.icon{flex-shrink:0;margin-right:4px;}span{",";}}.actions{padding:0 10px;.actions-ellipsis{font-size:14px;pointer-events:none;}&:hover{.actions-ellipsis{color:#298df8;}}}.child-screens{position:relative;}&.wait-hover *{pointer-events:none;}&.linking{color:",";background:#bbd8fe;.actions{display:none;}}"],o.listItem,o.textEllipsis,
function(e){return e.theme.listItem.tc})
t.StyledScreenItem=l},Vk5q:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.onFallbackError=t.doFallbackSaveItem=t.onSocketError=t.doSocketBatchSave=t.getSaveItemInfo=t.processSaveQueue=void 0
var s=r(n("o0o1")),a=r(n("yXPU")),u=n("t77w"),d=n("os03"),f=n("ycqN"),p=window.MB
t.processSaveQueue=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r={},a=[]
e.forEach(function(e){var t=e.record,n="".concat(t.constructor.className,"-").concat(t.cid)
void 0===r[n]&&(r[n]=a.length),a[r[n]]=e})
var n=new Set
return a.forEach(function(e){var t=e.record
return e.isDelete&&["Widget","Panel"].includes(t.constructor.className)&&n.add(t.cid)}),a.filter(function(e){var t=e.record
return!("Widgetstate"===t.constructor.className&&n.has(t.widget_cid)||"Panelstate"===t.constructor.className&&n.has(t.panel_cid))}).map(function(e){var t=e.record,n=e.isDelete,r=t.constructor.className,a=n?"DELETE":"Asset"===r?"POST":"PUT",o="POST"===a?"/".concat(r.toLowerCase(),"s"):"/".concat(r.toLowerCase(),"s/").concat(encodeURIComponent(t.id)),i=JSON.stringify("DELETE"===a?{cid:t.cid,mtime:t.mtime}:(0,u.compressRichText)(t.toJSON())),l={className:r,cid:t.cid}
return"Panel"===r&&Template.find(t.template_cid),{url:o,method:a,body:i,extraInfo:l}})}
t.getSaveItemInfo=function(e){var t=e.url,n=e.method,r=e.body
return JSON.stringify({url:t,method:n,bodyLength:r?r.length:0})}
var o=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.saveChunk,t.attempt,t.timeout,r=p.project()?p.project().template?p.project().project_cid:p.project().cid:"",a={id:p.user.id,name:p.user.name,avatar:p.user.avatar},e.next=5,p.Pusher.requestBatchSave({batchSaveQueue:n,rootProjectCid:r,fromUser:a})
case 5:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doSocketBatchSave=o
var i=function(){var n=(0,a.default)(s.default.mark(function e(t,n){var r,a
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.saveChunk,n.attempt,a=n.timeout,t.message&&t.message.toLowerCase().includes("timeout"))return p.event("ga-0","send","event","batch-saving","batch saving timeout","(".concat(r.length,")(").concat(a,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=7,(0,d.setTimeoutAsync)(5e3)
e.next=9
break
case 7:e.next=12
break
case 9:return p.event("ga-0","send","event","batch-saving","batch saving error: ".concat(t.status),"[".concat(t.status,"] ").concat(t.message||t,": (").concat(r.length,"item|").concat(a,"ms)(").concat(p.user.email,")")),e.next=12,(0,f.SAVE_NUKE_SEQUENCE)(t,t.status)
case 12:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.onSocketError=i
var l=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,l,u,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.saveItem,r=n.url,a=n.method,o=n.body,i=t.attempt,l=t.timeout,e.next=3,(0,d.fetchLikeRequest)(r,{headers:{"Content-Type":"application/json"},method:a,body:o,timeout:l})
case 3:if(u=e.sent,200!==(c=u.status))return p.event("ga-0","send","event","saving","saving error: ".concat(c),"".concat(c,": ").concat(r,"(").concat(a,"|x").concat(i,"|").concat(l,"ms)(").concat(p.user.email,")")),e.next=9,(0,f.SAVE_NUKE_SEQUENCE)(new Error("fallback saving error: ".concat(c)),c)
e.next=9
break
case 9:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doFallbackSaveItem=l
var c=function(){var n=(0,a.default)(s.default.mark(function e(t,n){var r,a,o,i,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.saveItem,a=r.url,o=r.method,i=n.attempt,l=n.timeout,p.event("ga-0","send","event","saving","fallback saving error: ".concat(t.message||t),"".concat(t.message||t,": ").concat(a,"(").concat(o,"|x").concat(i,"|").concat(l,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=6,(0,d.setTimeoutAsync)(5e3)
case 6:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.onFallbackError=c},VkAN:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},W4ny:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.DEFAULT_DATA=void 0
t.DEFAULT_DATA={slides:[{asset:"",link:""},{asset:"",link:""}],autoShift:!0,interval:2e3,radius:0,showPointers:!0,pointerBg:"#dddddd",pointerFg:"#333333",vertical:!1}},WVP6:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.createReduxEntry=function(){var a=null,o={},n=function(e,t){if("string"!=typeof e)throw new Error("[ReduxEntry][setEntry] non-string actionType: "+e)
if("function"!=typeof t)throw new Error("[ReduxEntry][setEntry] non-function entryFunction: "+e+", "+t)
o[e]&&console.warn("[ReduxEntry][setEntry] possible unexpected entry overwrite: "+e),o[e]=t}
return{middleware:function(e){if("function"!=typeof e.getState||"function"!=typeof e.dispatch)throw new Error("[ReduxEntry][middleware] invalid reduxMiddlewareStore")
if(null!==a)throw new Error("[ReduxEntry][middleware] already set reduxMiddlewareStore")
return a=e,function(r){return function(e){return!0===((n=o[(t=e).type])&&n(a,t))||r(e)
var t,n}}},setEntry:n,setEntryMap:function(t){return Object.keys(t).forEach(function(e){return n(e,t[e])})}}},t.createStateStore=function(r){if(void 0===r)throw new Error("[ReduxEntry][createStateStore] initialState expected")
return{getState:function(){return r},setState:function(e){return r=e},wrapEntry:function(n){return function(e,t){return n(r,e,t)}}}},t.createStateStoreReducer=function(a,e){var o=e.getState,i=e.setState
return function(e,t){var n=t.type,r=t.payload
return n===a&&i(r),o()}},t.createStateStoreMergeReducer=function(a,e){var o=e.getState,i=e.setState
return function(e,t){var n=t.type,r=t.payload
return n===a&&i(l({},o(),r)),o()}}},WcC0:function(e,t,n){},WtCM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("a1gu")),i=r(n("Nsbk")),l=r(n("W8MJ")),u=r(n("7W2i")),c=r(n("lSNA")),s=r(n("17x9")),d=n("q1tI"),f=n("QDPf"),p=n("S9W4"),h=function(e){function n(e){var t
return(0,a.default)(this,n),(t=(0,o.default)(this,(0,i.default)(n).call(this,e))).state={withTransition:!1,prevStateCid:e.stateCid,currentStateCid:e.stateCid},t}return(0,u.default)(n,e),(0,l.default)(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.stateCid,r=e.transition,a=r.delay,o=r.duration
return n!==t.currentStateCid?{withTransition:!(!a&&!o),prevStateCid:t.currentStateCid,currentStateCid:e.stateCid}:null}}]),(0,l.default)(n,[{key:"componentDidUpdate",value:function(){var e=this.props.transition,t=e.delay,n=e.duration,r=e.callback,a=this.state,o=a.prevStateCid,i=a.currentStateCid,l=a.withTransition
i!==o&&(console.log("检测到状态变化, 动画准备",o,"=>",i),l?this.playCssTransition(i,n,t,r):r&&r())}},{key:"playCssTransition",value:function(e,t,n,r){var a=this
setTimeout(function(){a.setCssTransition(t)}),setTimeout(function(){console.log("定时结束, setState播放动画"),a.setState({withTransition:!1,prevStateCid:e})},n),setTimeout(function(){a.setCssTransition(0),r&&r()},n+t)}},{key:"setCssTransition",value:function(t){var e=(0,this.props.getScreenElement)()
if(!e)return null
Array.from(e.querySelectorAll(".widget, .group, .panel")).forEach(function(e){return e.style.transition="\n        all ".concat(t,"ms linear,\n        z-index 0ms linear\n      ")}),e.offsetWidth}},{key:"render",value:function(){var e,t=this.props,n=t.children,r=t.screenCid,a=t.widgetQueryMap,o=this.state,i=o.prevStateCid,l=o.currentStateCid,u=o.withTransition,c=Screen.find(r)
return e=u?(console.log("调整DOM结构, 准备状态动画"),(0,p.getItemsWithPrevData)(c,i,l,a)):(console.log("渲染页面"),(0,p.generateItems)(c,l,a)),n((0,f.generateTreeData)(e,c.cid).widgetTreeData)}}]),n}(d.PureComponent)
t.default=h,(0,c.default)(h,"propTypes",{children:s.default.func,screenCid:s.default.string,stateCid:s.default.string,transition:s.default.object,widgetQueryMap:s.default.object,getScreenElement:s.default.func}),(0,c.default)(h,"defaultProps",{transition:{}})},WyLE:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.WrapComponent=t.Loading=t.BorderInfo=t.Shadows=t.GradientColor=t.Fills=t.LayerName=void 0
var y=r(n("q1tI")),a=r(n("17x9")),b=n("RUem"),o=r(n("mfFm")),i=r(n("UbMB")),S=n("/5+U"),w=n("XrEr"),l=i.default.bind(o.default),u=function(e){var t=e.value
return y.default.createElement("div",{className:"".concat(l("container")," ").concat(l("layer-name"))},y.default.createElement(b.Base,{title:I18N.preview_panel.layer_name,data:[t]}))};(t.LayerName=u).propTypes={value:a.default.string}
var c=function(e){var c=e.colorUnit,t=e.backgroundColorSort
return y.default.createElement(h,null,I18N.preview_panel.fills,t.map(function(e,t){var n=e.value,r=e.type,a=void 0===r?"color":r,o=e.opacity,i=e.gradient,l=(0,w.getNormalRgbaColor)(n),u=l&&(0,w.getColorFromUnit)(l,c)
return"color"===a?y.default.createElement(b.ColorInfo,{stateColor:u,rgbaColor:l,title:I18N.preview_panel.color,key:t}):y.default.createElement(f,{gradient:i,colorUnit:c,opacity:o,key:t})}))};(t.Fills=c).propTypes={backgroundColorSort:a.default.array,colorUnit:a.default.string}
var f=function(e){var t=e.gradient,n=t.color_stops,r=void 0===n?[]:n,a=(t.from,t.to,t.type),o=e.opacity,i=e.colorUnit
return y.default.createElement("div",null,0<r.length&&r.map(function(e,t){var n=e.color
e.position
return y.default.createElement("div",{key:"".concat(n).concat(t)},y.default.createElement(b.Base,{colorUnit:i,color:(0,w.getNormalRgbaColor)(n),title:0==t?I18N.preview_panel.gradient:""}))}),o&&y.default.createElement(b.Base,{title:I18N.preview_panel.opacity,data:["".concat(100*o,"%")]}),a&&y.default.createElement(b.Base,{data:[a],title:I18N.preview_panel.type}))};(t.GradientColor=f).propTypes={gradient:a.default.object.isRequired,opacity:a.default.number,colorUnit:a.default.string.isRequired}
var s=function(e){var t=e.shadows,n=void 0===t?[]:t,r=e.isInnerShaow,a=void 0!==r&&r,o=e.unit,i=e.ratio,l=e.colorUnit,u=e.textShadows,c=void 0===u?[]:u
return y.default.createElement(h,null,a?I18N.preview_panel.inner_shadow:I18N.preview_panel.shadow,0<n.length&&y.default.createElement(d,{shadows:n,unit:o,ratio:i,colorUnit:l}),0<c.length&&y.default.createElement(d,{shadows:c,unit:o,ratio:i,colorUnit:l}))};(t.Shadows=s).propTypes={shadows:a.default.array,textShadows:a.default.array,isInnerShaow:a.default.bool,unit:a.default.string.isRequired,ratio:a.default.number.isRequired,colorUnit:a.default.string.isRequired}
var d=function(e){var t=e.shadows,m=e.unit,v=e.ratio,g=e.colorUnit
return t.map(function(e,t){var n=e.color,r=e.offset_x,a=void 0===r?0:r,o=e.offset_y,i=void 0===o?0:o,l=e.blur_radius,u=void 0===l?0:l,c=e.spread,s=void 0===c?0:c,d=(0,S.adapterScreen)(a,v,m),f=(0,S.adapterScreen)(i,v,m),p=(0,S.adapterScreen)(u,v,m),h=(0,S.adapterScreen)(s,v,m)
return y.default.createElement("div",{className:"shadow-item-gap",key:t},n&&y.default.createElement(b.Base,{title:I18N.preview_panel.color,color:(0,w.getNormalRgbaColor)(n),colorUnit:g}),y.default.createElement(b.Base,{data:[d,f,p,h],dataValue:[I18N.preview_panel._x,I18N.preview_panel._y,I18N.preview_panel.blur,I18N.preview_panel.spread]}))})}
d.propTypes={shadows:a.default.array,unit:a.default.string,ratio:a.default.number,colorUnit:a.default.string}
var p=function(e){var c=e.colorUnit,t=e.borderSort,s=e.unit,d=e.ratio,n=e.isStroke
return y.default.createElement(h,null,n?I18N.preview_panel.stroke:I18N.preview_panel.borders,t.reverse().map(function(e,t){var n=e.position,r=void 0===n?"inside":n,a=e.color,o=e.thickness,i=e.gradient,l=a&&(0,w.getNormalRgbaColor)(a),u=o&&(0,S.adapterScreen)(o,d,s)
return[a?y.default.createElement(b.Base,{key:"".concat(t).concat(l),color:l,title:I18N.preview_panel.color,colorUnit:c}):y.default.createElement(f,{gradient:i,colorUnit:c}),r&&y.default.createElement(b.Base,{key:"".concat(t).concat(r),title:I18N.preview_panel.position,data:[r]}),u&&y.default.createElement(b.Base,{key:"".concat(t).concat(u),title:I18N.preview_panel.thickness,data:[u]})]}))};(t.BorderInfo=p).propTypes={isStroke:a.default.bool,borderSort:a.default.array.isRequired,
colorUnit:a.default.string.isRequired,unit:a.default.string.isRequired,ratio:a.default.number.isRequired}
t.Loading=function(){return y.default.createElement("div",{className:l("layer-load")},y.default.createElement("span",{className:l("spinner")}))}
var h=function(e){var t=e.children
return y.default.createElement("section",null,y.default.createElement("div",{className:l("header")},t[0]),y.default.createElement("div",{className:l("container")},t.slice(1)))};(t.WrapComponent=h).propTypes={children:a.default.array}},XKAG:function(e,t,n){var l=n("ut/Y"),u=n("MMmD"),c=n("7GkX")
e.exports=function(i){return function(e,t,n){var r=Object(e)
if(!u(e)){var a=l(t,3)
e=c(e),t=function(e){return a(r[e],e,r)}}var o=i(e,t,n)
return-1<o?r[a?e[o]:o]:void 0}}},Xgir:function(e,t,n){},XkTy:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.promptGetPasswordAsync=t.alertAsyncBlocked=t.alertAsyncWide=t.alertAsync=t.confirmAsync=void 0
var r=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText,o=e.cancelText,i=e.isClose
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"confirm",canClose:!1!==i,canCancel:!0,canConfirm:!0,cancelText:o,confirmText:a,onCancel:function(){return e(!1)},onConfirm:function(){return e(!0)}}})})}
t.confirmAsync=r
var a=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"alert",canClose:!0,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.alertAsync=a
t.alertAsyncWide=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"functional",alertType:"alert",canClose:!0,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.alertAsyncBlocked=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"alert",canClose:!1,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.promptGetPasswordAsync=function(){return new Promise(function(t,n){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{type:"form",desc:I18N.credential_required,alertType:"prompt",canClose:!1,canCancel:!1,canConfirm:!0,onCancel:n,onConfirm:function(){var e=(document.querySelector(".global-alert-portal .prompt-pwd input")||{}).value
return e?t(e):n()}}})})},MB.confirmAsync=r,MB.alertAsync=a},XpKX:function(e,t,n){e.exports={"adjust-container":"_36Pl4M0B32Ymswr_Ahor-7","is-offline-mode":"_28_YiE-2ulr1BboXRcKxWW","is-uichina":"pxVKuNMBIglIQCw1n6NBA"}},XrEr:function(module,exports,__webpack_require__){"use strict"
var _interopRequireDefault=__webpack_require__("TqRt")
Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEFAULT_COLOR=exports.getUIColor=exports.getColorFromUnit=exports.checkColorUnit=exports.parseSketchColor2rgba=exports.getNormalRgbaColor=exports.rgba2hexWithA=void 0
var _slicedToArray2=_interopRequireDefault(__webpack_require__("J4zp")),_round=_interopRequireDefault(__webpack_require__("tpxX")),_utils__=__webpack_require__("/5+U"),rgba2hexWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2hexWithA"),e
var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d+)?)[\s+]?/i)
return t&&4<=t.length?{hex:("#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2)).toUpperCase(),o:Number((+t[4]).toFixed(2))}:e}
exports.rgba2hexWithA=rgba2hexWithA
var getNormalRgbaColor=function(e){if(!e)return DEFAULT_COLOR
var t=parseSketchColor2rgba(e)
return t?getColorFromUnit(t,RGBA):e}
exports.getNormalRgbaColor=getNormalRgbaColor
var parseSketchColor2rgba=function parseSketchColor2rgba(rgbaFuncStr){var colorType=checkColorUnit(rgbaFuncStr)
if(colorType!==RGBA)return getColorFromUnit(rgbaFuncStr,RGBA)
function rgba(){var e=arguments[0],t=arguments[1],n=arguments[2],r=arguments[3]
return e<=1&&t<=1&&n<=1?{r:parseInt((0,_round.default)(255*e),10),g:parseInt((0,_round.default)(255*t),10),b:parseInt((0,_round.default)(255*n),10),a:Number(Number(r).toFixed(2))}:{r:e,g:t,b:n,a:void 0===r?1:r}}var _eval=eval(rgbaFuncStr),r=_eval.r,g=_eval.g,b=_eval.b,a=_eval.a
return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")}
exports.parseSketchColor2rgba=parseSketchColor2rgba
var checkColorUnit=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:DEFAULT_COLOR
return e.includes(RGBA)?RGBA:e.includes(RGB)?RGB:e.includes("#")&&9===e.length?ARGB:e.includes("#")?HEX:!!e.includes(TRANSPARENT)&&TRANSPARENT}
exports.checkColorUnit=checkColorUnit
var getColorFromUnit=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:RGBA
if(!e)return DEFAULT_COLOR
var n=checkColorUnit(e)
if(!n)return DEFAULT_COLOR
switch(n){case RGBA:if(t===n)return e
if(t===RGB)return rgba2rgb(e)
if(t===HEX)return rgba2hex(e)
if(t===ARGB)return rgba2argb(e)
break
case RGB:if(t===n)return e
if(t===RGBA)return rgb2rgba(e)
if(t===HEX)return rgb2hex(e)
if(t===ARGB)return rgb2argb(e)
break
case HEX:if(t===n)return e
if(t===RGBA)return hex2rgba(e)
if(t===RGB)return hex2rgb(e)
if(t===ARGB)return hex2argb(e)
break
case ARGB:if(t===n)return e
if(t===RGBA)return argb2rgba(e)
if(t===RGB)return argb2rgbWithA(e)
if(t===HEX)return argb2hexWithA(e)
break
case TRANSPARENT:if(t===RGBA)return RGBA_FOR_TRANSPARENT
if(t===RGB)return rgba2rgb(RGBA_FOR_TRANSPARENT)
if(t===HEX)return rgba2hex(RGBA_FOR_TRANSPARENT)
if(t===ARGB)return rgba2argb(RGBA_FOR_TRANSPARENT)
break
default:return e}}
exports.getColorFromUnit=getColorFromUnit
var rgba2rgbWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2rgbWithA"),e
var t=rgba2hexWithA(e),n=t.hex,r=t.o
return n?{rgb:hex2rgb(n),o:r}:DEFAULT_COLOR},hex2rgb=function(e){if(checkColorUnit(e)!==HEX)return console.warn("Not hexcolor but use hex2rgb"),e
if(3===(e=e.replace("#","")).length){var t=e.split(""),n=(0,_slicedToArray2.default)(t,3),r=n[0],a=n[1],o=n[2]
e="".concat(r).concat(r).concat(a).concat(a).concat(o).concat(o)}var i=parseInt(e.substring(0,2),16),l=parseInt(e.substring(2,4),16),u=parseInt(e.substring(4,6),16)
return"rgb(".concat(i,", ").concat(l,", ").concat(u,")")},rgba2rgb=function(e){var t=rgba2rgbWithA(e),n=t.rgb,r=t.o
return n?"".concat(n," ").concat(Math.round(100*r),"%"):e},rgba2hex=function(e){var t=rgba2hexWithA(e),n=t.hex,r=t.o
return n?"".concat(n.toUpperCase()," ").concat(Math.round(100*r),"%"):e},rgba2argb=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2argb"),e
var t=rgba2hexWithA(e),n=t.hex,r=t.o
if(!n)return e
var a=("0"+parseInt(255*r,10).toString(16)).slice(-2).toUpperCase()
return"#".concat(a).concat(n.slice(1))},rgb2rgba=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2rgba"),e):"rgba(".concat(e.slice(4,-1),", 1)")},rgb2hex=function(e){if(checkColorUnit(e)!==RGB)return console.warn("Not rgbcolor but use rgb2hex"),e
var t=e.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
if(t&&4===t.length){var n=("0"+parseInt(t[1],10).toString(16)).slice(-2),r=("0"+parseInt(t[2],10).toString(16)).slice(-2),a=("0"+parseInt(t[3],10).toString(16)).slice(-2)
return"#".concat(n).concat(r).concat(a).toUpperCase()}},rgb2argb=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2argb"),e):hex2argb(rgb2hex(e))},hex2argb=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2argb"),e):"#FF".concat(e.slice(1))},hex2rgba=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2rgba"),e):rgb2rgba(hex2rgb(e))},argb2rgba=function(e){if(checkColorUnit(e)!==ARGB)return console.warn(
"Not argbcolor but use argb2rgba"),e
for(var t=[],n=1;n<e.length;n+=2)t.push(e.slice(n,n+2))
var r=t[0],a=t[1],o=t[2],i=t[3]
return a=parseInt(a,16),o=parseInt(o,16),i=parseInt(i,16),r=Number((parseInt(r,16)/255).toString().slice(0,4)),"rgba(".concat(a,", ").concat(o,", ").concat(i,", ").concat(r,")")},argb2rgbWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2rgbWithA"),e
var t=argb2rgba(e),n=rgba2rgbWithA(t),r=n.rgb,a=n.o
return r?"".concat(r," ").concat(Math.round(100*a),"%"):e},argb2hexWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2hexWithA"),e
var t=argb2rgba(e),n=rgba2hexWithA(t),r=n.hex,a=n.o
return r?"".concat(r.toUpperCase()," ").concat(Math.round(100*a),"%"):e},getUIColor=function getUIColor(color){if(!color)return DEFAULT_COLOR
var rgbaColor=getColorFromUnit(color,"rgba")
function rgba(){return{r:arguments[0],g:arguments[1],b:arguments[2],a:arguments[3]}}var _eval2=eval(rgbaColor),r=_eval2.r,g=_eval2.g,b=_eval2.b,a=_eval2.a
return r=(0,_utils__.save2Digital)(r/255),g=(0,_utils__.save2Digital)(g/255),b=(0,_utils__.save2Digital)(b/255),"UIColor(red:".concat(r,", green:").concat(g,", blue:").concat(b,", alpha:").concat(a,")")}
exports.getUIColor=getUIColor
var RGBA="rgba",ARGB="argb",RGB="rgb",HEX="hex",TRANSPARENT="transparent",RGBA_FOR_TRANSPARENT="rgba(255, 255, 255, 0)",DEFAULT_COLOR="#FFFFFF"
exports.DEFAULT_COLOR=DEFAULT_COLOR},"Xt/L":function(e,t){e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0
return!1}},"Y+p1":function(e,t,n){var r=n("wF/u")
e.exports=function(e,t){return r(e,t)}},Y69h:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var g=r(n("MVZn")),y=r(n("J4zp")),o=r(n("lwsE")),i=r(n("W8MJ")),l=r(n("a1gu")),u=r(n("Nsbk")),c=r(n("7W2i")),s=r(n("PJYZ")),b=r(n("lSNA")),S=r(n("q1tI")),a=r(n("17x9")),d=n("1qiG"),f=function(e){function a(){var e,v;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return v=(0,l.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,b.default)((0,s.default)((0,s.default)(v)),"getDistanceMarksStyle",function(e,t){return{top:(0,d.toPercentage)(e.top/t.height),left:(0,d.toPercentage)(e.left/t.width),width:(0,d.toPercentage)(e.width/t.width),height:(0,d.toPercentage)(e.height/t.height)}}),(0,b.default)((0,s.default)((0,s.default)(v)),"mapDistanceMarks",function(e,t){var n,r=(0,y.default)(e,2),a=r[0],o=r[1],i=v.props,l=i.style,u=i.renderValue,
c=l.showStartAndEndBoundary,s=l.colorForLines,d=l.colorForText,f=l.backgroundColorForText,p=l.dashed,h=v.getMarkStyle(a,o),m=Math.abs(o)
return S.default.createElement("div",{key:"".concat(t,"-").concat(o)},S.default.createElement("div",{className:"distance-line ".concat(a),style:(0,g.default)({},h.line,(n={},(0,b.default)(n,["top","bottom"].includes(a)?"borderLeftStyle":"borderTopStyle",p?"dashed":"solid"),(0,b.default)(n,"borderColor",s),n))}),u?u({value:m,style:h.value,customClassName:"distance-value ".concat(a)}):S.default.createElement("span",{className:"distance-value ".concat(a),style:(0,g.default)({},h.value,{color:d,
backgroundColor:f})},m),c&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"distance-mark-start-boundary ".concat(a),style:{borderColor:s}}),S.default.createElement("div",{className:"distance-mark-end-boundary ".concat(a),style:(0,g.default)({},h.endBoundary,{borderColor:s})})))}),(0,b.default)((0,s.default)((0,s.default)(v)),"getMarkStyle",function(e,t){var n,r=v.props.baseRect,a={line:{},value:{},endBoundary:{}},o=["right","left"],i=o.includes(e
)?t/r.width:t/r.height
return a.line=(n={},(0,b.default)(n,e,t<0?0:(0,d.toPercentage)(-i)),(0,b.default)(n,o.includes(e)?"width":"height",(0,d.toPercentage)(Math.abs(i))),n),a.endBoundary=(0,b.default)({},e,(0,d.toPercentage)(-i)),a.value=(0,b.default)({},o.includes(e)?"left":"top",["right","bottom"].includes(e)?(0,d.toPercentage)(1+i/2):(0,d.toPercentage)(-i/2)),a}),v}return(0,c.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.baseRect,n=e.refRect,r=e.screen,a=(0,d.getDistancesForDirections)(t,n
),o=this.getDistanceMarksStyle(t,r)
return S.default.createElement("div",{className:"distance-marks",style:o},Object.entries(a).map(this.mapDistanceMarks))}}]),a}(S.default.Component);(t.default=f).propTypes={baseRect:a.default.object,refRect:a.default.object,screen:a.default.object,style:a.default.object,renderValue:a.default.func}},YCqe:function(e,t,n){e.exports={"debug-panel":"_2FC9CioQVPnHdqZbgEIKH7"}},ZCpW:function(e,t,n){var r=n("lm/5"),a=n("O7RO"),o=n("IOzZ")
e.exports=function(t){var n=a(t)
return 1==n.length&&n[0][2]?o(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}}},ZS4k:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("4sCl")),i=n("Kkl0"),l=(0,a.connect)(function(e){var t=e.container,n=t.common.keyFlags.isSpaceDown,r=t.layers,a=r.resourceByScreen,o=r.visibilityScreenID,i=r.activeLayerID,l=r.enteredLayerID,u=t.previewSetting,c=u.unit,s=u.ratio,d=u.isShowColorPicker,f=e.model,p=f.current.screenCid,h=f.screens.find(function(e){return e.cid===p})
return{isSpaceDown:n,layers:a[o]&&a[o].layers||[],artboard:a[o]&&a[o].artboard,currentScreen:h,activeLayerID:i,enteredLayerID:l,isShowLayerList:!d,unit:c,ratio:s}},function(t){return{requestSelectLayer:function(e){t((0,i.requestSelectLayer)(e))},enterLayer:function(e){t((0,i.enterLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(o.default)
t.default=l},ZWtO:function(e,t,n){var a=n("4uTw"),o=n("9Nap")
e.exports=function(e,t){for(var n=0,r=(t=a(t,e)).length;null!=e&&n<r;)e=e[o(t[n++])]
return n&&n==r?e:void 0}},ZXhj:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalRect=function(e){var t=1/0,n=1/0,r=-1/0,a=-1/0
return e.forEach(function(e){t=Math.min(e.top,t),n=Math.min(e.left,n),r=Math.max(e.left+e.width,r),a=Math.max(e.top+e.height,a)}),{top:t,left:n,right:r,bottom:a,width:r-n,height:a-t}},t.mapClientVectorToWidgetVector=function(e,t){var n=document.querySelector("#canvas").getBoundingClientRect(),r=document.querySelector("#screens").getBoundingClientRect(),a=n.left-r.left,o=n.top-r.top
return i=e,l={offsetX:a,offsetY:o,ratio:100/t},u=i.startX,c=i.startY,s=i.endX,d=i.endY,f=l.offsetX,p=l.offsetY,h=l.ratio,{startX:Math.round((u-f)*h),startY:Math.round((c-p)*h),endX:Math.round((s-f)*h),endY:Math.round((d-p)*h)}
var i,l,u,c,s,d,f,p,h},t.snapVectorByUnitAndOffset=function(e){var t=e.startX,n=e.startY,r=e.endX,a=e.endY,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:90,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,l=Math.atan2(a-n,r-t)/Math.PI*180,u=Math.hypot(r-t,a-n),c=i+o*Math.round((l-i)/o),s=u*Math.cos((l-c)/180*Math.PI)
return{startX:t,startY:n,endX:t+Math.round(s*Math.cos(c/180*Math.PI).toFixed(2)),endY:n+Math.round(s*Math.sin(c/180*Math.PI).toFixed(2))}},t.mapVectorToRect=function(e){var t=e.startX,n=e.startY,r=e.endX,a=e.endY,o=Math.min(n,a),i=Math.min(t,r),l=Math.abs(r-t),u=Math.abs(a-n)
return{top:Math.round(o),left:Math.round(i),width:Math.round(l),height:Math.round(u)}},t.getMinContainingRect=t.checkIfTwoRectsOverlap=t.checkIfRectAInRectB=t.checkSameRect=void 0
t.checkSameRect=function(t,n){return["top","left","width","height"].every(function(e){return t[e]===n[e]})}
t.checkIfRectAInRectB=function(e,t){return e.top>t.top&&e.left>t.left&&e.right<t.right&&e.bottom<t.bottom}
t.checkIfTwoRectsOverlap=function(e,t){var n=r(e,t)
return n.width<e.width+t.width&&n.height<e.height+t.height}
var r=function(e,t){var n=Math.min(e.top||0,t.top||0),r=Math.max((e.top||0)+e.height,(t.top||0)+t.height),a=Math.min(e.left||0,t.left||0)
return{top:n,left:a,width:Math.max((e.left||0)+e.width,(t.left||0)+t.width)-a,height:r-n}}
t.getMinContainingRect=r},ZY2Q:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"container:comment:loaded-project-cid":return(0,a.default)({},e,{loadedProjectCid:r.projectCid||null})
case"container:comment:focus":return(0,a.default)({},e,{focusCommentThreadCid:r.focusCommentThreadCid,focusSource:r.focusSource||null,tempCommentThreadMarker:e.tempCommentThreadMarker&&e.tempCommentThreadMarker.cid===r.focusCommentThreadCid?e.tempCommentThreadMarker:null})
case"container:comment:focus-temp-marker":return(0,a.default)({},e,{focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:r})}return e}
var a=r(n("MVZn")),o={loadedProjectCid:null,focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:null}},"Zu+4":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("PJYZ")),i=a(n("lSNA")),l=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),y=r(n("q1tI")),f=a(n("17x9")),p=n("vOnD"),h=a(n("i6OX")),b=n("wYtL"),m=a(n("QdB0")),S=a(n("5Mi5")),w=a(n("ULaQ")),C=a(n("DJvY")),E=a(n("DdUa")),k=a(n("l4l/")),_=a(n("2AqR")),x=a(n("6gQ3")),T=a(n("zgSj")),M=n("oose"),N=a(n("nQhf")),I=a(n("xUDz")),O=a(n("NyBV")),R=a(n("6cfl")),v=a(n("gY5R")),P=n("1iCU"),g=a(n("XpKX")),A=a(n("UbMB")).default.bind(g.default),j=window,L=j.MB,D=j.I18N,B=new Set([
"ai@mockingbot.com","ethantw@me.com"]),F=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return y.default.createElement(p.ThemeProvider,{theme:v.default.light},y.default.createElement(U,this.props))}}]),t}(y.PureComponent)
t.default=F
var U=function(e){function r(e){var t;(0,l.default)(this,r),t=(0,c.default)(this,(0,s.default)(r).call(this,e)),(0,i.default)((0,o.default)((0,o.default)(t)),"handleClick",function(){H(),t.setState({showLoadtip:!1})})
var n=e.dispatch
return n({type:"entry:init:preview:scale"}),n({type:"reducer:artboards:init"}),n({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),n({type:"entry:comment:init-project-data"}),n({type:"entry:init:preview-setting"}),t.state={showLoadtip:!0},t}return(0,d.default)(r,e),(0,u.default)(r,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"entry:preview:clear"})}},{key:"componentDidMount",value:function(){var e=(0,m.default)()
if(e){var t={open:!0,event:e}
this.props.dispatch({type:"event-sign-up:set:event",payload:t})}}},{key:"UNSAFE_componentWillUpdate",value:function(e){this.props.project,e.project}},{key:"render",value:function(){var e=this.props,t=e.isLite,n=e.isPreviewPanelShow,r=e.project,a=e.previewSetting,o=e.isProjectFromOtherFreeUser,i=e.dispatch,l=this.state.showLoadtip
if(t)return y.default.createElement(y.default.Fragment,null,y.default.createElement(E.default,null),y.default.createElement(N.default,null))
var u=r.owner_email,c=r.master,s=a.toolbarActiveItem,d=a.isFullScreenMode,f=s==P.PREVIEW,p=s==P.INSPECT,h=s==P.COMMENT,m=!L.isElectron()&&!L.isHTMLZip()&&p&&l&&z(),v=!c&&f&&(B.has(u)||o),g=A({"is-offline-mode":L.isHTMLZip(),"is-uichina":L.isUIChina()||L.isForum(),"full-screen":d})
return y.default.createElement("div",{className:g},y.default.createElement(w.default,null),y.default.createElement(_.default,null),d&&y.default.createElement(I.default,null),p&&y.default.createElement(k.default,null),y.default.createElement("div",{className:A("adjust-container","preview-content-container")},h&&y.default.createElement(M.CommentContainer,null),p&&y.default.createElement(T.default,null),y.default.createElement(C.default,null),y.default.createElement(R.default,null),n&&y.default.createElement(
x.default,null)),v||L.isUIChina()&&y.default.createElement("a",{className:"powered-by",href:"/",target:"_blank"},y.default.createElement("img",{className:"zh",src:"/images/preview/watermark_zh.svg",alt:D.preview.powered_by_modao}),y.default.createElement("img",{className:"en",src:"/images/preview/watermark_en.svg",alt:D.preview.powered_by_modao})),y.default.createElement(W,{isActive:m,onClick:this.handleClick}),f&&y.default.createElement(O.default,null),y.default.createElement(N.default,null),
y.default.createElement(S.default,{dispatch:i}),y.default.createElement(b.TooltipGlobalStyle,null))}}]),r}(y.Component);(0,i.default)(U,"propTypes",{isLite:f.default.bool,isPreviewPanelShow:f.default.bool,project:f.default.object,previewSetting:f.default.object,isProjectFromOtherFreeUser:f.default.bool,dispatch:f.default.func})
var W=function(e){var t=e.isActive,n=e.onClick
return t?y.default.createElement("div",{className:"download-client-tip"},y.default.createElement(h.default,{type:"fa",name:"info-circle",className:"download-client-tip-icon"}),y.default.createElement("span",{className:"download-text"},y.default.createElement("a",{href:"/downloads",rel:"noopener noreferrer",target:"_blank"},D.preview.client_load_a)," ",D.preview.client_load_tip),y.default.createElement(h.default,{type:"dora",name:"times_fc",className:"download-client-close-icon",onClick:n})):null}
W.propTypes={isActive:f.default.bool.isRequired,onClick:f.default.func.isRequired}
var q="close_client_load_tip",z=function(){return!L.localStorageDelegate.getItem(q)},H=function(){return L.localStorageDelegate.setItem(q,"true")}},a1Ia:function(e,t,n){e.exports={"sub-toolbar":"_3SBWlVluTNoUyWs92OLTc1","select-input":"uO5Q8oNT4g5JUg4dFp1pz"}},aFF0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.saveWidgetByDefaultState=t.setScreenStateGlobally=void 0
t.setScreenStateGlobally=function(e,t,n){var r={}
for(var a in n.forEach(function(e){r[e]=t[e]}),t.restore(e),r)t[a]=r[a]
"default"===t.screenstate_cid?(t.lsave(!1),o(e,t)):t.lsave()}
var o=function(e,t){var n=e.dup()
n.restore(t),MB.AutoSaver&&MB.AutoSaver.add({record:n})}
t.saveWidgetByDefaultState=o},aYzi:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("Zu+4")),d=n("2EV6"),f=n("1iCU"),i=n("/5+U"),p=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),h=(0,i.immutableTransformCache)(function(t,e){return e.filter(function(e){return e.project_cid===t})}),l=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.projects,a=t.screens,o=e.container.previewSetting,i=o.toolbarActiveItem,l=p(r,n.projectCid),u=h(n.projectCid,a),c=MB.isMobile()||MB.isEmbedded(),s="project"===(0,d.getProjectType)(l
)||1<u.length
return{isLayerActive:i===f.INSPECT,isCommentActive:i===f.COMMENT,previewSetting:o,isProjectFromOtherFreeUser:n.userId!==l.owner_id&&l.expired,isLite:c,isPreviewPanelShow:s,project:l}})(o.default)
t.default=l},abHt:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.componentMap=t.visibleComponentList=t.componentList=void 0
var r=n("W4ny"),a=[{name:"rich_text",text:I18N.w.rich_text_placeholder,tips_title:'<div class="tipsLeft">'.concat(I18N.text,'</div><div class="tipsRight">T</div>'),svg_icon:"text",icon_name:"text",fs:14,z:5,ha:"left",va:"top",size_type:0,hide:!0},{name:"label",text:I18N.w.label,icon_name:"text",width:33,height:23,fs:14,border_radius:"",bs:0,ha:"center",va:"middle",z:5,lh:1.45,hide:!0},{name:"text_view",text:I18N.w.text_view_placeholder,icon_name:"paragraph",svg_icon:"text",width:200,height:65,fs:14,
border_radius:"",bs:0,ha:"left",va:"top",z:5,lh:1.45,hide:!0},{name:"hr",text:"",icon_name:"horizontal-line",svg_icon:"line",width:150,height:10,z:5,zoomable:"w,e,n",hide:!0},{name:"ve",text:"",icon_name:"vertical-line",width:10,height:150,z:5,zoomable:"n,s,w",hide:!0},{name:"carousel",tips_title:'<div class="tipsLeft">'.concat(I18N.carousel,"</div>"),icon_name:"carousel",svg_icon:"carousel",width:"100%",height:200,data:JSON.stringify(r.DEFAULT_DATA),z:5,hide:!0},{name:"icon_button",text:"",icon:"star",
icon_name:"smile",width:24,height:24,border_radius:"",bs:0,is:24,z:5,hide:!0},{name:"mcheckbox2",icon_name:"checkbox",width:30,height:30,z:5,checked:!1,hide:!0},{name:"mradiobutton",icon_name:"radio",width:30,height:30,z:5,checked:!1,hide:!0},{name:"ios_check",width:22,height:22,z:5,checked:!0,hide:!0},{name:"android_check",width:18,height:18,z:5,checked:!0,hide:!0},{name:"android_radio",width:20,height:20,z:5,checked:!0,hide:!0},{name:"switch",text:"",icon_name:"toggle",width:50,height:30,bs:0,z:5,
zoomable:" ",checked:!0,hide:!0},{name:"ios_switch",text:"",icon_name:"toggle",width:50,height:30,bs:0,z:5,checked:!0,hide:!0},{name:"android_switch",text:"",icon_name:"toggle",width:37,height:20,bs:0,z:5,checked:!0,hide:!0},{name:"navigation_bar",text:I18N.w.navbar_title,icon_name:"header",svg_icon:"topbar",width:"100%",height:55,fs:18,z:4,ha:"center",top:23,hide:!0},{name:"rectangle",text:"",icon_name:"bar",width:"100%",height:100,z:5,zoomable:"n,s",hide:!0},{name:"search_bar",text:I18N.w.search,
icon_name:"search-input",width:"100%",height:45,fs:14,ha:"left",z:5,zoomable:"w,e",hide:!0},{name:"keyboard",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,zoomable:" ",numeric:!1,hide:!0},{name:"iphone_keyboard",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,hide:!0},{name:"ipad_keyboard",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,hide:!0},{name:"android_keyboard",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,hide:!0},{
name:"status_bar",text:I18N.w.carrier,icon_name:"battery",width:"100%",height:23,z:3,zoomable:" ",hide:!0},{name:"ios_status_bar",icon_name:"battery",width:"100%",height:20,z:3,hide:!0},{name:"iphone_x_status_bar",icon_name:"battery",width:"100%",height:44,z:3,hide:!0},{name:"android_status_bar",icon_name:"battery",width:"100%",height:23,z:3,hide:!0},{name:"tab_item",text:I18N.w.tab_item,icon_name:"icon-label",icon:"home",width:80,height:45,fs:12,is:24,z:5,ha:"center",zoomable:"w,e"},{name:"nav_bar",
text:I18N.w.navbar_title,icon_name:"header",width:"100%",height:55,fs:18,z:4,ha:"center",top:23},{name:"tab_bar",text:"",icon_name:"footer",svg_icon:"topbar",width:"100%",height:45,bc:"transparent",z:4,zoomable:"n"}],o=[{name:"rounded_rect",text:"",tips_title:'<div class="tipsLeft">'.concat(I18N.rounded_rect,'</div><div class="tipsRight">R</div>'),icon_name:"rectangle",svg_icon:"rectangle",width:200,height:100,border_radius:"",bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"circle_rect",text:"",
tips_title:'<div class="tipsLeft">'.concat(I18N.circle,'</div><div class="tipsRight">O</div>'),icon_name:"circle",svg_icon:"circle",width:100,height:100,bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"triangleb",text:"",svg_icon:"eq_triangle",icon_name:"triangle-top",width:40,height:30,z:5},{name:"triangletl",text:"",svg_icon:"triangle",icon_name:"triangle-left-bottom",width:40,height:40,z:5},{name:"line",tips_title:'<div class="tipsLeft">'.concat(I18N.straight_line,
'</div><div class="tipsRight">L</div>'),icon_name:"horizontal-line",svg_icon:"line",width:150,height:1,points:JSON.stringify([{point:[0,.5]},{point:[1,.5]}]),bs:1,bc:"rgba(187, 187, 187, 1)"},{name:"button",text:I18N.w.button,icon_name:"btn",svg_icon:"button",width:80,height:30,fs:14,border_radius:"4",bs:1,ha:"center",va:"middle",z:5,icon:"",is:14},{name:"image_view",text:"",tips_title:'<div class="tipsLeft">'.concat(I18N.image_view,"</div>"),icon_name:"img",svg_icon:"image",width:200,height:120,
border_radius:"",bs:0,z:5},{name:"lr",tips_title:'<div class="tipsLeft">'.concat(I18N.w.lr,'</div><div class="tipsRight">H</div>'),icon_name:"link",svg_icon:"linkarea",width:45,height:45,bs:0,z:7},{name:"webpage",text:"about:blank",icon_name:"webpage",svg_icon:"webpage",width:"100%",height:400,z:5,ha:"center"},{name:"pg",icon_name:"gesture",svg_icon:"gesture",icon:"tap",width:40,height:40,bs:0,z:7,zoomable:" "},{name:"sticky",icon_name:"sticker",svg_icon:"note",ha:"left",width:204,height:170,padding:24,
fs:12,lh:1.67,z:10},{name:"mtext_input",text:I18N.w.mtext_input,icon_name:"input",svg_icon:"input",width:200,height:30,fs:14,border_radius:"",bs:1,ha:"left",va:"middle",z:5,padding:8},{name:"mtextarea",text:I18N.w.mtextarea,icon_name:"textarea",svg_icon:"textarea",width:280,height:100,fs:14,lh:1.45,border_radius:"",bs:1,ha:"left",z:5,padding:8},{name:"mselect",text:"1\n2\n3",icon_name:"select",svg_icon:"select",width:200,height:30,fs:14,bs:1,z:5,lh:1.45,padding:8},{name:"mfile_input",icon_name:"file",
svg_icon:"file",width:200,height:30,z:5,padding:8},{name:"mtooltip",text:I18N.w.mtooltip,icon_name:"tooltip",svg_icon:"dialog",width:220,height:40,fs:14,border_radius:"5",ha:"left",va:"top",z:5,lh:1.45,bg:"#8DFA69",bs:1,padding:10},{name:"map_view",text:"",icon_name:"map",svg_icon:"map",width:"100%",height:230,z:4}]
t.visibleComponentList=o
var i=a.concat(o);(t.componentList=i).forEach(function(e){return e.isMockingBotWidget=!0})
var l=i.reduce(function(e,t){return e[t.name]=t,e},{})
t.componentMap=l},aqSL:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("q1tI")),o=r(n("i8i4")),l=n("/MKj"),u=n("q3nj"),c=n("6x+O"),s=r(n("6ZRU")),i={containerReducerMap:u.reducerMap,sagaMap:u.sagaMap,extendCallback:function(i){i.renderPreview=function(e){var t=i.store
t.dispatch({type:"entry:refresh:project-related"}),o.default.render(a.default.createElement(l.Provider,{store:t},a.default.createElement(u.PreviewContainer,null)),e)},i.renderPreviewAlert=function(){o.default.render(a.default.createElement(s.default.containers.Alert,{store:i.store}),(0,c.getModalElement)())},i.pushData=function(e,t,n){i.store.dispatch({type:"entry:state:push-data",payload:{pushType:e,action:t,data:n}})},i.checkLocationHash=function(){var e=window.location.hash||"",t=i.store,n=t.getState,
r=t.dispatch
if(e.startsWith("#thread=")){var a=e.substr("#thread=".length),o=n().model.commentThreads.find(function(e){return e.cid===a})
if(!o)return console.warn("[checkLocationHash] missing commentThread: ".concat(a))
r({type:"entry:sync-runner:set-screen",payload:{cid:o.screen_cid}}),r({type:"entry:comment:set:active",payload:{isActive:!0}}),r({type:"container:comment:focus",payload:{focusCommentThreadCid:o.cid}})}},i.updateCurrentScreenRunner=function(e){if(!e)return console.warn("[updateCurrentScreenRunner] missing currentScreen")
i.store.dispatch({type:"entry:current:set-screen",payload:e}),window.location.hash="#screen=".concat(e.cid)}}}
t.default=i},asDA:function(e,t){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length
for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e)
return n}},aw2M:function(e,t,n){},bNtH:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),v=r(n("q1tI")),g=n("S9rr"),p=function(e){function t(){var y
return(0,o.default)(this,t),y=(0,l.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(y)),"handleScroll",function(e){e.stopPropagation()
var a=e.target.dataset.axis,o=e.clientX,i=e.clientY,t=y.props,n=t.canvasOffset,l=n.x,u=n.y,r=t.viewportHeight,c=t.viewportWidth,s=t.canvasRange,d=t.onScroll,f="x"===a?c:r,p=function(e){var t=e.clientY,n=e.clientX,r="x"===a?n-o:t-i
r=r/(f-f/s[a]*f)*s[a],d("x"===a?{x:l-r,y:u}:{x:l,y:u-r})}
document.addEventListener("mousemove",p),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,s.default)((0,s.default)(y)),"handleClickTrack",function(e){var d=e.target.dataset.axis,f=e.clientX,p=e.clientY,t=y.props,h=t.onScroll,m=t.canvasRange,n=t.viewportHeight,r=t.viewportWidth,a=y.scrollbarX.getBoundingClientRect(),o=a.top,i=a.bottom,l=a.left,u=a.right,v="x"===d?y.scrollbarX:y.scrollbarY,g="x"===d?r:n
,c=function(){var e=v.getBoundingClientRect(),t=e.top,n=e.bottom,r=e.left,a=e.right,o=y.props.canvasOffset,i=o.x,l=o.y,u="x"===d?a<f:n<p,c="x"===d?f<r:p<t,s=(c?-1:u?1:0)*Math.min(m[d]/10,g);(u||c)&&h("x"===d?{x:i-s,y:l}:{x:i,y:l-s})};(("x"===d?u<f:i<p)||("x"===d?f<l:p<o))&&(v.style.transition="all 0.1s linear",c(),y.timer=setTimeout(function(){return y.timeInterval=setInterval(c,100)},500))
document.addEventListener("mouseup",function e(t){v.style.transition="",clearTimeout(y.timer),clearInterval(y.timeInterval),document.removeEventListener("mouseup",e)})}),y.setRefY=function(e){return y.scrollbarY=e},y.setRefX=function(e){return y.scrollbarX=e},y}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,n=t.x,r=t.y,a=e.canvasRange,o=e.viewportWidth,i=e.viewportHeight,l=e.showRuler,u=o/a.x,c=(a.x/2-n)*(a.x-o)/(a.x*a.x)
c=Math.min(Math.max(c,0),(a.x-o)/a.x)
var s=i/a.y,d=(a.y/2-r)*(a.y-i)/(a.y*a.y)
d=Math.min(Math.max(d,0),(a.y-i)/a.y)
var f={width:"".concat(100*u,"%"),left:"".concat(100*c,"%")},p={height:"".concat(100*s,"%"),top:"".concat(100*d,"%")},h=l?null:{left:0},m=l?null:{top:0}
return v.default.createElement(g.StyledScrollBar,null,v.default.createElement("div",{"data-axis":"x",className:"track x-track",style:h,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefX,className:"handler","data-axis":"x",onMouseDown:this.handleScroll,style:f},v.default.createElement("div",{className:"thumb"}))),v.default.createElement("div",{"data-axis":"y",className:"track y-track",style:m,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefY,
className:"handler y-handler","data-axis":"y",onMouseDown:this.handleScroll,style:p},v.default.createElement("div",{className:"thumb"}))))}}]),t}(v.PureComponent)
t.default=p,(0,d.default)(p,"propTypes",{canvasOffset:f.default.object,canvasRange:f.default.object,viewportWidth:f.default.number,viewportHeight:f.default.number,showRuler:f.default.bool,onScroll:f.default.func}),(0,d.default)(p,"defaultProps",{showRuler:!1})},bTYh:function(e,t,n){},bahg:function(e,t){e.exports=function(e){return e.split("")}},bekf:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CodeBox=void 0
var i=a(n("J4zp")),l=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=r(n("q1tI")),o=a(n("17x9")),m=n("RUem"),v=n("qOCw"),g=function(e){function o(){var e,a;(0,l.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(n))),(0,p.default)((0,f.default)((0,f.default)(a)),"renderCode",function(e){return{px:a.renderCss,dp:a.renderAndroidCode,pt:a.renderIos}[(0,v.selectWithlanguageUnit)(e)]()}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderIos",function(){var e=a.props,t=e.code,n=e.language,r=e.text
return h.default.createElement(b,{code:t,language:n,text:r})}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderCss",function(){var e=a.props,t=e.code,n=e.language
return h.default.createElement(y,{language:n,code:t})}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderAndroidCode",function(){var e=a.props,t=e.whichAndView,n=e.code,r=e.text
return h.default.createElement(S,{code:n,text:r,whichAndView:t})}),a}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props.language
return h.default.createElement(m.WrapComponent,null,h.default.createElement("div",null,e.toUpperCase(),h.default.createElement(m.CopyBtn,{text:"#code-content"})),h.default.createElement("div",{className:"code-content",id:"code-content"},this.renderCode(e)))}}]),o}(h.PureComponent)
t.CodeBox=g,(0,p.default)(g,"propTypes",{code:o.default.object,whichAndView:o.default.string,language:o.default.string,text:o.default.string})
var y=function(e){var t=e.language,n=e.code,a=w(t),o=C(t),r=k(n)
return Object.entries(r).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
return h.default.createElement("div",{key:n},"".concat(n).concat(o).concat(r).concat(a))})}
y.propTypes={code:o.default.object.isRequired,language:o.default.string}
var b=function(e){var t=e.code,n=e.text
return E({code:t,text:n}).map(function(e){return h.default.createElement("div",{key:e},e)})}
b.propTypes={code:o.default.object.isRequired,text:o.default.string}
var S=function(e){var t=e.code,n=e.text,r=e.whichAndView
return h.default.createElement("div",null,h.default.createElement("div",{className:"highlight-row"},"<".concat(r)),Object.entries(t).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
return h.default.createElement("div",{key:n},"android:".concat(n,'="').concat(r,'"'))}),0<n.length&&h.default.createElement("div",null,'android:text="'.concat(n,'"')),h.default.createElement("div",{className:"highlight-row"},"/>"))}
S.propTypes={code:o.default.object.isRequired,text:o.default.string,whichAndView:o.default.string}
var w=function(e){switch(e){case"stylus":case"sass":return""
default:return";"}},C=function(e){switch(e){case"stylus":return" "
default:return": "}},E=function(e){var t=e.code,n=e.text,r=t.width,a=t.height,o=t.x,i=t.y,l=t.fontFamily,u=t.cornerRadius,c=t.fontSize,s=t.opacity,d=t.borderWidth,f=t.borderColor,p=t.alignment,h=t.backgroundColor,m=n?"textLayer":"layer",v=n?"UILabel":"UIView",g=[]
return g.push("let ".concat(m," = ").concat(v,"(frame: CGRect(x: ").concat(o,", y:").concat(i,", width: ").concat(r,", height: ").concat(a,"))")),h&&g.push("".concat(m,".backgroundColor = ").concat(h)),s&&g.push("".concat(m,".alpha = ").concat(s)),u&&g.push("layer.layer.cornerRadius = ".concat(u)),d&&g.push("layer.layer.borderWidth = ".concat(d)),f&&g.push("layer.layer.borderColor = ".concat(f,".cgColor")),n&&(g.push('let textContent = "'.concat(n,'"')),g.push(
'let textString = NSMutableAttributedString(string: textContent, attributes: [\n      NSAttributedStringKey.font: UIFont(name: "'.concat(l,'", size: ').concat(c,")!\n      ])")),g.push("let textRange = NSRange(location:0, length: textString.length)"),g.push("let paragraphStyle = NSMutableParagraphStyle()"),g.push("paragraphStyle.alignment = .".concat(p)),g.push("textString.addAttribute(NSAttributedStringKey.paragraphStyle, value: paragraphStyle, range: textRange)"),g.push(
"textLayer.attributedText = textString")),g},k=function(e){if(e["border-color"]&&e["border-width"]){var t={border:"".concat(e["border-width"]," solid ").concat(e["border-color"])}
return delete e["border-color"],delete e["border-width"],Object.assign(e,t)}return e}},c3w9:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),l=n("upRB"),o=r(n("92wE")),i=(0,a.connect)(function(e,t){var n=(0,l.getRunnerState)(e),r=n.widgetQueryMap,a=n.screenInfoMap,o=t.chameleon,i=a[o.screen_cid].chameleonInfoMap[o.cid]
return{stateCid:i.stateCid,transition:i.transition,widgetQueryMap:r}})(o.default)
t.default=i},cQH5:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("MVZn")),o=r(n("4vJh")),i=r(n("FJlG")),l=r(n("vRqJ")),u=r(n("FYsW")),c=n("80la"),s=n("oose"),d=n("tBsX"),f=r(n("4x8W")),p=r(n("6ZRU")),h={isSpaceDown:!1},m={offset:{x:0,y:0},scale:100,keyFlags:h,viewport:{width:0,height:0}}
var v={alert:p.default.reducers,common:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:m,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"preview:set:canvas:offset":return(0,a.default)({},e,{offset:r.offset})
case"preview:set:scale":return(0,a.default)({},e,{scale:r.scale})
case"preview:set:key:flags":return(0,a.default)({},e,{keyFlags:(0,a.default)({},h,r)})
case"preview:reset:key:flags":return(0,a.default)({},e,{keyFlags:h})
case"preview:scrollbar:viewport":return(0,a.default)({},e,{viewport:r})
default:return e}},comment:s.reducer,layers:d.reducers,slices:c.reducer,screens:o.default,artboards:l.default,previewSetting:i.default,eventSignUpModal:f.default,runner:u.default}
t.default=v},cTU2:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.loadImageAsync=t.createAsyncTaskQueue=void 0
t.createAsyncTaskQueue=function(){var n=Promise.resolve("QUEUE_HEAD")
return{pushTask:function(e){var t=n.then(e).catch(console.log)
return n=t}}}
t.loadImageAsync=function(t,n){return new Promise(function(e){t.src=n,t.onload=function(){return e(t)},t.onerror=e})}},cWnZ:function(e,t,n){},cl8F:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r={tc:"#101010",bg:"transparent",bc:"#bbbbbb",sc:"#aaaaaa",box_shadow:JSON.stringify([[0,0,0,0,0,"#aaaaaa"]]),text_shadow:JSON.stringify([[0,0,0,"#aaaaaa"]]),sticky:{bg:"#FFFBBA"},status_bar:{bg:"#f8f8f8"},status_bar_android:{bg:"#555555"},ios_status_bar:{bg:"#f8f8f8"},iphone_x_status_bar:{bg:"#f8f8f8"},android_status_bar:{bg:"#101010",tc:"#f8f8f8"},image_view:{bg:"#e5e5e5",tc:"#bec2c9"},rounded_rect:{bg:"#FFFFFF"},circle_rect:{bg:"#FFFFFF"},triangleb:{tc:"#e5e5e5"},triangletl:{tc:"#e5e5e5"},button:{
bg:"#ffffff"},navigation_bar:{bg:"#f8f8f8"},nav_bar:{bg:"#f8f8f8",bc:"transparent"},tab_bar:{bg:"#f8f8f8",bc:"transparent"},rectangle:{bg:"#ffffff"},mtext_input:{bg:"#ffffff",tc:"#888888"},mtextarea:{bg:"#ffffff",tc:"#888888"}}
t.default=r},ctY3:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("OVdA")),m=a(n("UbMB")).default.bind(h.default),v=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"setElementRef",function(e){return t.textarea=e}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleFocus",function(){t.props.onFocus()}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleChange",function(e){(0,t.props.onChange)(e.target.value)}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleBlur",function(){t.props.onBlur()}),(0,f.default)((0,d.default)((0,d.default)(t
)),"handleKeyDown",function(e){"Enter"===e.key?(e.preventDefault(),t.handleBlur()):"Escape"===e.key&&(t.props.onChange(t.cacheValue),t.cacheValue=null,t.handleBlur())}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentDidMount",value:function(){this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"componentDidUpdate",value:function(e,t){!e.editing&&this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"handleStopPropagation",
value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.value,r=e.className
return t?p.default.createElement("div",{className:m("text-wrapper",r),onClick:this.handleStopPropagation},p.default.createElement("textarea",{ref:this.setElementRef,value:n,onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown})):p.default.createElement("span",{className:m("text-no-editing",r)},n)}}]),o}(p.PureComponent);(t.default=v).propTypes={editing:o.default.bool,value:o.default.string,className:o.default.string,onFocus:o.default.func,
onBlur:o.default.func,onChange:o.default.func},v.defaultProps={onFocus:function(){},onChange:function(){}}},d89S:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var S=r(n("MVZn")),a=n("/MKj"),w=r(n("J2m7")),o=r(n("KHYK")),i=(0,a.connect)(function(e){return(0,S.default)({},(o=(t=e).container,i=o.layers,l=i.resourceByScreen,u=i.visibilityScreenID,c=i.activeLayerID,s=i.enteredLayerID,d=o.previewSetting,f=d.ratio,p=d.unit,h=t.model,m=h.current.screenCid,v=h.screens,g=l[u],y=!1,b=p,g&&(n=(0,w.default)(g.layers,function(e){return e.id===c}),r=(0,w.default)(g.layers,function(e){return e.id===s}),n&&r&&r.id!==n.id&&(y=!0,a=v.find(function(e){return e.cid===m}))),{show:y,
ratio:f,distanceUnit:b,selectedLayer:n,hoveringLayer:r,screen:a}))
var t,n,r,a,o,i,l,u,c,s,d,f,p,h,m,v,g,y,b})(o.default)
t.default=i},dAiO:function(e,t,n){},dQpi:function(e,t){e.exports=function(){}},dSX7:function(e,t,n){},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
e.exports=function(e){return e.match(n)||[]}},"dYO+":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var d=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("17x9")),f=r(n("q1tI")),p=n("Gbs1"),h=a(n("An9T")),m=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.shellType,r=function(e,t,n){switch(e){case"device":var r=(0,p.getProjectShell)(t,e)
if(!r.bg)return null
var a=n?"".concat(r.bg,"_land"):r.bg,o=n?[-r.left,-r.top,r.height,r.width]:[-r.top,-r.left,r.width,r.height],i=(0,d.default)(o,4),l=i[0],u=i[1],c=i[2],s=i[3]
return{top:l,left:u,width:c,height:s,backgroundImage:"url(".concat(MB.isHTMLZip()?".":"","/images/devices/").concat(a,".png)")}
case"default":case"none":return null}}(n,t,e.isLandscape),a="device"===n&&null===r?"none":n
return f.default.createElement("div",{className:"".concat(h.default.shell," ").concat(a),style:r})}}]),t}(f.PureComponent);(t.default=m).propTypes={project:s.default.object,shellType:s.default.string,isLandscape:s.default.bool}},dZ9F:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=r(n("q1tI")),a=r(n("17x9")),o=r(n("vOnD")),s=n("/5+U"),i=function(e){var t=e.value,n=e.ratio,r=e.valueRatio,a=e.unit,o=e.style,i=e.className,l=e.customClassName,u=(0,s.adapterScreen)(t,n)
return c.default.createElement("div",{style:o,className:"".concat(i," ").concat(l)},"".concat(Math.round(u*r)).concat(a))},l=(0,o.default)(i).withConfig({displayName:"MarkLabel__StyledMarkValue",componentId:"sc-1b6nimd-0"})(["padding:0 5px;color:#fff;background-color:#ff7100;border-radius:2px;"])
i.propTypes={value:a.default.oneOfType([a.default.string,a.default.number]),ratio:a.default.number,valueRatio:a.default.number,unit:a.default.string,style:a.default.object,className:a.default.string,customClassName:a.default.string}
var u=l
t.default=u},dppN:function(e,t,n){},dt0z:function(e,t){e.exports=function(e){return e}},e5cp:function(e,t,n){var g=n("fmRc"),y=n("or5M"),b=n("HDyB"),S=n("seXi"),w=n("QqLw"),C=n("Z0cm"),E=n("DSRE"),k=n("c6wG"),_="[object Arguments]",x="[object Array]",T="[object Object]",M=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,r,a,o){var i=C(e),l=C(t),u=i?x:w(e),c=l?x:w(t),s=(u=u==_?T:u)==T,d=(c=c==_?T:c)==T,f=u==c
if(f&&E(e)){if(!E(t))return!1
s=!(i=!0)}if(f&&!s)return o||(o=new g),i||k(e)?y(e,t,n,r,a,o):b(e,t,u,n,r,a,o)
if(!(1&n)){var p=s&&M.call(e,"__wrapped__"),h=d&&M.call(t,"__wrapped__")
if(p||h){var m=p?e.value():e,v=h?t.value():t
return o||(o=new g),a(m,v,n,r,o)}}return!!f&&(o||(o=new g),S(e,t,n,r,a,o))}},eMfL:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getParentWidgetsWithGroups=t.getSubWidgetsWithGroups=t.getSubWidgets=t.getWidgetTreeHeight=t.getWidgetTreeDepth=t.isFirstChildNode=t.getNodePath=t.findNodeByCid=void 0
var i=r(n("RIqP")),o=function e(t,n){for(var r=0;r<n.children.length;r++){var a=n.children[r]
if(a.cid===t)return a
var o=e(t,a)
if(o)return o}}
t.findNodeByCid=o
t.getNodePath=function(e,t){for(var n=[e.cid];e.gid;)n.unshift(e.gid),e=t[e.gid]
return n}
t.isFirstChildNode=function(e,t){var n=e.cid,r=e.widget.gid
return 0===(r?o(r,t).children:t.children).findIndex(function(e){return e.cid===n})}
t.getWidgetTreeDepth=function e(t,n){var r=1,a=o(t.widget.gid,n)
return a&&(r+=e(a,n)),r}
t.getWidgetTreeHeight=function t(e){var n=1
if("group"===e.type&&e.children.length){var r=e.children.map(function(e){return t(e)})
n+=Math.max.apply(null,r)}return n}
t.getSubWidgets=function t(e){var n=[],r=e.type,a=e.widget,o=e.children
return"group"===r?o.forEach(function(e){return n.push.apply(n,(0,i.default)(t(e)))}):n.push(a),n}
t.getSubWidgetsWithGroups=function t(e){var n=[],r=e.type,a=e.widget,o=e.children
return n.push(a),"group"===r&&o.forEach(function(e){return n.push.apply(n,(0,i.default)(t(e)))}),n}
t.getParentWidgetsWithGroups=function e(t,n){var r=[],a=n[t]
return a&&r.push(a),a&&a.gid&&r.push.apply(r,(0,i.default)(e(a.gid,n))),r}},eNKG:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityScreenID=i,t.resourceByScreen=u,t.default=void 0
var a=r(n("lSNA")),o=n("JfQ8")
function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"-1",t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.SET_VISIBILITY_SCREEN:return t.payload.screenID
default:return e}}var l={"-1":{isFetching:!1,layers:[],error:""}}
function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.RECEIVE_RESOURCE_SUCCESS:case o.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,(0,a.default)({},t.payload.screenID,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,layers:[],error:""},t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.RECEIVE_RESOURCE_SUCCESS:return Object.assign({},e,{isFetching:!1,layers:t.payload.layers,error:void 0,artboard:t.payload.artboard,documentColor:t.payload.document_colors,globalColor:t.payload.global_colors,globalText:t.payload.text_styles})
case o.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,{isFetching:!1,layers:[],error:t.payload.error})
default:return e}}(e[t.payload],t)))
case"container:layers:clear":return l
default:return e}}var c={visibilityScreenID:i,resourceByScreen:u}
t.default=c},eaeY:function(e,t,n){"use strict"
var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}()
var a=n("q1tI")
n("17x9")
var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.enabled&&this.bindHandlers()}},{key:"componentWillUnmount",value:function(){this.unbindHandlers()}},{key:"componentWillReceiveProps",value:function(e){this.props.enabled&&!e.enabled?this.unbindHandlers():!this.props.enabled&&e.enabled&&this.bindHandlers()}},{
key:"getKeys",value:function(){this.props.target,window
return Object.keys(this.props).filter(function(e){return"on"===e.slice(0,2)}).map(function(e){return[e,e.slice(2).toLowerCase()]})}},{key:"getTarget",value:function(){var e=this.props,t="function"==typeof e.target?e.target():e.target
return t||(t=this.node&&this.node.ownerDocument),t}},{key:"bindHandlers",value:function(){this._adjustHandlers(i)}},{key:"unbindHandlers",value:function(){this._adjustHandlers(l)}},{key:"_adjustHandlers",value:function(t){var n=this.props,r=this.getTarget()
if(r){var a=u?{passive:n.passive,capture:n.capture}:n.capture
this.getKeys().forEach(function(e){t(r,e[1],n[e[0]],a)})}}},{key:"render",value:function(){var t=this
return this.props.target?null:a.createElement("noscript",{ref:function(e){t.node=e}})}}]),t}()
function i(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}function l(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}o.displayName="DocumentEvents",o.defaultProps={capture:!1,enabled:!0,passive:!1}
var u=function(){try{var e=!1
return document.createElement("div").addEventListener("test",function(){},{get passive(){e=!0}}),e}catch(e){return!1}}()
e.exports=o},edRh:function(e,t,n){},ee4a:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("Kkl0"),a=n("JfQ8")
var o={selectedLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.SELECT_LAYER:return t.payload.layerID===e?-1:t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},activeLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.ACTIVATE_LAYER:return t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},enteredLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.ENTER_LAYER:return t.payload.layerID
default:return e}}}
t.default=o},fRjM:function(e,t,n){},fSKh:function(e,t,n){},fiFu:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getUserAuthStatus=t.USER_AUTH_STATUS_COLLABORATOR=t.USER_AUTH_STATUS_NOT_COLLABORATOR=t.USER_AUTH_STATUS_NOT_SIGN_IN=t.getCommentPermission=t.clamp=t.muteEvent=t.MUTE_EVENT=void 0
var r=function(e){e&&e.preventDefault(),e&&e.stopPropagation()}
t.MUTE_EVENT=r
t.muteEvent=function(t){return function(e){return r(e),t&&t(e)}}
t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)}
var i=[0,1,2,3,4,5,6,7].map(function(e){return{create:!!(1&e),update:!!(2&e),delete:!!(4&e)}}),l={owner:!0,admin:!0,editor:!0,viewer:!0},u={owner:!0,admin:!0}
t.getCommentPermission=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"INVALID_ID_0",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"INVALID_ID_1",a=l[e],o=a&&r===t
return i[(a?1:0)+(o?2:0)+(o||u[e]&&("admin"!==e||"owner"!==n)?4:0)]}
var a="NOT_SIGN_IN"
t.USER_AUTH_STATUS_NOT_SIGN_IN=a
var o="NOT_COLLABORATOR"
t.USER_AUTH_STATUS_NOT_COLLABORATOR=o
var c="COLLABORATOR"
t.USER_AUTH_STATUS_COLLABORATOR=c
t.getUserAuthStatus=function(e,t){return e?"guest"===t?o:c:a}},flWF:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Widget,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:widgets:update",payload:o(e,a,i)})})},s={entryMap:{"widgets:refresh":c(a.refreshStateList,!1),"widgets:add":c(a.addState,!1),"widgets:add-local":c(a.addState,!0),"widgets:update":c(a.updateState,!1),"widgets:update-local":c(a.updateState,!0),"widgets:delete":c(a.deleteState,!1),"widgets:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
e.exports=function(e){return n.test(e)}},foKU:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("pVnL")),l=a(n("QILm")),o=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v=MB.config.SCALES[0],g=MB.config.SCALES[MB.config.SCALES.length-1],y=function(e){function a(){var e,h;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return h=(0,c.default)(this,(e=(0,s.default)(a)).call.apply(e,[this].concat(n))),(0,p.default)((0,f.default)((0,f.default)(h)),"setElementRef",function(e){return h.$elem=e}),(0,p.default)((0,f.default)((0,f.default)(h)),"handleWheel",function(e){e.preventDefault()
var t=h.props,n=t.x,r=t.y,a=t.scale,o=t.onOffsetChange,i=Math.max(-1,Math.min(e.deltaY,1))
if(e.ctrlKey||e.metaKey){var l=h.$elem.getBoundingClientRect(),u=l.top,c=(l.left+l.right)/2,s=(u+l.bottom)/2,d=a<=100?a-5*i:a-a*i*.05,f=e.pageX-c,p=e.pageY-s
h.handleZoom(d,f,p)}else o(n-e.deltaX,r-e.deltaY)}),h}return(0,d.default)(a,e),(0,u.default)(a,[{key:"handleZoom",value:function(e,t,n){var r=this.props,a=r.x,o=r.y,i=r.scale,l=r.onOffsetChange,u=r.onScaleChange,c=(e=Math.min(Math.max(e,v),g))/i
1!==c&&(l(t+c*(a-t),n+c*(o-n)),u(e))}},{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,r=e.scale,a=e.children,o=(e.onOffsetChange,e.onScaleChange,(0,l.default)(e,["x","y","scale","children","onOffsetChange","onScaleChange"]))
return m.default.createElement("div",(0,i.default)({},o,{ref:this.setElementRef,onWheel:this.handleWheel}),a.map(function(e){return"function"==typeof e?e(t,n,r):e}))}}]),a}(m.PureComponent);(t.default=y).propTypes={x:h.default.number,y:h.default.number,scale:h.default.number,children:h.default.array,onScaleChange:h.default.func,onOffsetChange:h.default.func}},gQMU:function(e,t,n){var r=n("0ZTe")("toUpperCase")
e.exports=r},gSgL:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.SliceContainer=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),l=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v=n("/MKj"),g=a(n("sEfC")),y=n("wYtL"),b=a(n("i6OX")),S=a(n("prTy")),w=a(n("UbMB")),C=a(n("2s0x")),E=n("/5+U"),k=n("Nu6V"),_=w.default.bind(C.default),x=!1,T=function(e){function a(e){var i;(0,l.default)(this,a),i=(0,c.default)(this,(0,s.default)(a).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(i)),"handleActiveLayer",function(e){
i.setState({activeLayerId:e})}),(0,p.default)((0,f.default)((0,f.default)(i)),"downloadSlice",(0,o.default)(u.default.mark(function e(){var t,n,r,a,o
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,n=t.projectCid,r=t.projectName,a=t.isLogin,!0!==i.state.download&&a){e.next=3
break}return e.abrupt("return")
case 3:return i.startLoadSlice(),e.next=6,A(n,r)
case 6:o=e.sent,i.endLoadSlice(o)
case 8:case"end":return e.stop()}},e,this)}))),(0,p.default)((0,f.default)((0,f.default)(i)),"startLoadSlice",function(){i.startTime=Date.now(),i.setState({download:!0}),MB.event("ga","点击下载全部切图","运行页")}),(0,p.default)((0,f.default)((0,f.default)(i)),"endLoadSlice",function(e){e&&(MB.event("ga","下载全部切图时长".concat(Date.now()-i.startTime),"运行页"),i.setState({download:!1}))}),(0,p.default)((0,f.default)((0,f.default)(i)),"requestLayer",function(e){var t=i.props.dispatch
t({type:"REQUEST_SELECT_LAYER",payload:{layerID:e}}),t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!0}})}),x=!1,i.state={download:!1,activeLayerId:null}
var t=i.props,n=t.loading,r=t.dispatch
return n&&r({type:"reducer:slice:init"}),i}return(0,d.default)(a,e),(0,i.default)(a,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.projectCid,n=e.dispatch,r=this.state.download,a="/api/v2/projects/".concat(t,"/build/slices_zips.json")
r&&(x=!0,n({type:"reducer:preview-toolbar:update",payload:{loadSliceUrl:a}}))}},{key:"render",value:function(){var i=this,e=this.state,t=e.download,l=e.activeLayerId,n=this.props,r=n.slicesMap,a=n.loading,o=n.error,u=n.currentScreenCid,c=n.isLogin
return o||a?m.default.createElement(R,null):0===r.length?m.default.createElement(P,null):m.default.createElement("div",{className:_("slice-container")},r.map(function(e){var t=e.name,n=e.id,r=e.screen_cid,a=e.image,o=e.image_set
return m.default.createElement(M,{key:n,src:a,name:t,currentScreenCid:u,id:n,imageSet:o,screenCid:r,requestLayer:i.requestLayer,activeLayer:i.handleActiveLayer,activeLayerId:l})}),m.default.createElement(N,{onClick:this.downloadSlice,isLoading:t,isLogin:c}))}}]),a}(m.PureComponent)
T.propTypes={slicesMap:h.default.array.isRequired,loading:h.default.bool,error:h.default.bool,currentScreenCid:h.default.string,isLogin:h.default.bool,projectCid:h.default.string,projectName:h.default.string,dispatch:h.default.func}
var M=function(e){function t(){var r
return(0,l.default)(this,t),r=(0,c.default)(this,(0,s.default)(t).call(this)),(0,p.default)((0,f.default)((0,f.default)(r)),"isIncurrentScreen",function(){return r.props.screenCid===r.props.currentScreenCid}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleClick",function(){var e=r.props,t=e.id,n=e.requestLayer;(0,e.activeLayer)(t),r.isIncurrentScreen()?n(t):console.warn("Not in current Screen")}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleOnload",function(){r.setState({imageLoad:!0})}),(0,
p.default)((0,f.default)((0,f.default)(r)),"handleError",function(){throw new Error("image load fail")}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleMouseEnter",function(){r.setState({loadSingleSlice:!0})}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleMouseLeave",function(){r.setState({loadSingleSlice:!1})}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleSingleDownload",function(e){e.persist(),e.stopPropagation(),r.delaySingleDownload()}),r.state={imageLoad:!1,loadSingleSlice:!1},
r.imageRef=function(e){return r.$image=e},r.delaySingleDownload=(0,g.default)(function(){var e=r.props,t=e.imageSet,n=e.name;(0,E.downloadWithATag)({url:t,name:n,type:"zip"}),MB.event("ga","在切图列表中下载单张切图","运行页")},500,{leading:!0}),r}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.src,r=e.activeLayerId,a=e.id,o=this.state,i=o.imageLoad,l=o.loadSingleSlice,u=i?"opacity-1":"opacity-0",c={display:i?"block":"none"},s=_("slice-item",{active:r===a})
return m.default.createElement(y.Tooltip,{type:"block",content:{click:this.isIncurrentScreen()?null:I18N.preview_panel.not_incurrent_screen}},m.default.createElement("div",{className:s,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},m.default.createElement("div",{className:"slice-item-wrap",style:{background:"url(/images/preview/slice-bg.png) left top",backgroundSize:"cover"}},!i&&m.default.createElement("img",{src:"/images/preview/image-load-gif.gif",
alt:"Loading..."}),m.default.createElement(S.default,{style:c,src:n,alt:t,adjustImage:38,className:"".concat(u),onLoad:this.handleOnload,onError:this.handleError})),m.default.createElement("div",{className:"slice-item-content"},m.default.createElement("span",{className:"slice-item-name textEllipsis"},t),l&&m.default.createElement(b.default,{name:"export",type:"dora",onClick:this.handleSingleDownload}))))}}]),t}(m.PureComponent)
M.propTypes={name:h.default.string,src:h.default.string.isRequired,id:h.default.number.isRequired,imageSet:h.default.string.isRequired,screenCid:h.default.string.isRequired,requestLayer:h.default.func.isRequired,activeLayer:h.default.func,activeLayerId:h.default.number,currentScreenCid:h.default.string.isRequired}
var N=function(e){var t=e.onClick,n=e.isLoading,r=e.isLogin?null:I18N.preview.guide_login
return m.default.createElement(y.Tooltip,{content:{click:r},type:"block",position:"top",arrowed:!1,className:_("download"),onClick:t},I18N.preview_panel.download,n?m.default.createElement(O,null):m.default.createElement(b.default,{type:"dora",name:"export",className:_("icon-download")}))}
N.propTypes={onClick:h.default.func,isLoading:h.default.bool,isLogin:h.default.bool}
var I=function(){return m.default.createElement("div",{className:_("layer-load")},m.default.createElement("span",{className:_("spinner")}))},O=function(){return m.default.createElement("div",{className:_("download-slice-load")},m.default.createElement(I,null))},R=function(){return m.default.createElement("div",{className:_("slice-load-wrap")},m.default.createElement(I,null))},P=function(){return m.default.createElement("div",{className:_("no-slice")},m.default.createElement("img",{
src:"/images/preview/no-slice@2x.png"}),m.default.createElement("span",null,I18N.preview_panel.no_slice),m.default.createElement("span",null,I18N.preview_panel.slice_in_sketch),m.default.createElement("a",{href:"https://s3.cn-north-1.amazonaws.com.cn/modao/sketch/MockingBot.sketchplugin.zip"},m.default.createElement("img",{src:"/images/preview/ic_sketch@2x.png",alt:"sketch"}),I18N.preview_panel.download_sketch))},A=function(){var n=(0,o.default)(u.default.mark(function e(t,n){var r,a,o,i,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,o=1
case 2:if(!r){e.next=22
break}if(x)return e.abrupt("return")
e.next=5
break
case 5:return e.next=7,(0,k.fetchSliceZip)(t)
case 7:if(i=e.sent,l=i.url,"ok"!==i.status){e.next=15
break}r=!1,a=l,e.next=17
break
case 15:return e.next=17,(0,E.setTimeoutAsync)(Math.min(2e3*o++,1e4))
case 17:if(20<o)return(0,E.downloadFail)(),e.abrupt("return",!1)
e.next=20
break
case 20:e.next=2
break
case 22:return(0,E.downloadWithATag)({url:"/".concat(a),name:n,type:"zip"}),e.abrupt("return",!0)
case 24:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}(),j=(0,v.connect)(function(e){var t=e.model,n=t.current,r=n.screenCid,a=n.projectCid,o=t.user,i=e.container.slices
return{slicesMap:i.slices,loading:i.loading,error:i.error,isLogin:!!o.id,projectCid:a,currentScreenCid:r}})(T)
t.SliceContainer=j},gX9a:function(e,t,n){e.exports={"play-setting-menu":"W0ROskokXK_S7WUlDo7D5"}},gXld:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),h=r(n("q1tI")),m=a(n("TSYQ")),v=n("i6OX"),g=a(n("ctY3")),p=n("6x+O"),y=n("Uu/L"),b=function(e){function t(){var a
return(0,o.default)(this,t),a=(0,l.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(a)),"setElementRef",function(e){return a.$elem=e}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleExpand",function(e){a.props.handleScreenItemActions.handleExpand(e,a.props.screen)}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleActivate",function(e){a.props.handleScreenItemActions.handleActivate(e,a.props.screen)}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleDown",
function(e){if(0===e.button){var t=a.props,n=t.screen,r=t.handleScreenItemActions.handleDown
r&&r(e,n,a.$elem)}}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleNameChange",function(e){var t=a.props,n=t.screen,r=t.handleScreenItemActions.handleNameChange
r&&r(e,n)}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleEdit",function(){var e=a.props,t=e.screen,n=e.handleScreenItemActions.handleEdit
n&&n(t)}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleBlur",function(){a.props.handleScreenItemActions.handleBlur(a.props.screen,a.isNewScreen),a.isNewScreen=!1}),a.isNewScreen=!1,a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){if(this.props.isActive&&!(0,p.isVisible)(this.$elem)){var e=document.querySelector(".rn-content-body")
if(!e)return
var t=e.getBoundingClientRect(),n=this.$elem.getBoundingClientRect().bottom
e.scrollTop+=n-t.bottom+20}this.props.isEditing&&(this.isNewScreen=!0)}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.screen,n=e.depth,r=e.isActive,a=e.isEditing,o=e.showExpander,i=e.renderItem,l=e.collapseKeySet,u=e.isLinked,c=e.hoverCid,s=14*(n+1),d=!l.has(t.cid),f=t.cid===c,p=d?"caret-down":"caret-right"
return h.default.createElement(y.StyledScreenItem,{type:"linkable",ref:this.setElementRef,"data-cid":t.cid,"data-link-target-cid":t.cid,onClick:this.handleActivate,onMouseDown:this.handleDown,onDoubleClick:this.handleEdit,style:{paddingLeft:s},className:(0,m.default)("rn-list-item",{active:r,linked:u,hover:f})},o&&h.default.createElement("a",{className:"expander",onClick:this.handleExpand,onDoubleClick:this.stopPropagation},h.default.createElement("i",{className:"fa fa-"+p})),h.default.createElement("div",{
className:"screen-name"},r?h.default.createElement(v.SVGIcon,{name:"design/screen_file"}):h.default.createElement(v.SVGIcon,{name:"design/file_o"}),h.default.createElement(g.default,{editing:a,className:"editable-span",value:MB.unescape(t.name),onChange:this.handleNameChange,onBlur:this.handleBlur})),!a&&i&&i(t))}}]),t}(h.PureComponent);(t.default=b).propTypes={depth:f.default.number,screen:f.default.object,isActive:f.default.bool,isEditing:f.default.bool,isLinked:f.default.bool,showExpander:f.default.bool,
hoverCid:f.default.string,renderItem:f.default.func,handleScreenItemActions:f.default.shape({handleEdit:f.default.func,handleExpand:f.default.func,handleActivate:f.default.func,handleBlur:f.default.func,handleDown:f.default.func,handleNameChange:f.default.func,setAttr:f.default.func}),collapseKeySet:f.default.object}},gY5R:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=r(n("cDf5")),u=r(n("J4zp")),a=["#FF6161","#FF6161"],o=["#FFF","#F2F2F2","#000"],i=["#DEDEE4","#D9D9D9"],c=["#F2F2F2","#fff"],s=["#E8E8E8","#DBDBDB"],d={radioLine:{border:["2px solid #F2F2F2","1px solid #C8CDD0"],bg:["#F2F2F2","#F2F2F2"],border_color:["#F2F2F2","#C8CDD0"],active_bg:["#FFFFFF","#FCFCFC"]},shortCutBoder:{border:["1px solid #c8cdd0","1px solid transparent"]},fixedSlider:{bg:["#d9d9d9","#dbdbdb"]},slider:{bg:["#e7e9ea","#C8CDD0"]},linkback:{color:["#101010","#5B6B73"],border:[
"1px solid transparent","1px solid #d9d9d9"]},palette:{active_color:a,high_light_color:["#298DF8","#298DF8"],hr_color:i,panel_bg:o},toolbar:{height:56,shadow:["1px 0 6px 0 rgba(39, 54, 78, 0.12)","0 0 10px 0 rgba(0, 0, 0, 0.25)"],bg:["#FFF","#EDEDED","#000"],icon_disable_color:["#C8CDD0","#C8CDD0"],project_title_color:["#5B6B73","#5B6B73"],icon_color:["#7d8694","#5B6B73"],hover_icon_color:["#415058","#1F292E"],active_icon_color:["#FF6161","#FF6161"],active_icon_bg:["#F2F2F2","#E8E8E8"],active_icon_border:[
"#E8E8E8","#DBDBDB"]},popups:{bg:o,bc:["#DBDBDB","#DEDEE4","#FFF"],header:{bg:["#F2F3F4","#DBDBDB"],tc:["#415058","#415058","#FFF"],icon_color:["#8D9EA7","#8D9EA7"],line_color:["#EDEDED","#E8E8E8"]},line:{label_color:["#1F292E","#1F292E","#1F292E"]},nav:{bg:o,border_color:i,active_border_color:a,label_color:["#415058","#415058"],label_active_color:["#525E71","#525E71"]},footer:{background:["#fff","#fff"],icon_active_color:a}},panel:{bg:o,export_bar:{bg:["#F5F5F5","#EDEDED"],laber_color_bg:["#fff","#f2f2f2"
],disabled_bg:["#fff","#f7f7f7"],disabled_border_color:["#f7f7f7","#f2f2f2"]},header:{bg:["#F2F3F4","#DBDBDB"]},nav:{active_bg:o,icon_color:["#5B6B73","#5B6B73"],icon_active_color:a}},draggablePanel:{bg:o,header:{bg:["#F2F3F4","#DBDBDB"]},layerItem:{bg:["#DBDBDB","#F2F2F2"]},input:{bg:c,border_color:s,border:["1px solid transparent","1px solid #DBDBDB"]},BorderRadius:{border_color:["#f2f2f3","#c8cdd1"]},CheckBorder:{border_color:["#8d9ea6","#bacdd6"]},NumberInput:{bg:c,border_color:s,disabled_bg:["#F7F7F7",
"#fff"],disabled_border_color:["#F2F2F2","#e8e8e8"]},Select:{bg:c,border_color:s}},viewMode:{bg:["#E1E1E1","#E8E8E8"]},leftpane:{shadow:["0 2px 30px 0 rgba(213, 213, 213, 0.5)"],border_right:["","1px solid #C8CDD0"]},rightpane:{shadow:["0 -2px 30px 0 rgba(39,54,78,0.11)"]},subpanel:{border_top_color:["#dbdbdb","#D9D9D9"]},textarea:{bg:c,border_color:s},sidebar:{bg:o,divider_color:["#C8CDD0","#C8CDD0"],icon_color:["#5B6B73","#5B6B73"],icon_hover_color:["#415058","#415058"],icon_active_color:a,
icon_active_bg:["#F4F5F6","#F4F5F6"],icon_hover_bgcolor:["#f2f2f2","#E8E8E8"],icon_hover_border_color:["#E8E8E8","#DBDBDB"],border_right:["1px solid #DEDEE4","1px solid #C8CDD0"],border_left:["","1px solid #C8CDD0"]},leftnav:{bg:o,nav_icon_hover:["#FCFCFC","#EBEBEB"]},basicWidgets:{bg:o,border_color:["#DEDEE4","#c8cdd0"],icon_color:["#6C6D6E","#6C6D6E"],icon_hover_color:["#f2f2f2","#E8E8E8"],icon_hover_border_color:["#E8E8E8","#DBDBDB"]},ruler:{bgColor:["#F9FAFB","#F9F9F9"],fgColor:["#DEDEE4","#DBDBDB"],
fontColor:["#8D9EA7","#8D9EA7"],shadowColor:["#F2F2F2","#EDEDED"],lineColor:["#EB5648","#EB5648"],borderColor:["#DADADC","#DEDEE4"],cornerActiveColor:["rgb(235, 86, 72, 0.6)","rgb(235, 86, 72, 0.6)"]},screenContainer:{bg:["#F5F5F5","#f9f9f9","#000"]},scrollbar:{track:{bg:["transparent","transparent"]},thumb:{x_bg:["#D2D2D8","#BCBCBC"],y_bg:["#DEDEE4","#BCBCBC"],x_hover_bg:["#BEC3C5"],y_hover_bg:["#C8CDD0"]}},listItem:{tc:["#5B6B73","#415058"],hover:{tc:["#298DF8","#298DF8"],bc:["#E8E8E8","#D9D9D9"],bg:[
"#F7F7F7","#E8E8E8"]},expander_color:["#C8CDD0","#8D9EA7"],action_color:["#8D9EA7","#8D9EA7"],action_hover_color:["#5B6B73","#1F292E"],active:{bg:["#F2F2F2","#FFF"],tc:["#298DF8","#298DF8"],bc:["#EBEBEB","#EBEBEB"]}},thumbnail:{bg:["#F2F2F2","#EBEBEB"],border_color:["#EDEDED","#DBDBDB"]},preferenceBar:{bg:["#F5F5F5","#F9F9F9"],bc:["#E7E9EA","#DBDBDB"]},colorButton:{bg:["#F6F7F8","#FCFCFC"],border_color:["#F2F2F3","#DBDBDB"]},searchBar:{bg:c,border_color:s},interation:{hover:{border_color:["#1E98EA",
"#1E98EA"]},active:{border_color:["#1E98EA","#1E98EA"],box_shadow:["0 0 4px 0 rgba(34, 162, 237, 0.66)","0 0 4px 0 rgba(34, 162, 237, 0.66)"]}},noComponentImage:["url('/images/workspace/design/no_component_list_light.png')","url('/images/workspace/design/no_component_list_grey.png')"],carouselSettings:{assetBoxBg:["#f7f7f7","#ebebeb"],addAssetIconFill:["#c8cdd0","#8d9ea7"]},linkSettings:{linkView:{detail_bg:["#f7f7f7","#fff"]},gesture:{bg:["#EBEBEB","#FFF"],border_color:["#EBEBEB","#FFF"],hover:{
border_color:["#298DF8","#298DF8"]},active:{border_color:["#298DF8","#298DF8"]}},linkPanel:{bg:["#f7f7f7","#FFF"],divider:["#FFF","#f7f7f7"]}}},f=function a(e,o){var i={}
return Object.entries(e).forEach(function(e){var t=(0,u.default)(e,2),n=t[0],r=t[1]
Array.isArray(r)?i[n]=r[o]:"object"===(0,l.default)(r)?i[n]=a(r,o):i[n]=r}),i},p={light:f(d,0),grey:f(d,1),dark:f(d,2)}
t.default=p},h0FN:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TIMER_DURATION_LIST=t.ANI_DURATION_LIST=t.TEMPLATE_TRANSITIONS=t.TRANSITIONS=void 0
var r=["leftmenu","rightmenu","leftdrawer","rightdrawer","slideright","slideleft","slidetop","slidebottom","slideleft2","slideright2","topin","popin","leftout","rightout","topout","popout"].map(function(e){return{value:e,label:I18N.tr[e]}}),a=(t.TRANSITIONS=r).filter(function(e){var t=e.value
return!/drawer|menu/.test(t)})
t.TEMPLATE_TRANSITIONS=a
t.ANI_DURATION_LIST=[{label:"0ms",value:"0ms"},"100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]
t.TIMER_DURATION_LIST=[{label:"0ms",value:"0"},"100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]},h2Vm:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),i=a(n("17x9")),h=a(n("TSYQ")),m=r(n("i6OX")),v=a(n("81q6")),g=a(n("UUBB")),y=a(n("tfo6")),b=a(n("Mn07")),S=a(n("sEfC")),w=n("Hlt7"),C=n("1iCU"),E=a(n("naIL")),k=[{label:p.default.createElement(m.SVGIcon,{name:"design/list"}),value:"literal"},{label:p.default.createElement(m.SVGIcon,{name:"design/thumbnail"}),value:"thumbnail"}],_=function(e){function i(e){var n;(0,l.default)(this,i),
n=(0,u.default)(this,(0,c.default)(i).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(n)),"setElementRef",function(e){return n.$elem=e}),(0,f.default)((0,d.default)((0,d.default)(n)),"handTooltip",function(){$(n.$elem).tooltip({container:"body",selector:".rn-list-item, .thumbnail-item",placement:function(){return"literal"===n.state.viewMode?"left":"bottom"},trigger:"hover",title:function(){var e=this.querySelector(".editable-span"),t=e.offsetWidth,n=e.scrollWidth,r=e.textContent
return t<n&&[r]}})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleSearch",function(e){n.debounceSearch(e.toLowerCase()),n.setState({keyword:e})}),(0,f.default)((0,d.default)((0,d.default)(n)),"debounceSearch",(0,S.default)(function(e){MB.event("ga","使用了页面搜索","运行页"),n.props.dispatch({type:"reducer:preview-panel:search",payload:{screenSearch:e}})},300)),(0,f.default)((0,d.default)((0,d.default)(n)),"handleViewChange",function(e){"literal"===e?n.handleListView():n.handleThumbnail()}),(0,f.default)((0,
d.default)((0,d.default)(n)),"handleListView",function(){var e=n.props.toolbarActiveItem
MB.event("ga","在".concat(C.TOOLBAR_TRAKING_CONFIG[e],",点击了列表"),"运行页"),MB.event("zhuge","运行页-预览-点击以列表查看页面列表"),n.setState({viewMode:"literal"})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleThumbnail",function(){var e=n.props.toolbarActiveItem
MB.event("ga","在".concat(C.TOOLBAR_TRAKING_CONFIG[e],",点击了缩略图"),"运行页"),MB.event("zhuge","运行页-预览-点击以略缩图查看页面列表"),n.setState({viewMode:"thumbnail"})}),(0,f.default)((0,d.default)((0,d.default)(n)),"renderCommentIcon",function(e){var t=n.props.screenCommentThreadCountMap
if(1<=(t&&t[e.cid]||0)&&!MB.isHTMLZip())return p.default.createElement("span",{className:"toggle-comment"},p.default.createElement(m.default,{type:"dora",name:"comment"}))})
var t=e.screenTreeData,r=t.nodeMap,a=t.screenNameCidMap,o=e.screenSearch
return n.state={keyword:"",viewMode:e.isDemo?"thumbnail":"literal",searchScreenKeyMap:(0,w.filterSearch)(a,o,r)||[]},n}return(0,s.default)(i,e),(0,o.default)(i,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.screenSearch,n=this.props,r=n.screenTreeData,a=r.nodeMap,o=r.screenNameCidMap
if(t!=n.screenSearch){var i=(0,w.filterSearch)(o,t,a)||[]
this.setState({searchScreenKeyMap:i})}}},{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"render",value:function(){var e=this.props,t=e.screenTreeData,n=e.currentScreenCid,r=e.screenSearch,a=e.dispatch,o=this.state,i=o.viewMode,l=o.keyword,u=o.searchScreenKeyMap,c=0<r.length,s=c?{root:u}:t.childListMap
return p.default.createElement("div",{className:E.default["screen-panel"]},p.default.createElement("div",{className:"screen-actions"},p.default.createElement(v.default,{value:l,placeholder:I18N.preview.search,onChange:this.handleSearch}),p.default.createElement(g.default,{className:"viewmode",options:k,value:i,handleChange:this.handleViewChange})),p.default.createElement("div",{className:(0,h.default)("screen-list-container",i),ref:this.setElementRef},"literal"===i?p.default.createElement(y.default,{
activeCid:n,isSearching:c,screenTreeData:t,screenTreeMap:s,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a}):p.default.createElement(b.default,{activeCid:n,screenTreeMap:s,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a})))}}]),i}(p.PureComponent)
t.default=_,(0,f.default)(_,"propTypes",{screenTreeData:i.default.object,screenCommentThreadCountMap:i.default.object,currentScreenCid:i.default.string,screenSearch:i.default.string,toolbarActiveItem:i.default.string,isDemo:i.default.bool,dispatch:i.default.func})},h9XN:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CopyBtn=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=a(n("sxGJ")),m=n("wYtL"),v=n("/5+U"),g=a(n("mfFm")),y=function(e){function t(){var e
return(0,o.default)(this,t),(e=(0,l.default)(this,(0,u.default)(t).call(this))).onClipboardEvent=e.onClipboardEvent.bind((0,s.default)((0,s.default)(e))),e}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.target,r=e.text
this.clipboard=r?new h.default(this.$copyBtn,{text:function(){return(0,v.unescapeHTML)(document.querySelector(r).innerText)}}):new h.default(this.$copyBtn,{target:function(){return document.querySelector(n)}}),this.clipboard.on("success",function(e){t.error=!1,window.getSelection().removeAllRanges(),t.onClipboardEvent()}),this.clipboard.on("error",function(e){t.error=!0,t.onClipboardEvent()})}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"onClipboardEvent",value:function(){
MB.event("ga","使用了代码复制","运行页")}},{key:"render",value:function(){var t=this
return f.default.createElement(m.Tooltip,{arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:g.default.copyBtn},f.default.createElement("span",{ref:function(e){return t.$copyBtn=e}},I18N.copy))}}]),t}(f.Component)
t.CopyBtn=y,(0,d.default)(y,"propTypes",{target:p.default.string,text:p.default.string})},hgQt:function(e,t,n){var r=n("Juji"),a=n("4sDh")
e.exports=function(e,t){return null!=e&&a(e,t,r)}},hkUU:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){function e(){(0,a.default)(this,e),this.timeoutMap=new Map}return(0,o.default)(e,[{key:"setTimeout",value:function(r){function e(e,t,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(e,t,n){var r=this,a=setTimeout(function(){t(),r.clearTimeout(e,t)},n)
return this.setToken(e,t,a),a})},{key:"clearTimeout",value:function(n){function e(e,t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(e,t){var n=this.getToken(e,t)
void 0!==n&&(clearTimeout(n),this.clearToken(e,t))})},{key:"clearTimeoutByKey",value:function(n){var r=this,e=this.timeoutMap.get(n)
void 0!==e&&(e.forEach(function(e,t){return r.clearTimeout(n,t)}),this.timeoutMap.delete(n))}},{key:"clear",value:function(){var n=this
this.timeoutMap.forEach(function(e,t){return n.clearTimeoutByKey(t)})}},{key:"setToken",value:function(e,t,n){var r=this.timeoutMap.get(e)
void 0===r&&(r=new Map,this.timeoutMap.set(e,r)),r.set(t,n)}},{key:"getToken",value:function(e,t){var n=this.timeoutMap.get(e)
if(n)return n.get(t)}},{key:"clearToken",value:function(e,t){var n=this.timeoutMap.get(e)
n&&n.delete(t)}}]),e}()
t.default=i},iKZC:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.doSaveWithSocketAndFallback=t.createAutoSaveQueue=void 0
var b=r(n("o0o1")),S=r(n("MVZn")),w=r(n("yXPU")),C=n("os03"),E=n("Clcl")
t.createAutoSaveQueue=function(e){var t=e.doSave,n=e.onError,r=e.delay,a=(0,C.createEventTarget)(),o=a.clear,i=a.addEventListener,l=a.removeEventListener,u=a.dispatchEvent,c=(0,C.createSaveQueue)({beforeSave:function(){return u({type:"beforesave"})},afterSave:function(){return u({type:"aftersave"})},doSave:t,onError:n}),s=c.clear,d=c.add,f=c.save,p=c.filter,h=c.getLength,m=c.getIsSaving,v=c.getSavingState,g=(0,C.createTimer)({func:f,delay:r}),y=g.start,b=g.stop,S=g.getDelay,w=g.setDelay
return{reset:function(){b(),o(),s()},add:function(e){d(e),y()},getState:function(){return{pendingLength:h(),isSaving:m(),delay:S(),savingState:v()}},getIsEmpty:function(){return!m()&&!h()},getIsSaving:m,getDelay:S,setDelay:w,filterSaveQueue:p,triggerSave:f,afterCurrentSave:function(t){if(!m())return t()
i("aftersave",function e(){l("aftersave",e),t()})},addEventListener:i,removeEventListener:l}}
var a=function(){var t=(0,w.default)(b.default.mark(function e(t){var c,s,n,d,f,p,h,m,v,g,y,r,a,o
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c=t.setSavingState,s=t.getAutoSaveQueueState,n=t.saveChunkList,d=t.saveQueueLength,f=t.getSaveItemInfo,p=t.isSocketAvailable,h=t.doSocketBatchSave,m=t.onSocketError,v=t.doFallbackSaveItem,g=t.onFallbackError,y=0,r=b.default.mark(function e(a,o){var u,i,t
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=n[a],i=0,t=b.default.mark(function e(){var l,t,n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l={chunkIndex:a,chunkIndexMax:o,saveChunkFirstInfo:f(u[0]),saveChunkLength:u.length,chunkAttempt:i,saveQueueIndex:y,saveQueueLength:d},e.prev=1,p())return e.next=5,(0,C.withTimeoutRetry)({retry:2,timeout:6e4,task:function(){var t=(0,w.default)(b.default.mark(function e(t){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.attempt,r=t.timeout,c((0,S.default)({type:"socket-batch-save",attempt:n,timeout:r},l)),e.next=4,h({saveChunk:u,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var n=(0,w.default)(b.default.mark(function e(t,n){var r,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.attempt,a=n.timeout,c((0,S.default)({type:"socket-batch-save-retry",error:t.toString(),attempt:r,timeout:a},l)),e.next=4,m(t,{saveChunk:u,attempt:r,timeout:a})
case 4:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()})
e.next=6
break
case 5:return e.abrupt("return","break")
case 6:e.next=11
break
case 8:e.prev=8,e.t0=e.catch(1),(0,E.REPORT_ERROR)(e.t0,"[AutoSaveQueue][doSave] failed to save with socket",s())
case 11:e.prev=11,t=b.default.mark(function e(t,n){var o,i
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=u[t],i=(0,S.default)({index:t,indexMax:n,saveItem:f(o)},l,{saveQueueIndex:y+t}),e.next=4,(0,C.withTimeoutRetry)({retry:4,timeout:1e5,task:function(){var t=(0,w.default)(b.default.mark(function e(t){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.attempt,r=t.timeout,c((0,S.default)({type:"fallback-save-item",attempt:n,timeout:r},i)),e.next=4,v({saveItem:o,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var n=(0,w.default)(b.default.mark(function e(t,n){var r,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.attempt,a=n.timeout,c((0,S.default)({type:"fallback-save-item-retry",error:t.toString(),attempt:r,timeout:a},i)),e.next=4,g(t,{saveItem:o,attempt:r,timeout:a})
case 4:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()})
case 4:case"end":return e.stop()}},e,this)}),n=0,r=u.length
case 14:if(n<r)return e.delegateYield(t(n,r),"t1",16)
e.next=19
break
case 16:n++,e.next=14
break
case 19:return e.abrupt("return","break")
case 22:e.prev=22,e.t2=e.catch(11),(0,E.REPORT_ERROR)(e.t2,"[AutoSaveQueue][doSave] failed to save with fetch fallback",s())
case 25:i++
case 26:case"end":return e.stop()}},e,this,[[1,8],[11,22]])})
case 3:return e.delegateYield(t(),"t0",5)
case 5:if("break"===e.t0)return e.abrupt("break",10)
e.next=8
break
case 8:e.next=3
break
case 10:y+=u.length
case 11:case"end":return e.stop()}},e,this)}),a=0,o=n.length
case 4:if(a<o)return e.delegateYield(r(a,o),"t0",6)
e.next=9
break
case 6:a++,e.next=4
break
case 9:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doSaveWithSocketAndFallback=a},iLpg:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledSearchBar=void 0
var a=r(n("vOnD")),o=n("+IKJ"),i=a.default.div.withConfig({displayName:"styles__StyledSearchBar",componentId:"jsl19y-0"})(["position:relative;height:24px;display:flex;justify-content:space-between;align-items:center;.search-icon{position:absolute;left:0;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;color:#8d9ea7;pointer-events:none;}input{width:100%;height:100%;padding-right:22px;background:",";border:1px solid ",";border-radius:2px;transition:all 0.2s ease-out;",
";text-indent:24px;&:hover{border-color:",";}&:focus{background:#fff;border-color:",";box-shadow:",";}}.clear-icon{position:absolute;right:0;width:24px;line-height:24px;text-align:center;color:#bec2c9;transition:all 0.15s ease-in-out;cursor:pointer;&:hover{color:#7d8695;}}"],function(e){return e.theme.searchBar.bg},function(e){return e.theme.searchBar.border_color},(0,o.placeholder)({color:"#8d9ea7"}),function(e){return e.theme.interation.hover.border_color},function(e){
return e.theme.interation.active.border_color},function(e){return e.theme.interation.active.box_shadow})
t.StyledSearchBar=i},iScx:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),o=n("Ehhz").MODEL_OPERATION_MAP.Collaborator,a=(0,r.createStateStore)([]),i=a.getState,l=a.setState,u=a.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:collaborators:update",payload:o(e,a,i)})})},s={entryMap:{"collaborators:refresh":u(function(e,t,n){var r=t.dispatch,a=n&&n.payload;(e=o.refreshStateList(e,a,!1)).forEach(function(e){e.avatar||(e.avatar="/images/avatar.png")}),r({type:"reducer:collaborators:update",payload:e})}),"collaborators:add":c(o.addState,!1),"collaborators:add-local":c(o.addState,!0),"collaborators:update":c(o.updateState,!1),"collaborators:update-local":c(o.updateState,!0),"collaborators:delete":c(o.deleteState,!1),
"collaborators:delete-local":c(o.deleteState,!0)},getState:i,setState:l}
t.default=s},iX79:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("6XO9"),m=n("wYtL"),v=a(n("RtVw")),g=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleFullScreen",function(){return t.props.dispatch({type:"entry:enter:full-screen-mode"})}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){return p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"margin-top-20",duration:1e3,content:I18N.preview.fullscreen,style:{lineHeight:0,cursor:"pointer"}},p.default.createElement("div",{
className:v.default.fullscreen,onClick:this.handleFullScreen},p.default.createElement(h.SVG,{name:"preview/fullscreen"})))}}]),o}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{dispatch:o.default.func})},ibfc:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=a(n("MVZn")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),p=a(n("lSNA")),o=a(n("17x9")),h=r(n("q1tI")),m=a(n("9DAG")),v=n("MGhH"),g=a(n("WtCM")),y=a(n("TSYQ"))
n("aw2M")
var b=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,p.default)((0,d.default)((0,d.default)(t)),"setScreenRef",function(e){return t.$screen=e}),(0,p.default)((0,d.default)((0,d.default)(t)),"getScreenElement",function(){return t.$screen}),t}return(0,s.default)(o,e),(0,l.default)(o,[{key:"componentWillUnmount",value:function(){var e=this.props.screen
MB.runner.runnerUtil.destroyScrollBarByCid(e.cid)}},{key:"render",value:function(){var e=this.props,t=e.isShow,n=e.screen,r=e.isActive,a=e.style,o=e.widgetQueryMap,i=n.cid,l=n.stateCid,u=n.transition,c=Screen.find(n.cid),s=(0,f.default)({display:t?"":"none",backgroundColor:c.bg(),backgroundImage:c.bgimage?"url(".concat(c.bgimage,")"):""},a),d=(0,y.default)("pcanvas",c.orient(),{active:r})
return h.default.createElement("div",{ref:this.setScreenRef,id:"pscreen".concat(c.cid),"data-cid":c.cid,"data-orientation":c.orient(),className:d,style:s},h.default.createElement(S,{screenCid:i,stateCid:l,transition:u,widgetQueryMap:o,getScreenElement:this.getScreenElement}))}}]),o}(h.PureComponent)
t.default=b,(0,p.default)(b,"propTypes",{isShow:o.default.bool,screen:o.default.object,isActive:o.default.bool,style:o.default.object,widgetQueryMap:o.default.object})
var S=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.screenCid,n=e.stateCid,r=e.transition,a=e.widgetQueryMap,o=e.getScreenElement,i=Screen.find(t),l=i.headerHeight(),u=i.footerHeight(),c={height:i.height-(l+u)},s={height:i.height,marginTop:-l}
return h.default.createElement(g.default,{screenCid:t,stateCid:n,transition:r,widgetQueryMap:a,getScreenElement:o},function(e){return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"screen-header",style:{height:l}},0<l&&h.default.createElement(w,{treeData:e,headerHeight:l})),h.default.createElement("div",{className:"screen-content"},h.default.createElement("div",{className:"widgets",style:c},h.default.createElement("div",{className:"scontainer",style:s},
h.default.createElement(m.default,{widgetTreeData:e})))),h.default.createElement("div",{className:"screen-footer",style:{height:u}},0<u&&h.default.createElement(C,{treeData:e,footerHeight:u,screenHeight:i.height})))})}}]),t}(h.PureComponent);(0,p.default)(S,"propTypes",{screenCid:o.default.string,stateCid:o.default.string,transition:o.default.object,widgetQueryMap:o.default.object,getScreenElement:o.default.func})
var w=function(e){var t=e.treeData,n=e.headerHeight,r=(0,v.headerFilter)(t,n)
return h.default.createElement(m.default,{widgetTreeData:r})}
w.propTypes={treeData:o.default.object,headerHeight:o.default.number}
var C=function(e){var t=e.treeData,n=e.footerHeight,r=e.screenHeight,a=(0,v.footerFilter)(t,r,n)
return h.default.createElement("div",{className:"footer-widgets",style:{marginTop:n-r}},h.default.createElement(m.default,{widgetTreeData:a}))}
C.propTypes={treeData:o.default.object,footerHeight:o.default.number,screenHeight:o.default.number}},ibhU:function(e,t,n){e.exports={"runner-state-panel":"_2fELsPyTr6Bvb5x4zc4dSg"}},inTe:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var Re=r(n("MVZn")),a=r(n("17x9")),Pe=r(n("q1tI")),Ae=n("qOCw"),je=n("Ro3d"),Le=n("PqLM"),De=n("RUem"),o=function(e){var t=e.layer,n=e.unit,r=e.ratio,a=e.showGlobal,o=e.userPickColor,i=void 0===o?[]:o,l=e.globalColor,u=void 0===l?[]:l,c=e.globalText,s=void 0===c?[]:c,d=e.documentColor,f=void 0===d?[]:d,p=e.screenColor,h=void 0===p?[]:p,m=e.language,v=e.colorUnit,g=e.dispatch,y=t.src_left,b=t.src_top,S=t.src_width,w=t.src_height,C=t.origin_width,E=t.origin_height,k=t.bd_radius,_=t.line_height,x=t.bg_colors,
T=void 0===x?[]:x,M=t.borders,N=void 0===M?[]:M,I=t.i,O=t.display_name,R=t.padding,P=void 0===R?0:R,A=t.hiddSpacing,j=void 0!==A&&A,L=t.text_styles,D=void 0===L?[]:L,B=t.alignment,F=t.vertical_alignment,U=t.image,W=t.text,q=t.letter_spacing,z=t.image_set_zip,H=t.shadows,Y=void 0===H?[]:H,V=t.inner_shadows,J=void 0===V?[]:V,X=t.rotation,G=t.textShadows,Z=void 0===G?[]:G,K=t.image_set,Q=void 0===K?[]:K,$=t.name,ee=0<N.length,te=0<T.length,ne=!!U,re=0<D.length&&W&&(0,Ae.getTextContent)(t).length,
ae=0<Y.length||0<Z.length,oe=0<J.length,ie=z,le={left:y,top:b,width:C||S,height:E||w,borderRadius:k,opacity:t.o,rotation:X,ratio:r,unit:n}
if("line"===$){var ue=(0,Le.getLineGeneralInfo)(t,!0),ce=ue.length,se=ue.thickness,de=ue.angle
le.width=ce,le.height=se,le.rotation=de}var fe=(0,Ae.getBaseAttributes)(le),pe=fe.adapterTop,he=fe.adapterLeft,me=fe.adapterWidth,ve=fe.adapterHeight,ge=fe.radius,ye=fe.opacity,be=fe.rotate,Se={lineHeight:_,letterSpacing:q,unit:n,ratio:r},we=(0,Ae.getTextAttributes)(Se),Ce=we.lineHeight,Ee=we.letterSpacing,ke="number"==typeof I?I?"italic":"normal":void 0,_e={textStyles:D,background:T,borders:N,shadows:Y,innerShadows:J,colorUnit:v,ratio:r,unit:n},xe=(0,Ae.getCodeAttributes)(_e),Te=t.o&&100!=t.o?t.o/100:null,
Me=(0,je.transfromProptype)({attr:(0,Re.default)({x:he,y:pe,width:me,height:ve,lineHeight:Ce,textAlign:B,opacity:Te,borderRadius:ge},xe),language:m,unit:n}),Ne=ne?"ImageView":re?"TextView":"View",Ie="screen"===t.type||t.kind?t.name:O,Oe="line"===t.name
return a?Pe.default.createElement(De.GlobalAttributes,{adapterWidth:me,adapterHeight:ve,documentColor:f,globalText:s,globalColor:u,screenColor:h,userPickColor:i,colorUnit:v,dispatch:g}):Pe.default.createElement("div",null,Pe.default.createElement(De.LayerName,{value:Ie}),Pe.default.createElement(De.BasicAttributes,{adapterTop:pe,adapterLeft:he,adapterWidth:me,adapterHeight:ve,rotate:be,radius:ge,opacity:ye,unit:n,colorUnit:v}),re&&Pe.default.createElement(De.TextLayerInfo,{textStyles:D,alignment:B,
vertical_alignment:F,lineHeight:Ce,letterSpacing:Ee,ratio:r,unit:n,o:t.o,padding:P,fontStyle:ke,colorUnit:v,hiddSpacing:j,text:(0,Ae.getTextContent)(t)}),te&&Pe.default.createElement(De.Fills,{backgroundColorSort:T,colorUnit:v}),ee&&Pe.default.createElement(De.BorderInfo,{isStroke:Oe,borderSort:N,ratio:r,unit:n,colorUnit:v}),ae&&Pe.default.createElement(De.Shadows,{shadows:Y,textShadows:Z,colorUnit:v,unit:n,ratio:r}),oe&&Pe.default.createElement(De.Shadows,{shadows:J,colorUnit:v,unit:n,ratio:r,
isInnerShaow:!0}),ie&&Pe.default.createElement(De.ImageInfo,{imageSetZip:z,name:t.display_name,imageSet:Q}),Pe.default.createElement(De.CodeBox,{code:Me,whichAndView:Ne,language:m,text:(0,Ae.getTextContent)(t)||""}))}
o.propTypes={userPickColor:a.default.array,screenColor:a.default.array,documentColor:a.default.array,globalText:a.default.array,globalColor:a.default.array,colorUnit:a.default.string,layer:a.default.object,getLayerRef:a.default.func,showGlobal:a.default.bool,unit:a.default.string,ratio:a.default.number,language:a.default.string,dispatch:a.default.func}
var i=o
t.default=i},"j+XH":function(e){e.exports={"// PLATFORM_DEFAULT_FONT":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",PLATFORM_DEFAULT_FONT:{"zh-CN":{iphone:"PingFangSC",ipad:"PingFangSC",apple_watch:"PingFangSC",android:"SourceHanSansSC",smart_car:"SourceHanSansSC",customize:"SourceHanSansSC",web:"SourceHanSansSC"},en:{iphone:"SFUIText",ipad:"SFUIText",apple_watch:"SFUIText",android:"Roboto",smart_car:"Arial",customize:"Arial",web:"Arial"}},
"// WESTERN_ONLY_FONT_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",WESTERN_ONLY_FONT_LIST:["SFUIText","Roboto","Arial","Courier New","Helvetica","Times New Roman"]}},j1JO:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,t.watchFetchSlices=f,t.fetchSliceData=p
var i=r(n("MVZn")),l=r(n("o0o1")),u=n("oZtI"),c=r(n("Nu6V")),a=l.default.mark(d),o=l.default.mark(f),s=l.default.mark(p)
function d(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.all)([f()])
case 2:case"end":return e.stop()}},a,this)}function f(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)("reducer:slice:init",p)
case 2:case"end":return e.stop()}},o,this)}function p(e){var t,n,r,a,o
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.select)()
case 2:if(t=e.sent,n=t.model.current.projectCid,e.prev=4,n)return e.next=8,(0,u.call)(c.default,n)
e.next=14
break
case 8:r=e.sent,a=r.slices,o=a.filter(h),r.slices=o,e.next=15
break
case 14:r={slices:[{id:1,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",src:"ssss",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:2,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:3,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"}]}
case 15:return e.next=17,(0,u.put)({type:"reducer:slice:success",payload:(0,i.default)({},r)})
case 17:e.next=24
break
case 19:return e.prev=19,e.t0=e.catch(4),console.log(e.t0.stack),e.next=24,(0,u.put)({type:"reducer:slice:fail"})
case 24:case"end":return e.stop()}},s,this,[[4,19]])}var h=function(e){var t=e.width,n=void 0===t?1:t,r=e.height
return 0<n&&0<(void 0===r?1:r)}},"jT+R":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getPanelTreeData=t.getPanelStateName=t.getPanelStates=void 0
var a=r(n("RIqP")),o=n("QDPf")
t.getPanelStates=function(e){var t=e.ct()
if(!t)return[]
var n=[]
if(e.multi_states){var r=t.homeScreen()
n=[{cid:"default",name:I18N.default_state}].concat((0,a.default)(r.cscreenstates()))}else t.rootScreens().forEach(function(e){var t
return(t=n).push.apply(t,(0,a.default)(i(e)))})
return n}
var i=function t(e){var n=[e]
return e.children().forEach(function(e){n.push.apply(n,(0,a.default)(t(e)))}),n}
t.getPanelStateName=function(e,t){return"string"!=typeof e?"".concat(I18N.state," ").concat(t+1):e}
t.getPanelTreeData=function(e,t,n){if(e.multi_states){var r=e.ct().homeScreen(),a=r.cwidgets().map(function(e){return e.setState(n),e.dup()})
return(0,o.generateTreeData)(a,r.cid).widgetTreeData}return t.children.find(function(e){var t=e.cid
return n===t})}},"jbM+":function(e,t,n){var r=n("R/W3")
e.exports=function(e,t){return!(null==e||!e.length)&&-1<r(e,t,0)}},jbqJ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("pVnL")),i=r(n("QILm")),l=r(n("lwsE")),u=r(n("W8MJ")),c=r(n("a1gu")),s=r(n("Nsbk")),d=r(n("7W2i")),f=r(n("PJYZ")),p=r(n("lSNA")),h=r(n("q1tI")),o=r(n("17x9")),m=n("6XO9"),v=function(e){function o(){var e,t;(0,l.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(r))),(0,p.default)((0,f.default)((0,f.default)(t)),"handleChange",function(e){return t.props.onConfirm(e,t.props.attr)}),t}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props,t=(e.attr,e.onConfirm,e.precision),n=e.dontSelectOnFocus,r=(0,i.default)(e,["attr","onConfirm","precision","dontSelectOnFocus"])
return h.default.createElement(m.PanelInputNumber,(0,a.default)({precision:t,dontSelectOnFocus:n,onConfirm:this.handleChange},r))}}]),o}(h.default.PureComponent);(t.default=v).propTypes={precision:o.default.number,dontSelectOnFocus:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number]),attr:o.default.oneOfType([o.default.string,o.default.array]),onConfirm:o.default.func},v.defaultProps={precision:0,dontSelectOnFocus:!0}},jeLk:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){function e(){(0,a.default)(this,e),this.store=null,this.viewMap={},this.observerMap={}}return(0,o.default)(e,[{key:"setStore",value:function(e){this.store=e}},{key:"callObserver",value:function(e){for(var t,n=arguments.length,r=new Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
return this.observerMap[e]&&(t=this.observerMap)[e].apply(t,[e].concat(r))}},{key:"setObserver",value:function(e,t){this.observerMap[e]=t}},{key:"setView",value:function(e,t){this.viewMap[e]=t}},{key:"callViewMethod",value:function(e,t){for(var n,r=this.viewMap[e],a=arguments.length,o=new Array(2<a?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i]
return r&&r[t]?(this.callObserver("view:".concat(e,":").concat(t)),r[t].apply(r,[this.store].concat(o))):(n=console).warn.apply(n,["[WebpackInterface][callViewMethod] missed",e,t].concat(o))}},{key:"init",value:function(){this.callObserver("init"),this.store&&this.store.dispatch({type:"entry:state:init"})}},{key:"clear",value:function(){this.store&&this.store.dispatch({type:"entry:state:clear"}),this.callObserver("clear")}}]),e}()
t.default=i},jl5L:function(e,t,n){var o=n("Sxd8"),i=n("tLB3"),l=n("dt0z"),u=Math.min
e.exports=function(e){var a=Math[e]
return function(e,t){if(e=i(e),t=null==t?0:u(o(t),292)){var n=(l(e)+"e").split("e"),r=a(n[0]+"e"+(+n[1]+t))
return+((n=(l(r)+"e").split("e"))[0]+"e"+(+n[1]-t))}return a(e)}}},jvRN:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getMockingBotWidgets=t.isSketchLayer=t.checkColor=void 0
var m=r(n("MVZn")),s=n("G3NE"),i=r(n("cl8F")),l=n("Ibie"),d=n("FkXu"),y=n("LbTH"),o=n("2EV6"),u=n("/5+U"),c=n("upRB"),b=/\\\w+/gi,S=function(e){return e?e.replace(b,"").trim():i.default}
t.checkColor=S
t.isSketchLayer=function(e){return Number.isInteger(e)||"artboard-base"===e}
t.getMockingBotWidgets=function(e){var t=e.model.widgets,n=(0,c.getCurrentProject)(e).device,r=(0,c.getCurrentScreen)(e),a=f(r.cid),o=t.concat(a),i=0
return o.filter(function(e){return i||e.screen_cid!==r.cid||"status_bar"!==e.name||(i=e.height),!(e.screen_cid!==r.cid||["pg","lr","sticky"].includes(e.name)||"image_view"===e.name&&e.width===r.width&&e.height===r.height)}).map(function(e){return(0,l.patchWidgetSize)(e,r,i)}).map(function(e){return p(e,n)}).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})}
var f=function(p){var e=window.Screen
if(!e)return[]
var t=e.find(p).cpanels(),h=[]
return t.forEach(function(c){h.push(c.__proto__)
var s=c.cid,d=c.top,f=c.left;(c.multi_states?c.ct().homeScreen().cwidgets().map(function(e){return Widgetstate.find(c.main_state_cid+e.cid)||Widgetstate.find("default"+e.cid)||e}):c.mainState().cwidgets()).forEach(function(e){var t=e.top,n=e.left,r=e.width,a=e.height,o=f+Math.min(Math.max(n,0),c.width),i=f+Math.min(Math.max(n+r,0),c.width),l=d+Math.min(Math.max(t,0),c.height),u=d+Math.min(Math.max(t+a,0),c.height)
h.push((0,m.default)({},e.__proto__,{id:"".concat(c.cid,"-").concat(e.id),panel_cid:s,screen_cid:p,top:l,left:o,width:i-o,height:u-l}))})}),h},p=function(e,t){var n,r={},a=e.name,o=e.ro,i=e.border_radius,l=e.bs,u=e.ha,c=e.va,s=e.lh,d=e.box_shadow,f=e.text_shadow,p=e.sc,h=e.ds,m=e.text
if(m&&(n=w(m.replace(/<p>/g,"").replace(/<\/p>/g,"\n")),r.text_styles=(0,y.checkIfItemTextIsNewVersion)(e)?[E(JSON.parse(e.text))]:[{font_size:e.fs,color:S(e.tc||C(a,"tc",t)),length:n.length,font_face:k(m,t)}],r.text=n),u&&(r.alignment=u),c&&(r.vertical_alignment=c),s&&(r.line_height=s),i&&(r.bd_radius=i),o&&(r.rotation=o),r.bc=S(e.bc||C(a,"bc",t)),l&&(r.borders=[{thickness:l,color:S(r.bc)}]),e.bg&&(r.bg_colors=[{value:S(e.bg)}]),"triangleb"!==a&&"triangletl"!==a&&"icon_button"!==a||(r.bg_colors=[{value:S(
e.tc||C(a,"tc"))}]),d){var v=JSON.parse(d)[0]
r.shadows=[{offset_x:v[1],offset_y:v[2],blur_radius:v[3],spread:v[4],color:S(v[5].replace(b,""))}]}else p&&h&&(r.shadows=[{color:S(p.replace(b,"")),blur_radius:h}])
if(f){var g=JSON.parse(f)[0]
r.textShadows=[{offset_x:g[0],offset_y:g[1],blur_radius:g[2],color:S(g[3].replace(b,""))}]}else e.ts&&(r.textShadows=[{color:S(e.tsc.replace(b,"")),blur_radius:e.ts}])
return"label"!==a&&"text_view"!==a||(r.hiddSpacing=!0),Object.assign({},e,r)},a=/<[^>]+>/gi,w=function(e){return!!e&&e.replace(a,"")},C=function(e,t,n){var r="".concat(e,"_").concat(n),a=e,o=i.default[r]||i.default[a]
return o&&o[t]?o[t]:i.default[t]},E=function(e){var t=(0,s.getRichTextAttr)(e),n=t.fontFamily,r=t.fontWeight,a=t.fontSize,o=t.color,i=t.fontStyle,l=t.letterSpacing,u=t.lineHeight,c=t.paraSpacing
return{font_face:"".concat((0,d.getFontFamilyAndWeightText)(n,r)),font_size:a,color:o,fontStyle:i,letterSpacing:l,lineHeight:u,paraSpacing:c}},k=function(e,t){var n=(0,u.isChinese)(e)?"chinese":"english",r=h()?"mac":"windows",a=(0,o.getProjectPlatformByDevice)(t)
return v[r][a][n]},h=function(){return/Mac|iPod|iPhone|iPad/.test(navigator.platform)},v={mac:{ios:{chinese:"PingFang SC",english:"-apple-system"},android:{chinese:"PingFang SC",english:"Roboto"},others:{chinese:"PingFang SC",english:"Roboto"}},windows:{ios:{chinese:"Microsoft Yahei",english:"Arial"},android:{chinese:"Microsoft Yahei",english:"Roboto"},others:{chinese:"Microsoft Yahei",english:"Roboto"}}}},jybS:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("uavl"),h=n("zQyp"),m=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.widget,n=e.postfix,r=e.top,a=e.left,o=(0,h.getWidgetClassName)(t,n),i=t.top,l=t.left
Object.assign(t,{top:r,left:a})
var u=(0,h.getWidgetStyle)(t,"p")
Object.assign(t,{top:i,left:l})
var c=t.v&&Link.find(t.link_cids),s=c?c.cid:"",d=c&&"tap"!==c.gesture?c.gesture:""
return n&&"pg"===t.name&&!c?null:f.default.createElement("div",{"data-cid":t.cid,"data-link_cid":s,className:o,id:"widget".concat(t.cid).concat(n),style:u},(0,p.getWidgetContent)(t,!0),"line"!==t.name&&f.default.createElement("div",{className:"region gesture ".concat(d)}))}}]),t}(f.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{widget:d.default.object,postfix:d.default.string,top:d.default.number.isRequired,left:d.default.number.isRequired})},kJQk:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("8Fba")),i=(0,n("/5+U").immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),l=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.projects,a=i(r,n.projectCid),o=u(a.access_token,n.screenCid)
return{scale:1,width:"100%",height:"100%",src:"".concat(o,"&").concat(Date.now())}})(o.default)
t.default=l
var u=function(e,t){return"".concat("/snapshot.png","?access-token=").concat(e,"&screen-cid=").concat(t,"&mode=zoom-1.00")}},kUAk:function(e,t){function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=function(e){var u,c,s,d=e.extractorList,f=e.trimComment,t=function(){var e={fragList:u,urlMap:c,fontInfo:s}
return u=[],c={},s={fontFaceMap:{},fontFamilySet:new Set},e}
return t(),{getOutput:t,collect:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]&&arguments[2]
if(e&&f&&(e=f(e)),e){var a=function(e){return void 0===c[e]&&(c[e]={urlString:e,originUrl:t,dataUrl:""}),c[e]},r=d.reduce(function(e,n){return e.reduce(function(e,t){return n(e,t,a)},[])},[e])
if(u=u.concat(r),!n&&v.test(e)){for(var o,i=function(e){var t=p(g(e),1)[0],n=[]
if(t&&k([],e,function(e){return n.push(a(e))}),n.length){var r="".concat(t,"|").concat(y(e),"|").concat(b(e))
void 0===s.fontFaceMap[r]?s.fontFaceMap[r]=new Set(n):h(s.fontFaceMap[r],n)}},l=0;o=m.exec(e);)i(p(o,1)[0]),h(s.fontFamilySet,g(e.slice(l,o.index))),l=m.lastIndex
h(s.fontFamilySet,g(e.slice(l)))}}}}}
t.createFragCollector=n
var h=function(e,t){return t.forEach(e.add,e)},r=function(s,d){if(!s.global)throw new Error("[createUrlExtractor] global expected for regexpSearchBlock: ".concat(s))
if(d.global)throw new Error("[createUrlExtractor] non-global expected for regexpExtractUrl: ".concat(d))
return function(e,t,n){if("object"===f(t))return e.push(t),e
for(var r,a=0;null!==(r=s.exec(t));){var o=r[0],i=d.exec(o),l=i&&i[1]
if(l){var u=r.index+i.index+i[0].indexOf(l),c=t.slice(a,u)
e.push(c),e.push(n(l)),a=u+l.length}}return e.push(t.substr(a)),e}}
t.createUrlExtractor=r
var a=/<!--([\s\S]*?)-->/g,o=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,i=r(/<img [^>]*>/g,/src=['"]([^'"]*)['"]/),l=/url\(['"]?([^)'"]*)['"]?\)/,u=r(/style=['"].*url\([^)]*\).*['"]/g,l),m=/@font-face\s+{[^}]+font-family[^}]+}/g,v=/font(-family)?\s*:/,c=/font(-family)?\s*:\s*([^;}>]+)\s*[;}>]?/g,g=function(e){for(var n,a=[],t=function(){var e=p(n,3),r=e[1],t=e[2]
t&&t.split(",").forEach(function(e,t){0!==t||r||(e=(e=e.trim()).split(/["']$/.test(e)?/["']/:" ").filter(Boolean).pop())
var n=w(e)
n&&a.push(n)})};n=c.exec(e);)t()
return a},s=/font-style\s*:\s*(\w+)/,y=function(e){return(s.exec(e)||[])[1]||"normal"},d=/font-weight\s*:\s*(\w+)/,b=function(e){var t=(d.exec(e)||[])[1]
return"normal"===t?t="400":"bold"===t&&(t="700"),t||"400"},S=/^["'](.*)["']$/,w=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").trim().replace(S,"$1")}
t.createHTMLFragCollector=function(){return n({extractorList:[i,u],trimComment:function(e){return e.replace(a,"")}})}
var C=/url\([^)]*\)/g,E=r(C,l),k=r(C,/(\/?(\.?\.\/)*\b[-\w@:%_+.~#?&\/=]+.(woff2|woff|ttf|svg))([?#][-\w%._#=]{1,256})?/)
t.createCSSFragCollector=function(){return n({extractorList:[E,k],trimComment:function(e){return e.replace(o,"")}})}},knB1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
t.default={prefixAgo:null,prefixFromNow:"从现在开始",suffixAgo:"之前",suffixFromNow:null,seconds:"不到 1 分钟",minute:"大约 1 分钟",minutes:"%d 分钟",hour:"大约 1 小时",hours:"大约 %d 小时",day:"1 天",days:"%d 天",month:"大约 1 个月",months:"%d 月",year:"大约 1 年",years:"%d 年",numbers:[],wordSeparator:""}},l0oT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.degToRadian=t.getAngle=t.getLength=t.scrollTo=t.rotate=t.sin=t.cos=void 0
t.cos=function(e){return Math.cos(e*Math.PI/180)}
t.sin=function(e){return Math.sin(e*Math.PI/180)}
t.rotate=function(e,t,n){var r=t*Math.PI/180,a={x:n.x-e.x,y:n.y-e.y},o=a.x,i=a.y,l=o*Math.cos(r)-i*Math.sin(r),u=i*Math.cos(r)+o*Math.sin(r)
return{x:l+e.x,y:u+e.y}}
t.scrollTo=function(n,e,r){var a,o=n.scrollTop,i=e-o
a=0
!function e(){var t=l(a+=20,o,i,r)
n.scrollTop=t,a<r&&setTimeout(e,20)}()}
var l=function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}
t.getLength=function(e,t){return Math.sqrt(e*e+t*t)}
t.getAngle=function(e,t){var n=e.x,r=e.y,a=t.x,o=t.y,i=n*a+r*o,l=n*o-r*a
return(Math.atan2(l,i)/Math.PI*180+360)%360}
t.degToRadian=function(e){return e*Math.PI/180}},"l4l/":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("NyG0")),i=(0,a.connect)(function(e){var t=e.model.user,n=e.container.previewSetting
return{isLogin:Boolean(t.id),unit:n.unit,emPixel:n.emPixel,ratio:n.ratio,language:n.language,isShowColorPicker:n.isShowColorPicker,colorUnit:n.colorUnit}})(o.default)
t.default=i},lCKy:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9")),h=n("6XO9"),m=n("wYtL"),v=a(n("i6OX")),g=n("1iCU"),y=a(n("UbMB")),b=a(n("gX9a")),S=y.default.bind(b.default),w=function(e){function a(){var e,o;(0,i.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,u.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(o)),"handleClose",function(){var e=o.props,t=e.isScrollable,n=e.isHighlight,r=e.isStickyShow,a=e.shellType
MB.event("zhuge","运行页-预览-收起设置面板",{"内容区滚动":t?"开":"关","链接高亮":n?"开":"关","批注显示":r?"开":"关","边框类型":a})}),o}return(0,s.default)(a,e),(0,l.default)(a,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,n=e.isScrollable,r=e.isHighlight,a=e.isStickyShow,o=e.shellType,i=e.disabled,l=e.dispatch,u=p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"marign-top-20",duration:1e3,content:{hover:i?null:I18N.preview.setting}},p.default.createElement(v.default,{name:"cog",type:"dora"}))
return p.default.createElement(h.Dropdown,{disabled:i,menuClassName:S("play-setting-menu"),opener:u,menuX:"right",onClose:this.handleClose,menu:p.default.createElement(C,{canSetDeviceShell:t,isScrollable:n,isHighlight:r,isStickyShow:a,shellType:o,dispatch:l})})}}]),a}(p.PureComponent)
t.default=w,(0,f.default)(w,"propTypes",{canSetDeviceShell:o.default.bool,isScrollable:o.default.bool,isHighlight:o.default.bool,isStickyShow:o.default.bool,shellType:o.default.string,disabled:o.default.bool,dispatch:o.default.func})
var C=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"handleToggleScrollable",function(e){n.props.dispatch({type:"entry:preview-setting:update:is-scrollable",payload:{isScrollable:e}})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleToggleHighlight",function(e){n.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:e}})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleToggleSticky",
function(e){n.props.dispatch({type:"entry:preview-setting:update:is-sticky-show",payload:{isStickyShow:e}})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleUpdateShellType",function(e){var t=e.value
n.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t}})}),n}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,n=e.isScrollable,r=e.isHighlight,a=e.isStickyShow,o=e.shellType,i=t?g.SHELL_TYPE_LIST:g.SHELL_TYPE_LIST_WITHOUT_DEVICE,l=n?o:"none"
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.content_scrollable),p.default.createElement(h.Switch,{isChecked:n,onChange:this.handleToggleScrollable})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.highlight_clickable),p.default.createElement(h.Switch,{isChecked:r,onChange:this.handleToggleHighlight})),p.default.createElement("div",{className:"line"},
p.default.createElement("label",null,I18N.sticky_visible),p.default.createElement(h.Switch,{isChecked:a,onChange:this.handleToggleSticky})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.shell_type),p.default.createElement(h.RadioGroup,{size:"small",isDisabled:!n,value:l,optionList:i,onChange:this.handleUpdateShellType})))}}]),o}(p.PureComponent);(0,f.default)(C,"propTypes",{canSetDeviceShell:o.default.bool,isScrollable:o.default.bool,isHighlight:o.default.bool,
isStickyShow:o.default.bool,shellType:o.default.oneOf(["device","default","none"]),dispatch:o.default.func})},lDl7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenByWidgetLike=void 0
t.getScreenByWidgetLike=function(e){var t
if(e.panel_cid){var n=Panel.find(e.panel_cid)
t=n&&n.screen_cid}else if(e.widget_cid){var r=Widget.find(e.widget_cid)
t=r&&r.screen_cid}else t=e.screen_cid
return Screen.find(t)}},"lm/5":function(e,t,n){var p=n("fmRc"),h=n("wF/u")
e.exports=function(e,t,n,r){var a=n.length,o=a,i=!r
if(null==e)return!o
for(e=Object(e);a--;){var l=n[a]
if(i&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var u=(l=n[a])[0],c=e[u],s=l[1]
if(i&&l[2]){if(void 0===c&&!(u in e))return!1}else{var d=new p
if(r)var f=r(c,s,u,e,t,d)
if(!(void 0===f?h(s,c,3,r,d):f))return!1}}return!0}},lw2U:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setRunnerExtra=function(e){e.EventBucket=a.default,e.RunnerUtil=o.default,e.EventHandler=i.default,e.TimerHandler=l.default}
var a=r(n("3X8Y")),o=r(n("2g7H")),i=r(n("N/gT")),l=r(n("FAev"))},lwmc:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),C=r(n("q1tI")),E=a(n("gXld")),f=n("Uu/L"),p=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,n=e.treeProps,r=e.isSearching,a=e.editingCid,o=e.activeCid,i=e.screenTreeMap,l=e.screenDataMap,u=e.collapseKeySet,c=e.targetlinkCid,s=e.hoverCid
return C.default.createElement(f.StyledScreenList,null,0===i.root.length?C.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match):i.root.map(function(e){var t=e.cid
return C.default.createElement(h,{key:t,cid:t,depth:0,collapseKeySet:u,isSearching:r,editingCid:a,hoverCid:s,targetlinkCid:c,activeCid:o,screenDataMap:l,screenTreeMap:i,treeProps:n})}))}}]),t}(C.PureComponent)
t.default=p,(0,s.default)(p,"propTypes",{treeProps:d.default.object,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,activeCid:d.default.string,targetlinkCid:d.default.string,screenTreeMap:d.default.object,screenDataMap:d.default.object,collapseKeySet:d.default.object})
var h=function(e){function w(){return(0,o.default)(this,w),(0,l.default)(this,(0,u.default)(w).apply(this,arguments))}return(0,c.default)(w,e),(0,i.default)(w,[{key:"render",value:function(){var e=this.props,t=e.cid,n=e.treeProps,r=e.depth,a=e.activeCid,o=e.editingCid,i=e.isSearching,l=e.screenTreeMap,u=e.screenDataMap,c=e.collapseKeySet,s=e.targetlinkCid,d=e.hoverCid,f=n.renderItem,p=n.handleScreenItemActions,h=u[t],m=!c.has(t),v=l[t],g=h.cid===a,y=t===s,b=h.cid===o,S=Boolean(!i&&v)
return C.default.createElement("li",{"data-cid":t,className:"rn-content-item"},C.default.createElement(E.default,{depth:r,screen:h,isLinked:y,isActive:g,isEditing:b,hoverCid:d,showExpander:S,renderItem:f,collapseKeySet:c,handleScreenItemActions:p}),v&&m&&C.default.createElement("ol",{type:"screen-list",className:"child-screens"},v.map(function(e){var t=e.cid
return C.default.createElement(w,{key:t,cid:t,targetlinkCid:s,depth:r+1,collapseKeySet:c,isSearching:i,editingCid:o,hoverCid:d,activeCid:a,screenDataMap:u,screenTreeMap:l,treeProps:n})})))}}]),w}(C.PureComponent);(0,s.default)(h,"propTypes",{cid:d.default.string,treeProps:d.default.object,depth:d.default.number,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,targetlinkCid:d.default.string,activeCid:d.default.string,screenTreeMap:d.default.object,
screenDataMap:d.default.object,collapseKeySet:d.default.object})},"m/Xg":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),s=a(n("17x9")),p=r(n("q1tI")),h=n("xQM3"),m=n("CpT9"),v=a(n("p6mf")),g=function(e){function t(e){var s
return(0,o.default)(this,t),s=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(s)),"handleMouseDown",function(e){if(!MB.isMobile()&&!s.props.isImmersive){var t=$(e.target).closest(".map_view .image"),n=$(e.target).closest(".ppanel"),r=t[0]||n[0]
if(r&&(r.clientWidth!==r.scrollWidth||r.clientHeight!==r.scrollHeight)){var a=e.clientX,o=e.clientY,i=r.scrollTop,l=r.scrollLeft,u=0,c=function(e){e.preventDefault(),u++,r.scrollTop=i-(e.clientY-o),r.scrollLeft=l-(e.clientX-a)}
document.addEventListener("mousemove",c),document.addEventListener("mouseup",function e(t){5<u&&MB.runner.eventBucket.isCoolDown(),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e)})}}}),s.state={homeScreen:Screen.find(e.screen.cid)},s}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.screen,r=e.isLite,a=e.isScreenExpanded,o=e.viewportWidth,i=e.viewportHeight,l=t.splash,u=void 0===l?"":l,c=this.state.homeScreen,s={
width:o,height:i},d=(0,h.getScreenContainerStyle)(n,t,s,r,a),f=(0,m.getScreenClassName)(n,t)
return p.default.createElement("div",{id:"simulator",className:f,style:d,onMouseDown:this.handleMouseDown},p.default.createElement("div",{id:"app"},p.default.createElement(v.default,null)),p.default.createElement(y,{homeScreen:c,url:u}))}}]),t}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{screen:s.default.object.isRequired,project:s.default.object.isRequired,isLite:s.default.bool,isImmersive:s.default.bool,isScreenExpanded:s.default.bool,viewportWidth:s.default.number,viewportHeight:s.default.number})
var y=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.homeScreen,r=t.url
return e=n.w()>n.dH()?{top:0-n.dW(),width:n.dH(),height:n.dW()}:{top:0,width:n.dW(),height:"101%"},p.default.createElement("div",{className:"splash",style:{backgroundColor:n.bg()}},r&&p.default.createElement("img",{src:r,style:e}),p.default.createElement("div",{className:"loading"},p.default.createElement("div",{className:"spinner"})))}}]),t}(p.PureComponent);(0,f.default)(y,"propTypes",{homeScreen:s.default.object,url:s.default.string})},"m/km":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.IOS_BATTERY=t.IOS_WIFI=t.IOS_SIGNAL=void 0
t.IOS_SIGNAL='<svg xmlns="http://www.w3.org/2000/svg" width="17" height="12"><path d="M1.25 6.5h1a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1zM5.75 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" fill-rule="evenodd"/></svg>'
t.IOS_WIFI='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"><path d="M8.007 2.787a8.64 8.64 0 0 1 5.953 2.379c.12.118.314.116.433-.004l1.156-1.166a.322.322 0 0 0-.003-.456 10.897 10.897 0 0 0-15.08 0 .322.322 0 0 0-.003.456L1.62 5.162c.119.12.312.122.433.004a8.641 8.641 0 0 1 5.954-2.379zm0 3.796c1.217 0 2.391.452 3.294 1.27a.31.31 0 0 0 .433-.006l1.155-1.167a.322.322 0 0 0-.005-.459 7.16 7.16 0 0 0-9.752 0 .322.322 0 0 0-.005.46l1.155 1.166a.31.31 0 0 0 .433.006 4.907 4.907 0 0 1 3.292-1.27zm2.219 2.784a.314.314 0 0 0-.01-.457 3.422 3.422 0 0 0-4.42 0 .314.314 0 0 0-.009.457l1.998 2.016a.312.312 0 0 0 .443 0l1.998-2.016z" fill-rule="nonzero"/></svg>'

t.IOS_BATTERY='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12"><path d="M2.667 1.333C1.747 1.333 1 2.08 1 3v6c0 .92.746 1.667 1.667 1.667h16.666C20.253 10.667 21 9.92 21 9V3c0-.92-.746-1.667-1.667-1.667H2.667zm0-1h16.666A2.667 2.667 0 0 1 22 3v6a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 9V3A2.667 2.667 0 0 1 2.667.333z" opacity=".35"/><path d="M23 4v4a2.17 2.17 0 0 0 0-4" opacity=".4"/><rect x="2" y="2.333" width="18" height="7.333" rx="1.333"/></svg>'},m48X:function(e,t,n){
"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("pVnL")),i=a(n("QILm")),l=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9")
n("WcC0")
var v=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.menuClassName,r=(0,i.default)(e,["className","menuClassName"])
return p.default.createElement(m.Select,(0,o.default)({className:(0,m.trimList)(["ToolbarSelect",t]),menuClassName:(0,m.trimList)(["ToolbarSelectMenu",n])},r,{placeholder:" ",unstyled:!0,size:"small",menuX:"center"}))}}]),t}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{className:h.default.string,menuClassName:h.default.string})},m9na:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroup=t.RadioGroup=t.CheckerLabel=void 0
var l=a(n("PJYZ")),u=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9"))
n("I19b")
var h=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.className,r=e.isChecked,a=e.isDisabled,o=e.onClick,i=e.children
return p.default.createElement("label",{className:"\n        ".concat(t,"-label\n        ").concat(r?"is-checked":"","\n        ").concat(a?"is-disabled":"","\n        ").concat(n,"\n        ")},p.default.createElement("button",{className:"checker",onClick:o,disabled:a}),i)}}]),t}(p.PureComponent)
t.CheckerLabel=h,(0,f.default)(h,"propTypes",{type:o.default.oneOf(["radio","check"]).isRequired,className:o.default.string,isDisabled:o.default.bool,isChecked:o.default.bool,onClick:o.default.func,children:o.default.any}),(0,f.default)(h,"defaultProps",{className:""})
var m=function(e){function o(){var e,n;(0,u.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,c.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,l.default)((0,l.default)(n)),"createOnChangeHandler",function(e,t){return function(){return n.props.onChange(e,t)}}),n}return(0,d.default)(o,e),(0,i.default)(o,[{key:"render",value:function(){var n=this,e=this.props,t=e.className,r=e.optionList,a=e.currentOptionIdx,o=e.isDisabled
return p.default.createElement("span",{className:"radio-group ".concat(t," ").concat(o?"is-disabled":"")},r.map(function(e,t){return e&&p.default.createElement(h,{key:t,type:"radio",isChecked:t===a,isDisabled:o||e.isDisabled,onClick:!(o||e.isDisabled)&&n.createOnChangeHandler(e.val,t)},e.name)}))}}]),o}(p.PureComponent)
t.RadioGroup=m,(0,f.default)(m,"propTypes",{className:o.default.string,onChange:o.default.func,optionList:o.default.array,currentOptionIdx:o.default.number,isDisabled:o.default.bool}),(0,f.default)(m,"defaultProps",{className:""})
var v=function(e){function a(){var e,i;(0,u.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return i=(0,c.default)(this,(e=(0,s.default)(a)).call.apply(e,[this].concat(n))),(0,f.default)((0,l.default)((0,l.default)(i)),"createOnChangeHandler",function(o){return function(){var e=i.props,t=e.onChange,n=e.currentOptionIdxList,r=new Set(n),a=r.has(o)?"delete":"add"
r[a](o),t(r)}}),i}return(0,d.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var n=this,e=this.props,t=e.className,r=e.optionList,a=e.currentOptionIdxList,o=e.isDisabled,i=new Set(a)
return p.default.createElement("span",{className:"checkbox-group ".concat(t," ").concat(o?"is-disabled":"")},r.map(function(e,t){return e&&p.default.createElement(h,{key:t,type:"check",onClick:n.createOnChangeHandler(t),isDisabled:o||e.isDisabled,isChecked:i.has(t)},e.name)}))}}]),a}(p.PureComponent)
t.CheckboxGroup=v,(0,f.default)(v,"propTypes",{className:o.default.string,onChange:o.default.func,optionList:o.default.array,currentOptionIdxList:o.default.oneOfType([o.default.instanceOf(Set),o.default.array]),isDisabled:o.default.bool}),(0,f.default)(v,"defaultProps",{className:"",currentOptionIdxList:new Set})},mCdf:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=r(n("MVZn")),o=r(n("lwsE")),i=r(n("W8MJ")),l=r(n("a1gu")),u=r(n("Nsbk")),s=r(n("7W2i")),d=r(n("PJYZ")),p=r(n("lSNA")),f=r(n("q1tI")),a=r(n("17x9")),h=n("ZXhj"),m=n("1qiG"),v=function(e){function a(){var e,f;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return f=(0,l.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,p.default)((0,d.default)((0,d.default)(f)),"getAuxiliaryLinesStyle",function(e,t){return{top:(0,m.toPercentage)(e.top/t.height),left:(0,m.toPercentage)(e.left/t.width),width:(0,m.toPercentage)(e.width/t.width),height:(0,m.toPercentage)(e.height/t.height)}}),(0,p.default)((0,d.default)((0,d.default)(f)),"getAuxiliaryLinesLength",function(){var e={},t=f.props,n=t.baseRect,r=t.refRect,a=(0,h.getMinContainingRect)(n,r),
o=a.width-r.width
0<a.height-(n.height+r.height)&&o>n.width/2&&(e.horizontal=o)
var i=a.height-r.height
return 0<a.width-(n.width+r.width)&&i>n.height/2&&(e.vertical=i),e}),(0,p.default)((0,d.default)((0,d.default)(f)),"getLineStyle",function(e,t){var n=f.props,r=n.baseRect,a=n.refRect,o=r.left>a.left,i=r.top>a.top,l={}
if(e){var u,c=e/a.width
l.horizontal=(u={},(0,p.default)(u,i?"bottom":"top",0),(0,p.default)(u,o?"right":"left",(0,m.toPercentage)(-c)),(0,p.default)(u,"width",(0,m.toPercentage)(c)),u)}if(t){var s,d=t/a.height
l.vertical=(s={},(0,p.default)(s,o?"right":"left",0),(0,p.default)(s,i?"bottom":"top",(0,m.toPercentage)(-d)),(0,p.default)(s,"height",(0,m.toPercentage)(d)),s)}return l}),f}return(0,s.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.refRect,n=e.screen,r=e.style,a=this.getAuxiliaryLinesLength(),o=a.horizontal,i=a.vertical
if(!o&&!i)return null
var l=this.getAuxiliaryLinesStyle(t,n),u=this.getLineStyle(o,i)
return f.default.createElement("div",{className:"smart-auxiliary-lines",style:l},o&&f.default.createElement("div",{className:"line horizontal",style:(0,c.default)({},u.horizontal,{borderTopStyle:"".concat(r.dashed?"dashed":"solid"),borderTopColor:r.colorForLines})}),i&&f.default.createElement("div",{className:"line vertical",style:(0,c.default)({},u.vertical,{borderLeftStyle:"".concat(r.dashed?"dashed":"solid"),borderLeftColor:r.colorForLines})}))}}]),a}(f.default.Component);(t.default=v).propTypes={
baseRect:a.default.object,refRect:a.default.object,screen:a.default.object,style:a.default.object}},mbVZ:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=n("Ev6p"),a={isEmpty:r.r,put:r.u,take:r.u}
function o(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10,r=arguments[1],a=new Array(n),o=0,i=0,l=0,u=function(e){a[i]=e,i=(i+1)%n,o++},t=function(){if(0!=o){var e=a[l]
return a[l]=null,o--,l=(l+1)%n,e}},c=function(){for(var e=[];o;)e.push(t())
return e}
return{isEmpty:function(){return 0==o},put:function(e){if(o<n)u(e)
else{var t=void 0
switch(r){case 1:throw new Error("Channel's Buffer overflow!")
case 3:a[i]=e,l=i=(i+1)%n
break
case 4:t=2*n,a=c(),o=a.length,i=a.length,l=0,a.length=t,n=t,u(e)}}},take:t,flush:c}}var i={none:function(){return a},fixed:function(e){return o(e,1)},dropping:function(e){return o(e,2)},sliding:function(e){return o(e,3)},expanding:function(e){return o(e,4)}}},mfFm:function(e,t,n){e.exports={"global-attributes":"_7IJUmxJU-0pBWIkSjwqow","layer-name":"_1fsrzxYfz402VBIZ-DlMTP",header:"-zoI2C4ZHr_0l9t7KRYyj",panel:"zM5VvfRQZAspJENmHJ6ur",container:"_2vnSJjqQz99w4bRRbOUZJI",
copyBtn:"_3jCESy5izi8-tdVWEWV4At CpKVZuffOrTLzsddLyYDD","layer-load":"_1t4w9RKi0eRPtciV2rnYnP",spinner:"_2UWcFkBUBt-gOxQ-MhiSbD","rotate-infinite":"_2rlU4rEKcXWZvnvVLrx0xJ"}},mggN:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.listItem=t.disabled=t.textEllipsis=void 0
var r=n("vOnD"),a=(0,r.css)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"])
t.textEllipsis=a
var o=(0,r.css)(["position:relative;pointer-events:none;&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;cursor:not-allowed;pointer-events:auto;}"])
t.disabled=o
var i=(0,r.css)(["position:relative;height:32px;padding-left:14px;display:flex;align-items:center;border:1px solid transparent;color:",";cursor:pointer;.expander{width:12px;margin-top:1px;margin-left:-12px;text-align:center;color:",
";}.editable-span{margin-right:14px;width:100%;height:24px;line-height:22px;overflow:hidden;}.actions{display:none;position:absolute;top:0;right:0;height:100%;padding-left:6px;background:inherit;.Dropdown > button{display:flex;padding:8px 10px;padding-left:0;}.action{margin-right:6px;font-size:12px;color:",";&:hover{color:",";}}&.is-active{display:flex;align-items:center;color:#298df8;}}&:hover{.actions{display:flex;align-items:center;color:#8d9ea7;}}&:hover,&.hover{color:",";background:",
";}&.active{color:",";background:",";}"],function(e){return e.theme.listItem.tc},function(e){return e.theme.listItem.expander_color},function(e){return e.theme.listItem.action_color},function(e){return e.theme.listItem.action_hover_color},function(e){return e.theme.listItem.hover.tc},function(e){return e.theme.listItem.hover.bg},function(e){return e.theme.listItem.active.tc},function(e){return e.theme.listItem.active.bg})
t.listItem=i},mnpx:function(e,t,n){},mreW:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var a=r(n("MVZn")),u=r(n("zkrS")),o=n("2eJi"),c=n("oose"),i=n("upRB"),l=(0,a.default)({},o.entryMap,{"entry:state:init":function(e){var t=e.dispatch
t({type:"user:set",payload:u.default.MB.user||null}),t({type:"teams:refresh"}),t({type:"widgets:refresh"}),t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"comments:refresh"}),t({type:"comment-threads:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:u.default.MB.currentProject,screen:u.default.MB.currentScreen}})},"entry:state:clear":function(e){e.dispatch},"entry:sync-runner:set-screen":function(e,t){
var n=e.dispatch,r=e.getState,a=t.payload.cid
n({type:"entry:current:set-screen",payload:{cid:a}})
var o=r()
a!==(0,i.getRunnerState)(o).activeCid&&("inspect"===(0,i.getCurrentMode)(o)&&n({type:"SET_VISIBILITY_SCREEN",payload:{screenID:a}}),u.default.MB.runner.timerHandler.clear(),n({type:"entry:runner:activate:screen",payload:{screenCid:a,transition:void 0}}))},"entry:refresh:team-related":function(e){var t=e.dispatch
t({type:"teams:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:u.default.MB.currentProject,screen:u.default.MB.currentScreen}})},"entry:refresh:project-related":function(e){var t=e.dispatch
t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"widgets:refresh"}),t({type:"comments:refresh"}),t({type:"comment-threads:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:u.default.MB.currentProject,screen:u.default.MB.currentScreen}})},"entry:listpage:toggle:order":function(e){var t,n=e.dispatch,r=e.getState,a=u.default.MB.preference(),o=r().container.listpage.ui.order
o?(t="asc"===o?"desc":"asc",a.app_order=t,a.lsave(),u.default.SpineModel.queueSave()):t=a.app_order,n({type:"container:listpage:set:order",payload:{order:t}})},"entry:preview:select":function(e,t){var n=e.dispatch,r=e.getState,a=t.payload.toolbarActiveItem,o=r(),i=o.container.previewSetting,l=o.model.user
a!=i.toolbarActiveItem&&("comment"==a&&((0,c.isProjectAllowComment)(u.default.MB.currentProject)||MB.promptRenew("cant_comment",{role:u.default.MB.currentProject.owner_id!==l.id?u.default.MB.currentProject.team_cid?"team":"project":"user"})),"inspect"==a&&n({type:"SET_VISIBILITY_SCREEN",payload:{screenID:u.default.MB.currentScreen.cid}}),n({type:"reducer:preview-toolbar:update",payload:{toolbarActiveItem:a}}),setTimeout(function(){u.default.MB.runner.reload()}))},"entry:preview:clear":function(e,t){
var n=e.dispatch
n({type:"reducer:preview-panel:reset"}),n({type:"container:layers:clear"})}})
t.entryMap=l},mwIZ:function(e,t,n){var a=n("ZWtO")
e.exports=function(e,t,n){var r=null==e?void 0:a(e,t)
return void 0===r?n:r}},mxnB:function(e,t,n){},nLLt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionCheck=t.PermissionSet=t.Permission=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(e){return e.reduce(function(e,t){var n,r=(n=t)instanceof Array?n:n?[n]:[]
return r.length?e.reduce(function(t,n){return r.forEach(function(e){return t.push("".concat(n,"-").concat(e))}),t},[]):e},["@"])},l=function(){function e(){(0,a.default)(this,e),this.permissionMap={}}return(0,o.default)(e,[{key:"set",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
i(n).forEach(function(e){return t.permissionMap[e]=!0})}},{key:"check",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
var a=i(n)
return!!a.length&&a.every(function(e){return t.permissionMap[e]})}}]),e}(),u=["owner","admin","editor","viewer","guest"],c=u.reduce(function(e,t,n){return e[t]=n,e},{}),s=function(n){return u.filter(function(e,t){return c[e]<=c[n]})},d=new l,f=(t.Permission=d).set.bind(d)
t.PermissionSet=f
var p=d.check.bind(d)
t.PermissionCheck=p,f("project",["delete","create"],s("owner")),f("project-update",s("editor")),f("project-read-whitelist",s("viewer")),f("project-read",s("guest")),f("team-project-delete",s("admin")),f("team-project-create",s("editor")),f("team-project-read-whitelist",s("viewer")),f("team-project-read",s("guest")),f("collaborator",["delete","create","update"],["editor","viewer"],s("owner")),f("collaborator-read",["editor","viewer"],s("viewer")),f("team-collaborator",["delete","create","update"],["admin"],
s("owner")),f("team-collaborator",["delete","create","update"],["editor","viewer"],s("admin")),f("team-collaborator-read",["admin","editor","viewer"],s("viewer"))},nQhf:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=r(n("q1tI")),f=a(n("17x9")),p=n("/MKj"),h=a(n("8jgF")),m=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.event,r=e.loggedIn,a=e.inMobile,o=e.dispatch
return d.default.createElement("div",null,t&&!r&&d.default.createElement(h.default,{inMobile:a,event:n,isOpen:t,onClose:function(){return o("event-sign-up:close:modal")}}))}}]),t}(d.PureComponent)
m.propTypes={open:f.default.bool,inMobile:f.default.bool,event:f.default.object,loggedIn:f.default.bool,dispatch:f.default.func}
var v=(0,p.connect)(function(e){return(0,o.default)({},e.container.eventSignUpModal,{loggedIn:!!e.model.user.id,inMobile:MB.isMobile()})})(m)
t.default=v},nU12:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducerMap=t.entryMap=void 0
var a=r(n("MVZn")),u=r(n("q1tI")),o=n("WVP6"),c=n("wCGR"),s=n("6XO9"),f=r(n("iScx")),d=r(n("TZdj")),p=r(n("uW4e")),h=r(n("4YeV")),m=r(n("Emwt")),l=r(n("ni9f")),i=r(n("flWF")),v=r(n("HFhh")),g=r(n("JXIg")),y=r(n("4Nrh")),b=r(n("zkrS")),S=(0,a.default)({},f.default.entryMap,d.default.entryMap,p.default.entryMap,h.default.entryMap,m.default.entryMap,l.default.entryMap,i.default.entryMap,v.default.entryMap,g.default.entryMap,y.default.entryMap,{"entry:add-mock-collaborator":function(e){var r=e.dispatch,
t=l.default.getState(),n=h.default.getState(),a=f.default.getState(),o=new Set(a.map(function(e){return e.cid})),i=function(e,t){var n="co_MOCK_".concat(e.cid)
o.has(n)||(r({type:"collaborators:add-local",payload:{cid:n,role:"owner",user_id:e.owner_id,name:e.owner_name,email:e.owner_email||"email_MOCK_".concat(e.owner_id),avatar:e.owner_avatar,team_cid:t?e.cid:null,project_cid:t?null:e.cid}}),0)}
t.forEach(function(e){return i(e,!0)}),n.forEach(function(e){return i(e,!1)})},"entry:current:set":function(e,t){var n,r,a,o=e.dispatch,i=t.payload,l=i.project,u=i.screen,c=g.default.getState(),s=l&&l.cid||c.projectCid,d=u&&u.cid||c.screenCid
o({type:"current:set",payload:{project:l=h.default.getState().find(function(e){return e.cid===s}),screen:u=m.default.getState().find(function(e){return e.cid===d}),userCollaborator:l&&(n=l.cid,r=l.team_cid,(a=v.default.getState())&&f.default.getState().find(function(e){return e.user_id===a.id&&(e.project_cid===n||e.team_cid===r)}))}})},"entry:current:set-screen":function(e,t){var n=e.dispatch,r=t.payload.cid,a=m.default.getState().find(function(e){return e.cid===r})
if(!a)return console.warn("[entry:current:set-screen] non exist screen with cid: ".concat(r))
n({type:"entry:current:set",payload:{screen:a}})},"entry:comment:init-project-data":function(e){var t=e.dispatch,n=g.default.getState(),r=n.userRole,a=n.projectCid
"guest"!==r&&t({type:"unread-comment:init-for-project",payload:{projectCid:a,commentList:d.default.getState()}}),t({type:"container:comment:loaded-project-cid",payload:{projectCid:a}})},"entry:comment-threads:add":function(e,t){e.getState
var n=e.dispatch,r=t.payload,a=r.top,o=r.left,i=r.message,l=v.default.getState(),u=g.default.getState().screenCid,c=.001*Date.now(),s=b.default.SpineModel.requestCid("cmth")
n({type:i?"comment-threads:add":"comment-threads:add-local",payload:{cid:s,top:a,left:o,screen_cid:u,user_id:l.id,created_at:c,updated_at:c}}),i&&n({type:"comments:add",payload:{thread_cid:s,message:i,user_id:l.id,created_at:c,updated_at:c}}),n({type:"container:comment:focus",payload:{focusCommentThreadCid:s}})},"entry:comment-threads:update":function(e,t){var n=e.dispatch,r=(e.getState,t.payload),a=r.cid,o=r.top,i=r.left,l=void 0===d.default.getState().find(function(e){return e.thread_cid===a}),
u=.001*Date.now()
n({type:l?"comment-threads:update-local":"comment-threads:update",payload:{cid:a,top:o,left:i,updated_at:u}})},"entry:comment-threads:delete":function(e,t){var n=e.dispatch,r=t.payload.cid
n({type:"comment-threads:delete",payload:{cid:r}}),d.default.getState().forEach(function(e){return e.thread_cid===r&&n({type:"comments:delete-local",payload:e})})},"entry:comments:add":function(e,t){var n=e.dispatch,r=t.payload,a=r.thread_cid,o=r.message,i=v.default.getState(),l=.001*Date.now()
n({type:"comment-threads:save",payload:{cid:a}}),n({type:"comments:add",payload:{thread_cid:a,message:o,user_id:i.id,created_at:l,updated_at:l}}),n({type:"container:comment:focus",payload:{focusCommentThreadCid:null}})},"entry:comments:update":function(e,t){var n=e.dispatch,r=t.payload
n({type:"comments:update",payload:{cid:r.cid,message:r.message,updated_at:.001*Date.now()}})},"entry:state:push-data":function(e,t){var n=e.dispatch,r=t.payload,a=r.pushType,o=r.action,i=r.data
switch(a){case"comment-threads":var l=p.default.getState().find(function(e){return e.cid===i.cid})
"update"!==o||l?"update"===o&&l?n({type:"comment-threads:update-local",payload:i}):"destroy"===o&&l&&(n({type:"comment-threads:delete-local",payload:i}),d.default.getState().forEach(function(e){return e.thread_cid===i.cid&&n({type:"comments:delete-local",payload:e})})):n({type:"comment-threads:add-local",payload:i})
break
case"comments":var u=d.default.getState().find(function(e){return e.cid===i.cid})
"update"!==o||u?"update"===o&&u?n({type:"comments:update-local",payload:i}):"destroy"===o&&u&&n({type:"comments:delete-local",payload:i}):n({type:"comments:add-local",payload:i})
var c=g.default.getState().screenCid,s=p.default.getState().find(function(e){return e.cid===i.thread_cid})
s&&s.screen_cid===c&&n({type:"unread-comment:set-unread"})}},"entry:projects:delete":function(e,t){var n=e.dispatch,r=t.payload,a=v.default.getState(),o=r.owner_id===a.id||r.canAdmin()&&r.team_cid,i=o?I18N.del_app_title:I18N.exit_app_title,l=[u.default.createElement("p",{key:"1"},u.default.createElement(c.ConfirmMsg,{variableMap:{verb:o?"delete":"leave",noun:"app",ugn:u.default.createElement(s.AppName,{name:r.name,withQuote:!0,withQuestionMark:"en"===window.MBLocale})}})),o&&u.default.createElement("p",{
key:"2",className:"desc tertiary",dangerouslySetInnerHTML:{__html:I18N.del_app_desc_more}})]
n({type:"container:modal:open",payload:{title:i,desc:l,canCancel:!0,canConfirm:!0,onConfirm:function(){if(o)n({type:"projects:delete",payload:r})
else{var e=f.default.getState().find(function(e){return e.project_cid===r.cid&&e.user_id===a.id})
n({type:"collaborators:delete",payload:e}),n({type:"projects:delete-local",payload:r})}b.default.SpineModel.queueSave()}}})},"entry:teams:delete":function(e,t){var n=e.dispatch,r=t.payload,a=v.default.getState(),o=r.owner_id===a.id
if(o&&0<r.cprojects().length)return n({type:"container:modal:open",payload:{title:I18N.warning,desc:I18N.delete_projects_first,canCancel:!1,canConfirm:!0}})
var i=u.default.createElement(c.ConfirmMsg,{variableMap:{verb:o?"delete":"leave",noun:"team",ugn:u.default.createElement(s.TeamName,{name:r.name,withQuote:!0,withQuestionMark:"en"===window.MBLocale})}})
n({type:"container:modal:open",payload:{title:o?I18N.del_team_title:I18N.exit_team_title,desc:i,canCancel:!0,canConfirm:!0,onConfirm:function(){if(o)n({type:"teams:delete",payload:r})
else{var e=f.default.getState().find(function(e){return e.team_cid===r.cid&&e.user_id===a.id})
n({type:"collaborators:delete",payload:e}),n({type:"teams:delete-local",payload:r})}}}})}})
function w(n,e){var r=e.getState,a=e.setState,o=r()
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0
return t.type!==n?e:(a(t.payload||e),r())}}t.entryMap=S
var C={collaborators:w("reducer:collaborators:update",f.default),comments:w("reducer:comments:update",d.default),commentThreads:w("reducer:comment-threads:update",p.default),projects:w("reducer:projects:update",h.default),screens:w("reducer:screens:update",m.default),teams:w("reducer:teams:update",l.default),widgets:w("reducer:widgets:update",i.default),user:(0,o.createStateStoreReducer)("reducer:user:update",v.default),current:(0,o.createStateStoreReducer)("reducer:current:update",g.default),
unreadComment:(0,o.createStateStoreReducer)("reducer:unread-comment:update",y.default)}
t.reducerMap=C},naIL:function(e,t,n){e.exports={"screen-panel":"xcKB8zcEhkyUcti-3naYu"}},nbeO:function(e,t,n){"use strict"
t.__esModule=!0,t.preset=void 0
var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.newId=p,t.default=function(e){var t=this
Array.isArray(e)?e.forEach(function(e){o.call(t,e)}):o.call(this,e)}
var s=n("ta7q"),d=r(n("yPzT")),f=r(n("Q24S"))
function r(e){return e&&e.__esModule?e:{default:e}}var a=0
function p(){return++a}var h=t.preset={time:null,delay:0,duration:250,ease:function(e){return+e}}
function o(){var l=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=c({},e),a=r.events||{}
delete r.events,Object.keys(a).forEach(function(e){if("function"!=typeof a[e])throw new Error("Event handlers must be a function")
var t,n
a[e]=(t=a[e],n=!1,function(){n||(n=!0,t.call(this))})})
var o=r.timing||{}
delete r.timing,Object.keys(r).forEach(function(i){var e=[]
if("object"===u(r[i])&&!1===Array.isArray(r[i]))Object.keys(r[i]).forEach(function(a){var o=r[i][a]
if(Array.isArray(o))1===o.length?e.push(d.default.call(l,i,a,o[0])):(l.setState(function(e){var t,n
return(n={})[i]=c({},e[i],((t={})[a]=o[0],t)),n}),e.push(d.default.call(l,i,a,o[1])))
else if("function"==typeof o){e.push(function(){return function(r){l.setState(function(e){var t,n
return(n={})[i]=c({},e[i],((t={})[a]=o(r),t)),n})}})}else l.setState(function(e){var t,n
return(n={})[i]=c({},e[i],((t={})[a]=o,t)),n}),e.push(d.default.call(l,i,a,o))})
else{var n=r[i]
if(Array.isArray(n))1===n.length?e.push(d.default.call(l,null,i,n[0])):(l.setState(function(){var e
return(e={})[i]=n[0],e}),e.push(d.default.call(l,null,i,n[1])))
else if("function"==typeof n){e.push(function(){return function(t){l.setState(function(){var e
return(e={})[i]=n(t),e})}})}else l.setState(function(){var e
return(e={})[i]=n,e}),e.push(d.default.call(l,null,i,n))}var t=c({},h,o,{time:(0,s.now)()});(0,f.default)(l,i,p(),t,e,a)})}},ni9f:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Team,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:teams:update",payload:o(e,a,i)})})},s={entryMap:{"teams:refresh":c(a.refreshStateList,!1),"teams:add":c(a.addState,!1),"teams:add-local":c(a.addState,!0),"teams:update":c(a.updateState,!1),"teams:update-local":c(a.updateState,!0),"teams:delete":c(a.deleteState,!1),"teams:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},"o/90":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("RIqP")),p=a(n("17x9")),h=r(n("q1tI")),m=a(n("M8nv")),v=a(n("p2ZH")),g=a(n("2b0G")),y=a(n("4QcC")),b=a(n("ER7e")),S=a(n("Kurm")),w=a(n("TSYQ")),C=function(e){var t=document.querySelector(".full-screen header"),n=document.querySelector(".full-screen .preview-content-container > div:last-child"),r=document.querySelector("#preview_scrollBar_viewport"),a=Array.from(r.querySelectorAll(
".track, .handler")),o=document.querySelector("#simulator-container"),i=[t,n].concat((0,f.default)(a))
"hide"===e?(o.style.overflow="visible",i.forEach(function(e){return e.style.opacity=0}),setTimeout(function(){return i.forEach(function(e){return e.style.pointerEvents="none"})},300)):"show"===e&&(o.style.overflow="hidden ",i.forEach(function(e){return e.style.pointerEvents="auto"}),setTimeout(function(){return i.forEach(function(e){return e.style.opacity=1})},300))},E=function(e){function t(e){var l
return(0,o.default)(this,t),l=(0,u.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(l)),"setMode",function(e){var t=l.state.isDarkMode,n=e.target.dataset.mode
"light"===n&&t&&(MB.event("ga","运行页-全屏模式亮色背景","运行页"),MB.event("zhuge","运行页-全屏模式亮色背景"),l.setState({isDarkMode:!1})),"dark"!==n||t||(MB.event("ga","全屏模式暗色背景","运行页"),MB.event("zhuge","运行页-全屏模式暗色背景"),l.setState({isDarkMode:!0}))}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleKeyDown",function(e){37===e.keyCode&&l.goToScreenByStep(-1),39===e.keyCode&&l.goToScreenByStep(1)}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleNavigate",function(e){var t=e.currentTarget.dataset.action
"last"===t?(MB.event("*","运行页-预览-全屏模式-点击上一页"),l.goToScreenByStep(-1)):"next"===t&&(MB.event("*","运行页-预览-全屏模式-点击下一页"),l.goToScreenByStep(1))}),(0,d.default)((0,s.default)((0,s.default)(l)),"handleExitFullScreen",function(){l.props.dispatch({type:"entry:exit:fill-screen-mode"})}),(0,d.default)((0,s.default)((0,s.default)(l)),"goToScreenByStep",function(e){var t=l.props,n=t.screen,r=t.screenInOrder,a=t.dispatch,o=n.cid,i=r.findIndex(function(e){return e===o})+e
if(i<0)l.setState({shouldTextShow:!0,reachFirstScreen:!0})
else if(i>r.length-1)l.setState({shouldTextShow:!0,reachLastScreen:!0})
else{a({type:"entry:sync-runner:set-screen",payload:{cid:r[i]}}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),l.setState({shouldTextShow:!0,reachFirstScreen:!1,reachLastScreen:!1})}}),l.state={isDarkMode:!1,shouldTextShow:!1,reachFirstScreen:!1,reachLastScreen:!1},l}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){C("hide")}},{key:"componentWillUnmount",value:function(){C("show")}},{key:"componentDidUpdate",value:function(e){var t=this
if(this.state.shouldTextShow&&(clearTimeout(this.timer),this.timer=setTimeout(function(){return t.setState({shouldTextShow:!1})},1500)),this.props.screen!==e.screen){var n=this.props,r=n.screen,a=n.screenInOrder,o=r.cid,i=a.findIndex(function(e){return e===o})
0!==i&&this.setState({reachFirstScreen:!1}),i!==a.length-1&&this.setState({reachLastScreen:!1})}}},{key:"render",value:function(){var e=this.state,t=e.isDarkMode,n=e.shouldTextShow,r=e.reachFirstScreen,a=e.reachLastScreen,o=this.props,i=o.screen,l=o.screenInOrder,u=o.dispatch,c=o.scale
return h.default.createElement("div",{className:(0,w.default)(S.default["full-screen-actions"],{"dark-mode":t})},h.default.createElement("div",{className:(0,w.default)("zoom-wrapper",{"is-Iniframe":MB.isUIChina()||MB.isForum()})},h.default.createElement(y.default,{fromFullScreen:!0,scale:c,dispatch:u})),h.default.createElement(b.default,{onClickMode:this.setMode,onClickExit:this.handleExitFullScreen}),h.default.createElement(v.default,{screen:i,screenInOrder:l,shouldTextShow:n,reachFirstScreen:r,
reachLastScreen:a}),h.default.createElement(g.default,{onClick:this.handleNavigate}),h.default.createElement(m.default,{onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=E,(0,d.default)(E,"propTypes",{dispatch:p.default.func,screen:p.default.object,screenInOrder:p.default.array,scale:p.default.number})},oJEp:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var N=a(n("MVZn")),o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),I=r(n("q1tI")),O=n("0k54"),R=a(n("jybS")),P=a(n("KuHM")),A=a(n("BkxA")),j=a(n("c3w9")),L=new Set(["pg","sticky","lr","webpage"]),f=function(e){function M(){return(0,o.default)(this,M),(0,l.default)(this,(0,u.default)(M).apply(this,arguments))}return(0,c.default)(M,e),(0,i.default)(M,[{key:"render",value:function(){var e=this.props,t=e.treeData,n=e.offSetX,r=e.offSetY,a=e.isSnapshot,
o=t.cid,i=t.type,l=t.children,u=t.widget
if(a&&L.has(u.name))return null
var c=(0,O.getTreeBoundingRect)(t),s=c.minX,d=c.minY,f=c.maxX,p=c.maxY,h=d-r,m=s-n
if("group"!==i)return"panel"===i?a?I.default.createElement(P.default,{treeData:t,top:h,left:m}):u.multi_states?I.default.createElement(j.default,{chameleon:u,treeData:t,top:h,left:m}):I.default.createElement(A.default,{panel:u,treeData:t,top:h,left:m}):I.default.createElement(R.default,{widget:u,postfix:"p",top:h,left:m})
var v,g,y,b,S,w,C=u.primary_fixed===Widget.FIXED_TYPE.bottom,E=(0,N.default)({left:m,top:C?"":h,bottom:C?u.cs().height-p:"",width:f-s,height:p-d},(y=u,!MB.isPhantom()&&"none"!=y.ani_name&&y.v&&(S=y.ani_count,y.ani_delay&&"0"!=y.ani_delay&&(b=y.ani_delay),y.ani_duration&&"0"!=y.ani_duration&&(w=y.ani_duration)),{position:y.primary_fixed?"fixed":"absolute",zIndex:y.z,opacity:y.v?y.o/100:0,transform:y.ro?"rotate(".concat(y.ro,"deg)"):"",animationDelay:b,animationDuration:w,animationIterationCount:S})),k=(v=u,
g="group",!MB.isPhantom()&&"none"!=v.ani_name&&v.v&&(g+=" animated ".concat(v.ani_name)),Link.exists(v.link_cids)&&(g+=" clickable"),v.v||(g+=" invisible"),g),_=Link.exists(u.link_cids)?u.link_cids:"",x=u.v&&Link.find(u.link_cids),T=x&&"tap"!==x.gesture?x.gesture:""
return I.default.createElement("div",{"data-cid":o,"data-link_cid":_,className:k,style:E},l.map(function(e){return I.default.createElement(M,{key:e.cid,treeData:e,offSetX:s,offSetY:d,isSnapshot:a})}),I.default.createElement("div",{className:"region gesture ".concat(T)}))}}]),M}(I.PureComponent)
t.default=f,(0,s.default)(f,"propTypes",{treeData:d.default.object,offSetX:d.default.number,offSetY:d.default.number,isSnapshot:d.default.bool})},oKLx:function(e,t,n){},oSKl:function(e,t,n){},oZtI:function(e,t,n){"use strict"
n.r(t)
var i=n("tw9P"),l=n("q09E")
function r(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
return i.k.apply(void 0,[l.b,e,t].concat(r))}function a(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
return i.k.apply(void 0,[l.d,e,t].concat(r))}function o(e,t,n){for(var r=arguments.length,a=Array(3<r?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o]
return i.k.apply(void 0,[l.f,e,t,n].concat(a))}n.d(t,"take",function(){return i.s}),n.d(t,"takem",function(){return i.t}),n.d(t,"put",function(){return i.n}),n.d(t,"all",function(){return i.b}),n.d(t,"race",function(){return i.o}),n.d(t,"call",function(){return i.e}),n.d(t,"apply",function(){return i.c}),n.d(t,"cps",function(){return i.h}),n.d(t,"fork",function(){return i.k}),n.d(t,"spawn",function(){return i.r}),n.d(t,"join",function(){return i.m}),n.d(t,"cancel",function(){return i.f}),n.d(t,"select",
function(){return i.p}),n.d(t,"actionChannel",function(){return i.a}),n.d(t,"cancelled",function(){return i.g}),n.d(t,"flush",function(){return i.j}),n.d(t,"getContext",function(){return i.l}),n.d(t,"setContext",function(){return i.q}),n.d(t,"takeEvery",function(){return r}),n.d(t,"takeLatest",function(){return a}),n.d(t,"throttle",function(){return o})},oose:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return c.reducer}}),t.isProjectAllowComment=t.CommentContainer=t.CommentMarkerPanelContainer=void 0
var a=n("/MKj"),o=r(n("zkrS")),i=n("/5+U"),l=n("3xeE"),u=n("94Et"),c=n("ZY2Q"),b=n("fiFu"),f=o.default.MB,s=o.default.I18N,d=(0,a.connect)(function(e){var t=e.model,n=t.user.id,r=t.current,a=r.userRole,o=r.screenCid,i=r.projectCid,l=r.teamCid,u=t.projects,c=t.screens,s=t.collaborators,d=t.commentThreads,f=t.comments,p=t.unreadComment.hasUnreadComment,h=e.container.comment,m=h.loadedProjectCid,v=h.focusCommentThreadCid,g=h.focusSource,y=h.tempCommentThreadMarker
return{permissionPack:E(u,s,l,i,n,a),getUserProfile:k(s,l,i),userAuthStatus:(0,b.getUserAuthStatus)(n,a),screenName:C(c,o),commentThreadList:S(d,o),commentListMap:w(f),hasUnreadComment:p,isLoaded:m===i,focusCommentThreadCid:v,focusSource:g,tempCommentThreadMarker:y}})(l.CommentLayer)
t.CommentContainer=d
var p=(0,a.connect)(function(e){var t=e.model,n=t.user.id,r=t.current,a=r.userRole,o=r.screenCid,i=r.projectCid,l=r.teamCid,u=t.projects,c=t.collaborators,s=t.commentThreads,d=e.container.comment,f=d.loadedProjectCid,p=d.focusCommentThreadCid,h=(d.focusSource,d.tempCommentThreadMarker)
return{permissionPack:E(u,c,l,i,n,a),markerDomPack:m(o),commentThreadList:S(s,o),isLoaded:f===i,focusCommentThreadCid:p,tempCommentThreadMarker:h}})(u.CommentMarkerPanel)
t.CommentMarkerPanelContainer=p
var S=(0,i.immutableTransformCache)(function(e,t){return e.filter(function(e){return e.screen_cid===t})}),w=(0,i.immutableTransformCache)(function(e){return e.reduce(function(e,t){return void 0===e[t.thread_cid]?e[t.thread_cid]=[t]:e[t.thread_cid].push(t),e},{})}),C=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t}).name}),E=(0,i.immutableTransformCache)(function(e,t,n,r,a,o){var i=e.find(function(e){return e.cid===r}),l=v(i),u=l?t.reduce(function(e,t){
return t.project_cid!==r&&t.team_cid!==n||(e[t.user_id]=t),e},{}):{},c=(0,b.getCommentPermission)(),s=l?function(e){return(0,b.getCommentPermission)(o,a,e&&u[e],e)}:function(){return c},d=i&&i.owner_id!==a&&i.expired
return{isAllow:l,getPermission:s,permissionDenyMessage:l?"":f.renewMsg("cant_comment",{role:d?i.team_cid?"team":"project":"user"})}}),k=(0,i.immutableTransformCache)(function(e,n,r){var t=e.reduce(function(e,t){return t.project_cid!==r&&t.team_cid!==n||(e[t.user_id]=t),e},{})
return function(e){return t[e]||h}}),h={name:s.preview.comment.user_name_ghost,avatar:"/images/avatar.png"},m=(0,i.immutableTransformCache)(function(e){return{getScreenContainerElement:function(){return document.querySelector("#pscreen".concat(e," .scontainer"))},getSimulatorContainerElement:function(){return document.querySelector("#simulator-container")}}}),v=function(e){return Boolean(e&&!(e.combo||e.template||e.user_template)&&e.limitation.commentable)}
t.isProjectAllowComment=v},oqsN:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=a(n("MVZn")),o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=a(n("17x9")),y=r(n("q1tI")),b=a(n("x3zb")),S=n("qNz0"),h=a(n("oJEp")),m=a(n("TSYQ")),v=function(e){function t(e){var n
return(0,o.default)(this,t),n=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(n)),"handleHomeScreenLoad",function(e){console.log("panel home screen loaded")
var t=n.props.cid
MB.runner.donePanelScreenTransition(t,e)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleTransitionEnd",function(e){console.log("panel screen transition end")
var t=n.props.cid
MB.runner.donePanelScreenTransition(t,e)}),n.state={prevScreenCid:"",currentScreenCid:e.activeScreenCid},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.treeData,n=e.top,r=e.left,a=e.mountedScreenCids,o=e.transition,i=this.state,l=i.prevScreenCid,u=i.currentScreenCid,c=t.widget,s=c.v&&Link.find(c.link_cids),d=s?s.cid:"",f=s&&"tap"!==s.gesture?s.gesture:"",p="ppanel panel".concat(s?" clickable":""),h=(0,S.getPanelStyle)(c,!0,n,r),m=c.ct(),v={width:m.width,
height:m.height},g=t.children.filter(function(e){var t=e.cid
return a.includes(t)})
return y.default.createElement("div",{"data-cid":c.cid,"data-link_cid":d,className:p,id:"panel".concat(c.cid,"p"),style:h},y.default.createElement("div",{className:"panel-scroll-box",style:v},y.default.createElement(b.default,{activeCid:u,transition:o,onHomeScreenLoad:this.handleHomeScreenLoad,onTransitionEnd:this.handleTransitionEnd},function(a,o){return g.map(function(e){var t=e.cid===l,n=e.cid===u,r=t?a:n?o:null
return y.default.createElement(w,{key:e.cid,isShow:t||n,panel_cid:c.cid,treeData:e,isActive:e.cid===u,style:r})})})),y.default.createElement("div",{className:"region gesture ".concat(f)}))}}]),t}(y.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{cid:p.default.string,treeData:p.default.object,top:p.default.number,left:p.default.number,activeScreenCid:p.default.string,mountedScreenCids:p.default.array,transition:p.default.object}),(0,f.default)(v,"getDerivedStateFromProps",function(e,t){return e.activeScreenCid!==t.currentScreenCid?{prevScreenCid:t.currentScreenCid,currentScreenCid:e.activeScreenCid}:null})
var w=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isShow,n=e.treeData,r=e.panel_cid,a=e.isActive,o=e.style,i=n.widget,l="state".concat(r).concat(i.cid,"p"),u=(0,m.default)("pstate","state",{active:a}),c=(0,s.default)({display:t?"":"none",backgroundColor:i.bgcolor,width:i.w(),height:i.h(),backgroundImage:i.bgimage?"url(".concat(i.bgimage,")"):""},o)
return y.default.createElement("div",{id:l,className:u,"data-cid":i.cid,style:c},n.children.map(function(e){return y.default.createElement(h.default,{key:e.cid,treeData:e,offSetX:0,offSetY:0})}))}}]),t}(y.PureComponent);(0,f.default)(w,"propTypes",{isShow:p.default.bool,treeData:p.default.object,panel_cid:p.default.string,isActive:p.default.bool,style:p.default.object})},or5M:function(e,t,n){var v=n("1hJj"),g=n("QoRX"),y=n("xYSL")
e.exports=function(e,t,n,r,a,o){var i=1&n,l=e.length,u=t.length
if(l!=u&&!(i&&l<u))return!1
var c=o.get(e)
if(c&&o.get(t))return c==t
var s=-1,d=!0,f=2&n?new v:void 0
for(o.set(e,t),o.set(t,e);++s<l;){var p=e[s],h=t[s]
if(r)var m=i?r(h,p,s,t,e,o):r(p,h,s,e,t,o)
if(void 0!==m){if(m)continue
d=!1
break}if(f){if(!g(t,function(e,t){if(!y(f,t)&&(p===e||a(p,e,n,r,o)))return f.push(t)})){d=!1
break}}else if(p!==h&&!a(p,h,n,r,o)){d=!1
break}}return o.delete(e),o.delete(t),d}},os03:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLikeRequest=t.withTimeoutRetry=t.setTimeoutAsync=t.arraySplitChunk=t.catchAsync=t.createSaveQueue=t.createEventTarget=t.createTimer=void 0
var h=r(n("J4zp")),m=r(n("MVZn")),v=r(n("SA+Z")),p=r(n("o0o1")),g=r(n("yXPU"))
t.createTimer=function(e){var t=e.func,n=e.delay,r=e.queueTask,a=void 0===r?setTimeout:r,o=e.cancelTask,i=void 0===o?clearTimeout:o,l=null,u=function e(){l&&(l=a(e,n),t())},c=function(){l||(l=a(u,n))},s=function(){l&&(i(l),l=null)}
return{start:c,stop:s,isActive:function(){return Boolean(l)},getDelay:function(){return n},setDelay:function(e){e!==n&&(n=e,s(),c())}}}
t.createEventTarget=function(){var r,e={setMap:r=new Map,clear:function(){return r.clear()},addListener:function(e,t){var n=r.get(e)
n?n.add(t):r.set(e,new Set([t]))},removeListener:function(e,t){var n=r.get(e)
n&&n.delete(t),n&&0===n.size&&r.delete(e)}},n=e.setMap
return{clear:e.clear,addEventListener:e.addListener,removeEventListener:e.removeListener,dispatchEvent:function(t){var e=n.get(t.type)
e&&e.forEach(function(e){return e(t)})}}}
var y=function(){}
t.createSaveQueue=function(e){var t=e.onError,a=e.doSave,n=e.beforeSave,o=void 0===n?y:n,r=e.afterSave,i=void 0===r?y:r,l=[],u=!1,c={},s=function(e){c=e},d=(f=(0,g.default)(p.default.mark(function e(){var t,n,r
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(),t=l,l=[],u=!0,e.next=6,b(a,t,s)
case 6:if(n=e.sent,r=n.error,u=!1,c={},r&&console.error("[Error][saveAsync] savingDataQueue: ".concat(t.length,", dataQueue: ").concat(l.length),r),r)throw r
e.next=13
break
case 13:i()
case 14:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)})
var f
return{clear:function(){l=[]},add:function(e){return l.push(e)},save:function(){!u&&l.length&&d().catch(t)},filter:function(e){l=l.filter(e)},getLength:function(){return l.length},getIsSaving:function(){return u},getSavingState:function(){return c}}}
var b=function(){var t=(0,g.default)(p.default.mark(function e(t){var n,r,a,o,i,l=arguments
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=l.length,o=new Array(1<a?a-1:0),i=1;i<a;i++)o[i-1]=l[i]
return e.next=4,t.apply(void 0,o)
case 4:n=e.sent,e.next=10
break
case 7:e.prev=7,e.t0=e.catch(0),r=e.t0
case 10:return e.abrupt("return",{result:n,error:r})
case 11:case"end":return e.stop()}},e,this,[[0,7]])}))
return function(e){return t.apply(this,arguments)}}()
t.catchAsync=b
t.arraySplitChunk=function(e,t){for(var n=[],r=0,a=e.length;r<a;r+=t)n.push(e.slice(r,r+t))
return n}
t.setTimeoutAsync=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0
return new Promise(function(e){return setTimeout(e,t)})}
var a=function(){var t=(0,g.default)(p.default.mark(function e(t){var n,r,a,o,i,l
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.task,r=t.onError,a=t.timeout,o=t.retry,i=void 0===o?8:o,l=0
case 2:return e.prev=3,e.next=6,Promise.race([n({attempt:l,timeout:a}),new Promise(function(e,t){return setTimeout(function(){return t(new Error("[TIMEOUT] timeout after ".concat(a)))},a)})])
case 6:return e.abrupt("return",e.sent)
case 9:if(e.prev=9,e.t0=e.catch(3),i<=l)throw e.t0
e.next=13
break
case 13:return e.next=15,r(e.t0,{attempt:l,timeout:a})
case 15:l++
case 16:e.next=2
break
case 18:case"end":return e.stop()}},e,this,[[3,9]])}))
return function(e){return t.apply(this,arguments)}}()
t.withTimeoutRetry=a
t.fetchLikeRequest=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.method,r=void 0===t?"GET":t,u=e.headers,c=e.body,a=e.timeout,s=void 0===a?6e4:a,d=e.credentials,f=e.onUploadProgress,p=e.onDownloadProgress
return new Promise(function(a,o){var i=function(e,t){return Object.assign(new Error(e),{status:t,url:n,method:r})},l=new XMLHttpRequest
l.onerror=function(){return o(i("NETWORK_ERROR",-1))},l.ontimeout=function(){return o(i("NETWORK_TIMEOUT",-1))},l.onreadystatechange=function(){var e=l.readyState,t=l.status
if(2===e){if(0===t)return l.abort(),o(i("HEADER_STATUS_ERROR",-1))
var n=l.getAllResponseHeaders().split(/[\r\n]+/).reduce(function(e,t){var n=t.split(":"),r=(0,v.default)(n),a=r[0],o=r.slice(1)
return o.length&&(e[a.trim().toLowerCase()]=o.join(":").trim()),e},{}),r=200<=t&&t<300
a((0,m.default)({headers:n,status:t,ok:r},S(l,i)))}},f&&l.upload&&(l.upload.onprogress=f),p&&(l.onprogress=p),l.open(r,n),u&&Object.entries(u).forEach(function(e){var t=(0,h.default)(e,2),n=t[0],r=t[1]
return l.setRequestHeader(n,r)}),l.responseType="text",l.timeout=s||0,l.withCredentials="include"===d,l.send(c||null)})}
var S=function(n,r){var e,t=!1
setTimeout(function(){e||(n.abort(),t=!0)})
var a=function(){if(void 0===e){if(t)throw r("PAYLOAD_ALREADY_DROPPED",-1)
e=new Promise(function(e,t){n.onerror=function(){return t(r("PAYLOAD_ERROR",-1))},n.ontimeout=function(){return t(r("PAYLOAD_TIMEOUT",-1))},n.onreadystatechange=function(){if(4===n.readyState)return 0===n.status?t(r("PAYLOAD_STATUS_ERROR",-1)):void e(n.response)}})}return e}
return{text:a,json:function(){return a().then(function(e){return JSON.parse(e)})}}}},p2ZH:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=a(n("6PGs")),h=a(n("TSYQ")),m=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.screen,r=t.screenInOrder,a=t.shouldTextShow,o=t.reachFirstScreen,i=t.reachLastScreen,l=r.findIndex(function(e){return e===n.cid})
return e=o?I18N.preview.firstScreen:i?I18N.preview.lastScreen:"".concat(l+1," / ").concat(r.length),f.default.createElement("div",{className:(0,h.default)(p.default["screen-info"],{show:a})},f.default.createElement("div",null,e),f.default.createElement("span",{className:"dot"}),f.default.createElement("div",{className:"screen-name"},n.name))}}]),t}(f.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{screen:d.default.object,screenInOrder:d.default.array,shouldTextShow:d.default.bool,reachFirstScreen:d.default.bool,reachLastScreen:d.default.bool})},p6mf:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=n("upRB"),i=r(n("6Y1W")),l=(0,a.connect)(function(e){return(0,o.getRunnerState)(e)})(i.default)
t.default=l},pD2Y:function(e,t,n){"use strict"
n.r(t)
var r=function(e,t,n){e.prototype=t.prototype=n,n.constructor=e}
function a(e,t){var n=Object.create(e.prototype)
for(var r in t)n[r]=t[r]
return n}function c(){}var o="\\s*([+-]?\\d+)\\s*",i="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",u=/^#([0-9a-f]{3})$/,s=/^#([0-9a-f]{6})$/,d=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),f=new RegExp("^rgb\\("+[l,l,l]+"\\)$"),p=new RegExp("^rgba\\("+[o,o,o,i]+"\\)$"),h=new RegExp("^rgba\\("+[l,l,l,i]+"\\)$"),m=new RegExp("^hsl\\("+[i,l,l]+"\\)$"),v=new RegExp("^hsla\\("+[i,l,l,i]+"\\)$"),g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,
azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,
darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,
ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,
mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,
papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,
violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function y(e){var t
return e=(e+"").trim().toLowerCase(),(t=u.exec(e))?new E((t=parseInt(t[1],16))>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):(t=s.exec(e))?b(parseInt(t[1],16)):(t=d.exec(e))?new E(t[1],t[2],t[3],1):(t=f.exec(e))?new E(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=p.exec(e))?S(t[1],t[2],t[3],t[4]):(t=h.exec(e))?S(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=m.exec(e))?_(t[1],t[2]/100,t[3]/100,1):(t=v.exec(e))?_(t[1],t[2]/100,t[3]/100,t[4]):g.hasOwnProperty(e)?b(g[e]):"transparent"===e?new E(NaN,NaN,NaN,0
):null}function b(e){return new E(e>>16&255,e>>8&255,255&e,1)}function S(e,t,n,r){return r<=0&&(e=t=n=NaN),new E(e,t,n,r)}function w(e){return e instanceof c||(e=y(e)),e?new E((e=e.rgb()).r,e.g,e.b,e.opacity):new E}function C(e,t,n,r){return 1===arguments.length?w(e):new E(e,t,n,null==r?1:r)}function E(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function k(e){return((e=Math.max(0,Math.min(255,Math.round(e)||0)))<16?"0":"")+e.toString(16)}function _(e,t,n,r){
return r<=0?e=t=n=NaN:n<=0||1<=n?e=t=NaN:t<=0&&(e=NaN),new T(e,t,n,r)}function x(e,t,n,r){return 1===arguments.length?function(e){if(e instanceof T)return new T(e.h,e.s,e.l,e.opacity)
if(e instanceof c||(e=y(e)),!e)return new T
if(e instanceof T)return e
var t=(e=e.rgb()).r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),o=Math.max(t,n,r),i=NaN,l=o-a,u=(o+a)/2
return l?(i=t===o?(n-r)/l+6*(n<r):n===o?(r-t)/l+2:(t-n)/l+4,l/=u<.5?o+a:2-o-a,i*=60):l=0<u&&u<1?0:i,new T(i,l,u,e.opacity)}(e):new T(e,t,n,null==r?1:r)}function T(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function M(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}r(c,y,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),r(E,C,a(c,{brighter:function(e){return e=null==e?1/.7:Math.pow(
1/.7,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=null==e?.7:Math.pow(.7,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+k(this.r)+k(this.g)+k(this.b)},toString:function(){var e=this.opacity
return(1===(e=isNaN(e)?1:Math.max(0,Math.min(1,e)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===e?")":", "+e+")")}})),r(T,x,a(c,{brighter:function(e){return e=null==e?1/.7:Math.pow(1/.7,e),new T(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?.7:Math.pow(.7,e),new T(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+360*(this.h<0),
t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r
return new E(M(240<=e?e-240:e+120,a,r),M(e,a,r),M(e<120?e+240:e-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}))
var N=Math.PI/180,I=180/Math.PI,O=.96422,R=1,P=.82521,A=4/29,j=6/29*3*(6/29),L=6/29*(6/29)*(6/29)
function D(e){if(e instanceof F)return new F(e.l,e.a,e.b,e.opacity)
if(e instanceof V){if(isNaN(e.h))return new F(e.l,0,0,e.opacity)
var t=e.h*N
return new F(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}e instanceof E||(e=w(e))
var n,r,a=z(e.r),o=z(e.g),i=z(e.b),l=U((.2225045*a+.7168786*o+.0606169*i)/R)
return a===o&&o===i?n=r=l:(n=U((.4360747*a+.3850649*o+.1430804*i)/O),r=U((.0139322*a+.0971045*o+.7141733*i)/P)),new F(116*l-16,500*(n-l),200*(l-r),e.opacity)}function B(e,t,n,r){return 1===arguments.length?D(e):new F(e,t,n,null==r?1:r)}function F(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}function U(e){return L<e?Math.pow(e,1/3):e/j+A}function W(e){return 6/29<e?e*e*e:j*(e-A)}function q(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function z(e){return(e/=255
)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function H(e){if(e instanceof V)return new V(e.h,e.c,e.l,e.opacity)
if(e instanceof F||(e=D(e)),0===e.a&&0===e.b)return new V(NaN,0,e.l,e.opacity)
var t=Math.atan2(e.b,e.a)*I
return new V(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Y(e,t,n,r){return 1===arguments.length?H(e):new V(e,t,n,null==r?1:r)}function V(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}r(F,B,a(c,{brighter:function(e){return new F(this.l+18*(null==e?1:e),this.a,this.b,this.opacity)},darker:function(e){return new F(this.l-18*(null==e?1:e),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200
return new E(q(3.1338561*(t=O*W(t))-1.6168667*(e=R*W(e))-.4906146*(n=P*W(n))),q(-.9787684*t+1.9161415*e+.033454*n),q(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}})),r(V,Y,a(c,{brighter:function(e){return new V(this.h,this.c,this.l+18*(null==e?1:e),this.opacity)},darker:function(e){return new V(this.h,this.c,this.l-18*(null==e?1:e),this.opacity)},rgb:function(){return D(this).rgb()}}))
var J=-.29227,X=-.90649,G=1.97294,Z=G*X,K=1.78277*G,Q=1.78277*J- -.14861*X
function $(e,t,n,r){return 1===arguments.length?function(e){if(e instanceof ee)return new ee(e.h,e.s,e.l,e.opacity)
e instanceof E||(e=w(e))
var t=e.r/255,n=e.g/255,r=e.b/255,a=(Q*r+Z*t-K*n)/(Q+Z-K),o=r-a,i=(G*(n-a)-J*o)/X,l=Math.sqrt(i*i+o*o)/(G*a*(1-a)),u=l?Math.atan2(i,o)*I-120:NaN
return new ee(u<0?u+360:u,l,a,e.opacity)}(e):new ee(e,t,n,null==r?1:r)}function ee(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function te(e,t,n,r,a){var o=e*e,i=o*e
return((1-3*e+3*o-i)*t+(4-6*o+3*i)*n+(1+3*e+3*o-3*i)*r+i*a)/6}r(ee,$,a(c,{brighter:function(e){return e=null==e?1/.7:Math.pow(1/.7,e),new ee(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?.7:Math.pow(.7,e),new ee(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*N,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(e),a=Math.sin(e)
return new E(255*(t+n*(-.14861*r+1.78277*a)),255*(t+n*(J*r+X*a)),255*(t+n*(G*r)),this.opacity)}}))
var ne=function(i){var l=i.length-1
return function(e){var t=e<=0?e=0:1<=e?l-(e=1):Math.floor(e*l),n=i[t],r=i[t+1],a=0<t?i[t-1]:2*n-r,o=t<l-1?i[t+2]:2*r-n
return te((e-t/l)*l,a,n,r,o)}},re=function(i){var l=i.length
return function(e){var t=Math.floor(((e%=1)<0?++e:e)*l),n=i[(t+l-1)%l],r=i[t%l],a=i[(t+1)%l],o=i[(t+2)%l]
return te((e-t/l)*l,n,r,a,o)}},ae=function(e){return function(){return e}}
function oe(t,n){return function(e){return t+e*n}}function ie(e,t){var n=t-e
return n?oe(e,180<n||n<-180?n-360*Math.round(n/360):n):ae(isNaN(e)?t:e)}function le(o){return 1==(o=+o)?ue:function(e,t){return t-e?(n=e,r=t,a=o,n=Math.pow(n,a),r=Math.pow(r,a)-n,a=1/a,function(e){return Math.pow(n+e*r,a)}):ae(isNaN(e)?t:e)
var n,r,a}}function ue(e,t){var n=t-e
return n?oe(e,n):ae(isNaN(e)?t:e)}var ce=function e(t){var i=le(t)
function n(t,e){var n=i((t=C(t)).r,(e=C(e)).r),r=i(t.g,e.g),a=i(t.b,e.b),o=ue(t.opacity,e.opacity)
return function(e){return t.r=n(e),t.g=r(e),t.b=a(e),t.opacity=o(e),t+""}}return n.gamma=e,n}(1)
function se(l){return function(e){var t,n,r=e.length,a=new Array(r),o=new Array(r),i=new Array(r)
for(t=0;t<r;++t)n=C(e[t]),a[t]=n.r||0,o[t]=n.g||0,i[t]=n.b||0
return a=l(a),o=l(o),i=l(i),n.opacity=1,function(e){return n.r=a(e),n.g=o(e),n.b=i(e),n+""}}}var de=se(ne),fe=se(re),pe=function(e,t){var n,r=t?t.length:0,a=e?Math.min(r,e.length):0,o=new Array(a),i=new Array(r)
for(n=0;n<a;++n)o[n]=ke(e[n],t[n])
for(;n<r;++n)i[n]=t[n]
return function(e){for(n=0;n<a;++n)i[n]=o[n](e)
return i}},he=function(t,n){var r=new Date
return n-=t=+t,function(e){return r.setTime(t+n*e),r}},me=function(t,n){return n-=t=+t,function(e){return t+n*e}},ve=function(e,t){var n,r={},a={}
for(n in null!==e&&"object"==typeof e||(e={}),null!==t&&"object"==typeof t||(t={}),t)n in e?r[n]=ke(e[n],t[n]):a[n]=t[n]
return function(e){for(n in r)a[n]=r[n](e)
return a}},ge=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ye=new RegExp(ge.source,"g")
var be,Se,we,Ce,Ee=function(e,r){var t,n,a,o,i,l=ge.lastIndex=ye.lastIndex=0,u=-1,c=[],s=[]
for(e+="",r+="";(t=ge.exec(e))&&(n=ye.exec(r));)(a=n.index)>l&&(a=r.slice(l,a),c[u]?c[u]+=a:c[++u]=a),(t=t[0])===(n=n[0])?c[u]?c[u]+=n:c[++u]=n:(c[++u]=null,s.push({i:u,x:me(t,n)})),l=ye.lastIndex
return l<r.length&&(a=r.slice(l),c[u]?c[u]+=a:c[++u]=a),c.length<2?s[0]?(i=s[0].x,function(e){return i(e)+""}):(o=r,function(){return o}):(r=s.length,function(e){for(var t,n=0;n<r;++n)c[(t=s[n]).i]=t.x(e)
return c.join("")})},ke=function(e,t){var n,r=typeof t
return null==t||"boolean"===r?ae(t):("number"===r?me:"string"===r?(n=y(t))?(t=n,ce):Ee:t instanceof y?ce:t instanceof Date?he:Array.isArray(t)?pe:"function"!=typeof t.valueOf&&"function"!=typeof t.toString||isNaN(t)?ve:me)(e,t)},_e=function(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},xe=function(e,t){var n=ie(+e,+t)
return function(e){var t=n(e)
return t-360*Math.floor(t/360)}},Te=function(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}},Me=180/Math.PI,Ne={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Ie=function(e,t,n,r,a,o){var i,l,u
return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(u=e*n+t*r)&&(n-=e*u,r-=t*u),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,u/=l),e*r<t*n&&(e=-e,t=-t,u=-u,i=-i),{translateX:a,translateY:o,rotate:Math.atan2(t,e)*Me,skewX:Math.atan(u)*Me,scaleX:i,scaleY:l}}
function Oe(f,p,h,m){function v(e){return e.length?e.pop()+" ":""}return function(e,t){var n,r,a,o,i,l,u,c,s=[],d=[]
return e=f(e),t=f(t),function(e,t,n,r,a,o){if(e!==n||t!==r){var i=a.push("translate(",null,p,null,h)
o.push({i:i-4,x:me(e,n)},{i:i-2,x:me(t,r)})}else(n||r)&&a.push("translate("+n+p+r+h)}(e.translateX,e.translateY,t.translateX,t.translateY,s,d),n=e.rotate,r=t.rotate,a=s,o=d,n!==r?(180<n-r?r+=360:180<r-n&&(n+=360),o.push({i:a.push(v(a)+"rotate(",null,m)-2,x:me(n,r)})):r&&a.push(v(a)+"rotate("+r+m),i=e.skewX,l=t.skewX,u=s,c=d,i!==l?c.push({i:u.push(v(u)+"skewX(",null,m)-2,x:me(i,l)}):l&&u.push(v(u)+"skewX("+l+m),function(e,t,n,r,a,o){if(e!==n||t!==r){var i=a.push(v(a)+"scale(",null,",",null,")")
o.push({i:i-4,x:me(e,n)},{i:i-2,x:me(t,r)})}else 1===n&&1===r||a.push(v(a)+"scale("+n+","+r+")")}(e.scaleX,e.scaleY,t.scaleX,t.scaleY,s,d),e=t=null,function(e){for(var t,n=-1,r=d.length;++n<r;)s[(t=d[n]).i]=t.x(e)
return s.join("")}}}var Re=Oe(function(e){return"none"===e?Ne:(be||(be=document.createElement("DIV"),Se=document.documentElement,we=document.defaultView),be.style.transform=e,e=we.getComputedStyle(Se.appendChild(be),null).getPropertyValue("transform"),Se.removeChild(be),e=e.slice(7,-1).split(","),Ie(+e[0],+e[1],+e[2],+e[3],+e[4],+e[5]))},"px, ","px)","deg)"),Pe=Oe(function(e){return null==e?Ne:(Ce||(Ce=document.createElementNS("http://www.w3.org/2000/svg","g")),Ce.setAttribute("transform",e),(
e=Ce.transform.baseVal.consolidate())?(e=e.matrix,Ie(e.a,e.b,e.c,e.d,e.e,e.f)):Ne)},", ",")",")"),Ae=Math.SQRT2
function je(e){return((e=Math.exp(e))+1/e)/2}var Le=function(e,t){var n,i,l=e[0],u=e[1],c=e[2],r=t[0],a=t[1],o=t[2],s=r-l,d=a-u,f=s*s+d*d
if(f<1e-12)i=Math.log(o/c)/Ae,n=function(e){return[l+e*s,u+e*d,c*Math.exp(Ae*e*i)]}
else{var p=Math.sqrt(f),h=(o*o-c*c+4*f)/(2*c*2*p),m=(o*o-c*c-4*f)/(2*o*2*p),v=Math.log(Math.sqrt(h*h+1)-h),g=Math.log(Math.sqrt(m*m+1)-m)
i=(g-v)/Ae,n=function(e){var t,n,r=e*i,a=je(v),o=c/(2*p)*(a*(n=Ae*r+v,((n=Math.exp(2*n))-1)/(n+1))-(t=v,((t=Math.exp(t))-1/t)/2))
return[l+o*s,u+o*d,c*a/je(Ae*r+v)]}}return n.duration=1e3*i,n}
function De(i){return function(t,e){var n=i((t=x(t)).h,(e=x(e)).h),r=ue(t.s,e.s),a=ue(t.l,e.l),o=ue(t.opacity,e.opacity)
return function(e){return t.h=n(e),t.s=r(e),t.l=a(e),t.opacity=o(e),t+""}}}var Be=De(ie),Fe=De(ue)
function Ue(t,e){var n=ue((t=B(t)).l,(e=B(e)).l),r=ue(t.a,e.a),a=ue(t.b,e.b),o=ue(t.opacity,e.opacity)
return function(e){return t.l=n(e),t.a=r(e),t.b=a(e),t.opacity=o(e),t+""}}function We(i){return function(t,e){var n=i((t=Y(t)).h,(e=Y(e)).h),r=ue(t.c,e.c),a=ue(t.l,e.l),o=ue(t.opacity,e.opacity)
return function(e){return t.h=n(e),t.c=r(e),t.l=a(e),t.opacity=o(e),t+""}}}var qe=We(ie),ze=We(ue)
function He(l){return function e(i){function t(t,e){var n=l((t=$(t)).h,(e=$(e)).h),r=ue(t.s,e.s),a=ue(t.l,e.l),o=ue(t.opacity,e.opacity)
return function(e){return t.h=n(e),t.s=r(e),t.l=a(Math.pow(e,i)),t.opacity=o(e),t+""}}return i=+i,t.gamma=e,t}(1)}var Ye=He(ie),Ve=He(ue)
function Je(e,t){for(var n=0,r=t.length-1,a=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(a,a=t[++n])
return function(e){var t=Math.max(0,Math.min(r-1,Math.floor(e*=r)))
return o[t](e-t)}}var Xe=function(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e(r/(t-1))
return n}
n.d(t,"interpolate",function(){return ke}),n.d(t,"interpolateArray",function(){return pe}),n.d(t,"interpolateBasis",function(){return ne}),n.d(t,"interpolateBasisClosed",function(){return re}),n.d(t,"interpolateDate",function(){return he}),n.d(t,"interpolateDiscrete",function(){return _e}),n.d(t,"interpolateHue",function(){return xe}),n.d(t,"interpolateNumber",function(){return me}),n.d(t,"interpolateObject",function(){return ve}),n.d(t,"interpolateRound",function(){return Te}),n.d(t,"interpolateString",
function(){return Ee}),n.d(t,"interpolateTransformCss",function(){return Re}),n.d(t,"interpolateTransformSvg",function(){return Pe}),n.d(t,"interpolateZoom",function(){return Le}),n.d(t,"interpolateRgb",function(){return ce}),n.d(t,"interpolateRgbBasis",function(){return de}),n.d(t,"interpolateRgbBasisClosed",function(){return fe}),n.d(t,"interpolateHsl",function(){return Be}),n.d(t,"interpolateHslLong",function(){return Fe}),n.d(t,"interpolateLab",function(){return Ue}),n.d(t,"interpolateHcl",function(){
return qe}),n.d(t,"interpolateHclLong",function(){return ze}),n.d(t,"interpolateCubehelix",function(){return Ye}),n.d(t,"interpolateCubehelixLong",function(){return Ve}),n.d(t,"piecewise",function(){return Je}),n.d(t,"quantize",function(){return Xe})},peLG:function(e,t,n){},prTy:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("pVnL")),l=a(n("QILm")),u=a(n("o0o1")),c=a(n("yXPU")),s=a(n("lwsE")),d=a(n("W8MJ")),f=a(n("a1gu")),p=a(n("Nsbk")),h=a(n("7W2i")),m=a(n("PJYZ")),v=a(n("lSNA")),g=r(n("q1tI")),o=a(n("17x9")),y=n("cTU2"),b=n("/5+U"),S=(0,y.createAsyncTaskQueue)().pushTask,w=function(e){function o(){var e,t;(0,s.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,v.default)((0,m.default)((0,m.default)(t)),"getElementRef",function(e){return t.imageRef=e}),t}return(0,h.default)(o,e),(0,d.default)(o,[{key:"componentDidMount",value:function(){var o=this
S((0,c.default)(u.default.mark(function e(){var t,n,r,a
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.props,n=t.src,r=t.adjustImage,e.next=3,(0,y.loadImageAsync)(o.imageRef,n)
case 3:a=e.sent,r&&a&&(0,b.adjustImageRect)({image:a,adjust:r})
case 5:case"end":return e.stop()}},e,this)}))).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.props,t=(e.src,e.adjustImage,(0,l.default)(e,["src","adjustImage"]))
return g.default.createElement("img",(0,i.default)({alt:"",ref:this.getElementRef},t))}}]),o}(g.PureComponent);(t.default=w).propTypes={src:o.default.string,adjustImage:o.default.number}},q09E:function(e,t,n){"use strict"
var f=n("Ev6p"),c={done:!0,value:void 0},p={}
function h(e){return f.q.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function m(i,e){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"iterator",l=void 0,u=e
function n(e,t){if(u===p)return c
if(t)throw u=p,t
l&&l(e)
var n=i[u](),r=n[0],a=n[1],o=n[2]
return l=o,(u=r)===p?c:a}return Object(f.t)(n,function(e){return n(null,e)},t,!0)}var v=n("tw9P"),g=n("92lH")
function r(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o={done:!1,value:Object(v.s)(e)},i=void 0,l=function(e){return i=e}
return m({q1:function(){return["q2",o,l]},q2:function(){return i===g.a?[p]:["q1",(e=i,{done:!1,value:v.k.apply(void 0,[t].concat(r,[e]))})]
var e}},"q1","takeEvery("+h(e)+", "+t.name+")")}function a(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o={done:!1,value:Object(v.s)(e)},i=function(e){return{done:!1,value:v.k.apply(void 0,[t].concat(r,[e]))}},l=void 0,u=void 0,c=function(e){return l=e},s=function(e){return u=e}
return m({q1:function(){return["q2",o,s]},q2:function(){return u===g.a?[p]:l?["q3",(e=l,{done:!1,value:Object(v.f)(e)})]:["q1",i(u),c]
var e},q3:function(){return["q1",i(u),c]}},"q1","takeLatest("+h(e)+", "+t.name+")")}var y=n("mbVZ")
function o(e,t,n){for(var r=arguments.length,a=Array(3<r?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o]
var i=void 0,l=void 0,u={done:!1,value:Object(v.a)(t,y.a.sliding(1))},c={done:!1,value:Object(v.e)(f.m,e)},s=function(e){return i=e},d=function(e){return l=e}
return m({q1:function(){return["q2",u,d]},q2:function(){return["q3",{done:!1,value:Object(v.s)(l)},s]},q3:function(){return i===g.a?[p]:["q4",(e=i,{done:!1,value:v.k.apply(void 0,[n].concat(a,[e]))})]
var e},q4:function(){return["q2",c]}},"q1","throttle("+h(t)+", "+n.name+")")}n.d(t,"a",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"f",function(){return o})
var i=function(e){return"import { "+e+" } from 'redux-saga' has been deprecated in favor of import { "+e+" } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."},l=Object(f.n)(r,i("takeEvery")),u=Object(f.n)(a,i("takeLatest")),s=Object(f.n)(o,i("throttle"))},q3nj:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducerMap",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"PreviewContainer",{enumerable:!0,get:function(){return u.default}}),t.sagaMap=void 0
var a=r(n("j1JO")),o=r(n("yOnP")),i=n("tBsX"),l=r(n("cQH5")),u=r(n("aYzi")),c={layerSaga:i.saga,sliceSaga:a.default,artboardsSaga:o.default}
t.sagaMap=c},qNz0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getPanelStyle=function(e,t,n,r){var a={left:r,width:e.width,height:e.height,zIndex:e.z}
if(t){if(e.primary_fixed?(a.position="fixed",e.primary_fixed===Widget.FIXED_TYPE.bottom?a.bottom=e.cs().height-(n+e.height):a.top=n):a.top=n,e.v){var o=e.ct()
a.pointerEvents=e.width<o.width||e.height<o.height?"auto":"",a.opacity=1}else a.pointerEvents="none",a.opacity=0
a.overflow=MB.isPhantom()?"hidden":""}else a.top=e.top,a.left=e.left,a.opacity=e.v?1:.4,a.overflow="hidden"
return a}},qOCw:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.selectWithlanguageUnit=t.reduceTextLayer=t.getCodeAttributes=t.sortScreenLayers=t.getTextAttributes=t.getBaseAttributes=t.getTextContent=void 0
var m=r(n("RIqP")),a=r(n("wig9")),o=r(n("7tbW")),x=n("/5+U"),i=n("LbTH"),T=n("XrEr")
t.getTextContent=function(e){return(0,i.checkIfItemTextIsNewVersion)(e)?(n=e.text,JSON.parse(n).reduce(function(e,t,n,r){return e+(0===n?"":"\n")+t.children.reduce(function(e,t,n){return e+t.text},"")},"")):!!(t=e.text)&&t.replace(/<[^>]+>/gi,"")
var t,n}
t.getBaseAttributes=function(e){var t=e.width,n=e.height,r=e.left,a=e.top,o=e.opacity,i=e.borderRadius,l=e.rotation,u=e.ratio,c=e.unit,s=(0,x.adapterScreen)(r,u,c),d=(0,x.adapterScreen)(a,u,c),f=(0,x.adapterScreen)(t,u,c),p=(0,x.adapterScreen)(n,u,c),h=i?String(i).split(",").map(function(e){return(0,x.adapterScreen)(parseInt(e)||0,u,c)}).join(" "):null,m=v(l)?null:"".concat(l,"°")
return{adapterLeft:s,adapterTop:d,adapterWidth:f,adapterHeight:p,radius:h,opacity:v(o)?null:"".concat(o,"%"),rotate:m}}
var v=function(e){return null===e||isNaN(e)||0===e}
t.getTextAttributes=function(e){var t=e.lineHeight,n=e.letterSpacing,r=e.unit,a=e.ratio
return{lineHeight:t=v(t)?null:(0,x.adapterScreen)(t,a,r),letterSpacing:n=v(n)?null:(0,x.adapterScreen)(n,a,r)}}
t.sortScreenLayers=function(e){var p=[],h=[]
return e.forEach(function(e){var t=e.bg_colors,n=void 0===t?[]:t,r=e.borders,a=void 0===r?[]:r,o=e.text_styles,i=void 0===o?[]:o,l=0<i.length?i[0]:{},u=l.color,c=l.font_face,s=[]
n.length&&(s=n.map(function(e){var t=e.value,n=e.type,r=void 0===n?"color":n,a=e.gradient,o=(0,T.getNormalRgbaColor)(t)
return"color"===r?o:y(a)})),s=g(s)
var d=[]
a.length&&(d=a.map(function(e){var t=e.color
return(0,T.getNormalRgbaColor)(t)})),d=g(d)
var f=u&&(0,T.getColorFromUnit)((0,T.parseSketchColor2rgba)(u),"rgba")
!p.includes(f)&&p.push(f),!h.includes(c)&&h.push(c),p=!(p=!p.includes(s)&&(0,m.default)(p).concat((0,m.default)(s))).includes(d)&&(0,m.default)(p).concat((0,m.default)(d))}),{screenColor:(0,o.default)((0,a.default)(p)).slice(0,14)||[],globalText:(0,a.default)(h)}}
var g=function(e){var t
return(t=[]).concat.apply(t,(0,m.default)(e))}
t.getCodeAttributes=function(e){var t,n,r,a,o,i,l,u,c,s=e.textStyles,d=e.borders,f=e.background,p=e.shadows,h=e.innerShadows,m=(e.colorUnit,e.unit),v=e.ratio
if(s.length){var g=s[0],y=g.color,b=g.font_size,S=g.font_face
t=y&&(0,T.getNormalRgbaColor)(y),n=(0,x.adapterScreen)(b,v,m),r=S}if(d.length){var w=d[0],C=w.position,E=void 0===C?"inside":C,k=w.color,_=w.thickness
a=(0,x.adapterScreen)(_,v,m),i=E,k&&(o=(0,T.getNormalRgbaColor)(k))}return f.length&&(l=(0,T.getNormalRgbaColor)(f[0].value)),p.length&&(u=M(p,m,v)),h.length&&(c=M(h,m,v,!0),u="".concat(u,", ").concat(c)),{fontFamily:r,fontSize:n,color:t,borderWidth:a,borderColor:o,borderPosition:i,backgroundColor:l,boxShadow:u}}
t.reduceTextLayer=function(e){if(0===e.length)return[]
var t=e.reduce(function(e,t){var n=t.font
return e.concat(n)},[])
return(0,m.default)(new Set(t))}
var M=function(e,g,y){var b=3<arguments.length&&void 0!==arguments[3]&&arguments[3],S=e.length
return e.reduce(function(e,t,n){var r=t.color,a=t.offset_x,o=void 0===a?0:a,i=t.offset_y,l=void 0===i?0:i,u=t.blur_radius,c=void 0===u?0:u,s=t.spread,d=void 0===s?0:s,f=(0,x.adapterScreen)(o,y,g),p=(0,x.adapterScreen)(l,y,g),h=(0,x.adapterScreen)(c,y,g)
d=(0,x.adapterScreen)(d,y,g),r=(0,T.getNormalRgbaColor)(r)
var m=n<S-1?", ":"",v=b?"inset ":""
return e.concat("".concat(v).concat(f," ").concat(p," ").concat(h," ").concat(d," ").concat(r).concat(m))},"")},y=function(e){return e&&e.color_stops?e.color_stops.map(function(e){var t=e.color
return(0,T.getNormalRgbaColor)(t)}):T.DEFAULT_COLOR}
t.selectWithlanguageUnit=function(e){switch(e){case"swift":return"pt"
case"android":return"dp"
default:return"px"}}},qY2g:function(e,t,n){},qYFl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.isRemoteMtimeStale=t.updateWorkspaceMap=t.updateProject=t.updateTeam=t.updateCollaborator=t.updateAsset=void 0
var c=r(n("o0o1")),a=r(n("yXPU")),s=n("t3Un"),o=n("t77w"),i=window,l=i.$,d=i.MB,f=i.Screen,u=i.Screenstate,p=i.Panel,h=i.Panelstate,m=i.Widget,v=i.Widgetstate,g=i.Link
t.updateAsset=function(e,t){if(!d.f.inSharing&&"create"===e){var n=new Asset
n.load(t),n.lsave(!1)}}
t.updateCollaborator=function(e,t){if(d.f.inSharing){if("update"===e){var n=Collaborator.find(t.cid)
n?n.refresh(t):((n=new Collaborator).load(t),n.lsave(!1)),d.webpackInterface.store.dispatch({type:"entry:state:init"})}if("destroy"===e){var r=Collaborator.find(t.cid)
if(!r)return
if(r.ldestroy(!1),r.user_id===d.user.id)return window.location.reload()}}else{if("update"===e){var a=Collaborator.find(t.cid)
a?a.refresh(t):((a=new Collaborator).load(t),a.lsave(!1)),d.webpackInterface.refreshAll()}if("destroy"===e){var o=Collaborator.find(t.cid)
if(!o)return
if(o.ldestroy(!1),o.user_id===d.user.id){var i=o.project_cid&&Project.find(o.project_cid),l=o.team_cid&&Team.find(o.team_cid)
i&&d.webpackInterface.deleteProjectByCid(i.cid),l&&d.webpackInterface.deleteTeamByCid(l.cid)}}}}
t.updateTeam=function(e,t){if(!d.f.inSharing){if("update"===e){var n=Team.find(t.cid)
n?n.refresh(t):((n=new Team).load(t),n.lsave(!1)),d.webpackInterface.refreshAll()}if("destroy"===e){var r=Team.find(t.cid)
r&&d.webpackInterface.deleteTeamByCid(r.cid)}}}
t.updateProject=function(e,t){if(!d.f.inSharing){if("update"===e){var n=Project.find(t.cid)
if(n){if(n.duplicating){var r=n.screens_count
n.refresh(t),n.screens_count=r}}else(n=new Project).load(t),n.screens_count||(n.screens_count=2),n.lsave(!1)
d.webpackInterface.refreshAll(),n.duplicating||l("#notification").removeClass("active"),d.f.isDuplicatingDemo&&!n.duplicating&&(d.f.isDuplicatingDemo=!1,d.webpackInterface.navigateTo("/workspace/apps/".concat(n.cid)))}if("destroy"===e){var a=Project.find(t.cid)
if(a)d.webpackInterface.deleteProjectByCid(a.cid)
else{var o=Template.find(t.cid)
o&&(o.ldestroy(!1),d.renderTemplateList())}}l(".timeago").timeago()}}
var y={Screen:function(e,t){if("update"===e){var n=f.find(t.cid)
n?(n.refresh(t),d.currentScreen.cid===n.cid&&d.updateCurrentScreen()):((n=new f).load(t),n.lsave(!1)),d.currentProject&&d.currentProject.cid===n.project_cid&&d.action("update:screens:all",{screens:d.currentProject.cscreens()})}else if("destroy"===e){var r=f.find(t.cid)
if(!r)return
r.ldestroy(!1),d.currentProject&&d.currentProject.cid===r.project_cid&&d.action("entry:remove:from:screen-history",{cids:[r.cid]})}},Screenstate:function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=u.find(t.cid)
r?r.refresh(t):((r=new u).load(t),r.lsave(!1)),n&&n.cid===r.screen_cid&&d.updateCurrentScreen()}else if("destroy"===e){var a=u.find(t.cid)
if(!a)return
a.ldestroy(!1),n&&n.cid===a.screen_cid&&(n.state_cid===a.cid&&(n.setState("default",!0),d.action("set:current:screen",{screen:n}),ScreenManager.updateWidgetList()),d.updateCurrentScreen())}},Panel:function(){var r=(0,a.default)(c.default.mark(function e(t,n,r){var a,o,i,l,u
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.getCurrentScreen(),"update"!==t){e.next=33
break}if(o=p.find(n.cid)){e.next=28
break}if(e.prev=4,Template.find(n.template_cid)){e.next=15
break}return e.next=9,(0,s.requestJSON)("/templates/".concat(n.template_cid,".json"))
case 9:i=e.sent,Template.refresh([i.template]),f.refresh(i.screens),m.refreshWidgetAfterDecompress(i.widgets),g.refresh(i.links),d.Pusher.enableSocketChannel(i.template.cid)
case 15:if((l=new p).load(n),l.lsave(!1),d.renderTemplateList(),a===l.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=21
break
case 21:e.next=26
break
case 23:e.prev=23,e.t0=e.catch(4),console.warn(e.t0)
case 26:e.next=31
break
case 28:if(o.refresh(n),a===o.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=31
break
case 31:e.next=44
break
case 33:if("destroy"!==t){e.next=44
break}if(u=p.find(n.cid)){e.next=37
break}return e.abrupt("return")
case 37:if(a===u.screen_cid)return PanelManager.remove(u.cid,!1),d.action("selection:unselect:items",{cids:[u.cid]}),e.abrupt("return",ScreenManager.updateWidgetList())
e.next=43
break
case 43:return e.abrupt("return",u.ldestroy(!1))
case 44:case"end":return e.stop()}},e,this,[[4,23]])}))
return function(e,t,n){return r.apply(this,arguments)}}(),Panelstate:function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=h.find(t.cid)
if(r?r.refresh(t):((r=new h).load(t),r.lsave(!1)),n&&n.state_cid===r.screenstate_cid){var a=p.find(r.panel_cid)
a.screenstate_cid===r.screenstate_cid&&(a.restore(r),a.lsave(!1),ScreenManager.updateWidgetList())}}},Widget:function(e,t){return function(e,t){var n=d.getCurrentScreen()
if("update"===e){var r=m.find(t.cid)
r?r.refresh(t):((r=new m).load(t),r.lsave(!1)),n===r.screen_cid&&ScreenManager.updateWidgetList()}else if("destroy"===e){var a=m.find(t.cid)
if(!a)return
a.ldestroy(!1),n===a.screen_cid&&(d.action("selection:unselect:items",{cids:[a.cid]}),ScreenManager.updateWidgetList())}}(e,(0,o.decompressRichText)(t))},Widgetstate:function(e,t){return function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=v.find(t.cid)
if(r?r.refresh(t):((r=new v).load(t),r.lsave(!1)),n&&n.state_cid===r.screenstate_cid){var a=m.find(r.widget_cid)
a.screenstate_cid===r.screenstate_cid&&(a.restore(r),a.lsave(!1),ScreenManager.updateWidgetList())}}}(e,(0,o.decompressRichText)(t))},Link:function(e,t){var n,r=d.getCurrentScreen()
if("update"===e)(n=g.find(t.cid))?n.refresh(t):((n=new g).load(t),n.lsave(!1))
else if("destroy"===e){if(!(n=g.find(t.cid)))return
n.ldestroy(!1)}n&&r===n.screen_cid&&d.renderLinks()}}
t.updateWorkspaceMap=y
var b={Asset:Asset,Collaborator:Collaborator,Team:Team,Project:Project,Screen:f,Screenstate:u,Panel:p,Panelstate:h,Widget:m,Widgetstate:v,Link:g}
t.isRemoteMtimeStale=function(e,t,n){var r=b[e]&&b[e].findByAttribute("cid",t)
return r&&r.mtime>n}},qZTm:function(e,t,n){var r=n("kekF")(Object.keys,Object)
e.exports=r},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]")
e.exports=function(e){return n.test(e)}},r1rb:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("pVnL")),o=r(n("lwsE")),i=r(n("W8MJ")),l=r(n("a1gu")),u=r(n("Nsbk")),c=r(n("7W2i")),s=r(n("q1tI")),d=n("6XO9"),f=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props)
return s.default.createElement(d.Tooltip,e)}}]),t}(s.default.PureComponent)
t.default=f},r9Vx:function(e,t,n){var r
window,r=function(){return function(n){var r={}
function a(e){if(r[e])return r[e].exports
var t=r[e]={i:e,l:!1,exports:{}}
return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r))
return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=25)}([function(e,t,n){"use strict"
function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t]
return e}(e)}(e.exports=r).prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},
this
var n,r=this._callbacks["$"+e]
if(!r)return this
if(1==arguments.length)return delete this._callbacks["$"+e],this
for(var a=0;a<r.length;a++)if((n=r[a])===t||n.fn===t){r.splice(a,1)
break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{}
var t=[].slice.call(arguments,1),n=this._callbacks["$"+e]
if(n)for(var r=0,a=(n=n.slice(0)).length;r<a;++r)n[r].apply(this,t)
return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,f,t){"use strict"
var a,n=t(39),o=t(19),p=t(41),l=t(42),i=t(43)
"undefined"!=typeof ArrayBuffer&&(a=t(44))
var r="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),u="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),c=r||u
f.protocol=3
var s=f.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},d=n(s),h={type:"error",data:"parser error"},m=t(45)
function v(e,t,n){for(var a=new Array(e.length),r=l(e.length,n),o=function(n,e,r){t(e,function(e,t){a[n]=t,r(e,a)})},i=0;i<e.length;i++)o(i,e[i],r)}f.encodePacket=function(e,l,t,n){"function"==typeof l&&(n=l,l=!1),"function"==typeof t&&(n=t,t=null)
var r,a=void 0===e.data?void 0:e.data.buffer||e.data
if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return function(e,t,n){if(!l)return f.encodeBase64Packet(e,n)
var r=e.data,a=new Uint8Array(r),o=new Uint8Array(1+r.byteLength)
o[0]=s[e.type]
for(var i=0;i<a.length;i++)o[i+1]=a[i]
return n(o.buffer)}(e,0,n)
if(void 0!==m&&a instanceof m)return function(e,t,n){if(!t)return f.encodeBase64Packet(e,n)
if(c)return function(e,t,n){if(!t)return f.encodeBase64Packet(e,n)
var r=new FileReader
return r.onload=function(){f.encodePacket({type:e.type,data:r.result},t,!0,n)},r.readAsArrayBuffer(e.data)}(e,t,n)
var r=new Uint8Array(1)
return r[0]=s[e.type],n(new m([r.buffer,e.data]))}(e,l,n)
if(a&&a.base64)return r=e,n("b"+f.packets[r.type]+r.data.data)
var o=s[e.type]
return void 0!==e.data&&(o+=t?i.encode(String(e.data),{strict:!1}):String(e.data)),n(""+o)},f.encodeBase64Packet=function(t,n){var r,a="b"+f.packets[t.type]
if(void 0!==m&&t.data instanceof m){var o=new FileReader
return o.onload=function(){var e=o.result.split(",")[1]
n(a+e)},o.readAsDataURL(t.data)}try{r=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var i=new Uint8Array(t.data),l=new Array(i.length),u=0;u<i.length;u++)l[u]=i[u]
r=String.fromCharCode.apply(null,l)}return a+=btoa(r),n(a)},f.decodePacket=function(e,t,n){if(void 0===e)return h
if("string"==typeof e){if("b"===e.charAt(0))return f.decodeBase64Packet(e.substr(1),t)
if(n&&!1===(e=function(e){try{e=i.decode(e,{strict:!1})}catch(e){return!1}return e}(e)))return h
var r=e.charAt(0)
return Number(r)==r&&d[r]?1<e.length?{type:d[r],data:e.substring(1)}:{type:d[r]}:h}r=new Uint8Array(e)[0]
var a=p(e,1)
return m&&"blob"===t&&(a=new m([a])),{type:d[r],data:a}},f.decodeBase64Packet=function(e,t){var n=d[e.charAt(0)]
if(!a)return{type:n,data:{base64:!0,data:e.substr(1)}}
var r=a.decode(e.substr(1))
return"blob"===t&&m&&(r=new m([r])),{type:n,data:r}},f.encodePayload=function(e,t,n){"function"==typeof t&&(n=t,t=null)
var r=o(e)
return t&&r?m&&!c?f.encodePayloadAsBlob(e,n):f.encodePayloadAsArrayBuffer(e,n):e.length?void v(e,function(e,n){f.encodePacket(e,!!r&&t,!1,function(e){var t
n(null,(t=e).length+":"+t)})},function(e,t){return n(t.join(""))}):n("0:")},f.decodePayload=function(e,t,n){if("string"!=typeof e)return f.decodePayloadAsBinary(e,t,n)
var r
if("function"==typeof t&&(n=t,t=null),""===e)return n(h,0,1)
for(var a,o,i="",l=0,u=e.length;l<u;l++){var c=e.charAt(l)
if(":"===c){if(""===i||i!=(a=Number(i)))return n(h,0,1)
if(i!=(o=e.substr(l+1,a)).length)return n(h,0,1)
if(o.length){if(r=f.decodePacket(o,t,!1),h.type===r.type&&h.data===r.data)return n(h,0,1)
if(!1===n(r,l+a,u))return}l+=a,i=""}else i+=c}return""!==i?n(h,0,1):void 0},f.encodePayloadAsArrayBuffer=function(e,r){if(!e.length)return r(new ArrayBuffer(0))
v(e,function(e,t){f.encodePacket(e,!0,!0,function(e){return t(null,e)})},function(e,t){var n=t.reduce(function(e,t){var n
return e+(n="string"==typeof t?t.length:t.byteLength).toString().length+n+2},0),i=new Uint8Array(n),l=0
return t.forEach(function(e){var t="string"==typeof e,n=e
if(t){for(var r=new Uint8Array(e.length),a=0;a<e.length;a++)r[a]=e.charCodeAt(a)
n=r.buffer}i[l++]=t?0:1
var o=n.byteLength.toString()
for(a=0;a<o.length;a++)i[l++]=parseInt(o[a])
for(i[l++]=255,r=new Uint8Array(n),a=0;a<r.length;a++)i[l++]=r[a]}),r(i.buffer)})},f.encodePayloadAsBlob=function(e,n){v(e,function(e,l){f.encodePacket(e,!0,!0,function(e){var t=new Uint8Array(1)
if(t[0]=1,"string"==typeof e){for(var n=new Uint8Array(e.length),r=0;r<e.length;r++)n[r]=e.charCodeAt(r)
e=n.buffer,t[0]=0}var a=(e instanceof ArrayBuffer?e.byteLength:e.size).toString(),o=new Uint8Array(a.length+1)
for(r=0;r<a.length;r++)o[r]=parseInt(a[r])
if(o[a.length]=255,m){var i=new m([t.buffer,o.buffer,e])
l(null,i)}})},function(e,t){return n(new m(t))})},f.decodePayloadAsBinary=function(e,n,r){"function"==typeof n&&(r=n,n=null)
for(var t=e,a=[];0<t.byteLength;){for(var o=new Uint8Array(t),i=0===o[0],l="",u=1;255!==o[u];u++){if(310<l.length)return r(h,0,1)
l+=o[u]}t=p(t,2+l.length),l=parseInt(l)
var c=p(t,0,l)
if(i)try{c=String.fromCharCode.apply(null,new Uint8Array(c))}catch(e){var s=new Uint8Array(c)
for(c="",u=0;u<s.length;u++)c+=String.fromCharCode(s[u])}a.push(c),t=p(t,l)}var d=a.length
a.forEach(function(e,t){r(f.decodePacket(e,n,!0),t,d)})}},function(r,o,a){"use strict";(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(){var e
try{e=o.storage.debug}catch(e){}return!e&&void 0!==t&&"env"in t&&(e=t.env.DEBUG),e}(o=r.exports=a(28)).log=function(){return"object"===("undefined"==typeof console?"undefined":n(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var n="color: "+this.color
e.splice(1,0,n,"color: inherit")
var r=0,a=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,n)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=e,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(
"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},
o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF",
"#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message
}},o.enable(e())}).call(this,a(6))},function(e,t,n){"use strict"
t.encode=function(e){var t=""
for(var n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t},t.decode=function(e){for(var t={},n=e.split("&"),r=0,a=n.length;r<a;r++){var o=n[r].split("=")
t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}},function(e,t,n){"use strict"
e.exports=function(e,t){var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(r,o,a){"use strict";(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(){var e
try{e=o.storage.debug}catch(e){}return!e&&void 0!==t&&"env"in t&&(e=t.env.DEBUG),e}(o=r.exports=a(46)).log=function(){return"object"===("undefined"==typeof console?"undefined":n(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var n="color: "+this.color
e.splice(1,0,n,"color: inherit")
var r=0,a=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,n)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=e,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(
"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},
o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF",
"#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message
}},o.enable(e())}).call(this,a(6))},function(e,t,n){"use strict"
var r,a,o=e.exports={}
function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0)
if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0)
try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{a="function"==typeof clearTimeout?clearTimeout:l}catch(e){a=l}}()
var c,s=[],d=!1,f=-1
function p(){d&&c&&(d=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!d){var e=u(p)
d=!0
for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run()
f=-1,t=s.length}c=null,d=!1,function(t){if(a===clearTimeout)return clearTimeout(t)
if((a===l||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t)
try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1)
if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
s.push(new m(e,t)),1!==s.length||d||u(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error(
"process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict"
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{}
var n,r,a=o(e)
if("string"===a&&0<e.length)return function(e){if(!(100<(e=String(e)).length)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(t){var n=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n
case"days":case"day":case"d":return 864e5*n
case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n
case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n
case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n
default:return}}}}(e)
if("number"===a&&!1===isNaN(e))return t.long?i(r=e,864e5,"day")||i(r,36e5,"hour")||i(r,6e4,"minute")||i(r,1e3,"second")||r+" ms":864e5<=(n=e)?Math.round(n/864e5)+"d":36e5<=n?Math.round(n/36e5)+"h":6e4<=n?Math.round(n/6e4)+"m":1e3<=n?Math.round(n/1e3)+"s":n+"ms"
throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,l,t){"use strict"
var u=t(29)("socket.io-parser"),n=t(0),o=t(31),c=t(13),r=t(14)
function a(){}l.protocol=4,l.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],l.CONNECT=0,l.DISCONNECT=1,l.EVENT=2,l.ACK=3,l.ERROR=4,l.BINARY_EVENT=5,l.BINARY_ACK=6,l.Encoder=a,l.Decoder=d
var i=l.ERROR+'"encode error"'
function s(e){var t=""+e.type
if(l.BINARY_EVENT!==e.type&&l.BINARY_ACK!==e.type||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data){var n=function(e){try{return JSON.stringify(e)}catch(e){return!1}}(e.data)
if(!1===n)return i
t+=n}return u("encoded %j as %s",e,t),t}function d(){this.reconstructor=null}function f(e){this.reconPack=e,this.buffers=[]}function p(e){return{type:l.ERROR,data:"parser error: "+e}}a.prototype.encode=function(e,t){var n,a
u("encoding packet %j",e),l.BINARY_EVENT===e.type||l.BINARY_ACK===e.type?(n=e,a=t,o.removeBlobs(n,function(e){var t=o.deconstructPacket(e),n=s(t.packet),r=t.buffers
r.unshift(n),a(r)})):t([s(e)])},n(d.prototype),d.prototype.add=function(e){var t
if("string"==typeof e)t=function(e){var t=0,n={type:Number(e.charAt(0))}
if(null==l.types[n.type])return p("unknown packet type "+n.type)
if(l.BINARY_EVENT===n.type||l.BINARY_ACK===n.type){for(var r="";"-"!==e.charAt(++t)&&(r+=e.charAt(t),t!=e.length););if(r!=Number(r)||"-"!==e.charAt(t))throw new Error("Illegal attachments")
n.attachments=Number(r)}if("/"===e.charAt(t+1))for(n.nsp="";++t;){if(","===(o=e.charAt(t)))break
if(n.nsp+=o,t===e.length)break}else n.nsp="/"
var a=e.charAt(t+1)
if(""!==a&&Number(a)==a){for(n.id="";++t;){var o
if(null==(o=e.charAt(t))||Number(o)!=o){--t
break}if(n.id+=e.charAt(t),t===e.length)break}n.id=Number(n.id)}if(e.charAt(++t)){var i=function(e){try{return JSON.parse(e)}catch(e){return!1}}(e.substr(t))
if(!(!1!==i&&(n.type===l.ERROR||c(i))))return p("invalid payload")
n.data=i}return u("decoded %s as %j",e,n),n}(e),l.BINARY_EVENT===t.type||l.BINARY_ACK===t.type?(this.reconstructor=new f(t),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",t)):this.emit("decoded",t)
else{if(!r(e)&&!e.base64)throw new Error("Unknown type: "+e)
if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(t=this.reconstructor.takeBinaryData(e))&&(this.reconstructor=null,this.emit("decoded",t))}},d.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},f.prototype.takeBinaryData=function(e){if(this.buffers.push(e),this.buffers.length!==this.reconPack.attachments)return null
var t=o.reconstructPacket(this.reconPack,this.buffers)
return this.finishedReconstruction(),t},f.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(e,L,t){"use strict";(function(e){var l=t(32),o=t(33),i=t(34)
function n(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(e,t){if(n()<t)throw new RangeError("Invalid typed array length")
return d.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=d.prototype:(null===e&&(e=new d(t)),e.length=t),e}function d(e,t,n){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(e,t,n)
if("number"!=typeof e)return r(this,e,t,n)
if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return a(this,e)}function r(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
return t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),d.TYPED_ARRAY_SUPPORT?(e=t).__proto__=d.prototype:e=s(e,t),e}(e,t,n,r):"string"==typeof t?function(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!d.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(t,n),a=(e=u(e,r)).write(t,n)
return a!==r&&(e=e.slice(0,a)),e}(e,t,n):function(e,t){if(d.isBuffer(t)){var n=0|f(t.length)
return 0===(e=u(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?u(e,0):s(e,t)
if("Buffer"===t.type&&i(t.data))return s(e,t.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function c(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function a(e,t){if(c(t),e=u(e,t<0?0:0|f(t)),!d.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0
return e}function s(e,t){var n=t.length<0?0:0|f(t.length)
e=u(e,n)
for(var r=0;r<n;r+=1)e[r]=255&t[r]
return e}function f(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes")
return 0|e}function p(e,t){if(d.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return P(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return A(e).length
default:if(r)return P(e).length
t=(""+t).toLowerCase(),r=!0}}function h(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function m(e,t,n,r,a){if(0===e.length)return-1
if("string"==typeof n?(r=n,n=0):2147483647<n?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1
n=e.length-1}else if(n<0){if(!a)return-1
n=0}if("string"==typeof t&&(t=d.from(t,r)),d.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,a)
if("number"==typeof t)return t&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,a)
throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,a){var o,i=1,l=e.length,u=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
l/=i=2,u/=2,n/=2}function c(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(a){var s=-1
for(o=n;o<l;o++)if(c(e,o)===c(t,-1===s?0:o-s)){if(-1===s&&(s=o),o-s+1===u)return s*i}else-1!==s&&(o-=o-s),s=-1}else for(l<n+u&&(n=l-u),o=n;0<=o;o--){for(var d=!0,f=0;f<u;f++)if(c(e,o+f)!==c(t,f)){d=!1
break}if(d)return o}return-1}function g(e,t,n,r){n=Number(n)||0
var a=e.length-n
r?(r=Number(r))>a&&(r=a):r=a
var o=t.length
if(o%2!=0)throw new TypeError("Invalid hex string")
o/2<r&&(r=o/2)
for(var i=0;i<r;++i){var l=parseInt(t.substr(2*i,2),16)
if(isNaN(l))return i
e[n+i]=l}return i}function y(e,t,n,r){return j(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function b(e,t,n){n=Math.min(e.length,n)
for(var r=[],a=t;a<n;){var o,i,l,u,c=e[a],s=null,d=239<c?4:223<c?3:191<c?2:1
if(a+d<=n)switch(d){case 1:c<128&&(s=c)
break
case 2:128==(192&(o=e[a+1]))&&127<(u=(31&c)<<6|63&o)&&(s=u)
break
case 3:o=e[a+1],i=e[a+2],128==(192&o)&&128==(192&i)&&2047<(u=(15&c)<<12|(63&o)<<6|63&i)&&(u<55296||57343<u)&&(s=u)
break
case 4:o=e[a+1],i=e[a+2],l=e[a+3],128==(192&o)&&128==(192&i)&&128==(192&l)&&65535<(u=(15&c)<<18|(63&o)<<12|(63&i)<<6|63&l)&&u<1114112&&(s=u)}null===s?(s=65533,d=1):65535<s&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),a+=d}return function(e){var t=e.length
if(t<=S)return String.fromCharCode.apply(String,e)
for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=S))
return n}(r)}L.Buffer=d,L.SlowBuffer=function(e){return+e!=e&&(e=0),d.alloc(+e)},L.INSPECT_MAX_BYTES=50,d.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),L.kMaxLength=n(),d.poolSize=8192,d._augment=function(e){return e.__proto__=d.prototype,e},d.from=function(e,t,n){return r(null,e,t,n)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{
value:null,configurable:!0})),d.alloc=function(e,t,n){return a=t,o=n,c(r=e),r<=0?u(null,r):void 0!==a?"string"==typeof o?u(null,r).fill(a,o):u(null,r).fill(a):u(null,r)
var r,a,o},d.allocUnsafe=function(e){return a(null,e)},d.allocUnsafeSlow=function(e){return a(null,e)},d.isBuffer=function(e){return!(null==e||!e._isBuffer)},d.compare=function(e,t){if(!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,a=0,o=Math.min(n,r);a<o;++a)if(e[a]!==t[a]){n=e[a],r=t[a]
break}return n<r?-1:r<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},d.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return d.alloc(0)
var n
if(void 0===t)for(n=t=0;n<e.length;++n)t+=e[n].length
var r=d.allocUnsafe(t),a=0
for(n=0;n<e.length;++n){var o=e[n]
if(!d.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers')
o.copy(r,a),a+=o.length}return r},d.byteLength=p,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)h(this,t,t+1)
return this},d.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)h(this,t,t+3),h(this,t+1,t+2)
return this},d.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)h(this,t,t+7),h(this,t+1,t+6),h(this,t+2,t+5),h(this,t+3,t+4)
return this},d.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?b(this,0,e):function(e,t,n){var r,a,o,i=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return E(this,t,n)
case"utf8":case"utf-8":return b(this,t,n)
case"ascii":return w(this,t,n)
case"latin1":case"binary":return C(this,t,n)
case"base64":return r=this,o=n,0===(a=t)&&o===r.length?l.fromByteArray(r):l.fromByteArray(r.slice(a,o))
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,n)
default:if(i)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),i=!0}}.apply(this,arguments)},d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){var e="",t=L.INSPECT_MAX_BYTES
return 0<this.length&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},d.prototype.compare=function(e,t,n,r,a){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),t<0||n>e.length||r<0||a>this.length)throw new RangeError("out of range index")
if(a<=r&&n<=t)return 0
if(a<=r)return-1
if(n<=t)return 1
if(this===e)return 0
for(var o=(a>>>=0)-(r>>>=0),i=(n>>>=0)-(t>>>=0),l=Math.min(o,i),u=this.slice(r,a),c=e.slice(t,n),s=0;s<l;++s)if(u[s]!==c[s]){o=u[s],i=c[s]
break}return o<i?-1:i<o?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},d.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-t
if((void 0===n||a<n)&&(n=a),0<e.length&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o,i,l,u,c,s,d,f,p,h=!1;;)switch(r){case"hex":return g(this,e,t,n)
case"utf8":case"utf-8":return f=t,p=n,j(P(e,(d=this).length-f),d,f,p)
case"ascii":return y(this,e,t,n)
case"latin1":case"binary":return y(this,e,t,n)
case"base64":return u=this,c=t,s=n,j(A(e),u,c,s)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i=t,l=n,j(function(e,t){for(var n,r,a,o=[],i=0;i<e.length&&!((t-=2)<0);++i)r=(n=e.charCodeAt(i))>>8,a=n%256,o.push(a),o.push(r)
return o}(e,(o=this).length-i),o,i,l)
default:if(h)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),h=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var S=4096
function w(e,t,n){var r=""
n=Math.min(e.length,n)
for(var a=t;a<n;++a)r+=String.fromCharCode(127&e[a])
return r}function C(e,t,n){var r=""
n=Math.min(e.length,n)
for(var a=t;a<n;++a)r+=String.fromCharCode(e[a])
return r}function E(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r)
for(var a,o="",i=t;i<n;++i)o+=(a=e[i])<16?"0"+a.toString(16):a.toString(16)
return o}function k(e,t,n){for(var r=e.slice(t,n),a="",o=0;o<r.length;o+=2)a+=String.fromCharCode(r[o]+256*r[o+1])
return a}function _(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(n<e+t)throw new RangeError("Trying to access beyond buffer length")}function x(e,t,n,r,a,o){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(a<t||t<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function T(e,t,n,r){t<0&&(t=65535+t+1)
for(var a=0,o=Math.min(e.length-n,2);a<o;++a)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function M(e,t,n,r){t<0&&(t=4294967295+t+1)
for(var a=0,o=Math.min(e.length-n,4);a<o;++a)e[n+a]=t>>>8*(r?a:3-a)&255}function N(e,t,n,r,a,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function I(e,t,n,r,a){return a||N(e,0,n,4),o.write(e,t,n,r,23,4),n+4}function O(e,t,n,r,a){return a||N(e,0,n,8),o.write(e,t,n,r,52,8),n+8}d.prototype.slice=function(e,t){var n,r=this.length
if((e=~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),t<e&&(t=e),d.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=d.prototype
else{var a=t-e
n=new d(a,void 0)
for(var o=0;o<a;++o)n[o]=this[o+e]}return n},d.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||_(e,t,this.length)
for(var r=this[e],a=1,o=0;++o<t&&(a*=256);)r+=this[e+o]*a
return r},d.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||_(e,t,this.length)
for(var r=this[e+--t],a=1;0<t&&(a*=256);)r+=this[e+--t]*a
return r},d.prototype.readUInt8=function(e,t){return t||_(e,1,this.length),this[e]},d.prototype.readUInt16LE=function(e,t){return t||_(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUInt16BE=function(e,t){return t||_(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUInt32LE=function(e,t){return t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUInt32BE=function(e,t){return t||_(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])
},d.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||_(e,t,this.length)
for(var r=this[e],a=1,o=0;++o<t&&(a*=256);)r+=this[e+o]*a
return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},d.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||_(e,t,this.length)
for(var r=t,a=1,o=this[e+--r];0<r&&(a*=256);)o+=this[e+--r]*a
return o>=(a*=128)&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(e,t){return t||_(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){t||_(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){t||_(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readFloatLE=function(e,t){return t||_(e,4,this.length),o.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return t||_(e,4,this.length),o.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return t||_(e,8,
this.length),o.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return t||_(e,8,this.length),o.read(this,e,!1,52,8)},d.prototype.writeUIntLE=function(e,t,n,r){e=+e,t|=0,n|=0,r||x(this,e,t,n,Math.pow(2,8*n)-1,0)
var a=1,o=0
for(this[t]=255&e;++o<n&&(a*=256);)this[t+o]=e/a&255
return t+n},d.prototype.writeUIntBE=function(e,t,n,r){e=+e,t|=0,n|=0,r||x(this,e,t,n,Math.pow(2,8*n)-1,0)
var a=n-1,o=1
for(this[t+a]=255&e;0<=--a&&(o*=256);)this[t+a]=e/o&255
return t+n},d.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,1,255,0),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):T(this,e,t,!0),t+2},d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):T(this,e,t,!1),t+2},d.prototype.writeUInt32LE=function(e,t,n){
return e=+e,t|=0,n||x(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):M(this,e,t,!0),t+4},d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},d.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var a=Math.pow(2,8*n-1)
x(this,e,t,n,a-1,-a)}var o=0,i=1,l=0
for(this[t]=255&e;++o<n&&(i*=256);)e<0&&0===l&&0!==this[t+o-1]&&(l=1),this[t+o]=(e/i>>0)-l&255
return t+n},d.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var a=Math.pow(2,8*n-1)
x(this,e,t,n,a-1,-a)}var o=n-1,i=1,l=0
for(this[t+o]=255&e;0<=--o&&(i*=256);)e<0&&0===l&&0!==this[t+o+1]&&(l=1),this[t+o]=(e/i>>0)-l&255
return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,1,127,-128),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):T(this,e,t,!0),t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):T(this,e,t,!1),t+2},
d.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):M(this,e,t,!0),t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},d.prototype.writeFloatLE=function(e,t,n){return I(this,e,t,!0,n)},
d.prototype.writeFloatBE=function(e,t,n){return I(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return O(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return O(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),0<r&&r<n&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var a,o=r-n
if(this===e&&n<t&&t<r)for(a=o-1;0<=a;--a)e[a+t]=this[a+n]
else if(o<1e3||!d.TYPED_ARRAY_SUPPORT)for(a=0;a<o;++a)e[a+t]=this[a+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t)
return o},d.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var a=e.charCodeAt(0)
a<256&&(e=a)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!d.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(n<=t)return this
var o
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e
else{var i=d.isBuffer(e)?e:P(new d(e,r).toString()),l=i.length
for(o=0;o<n-t;++o)this[o+t]=i[o%l]}return this}
var R=/[^+\/0-9A-Za-z-_]/g
function P(e,t){var n
t=t||1/0
for(var r=e.length,a=null,o=[],i=0;i<r;++i){if(55295<(n=e.charCodeAt(i))&&n<57344){if(!a){if(56319<n){-1<(t-=3)&&o.push(239,191,189)
continue}if(i+1===r){-1<(t-=3)&&o.push(239,191,189)
continue}a=n
continue}if(n<56320){-1<(t-=3)&&o.push(239,191,189),a=n
continue}n=65536+(a-55296<<10|n-56320)}else a&&-1<(t-=3)&&o.push(239,191,189)
if(a=null,n<128){if((t-=1)<0)break
o.push(n)}else if(n<2048){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function A(e){return l.toByteArray(function(e){if((e=(t=e,t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")).replace(R,"")).length<2)return""
for(var t;e.length%4!=0;)e+="="
return e}(e))}function j(e,t,n,r){for(var a=0;a<r&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a]
return a}}).call(this,t(15))},function(e,t,n){"use strict"
var a=n(37)
e.exports=function(e){var t=e.xdomain,n=e.xscheme,r=e.enablesXDR
try{if("undefined"!=typeof XMLHttpRequest&&(!t||a))return new XMLHttpRequest}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!n&&r)return new XDomainRequest}catch(e){}if(!t)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}},function(e,t,n){"use strict"
var r=n(1)
function a(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.forceNode=e.forceNode,this.isReactNative=e.isReactNative,
this.extraHeaders=e.extraHeaders,this.localAddress=e.localAddress}n(0)((e.exports=a).prototype),a.prototype.onError=function(e,t){var n=new Error(e)
return n.type="TransportError",n.description=t,this.emit("error",n),this},a.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},a.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},a.prototype.send=function(e){if("open"!==this.readyState)throw new Error("Transport not open")
this.write(e)},a.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},a.prototype.onData=function(e){var t=r.decodePacket(e,this.socket.binaryType)
this.onPacket(t)},a.prototype.onPacket=function(e){this.emit("packet",e)},a.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(e,t,n){"use strict"
var l=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,u=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"]
e.exports=function(e){var t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length))
for(var a=l.exec(e||""),o={},i=14;i--;)o[u[i]]=a[i]||""
return-1!=n&&-1!=r&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict";(function(t){e.exports=function(e){return n&&t.isBuffer(e)||r&&(e instanceof ArrayBuffer||a(e))}
var n="function"==typeof t&&"function"==typeof t.isBuffer,r="function"==typeof ArrayBuffer,a=function(e){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer}}).call(this,n(9).Buffer)},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a
a=function(){return this}()
try{a=a||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(a=window)}e.exports=a},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=n(35),o=n(22),a=n(0),i=n(8),c=n(23),l=n(24),s=n(2)("socket.io-client:manager"),d=n(21),f=n(51),p=Object.prototype.hasOwnProperty
function h(e,t){if(!(this instanceof h))return new h(e,t)
e&&"object"===r(e)&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.nsps={},this.subs=[],this.opts=t,this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(t.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(
null==t.timeout?2e4:t.timeout),this.readyState="closed",this.uri=e,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[]
var n=t.parser||i
this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==t.autoConnect,this.autoConnect&&this.open()}(e.exports=h).prototype.emitAll=function(){for(var e in this.emit.apply(this,arguments),this.nsps)p.call(this.nsps,e)&&this.nsps[e].emit.apply(this.nsps[e],arguments)},h.prototype.updateSocketIds=function(){for(var e in this.nsps)p.call(this.nsps,e)&&(this.nsps[e].id=this.generateId(e))},h.prototype.generateId=function(e){return("/"===e?"":e+"#")+this.engine.id},a(h.prototype),
h.prototype.reconnection=function(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection},h.prototype.reconnectionAttempts=function(e){return arguments.length?(this._reconnectionAttempts=e,this):this._reconnectionAttempts},h.prototype.reconnectionDelay=function(e){return arguments.length?(this._reconnectionDelay=e,this.backoff&&this.backoff.setMin(e),this):this._reconnectionDelay},h.prototype.randomizationFactor=function(e){return arguments.length?(this._randomizationFactor=e,
this.backoff&&this.backoff.setJitter(e),this):this._randomizationFactor},h.prototype.reconnectionDelayMax=function(e){return arguments.length?(this._reconnectionDelayMax=e,this.backoff&&this.backoff.setMax(e),this):this._reconnectionDelayMax},h.prototype.timeout=function(e){return arguments.length?(this._timeout=e,this):this._timeout},h.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},h.prototype.open=h.prototype.connect=function(
n,e){if(s("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this
s("opening %s",this.uri),this.engine=u(this.uri,this.opts)
var t=this.engine,r=this
this.readyState="opening",this.skipReconnect=!1
var a=c(t,"open",function(){r.onopen(),n&&n()}),o=c(t,"error",function(e){if(s("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),n){var t=new Error("Connection error")
t.data=e,n(t)}else r.maybeReconnectOnOpen()})
if(!1!==this._timeout){var i=this._timeout
s("connect attempt will timeout after %d",i)
var l=setTimeout(function(){s("connect attempt timed out after %d",i),a.destroy(),t.close(),t.emit("error","timeout"),r.emitAll("connect_timeout",i)},i)
this.subs.push({destroy:function(){clearTimeout(l)}})}return this.subs.push(a),this.subs.push(o),this},h.prototype.onopen=function(){s("open"),this.cleanup(),this.readyState="open",this.emit("open")
var e=this.engine
this.subs.push(c(e,"data",l(this,"ondata"))),this.subs.push(c(e,"ping",l(this,"onping"))),this.subs.push(c(e,"pong",l(this,"onpong"))),this.subs.push(c(e,"error",l(this,"onerror"))),this.subs.push(c(e,"close",l(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",l(this,"ondecoded")))},h.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},h.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},h.prototype.ondata=function(e){this.decoder.add(e)},
h.prototype.ondecoded=function(e){this.emit("packet",e)},h.prototype.onerror=function(e){s("error",e),this.emitAll("error",e)},h.prototype.socket=function(e,t){var n=this.nsps[e]
if(!n){n=new o(this,e,t),this.nsps[e]=n
var r=this
n.on("connecting",a),n.on("connect",function(){n.id=r.generateId(e)}),this.autoConnect&&a()}function a(){~d(r.connecting,n)||r.connecting.push(n)}return n},h.prototype.destroy=function(e){var t=d(this.connecting,e)
~t&&this.connecting.splice(t,1),this.connecting.length||this.close()},h.prototype.packet=function(n){s("writing packet %j",n)
var r=this
n.query&&0===n.type&&(n.nsp+="?"+n.query),r.encoding?r.packetBuffer.push(n):(r.encoding=!0,this.encoder.encode(n,function(e){for(var t=0;t<e.length;t++)r.engine.write(e[t],n.options)
r.encoding=!1,r.processPacketQueue()}))},h.prototype.processPacketQueue=function(){if(0<this.packetBuffer.length&&!this.encoding){var e=this.packetBuffer.shift()
this.packet(e)}},h.prototype.cleanup=function(){s("cleanup")
for(var e=this.subs.length,t=0;t<e;t++)this.subs.shift().destroy()
this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},h.prototype.close=h.prototype.disconnect=function(){s("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},h.prototype.onclose=function(e){s("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()},
h.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this
var t=this
if(this.backoff.attempts>=this._reconnectionAttempts)s("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1
else{var e=this.backoff.duration()
s("will wait %dms before reconnect attempt",e),this.reconnecting=!0
var n=setTimeout(function(){t.skipReconnect||(s("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(s("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(s("reconnect success"),t.onreconnect())}))},e)
this.subs.push({destroy:function(){clearTimeout(n)}})}},h.prototype.onreconnect=function(){var e=this.backoff.attempts
this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",e)}},function(e,t,n){"use strict"
var i=n(10),l=n(38),u=n(47),r=n(48)
t.polling=function(e){var t=!1,n=!1,r=!1!==e.jsonp
if("undefined"!=typeof location){var a="https:"===location.protocol,o=location.port
o||(o=a?443:80),t=e.hostname!==location.hostname||o!==e.port,n=e.secure!==a}if(e.xdomain=t,e.xscheme=n,"open"in new i(e)&&!e.forceJSONP)return new l(e)
if(!r)throw new Error("JSONP disabled")
return new u(e)},t.websocket=r},function(e,t,n){"use strict"
var r=n(11),a=n(3),o=n(1),i=n(4),l=n(20),u=n(5)("engine.io-client:polling")
e.exports=s
var c=null!=new(n(10))({xdomain:!1}).responseType
function s(e){var t=e&&e.forceBase64
c&&!t||(this.supportsBinary=!1),r.call(this,e)}i(s,r),s.prototype.name="polling",s.prototype.doOpen=function(){this.poll()},s.prototype.pause=function(e){var t=this
function n(){u("paused"),t.readyState="paused",e()}if(this.readyState="pausing",this.polling||!this.writable){var r=0
this.polling&&(u("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){u("pre-pause polling complete"),--r||n()})),this.writable||(u("we are currently writing - waiting to pause"),r++,this.once("drain",function(){u("pre-pause writing complete"),--r||n()}))}else n()},s.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},s.prototype.onData=function(e){var r=this
u("polling got data %s",e),o.decodePayload(e,this.socket.binaryType,function(e,t,n){if("opening"===r.readyState&&r.onOpen(),"close"===e.type)return r.onClose(),!1
r.onPacket(e)}),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},s.prototype.doClose=function(){var e=this
function t(){u("writing close packet"),e.write([{type:"close"}])}"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},s.prototype.write=function(e){var t=this
this.writable=!1
var n=function(){t.writable=!0,t.emit("drain")}
o.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,n)})},s.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",n=""
return!1!==this.timestampRequests&&(e[this.timestampParam]=l()),this.supportsBinary||e.sid||(e.b64=1),e=a.encode(e),this.port&&("https"===t&&443!==Number(this.port)||"http"===t&&80!==Number(this.port))&&(n=":"+this.port),e.length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+e}},function(t,e,n){"use strict";(function(o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=n(40),e=Object.prototype.toString,u="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===e.call(Blob),c="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===e.call(File)
t.exports=function e(t){if(!t||"object"!==i(t))return!1
if(l(t)){for(var n=0,r=t.length;n<r;n++)if(e(t[n]))return!0
return!1}if("function"==typeof o&&o.isBuffer&&o.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||u&&t instanceof Blob||c&&t instanceof File)return!0
if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return e(t.toJSON(),!0)
for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return!0
return!1}}).call(this,n(9).Buffer)},function(e,t,n){"use strict"
var r,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),o=64,i={},l=0,u=0
function c(e){for(var t="";t=a[e%o]+t,0<(e=Math.floor(e/o)););return t}function s(){var e=c(+new Date)
return e!==r?(l=0,r=e):e+"."+c(l++)}for(;u<o;u++)i[a[u]]=u
s.encode=c,s.decode=function(e){var t=0
for(u=0;u<e.length;u++)t=t*o+i[e.charAt(u)]
return t},e.exports=s},function(e,t,n){"use strict"
var r=[].indexOf
e.exports=function(e,t){if(r)return e.indexOf(t)
for(var n=0;n<e.length;++n)if(e[n]===t)return n
return-1}},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(8),o=n(0),i=n(50),l=n(23),u=n(24),c=n(2)("socket.io-client:socket"),s=n(3),d=n(19)
e.exports=h
var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},p=o.prototype.emit
function h(e,t,n){this.io=e,this.nsp=t,(this.json=this).ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}o(h.prototype),h.prototype.subEvents=function(){if(!this.subs){var e=this.io
this.subs=[l(e,"open",u(this,"onopen")),l(e,"packet",u(this,"onpacket")),l(e,"close",u(this,"onclose"))]}},h.prototype.open=h.prototype.connect=function(){return this.connected||(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting")),this},h.prototype.send=function(){var e=i(arguments)
return e.unshift("message"),this.emit.apply(this,e),this},h.prototype.emit=function(e){if(f.hasOwnProperty(e))return p.apply(this,arguments),this
var t=i(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:d(t))?a.BINARY_EVENT:a.EVENT,data:t,options:{}}
return n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof t[t.length-1]&&(c("emitting packet with ack id %d",this.ids),this.acks[this.ids]=t.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},h.prototype.packet=function(e){e.nsp=this.nsp,this.io.packet(e)},h.prototype.onopen=function(){if(c("transport is open - connecting"),"/"!==this.nsp)if(this.query){var e="object"===r(this.query)?s.encode(this.query):this.query
c("sending connect packet with query %s",e),this.packet({type:a.CONNECT,query:e})}else this.packet({type:a.CONNECT})},h.prototype.onclose=function(e){c("close (%s)",e),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",e)},h.prototype.onpacket=function(e){var t=e.nsp===this.nsp,n=e.type===a.ERROR&&"/"===e.nsp
if(t||n)switch(e.type){case a.CONNECT:this.onconnect()
break
case a.EVENT:case a.BINARY_EVENT:this.onevent(e)
break
case a.ACK:case a.BINARY_ACK:this.onack(e)
break
case a.DISCONNECT:this.ondisconnect()
break
case a.ERROR:this.emit("error",e.data)}},h.prototype.onevent=function(e){var t=e.data||[]
c("emitting event %j",t),null!=e.id&&(c("attaching ack callback to event"),t.push(this.ack(e.id))),this.connected?p.apply(this,t):this.receiveBuffer.push(t)},h.prototype.ack=function(t){var n=this,r=!1
return function(){if(!r){r=!0
var e=i(arguments)
c("sending ack %j",e),n.packet({type:d(e)?a.BINARY_ACK:a.ACK,id:t,data:e})}}},h.prototype.onack=function(e){var t=this.acks[e.id]
"function"==typeof t?(c("calling ack %s with %j",e.id,e.data),t.apply(this,e.data),delete this.acks[e.id]):c("bad ack %s",e.id)},h.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},h.prototype.emitBuffered=function(){var e
for(e=0;e<this.receiveBuffer.length;e++)p.apply(this,this.receiveBuffer[e])
for(this.receiveBuffer=[],e=0;e<this.sendBuffer.length;e++)this.packet(this.sendBuffer[e])
this.sendBuffer=[]},h.prototype.ondisconnect=function(){c("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},h.prototype.destroy=function(){if(this.subs){for(var e=0;e<this.subs.length;e++)this.subs[e].destroy()
this.subs=null}this.io.destroy(this)},h.prototype.close=h.prototype.disconnect=function(){return this.connected&&(c("performing disconnect (%s)",this.nsp),this.packet({type:a.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},h.prototype.compress=function(e){return this.flags.compress=e,this},h.prototype.binary=function(e){return this.flags.binary=e,this}},function(e,t,n){"use strict"
e.exports=function(e,t,n){return e.on(t,n),{destroy:function(){e.removeListener(t,n)}}}},function(e,t,n){"use strict"
var r=[].slice
e.exports=function(e,t){if("string"==typeof t&&(t=e[t]),"function"!=typeof t)throw new Error("bind() requires a function")
var n=r.call(arguments,2)
return function(){return t.apply(e,n.concat(r.call(arguments)))}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createUserSocket=void 0
var r,u=(r=n(26))&&r.__esModule?r:{default:r}
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s={transports:["websocket"],reconnectionDelay:2e3,reconnectionDelayMax:1e4}
t.createUserSocket=function(e){var t=e.userId,n=e.socketUrl,r=e.socketPath,a=void 0===r?"/S":r,o=e.extraHeaders,i=(0,u.default)(n,function(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r
t=a,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return a}({},s,{path:a,query:{userId:t,fromURL:p().slice(0,128)},extraHeaders:o}))
i.emitAsync=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return new Promise(function(e){return i.emit.apply(i,t.concat([e]))}).then(function(e){var t=e.error,n=e.result
if(t)throw Object.assign(new Error("object"===("undefined"==typeof value?"undefined":c(value))&&t.message||"DEFAULT_USER_SOCKET_ERROR"),t)
return n})}
var l=0
return i.getServerTimestamp=function(){return f(d()+l)},i.calibrateTimestampOffsetAsync=function(){var n=d()
return i.emitAsync("request:timestamp").then(function(e){var t=d()
l=Number(e)-.5*(n+t)})},i}
var d=function(){return.001*Date.now()},f=function(e){return Math.round(100*e)/100},p=function(){try{return window.location.href}catch(e){return"UNKNOWN"}}},function(e,t,n){"use strict"
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(27),r=n(8),s=n(16),d=n(2)("socket.io-client")
e.exports=t=a
var f=t.managers={}
function a(e,t){"object"===u(e)&&(t=e,e=void 0),t=t||{}
var n,r=c(e),a=r.source,o=r.id,i=r.path,l=f[o]&&i in f[o].nsps
return n=t.forceNew||t["force new connection"]||!1===t.multiplex||l?(d("ignoring socket cache for %s",a),s(a,t)):(f[o]||(d("new io instance for %s",a),f[o]=s(a,t)),f[o]),r.query&&!t.query&&(t.query=r.query),n.socket(r.path,t)}t.protocol=r.protocol,t.connect=a,t.Manager=n(16),t.Socket=n(22)},function(e,t,n){"use strict"
var a=n(12),o=n(2)("socket.io-client:url")
e.exports=function(e,t){var n=e
t=t||"undefined"!=typeof location&&location,null==e&&(e=t.protocol+"//"+t.host),"string"==typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?t.protocol+e:t.host+e),/^(https?|wss?):\/\//.test(e)||(o("protocol-less url %s",e),e=void 0!==t?t.protocol+"//"+e:"https://"+e),o("parse %s",e),n=a(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/"
var r=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host
return n.id=n.protocol+"://"+r+":"+n.port,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}},function(e,u,t){"use strict"
function n(e){var r
function l(){if(l.enabled){var a=l,e=+new Date,t=e-(r||e)
a.diff=t,a.prev=r,a.curr=e,r=e
for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n]
o[0]=u.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O")
var i=0
o[0]=o[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e
i++
var n=u.formatters[t]
if("function"==typeof n){var r=o[i]
e=n.call(a,r),o.splice(i,1),i--}return e}),u.formatArgs.call(a,o),(l.log||u.log||console.log.bind(console)).apply(a,o)}}return l.namespace=e,l.enabled=u.enabled(e),l.useColors=u.useColors(),l.color=function(e){var t,n=0
for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0
return u.colors[Math.abs(n)%u.colors.length]}(e),l.destroy=a,"function"==typeof u.init&&u.init(l),u.instances.push(l),l}function a(){var e=u.instances.indexOf(this)
return-1!==e&&(u.instances.splice(e,1),!0)}(u=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},u.disable=function(){u.enable("")},u.enable=function(e){var t
u.save(e),u.names=[],u.skips=[]
var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length
for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+e.substr(1)+"$")):u.names.push(new RegExp("^"+e+"$")))
for(t=0;t<u.instances.length;t++){var a=u.instances[t]
a.enabled=u.enabled(a.namespace)}},u.enabled=function(e){if("*"===e[e.length-1])return!0
var t,n
for(t=0,n=u.skips.length;t<n;t++)if(u.skips[t].test(e))return!1
for(t=0,n=u.names.length;t<n;t++)if(u.names[t].test(e))return!0
return!1},u.humanize=t(7),u.instances=[],u.names=[],u.skips=[],u.formatters={}},function(r,o,a){"use strict";(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(){var e
try{e=o.storage.debug}catch(e){}return!e&&void 0!==t&&"env"in t&&(e=t.env.DEBUG),e}(o=r.exports=a(30)).log=function(){return"object"===("undefined"==typeof console?"undefined":n(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var n="color: "+this.color
e.splice(1,0,n,"color: inherit")
var r=0,a=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,n)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=e,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(
"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},
o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF",
"#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message
}},o.enable(e())}).call(this,a(6))},function(e,u,t){"use strict"
function n(e){var r
function l(){if(l.enabled){var a=l,e=+new Date,t=e-(r||e)
a.diff=t,a.prev=r,a.curr=e,r=e
for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n]
o[0]=u.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O")
var i=0
o[0]=o[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e
i++
var n=u.formatters[t]
if("function"==typeof n){var r=o[i]
e=n.call(a,r),o.splice(i,1),i--}return e}),u.formatArgs.call(a,o),(l.log||u.log||console.log.bind(console)).apply(a,o)}}return l.namespace=e,l.enabled=u.enabled(e),l.useColors=u.useColors(),l.color=function(e){var t,n=0
for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0
return u.colors[Math.abs(n)%u.colors.length]}(e),l.destroy=a,"function"==typeof u.init&&u.init(l),u.instances.push(l),l}function a(){var e=u.instances.indexOf(this)
return-1!==e&&(u.instances.splice(e,1),!0)}(u=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},u.disable=function(){u.enable("")},u.enable=function(e){var t
u.save(e),u.names=[],u.skips=[]
var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length
for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+e.substr(1)+"$")):u.names.push(new RegExp("^"+e+"$")))
for(t=0;t<u.instances.length;t++){var a=u.instances[t]
a.enabled=u.enabled(a.namespace)}},u.enabled=function(e){if("*"===e[e.length-1])return!0
var t,n
for(t=0,n=u.skips.length;t<n;t++)if(u.skips[t].test(e))return!1
for(t=0,n=u.names.length;t<n;t++)if(u.names[t].test(e))return!0
return!1},u.humanize=t(7),u.instances=[],u.names=[],u.skips=[],u.formatters={}},function(e,t,n){"use strict"
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=n(13),f=n(14),r=Object.prototype.toString,p="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===r.call(Blob),h="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===r.call(File)
t.deconstructPacket=function(e){var t=[],n=e.data,r=e
return r.data=function e(t,n){if(!t)return t
if(f(t)){var r={_placeholder:!0,num:n.length}
return n.push(t),r}if(d(t)){for(var a=new Array(t.length),o=0;o<t.length;o++)a[o]=e(t[o],n)
return a}if("object"!==s(t)||t instanceof Date)return t
a={}
for(var i in t)a[i]=e(t[i],n)
return a}(n,t),r.attachments=t.length,{packet:r,buffers:t}},t.reconstructPacket=function(e,t){return e.data=function e(t,n){if(!t)return t
if(t&&t._placeholder)return n[t.num]
if(d(t))for(var r=0;r<t.length;r++)t[r]=e(t[r],n)
else if("object"===s(t))for(var a in t)t[a]=e(t[a],n)
return t}(e.data,t),e.attachments=void 0,e},t.removeBlobs=function(e,l){var u=0,c=e
!function e(t,n,r){if(!t)return t
if(p&&t instanceof Blob||h&&t instanceof File){u++
var a=new FileReader
a.onload=function(){r?r[n]=this.result:c=this.result,--u||l(c)},a.readAsArrayBuffer(t)}else if(d(t))for(var o=0;o<t.length;o++)e(t[o],o,t)
else if("object"===s(t)&&!f(t))for(var i in t)e(t[i],i,t)}(c),u||l(c)}},function(e,t,n){"use strict"
t.byteLength=function(e){var t=d(e),n=t[0],r=t[1]
return 3*(n+r)/4-r},t.toByteArray=function(e){for(var t,n=d(e),r=n[0],a=n[1],o=new s(3*(r+a)/4-a),i=0,l=0<a?r-4:r,u=0;u<l;u+=4)t=c[e.charCodeAt(u)]<<18|c[e.charCodeAt(u+1)]<<12|c[e.charCodeAt(u+2)]<<6|c[e.charCodeAt(u+3)],o[i++]=t>>16&255,o[i++]=t>>8&255,o[i++]=255&t
return 2===a&&(t=c[e.charCodeAt(u)]<<2|c[e.charCodeAt(u+1)]>>4,o[i++]=255&t),1===a&&(t=c[e.charCodeAt(u)]<<10|c[e.charCodeAt(u+1)]<<4|c[e.charCodeAt(u+2)]>>2,o[i++]=t>>8&255,o[i++]=255&t),o},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,a=[],o=0,i=n-r;o<i;o+=16383)a.push(u(e,o,i<o+16383?i:o+16383))
return 1===r?(t=e[n-1],a.push(l[t>>2]+l[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],a.push(l[t>>10]+l[t>>4&63]+l[t<<2&63]+"=")),a.join("")}
for(var l=[],c=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,o=r.length;a<o;++a)l[a]=r[a],c[r.charCodeAt(a)]=a
function d(e){var t=e.length
if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4")
var n=e.indexOf("=")
return-1===n&&(n=t),[n,n===t?0:4-n%4]}function u(e,t,n){for(var r,a,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(l[(a=r)>>18&63]+l[a>>12&63]+l[a>>6&63]+l[63&a])
return o.join("")}c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(e,t,n){"use strict"
t.read=function(e,t,n,r,a){var o,i,l=8*a-r-1,u=(1<<l)-1,c=u>>1,s=-7,d=n?a-1:0,f=n?-1:1,p=e[t+d]
for(d+=f,o=p&(1<<-s)-1,p>>=-s,s+=l;0<s;o=256*o+e[t+d],d+=f,s-=8);for(i=o&(1<<-s)-1,o>>=-s,s+=r;0<s;i=256*i+e[t+d],d+=f,s-=8);if(0===o)o=1-c
else{if(o===u)return i?NaN:1/0*(p?-1:1)
i+=Math.pow(2,r),o-=c}return(p?-1:1)*i*Math.pow(2,o-r)},t.write=function(e,t,n,r,a,o){var i,l,u,c=8*o-a-1,s=(1<<c)-1,d=s>>1,f=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,h=r?1:-1,m=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(l=isNaN(t)?1:0,i=s):(i=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-i))<1&&(i--,u*=2),2<=(t+=1<=i+d?f/u:f*Math.pow(2,1-d))*u&&(i++,u/=2),s<=i+d?(l=0,i=s):1<=i+d?(l=(t*u-1)*Math.pow(2,a),i+=d):(l=t*Math.pow(2,d-1)*Math.pow(2,a),i=0));8<=a;e[n+p]=255&l,p+=h,l/=256,a-=8);for(i=i<<a|l,c+=a;0<c;e[n+p]=255&i,p+=h,i/=256,c-=8);e[n+p-h]|=128*m}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict"
e.exports=n(36),e.exports.parser=n(1)},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(17),o=n(0),d=n(5)("engine.io-client:socket"),i=n(21),l=n(1),u=n(12),c=n(3)
function f(e,t){if(!(this instanceof f))return new f(e,t)
t=t||{},e&&"object"===r(e)&&(t=e,e=null),e?(e=u(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=u(t.host).host),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||(
"undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=c.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],
this.transportOptions=t.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate&&(t.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,
this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized||t.rejectUnauthorized,this.forceNode=!!t.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(t.extraHeaders&&0<Object.keys(t.extraHeaders).length&&(this.extraHeaders=t.extraHeaders),
t.localAddress&&(this.localAddress=t.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}(e.exports=f).priorWebsocketSuccess=!1,o(f.prototype),f.protocol=l.protocol,(f.Socket=f).Transport=n(11),f.transports=n(17),f.parser=n(1),f.prototype.createTransport=function(e){d('creating transport "%s"',e)
var t=function(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}(this.query)
t.EIO=l.protocol,t.transport=e
var n=this.transportOptions[e]||{}
return this.id&&(t.sid=this.id),new a[e]({query:t,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,
pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,
isReactNative:this.isReactNative})},f.prototype.open=function(){var e
if(this.rememberUpgrade&&f.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket"
else{if(0===this.transports.length){var t=this
return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening"
try{e=this.createTransport(e)}catch(e){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},f.prototype.setTransport=function(e){d("setting transport %s",e.name)
var t=this
this.transport&&(d("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),(this.transport=e).on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},f.prototype.probe=function(n){d('probing transport "%s"',n)
var r=this.createTransport(n,{probe:1}),a=!1,o=this
function e(){if(o.onlyBinaryUpgrades){var e=!this.supportsBinary&&o.transport.supportsBinary
a=a||e}a||(d('probe transport "%s" opened',n),r.send([{type:"ping",data:"probe"}]),r.once("packet",function(e){if(!a)if("pong"===e.type&&"probe"===e.data){if(d('probe transport "%s" pong',n),o.upgrading=!0,o.emit("upgrading",r),!r)return
f.priorWebsocketSuccess="websocket"===r.name,d('pausing current transport "%s"',o.transport.name),o.transport.pause(function(){a||"closed"===o.readyState||(d("changing transport and sending upgrade packet"),s(),o.setTransport(r),r.send([{type:"upgrade"}]),o.emit("upgrade",r),r=null,o.upgrading=!1,o.flush())})}else{d('probe transport "%s" failed',n)
var t=new Error("probe error")
t.transport=r.name,o.emit("upgradeError",t)}}))}function i(){a||(a=!0,s(),r.close(),r=null)}function t(e){var t=new Error("probe error: "+e)
t.transport=r.name,i(),d('probe transport "%s" failed because of error: %s',n,e),o.emit("upgradeError",t)}function l(){t("transport closed")}function u(){t("socket closed")}function c(e){r&&e.name!==r.name&&(d('"%s" works - aborting "%s"',e.name,r.name),i())}function s(){r.removeListener("open",e),r.removeListener("error",t),r.removeListener("close",l),o.removeListener("close",u),o.removeListener("upgrading",c)}f.priorWebsocketSuccess=!1,r.once("open",e),r.once("error",t),r.once("close",l),this.once("close"
,u),this.once("upgrading",c),r.open()},f.prototype.onOpen=function(){if(d("socket open"),this.readyState="open",f.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){d("starting upgrade probes")
for(var e=0,t=this.upgrades.length;e<t;e++)this.probe(this.upgrades[e])}},f.prototype.onPacket=function(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(d('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data))
break
case"pong":this.setPing(),this.emit("pong")
break
case"error":var t=new Error("server error")
t.code=e.data,this.onError(t)
break
case"message":this.emit("data",e.data),this.emit("message",e.data)}else d('packet received with socket readyState "%s"',this.readyState)},f.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},
f.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer)
var t=this
t.pingTimeoutTimer=setTimeout(function(){"closed"!==t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},f.prototype.setPing=function(){var e=this
clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){d("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},f.prototype.ping=function(){var e=this
this.sendPacket("ping",function(){e.emit("ping")})},f.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),(this.prevBufferLen=0)===this.writeBuffer.length?this.emit("drain"):this.flush()},f.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(d("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},
f.prototype.write=f.prototype.send=function(e,t,n){return this.sendPacket("message",e,t,n),this},f.prototype.sendPacket=function(e,t,n,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress
var a={type:e,data:t,options:n}
this.emit("packetCreate",a),this.writeBuffer.push(a),r&&this.once("flush",r),this.flush()}},f.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing"
var e=this
this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}function t(){e.onClose("forced close"),d("socket closing - telling transport to close"),e.transport.close()}function n(){e.removeListener("upgrade",n),e.removeListener("upgradeError",n),t()}function r(){e.once("upgrade",n),e.once("upgradeError",n)}return this},f.prototype.onError=function(e){d("socket error %j",e),f.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},
f.prototype.onClose=function(e,t){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(d('socket close with reason: "%s"',e),clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)},f.prototype.filterUpgrades=function(e){for(var t=[],n=0,r=e.length;n<r;n++
)~i(this.transports,e[n])&&t.push(e[n])
return t}},function(e,t,n){"use strict"
try{e.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){e.exports=!1}},function(e,t,n){"use strict"
var a=n(10),r=n(18),o=n(0),i=n(4),l=n(5)("engine.io-client:polling-xhr")
function u(){}function c(e){if(r.call(this,e),this.requestTimeout=e.requestTimeout,this.extraHeaders=e.extraHeaders,"undefined"!=typeof location){var t="https:"===location.protocol,n=location.port
n||(n=t?443:80),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||n!==e.port,this.xs=e.secure!==t}}function s(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.requestTimeout=e.requestTimeout,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,
this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}if(e.exports=c,e.exports.Request=s,i(c,r),c.prototype.supportsBinary=!0,c.prototype.request=function(e){return(e=e||{}).uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,
e.rejectUnauthorized=this.rejectUnauthorized,e.requestTimeout=this.requestTimeout,e.extraHeaders=this.extraHeaders,new s(e)},c.prototype.doWrite=function(e,t){var n="string"!=typeof e&&void 0!==e,r=this.request({method:"POST",data:e,isBinary:n}),a=this
r.on("success",t),r.on("error",function(e){a.onError("xhr post error",e)}),this.sendXhr=r},c.prototype.doPoll=function(){l("xhr poll")
var e=this.request(),t=this
e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},o(s.prototype),s.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR}
e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized
var t=this.xhr=new a(e),n=this
try{l("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async)
try{if(this.extraHeaders)for(var r in t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&t.setRequestHeader(r,this.extraHeaders[r])}catch(e){}if("POST"===this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{t.setRequestHeader("Accept","*/*")}catch(e){}"withCredentials"in t&&(t.withCredentials=!0),this.requestTimeout&&(
t.timeout=this.requestTimeout),this.hasXDR()?(t.onload=function(){n.onLoad()},t.onerror=function(){n.onError(t.responseText)}):t.onreadystatechange=function(){if(2===t.readyState)try{var e=t.getResponseHeader("Content-Type")
n.supportsBinary&&"application/octet-stream"===e&&(t.responseType="arraybuffer")}catch(e){}4===t.readyState&&(200===t.status||1223===t.status?n.onLoad():setTimeout(function(){n.onError(t.status)},0))},l("xhr data %s",this.data),t.send(this.data)}catch(e){return void setTimeout(function(){n.onError(e)},0)}"undefined"!=typeof document&&(this.index=s.requestsCount++,s.requests[this.index]=this)},s.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},s.prototype.onData=function(e){this.emit(
"data",e),this.onSuccess()},s.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},s.prototype.cleanup=function(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=u:this.xhr.onreadystatechange=u,e)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete s.requests[this.index],this.xhr=null}},s.prototype.onLoad=function(){var e
try{var t
try{t=this.xhr.getResponseHeader("Content-Type")}catch(e){}e="application/octet-stream"===t&&this.xhr.response||this.xhr.responseText}catch(e){this.onError(e)}null!=e&&this.onData(e)},s.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},s.prototype.abort=function(){this.cleanup()},s.requestsCount=0,s.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",f)
else if("function"==typeof addEventListener){var d="onpagehide"in self?"pagehide":"unload"
addEventListener(d,f,!1)}function f(){for(var e in s.requests)s.requests.hasOwnProperty(e)&&s.requests[e].abort()}},function(e,t,n){"use strict"
e.exports=Object.keys||function(e){var t=[],n=Object.prototype.hasOwnProperty
for(var r in e)n.call(e,r)&&t.push(r)
return t}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict"
e.exports=function(e,t,n){var r=e.byteLength
if(t=t||0,n=n||r,e.slice)return e.slice(t,n)
if(t<0&&(t+=r),n<0&&(n+=r),r<n&&(n=r),r<=t||n<=t||0===r)return new ArrayBuffer(0)
for(var a=new Uint8Array(e),o=new Uint8Array(n-t),i=t,l=0;i<n;i++,l++)o[l]=a[i]
return o.buffer}},function(e,t,n){"use strict"
function i(){}e.exports=function(e,n,r){var a=!1
return r=r||i,0===(o.count=e)?n():o
function o(e,t){if(o.count<=0)throw new Error("after called too many times");--o.count,e?(a=!0,n(e),n=r):0!==o.count||a||n(null,t)}}},function(e,t,n){"use strict"
var o,i,l,u=String.fromCharCode
function c(e){for(var t,n,r=[],a=0,o=e.length;a<o;)55296<=(t=e.charCodeAt(a++))&&t<=56319&&a<o?56320==(64512&(n=e.charCodeAt(a++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),a--):r.push(t)
return r}function r(e,t){if(55296<=e&&e<=57343){if(t)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")
return!1}return!0}function a(e,t){return u(e>>t&63|128)}function s(e,t){if(0==(4294967168&e))return u(e)
var n=""
return 0==(4294965248&e)?n=u(e>>6&31|192):0==(4294901760&e)?(r(e,t)||(e=65533),n=u(e>>12&15|224),n+=a(e,6)):0==(4292870144&e)&&(n=u(e>>18&7|240),n+=a(e,12),n+=a(e,6)),n+u(63&e|128)}function d(){if(i<=l)throw Error("Invalid byte index")
var e=255&o[l]
if(l++,128==(192&e))return 63&e
throw Error("Invalid continuation byte")}function f(e){var t,n
if(i<l)throw Error("Invalid byte index")
if(l==i)return!1
if(t=255&o[l],l++,0==(128&t))return t
if(192==(224&t)){if(128<=(n=(31&t)<<6|d()))return n
throw Error("Invalid continuation byte")}if(224==(240&t)){if(2048<=(n=(15&t)<<12|d()<<6|d()))return r(n,e)?n:65533
throw Error("Invalid continuation byte")}if(240==(248&t)&&65536<=(n=(7&t)<<18|d()<<12|d()<<6|d())&&n<=1114111)return n
throw Error("Invalid UTF-8 detected")}e.exports={version:"2.1.2",encode:function(e,t){for(var n=!1!==(t=t||{}).strict,r=c(e),a=r.length,o=-1,i="";++o<a;)i+=s(r[o],n)
return i},decode:function(e,t){var n=!1!==(t=t||{}).strict
o=c(e),i=o.length,l=0
for(var r,a=[];!1!==(r=f(n));)a.push(r)
return function(e){for(var t,n=e.length,r=-1,a="";++r<n;)65535<(t=e[r])&&(a+=u((t-=65536)>>>10&1023|55296),t=56320|1023&t),a+=u(t)
return a}(a)}}},function(e,t,n){"use strict"
!function(){for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=new Uint8Array(256),e=0;e<o.length;e++)d[o.charCodeAt(e)]=e
t.encode=function(e){var t,n=new Uint8Array(e),r=n.length,a=""
for(t=0;t<r;t+=3)a+=o[n[t]>>2],a+=o[(3&n[t])<<4|n[t+1]>>4],a+=o[(15&n[t+1])<<2|n[t+2]>>6],a+=o[63&n[t+2]]
return r%3==2?a=a.substring(0,a.length-1)+"=":r%3==1&&(a=a.substring(0,a.length-2)+"=="),a},t.decode=function(e){var t,n,r,a,o,i=.75*e.length,l=e.length,u=0
"="===e[e.length-1]&&(i--,"="===e[e.length-2]&&i--)
var c=new ArrayBuffer(i),s=new Uint8Array(c)
for(t=0;t<l;t+=4)n=d[e.charCodeAt(t)],r=d[e.charCodeAt(t+1)],a=d[e.charCodeAt(t+2)],o=d[e.charCodeAt(t+3)],s[u++]=n<<2|r>>4,s[u++]=(15&r)<<4|a>>2,s[u++]=(3&a)<<6|63&o
return c}}()},function(e,t,n){"use strict"
var r=void 0!==r?r:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,a=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),o=a&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),i=r&&r.prototype.append&&r.prototype.getBlob
function l(e){return e.map(function(e){if(e.buffer instanceof ArrayBuffer){var t=e.buffer
if(e.byteLength!==t.byteLength){var n=new Uint8Array(e.byteLength)
n.set(new Uint8Array(t,e.byteOffset,e.byteLength)),t=n.buffer}return t}return e})}function u(e,t){t=t||{}
var n=new r
return l(e).forEach(function(e){n.append(e)}),t.type?n.getBlob(t.type):n.getBlob()}function c(e,t){return new Blob(l(e),t||{})}"undefined"!=typeof Blob&&(u.prototype=Blob.prototype,c.prototype=Blob.prototype),e.exports=a?o?Blob:c:i?u:void 0},function(e,u,t){"use strict"
function n(e){var r
function l(){if(l.enabled){var a=l,e=+new Date,t=e-(r||e)
a.diff=t,a.prev=r,a.curr=e,r=e
for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n]
o[0]=u.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O")
var i=0
o[0]=o[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e
i++
var n=u.formatters[t]
if("function"==typeof n){var r=o[i]
e=n.call(a,r),o.splice(i,1),i--}return e}),u.formatArgs.call(a,o),(l.log||u.log||console.log.bind(console)).apply(a,o)}}return l.namespace=e,l.enabled=u.enabled(e),l.useColors=u.useColors(),l.color=function(e){var t,n=0
for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0
return u.colors[Math.abs(n)%u.colors.length]}(e),l.destroy=a,"function"==typeof u.init&&u.init(l),u.instances.push(l),l}function a(){var e=u.instances.indexOf(this)
return-1!==e&&(u.instances.splice(e,1),!0)}(u=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},u.disable=function(){u.enable("")},u.enable=function(e){var t
u.save(e),u.names=[],u.skips=[]
var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length
for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+e.substr(1)+"$")):u.names.push(new RegExp("^"+e+"$")))
for(t=0;t<u.instances.length;t++){var a=u.instances[t]
a.enabled=u.enabled(a.namespace)}},u.enabled=function(e){if("*"===e[e.length-1])return!0
var t,n
for(t=0,n=u.skips.length;t<n;t++)if(u.skips[t].test(e))return!1
for(t=0,n=u.names.length;t<n;t++)if(u.names[t].test(e))return!0
return!1},u.humanize=t(7),u.instances=[],u.names=[],u.skips=[],u.formatters={}},function(n,e,l){"use strict";(function(r){var a=l(18),e=l(4)
n.exports=t
var o,c=/\n/g,s=/\\n/g
function i(){}function t(e){if(a.call(this,e),this.query=this.query||{},!o){var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{}
o=t.___eio=t.___eio||[]}this.index=o.length
var n=this
o.push(function(e){n.onData(e)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=i)},!1)}e(t,a),t.prototype.supportsBinary=!1,t.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),a.prototype.doClose.call(this)},t.prototype.doPoll=function(){var t=this,e=document.createElement(
"script")
this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)}
var n=document.getElementsByTagName("script")[0]
n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e,"undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent)&&setTimeout(function(){var e=document.createElement("iframe")
document.body.appendChild(e),document.body.removeChild(e)},100)},t.prototype.doWrite=function(e,t){var n=this
if(!this.form){var r,a=document.createElement("form"),o=document.createElement("textarea"),i=this.iframeId="eio_iframe_"+this.index
a.className="socketio",a.style.position="absolute",a.style.top="-1000px",a.style.left="-1000px",a.target=i,a.method="POST",a.setAttribute("accept-charset","utf-8"),o.name="d",a.appendChild(o),document.body.appendChild(a),this.form=a,this.area=o}function l(){u(),t()}function u(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(e){n.onError("jsonp polling iframe removal error",e)}try{var e='<iframe src="javascript:0" name="'+n.iframeId+'">'
r=document.createElement(e)}catch(e){(r=document.createElement("iframe")).name=n.iframeId,r.src="javascript:0"}r.id=n.iframeId,n.form.appendChild(r),n.iframe=r}this.form.action=this.uri(),u(),e=e.replace(s,"\\\n"),this.area.value=e.replace(c,"\\n")
try{this.form.submit()}catch(e){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===n.iframe.readyState&&l()}:this.iframe.onload=l}}).call(this,l(15))},function(d,e,f){"use strict";(function(i){var t,n,r=f(11),l=f(1),a=f(3),e=f(4),o=f(20),u=f(5)("engine.io-client:websocket")
if("undefined"==typeof self)try{n=f(49)}catch(e){}else t=self.WebSocket||self.MozWebSocket
var c=t||n
function s(e){e&&e.forceBase64&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,this.usingBrowserWebSocket=t&&!e.forceNode,this.protocols=e.protocols,this.usingBrowserWebSocket||(c=n),r.call(this,e)}e(d.exports=s,r),s.prototype.name="websocket",s.prototype.supportsBinary=!0,s.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate}
n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress)
try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?t?new c(e,t):new c(e):new c(e,t,n)}catch(e){return this.emit("error",e)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},s.prototype.addEventListeners=function(){var t=this
this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},s.prototype.write=function(e){var r=this
this.writable=!1
for(var a=e.length,t=0,n=a;t<n;t++)!function(n){l.encodePacket(n,r.supportsBinary,function(e){if(!r.usingBrowserWebSocket){var t={}
n.options&&(t.compress=n.options.compress),r.perMessageDeflate&&("string"==typeof e?i.byteLength(e):e.length)<r.perMessageDeflate.threshold&&(t.compress=!1)}try{r.usingBrowserWebSocket?r.ws.send(e):r.ws.send(e,t)}catch(e){u("websocket closed before onclose event")}--a||o()})}(e[t])
function o(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}},s.prototype.onClose=function(){r.prototype.onClose.call(this)},s.prototype.doClose=function(){void 0!==this.ws&&this.ws.close()},s.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",n=""
return this.port&&("wss"===t&&443!==Number(this.port)||"ws"===t&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=o()),this.supportsBinary||(e.b64=1),(e=a.encode(e)).length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+e},s.prototype.check=function(){return!(!c||"__initialize"in c&&this.name===s.prototype.name)}}).call(this,f(9).Buffer)},function(e,t){},function(e,t,n){"use strict"
e.exports=function(e,t){for(var n=[],r=(t=t||0)||0;r<e.length;r++)n[r-t]=e[r]
return n}},function(e,t,n){"use strict"
function r(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=0<e.jitter&&e.jitter<=1?e.jitter:0,this.attempts=0}(e.exports=r).prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++)
if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e)
e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(e){this.ms=e},r.prototype.setMax=function(e){this.max=e},r.prototype.setJitter=function(e){this.jitter=e}}])},e.exports=r()},rEGp:function(e,t){e.exports=function(){return[]}},rESR:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),h=r(n("q1tI")),f=a(n("17x9")),m=a(n("i6OX")),v=n("DqDi"),g=a(n("xo+i")),y=n("gSgL"),p=n("1iCU"),b=a(n("GEF2")),S=a(n("UbMB")).default.bind(b.default),w=function(e){function n(e){var t
return(0,o.default)(this,n),t=(0,l.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleBackToOrigin",function(){t.props.dispatch({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}),(0,d.default)((0,s.default)((0,s.default)(t)),"handleTabChange",function(e){t.setState({activeIndex:e})}),(0,d.default)((0,s.default)((0,s.default)(t)),"toggleMinimized",function(){var e=t.props.toolbarActiveItem
t.setState(function(e){return{isMinimized:!e.isMinimized}}),MB.event("ga","".concat(p.TOOLBAR_TRAKING_CONFIG[e],",点击了").concat(t.state.isMinimized?"展开":"收起","列表"),"运行页")}),t.state={isMinimized:MB.isUIChina()||MB.isForum(),activeIndex:0},t}return(0,c.default)(n,e),(0,i.default)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){"inspect"!==e.toolbarActiveItem&&this.setState({activeIndex:0})}},{key:"render",value:function(){var e=this.props,t=e.isDemo,n=e.project,r=e.screensCount,
a=e.toolbarActiveItem,o=e.isDisplaced,i=this.state,l=i.isMinimized,u=i.activeIndex,c=[{type:"dora",label:"".concat(I18N.preview.pages," (").concat(r,")"),icon:"file_text"},{type:"dora",label:I18N.preview.images,icon:"slice"}],s="inspect"==a&&!MB.isHTMLZip(),d=s?c:c.slice(0,1),f=S("preview-panel",{minimized:l},{"is-uichina":MB.isUIChina()||MB.isForum()}),p=S("preview-panel-nav",{"single-nav":!s})
return h.default.createElement("div",{className:S("preview-panel-wrapper"),style:{width:l?0:240}},h.default.createElement("div",{className:S("reset-btn",{"is-show":o}),onClick:this.handleBackToOrigin},I18N.click_to_origin),h.default.createElement("div",{className:f},h.default.createElement(v.NavigationBar,{tabs:d,activeIndex:u,onChange:this.handleTabChange,className:p,hideBorder:!0}),h.default.createElement("div",{className:"preview-panel-nav-line",style:{opacity:s?0:1}}),0==u?h.default.createElement(
g.default,{toolbarActiveItem:a,isDemo:t}):h.default.createElement(y.SliceContainer,{projectName:n.name}),h.default.createElement("div",{className:S("panel-toggle-minimize",{minimized:l}),onClick:this.toggleMinimized},h.default.createElement(m.default,{type:"fa",name:"angle-right",className:"toggle-icon"}))))}}]),n}(h.PureComponent)
t.default=w,(0,d.default)(w,"propTypes",{project:f.default.object.isRequired,screensCount:f.default.number.isRequired,toolbarActiveItem:f.default.string.isRequired,isLoggedIn:f.default.bool,isDisplaced:f.default.bool,isDemo:f.default.bool,dispatch:f.default.func})},rQun:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getIcon=function(e){var t=u.test(e.icon),n=(e.icon||"").replace(u,""),r=t?e.icon.split("-")[0]:"fa",a="".concat("mb"===r?"icon":r,"-").concat(n),o="".concat(r," ").concat(a),i={fontSize:"".concat(e.is,"px")}
return l.default.createElement("span",{className:"icon ".concat(o),style:i},"md"===r?n:null)}
var l=r(n("q1tI")),u=/^(fa|md|mb|ci)-/},rXnp:function(e,t,n){},rbsZ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.openRenewModal=t.getRenewMessage=t.goToPricingPage=void 0
var o=r(n("q1tI")),a=r(n("17x9")),i=r(n("/Q2I")),l=r(n("0L8M"))
n("1mjR")
var u=window,d=u.MB,f=u.I18N,c=function(){return window.open("/pricing?next=".concat(location.href))}
t.goToPricingPage=c
var s=function(e){var t=e.reason,n=e.data,r=e.shouldShowConfirm,a=e.onClose
return o.default.createElement(i.default,{isOpen:!0,className:"renew-modal",title:f.renew_prompt.title,onConfirm:r?c:null,confirmText:r?f.renew_now:null,canConfirm:!0,onClose:a},o.default.createElement("p",null,p(t,n)))}
s.propTypes={reason:a.default.string,data:a.default.object,shouldShowConfirm:a.default.bool,onClose:a.default.func}
var p=function(e,t){var n=t.role,r=t.plan,a=void 0===r?d.currentProject&&d.currentProject.owner_plan||d.user&&d.user.current_plan:r,o=t.storage,i=void 0===o?"":o,l=t.format,u=void 0===l?"":l,c=t.collaborators,s=void 0===c?"":c
return(f.renew_prompt["".concat(n,"_plan")]+f.renew_prompt[e]+f.renew_prompt["".concat(n,"_upgrade")]).replace("{plan}",f[a]).replace("{storage}",i).replace("{format}",u).replace("{collaborators}",s)}
t.getRenewMessage=p
t.openRenewModal=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
window.ga&&window.ga("ec:setAction","checkout",{step:1,option:e}),window.ga&&window.ga("send","event","goal","弹出了续费提示"),(0,l.default)(s,{reason:e,data:t,shouldShowConfirm:"user"===t.role})}},rtgd:function(e,t,n){e.exports={"preview-toolbar":"_2GvcxT6MMVgPVqZ4pTagSW"}},rwIS:function(e,t,n){e.exports={"guide-button":"_30xMHfnBUgdhrZI7AsHGRs"}},sEfC:function(e,t,n){var y=n("GoyQ"),b=n("QIyF"),S=n("tLB3"),w=Math.max,C=Math.min
e.exports=function(r,a,e){var o,i,l,u,c,s,d=0,f=!1,p=!1,t=!0
if("function"!=typeof r)throw new TypeError("Expected a function")
function h(e){var t=o,n=i
return o=i=void 0,d=e,u=r.apply(n,t)}function m(e){var t=e-s
return void 0===s||a<=t||t<0||p&&l<=e-d}function v(){var e,t,n=b()
if(m(n))return g(n)
c=setTimeout(v,(t=a-((e=n)-s),p?C(t,l-(e-d)):t))}function g(e){return c=void 0,t&&o?h(e):(o=i=void 0,u)}function n(){var e,t=b(),n=m(t)
if(o=arguments,i=this,s=t,n){if(void 0===c)return d=e=s,c=setTimeout(v,a),f?h(e):u
if(p)return c=setTimeout(v,a),h(s)}return void 0===c&&(c=setTimeout(v,a)),u}return a=S(a)||0,y(e)&&(f=!!e.leading,l=(p="maxWait"in e)?w(S(e.maxWait)||0,a):l,t="trailing"in e?!!e.trailing:t),n.cancel=function(){void 0!==c&&clearTimeout(c),o=s=i=c=void(d=0)},n.flush=function(){return void 0===c?u:g(b())},n}},seXi:function(e,t,n){var b=n("qZTm"),S=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,r,a,o){var i=1&n,l=b(e),u=l.length
if(u!=b(t).length&&!i)return!1
for(var c=u;c--;){var s=l[c]
if(!(i?s in t:S.call(t,s)))return!1}var d=o.get(e)
if(d&&o.get(t))return d==t
var f=!0
o.set(e,t),o.set(t,e)
for(var p=i;++c<u;){var h=e[s=l[c]],m=t[s]
if(r)var v=i?r(m,h,s,t,e,o):r(h,m,s,e,t,o)
if(!(void 0===v?h===m||a(h,m,n,r,o):v)){f=!1
break}p||(p="constructor"==s)}if(f&&!p){var g=e.constructor,y=t.constructor
g!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(f=!1)}return o.delete(e),o.delete(t),f}},sgoq:function(e,t,n){var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g")
e.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},sxGJ:function(e,t,n){var r
r=function(){return function(n){var r={}
function a(e){if(r[e])return r[e].exports
var t=r[e]={i:e,l:!1,exports:{}}
return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r))
return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,n){"use strict"
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=r(n(1)),l=r(n(3)),u=r(n(4))
function r(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function r(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this))
return n.resolveOptions(t),n.listenClick(e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,l.default),o(r,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===a(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this
this.listener=(0,u.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget
this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return s("action",e)}},{key:"defaultTarget",value:function(e){var t=s("target",e)
if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return s("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported
return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),r}()
function s(e,t){var n="data-clipboard-"+e
if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=c},function(e,t,n){"use strict"
var r,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=n(2),l=(r=i)&&r.__esModule?r:{default:r}
var u=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir")
this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px"
var n=window.pageYOffset||document.documentElement.scrollTop
this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,l.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){
this.selectedText=(0,l.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0
try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy"
if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element')
if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
this._target=e}},get:function(){return this._target}}]),t}()
e.exports=u},function(e,t){e.exports=function(e){var t
if("SELECT"===e.nodeName)e.focus(),t=e.value
else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly")
n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus()
var r=window.getSelection(),a=document.createRange()
a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={})
return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this
function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t)
return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[]
if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o])
return a.length?n[e]=a:delete n[e],this}},e.exports=n},function(e,t,n){var f=n(5),p=n(6)
e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments")
if(!f.string(t))throw new TypeError("Second argument must be a String")
if(!f.fn(n))throw new TypeError("Third argument must be a Function")
if(f.node(e))return s=t,d=n,(c=e).addEventListener(s,d),{destroy:function(){c.removeEventListener(s,d)}}
if(f.nodeList(e))return i=e,l=t,u=n,Array.prototype.forEach.call(i,function(e){e.addEventListener(l,u)}),{destroy:function(){Array.prototype.forEach.call(i,function(e){e.removeEventListener(l,u)})}}
if(f.string(e))return r=e,a=t,o=n,p(document.body,r,a,o)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
var r,a,o,i,l,u,c,s,d}},function(e,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e)
return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var i=n(7)
function o(e,t,n,r,a){var o=function(t,n,e,r){return function(e){e.delegateTarget=i(e.target,n),e.delegateTarget&&r.call(t,e)}}.apply(this,arguments)
return e.addEventListener(n,o,a),{destroy:function(){e.removeEventListener(n,o,a)}}}e.exports=function(e,t,n,r,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,r,a)}))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype
n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e
e=e.parentNode}}}])},e.exports=r()},"t5S/":function(e,t,n){var N=n("87hQ"),I=n("RNpe"),O=n("kUAk"),R=n("/MKq")
function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function r(l){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=l.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var a,o=(a=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,l
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.element,r=t.width,a=t.height,o=t.skipHeavyRender,i=void 0!==o&&o,n){e.next=3
break}throw new Error("invalid element: ".concat(n))
case 3:if(r=parseInt(r||n.style.width.endsWith("px")&&n.style.width||n.offsetWidth),a=parseInt(a||n.style.height.endsWith("px")&&n.style.height||n.offsetHeight),r&&a){e.next=7
break}throw new Error("can not get output size: width: ".concat(r,", height: ").concat(a))
case 7:return l=(new window.XMLSerializer).serializeToString(n).split("\n"),e.abrupt("return",c({htmlSourceList:l,width:r,height:a,skipHeavyRender:i}))
case 10:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})
t.createSnapshotFromElement=o
var i,c=(i=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,l,u,c,s,d,f,p,h,m,v,g,y,b,S,w,C,E,k,_,x,T,M
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.htmlSourceList,r=t.width,a=t.height,o=t.skipHeavyRender,i=void 0!==o&&o,Array.isArray(n)){e.next=3
break}throw new Error("invalid htmlSourceList: ".concat(n))
case 3:if(r&&a){e.next=5
break}throw new Error("invalid size: width: ".concat(r,", height: ").concat(a))
case 5:l=(0,O.createHTMLFragCollector)(),n.forEach(function(e){return l.collect(e,"")}),u=(0,O.createCSSFragCollector)(),c=Array.from(document.getElementsByTagName("link")).map(function(e){return"stylesheet"===e.rel&&e.href}).filter(function(e){return e}),d=!(s=!0),f=void 0,e.prev=12,p=c[Symbol.iterator]()
case 14:if(s=(h=p.next()).done){e.next=25
break}return m=h.value,e.t0=u,e.next=19,(0,N.fetchTextWithCache)(m)
case 19:e.t1=e.sent,e.t2=m,e.t0.collect.call(e.t0,e.t1,e.t2)
case 22:s=!0,e.next=14
break
case 25:e.next=31
break
case 27:e.prev=27,e.t3=e.catch(12),d=!0,f=e.t3
case 31:e.prev=31,e.prev=32,s||null==p.return||p.return()
case 34:if(e.prev=34,d)throw f
e.next=37
break
case 37:return e.finish(34)
case 38:return e.finish(31)
case 39:return Array.from(document.getElementsByTagName("style")).map(function(e){return u.collect(A(e),"")}),v=l.getOutput(),g=u.getOutput(),y=new Set([].concat(P(v.fontInfo.fontFamilySet),P(g.fontInfo.fontFamilySet))),Object.entries(Object.assign({},v.fontInfo.fontFaceMap,g.fontInfo.fontFaceMap)).forEach(function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),a=r[0],o=r[1]
if(!y.has(a.split("|")[0]))return o.forEach(function(e){e.isIgnore=!0})
var i=null,l=null
o.forEach(function(e){i=i||(e.urlString.includes("woff2")?e:null),l=l||(e.urlString.includes("woff")?e:null)})
var u=!1
o.forEach(function(e){i&&e!==i?e.isIgnore=!0:l&&e!==l?e.isIgnore=!0:(e.isIgnore=u,u=!0)})}),T=function(){return{htmlString:b,cssString:S,domString:w,svgString:C,svgDataUrl:E,imageElement:k,canvasElement:_,pngDataUrl:x}},e.prev=46,e.t4=R.prepareHTMLString,e.next=50,(0,I.convertFragListWithUrlMap)(v)
case 50:return e.t5=e.sent,e.next=53,(0,e.t4)(e.t5)
case 53:return b=e.sent,e.t6=R.prepareCSSString,e.next=57,(0,I.convertFragListWithUrlMap)(g)
case 57:return e.t7=e.sent,e.next=60,(0,e.t6)(e.t7)
case 60:return S=e.sent,w="".concat(S,"\n").concat(b),e.next=64,(0,R.prepareSVGString)({domString:w,width:r,height:a})
case 64:if(C=e.sent,E="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(C)),i){e.next=73
break}return e.next=69,j({svgDataUrl:E,width:r,height:a})
case 69:M=e.sent,k=M.imageElement,_=M.canvasElement,x=M.pngDataUrl
case 73:e.next=78
break
case 75:e.prev=75,e.t8=e.catch(46)
case 78:return e.abrupt("return",T())
case 79:case"end":return e.stop()}},e,this,[[12,27,31,39],[32,,34,38],[46,75]])})),function(e){return i.apply(this,arguments)})
t.createSnapshotFromHTMLSourceList=c
var l,A=function(e){var t=e.innerHTML
if(0!==t.length)return t
for(var n=[],r=e.sheet.cssRules,a=0,o=r.length;a<o;a++){var i=r[a].cssText
n.push(i)}return n.join("\n")},j=(l=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,l
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.svgDataUrl,r=t.width,a=t.height,e.next=3,(0,R.prepareImageElement)({svgDataUrl:n,width:r,height:a})
case 3:return o=e.sent,e.next=6,(0,R.prepareCanvasElement)({imageElement:o,width:r,height:a})
case 6:return i=e.sent,l=i.toDataURL(),e.abrupt("return",{imageElement:o,canvasElement:i,pngDataUrl:l})
case 9:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)})
t.renderPngDataUrlFromSvgDataUrl=j},t77w:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getNewParasAfterSetPlainText=t.decompressRichText=t.compressRichText=t.getAutoHeight=t.getAutoSize=t.getFontFamilyDependOnDevice=void 0
var a=r(n("MVZn")),o=n("G3NE"),i=n("yUqi"),l=n("Clcl"),u=n("j+XH"),c=/modao.cc/.test(window.MBServer)?function(e){return u.WESTERN_ONLY_FONT_LIST.includes(e)?"".concat(e,", ").concat(u.PLATFORM_DEFAULT_FONT["zh-CN"][MB.currentProject.device],", sans-serif"):"".concat(e,", sans-serif")}:function(e){return e}
t.getFontFamilyDependOnDevice=c
t.getAutoSize=function(e){return"rich_text"===e.name?{width:e.initialWidth(o.getHTML),height:e.initialHeight(o.getHTML)}:{width:e.width,height:e.height}}
t.getAutoHeight=function(e){return"rich_text"===e.name?e.autoHeightForFixedWidth(o.getHTML):e.height}
var s=function(e){return"rich_text"===e.name}
t.compressRichText=function(t){if(!s(t))return t
var n=(0,a.default)({},t,{text:(0,i.compress)(t.text)})
try{JSON.parse(d(n).text)}catch(e){(0,l.REPORT_ERROR)(e,t.cid,t.text,n.text,d(n).text)}return n}
var d=function(e){return s(e)?(0,a.default)({},e,{text:(0,i.decompress)(e.text)}):e}
t.decompressRichText=d
t.getNewParasAfterSetPlainText=function(e,t){var n=(0,a.default)({},e[0],{children:void 0}),r=(0,a.default)({},e[0].children[0],{text:void 0})
return t.map(function(e){return(0,a.default)({},n,{children:[(0,a.default)({},r,{text:e})]})})}},tBsX:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"saga",{enumerable:!0,get:function(){return u.default}}),t.reducers=t.default=void 0
var a=r(n("MVZn")),o=n("ANjH"),i=n("/MKj"),l=r(n("xx4x")),u=r(n("7bR1")),c=r(n("eNKG")),s=r(n("ee4a")),d=n("Kkl0"),f=(0,o.combineReducers)((0,a.default)({},c.default,s.default))
t.reducers=f
var p=(0,i.connect)(function(e){var t=e.container,n=t.layers,r=t.common.keyFlags.isSpaceDown,a=t.previewSetting,o=a.toolbarActiveItem,i=a.isSelectLayer,l=a.isShowColorPicker,u=n.activeLayerID,c=n.resourceByScreen[n.visibilityScreenID]||{},s=c.isFetching,d=void 0===s||s,f=c.error
return{isActive:"inspect"==o,isSpaceDown:r,isSelectLayer:i,isShowColorPicker:l,isFetching:d,activeLayerID:u,error:void 0===f?"":f}},function(t){return{requestSelectLayer:function(e){t((0,d.requestSelectLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(l.default)
t.default=p},tCwF:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=r(n("q1tI")),d=a(n("17x9")),f=n("i6OX"),p=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.stretchToFill,r=t.filter,a=t.backgroundColor,o=this.props.src||""
if(["a","i"].includes(o[0])&&-1===o.indexOf("images")){var i=Asset.find(o)||UserAsset.find(o)||OrgAsset.find(o)
i&&(i.raw||i.image)&&(e="".concat(i.image||i.raw))}else e=o
var l={display:e?"none":"flex",backgroundColor:a},u={display:e?"block":"none",height:n?"100%":"auto",filter:r.trim()}
return s.default.createElement("div",{className:"image-wrapper"},s.default.createElement("span",{style:l},s.default.createElement(f.SVGIcon,{name:"imageView",style:{width:24,height:22}})),s.default.createElement("div",{className:"wrapper"},s.default.createElement("img",{src:e,draggable:!1,style:u})))}}]),t}(s.PureComponent);(t.default=p).defaultProps={stretchToFill:!1,filter:"",backgroundColor:"#e8e8e8"},p.propTypes={src:d.default.string,stretchToFill:d.default.bool,filter:d.default.string,
backgroundColor:d.default.string}},tLB3:function(e,t){e.exports=function(e){return e}},ta7q:function(e,t,n){"use strict"
n.r(t)
var a,o,r=0,i=0,l=0,u=1e3,c=0,s=0,d=0,f="object"==typeof performance&&performance.now?performance:Date,p="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)}
function h(){return s||(p(m),s=f.now()+d)}function m(){s=0}function v(){this._call=this._time=this._next=null}function g(e,t,n){var r=new v
return r.restart(e,t,n),r}function y(){h(),++r
for(var e,t=a;t;)0<=(e=s-t._time)&&t._call.call(null,e),t=t._next;--r}function b(){s=(c=f.now())+d,r=i=0
try{y()}finally{r=0,function(){var e,t,n=a,r=1/0
for(;n;)n=n._call?(r>n._time&&(r=n._time),(e=n)._next):(t=n._next,n._next=null,e?e._next=t:a=t)
o=e,w(r)}(),s=0}}function S(){var e=f.now(),t=e-c
u<t&&(d-=t,c=e)}function w(e){r||(i&&(i=clearTimeout(i)),24<e-s?(e<1/0&&(i=setTimeout(b,e-f.now()-d)),l&&(l=clearInterval(l))):(l||(c=f.now(),l=setInterval(S,u)),r=1,p(b)))}v.prototype=g.prototype={constructor:v,restart:function(e,t,n){if("function"!=typeof e)throw new TypeError("callback is not a function")
n=(null==n?h():+n)+(null==t?0:+t),this._next||o===this||(o?o._next=this:a=this,o=this),this._call=e,this._time=n,w()},stop:function(){this._call&&(this._call=null,this._time=1/0,w())}}
var C=function(t,n,e){var r=new v
return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},E=function(n,r,a){var o=new v,i=r
return null==r?o.restart(n,r,a):(r=+r,a=null==a?h():+a,o.restart(function e(t){t+=i,o.restart(e,i+=r,a),n(t)},r,a)),o}
n.d(t,"now",function(){return h}),n.d(t,"timer",function(){return g}),n.d(t,"timerFlush",function(){return y}),n.d(t,"timeout",function(){return C}),n.d(t,"interval",function(){return E})},tajm:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.patchGlobalAutoSaverPusher=void 0
var p=r(n("o0o1")),h=r(n("yXPU")),m=n("Vk5q"),v=n("iKZC"),g=n("os03"),y=n("ycqN"),b=n("3caq"),S=n("Clcl"),w=window.MB
t.patchGlobalAutoSaverPusher=function(){var n,t,e=(0,v.createAutoSaveQueue)({delay:2e4,onError:(t=(0,h.default)(p.default.mark(function e(t){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,S.REPORT_ERROR)(t,"[AutoSaveQueue] unhandled error",a()),e.next=3,(0,y.SAVE_NUKE_SEQUENCE)(t,t.status)
case 3:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)}),doSave:(n=(0,h.default)(p.default.mark(function e(t,n){var r
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.processSaveQueue)(t),e.next=3,(0,v.doSaveWithSocketAndFallback)({setSavingState:n,getAutoSaveQueueState:a,saveChunkList:(0,g.arraySplitChunk)(r,64),saveQueueLength:r.length,getSaveItemInfo:m.getSaveItemInfo,isSocketAvailable:function(){return w.Pusher.getIsOpen()},doSocketBatchSave:m.doSocketBatchSave,onSocketError:m.onSocketError,doFallbackSaveItem:m.doFallbackSaveItem,onFallbackError:m.onFallbackError})
case 3:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})}),a=e.getState,r=e.getIsEmpty,o=e.getIsSaving,i=e.getDelay,l=e.setDelay,u=e.add,c=e.addEventListener,s=e.filterSaveQueue,d=e.triggerSave,f=e.afterCurrentSave
c("beforesave",function(){w.setSaving&&w.setSaving(!0)}),c("aftersave",function(){w.currentProject&&(w.currentProject.timestamp=String(.001*Date.now()),w.currentProject.updated_at=(new Date).toISOString(),w.currentProject.lsave(!1)),w.setSaving&&w.setSaving(!1),w.refreshCoWorkers&&w.refreshCoWorkers()}),w.Pusher=(0,b.createWorkspacePusher)({filterStaleData:function(i){var l=new Set,u=[]
return s(function(e){var t=e.record,n=t.cid,r=t.mtime,a=i[n],o=!a||a<r
return o?l.add(n):u.push(e),o}),{remoteStaleCidSet:l,localStaleDataList:u}}}),w.AutoSaver={getState:a,getIsEmpty:r,getIsSaving:o,getDelay:i,setDelay:l,triggerSave:d,afterCurrentSave:f,add:function(e){var t=e.record,n=e.isDelete,r=void 0!==n&&n
t.mtime=w.Pusher.getServerTimestamp(),u({record:t,isDelete:r})}},(0,y.PATCH_AUTO_SAVE_RELATED)()}},tfo6:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("J4zp")),l=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=a(n("17x9")),h=r(n("q1tI")),m=a(n("M8nv")),v=a(n("lwmc")),g=function(e){function t(e){var o
return(0,l.default)(this,t),o=(0,u.default)(this,(0,c.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(o)),"handleExpand",function(e,t){e.stopPropagation()
var n=o.state.collapseKeySet,r=t.cid,a=new Set(n)
n.has(r)?a.delete(r):a.add(r),o.setState({collapseKeySet:a})}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleActivate",function(e,t){var n=o.props,r=n.activeCid,a=n.dispatch
e.stopPropagation(),r===t.cid?o.handleExpand(e,t):(a({type:"entry:sync-runner:set-screen",payload:{cid:t.cid}}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}))}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleKeyDown",function(e){(e.ctrlKey||e.metaKey)&&(186==e.keyCode&&(e.preventDefault(),o.resetExpandAll()),222==e.keyCode&&(e.preventDefault(),o.closeExpanedAll()))}),(0,f.default)((0,d.default)((0,d.default)(o)),"resetExpandAll",function(){o.setState({collapseKeySet:new Set})}),(0,
f.default)((0,d.default)((0,d.default)(o)),"closeExpanedAll",function(){var e=(o.props.screenTreeData||{}).childListMap,a=new Set
Object.entries(e).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
Array.isArray(r)&&r.length&&a.add(n)}),o.setState({collapseKeySet:a})}),o.state={collapseKeySet:new Set},o.treeProps={renderItem:e.renderCommentIcon,handleScreenItemActions:{handleExpand:o.handleExpand,handleActivate:o.handleActivate}},o}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidUpdate",value:function(e){if(e.activeCid!==this.props.activeCid){var t=Screen.find(this.props.activeCid)
if(t.parent_cid){var n=this.state.collapseKeySet,r=new Set(n)
n.has(t.parent_cid)&&r.delete(t.parent_cid),this.setState({collapseKeySet:r})}}}},{key:"render",value:function(){var e=this.props,t=e.activeCid,n=e.isSearching,r=e.screenTreeMap,a=e.screenDataMap
return h.default.createElement(h.default.Fragment,null,h.default.createElement(v.default,{collapseKeySet:this.state.collapseKeySet,activeCid:t,isSearching:n,screenTreeMap:r,screenDataMap:a,treeProps:this.treeProps}),h.default.createElement(m.default,{onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{activeCid:p.default.string,isSearching:p.default.bool,screenTreeData:p.default.object,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},tiHd:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createAsyncTaskQueue=t.createInsideOutPromise=t.createMinStateStore=void 0
var a=r(n("MVZn"))
t.createMinStateStore=function(t){return{getState:function(){return t},setState:function(e){return t=(0,a.default)({},t,e)}}}
var u=function(){var n=null,r=null
return{promise:new Promise(function(e,t){n=e,r=t}),resolve:function(){n&&n.apply(void 0,arguments),r=n=null},reject:function(){r&&r.apply(void 0,arguments),r=n=null}}}
t.createInsideOutPromise=u
t.createAsyncTaskQueue=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(e){},i=new Set,l=Promise.resolve("QUEUE_HEAD")
return{pushTask:function(e){var t=u(),n=t.promise,r=t.resolve,a=t.reject
return l=l.then(function(){return Promise.resolve(e()).then(r,a).catch(o).then(function(){return i.delete(e)})}),i.add(e),n},resetTaskQueue:function(){i=new Set,l=Promise.resolve("QUEUE_HEAD")},getTaskQueueSize:function(){return i.size}}}},tpxX:function(e,t,n){var r=n("jl5L")("round")
e.exports=r},tw9P:function(e,t,n){"use strict"
n.d(t,"i",function(){return C}),n.d(t,"s",function(){return E}),n.d(t,"t",function(){return k}),n.d(t,"n",function(){return _}),n.d(t,"b",function(){return x}),n.d(t,"o",function(){return T}),n.d(t,"e",function(){return N}),n.d(t,"c",function(){return I}),n.d(t,"h",function(){return O}),n.d(t,"k",function(){return R}),n.d(t,"r",function(){return P}),n.d(t,"m",function(){return A}),n.d(t,"f",function(){return j}),n.d(t,"p",function(){return L}),n.d(t,"a",function(){return D}),n.d(t,"g",function(){return B}),
n.d(t,"j",function(){return F}),n.d(t,"l",function(){return U}),n.d(t,"q",function(){return W}),n.d(t,"d",function(){return z})
var i=n("Ev6p"),r=Object(i.x)("IO"),a="TAKE",o="PUT",l="ALL",u="RACE",c="CALL",s="CPS",d="FORK",f="JOIN",p="CANCEL",h="SELECT",m="ACTION_CHANNEL",v="CANCELLED",g="FLUSH",y="GET_CONTEXT",b="SET_CONTEXT",S="\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",w=function(e,t){var n
return(n={})[r]=!0,n[e]=t,n},C=function(e){return Object(i.h)(z.fork(e),i.q.object,"detach(eff): argument must be a fork effect"),e[d].detached=!0,e}
function E(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"*"
if(arguments.length&&Object(i.h)(arguments[0],i.q.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),i.q.pattern(e))return w(a,{pattern:e})
if(i.q.channel(e))return w(a,{channel:e})
throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}E.maybe=function(){var e=E.apply(void 0,arguments)
return e[a].maybe=!0,e}
var k=Object(i.n)(E.maybe,Object(i.z)("takem","take.maybe"))
function _(e,t){return 1<arguments.length?(Object(i.h)(e,i.q.notUndef,"put(channel, action): argument channel is undefined"),Object(i.h)(e,i.q.channel,"put(channel, action): argument "+e+" is not a valid channel"),Object(i.h)(t,i.q.notUndef,"put(channel, action): argument action is undefined")):(Object(i.h)(e,i.q.notUndef,"put(action): argument action is undefined"),t=e,e=null),w(o,{channel:e,action:t})}function x(e){return w(l,e)}function T(e){return w(u,e)}function M(e,t,n){Object(i.h)(t,i.q.notUndef,
e+": argument fn is undefined")
var r=null
if(i.q.array(t)){var a=t
r=a[0],t=a[1]}else if(t.fn){var o=t
r=o.context,t=o.fn}return r&&i.q.string(t)&&i.q.func(r[t])&&(t=r[t]),Object(i.h)(t,i.q.func,e+": argument "+t+" is not a function"),{context:r,fn:t,args:n}}function N(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return w(c,M("call",e,n))}function I(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[]
return w(c,M("apply",{context:e,fn:t},n))}function O(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return w(s,M("cps",e,n))}function R(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return w(d,M("fork",e,n))}function P(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return C(R.apply(void 0,[e].concat(n)))}function A(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(1<t.length)return x(t.map(function(e){return A(e)}))
var r=t[0]
return Object(i.h)(r,i.q.notUndef,"join(task): argument task is undefined"),Object(i.h)(r,i.q.task,"join(task): argument "+r+" is not a valid Task object "+S),w(f,r)}function j(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(1<t.length)return x(t.map(function(e){return j(e)}))
var r=t[0]
return 1===t.length&&(Object(i.h)(r,i.q.notUndef,"cancel(task): argument task is undefined"),Object(i.h)(r,i.q.task,"cancel(task): argument "+r+" is not a valid Task object "+S)),w(p,r||i.d)}function L(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return 0===arguments.length?e=i.o:(Object(i.h)(e,i.q.notUndef,"select(selector,[...]): argument selector is undefined"),Object(i.h)(e,i.q.func,"select(selector,[...]): argument "+e+" is not a function")),w(h,{selector:e,args:n})}function D(e,t){return Object(i.h)(e,i.q.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),1<arguments.length&&(Object(i.h)(t,i.q.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),Object(i.h)(t,i.q.buffer,
"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),w(m,{pattern:e,buffer:t})}function B(){return w(v,{})}function F(e){return Object(i.h)(e,i.q.channel,"flush(channel): argument "+e+" is not valid channel"),w(g,e)}function U(e){return Object(i.h)(e,i.q.string,"getContext(prop): argument "+e+" is not a string"),w(y,e)}function W(e){return Object(i.h)(e,i.q.object,Object(i.k)(null,e)),w(b,e)}_.resolve=function(){var e=_.apply(void 0,arguments)
return e[o].resolve=!0,e},_.sync=Object(i.n)(_.resolve,Object(i.z)("put.sync","put.resolve"))
var q=function(t){return function(e){return e&&e[r]&&e[t]}},z={take:q(a),put:q(o),all:q(l),race:q(u),call:q(c),cps:q(s),fork:q(d),join:q(f),cancel:q(p),select:q(h),actionChannel:q(m),cancelled:q(v),flush:q(g),getContext:q(y),setContext:q(b)}},u6S6:function(e,t,n){var r=n("6acW"),a=n("sgoq")(function(e,t,n){return t=t.toLowerCase(),e+(n?r(t):t)})
e.exports=a},uW4e:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.CommentThread,o=(0,r.createStateStore)([]),i=o.getState,l=o.setState,u=o.wrapEntry,c=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:comment-threads:update",payload:o(e,a,i)})})},s={entryMap:{"comment-threads:refresh":c(a.refreshStateList,!1),"comment-threads:save":c(a.saveState,!1),"comment-threads:add":c(a.addState,!1),"comment-threads:add-local":c(a.addState,!0),"comment-threads:update":c(a.updateState,!1),"comment-threads:update-local":c(a.updateState,!0),"comment-threads:delete":c(a.deleteState,!1),"comment-threads:delete-local":c(a.deleteState,!0)},getState:i,setState:l}
t.default=s},uavl:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getWidgetContent=function(e,t){switch(e.name){case"rich_text":return m.default.createElement(k,{widget:e})
case"text_field":case"nav_bar":case"navigation_bar":return m.default.createElement(_,{widget:e})
case"mtext_input":return m.default.createElement(x,{widget:e})
case"mtextarea":return m.default.createElement(T,{widget:e})
case"mcheckbox2":return m.default.createElement(M,{widget:e})
case"mfile_input":return m.default.createElement(N,{widget:e})
case"mradiobutton":return m.default.createElement(I,{widget:e})
case"mselect":return m.default.createElement(O,{widget:e})
case"button":return m.default.createElement(R,{widget:e})
case"hr":return m.default.createElement(P,{widget:e})
case"line":return m.default.createElement(A,{widget:e})
case"ve":return m.default.createElement(j,{widget:e})
case"triangleb":return m.default.createElement(L,{widget:e})
case"triangletl":return m.default.createElement(D,{widget:e})
case"lr":case"tab_bar":case"rectangle":return m.default.createElement(B,{widget:e})
case"image_view":return m.default.createElement(W,{widget:e})
case"carousel":return m.default.createElement(q,{widget:e,isPreview:!!t})
case"webpage":return m.default.createElement(F,{widget:e,isPreview:t})
case"video_view":return m.default.createElement(U,{widget:e})
case"keyboard":return m.default.createElement(z,{widget:e})
case"iphone_keyboard":return m.default.createElement(H,{widget:e})
case"ipad_keyboard":return m.default.createElement(Y,{widget:e})
case"android_keyboard":return m.default.createElement(V,{widget:e})
case"map_view":return m.default.createElement(J,{widget:e})
case"search_bar":return m.default.createElement(X,{widget:e})
case"status_bar":return m.default.createElement(G,{widget:e})
case"ios_status_bar":return m.default.createElement(Z,{widget:e})
case"iphone_x_status_bar":return m.default.createElement(K,{widget:e})
case"android_status_bar":return m.default.createElement(Q,{widget:e})
case"switch":case"ios_switch":return m.default.createElement($,{widget:e})
case"android_switch":return m.default.createElement(ee,{widget:e})
case"ios_check":return m.default.createElement(te,{widget:e})
case"android_check":return m.default.createElement(ne,{widget:e})
case"android_radio":return m.default.createElement(re,{widget:e})
case"tab_item":return m.default.createElement(ae,{widget:e})
case"pg":return m.default.createElement(oe,{widget:e})
case"icon_button":return m.default.createElement(ie,{widget:e})
case"label":return m.default.createElement(le,{widget:e})
case"circle_rect":case"rounded_rect":case"text_view":return m.default.createElement(ue,{widget:e})
case"sticky":return m.default.createElement(ce,{widget:e})
case"mtooltip":return m.default.createElement(se,{widget:e})
default:return null}}
var c=a(n("MVZn")),s=a(n("J4zp")),i=a(n("PJYZ")),d=a(n("lSNA")),l=a(n("lwsE")),u=a(n("W8MJ")),f=a(n("a1gu")),p=a(n("Nsbk")),h=a(n("7W2i")),m=r(n("q1tI")),v=a(n("RcoH")),o=n("G3NE"),g=a(n("TSYQ")),y=r(n("m/km")),b=n("i6OX"),S=a(n("tCwF")),w=n("zQyp"),C=n("rQun")
var E=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(m.PureComponent),k=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=JSON.parse(e.text)
return m.default.createElement("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:(0,o.getHTML)(t)}})}}]),t}(E),_=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("span",{className:"text"},e.text)}}]),t}(E),x=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("input",{type:e.input_type,placeholder:e.text})}}]),t}(E),T=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=Math.round(e.padding),n=Math.round(t-(e.lh-e.fs)/2)
n<0&&(n=0)
var r={padding:"".concat(n,"px ").concat(t,"px")}
return m.default.createElement("textarea",{style:r,placeholder:e.text})}}]),t}(E),M=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("input",{type:"checkbox",checked:e.checked})}}]),t}(E),N=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("input",{type:"file"})}}]),t}(E),I=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",
value:function(){var e=this.props.widget
return m.default.createElement("input",{type:"radio",name:e.gid,checked:e.checked})}}]),t}(E),O=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("select",null,e.text.split(/\n/).map(function(e,t){return m.default.createElement("option",{key:e+t},e)}))}}]),t}(E),R=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"button-wrapper"},e.icon?(0,C.getIcon)(e):null,m.default.createElement("span",{className:"text"},e.text))}}]),t}(E),P=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.h()-10
return e<1&&(e=1),m.default.createElement("span",{style:{borderTopWidth:e}})}}]),t}(E),A=function(e){function o(){var e,t;(0,l.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,d.default)((0,i.default)((0,i.default)(t)),"getStrokeDashArray",function(e){return 0==e?"":1==e?"2 2":2==e?"6 2":void 0}),(0,d.default)((0,i.default)((0,i.default)(t)),"getStrokePath",function(e,t,n){var r=(0,s.default)(n[0].point,2),a=r[0],o=r[1],i=(0,s.default)(n[1].point,2),l=[e*a,t*o],u=[e*i[0],t*i[1]]
return"M ".concat(l[0]," ").concat(l[1]," L ").concat(u[0]," ").concat(u[1])}),(0,d.default)((0,i.default)((0,i.default)(t)),"genDropShadow",function(e){var t=(0,s.default)(e,6),n=t[1],r=t[2],a=t[3],o=t[5]
return"drop-shadow(".concat(n,"px ").concat(r,"px ").concat(a,"px ").concat(o,")")}),t}return(0,h.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e,t=this.props.widget,n=t.width,r=t.height,a=t.bs,o=t.bc,i=t.ls,l=t.points,u=t.box_shadow
if(u){var c=JSON.parse(u)[0]
e=this.genDropShadow(c)}var s=JSON.parse(l),d=this.getStrokePath(n,r,s),f=this.getStrokeDashArray(i)
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible",filter:e||"none"}},m.default.createElement("path",{d:d,stroke:o,strokeWidth:a,strokeDasharray:f}),m.default.createElement("path",{d:d,stroke:"transparent",strokeWidth:"10",style:{pointerEvents:"auto"}}))}}]),o}(E),j=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){
var e=this.props.widget.w()-10
return e<1&&(e=1),m.default.createElement("span",{style:{borderLeftWidth:e}})}}]),t}(E),L=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t="M "+[[e.width/2,0],[e.width,e.height],[0,e.height]].map(function(e){return e.join(" ")}).join(" L ")+" Z"
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:t}))}}]),t}(E),D=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t="M "+[[0,0],[e.width,0],[0,e.height]].map(function(e){return e.join(" ")}).join(" L ")+" Z"
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:t}))}}]),t}(E),B=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("span",null)}}]),t}(E),F=function(e){function o(){var e,t;(0,l.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,d.default)((0,i.default)((0,i.default)(t)),"setElemRef",function(e){return t.$elem=e}),t}return(0,h.default)(o,e),(0,u.default)(o,[{key:"componentDidUpdate",value:function(e,t){this.props.isPreview&&this.props.widget.text!==e.widget.text&&this.updateIframeURL()}},{key:"updateIframeURL",value:function(){var e=this.props.widget.text.replace(/&amp;/g,"&")
this.$elem.setAttribute("src",e)}},{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"webpage-wrapper"},m.default.createElement("span",{className:"text"},e.text),m.default.createElement("p",{className:"notice"},I18N.https_only),m.default.createElement("iframe",{ref:this.setElemRef,className:"iframe"}))}}]),o}(E),U=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("span",null,
m.default.createElement("i",{className:"fa fa-play-circle-o"}))}}]),t}(E),W=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement(S.default,{src:e.image,stretchToFill:!e.p,filter:e.filter,backgroundColor:e.bg})}}]),t}(E),q=function(e){function a(){var e,s;(0,l.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s=(0,f.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,i.default)((0,i.default)(s)),"genSlides",function(e,t){var n=e.asset
return m.default.createElement(S.default,{key:"slide-{index}",src:n})}),(0,d.default)((0,i.default)((0,i.default)(s)),"genPointers",function(c){return function(e,t){var n=t===c,r="pointer ".concat(n?"active":""),a=s.props.widget.data,o=JSON.parse(a),i=o.pointerBg,l=o.pointerFg,u={backgroundColor:n?l:i}
return m.default.createElement("i",{key:"pointer-".concat(t),style:u,className:r})}}),(0,d.default)((0,i.default)((0,i.default)(s)),"genPointersActiveAtStart",function(e,t){return s.genPointers(0)(e,t)}),(0,d.default)((0,i.default)((0,i.default)(s)),"renderPointers",function(e){var t=e.currentSlide,n=s.props.widget.data,r=JSON.parse(n),a=r.slides
return r.showPointers?m.default.createElement(m.default.Fragment,null,a.map(s.genPointers(t))):null}),s}return(0,h.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){var e=this.props,t=e.widget.data,n=e.isPreview,r=JSON.parse(t),a=r.slides,o=r.autoShift,i=r.interval,l=r.showPointers,u=r.vertical,c=n
return m.default.createElement("div",{className:(0,g.default)("carousel-wrapper",{vertical:u},{isPreview:n})},n?m.default.createElement(v.default,{wrapAround:!0,pauseOnHover:!1,disableKeyboardControls:!0,autoplay:c&&o,swiping:c,dragging:c,vertical:u,autoplayInterval:i,renderBottomCenterControls:this.renderPointers},a.map(this.genSlides)):m.default.createElement(m.default.Fragment,null,m.default.createElement(S.default,{src:(a[0]||{}).asset}),l&&m.default.createElement("div",{className:"pointers"},a.map(
this.genPointersActiveAtStart))))}}]),a}(E),z=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=MB.project().device,n=e.numeric?"n":"r",r=e.cs().orientation,a="".concat(MB.urlRootHTMLZip(),"images/keyboards/").concat(t,"_").concat(n,"_").concat(r,".png")
return m.default.createElement("img",{src:a,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(E),H=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/iphone_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(E),Y=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/ipad_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(E),V=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/android_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(E),J=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"image"},m.default.createElement("img",{draggable:!1,src:MB.staticMap()}))}}]),t}(E),X=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,
p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",null,m.default.createElement("div",{className:"text_edit"},m.default.createElement("input",{type:"text",placeholder:e.text})),m.default.createElement("i",{className:"fa fa-search"}))}}]),t}(E),G=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.tc
return m.default.createElement("div",null,m.default.createElement("div",{className:"signal",style:{color:t}},m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"})),m.default.createElement("div",{className:"carrier"},m.default.createElement("span",{className:"text",dangerouslySetInnerHTML:{__html:e.text}})),
m.default.createElement("div",{className:"time"},"12:00",m.default.createElement("span",{className:"meridian"}," AM")),m.default.createElement("div",{className:"wifi md"},"wifi"),m.default.createElement("div",{className:"battery"},m.default.createElement("div",{className:"body",style:{borderColor:t}},m.default.createElement("div",{className:"inner",style:{backgroundColor:t}})),m.default.createElement("div",{className:"head",style:{backgroundColor:t}})))}}]),t}(E),Z=function(e){function t(){return(0,
l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"iOS-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarSignal",dangerouslySetInnerHTML:{__html:y.IOS_SIGNAL}}),m.default.createElement("div",{className:"StatusBarWifi",dangerouslySetInnerHTML:{__html:y.IOS_WIFI}}),m.default.createElement("div",{className:"StatusBarTime"},"12:00"),m.default.createElement("div",{className:"StatusBarBattery",dangerouslySetInnerHTML:{__html:y.IOS_BATTERY}}))}}]),t}(E),K=function(e){function t(){return(
0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"iPhoneX-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarTime"},"12:00"),m.default.createElement("div",{className:"StatusBarSignal",dangerouslySetInnerHTML:{__html:y.IOS_SIGNAL}}),m.default.createElement("div",{className:"StatusBarWifi",dangerouslySetInnerHTML:{__html:y.IOS_WIFI}}),m.default.createElement("div",{className:"StatusBarBattery",dangerouslySetInnerHTML:{__html:y.IOS_BATTERY}}))}}]),t}(E),Q=function(e){function t(){
return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"Android-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarWifi icon md"},"signal_wifi_4_bar"),m.default.createElement("div",{className:"StatusBarSignal icon md"},"signal_cellular_4_bar"),m.default.createElement("div",{className:"StatusBarBattery icon md"},"battery_full"),m.default.createElement("div",{className:"StatusBarTime"},"12:00"))}}]),t}(E),$=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,
p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"iOS-Switch"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(E),ee=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Switch"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(E),te=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"iOS-Check"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"},m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"8",viewBox:"0 0 13 8"},m.default.createElement("path",{d:"M1 4.5L4.5 8l8-8"}))))}}]),t}(E),ne=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,
arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Check"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"},m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10",viewBox:"0 0 14 10"},m.default.createElement("path",{d:"M5 10L0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346"}))))}}]),t}(E),re=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(
this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Radio"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"radio",name:e.gid,defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(E),ae=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"wrapper"},(0,C.getIcon)(e),m.default.createElement("span",{className:"text"},e.text))}}]),t}(E),oe=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=Link.find(e.link_cids),n=t?t.gesture:"tap"
return m.default.createElement(b.SVGIcon,{name:"icon/gesture/".concat(n)})}}]),t}(E),ie=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return(0,C.getIcon)(e)}}]),t}(E),le=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.text.replace(/<\/?p>/g,"")
return m.default.createElement("p",{dangerouslySetInnerHTML:{__html:e}})}}]),t}(E),ue=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t={padding:e.padding}
return m.default.createElement("div",{className:"text",style:t,dangerouslySetInnerHTML:{__html:MB.v.multiline(e.text)}})}}]),t}(E),ce=function(e){function a(){var e,s;(0,l.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s=(0,f.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,i.default)((0,i.default)(s)),"handleDown",function(e){if(!MB.f.inPreview&&!MB.f.inSharing){e.stopPropagation(),MB.f.isDragging=!0
var o=s.props.widget,i=e.clientX,l=e.clientY,u=o.slt,c=o.slw,t=function(e){var t=e.clientX-i,n=e.clientY-l,r=t/MB.scale()*100,a=n/MB.scale()*100
o.slt=u+a+6,160<o.l()?o.slw=c-r:o.slw=c+r,s.forceUpdate()}
document.addEventListener("mousemove",t),document.addEventListener("mouseup",function e(){MB.f.isDragging=!1,o.lsave(),MB.action("update:widgets",{widgets:[o]}),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)})}}),s}return(0,h.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){var e=this.props.widget,t=e.l()<160,n=e.bg,r=e.slt
e.slt<20?r=20:e.slt>e.height-20&&(r=e.height-20)
var a=e.slt-r,o={top:e.slt<=e.top-20?a:"",height:Math.abs(a)},i={top:a},l={top:r,width:e.slw,borderColor:n},u={left:t?"100%":"",right:t?"":"100%",backgroundColor:n},c={backgroundImage:"linear-gradient(135deg, ".concat(n," 25%, transparent 25%, transparent 100%), linear-gradient(45deg, transparent 75%, ").concat(n," 75%, ").concat(n," 100%)")}
return m.default.createElement("div",null,m.default.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:MB.v.multiline(e.text)}}),m.default.createElement("div",{className:"sideline",style:l},m.default.createElement("div",{className:"box",style:o}),m.default.createElement("div",{className:"line",style:i},m.default.createElement("div",{className:"arrow",style:u,onMouseDown:this.handleDown}))),m.default.createElement("div",{className:"sawtooth",style:c}))}}]),a}(E),se=function(e){function t(
){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e,t,n=this.props.widget,r={top:"borderBottomColor",bottom:"borderTopColor",left:"borderRightColor",right:"borderLeftColor"}[n.tt_placement],a="top"==n.tt_placement||"bottom"==n.tt_placement,o={borderWidth:n.tt_arrow_size,left:a?n.tt_offset:"",top:a?"":n.tt_offset},i=(0,c.default)({},o,(e={},(0,d.default)(e,n.tt_placement,0-n.tt_arrow_size),(0,
d.default)(e,r,n.bc||"#aaa"),e)),l=(0,c.default)({},o,(t={},(0,d.default)(t,n.tt_placement,0-n.tt_arrow_size+(0,w.getBorderWidth)(n)),(0,d.default)(t,r,n.bg||"white"),t)),u={padding:n.padding,marginTop:n.text&&"middle"===n.va?0-n.textHeight()/2:""}
return m.default.createElement("div",null,m.default.createElement("div",{className:"arrow1 arrow ".concat(n.tt_placement),style:i}),m.default.createElement("div",{className:"arrow2 arrow ".concat(n.tt_placement),style:l}),m.default.createElement("div",{className:"text",style:u,dangerouslySetInnerHTML:{__html:MB.v.multiline(n.text)}}))}}]),t}(E)},udQi:function(e,t,n){"use strict"
n.d(t,"a",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return c})
var r=[],a=0
function o(e){try{l(),e()}finally{u()}}function i(e){r.push(e),a||(l(),c())}function l(){a++}function u(){a--}function c(){u()
for(var e=void 0;!a&&void 0!==(e=r.shift());)o(e)}},upRB:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentScreen=t.getCurrentProject=t.getIsScreenExpanded=t.getIsImmersive=t.getRunnerActiveScreenCid=t.getRunnerState=t.getIsFullScreenMode=t.getShellType=t.getIsHighlight=t.getIsStickyShow=t.getIsScrollable=t.getCurrentMode=t.getCurrentScale=void 0
var r=n("G4qV"),a=n("1iCU")
t.getCurrentScale=function(e){return e.container.common.scale}
var o=function(e){return e.container.previewSetting.toolbarActiveItem}
t.getCurrentMode=o
var i=function(e){return e.container.previewSetting.isScrollable}
t.getIsScrollable=i
t.getIsStickyShow=function(e){return e.container.previewSetting.isStickyShow}
t.getIsHighlight=function(e){return e.container.previewSetting.isHighlight}
t.getShellType=function(e){return e.container.previewSetting.shellType}
t.getIsFullScreenMode=function(e){return e.container.previewSetting.isFullScreenMode}
t.getRunnerState=function(e){return e.container.runner}
t.getRunnerActiveScreenCid=function(e){return e.container.runner.activeCid}
var l=(0,r.createSelector)([o],function(e){return e===a.INSPECT||e===a.COMMENT})
t.getIsImmersive=l
var u=(0,r.createSelector)([o,i],function(e,t){return[a.INSPECT,a.COMMENT].includes(e)||!t})
t.getIsScreenExpanded=u
var c=(0,r.createSelector)([function(e){return e.model.projects},function(e){return e.model.current.projectCid}],function(e,t){return e.find(function(e){return e.cid===t})})
t.getCurrentProject=c
var s=(0,r.createSelector)([function(e){return e.model.screens},function(e){return e.model.current.screenCid}],function(e,t){return e.find(function(e){return e.cid===t})})
t.getCurrentScreen=s},"ut/Y":function(e,t,n){var r=n("ZCpW"),a=n("GDhZ"),o=n("zZ0H"),i=n("Z0cm"),l=n("+c4W")
e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?i(e)?a(e[0],e[1]):r(e):l(e)}},v8PR:function(e,t,n){},v9Wr:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("o0o1")),l=a(n("yXPU")),o=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v=(0,n("tiHd").createAsyncTaskQueue)().pushTask,g=new Map,y=function(n,r,a,o){return new Promise(function(e,t){n.onload=function(){n.src.includes(b)||g.set("".concat(r).concat(a),o),e()},n.onerror=function(){n.src=b,t()},n.src=o})},b="/images/preview/image-load.png",S=function(e){function n(){var t
return(0,o.default)(this,n),t=(0,c.default)(this,(0,s.default)(n).call(this)),(0,p.default)((0,f.default)((0,f.default)(t)),"setElementRef",function(e){return t.$elem=e}),t.isUnmounted=!1,t.retryTimer=null,t}return(0,d.default)(n,e),(0,u.default)(n,[{key:"componentDidMount",value:function(){this.props.isVisible&&this.generateSnapshotTask()}},{key:"componentDidUpdate",value:function(e,t){this.props.isVisible&&(clearTimeout(this.retryTimer),this.generateSnapshotTask())}},{key:"componentWillUnmount",
value:function(){this.isUnmounted=!0,clearTimeout(this.retryTimer)}},{key:"generateSnapshotTask",value:function(){var o=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5
v((0,l.default)(i.default.mark(function e(){var t,n,r,a
return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.props,n=t.cacheKey,r=t.version,a=t.imageUrl,t.isVisible){e.next=3
break}return e.abrupt("return")
case 3:if(o.isUnmounted)return e.abrupt("return")
e.next=5
break
case 5:if(g.get("".concat(n).concat(r)))return e.abrupt("return")
e.next=7
break
case 7:return e.next=9,y(o.$elem,n,r,a)
case 9:case"end":return e.stop()}},e,this)}))).catch(function(e){o.retryTimer=setTimeout(function(){o.generateSnapshotTask(2*t)},1e3*t)})}},{key:"render",value:function(){var e=this.props,t=e.cacheKey,n=e.version,r=g.get("".concat(t).concat(n))
return m.default.createElement("img",{ref:this.setElementRef,src:r||b})}}]),n}(m.PureComponent)
t.default=S,(0,p.default)(S,"propTypes",{cacheKey:h.default.string.isRequired,imageUrl:h.default.string.isRequired,isVisible:h.default.bool.isRequired,version:h.default.string})},vRqJ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:artboards:success":return(0,a.default)({},e,r)
case"reducer:artboards:fail":return(0,a.default)({},e,r,{error:!0})
default:return e}}
var a=r(n("MVZn")),o={artboards:[],error:!1}},vbsp:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRadioLine=void 0
var a=r(n("vOnD")).default.ol.withConfig({displayName:"style__StyledRadioLine",componentId:"sc-15893ui-0"})(["display:flex;justify-content:center;height:100%;align-items:center;background:",";color:#7d8694;border-radius:2px;overflow:hidden;text-align:center;border:",";&.radio-line{height:22px;margin-bottom:14px;}.check-line{&.active{background:",";}}&.quick-radius{margin-bottom:0;li:first-child{border-right:",
";}}.radio-option{flex:1;display:flex;width:100%;height:100%;justify-content:center;align-items:center;position:relative;cursor:pointer;.radio-content{display:flex;justify-content:center;align-items:center;position:relative;}.move-cube{&.active{position:absolute;left:0;top:0;width:100%;height:100%;border-left:1px solid ",";border-right:1px solid ",";background:",
";transition:transform 0.2s ease-in-out;}}.main{fill:#7d8694;}.secondary{fill:#c8cdd0;}&.active{color:#298df8;cursor:default;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}&.disabled{color:#c8cdd0;background-color:#f7f7f7;cursor:not-allowed;}&:hover:not(.disabled){color:#298df8;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}}&.disabled{.radio-option{color:#c8cdd0;cursor:not-allowed;svg:only-child,.main{fill:#c8cdd0;}&:hover{color:#c8cdd0;}}.move-cube{&.active{background:"
,";border-left:transparent;border-right:transparent;}}}"],function(e){return e.theme.radioLine.bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.bg})
t.StyledRadioLine=a},veUc:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transformLayersFormat=void 0
var d=r(n("MVZn")),c=r(n("RIqP")),s=r(n("SA+Z")),f=n("0k54"),a=n("QDPf")
t.transformLayersFormat=function(e){var t=(0,s.default)(e),n=t[0],r=t.slice(1),a={childrenLayers:[]},o={},i=[],l=[]
r.forEach(function(e){var t=e.id,n=e.panel_cid
"artboard-base"===t?Object.assign(a,e):"number"==typeof t?a.childrenLayers.push(e):n?o[n]?o[n].push(e):o[n]=[e]:"panel"===e.name?i.push(e):l.push(e)}),i.forEach(function(e){return e.childrenLayers=o[e.cid]})
var u=(a.childrenLayers.length?[a]:[]).concat(i,(0,c.default)(p(l))).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})
return[n].concat((0,c.default)(u))}
var p=function(e){if(0===e.length)return[]
var t=e[0].screen_cid
return(0,a.generateTreeData)(e.map(function(e){return new Widget(e)}),t).widgetTreeData.children.map(function(e){return o(e)})},o=function t(e){var n=e.cid,r=e.type,a=e.widget,o=e.children
if("widget"===r)return a
if("group"===r){var i=(0,f.getTreeBoundingRect)(e),l=i.minX,u=i.minY,c=i.maxX,s=i.maxY
return(0,d.default)({},a,{id:n,width:c-l,height:s-u,top:u,left:l,childrenLayers:o.map(function(e){return t(e)})})}}},vmbo:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),b=r(n("q1tI")),S=a(n("TSYQ")),w=n("/5+U"),C=n("l0oT")
n("zZYZ")
var p=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,u.default)(this,(e=(0,c.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(a)),"onMouseEnter",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(a.props.layer.id)}),(0,f.default)((0,d.default)((0,d.default)(a)),"onMouseLeave",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(-1)}),(0,f.default)((0,d.default)((0,d.default)(a)),"handleClick",function(){var e=a.props,t=e.requestSelectLayer,n=e.layer.id,r=e.handleShowlayerInfo
t(n),r(!0)}),a}return(0,s.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props,t=e.layer,n=e.activeLayerID,r=e.enteredLayerID,a=e.unit,o=e.ratio,i=t.id,l=t.src_width,u=t.src_height,c=t.rotation||0,s=i===n,d=i===r||-1===r,f=(0,S.default)("Layer",{"is-active":s,"is-focus":d}),p=t.kind?l:l*(0,C.cos)(c)+u*(0,C.sin)(c),h=t.kind?u:l*(0,C.sin)(c)+u*(0,C.cos)(c),m=(0,w.adapterScreen)(p,o),v=(0,w.adapterScreen)(h,o),g=t.kind?(0,w.adapterScreen)(t.origin_width||l,o):(0,w.adapterScreen)(l,o),
y=t.kind?(0,w.adapterScreen)(t.origin_height||u,o):(0,w.adapterScreen)(u,o)
return b.default.createElement("div",{className:f,"data-width":"".concat(m).concat(a),"data-height":"".concat(v).concat(a),"data-lid":i,onClick:this.handleClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},s&&b.default.createElement("span",{className:"LayerCorner left top"}),s&&b.default.createElement("span",{className:"LayerCorner left bottom"}),s&&b.default.createElement("span",{className:"LayerCorner right top"}),s&&b.default.createElement("span",{className:"LayerCorner right bottom"}),
s&&0!==c&&b.default.createElement("span",{className:"rect_info"},"".concat(g," x ").concat(y),"  ","".concat(c,"°")))}}]),o}(b.Component)
t.default=p,(0,f.default)(p,"propTypes",{layer:o.default.object,requestSelectLayer:o.default.func,enterLayer:o.default.func,handleShowlayerInfo:o.default.func,activeLayerID:o.default.oneOfType([o.default.number,o.default.string]),enteredLayerID:o.default.oneOfType([o.default.number,o.default.string]),unit:o.default.string,ratio:o.default.number})},vpYg:function(e,t,n){"use strict"
var r=["onAbort","onAnimationEnd","onAnimationIteration","onAnimationStart","onBlur","onCanPlay","onCanPlayThrough","onClick","onContextMenu","onCopy","onCut","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onFocus","onInput","onInvalid","onKeyDown","onKeyPress","onKeyUp","onLoad","onLoadedData","onLoadedMetadata","onLoadStart","onMouseDown","onMouseMove","onMouseOut",
"onMouseOver","onMouseUp","onPaste","onPause","onPlay","onPlaying","onProgress","onRateChange","onReset","onScroll","onSeeked","onSeeking","onStalled","onSubmit","onSuspend","onTimeUpdate","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onTransitionEnd","onVolumeChange","onWaiting","onWheel"],a=["onAfterPrint","onBeforePrint","onBeforeUnload","onDeviceLight","onDeviceMotion","onDeviceOrientation","onDeviceProximity","onHashChange","onLanguageChange","onPopState","onRejectionHandled","onResize",
"onSelect","onStorage","onUnhandledRejection","onUnload","onUserProximity"],o=["onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp"]
e.exports={allEvents:r.concat(a).concat(o),documentEvents:r.concat(o),windowEvents:a}},wCGR:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=m,t.ConfirmMsg=v
var o=a(n("pVnL")),d=r(n("q1tI")),i=a(n("17x9")),l=a(n("Z0cm")),f={app:["项目","app"],team:["团队","team"],teamMember:["团队成员","team member"]},p={delete:["删除","delete"],leave:["退出","leave"],move:["移动","move"],duplicate:["复制","duplicate"]},u={actionConfirmation:[["您确定要","[VERB]","[NOUN]","[UGN]","吗？"],["Are you sure you want to ","[VERB]"," ","[NOUN]"," ","[UGN]"]],nounMap:f,verbMap:p},c=window.MBLocale,h=["zh-CN","en"].indexOf(c),s=function(s){return function(e,t){return/^\[[A-Z_]+\]/.test(e)?(o=(a={pos:e,
variableMap:s}).pos,i=a.variableMap,l=i.verb,u=i.noun,c=i.ugn,n="[VERB]"===o?p[l][h]:"[NOUN]"===o?f[u][h]:"[UGN]"===o?c:null,r=t,(0,d.isValidElement)(n)?d.default.cloneElement(n,{key:r}):n):e
var n,r,a,o,i,l,u,c}}
function m(e){var t=e.name,n=e.variableMap,r=void 0===n?{}:n,a=u[t][h]
return(0,l.default)(a)?a.map(s(r)):a}function v(e){var t=e.variableMap,n=void 0===t?{}:t
return d.default.createElement(m,(0,o.default)({name:"actionConfirmation"},{variableMap:n}))}m.propTypes={name:i.default.string.isRequired,variableMap:i.default.object},v.propTypes={variableMap:i.default.object}},"wF/u":function(e,t,n){var i=n("e5cp"),l=n("ExA7")
e.exports=function e(t,n,r,a,o){return t===n||(null==t||null==n||!l(t)&&!l(n)?t!=t&&n!=n:i(t,n,r,a,e,o))}},wJg7:function(e,t){var r=/^(?:0|[1-9]\d*)$/
e.exports=function(e,t){var n=typeof e
return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&-1<e&&e%1==0&&e<t}},wQP3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextLayerInfo=void 0
var m=r(n("q1tI")),a=r(n("17x9")),v=n("RUem"),g=n("/5+U"),y=n("XrEr"),o=function(e){var t=e.textStyles,n=void 0===t?[]:t,r=e.hiddSpacing,d=e.ratio,a=e.alignment,o=e.vertical_alignment,i=e.lineHeight,l=e.letterSpacing,f=e.unit,u=e.text,p=(e.o,e.colorUnit),h=e.fontStyle
e.padding
return m.default.createElement(v.WrapComponent,null,I18N.preview_panel.font,(0<n.length&&n.slice(0,1)).map(function(e,t){var n=e.color,r=e.font_size,a=e.location,o=e.font_face,i=e.fontStyle,l=(0,y.parseSketchColor2rgba)(n),u=(0,y.getColorFromUnit)(l,"rgba"),c=(0,g.adapterScreen)(r,d,f),s=(0,y.getColorFromUnit)(l,p)
return m.default.createElement("div",{key:"".concat(r).concat(a).concat(t)},o&&m.default.createElement(v.Base,{title:I18N.preview_panel.type_face,data:[o]}),(i||h)&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_style,data:[i||h]}),u&&m.default.createElement(v.ColorInfo,{stateColor:s,title:I18N.preview_panel.color,rgbaColor:u}),c&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_size,data:[c]}))}),a&&m.default.createElement(v.Base,{title:I18N.preview_panel.align,data:[a,o||"auto"
],dataValue:[I18N.preview_panel.horizontal_align,I18N.preview_panel.vertical_align]}),void 0!==n[0].paraSpacing?m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[n[0].letterSpacing,n[0].lineHeight,n[0].paraSpacing],dataValue:[I18N.letter_spacing,I18N.text_line_height,I18N.para_spacing]}):i&&m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[i,l||"auto"],dataValue:[I18N.preview_panel.line_height,I18N.preview_panel.letter_spacing],first:r}),u&&m.default.createElement(
v.Base,{text:u,title:I18N.preview_panel.content}))};(t.TextLayerInfo=o).propTypes={textStyles:a.default.array,fontStyle:a.default.string,alignment:a.default.string,vertical_alignment:a.default.string,hiddSpacing:a.default.bool,letterSpacing:a.default.oneOfType([a.default.string,a.default.bool]),lineHeight:a.default.oneOfType([a.default.string,a.default.bool]),paraSpacing:a.default.number,ratio:a.default.number,unit:a.default.string,text:a.default.string,o:a.default.number,padding:a.default.number,
colorUnit:a.default.string}},wUZt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.collectScreenVariantBaseData=t.collectScreenVariantData=void 0
var h=r(n("zkrS")),m="default",v={cid:m,name:"".concat(h.default.I18N.default," ").concat(h.default.I18N.state)},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:m
return"prev"!==e?"".concat(e,"+").concat(t):"prev"}
t.collectScreenVariantData=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=e.cid,l=t.cid,a=e.width*i,o=e.height*i,u=[],c=function(e,t){t&&(t=E(t,a,o)),t&&u.push({link:e,toId:g(e.target_cid||r,e.targetstate_cid||m),relativeStyle:y(t,a,o)})},s=0,d=function(n){return n.cwidgets().reduce(function(e,t){return"pg"===t.name?(u.push({link:n,globalGestureIndex:s}),s++,e):w(e||S(),b(t,i))},null)}
h.default.SpineModel.Link.select(function(a){if(a.state_cid){var e=h.default.SpineModel.Screen.find(a.state_cid),t=e&&h.default.SpineModel.Template.find(e.project_cid),o=t&&d(a)
t&&o&&h.default.SpineModel.Panel.findAllByAttribute("template_cid",t.cid).filter(function(e){return e.screen_cid===r&&e.screenstate_cid===l}).forEach(function(e){var t=b(e,i),n={x:o.min.x+t.min.x,y:o.min.y+t.min.y},r={x:n.x+Math.min(o.max.x-o.min.x,t.max.x-t.min.x),y:n.y+Math.min(o.max.y-o.min.y,t.max.y-t.min.y)}
c(a,{min:n,max:r})})}else if(a.screen_cid===r&&a.sourcestate_cid===l){var n=d(a)
n&&c(a,n)}return!1})
var f=[],n=h.default.SpineModel.Widget.findAllByAttribute("screen_cid",r),p=h.default.SpineModel.Widgetstate.findAllByAttribute("screenstate_cid",l)
return n.forEach(function(t){if("sticky"===t.name){t=p.find(function(e){return e.widget_cid===t.cid})||t
var e=b(t,i),n=e.min,r=e.max
f.push({widget:t,relativeTop:C((n.y+t.slt*i)/o,0,1),relativeLeft:C((r.x+t.slw*i)/a,0,1),backgroundColor:t.bg||"#fffbba",contentStyle:{textAlign:t.ha||"left",fontSize:"".concat(t.fs||12,"px"),lineHeight:"".concat(t.lh||20,"px"),color:t.tc||"rgba(39,54,78,0.8)"}})}}),f.sort(function(e,t){return e.widget.slt-t.widget.slt}),{id:g(r,l),screenCid:r,screenStateCid:l,screenName:e.name,screenStateName:t.name,canvasZoom:i,canvasWidth:a,canvasHeight:o,linkDataList:u,noteDataList:f}}
t.collectScreenVariantBaseData=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=e.cid,a=t.cid,o=e.width*n,i=e.height*n
return{screenCid:r,screenStateCid:a,screenName:e.name,screenStateName:t.name,canvasZoom:n,canvasWidth:o,canvasHeight:i}}
var y=function(e,t,n){var r=e.min,a=e.max
return{top:r.y/n,left:r.x/t,width:(a.x-r.x)/t,height:(a.y-r.y)/n}},d=Math.PI/180,b=function(e,t){var n=(e.width||0)*t,r=(e.height||0)*t,a=(e.left||0)*t,o=(e.top||0)*t
if(e.ro){var i=e.ro*d,l=Math.sin(i),u=Math.cos(i),c=n*u+r*-l,s=n*l+r*u
a+=.5*(n-c),o+=.5*(r-s),n=c,r=s}return{min:{x:a,y:o},max:{x:a+n,y:o+r}}},S=function(){return{min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}}},w=function(e,t){var n=e.min,r=e.max
return n.x=Math.min(n.x,t.min.x),n.y=Math.min(n.y,t.min.y),r.x=Math.max(r.x,t.max.x),r.y=Math.max(r.y,t.max.y),e},C=function(e,t,n){return Math.min(Math.max(e,t),n)},E=function(e,t,n){var r=e.min,a=e.max
return r.x=C(r.x,0,t),r.y=C(r.y,0,n),a.x=C(a.x,0,t),a.y=C(a.y,0,n),r.x!==a.x&&r.y!==a.y?e:null}},wYtL:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FormEntry",{enumerable:!0,get:function(){return f.FormEntry}}),Object.defineProperty(t,"FormLabel",{enumerable:!0,get:function(){return f.FormLabel}}),Object.defineProperty(t,"CheckerLabel",{enumerable:!0,get:function(){return p.CheckerLabel}}),Object.defineProperty(t,"RadioGroup",{enumerable:!0,get:function(){return p.RadioGroup}}),Object.defineProperty(t,"CheckboxGroup",{enumerable:!0,get:function(){return p.CheckboxGroup}}),
t.TooltipGlobalStyle=t.Select=t.Check=t.InputNumber=t.Tooltip=t.Input=void 0
var o=a(n("VkAN")),i=n("00a+"),l=n("6XO9"),u=r(n("vOnD")),c=a(n("Rm7n")),s=a(n("MzIM")),d=a(n("jbqJ")),f=n("TT1N"),p=n("m9na"),h=a(n("r1rb"))
function m(){var e=(0,o.default)(["\n  .is-ToolTip-Close {\n    display: none;\n  }\n\n  .TipBase {\n    .is-open {\n      .content {\n        background: rgb(31, 41, 46);\n      }\n    }\n  }\n\n  .tooltip-arrow {\n    display: none;\n  }\n\n  .tooltip {\n    .tooltip-inner {\n      background: #1f292e;\n    }\n  }\n"])
return m=function(){return e},e}var v=(0,i.withTheme)(l.Input)
t.Input=v
var g=(0,i.withTheme)(c.default),y=(0,i.withTheme)(s.default),b=(0,i.withTheme)(d.default),S=(0,i.withTooltip)(h.default)
t.Tooltip=S
var w=(0,u.createGlobalStyle)(m())
t.TooltipGlobalStyle=w
var C=(0,u.default)(b).withConfig({displayName:"form__InputNumber",componentId:"sc-1t7hcl8-0"})(["&.is-valid:not(.unstyled){.title{color:#8d9ea7;}input{color:#415058;background-color:",";border:1px solid ",";}}&.is-valid.is-disabled{.title{opacity:1;color:#e8e8e8;}input{color:#c8cdd0;opacity:1;background-color:",";border:1px solid ",";}}"],function(e){return e.theme.draggablePanel.NumberInput.bg},function(e){return e.theme.draggablePanel.NumberInput.border_color},function(e){
return e.theme.draggablePanel.NumberInput.disabled_bg},function(e){return e.theme.draggablePanel.NumberInput.disabled_border_color})
t.InputNumber=C
var E=(0,u.default)(g).withConfig({displayName:"form__Check",componentId:"sc-1t7hcl8-1"})(["&.small.is-checked{.Check-state{background-color:#fff;border-color:",";color:#ff6161;}}"],function(e){return e.theme.draggablePanel.CheckBorder.border_color})
t.Check=E
var k=(0,u.default)(y).withConfig({displayName:"form__Select",componentId:"sc-1t7hcl8-2"})(["&.small:not(.unstyled){background-color:",";border:1px solid ",";}"],function(e){return e.theme.draggablePanel.Select.bg},function(e){return e.theme.draggablePanel.Select.border_color})
t.Select=k},wfO3:function(e,t,n){},wig9:function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var o=e[t]
o&&(a[r++]=o)}return a}},wy8a:function(e,t,n){var a=n("KxBF")
e.exports=function(e,t,n){var r=e.length
return n=void 0===n?r:n,!t&&r<=n?e:a(e,t,n)}},x3zb:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=r(n("J4zp")),a=r(n("lwsE")),o=r(n("a1gu")),i=r(n("Nsbk")),l=r(n("W8MJ")),c=r(n("7W2i")),s=r(n("PJYZ")),d=r(n("lSNA")),f=r(n("17x9")),p=n("q1tI"),h=n("RKRO"),m=function(e){function t(e){var l
return(0,a.default)(this,t),l=(0,o.default)(this,(0,i.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(l)),"playAnimation",function(o){l.setState({percent:0})
var i=Date.now()
requestAnimationFrame(function e(){var t,n=(Date.now()-i)/o,r=(t=n)<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,a=Math.min(r,1)
l.setState({percent:a}),a<1&&requestAnimationFrame(e)})}),l.state={currentScreenCid:e.activeCid,percent:1},l}return(0,c.default)(t,e),(0,l.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.activeCid!==t.currentScreenCid?{currentScreenCid:e.activeCid,percent:0}:null}}]),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.props.onHomeScreenLoad(this.props.activeCid)}},{key:"componentDidUpdate",value:function(e,t){var n=this,r=this.props.transition,a=r.delay,o=r.duration
t.currentScreenCid!==this.state.currentScreenCid&&(console.log("检测到页面切换",e.activeCid,"=>",this.props.activeCid),console.log("动画名称: ",this.props.transition.name),console.log("动画时长: ",o),console.log("动画延时: ",a),setTimeout(function(){n.playAnimation(o)},a)),t.percent<1&&1===this.state.percent&&this.props.onTransitionEnd(this.props.activeCid)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.transition,r=n.name,a=n.offset,o=this.state.percent,i=(0,h.getScreenStyle)(r,o,a),l=(0,u.default)(i,2)
return t(l[0],l[1])}}]),t}(p.PureComponent)
t.default=m,(0,d.default)(m,"propTypes",{children:f.default.func.isRequired,activeCid:f.default.string.isRequired,transition:f.default.object.isRequired,onHomeScreenLoad:f.default.func,onTransitionEnd:f.default.func})},xI34:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.panelMigrator=t.widgetMigrator=void 0
var o=n("lDl7"),i=["status_bar","keyboard"],l=1,u=2,c=3,r={checker:function(e){return 0===e.primary_fixed&&(!0===e.fixed||i.includes(e.name))},migrator:function(e){var t=e.z,n=0,r=!1
if(i.includes(e.name))t=Widget.MAXZ,"status_bar"===e.name?n=1:"keyboard"===e.name&&(n=2)
else if(t=e.z+Widget.MAXZ,e.fixed_type===u)n=1
else if(e.fixed_type===c)n=2
else if(e.fixed_type===l){var a=(0,o.getScreenByWidgetLike)(e)
if(a)n=e.top>a.height-a.cp().sheight(a.orient())/2?2:1
else r=!0}return{fixed:r,primary_fixed:n,z:t}}},a=[{checker:function(e){var t=""===e.box_shadow,n=e.ds&&"transparent"!==e.sc
return t&&n&&MB.currentProject},migrator:function(e){var t=e.ds,n=MB.hex2rgb(e.sc),r=[0,0,0,t,0,"rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",1)")]
return MB.currentProject.isAndroid()&&(r[2]=2*t,r[3]=2*t,r[5]="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(Math.min((23+t)/100,1),")")),{box_shadow:JSON.stringify([r])}}},{checker:function(e){var t=""===e.text_shadow,n="icon_button"===e.name&&e.ds&&"transparent"!==e.sc||e.ts&&"transparent"!==e.tsc
return t&&n&&MB.currentProject},migrator:function(e){var t=e.ts||e.ds,n=MB.hex2rgb(e.tsc||e.sc),r=[0,0,t,"rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",1)")]
return MB.currentProject.isAndroid()&&(r[1]=2*t,r[2]=2*t,r[3]="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(Math.min((23+t)/100,1),")")),{text_shadow:JSON.stringify([r])}}},{checker:function(e){return""===e.border_radius&&e.br},migrator:function(e){return{border_radius:String(e.br)}}},r],s=[r]
t.widgetMigrator=function(t){var n={}
return a.forEach(function(e){e.checker(t)&&Object.assign(n,e.migrator(t))}),n}
t.panelMigrator=function(t){var n={}
return s.forEach(function(e){e.checker(t)&&Object.assign(n,e.migrator(t))}),n}},xQM3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenContainerStyle=function(e,t,n,r,a){var o
if(r){var i,l=Math.min(n.width,n.height),u=Math.max(n.width,n.height),c=Math.min(t.width,t.height),s=Math.max(t.width,t.height),d=e.width!==c,f=n.width>n.height,p=d!==f
o=d?(i=u/s,{width:s,height:Math.min(c,l/i),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(i,")"),transformOrigin:p?"top right":"top left"}):(i=l/c,{width:c,height:Math.min(s,u/i),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(i,")"),transformOrigin:p?"top right":"top left"})}else if(a)o={width:e.width,height:e.height}
else{var h="landscape"===e.orientation,m=t.width,v=t.height,g=h?[v,m]:[m,v],y=(0,w.default)(g,2),b=y[0],S=y[1]
o={width:b,height:S}}return o}
var w=r(n("J4zp"))},xUDz:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(n("RIqP")),l=r(n("lSNA")),a=n("/MKj"),o=n("/5+U"),u=r(n("o/90")),c=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.screens,a=e.container,o=a.previewSetting.isFullScreenMode,i=a.common.scale,l=n.screenCid,u=s(r,l),c=d(r,n.projectCid).childListMap
return{screen:u,isFullScreenMode:o,screenInOrder:f(c,"root"),scale:i}})(u.default)
t.default=c
var s=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),d=(0,o.immutableTransformCache)(function(e,a){var o={},i=(0,l.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,n=e.position,r=e.parent_cid||"root"
o[t]=e,void 0===i[r]&&(i[r]=[]),i[r].push({cid:t,position:n})}}),Object.values(i).forEach(function(e){return e.sort(function(e,t){return o[e.cid].position-o[t.cid].position})}),{rootCid:"root",nodeMap:o,childListMap:i}}),f=function r(a,e){var o=[]
return a[e].forEach(function(e){var t=e.cid
if(o.push(t),a[t]){var n=r(a,t)
o.push.apply(o,(0,i.default)(n))}}),o}},xYSL:function(e,t,n){var r=n("R/W3")
e.exports=function(e,t){return!(null==e||!e.length)&&-1<r(e,t,0)}},xl64:function(e,t,n){},xn7q:function(e,t,n){e.exports={previewPanelLayer:"McoEqJKUUcz4r7-DS9tH",layerInfo:"CjM2RPzWdeKb7pXpcipsf"}},"xo+i":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=r(n("lSNA")),a=n("/MKj"),o=r(n("h2Vm")),i=n("/5+U"),l=(0,a.connect)(function(e){return{screenTreeData:s(e.model.screens,e.model.current.projectCid),screenCommentThreadCountMap:c(e.model.commentThreads),currentScreenCid:e.model.current.screenCid,screenSearch:e.container.screens.screenSearch}})(o.default)
t.default=l
var c=(0,i.immutableTransformCache)(function(e){return e.reduce(function(e,t){return e[t.screen_cid]=(e[t.screen_cid]||0)+1,e},{})}),s=(0,i.immutableTransformCache)(function(e,a){var o={},i={},l=(0,u.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,n=e.position,r=e.parent_cid||"root"
o[t]=e,i[t]=String(e.name).toLowerCase(),void 0===l[r]&&(l[r]=[]),l[r].push({cid:t,position:n})}}),Object.values(l).forEach(function(e){return e.sort(function(e,t){return o[e.cid].position-o[t.cid].position})}),{rootCid:"root",nodeMap:o,childListMap:l,screenNameCidMap:i}})},"xtk/":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),h=r(n("q1tI")),m=a(n("TSYQ")),v=a(n("v9Wr")),p=function(e){function t(e){var r
return(0,o.default)(this,t),r=(0,l.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(r)),"setElementRef",function(e){return r.$elem=e}),(0,d.default)((0,s.default)((0,s.default)(r)),"updateIsVisible",function(){r.setState({isVisible:r.isInBoundingClientRect()})}),(0,d.default)((0,s.default)((0,s.default)(r)),"handleClick",function(e){e.stopPropagation()
var t=r.props,n=t.screen;(0,t.onActivate)(n.cid)}),r.state={isVisible:!1},r}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.containerRect&&this.updateIsVisible()}},{key:"componentDidUpdate",value:function(e,t){var n=this.isInBoundingClientRect()
if(!e.containerRect&&this.props.isActive&&!n){var r=this.$elem.getBoundingClientRect()
this.props.scrollIntoView(r)}this.updateIsVisible()}},{key:"isInBoundingClientRect",value:function(){var e=this.props.containerRect
if(!e||!this.$elem)return!1
var t=this.$elem.getBoundingClientRect()
return t.bottom>e.top&&t.top<e.bottom}},{key:"render",value:function(){var e=this.props,t=e.projectToken,n=e.screen,r=e.isEditing,a=e.isHover,o=e.version,i=e.isActive,l=e.treeProps,u=l.renderItem,c=l.renderSpan,s=void 0===c?g:c,d=n.cid,f=this.state.isVisible,p="".concat("/snapshot.png","?access-token=").concat(t,"&screen-cid=").concat(d,"&version=").concat(o)
return h.default.createElement("li",{className:(0,m.default)("thumbnail-item",{active:i}),onClick:this.handleClick},h.default.createElement("div",{ref:this.setElementRef,className:(0,m.default)("image-wrapper",{hover:a})},u&&u(n),h.default.createElement(v.default,{cacheKey:d,version:o,imageUrl:p,isVisible:f})),s(n,r))}}]),t}(h.PureComponent);(t.default=p).propTypes={screen:f.default.object,version:f.default.string,isEditing:f.default.bool,isHover:f.default.bool,projectToken:f.default.string,
containerRect:f.default.object,isActive:f.default.bool,onActivate:f.default.func,scrollIntoView:f.default.func,treeProps:f.default.object},p.defaultProps={treeProps:{}}
var g=function(e){return h.default.createElement("span",{className:"screen-name editable-span"},e.name)}},xx4x:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),o=a(n("W8MJ")),l=a(n("a1gu")),u=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("M8nv")),m=a(n("ZS4k")),v=a(n("d89S")),g=function(e){function a(){var e,o;(0,i.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,l.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(o)),"checkIfNeedHideLayer",function(e){var t=o.props,n=t.isSpaceDown,r=t.requestSelectLayer,a=t.handleShowlayerInfo
!n&&e.target.contains(document.getElementById("simulator-container"))&&(r(-1),a(!1))}),o}return(0,c.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.error,r=e.isActive,a=e.isSelectLayer,o=e.isShowColorPicker,i=e.activeLayerID
if(!r)return null
if(t)return null
if(n)return null
var l=-1!==i&&!o
return p.default.createElement("div",null,p.default.createElement(m.default,null),l&&p.default.createElement(v.default,null),a&&p.default.createElement(h.default,{onClick:this.checkIfNeedHideLayer}))}}]),a}(p.PureComponent);(t.default=g).propTypes={isActive:f.default.bool,isFetching:f.default.bool,isSpaceDown:f.default.bool,isSelectLayer:f.default.bool,isShowColorPicker:f.default.bool,activeLayerID:f.default.oneOfType([f.default.number,f.default.string]),requestSelectLayer:f.default.func,
handleShowlayerInfo:f.default.func,error:f.default.string}},yLV6:function(He,Ye,Ve){var Je
!function(o,l,e,m){"use strict"
var i,u=["","webkit","Moz","MS","ms","o"],t=l.createElement("div"),n="function",c=Math.round,v=Math.abs,g=Date.now
function s(e,t,n){return setTimeout(y(e,n),t)}function r(e,t,n){return!!Array.isArray(e)&&(d(e,n[t],n),!0)}function d(e,t,n){var r
if(e)if(e.forEach)e.forEach(t,n)
else if(e.length!==m)for(r=0;r<e.length;)t.call(n,e[r],r,e),r++
else for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)}function a(r,e,t){var a="DEPRECATED METHOD: "+e+"\n"+t+" AT \n"
return function(){var e=new Error("get-stack-trace"),t=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=o.console&&(o.console.warn||o.console.log)
return n&&n.call(o.console,a,t),r.apply(this,arguments)}}i="function"!=typeof Object.assign?function(e){if(e===m||null===e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(r!==m&&null!==r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}:Object.assign
var f=a(function(e,t,n){for(var r=Object.keys(t),a=0;a<r.length;)(!n||n&&e[r[a]]===m)&&(e[r[a]]=t[r[a]]),a++
return e},"extend","Use `assign`."),p=a(function(e,t){return f(e,t,!0)},"merge","Use `assign`.")
function h(e,t,n){var r,a=t.prototype;(r=e.prototype=Object.create(a)).constructor=e,r._super=a,n&&i(r,n)}function y(e,t){return function(){return e.apply(t,arguments)}}function b(e,t){return typeof e==n?e.apply(t&&t[0]||m,t):e}function S(e,t){return e===m?t:e}function w(t,e,n){d(_(e),function(e){t.addEventListener(e,n,!1)})}function C(t,e,n){d(_(e),function(e){t.removeEventListener(e,n,!1)})}function E(e,t){for(;e;){if(e==t)return!0
e=e.parentNode}return!1}function k(e,t){return-1<e.indexOf(t)}function _(e){return e.trim().split(/\s+/g)}function x(e,t,n){if(e.indexOf&&!n)return e.indexOf(t)
for(var r=0;r<e.length;){if(n&&e[r][n]==t||!n&&e[r]===t)return r
r++}return-1}function T(e){return Array.prototype.slice.call(e,0)}function M(e,n,t){for(var r=[],a=[],o=0;o<e.length;){var i=n?e[o][n]:e[o]
x(a,i)<0&&r.push(e[o]),a[o]=i,o++}return t&&(r=n?r.sort(function(e,t){return e[n]>t[n]}):r.sort()),r}function N(e,t){for(var n,r,a=t[0].toUpperCase()+t.slice(1),o=0;o<u.length;){if((r=(n=u[o])?n+a:t)in e)return r
o++}return m}var I=1
function O(e){var t=e.ownerDocument||e
return t.defaultView||t.parentWindow||o}var R="ontouchstart"in o,P=N(o,"PointerEvent")!==m,A=R&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),j="touch",L=25,D=1,B=4,F=8,U=1,W=2,q=4,z=8,H=16,Y=W|q,V=z|H,J=Y|V,X=["x","y"],G=["clientX","clientY"]
function Z(t,e){var n=this
this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){b(t.options.enable,[t])&&n.handler(e)},this.init()}function K(e,t,n){var r=n.pointers.length,a=n.changedPointers.length,o=t&D&&r-a==0,i=t&(B|F)&&r-a==0
n.isFirst=!!o,n.isFinal=!!i,o&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,r=t.pointers,a=r.length
n.firstInput||(n.firstInput=Q(t))
1<a&&!n.firstMultiple?n.firstMultiple=Q(t):1===a&&(n.firstMultiple=!1)
var o=n.firstInput,i=n.firstMultiple,l=i?i.center:o.center,u=t.center=$(r)
t.timeStamp=g(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=re(l,u),t.distance=ne(l,u),function(e,t){var n=t.center,r=e.offsetDelta||{},a=e.prevDelta||{},o=e.prevInput||{}
t.eventType!==D&&o.eventType!==B||(a=e.prevDelta={x:o.deltaX||0,y:o.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y})
t.deltaX=a.x+(n.x-r.x),t.deltaY=a.y+(n.y-r.y)}(n,t),t.offsetDirection=te(t.deltaX,t.deltaY)
var c=ee(t.deltaTime,t.deltaX,t.deltaY)
t.overallVelocityX=c.x,t.overallVelocityY=c.y,t.overallVelocity=v(c.x)>v(c.y)?c.x:c.y,t.scale=i?(f=i.pointers,p=r,ne(p[0],p[1],G)/ne(f[0],f[1],G)):1,t.rotation=i?(s=i.pointers,d=r,re(d[1],d[0],G)+re(s[1],s[0],G)):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,function(e,t){var n,r,a,o,i=e.lastInterval||t,l=t.timeStamp-i.timeStamp
if(t.eventType!=F&&(L<l||i.velocity===m)){var u=t.deltaX-i.deltaX,c=t.deltaY-i.deltaY,s=ee(l,u,c)
r=s.x,a=s.y,n=v(s.x)>v(s.y)?s.x:s.y,o=te(u,c),e.lastInterval=t}else n=i.velocity,r=i.velocityX,a=i.velocityY,o=i.direction
t.velocity=n,t.velocityX=r,t.velocityY=a,t.direction=o}(n,t)
var s,d
var f,p
var h=e.element
E(t.srcEvent.target,h)&&(h=t.srcEvent.target)
t.target=h}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function Q(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:c(e.pointers[n].clientX),clientY:c(e.pointers[n].clientY)},n++
return{timeStamp:g(),pointers:t,center:$(t),deltaX:e.deltaX,deltaY:e.deltaY}}function $(e){var t=e.length
if(1===t)return{x:c(e[0].clientX),y:c(e[0].clientY)}
for(var n=0,r=0,a=0;a<t;)n+=e[a].clientX,r+=e[a].clientY,a++
return{x:c(n/t),y:c(r/t)}}function ee(e,t,n){return{x:t/e||0,y:n/e||0}}function te(e,t){return e===t?U:v(e)>=v(t)?e<0?W:q:t<0?z:H}function ne(e,t,n){n||(n=X)
var r=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]]
return Math.sqrt(r*r+a*a)}function re(e,t,n){n||(n=X)
var r=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]]
return 180*Math.atan2(a,r)/Math.PI}Z.prototype={handler:function(){},init:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(O(this.element),this.evWin,this.domHandler)}}
var ae={mousedown:D,mousemove:2,mouseup:B},oe="mousedown",ie="mousemove mouseup"
function le(){this.evEl=oe,this.evWin=ie,this.pressed=!1,Z.apply(this,arguments)}h(le,Z,{handler:function(e){var t=ae[e.type]
t&D&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=B),this.pressed&&(t&B&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:"mouse",srcEvent:e}))}})
var ue={pointerdown:D,pointermove:2,pointerup:B,pointercancel:F,pointerout:F},ce={2:j,3:"pen",4:"mouse",5:"kinect"},se="pointerdown",de="pointermove pointerup pointercancel"
function fe(){this.evEl=se,this.evWin=de,Z.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}o.MSPointerEvent&&!o.PointerEvent&&(se="MSPointerDown",de="MSPointerMove MSPointerUp MSPointerCancel"),h(fe,Z,{handler:function(e){var t=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),a=ue[r],o=ce[e.pointerType]||e.pointerType,i=o==j,l=x(t,e.pointerId,"pointerId")
a&D&&(0===e.button||i)?l<0&&(t.push(e),l=t.length-1):a&(B|F)&&(n=!0),l<0||(t[l]=e,this.callback(this.manager,a,{pointers:t,changedPointers:[e],pointerType:o,srcEvent:e}),n&&t.splice(l,1))}})
var pe={touchstart:D,touchmove:2,touchend:B,touchcancel:F}
function he(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,Z.apply(this,arguments)}h(he,Z,{handler:function(e){var t=pe[e.type]
if(t===D&&(this.started=!0),this.started){var n=function(e,t){var n=T(e.touches),r=T(e.changedTouches)
t&(B|F)&&(n=M(n.concat(r),"identifier",!0))
return[n,r]}.call(this,e,t)
t&(B|F)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:e})}}})
var me={touchstart:D,touchmove:2,touchend:B,touchcancel:F},ve="touchstart touchmove touchend touchcancel"
function ge(){this.evTarget=ve,this.targetIds={},Z.apply(this,arguments)}h(ge,Z,{handler:function(e){var t=me[e.type],n=function(e,t){var n=T(e.touches),r=this.targetIds
if(t&(2|D)&&1===n.length)return r[n[0].identifier]=!0,[n,n]
var a,o,i=T(e.changedTouches),l=[],u=this.target
if(o=n.filter(function(e){return E(e.target,u)}),t===D)for(a=0;a<o.length;)r[o[a].identifier]=!0,a++
a=0
for(;a<i.length;)r[i[a].identifier]&&l.push(i[a]),t&(B|F)&&delete r[i[a].identifier],a++
return l.length?[M(o.concat(l),"identifier",!0),l]:void 0}.call(this,e,t)
n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:e})}})
var ye=2500
function be(){Z.apply(this,arguments)
var e=y(this.handler,this)
this.touch=new ge(this.manager,e),this.mouse=new le(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function Se(e){var t=e.changedPointers[0]
if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY}
this.lastTouches.push(n)
var r=this.lastTouches
setTimeout(function(){var e=r.indexOf(n);-1<e&&r.splice(e,1)},ye)}}h(be,Z,{handler:function(e,t,n){var r=n.pointerType==j,a="mouse"==n.pointerType
if(!(a&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)(function(e,t){e&D?(this.primaryTouch=t.changedPointers[0].identifier,Se.call(this,t)):e&(B|F)&&Se.call(this,t)}).call(this,t,n)
else if(a&&function(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var a=this.lastTouches[r],o=Math.abs(t-a.x),i=Math.abs(n-a.y)
if(o<=25&&i<=25)return!0}return!1}.call(this,n))return
this.callback(e,t,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}})
var we=N(t.style,"touchAction"),Ce=we!==m,Ee="manipulation",ke="none",_e="pan-x",xe="pan-y",Te=function(){if(!Ce)return!1
var t={},n=o.CSS&&o.CSS.supports
return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(e){t[e]=!n||o.CSS.supports("touch-action",e)}),t}()
function Me(e,t){this.manager=e,this.set(t)}Me.prototype={set:function(e){"compute"==e&&(e=this.compute()),Ce&&this.manager.element.style&&Te[e]&&(this.manager.element.style[we]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[]
return d(this.manager.recognizers,function(e){b(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(e){if(k(e,ke))return ke
var t=k(e,_e),n=k(e,xe)
if(t&&n)return ke
if(t||n)return t?_e:xe
if(k(e,Ee))return Ee
return"auto"}(t.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection
if(this.manager.session.prevented)t.preventDefault()
else{var r=this.actions,a=k(r,ke)&&!Te.none,o=k(r,xe)&&!Te[xe],i=k(r,_e)&&!Te[_e]
if(a){var l=1===e.pointers.length,u=e.distance<2,c=e.deltaTime<250
if(l&&u&&c)return}if(!i||!o)return a||o&&n&Y||i&&n&V?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}}
var Ne=1
function Ie(e){this.options=i({},this.defaults,e||{}),this.id=I++,this.manager=null,this.options.enable=S(this.options.enable,!0),this.state=Ne,this.simultaneous={},this.requireFail=[]}function Oe(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}function Re(e){return e==H?"down":e==z?"up":e==W?"left":e==q?"right":""}function Pe(e,t){var n=t.manager
return n?n.get(e):e}function Ae(){Ie.apply(this,arguments)}function je(){Ae.apply(this,arguments),this.pX=null,this.pY=null}function Le(){Ae.apply(this,arguments)}function De(){Ie.apply(this,arguments),this._timer=null,this._input=null}function Be(){Ae.apply(this,arguments)}function Fe(){Ae.apply(this,arguments)}function Ue(){Ie.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function We(e,t){return(t=t||{}).recognizers=S(t.recognizers,We.defaults.preset),
new qe(e,t)}Ie.prototype={defaults:{},set:function(e){return i(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(r(e,"recognizeWith",this))return this
var t=this.simultaneous
return t[(e=Pe(e,this)).id]||(t[e.id]=e).recognizeWith(this),this},dropRecognizeWith:function(e){return r(e,"dropRecognizeWith",this)||(e=Pe(e,this),delete this.simultaneous[e.id]),this},requireFailure:function(e){if(r(e,"requireFailure",this))return this
var t=this.requireFail
return-1===x(t,e=Pe(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(r(e,"dropRequireFailure",this))return this
e=Pe(e,this)
var t=x(this.requireFail,e)
return-1<t&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(t){var n=this,e=this.state
function r(e){n.manager.emit(e,t)}e<8&&r(n.options.event+Oe(e)),r(n.options.event),t.additionalEvent&&r(t.additionalEvent),8<=e&&r(n.options.event+Oe(e))},tryEmit:function(e){if(this.canEmit())return this.emit(e)
this.state=32},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(32|Ne)))return!1
e++}return!0},recognize:function(e){var t=i({},e)
if(!b(this.options.enable,[this,t]))return this.reset(),void(this.state=32)
56&this.state&&(this.state=Ne),this.state=this.process(t),30&this.state&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}},h(Ae,Ie,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers
return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,r=6&t,a=this.attrTest(e)
return r&&(n&F||!a)?16|t:r||a?n&B?8|t:2&t?4|t:2:32}}),h(je,Ae,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var e=this.options.direction,t=[]
return e&Y&&t.push(xe),e&V&&t.push(_e),t},directionTest:function(e){var t=this.options,n=!0,r=e.distance,a=e.direction,o=e.deltaX,i=e.deltaY
return a&t.direction||(r=t.direction&Y?(a=0===o?U:o<0?W:q,n=o!=this.pX,Math.abs(e.deltaX)):(a=0===i?U:i<0?z:H,n=i!=this.pY,Math.abs(e.deltaY))),e.direction=a,n&&r>t.threshold&&a&t.direction},attrTest:function(e){return Ae.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY
var t=Re(e.direction)
t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),h(Le,Ae,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ke]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out"
e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),h(De,Ie,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,a=e.deltaTime>t.time
if(this._input=e,!r||!n||e.eventType&(B|F)&&!a)this.reset()
else if(e.eventType&D)this.reset(),this._timer=s(function(){this.state=8,this.tryEmit()},t.time,this)
else if(e.eventType&B)return 8
return 32},reset:function(){clearTimeout(this._timer)},emit:function(e){8===this.state&&(e&&e.eventType&B?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=g(),this.manager.emit(this.options.event,this._input)))}}),h(Be,Ae,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ke]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)}}),h(Fe,Ae,{defaults:{event:"swipe",threshold:10,
velocity:.3,direction:Y|V,pointers:1},getTouchAction:function(){return je.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction
return n&(Y|V)?t=e.overallVelocity:n&Y?t=e.overallVelocityX:n&V&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&v(t)>this.options.velocity&&e.eventType&B},emit:function(e){var t=Re(e.offsetDirection)
t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),h(Ue,Ie,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ee]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,a=e.deltaTime<t.time
if(this.reset(),e.eventType&D&&0===this.count)return this.failTimeout()
if(r&&a&&n){if(e.eventType!=B)return this.failTimeout()
var o=!this.pTime||e.timeStamp-this.pTime<t.interval,i=!this.pCenter||ne(this.pCenter,e.center)<t.posThreshold
if(this.pTime=e.timeStamp,this.pCenter=e.center,i&&o?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=s(function(){this.state=8,this.tryEmit()},t.interval,this),2):8}return 32},failTimeout:function(){return this._timer=s(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),
We.VERSION="2.0.7",We.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Be,{enable:!1}],[Le,{enable:!1},["rotate"]],[Fe,{direction:Y}],[je,{direction:Y},["swipe"]],[Ue],[Ue,{event:"doubletap",taps:2},["tap"]],[De]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}}
function qe(e,t){var n
this.options=i({},We.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((n=this).options.inputClass||(P?fe:A?ge:R?be:le))(n,K),this.touchAction=new Me(this,this.options.touchAction),ze(this,!0),d(this.options.recognizers,function(e){var t=this.add(new e[0](e[1]))
e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])},this)}function ze(n,r){var a,o=n.element
o.style&&(d(n.options.cssProps,function(e,t){a=N(o.style,t),o.style[a]=r?(n.oldCssProps[a]=o.style[a],e):n.oldCssProps[a]||""}),r||(n.oldCssProps={}))}qe.prototype={set:function(e){return i(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session
if(!t.stopped){var n
this.touchAction.preventDefaults(e)
var r=this.recognizers,a=t.curRecognizer;(!a||a&&8&a.state)&&(a=t.curRecognizer=null)
for(var o=0;o<r.length;)n=r[o],2===t.stopped||a&&n!=a&&!n.canRecognizeWith(a)?n.reset():n.recognize(e),!a&&14&n.state&&(a=t.curRecognizer=n),o++}},get:function(e){if(e instanceof Ie)return e
for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n]
return null},add:function(e){if(r(e,"add",this))return this
var t=this.get(e.options.event)
return t&&this.remove(t),this.recognizers.push(e),(e.manager=this).touchAction.update(),e},remove:function(e){if(r(e,"remove",this))return this
if(e=this.get(e)){var t=this.recognizers,n=x(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(e!==m&&t!==m){var n=this.handlers
return d(_(e),function(e){n[e]=n[e]||[],n[e].push(t)}),this}},off:function(e,t){if(e!==m){var n=this.handlers
return d(_(e),function(e){t?n[e]&&n[e].splice(x(n[e],t),1):delete n[e]}),this}},emit:function(e,t){var n,r,a
this.options.domEvents&&(n=e,r=t,(a=l.createEvent("Event")).initEvent(n,!0,!0),(a.gesture=r).target.dispatchEvent(a))
var o=this.handlers[e]&&this.handlers[e].slice()
if(o&&o.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()}
for(var i=0;i<o.length;)o[i](t),i++}},destroy:function(){this.element&&ze(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},i(We,{INPUT_START:D,INPUT_MOVE:2,INPUT_END:B,INPUT_CANCEL:F,STATE_POSSIBLE:Ne,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:U,DIRECTION_LEFT:W,DIRECTION_RIGHT:q,DIRECTION_UP:z,DIRECTION_DOWN:H,DIRECTION_HORIZONTAL:Y,DIRECTION_VERTICAL:V,DIRECTION_ALL:J,Manager:qe,Input:Z,TouchAction:Me,
TouchInput:ge,MouseInput:le,PointerEventInput:fe,TouchMouseInput:be,SingleTouchInput:he,Recognizer:Ie,AttrRecognizer:Ae,Tap:Ue,Pan:je,Swipe:Fe,Pinch:Le,Rotate:Be,Press:De,on:w,off:C,each:d,merge:p,extend:f,assign:i,inherit:h,bindFn:y,prefixed:N}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=We,(Je=function(){return We}.call(Ye,Ve,Ye,He))===m||(He.exports=Je)}(window,document)},yOnP:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=i
var u=r(n("MVZn")),c=r(n("o0o1")),s=n("oZtI"),d=n("S7Zs"),a=c.default.mark(i),o=c.default.mark(l),f=c.default.mark(p)
function i(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([l()])
case 2:case"end":return e.stop()}},a,this)}function l(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)("reducer:artboards:init",p)
case 2:case"end":return e.stop()}},o,this)}function p(e){var t,n,r,a,o,i,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,n=t.model,r=n.current.projectCid,a=n.screens,e.prev=4,o={},a.forEach(function(e){var t=e.width,n=e.height,r=e.cid
o[r]={width:t,height:n}}),r)return e.next=10,(0,s.call)(d.fetchArtboardsByProjectCid,r)
e.next=13
break
case 10:i=e.sent,0<(l=i.artboards).length&&l.forEach(function(e){var t=e.width,n=e.height,r=e.screen_cid
o[r]={width:t,height:n}})
case 13:return o={artboards:o},e.next=16,(0,s.put)({type:"reducer:artboards:success",payload:(0,u.default)({},o)})
case 16:e.next=23
break
case 18:return e.prev=18,e.t0=e.catch(4),console.log(e.t0.stack),e.next=23,(0,s.put)({type:"reducer:artboards:fail"})
case 23:case"end":return e.stop()}},f,this,[[4,18]])}},yPzT:function(e,t,n){"use strict"
t.__esModule=!0
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.getInterpolator=u,t.default=function(e,t,n){return function(o,i,n){return function(){var e=this,t=o?this.state[o][i]:this.state[i]
if(t===n)return null
var a=u(i)(t,n)
return null===o?function(t){e.setState(function(){var e
return(e={})[i]=a(t),e})}:function(r){e.setState(function(e){var t,n
return(n={})[o]=l({},e[o],((t={})[i]=a(r),t)),n})}}}.call(this,e,t,n)}
var r=n("pD2Y")
function u(e){return"transform"===e?r.interpolateTransformSvg:r.interpolate}},yTJ9:function(e,t){var d={allowFuture:!(e.exports=function(e){return e instanceof Date?r(e):"string"==typeof e?r(n(e)):"number"==typeof e?r(new Date(e)):void 0}),strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",
year:"about a year",years:"%d years",numbers:[],wordSeparator:" "}},f=d.strings
function n(e){if(e){var t=e.trim()
return t=(t=(t=(t=t.replace(/\.\d\d\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t)}}function r(e){return f.inWords((t=e,(new Date).getTime()-t.getTime()))
var t}e.exports.settings=d,f.inWords=function(a){var e=f.prefixAgo,t=f.suffixAgo
d.allowFuture&&a<0&&(e=f.prefixFromNow,t=f.suffixFromNow)
var n=Math.abs(a)/1e3,r=n/60,o=r/60,i=o/24,l=i/365
function u(e,t){var n="function"==typeof e?e(t,a):e,r=f.numbers&&f.numbers[t]||t
return n.replace(/%d/i,r)}var c=n<45&&u(f.seconds,Math.round(n))||n<90&&u(f.minute,1)||r<45&&u(f.minutes,Math.round(r))||r<90&&u(f.hour,1)||o<24&&u(f.hours,Math.round(o))||o<48&&u(f.day,1)||i<30&&u(f.days,Math.floor(i))||i<60&&u(f.month,1)||i<365&&u(f.months,Math.floor(i/30))||l<2&&u(f.year,1)||u(f.years,Math.floor(l)),s=f.wordSeparator||""
return void 0===f.wordSeparator&&(s=" "),[e,c,t].join(s).toString().trim()},f.parse=n},yUqi:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.decompress=t.compress=void 0
var a=r(n("6xEa"))
t.compress=function(e){return a.default.compressToUTF16(e)}
t.decompress=function(e){return a.default.decompressFromUTF16(e)}},ycqN:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PATCH_AUTO_SAVE_RELATED=t.SAVE_NUKE_SEQUENCE=void 0
var a=r(n("o0o1")),o=r(n("yXPU")),i=n("os03"),l=n("XkTy"),u=n("Clcl"),c=window,s=c.$,d=c.MB,f=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
return new Promise(function(e,t){(0,l.alertAsyncBlocked)(n).then(e),setTimeout(t,6e4)}).catch(function(){return setTimeout(function(){return(0,u.POST_REPORT)({type:"Error:alertAsyncBlocked:timeout",option:n})},0)})},p=function(){var t=(0,o.default)(a.default.mark(function e(t){var n,r=arguments
return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=1<r.length&&void 0!==r[1]?r[1]:-255,e.next=3,f({desc:I18N.unknown_error.replace(/%s/i,n),isHTML:!0})
case 3:return location.reload(),(0,u.NUKE)(t),e.next=7,(0,i.setTimeoutAsync)(36e5)
case 7:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.SAVE_NUKE_SEQUENCE=p
t.PATCH_AUTO_SAVE_RELATED=function(){(0,u.SETUP_REPORT_INTERVAL)({type:"AutoSaver:Socket",getReportObject:function(){return d.AutoSaver.getState()}})
var e,t,n,r,a=new Date
a.setDate(a.getDate()+1),a.setHours(4),a.setMinutes(0),a.setSeconds(0),(0,(e=a,n=function(){t&&clearInterval(t),t=void 0,document.removeEventListener("visibilitychange",r)},r=function(){Date.now()<e||(n(),setInterval(function(){return(0,l.alertAsyncBlocked)({desc:I18N.new_version_detected,isHTML:!0}).then(function(){return location.reload()})},2e4))},{start:function(){t&&clearInterval(t),t=setInterval(r,6e5),document.addEventListener("visibilitychange",r)},stop:n,check:r}).start)(),
window.onbeforeunload=function(){return d.AutoSaver.getIsEmpty()?void 0:d.isLegacyElectron()?!d.confirmAsync({title:I18N.warning,desc:I18N.data_lost_warning})||void 0:I18N.data_lost_warning},d.myXhr=s.ajaxSettings.xhr(),s.ajaxSettings.xhr=function(){return d.myXhr},s.ajaxSetup({timeout:6e4})}},yl0K:function(e){e.exports={"// HOSTED_COMMERCIAL_FANGZHENG_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMERCIAL_FANGZHENG_LIST:[{
family:"FZLanTingHei",label:"方正兰亭黑",typeList:["regular","light","bold"]},{family:"FZYuan",label:"方正圆体",typeList:["regular","light","bold"]},{family:"FZXinSong",label:"方正新书宋",typeList:["regular"]},{family:"FZKai",label:"方正楷体",typeList:["regular"]},{family:"FZGongYeHei",label:"方正工业黑",typeList:["regular"]},{family:"FZHanZhenGuangBiao",label:"方正汉真广标",typeList:["regular"]},{family:"FZZongYi",label:"方正综艺体",typeList:["regular"]}],
"// HOSTED_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMON_LIST:[{family:"PingFangSC",label:"PingFang SC",limitedDevices:["iphone","ipad","apple_watch"],typeList:["regular","bold"]},{family:"SourceHanSansSC",label:"思源黑体",typeList:["regular","bold"]},{family:"SFUIText",label:"SF UI Text",limitedDevices:["iphone","ipad","apple_watch"],typeList:["regular","bold"]},{family:"Roboto",label:"Roboto",typeList:["regular","bold"]}],
"// WESTERN_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",WESTERN_COMMON_LIST:[{family:"Arial",label:"Arial",typeList:["regular","bold"]},{family:"Courier New",label:"Courier New",typeList:["regular","bold"]},{family:"Helvetica",label:"Helvetica",typeList:["regular","light","bold"]},{family:"Times New Roman",label:"Times New Roman",typeList:["regular","bold"]}]}},zAG7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.EMAIL_REG=void 0
t.EMAIL_REG=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9-]{2,63}$/i},zQyp:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getWidgetClassName=t.getWidgetStyle=t.getFontSize=t.getBorderWidth=void 0
var f=function(e){return e.bs?Math.floor(e.bs)||1:0}
t.getBorderWidth=f
var p=function(e){var t=(e.fs||0).toFixed(1)
return 0<t&&t<MB.config.minFS&&MB.minFontSizeIssue(),t}
t.getFontSize=p
t.getWidgetStyle=function(t){var e,n,r,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",o=t.inspectables(),i={},l={top:(r=t).top,left:r.left,width:r.w(),height:r.height,right:r.left+r.w(),bottom:r.top+r.height}
if(" "!=t.zoomable&&(e=l.width,n=l.height,"mtooltip"==t.name&&("top"==t.tt_placement||"bottom"==t.tt_placement?n-=t.tt_arrow_size:e-=t.tt_arrow_size),i.width=e,i.height=n),"mtooltip"==t.name){var u=["top","right","bottom","left"].map(function(e){return e===t.tt_placement?t.tt_arrow_size+"px":0})
i.margin=u.join(" ")}"pg"==t.name&&a||(i.left=l.left,t.primary_fixed&&a?(i.position="fixed",t.primary_fixed===Widget.FIXED_TYPE.bottom?i.bottom=t.cs().height-l.bottom:i.top=l.top):i.top=l.top),i.zIndex=t.z,t.tc&&-1!=o.indexOf("tc")&&(i.color=t.tc),t.bg&&-1!=o.indexOf("bg")&&(i.backgroundColor=t.bg),t.bc&&-1!=o.indexOf("bc")&&(i.borderColor=t.bc),-1!=o.indexOf("box_shadow")&&t.box_shadow&&"line"!==t.name&&(i.boxShadow=h(JSON.parse(t.box_shadow))),-1!=o.indexOf("text_shadow")&&t.text_shadow?i.textShadow=m(
JSON.parse(t.text_shadow)):0<t.ts&&(i.textShadow="0 0 ".concat(t.ts," ").concat(t.tsc)),-1!=o.indexOf("border_radius")&&t.border_radius&&(i.borderRadius=t.border_radius.split(",").map(function(e){return"".concat(parseInt(e),"px")}).join(" ")),-1!=o.indexOf("ro")&&t.ro&&(i.transform="rotate(".concat(t.ro,"deg)"),i.WebkitTransform="rotate(".concat(t.ro,"deg)")),t.clip&&-1!=o.indexOf("clip")&&(i.clipPath=t.clip,i.WebkitClipPath=t.clip)
var c,s,d=p(t)
return-1!=o.indexOf("fs")&&0<d&&(i.fontSize=d+"px"),-1!=o.indexOf("padding")&&"mtextarea"!=t.name&&(i.padding=t.padding),-1!=o.indexOf("bs")&&"line"!==t.name&&(i.borderWidth=f(t)),-1!=o.indexOf("ls")&&"line"!==t.name&&(i.borderStyle=["solid","dotted","dashed"][t.ls]),-1!=o.indexOf("ha")&&"label"!==t.name&&(i.textAlign=t.ha),-1!=o.indexOf("lh")&&(i.lineHeight=t.lh+"px"),i.fontWeight=t.bo?"bold":"normal",i.fontStyle=t.i?"italic":"normal",!MB.isPhantom()&&"none"!==t.ani_name&&a&&(
t.ani_delay&&"0"!=t.ani_delay&&(i.animationDelay=t.ani_delay),i.animationIterationCount=t.ani_count,t.ani_duration&&"0"!=t.ani_duration&&(i.animationDuration=t.ani_duration)),c=t.v?-1!=o.indexOf("o")?t.o/100:"":a?0:.4,!t.v&&a&&(s="none"),""!==c&&(i.opacity=c),s&&(i.pointerEvents=s),t.transition&&(i.transition=t.transition),i}
t.getWidgetClassName=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n="widget ".concat(e.name);-1!=e.inspectables().indexOf("ha")&&(n+=" h".concat(e.ha)),-1!=e.inspectables().indexOf("va")&&(n+=" v".concat(e.va)),"normal"!=e.td&&(n+=" td".concat(e.td)),"pg"==e.name&&(n+=" s".concat(e.icon)),"switch"==e.name&&e.checked&&(n+=" checked"),t&&(Link.find(e.link_cids)&&e.v&&(n+=" clickable"),!MB.isPhantom()&&"none"!=e.ani_name&&e.v&&(n+=" animated "+e.ani_name))
return"sticky"==e.name&&(n+=160<e.left?" rsticky":" lsticky",n+=e.slt<20?" tsticky":e.slt>e.height-20?" bsticky":""),"rich_text"===e.name&&0==e.size_type&&(n+=" auto"),n}
var h=function(e){return e.reduce(function(e,t){return e+=" ".concat(1===t[0]?"inset ":"").concat(t[1],"px ").concat(t[2],"px ").concat(t[3],"px ").concat(t[4],"px ").concat(t[5])},"")},m=function(e){return e.reduce(function(e,t){return e+=" ".concat(t[0],"px ").concat(t[1],"px ").concat(t[2],"px ").concat(t[3])},"")}},zZYZ:function(e,t,n){},zgSj:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var v=a(n("MVZn")),o=a(n("pVnL")),i=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("a1gu")),c=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=a(n("inTe")),m=a(n("sxGJ")),g=n("/MKj"),y=a(n("xn7q")),b=n("RUem"),S=n("qOCw"),w=n("/5+U"),C=a(n("J2m7")),E=function(e){function a(){var t
return(0,i.default)(this,a),(t=(0,u.default)(this,(0,c.default)(a).call(this))).getScrollLayerRef=function(e){return t.layerRef=e},t.state={error:!1},t}return(0,s.default)(a,e),(0,l.default)(a,[{key:"componentDidMount",value:function(){this.clipBoard=new m.default('[data-type="copy"]')}},{key:"componentWillUnmount",value:function(){$(this.layerRef).perfectScrollbar("destroy"),this.clipBoard.destroy()}},{key:"componentWillReceiveProps",value:function(e){e.screenCid!=this.props.screenCid&&this.props.dispatch(
{type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!1}})}},{key:"componentDidUpdate",value:function(e){e.layer!=this.props.layer&&$(this.layerRef).perfectScrollbar({suppressScrollX:!0}),e.layer&&this.props.layer&&e.layer.id!=this.props.layer.id&&this.layerRef&&(this.layerRef.scrollTop=0)}},{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.error(e)}},{key:"render",value:function(){var e=this.props,t=e.isSelectLayer,n=e.layer,r=this.state.error
return f.default.createElement("div",{className:y.default.previewPanelLayer},n?f.default.createElement("div",{className:y.default.layerInfo,ref:this.getScrollLayerRef},r?f.default.createElement(a.Error,null):f.default.createElement(h.default,(0,o.default)({},this.props,{showGlobal:!t}))):f.default.createElement(b.Loading,null))}}]),a}(f.PureComponent);(0,d.default)(E,"Error",function(){return f.default.createElement("div",null,"Sorry!Error happend, Please refresh it")}),(0,d.default)(E,"propTypes",{
colorUnit:p.default.string.isRequired,isSelectLayer:p.default.bool.isRequired,unit:p.default.string.isRequired,ratio:p.default.number.isRequired,layer:p.default.object,screenCid:p.default.string,dispatch:p.default.func.isRequired})
var k=(0,g.connect)(function(e){var t=e.container,n=t.layers,r=n.activeLayerID,a=n.visibilityScreenID,o=n.resourceByScreen,i=t.previewSetting,l=e.model,u=l.current,c=u.screenCid,s=u.projectCid,d=l.projects,f=i.isSelectLayer,p=x(d,s).device,h=T(f,o,a,r),m=_(o,a,p)
return(0,v.default)({},i,{layer:h},m,{screenCid:c})})(E)
t.default=k
var _=(0,w.immutableTransformCache)(function(e,t,n){var r=[],a=[],o=[],i=[],l=e[t]
if(l){var u=l.layers,c=(0,S.sortScreenLayers)(u)
r=c.screenColor,i=c.globalText,a=l.documentColor,o=l.globalColor}return{screenColor:r,documentColor:a,globalColor:o,globalText:i}}),x=(0,w.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),T=(0,w.immutableTransformCache)(function(e,t,n,r){var a=t[n]
if(!a||a.layers&&0==a.layers.length)return null
var o=a.layers
return e?(0,C.default)(o,function(e){return e.id===r}):(0,v.default)({},o[0])})},zkrS:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("yTJ9")),o=r(n("knB1")),i=r(n("QkVN")),l=window,u=l.confirm,c=l.alert,s=l.MB,d=l.MBLocale,f=l.I18N,p=l.Team,h=l.Project,m=l.Combo,v=l.Template,g=l.UserTemplate,y=l.Screen,b=l.Screenstate,S=l.Widget,w=l.Widgetstate,C=l.Panel,E=l.Panelstate,k=l.Link,_=l.Collaborator,x=l.Comment,T=l.CommentThread,M=l.Asset
"zh-CN"===d&&(0,i.default)(a.default.settings.strings,o.default)
var N={MBLocale:d,parseTimeAgo:function(e){return(0,a.default)(e)}},I={Team:p,Project:h,Combo:m,Template:v,UserTemplate:g,Screen:y,Screenstate:b,Widget:S,Widgetstate:w,Panel:C,Panelstate:E,Link:k,Collaborator:_,Comment:x,CommentThread:T,Asset:M,requestCid:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"")+Math.uuid(10,16)+Date.now()},queueSave:function(){return s.AutoSaver&&s.AutoSaver.triggerSave()}},O={Global:window,Storage:s.localStorageDelegate,confirm:function(){
return u.apply(void 0,arguments)},alert:function(){return c.apply(void 0,arguments)},MB:s,I18N:f,L10N:N,SpineModel:I}
t.default=O},zy85:function(e,t,n){e.exports={"runner-control-panel":"_1X_2UmrkGlhWCjY4oDmJxO"}}}])

//# sourceMappingURL=lib-preview-c98921d549574d8739c0.js.map