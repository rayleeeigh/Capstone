const express = require('express');
const cors = require('cors')

const studentsRoutes = require('./routes/studentsRoutes.js')

const app = express();
app.use(cors())

app.get('/',(req,res)=>{
    res.send([{id: '1'},{id: '2'},{id: '3'}])
})

app.use('/', studentsRoutes)

app.listen(4000)