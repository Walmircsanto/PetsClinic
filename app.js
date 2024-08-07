const express = require('express');
const db = require('./db/conection')


db.authenticate().then(()=>{
    console.log('Database MySQL connected ')
}).catch((err)=>{
    console.log(` Database MySQL not connected ${err}`);
});


