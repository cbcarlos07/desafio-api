import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class CarrinhoModel extends Model {

    static init( sequelize ){
        super.init({
            data: DataTypes.DATE,            
        }, { 
            tableName: 'carrinho',
            sequelize 
        })
    }
}

export default CarrinhoModel