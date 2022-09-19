# <p align = "center"> Projeto Repoprovas </p>

<p align="center">
   <img src="https://static.wixstatic.com/media/670003_78a3e33024d14ffe83128d8476548615~mv2.png/v1/fit/w_256%2Ch_256%2Cal_c/file.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Audrey_Costa-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Audrey-Costa/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Projeto Desenvolvido como experiência da aplicação dos conhecimentos adquiridos das blibiotecas de teste, Jest e SuperTest, aprendidos durantes as aulas da Driven Education. Projeto de número 20 Repoprovas trata-se de uma API Back-End que se comunica com um banco de dados contendo o registro de diversas provas antigas cadastradas pelos seus usuários para livre consulta. Para poder ter acesso as informações das provas é necessário criar um cadastro e logar na plataforma criada pelo front-end(Aplicação fictícia). 

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Postgres with Prisma

***

## :rocket: Rotas

```yml
POST /register
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"
}
```
    
```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
POST /test (autenticada)
    - Rota para registrar uma nova prova
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "name": "loremipsum",
    "pdfUrl": "https://www.loremipsum.lor/em/loremipsum/loremipsumloremipsum",
    "category": "loremipsum",
    "discipline": "loremipsum",
    "teacher": "loremipsum"
    }
```

```yml
GET /test/discipline (autenticada)
    - Rota para listar as provas separadas por disciplina, com as disciplinas por sua vez, agrupadas por período.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /test/teacher (autenticada)
    - Rota para visualizar todas as provas enviadas ao sistema agrupadas pelo instrutor e pelo tipo de prova .
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Node](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/Audrey-Costa/projeto20-repoprovas.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/projeto-frontend.git) que contem a interface da aplicação, para testar o projeto por completo.
