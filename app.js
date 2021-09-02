const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const server = require('./models/server');
const connection = require(`./models/mongoose`)

app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use(bodyParser.json())

const ordersRoute = require(`./routes/orders`)

app.use(`/orders`, ordersRoute)

app.get(`/`, (req, res) => {
    return res.status(200).json({message:"welcome"})
})

// Mongoose Connection
connection

// Server Connection
server(app)