"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[257],{5348:function(e,a,o){o.d(a,{Z:function(){return r}});var t=o(1721),n=o(7294),r=function(e){function a(){return e.apply(this,arguments)||this}return(0,t.Z)(a,e),a.prototype.render=function(){return n.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},n.createElement("div",{style:{width:"50%",marginRight:"4%"}},n.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),n.createElement("b",null,"Fazer"),n.createElement("p",null,this.props.doDescription)),n.createElement("div",{style:{width:"50%"}},n.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),n.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),n.createElement("p",null,this.props.dontDescription)))},a}(n.Component)},808:function(e,a,o){o.d(a,{Z:function(){return r}});var t=o(1721),n=o(7294),r=function(e){function a(){for(var a,o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];return(a=e.call.apply(e,[this].concat(t))||this).state={language:"react"},a}return(0,t.Z)(a,e),a.prototype.render=function(){var e=this;return n.createElement("div",null,n.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},n.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),n.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},n.createElement("option",{value:"react"},"React"),this.props.javascript?n.createElement("option",{value:"javascript"},"Javascript"):"")),n.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(n.Component)},6277:function(e,a,o){var t=o(1721),n=o(1262),r=o(7294);r.Component},2242:function(e,a,o){o.r(a),o.d(a,{default:function(){return C},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return N}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),i=o(1395),s=o(8215),l=o(5348),d=o(808),c=o.p+"assets/images/checkbox-size-9cafef84143f3e0a65dc21d9d94be097.jpg",p=o.p+"assets/images/checkbox-do-1-ec6a56bafff139a9abdfb38d3ba4a4d4.jpg",m=o.p+"assets/images/checkbox-do-2-cc92a2bbe74f10936f98bfa3fe8b82d9.jpg",u=o.p+"assets/images/checkbox-dont-1-ba871610c5024f2ef84860ce8555365b.jpg",k=o.p+"assets/images/checkbox-dont-2-d8aa745b30b3d927927df574960f7e83.jpg",h=o.p+"assets/images/checkbox-types-227111afaafaf6ec82e36ce709640038.jpg",b=o.p+"assets/images/checkboxanatomy-98d096217a9dfeb38f4e7f72b4cf70a6.jpg",g=(o(6277),["components"]),v={id:"checkbox",sidebar_label:"Checkbox"},f={unversionedId:"components/checkbox",id:"components/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"<Tabs",source:"@site/docs/components/checkbox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/en/docs/components/checkbox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/checkbox.mdx",version:"current",sidebar_label:"Checkbox",frontMatter:{id:"checkbox",sidebar_label:"Checkbox"},sidebar:"componenents",previous:{title:"Card",permalink:"/en/docs/components/card"},next:{title:"Combobox",permalink:"/en/docs/components/combobox"}},N=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Anatomia",id:"anatomia",children:[]},{value:"Comportamento",id:"comportamento",children:[]},{value:"Tamanhos",id:"tamanhos",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Uso",id:"uso",children:[]},{value:"Comportamento",id:"comportamento-1",children:[]},{value:"Intera\xe7\xe3o",id:"intera\xe7\xe3o",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o do pacote",id:"instala\xe7\xe3o-do-pacote",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[]}],x={toc:N};function C(e){var a=e.components,o=(0,n.Z)(e,g);return(0,r.kt)("wrapper",(0,t.Z)({},x,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente checkbox (caixa de sele\xe7\xe3o) \xe9 usado para permitir que o usu\xe1rio selecione uma ou mais op\xe7\xf5es de um n\xfamero limitado de escolhas.\nAs caixas de sele\xe7\xe3o atuam de forma independente, ou seja, a escolha de uma op\xe7\xe3o n\xe3o afeta as outras caixas e seus status."),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"O checkbox \xe9 composto por ",(0,r.kt)("em",{parentName:"p"},"background")," e ",(0,r.kt)("em",{parentName:"p"},"border"),". Tamb\xe9m cont\xe9m partes que s\xe3o espec\xedficas de varia\xe7\xe3o do componente ou estados de intera\xe7\xe3o, como ",(0,r.kt)("em",{parentName:"p"},"shadow")," no estado hover."),(0,r.kt)("img",{src:b,alt:"Anatomia do checkbox disposto lado a lado, sendo 1 border, 2 background, 3 icon, 4 shadow hover e 5 outline"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Border"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Background"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Icon (checked)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Shadow (hover)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," Outline (focused)"),(0,r.kt)("h3",{id:"comportamento"},"Comportamento"),(0,r.kt)("p",null,"O componente checkbox pode assumir tr\xeas 3 varia\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unchecked"),": item desmarcado"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checked"),": item marcado"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mixed:")," quando, em um grupo de checkbox relacionados, alguns itens do grupo (mas n\xe3o todos) foram marcados")),(0,r.kt)("h3",{id:"tamanhos"},"Tamanhos"),(0,r.kt)("p",null,"O componente possui dois tamanhos diferentes: ",(0,r.kt)("em",{parentName:"p"},"Medium")," e ",(0,r.kt)("em",{parentName:"p"},"Large"),". O tamanho medium \xe9 o tamanho padr\xe3o. O large pode ser usado em casos espec\xedficos, como em cards por exemplo."),(0,r.kt)("img",{src:c,alt:"Duas varia\xe7\xf5es de tamanho para o checkbox dispostas lado a lado"}),(0,r.kt)("p",null,"Os componentes s\xe3o formados por tokens, sendo estes propriedades de estilo que definem como ser\xe1 estruturado e estilizado. Os tokens que podem ser alterados pelas marcas, podem ser conferidos na se\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,r.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,r.kt)("p",null,"O componente foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG) 2.1. Tamb\xe9m foram estruturadas padr\xf5es de usabilidade para auxiliar na utiliza\xe7\xe3o do componente e garantir uma boa experi\xeancia para os usu\xe1rios. Por isso, \xe9 muito importante que, ao aplicar esse componente, o propriet\xe1rio do conte\xfado leve em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,r.kt)("h3",{id:"uso"},"Uso"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ao utilizar label para acompanhar o checkbox, posicione a mesma ao lado direito da caixa de sele\xe7\xe3o;"),(0,r.kt)("li",{parentName:"ul"},"Ordene as op\xe7\xf5es de checkbox de forma l\xf3gica, como por exemplo em ordem alfab\xe9tica, numeral ou com base nos itens mais escolhidos;"),(0,r.kt)("li",{parentName:"ul"},"\xc9 recomend\xe1vel n\xe3o utilizar mais do que 7 itens em uma lista de op\xe7\xf5es;"),(0,r.kt)("li",{parentName:"ul"},"Use textos curtos e, sempre que poss\xedvel, mantenha a label de uma caixa de sele\xe7\xe3o em uma \xfanica linha;")),(0,r.kt)(l.Z,{doImg:p,doAlt:"Checkbox com uma op\xe7\xe3o com texto mais longo, mas em linha \xfanica",doDescription:"Manter o texto em linha \xfanica facilita a correla\xe7\xe3o entre a label e o seletor.",dontImg:u,dontAlt:"Checkbox com texto da primeira op\xe7\xe3o em duas linhas",dontDescription:"Evite textos longos. O texto em duas linhas torna os espa\xe7os entre as op\xe7\xf5es irregulares.",warning:"true",mdxType:"BestPracticesComponent"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefira a utiliza\xe7\xe3o do componente em uma lista vertical ao inv\xe9s de horizontal, pois permite uma leitura mais f\xe1cil\npara os usu\xe1rios. O alinhamento horizontal dificulta correlacionar as labels \xe0s caixas correspondentes.")),(0,r.kt)(l.Z,{doImg:m,doAlt:"Checkbox com op\xe7\xf5es listadas lado a lado",doDescription:"Alinhe os componentes verticalmente sempre que poss\xedvel.",dontImg:k,dontAlt:"Checkbox com op\xe7\xf5es listadas lado a lado",dontDescription:"Ao inserir os componentes lado a lado, certifique-se de inserir um espa\xe7amento adequado entre as op\xe7\xf5es.",warning:"true",mdxType:"BestPracticesComponent"}),(0,r.kt)("h3",{id:"comportamento-1"},"Comportamento"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefira n\xe3o deixar nenhuma op\xe7\xe3o pr\xe9-selecionada, pois pode passar despercebida pelos usu\xe1rios e ocasionar no envio de uma resposta errada;"),(0,r.kt)("li",{parentName:"ul"},"Se o checkbox estiver acompanhado de outro elemento, como label, \xe9 recomendado que a \xe1rea clic\xe1vel envolva o elemento tamb\xe9m.")),(0,r.kt)("h3",{id:"intera\xe7\xe3o"},"Intera\xe7\xe3o"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ordem de foco deve acontecer em sequ\xeancia l\xf3gica. Como por exemplo, quando n\xe3o tem nenhuma op\xe7\xe3o selecionada, o foco deve mover-se para o primeiro item da lista. (WCAG ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"2.4.3: Focus Order"),")"),(0,r.kt)("li",{parentName:"ul"},"Com navega\xe7\xe3o via teclado, o checkbox em foco \xe9 marcado ou desmarcado atrav\xe9s da tecla ",(0,r.kt)("em",{parentName:"li"},"space"))),(0,r.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,r.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas pelo propriet\xe1rio do conte\xfado. S\xe3o elas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O componente foi desenvolvido utilizando controles padr\xf5es HTML para permitir a identifica\xe7\xe3o do mesmo na interface por tecnologias assistivas. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"),(0,r.kt)("li",{parentName:"ul"},"A \xe1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xe3o pode ficar escondido por outros elementos da tela. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"},"WCAG 2.4.12: Focus Appearance"),")"),(0,r.kt)("li",{parentName:"ul"},"O estado de foco deve ser sempre preservado, inclusive quando o componente estiver desabilitado. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"WCAG 2.4.7: Focus Visible"),")"),(0,r.kt)("li",{parentName:"ul"},"A cor n\xe3o deve ser o \xfanico meio para diferenciar o componente do seu estado marcado e desmarcado. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"},"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),")"))),(0,r.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,r.kt)("h3",{id:"instala\xe7\xe3o-do-pacote"},"Instala\xe7\xe3o do pacote"),(0,r.kt)("p",null,"Caso voc\xea j\xe1 tenha feito o passo-a-passo descrito em ",(0,r.kt)("a",{parentName:"p",href:"?path=/docs/come%C3%A7ando--page"},"Come\xe7ando"),",\nvoc\xea pode pular esta instala\xe7\xe3o e ir direto para o t\xf3pico ",(0,r.kt)("a",{parentName:"p",href:"#como-utilizar"},"Como utilizar"),"."),(0,r.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-checkbox\n")),(0,r.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,r.kt)("p",null,"Para utilizar este componente na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal.\nEssa importa\xe7\xe3o ir\xe1 variar conforme o tipo de aplica\xe7\xe3o que voc\xea est\xe1 utilizando, por exemplo: angular, react ou\nsomente javascript."),(0,r.kt)("p",null,"Depois de importar o arquivo principal, basta adicionar a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"ani-checkbox")," no seu c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ani-checkbox>exemplo de label</ani-checkbox>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para utilizar com o tema padr\xe3o, \xe9 necess\xe1rio instalar e utilizar os pacotes ",(0,r.kt)("inlineCode",{parentName:"p"},"@animaliads/animalia-brand"),"\ne ",(0,r.kt)("inlineCode",{parentName:"p"},"@animaliads/css-tokens"),". Voc\xea pode ver um exemplo de utiliza\xe7\xe3o no ",(0,r.kt)("a",{parentName:"p",href:"#live-demo"},"Live Demo"),".")),(0,r.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ani-checkbox {\n  --color-unchecked: green;\n  --color-checked: coral;\n}\n")),(0,r.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedveis, consulte ",(0,r.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,r.kt)("h3",{id:"live-demo"},"Live Demo"),(0,r.kt)(d.Z,{react:"https://stackblitz.com/edit/react-ani-checkbox?embed=1&file=src/App.js",mdxType:"LiveDemoComponent"}),(0,r.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-checkbox--sample"},"guia de referencia de API"),".")),(0,r.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,r.kt)("p",null,"O componente possui propriedades customiz\xe1veis, que possibilitam fazer altera\xe7\xf5es, de acordo com a marca ou o tema a ser utilizado. Com isso, garantimos uma consist\xeancia ao Design System, sem perder a identidade de cada marca."),(0,r.kt)("p",null,"O checkbox possui quatro estados, que se modificam de acordo com a intera\xe7\xe3o do usu\xe1rio, sendo eles: ",(0,r.kt)("em",{parentName:"p"},"Normal"),", ",(0,r.kt)("em",{parentName:"p"},"Hover"),", ",(0,r.kt)("em",{parentName:"p"},"Focused")," e ",(0,r.kt)("em",{parentName:"p"},"Disabled"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-unchecked ")),(0,r.kt)("td",{parentName:"tr",align:null},"cor predominante (background) quando unchecked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-checked")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda e do preenchimento interno (fill) quando checked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda no estado normal"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-hover")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda no estado hover"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-hover")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--shadow-color-hover")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda externa no estado hover"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-brand-01-lighter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-unchecked-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"cor predominante (background) quando unchecked no estado disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-checked-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda e do preenchimento interno (fill) quando checked no estado disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do outline do focus"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-focus")))),(0,r.kt)("img",{src:h,alt:"Os estados de intera\xe7\xe3o do checkbox unchecked, com as respectivas vers\xf5es checked e mixed abaixo"}))))}C.isMDXComponent=!0}}]);