import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class StatusModel extends Model {

    static init( sequelize ){
        super.init({
            descricao: DataTypes.STRING
        }, { 
            tableName: 'status',
            sequelize 
        })
    }
}

export default StatusModel