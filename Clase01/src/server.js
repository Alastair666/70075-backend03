import express from 'express'
import usersRouter from './routes/users.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})