import express from 'express' // estou importando o express
import routes from './routes' // estou importando o routes

class App {
    constructor() {
        this.app = express() // o this é para acessar as propriedades de dentro da classe
        
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routes)
    }
}

export default new App().app