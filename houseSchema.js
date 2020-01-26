import houses from './houses'
import { EntitySchema } from 'typeorm'

export const houseSchema = new EntitySchema({
  tableName: 'houses',
  name: 'houses',
  target: houses,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
	name: {
		type: 'varchar',
		nullable: false
		
	}
  }
}
);


