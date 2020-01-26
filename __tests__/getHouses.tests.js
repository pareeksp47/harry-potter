import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        getAllHouses: jest.fn()
    })
})

describe('get house', () => {
    it('With correct data', (done) => {

        const name = 'Gryffindor'

        const expectedResponseBody = [{
            id: 1,
            name: name
        }];

        const getAllHousesFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            getAllHouses: getAllHousesFn
        })

        request(app)
            .get(`/api/getHouses`)
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(response => {
                expect(response.body).toEqual(expectedResponseBody)
                expect(getAllHousesFn).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })
})