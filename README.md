# La-Vie-Saude-Mental

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=La%20Vie%20Saude%20Mental&uri=https%3A%2F%2Fraw.githubusercontent.com%2FVictorF05%2FLa-Vie-Saude-Mental%2Fmain%2Fdocs%2FInsomnia_2022-07-28.json)

Passo a passo para rodar o projeto:

1 - Clonar o projeto;</br> 
2 - Executar no terminal: npm install;</br>
3 - Criar um arquivo na raiz do projeto com o nome ".env", com o seguinte conteúdo (substitua pelas suas informações sem as aspas):</br>
  DB_USER="nome do seu usuario no mysql"</br>
  DB_PWD="senha do seu usuario"</br>
  DB_NAME="nome que voce quer dar para o banco de dados"</br>
  DB_HOST="local onde está rodando o servidor, para servidor local usar localhost"</br>
  DB_PORT="porta utilizada"</br>
  DB_DIALECT="qual é o banco de dados? nosso caso mysql"</br>
  NODE_ENV=development</br>
  
4 - Executar no terminal: npx sequelize-cli db:create;</br>
5 - Executar no terminal: npx sequelize db:migrate;</br>

Se tudo correu bem, o banco de dados foi criado automaticamente.</br>

[TESTES]</br>

1 - Clique no botão "Run In Insomnia" no início do README;</br>
2 - Clique em "Run La Vie Saude Mental" no site que vai se abrir;</br>
3 - O Insomnia será aberto, dê ok na importação e a coleção com as requests serão criadas automaticamente;</br>
4 - No VSCODE, coloque o servidor para rodar com o seguinte comando no terminal: npm run dev;</br>
5 - Basta realizar as requests pelo Insomnia para testar.</br>
