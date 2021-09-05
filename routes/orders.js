const express = require(`express`);
const router = express.Router();
const ordersRepo = require(`../repos/ordersRepo`);
const dishesRepo = require(`../repos/dishesRepo`);

router.get(`/orders`, async (req, res) => {
    try {
        const orders = await ordersRepo.getOrders({ filterBy24Hours: req.query.last24Hours });
        const result = orders.map(({ dishesIds, ...rest }) => ({ dishes: dishesRepo.getDishes(dishesIds), ...rest }))
        return res.status(200).json(result);
    } catch (err) {
        throw new Error('something went wrong fetching 24 hours dishes', err);
    }
});

router.post(`/orders`, async (req, res) => {
    try {
        const { dishesIds } = req.body;
        if (!dishesIds || dishesIds.length === 0) {
            throw new Error("please add dishes to your order")
        }
        const totalDishesPrice = calcTotalDishesPrice(dishesIds);
        await ordersRepo.addNewOrder({ dishesIds, totalPrice: totalDishesPrice });
        res.status(202).json({ message: 'ok' });
    } catch(err) {
        throw new Error('something went wrong adding a new order', err);
    }
});

function calcTotalDishesPrice (dishesIds) {
    return dishesRepo.getDishes(dishesIds)
        .reduce((acc, { price }) => acc + price , 0);
}


module.exports = router