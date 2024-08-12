const express = require('express');
const app = express();
const db = require('./db/conection')
const PORT = 3000;
const tutorRouter = require('./router/tutorRouter');
const petRouter = require('./router/petsRouter');
const bodyParser = require('body-parser');



// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use(express.json())
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: false }));




app.use(tutorRouter)
app.use(petRouter)
app.use(db.sync)
app.use(db.authenticate)



// inicialização da aplicação
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})



