<h2 align="center">
    🚀 Events
</h2>

<p align="center">
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-informações">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>
</p>

As instruções para rodar a aplicação está no final do readme

## :rocket: Tecnologias

Esse projeto fou desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
  - [useCallback, useState, useContext](https://pt-br.reactjs.org/docs/hooks-reference.html)
- [TypeScript](https://typescriptlang.org)
- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

Extras:

- Main Libs
    - [React-navigation](https://reactnavigation.org/)
    - [Yup](https://www.npmjs.com/package/yup)
    - [Unform](https://unform.dev/)
    - [Axios](https://www.npmjs.com/package/axios)
    - [Styled-components](https://styled-components.com/)

## 🤔 Informações

Olá, tudo bom, bem, esse projeto foi criado para praticar conceitos aprendidos em aulas e assim dominar cada vez mais as tecnologias usadas, a melhor sensação é ver que depois de muitas aulas você consegue desenvolver uma aplicação backend e mobile totalmente do zero usando o postgres para armazenar os dados.

## observações sobre o back-end
A aplicação backend possui algumas rotas,
- post,
 a primeira delas é a rota para criar um novo evento e armazená-lo no banco de dados, essa rota espera receber no corpo da requisição algumas informações como name, data, category e description e depois de salvar essa informações no banco um resumo geral contendo as informações é retornado para o usuário.

- get, 
 A outra rota é a get, onde a aplicação acessa o banco e retorna um array com todos os dados que estão armazenados no banco.

Outra verificação que é feita, é para checar o nome do evento, caso o nome do evento seja igual ou nome de outro evento já armazenado no banco a criação desse novo evento não vai ser executada.

## observações sobre Front-end
Na aplicação mobile existem duas telas, umas para criar os eventos, e outra para ver todos os eventos criados
- Criar eventos, 
 Nessa tela são solicitados alguns dados para o usuário, como o nome do evento, todos os dados nessa tela são obrigatorios no backend, e para validar isso no frontend essa aplicação usa o Yup para informar que todos os campos são obrigatórios e caso o usuário esqueça algum deles, a aplicação vai retornar um erro.

- Ver os eventos
 Nessa tela a aplicação usa o useEffect para realizar a vericação e armazenar em um array todos os dados enviados pelo backend, logo em seguida utilizamos o .map para renderizar todas as informações em tela.

## 🖼 Layout

<img src="https://user-images.githubusercontent.com/51330232/98551121-b781f000-227b-11eb-9a88-9c9f726dd117.png"/>

### :muscle: Quem deu aquela força para não desistir?

O turma da Rocketseat lá do discord deram aquela mão quando as coisas ficaram ruins e me salvaram, sem me deixar desistir!

README feito com ❤️ by **Meus amigos e MarquisAlexander**

## Rodar aplicação

Back-end

Para rodar a api, você precisa entrar na pasta backend e rodar `npm install` ou `yarn install` ou o seu gerenciador de pacotes preferido.

Logo após certifiquese de ter um banco postgres, vá até o arquivo [ormconfig.json]() e altere as informações para que assim a api seja capaz de se conectar com o banco.

Logo em seguida, rode o `yarn typeorm migration:run` é isso no backend

Front-end
d
Assim como o backend, primeiro você entra na pasta mobile e roda um `npm install` ou `yarn install` ou o seu gerenciador de pacotes preferido.

Depois basta rodar um `npx react-native run-android` e logo em seguida um `npx react-native start`

Lembrando, para que a aplição seja capas de se conectar com a api você precisa alterar o arquivo api.ts que fica em mobile/src/services, altere a `baseURL: 'http://ip_da_maquina:3333'` colocando o ip local da sua máquina no lugar descrito ["ip_da_maquina"]().