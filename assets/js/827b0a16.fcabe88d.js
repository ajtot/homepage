"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1160],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,r(r({ref:a},c),{},{components:t})):o.createElement(f,r({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5348:function(e,a,t){t.d(a,{Z:function(){return i}});var o=t(1721),n=t(7294),i=function(e){function a(){return e.apply(this,arguments)||this}return(0,o.Z)(a,e),a.prototype.render=function(){return n.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},n.createElement("div",{style:{width:"50%",marginRight:"4%"}},n.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),n.createElement("b",null,"Fazer"),n.createElement("p",null,this.props.doDescription)),n.createElement("div",{style:{width:"50%"}},n.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),n.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),n.createElement("p",null,this.props.dontDescription)))},a}(n.Component)},808:function(e,a,t){t.d(a,{Z:function(){return i}});var o=t(1721),n=t(7294),i=function(e){function a(){for(var a,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(a=e.call.apply(e,[this].concat(o))||this).state={language:"react"},a}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this;return n.createElement("div",null,n.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},n.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),n.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},n.createElement("option",{value:"react"},"React"),this.props.javascript?n.createElement("option",{value:"javascript"},"Javascript"):"")),n.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(n.Component)},8215:function(e,a,t){var o=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},1395:function(e,a,t){t.d(a,{Z:function(){return c}});var o=t(7294),n=t(944),i=t(6010),r="tabItem_vU9c",s="tabItemActive_cw6a";var l=37,d=39;var c=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=(0,n.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,o.useState)(c),b=v[0],k=v[1],y=o.Children.toArray(e.children),w=[];if(null!=p){var x=g[p];null!=x&&x!==b&&u.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var a=e.currentTarget,t=w.indexOf(a),o=u[t].value;k(o),null!=p&&(h(p,o),setTimeout((function(){var e,t,o,n,i,r,l,d;(e=a.getBoundingClientRect(),t=e.top,o=e.left,n=e.bottom,i=e.right,r=window,l=r.innerHeight,d=r.innerWidth,t>=0&&i<=d&&n<=l&&o>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},C=function(e){var a,t;switch(e.keyCode){case d:var o=w.indexOf(e.target)+1;t=w[o]||w[0];break;case l:var n=w.indexOf(e.target)-1;t=w[n]||w[w.length-1]}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var a=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":b===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},t)}))),a?(0,o.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==b})}))))}},9443:function(e,a,t){var o=(0,t(7294).createContext)(void 0);a.Z=o},944:function(e,a,t){var o=t(7294),n=t(9443);a.Z=function(){var e=(0,o.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},439:function(e,a,t){t.r(a),t.d(a,{default:function(){return z},frontMatter:function(){return x},metadata:function(){return N},toc:function(){return C}});var o=t(7462),n=t(3366),i=(t(7294),t(3905)),r=t(5348),s=t(808),l=t(1395),d=t(8215),c=t.p+"assets/images/heading-sizes-5425129893c453e617efca9b8cfa0c72.jpg",u=t.p+"assets/images/styles-anatomy-3a73e6f2a58f0338e972573fbd777680.jpg",p=t.p+"assets/images/heading-token-9c5a20ff3a2db758b1f1d2f272baee5b.jpg",m=t.p+"assets/images/body-token-0b062e223c90fa27d793afef4b7c380a.jpg",f=t.p+"assets/images/code-token-daf333788d0d79affd3dbb0814ca9265.jpg",g=t.p+"assets/images/type-do-1-2ee05d66131713fe7116b82eaa55b475.jpg",h=t.p+"assets/images/type-do-2-b3b0bb054b93e53d416068ef1a5a0ad0.jpg",v=t.p+"assets/images/type-do-3-6fc4dbdadca3bbbab197a06fb3ccefc6.jpg",b=t.p+"assets/images/type-dont-1-2b2f717e5c43fc1bf2c2a45ed1233206.jpg",k=t.p+"assets/images/type-dont-2-eb6eb177a25d1005f57c2e73832f4831.jpg",y=t.p+"assets/images/type-dont-3-0f5141413cebecb70f547249dc69fde7.jpg",w=["components"],x={id:"typo-styles",label:"Estilos"},N={unversionedId:"foundation/typo-styles",id:"foundation/typo-styles",isDocsHomePage:!1,title:"Estilos",description:"<Tabs",source:"@site/docs/foundation/typography-styles.mdx",sourceDirName:"foundation",slug:"/foundation/typo-styles",permalink:"/animalia-doc/docs/foundation/typo-styles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/foundation/typography-styles.mdx",version:"current",frontMatter:{id:"typo-styles",label:"Estilos"},sidebar:"foundation",previous:{title:"Constru\xe7\xe3o",permalink:"/animalia-doc/docs/foundation/typo"},next:{title:"Espa\xe7amento",permalink:"/animalia-doc/docs/foundation/spacing"}},C=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]},{value:"Anatomia",id:"anatomia",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Arquitetura da Informa\xe7\xe3o (Hierarquia)",id:"arquitetura-da-informa\xe7\xe3o-hierarquia",children:[]},{value:"Visual",id:"visual",children:[]},{value:"Conforto de leitura",id:"conforto-de-leitura",children:[]},{value:"Acessibilidade tratada nos estilos do Animalia",id:"acessibilidade-tratada-nos-estilos-do-animalia",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o e configura\xe7\xe3o",id:"instala\xe7\xe3o-e-configura\xe7\xe3o",children:[]},{value:"Customiza\xe7\xe3o da tipografia",id:"customiza\xe7\xe3o-da-tipografia",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]}],A={toc:C};function z(e){var a=e.components,t=(0,n.Z)(e,w);return(0,i.kt)("wrapper",(0,o.Z)({},A,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"}],mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"design",mdxType:"TabItem"},(0,i.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,i.kt)("p",null,"Os estilos tipogr\xe1ficos s\xe3o estilos pr\xe9-definidos que ajudam a usar a tipografia de forma consistente, trazendo hierarquia visual para as informa\xe7\xf5es textuais da interface."),(0,i.kt)("h3",{id:"tipos"},"Tipos"),(0,i.kt)("p",null,"Os estilos tipogr\xe1ficos previstos atualmente no Animalia contemplam Heading, Body e Code."),(0,i.kt)("h4",{id:"heading"},"Heading"),(0,i.kt)("p",null,"Os Headings (cabe\xe7alhos ou t\xedtulos) s\xe3o usados para criar n\xedveis de hierarquia entre os conte\xfados de uma p\xe1gina."),(0,i.kt)("p",null,'Os usu\xe1rios costumam "scannear" o conte\xfado de uma p\xe1gina pelos t\xedtulos, ent\xe3o \xe9 importante us\xe1-los corretamente para facilitar a compreens\xe3o de como a p\xe1gina est\xe1 organizada. Al\xe9m disso, os mecanismos de pesquisa e leitores de tela utilizam esses par\xe2metros para identificar a estrutura e o conte\xfado das p\xe1ginas.'),(0,i.kt)("p",null,"S\xe3o 6 n\xedveis de Heading, que seguem uma hierarquia de relev\xe2ncia."),(0,i.kt)("img",{src:c,alt:"Listagem dos 6 n\xedveis de heading indo sendo 1 o maior e 6 o menor"}),(0,i.kt)("h4",{id:"body"},"Body"),(0,i.kt)("p",null,"\xc9 o estilo padr\xe3o da interface, que engloba todos os textos que n\xe3o recebam um tratamento espec\xedfico \u2013 sejam blocos de texto ou textos dentro de componente."),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("p",null,"\xc9 o estilo utilizado quando \xe9 necess\xe1rio especificar um conte\xfado como sendo um c\xf3digo. Esse estilo deve ser usado para destacar no meio de um texto que aquele o trecho ou palavra se trata de um c\xf3digo."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"anatomia"},"Anatomia"),(0,i.kt)("p",null,"Os estilos ",(0,i.kt)("em",{parentName:"p"},"Heading")," e ",(0,i.kt)("em",{parentName:"p"},"Body")," aplicam um grupo de tokens pr\xe9-definidos nos textos e, no caso do ",(0,i.kt)("em",{parentName:"p"},"Code"),", h\xe1 tamb\xe9m um background que recebe uma cor."),(0,i.kt)("img",{src:u,alt:"Tr\xeas estilo lado a lado, heading, body, e code"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Text"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Background"),(0,i.kt)("p",null,"Os estilos tipogr\xe1ficos do Animalia foram constru\xeddos utilizando os design tokens, mas estes estilos podem ser alterados e estilizados de acordo com a necessidade de cada contexto. Para isso, voc\xea pode consultar a lista completa de ",(0,i.kt)("a",{parentName:"p",href:"/docs/designtokens/tokenstypo"},"design tokens de tipografia"),"."),(0,i.kt)("img",{src:p,alt:"Estilo heading com a listagem dos tokens utilizados"}),(0,i.kt)("img",{src:m,alt:"Estilo body com a listagem dos tokens utilizados"}),(0,i.kt)("img",{src:f,alt:"Estilo code com a listagem dos tokens utilizados"}),(0,i.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,i.kt)("p",null,"Os estilos tipogr\xe1ficos foram projetados buscando atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG) 2.1. Tamb\xe9m foram estruturadas padr\xf5es de usabilidade para auxiliar na utiliza\xe7\xe3o e garantir uma boa experi\xeancia para os usu\xe1rios. Por isso, \xe9 muito importante que, ao aplicar esse componente, o propriet\xe1rio do conte\xfado leve em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,i.kt)("h3",{id:"arquitetura-da-informa\xe7\xe3o-hierarquia"},"Arquitetura da Informa\xe7\xe3o (Hierarquia)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Toda p\xe1gina deve conter um t\xedtulo, que descreva com clareza o assunto ou finalidade (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/page-titled"},"2.4.2 - Page Titled"),")"),(0,i.kt)("li",{parentName:"ul"},"Mantenha a hierarquia das informa\xe7\xf5es de formar clara e compreens\xedvel, n\xe3o apenas visualmente, mas tamb\xe9m para quem ouve o conte\xfado. Os usu\xe1rios que enxergam percebem a estrutura e os relacionamentos por meio de v\xe1rias pistas visuais, como o peso dado aos t\xedtulos das se\xe7\xf5es (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1 - Info and relationships"),")"),(0,i.kt)("li",{parentName:"ul"},"Use os t\xedtulos das se\xe7\xf5es para organizar o conte\xfado e facilitar a identifica\xe7\xe3o das \xe1reas (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/section-headings"},"2.4.10 - Section Heading"),")"),(0,i.kt)("li",{parentName:"ul"},"N\xe3o use Headings apenas para tornar o texto grande ou em bold. Eles estruturam o conte\xfado e s\xe3o utilizados por tecnologias assistivas para identificar corretamente os elementos da interface e seus n\xedveis. (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"4.1.2 - Name, role, value"),")")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"N\xe3o se esque\xe7a que os espa\xe7os tamb\xe9m ajudam a organizar o conte\xfado e a hierarquia na interface, separando ou agrupando os assuntos."))),(0,i.kt)(r.Z,{doImg:g,doAlt:"Tr\xeas t\xedtulos com n\xedveis de hierarquia diferentes",doDescription:"Utilize os t\xedtulos com os n\xedveis corretos para criar hierarquia e detalhamento do assunto.",dontImg:b,dontAlt:"Tr\xeas t\xedtulos sem diferenciar n\xedveis de hierarquia",dontDescription:"N\xe3o utilize os mesmos n\xedveis para todos os t\xedtulos, pois isso dificulta o entendimento da estrutura da p\xe1gina.",mdxType:"BestPracticesComponent"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Os t\xedtulos devem descrever sem ambiguidade a finalidade dos conte\xfados que est\xe3o relacionados. N\xe3o precisam ser longos. Uma palavra pode ser suficiente se fornecer uma pista apropriada para localizar e navegar pelo conte\xfado. (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6 - Headings and Labels"),")")),(0,i.kt)("h3",{id:"visual"},"Visual"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N\xe3o utilize cores com baixo contraste entre o fundo e o texto, pois isso dificulta o entendimento do conte\xfado. \xc9 poss\xedvel conferir se o contraste est\xe1 adequado e atingindo o valor de 7:1 em um ",(0,i.kt)("a",{parentName:"li",href:"https://webaim.org/resources/contrastchecker/"},"Contrast Checker")," (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"},"1.4.6: Contrast"),")"),(0,i.kt)("li",{parentName:"ul"},"Utilize alinhamento de texto \xe0 esquerda ou \xe0 direita, quando pertinente ao contexto. Nunca utilize texto justificado, pois gera espa\xe7amento desigual entre as palavras. (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation"},"1.4.8 - Apresenta\xe7\xe3o visual"),")")),(0,i.kt)(r.Z,{doImg:h,doAlt:"Bloco de texto com alinhamento \xe0 esquerda",doDescription:"Use alinhamento de texto \xe0 esquerda ou \xe0 direita para garantir a regularidade independente do conte\xfado ou largura do bloco de texto.",dontImg:k,dontAlt:"Bloco de texto com alinhamento justificado e espa\xe7os grandes entre as palavras",dontDescription:"N\xe3o use alinhamento justificado pois ele adiciona espa\xe7os irregulares entre as palavras para faz\xea-lo ocupar toda a largura do bloco, o que varia muito dependendo do conte\xfado e largura do dispositivo.",mdxType:"BestPracticesComponent"}),(0,i.kt)("h3",{id:"conforto-de-leitura"},"Conforto de leitura"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N\xe3o utilize blocos de texto muito largos, pois linhas longas dificultam a leitura e exigem que pessoas que utilizam zoom precisem rolar a p\xe1gina horizontalmente para ler uma linha de texto. A recomenda\xe7\xe3o \xe9 ter uma largura de linha de at\xe9 80 caracteres, para comportar todo o texto na tela mesmo com at\xe9 200% de zoom;"),(0,i.kt)("li",{parentName:"ul"},"Em blocos de texto, utilize um espa\xe7amento entrelinhas (line height) de pelo menos 1,5x o tamanho da fonte, ou seja 150%.\n(WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation"},"1.4.8 - Apresenta\xe7\xe3o visual"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing"},"1.4.12 - Espa\xe7amento de texto"),")")),(0,i.kt)(r.Z,{doImg:v,doAlt:"Texto com lineheight adequado, de 150% o tamanho da fonte",doDescription:"Use entrelinha (line height) adequada ao tamanho do texto. Adotar medidas relativas como porcentagem, facilitam essa utiliza\xe7\xe3o.",dontImg:y,dontAlt:"Texto com lineheight inadequado, de 120% o tamanho da fonte",dontDescription:"N\xe3o use um line height estreito, pois torna a leitura mais dif\xedcil e as linhas tendem a se embaralhar.",mdxType:"BestPracticesComponent"}),(0,i.kt)("h3",{id:"acessibilidade-tratada-nos-estilos-do-animalia"},"Acessibilidade tratada nos estilos do Animalia"),(0,i.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no pacote de defini\xe7\xe3o de estilos tipogr\xe1ficos. S\xe3o elas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Os estilos de cabe\xe7alho (Heading) foram desenvolvidos de modo a facilitar a cria\xe7\xe3o de hierarquias ao se utilizar os controles padr\xe3o do HTML, que permitem a identifica\xe7\xe3o do mesmo na interface por tecnologias assistivas. (WCAG ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"4.1.2: Name, Role, Value"),")"))),(0,i.kt)(d.Z,{value:"dev",mdxType:"TabItem"},(0,i.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,i.kt)("p",null,"O pacote de tipografia da marca Animalia adiciona os estilos nos elementos nativos do HTML, por exemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},"h1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),"."),(0,i.kt)("h3",{id:"instala\xe7\xe3o-e-configura\xe7\xe3o"},"Instala\xe7\xe3o e configura\xe7\xe3o"),(0,i.kt)("p",null,"Instale o pacote de tipografia no seu projeto utilizando o NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @animaliads/typography\n")),(0,i.kt)("p",null,"Em seguida adicione o arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},"index.css")," do pacote ",(0,i.kt)("inlineCode",{parentName:"p"},"@animaliads/typography")," na sua aplica\xe7\xe3o. Veja exemplos de configura\xe7\xe3o desse arquivo na se\xe7\xe3o Live Demo."),(0,i.kt)("h3",{id:"customiza\xe7\xe3o-da-tipografia"},"Customiza\xe7\xe3o da tipografia"),(0,i.kt)("p",null,"Se voc\xea estiver utilizando a estrutura de design tokens de tipografia e cores, conforme o guia de estilo, voc\xea poder\xe1 customizar a tipografia atrav\xe9s desses design tokens da marca, por exemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  --font-family-heading: Roboto;\n}\n\ncode {\n  --font-family-code: Roboto Mono;\n  --color-neutral-dark-80: gray;\n}\n")),(0,i.kt)("p",null,"Caso voc\xea n\xe3o esteja utilizando essa estrutura, esse pacote cont\xe9m uma defini\xe7\xe3o padr\xe3o, como Arial para as fam\xedlias de fonte. Mas voc\xea tamb\xe9m pode sobrescrever esses valores utilizando sintaxe comum de CSS."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  font-family: Roboto;\n}\n\ncode {\n  font-family: Roboto Mono;\n  color: gray;\n}\n")),(0,i.kt)("h3",{id:"live-demo"},"Live Demo"),(0,i.kt)(s.Z,{javascript:"https://stackblitz.com/edit/ani-typography?embed=1&file=index.html",react:"https://stackblitz.com/edit/react-ani-typography?embed=1&file=index.tsx",mdxType:"LiveDemoComponent"}))))}z.isMDXComponent=!0},6010:function(e,a,t){function o(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=o(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function n(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=o(e))&&(n&&(n+=" "),n+=a);return n}t.d(a,{Z:function(){return n}})}}]);