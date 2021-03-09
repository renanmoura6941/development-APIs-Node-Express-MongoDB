import express from 'express';
import routes from './routes';
import './database';
class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json);
    }

    routes() {
        this.serve.use(routes);
    }
}

export default new App().server;