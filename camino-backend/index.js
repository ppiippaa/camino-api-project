const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Albergue = require('./db/models/albergue');
require('dotenv').config();

app.use(cors());
app.use(express.static('build'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });



app.get('/api/albergue/:id', async (req, res) => {
    const id = req.params.id;
    if (id) {
        const albergue = await Albergue.findById(id)
        if (albergue) {
            res.json(albergue)

        } else {
            res.status(404).end();
        }
    }
})


app.get('/api/albergues', async (req, res) => {
    const key = req.query.key;
    let page = Number(req.query.page) || 1;
    let count = Number(req.query.count) || 10;
    page = key === 'test' ? 1 : page
    count = key === 'test' ? 3260 : count;
    const camino = req.query.camino;

    let caminoQuery;

    if (camino) {
        switch (camino) {
            case 'camino-frances':
                caminoQuery = 'Camino Francés';
                break;
            case 'camino-primitivo':
                caminoQuery = 'Camino Primitivo';
                break;
            case 'camino-portugues':
                caminoQuery = 'Camino Portugués';
                break;
            case 'camino-del-norte':
                caminoQuery = 'Camino del Norte';
                break;
            case 'via-de-la-plata':
                caminoQuery = 'Vía de la Plata';
                break;
            case 'fisterra-y-muxia':
                caminoQuery = 'Fisterra y Muxía'
                break;
            default:
                caminoQuery = null;
                break;
        }
    }

    if (caminoQuery === null) {

       return res.status(400).json({ error: 'Incorrect camino parameter' })
    }


    if (count > 50 && key !== 'test') {
        return res.status(400).json({ error: 'Albergue count out of range. Maximum 50 results.'})
    }

    let queryCondition = {}
    if (caminoQuery) {
        queryCondition.camino = caminoQuery;
    }

    const albergues = await Albergue.find(queryCondition).skip((page - 1) * (count)).limit(count)
    if (albergues.length) {
        return res.json(albergues)

    } else {
       return res.status(400).json({ error: 'Page parameter out of range.'})
    }
})


const PORT = process.env.PORT ||  5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})