# La-Vie-Saude-Mental

Passo a passo para rodar o projeto na máquina de vocês:

1 - Clonar o projeto em sua máquina;
2 - Executar no terminal: npm install;
3 - Criar um arquivo na raiz do projeto com o nome ".env", com o seguinte conteúdo (substitua pelas suas informações sem as aspas):
  DB_USER="nome do seu usuario no mysql"
  DB_PWD="senha do seu usuario"
  DB_NAME="nome que voce quer dar para o banco de dados"
  DB_HOST="local onde está rodando o servidor, para servidor local usar localhost"
  DB_PORT="porta utilizada"
  DB_DIALECT="qual é o banco de dados? nosso caso mysql"
  NODE_ENV=development
  
4 - Executar no terminal: npx sequelize-cli db:create
5 - Executar no terminal: npx sequelize db:migrate

Se tudo correu bem, o banco de dados foi criado automaticamente no seu MySQL já com a tabela de pacientes.

Segui esse tutorial para utilizar as migrations: https://www.luiztools.com.br/post/tutorial-de-migrations-com-nodejs-e-sequelize/
