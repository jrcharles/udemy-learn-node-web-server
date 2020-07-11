const express = require('express')

const app = express()

// setup app.com, app.com/help, app.com/about
// app.get('/route' (req, res) => {
// })
app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'JR',
        age: 33
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '50 degrees',
        location: 'Knoxville'
    })
})


const port = 3000
app.listen(port, () => {
    console.log('server is running on port ' + port)
})