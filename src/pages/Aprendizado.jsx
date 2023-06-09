import React,{useRef ,useEffect, useLayoutEffect} from "react";
import '../pages/Aprendizado.css'
import IconiReact from '../componentes/imgs/React.png'
import IconHtml from '../componentes/imgs/html-5.png'
import IconCss from '../componentes/imgs/css-3.png'
import IconJs from '../componentes/imgs/js.png'
import IconGulp from '../componentes/imgs/gulp.jpeg'
import IconBootstrap from '../componentes/imgs/bootstrap.jpeg'
import IconJquery from '../componentes/imgs/jquery.jpeg'
import IconWebPack from '../componentes/imgs/webpack.jpeg'
import IconNpm from '../componentes/imgs/npm.jpeg'
import IconNode from '../componentes/imgs/node.jpeg'
import iconJava from '../componentes/imgs/java.jpeg'
import iconMysql from '../componentes/imgs/mysql.jpeg'
import iconUml from '../componentes/imgs/uml.jpeg'
import imgScrum from '../componentes/imgs/Scrum-Process1.webp'
import imgKambam from '../componentes/imgs/kanbann.png'
import imgClean from '../componentes/imgs/clean.jpeg'
import imgGit from '../componentes/imgs/GitHub.jpeg'
import imgTdd from '../componentes/imgs/TDD_1.jpg'
import iconScharp from '../componentes/imgs/c#.png'
import netcoreIcon from '../componentes/imgs/netcore.png'
import SqlServerIcon from '../componentes/imgs/SqlServer.png'
import entityIcon from '../componentes/imgs/entity.png'
import JenkinsIcon from '../componentes/imgs/jenkins.png'

function Aprendizado(){

      const useref =useRef();
      
useLayoutEffect(()=>{



         const imgReact =document.querySelector('#iconReact')
         const imgHtml =document.querySelector('#iconHtml')
         const imgCss =document.querySelector('#iconCss')
         const imgJs =document.querySelector('#iconJs')
         const imgGulp =document.querySelector('#iconGulp')
         const imgBootstrap = document.querySelector("#iconBootstrap")
         const imgJquery =document.querySelector('#iconJquery')
         const imgWebPack =document.querySelector('#iconWebPack')
         const imgNpm =document.querySelector('#iconNpm')
         const imgNode =document.querySelector('#iconNode')
         const imgJava = document.querySelector('#iconJava')
         const imgMySQL=document.querySelector('#iconMysql')
         const imgUml=document.querySelector('#iconUml')
         const iconScharp = document.querySelector('#iconScharp')
         const iconNetcore = document.querySelector("#iconNetcore")
         const iconsSql = document.querySelector('#sqlIcon')
         const IconGit = document.querySelector('#IconGit')
         const IconEntity = document.querySelector("#IconEntity")
         const IconJenkins = document.querySelector('#jenkinsIcons')





         imgReact.addEventListener('mouseover',function(){


             var conteudoReact =document.getElementById('conteudoReact').innerHTML
             var conteudo =document.getElementById('conteudo')
             conteudo.innerHTML=conteudoReact

             imgReact.addEventListener('mouseout',function(){
               conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
                

             })
})


imgHtml.addEventListener('mouseover',function(){
    var conteudoHtml =document.getElementById('conteudoHtml').innerHTML
 var conteudo =document.getElementById('conteudo')
 conteudo.innerHTML=conteudoHtml
 
 imgHtml.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })



imgCss.addEventListener('mouseover',function(){
    var conteudoCss =document.getElementById('conteudoCss').innerHTML
 var conteudo =document.getElementById('conteudo')
 conteudo.innerHTML=conteudoCss
 
 imgCss.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })

 imgJs.addEventListener('mouseover',function(){
    var conteudoJs =document.getElementById('conteudoJs').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoJs
 
 imgJs.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })


 imgGulp.addEventListener('mouseover',function(){
    var conteudoGulp =document.getElementById('conteudoGulp').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoGulp
 
 imgGulp.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })


 
 imgBootstrap.addEventListener('mouseover',function(){
    var conteudoBootstrap =document.getElementById('conteudoBootstrap').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoBootstrap
 
 imgBootstrap.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })



 imgJquery.addEventListener('mouseover',function(){
    var conteudoJquery =document.getElementById('conteudoJquery').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoJquery
 
 imgJquery.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })


 imgWebPack.addEventListener('mouseover',function(){
    var conteudoWebPack =document.getElementById('conteudoWebpack').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoWebPack
 
 imgWebPack.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })


 
 imgNpm.addEventListener('mouseover',function(){
    var conteudoNpm =document.getElementById('conteudoNpm').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoNpm
 
 imgNpm.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })

 imgNode.addEventListener('mouseover',function(){
    var conteudoNode =document.getElementById('conteudoNode').innerHTML
 var conteudo = document.getElementById('conteudo')
 conteudo.innerHTML=conteudoNode
 
 imgNode.addEventListener('mouseout',function(){
     conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
    })

 })


imgJava .addEventListener('mouseover',function(){
   var conteudoJava =document.getElementById('conteudoJava').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML=conteudoJava

imgJava.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})



imgMySQL.addEventListener('mouseover',function(){
   var conteudoMysql =document.getElementById('conteudoMysql').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML=conteudoMysql

imgMySQL.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})



imgUml.addEventListener('mouseover',function(){
   var conteudoUml =document.getElementById('conteudoUml').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML=conteudoUml

imgUml.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})

iconScharp.addEventListener('mouseover',function(){
   var conteudoScharp =document.getElementById('conteudoScharp').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML=conteudoScharp

iconScharp.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})

iconNetcore.addEventListener('mouseover',function(){
   var conteudoNetCore =document.getElementById('conteudoNetCore').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML= conteudoNetCore

iconNetcore.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})

iconsSql.addEventListener('mouseover',function(){
   var conteudoSql =document.getElementById('conteudoSql').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML= conteudoSql

iconsSql.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})


IconGit.addEventListener('mouseover',function(){
   var conteudoGit =document.getElementById('conteudoGit').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML= conteudoGit

IconGit.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})


IconEntity.addEventListener('mouseover',function(){
   var conteudoEntity =document.getElementById('conteudoEntity').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML= conteudoEntity

IconEntity.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})

IconJenkins.addEventListener('mouseover',function(){
   var conteudoJenkins =document.getElementById('conteudoJenkins').innerHTML
var conteudo = document.getElementById('conteudo')
conteudo.innerHTML= conteudoJenkins

IconJenkins.addEventListener('mouseout',function(){
    conteudo.innerHTML ='Passe o Mouse no Icone Para mais Informações da Tecnologia '
   })

})

})






return(
<div id="aprendizado">

<div id="icons">

     <b>
      <h2>
      <div id="nomeTecnologia">Ferramentas e Linguagens</div>

      </h2>
      </b>





 <img id="iconReact" src={IconiReact} width='60' />
  <div id="conteudoReact" > O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU).
  Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.Eu tive meu Primeiro 
  contato com React em Projetos como Calculadora ,Cadastro de Usuario e até mesmo esse Portifolio ,Com o React me trouce uma facilidade
  e ganho de Produtividade por trabalhar com componentes , interagindo entre eles e até mesmo separando uma aplicação Front-end e BackEnd 
  em um unico projeto ,O React usa ferramentas programadas como : WebPack , Node e JavaScript.  </div>
   
  
  
  
   <img id="iconHtml" src={IconHtml} width='60' />
    <div id="conteudoHtml"> HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e
     estruturar o conteúdo na web.No aprendizado do HTML5 eu tive meu primeiro contato com Projetos Web .Aprendendo estruturar um conteudo 
     e separar-lo ,com tecnologias como o CSS e JavaScript ,O html5 Tem uma Sintaxe que facilita qualquer tipo de conteudo como imagens ,videos 
    e  Formularios .
</div>


   <img id="iconCss" src={IconCss} width='60' />
   <div id="conteudoCss">CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de
    marcação como HTML. O CSS separa o conteúdo da representação visual do site.Meu primeiro Contato com Css foi nos estudos de desenvolvimento 
    Web que envolve: CssGrid, Cores, MediaQuery, Seletores, FlexBox, Overflows, Tamanhos, box e muitos outros estudos de estilização junto ao Html,
    com os estilos estudados foi colocado em pratica em Projetos Reais como esse Portifolio e todos os projetos listados na pagina Projetos.
    
   </div>


 <img id="iconJs" src={IconJs} width='60' />
<div id="conteudoJs">JavaScript é uma linguagem de programação de alto nível, criada, a princípio,
para ser executada em navegadores e manipular comportamentos de páginas “web”.
No aprendizado do JavaScript os Projetos ficaram mais dinamicos como: ampliar uma imagem, frases mudam de cores
em um intervalo de tempo, clicar em um botão e exibir um conteúdo em Html, Manipular formulário, passar o mouse
em uma imagem e exibir um conteúdo, todos esses requisitos
foram adicionados nesse portfólio e executado com o JavaScript. Com uma das principais funcionalidade como a DOM
que manipula os elementos Html, interagir com a pagina fica com mais estilo e qualidade com as informações
a serem apresentadas.
</div>



 <img id="iconGulp" src={IconGulp} width='60' />
    <div id="conteudoGulp"> O Gulp foi criado na metade de 2013 por Eric Schoffstall com o objetivo de simplificar e agilizar o processo,
utilizando streams. Com o gulp os projetos ficaram mais organizados e fácil de ter manutenção deixando o Projeto mais rápido e utilizável.
A informação é transmitida através das tarefas usando o método de pipeline, o que reduz o número de operações I/O.
Com o uso do Gulp em meus projetos foram automatizados tarefas importantes que agilizam na produção deixando-o pronto para a produção
e utilizavel. O gulp é uma maneira fácil da executar em ambientes como Node.js envolvendo o JavaScript.
</div>


    <img id="iconBootstrap" src={IconBootstrap} width='60' />
    <div id="conteudoBootstrap">O Bootstrap framework front-end. e de código-aberto foi inicialmente criado por Mark Otto e Jacob Thornton para o
desenvolvimento, web mais rápido e prático. Ele contém todos os tipos de templates baseados em HTML e CSS para várias funções e
componentes. Exemplo: navegação, sistema de grades, carrosséis de imagens e botões. O aprendizado do Bootstrap me trouce
uma forma diferente de pensar em templates de qualidade e eficiente, ele automatiza muito tempo em templates deixando um estilo
de qualidade e responsivo. Essa automação em estilo nos deixa com mais tempo para planejar um template. Ele permite que a interface do
usuário de um site seja otimizado para qualquer tamanho de tela, desde os dispositivos móveis até as telas mais robustas.</div>



    <img id="iconJquery" src={IconJquery} width='60' />
     <div id="conteudoJquery">O jQuery simplifica o JavaScript, uma das três linguagens fundamentais da web e responsável por
adicionar funcionalidades interativas aos sites web. As páginas na web também são estruturadas com o HTML e estilizadas com o CSS. O jquery
simplifica funcionalidades em JavaScript e uma das vantagens é escrever menos código para uma funcionalidade e ganhando mais tempo
no desenvolvimento.
</div>






    <img id="iconWebPack" src={IconWebPack} width='70' />
    <div id="conteudoWebpack">Webpack representa um empacotador de códigos voltados para projetos da web, focando em módulos de sua aplicação.
Os módulos apresentados pelo programa são estáticos e se voltam para JavaScript moderno. Assim que todas as aplicações são processadas,
será possível gerar um gráfico capaz de mapear cada um dos módulos, bem como suas dependências. Isso faz com que um ou mais pacotes sejam
gerados. O Webpack ajuda muito na automação dos projetos como gerenciamento de pacote e utilizados muito em frammeworks como o React,
assim como o Gulp ele automatiza os pacotes para desenvolvimento e produção.</div>

    
    
    
    
    <img id="iconNpm" src={IconNpm} width='60' />
    <div id="conteudoNpm">Para usar ferramentas e pacotes Node.js, é necessário instalá-los e gerenciá-los. É aqui que entra o NPM.
Ele funciona como gerenciador de pacotes do Node.js. De modo geral, o NPM permite que desenvolvedores instalem, desinstalem e
atualizem dependências em um único comando. O NPM também é um repositório online seguro para a publicação de projetos Node.js de código aberto,
como bibliotecas e aplicativos. </div>

    
    
    
    
    <img id="iconNode" src={IconNode} width='60' />
    <div id="conteudoNode">O Node.js, um software open-source que possibilita que programadores escrevam códigos em Javascript.
     A tecnologia foi introduzida pela primeira vez em 2009 por Ryan Dahl, sendo imediatamente reconhecida como “o software mais 
     empolgante no universo do JavaScript atual”.Ele foi criado para ser um ambiente de servidor para aplicativos.
      Porém, os desenvolvedores começaram a usá-lo para criar ferramentas para ajudá-los na automação de tarefas. 
      Para resumir, esse é o motivo da popularidade do Node.js e do NPM. </div>

  
   
      
    <img id="iconJava" src={iconJava} width='50' />
    <div id="conteudoJava">A linguagem de Programação Java tem uma sintaxe utilizada deriva do C++ porém com um modelo mais simples. 
    Como sua principal característica, todo o código é escrito dentro de uma classe e tudo é um objeto, 
    com exceção dos tipos intrínsecos (números reais e ordinais, valores booleanos e caracteres) 
    que não são classes por questões da funcionalidade exercida.
 O contato com a linguagem foi na Faculdade 
de Engenharia de Software foi criado projetos no ambiente NetBeans ,como cadastro de paciente ,essa linguagem é totalmente orientado a objetos
um paradigma que facilita em aplicações web em BackEnd ,aplicações para mobile , jogos e até mesmo sistemas mais complexos em desktop .</div>



    <img id="iconMysql" src={iconMysql} width='50' />
    <div id="conteudoMysql">O MySQL é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações
gratuitas para gerir suas bases de dados. O MySQL utiliza a linguagem (SQL) (Structure Query Language
Linguagem de Consulta Estruturada), que é a linguagem mais popular para inserir, acessar e gerenciar o conteúdo armazenado num
banco de dados. A tecnologia MySql foi aprendidade na faculdade, trouce uma ampla visão de como funciona os banco de dados, em
aplicações reais desktop ou na web.</div>

    <img id="iconUml" src={iconUml} width='150' />
    <div id="conteudoUml">A Linguagem de modelagem unificada (UML) foi criada para estabelecer uma linguagem de modelagem visual comum,
semanticamente e sintaticamente rica, para arquitetura, design e implementação de sistemas de software complexos,
tanto estruturalmente quanto para comportamentos. Além do desenvolvimento de software, a UML tem aplicações em fluxos do processo na
fabricação. A Uml me trouce uma visão de como funciona uma arquitetura de software em modelos de projetos, com a uml
pode-se organizar componentes de software orientado a objetos, obtendo o projeto do sistema que facilita na sua produção
na área de implementação de software.</div>




  <img id="iconScharp" src={iconScharp} width='50' />
  <div id="conteudoScharp">
  C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .
  NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, 
  como Object Pascal e, principalmente, Java. Para colocar em pratica o paradigma orientado a objetos
  eu decidi aprender Scharp, Essa linguagem me trouce um grande aprendizado no back-end, utilizando 
  C#,.NetCore MVC  e entity Frammework.Foi realizado um projeto Crud Cadastrar ,editar , excluir Usuarios do sistema
  utilizando banco de dados SqlServer.
 </div>


  <img id="iconNetcore" src={netcoreIcon} width='120' />
    <div id="conteudoNetCore">
    ASP.NET Core foi projetado para permitir que componentes de runtime, APIs, 
    compiladores e linguagens evoluam rapidamente, enquanto ainda fornece uma plataforma estável 
    e com suporte para manter os aplicativos em execução.
</div>



  <img id="sqlIcon" src={SqlServerIcon}  />
  <div id="conteudoSql">
  O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional
   desenvolvido pela Sybase em parceria com a Microsoft. O aprendizado do SqlServer
   me trouce uma ampla visão de como os dados são percorridos no servidos até serem 
   gravados ao banco de dados diante uma interface de ususario.
</div>



  <img id="IconGit" src={imgGit}  />
   <div id="conteudoGit">
   GitHub é uma plataforma de hospedagem de código-fonte e arquivos com 
   controle de versão usando o Git. Ele permite que programadores,
    utilitários ou qualquer usuário cadastrado na plataforma contribuam em 
    projetos privados e/ou Open Source de qualquer lugar do mundo.
  </div>



  <img id="IconEntity" src={entityIcon} />
  <div id="conteudoEntity">
  O Entity Framework permite que os desenvolvedores trabalhem com dados na forma de
   objetos e propriedades  específicos do domínio, como clientes e endereços de clientes, 
   sem ter que se preocupar com as tabelas e colunas subjacentes do banco de dados onde
    esses dados são armazenados.
</div>



  <img id="jenkinsIcons" src={JenkinsIcon} />
  <div id="conteudoJenkins">
   Jenkins é um servidor de automação de código aberto. Ele ajuda a automatizar 
  as partes do desenvolvimento de software relacionadas à construção, teste e implantação,
   facilitando a integração e a entrega contínuas. É um sistema baseado em servidor que é 
   executado em contêineres de servlet, como o Apache Tomcat.
 </div>


             <div id='conteudo'> Passe o mouse no Icone para mais Informações da Tecnologia</div>
 <b>


      <h2>
      <div id="nomeIntegracao">Integração Contínua e Boas Praticas de Desenvolvimento</div>
      </h2>


                  
          <div id="ScrumNome"><h2>  Frammework Scrum  </h2> 
           <img src={imgScrum}  />
            <h3 id="descriçaoScrum">
               O frammework Scrum eu tive um aprendizado na Faculdade, A scrum 
               traz agilidade no desenvolvimento de um projeto, trazendo boas 
               praticas que envolve a gestão de projetos, time de desenvolvimento 
               e Stakeholders . 

            </h3>
           </div>




          <h2>
            <div id="kanbanNome"> Metodologia Kanban</div>
             <img id="imgkanban" src={imgKambam}  />
            </h2> 
            <h3 id="descriçaoKanban">
               Pensando em uma forma de controlar as tarefas em um desenvolvimento 
               de software temos a metodologia kanban, uma abordagem agíl que 
               controla o que precisa ser feito , o que esta fazendo e o que foi 
               concluido.Eu tenho realizado esse controle diante dos meus Projetos 
               de desenvolvimento .
            </h3>
   


           <h3>
              <div id="nomecleanCode">Clean Code (Código Limpo)</div>
           </h3>  
            <img  id="imgclean" src={imgClean}  />
              <h3 id="descriçãoClean">
               Durante o meu aprendizado em Front-End , necessitei de boas praticas
               no desenvolvimento ,A cada mudança feita no código eu necessitava 
               de um código legivel , refatorado para construir um software de qualidade
               foi pensando nesse objetivo que eu adqueri mais conhecimentos sobre 
               a qualidade de Software, Eu decidi estudar Clean Code (Código Limpo)
               é uma abordagem de Robert Martin, que nos prepara para um Desenvolvimento
               de software com facil manutenção, agilidade e rapidez no desenvolvimento.
              </h3>


              
               <h3>
               <div id="GitNome">Versionamento de Código com GitHub</div>
               </h3>
               <img id="gitPosition" src={imgGit}  />
               <h3 id="descriçaoGit">
                  Um versionamento de Código Git traz facilidade na Integração Contínua
                  de desenvolvimento, para cada Sprint concluída no desenvolvimento
                  é realizado o teste, caso esteja tudo em ordem com a funcionalidade 
                   é feita a integração com o repositório git Após todos os deploys forem 
                   realizados é desenvolvido a implantação do Sistema.Eu tenho praticado 
                   o uso dessa ferramenta no qual eu armazeno em meu reposiório os projetos
                   e as tecnologias aprendidas na minha carreira como DEV. 
               </h3>


           <h3>
           <div id="TddNome"> Test Driven Development</div>
         </h3>

         <img id="imgTdd" src={imgTdd} />

         <h3 id="descriçaoTdd">
         TDD é uma sigla para Test Driven Development, ou Desenvolvimento Orientado a Testes. 
          A ideia do TDD é que você trabalhe em ciclos. As boas praticas do TDD é trabalhar em cima 
         da qualidade de software escrevendo códigos que sejam testados e refatorados
          de forma contínua.
         </h3>




         
     
      </b>
</div>
</div>
)}

export default Aprendizado