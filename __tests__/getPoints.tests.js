import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        getAllPoints: jest.fn()
    })
})

describe('get points', () => {
    it('With correct data', (done) => {

        const nb_points = 10
        const id_professor = 227
        const id_house = 2

        const expectedResponseBody = [{
            id: 1,
            nb_points: nb_points,
            id_professor: id_professor,
            id_house: id_house
        }];

        const getAllPointsFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            getAllPoints: getAllPointsFn
        })

        request(app)
            .get(`/api/getPoints`)
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(response => {
                expect(response.body).toEqual(expectedResponseBody)
                expect(getAllPointsFn).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })

})