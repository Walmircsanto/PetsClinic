const express = require("express");
const route = express();
const tutorController = require("../controller/tutorController");


// no primeiro parametro passo minhas rotas e no segundo passo meu meotodo
//isso significa na implmentação do metodos o meu getAllController tem acesso ao oque esta vindo na minha request
route.get('/tutors', tutorController.getAllTutor)

route.get('/tutor/:id', tutorController.getById)

route.post('/tutor', tutorController.createTutor)

route.put('/tutor/:id', tutorController.updateTutor)

route.delete('/tutor/:id', (req, res)=>{})


module.exports = route;