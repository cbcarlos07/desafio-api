import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class PedidoItensModel extends Model {

    static init( sequelize ){
        super.init({                   
            pedido_id: DataTypes.INTEGER,
            produto_id: DataTypes.INTEGER,
            preco: DataTypes.DOUBLE,
            qtde: DataTypes.INTEGER 
        }, { 
            tableName: 'pedido_itens',
            sequelize 
        })
    }

    static associate(model){
        this.removeAttribute("id")
        this.belongsTo( model,{
            as: '_produto',
            foreignKey: 'produto_id'
        } )
    }

    
}

export default PedidoItensModel