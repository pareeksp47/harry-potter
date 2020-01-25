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
app.post('/createStudent/:firstname/:lastname/:gender/:id_house', async (req, res) => {
  
    const firstname = req.params.firstname
    const lastname = req.params.lastname
    const gender = req.params.gender
    const id_house = parseInt(req.params.id_house)
    
    const createdElements = await getClinic().createStudent(firstname, lastname, gender,id_house)
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.post('/createProfessor/:firstname/:lastname/:gender', async (req, res) => {
  
    const firstname = req.params.firstname
    const lastname = req.params.lastname
    const gender = req.params.gender
    
    const createdElements = await getClinic().createProfessor(firstname, lastname, gender)
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.get('/getStudents', async (req, res) => {

    const createdElements = await getClinic().getAllStudents()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.get('/getProfessors', async (req, res) => {

    const createdElements = await getClinic().getAllProfessors()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})


app.listen(process.env.PORT || 8080);