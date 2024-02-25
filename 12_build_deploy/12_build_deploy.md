# Depuração / Debug


# 01 .Build de Produção + Suporte ao Internet Explorer
- [Vídeo Aula](https://youtu.be/6fZRJCf33wM)
- O angular é compativel com a maioria dos drivers
- Precisamos fazer o ngbuild, porém ele precisamos mais do que ele para gerar o ngbuild.
- Dentro do angular.json é onde tem as configurações para o build de produção. 
	- Caminho arctfact
- Temos que configurar dentro do package json a tag build para gerar o artefato de produção
	- ng build --prod era antigamente. Hoje é --configuration=production
	- Parametrizações para configuração do build
		- optimization: true
		- outputHasing: all
		- source map: false
		- extractCss: true
		- namedChunks: false
		- aot: true
		- extractLicenses: true
		- vendorChunk: False
		- buildOptimizer
	- Mais detalhes na documentação. 
- npm run --configuration=production

# 02 .Deploy em Produção (Firebase Hosting)

- [Vídeo Aula](https://youtu.be/3DBTJWj9sI8)
- deploy e hospedar em um serviço de hospedagem gratuita.
- Vamos utilizar o FireBase para subir o deploy da nossa aplicação.
- Primeiramente vamos adaptar o nosso host para hospedagem.
- Pela documentação executamos o fireBase no nosso projeto
	- No console do vscode
	- npm install -g firebase-tools
- Utilizamos o comando firebase login para autorizarmos uma conta google.
- Fiz login com um email para poder aprovar as configuraçções
- Voltamos para o google, e criamos um novo projeto
- O nome do projeto tem que ser unico. 
	- Colocamos um nome unico no projeto
- Posterior continuamos com next next e finish.
- Após paramos na pagina do projeto.
- Estamos com o plano gratuito.
- Para iniciar o projeto.
	- firebase initi
- selecionamos a opção: 
	- Hosting: Configure files for firebase Hosting and (Optionally) set up GitHub action deploys
	- use an exsisting project
		- Nome do projeto criado via firebase
	- selecionamos o caminho que vai ser o nosso diretório publico: 
		- dist/requests-http
	- Usamos o single page aplication, do angular: yes
	- colcamos nao em builds and deploy with git hub
	- colcamos nao para substituir o index. html
- As configurações do host gerarm dois arquivos:
	- firebase.json
	- firebaserc
- Após o projeto inicializado, vamos fazer o deploy
- Posterior as configurações realizamos o deploy da aplicação
	- firebase deploy
	- Dentro do diretório .firebase é gerado uma lista de todos os arquivos que foram feitos uploads.
- Acessamos a url que é gerada
- https://curso-angular-loiane-w.web.app

# 03 .Deploy em Produção com ng deploy (Firebase)
- [Vídeo Aula](https://youtu.be/Zp-ibUmlpLI)
- ng deploy Firebase
- conseguimos fazer com dois comandos todas as foncigurações.
	Comandos
	- ng add @angular/fire
	- ng deploy
- Removemos os arquivos relacionados oa firebase
	- .firebaserc
	- firebase.json
- Executamos o comando @angular/fire para instalar o fire base com angular
- Posterior vai solicitar o que devermos realizar de setup
	- 1- ng deploy --hosting;
	- 2 - Escolha a conta do firebase (e-mail);
	- 3 - Selecione o projeto; e
	- 4 - Seleciona o hosting site
- Tem outros provedores ao qual podemos configurar a nossa pagina, como azure e etc:
	- firebase hosting: @angular/fire
	- azure: @azure/ng-deploy
	- Now: @zeit/ng-deploy
	- Netlify: @netlify-builder/deploy
	- GitHub pages: angular-cli-ghpages
- para a base que queremos adicionar, so setamos o ambiente
- Seguimos os passos da documentação

# 04 .Gerando Imagem Docker com Build de Produção
- [Vídeo Aula](https://youtu.be/iPazv9x7g0g)
- Aprender a criar uma imagem docker para rodar em um servidor http
- Primeiramente temos que atualizar wsl2. 
- [Guia WSl](https://github.com/codeedu/wsl2-docker-quickstart)
	- wsl --install
- Setamos o WSL para a versão 2 
	- wsl --set-default-version 2
- Instalei o dowckware para windows:
	- [Docker Windows] (https://docs.docker.com/desktop/install/windows-install/)
	- [Guia Docker] (https://docs.docker.com/guides/get-started/)
- Instalar uma extensão do VSCode
	- Docker
	- Extensão mais utilizada. 
- Clicamos em docker para vermos os as abas expostas pelo mesmo. 
- Posterior vamos ao prompt de comando e executamos a seguinte sequencia de comandos:
	- Docker: add Docker Files to Workspace
	- Node .js
	- Selecionamos o package.json da raiz do nosso projeto
	- Adicionamos 3000 como porta
- Gerou 4 arquivos:
	- .dockerignore
	- docker-compose.debug.yml
	- docker-complse.yml
	- DockerFile
- Vamos focar na receita da nossa imagem
- Vamos primeiramente fazer build de produção em angular
	````docker
		FROM node:lts-alpine as angular
		WORKDIR /app
		COPY package.json /app
		RUN npm install --silent
		COPY . .
		RUN npm run build

		FROM nginx:alpine
		VOLUME /var/cache/nginx
		COPY --from=angular app/dist/requests-http /usr/share/nginx/html
		COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
	````
- Fizemos uns ajustes dentro do nosso arquivo dockerignore
	- Adicionamos alguns arquivos ao processo
	````dockerignore
		**/dist
		**/e2e
		**/server
		**/.firebase
		**/db.json
	````
- Servidor nginx
- DanWahlin angular core nginx.conf
	- [Arquivo conf nginx](https://github.com/DanWahlin/Angular-Core-Concepts/blob/main/config/nginx.conf)
	````conf
			server {
		    listen 0.0.0.0:80;
		    listen [::]:80;
		    default_type application/octet-stream;

		    gzip                    on;
		    gzip_comp_level         6;
		    gzip_vary               on;
		    gzip_min_length         1000;
		    gzip_proxied            any;
		    gzip_types              text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
		    gzip_buffers            16 8k;
		    client_max_body_size    256M;

		    root /usr/share/nginx/html;

		    location / {
		        try_files $uri $uri/ /index.html =404;
		    }
		}
	````
- Com os dois comandos a baixo, conseguimos fazer a imagem e executar a imagem
	````docker
		# docker build -t curso-angular . 
		# docker run -p 8081:80 curso-angular
	````
- Criamos uma imagem padrão do docker-compose.yml
	 ````docker-compose
	 	version: '3.4'

		services:
		  curso-angular:
		    image: curso-angular
		    build: .    
		    ports:
		      - 8081:80

	 ````
- Vamos executar os comandos
	- >Docker: Compose Up
	- escolhemos o arquivo docker-compose.yml
- Pelo terminal conseguimos ver o comando que foi executado sem ser pelo docker
	- docker-compose -f "docker-compose.yml" up -d --build
- Conseguimos acesar via terminal o nosso conteiner
	- Vamos em docker
	- clicamos com botao direito em atatch shell
	- Com isto abre a nossa maquina via shell
- Conseguimos ver os arquivos que nos temos no nosso build de produção com o comando ls

# 05. Imagem Docker: Deploy Google Cloud (Cloud Run)
- [Vídeo Aula](https://youtu.be/9bGyS0Bo8FA)
- Vamos ver como funciona para subir a magem docker que 
- Nesta aula vamos utilizar o google cloud
- Esta aula foi mais vizual em função do processo do google cloud ser pago. 

# 06. Imagem Docker: Deploy Oracle Cloud
- [Vídeo Aula](https://youtu.be/N9nyF5xZOws)
- Imagem docker dentro da Oracle Cloud.
- Esta aula foi mais vizual em função do processo do azure ser pago.  
 

# 07 .Imagem Docker: Deploy Microsoft Azure
- [Vídeo Aula](https://youtu.be/-DaBrO1R5ic)
- Imagem docker dentro da azure.
- Esta aula foi mais vizual em função do processo do azure ser pago. 

# 08 .Imagem Docker: Deploy Amazon AWS
- [Vídeo Aula](https://youtu.be/RXRtD1cGPdk)
- Imagem docker dentro da azure.
- Esta aula foi mais vizual em função do processo do aws ser pago. 

# 09 .Conclusão e próximos passos
- [Vídeo Aula](https://youtu.be/sXXORJ1Y_o0)
- Conclusão do curso do angular
- Sugestão de próximos passos:
	- Testes
	- Gerenciamento de estado (ngRX)
	- Organização de aplicações grande
	- segurança
- Documentação a melhor amiga. 
	- [Angular](https://amgular.io/)
	- [Angular Update](https://update.angular.io/)