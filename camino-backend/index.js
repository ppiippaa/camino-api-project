const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

app.use(cors);
app.use(morgan);

let data = [
    {
        id: 1,
        name: 'Pippa'
    },
    {
        id: 2,
        name: "Beba"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>hi</h1>')
})

app.get('/api/data', (req, res) => {
    res.json(data)
})

app.get('/api/data/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = data.find(d => d.id === id)
    res.json(person)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})