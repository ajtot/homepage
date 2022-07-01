"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[9812],{5348:function(e,a,t){t.d(a,{Z:function(){return n}});var o=t(1721),r=t(7294),n=function(e){function a(){return e.apply(this,arguments)||this}return(0,o.Z)(a,e),a.prototype.render=function(){return r.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px",color:"#333333"}},r.createElement("div",{style:{width:"50%",marginRight:"4%"}},r.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),r.createElement("b",null,"Fazer"),r.createElement("p",null,this.props.doDescription)),r.createElement("div",{style:{width:"50%"}},r.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),r.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),r.createElement("p",null,this.props.dontDescription)))},a}(r.Component)},808:function(e,a,t){t.d(a,{Z:function(){return n}});var o=t(1721),r=t(7294),n=function(e){function a(){for(var a,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=e.call.apply(e,[this].concat(o))||this).state={language:"react"},a}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},r.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),r.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(a){return e.setState({language:a.target.value})}},r.createElement("option",{value:"react"},"React"),this.props.javascript?r.createElement("option",{value:"javascript"},"Javascript"):"")),r.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},a}(r.Component)},6277:function(e,a,t){var o=t(1721),r=t(1262),n=t(7294);n.Component},7690:function(e,a,t){t.r(a),t.d(a,{default:function(){return E},frontMatter:function(){return x},metadata:function(){return V},toc:function(){return T}});var o=t(7462),r=t(3366),n=(t(7294),t(3905)),i=t(1395),d=t(8215),l=t(5348),s=t(808),p=t.p+"assets/images/button-types-ed53c49422652b82bddbbb113bacade8.jpg",m=t.p+"assets/images/button-anatomy-bbb0494ede66a42196cbd83c3ae203c6.jpg",c=t.p+"assets/images/button-size-1-e4bd396b5fef311ca217200d68891d9d.jpg",u=t.p+"assets/images/button-primary-b8847e8af18b35a4dfdff73ddc1db2db.jpg",A=t.p+"assets/images/button-secondary-05a95ed6a927119d973a07bbeb5594d6.jpg",b=t.p+"assets/images/button-tertiary-5bce7559a985591214f52df22803c9ff.jpg",k=t.p+"assets/images/button-primary-danger-66dcc7d8b7a32224e91135758c22ca38.jpg",g=t.p+"assets/images/button-secondary-danger-74f17cf3eace971df9608ff3213740c3.jpg",N=t.p+"assets/images/button-do-1-cf86d8f75dd27dc5a4c1bbff1764ed53.jpg",h=t.p+"assets/images/button-do-2-63b2c075bae9480b306f182ced85a8a2.jpg",v=t.p+"assets/images/button-do-3-d46f568c7e918b3538291e80e6684c08.jpg",f=t.p+"assets/images/button-do-4-02260ee6d639ed4852f2f0708e3e653b.jpg",q=t.p+"assets/images/button-dont-1-6759f9460ad310158687f8d895762f52.jpg",y=t.p+"assets/images/button-dont-2-26ea2783410fc46863eb3d9beef2b247.jpg",C=t.p+"assets/images/button-dont-3-28c7327ee8435f3a683216ce2ad35707.jpg",w=t.p+"assets/images/button-dont-4-20f2655d47ed77d87a5f3fc2986a1aae.jpg",z=(t(6277),["components"]),x={id:"button",sidebar_label:"Button"},V={unversionedId:"components/button",id:"components/button",isDocsHomePage:!1,title:"Button",description:"<Tabs",source:"@site/docs/components/button.mdx",sourceDirName:"components",slug:"/components/button",permalink:"/en/docs/components/button",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/button.mdx",version:"current",sidebar_label:"Button",frontMatter:{id:"button",sidebar_label:"Button"},sidebar:"componenents",next:{title:"Calendar",permalink:"/en/docs/components/calendar"}},T=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Tipos",id:"tipos",children:[]},{value:"Anatomia",id:"anatomia",children:[]},{value:"Tamanhos",id:"tamanhos",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Uso",id:"uso",children:[]},{value:"Label em bot\xf5es",id:"label-em-bot\xf5es",children:[]},{value:"\xcdcones",id:"\xedcones",children:[]},{value:"Cores",id:"cores",children:[]},{value:"Intera\xe7\xe3o",id:"intera\xe7\xe3o",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[{value:"Button",id:"button",children:[]},{value:"Primary",id:"primary",children:[]},{value:"Secondary",id:"secondary",children:[]},{value:"Tertiary",id:"tertiary",children:[]}]}],D={toc:T};function E(e){var a=e.components,t=(0,r.Z)(e,z);return(0,n.kt)("wrapper",(0,o.Z)({},D,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"design",mdxType:"TabItem"},(0,n.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,n.kt)("p",null,"Os bot\xf5es s\xe3o utilizados para realizar a\xe7\xf5es e para tomada de decis\xf5es. Podem ser utilizado em p\xe1ginas e tamb\xe9m dentro de outros componentes."),(0,n.kt)("h3",{id:"tipos"},"Tipos"),(0,n.kt)("p",null,"Cada tipo de bot\xe3o representa uma prioridade na interface e \xe9 recomendado que sejam utilizados de acordo com a import\xe2ncia das a\xe7\xf5es que o usu\xe1rio deve realizar. Outro fator importante, \xe9 manter a consist\xeancia dentro dos produtos para que os usu\xe1rios identifiquem facilmente as a\xe7\xf5es."),(0,n.kt)("img",{src:p,alt:"Os cinco tipos de bot\xf5es dispostos lado a lado, sendo 1 o Primary, 2 o Secondary, 3 o Tertiary, 4 o Primary Button e 5 o Secondary Danger"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Primary"),": Os bot\xf5es prim\xe1rios devem ser usados para a a\xe7\xe3o principal da p\xe1gina e preferencialmente apenas um bot\xe3o deste tipo por p\xe1gina, para direcionar o usu\xe1rio para a a\xe7\xe3o principal de forma clara."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Secondary"),": Devem ser utilizados para a\xe7\xf5es secund\xe1rias na p\xe1gina. Os bot\xf5es secund\xe1rios podem ser utilizado ao lado dos bot\xf5es prim\xe1rios, como segunda a\xe7\xe3o, e tamb\xe9m isolados na p\xe1gina quando n\xe3o forem a a\xe7\xe3o principal e j\xe1 houver um bot\xe3o prim\xe1rio."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Tertiary"),": Os bot\xf5es terci\xe1rios chamam menos aten\xe7\xe3o que os outros bot\xf5es e devem ser utilizados para a\xe7\xf5es menos importantes. Ao inserir o bot\xe3o de forma isolada, utilize preferencialmente acompanhado de um \xedcone que represente a a\xe7\xe3o, para aumentar o entendimento do usu\xe1rio de que h\xe1 uma a\xe7\xe3o a ser realizada. Tamb\xe9m podem ser utilizados como terceira a\xe7\xe3o junto a um bot\xe3o secund\xe1rio e prim\xe1rio."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Primary Danger"),": Utilizar quando a a\xe7\xe3o principal trouxer grande impacto para o usu\xe1rio, como excluir conta ou apagar um grande volume de dados, s\xe3o situa\xe7\xf5es dif\xedceis de reverter e que precisam de mais aten\xe7\xe3o ao executar. Neste bot\xe3o, tamb\xe9m \xe9 recomendado a utiliza\xe7\xe3o de um \xedcone de alerta junto a label, para que os usu\xe1rios consigam diferenciar facilmente do bot\xe3o prim\xe1rio. N\xe3o deve ser inserido mais de um bot\xe3o de perigo por p\xe1gina."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Secondary Danger"),": Quando a segunda a\xe7\xe3o for de grande impacto, como cancelar um processo muito importante, dever\xe1 ser utilizado este bot\xe3o. Assim como no bot\xe3o prim\xe1rio de perigo, \xe9 recomendado o uso do \xedcone de alerta junto a label e somente um bot\xe3o por p\xe1gina.")),(0,n.kt)("h3",{id:"anatomia"},"Anatomia"),(0,n.kt)("p",null,"O bot\xe3o \xe9 composto por um background ou border que recebe uma cor de marca e uma label que descreve a a\xe7\xe3o que ser\xe1 realizada."),(0,n.kt)("img",{src:m,alt:"Anatomia dos cinco tipos de bot\xf5es disposto lado a lado, sendo 1 a label, 2 o background e 3 o border"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Label (r\xf3tulo)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Background"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Border"),(0,n.kt)("p",null,"Os componentes s\xe3o formados por tokens, sendo estes propriedades de estilo que definem como ser\xe1 estruturado e estilizado o bot\xe3o. Os tokens que podem ser alterados pelas marcas, podem ser conferidos na se\xe7\xe3o de ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis"),"."),(0,n.kt)("h3",{id:"tamanhos"},"Tamanhos"),(0,n.kt)("p",null,"Todos os tipos de bot\xf5es podem ser utilizados em dois tamanhos diferentes: Medium e Large. O tamanho medium \xe9 o tamanho padr\xe3o do bot\xe3o e deve ser o mais aplicado. Utilize as outras varia\xe7\xf5es para criar uma hierarquia na p\xe1gina, alinhada aos tipos de bot\xf5es ."),(0,n.kt)("img",{src:c,alt:"Tr\xeas varia\xe7\xf5es de tamanho para o bot\xe3o dispostas lado a lado, sendo 1 o tamanho small, 2 o tamanho medium e 3 o tamanho large"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Medium"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Large"),(0,n.kt)("p",null,"Por padr\xe3o, a largura do bot\xe3o se adequa de acordo com o tamanho do texto. Mas caso seja necess\xe1rio, \xe9 poss\xedvel redefinir a largura para se ajustar ao tamanho do componente no qual o bot\xe3o est\xe1 inserido."),(0,n.kt)("img",{src:"data:image/jpeg;base64,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",alt:"Dois bot\xf5es demonstrando como a largura do bot\xe3o aumenta conforme o a label que \xe9 inserida"}),(0,n.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,n.kt)("p",null,"O componente do bot\xe3o foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG) 2.1. Tamb\xe9m foram estruturadas padr\xf5es de usabilidade para auxiliar na utiliza\xe7\xe3o do componente e garantir uma boa experi\xeancia para os usu\xe1rios. Por isso, \xe9 muito importante que, ao aplicar esse componente, o propriet\xe1rio do conte\xfado leve em considera\xe7\xe3o alguns crit\xe9rios e pr\xe1ticas:"),(0,n.kt)("h3",{id:"uso"},"Uso"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Evite utilizar muitos bot\xf5es em uma \xfanica tela, pois isso aumenta a carga cognitiva do usu\xe1rio e vai aumentar seu tempo de decis\xe3o;"),(0,n.kt)("li",{parentName:"ul"},"Utilize sempre a a\xe7\xe3o principal do lado direito da p\xe1gina, e os demais bot\xf5es \xe0 esquerda, respeitando a hierarquia.")),(0,n.kt)(l.Z,{doImg:N,doAlt:"Tr\xeas bot\xf5es dispostos \xe0 direita, terci\xe1rio, secund\xe1rio e prim\xe1rio, respectivamente",doDescription:"Alinhe os bot\xf5es sempre \xe0 direita da p\xe1gina, sendo primeiro o bot\xe3o prim\xe1rio, depois secund\xe1rio e terci\xe1rio.",dontImg:q,dontAlt:"Tr\xeas bot\xf5es dispostos a esquerda, prim\xe1rio, secund\xe1rio e terci\xe1rio, respectivamente",dontDescription:"N\xe3o insira os bot\xf5es fora da hierarquia e alinhado \xe0 esquerda da p\xe1gina.",mdxType:"BestPracticesComponent"}),(0,n.kt)("h3",{id:"label-em-bot\xf5es"},"Label em bot\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Use labels (r\xf3tulos) diretas, curtas e intuitivas, que direcionem o usu\xe1rio para o que ser\xe1 realizado. Para isso, prefira utilizar verbos, por exemplo: "Salvar" e "Adicionar". Quando necess\xe1ria maior especifica\xe7\xe3o, pode ser utilizado um complemento junto ao verbo, como por exemplo: "Salvar rascunho". (',(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"WCAG 2.4.6: Headings and Labels"),")"),(0,n.kt)("li",{parentName:"ul"},"O nome acess\xedvel do bot\xe3o, que ser\xe1 lido por leitores de tela, deve ser o mesmo nome definido na label do bot\xe3o, para garantir que os usu\xe1rios tenham as mesmas experi\xeancias. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name"},"WCAG 2.5.3: Label in Name"),")")),(0,n.kt)(l.Z,{doImg:h,doAlt:"Bot\xe3o secund\xe1rio com a label Salvar rascunho e bot\xe3o prim\xe1rio com a label Publicar",doDescription:"Utilize labels diretas e quando necess\xe1rio acrescente um complemento.",dontImg:y,dontAlt:"Bot\xe3o prim\xe1rio com a label Publicar a p\xe1gina Animalia",dontDescription:"N\xe3o use uma label com muitas palavras, priorize somente o necess\xe1rio para o entendimento do usu\xe1rio.",mdxType:"BestPracticesComponent"}),(0,n.kt)("h3",{id:"\xedcones"},"\xcdcones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adicione um \xedcone junto a label do bot\xe3o quando precisar descrever melhor a a\xe7\xe3o que o usu\xe1rio ir\xe1 executar. Utilize \xedcones claros que possuem rela\xe7\xe3o direta com a label. O \xedcone \xe0 esquerda representa uma a\xe7\xe3o imediata; e \xe0 direita, representa continuidade."),(0,n.kt)("li",{parentName:"ul"},"Para os bot\xf5es de perigo e bot\xf5es terci\xe1rios, \xe9 recomendado preferencialmente a utiliza\xe7\xe3o do \xedcone acompanhando a label."),(0,n.kt)("li",{parentName:"ul"},"Para a utiliza\xe7\xe3o de \xedcones isolados, use o bot\xe3o terci\xe1rio sem label, para que a acessibilidade do componente seja garantida.")),(0,n.kt)(l.Z,{doImg:v,doAlt:"Bot\xe3o de perigo secund\xe1rio com \xedcone de lixeira a esquerda da label e um bot\xe3o prim\xe1rio com \xedcone de seta a direita da label",doDescription:"Utilize \xedcones que possuem associa\xe7\xe3o clara com a label.",dontImg:C,dontAlt:"Bot\xe3o prim\xe1rio com \xedcone de lixeira embaixo da label",dontDescription:"N\xe3o alinhe o \xedcone em cima ou embaixo da label.",mdxType:"BestPracticesComponent"}),(0,n.kt)("h3",{id:"cores"},"Cores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"N\xe3o use cores para label e background com baixo contraste entre si, pois isso dificulta o entendimento do conte\xfado do bot\xe3o. \xc9 poss\xedvel conferir se o contraste est\xe1 adequado e atingindo o valor de 7:1 em um ",(0,n.kt)("a",{parentName:"li",href:"https://webaim.org/resources/contrastchecker/"},"Contrast Checker"),". (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"},"WCAG 1.4.6: Contrast"),")")),(0,n.kt)(l.Z,{doImg:f,doAlt:"Bot\xe3o prim\xe1rio e secund\xe1rio com cores com contraste de 8.01:1",doDescription:"Contraste alto entre o background e a label. Confira tamb\xe9m o contraste com o fundo.",dontImg:w,dontAlt:"Bot\xe3o prim\xe1rio e secund\xe1rio com cores com contraste de 1.93:1",dontDescription:"Contraste inferior a 7:1 entre o background e a label",mdxType:"BestPracticesComponent"}),(0,n.kt)("h3",{id:"intera\xe7\xe3o"},"Intera\xe7\xe3o"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A intera\xe7\xe3o de foco deve compor os bot\xf5es, sendo navega\xe7\xe3o por mouse ou teclado, e em sequ\xeancia l\xf3gica. Consultar lista de exemplos em (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#button"},"W3C WAI-ARIA 3.5 Button"),")")),(0,n.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,n.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas pelo propriet\xe1rio do conte\xfado. S\xe3o elas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando em foco, o bot\xe3o \xe9 ativado usando as teclas de ",(0,n.kt)("em",{parentName:"li"},"Espa\xe7o")," e ",(0,n.kt)("em",{parentName:"li"},"Enter")," do teclado. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"},"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),")"),(0,n.kt)("li",{parentName:"ul"},"A \xe1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xe3o pode ficar escondido por outros elementos da tela. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"},"WCAG 2.4.12: Focus Appearance"),")"),(0,n.kt)("li",{parentName:"ul"},"O estado de foco deve ser sempre preservado, inclusive quando o bot\xe3o estiver desabilitado. (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"WCAG 2.4.7: Focus Visible"),")"))),(0,n.kt)(d.Z,{value:"dev",mdxType:"TabItem"},(0,n.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,n.kt)("p",null,"Caso voc\xea j\xe1 tenha feito o passo-a-passo descrito em ",(0,n.kt)("a",{parentName:"p",href:"?path=/docs/come%C3%A7ando--page"},"Come\xe7ando"),",\nvoc\xea pode pular esta instala\xe7\xe3o e ir direto para o t\xf3pico ",(0,n.kt)("a",{parentName:"p",href:"#como-utilizar"},"Como utilizar"),"."),(0,n.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-button\n")),(0,n.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("p",null,"Para utilizar este componente na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal.\nEssa importa\xe7\xe3o ir\xe1 variar conforme o tipo de aplica\xe7\xe3o que voc\xea est\xe1 utilizando, por exemplo: angular, react ou\nsomente javascript."),(0,n.kt)("p",null,"Depois de importar o arquivo principal, basta adicionar a tag ",(0,n.kt)("inlineCode",{parentName:"p"},"ani-button")," no seu c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<ani-button>Salvar cadastro</ani-button>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para utilizar com o tema padr\xe3o, \xe9 necess\xe1rio instalar e utilizar os pacotes ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/animalia-brand"),"\ne ",(0,n.kt)("inlineCode",{parentName:"p"},"@animaliads/css-tokens"),". Voc\xea pode ver um exemplo de utiliza\xe7\xe3o no ",(0,n.kt)("a",{parentName:"p",href:"#live-demo"},"Live Demo"),".")),(0,n.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"ani-button[kind='secondary'] {\n  --border-color: purple;\n  --line-height: 100%;\n  --border-radius: 3px;\n}\n")),(0,n.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedveis, consulte ",(0,n.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis do bot\xe3o"),"."),(0,n.kt)("h3",{id:"live-demo"},"Live Demo"),(0,n.kt)(s.Z,{react:"https://stackblitz.com/edit/react-ani-button?embed=1&file=src/App.js",mdxType:"LiveDemoComponent"}),(0,n.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-button--sample"},"guia de refer\xeancia de API"),".")),(0,n.kt)(d.Z,{value:"custom-properties",mdxType:"TabItem"},(0,n.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,n.kt)("p",null,"O componente de bot\xe3o possui propriedades customiz\xe1veis que podem variar de acordo com o tema selecionado. As propriedades customiz\xe1veis podem ser alteradas para cada produto, de acordo com os tokens de marca e tokens globais. Com isso, garantimos uma consist\xeancia no Design System, sem perder a identidade de cada marca.\nO bot\xe3o possui estados e se modifica de acordo com a intera\xe7\xe3o do usu\xe1rio. S\xe3o eles: Default, Hover, Focus e Disabled."),(0,n.kt)("h3",{id:"button"},"Button"),(0,n.kt)("p",null,"Estas s\xe3o propriedades gerais do componente button, independente do tipo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--font-family")),(0,n.kt)("td",{parentName:"tr",align:null},"fam\xedlia tipogr\xe1fica usada na label"),(0,n.kt)("td",{parentName:"tr",align:null},"$font-family-text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--font-size")),(0,n.kt)("td",{parentName:"tr",align:null},"tamanho da fonte na label"),(0,n.kt)("td",{parentName:"tr",align:null},"$font-size-default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--font-weight")),(0,n.kt)("td",{parentName:"tr",align:null},"peso da fonte na label"),(0,n.kt)("td",{parentName:"tr",align:null},"$font-weight-bold")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--line-height")),(0,n.kt)("td",{parentName:"tr",align:null},"altura da linha da label"),(0,n.kt)("td",{parentName:"tr",align:null},"$line-height-none")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,n.kt)("td",{parentName:"tr",align:null},"arredondamento da borda"),(0,n.kt)("td",{parentName:"tr",align:null},"$border-radius-md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,n.kt)("td",{parentName:"tr",align:null},"espessura da borda"),(0,n.kt)("td",{parentName:"tr",align:null},"$border-width-md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--padding")),(0,n.kt)("td",{parentName:"tr",align:null},"espa\xe7o interno entre a label e a borda do background (padding)"),(0,n.kt)("td",{parentName:"tr",align:null},"0, 1em")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do outline do focus"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-focus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color")),(0,n.kt)("td",{parentName:"tr",align:null},"cor principal que ser\xe1 aplicado internamento no bot\xe3o de acordo com o tipo (primary, secondary ou tertiray)"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-disabled")),(0,n.kt)("td",{parentName:"tr",align:null},"cor principal no estado disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-pressed")),(0,n.kt)("td",{parentName:"tr",align:null},"cor principal no estado pressed"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-pressed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-danger")),(0,n.kt)("td",{parentName:"tr",align:null},"cor principal quando o componente estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-dark")))),(0,n.kt)("h3",{id:"primary"},"Primary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da label"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--shadow")),(0,n.kt)("td",{parentName:"tr",align:null},"sombra do background"),(0,n.kt)("td",{parentName:"tr",align:null},"$shadow-none")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background estado hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-action-hover")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color-disabled")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da label no estado disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-dark-70")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--text-color-danger")),(0,n.kt)("td",{parentName:"tr",align:null},"cor da label quando o componente estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-neutral-light-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-danger-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background estado hover quando o componente estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-darker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--color-danger-pressed")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background estado pressed quando o componente estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-darkest")))),(0,n.kt)("img",{src:u,alt:"Os cinco estado de intera\xe7\xe3o do bot\xe3o prim\xe1rio dispostos lado a lado."}),(0,n.kt)("img",{src:k,alt:"Os cinco estado de intera\xe7\xe3o do bot\xe3o de perigo prim\xe1rio dispostos lado a lado."}),(0,n.kt)("h3",{id:"secondary"},"Secondary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-brand-01-lighter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-color-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do border no estado hover"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-brand-01-darkest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-pressed")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado pressed"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-brand-01-light")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--border-color-danger-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do border no estado hover quando estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-darkest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-danger-hover")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado hover quando estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-lighter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--background-danger-pressed")),(0,n.kt)("td",{parentName:"tr",align:null},"cor do background no estado pressed quando estiver danger"),(0,n.kt)("td",{parentName:"tr",align:null},"$color-feedback-negative-light")))),(0,n.kt)("img",{src:A,alt:"Os cinco estado de intera\xe7\xe3o do bot\xe3o secund\xe1rio dispostos lado a lado."}),(0,n.kt)("img",{src:g,alt:"Os cinco estado de intera\xe7\xe3o do bot\xe3o de perigo secund\xe1rio dispostos lado a lado."}),(0,n.kt)("h3",{id:"tertiary"},"Tertiary"),(0,n.kt)("p",null,"O bot\xe3o terci\xe1rio n\xe3o tem propriedades espec\xedficas de customiza\xe7\xe3o, ele ir\xe1 se adaptar conforme\nas propriedades especificadas no bot\xe3o de forma geral."),(0,n.kt)("img",{src:b,alt:"Os cinco estado de intera\xe7\xe3o do bot\xe3o terci\xe1rio dispostos lado a lado."}))))}E.isMDXComponent=!0}}]);