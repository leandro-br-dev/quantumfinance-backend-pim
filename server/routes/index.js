const ClienteController = require('../controllers/ClienteController');

const { Router } = require('express'),
        routes   = Router(),
        clientes  = require('./clientesRoute')

    routes.use(clientes); 

module.exports = routes;