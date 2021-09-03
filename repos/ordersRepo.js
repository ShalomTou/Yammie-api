const Order = require(`../models/Order`)
var start = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

const getLast24HoursOrders = async () => {
    return getHandler(await Order.find({
        "date": {
            $lt: new Date(),
            $gte: start
        }
    }))
}

const addNewOrder = async (args) => {
    const {userId,dishesIds,totalPrice } = args.body
    if (!userId || !dishesIds || !totalPrice) {
        console.log(`one of the params are missing.`)
        return {
            status: 422,
            json: {
                message: "one of the params are missing."
            }
        }
    }
    return await postHandles(new Order({userId,dishesIds,totalPrice}))
}

async function postHandles(args) {
    try {
        const savedOrder = await args.save()
        console.log(`new order created`, savedOrder)
        return {
            status: 200,
            json: savedOrder
        }
    } catch (err) {
        console.log(`an error occured:`, err)
        return {
            status: 500,
            json: {
                message: err
            }
        }
    }
}

function getHandler(args) {
    try {
        if (!args.length > 0) {
            console.log(`No orders from the last 24 hours`)
            return {
                status: 500,
                json: {
                    message: "No orders from the last 24 hours"
                }
            }
        } else {
            console.log(`Last 24 hours orders:`, args)
            return {
                status: 200,
                json: args
            }
        }
    } catch (err) {
        console.log(`Outside error `, err)
    }
}

exports.getLast24HoursOrders = getLast24HoursOrders
exports.addNewOrder = addNewOrder