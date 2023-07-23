"use strict";(self.webpackChunkadnd_compendium_static_frontend=self.webpackChunkadnd_compendium_static_frontend||[]).push([[111],{1151:function(e,t,n){var a=n(7294),r=n(6153),o=n(4854);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(""),n=()=>{const e=Object.keys(r);if(void 0!==e){const a=e[(n=e.length,Math.floor(Math.random()*n))];t(a)}var n};return(0,a.useEffect)((()=>{n()}),[]),a.createElement("div",{className:"RandomMonsterButton"},a.createElement(o.Link,{to:"/appendix/"+e},a.createElement("div",{className:"random-button",onClick:n},"Random Monster")))}},8301:function(e,t){const n=new Map([["add2_01","#1250A2"],["aq","#957000"],["al","#568132"],["br","#427aa9"],["ds","#c25404"],["dr","#957000"],["dl","#9b6400"],["du","#4C4B51"],["ff","#b15f3d"],["fr","#191970"],["gh","#b06030"],["kt","#8d7206"],["lm","#2d8181"],["rd","#7f0000"],["mz","#976e09"],["ms","#e02d2d"],["ps","#976e09"],["rv","#7f0000"],["rs","#993366"],["sj","#4279a9"],["th","#c64f28"]]);t.Z=n},4673:function(e,t,n){n.r(t);var a=n(7294),r=n(8541),o=n(4854),s=n(8301),l=n(1151),m=n(5198);const i=n(7315),c=n(9382);t.default=e=>{let{pageContext:t}=e;const n=t,d=n.monster_key,u=(n.title,n.sources,n.prev_key),g=n.next_key,f=n.catelog_book,p=n.catelog_setting;let _=null,v=!0,E="";if(v=!(!n.monster_data.images[1]||!n.monster_data.images[1].match(new RegExp(n.monster_key,"g"))),v){E="/images/monsters/img/"+n.monster_key+".gif";let e="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";_=a.createElement("img",{className:m.uz,src:E,alt:n.monster_data.title,title:n.monster_data.title,onError:t=>{let{currentTarget:a}=t;a.onerror=null,a.alt="This monster is missing it's image. It will be found eventually.",a.src=e,a.title="Missing image of "+n.monster_data.title}})}"undefined"!=typeof document&&(document.title=n.monster_data.title+" - Complete Compendium");const h=n.monster_data.setting,k=i[h];var b="hr2",N={};if(k){b="hr2-"+k;N={color:s.Z.get(k)}}const y=n.monster_data.fullBody,R=a.createElement("div",{className:"set-html",dangerouslySetInnerHTML:{__html:y}});return"horax"==d&&(console.log("booktemplate monster, HORAX"),console.log("prev",u),console.log("next",g)),a.createElement(r.Z,{url:"/catalog/"+p+"/"+f+"/"+d},a.createElement("div",null,a.createElement("div",null,a.createElement("div",{className:m.Ze},a.createElement("div",{className:m.nP},a.createElement(o.Link,{className:m.ej,to:"../"+u},"Previous")),a.createElement("div",{className:m.nP},a.createElement(l.Z,null)),a.createElement("div",{className:m.nP},a.createElement(o.Link,{className:m.ej,to:"../"+g},"Next")))),a.createElement("div",{className:m.i6},a.createElement("h1",{style:N},n.monster_data.title),a.createElement(o.Link,{to:"/catalog/"+i[n.monster_data.setting]},a.createElement("img",{className:m.O7,src:"/img_settings/"+i[n.monster_data.setting]+".gif",alt:n.monster_data.setting+"Campaign Setting Logo",title:n.monster_data.setting}))),a.createElement("hr",{className:b}),a.createElement("hr",{className:m.VI}),a.createElement("div",{className:m.je},_),R,a.createElement("div",{className:m.PA},a.createElement("div",{className:m.lC},"Sourcebooks:"),a.createElement("div",{className:m.t},n.monster_data.hasOwnProperty("TSR")&&null!=n.monster_data.TSR?n.monster_data.TSR.map((e=>a.createElement("div",{key:e},a.createElement(o.Link,{to:"/catalog/"+i[n.monster_data.setting]+"/"+e},c[e]," (",e,")"),a.createElement("br",null)))):"No TSR"))))}},5198:function(e,t,n){n.d(t,{O7:function(){return i},PA:function(){return c},VI:function(){return a},Ze:function(){return m},ej:function(){return l},i6:function(){return d},je:function(){return o},lC:function(){return g},nP:function(){return s},t:function(){return u},uz:function(){return r}});var a="monsterpage-module--hr1--f5b5c",r="monsterpage-module--monster-image--bb97d",o="monsterpage-module--monster-img-frame--67133",s="monsterpage-module--monster-nav--3c352",l="monsterpage-module--monster-nav-link--495ca",m="monsterpage-module--monster-nav-links--c9a5a",i="monsterpage-module--setting-image--e8b92",c="monsterpage-module--source-list--66a63",d="monsterpage-module--top-header--5efbc",u="monsterpage-module--tsr--2eb82",g="monsterpage-module--tsr-label--b394a"},7315:function(e){e.exports=JSON.parse('{"ADnD":"add2_01","Advanced Dungeons &amp; Dragons 2nd Edition":"add2_01","Advanced Dungeons & Dragons 2nd Edition":"add2_01","Al-Qadim (Forgotten Realms)":"aq","Alternity":"al","Birthright":"br","Dark Sun":"ds","Dragon Magazine":"dr","Dragonlance":"dl","Dungeon Magazine":"du","Fiends Folio":"ff","Forgotten Realms":"fr","Greyhawk":"gh","Kara-Tur (Forgotten Realms)":"kt","Lankhmar":"lm","Masque of the Red Death (Ravenloft)":"rd","Maztica (Forgotten Realms)":"mz","Mystara":"ms","Planescape":"ps","Ravenloft":"rv","Red Steel (Mystara)":"rs","Spelljammer":"sj","The Horde (Forgotten Realms)":"th"}')}}]);
//# sourceMappingURL=component---src-templates-bookmonster-tsx-c5ccfdec193452b6e938.js.map