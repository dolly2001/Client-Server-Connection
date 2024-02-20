import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`<h1>Your server is live now 🥳🥳🥳</h1>`)
})

app.get('/api/data', (req, res) => {
    const data = [
        {
            id : 1,
            occupation : 'Software Engineer',
            Experience : 'Freasher'
        },
        {
            id : 2,
            occupation : 'Cyber Security Engineer',
            Experience : 'Freasher'
        },
        {
            id : 3,
            occupation : 'UI/UX Designer',
            Experience : 'Freasher'
        },
        {
            id : 4,
            occupation : 'Product Manager',
            Experience : 'Freasher'
        },
        {
            id : 5,
            occupation : 'Sales Executive',
            Experience : 'Freasher'
        },
    ]
    res.send(data)
})

app.listen(port, () => {
    console.log(`your server is listening on port ${port}`);
})