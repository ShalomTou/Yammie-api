// Start server
// Listening on port 3000
const server = (app)=> {
    try {
        app.listen(app.get('port'), () => {
            console.log(`Api running at http://localhost:${app.get('port')}`);
        })
    } catch (error) {
        console.error(err);
        process.exit();
    }
}

module.exports = server;