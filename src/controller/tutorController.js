const tutor = require("../models/tutors");

// Como meu controller e minha porta de entrada da API e por aqui que recebo as request e devolvo as responses
class tutorClinic {

    createTutor = async (req,res) =>{

        let {name, phone,email,date_of_birth,zip_code} = req.body;

        const newTutor =  tutor.create({name,phone,email,date_of_birth,zip_code}).then(resul =>{
            //devolvo a minha response em Json para meu Client com status Create
            res.status(201).json(resul);
        }).catch((err)=>{
            res.status(500).json(err);
        });


    }

    getById = async (req,res)=>{
        const id = req.params.id;
        tutor.findByPk(id).then(result=>{
            res.status(200).json(result);
        }).catch((err)=>{
            console.log(err)
        })

    }

    getAllTutor = async (req,res)=>{
        tutor.findAll().then(result=>{
            res.status(200).json({result:result})
        }).catch((err)=>{
            console.log(err)
        })
    }

    updateTutor(id) {
        return 'tutor Update'
    }

    deleteTutor(id) {
        return 'tutor deletado'
    }
}

module.exports = new tutorClinic();