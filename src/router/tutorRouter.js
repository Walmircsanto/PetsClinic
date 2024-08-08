const express = require("express");
const route = express();
const tutorController = require("../controller/tutorController");


route.get('/tutors', tutorController.getAllTutor)

route.post('/tutor', tutorController.createTutor)

route.put('/tutor/:id', (req, res)=>{})

route.delete('/tutor/:id', (req, res)=>{})


module.exports = route;