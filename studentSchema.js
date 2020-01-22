import students from './students'
import { EntitySchema } from 'typeorm'

export const studentSchema = new EntitySchema({
  tableName: 'students',
  name: 'students',
  target: students,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
	firstname: {
		type: 'varchar',
		nullable: false
		
	},
    lastname: {
      type: 'varchar',
      nullable: false
    },
    gender: {
      type: 'char',
      nullable: false
    },
	id_house: {
      type: 'int',
      nullable: false
    }
  }
}
);


