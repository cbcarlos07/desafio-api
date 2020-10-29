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
                status_id: DataTypes.INTEGER,
                usuario_id: DataTypes.INTEGER
            }, { 
                tableName: 'pedido',
                sequelize 
            }
        )
    }

    /**
     * Associação entre tabelas
     * @param model 
     * @param foreign 
     * @param as 
     */
    static associate(model, foreign: string, as: string){
     
       
        this.belongsTo( model, {
           foreignKey: {
               name:  foreign
           },
           as
       } ) 
    }

    static associateMany(model){
        
       this.belongsToMany( model,{
            as: 'produto',
            through: PedidoItensModel,
            foreignKey: 'pedido_id'
        } )
    }

    
}

export default PedidoModel