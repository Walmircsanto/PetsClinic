const pets = require('../models/pets')

class PetsClinic {

    createPets(){
        console.log("Creating Pets");
    }

    getAllPets(){
        console.log("Getting All Pets");
    }

    finByIdPets(id){
        console.log(`pets id ${id}`);
    }

    updatePets(){
        console.log('update pets');
    }

    deletePets(id){
        console.log(`pets id ${id}`);
    }

}
module.exports = new PetsClinic();