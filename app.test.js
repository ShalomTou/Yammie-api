const request = require("supertest");
const app = require(`./app`);

describe(`Orders API`, () => {

    let server;
    beforeAll( () => {
        server = require('./app');
    });



    test(`GET /orders/ --> array all orders`, async () => {
        request(app)
            .get("")
            .expect(200)

        // return await request(app).get("/api").expect(200, { message: "Hello, world!" });
        // await request(app)
        // .get('/orders')
        // .expect('Content-Type',/json/)
        // .expect(200)
        // .then((res)=>{
        //     expect(res.body).toEqual(
        //         expect.arrayContaining([
        //             expect.objectContaining({
        //                 user:expect.any(String),
        //                 dish:expect.any(String),
        //                 price:expect.any(Number)
        //             })
        //         ])
        //     )
        // })
    })

    it(`GET /orders/daily --> array daily orders`, () => {})

    it(`GET /orders/user=:user --> spacific order by user || 404 if not found `, () => {})

    it(`POST /orders/new --> create new order`, () => {})

    it(`DELETE /orders/delete=:user --> delete :user orders || 404 if not found `, () => {})

    it(`PATCH /orders/update=:user --> array :name orders || 404 if not found `, () => {})

})