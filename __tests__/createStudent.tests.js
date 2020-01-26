import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        createStudent: jest.fn()
    })
})

describe('create student', () => {
    it('With correct data', (done) => {

        const firstname = 'Ron'
        const lastname = 'Weasley'
        const gender = 'M'
        const id_house = 2


        const expectedResponseBody = [{
            students: {
                id: 2,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                id_house: id_house
            }
        }];
        const createStudentFn = jest.fn().mockResolvedValue(expectedResponseBody);

        apiClinicDependency.getClinic.mockReturnValue({
            createStudent: createStudentFn
        })

        request(app)
            .post(`/api/createStudent/${firstname}/${lastname}/${gender}/${id_house}`)
            .expect(200)
            .expect(response => {
                expect(createStudentFn).toHaveBeenCalledTimes(1)
                expect(createStudentFn).toHaveBeenCalledWith(firstname, lastname, gender, id_house)
            })
            .end(done)
    })

})