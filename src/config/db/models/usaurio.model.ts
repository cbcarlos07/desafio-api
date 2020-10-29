import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class UsuarioModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            senha: DataTypes.STRING,
            endereco: DataTypes.STRING,
        }, { 
            tableName: 'usuario',
            sequelize 
        })
    }
}

export default UsuarioModel