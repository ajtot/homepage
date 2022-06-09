"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[7118],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=r,v=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(944),o=a(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var c=37,l=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,v=(0,r.Z)(),f=v.tabGroupChoices,g=v.setTabGroupChoices,b=(0,n.useState)(u),h=b[0],k=b[1],y=n.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==h&&m.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=m[a].value;k(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,r,o,i,c,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,a>=0&&o<=l&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9244:function(e,t,a){a.r(t),a.d(t,{default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(1395),s=a(8215),c=["components"],l={id:"tag",sidebar_label:"Tag"},u={unversionedId:"components/tag",id:"components/tag",isDocsHomePage:!1,title:"Tag",description:"<Tabs",source:"@site/docs/components/tag.mdx",sourceDirName:"components",slug:"/components/tag",permalink:"/animalia-doc/docs/components/tag",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/tag.mdx",version:"current",sidebar_label:"Tag",frontMatter:{id:"tag",sidebar_label:"Tag"},sidebar:"componenents",previous:{title:"Switch",permalink:"/animalia-doc/docs/components/switch"},next:{title:"Text area",permalink:"/animalia-doc/docs/components/textarea"}},m=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[]}],d={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,o.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,o.kt)("p",null,"Este componente \xe9 indicado para os casos em que \xe9 necess\xe1rio informar, rotular, chamar aten\xe7\xe3o ou categorizar itens. Permitem um r\xe1pido reconhecimento pelo uso de palavras-chave, \xedcones ou cores."),(0,o.kt)("p",null,"As tags ajudam a destacar informa\xe7\xf5es importantes e apoiam na categoriza\xe7\xe3o,\xa0tamb\xe9m rotulam visualmente os itens com pequenas quantidades de informa\xe7\xf5es ou destacam o status, geralmente com palavras-chave concisas que ajudam a identificar os itens. Podem ou n\xe3o conter \xedcones para apoiar na identifica\xe7\xe3o da tag."),(0,o.kt)("h3",{id:"tipos"},"Tipos"),(0,o.kt)("p",null,"Pensando nos diversos cen\xe1rios de uso, h\xe1 duas categorias de tags: ",(0,o.kt)("strong",{parentName:"p"},"leitura")," e ",(0,o.kt)("strong",{parentName:"p"},"interativa"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tag de leitura:")," traz a informa\xe7\xe3o de forma est\xe1tica, sem possibilitar qualquer tipo de intera\xe7\xe3o;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tag interativa:")," traz a informa\xe7\xe3o e possui intera\xe7\xe3o em si, podendo ser removida.")),(0,o.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,o.kt)("p",null,"As tags (leitura e interativa) s\xe3o estruturadas com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use tags quando o conte\xfado for mapeado para v\xe1rias categorias e o usu\xe1rio precisar de uma maneira de diferenci\xe1-las."),(0,o.kt)("li",{parentName:"ul"},"A label da tag costuma ser sempre um\xa0adjetivo ou substantivo, n\xe3o um verbo."),(0,o.kt)("li",{parentName:"ul"},"As tags devem sempre incluir uma label. Eles podem representar termos de pesquisa, filtros ou palavras-chave."),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use apenas a cor para transmitir informa\xe7\xf5es porque n\xe3o \xe9 acess\xedvel. Se voc\xea usar a mesma tag em mais de um lugar, certifique-se de manter a cor consistente."),(0,o.kt)("li",{parentName:"ul"},"As tags podem aumentar a quantidade de ru\xeddo visual em uma tela, principalmente quando combinadas com outros elementos visuais, portanto, use-as com modera\xe7\xe3o."),(0,o.kt)("li",{parentName:"ul"},"N\xe3o misture tags interativas e est\xe1ticas.Depois de estabelecer um padr\xe3o de comportamento das tags, os usu\xe1rios sempre esperam esse comportamento."),(0,o.kt)("li",{parentName:"ul"},"A tag nunca deve ter mais de uma linha, por isso temos que usar termos curtos e claros."))),(0,o.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,o.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}p.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);