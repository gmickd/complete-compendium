/*! For license information please see component---src-templates-monster-tsx-b8514390f17b5ec89333.js.LICENSE.txt */
"use strict";(self.webpackChunkadnd_compendium_static_frontend=self.webpackChunkadnd_compendium_static_frontend||[]).push([[513],{5573:function(e){var t=/["'&<>]/;e.exports=function(e){var n,a=""+e,r=t.exec(a);if(!r)return a;var o="",s=0,i=0;for(s=r.index;s<a.length;s++){switch(a.charCodeAt(s)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}i!==s&&(o+=a.substring(i,s)),i=s+1,o+=n}return i!==s?o+a.substring(i,s):o}},1339:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(9996),o=n(4854);const s=n(3415),i=n(6153),l=n(9382);var c=e=>{var t=[],n="",r=0,c="",d=e.path[0];return e.path.forEach((e=>{switch(d){case"appendix":switch(r){case 0:c=e;break;case 1:c=i[e];break;default:c="APendix"}break;case"catalog":switch(r){case 0:c=e;break;case 1:c=s[e];break;case 2:c=l[e];break;case 3:c=i[e];break;default:c="Catalog"}break;case"about":if(0===r)c=e;else c="About"}n+=`/${e}`,0!=r&&t.push(a.createElement("div",{className:"breadcrumb-module--arrow-box--8f143",key:`arrow-${e}`},"/")),t.push(a.createElement(o.Link,{className:"breadcrumb-module--bc-element--36f40",to:n,key:e},c," ")),r++})),a.createElement("div",{className:"breadcrumb-module--bc-frame--78140"},t,a.createElement("div",{className:"breadcrumb-module--bc-bg--8b107"}))},d=n(4353);var m=e=>{const t=e.url.split("/");return t.length,t.shift(),a.createElement("div",{className:"layout-module--layout-wrapper--c2f92"},a.createElement(r.Z,null),a.createElement("div",{className:"layout-module--layout--d56eb"},a.createElement(c,{path:t}),e.children),a.createElement(d.Z,null))}},1151:function(e,t,n){var a=n(7294),r=n(6153),o=n(4854);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(""),n=()=>{const e=Object.keys(r);if(void 0!==e){const a=e[(n=e.length,Math.floor(Math.random()*n))];t(a)}var n};return(0,a.useEffect)((()=>{n()}),[]),a.createElement("div",{className:"RandomMonsterButton"},a.createElement(o.Link,{to:"/appendix/"+e},a.createElement("div",{className:"random-button",onClick:n},"Random Monster")))}},8301:function(e,t){const n=new Map([["add2_01","#1250A2"],["aq","#957000"],["al","#568132"],["br","#427aa9"],["ds","#c25404"],["dr","#957000"],["dl","#9b6400"],["du","#4C4B51"],["ff","#b15f3d"],["fr","#191970"],["gh","#b06030"],["kt","#8d7206"],["lm","#2d8181"],["rd","#7f0000"],["mz","#976e09"],["ms","#e02d2d"],["ps","#976e09"],["rv","#7f0000"],["rs","#993366"],["sj","#4279a9"],["th","#c64f28"]]);t.Z=n},3055:function(e,t,n){n.r(t),n.d(t,{Head:function(){return I},default:function(){return L}});var a=n(7294),r=n(1339),o=n(4854);const s={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function i(e){return t=>{s[t]={...e,...s[t]}}}["address","main","div","figure","p","pre"].forEach(i({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(i({content:8,type:73})),["p","pre"].forEach(i({content:8,type:65})),["s","small","span","del","ins"].forEach(i({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(i({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(i({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(i({type:89}));const l=Object.freeze(s),c=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],d=Object.keys(l).filter((e=>"canvas"!==e&&"iframe"!==e)),m=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,rel:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,tabindex:1,target:1,title:1,type:1,width:1}),u=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex"});function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function p({attributes:e={},className:t,children:n=null,selfClose:r=!1,tagName:o}){const s=o;return r?a.createElement(s,g({className:t},e)):a.createElement(s,g({className:t},e),n)}class h{attribute(e,t){return t}node(e,t){return t}}var f=n(5573),D=n.n(f);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const y=/(url|image|image-set)\(/i;class v extends h{attribute(e,t){return"style"===e&&Object.keys(t).forEach((e=>{String(t[e]).match(y)&&delete t[e]})),t}}const k=/^<(!doctype|(html|head|body)(\s|>))/i,E=/^(aria-|data-|\w+:)/iu,A=/{{{(\w+)\/?}}}/;function C(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}class w{constructor(e,t={},n=[],a=[]){var r;b(this,"allowed",void 0),b(this,"banned",void 0),b(this,"blocked",void 0),b(this,"container",void 0),b(this,"content",[]),b(this,"props",void 0),b(this,"matchers",void 0),b(this,"filters",void 0),b(this,"keyIndex",void 0),this.props=t,this.matchers=n,this.filters=[...a,new v],this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(null!==(r=t.allowList)&&void 0!==r?r:d),this.banned=new Set(c),this.blocked=new Set(t.blockList)}applyAttributeFilters(e,t){return this.filters.reduce(((t,n)=>null!==t&&"function"==typeof n.attribute?n.attribute(e,t):t),t)}applyNodeFilters(e,t){return this.filters.reduce(((t,n)=>null!==t&&"function"==typeof n.node?n.node(e,t):t),t)}applyMatchers(e,t){const n={},{props:a}=this;let r=e,o=0,s=null;return this.matchers.forEach((e=>{const i=e.asTag().toLowerCase(),l=this.getTagConfig(i);if(a[e.inverseName]||!this.isTagAllowed(i))return;if(!this.canRenderChild(t,l))return;let c="";for(;r&&(s=e.match(r));){const{index:t,length:i,match:l,valid:d,void:m,...u}=s,g=e.propName+String(o);t>0&&(c+=r.slice(0,t)),d?(c+=m?`{{{${g}/}}}`:`{{{${g}}}}${l}{{{/${g}}}}`,this.keyIndex+=1,o+=1,n[g]={children:l,matcher:e,props:{...a,...u,key:this.keyIndex}}):c+=l,e.greedy?(r=c+r.slice(t+i),c=""):r=r.slice(t+(i||l.length))}e.greedy||(r=c+r)})),0===o?e:this.replaceTokens(r,n)}canRenderChild(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))}convertLineBreaks(e){const{noHtml:t,disableLineBreaks:n}=this.props;if(t||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;let a=e.replace(/\r\n/g,"\n");return a=a.replace(/\n{3,}/g,"\n\n\n"),a=a.replace(/\n/g,"<br/>"),a}createContainer(e){var t;const a=(void 0!==n.g&&n.g.INTERWEAVE_SSR_POLYFILL||C)();if(!a)return;const r=null!==(t=this.props.containerTagName)&&void 0!==t?t:"body",o="body"===r||"fragment"===r?a.body:a.createElement(r);return e.match(k)||(o.innerHTML=this.convertLineBreaks(this.props.escapeHtml?D()(e):e)),o}extractAttributes(e){const{allowAttributes:t}=this.props,n={};let a=0;return 1===e.nodeType&&e.attributes?([...e.attributes].forEach((r=>{const{name:o,value:s}=r,i=o.toLowerCase(),l=m[i]||m[o];if(!this.isSafe(e))return;if(!i.match(E)&&(!t&&(!l||2===l)||i.startsWith("on")||s.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let c="style"===i?this.extractStyleAttribute(e):s;4===l?c=!0:3===l?c=Number.parseFloat(String(c)):5!==l&&(c=String(c)),n[u[i]||i]=this.applyAttributeFilters(i,c),a+=1})),0===a?null:n):null}extractStyleAttribute(e){const t={};return Array.from(e.style).forEach((n=>{const a=e.style[n];"string"!=typeof a&&"number"!=typeof a||(t[n.replace(/-([a-z])/g,((e,t)=>String(t).toUpperCase()))]=a)})),t}getTagConfig(e){const t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return l[e]?{...t,...l[e],tagName:e}:t}isSafe(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){const t=e.getAttribute("href");if(null!=t&&t.startsWith("#"))return!0;const n=e.protocol.toLowerCase();return":"===n||"http:"===n||"https:"===n||"mailto:"===n||"tel:"===n}return!0}isTagAllowed(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(e,t){const{noHtml:n,noHtmlExceptMatchers:r,allowElements:o,transform:s,transformOnlyAllowList:i}=this.props;let l=[],c="";return[...e.childNodes].forEach((e=>{if(1===e.nodeType){const m=e.nodeName.toLowerCase(),u=this.getTagConfig(m);c&&(l.push(c),c="");const g=this.applyNodeFilters(m,e);if(!g)return;let h;if(s&&(!i||this.isTagAllowed(m))){this.keyIndex+=1;const e=this.keyIndex;h=this.parseNode(g,u);const t=s(g,h,u);if(null===t)return;if(void 0!==t)return void l.push(a.cloneElement(t,{key:e}));this.keyIndex=e-1}if(this.banned.has(m))return;if(n||r&&"br"!==m||!this.isTagAllowed(m)||!o&&!this.canRenderChild(t,u))l=[...l,...this.parseNode(g,u.tagName?u:t)];else{var d;this.keyIndex+=1;const e=this.extractAttributes(g),t={tagName:m};e&&(t.attributes=e),u.void&&(t.selfClose=u.void),l.push(a.createElement(p,{...t,key:this.keyIndex},null!==(d=h)&&void 0!==d?d:this.parseNode(g,u)))}}else if(3===e.nodeType){const a=n&&!r?e.textContent:this.applyMatchers(e.textContent||"",t);Array.isArray(a)?l=[...l,...a]:c+=a}})),c&&l.push(c),l}replaceTokens(e,t){if(!e.includes("{{{"))return e;const n=[];let a=e,r=null;for(;r=a.match(A);){const[e,o]=r,s=r.index,i=e.includes("/");0,s>0&&(n.push(a.slice(0,s)),a=a.slice(s));const{children:l,matcher:c,props:d}=t[o];let m;if(i)m=e.length,n.push(c.createElement(l,d));else{const r=a.match(new RegExp(`{{{/${o}}}}`));0,m=r.index+r[0].length,n.push(c.createElement(this.replaceTokens(a.slice(e.length,r.index),t),d))}a=a.slice(m)}return a.length>0&&n.push(a),0===n.length?"":1===n.length&&"string"==typeof n[0]?n[0]:n}}function R(e){var t;const{attributes:n,className:r,containerTagName:o,content:s,emptyContent:i,parsedContent:l,tagName:c,noWrap:d}=e,m=null!==(t=null!=o?o:c)&&void 0!==t?t:"span",u="fragment"===m||d;let g;if(l)g=l;else{const t=new w(null!=s?s:"",e).parse();t.length>0&&(g=t)}return g||(g=i),u?a.createElement(a.Fragment,null,g):a.createElement(p,{attributes:n,className:r,tagName:m},g)}function M(e){const{attributes:t,className:n,content:r="",disableFilters:o=!1,disableMatchers:s=!1,emptyContent:i=null,filters:l=[],matchers:c=[],onAfterParse:d=null,onBeforeParse:m=null,tagName:u="span",noWrap:g=!1,...p}=e,h=s?[]:c,f=o?[]:l,D=m?[m]:[],b=d?[d]:[];h.forEach((e=>{e.onBeforeParse&&D.push(e.onBeforeParse.bind(e)),e.onAfterParse&&b.push(e.onAfterParse.bind(e))}));const y=D.reduce(((t,n)=>n(t,e)),null!=r?r:""),v=new w(y,p,h,f),k=b.reduce(((t,n)=>n(t,e)),v.parse());return a.createElement(R,{attributes:t,className:n,containerTagName:e.containerTagName,emptyContent:i,noWrap:g,parsedContent:0===k.length?void 0:k,tagName:u})}var S=n(8301),T=n(1151),N=n(5198);var x=function(e,t){let n="";const a=t.match(/<p class=\"f\">([^<].+?)<\/p>/);return null!==a&&a[1]&&(n=a[1]),n=n.replace(/<.*?>/g,""),n};const F=n(7315),_=n(9382),I=e=>{let{pageContext:t}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t.title," - AD&D Complete Compendium"),a.createElement("meta",{property:"og:site_name",content:"AD&D 2nd Edition Complete Monstrous Compendium"}),a.createElement("meta",{property:"og:title",content:t.monster_data.title+" | AD&D Complete Compendium"}),a.createElement("meta",{property:"og:description",content:x(t.monster_key,t.monster_data.fullBody)}),a.createElement("meta",{property:"og:url",content:"https://www.completecompendium.com"+t.monster_path}),a.createElement("meta",{property:"og:type",content:"website"}),t.monster_data.images[1]&&t.monster_data.images[1].match(new RegExp(t.monster_key,"g"))?a.createElement(a.Fragment,null,a.createElement("meta",{property:"og:image",content:"https://www.completecompendium.com/images/monsters/img/"+t.monster_key+".gif"}),a.createElement("meta",{name:"twitter:image",content:"https://www.completecompendium.com/images/monsters/img/"+t.monster_key+".gif"})):a.createElement(a.Fragment,null),a.createElement("meta",{property:"og:image:width",content:"300"}),a.createElement("meta",{property:"og:image:height",content:"360"}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:url",content:"https://www.completecompendium.com"+t.monster_path}),a.createElement("meta",{name:"twitter:title",content:"Advanced Dungeons & Dragons 2nd Edition Complete Compendium"}),a.createElement("meta",{name:"twitter:description",content:x(t.monster_key,t.monster_data.fullBody)}))};var L=e=>{let{pageContext:t}=e;const n=t,s=n.monster_key,i=(n.title,n.sources,n.prev_key),l=n.next_key,c=n.monster_data.fullBody;let d=null,m=!0,u="";if(m=!(!n.monster_data.images[1]||!n.monster_data.images[1].match(new RegExp(n.monster_key,"g"))),m){u="/images/monsters/img/"+n.monster_key+".gif";let e="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";d=a.createElement("img",{className:N.uz,src:u,alt:n.monster_data.title,title:n.monster_data.title,onError:t=>{let{currentTarget:a}=t;a.onerror=null,a.alt="This monster is missing it's image. It will be found eventually.",a.src=e,a.title="Missing image of "+n.monster_data.title}})}const g=n.monster_data.setting,p=F[g];var h="hr2",f={};if(p){h="hr2-"+p;f={color:S.Z.get(p)}}let D=a.createElement("div",null,a.createElement("div",{className:N.Ze},a.createElement("div",{className:N.j0},a.createElement(T.Z,null)),a.createElement("div",{className:N.sS},a.createElement(o.Link,{className:N.ej,to:"../"+i},a.createElement("div",{className:N.nP},"Previous")),a.createElement(o.Link,{className:N.ej,to:"../"+l},a.createElement("div",{className:N.nP},"Next")))));return a.createElement(a.Fragment,null,a.createElement(r.Z,{url:`/appendix/${s}`},a.createElement("div",null,D,a.createElement("div",{className:N.i6},a.createElement("h1",{style:f},n.monster_data.title),a.createElement(o.Link,{to:"/catalog/"+F[n.monster_data.setting]},a.createElement("img",{className:N.O7,src:`/img_settings/${F[n.monster_data.setting]}.gif`,alt:n.monster_data.setting+"Campaign Setting Logo",title:n.monster_data.setting}))),a.createElement("hr",{className:N.VI}),a.createElement("hr",{className:h}),a.createElement("div",{className:N.je},d),a.createElement(M,{className:"interweave",content:c}),a.createElement("div",{className:N.PA},a.createElement("div",{className:N.lC},"Sourcebooks:"),a.createElement("div",{className:N.t},n.monster_data.hasOwnProperty("TSR")&&null!=n.monster_data.TSR?n.monster_data.TSR.map((e=>a.createElement("div",{key:e},a.createElement(o.Link,{to:"/catalog/"+F[n.monster_data.setting]+"/"+e},_[e]," (",e,")"),a.createElement("br",null)))):"No TSR")))))}},5198:function(e,t,n){n.d(t,{O7:function(){return m},PA:function(){return u},VI:function(){return r},Ze:function(){return c},ej:function(){return l},i6:function(){return g},j0:function(){return d},je:function(){return s},lC:function(){return h},nP:function(){return i},sS:function(){return a},t:function(){return p},uz:function(){return o}});var a="monsterpage-module--horizontal-monster-links--21e47",r="monsterpage-module--hr1--f5b5c",o="monsterpage-module--monster-image--bb97d",s="monsterpage-module--monster-img-frame--67133",i="monsterpage-module--monster-nav--3c352",l="monsterpage-module--monster-nav-link--495ca",c="monsterpage-module--monster-nav-links--c9a5a",d="monsterpage-module--page-random-monster-button--2d0e4",m="monsterpage-module--setting-image--e8b92",u="monsterpage-module--source-list--66a63",g="monsterpage-module--top-header--5efbc",p="monsterpage-module--tsr--2eb82",h="monsterpage-module--tsr-label--b394a"},3415:function(e){e.exports=JSON.parse('{"add2_01":"Advanced Dungeons & Dragons 2nd Edition","aq":"Al-Qadim (Forgotten Realms)","al":"Alternity","br":"Birthright","ds":"Dark Sun","dr":"Dragon Magazine","dl":"Dragonlance","du":"Dungeon Magazine","ff":"Fiends Folio","fr":"Forgotten Realms","gh":"Greyhawk","kt":"Kara-Tur (Forgotten Realms)","lm":"Lankhmar","rd":"Masque of the Red Death (Ravenloft)","mz":"Maztica (Forgotten Realms)","ms":"Mystara","ps":"Planescape","rv":"Ravenloft","rs":"Red Steel (Mystara)","sj":"Spelljammer","th":"The Horde (Forgotten Realms)"}')},7315:function(e){e.exports=JSON.parse('{"ADnD":"add2_01","Advanced Dungeons &amp; Dragons 2nd Edition":"add2_01","Advanced Dungeons & Dragons 2nd Edition":"add2_01","Al-Qadim (Forgotten Realms)":"aq","Alternity":"al","Birthright":"br","Dark Sun":"ds","Dragon Magazine":"dr","Dragonlance":"dl","Dungeon Magazine":"du","Fiends Folio":"ff","Forgotten Realms":"fr","Greyhawk":"gh","Kara-Tur (Forgotten Realms)":"kt","Lankhmar":"lm","Masque of the Red Death (Ravenloft)":"rd","Maztica (Forgotten Realms)":"mz","Mystara":"ms","Planescape":"ps","Ravenloft":"rv","Red Steel (Mystara)":"rs","Spelljammer":"sj","The Horde (Forgotten Realms)":"th"}')},9382:function(e){e.exports=JSON.parse('{"1049":"AD&D Adventures In Space","1050":"Time of the Dragon","1053":"Ravenloft Campaign Setting, 1st Ed. (\\"Realm of Terror\\")","1055":"The Horde (boxed set)","1060":"Ruins of Undermountain I","1064":"From the Ashes","1065":"Legend of the Spelljammer","1066":"Maztica (boxed set)","1083":"Menzoberranzan","1084":"The Ruins of Myth Drannor","1085":"Forgotten Realms Campaign Setting, Revised Edition","1088":"Castles Forlorn","1089":"Dragon Mountain","1090":"Cardmaster Adventure Design Deck","1091":"City of Delights","1109":"City of Splendors","1120":"Ruins of Zhentil Keep","1121":"Spellbound: Thay, Rasheman, & Aglarond","1124":"The Nightmare Lands","1145":"The Rod of Seven Parts","1146":"Requiem: The Grim Harvest","1162":"Return to the Tomb of Horrors","1163":"The Shadow Rift","1602":"Companion Books: The Madness of Seasons","2012":"Fiend Folio","2101":"Player\'s Handbook","2102":"MC1 Volume I (w/binder #1)","2103":"MC2 Volume II","2104":"MC3 Forgotten Realms Appendix I","2105":"MC4 Dragonlance Appendix (w/binder #2)","2107":"MC5 Greyhawk Appendix","2109":"MC7 Spelljammer Appendix I","2116":"MC6 Kara-Tur Appendix","2118":"MC8 Outer Planes Appendix","2119":"MC9 Spelljammer Appendix II","2122":"MC10 Ravenloft Appendix I","2125":"MC11 Forgotten Realms Appendix II","2129":"MC13 Al-Qadim Appendix","2132":"MC14 Fiend Folio Appendix","2137":"Lankhmar: City of Adventure (2nd Ed.)","2139":"Ravenloft Appendix II: Children of the Night","2140":"Monstrous Manual","2144":"DMRG6 Complete Book of Villains","2145":"Monstrous Compendium, 1994 Annual, Volume 1","2146":"CGR3 The Complete Sha\'ir\'s Handbook","2153":"Ravenloft Appendix III","2158":"Monstrous Compendium, 1995 Annual, Volume 2","2166":"Monstrous Compendium, 1996 Annual, Volume 3","2173":"Monstrous Compendium, 1997 Annual, Volume 4","2400":"Dark Sun Campaign Setting (original)","2403":"The Prism Pentad 2, The Crimson Legion","2405":"MC12 Dark Sun Appendix I - Terrors of the Desert","2406":"DSQ1 Road to Urik","2408":"Dragon Kings (hardback)","2412":"DSQ3 Asticlian Gambit","2413":"DSR4 Valley of Dust and Fire","2417":"DSM1 Black Flames","2418":"The Ivory Triangle","2422":"DSS2 Earth, Air, Fire, and Water","2432":"City by the Silt Sea","2433":"Dark Sun Appendix II - Terrors Beyond Tyr","2434":"The Chronicles of Athas 1, The Brazen Gambit","2437":"Thri-Kreen of Athas","2438":"Dark Sun Campaign Setting (revised)","2439":"Windriders of the Jagged Cliffs","2444":"Mind Lords of the Last Sea","2501":"Mystara Appendix","2524":"Monstrous Compendium Savage Coast Appendix (Online Exclusive)","2600":"Planescape Campaign Setting","2602":"Planescape I","2603":"Planes of Chaos","2607":"Planes of Law","2613":"Planescape II","2615":"Planes of Conflict","2621":"Hellbound: The Blood War","2626":"Doors to the Unknown","2631":"Dead Gods","2635":"Planescape III","2800":"Alternity Players Handbook","2805":"Alien Compendium: Creatures of the Verge","3110":"Warlock of the Stonecrowns","3117":"Book of Magecraft","3121":"The Rjurik Highlands","3140":"Blood Spawn: Creatures of Light and Shadow","9258":"OA7 Test of the Samurai","9270":"WG12 Vale of the Mage","9274":"FR10 Old Empires","9275":"DLA1 Dragon Dawn","9278":"DLR1 Otherlands","9279":"WGA1 Falcon\'s Revenge","9289":"WGA2 Falconmaster","9295":"LNR1 Wonders of Lankhmar","9300":"FR11 Dwarves Deep","9302":"WGA3 Flames of the Falcon","9309":"WGA4 Vecna Lives!","9321":"RA2 Ship of Horrors","9333":"FMA1 Fires of Zatal","9340":"FMA2 Endless Armies","9344":"DLR2 Taladas: The Minotaurs","9348":"RR4 Islands of Terror","9349":"FMQ1 City of Gold","9351":"FR14 The Great Glacier","9364":"RQ2 Thoughts of Darkness","9376":"HR3 Celts Campaign","9388":"FR16 The Shining South","9391":"FRQ3 Doom of Daggerdale","9416":"RR7 Van Richten\'s Guide to Werebeasts","9419":"RM5 Dark of the Moon","9430":"FOR5 Elves of Evermeet","9433":"ALQ4 Secrets of the Lamp","9439":"RE1 Adam\'s Wrath","9444":"Departure","9449":"Corsairs of the Great Sea","9452":"The Awakening","9487":"FOR7 Giantcraft","9491":"FOR8 Pages from the Mages","9506":"Chronomancer","9526":"Death Ascendant","9529":"A Guide to Transylvania","9533":"The Gates of Firestorm Peak","9535":"Volo\'s Guide to All Things Magical","9539":"The Sea Devils","9540":"How the Mighty Are Fallen","9541":"Servants of Darkness","9547":"FOR11 Cult of the Dragon","9569":"The Illithiad","9570":"A Darkness Gathering","9572":"Dawn of the Overmind","9574":"For Duty & Deity","9575":"The City of Ravens Bluff","9582":"Vecna Reborn","11372":"Chaos Spawn","11383":"Campaign Option: Council of Wyrms","11405":"The Wyrmskull Throne","11430":"FOR13 Secrets of the Magister","11431":"Guide to Hell","11444":"Dungeons of Despair","11507":"Van Richten\'s Monster Hunter\'s Compendium, Volume Two","Dragon156":"Dragon #156","Dragon159":"Dragon #159","Dragon162":"Dragon #162","Dragon163":"Dragon #163","Dragon165":"Dragon #165","Dragon167":"Dragon #167","Dragon170":"Dragon #170","Dragon172":"Dragon #172","Dragon174":"Dragon #174","Dragon180":"Dragon #180","Dragon182":"Dragon #182","Dragon185":"Dragon #185","Dragon186":"Dragon #186","Dragon187":"Dragon #187","Dragon190":"Dragon #190","Dragon191":"Dragon #191","Dragon198":"Dragon #198","Dragon199":"Dragon #199","Dragon206":"Dragon #206","Dragon223":"Dragon #223","Dragon227":"Dragon #227","Dragon228":"Dragon #228","Dragon235":"Dragon #235","Dragon237":"Dragon #237","Dragon238":"Dragon #238","Dragon239":"Dragon #239","Dragon242":"Dragon #242","Dragon243":"Dragon #243","Dragon244":"Dragon #244","Dragon247":"Dragon #247","Dragon248":"Dragon #248","Dragon267":"Dragon #267","Dragon268":"Dragon #268","Dragon269":"Dragon #269","Dragon270":"Dragon #270","Dragon271":"Dragon #271","Dragon272":"Dragon #272","Dragon210":"Dragon #210","DragonMagazinAnnual1996":"DragonMagazinAnnual1996","DragonMagazinAnnual1997":"DragonMagazinAnnual1997","DragonMagazineAnnual1997":"DragonMagazineAnnual1997","DragonMagazineAnnual1998":"DragonMagazineAnnual1998","Dungeon23":"Dungeon #23","Dungeon24":"Dungeon #24","Dungeon28":"Dungeon #28","Dungeon31":"Dungeon #31","Dungeon33":"Dungeon #33","Dungeon35":"Dungeon #35","Dungeon37":"Dungeon #37","Dungeon54":"Dungeon #54","Dungeon56":"Dungeon #56","Dungeon57":"Dungeon #57","Dungeon61":"Dungeon #61","Dungeon62":"Dungeon #62","Dungeon64":"Dungeon #64","Dungeon71":"Dungeon #71","Dungeon76":"Dungeon #76"}')}}]);
//# sourceMappingURL=component---src-templates-monster-tsx-b8514390f17b5ec89333.js.map