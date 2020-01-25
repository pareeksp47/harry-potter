import { createConnection } from 'typeorm'
import students from './students'
import { studentSchema } from './studentSchema'
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
        entities: [studentSchema,professorSchema]
		
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
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
