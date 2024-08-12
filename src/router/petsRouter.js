const expres = require("express");
const route = expres();
const petsController = require("../controller/petsController");


// no primeiro parametro passo minhas rotas e no segundo passo meu meotodo
//isso significa na implmentação do metodos o meu getAllController tem acesso ao oque esta vindo na minha request
route.get('/pets', petsController.getAllPets)

route.get('/tutor/:id', petsController.finByIdPets) // nesse metodo que  chamo outro metodo porem não uso () porque ??

route.post('/pet/:tutorId', petsController.createPet)

route.put('/pet/:petId/tutor/:tutorId', petsController.updatePets)

route.delete('/tutor/:id', petsController.deletePets)


module.exports = route;