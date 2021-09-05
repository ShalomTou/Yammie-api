# Yammie-api

This app required to have mongoDB credentials,
Please create a `.end` file in the root directory and add you credentials to the following:   
```
DB_CONNECTION = mongodb+srv://<username>:<password>@rest.koat5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
add this to the `.env`.

How to start the server :
```
npm i
node start
```

Host will be at: `localhost:3000`

#### API endpoints:

method: POST

path: /orders

request body:{
    dishesIds:[ids],
}


response:{
    message:'ok',
}


The dishes that are supported at the moment can be found at : `/repos/dishesRepo.js`

----------------------------------

method: GET


path: orders?last24Hours='true/false'


response:[
    {
        date:the creation date,
        dishes:[
            {
                name:dish name,
                price:dish price
            }
        ]
        totalPrice: total dishes price
    }
]

