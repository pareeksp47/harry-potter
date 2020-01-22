const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');


import {getClinic} from './apiClinic'

const app = express()

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/getStudents', async (req, res) => {

    const createdElements = await getClinic().getAllStudents()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.listen(process.env.PORT || 8080);
