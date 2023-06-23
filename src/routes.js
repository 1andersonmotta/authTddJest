const routes = require('express').Router()
const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middleware/auth')

routes.post('/sessions', SessionController.store)
//o metodo authMiddleware só sera executada mas rotas que estçao abaixo do 'use' 
routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    return res.status(200).send();
})

module.exports = routes;