"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1877],{5348:function(e,a,t){t.d(a,{Z:function(){return r}});var o=t(1721),n=t(7294),r=function(e){function a(){return e.apply(this,arguments)||this}return(0,o.Z)(a,e),a.prototype.render=function(){return n.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},n.createElement("div",{style:{width:"50%",marginRight:"4%"}},n.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),n.createElement("b",null,"Fazer"),n.createElement("p",null,this.props.doDescription)),n.createElement("div",{style:{width:"50%"}},n.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),n.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),n.createElement("p",null,this.props.dontDescription)))},a}(n.Component)},808:function(e,a,t){t.d(a,{Z:function(){return r}});var o=t(1721),n=t(7294),r=function(e){function a(){for(var a,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(a=e.call.apply(e,[this].concat(o))||this).state={language:"react"},a}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this;return n.createElement("div",null,n.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},n.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),n.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},n.createElement("option",{value:"react"},"React"),this.props.javascript?n.createElement("option",{value:"javascript"},"Javascript"):"")),n.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(n.Component)},6277:function(e,a,t){var o=t(1721),n=t(1262),r=t(7294);r.Component},3849:function(e,a,t){t.r(a),t.d(a,{default:function(){return x},frontMatter:function(){return w},metadata:function(){return C},toc:function(){return y}});var o=t(7462),n=t(3366),r=(t(7294),t(3905)),i=t(1395),s=t(8215),d=t(5348),l=t(808),c=t.p+"assets/images/switch-anatomy-7440373bb26fc228237858b3e402ea9a.png",p=t.p+"assets/images/switch-do-1-a352601beb7b5b903da882416870b079.jpg",m=t.p+"assets/images/switch-dont-1-cf8cbcc7eca88e279c67b7f45889df29.jpg",u=t.p+"assets/images/switch-do-2-582df7af41f43cb4f1a37032d5e026d1.jpg",k=t.p+"assets/images/switch-dont-2-c9f612e9d4e8bbaaca9b3ec35be55a9d.jpg",h=t.p+"assets/images/switch-do-3-20500af83d48954cfed004e6b346de36.jpg",g=t.p+"assets/images/switch-dont-3-8307ab010f5b49327e963412c1735748.jpg",v=t.p+"assets/images/switch-do-4-9e8e3bf7be53cd5058c9634b83485e96.jpg",b=t.p+"assets/images/switch-dont-4-a2b5f788e7921fceb308367f5e451357.jpg",N=t.p+"assets/images/switch-states-25125e2a70bffc8598df265b3a57eb84.png",f=(t(6277),["components"]),w={id:"switch",sidebar_label:"Switch"},C={unversionedId:"components/switch",id:"components/switch",isDocsHomePage:!1,title:"Switch",description:"<Tabs",source:"@site/docs/components/switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/en/docs/components/switch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/switch.mdx",version:"current",sidebar_label:"Switch",frontMatter:{id:"switch",sidebar_label:"Switch"},sidebar:"componenents",previous:{title:"Select",permalink:"/en/docs/components/select"},next:{title:"Tabs",permalink:"/en/docs/components/tabs"}},y=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Anatomia",id:"anatomia",children:[]},{value:"Comportamento",id:"comportamento",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Uso",id:"uso",children:[]},{value:"R\xf3tulo",id:"r\xf3tulo",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o do pacote",id:"instala\xe7\xe3o-do-pacote",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[]}],q={toc:y};function x(e){var a=e.components,t=(0,n.Z)(e,f);return(0,r.kt)("wrapper",(0,o.Z)({},q,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properies"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O switch \xe9 um tipo de controle para a\xe7\xf5es bin\xe1rias (ligado/ desligado, verdadeiro/ falso), e \xe9 usado para alternar rapidamente entre as duas op\xe7\xf5es."),(0,r.kt)("p",null,"Ele mostra o status atual de seu controlador e aplica a a\xe7\xe3o imediatamente ap\xf3s ser alternado, dando aos usu\xe1rios visibilidade, liberdade e controle sobre suas prefer\xeancias, n\xe3o necessitando de um bot\xe3o para confirmar a a\xe7\xe3o."),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"Estruturalmente, o switch \xe9 composto por ",(0,r.kt)("em",{parentName:"p"},"key e track"),". Tamb\xe9m cont\xe9m partes que s\xe3o espec\xedficas dos estados de intera\xe7\xe3o, como ",(0,r.kt)("em",{parentName:"p"},"icon"),", quando ligado (",(0,r.kt)("em",{parentName:"p"},"checked"),")."),(0,r.kt)("img",{src:c,alt:"Anatomia do switch disposto lado a lado, sendo 1 key, 2 track, 3 icon, 4 border, 5 background e 6 outline"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Track"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Icon (",(0,r.kt)("em",{parentName:"p"},"checked"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Border"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," Background"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," Outline (",(0,r.kt)("em",{parentName:"p"},"focused"),")"),(0,r.kt)("p",null,"O switch \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,r.kt)("h3",{id:"comportamento"},"Comportamento"),(0,r.kt)("p",null,"O componente switch alterna entre as duas varia\xe7\xf5es poss\xedveis: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Checked"),": item marcado, ligado")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unchecked"),": item desmarcado, desligado"))),(0,r.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,r.kt)("p",null,"O componente foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG 2.1). Tamb\xe9m foi estruturado com base em padr\xf5es de usabilidade para contribuir com uma boa experi\xeancia. Por isso, ao aplicar esse componente, \xe9 muito importante que sejam levados em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,r.kt)("h3",{id:"uso"},"Uso"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use o ",(0,r.kt)("em",{parentName:"li"},"switch")," em cen\xe1rios cujo resultado da a\xe7\xe3o aconte\xe7a imediatamente ap\xf3s a altern\xe2ncia da chave, como ajustar configura\xe7\xf5es e prefer\xeancias corriqueiras do sistema;",(0,r.kt)(d.Z,{doImg:p,doAlt:"Componente switch com um r\xf3tulo '\u201c'Biometria'",doDescription:"A a\xe7\xe3o resultante da mudan\xe7a de chave deve ter um resultado imediato para quem usa o sistema, que no exemplo seria ativar a biometria assim que a chave fosse ligada.",dontImg:m,dontAlt:"Componente switch com um r\xf3tulo '\u201c'Concordo com os termos de uso'",dontDescription:"N\xe3o use switch apenas para marcar sim ou n\xe3o, sem efeito no sistema. No exemplo, ao ligar a chave, nada aconteceria. O correto seria o uso de um checkbox nesse caso.",mdxType:"BestPracticesComponent"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ao alternar a chave entre ",(0,r.kt)("em",{parentName:"li"},"checked")," e ",(0,r.kt)("em",{parentName:"li"},"unchecked"),", o resultado da altern\xe2ncia deve ter efeito imediato. N\xe3o use o switch em situa\xe7\xf5es em que \xe9 necess\xe1rio algum tipo de confirma\xe7\xe3o para aplicar o estado selecionado;")),(0,r.kt)(d.Z,{doImg:u,doAlt:"Exemplo de configura\xe7\xe3o de  como receber atualiza\xe7\xf5es contendo duas op\xe7\xf5es em checkboxes. Abaixo da lista h\xe1 um bot\xe3o para salvar prefer\xeancias",doDescription:"Opte por usar um checkbox ou radio ao inv\xe9s do switch em situa\xe7\xf5es que necessitem de alguma confirma\xe7\xe3o para que a mudan\xe7a seja aplicada.",dontImg:k,dontAlt:"Mesmo exemplo de configura\xe7\xe3o das atualiza\xe7\xf5es e o bot\xe3o para salvar, mas usando switches nas op\xe7\xf5es'",dontDescription:"N\xe3o use switch quando o resultado da mudan\xe7a da chave n\xe3o puder ter efeito imediato.",mdxType:"BestPracticesComponent"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Em um conjunto de itens, use switches apenas quando cada item puder ser controlado de forma individual e independente;")),(0,r.kt)(d.Z,{doImg:h,doAlt:"Configura\xe7\xe3o de acesso a um projeto com 3 op\xe7\xf5es em radio: Todos, Membros da equipe e Somente voc\xea",doDescription:"Quando as op\xe7\xf5es forem dependentes entre si, opte por usar radio button ao inv\xe9s do switch",dontImg:g,dontAlt:"Mesmo exemplo de configura\xe7\xe3o das atualiza\xe7\xf5es e o bot\xe3o para salvar, mas usando switches nas op\xe7\xf5es'",dontDescription:"N\xe3o use switch quando os itens tiverem qualquer depend\xeancia entre eles. Cada chave deve funcionar de forma individual, sem rela\xe7\xe3o com outros controles.",mdxType:"BestPracticesComponent"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use switch apenas quando for preciso alternar entre dois estados. Quando houver mais de duas op\xe7\xf5es, ou elas foram dependentes entre si, utilize outro componente, como o ",(0,r.kt)("a",{parentName:"li",href:"/docs/components/checkbox"},(0,r.kt)("strong",{parentName:"a"},"checkbox"))," ou ",(0,r.kt)("a",{parentName:"li",href:"/docs/components/radio"},(0,r.kt)("strong",{parentName:"a"},"radio")),";"),(0,r.kt)("li",{parentName:"ul"},"Utilize o componente no estado desabilitado (",(0,r.kt)("em",{parentName:"li"},"disabled"),") quando for preciso demonstrar que naquela circunst\xe2ncia n\xe3o est\xe1 dispon\xedvel, mas que existe a op\xe7\xe3o de altern\xe2ncia daquela chave.")),(0,r.kt)("h3",{id:"r\xf3tulo"},"R\xf3tulo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use textos curtos e objetivos para evidenciar a op\xe7\xe3o que a chave controla, bem como o estado em que est\xe1;"),(0,r.kt)("li",{parentName:"ul"},"Descreva o que o controle far\xe1 quando estiver ligado, evitando textos neutros ou amb\xedguos. Para verificar se est\xe1 fazendo sentido, leia o r\xf3tulo acrescentando \u201cligado / desligado\u201d ao final. Caso n\xe3o fa\xe7a sentido, reescreva;"),(0,r.kt)("li",{parentName:"ul"},"D\xea prefer\xeancia por posicionar o r\xf3tulo ao lado direito do componente no desktop e mantenha o padr\xe3o sempre que poss\xedvel. O posicionamento \xe0 esquerda \xe9 mais indicado para contextos predominantemente mobile;"),(0,r.kt)("li",{parentName:"ul"},"Evite incluir no r\xf3tulo termos como ativo/ inativo, on/off, pois fica redundante com o componente;"),(0,r.kt)("li",{parentName:"ul"},"Quando o switch estiver acompanhado de um r\xf3tulo, \xe9 recomendado que a \xe1rea clic\xe1vel envolva esse elemento tamb\xe9m.")),(0,r.kt)(d.Z,{doImg:v,doAlt:"Componente switch com um r\xf3tulo 'Bluetooth'",doDescription:"Use textos curtos e objetivos, pois ajudam no entendimento de qual fun\xe7\xe3o aquela chave controla.",dontImg:b,dontAlt:"Componente switch com um r\xf3tulo 'Deseja ativar o bluetooth agora?'",dontDescription:"Evite usar textos longos e redundantes.",mdxType:"BestPracticesComponent"}),(0,r.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,r.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas. S\xe3o elas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O ",(0,r.kt)("inlineCode",{parentName:"li"},"switch")," foi desenvolvido com uso de controles padr\xf5es HTML, o que permite a identifica\xe7\xe3o do mesmo na interface por tecnologias assistivas. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"),(0,r.kt)("li",{parentName:"ul"},"O componente prev\xea intera\xe7\xe3o por teclado, fazendo a altern\xe2ncia entre a chave atrav\xe9s da tecla ",(0,r.kt)("em",{parentName:"li"},"space ("),(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"WCAG 2.4.1 - Keyboard"),")"),(0,r.kt)("li",{parentName:"ul"},"O foco \xe9 vis\xedvel e possui uma espessura superior a 2 pixels CSS, n\xe3o ficando escondido por outros elementos da tela. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"},"WCAG 2.4.12: Focus Appearance"),")"),(0,r.kt)("li",{parentName:"ul"},"A diferencia\xe7\xe3o entre os estados ligado e desligado \xe9 feita atrav\xe9s das cores, mudan\xe7a de posi\xe7\xe3o da chave, e tamb\xe9m com o uso de um \xedcone. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"},"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),")"))),(0,r.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,r.kt)("h3",{id:"instala\xe7\xe3o-do-pacote"},"Instala\xe7\xe3o do pacote"),(0,r.kt)("p",null,"Caso voc\xea j\xe1 tenha feito o passo-a-passo descrito em ",(0,r.kt)("a",{parentName:"p",href:"?path=/docs/come%C3%A7ando--page"},"Come\xe7ando"),",\nvoc\xea pode pular esta instala\xe7\xe3o e ir direto para o t\xf3pico ",(0,r.kt)("a",{parentName:"p",href:"#como-utilizar"},"Como utilizar"),"."),(0,r.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-switch\n")),(0,r.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,r.kt)("p",null,"Para utilizar este componente na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal.\nEssa importa\xe7\xe3o ir\xe1 variar conforme o tipo de aplica\xe7\xe3o que voc\xea est\xe1 utilizando, por exemplo: angular, react ou\nsomente javascript."),(0,r.kt)("p",null,"Depois de importar o arquivo principal, basta adicionar a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"ani-switch")," no seu c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ani-switch>exemplo de label</ani-switch>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para utilizar com o tema padr\xe3o, \xe9 necess\xe1rio instalar e utilizar os pacotes ",(0,r.kt)("inlineCode",{parentName:"p"},"@animaliads/animalia-brand"),"\ne ",(0,r.kt)("inlineCode",{parentName:"p"},"@animaliads/css-tokens"),". Voc\xea pode ver um exemplo de utiliza\xe7\xe3o no ",(0,r.kt)("a",{parentName:"p",href:"#live-demo"},"Live Demo"),".")),(0,r.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ani-switch {\n  --color-unchecked: green;\n  --color-checked: coral;\n}\n")),(0,r.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedveis, consulte ",(0,r.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,r.kt)("h3",{id:"live-demo"},"Live Demo"),(0,r.kt)(l.Z,{react:"https://stackblitz.com/edit/react-ani-switch?embed=1&file=src/App.js",mdxType:"LiveDemoComponent"}),(0,r.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-switch--sample"},"guia de referencia de API"),".")),(0,r.kt)(s.Z,{value:"custom-properies",mdxType:"TabItem"},(0,r.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,r.kt)("p",null,"O componente de switch possui propriedades customiz\xe1veis, que possibilitam fazer altera\xe7\xf5es, de acordo com a marca ou o tema a ser utilizado. Com isso, garantimos uma consist\xeancia ao Design System, sem perder a identidade de cada marca."),(0,r.kt)("p",null,"Possui quatro estados, que se modificam de acordo com a intera\xe7\xe3o do usu\xe1rio, sendo eles: ",(0,r.kt)("em",{parentName:"p"},"Normal"),", ",(0,r.kt)("em",{parentName:"p"},"Hover"),", ",(0,r.kt)("em",{parentName:"p"},"Focused")," e ",(0,r.kt)("em",{parentName:"p"},"Disabled"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-unchecked")),(0,r.kt)("td",{parentName:"tr",align:null},"cor predominante do background do key quando unchecked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda do key"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--track-unchecked")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do background do track quando unchecked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-checked")),(0,r.kt)("td",{parentName:"tr",align:null},"cor predominante do background do key quando checked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--track-checked")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do background do track quando checked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-brand-01-light")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-unchecked-hover")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do background do key no estado hover"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-brand-01-lightest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-checked-hover")),(0,r.kt)("td",{parentName:"tr",align:null},"cor da borda do key no estado hover"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-hover")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do outline no estado focus"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-focus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-unchecked-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do background do key no estado disabled quando unchecked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color-checked-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"cor do background do key no estado disabled quando checked"),(0,r.kt)("td",{parentName:"tr",align:null},"$color-action-disabled")))),(0,r.kt)("img",{src:N,alt:"Os cinco estados de intera\xe7\xe3o do link dispostos lado a lado"}))))}x.isMDXComponent=!0}}]);