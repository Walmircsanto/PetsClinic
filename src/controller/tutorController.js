const tutor = require("../models/tutors");


class tutorClinic {

    createTutor = async (req,res) =>{
        let {name, phone,email,date_of_birth,zip_code} = req.body;

        const newTutor =  tutor.create({name,phone,email,date_of_birth,zip_code}).then(resul =>{
            res.status(201).json(resul);
        }).catch((err)=>{
            res.status(500).json(err);
        });


    }

    getById(id) {
        return 'tutor 1'
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