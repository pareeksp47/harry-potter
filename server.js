import 'regenerator-runtime/runtime'
import { getClinic } from './apiClinic'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/api/getStudents', async (req, res) => {

    const clinic = getClinic();
    const createdElements = await clinic.getAllStudents()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})


app.get('/api/getHouses', async (req, res) => {

    const createdElements = await getClinic().getAllHouses()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.get('/api/getPoints', async (req, res) => {

    const createdElements = await getClinic().getAllPoints()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})


app.post('/api/points/:nbpoints/:idprofessor/:idhouse', async (req, res) => {

    const nbpoints = req.params.nbpoints;
    const idprofessor = req.params.idprofessor;
    const idhouse = req.params.idhouse;

    let statusCode = 400;

    if (nbpoints && idprofessor && idhouse) {

        statusCode = await getClinic().addRemovePoints(nbpoints, idprofessor, idhouse);

    }
    res.status(statusCode).send();
})

app.post('/api/createStudent/:firstname/:lastname/:gender/:id_house', async (req, res) => {

    const firstname = req.params.firstname
    const lastname = req.params.lastname
    const gender = req.params.gender
    const id_house = parseInt(req.params.id_house)

    const createdElements = await getClinic().createStudent(firstname, lastname, gender, id_house)
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})

app.post('/api/createProfessor/:firstname/:lastname/:gender', async (req, res) => {

    const firstname = req.params.firstname
    const lastname = req.params.lastname
    const gender = req.params.gender

    const createdElements = await getClinic().createProfessor(firstname, lastname, gender)
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})


app.get('/api/getProfessors', async (req, res) => {

    const createdElements = await getClinic().getAllProfessors()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})




export default app