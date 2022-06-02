"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[3096],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),o=a(944),r=a(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var d=37,l=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,u=e.className,v=(0,o.Z)(),f=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,n.useState)(c),g=b[0],h=b[1],w=n.Children.toArray(e.children),N=[];if(null!=m){var y=f[m];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&h(y)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;h(n),null!=m&&(k(m,n),setTimeout((function(){var e,a,n,o,r,i,d,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,i=window,d=i.innerHeight,l=i.innerWidth,a>=0&&r<=l&&o<=d&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case d:var o=N.indexOf(e.target)-1;a=N[o]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2173:function(e,t,a){a.r(t),a.d(t,{default:function(){return k},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return v}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(1395),s=a(8215),d=a.p+"assets/images/dropdown-anatomy-90d2c43bee3324d83061e637300ef080.png",l=a.p+"assets/images/dropdown-open-2507cde9b747d774a1b1df6feab032cb.png",c=a.p+"assets/images/dropdown-states-f46af45d045d56731dd55957b7475826.png",p=["components"],m={id:"dropdown",sidebar_label:"Dropdown"},u={unversionedId:"components/dropdown",id:"components/dropdown",isDocsHomePage:!1,title:"Dropdown",description:"<Tabs",source:"@site/docs/components/dropdown.mdx",sourceDirName:"components",slug:"/components/dropdown",permalink:"/en/docs/components/dropdown",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/dropdown.mdx",version:"current",sidebar_label:"Dropdown",frontMatter:{id:"dropdown",sidebar_label:"Dropdown"},sidebar:"componenents",previous:{title:"Checkbox",permalink:"/en/docs/components/checkbox"},next:{title:"Icon",permalink:"/en/docs/components/icon"}},v=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Anatomia",id:"anatomia",children:[]},{value:"Comportamento",id:"comportamento",children:[]}]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}],f={toc:v};function k(e){var t=e.components,a=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente ",(0,r.kt)("inlineCode",{parentName:"p"},"dropdown")," \xe9 o conjunto de um bot\xe3o acionador com o componente ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox"),". \xc9 indicado para listar a\xe7\xf5es poss\xedveis."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Componentes relacionados")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/listbox"},"Listbox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/item-list"},"Item-list"))))),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"dropdown")," \xe9 composto por ",(0,r.kt)("em",{parentName:"p"},"border, icon")," e ",(0,r.kt)("em",{parentName:"p"},"label"),". Tamb\xe9m cont\xe9m partes que s\xe3o espec\xedficas de estados de intera\xe7\xe3o, como ",(0,r.kt)("em",{parentName:"p"},"background")," no estado hover / pressed e outline no estado focused."),(0,r.kt)("img",{src:d,alt:"Dropdown fechado e aberto com as 6 partes sinalizadas. Fechado: border, label e icon. Aberto: background, outline e listbox"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Border"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Label"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Icon"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Background (hover/pressed)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," Outline (focused) "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," Listbox"),(0,r.kt)("p",null,"O componente \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de propriedades customiz\xe1veis."),(0,r.kt)("h3",{id:"comportamento"},"Comportamento"),(0,r.kt)("h4",{id:"abertura-da-lista"},"Abertura da lista"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O posicionamento do componente ",(0,r.kt)("inlineCode",{parentName:"li"},"listbox")," pode variar quando o componente est\xe1 localizado em uma \xe1rea da tela que impede a apresenta\xe7\xe3o da lista.\nPor padr\xe3o abertura \xe9 alinhado \xe0 esquerda inferior, mas pode ter a varia\xe7\xe3o de direita inferior, esquerda e direita superior.")),(0,r.kt)("img",{src:l,alt:"Dropdown com lista de op\xe7\xf5es aberta na parte inferior, alinhada \xe0 esquerda do bot\xe3o de acionamento"}),(0,r.kt)("h2",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,r.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas pelo propriet\xe1rio do conte\xfado. S\xe3o elas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Usar medidas relativas para possibilitar um zoom de at\xe9 200%, sem perda do conte\xfado ou funcionalidade.(",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"WCAG 1.4.4: Resize Text"),")"),(0,r.kt)("li",{parentName:"ul"},"Permitir a intera\xe7\xe3o via teclado, atrav\xe9s das teclas: Tab, Esc e setas. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"WCAG 2.1.1: Keyboard"),")"),(0,r.kt)("li",{parentName:"ul"},"A ordem de foco deve acontecer em sequ\xeancia l\xf3gica. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"WCAG 2.4.3: Focus Order"),")"),(0,r.kt)("li",{parentName:"ul"},"\xc1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum"},"WGAG 2.5.8: Target Size (Minimum)"),")"),(0,r.kt)("li",{parentName:"ul"},"Utilizar nome, fun\xe7\xe3o e valor adequadamente, pois estes par\xe2metros s\xe3o utilizados por tecnologias assistivas para identificar os elementos da interface. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"))),(0,r.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,r.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))),(0,r.kt)("h1",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,r.kt)("p",null,"O componente possui propriedades customiz\xe1veis, que possibilitam fazer altera\xe7\xf5es, de acordo com a marca ou o tema a ser utilizado. Com isso, garantimos uma consist\xeancia ao Design System, sem perder a identidade de cada marca. "),(0,r.kt)("p",null,"O dropdown possui quadro estados, que se modificam de acordo com a intera\xe7\xe3o do usu\xe1rio, sendo eles: ",(0,r.kt)("em",{parentName:"p"},"Normal"),", ",(0,r.kt)("em",{parentName:"p"},"Hover"),", ",(0,r.kt)("em",{parentName:"p"},"Focus")," e ",(0,r.kt)("em",{parentName:"p"},"Disabled"),"."),(0,r.kt)("img",{src:c,alt:"Os estados de intera\xe7\xe3o do dropdown, com as respectivas vers\xf5es normal, hover, focus, pressed, focus item-list, disabled"}))))}k.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);