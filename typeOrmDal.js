import { createConnection } from 'typeorm'
import students from './students'
import { studentSchema } from './studentSchema'

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
        entities: [studentSchema]
		
		
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
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
  
}

export default TypeOrmDal
