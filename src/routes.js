import { Router } from 'express' // estou importando o Router de dentro do express

const routes = new Router() // estou criando uma constante para instanciar a classe Router

routes.get('/', (request, response) => {
    return response.status(200).json({ message: "Hello World" })
}) // configurei uma rota inicial

export default routes 