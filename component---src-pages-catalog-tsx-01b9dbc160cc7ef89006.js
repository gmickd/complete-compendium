"use strict";(self.webpackChunkcomplete_compendium=self.webpackChunkcomplete_compendium||[]).push([[248],{9972:function(e,a,n){n.d(a,{Z:function(){return r}});var o=n(7294),t=n(4854);var r=function(e){return o.createElement("div",{className:"bookcard-module--book-card--80c92"},o.createElement("div",{className:"bookcard-module--book-card-header-rectangle--5729a"},o.createElement("p",{className:"bookcard-module--book-card-header--1db8a"},e.title)),o.createElement("div",{className:"bookcard-module--book_arrow--25480"},o.createElement("div",{className:"bookcard-module--book_point-left--f3a5e"}),o.createElement("div",{className:"bookcard-module--book_line--e18a0"}),o.createElement("div",{className:"bookcard-module--book_point-right--1535f"})),o.createElement(t.Link,{to:`/catalog/${e.category}/${e.id}`,className:"bookcard-module--book-link--0cee9"},o.createElement("div",{className:"bookcard-module--hover01--6e188"},o.createElement("figure",null,o.createElement("img",{src:"/images/Books/Hi Resolution/"+e.id+".jpg",className:"bookcard-module--book_img-2--b8199",alt:e.title+"Cover art",title:e.title,loading:"lazy",onError:a=>{let{currentTarget:n}=a;n.onerror=null,n.alt="This monster is missing it's image. It will be found eventually.",n.src="/img/placeholder.svg",n.title="Missing book cover image of "+e.title}})))),o.createElement("div",{className:"bookcard-module--group-1-2--918c9"},o.createElement("div",{className:"bookcard-module--book-card-footer-rectangle--90228"},o.createElement("p",{className:"bookcard-module--book-card-description-text--136e3"},e.id))))}},1339:function(e,a,n){n.d(a,{Z:function(){return u}});var o=n(7294),t=n(9996),r=n(4854);const s=n(3415),g=n(6153),l=n(9382);var i=e=>{var a=[],n="",t=0,i="",d=e.path[0];return e.path.forEach((e=>{switch(d){case"appendix":switch(t){case 0:i=e;break;case 1:i=g[e];break;default:i="APendix"}break;case"catalog":switch(t){case 0:i=e;break;case 1:i=s[e];break;case 2:i=l[e];break;case 3:i=g[e];break;default:i="Catalog"}break;case"about":if(0===t)i=e;else i="About"}n+=`/${e}`,0!=t&&a.push(o.createElement("div",{className:"breadcrumb-module--arrow-box--8f143",key:`arrow-${e}`},"/")),a.push(o.createElement(r.Link,{className:"breadcrumb-module--bc-element--36f40",to:n,key:e},i," ")),t++})),o.createElement("div",{className:"breadcrumb-module--bc-frame--78140"},a,o.createElement("div",{className:"breadcrumb-module--bc-bg--8b107"}))},d=n(4353);var u=e=>{const a=e.url.split("/");return a.length,a.shift(),o.createElement("div",{className:"layout-module--layout-wrapper--c2f92"},o.createElement(t.Z,null),o.createElement("div",{className:"layout-module--layout--d56eb"},o.createElement(i,{path:a}),e.children),o.createElement(d.Z,null))}},235:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},catalog:function(){return k},default:function(){return A}});var o=n(7294),t=n(1339),r=n(4854);n(7315);const s=n(2137),g=n(7872),l=n(3415);function i(){const{0:e,1:a}=(0,o.useState)(new Array),{0:n,1:t}=(0,o.useState)(new Array);(0,o.useEffect)((()=>{(async()=>{const e=g;var n=new Array;for(let a=0;a<e.length;a++)n.push(e[a].setting_name);a(e),t(n)})()}),[]);let i=[];return Object.entries(l).forEach(((e,a)=>{let[n,t]=e;"string"!=typeof t||i.push(o.createElement("div",{className:"setting-frame",title:n,key:n},o.createElement(r.Link,{to:`/catalog/${n}`,className:"category"},o.createElement("div",{className:"setting-button"},o.createElement("img",{className:"catImg",src:"/images/grf/"+n+".gif",alt:t+"image"}),o.createElement("div",{className:"setting-subtitle"},o.createElement("div",{className:"setting-title"},t),o.createElement("div",{className:"setting-world"},s[l[n]]))))))})),o.createElement(o.Fragment,null,o.createElement("div",{className:"CategoryList"},i))}var d=n(9972);const u=n(9382),c=n(63),m=n(7315),D={display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"};function h(){const e=[];var a={};for(const[n,o]of Object.entries(c))for(const e of o)a[e]=m[n];for(const[n]of Object.entries(u))e.push(o.createElement(d.Z,{key:n,id:n,category:a[n],title:u[n]}));return o.createElement("div",{style:D},e)}var p="catalog-module--CatalogDescription--ab901",f="catalog-module--catalog-title--8fbbd";function k(){return"undefined"!=typeof document&&(document.title="Catalog - Complete Compendium"),o.createElement(o.Fragment,null,o.createElement(t.Z,{url:"/catalog"},o.createElement("div",{className:"backgroundCatalog"},o.createElement(i,null),o.createElement("h2",{className:"catalogTitle",id:"settings"},"All Campaign Settings"),o.createElement("div",{className:p},"Browse monster books by setting or browse all at once."),o.createElement("h2",{className:f,id:"books"},"All Books"),o.createElement(h,null))))}var A=k;function b(e){return o.createElement(o.Fragment,null,o.createElement("title",null,"Catalog - AD&D 2e Complete Compendium"))}},3415:function(e){e.exports=JSON.parse('{"add2_01":"Advanced Dungeons & Dragons 2nd Edition","aq":"Al-Qadim (Forgotten Realms)","al":"Alternity","br":"Birthright","ds":"Dark Sun","dr":"Dragon Magazine","dl":"Dragonlance","du":"Dungeon Magazine","ff":"Fiends Folio","fr":"Forgotten Realms","gh":"Greyhawk","kt":"Kara-Tur (Forgotten Realms)","lm":"Lankhmar","rd":"Masque of the Red Death (Ravenloft)","mz":"Maztica (Forgotten Realms)","ms":"Mystara","ps":"Planescape","rv":"Ravenloft","rs":"Red Steel (Mystara)","sj":"Spelljammer","th":"The Horde (Forgotten Realms)"}')},7315:function(e){e.exports=JSON.parse('{"ADnD":"add2_01","Advanced Dungeons &amp; Dragons 2nd Edition":"add2_01","Advanced Dungeons & Dragons 2nd Edition":"add2_01","Al-Qadim (Forgotten Realms)":"aq","Alternity":"al","Birthright":"br","Dark Sun":"ds","Dragon Magazine":"dr","Dragonlance":"dl","Dungeon Magazine":"du","Fiends Folio":"ff","Forgotten Realms":"fr","Greyhawk":"gh","Kara-Tur (Forgotten Realms)":"kt","Lankhmar":"lm","Masque of the Red Death (Ravenloft)":"rd","Maztica (Forgotten Realms)":"mz","Mystara":"ms","Planescape":"ps","Ravenloft":"rv","Red Steel (Mystara)":"rs","Spelljammer":"sj","The Horde (Forgotten Realms)":"th"}')},2137:function(e){e.exports=JSON.parse('{"Advanced Dungeons & Dragons 2nd Edition":"Generic Monsters","Alternity":"Generic","Al-Qadim (Forgotten Realms)":"Zakhara (Toril)","Birthright":"Cerilia","Dark Sun":"Athas","Dragon Magazine":"Various","Dragonlance":"Krynn","Dungeon Magazine":"Various","Fiends Folio":"Generic","Forgotten Realms":"Toril","Greyhawk":"Oerth","The Horde (Forgotten Realms)":"Hordelands (Toril)","Kara-Tur (Forgotten Realms)":"Kara-Tur (Toril)","Lankhmar":"Nehwon","Masque of the Red Death (Ravenloft)":"Gothic Earth","Maztica (Forgotten Realms)":"Maztica (Toril)","Mystara":"The Known World","Planescape":"the Great Wheel","Ravenloft":"Demiplane of Dread","Red Steel (Mystara)":"Savage Coast (Mystara)","Spelljammer":"Outer Space/All"}')},63:function(e){e.exports=JSON.parse('{"Advanced Dungeons & Dragons 2nd Edition":["2101","2140","2158","9539","2103","2145","2166","2173","9533","2102","9376","2109","9547","9569","1089","2107","9572","9570","2125","2146","11383"],"Al-Qadim (Forgotten Realms)":["2146","9449","1091","2129","9433"],"Alternity":["2800","2805"],"Birthright":["3117","3140","3110","3121"],"Dark Sun":["2433","2400","2438","2405","2408","2422","2432","2418","2439","2417","2444","2406","2413","2437","2403","2412"],"Dragon Magazine":["DragonMagazineAnnual1998","Dragon238","Dragon210","DragonMagazinAnnual1996","DragonMagazineAnnual1997","Dungeon#76","DragonMagazinAnnual1997"],"Dragonlance":["2105","9278","11372","9344","1050","9275"],"Dungeon Magazine":["Dungeon24","Dungeon35","Dungeon37","Dungeon54","Dungeon56","Dungeon61","Dungeon62","Dungeon64","Dungeon71","Dungeon76"],"Fiends Folio":["2132"],"Forgotten Realms":["2125","1083","1120","1060","2104","9430","9274","9300","9491","9547","9575","1109","9351","11405","1121","9574","9487","9388","9391","11430","1084","1085","9535","9540"],"Greyhawk":["1064","2107","2012","1162","9279","9309","9302","9270","9289"],"The Horde (Forgotten Realms)":["1055"],"Kara-Tur (Forgotten Realms)":["2116","2104","9258"],"Lankhmar":["2137","9295"],"Masque of the Red Death (Ravenloft)":["9529"],"Maztica (Forgotten Realms)":["9333","9340","1066","9349"],"Mystara":["2501","2524","9533"],"Planescape":["2118","2602","2613","Dungeon#23","2615","2600","2635","2607","2603","11431","1145","2129","9506","2621","2119","2132","2107","2626","Dungeon#31","2433","2122","Dungeon#28","9444","9533","2631","1602"],"Ravenloft":["1088","2153","1163","9419","1124","2122","2139","9452","1146","1053","9439","9416","9348","9582","11507","9364","9321","9541","9526"],"Red Steel (Mystara)":["2524"],"Spelljammer":["2109","2119","1065","1049"]}')},7872:function(e){e.exports=JSON.parse('[{"setting_key":"add2_01","setting_name":"Advanced Dungeons & Dragons 2nd Edition","source_books":["2101","2140","2158","9539","2103","2145","2166","2173","9533","2102","9376","2109","9547","9569","1089","2107","9572","9570","2125","2146","11383"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"aq","setting_name":"Al-Qadim (Forgotten Realms)","source_books":["2146","9449","1091","2129","9433"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"al","setting_name":"Alternity","source_books":["2800","2805"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"br","setting_name":"Birthright","source_books":["3117","3140","3110","3121"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"ds","setting_name":"Dark Sun","source_books":["2433","2400","2438","2405","2408","2422","2432","2418","2439","2417","2444","2406","2413","2437","2403","2412"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dr","setting_name":"Dragon Magazine","source_books":["DragonMagazineAnnual1998","Dragon238","Dragon210","DragonMagazinAnnual1996","DragonMagazineAnnual1997","DragonMagazineAnnual1997","Dragon156","Dragon159","Dragon162","Dragon163","Dragon165","Dragon167","Dragon170","Dragon172","Dragon174","Dragon180","Dragon182","Dragon185","Dragon186","Dragon187","Dragon190","Dragon191","Dragon198","Dragon199","Dragon206","Dragon210","Dragon223","Dragon227","Dragon228","Dragon235","Dragon237","Dragon238","Dragon239","Dragon242","Dragon243","Dragon244","Dragon247","Dragon248","Dragon267","Dragon268","Dragon269","Dragon270","Dragon271","Dragon272"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dl","setting_name":"Dragonlance","source_books":["2105","9278","11372","9344","1050","9275"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"du","setting_name":"Dungeon Magazine","source_books":["Dungeon23","Dungeon24","Dungeon28","Dungeon31","Dungeon33","Dungeon35","Dungeon37","Dungeon54","Dungeon56","Dungeon57","Dungeon61","Dungeon62","Dungeon64","Dungeon71","Dungeon76"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"ff","setting_name":"Fiends Folio","source_books":["2132"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"fr","setting_name":"Forgotten Realms","source_books":["2125","1083","1120","1060","2104","9430","9274","9300","9491","9547","9575","1109","9351","11405","1121","9574","9487","9388","9391","11430","1084","1085","9535","9540"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"gh","setting_name":"Greyhawk","source_books":["1064","2107","2012","1162","9279","9309","9302","9270","9289"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"kt","setting_name":"Kara-Tur (Forgotten Realms)","source_books":["2116","2104","9258"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"lm","setting_name":"Lankhmar","source_books":["2137","9295"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"rd","setting_name":"Masque of the Red Death (Ravenloft)","source_books":["9529"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"mz","setting_name":"Maztica (Forgotten Realms)","source_books":["9333","9340","1066","9349"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"ms","setting_name":"Mystara","source_books":["2501","2524","9533"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"ps","setting_name":"Planescape","source_books":["2118","2602","2613","2615","2600","2635","2607","2603","11431","1145","2129","9506","2621","2119","2132","2107","2626","2433","2122","9444","9533","2631","1602"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"rv","setting_name":"Ravenloft","source_books":["1088","2153","1163","9419","1124","2122","2139","9452","1146","1053","9439","9416","9348","9582","11507","9364","9321","9541","9526"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"rs","setting_name":"Red Steel (Mystara)","source_books":["2524"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"sj","setting_name":"Spelljammer","source_books":["2109","2119","1065","1049"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"th","setting_name":"The Horde (Forgotten Realms)","source_books":["1055"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"}]')},9382:function(e){e.exports=JSON.parse('{"1049":"AD&D Adventures In Space","1050":"Time of the Dragon","1053":"Ravenloft Campaign Setting, 1st Ed. (\\"Realm of Terror\\")","1055":"The Horde (boxed set)","1060":"Ruins of Undermountain I","1064":"From the Ashes","1065":"Legend of the Spelljammer","1066":"Maztica (boxed set)","1083":"Menzoberranzan","1084":"The Ruins of Myth Drannor","1085":"Forgotten Realms Campaign Setting, Revised Edition","1088":"Castles Forlorn","1089":"Dragon Mountain","1090":"Cardmaster Adventure Design Deck","1091":"City of Delights","1109":"City of Splendors","1120":"Ruins of Zhentil Keep","1121":"Spellbound: Thay, Rasheman, & Aglarond","1124":"The Nightmare Lands","1145":"The Rod of Seven Parts","1146":"Requiem: The Grim Harvest","1162":"Return to the Tomb of Horrors","1163":"The Shadow Rift","1602":"Companion Books: The Madness of Seasons","2012":"Fiend Folio","2101":"Player\'s Handbook","2102":"MC1 Volume I (w/binder #1)","2103":"MC2 Volume II","2104":"MC3 Forgotten Realms Appendix I","2105":"MC4 Dragonlance Appendix (w/binder #2)","2107":"MC5 Greyhawk Appendix","2109":"MC7 Spelljammer Appendix I","2116":"MC6 Kara-Tur Appendix","2118":"MC8 Outer Planes Appendix","2119":"MC9 Spelljammer Appendix II","2122":"MC10 Ravenloft Appendix I","2125":"MC11 Forgotten Realms Appendix II","2129":"MC13 Al-Qadim Appendix","2132":"MC14 Fiend Folio Appendix","2137":"Lankhmar: City of Adventure (2nd Ed.)","2139":"Ravenloft Appendix II: Children of the Night","2140":"Monstrous Manual","2144":"DMRG6 Complete Book of Villains","2145":"Monstrous Compendium, 1994 Annual, Volume 1","2146":"CGR3 The Complete Sha\'ir\'s Handbook","2153":"Ravenloft Appendix III","2158":"Monstrous Compendium, 1995 Annual, Volume 2","2166":"Monstrous Compendium, 1996 Annual, Volume 3","2173":"Monstrous Compendium, 1997 Annual, Volume 4","2400":"Dark Sun Campaign Setting (original)","2403":"The Prism Pentad 2, The Crimson Legion","2405":"MC12 Dark Sun Appendix I - Terrors of the Desert","2406":"DSQ1 Road to Urik","2408":"Dragon Kings (hardback)","2412":"DSQ3 Asticlian Gambit","2413":"DSR4 Valley of Dust and Fire","2417":"DSM1 Black Flames","2418":"The Ivory Triangle","2422":"DSS2 Earth, Air, Fire, and Water","2432":"City by the Silt Sea","2433":"Dark Sun Appendix II - Terrors Beyond Tyr","2434":"The Chronicles of Athas 1, The Brazen Gambit","2437":"Thri-Kreen of Athas","2438":"Dark Sun Campaign Setting (revised)","2439":"Windriders of the Jagged Cliffs","2444":"Mind Lords of the Last Sea","2501":"Mystara Appendix","2524":"Monstrous Compendium Savage Coast Appendix (Online Exclusive)","2600":"Planescape Campaign Setting","2602":"Planescape I","2603":"Planes of Chaos","2607":"Planes of Law","2613":"Planescape II","2615":"Planes of Conflict","2621":"Hellbound: The Blood War","2626":"Doors to the Unknown","2631":"Dead Gods","2635":"Planescape III","2800":"Alternity Players Handbook","2805":"Alien Compendium: Creatures of the Verge","3110":"Warlock of the Stonecrowns","3117":"Book of Magecraft","3121":"The Rjurik Highlands","3140":"Blood Spawn: Creatures of Light and Shadow","9258":"OA7 Test of the Samurai","9270":"WG12 Vale of the Mage","9274":"FR10 Old Empires","9275":"DLA1 Dragon Dawn","9278":"DLR1 Otherlands","9279":"WGA1 Falcon\'s Revenge","9289":"WGA2 Falconmaster","9295":"LNR1 Wonders of Lankhmar","9300":"FR11 Dwarves Deep","9302":"WGA3 Flames of the Falcon","9309":"WGA4 Vecna Lives!","9321":"RA2 Ship of Horrors","9333":"FMA1 Fires of Zatal","9340":"FMA2 Endless Armies","9344":"DLR2 Taladas: The Minotaurs","9348":"RR4 Islands of Terror","9349":"FMQ1 City of Gold","9351":"FR14 The Great Glacier","9364":"RQ2 Thoughts of Darkness","9376":"HR3 Celts Campaign","9388":"FR16 The Shining South","9391":"FRQ3 Doom of Daggerdale","9416":"RR7 Van Richten\'s Guide to Werebeasts","9419":"RM5 Dark of the Moon","9430":"FOR5 Elves of Evermeet","9433":"ALQ4 Secrets of the Lamp","9439":"RE1 Adam\'s Wrath","9444":"Departure","9449":"Corsairs of the Great Sea","9452":"The Awakening","9487":"FOR7 Giantcraft","9491":"FOR8 Pages from the Mages","9506":"Chronomancer","9526":"Death Ascendant","9529":"A Guide to Transylvania","9533":"The Gates of Firestorm Peak","9535":"Volo\'s Guide to All Things Magical","9539":"The Sea Devils","9540":"How the Mighty Are Fallen","9541":"Servants of Darkness","9547":"FOR11 Cult of the Dragon","9569":"The Illithiad","9570":"A Darkness Gathering","9572":"Dawn of the Overmind","9574":"For Duty & Deity","9575":"The City of Ravens Bluff","9582":"Vecna Reborn","11372":"Chaos Spawn","11383":"Campaign Option: Council of Wyrms","11405":"The Wyrmskull Throne","11430":"FOR13 Secrets of the Magister","11431":"Guide to Hell","11444":"Dungeons of Despair","11507":"Van Richten\'s Monster Hunter\'s Compendium, Volume Two","Dragon156":"Dragon #156","Dragon159":"Dragon #159","Dragon162":"Dragon #162","Dragon163":"Dragon #163","Dragon165":"Dragon #165","Dragon167":"Dragon #167","Dragon170":"Dragon #170","Dragon172":"Dragon #172","Dragon174":"Dragon #174","Dragon180":"Dragon #180","Dragon182":"Dragon #182","Dragon185":"Dragon #185","Dragon186":"Dragon #186","Dragon187":"Dragon #187","Dragon190":"Dragon #190","Dragon191":"Dragon #191","Dragon198":"Dragon #198","Dragon199":"Dragon #199","Dragon206":"Dragon #206","Dragon223":"Dragon #223","Dragon227":"Dragon #227","Dragon228":"Dragon #228","Dragon235":"Dragon #235","Dragon237":"Dragon #237","Dragon238":"Dragon #238","Dragon239":"Dragon #239","Dragon242":"Dragon #242","Dragon243":"Dragon #243","Dragon244":"Dragon #244","Dragon247":"Dragon #247","Dragon248":"Dragon #248","Dragon267":"Dragon #267","Dragon268":"Dragon #268","Dragon269":"Dragon #269","Dragon270":"Dragon #270","Dragon271":"Dragon #271","Dragon272":"Dragon #272","Dragon210":"Dragon #210","DragonMagazinAnnual1996":"DragonMagazinAnnual1996","DragonMagazinAnnual1997":"DragonMagazinAnnual1997","DragonMagazineAnnual1997":"DragonMagazineAnnual1997","DragonMagazineAnnual1998":"DragonMagazineAnnual1998","Dungeon23":"Dungeon #23","Dungeon24":"Dungeon #24","Dungeon28":"Dungeon #28","Dungeon31":"Dungeon #31","Dungeon33":"Dungeon #33","Dungeon35":"Dungeon #35","Dungeon37":"Dungeon #37","Dungeon54":"Dungeon #54","Dungeon56":"Dungeon #56","Dungeon57":"Dungeon #57","Dungeon61":"Dungeon #61","Dungeon62":"Dungeon #62","Dungeon64":"Dungeon #64","Dungeon71":"Dungeon #71","Dungeon76":"Dungeon #76"}')}}]);
//# sourceMappingURL=component---src-pages-catalog-tsx-01b9dbc160cc7ef89006.js.map