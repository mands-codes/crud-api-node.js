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
<p>
global.SALT_KEY = 'chave aleatória para codificação de chaves (poderá ser criado a partir de uma guid)';
global.EMAIL_TMPL = 'Olá, <strong>{nome}</strong>, seja bem vindo à Store';

module.exports = {
    containerImagePath: 'caminho do container das imagens',
    emailSendgrid : 'email a ser utilizado pelo enviador de emails sendgrid',
    connectionString: 'conexão com mongo db',
    sendgridKey: '',
    containerConnectionString: 'conexão com container em azure storage'
} 
</p>

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

<p>Ferramentas Utilizadas
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

<h3>Conteúdo Programático do Curso</h3>
Instalação Node, NPM e VS Code
npm init e instalação dos pacotes
Criando um servidor Web
Normalizando a porta
Gerenciando Erros do Servidor
Iniciando o Debug
Separando o Servidor
Configurando o NPM Start
Nodemon
CRUD REST
Rotas
Controllers
MongoDb Setup
Mongooose
Models
Criando um Produto
Listando os Produtos
Listando um Produto pelo slug
Listando um Produto pelo Id
Listando os Produtos de uma tag
Atualizando um produto
Excluindo um produto
Validações
Repositórios
Async/Await
Revisitando os Models: Customer
Revisitando os Models: Order
Revisitando os Models: OrderItems
Revisitando os Controllers: Customer
Revisitando os Controllers: Order
Arquivo de Configurações
Enviando E-mail de Boas Vindas
Upload da Imagem do Produto
Autenticação
Autorização
Habilitando CORS
Publicando a API
