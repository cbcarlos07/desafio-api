import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
import PedidoItensModel from './pedido-itens.model'
class ProdutoModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.INTEGER,
            preco: DataTypes.DOUBLE,
            imagem: DataTypes.STRING,
            tags: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            isDeleted: DataTypes.INTEGER
        }, { 
            tableName: 'produto',
            sequelize 
        })
    }

    static associate( model ){
        this.belongsTo(
            model,
            {
                as: '_status',
                foreignKey: 'status_id'                
            }
        )
    }

    static associate1( model ){
        
            /*this.hasMany(
                model,
                { 
                    as: 'itens',
                    foreignKey: 'pedido_id',
                    
                }
           )*/
           this.belongsToMany( model,{
            as: 'pedido',
            through: PedidoItensModel,
            foreignKey: 'produto_id'
        } )
        
    }
}

export default ProdutoModel