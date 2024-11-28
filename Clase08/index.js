import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuración de Swagger
const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'API REST',
            version: '1.0.0',
            description: 'API REST para la gestión de usuarios',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            }
        ]
    },
    apis: ['./index.js'] //Ruta de los archivos con documentación ['./routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: ID de Usuario
 *              name:
 *                  type: string
 *                  description: Nombre de Usuario
 *              email:
 *                  type: string
 *                  description: Email de Usuario
 * 
 */

/**
 * @swagger
 * /users:
 *      get:
 *          summary: Obtiene las listas de usuarios
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: Lista de usuarios
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */
app.get('/users', (req, res) => {
    res.json([{ id: "1", name: "Codehouse", email: "codehouse@gmail.com" }])
})
/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Obtiene un usuario por ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *          404:
 *             description: Usuario no encontrado
 *
 */
app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const users = [
    { id: '1', name: 'Codehouse', email: 'codehouse@gmail.com' },
    { id: '2', name: 'John Doe', email: 'john.doe@example.com' },
  ]
  const user = users.find((user) => user.id === id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' })
  }
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})