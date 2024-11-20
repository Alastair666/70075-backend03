import express from 'express'
import usersRouter from './routes/users.js'
import errorHandler from './middlewares/errors/index.js'
//import compression from 'express-compression'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRouter)
app.use(errorHandler)
/*app.use(compression({
    brotli:{ enabled: true, zlib: {}}
}))
app.get('/string', (req, res) => {
    let string = `Hola Coders, soy un string`
    for (let i = 0; i < 10000; i++) {
        string += `Soy un string largo`
    }
    res.send(string)
})//*/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})