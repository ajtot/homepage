"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[8526],{5348:function(e,a,t){t.d(a,{Z:function(){return n}});var A=t(1721),o=t(7294),n=function(e){function a(){return e.apply(this,arguments)||this}return(0,A.Z)(a,e),a.prototype.render=function(){return o.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},o.createElement("div",{style:{width:"50%",marginRight:"4%"}},o.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),o.createElement("b",null,"Fazer"),o.createElement("p",null,this.props.doDescription)),o.createElement("div",{style:{width:"50%"}},o.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),o.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),o.createElement("p",null,this.props.dontDescription)))},a}(o.Component)},808:function(e,a,t){t.d(a,{Z:function(){return n}});var A=t(1721),o=t(7294),n=function(e){function a(){for(var a,t=arguments.length,A=new Array(t),o=0;o<t;o++)A[o]=arguments[o];return(a=e.call.apply(e,[this].concat(A))||this).state={language:"react"},a}return(0,A.Z)(a,e),a.prototype.render=function(){var e=this;return o.createElement("div",null,o.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},o.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),o.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},o.createElement("option",{value:"react"},"React"),this.props.javascript?o.createElement("option",{value:"javascript"},"Javascript"):"")),o.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(o.Component)},6277:function(e,a,t){var A=t(1721),o=t(1262),n=t(7294);n.Component},4258:function(e,a,t){t.r(a),t.d(a,{default:function(){return D},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return B}});var A=t(7462),o=t(3366),n=(t(7294),t(3905)),r=t(1395),i=t(8215),d=t(5348),l=t(808),s=t.p+"assets/images/textfield-anatomy-dd8fb9abbf1b36f16c2fa489a994e685.png",p=t.p+"assets/images/textfield-single-anatomy-190158fe457726a87519368d8d870d94.png",m=t.p+"assets/images/textfield-do-1-4f73a2f538f3bf025a28ca02b57ddab7.jpg",c=t.p+"assets/images/textfield-dont-1-d15de62a6a53e764887247bd9aed79e3.jpg",u=t.p+"assets/images/textfield-do-2-9566dfcf286bd6587e37231823a9f36d.jpg",g=t.p+"assets/images/textfield-dont-2-c977460cee186524406feaaad9891389.jpg",k=t.p+"assets/images/textfield-do-3-d2cf0d334072050176197bc06ac6a9c3.jpg",f=t.p+"assets/images/textfield-dont-3-cabeeae253964629ec64b99abce06708.jpg",v=t.p+"assets/images/textfield-states-7e093d886511e4123aa552c2e0cf74f4.png",h=(t(6277),["components"]),b={id:"textfield",sidebar_label:"Textfield"},N={unversionedId:"components/textfield",id:"components/textfield",isDocsHomePage:!1,title:"Text field",description:"<Tabs",source:"@site/docs/components/textfield.mdx",sourceDirName:"components",slug:"/components/textfield",permalink:"/en/docs/components/textfield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/textfield.mdx",version:"current",sidebar_label:"Textfield",frontMatter:{id:"textfield",sidebar_label:"Textfield"},sidebar:"componenents",previous:{title:"Text area",permalink:"/en/docs/components/textarea"},next:{title:"Toaster",permalink:"/en/docs/components/toaster"}},B=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]},{value:"Anatomia",id:"anatomia",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Erro, valida\xe7\xe3o e ajuda",id:"erro-valida\xe7\xe3o-e-ajuda",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o do pacote",id:"instala\xe7\xe3o-do-pacote",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[]}],C={toc:B};function D(e){var a=e.components,t=(0,o.Z)(e,h);return(0,n.kt)("wrapper",(0,A.Z)({},C,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"design",mdxType:"TabItem"},(0,n.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,n.kt)("p",null,"O ",(0,n.kt)("em",{parentName:"p"},"Text field")," \xe9 um componente de entrada de dados que possibilita \xe0 pessoa que est\xe1 interagindo com a interface insira e edite informa\xe7\xf5es. Esse tipo de campo possui uma \xfanica linha e \xe9 bastante comum em formul\xe1rios."),(0,n.kt)("h3",{id:"tipos"},"Tipos"),(0,n.kt)("p",null,"Pensando na modularidade do Design system, o text field possui duas composi\xe7\xf5es distintas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Text field:")," vers\xe3o padr\xe3o do componente, com todos os elementos;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Text field (Single)"),": apenas o campo de entrada em sua forma m\xednima.")),(0,n.kt)("img",{src:"data:image/png;base64,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",alt:"Dois tipos de text field: padr\xe3o e unit\xe1rio."}),(0,n.kt)("h3",{id:"anatomia"},"Anatomia"),(0,n.kt)("p",null,"Estruturalmente, o text field pode conter ",(0,n.kt)("em",{parentName:"p"},"label"),", ",(0,n.kt)("em",{parentName:"p"},"field"),", ",(0,n.kt)("em",{parentName:"p"},"help text")," e ",(0,n.kt)("em",{parentName:"p"},"text error.")," J\xe1 o campo em si, possui suas partes espec\xedficas, como ",(0,n.kt)("em",{parentName:"p"},"border")," e ",(0,n.kt)("em",{parentName:"p"},"input text.")),(0,n.kt)("h4",{id:"text-field"},"Text Field"),(0,n.kt)("img",{src:s,alt:"Demonstrativo das 4 partes do text field completo"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Label (ani-label)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Field (single)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Help text"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4.")," Text error (",(0,n.kt)("em",{parentName:"p"},"error"),")"),(0,n.kt)("h4",{id:"text-field-single"},"Text Field (Single)"),(0,n.kt)("img",{src:p,alt:"Text field na vers\xe3o single, indicando as 5 partes"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Placeholder"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Border"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Background"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4"),". Input text"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5.")," Outline (",(0,n.kt)("em",{parentName:"p"},"focus"),")"),(0,n.kt)("p",null,"O componente \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"A label \xe9 tratada como um componente \xe0 parte no Design System (",(0,n.kt)("inlineCode",{parentName:"p"},"ani-label"),"). Voc\xea pode consultar suas varia\xe7\xf5es e customiza\xe7\xf5es na documenta\xe7\xe3o espec\xedfica desse componente."),(0,n.kt)("p",{parentName:"div"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"/docs/components/label"},"Label")))),(0,n.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,n.kt)("p",null,"O componente foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG 2.1). Tamb\xe9m foi estruturado com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use label com textos auto-explicativos, com instru\xe7\xf5es claras e objetivas, para que seja poss\xedvel identificar com facilidade qual informa\xe7\xe3o precisa ser inserida no campo;"),(0,n.kt)("li",{parentName:"ul"},"Mantenha a largura do campo adequada ao conte\xfado esperado, evitando com que sejam muito maiores ou muito menores do que o necess\xe1rio;"),(0,n.kt)("li",{parentName:"ul"},"Nunca use o placeholder para substituir a label do componente. Use-o para trazer mais contexto sobre o tipo de informa\xe7\xe3o que precisa ser adicionada;")),(0,n.kt)(d.Z,{doImg:m,doAlt:"Dois inputs, CPF e email, identificados pela label",doDescription:"Use labels curtas e objetivas, identificando com clareza o campo a qual est\xe1 relacionada.",dontImg:c,dontAlt:"Dois inputs, CPF e email, sem label, com a identifica\xe7\xe3o dos campos no placeholder",dontDescription:"Usar o placeholder como substituto da label compromete a identifica\xe7\xe3o do campo ap\xf3s a inser\xe7\xe3o do conte\xfado e \xe9 ruim para acessibilidade, pois alguns leitores de tela ignoram o placeholder.",mdxType:"BestPracticesComponent"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Um text field pode receber diversos tipos de informa\xe7\xe3o, sendo o tipo texto o padr\xe3o. No desenvolvimento, use o atributo adequado para o tipo de dado esperado, pois tornam o formul\xe1rio mais acess\xedvel (Exemplo: para um campo de e-mail, ",(0,n.kt)("inlineCode",{parentName:"li"},'<input type="email">'),");"),(0,n.kt)("li",{parentName:"ul"},"Sempre que poss\xedvel, utilize m\xe1scara no campo para ajudar a identificar o padr\xe3o de conte\xfado esperado.")),(0,n.kt)("h3",{id:"erro-valida\xe7\xe3o-e-ajuda"},"Erro, valida\xe7\xe3o e ajuda"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sempre que poss\xedvel, opte por fazer a valida\xe7\xe3o dos dados antes que seja feito o envio formul\xe1rio;"),(0,n.kt)("li",{parentName:"ul"},"Sinalize a obrigatoriedade do campo de acordo com o contexto. Quando a maioria dos campos for opcional, indique todos que s\xe3o obrigat\xf3rios. Quando a maioria dos campos for obrigat\xf3rio, sinalize os campos que s\xe3o opcionais;")),(0,n.kt)(d.Z,{doImg:u,doAlt:"Inputs Nome, CPF e Email, sendo que apenas o email est\xe1 sinalizado como opcional",doDescription:"Indique a obrigatoriedade do campo, conforme o contexto, evitando a carga de informa\xe7\xe3o nos campos.",dontImg:g,dontAlt:"Inputs Nome, CPF e Email, com os dois primeiros marcados como obrigat\xf3rio.",dontDescription:"Repetir a informa\xe7\xe3o que \xe9 a maioria no formul\xe1rio gera redund\xe2ncia.",mdxType:"BestPracticesComponent"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se apenas um erro for poss\xedvel, utilize o ",(0,n.kt)("em",{parentName:"li"},"help text")," para descrever como evit\xe1-lo. Quando v\xe1rios erros forem poss\xedveis, a mensagem deve ser escrita pensando no erro mais prov\xe1vel;"),(0,n.kt)("li",{parentName:"ul"},"Em caso de um erro, sinalize o item a ser corrigido, com uma mensagem que auxilie na sua corre\xe7\xe3o.")),(0,n.kt)(d.Z,{doImg:k,doAlt:"Campo nova senha sinalizado com erro e mensagem informando que precisa ter pelo menos 5 caracteres",doDescription:"Escreva mensagens de erro que ajudem a corrigi-los.",dontImg:f,dontAlt:"Campo nova senha sinalizado com erro e mensagem senha inv\xe1lida",dontDescription:"Evite mensagens de erro gen\xe9ricas.",mdxType:"BestPracticesComponent"}),(0,n.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,n.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas. S\xe3o elas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O text-field foi desenvolvido com uso de controles padr\xf5es HTML, o que permite a identifica\xe7\xe3o do mesmo na interface por tecnologias assistivas. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"),(0,n.kt)("li",{parentName:"ul"},"O foco \xe9 vis\xedvel e possui uma espessura superior a 2 pixels CSS, n\xe3o ficando escondido por outros elementos da tela. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"},"WCAG 2.4.12: Focus Appearance"),")"),(0,n.kt)("li",{parentName:"ul"},"Inclus\xe3o do ARIA-DESCRIBEDBY na tag do campo, mantendo uma sequ\xeancia l\xf3gica dos itens: label, campo de input, error text/ help text."),(0,n.kt)("li",{parentName:"ul"},"A identifica\xe7\xe3o do erro acontece tamb\xe9m atrav\xe9s da mudan\xe7a de cor do campo, mas tamb\xe9m de um \xedcone junto da mensagem (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"},"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),")"))),(0,n.kt)(i.Z,{value:"dev",mdxType:"TabItem"},(0,n.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,n.kt)("h3",{id:"instala\xe7\xe3o-do-pacote"},"Instala\xe7\xe3o do pacote"),(0,n.kt)("p",null,"Caso voc\xea j\xe1 tenha feito o passo-a-passo descrito em ",(0,n.kt)("a",{parentName:"p",href:"?path=/docs/come%C3%A7ando--page"},"Come\xe7ando"),",\nvoc\xea pode pular esta instala\xe7\xe3o e ir direto para o t\xf3pico ",(0,n.kt)("a",{parentName:"p",href:"#como-utilizar"},"Como utilizar"),"."),(0,n.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-textfield\n")),(0,n.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("p",null,"Para utilizar este componente na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal.\nEssa importa\xe7\xe3o ir\xe1 variar conforme o tipo de aplica\xe7\xe3o que voc\xea est\xe1 utilizando, por exemplo: angular, react ou\nsomente javascript."),(0,n.kt)("p",null,"Depois de importar o arquivo principal, basta adicionar a tag ",(0,n.kt)("inlineCode",{parentName:"p"},"ani-textfield")," no seu c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<ani-textfield>exemplo de label</ani-textfield>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para utilizar com o tema padr\xe3o, \xe9 necess\xe1rio instalar e utilizar os pacotes ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/animalia-brand"),"\ne ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/css-tokens"),". Voc\xea pode ver um exemplo de utiliza\xe7\xe3o no ",(0,n.kt)("a",{parentName:"p",href:"#live-demo"},"Live Demo"),".")),(0,n.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"ani-textfield {\n  --color: green;\n}\n")),(0,n.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedveis, consulte ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,n.kt)("h3",{id:"live-demo"},"Live Demo"),(0,n.kt)(l.Z,{react:"https://stackblitz.com/edit/react-ani-textfield?embed=1&file=src/App.js",mdxType:"LiveDemoComponent"}),(0,n.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-textfield--sample"},"guia de referencia de API"),".")),(0,n.kt)(i.Z,{value:"custom-properties",mdxType:"TabItem"},(0,n.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,n.kt)("p",null,"O componente de textfield possui propriedades customiz\xe1veis, que possibilitam fazer altera\xe7\xf5es, de acordo com a marca ou o tema a ser utilizado. Com isso, garantimos uma consist\xeancia ao Design System, sem perder a identidade de cada marca."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--font-family")),(0,n.kt)("td",{parentName:"tr",align:null},"fam\xedlia tipogr\xe1fica"),(0,n.kt)("td",{parentName:"tr",align:null},"$font-family-text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--font-size")),(0,n.kt)("td",{parentName:"tr",align:null},"tamanho da fonte"),(0,n.kt)("td",{parentName:"tr",align:null},"$font-size-default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color-placeholder")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do texto placeholder"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-30")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color")),(0,n.kt)("td",{parentName:"tr",align:null},"cor predominante (border)"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-05")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--padding")),(0,n.kt)("td",{parentName:"tr",align:null},"tamanho do espa\xe7amento interno (valor da propriedade ",(0,n.kt)("inlineCode",{parentName:"td"},"padding")," do css)"),(0,n.kt)("td",{parentName:"tr",align:null},"left, right: 0.5rem (8px)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do texto"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor predominante (border) no estado hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-hover")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-brand-01-lightest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-focused")),(0,n.kt)("td",{parentName:"tr",align:null},"cor predominante (border) no estado focus"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do outline no estado focus"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-focus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-disabled")),(0,n.kt)("td",{parentName:"tr",align:null},"cor predominante (border) no estado disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-disabled")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color-disabled")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do texto no estado disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")))),(0,n.kt)("img",{src:v,alt:"Estados de intera\xe7\xe3o do text field dispostos lado a lado"}))))}D.isMDXComponent=!0}}]);