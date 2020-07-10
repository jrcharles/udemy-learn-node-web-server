const express = require('express')

const app = express()

// setup app.com, app.com/help, app.com/about
// app.get('/route' (req, res) => {
// })
app.get('/', (req, res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) => {
    res.send('Help page!')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})


const port = 3000
app.listen(port, () => {
    console.log('server is running on port ' + port)
})