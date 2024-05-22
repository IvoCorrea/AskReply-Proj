# Ask and Reply proj

Este projeto é uma plataforma onde você pode lançar perguntas ao site e outras pessoas podem responder, e vice-versa. O projeto utiliza Node.js com Express.js no backend, MySQL para o banco de dados, EJS para renderização de templates, e Bootstrap para o design responsivo.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express.js**: Framework web para Node.js.
- **EJS**: Motor de template para gerar HTML com JavaScript.
- **Bootstrap**: Framework CSS para design responsivo e moderno.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.

## Atualizações

- Agora os arquivos Ejs utilizam <%- include() %> para reutilização de codigo HTML.
- A rota POST: /ask/postform; foi criada para adicionar o formulario ao banco de dados.
- ORM Sequelize introduzido, assim como os drivers para o Mysql.