const mongoose = require(`mongoose`)

const connection = async () => {
    try {
        console.log(`connection to DB`)
        return await mongoose.connect(process.env.DB_CONNECTION);
    } catch (error) {
        console.log(`DB connection error`,error);
    }
}

module.exports = connection;