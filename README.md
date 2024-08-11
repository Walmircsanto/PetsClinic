# Pets Clinic 😽
## Descrição
Esta e uma API de gerenciamento de pets em uma clinica, foi utilizado as tecnologias JavaScript,nodeJs, express, sequelize e Mysql para desenvolver essa aplicação.
Esta API permite a criação de um tutor, e também a criação de varios pets ligado ao seus donos.

## 🛠️ Ferramentos Utilizadas  
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/JavaScript.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NodeJS-Dark.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/ExpressJS-Dark.svg" width="50px">
 <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sequelize-Dark.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/MySQL-Light.svg" width="50px"> 

## Como executa o projeto
### Pré-requisitos
- Node: 20.12.2
- express: 4.19.2
- sequelize: 6.37.3
- mysql2: 3.11.0
- body-parser: 1.20.2
### Passo a Passo para Execução
#### 1. Clone o repositorio
```bash
git clone https://github.com/Walmircsanto/PetsClinic.git
cd PetsClinic
```
### 2. Baixar as dependencias do packager.json
```Node
  npm install
```
### 3. Configure o banco de dados
Crie um banco de dados no MySQL e ajuste as configurações de conexão na classe ``` conection.js ```
```javascript
const sequelize = new Sequelize(
    'nome_do_BD',
    'seu_usuario',
    'sua_senha',
    {
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }

});
```
### 4. Compile e Execute a aplicação
Na construção desse projeto foi utilizado a IDE WebStorm, mas você pode utiliza a IDE da sua preferencia

### 5. Acesse a API 
Utilizamos o Postman como nosso client, mas você pode utilizar outros da sua preferencia.
Acesse a aplicação pela porta ```http://localhost:3000/ ```

## 🌐 Endpoints disponiveis da API
- Tutor
  - ``` GET /tutors``` : Lista todos os Tutores
  

