"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1452],{5348:function(e,a,t){t.d(a,{Z:function(){return n}});var o=t(1721),r=t(7294),n=function(e){function a(){return e.apply(this,arguments)||this}return(0,o.Z)(a,e),a.prototype.render=function(){return r.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},r.createElement("div",{style:{width:"50%",marginRight:"4%"}},r.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),r.createElement("b",null,"Fazer"),r.createElement("p",null,this.props.doDescription)),r.createElement("div",{style:{width:"50%"}},r.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),r.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),r.createElement("p",null,this.props.dontDescription)))},a}(r.Component)},808:function(e,a,t){t.d(a,{Z:function(){return n}});var o=t(1721),r=t(7294),n=function(e){function a(){for(var a,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=e.call.apply(e,[this].concat(o))||this).state={language:"react"},a}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},r.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),r.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},r.createElement("option",{value:"react"},"React"),this.props.javascript?r.createElement("option",{value:"javascript"},"Javascript"):"")),r.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(r.Component)},6277:function(e,a,t){var o=t(1721),r=t(1262),n=t(7294);n.Component},6505:function(e,a,t){t.r(a),t.d(a,{default:function(){return C},frontMatter:function(){return v},metadata:function(){return N},toc:function(){return h}});var o=t(7462),r=t(3366),n=(t(7294),t(3905)),i=t(1395),d=t(8215),l=t(5348),s=t(808),p=(t(6277),t.p+"assets/images/card-anatomy-1-c795a56c6db5b39923e74303301658c2.jpg"),m=t.p+"assets/images/card-types-b5d6e6fcb84eb9ac7bab2bd490a1c6d8.jpg",c=(t.p,t.p+"assets/images/card-do-1-ff3a327babc95b31d408d250322e5610.jpg"),u=t.p+"assets/images/card-do-2-0a09733b1eed8bee4b3d8d7d68ec4cf6.jpg",k=t.p+"assets/images/card-dont-1-f617ac4bb48487d61aeb54d7f84d3756.jpg",g=t.p+"assets/images/card-dont-2-1af5e38d3e20a3e5389f77a588bf46e4.jpg",b=["components"],v={id:"card",sidebar_label:"Card"},N={unversionedId:"components/card",id:"components/card",isDocsHomePage:!1,title:"Card",description:"<Tabs",source:"@site/docs/components/card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/animalia-doc/docs/components/card",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/card.mdx",version:"current",sidebar_label:"Card",frontMatter:{id:"card",sidebar_label:"Card"},sidebar:"componenents",previous:{title:"Button",permalink:"/animalia-doc/docs/components/button"},next:{title:"Checkbox",permalink:"/animalia-doc/docs/components/checkbox"}},h=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]},{value:"Anatomia",id:"anatomia",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Uso",id:"uso",children:[]},{value:"A\xe7\xf5es em cards",id:"a\xe7\xf5es-em-cards",children:[]},{value:"Conjunto de cards",id:"conjunto-de-cards",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o do pacote",id:"instala\xe7\xe3o-do-pacote",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[{value:"Selectable",id:"selectable",children:[]}]}],f={toc:h};function C(e){var a=e.components,t=(0,r.Z)(e,b);return(0,n.kt)("wrapper",(0,o.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"design",mdxType:"TabItem"},(0,n.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,n.kt)("p",null,"O card \xe9 um recipiente (",(0,n.kt)("em",{parentName:"p"},"container"),") flex\xedvel que tem como objetivo agrupar informa\xe7\xf5es e a\xe7\xf5es sobre um mesmo assunto."),(0,n.kt)("p",null,"Pode ter diversos tipos de conte\xfado, como t\xedtulo, textos, bot\xf5es, imagem, entre outros."),(0,n.kt)("h3",{id:"tipos"},"Tipos"),(0,n.kt)("p",null,"O componente prev\xea duas varia\xe7\xf5es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Read-only"),"\nQuando o card \xe9 apenas um \u201cagrupador\u201d das informa\xe7\xf5es. Pode conter elementos interativos dentro dele, como por exemplo um link ou bot\xe3o, mas n\xe3o h\xe1 nenhum tipo de intera\xe7\xe3o no card propriamente dito."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interactive"),"\nQuando o card em si \xe9 o elemento interativo, podendo assumir as caracter\xedsticas de:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Link: direciona a pessoa para outra p\xe1gina;"),(0,n.kt)("li",{parentName:"ul"},"Selectable: o card pode ser selecionado, em um conjunto de cards, por exemplo")))),(0,n.kt)("img",{src:m,alt:"Tipos de cards lado a lado: read only, interactive e interactive selected"}),(0,n.kt)("h3",{id:"anatomia"},"Anatomia"),(0,n.kt)("p",null,"O card \xe9 composto basicamente por ",(0,n.kt)("em",{parentName:"p"},"border")," e ",(0,n.kt)("em",{parentName:"p"},"background"),". Por\xe9m, sua varia\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"interactive"))," possui tamb\xe9m ",(0,n.kt)("em",{parentName:"p"},"shadow")," e ",(0,n.kt)("em",{parentName:"p"},"outline"),"."),(0,n.kt)("img",{src:p,alt:"Anatomia dos dois tipos de cards, com 1 border e 2 background em ambos. Apenas no card interativo, 3 shadow e 4 outline\n"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Border"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Background"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Shadow"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4.")," Outline (",(0,n.kt)("em",{parentName:"p"},"focused"),")"),(0,n.kt)("p",null,"O card \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,n.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,n.kt)("p",null,"O componente foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG 2.1). Tamb\xe9m foi estruturado com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. "),(0,n.kt)("p",null,"Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,n.kt)("h3",{id:"uso"},"Uso"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mantenha a simplicidade e objetividade nos cards, evitando sobrecarreg\xe1-los com informa\xe7\xf5es. Eles geralmente s\xe3o uma pequena amostra do conte\xfado ao qual est\xe3o relacionados. Podem conter conte\xfados como imagem de um produto, t\xedtulo, descri\xe7\xe3o, link, bot\xf5es, dentre outros;"),(0,n.kt)("li",{parentName:"ul"},'Forne\xe7a contexto sobre o que acontecer\xe1 ao interagir com o card e qual o seu destino. Evite usar express\xf5es gen\xe9ricas como "Clique aqui".')),(0,n.kt)("h3",{id:"a\xe7\xf5es-em-cards"},"A\xe7\xf5es em cards"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando a \xfanica a\xe7\xe3o poss\xedvel for abrir ou visualizar mais detalhes do card, n\xe3o inclua um bot\xe3o para isso. A a\xe7\xe3o deve acontecer ao clicar em qualquer parte do card. Para esses casos, utilize o card do tipo ",(0,n.kt)("em",{parentName:"li"},"interactive;"))),(0,n.kt)(l.Z,{doImg:c,doAlt:"Exemplo de card com ele inteiro pintado, sinalizando que todo ele \xe9 um elemento interativo",doDescription:"Ao manter todo o card como clic\xe1vel, diminu\xedmos a carga de informa\xe7\xe3o, pois muitas vezes o card \xe9 usado em conjunto com v\xe1rios outros com a mesma estrutura.",dontImg:k,dontAlt:"Exemplo de card com um bot\xe3o com o r\xf3tulo Visualizar\u201d",dontDescription:"N\xe3o inclua bot\xe3o quando a \xfanica a\xe7\xe3o do card for abri-lo.",mdxType:"BestPracticesComponent"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inclua um bot\xe3o no card apenas quando a a\xe7\xe3o for diferente de apenas visualizar o conte\xfado ao qual o card est\xe1 relacionado. Para esses casos, opte por usar o card do tipo ",(0,n.kt)("em",{parentName:"li"},"read-only"),";"),(0,n.kt)("li",{parentName:"ul"},"Quando houver duas ou mais a\xe7\xf5es poss\xedveis no cart\xe3o, mesmo que uma delas seja abrir o card, opte por disponibilizar as a\xe7\xf5es em bot\xf5es.")),(0,n.kt)(l.Z,{doImg:u,doAlt:"Card com dois bot\xf5es, sinalizados como as \xfanicas partes interativas daquele conte\xfado",doDescription:"Usar card do tipo *read-only* em contextos com a\xe7\xf5es ajuda a evidenciar as intera\xe7\xf5es dos elementos internos do card.",dontImg:g,dontAlt:"Card com 2 bot\xf5es e toda a base do card sinalizados como partes interativas daquele conte\xfado",dontDescription:"O uso de intera\xe7\xe3o na base do card e em elementos internos pode gerar confus\xe3o e diminui a previsibilidade sobre qual a\xe7\xe3o acontece ao clicar no card.",mdxType:"BestPracticesComponent"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando tiver diferentes elementos interativos dentro do card, mantenha uma sequ\xeancia l\xf3gica para navega\xe7\xe3o de um elemento para outro.")),(0,n.kt)("h3",{id:"conjunto-de-cards"},"Conjunto de cards"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ao utilizar cards em conjunto, mantenha as larguras padronizadas de um card para o outro;"),(0,n.kt)("li",{parentName:"ul"},"Organize-os de forma simples, pois a apresenta\xe7\xe3o dos cards tem impacto no modo em como s\xe3o compreendidos. Geralmente, o primeiro item fica posicionado no canto superior esquerdo e os demais seguem na sequ\xeancia, da esquerda para a direita, e de cima para baixo.")),(0,n.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,n.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas. S\xe3o elas:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Card (Read-only e interactive)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Utiliza medidas relativas, para se adequar \xe0s prefer\xeancias e necessidades de quem for utilizar o sistema.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Card interative")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desenvolvido com uso de controles padr\xf5es HTML, o que permite a identifica\xe7\xe3o na interface por tecnologias assistivas. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"),(0,n.kt)("li",{parentName:"ul"},"O foco \xe9 vis\xedvel e possui uma espessura superior a 2 pixels CSS, n\xe3o ficando escondido por outros elementos da tela. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"},"WCAG 2.4.12: Focus Appearance"),")"),(0,n.kt)("li",{parentName:"ul"},"Quando selecion\xe1vel, prev\xea intera\xe7\xe3o por teclado, podendo ser selecionado atrav\xe9s da tecla ",(0,n.kt)("em",{parentName:"li"},"space ("),(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"WCAG 2.4.1 - Keyboard"),")"))),(0,n.kt)(d.Z,{value:"dev",mdxType:"TabItem"},(0,n.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,n.kt)("h3",{id:"instala\xe7\xe3o-do-pacote"},"Instala\xe7\xe3o do pacote"),(0,n.kt)("p",null,"Caso voc\xea j\xe1 tenha feito o passo-a-passo descrito em ",(0,n.kt)("a",{parentName:"p",href:"?path=/docs/come%C3%A7ando--page"},"Come\xe7ando"),",\nvoc\xea pode pular esta instala\xe7\xe3o e ir direto para o t\xf3pico ",(0,n.kt)("a",{parentName:"p",href:"#como-utilizar"},"Como utilizar"),"."),(0,n.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-card\n")),(0,n.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("p",null,"Para utilizar este componente na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal.\nEssa importa\xe7\xe3o ir\xe1 variar conforme o tipo de aplica\xe7\xe3o que voc\xea est\xe1 utilizando, por exemplo: angular, react ou\nsomente javascript."),(0,n.kt)("p",null,"Depois de importar o arquivo principal, basta adicionar a tag ",(0,n.kt)("inlineCode",{parentName:"p"},"ani-card")," no seu c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<ani-card>exemplo de label</ani-card>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para utilizar com o tema padr\xe3o, \xe9 necess\xe1rio instalar e utilizar os pacotes ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/animalia-brand"),"\ne ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/css-tokens"),". Voc\xea pode ver um exemplo de utiliza\xe7\xe3o no ",(0,n.kt)("a",{parentName:"p",href:"#live-demo"},"Live Demo"),".")),(0,n.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"ani-card {\n  --background: blue;\n  --border-color: purple;\n}\n")),(0,n.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedveis, consulte ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,n.kt)("h3",{id:"live-demo"},"Live Demo"),(0,n.kt)(s.Z,{react:"https://stackblitz.com/edit/react-ani-card?embed=1&file=src/App.js",mdxType:"LiveDemoComponent"}),(0,n.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-card--sample"},"guia de referencia de API"),".")),(0,n.kt)(d.Z,{value:"custom-properties",mdxType:"TabItem"},(0,n.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,n.kt)("p",null,"O componente possui propriedades customiz\xe1veis, que possibilitam fazer altera\xe7\xf5es, de acordo com a marca ou o tema a ser utilizado. Com isso, garantimos uma consist\xeancia ao Design System, sem perder a identidade de cada marca."),(0,n.kt)("p",null,"O card possui estados e se modifica de acordo com o tipo do card. Os seus estados s\xe3o: ",(0,n.kt)("em",{parentName:"p"},"Normal"),", ",(0,n.kt)("em",{parentName:"p"},"Hover"),", ",(0,n.kt)("em",{parentName:"p"},"Focused")," e ",(0,n.kt)("em",{parentName:"p"},"Selected"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-radius ")),(0,n.kt)("td",{parentName:"tr",align:null},"arredondamento da borda"),(0,n.kt)("td",{parentName:"tr",align:null},"$border-radius-md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background")),(0,n.kt)("td",{parentName:"tr",align:null},"cor de fundo do card"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da borda"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,n.kt)("td",{parentName:"tr",align:null},"espessura da borda"),(0,n.kt)("td",{parentName:"tr",align:null},"$border-width-sm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--padding")),(0,n.kt)("td",{parentName:"tr",align:null},"espa\xe7o interno entre a texto e a borda do card"),(0,n.kt)("td",{parentName:"tr",align:null},"1em (16px)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--shadow\t")),(0,n.kt)("td",{parentName:"tr",align:null},"sombra do background"),(0,n.kt)("td",{parentName:"tr",align:null},"$shadow-md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-color-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da borda do hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-hover")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--shadow-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"sombra do background do hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$shadow-lg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-focused")),(0,n.kt)("td",{parentName:"tr",align:null},"cor principal no estado focus"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do outline do focus"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-focus")))),(0,n.kt)("h3",{id:"selectable"},"Selectable"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-selected")),(0,n.kt)("td",{parentName:"tr",align:null},"cor de fundo quando estiver selecionado"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-brand-01-lightest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-color-selected")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da borda quando estiver selecionado"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-default")))))))}C.isMDXComponent=!0}}]);