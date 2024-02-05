import express from 'express'

const app = express()
const port = 5185

app.get('/', (req, res) => res.send('Hello there')) 

app.listen(port, () => {
    console.log(`Server ready at port ${port}`)
})

