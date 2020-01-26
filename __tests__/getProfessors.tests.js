import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        getAllProfessors: jest.fn()
    })
})

describe('get professor', () => {
    it('With correct data', (done) => {

        const firstname = 'Severus'
        const lastname = 'Snape'
        const gender = 'M'

        const expectedResponseBody = [{
            id: 1,
            firstname: firstname,
            lastname: lastname,
            gender: gender
        }];

        const getAllProfessorsFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            getAllProfessors: getAllProfessorsFn
        })

        request(app)
            .get(`/api/getProfessors`)
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(response => {
                expect(response.body).toEqual(expectedResponseBody)
                expect(getAllProfessorsFn).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })

})