"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[5526],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(944),o=a(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var c=37,l=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,m=e.values,p=e.groupId,d=e.className,v=(0,r.Z)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,k=(0,n.useState)(u),b=k[0],g=k[1],y=n.Children.toArray(e.children),N=[];if(null!=p){var w=f[p];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&g(w)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=m[a].value;g(n),null!=p&&(h(p,n),setTimeout((function(){var e,a,n,r,o,i,c,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,a>=0&&o<=l&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5384:function(e,t,a){a.r(t),a.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(1395),s=a(8215),c=["components"],l={id:"timepicker",sidebar_label:"Timepicker"},u={unversionedId:"components/timepicker",id:"components/timepicker",isDocsHomePage:!1,title:"Timepicker",description:"<Tabs",source:"@site/docs/components/timepicker.mdx",sourceDirName:"components",slug:"/components/timepicker",permalink:"/en/docs/components/timepicker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/timepicker.mdx",version:"current",sidebar_label:"Timepicker",frontMatter:{id:"timepicker",sidebar_label:"Timepicker"},sidebar:"componenents",previous:{title:"Text field",permalink:"/en/docs/components/textfield"},next:{title:"Toaster",permalink:"/en/docs/components/toaster"}},m=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Quando usar",id:"quando-usar",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Fa\xe7a",id:"fa\xe7a",children:[]},{value:"N\xe3o fa\xe7a",id:"n\xe3o-fa\xe7a",children:[]}]}],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,o.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"timepicker")," (selecionador de tempo) ajuda a pessoa usu\xe1ria a selecionar ou definir um hor\xe1rio espec\xedfico."),(0,o.kt)("p",null,"Permite que a pessoa usu\xe1ria insira um valor de tempo espec\xedfico ou fa\xe7a uma escolha entre um hor\xe1rio ou espa\xe7o de tempo pr\xe9-determinado e pode ser usado para uma ampla variedade de cen\xe1rios."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Casos de uso comuns incluem:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agendamentos diversos"),(0,o.kt)("li",{parentName:"ul"},"Configurando um alarme")),(0,o.kt)("p",null,"Na maioria das vezes, se apresenta como uma interface de calend\xe1rio, tornando mais f\xe1cil para os usu\xe1rios selecionar datas e horas."),(0,o.kt)("h3",{id:"quando-usar"},"Quando usar"),(0,o.kt)("p",null,"Use seletores de hora quando solicitar ao usu\xe1rio uma hora ou para agendamento de tarefas.\nUse ao pedir ao usu\xe1rio para inserir um hor\xe1rio espec\xedfico."),(0,o.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,o.kt)("p",null,"O componente foi estruturado com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e boas pr\xe1ticas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se usar o formato de 12 horas, deve ser acompanhado por uma sele\xe7\xe3o AM / PM;"),(0,o.kt)("li",{parentName:"ul"},"Use letras mai\xfasculas e nenhum ponto para as abrevia\xe7\xf5es AM e PM;"),(0,o.kt)("li",{parentName:"ul"},"Permita a digita\xe7\xe3o do hor\xe1rio desejado;"),(0,o.kt)("li",{parentName:"ul"},"Formatos de hora devem sempre seguir, preferencialmente o formato hh:mm (hora, minuto);"),(0,o.kt)("li",{parentName:"ul"},"Sempre ser\xe3o necess\xe1rios dois d\xedgitos para horas, minutos e segundos. (Exemplo: 04:30);"),(0,o.kt)("li",{parentName:"ul"},"Pode-se adotar o intervalo de tempo para minutos, contanto que seja mantida uma divis\xe3o uniformemente em 60 (Exemplo: 00, 15, 30 e 45).")),(0,o.kt)("h3",{id:"fa\xe7a"},"Fa\xe7a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mantenha o campo vazio ou com pr\xf3ximo hor\xe1rio dispon\xedvel;"),(0,o.kt)("li",{parentName:"ul"},"Hor\xe1rios espec\xedficos devem especificar um fuso hor\xe1rio."),(0,o.kt)("li",{parentName:"ul"},"Durante a digita\xe7\xe3o do valor de hora, ao se colocar um n\xfamero entre 1 e 9, o ideal \xe9 que automaticamente seja adicionado um 0 antes (apenas no campo hora). Por exemplo: usu\xe1rio digitou 9, deve-se ajustar para 09;")),(0,o.kt)("h3",{id:"n\xe3o-fa\xe7a"},"N\xe3o fa\xe7a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xe3o disponibilize somente valores de minutos."),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use o timepicker para dura\xe7\xf5es, como para um cron\xf4metro."))),(0,o.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,o.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}d.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);