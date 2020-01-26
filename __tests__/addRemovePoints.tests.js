import request from 'supertest'
import app from '../server'

import * as apiClinicDependency from '../apiClinic'

beforeEach(() => {
    apiClinicDependency.getClinic = jest.fn().mockReturnValue({
        addRemovePoints: jest.fn()
    })
})

describe('add or remove points', () => {
    it('With correct data', (done) => {

        const nbpoints = 10
        const idprofessor = 2
        const idhouse = 3


        const addRemovePointsFn = jest.fn().mockResolvedValue(200);

        apiClinicDependency.getClinic.mockReturnValue({
            addRemovePoints: addRemovePointsFn
        })

        request(app)
            .post(`api/points/${nbpoints}/${idprofessor}/${idhouse}`)
            .expect(200)
            .expect(response => {
                expect(addRemovePoints).toHaveBeenCalledTimes(1)
                expect(addRemovePoints).toHaveBeenCalledWith(nbpoints, idprofessor, idhouse)
            })
            .end(done)
    })

})