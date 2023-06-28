# API de Teste de Autenticação de Rotas para Front-end

A API de Teste de Autenticação de Rotas para Front-end é uma ferramenta que permite simular a autenticação de usuários e testar o acesso a rotas protegidas por autenticação em aplicativos front-end.

## Funcionalidades

- Geração de tokens de autenticação, como JSON Web Tokens (JWT).
- Teste de acesso a rotas protegidas.
- Verificação da funcionalidade da autenticação em um aplicativo front-end.

## Como usar

1. Clone o repositório para o seu ambiente local.
2. Execute `yarn` para instalar as dependências necessárias.
3. Execute `yarn run dev` para iniciar o servidor da API.
4. Utilize as rotas disponíveis para gerar tokens de autenticação e testar o acesso a rotas protegidas.

## Exemplos de Requisições

### Registrar um novo usuário

Endpoint: `POST /users`

Envie os seguintes dados no corpo da requisição:

```json
{
  "email": "exemplo@dominio.com",
  "password": "senha123",
  "name": "Nome do Usuário"
}
```

### Gerar um token de autenticação
Endpoint: POST `/auth/login`

```json
{
  "email": "exemplo@dominio.com",
  "password": "senha123"
}
```
### Buscar todos os usuários (rota protegida)
Endpoint: `GET /users`

Authorization: Bearer <seu_token_aqui>

Certifique-se de substituir <seu_token_aqui> pelo token de autenticação gerado na etapa anterior.

### Licença
Este projeto está licenciado sob a MIT License.