import PedidoModel from "../../config/db/models/pedido.model";
import { Pedido } from "../model/pedido";
import { PedidoItens } from "../model/pedido_itens";
import PedidoItensModel from "../../config/db/models/pedido-itens.model";
import ProdutoModel from "../../config/db/models/produto.model";
import pedidoController from "../controllers/pedido.controller";
import StatusModel from "../../config/db/models/status.model";
const { Sequelize } = require("sequelize");





class PedidoRepository {

    create( pedido: Pedido ){
        return PedidoModel.create( pedido )
    }

    addItens( pedidoItens: PedidoItens[] = [] ){
        PedidoItensModel.removeAttribute("id")
        return PedidoItensModel.bulkCreate( pedidoItens )
    }

    findAll(){
      
        PedidoModel.belongsToMany(
             ProdutoModel,
             {
                 as: 'produto',
                 through: PedidoItensModel,
                 foreignKey: 'produto_id',
                 
             }
             
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
        } )

        return PedidoModel.findAll({
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
                

            ]
        })
        /*
        PedidoItensModel.removeAttribute("id")
        PedidoItensModel.belongsTo( ProdutoModel, {
            foreignKey: {
                name:  'produto_id'
            },
            as: 'produto'
        } )
        PedidoItensModel.belongsTo( PedidoModel, {
            foreignKey: {
                name:  'pedido_id'
            },
            as: 'pedido'
        } )
        return PedidoItensModel
                .findAll({
                    attributes: [
                        'pedido_id',
                        [Sequelize.literal('pedido.dt_criacao'),'dt_criacao'],
                        [Sequelize.literal('pedido.status'),'status'],
                        [Sequelize.literal('pedido.valor_total'),'valor_total']
                    ],
                    include: [ 
                        {
                            model: ProdutoModel, 
                            attributes: ['nome'], 
                            as: 'produto'
                        },
                        {
                            model: PedidoModel,
                            attributes: [],
                            as: 'pedido'
                        }],
                    order: [
                        ['pedido','dt_criacao','asc']
                    ]                    
                })*/
    }

    update(id: number, pedido: Pedido){
        return PedidoModel.update( pedido, { where: {id}} )
    }

    

}

export default new PedidoRepository