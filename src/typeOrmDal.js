import { createConnection } from 'typeorm'


class TypeOrmDal {
  async connect() {
    try {
      return await createConnection({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'harry',
        entities: []
		
		
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }
  
}

export default TypeOrmDal
