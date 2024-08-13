const express = require('express');
const app = express();
const db = require('./db/conection')
const PORT = 3000;
const tutorRouter = require('./router/tutorRouter');
const petRouter = require('./router/petsRouter');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use(express.json())
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: false }));




app.use(tutorRouter)
app.use(petRouter)

db.authenticate().then(()=>{
    console.log('Database MySQL connected ')
}).catch((err)=>{
    console.log(` Database MySQL not connected ${err}`);
});


db.sync({force:true}).then(r =>{
    console.log(`Database created ${r}`)
}).catch((err)=>{
    console.log(err)
});



// inicialização da aplicação
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
    console.log("API documentation: http://localhost:3000/docs");
})

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


