import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
import PedidoItensModel from './pedido-itens.model'
import ProdutoModel from './produto.model'
import StatusModel from './status.model'
class PedidoModel extends Model {

    static init( sequelize ){
        super.init({                       
                forma_pagamento: DataTypes.STRING,
                endereco_entrega: DataTypes.STRING,
                dt_criacao: DataTypes.DATE,
                valor_total: DataTypes.DOUBLE,
                status_id: DataTypes.INTEGER
            }, { 
                tableName: 'pedido',
                sequelize 
            }
        )
    }

    static associate(model){
       /* this.hasMany(
                itens,
                {
                    as: 'itens',
                    foreignKey: 'pedido_id',
                    
                }
           )*/

       
        this.belongsTo( model, {
           foreignKey: {
               name:  'status_id'
           },
           as: '_status'
       } ) 
    }

    static associateMany(model){
        /*this.hasMany(
            model,
            { 
                as: 'itens',
                foreignKey: 'pedido_id',
                
            }
       )*/
       this.belongsToMany( model,{
        as: 'produto',
        through: PedidoItensModel,
        foreignKey: 'pedido_id'
    } )
    }
}

export default PedidoModel