import points from './points'
import { EntitySchema } from 'typeorm'

export const pointsSchema = new EntitySchema({
  tableName: 'points',
  name: 'points',
  target: points,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
	nb_points: {
		type: 'int',
		nullable: false
	},
    id_professor: {
      type: 'int',
      nullable: false
    },
	id_house: {
      type: 'int',
      nullable: false
    }
  }
}
);


