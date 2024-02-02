<h1 align="center">
Criando APIs com NodeJs
</h1>

<h2>:computer: Sobre o Projeto:</h2>
<p>A aplicação foi desenvolvida em curso sobre Node.js "Criando APIs com Node" do balta.io.</p>

<h2>Executando o Projeto</h2>
<p>Abrir o terminal no diretório do projeto e digitar: 
  npm i (para instalar as dependencias)
  npm start (para executar)</p>
<p>O projeto abrirá em: http://localhost:3000</p>
<h5>Requisitos</h5>
<p>Será necessário a criação de um arquivo config.js na raiz src/ contendo as seguintes informações:</p>

````
global.SALT_KEY = 'chave aleatória para codificação de chaves (poderá ser criado a partir de uma guid)';
global.EMAIL_TMPL = 'Olá, <strong>{nome}</strong>, seja bem vindo à Store';

module.exports = {
    containerImagePath: 'caminho do container das imagens',
    emailSendgrid : 'email a ser utilizado pelo enviador de emails sendgrid',
    connectionString: 'conexão com mongo db',
    sendgridKey: '',
    containerConnectionString: 'conexão com container em azure storage'
} 
````


<h2>:wrench: Funcionalidades</h2>
<p>4 operações principais: 
<ul>
<li>Criação de pedidos, clientes e produtos</li>
<li>Editar</li>
<li>Deletar</li>
<li>Ler os dados em json</li>
<li>Autenticação utilizando JWT</li>
</ul>
</ul>
</p>

<h2>:calendar: Status do Projeto</h2>
<p>Finalizado</p>

<h2> :computer: Ferramentas Utilizadas</h2>
<ul>
<li>Node.js</li>
<li>Express</li>
<li>MongoDB</li>
<li>Sendgrid</li>
<li>Azure Storage</li>
</ul>
</p>

<h2>:raising_hand: Autor</h2>
<img src="https://avatars0.githubusercontent.com/u/69413795?s=460&u=b2a185aae214f42fa37c9a78d7a22e83571bf82f&v=4" width="100px;" style="border-radius: 50%;" alt="Amanda"/>
<p style="font-weight:bold; color:#FA8072" >Amanda Caroline<p>
<a href="https://www.linkedin.com/in/amandaalmeidaacsa/" alt="Linkedin">Entre em Contato!</a>
<p>Feito com muito :purple_heart: </p>

<h3>:notebook_with_decorative_cover: Conteúdo Programático do Curso</h3>
<ul>
<li>Instalação Node, NPM e VS Code</li>
<li>npm init e instalação dos pacotes</li>
<li>Criando um servidor Web</li>
<li>Normalizando a porta</li>
<li>Gerenciando Erros do Servidor</li>
<li>Iniciando o Debug</li>
<li>Separando o Servidor</li>
<li>Configurando o NPM Start</li>
<li>Nodemon</li>
<li>CRUD REST</li>
<li>Rotas</li>
<li>Controllers</li>
<li>MongoDb Setup</li>
<li>Mongooose</li>
<li>Models</li>
<li>Criando um Produto</li>
<li>Listando os Produtos</li>
<li>Listando um Produto pelo slug</li>
<li>Listando um Produto pelo Id</li>
<li>Listando os Produtos de uma tag</li>
<li>Atualizando um produto</li>
<li>Excluindo um produto</li>
<li>Validações</li>
<li>Repositórios</li>
<li>Async/Await</li>
<li>Revisitando os Models: Customer</li>
<li>Revisitando os Models: Order</li>
<li>Revisitando os Models: OrderItems</li>
<li>Revisitando os Controllers: Customer</li>
<li>Revisitando os Controllers: Order</li>
<li>Arquivo de Configurações</li>
<li>Enviando E-mail de Boas Vindas</li>
<li>Upload da Imagem do Produto</li>
<li>Autenticação</li>
<li>Autorização</li>
<li>Habilitando CORS</li>
<li>Publicando a API</li>
</ul>
