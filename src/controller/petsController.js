const pets = require('../models/pets')
const tutor = require("../models/tutors");

class PetsClinic {

    createPet = async (req, res) => {

        //pegar Id que esta na URL
        const idTu = req.params.id
        let {name, species, carry, weight, date_of_birth, idTutor=idTu} = req.body;

        console.log(idTu)
        //verifica se o tutor daquele ID existe
        const tuto = await tutor.findByPk(idTutor)
        if (tuto) {
            pets.create({name, species, carry, weight, date_of_birth, idTutor}).then(result=>{
                res.status(200).json(result)
            }).catch((err)=>{
                res.json(err)
            })
        }


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