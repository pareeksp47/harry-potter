
import students from './students'
import TypeOrmDal from './typeOrmDal'


class ApiClinic {
    constructor() {
        this.students = []
        
    }

    async getAllStudents() {
		
		try{

			const dal = new TypeOrmDal()
			
			
			this.students = await dal.getAllStudents()

			return {
				students: this.students
			}
			
		}catch(error) {
				console.error(error);
				return {}
			
		}
    }

}

const apiClinic = new ApiClinic()

export const getClinic = () => apiClinic
