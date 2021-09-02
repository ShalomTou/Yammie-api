const express = require(`express`)
const router = express.Router()
const Order = require(`../models/Order`)

// GET ALL ORDERS
router.get(`/`, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
        console.log(`All orders:`,orders)
    } catch (err) {
        console.log(`An error occured:`,err)
        res.status(500).json({message: err})
    }
})

// GET LAST 24 HOURS ORDERS
router.get(`/daily`, async (req, res) => {
    try {
        const orders = await Order.find({
            "timestamp": {
                $lt: new Date(),
                $gte: new Date(new Date().setDate(new Date().getDate() - 1))
            }
        })
        res.status(200).json(orders)
        console.log(`Last 24 hours orders:`,orders)
    } catch (err) {
        console.log(`An error occured:`,err)
        res.status(500).json({message: err})
    }
})

// GET SPECIFIC ORDER BY NAME
router.get(`/user=:user`, async (req, res) => {
    try {
        const orders = await Order.findOne({
            'user': `${req.params.user}`
        })
        if(!orders){
            res.status(404).send(`User ${req.params.user} NOT found`)
            console.log(`User ${req.params.user} NOT found`)
        }else{
            res.status(200).send(orders)
            console.log(`User ${req.params.user} found`)
        }
    } catch (err) {
        console.log(`an error occured:`,err)
        res.status(500).json({message: err})
    }
})

// ADD NEW ORDER
router.post(`/new`, async (req, res) => {
    let {user,dish,price} = req.body
    const order = new Order({
        user:user.trim(),
        dish:dish.trim(),
        price
    })
    try {
        const savedOrder = await order.save()
        res.status(200).json(savedOrder)
        console.log(`new order created`,savedOrder)
    } catch (err) {
        console.log(`an error occured:`,err)
        res.status(422).json({message: err})
    }
})

// DELETE ORDER
router.delete(`/delete=:user`, async (req, res) => {
    try {
        const removedOrder = await Order.deleteOne({
            user: req.params.user.trim()
        })
        res.status(200).json(removedOrder)
        console.log(`${req.params.user} deleted`)

    } catch (err) {
        console.log(`an error occured:`,err)
        res.status(422).json({message: err})
    }
})

// UPDATE SPECIFIC ORDER'S PRICE
router.patch(`/update=:user`, async (req, res) => {
    try {
        const updatedOrder = await Order.updateOne({user: req.params.user},
             {$set: {price: req.body.price,dish:req.body.dish}})
        res.status(200).json(updatedOrder)
        console.log(`${req.params.user} updated :`,req.body)
    } catch (err) {
        console.log(`an error occured:`,err)
        res.status(422).json({message: err})
    }
})

module.exports = router