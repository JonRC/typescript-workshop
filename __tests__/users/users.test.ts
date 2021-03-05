import request from 'supertest'
import { app } from "../../src/app"


// afterAll(async () => {
//   await User.deleteMany({})
// })

describe('create user test', () => {
  it('should be able to create a User', async () => {
    const user = {
      name: "Jonathan",
      email: "jonathan@gmail.com",
      birth: "1999-08-06",
      address: {
        country: "Brasil",
        state: "MG",
        city: "Uberlândia"
      }
    }

    const response = await request(app)
      .post('/users')
      .send(user)

      user.birth = (new Date(user.birth)).toISOString()

      expect(response.status).toBe(201)
      expect(response.body).toMatchObject(user)
      expect(response.body).toHaveProperty('_id')
      
  })

  it('should not create a user', async () =>{
    const user = {
      name: "J",
      email: "jonathan",
      birth: "1999-08-0454566",
      address: {
        country: "Brasil",
        city: "Uberlândia"
      }
    }

    const response = await request(app)
      .post('/users')
      .send(user)

    expect(response.status).toBe(400)

  })
})