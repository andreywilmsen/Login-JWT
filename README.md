💬 Informações Gerais
- API REST de Login, Registro, Edição e validação de permissões.
- Desenvolvida com Node.JS, Express.JS, JsonWebToken com conexão ao banco de dados NoSQL MongoDB. 

📋 Funções da API
- A API de login JWT foi desenvolvida com o foco de disponibilizar as funções de login de uma aplicação, também viabilizando rotas de edição de cadastro.
- Essa ferramenta possui sistema de criptografia BCrypt, ou seja, as senhas cadastradas por meio desta API serão enviadas de modo criptografado para o banco de dados, assegurando uma camada a mais de segurança.
- Também, foi configurado o sistema JWT (JsonWebToken), gerando assim um token ao efetuar o login, onde poderá a qualquer requisição feita, verificar se o usuário tem permissão de acessar o conteúdo solicitado.
- Por último, é verificado através do hapi/joi se os dados enviados (registro de usuário) batem com as regras criadas, como número minimo e máximo de caracteres. 


🔧 Preparando o ambiente
- Nesse sistema deverá ser instalado os seguintes pacotes para o seu funcionamento.
- Express: npm i express
- Bcrypt: npm i bcrypt
- JWT: npm i jsonwebtoken
- Mongoose: npm i mongoose
- Hapi/Joi: npm i @hapi/joi

🧑‍💻 Desenvolvedor
- Desenvolvido por Andrey Wilmsen de Paula (Desenvolvedor Full Stack)

  



