import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        getAllStudents: jest.fn()
    })
})

describe('get student', () => {
    it('With correct data', (done) => {

        const firstname = 'Harry'
        const lastname = ' Potter'
        const gender = 'M'
        const id_house = 1

        const expectedResponseBody = [{
            id: 1,
            fisrtname: firstname,
            lastname: lastname,
            gender: gender,
            id_house: id_house
        }];

        const getAllStudentsFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            getAllStudents: getAllStudentsFn
        })

        request(app)
            .get(`/api/getStudents`)
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(response => {
                expect(response.body).toEqual(expectedResponseBody)
                expect(getAllStudentsFn).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })

})