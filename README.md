# Backend API Pix

Este é um servidor Node.js desenvolvido com TypeScript para gerenciar uma API de pagamentos Pix.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/leo-prata/backend-api-pix.git
2. Navegue até o diretório do projeto:
   ```sh
   cd backend-api-pix
3. Instale as dependências:
    ```sh
    npm install

## Rodando o servidor

### Modo de Desenvolvimento
Para rodar o servidor em modo de desenvolvimento, utilize o script dev:
    
  
    npm run dev

### Modo de Produção
Para rodar o servidor em modo de produção, primeiro gere o build do projeto:
    

    npm run build

Depois, inicie o servidor:
    
    npm start

## Variáveis de Ambiente
Para rodar este projeto, você precisará configurar as seguintes variáveis de ambiente no arquivo .env na raiz do projeto:

- ACESS_TOKEN: Token de acesso individual gerado pelo Mercado Pago.
- FIREBASE_TYPE: Tipo de conta do Firebase.
  
- FIREBASE_PROJECT_ID: ID do projeto Firebase.
- FIREBASE_PRIVATE_KEY_ID: ID da chave privada do Firebase.
- FIREBASE_PRIVATE_KEY: Chave privada do Firebase.
- FIREBASE_CLIENT_EMAIL: Email do cliente Firebase.
- FIREBASE_CLIENT_ID: ID do cliente Firebase.
- FIREBASE_AUTH_URI: URI de autenticação do Firebase.
- FIREBASE_TOKEN_URI: URI de token do Firebase.
- FIREBASE_AUTH_PROVIDER_CERT_URL: URL do certificado do provedor de autenticação do Firebase.
- FIREBASE_CLIENT_CERT_URL: URL do certificado do cliente Firebase.
- FIREBASE_UNIVERSE_DOMAIN: Domínio do universo Firebase.

