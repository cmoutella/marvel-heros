## Welcome

Esse projeto está sendo desenvolvido com objetivos de estudo e comunidade.
O projeto está sendo desenvolvido como trabalho de mentoria com desenvolvedores iniciantes que tenham interesse de aprender sobre as seguintes tecnologias:

- Next.js
- React.js
- TypeScript
- Tailwind
- Rest API
- Testes unitários (jest + testing libraty)
- Server side


É necessário conhecimento prévio em:

- CSS
- HTML


Recomenda-se conhecer os conceitos de:

- DOM
- Git

Proposta de design a seguir:
[Figma do Projeto](https://www.figma.com/file/UbvLpErAu2FSpeyirfUjC1/MARVEL-HEROS?type=design&node-id=0%3A1&mode=design&t=fPsu8gETIkZRynxX-1)


## Para enviar seu código
- Vá na [aba de ISSUES](https://github.com/cmoutella/marvel-heros/issues) e escolha a que irá trabalhar;
- Faça o FORK do repositório;
- Abra uma nova branch com e utilize a issue como nome  `issue_[NUMERO_DA_ISSUE]/[TITULO_DA_ISSUE]`
- Desenvolva a solução
- [Abra um PR](https://github.com/cmoutella/marvel-heros/blob/main/PRPATTERN.md) para o repositório original, apontando para a branch MAIN.

## Padrão de commit
`feat(component): description`

Entenda mais sobre padrões de commit:
- [PT - Medium](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
- [EN - dev.to](https://dev.to/helderberto/patterns-for-writing-better-git-commit-messages-4ba0)

## API
Para realizar as chamadas server-side à [MarvelAPI](https://developer.marvel.com/) estamos utilizando o [Deno](https://deno.com/deploy).
Os endpoints disponíveis estão no repositório [marvel-middleware](https://github.com/cmoutella/marvel-middleware).


## Como rodar o projeto

- Clone o seu fork
- Abra o repositório localmente e instale as dependências com `yarn install`.
- Rode o projeto com `yarn dev`
- Acesse [http://localhost:3000](http://localhost:3000) para acessar o projeto.


## Documentação das técnologias usadas

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind](https://tailwindcss.com/)



____________________
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
