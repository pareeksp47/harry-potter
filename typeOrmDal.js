import { createConnection } from 'typeorm'
import students from './students'
import points from './points'
import houses from './houses'
import { studentSchema } from './studentSchema'
import { pointsSchema } from './pointsSchema'
import { houseSchema } from './houseSchema'
import { professorSchema } from './professorSchema'
import professors from './professors'

class TypeOrmDal {
  async connect() {
    try {
      return await createConnection({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_harrypotter',
        entities: [studentSchema,pointsSchema,houseSchema,professorSchema]
		
		
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }
  
  
  async getAllPoints() {
		const connection = await this.connect()

		try {
		  const dataRepository = connection.getRepository(points)
		  return await dataRepository.find()
		} catch (err) {
		  console.log(err)
		  throw err
		} finally {
		  await connection.close()
		}
	}
  
  
	async getAllHouses() {
		const connection = await this.connect()

		try {
		  const dataRepository = connection.getRepository(houses)
		  return await dataRepository.find()
		} catch (err) {
		  console.log(err)
		  throw err
		} finally {
		  await connection.close()
		}
	}
  
    async getAllStudents() {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(students)
      return await dataRepository.find()
    } catch (err) {
      console.log(err)
      throw err
    } finally {
      await connection.close()
    }
  }
  
  async addRemovePoints(nb_points, id_professor, id_house){
	  
	  const connection = await this.connect()

		try {
		  const dataRepository = connection.getRepository(points)
		  
		  const point = new points(null,nb_points, id_professor, id_house)
		  
		  await dataRepository.save(point)
		  return point
		} catch (err) {
		  console.error(err.message)
		  throw err
		} finally {
		  await connection.close()
		}
   }
   
    async createStudent(student) {
		const connection = await this.connect()

		try {
			const dataRepository = connection.getRepository(students)
			await dataRepository.save(student)
		   
			return {
				students: student
			}
		} catch (err) {
			console.error(err.message)
			throw err
		} finally {
			await connection.close()
		}

	}

	async createProfessor(professor) {
	  const connection = await this.connect()

	  try {
		  const dataRepository = connection.getRepository(professors)
		  await dataRepository.save(professor)
		 
		  return {
			professors: professor
		  }
	  } catch (err) {
		  console.error(err.message)
		  throw err
	  } finally {
		  await connection.close()
	  }

	}
	
	async getAllProfessors() {
		const connection = await this.connect()

		try {
		  const dataRepository = connection.getRepository(professors)
		  return await dataRepository.find()
		} catch (err) {
		  console.log(err)
		  throw err
		} finally {
		  await connection.close()
		}
    }
  
}

export default TypeOrmDal
