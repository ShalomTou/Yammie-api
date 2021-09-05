const Order = require(`../models/Order`)
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

async function getOrders ({ filterBy24Hours }) {
    const start = new Date(new Date().getTime() - TWENTY_FOUR_HOURS);
    const filters = {}; 
    if(filterBy24Hours) {
        filters.date = {
            $lt: new Date(),
            $gte: start
        }
    }
    const orders = await Order.find(filters);
    return orders.map(({ dishesIds, totalPrice, date }) => ({ dishesIds, totalPrice, date }));
}

async function addNewOrder ({ dishesIds, totalPrice }) {
    const now = Date.now();
    const order = new Order({ dishesIds, date: now, totalPrice });
    await order.save();
} 
module.exports = {
    getOrders,
    addNewOrder
} 