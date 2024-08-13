const pets = require('../models/pets')
const tutor = require("../models/tutors");

class PetsClinic {

    createPet = async (req, res) => {

        //pegar Id que esta na URL
        const idTu = req.params.tutorId
        let {name, species, carry, weight, date_of_birth,idTutor} = req.body;
        idTutor = idTu

        //verifica se o tutor daquele ID existe
        const tuto = await tutor.findByPk(idTu)
        if (tuto) {
          await  pets.create({name, species, carry, weight, date_of_birth, idTutor}).then(result=>{
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

    updatePets = async (req,res) =>{
        const petId = req.params.petId;
        const tutorId = req.params.tutorId;
        let {id,name, species, carry, weight, date_of_birth} = req.body;

        const pet = await pets.findByPk(petId);
        if(pet){
          await  pets.update(
                {name, species, carry, weight, date_of_birth},
                {
                where: {id: petId, idTutor: tutorId},
                    returning: true
            }).then(result=>{
                res.json(result)
            }).catch((err)=>{
                res.status(500).json(err);
            });
        }

    }

    deletePets = async(req,res) =>{
       try{
           const idPet = req.params.petId
           const pet = await pets.findByPk(req.params.petId);
           if(pet){
               await pets.destroy({
                   where:{
                         id:  idPet
                   }
               });
               res.status(204).json('Deletado')
           }
       }catch (err){
           res.status(500)
       }

    }

}
module.exports = new PetsClinic();