import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class CarrinhoProdutoModel extends Model {

    static init( sequelize ){
        super.init({
            carrinho_id: DataTypes.INTEGER,
            produto_id: DataTypes.INTEGER,
            qtde: DataTypes.INTEGER,
        }, { 
            tableName: 'carrinho_produto',
            sequelize 
        })
    }
}

export default CarrinhoProdutoModel