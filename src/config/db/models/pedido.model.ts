import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
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
        })
    }
}

export default PedidoModel