# angular-intro-curso
Repositório para o curso de Angular: Loiane Training.
[Angular - Loiane Trainging](https://loiane.training/curso/angular)

# Angular

## 01. Introdução

A introdução ao Angular oferece uma visão abrangente das principais características e recursos desse framework de desenvolvimento front-end. O conteúdo aborda conceitos fundamentais, como componentes, templates, data binding, diretivas e serviços, fornecendo uma base sólida para a construção de aplicações web robustas e interativas.

Além disso, destaca a importância da documentação oficial, a parceria entre Google e Microsoft, e a modularização da aplicação usando os módulos do Angular, contribuindo para uma melhor organização e escalabilidade do projeto.

## 02. Data Bindig

- Property Binding e Interpolação
O Data Binding explora técnicas vitais no desenvolvimento Angular. Começa com Property Binding e Interpolação. Interpolação {{}} e binding de propriedade [prop]="value" permitem vincular propriedades e métodos do componente ao template.

- Proprety Binding
O documento explora como aplicar Classes e Estilos dinamicamente com base em condições usando Class e Style Binding. Também destaca como escutar e responder a eventos do usuário usando Event Binding, como cliques e entradas de teclado.

- Two-way Data Binding
Outro conceito importante é o Two-way Data Binding, usando o ngModel para atualizar tanto o template quanto o componente simultaneamente. O Life-cycle de um componente, desde a inicialização até a destruição, é detalhado.

- Input Properties e Output Properties
Input Properties e Output Properties permitem comunicação entre componentes. O acesso ao DOM e ao template é demonstrado usando ViewChild para interagir diretamente com elementos HTML.

## 03. Angular CLI

O Angular CLI é uma ferramenta poderosa para desenvolver e gerenciar projetos Angular de forma eficiente. Ao instalar o Angular CLI, você obtém acesso a uma série de comandos úteis para criar e gerenciar projetos, como ng new para criar um novo projeto e ng serve para iniciar um servidor de desenvolvimento. Além disso, o CLI simplifica a criação de componentes, serviços, pipes e muito mais, usando comandos como ng generate.

Os recursos do Angular CLI vão além da estruturação do projeto, incluindo suporte para pré-processadores CSS como SASS, LESS e Stylus, facilitando a personalização da aparência da sua aplicação. Além disso, o CLI oferece funcionalidades para linting, teste e geração de builds de produção, garantindo um fluxo de trabalho suave do desenvolvimento ao deployment. Com a documentação abrangente do Angular CLI, você pode aproveitar ao máximo essa ferramenta, garantindo uma experiência de desenvolvimento Angular mais produtiva e eficiente.

## 04 Diretivas

As diretivas são poderosos recursos no Angular que permitem fornecer instruções dinâmicas para os templates. Elas podem ser estruturais, modificando a estrutura do DOM, ou de atributos, interagindo com elementos específicos. Um exemplo é a diretiva *ngIf, que condicionalmente renderiza elementos com base em uma expressão booleana, oferecendo controle sobre a exibição de conteúdo com base em condições.


Além disso, as diretivas personalizadas podem ser criadas para estender o comportamento do Angular. Por exemplo, a criação de diretivas de atributo permite a manipulação de elementos DOM diretamente. Já as diretivas estruturais personalizadas, como *ngElse, possibilitam controlar a renderização de elementos com base em condições específicas, aumentando a flexibilidade e a capacidade de interação dos componentes Angular com os templates.

## 05 Servicos

O curso aborda o uso de serviços no Angular, começando com uma introdução sobre sua utilidade para centralizar a lógica de negócios e evitar repetições de código. Os serviços são destacados como classes responsáveis por interagir com servidores, gerenciar dados e facilitar a migração de tecnologia. Exemplos práticos demonstram como criar e utilizar serviços, bem como a importância da injeção de dependência para tornar a criação de instâncias automática e eficiente.

Além disso, são discutidos conceitos como escopo de instâncias de serviços e módulos, destacando a diferença entre singleton e várias instâncias. A comunicação entre componentes usando serviços é explorada, incluindo a criação de eventos personalizados para broadcasting. Por fim, é abordado o processo de injetar um serviço em outro serviço, ilustrando como isso pode ser feito e como os serviços podem interagir entre si para melhorar a modularidade e a reutilização de código no Angular.

## 06 Pipes

Pipes no Angular exploram o uso de pipes embutidos e a criação de pipes personalizados para transformar e formatar dados em aplicativos Angular. No primeiro conjunto de vídeos, são abordados conceitos básicos, como o uso de pipes embutidos para formatação de texto, números, datas e moedas. Além disso, é demonstrado como criar pipes customizados para aplicar transformações específicas aos dados exibidos nos templates.

No curso são discutidos tópicos avançados, como a internacionalização de pipes para diferentes idiomas e a criação de pipes puros e impuros. Os pipes puros mantêm a imutabilidade dos dados, enquanto os pipes impuros permitem atualizações em tempo real nos dados exibidos. Por fim, é explorado o uso de pipes assíncronos para exibir valores que são atualizados após um certo período de tempo, útil para operações que envolvem requisições assíncronas ou atualizações periódicas de dados.


## 07 Rotas

O módulo sobre gerenciamento de rotas em aplicações Angular inicia com uma introdução ao conceito de roteamento em Single Page Applications (SPAs), destacando a forma como o Angular gerencia a leitura de rotas e a navegação entre componentes. O curso explica como configurar rotas simples, estabelecendo links de navegação no template através do RouterLink, e também aborda a estilização de rotas ativas, além da definição e extração de parâmetros de roteamento, tanto na URL quanto via query params.

Em seguida, o conteúdo se aprofunda na criação de módulos de funcionalidade e de rotas específicas para esses módulos, visando a melhor organização do projeto. O arquivo de rotas principal é refatorado para conter apenas as rotas principais, transferindo as rotas específicas de funcionalidades para seus respectivos módulos de rotas. Essa abordagem modular visa a escalabilidade do projeto, mantendo a estrutura organizada e fácil de manter.

Outro aspecto explorado é a implementação de rotas filhas, que visa aprimorar a funcionalidade de rotas. O conceito é exemplificado com a criação de um novo módulo, AlunosModule, e a definição de componentes e rotas específicas para esse módulo. Isso permite evitar a repetição de código, melhorando a organização e apontando todos os componentes dentro da rota pai "alunos".

No contexto de performance, o curso apresenta o conceito de Lazy Loading para carregar módulos e rotas sob demanda, destacando os benefícios dessa abordagem, como ganhos de desempenho e segurança. Além disso, são fornecidos passos simples para implementar o Lazy Loading em uma aplicação Angular. O módulo conclui com a abordagem de diferentes estratégias para proteger e controlar o acesso às rotas, incluindo o uso de guardas de rotas como CanActivate, CanActivateChild, CanDeactivate, Resolve e CanLoad, juntamente com práticas recomendadas para configurar rotas padrão e tratamento de rotas não encontradas, garantindo uma experiência consistente para o usuário.

## 08 Formulários Template Drvien

O conteúdo oferece uma visão detalhada da criação e gestão de formulários no Angular, focando em duas abordagens principais: Template Driven e Data Driven. Inicialmente, são destacadas as diferenças entre essas abordagens, ressaltando que os formulários Template Driven são configurados principalmente no HTML, enquanto os formulários Data Driven são configurados no componente.

O tutorial abrange a criação de um projeto inicial com Bootstrap 3, demonstrando a instalação e configuração do Bootstrap e do ngx-bootstrap, além da criação de componentes para ambos os tipos de formulários, juntamente com suas rotas.

No contexto dos formulários Template Driven, são explorados diversos tópicos, desde a associação de campos do formulário aos valores do Angular até a aplicação de validações nos campos e estilização das validações com CSS. Também é fornecida uma dica sobre como verificar os dados do formulário no template usando JSON e criar um componente de debug para facilitar a visualização das informações durante o desenvolvimento.

Nos vídeos subsequentes, continuamos a explorar os formulários template-driven em Angular, abordando a adição de campos de endereço ao formulário, simplificação do código HTML e CSS para melhor manutenção, agrupamento de campos do formulário em objetos usando form groups, e implementação da funcionalidade de pesquisa automática de endereço por CEP. Introduzimos conceitos como setValue e patchValue para preencher formulários, e discutimos como enviar os dados do formulário via HTTP POST para um servidor de teste. Esses vídeos fornecem uma base sólida para entender e implementar formulários eficientes em projetos Angular.

## 09 Formulários Reativos Driven


O modulo fornece um tutorial detalhado sobre a criação e manipulação de formulários reativos no Angular, destacando sua superioridade em termos de limpeza e manutenção em relação aos formulários orientados a template. Eles abordam desde a introdução do conceito até a configuração dos formulários reativos, incluindo a criação de módulos e componentes, uso de FormGroup e ReactiveFormsModule, submissão e reset do formulário, aplicação de validações nos campos e preenchimento automático de endereço com base no CEP.

Um dos pontos centrais é a exploração de diversas técnicas para aprimorar a dinamicidade e a funcionalidade dos formulários, como a criação de serviços para buscar estados brasileiros e consultar CEPs, além da manipulação de seleções em combobox e checkboxes. Essas técnicas são acompanhadas de exemplos práticos e demonstrações de código para facilitar a compreensão e aplicação por parte dos desenvolvedores.

Outro destaque é a abordagem de validações personalizadas, como a validação de checkboxes para garantir que pelo menos um seja selecionado, a validação de campos de CEP com expressões regulares e a validação de campos de email para garantir que sejam iguais. Isso mostra como os formulários reativos podem ser flexíveis e adaptáveis às necessidades específicas de cada projeto.

A criação de uma classe base para formulários é apresentada como uma solução para reutilizar métodos de validação e manipulação de estados em diferentes formulários, promovendo a organização e a consistência do código. Além disso, o uso de um combo box aninhado para seleção de estado e cidade demonstra como os formulários reativos podem oferecer uma experiência mais fluida e intuitiva para o usuário, com atualizações dinâmicas dos campos conforme as seleções são feitas.

## 10 HTTP


O curso abordou diversos aspectos do uso do protocolo HTTP no desenvolvimento de aplicativos Angular. Começando com uma introdução ao HttpClient, explorou funcionalidades como GET, POST, PUT e DELETE, junto com boas práticas para o uso do RxJS. Um novo projeto foi criado, incluindo a instalação e configuração do Bootstrap 4 para o layout da aplicação.

Em seguida, foi explicado como simular um servidor REST usando o json-server, útil para testes durante o desenvolvimento. A aplicação interagiu com um servidor fictício para demonstração, incluindo métodos para lidar com erros HTTP e exibição de mensagens de erro de forma elegante, utilizando modais do Bootstrap.

O tutorial também apresentou o conceito de desinscrição automática, discutindo a importância de cancelar inscrições em observables para evitar vazamentos de memória. Foram demonstradas várias maneiras de lidar com desinscrições automaticamente, especialmente ao usar RxJS, além de dicas sobre como configurar variáveis de ambiente para diferentes ambientes.

Um serviço genérico de alerta utilizando Bootstrap 4 no Angular foi implementado, oferecendo métodos para exibir alertas de erro e sucesso. Além disso, foi criado um componente para exibir os alertas e um formulário para criar e editar cursos, incluindo validação de entrada de dados.

Após a criação do formulário, o foco se voltou para a funcionalidade de edição dos cursos, com a implementação de rotas e um resolver de rota para garantir o carregamento dos dados do curso antes da edição. Também foi desenvolvido um mecanismo de exclusão de cursos, utilizando a ngx-bootstrap/modal.

Por fim, foi criado um componente reutilizável de popup de confirmação, integrado com o serviço de alertas para exibir popups de confirmação em diferentes partes da aplicação. O módulo também tratou de várias funcionalidades relacionadas a upload de arquivos, CORS e criação de operadores RxJS personalizados para simplificar o código.

## 11 Depuração e Debug

O curso aborda duas formas de depuração em aplicações Angular. Primeiramente, é explorado o uso do Augury, uma ferramenta que infelizmente parece não estar mais funcionando, mas que oferecia recursos como visualização das rotas e outras funcionalidades úteis, além de permitir breakpoints no navegador. Em seguida, é apresentada a depuração utilizando o Visual Studio Code, onde são destacadas as etapas para configurar e utilizar a extensão Debugger for Chrome, embora agora seja recomendado o uso do JavaScript Debugger. São demonstradas técnicas de depuração, como adicionar breakpoints, manipular variáveis e depurar em tempo real, proporcionando uma experiência semelhante à depuração em Java.

## 12 Build e Deploy


O curso aborda diversos aspectos relacionados ao build e deploy de aplicações Angular. Inicialmente, são discutidos processos para realizar o build de produção, com destaque para a configuração no arquivo angular.json e o uso de comandos como ng build --configuration=production. Além disso, são apresentadas orientações detalhadas para o deploy em serviços de hospedagem, como Firebase Hosting, com demonstrações passo a passo do processo de configuração e implementação.

Posteriormente, são abordados tópicos como a geração de imagens Docker para rodar em servidores HTTP, com instruções para a criação de arquivos de configuração, construção da imagem e execução do container. Também são oferecidos insights sobre o deploy em plataformas como Google Cloud, Oracle Cloud, Microsoft Azure e Amazon AWS. O conteúdo finaliza com sugestões de próximos passos, como testes, gerenciamento de estado com ngRX, organização de aplicações grandes e segurança, enfatizando a importância da documentação oficial do Angular como recurso fundamental para o desenvolvimento.