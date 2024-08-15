# Sistema web para barbearia

## Descrição
O projeto foi desenvolvido durante o evento do **Full Stack Week** com o intuito de aprender a utilizar ferramentas e frameworks que vêm sendo amplamente usadas na área de desenvolvimento WEB. 

A aplicação foi colocada em um ambiente de produção, que pode ser acessada na seção **About**.

Além disso, a aplicação permite fazer login com a sua conta do Google, para que seja possível realizar agendamentos no sistema.

Para melhor visualização da plataforma, recomendo colocá-la em **dimensões de tela mobile**. Futuramente, ela estará adaptada para desktop.


## Setup

### Tecnologias e ferramentas usadas

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ShadCN](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Date-FNS](https://img.shields.io/badge/datefns-770C56.svg?style=for-the-badge&logo=date-fns&logoColor=white) 
![Neon DB](https://img.shields.io/badge/-NEON%20DATABASE-2DE9B4?logo=https://neon.tech/favicon/favicon.png&logoColor=white&style=for-the-badge) 
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

### Extensões no vscode
- PostCSS Language Support
- Tailwind CSS IntelliSense
- Material Icon Theme
- Prisma
- Prettier
- Shadcn/ui
- Simple React Snippets
- Auto Import
- Auto Rename Tag

## Instruções de uso

### Pré - requisitos
Para que o projeto funcione em sua máquina, é necessário:
- Ter o Node.js, Next.js, React, NPM, Tailwind CSS, Prisma e PostgreSQL instalados 
- Configurar o Shadcn
- Instalar os componentes do Shadcn da pasta `app\_components\ui`
- Instalar o React Hook Form
- Baixar as extensões listadas no VS Code
- Ter um ambiente de hospedagem do banco de dados PostgreSQL (recomendo o Neon)
- Ter um ambiente de hospedagem fazer o deploy da aplicação (recomendo o Vercel)
- Criar uma página `.env` para colocar as seguintes variáveis de ambiente:
   - **DATABASE_URL**: deve conter a URL de conexão com o seu banco de dados PostgreSQL
   - **GOOGLE_CLIENT_ID**: deve conter o ID do cliente do Google, necessário para fazer a autenticação com o Google
   - **GOOGLE_CLIENT_SECRET**: deve conter o segredo do cliente do Google
   - **NEXT_AUTH_SECRET**: deve conter a chave secreta para o NextAuth.js


### Terminal
Após cumprir os pré-requisitos, siga o passo a passo abaixo:

1. Clone o repositório na sua máquina

```bash
git clone https://github.com/Leti1225/fsw-barbershop.git
```

2. No VS code, abra o terminal e execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

3. Coloque o cursor sobre [http://localhost:3000](http://localhost:3000) e pressione `ctrl + click` para abrir o projeto no seu navegador  (pode demorar uns segundos para que a compilação seja concluida)

## Contribuição
Contribuições para ampliar as funcionalidades da barbearia e/ou melhorar o código são muito bem-vindas! Para isso, basta seguir as [convenções de commits](https://www.conventionalcommits.org/en/v1.0.0/) e solicitar um pull request ou gerar uma issue em uma nova branch.

