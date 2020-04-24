const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

routes.get("/products", ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/store', ProductController.store)

routes.put('/products/:id', ProductController.updtate)

routes.delete('/products/:id',ProductController.destroy)

module.exports = routes