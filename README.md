# Teste Frontend

Este projeto é uma aplicação frontend desenvolvida para teste técnico e avaliação de habilidades em desenvolvimento frontend com Next.js e consumo de APIs.

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [Autor](#autor)

## Descrição

Este projeto consiste em um sistema de autenticação de usuários, onde é possível realizar cadastro, login e autenticação utilizando uma API externa. Ele foi desenvolvido como parte de um teste técnico para avaliação de habilidades em frontend com Next.js.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para desenvolvimento de aplicações web.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para estilização.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática.
- [ESLint](https://eslint.org/) - Ferramenta para análise de código estático.

## Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seixasluan/teste-frontend.git
   cd teste-frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuração de variáveis de ambiente:**

   ```bash
   NEXT_PUBLIC_API_BASE_URL=https://api-staging.seuseventos.com.br/v1/
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- Cadastro de usuários com validação de dados;
- Autenticação de usuários via API externa;
- Login seguro com persistência de sessão;
- Interface responsiva e estilizada com Tailwind CSS

## Autor

Desenvolvido por [Luan Seixas](https://github.com/seixasluan). Entre em contato!
