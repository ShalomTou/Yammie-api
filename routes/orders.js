const express = require(`express`)
const router = express.Router()
const Order = require(`../models/Order`)
const ordersRepo = require(`../repos/ordersRepo`)
const dishesRepo = require(`../repos/dishesRepo`)

// GET LAST 24 HOURS ORDERS
router.get(`/daily`, async (req, res) => {
    const {status,json} = await ordersRepo.getLast24HoursOrders(req)
    await dishesRepo.parseToDishesNames(json)
    return res.status(status).json(json)
})

// ADD NEW ORDER
router.post(`/new`, async (req, res) => {
    const {status,json} = await ordersRepo.addNewOrder(req)
    return res.status(status).json(json)
})

module.exports = router