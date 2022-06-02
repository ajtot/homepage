"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[6436],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return u}});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=n,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return t?o.createElement(f,i(i({ref:a},m),{},{components:t})):o.createElement(f,i({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5348:function(e,a,t){t.d(a,{Z:function(){return r}});var o=t(1721),n=t(7294),r=function(e){function a(){return e.apply(this,arguments)||this}return(0,o.Z)(a,e),a.prototype.render=function(){return n.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},n.createElement("div",{style:{width:"50%",marginRight:"4%"}},n.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),n.createElement("b",null,"Fazer"),n.createElement("p",null,this.props.doDescription)),n.createElement("div",{style:{width:"50%"}},n.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),n.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),n.createElement("p",null,this.props.dontDescription)))},a}(n.Component)},808:function(e,a,t){t.d(a,{Z:function(){return r}});var o=t(1721),n=t(7294),r=function(e){function a(){for(var a,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(a=e.call.apply(e,[this].concat(o))||this).state={language:"react"},a}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this;return n.createElement("div",null,n.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},n.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),n.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},n.createElement("option",{value:"react"},"React"),this.props.javascript?n.createElement("option",{value:"javascript"},"Javascript"):"")),n.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(n.Component)},8215:function(e,a,t){var o=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},1395:function(e,a,t){t.d(a,{Z:function(){return m}});var o=t(7294),n=t(944),r=t(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var l=37,c=39;var m=function(e){var a=e.lazy,t=e.block,m=e.defaultValue,d=e.values,p=e.groupId,u=e.className,f=(0,n.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,o.useState)(m),h=g[0],k=g[1],N=o.Children.toArray(e.children),y=[];if(null!=p){var x=v[p];null!=x&&x!==h&&d.some((function(e){return e.value===x}))&&k(x)}var w=function(e){var a=e.currentTarget,t=y.indexOf(a),o=d[t].value;k(o),null!=p&&(b(p,o),setTimeout((function(){var e,t,o,n,r,i,l,c;(e=a.getBoundingClientRect(),t=e.top,o=e.left,n=e.bottom,r=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&r<=c&&n<=l&&o>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},E=function(e){var a,t;switch(e.keyCode){case c:var o=y.indexOf(e.target)+1;t=y[o]||y[0];break;case l:var n=y.indexOf(e.target)-1;t=y[n]||y[y.length-1]}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":h===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:E,onFocus:w,onClick:w},t)}))),a?(0,o.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},N.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},9443:function(e,a,t){var o=(0,t(7294).createContext)(void 0);a.Z=o},944:function(e,a,t){var o=t(7294),n=t(9443);a.Z=function(){var e=(0,o.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1046:function(e,a,t){t.r(a),t.d(a,{default:function(){return x},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return N}});var o=t(7462),n=t(3366),r=(t(7294),t(3905)),i=t(1395),s=t(8215),l=t(5348),c=(t(808),t.p+"assets/images/label-type-1b245a555c5a9f46d38764fc1f14ba3d.png"),m=t.p+"assets/images/label-anatomy-6a5a9f1f4a1d4e3cf64dda56a40fe1aa.png",d=t.p+"assets/images/label-do-1-5e5ae34f2ace0ecce9e82bc42c14b428.jpg",p=t.p+"assets/images/label-dont-1-1531f7fe9d201dc083615d3d43c5d5ac.jpg",u=t.p+"assets/images/label-do-2-6dc2540209a015b312bb96218380edde.jpg",f=t.p+"assets/images/label-dont-2-adcbbff9cb51d95e7ec76337014aaf7b.jpg",v=t.p+"assets/images/label-do-3-e985b6cb6bc02de4b9821a9c1c991931.jpg",b=t.p+"assets/images/label-dont-3-911111a261bfba1d4ea675280738109b.jpg",g=["components"],h={id:"label",sidebar_label:"Label"},k={unversionedId:"components/label",id:"components/label",isDocsHomePage:!1,title:"Label",description:"<Tabs",source:"@site/docs/components/label.mdx",sourceDirName:"components",slug:"/components/label",permalink:"/animalia-doc/docs/components/label",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/label.mdx",version:"current",sidebar_label:"Label",frontMatter:{id:"label",sidebar_label:"Label"},sidebar:"componenents",previous:{title:"Item-list",permalink:"/animalia-doc/docs/components/item-list"},next:{title:"Link",permalink:"/animalia-doc/docs/components/link"}},N=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]},{value:"Anatomia",id:"anatomia",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[]}],y={toc:N};function x(e){var a=e.components,t=(0,n.Z)(e,g);return(0,r.kt)("wrapper",(0,o.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente ",(0,r.kt)("em",{parentName:"p"},"label"),"  tem a fun\xe7\xe3o de identificar um campo de entrada de dados e informar \xe0s pessoas sobre qual informa\xe7\xe3o precisa ser inserida naquele campo. \xc9 sempre usado de forma complementar, ou seja, em conjunto com outros componentes de entrada de dados. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Componentes relacionados")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/checkbox"},"Checkbox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/textfield"},"Text Field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/textarea"},"Text Area")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/select"},"Select")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/radio"},"Radio"))))),(0,r.kt)("h3",{id:"tipos"},"Tipos"),(0,r.kt)("p",null,"Pensando na modularidade e padroniza\xe7\xe3o no uso da label em diferentes componentes, foram previstas duas varia\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label")," ",(0,r.kt)("strong",{parentName:"li"},"(basic)"),": para uso com um checkbox ou radio, individualmente;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label-field:")," Rotula os componentes de input e grupos de radio ou checkbox;")),(0,r.kt)("img",{src:c,alt:"Label basic aplicada com checkbox e radio; e Label field rotulando text field e grupo de checkbox"}),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"Estruturalmente, os dois tipos de label possuem o ",(0,r.kt)("em",{parentName:"p"},"text"),", que \xe9 o r\xf3tulo em si. Por\xe9m, a vers\xe3o label-field possui tamb\xe9m o ",(0,r.kt)("em",{parentName:"p"},"required text"),", para sinalizar a obrigatoriedade do campo. Esse elemento \xe9 opcional no componente."),(0,r.kt)("img",{src:m,alt:"Tipos de label com as partes sinalizadas, sendo 1 text e 2 required text"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Text"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Required text ",(0,r.kt)("em",{parentName:"p"},"(opcional)")),(0,r.kt)("p",null,"O componente \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de propriedades customiz\xe1veis."),(0,r.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,r.kt)("p",null,"O componente foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG 2.1). Tamb\xe9m foi estruturado com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mantenha a label sempre vis\xedvel e pr\xf3xima ao campo ao qual est\xe1 relacionada. Nunca use o placeholder para substituir a label;"),(0,r.kt)("li",{parentName:"ul"},"Use textos auto-explicativos, com instru\xe7\xf5es claras e objetivas, para que seja poss\xedvel identificar com facilidade qual informa\xe7\xe3o precisa ser inserida no campo;"),(0,r.kt)("li",{parentName:"ul"},"Use textos curtos, em geral de 1 a 3 palavras e n\xe3o inclua qualquer tipo de pontua\xe7\xe3o;")),(0,r.kt)(l.Z,{doImg:d,doAlt:"Campo com r\xf3tulo \u201cEmail\u201d",doDescription:"Mantenha os textos curtos e objetivos, e sem pontua\xe7\xf5es.",dontImg:p,dontAlt:"Campo com r\xf3tulo \u201cInsira neste campo seu email:",dontDescription:"O excesso de texto na label dificulta o escaneamento dos campos e a pontua\xe7\xe3o \xe9 desnecess\xe1ria.",mdxType:"BestPracticesComponent"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sempre que poss\xedvel, use capitaliza\xe7\xe3o no texto, isto \xe9, deixando apenas a primeira letra da frase em mai\xfasculo. A exce\xe7\xe3o fica para siglas, marcas e nomes pr\xf3prios;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o use textos com todas as letras mai\xfasculas ou todas min\xfasculas no texto, pois isso prejudica a legibilidade e cria um atrito desnecess\xe1rio;")),(0,r.kt)(l.Z,{doImg:u,doAlt:"Label 'Nome completo' com apenas a primeira letra mai\xfascula",doDescription:"Usar capitaliza\xe7\xe3o nos textos torna a leitura mais confort\xe1vel e simples.",dontImg:f,dontAlt:"Label 'Nome completo' com todas as letras mai\xfasculas",dontDescription:"Usar todas das letras mai\xfasculas ou min\xfasculas dificulta a leitura do texto.",mdxType:"BestPracticesComponent"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mantenha todas as labels com o mesmo posicionamento em um formul\xe1rio. Para componentes como text field e select, que utilizam label-field, \xe9 recomend\xe1vel posicion\xe1-la na parte superior do componente;"),(0,r.kt)("li",{parentName:"ul"},"Para checkbox e radio, posicione o r\xf3tulo de cada op\xe7\xe3o ao lado direito do componente;"),(0,r.kt)("li",{parentName:"ul"},"Sinalize a obrigatoriedade do campo de acordo com o contexto. Quando a maioria dos campos for opcional, indique todos que s\xe3o obrigat\xf3rios. Quando a maioria dos campos for obrigat\xf3rio, sinalize os campos que s\xe3o opcionais;")),(0,r.kt)(l.Z,{doImg:v,doAlt:"Inputs Nome, CPF e Email, sendo que apenas o email est\xe1 sinalizado como opcional",doDescription:"Indique a obrigatoriedade do campo, conforme o contexto, evitando a carga de informa\xe7\xe3o nos campos.",dontImg:b,dontAlt:"Inputs Nome, CPF e Email, com os dois primeiros marcados como obrigat\xf3rio.",dontDescription:"Repetir a informa\xe7\xe3o que \xe9 a maioria no formul\xe1rio gera redund\xe2ncia.",mdxType:"BestPracticesComponent"})),(0,r.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,r.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}x.isMDXComponent=!0},6010:function(e,a,t){function o(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=o(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function n(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=o(e))&&(n&&(n+=" "),n+=a);return n}t.d(a,{Z:function(){return n}})}}]);