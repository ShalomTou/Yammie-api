const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const dbConnection = require(`./models/mongoose`)
require(`dotenv`).config()
app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use(bodyParser.json())

const ordersRoute = require(`./routes/orders`)
app.use(`/`, ordersRoute)

app.listen(app.get('port'), async() => {
    await dbConnection();
    console.log(`Api running at http://localhost:${app.get('port')}`);
})