import request from "supertest";
import app from "../app.js";
import pool from "../db/connection.js";

const user = {
  full_name: expect.any(String),
  email: expect.any(String),
  date_of_birth: expect.any(String),
  id: expect.any(Number),
  username: expect.any(String),
};

// tests for the users table
describe("Get user for the users route works as expected", () => {
  // testing the status code to see it returns the right status code
  test("should return a status of 200", async () => {
    //  arrange
    const res = await request(app).get("/users");
    // assert
    expect(res.statusCode).toBe(200);
  });

  // testing the response body check it return the correct content
  test("should return the actual user", async () => {
    const res = await request(app).get("/users");
    // arrange
    const actual = res.body;
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    // assert
    // console.log(actual, "is the actual");
    expect(actual).toEqual(expected);
  });

  // //  test"Should return the actual payload expected"
  // test("should return the actual payload", async () => {
  //   const res = await request(app).get("/users");
  //   // arrange
  //   const actual = res.body;
  //   console.log(actual.payload[0])
  //   actual.payload.forEach((item) => {
  //     // assert
  //     expect(item).toEqual(user);
  //   });
  // });
});

// // testing the post request
// test("should post to the users table", async () => {
//   const data = {
//     full_name: "Robert Jones",
//     email: "robertjones@mail.com",
//     date_of_birth: "1955-05-10",
//     username: "BobbyJ",
//   };
//   await request(app)
//     .post("/users")
//     .send(data)
//     .expect(200)
//     .then(async (response) => {
//       // Check the response
//       // console.log("the response is", response.body.payload[0]);
//       expect(response.body.payload[0].id).toBeTruthy();
//       expect(response.body.payload[0].full_name).toBe(data.full_name);
//       expect(response.body.payload[0].email).toBe(data.email);
//       // const dob =response.body.payload[0].date_of_birth.split('T')
//       // expect(dob[0]).toBe(data.date_of_birth);
//       expect(response.body.payload[0].username).toBe(data.username);
//     });
// });

afterAll(() => pool.end())

