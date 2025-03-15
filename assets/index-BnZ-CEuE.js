import{r as e,a as s,F as a,X as i,M as t,S as o,H as r,b as l,L as n,C as c,c as d,D as m,d as x,R as h,I as p,e as w,f as j,P as u}from"./vendor-DWnjVCVX.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var g={exports:{}},b={},z=e,k=Symbol.for("react.element"),y=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,N=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function C(e,s,a){var i,t={},o=null,r=null;for(i in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(r=s.ref),s)f.call(s,i)&&!v.hasOwnProperty(i)&&(t[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===t[i]&&(t[i]=s[i]);return{$$typeof:k,type:e,key:o,ref:r,props:t,_owner:N.current}}b.Fragment=y,b.jsx=C,b.jsxs=C,g.exports=b;var S,T=g.exports,P=s;S=P.createRoot,P.hydrateRoot;const E=()=>{const[s,o]=e.useState(!1),[r,l]=e.useState(!1);e.useEffect((()=>{const e=()=>{window.scrollY>50?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const n=()=>{o(!s)};return T.jsxs("header",{className:"fixed w-full z-50 transition-all duration-300 "+(r?"bg-white/95 backdrop-blur-sm shadow-md py-2":"bg-transparent py-4"),children:[T.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[T.jsxs("div",{className:"flex items-center",children:[T.jsx("div",{className:(r?"bg-pink-100":"bg-white/30")+" p-2 rounded-full transition-colors",children:T.jsx(a,{className:"h-6 w-6 text-pink-500"})}),T.jsx("span",{className:"ml-2 text-xl font-bold text-pink-700",children:"Festiwal Kobiecości"})]}),T.jsxs("nav",{className:"hidden md:flex space-x-8",children:[T.jsx("a",{href:"#about",className:"text-gray-700 hover:text-pink-600 transition-colors",children:"O Festiwalu"}),T.jsx("a",{href:"#workshops",className:"text-gray-700 hover:text-pink-600 transition-colors",children:"Warsztaty"}),T.jsx("a",{href:"#o-nas",className:"text-gray-700 hover:text-pink-600 transition-colors",children:"O Nas"}),T.jsx("a",{href:"#for-whom",className:"text-gray-700 hover:text-pink-600 transition-colors",children:"Dla Kogo"}),T.jsx("a",{href:"#details",className:"text-gray-700 hover:text-pink-600 transition-colors",children:"Szczegóły"}),T.jsx("a",{href:"#register",className:"btn-natural text-white px-4 py-2 rounded-full shadow-md flex items-center justify-center",children:T.jsx("span",{className:"relative z-10",children:"Zapisz się"})})]}),T.jsx("button",{className:"md:hidden text-gray-700",onClick:n,children:s?T.jsx(i,{className:"h-6 w-6"}):T.jsx(t,{className:"h-6 w-6"})})]}),s&&T.jsx("div",{className:"md:hidden bg-white/95 backdrop-blur-sm shadow-lg",children:T.jsxs("div",{className:"container mx-auto px-4 py-4 flex flex-col space-y-4",children:[T.jsx("a",{href:"#about",className:"text-gray-700 hover:text-pink-600 transition-colors",onClick:n,children:"O Festiwalu"}),T.jsx("a",{href:"#workshops",className:"text-gray-700 hover:text-pink-600 transition-colors",onClick:n,children:"Warsztaty"}),T.jsx("a",{href:"#o-nas",className:"text-gray-700 hover:text-pink-600 transition-colors",onClick:n,children:"O Nas"}),T.jsx("a",{href:"#for-whom",className:"text-gray-700 hover:text-pink-600 transition-colors",onClick:n,children:"Dla Kogo"}),T.jsx("a",{href:"#details",className:"text-gray-700 hover:text-pink-600 transition-colors",onClick:n,children:"Szczegóły"}),T.jsx("a",{href:"#register",className:"btn-natural text-white px-4 py-2 rounded-full shadow-md text-center flex items-center justify-center",onClick:n,children:T.jsx("span",{className:"relative z-10",children:"Zapisz się"})})]})})]})},W=()=>T.jsxs("section",{className:"relative pt-20 pb-32 overflow-hidden",children:[T.jsx("div",{className:"circle-decoration w-64 h-64 top-20 left-10 opacity-30"}),T.jsx("div",{className:"circle-decoration w-96 h-96 bottom-20 right-10 opacity-20"}),T.jsxs("div",{className:"absolute inset-0 z-0",children:[T.jsx("img",{src:"img/first.jpg",alt:"Women in nature",className:"w-full h-full object-cover opacity-75"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-pink-100/70 to-purple-100/70"})]}),T.jsxs("div",{className:"container mx-auto px-4 pt-32 relative z-10",children:[T.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[T.jsx("div",{className:"flex justify-center mb-4",children:T.jsxs("div",{className:"relative",children:[T.jsx(o,{className:"h-16 w-16 text-yellow-500 animate-pulse"}),T.jsx("div",{className:"absolute -top-4 -right-4 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center",children:T.jsx(r,{className:"h-4 w-4 text-pink-500"})})]})}),T.jsxs("h1",{className:"text-5xl md:text-6xl font-bold mb-6 text-pink-800 tracking-wide",children:["FESTIWAL KOBIECOŚCI",T.jsx("br",{}),T.jsxs("span",{className:"relative inline-block",children:["108 CUDÓW",T.jsx("svg",{className:"absolute -bottom-2 left-0 w-full",height:"6",viewBox:"0 0 200 6",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{d:"M0 3C50 3 50 1 100 1C150 1 150 5 200 5",stroke:"#ec4899",strokeWidth:"2",fill:"none",strokeLinecap:"round"})})]})]}),T.jsxs("p",{className:"text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed",children:["✨ Zapraszam Cię do miejsca, gdzie kobiecość spotyka się z naturą. ✨",T.jsx("br",{}),T.jsx("span",{className:"italic",children:"Przestrzeń tworzona z myślą o Tobie – o Twojej sile, delikatności, pasji i potrzebie bycia w harmonii ze sobą i światem."})]})]}),T.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-6 mt-16 mb-12",children:[T.jsx("a",{href:"#register",className:"btn-natural text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all",children:T.jsxs("span",{className:"relative z-10 flex items-center justify-center",children:["Zapisz się teraz",T.jsx("svg",{className:"ml-2 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})}),T.jsxs("a",{href:"#workshops",className:"bg-transparent hover:bg-pink-50 text-pink-700 font-semibold py-4 px-10 border border-pink-300 hover:border-pink-500 rounded-full transition-all flex items-center justify-center",children:[T.jsx("span",{children:"Zobacz warsztaty"}),T.jsx("svg",{className:"ml-2 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]})]})]}),T.jsx("div",{className:"absolute bottom-0 left-0 right-0",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:"w-full",children:T.jsx("path",{fill:"#ffffff",fillOpacity:"1",d:"M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})})})]}),M=()=>T.jsxs("section",{id:"about-me",className:"py-20 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden",children:[T.jsx("div",{className:"absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-pink-100/50 to-transparent"}),T.jsx("div",{className:"absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3"}),T.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[T.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-12",children:[T.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-pink-800 relative inline-block",children:["O Mnie",T.jsx("svg",{className:"absolute -bottom-2 left-0 w-full",height:"6",viewBox:"0 0 200 6",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{d:"M0 3C50 3 50 1 100 1S150 3 200 3",stroke:"#ec4899",strokeWidth:"2",fill:"none",strokeLinecap:"round"})})]}),T.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Poznaj mnie – kobietę, która z pasją łączy ludzi, idee i energie, tworząc przestrzenie do głębszego doświadczania siebie."})]}),T.jsx("div",{className:"max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden",children:T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[T.jsxs("div",{className:"relative h-96 md:h-full",children:[T.jsx("img",{src:"img/Edyta Siof.jpeg",alt:"Edyta Siof",className:"w-full h-full object-cover"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"})]}),T.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[T.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-pink-800 mb-2",children:"Edyta Siof"}),T.jsx("p",{className:"text-pink-600 text-lg mb-4",children:"Organizatorka Festiwalu 108 Cudów, Przewodniczka Podróży"}),T.jsxs("div",{className:"flex items-center mb-6",children:[T.jsx(r,{className:"h-5 w-5 text-pink-500 mr-2"}),T.jsx("span",{className:"text-gray-600 text-sm",children:"Łączy kobiecość, intuicję i działanie"})]}),T.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:"Cześć! Jestem Edyta – organizatorka Festiwalu 108 Cudów i przewodniczka po świecie podróży – zarówno tych geograficznych, jak i wewnętrznych. Moja pasja to łączenie ludzi, idei i energii, by tworzyć przestrzenie, w których każdy może doświadczyć siebie głębiej."}),T.jsx("p",{className:"text-gray-700 leading-relaxed",children:"Wierzę, że prawdziwe podróże to te, które prowadzą do siebie. Każde spotkanie, każdy krąg to nie przypadek, lecz część większej historii. W moim świecie spotykają się kobiecość i siła, duchowość i codzienność – wszystko po to, byś mogła odnaleźć swoją prawdę."})]})]})}),T.jsxs("div",{className:"mt-12 text-center max-w-2xl mx-auto",children:[T.jsx("blockquote",{className:"text-gray-600 italic text-lg",children:'"Kobiecość to nie jedna definicja, lecz cała opowieść. To siła i łagodność, intuicja i działanie, dzikość i spokój."'}),T.jsx("p",{className:"text-pink-600 text-sm mt-2",children:"– Edyta Siof"})]})]})]}),O=({icon:s,title:a,description:i,leader:t,imageSrc:o})=>{const[r,l]=e.useState(!1);return T.jsxs("div",{className:"group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col",children:[T.jsxs("div",{className:"relative w-full aspect-square overflow-hidden",children:[T.jsx("img",{src:o,alt:a,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"}),T.jsxs("div",{className:"absolute bottom-3 left-3 text-white flex items-center",children:[s,T.jsx("span",{className:"ml-2 text-xs font-medium",children:t})]})]}),T.jsxs("div",{className:"p-4 flex flex-col flex-grow",children:[T.jsx("h3",{className:"text-md font-semibold text-pink-800 group-hover:text-pink-600 transition-colors mb-2 line-clamp-2",children:a}),T.jsx("p",{className:"text-gray-600 text-xs flex-grow",children:r?i:`${i.slice(0,100)}...`}),i.length>100&&T.jsx("button",{onClick:()=>l(!r),className:"text-pink-600 hover:text-pink-800 text-xs mt-2 font-medium",children:r?"Zwiń":"Dowiedz się więcej"})]})]})},D=()=>{const e=[{icon:T.jsx(r,{className:"h-4 w-4 text-white"}),title:"108 POWITAŃ SŁOŃCA – CEREMONIA PRZEMIANY",description:"Praktyka, która oczyszcza ciało i umysł, wzmacnia oraz wprowadza w stan głębokiego połączenia ze sobą. Kamila Saternus – nauczycielka jogi i przewodniczka świadomego ruchu – poprowadzi Cię przez wyjątkową ceremonię 108 Powitań Słońca. To rytuał odnowy, który pozwala uwolnić blokady, zbudować wewnętrzną siłę i na nowo połączyć się ze sobą. Nie musisz obawiać się o swój poziom zaawansowania – wystarczy, że zrobisz z nami jedno Powitanie Słońca.",leader:"Kamila Saternus",imageSrc:"img/example.jpg"},{icon:T.jsx(a,{className:"h-4 w-4 text-white"}),title:"Rytuały Księżycowe",description:"Zanurzysz się w energii kobiecego kręgu, otulisz swoją intencję i pozwolisz sobie na głęboką transformację. Podczas rytuału księżycowego uwolnimy to, co nam już nie służy i otworzymy się na nowe. To moment, by świadomie zaprosić do swojego życia harmonię i spełnienie.",leader:"Zespół Festiwalu",imageSrc:"img/Kamila3.jpg"},{icon:T.jsx(r,{className:"h-4 w-4 text-white"}),title:"Kobieta w Równowadze – Zdrowie, Ciało & Umysł",description:"Jak dbać o siebie i nie zwariować? Jak znaleźć balans pomiędzy zdrowiem, odżywianiem i dbaniem o siebiektop w elastyczny, czuły sposób? To warsztat dla kobiet, które chcą odpuścić presję bycia idealną i nauczyć się, jak mądrze troszczyć się o swoje ciało i duszę. Poprowadzi Maria Cyprych – Położna od Diety, która uczy kobiety, jak z czułością i świadomością dbać o zdrowie na co dzień.",leader:"Maria Cyprych",imageSrc:"img/Maria Cyprych.jpg"},{icon:T.jsx(l,{className:"h-4 w-4 text-white"}),title:"Dzika Kobieta w Tańcu – Taniec Intuicyjny & Śpiew Duszy",description:"Warsztat, który uwolni Twoją ekspresję i pozwoli Ci połączyć się z własnym ciałem. Podążysz za rytmem intuicji, ruchu i dźwięku, by odkryć swoją dziką, pierwotną energię. To przestrzeń dla kobiet, które pragną wyrażać siebie bez ograniczeń i poczuć swoją autentyczność w ruchu. Poprowadzi Izabela Damek, eksploratorka tańca intuicyjnego i etnicznych rytmów.",leader:"Izabela Damek",imageSrc:"img/Iza.jpg"},{icon:T.jsx(a,{className:"h-4 w-4 text-white"}),title:"Twarz jako Mapa Ciała – Joga Twarzy & Masaż & Oddech",description:"Warsztat, który pomoże Ci uwolnić napięcia, zharmonizować ciało i umysł oraz zadbać o swoje naturalne piękno. Połączenie masażu twarzy, jogi twarzy i świadomego oddechu pozwoli Ci doświadczyć głębokiego relaksu i odnowy. Poprowadzi Ewa Mazurek-Niedźwiecka, terapeutka manualna twarzy i trenerka oddechu.",leader:"Ewa Mazurek-Niedźwiecka",imageSrc:"img/Ewa Mazurek - Niedźwiecka.png"},{icon:T.jsx(n,{className:"h-4 w-4 text-white"}),title:"Twórcza Kobieta – Biżuteria Mocy",description:"Pozwól sobie na twórczą ekspresję i stwórz własne kolczyki z intencją, które staną się Twoim osobistym talizmanem. Pióra, które wykorzystamy, symbolizują lekkość, wolność i połączenie z intuicją. Poprowadzi Iwona Bartyzel, twórczyni marki Boho Twins, specjalizująca się w rękodziele inspirowanym naturą.",leader:"Iwona Bartyzel",imageSrc:"img/Iwona.jpg"},{icon:T.jsx(l,{className:"h-4 w-4 text-white"}),title:"Taniec Intuicyjny - Ecstatic Dance",description:"Jest to rodzaj praktyki tańca intuicyjnego, podczas której można w lekkości uwolnić ciało od napięć dnia codziennego i poczuć nieskrępowaną ekspresję. Przestrzeń muzyczną do eksploracji siebie poprzez taniec intuicyjny stworzy dla Was DJ-ka, a towarzyszyć jej będzie z wokalem i instrumentami etnicznymi Izabela Damek.",leader:"Izabela Damek",imageSrc:"img/EstaticDance.jpg"},{icon:T.jsx(n,{className:"h-4 w-4 text-white"}),title:"Plecenie Wianków – Powrót do Słowiańskich Korzeni",description:"Warsztat inspirowany dawnymi tradycjami słowiańskich kobiet, które poprzez plecenie wianków łączyły się z energią natury i intuicji. Stworzysz swój własny wianek – symbol kobiecej mocy, cyklu życia i harmonii z naturą.",leader:"Zespół Festiwalu",imageSrc:"img/1.jpg"},{icon:T.jsx(r,{className:"h-4 w-4 text-white"}),title:"Esencja Festiwalu 108 Cudów",description:"Festiwal 108 Cudów to więcej niż wydarzenie – to doświadczenie. To przestrzeń, w której kobiecość rozkwita, energia się podnosi, a każda z nas może poczuć swoją moc. To czas, by się zatrzymać, wsłuchać w siebie i pozwolić sobie na pełnię. To ruch, oddech, muzyka, bliskość, natura. To chwile, które zostają w sercu na zawsze. Nie musisz nic udowadniać, nie musisz się dopasowywać. Wystarczy, że JESTEŚ. Zanurz się w tej energii. Spotkajmy się w kręgu.",leader:"Zespół Festiwalu",imageSrc:"img/2.jpg"}];return T.jsx("section",{id:"workshops",className:"py-16 bg-gray-50 relative",children:T.jsxs("div",{className:"container mx-auto px-6",children:[T.jsxs("div",{className:"text-center mb-12",children:[T.jsx("h2",{className:"text-4xl font-bold text-pink-900 mb-4",children:"Co na Ciebie czeka?"}),T.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Odkryj doświadczenia, które pozwolą Ci połączyć się z Twoją kobiecą mocą i harmonią natury."})]}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:e.map(((e,s)=>T.jsx(O,{icon:e.icon,title:e.title,description:e.description,leader:e.leader,imageSrc:e.imageSrc},s)))}),T.jsx("div",{className:"mt-12 relative w-full h-48 overflow-hidden",children:T.jsxs("div",{className:"absolute inset-0 flex items-center",children:[T.jsx("div",{className:"w-48 h-48 flex-shrink-0",children:T.jsx("img",{src:"img/experience.jpg",alt:"Workshop experience",className:"w-full h-full object-cover"})}),T.jsxs("div",{className:"flex-1 bg-gradient-to-r from-pink-900/80 to-transparent h-full flex items-center justify-between px-6 md:px-12",children:[T.jsxs("div",{className:"text-white",children:[T.jsx("h3",{className:"text-2xl md:text-3xl font-bold drop-shadow-md",children:"Przeżyj Transformację"}),T.jsx("p",{className:"text-sm md:text-base mt-2 drop-shadow-sm max-w-lg",children:"Dołącz do nas i odkryj, jak warsztaty mogą odmienić Twoje życie, oferując przestrzeń na rozwój i autentyczność."})]}),T.jsx("a",{href:"#register",className:"ml-4 px-6 py-2 bg-white text-pink-900 rounded-full hover:bg-pink-100 transition-all duration-300 font-semibold shadow-md hover:shadow-lg whitespace-nowrap",children:"Zapisz się teraz"})]})]})})]})})},F=({children:e})=>T.jsxs("div",{className:"flex items-start mb-6 group",children:[T.jsx("div",{className:"mr-3 mt-1 flex-shrink-0",children:T.jsx(r,{className:"h-5 w-5 text-pink-500 group-hover:text-pink-600 transition-colors"})}),T.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:e})]}),I=()=>T.jsx("section",{id:"for-whom",className:"py-16 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden",children:T.jsx("div",{className:"container mx-auto px-6",children:T.jsx("div",{className:"max-w-4xl mx-auto",children:T.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 md:p-12 relative",children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-pink-900 relative inline-block",children:["Dla Kogo Jest Ten Festiwal?",T.jsx("svg",{className:"absolute -bottom-2 left-0 w-full",height:"6",viewBox:"0 0 200 6",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{d:"M0 3C50 2 75 1 100 1S150 4 200 3",stroke:"#ec4899",strokeWidth:"2",fill:"none",strokeLinecap:"round"})})]}),T.jsx("p",{className:"text-gray-600 mt-4 max-w-2xl mx-auto",children:"Dla Ciebie, jeśli chcesz odkrywać i celebrować swoją kobiecość."})]}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-10",children:[T.jsxs("div",{className:"space-y-6",children:[T.jsx(F,{children:"Dla kobiet, które czują, że potrzebują czasu dla siebie."}),T.jsx(F,{children:"Dla tych, które pragną głębokiego połączenia i wewnętrznej transformacji."}),T.jsxs("div",{className:"relative h-64 rounded-lg overflow-hidden shadow-md group",children:[T.jsx("img",{src:"img/Festiwal 108 cudów.jpg",alt:"Woman relaxing",className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"})]})]}),T.jsxs("div",{className:"space-y-6",children:[T.jsx(F,{children:"Dla każdej, która chce doświadczyć magii kobiecego kręgu – bez oczekiwań, w zgodzie ze sobą."}),T.jsxs("div",{className:"relative h-64 rounded-lg overflow-hidden shadow-md group",children:[T.jsx("img",{src:"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Women in circle",className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"})]})]})]}),T.jsx("div",{className:"text-center px-6",children:T.jsx("blockquote",{className:"text-pink-700 text-sm italic max-w-2xl mx-auto",children:'"To przestrzeń bez alkoholu i używek. Naszym paliwem jest energia i wibracja dźwięku."'})})]})})})}),L=({icon:e,title:s,children:a})=>T.jsx("div",{className:"group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100",children:T.jsxs("div",{className:"p-6 text-center",children:[T.jsx("div",{className:"mb-4 inline-flex p-3 bg-pink-50 rounded-full shadow-sm group-hover:bg-pink-100 transition-colors",children:h.cloneElement(e,{className:"h-6 w-6 text-pink-600"})}),T.jsx("h3",{className:"text-lg font-semibold text-pink-800 mb-2 group-hover:text-pink-600 transition-colors",children:s}),T.jsx("div",{className:"text-gray-600 text-sm",children:a})]})}),Z=()=>T.jsx("section",{id:"details",className:"py-16 bg-gray-50 relative",children:T.jsxs("div",{className:"container mx-auto px-6",children:[T.jsxs("div",{className:"text-center mb-12",children:[T.jsxs("h2",{className:"text-4xl font-bold text-pink-900 relative inline-block",children:["Szczegóły Festiwalu",T.jsx("svg",{className:"absolute -bottom-2 left-0 w-full",height:"6",viewBox:"0 0 200 6",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{d:"M0 3C50 2 75 1 100 1S150 4 200 3",stroke:"#ec4899",strokeWidth:"2",fill:"none",strokeLinecap:"round"})})]}),T.jsx("p",{className:"text-gray-600 mt-4 max-w-2xl mx-auto",children:"Wszystko, co musisz wiedzieć, aby dołączyć do naszego wyjątkowego wydarzenia."})]}),T.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16",children:[T.jsxs(L,{icon:T.jsx(c,{}),title:"Kiedy",children:[T.jsx("p",{className:"font-semibold text-lg text-gray-700",children:"20-22 czerwca 2025"}),T.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Piątek - Niedziela"})]}),T.jsxs(L,{icon:T.jsx(d,{}),title:"Gdzie",children:[T.jsx("p",{className:"font-semibold text-gray-700",children:"Ośrodek Wypoczynkowy Wrzos"}),T.jsx("p",{className:"text-sm",children:"Stęszewko k. Poznania"}),T.jsx("a",{href:"https://maps.app.goo.gl/gwS3Z8GJHULiba7S6",target:"_blank",className:"text-pink-600 text-xs mt-2 inline-block hover:text-pink-800 transition-colors",children:"Zobacz na mapie"})]}),T.jsxs(L,{icon:T.jsx(m,{}),title:"Inwestycja",children:[T.jsxs("p",{className:"mb-1",children:[T.jsx("span",{className:"font-semibold text-gray-700",children:"1850 zł"}),T.jsx("span",{className:"text-xs text-gray-500",children:" (przy zapisie do 15 kwietnia)"})]}),T.jsxs("p",{children:[T.jsx("span",{className:"font-semibold text-gray-700",children:"2200 zł"}),T.jsx("span",{className:"text-xs text-gray-500",children:" (po 15 kwietnia)"})]})]})]}),T.jsx("div",{className:"max-w-5xl mx-auto mb-16",children:T.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[T.jsxs("div",{className:"relative h-64 md:h-auto",children:[T.jsx("img",{src:"https://meteor-turystyka.pl/images/base/47/46788/530852_40.jpg",alt:"Festival location",className:"absolute inset-0 w-full h-full object-cover"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"})]}),T.jsxs("div",{className:"p-8",children:[T.jsx("h3",{className:"text-xl font-semibold text-pink-800 mb-3",children:"Piękne Miejsce w Naturze"}),T.jsx("p",{className:"text-gray-600 text-sm mb-3",children:"Ośrodek Wypoczynkowy Wrzos leży w otoczeniu lasów i jeziora – idealne miejsce, by oderwać się od codzienności i zanurzyć w naturze."}),T.jsx("p",{className:"text-gray-600 text-sm mb-3",children:"Czekają na Ciebie komfortowe pokoje, zdrowe posiłki z lokalnych produktów oraz przestrzenie do praktyk wewnątrz i na świeżym powietrzu."}),T.jsx("p",{className:"text-gray-600 text-sm italic",children:"Jest to przestrzeń bez alkoholu i innych używek. Jedynym paliwem do ekspresji jest nasza energia i wibracja dźwięku."})]})]})})}),T.jsxs("div",{id:"register",className:"max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8",children:[T.jsxs("div",{className:"text-center mb-6",children:[T.jsx("h3",{className:"text-xl font-semibold text-pink-800 mb-3",children:"Zapisy"}),T.jsx("p",{className:"text-gray-600 text-sm mb-2",children:"Jeśli czujesz, że to przestrzeń dla Ciebie, napisz do nas i zarezerwuj swoje miejsce!"}),T.jsx("p",{className:"text-pink-700 text-sm font-semibold",children:"Zapraszam Cię do tej opowieści. Może to właśnie tutaj odnajdziesz to, czego szukasz?"})]}),T.jsxs("form",{className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Imię i Nazwisko"}),T.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all",placeholder:"Twoje imię i nazwisko"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),T.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all",placeholder:"twoj@email.com"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Telefon"}),T.jsx("input",{type:"tel",id:"phone",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all",placeholder:"Twój numer telefonu"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Wiadomość (opcjonalnie)"}),T.jsx("textarea",{id:"message",rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all",placeholder:"Twoja wiadomość lub pytania..."})]}),T.jsxs("button",{type:"submit",className:"w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center gap-2",children:["Zapisz się",T.jsx(x,{className:"h-4 w-4"})]})]})]})]})}),K=()=>T.jsxs("footer",{className:"bg-gradient-to-br from-pink-800 to-pink-900 text-white py-12 relative overflow-hidden",children:[T.jsx("div",{className:"absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"}),T.jsx("div",{className:"absolute top-20 right-10 w-40 h-40 bg-pink-700 rounded-full opacity-20"}),T.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 bg-pink-700 rounded-full opacity-10"}),T.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[T.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[T.jsxs("div",{className:"flex items-center mb-6 md:mb-0",children:[T.jsx("div",{className:"bg-pink-700/30 p-2 rounded-full",children:T.jsx(a,{className:"h-8 w-8 text-pink-200"})}),T.jsx("span",{className:"ml-2 text-xl font-bold",children:"Festiwal Kobiecości"})]}),T.jsxs("div",{className:"flex space-x-4",children:[T.jsx("a",{href:"#",className:"p-2 bg-pink-700/50 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-110",children:T.jsx(p,{className:"h-5 w-5"})}),T.jsx("a",{href:"#",className:"p-2 bg-pink-700/50 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-110",children:T.jsx(w,{className:"h-5 w-5"})}),T.jsx("a",{href:"mailto:kontakt@festiwalkobiecosci.pl",className:"p-2 bg-pink-700/50 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-110",children:T.jsx(j,{className:"h-5 w-5"})}),T.jsx("a",{href:"tel:+48123456789",className:"p-2 bg-pink-700/50 rounded-full hover:bg-pink-600 transition-colors transform hover:scale-110",children:T.jsx(u,{className:"h-5 w-5"})})]})]}),T.jsxs("div",{className:"border-t border-pink-700/50 pt-8 text-center",children:[T.jsx("p",{className:"text-pink-200 mb-2",children:'"Festiwal Kobiecości 108 Cudów" - przestrzeń, gdzie kobiecość spotyka się z naturą.'}),T.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 text-pink-300 text-sm",children:[T.jsx("a",{href:"#about",className:"hover:text-white transition-colors",children:"O Festiwalu"}),T.jsx("a",{href:"#workshops",className:"hover:text-white transition-colors",children:"Warsztaty"}),T.jsx("a",{href:"#o-nas",className:"hover:text-white transition-colors",children:"O Nas"}),T.jsx("a",{href:"#for-whom",className:"hover:text-white transition-colors",children:"Dla Kogo"}),T.jsx("a",{href:"#register",className:"hover:text-white transition-colors",children:"Zapisz się"})]}),T.jsxs("p",{className:"text-pink-300/70 text-sm mt-6",children:["Zrobione z ❤️ ",T.jsx("a",{href:"https://jestemprogramista.pl",target:"_blank",className:"hover:text-yellow-500 transition-colors",children:"Jestem Programista"})]})]})]})]}),_=()=>{const[s,a]=e.useState(0),[i,t]=e.useState(0),[o,r]=e.useState(0),[l,n]=e.useState(0);return e.useEffect((()=>{const e=new Date("2025-06-20T00:00:00"),s=()=>{const s=new Date,i=e.getTime()-s.getTime();if(i>0){const e=Math.floor(i/864e5),s=Math.floor(i%864e5/36e5),o=Math.floor(i%36e5/6e4),l=Math.floor(i%6e4/1e3);a(e),t(s),r(o),n(l)}else a(0),t(0),r(0),n(0)};s();const i=setInterval(s,1e3);return()=>clearInterval(i)}),[]),T.jsxs("div",{className:"bg-pink-200/80 backdrop-blur-md rounded-lg shadow-lg p-6 text-center",children:[T.jsx("h2",{className:"text-2xl font-bold text-pink-800 mb-4",children:"Do Festiwalu Kobiecości pozostało:"}),T.jsxs("div",{className:"flex justify-center items-center space-x-4",children:[T.jsxs("div",{children:[T.jsx("span",{className:"block text-4xl font-bold text-pink-700",children:s}),T.jsx("span",{className:"text-sm text-gray-600",children:"Dni"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"block text-4xl font-bold text-pink-700",children:i}),T.jsx("span",{className:"text-sm text-gray-600",children:"Godzin"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"block text-4xl font-bold text-pink-700",children:o}),T.jsx("span",{className:"text-sm text-gray-600",children:"Minut"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"block text-4xl font-bold text-pink-700",children:l}),T.jsx("span",{className:"text-sm text-gray-600",children:"Sekund"})]})]})]})};function B(){return T.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 font-sans",children:[T.jsx(E,{}),T.jsxs("main",{children:[T.jsx(W,{}),T.jsx(_,{}),T.jsx(D,{}),T.jsx(M,{}),T.jsx(I,{}),T.jsx(Z,{})]}),T.jsx(K,{})]})}S(document.getElementById("root")).render(T.jsx(e.StrictMode,{children:T.jsx(B,{})}));
