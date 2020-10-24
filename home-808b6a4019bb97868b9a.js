(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.linaria-cache/src/components/home/Home.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/home/SearchInput.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/home/SearchResults.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/home/StickerPackPreviewCard.linaria.css":function(e,t,a){},"./src/components/home/Home.tsx":function(e,t,a){"use strict";a.r(t),function(e){var s,r=a("./node_modules/linaria/react.js"),o=a("./node_modules/react/index.js"),n=a.n(o),c=a("./src/contexts/StickersContext.tsx"),l=a("./src/hooks/use-query.ts"),i=a("./src/hooks/use-update-url.ts"),u=a("./src/components/general/ExternalLink.tsx"),d=a("./src/etc/constants.ts"),m=a("./src/components/home/SearchInput.tsx"),f=a("./src/components/home/SearchResults.tsx");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const b=Object(r.styled)("div")({name:"StyledHome",class:"s1kdyk3t"}),p=()=>{const{searchQuery:e,setSearchQuery:t}=n.a.useContext(c.b),a=Object(l.a)(),s=Object(i.a)();n.a.useEffect(()=>{const e=a[d.b]?a[d.b]:null;"string"==typeof e&&t(e)},[]),n.a.useEffect(()=>{s({query:{[d.b]:e||void 0}})},[e]);const r=n.a.useMemo(()=>n.a.createElement(u.a,{href:"https://support.signal.org/hc/en-us/articles/360031836512-Stickers",title:"Stickers - Signal Support"},"sticker packs"),[]),o=n.a.useMemo(()=>n.a.createElement(u.a,{href:"https://twitter.com/signalstickers",title:"Twitter"},"@signalstickers"),[]);return n.a.createElement(b,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mt-4 mb-1 mb-md-3 pt-lg-2"},n.a.createElement("p",{className:"intro"},"Welcome to Signal Stickers, the unofficial directory for Signal ",r,". You can filter packs by title, author, or tags. Follow ",o," on Twitter to stay tuned for new packs!"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(m.a,null))),n.a.createElement(f.a,null))};h(p,"useContext{{\n    searchQuery,\n    setSearchQuery\n  }}\nuseQuery{query}\nuseUpdateUrl{updateUrl}\nuseEffect{}\nuseEffect{}\nuseMemo{stickerPackLink}\nuseMemo{twitterLink}",()=>[l.a,i.a]);const k=p;var g,v;t.default=k,a("./.linaria-cache/src/components/home/Home.linaria.css"),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(b,"StyledHome","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx"),g.register(p,"HomeComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx"),g.register(k,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/SearchInput.tsx":function(e,t,a){"use strict";(function(e){var s,r=a("./node_modules/debounce-fn/index.js"),o=a.n(r),n=a("./node_modules/linaria/react.js"),c=a("./node_modules/react/index.js"),l=a.n(c),i=a("./node_modules/react-router-hash-link/lib/index.js"),u=a("./node_modules/react-icons/bs/index.esm.js"),d=a("./node_modules/react-icons/fa/index.esm.js"),m=a("./src/contexts/StickersContext.tsx");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const h=Object(n.styled)("div")({name:"SearchInput",class:"sooxe2f"}),b=Object(n.styled)("div")({name:"SearchPrepend",class:"sbfo2dx"}),p=Object(n.styled)("div")({name:"SearchHelp",class:"s1mpu9hs"}),k=Object(n.styled)("div")({name:"SearchClear",class:"s1vlsbwh"}),g=Object(n.styled)("button")({name:"MiniTag",class:"m1hdpes4"}),v=()=>{const{searcher:e,searchQuery:t,searchResults:a,setSearchQuery:s}=l.a.useContext(m.b),[r,n]=l.a.useState(""),c=l.a.useRef(null),f=["cute","privacy","meme","for children"],v=o()(s,{wait:250});l.a.useEffect(()=>{t&&n(t)},[t]);const y=l.a.useCallback(e=>{const{value:t}=e.target;n(t)},[n]);l.a.useEffect(()=>(v.cancel(),v(r),()=>{v.cancel()}),[v,r]);const S=l.a.useCallback(t=>{e&&t.currentTarget.textContent&&s(e.buildQueryString({attributeQueries:[{tag:t.currentTarget.textContent}]}))},[e,s]),x=l.a.useCallback(()=>{c.current&&(c.current.style.opacity="1",c.current.style.pointerEvents="initial")},[c]),H=l.a.useCallback(()=>{c.current&&(c.current.style.opacity="0",setTimeout(()=>{c.current&&(c.current.style.pointerEvents="none")},250))},[c]),L=l.a.useCallback(e=>{e.preventDefault(),n(""),s("")},[n,s]);l.a.useEffect(()=>{t&&n(t)},[t]),l.a.useEffect(()=>(v.cancel(),v(r),()=>{v.cancel()}),[v,r]);const E=l.a.useMemo(()=>f.map(e=>l.a.createElement(g,{type:"button",key:e,className:"btn mr-1",onClick:S},e)),[f]);return l.a.createElement(h,{className:"form-group mb-4 mb-md-5"},l.a.createElement("div",{className:"mb-1 position-relative"},l.a.createElement(b,null,l.a.createElement(u.i,null)),l.a.createElement("input",{type:"text",key:"search",className:"form-control form-control-lg",onBlur:H,onChange:y,onFocus:x,value:r,title:"Search","aria-label":"search",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:"false"}),l.a.createElement(p,{ref:c},l.a.createElement(i.HashLink,{to:"/about#searching",title:"Search Help"},l.a.createElement(d.b,{className:"text-muted"}))),l.a.createElement(k,null,l.a.createElement("button",{type:"button",className:"btn btn-link border-0",title:"Clear Search Results",onClick:L},l.a.createElement(u.l,null)))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",null,l.a.createElement("small",null,"Lost? Why not start with these tags?"," "),l.a.createElement("br",{className:"d-inline d-md-none"}),E),l.a.createElement("div",{className:"text-muted"},l.a.createElement("small",null,(null==a?void 0:a.length)||0," ",1===a.length?"result":"results"))))};f(v,"useContext{{\n    searcher,\n    searchQuery,\n    searchResults,\n    setSearchQuery\n  }}\nuseState{[searchQueryInputValue, setSearchQueryInputValue]('')}\nuseRef{searchHelpRef}\nuseEffect{}\nuseCallback{onSearchQueryInputChange}\nuseEffect{}\nuseCallback{onTagClick}\nuseCallback{handleInputFocus}\nuseCallback{handleInputBlur}\nuseCallback{clearSearchResults}\nuseEffect{}\nuseEffect{}\nuseMemo{tagsFragment}");const y=v;var S,x;t.a=y,a("./.linaria-cache/src/components/home/SearchInput.linaria.css"),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(h,"SearchInput","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(b,"SearchPrepend","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(p,"SearchHelp","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(k,"SearchClear","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(g,"MiniTag","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(v,"SearchInputComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(y,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx")),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&x(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/SearchResults.tsx":function(e,t,a){"use strict";(function(e){var s,r=a("./node_modules/linaria/react.js"),o=a("./node_modules/react/index.js"),n=a.n(o),c=a("./node_modules/react-router-dom/esm/react-router-dom.js"),l=a("./node_modules/react-waypoint/es/index.js"),i=a("./node_modules/ramda/es/take.js"),u=a("./src/contexts/StickersContext.tsx"),d=a("./src/components/home/StickerPackPreviewCard.tsx");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=Object(r.styled)("div")({name:"StickerPackList",class:"soapbay"}),h=()=>{const{searchResults:e}=n.a.useContext(u.b),[t,a]=n.a.useState(0),[s,r]=n.a.useState([]),o=n.a.useCallback(()=>{if(s.length>=e.length)return;const o=t+64;a(o),r(i.a(o,e))},[t,e,s]);return n.a.useLayoutEffect(()=>{a(0),r([]),o()},[e]),n.a.createElement(f,{className:"row"},s.map(e=>n.a.createElement("div",{className:"col-6 col-md-4 col-lg-3 mb-4",key:e.item.meta.id},n.a.createElement(c.Link,{to:"/pack/"+e.item.meta.id},n.a.createElement(d.a,{stickerPack:e.item})))),n.a.createElement(l.a,{key:t,onEnter:o,bottomOffset:"-500px"}))};m(h,"useContext{{\n    searchResults\n  }}\nuseState{[cursor, setCursor](0)}\nuseState{[renderedSearchResults, setRenderedSearchResults]([])}\nuseCallback{loadMore}\nuseLayoutEffect{}");const b=h;var p,k;t.a=b,a("./.linaria-cache/src/components/home/SearchResults.linaria.css"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"StickerPackList","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(64,"PAGE_SIZE","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(h,"StickerPackListComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(b,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/StickerPackPreviewCard.tsx":function(e,t,a){"use strict";(function(e){var s,r=a("./node_modules/linaria/react.js"),o=a("./node_modules/react/index.js"),n=a.n(o),c=a("./node_modules/use-async-effect/index.js"),l=a.n(c),i=a("./src/lib/stickers.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=Object(r.styled)("div")({name:"StickerPackPreviewCard",class:"s6bnemm",vars:{"s6bnemm-0":[e=>e.original?"block":"none"],"s6bnemm-1":[e=>e.animated?"block":"none"],"s6bnemm-2":[e=>e.nsfw?"blur(4px)":"none"]}}),m=e=>{const[t,a]=n.a.useState(),{meta:s,manifest:r}=e.stickerPack;l()(async()=>{try{if(void 0!==s.id){const e=await Object(i.a)(s.id,s.key,r.cover.id);a(e)}}catch(e){console.error("[StickerPackPreviewCard::Effect::GetCover] "+e.message)}},[s.id,s.key,r.cover.id]);const o=`${r.title}${s.nsfw?" (NSFW)":""}`;return n.a.createElement(d,{className:"card",original:s.original,animated:s.animated,nsfw:s.nsfw,"aria-label":o},t?n.a.createElement("img",{className:"card-img-top",src:t,alt:"Cover"}):n.a.createElement("div",{className:"card-img-top"}," "),n.a.createElement("div",{className:"card-header"},o))};u(m,"useState{[cover, setCover]}\nuseAsyncEffect{}",()=>[l.a]);const f=m;var h,b;t.a=f,a("./.linaria-cache/src/components/home/StickerPackPreviewCard.linaria.css"),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(d,"StickerPackPreviewCard","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),h.register(m,"StickerPackPreviewCardComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),h.register(f,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var s,r,o,n=a("./node_modules/query-string/index.js"),c=a.n(n),l=a("./node_modules/react-router/esm/react-router.js");function i(){return c.a.parse(Object(l.l)().search)}(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useLocation{}",()=>[l.l]),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(i,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-update-url.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var s,r,o,n=a("./node_modules/query-string/index.js"),c=a.n(n),l=a("./node_modules/ramda/es/mergeDeepRight.js"),i=a("./node_modules/react-router/esm/react-router.js");function u(){const e=Object(i.k)();return t=>{const a=c.a.parseUrl(e.location.pathname),s=c.a.stringifyUrl(l.a(a,t));e.replace(s)}}(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(u,"useHistory{history}",()=>[i.k]),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(u,"useUpdateUrl","/home/travis/build/signalstickers/signalstickers/src/hooks/use-update-url.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=home-808b6a4019bb97868b9a.js.map