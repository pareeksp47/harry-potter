import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        createProfessor: jest.fn()
    })
})

describe('create professor', () => {
    it('With correct data', (done) => {

        const firstname = 'Albus'
        const lastname = 'Dumbledore'
        const gender = 'M'

        const expectedResponseBody = [{
            professors: {
                id: 1,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
            }
        }];
        const createProfessorFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            createProfessor: createProfessorFn
        })

        request(app)
            .post(`api/createProfessor/${firstname}/${lastname}/${gender}`)
            .expect(200)
            .expect(response => {
                expect(createProfessor).toHaveBeenCalledTimes(1)
                expect(createProfessort).toHaveBeenCalledWith(firstname, lastname, gender)
            })
            .end(done)
    })

})