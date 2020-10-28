import PedidoModel from "../../config/db/models/pedido.model";
import { Pedido } from "../model/pedido";
import { PedidoItens } from "../model/pedido_itens";
import PedidoItensModel from "../../config/db/models/pedido-itens.model";
import ProdutoModel from "../../config/db/models/produto.model";
import StatusModel from "../../config/db/models/status.model";
const { Sequelize } = require("sequelize");





class PedidoRepository {
    getItens(id: number) {
        return PedidoItensModel.findAll({
            attributes: [
                [Sequelize.literal('_produto.nome'), 'produto']
            ],
            include: [
                {
                    association: '_produto',
                    attributes: []
                }
            ],
            where: {pedido_id: id}
        })
    }

    create( pedido: Pedido ){
        return PedidoModel.create( pedido )
    }

    addItens( pedidoItens: PedidoItens[] = [] ){        
        return PedidoItensModel.bulkCreate( pedidoItens )
    }

    findAll(){

        
        return PedidoModel.findAll({
            attributes: [
                'id', 'dt_criacao','valor_total',
                [Sequelize.literal('_status.descricao'),'status']
            ],
            include: [
                {
                    association: '_status',
                    attributes: []
                }
            ],
            where: {
                status_id: {[Sequelize.Op.notIn]: [6,7]}
            }
        })
      
        /* PedidoModel.belongsToMany(
             ProdutoModel,
             {
                 as: 'produto',
                 through: PedidoItensModel,
                 foreignKey: 'produto_id',
                 
             },
             
             
            )

        ProdutoModel.belongsToMany(
            PedidoModel,
            {
                as: 'pedido',
                through: PedidoItensModel,
                foreignKey: 'pedido_id'
            }
            )
        PedidoModel.belongsTo( StatusModel, {
            foreignKey: {
                name:  'status_id'
            },
            as: '_status'
        } ) */

        /*return PedidoModel.findAll({
            attributes: [
                'id','dt_criacao', 'valor_total',
                [Sequelize.literal('_status.descricao'),'status'],
            ],
            include: [
                {
                    model: StatusModel,
                    attributes: [],
                    as: '_status'
                },
                {
                    model: ProdutoModel,
                    required: true,
                    as: 'produto',
                    attributes: ['nome'],
                    through: {
                        attributes: []
                    }
                },
                

            ],
            where: {
                status_id: {[Sequelize.Op.notIn]: [6,7]}
            }
        })*/
    }

    update(id: number, pedido: Pedido){
        return PedidoModel.update( pedido, { where: {id}} )
    }

    findByPk( id: number ){
        return PedidoModel.findByPk(id);
    }

    

}

export default new PedidoRepository