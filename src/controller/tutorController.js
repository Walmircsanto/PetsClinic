const tutor = require("../models/tutors");
const pets = require("../models/pets");


// Como meu controller e minha porta de entrada da API e por aqui que recebo as request e devolvo as responses
class tutorClinic {

    createTutor = async (req, res) => {

        let {name, phone, email, date_of_birth, zip_code} = req.body;

        const newTutor = tutor.create({name, phone, email, date_of_birth, zip_code}).then(resul => {
            //devolvo a minha response em Json para meu Client com status Create
            res.status(201).json(resul);
        }).catch((err) => {
            res.status(500).json(err);
        });


    }

    getById = async (req, res) => {
        const id = req.params.id;
        // como as classes estão associadas utilizamos o carregamento Eager Loading para traze os dados
        //aparentemente so funciona com o findOne e não com o finByPk
        tutor.findOne({
            where: {id: id},
            include: pets
        }).then(result => {
            res.status(200).json(result);
        });

    }

    getAllTutor = async (req, res) => {
        tutor.findAll().then(result => {
            res.status(200).json({result: result})
        }).catch((err) => {
            console.log(err)
        })
    }

    updateTutor = async (req, res) => {
        const id = req.params.id;
        console.log(id)
        tutor.update(req.body, {
            where: {id: id}
        }).then(result => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        })
    }

    deleteTutor = async (req, res) => {
        const id = req.params.id;
        tutor.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.status(204).json(`Tutor com do id ${id} deletado`);
        }).catch((err) => {
            res.json(err)
        })
    }
}

module.exports = new tutorClinic();