const app  =  require("../../app");
const request =  require("supertest");

it("should return a 200" , async()=>{


    return request(app)
    .get("/user")
    .send({})
    .expect(200);

})