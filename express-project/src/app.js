import express from 'express';

class App {
    constructor() {
        this.server = express();
    }


    middlewares() {
        this.server.user(express.json);
    }
}