const express = require('express')

const route = express.Router();


const services = require('../services/service')
const controller = require('../controller/controller')


route.get("/",services.homeRoute)
route.get("/add-todo",services.addTodo)
route.get("/update-Todo",services.update)



route.get('/get',controller.getAll)
route.post('/createTodo',controller.create)
route.get('/getTodo',controller.getById)


module.exports = route