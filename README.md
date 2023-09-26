
# Boas vindas ao projeto Diel Calendar

# Sumário

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação e uso](#instalação-e-uso)

---

#  Apresentação do projeto
O Diel Calendar é uma aplicação web fullstack realizada na etapa do teste técnico no processo seletivo da Diel energia.

---

# Tecnologias:
<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=gray" />
  </a>
  </div>
  <div>
  <a href="https://pt-br.legacy.reactjs.org/">
  <img src="https://img.shields.io/badge/reactjs-339933?style=for-the-badge&logo=react&color=gray" />
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/next-339933?style=for-the-badge&logo=next.js&color=gray" /> 
  </a>
  <a href="https://chakra-ui.com/">
    <img src="https://img.shields.io/badge/chackra-ui-339933?style=for-the-badge&logo=chackra-ui&color=gray" />
  </a>
   <a href="https://axios-http.com/ptbr/docs/intro">
    <img src="https://img.shields.io/badge/axios-339933?style=for-the-badge&logo=axios&color=gray" />
  </a>
   <a href="https://www.npmjs.com/package/yup">
    <img src="https://img.shields.io/badge/yup-339933?style=for-the-badge&logo=yup&color=gray" />
  </a>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/html5-339933?style=for-the-badge&logo=html5&color=gray" />
  </a>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
    <img src="https://img.shields.io/badge/css3-339933?style=for-the-badge&logo=css3&color=gray" />
  </a>
      <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/cypress-339933?style=for-the-badge&logo=cypress&color=gray" />
  </a>
   </div>
  <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
  <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/nest-339933?style=for-the-badge&logo=nestjs&color=gray" /> 
  </a>
  <a href="https://www.prisma.io/">
    <img src="https://img.shields.io/badge/prisma-339933?style=for-the-badge&logo=prisma&color=gray" />
  </a>
    <a href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/mysql-339933?style=for-the-badge&logo=mysql&color=gray" />
  </a>
  <a href="https://swagger.io/">
    <img src=" https://img.shields.io/badge/swagger-339933?style=for-the-badge&logo=swagger&color=gray" />
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-339933?style=for-the-badge&logo=eslint&color=gray" />
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img src=" https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=gray "/>
  </a>
  <a href="https://www.npmjs.com/package/dotenv">
    <img src="https://img.shields.io/badge/dotenv-339933?style=for-the-badge&logo=dotenv&color=gray"/>
  </a>
   <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/prettier-339933?style=for-the-badge&logo=prettier&color=gray" />
    </a>
  </div>
  <div>
   <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/git-339933?style=for-the-badge&logo=git&color=gray" />
  </a>
   <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />
    </a>
    <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/vercel-339933?style=for-the-badge&logo=vercel&color=gray" />
    </a>
</div>

---

# Funcionalidades

**Fluxo de Usuarios**
- Cadastrar um novo usuario

**Fluxo de Login**
- Realizar Login no sistema

**Fluxo de Tarefas**

*Rotas que necessitam login no sistema*

- Cadastrar nova tarefa
- Listar Tarefas relativas ao usuário logado
- Editar tarefas cadastradas
- Excluir tarefas

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git@github.com:TiagoEmanuel8/Diel-Calendar.git
```  
  
Entre na pasta  
  
```  
cd dielCalendar
  
``` 
crie 2 terminais e entre respectivamente nas pastas `backend` e `frontend`
```  
### Execute o projeto  
  em ambos os terminais digite npm install
```  
npm install  
```  


### Substitua as variáveis de ambiente  
  
 em backend:
```  
DATABASE_URL="mysql://'usuario do mysql':'senha do mysql'@localhost:'número da porta'/'nome banco de dados'"

PORT=`número da porta`

JWT_KEY=`uma senha` 
```  
e em frontend:
```  
NEXT_PUBLIC_API_URL='http://localhost:`número definido na variável PORT, que está acima`' 
```  
  
  
### Instale as dependências

### Abra 2 terminais e em cada um dele entre nas pastas  
  
```  
cd backend
  
```  
e
```  
cd frontend
  
```

  Ainda com os 2 terminais abertos execute o comando abaixo em ambos:

```  
npm install  
```

### Crie tabelas e migrations com o comando  
```  
npx prisma migrate deploy
```

### Execute o projeto  
  
em backend use
```  
npm run start:dev  
```  
e em frontend use
``` 
npm run dev  
```
