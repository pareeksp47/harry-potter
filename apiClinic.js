
import students from './students'
import professors from './professors'
import TypeOrmDal from './typeOrmDal'


class ApiClinic {
    constructor() {
        this.students = []
        this.professors = []
	}
	 
	async createStudent(firstname, lastname, gender,id_house) {
		try{
				const dal = new TypeOrmDal()
				const newStudent  = new students(null, firstname, lastname, gender,id_house)
			return await dal.createStudent(newStudent );
		
		}catch(error) {
			console.error(error);
			return {}
		
		}
	}

	async createProfessor(firstname, lastname, gender) {
		try{
				const dal = new TypeOrmDal()
				const newProfessor  = new professors(null, firstname, lastname, gender)
			return await dal.createProfessor(newProfessor );
		
		}catch(error) {
			console.error(error);
			return {}
		
		}
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
	
	async getAllProfessors() {
		
		try{

			const dal = new TypeOrmDal()
			
			
			this.professors = await dal.getAllProfessors()

			return {
				professors: this.professors
			}
			
		}catch(error) {
				console.error(error);
				return {}
			
		}
	}


}

const apiClinic = new ApiClinic()

export const getClinic = () => apiClinic
