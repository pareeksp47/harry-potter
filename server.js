
import {getClinic} from './apiClinic'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/api/getStudents', async (req, res) => {

    const createdElements = await getClinic().getAllStudents()
    res.status(200).set({ 'Content-Type': 'application/json' }).json(createdElements)
})



app.listen(port, () => console.log(`Listening on port ${port}`));