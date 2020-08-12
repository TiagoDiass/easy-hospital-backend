const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.get('/', (req, res) => res.json({
      ok: 'funcionou'
    }));

    routes.loadRoutes(this.server);
  }
}

module.exports = new App().server;