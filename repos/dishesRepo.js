const dishesMap = new Map(Object.entries({
    0: {
        name: "Pizza",
        price: 10
    },
    1: {
        name: "Pasta",
        price: 15
    },
    2: {
        name: "Bamba",
        price: 10
    },
    3: {
        name: "Bisli",
        price: 15
    },
    4: {
        name: "Sushi",
        price: 10
    },
    5: {
        name: "Golda",
        price: 20
    },
    6: {
        name: "Aqua",
        price: 25
    },
    7: {
        name: "Soda",
        price: 10
    },
    8: {
        name: "Hamburger",
        price: 20
    },
    9: {
        name: "Juice",
        price: 15
    },
    10: {
        name: "Other",
        price: 10
    },
}));


const parseToDishesNames = async (json) => {
    return await json.forEach(order => {
        let total = 0
        let i = 0
        order.dishesIds.forEach(dishId => {
            order.totalPrice += dishesMap.get(dishId).price
            console.log(dishId,dishesMap.get(dishId))
            order.dishesIds[i++] = dishesMap.get(dishId).name
        })
    });
}


exports.parseToDishesNames = parseToDishesNames