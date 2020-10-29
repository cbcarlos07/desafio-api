import PedidoModel from "../../config/db/models/pedido.model";
import { Pedido } from "../model/pedido";
import { PedidoItens } from "../model/pedido_itens";
import PedidoItensModel from "../../config/db/models/pedido-itens.model";
const { Sequelize } = require("sequelize");





class PedidoRepository {

    paginate(limit: number, page: number ) {        
        let offset = 0;
        return new Promise((resolve, reject)=>{
            PedidoModel
                .findAndCountAll({
                    where: {
                        status_id: {[Sequelize.Op.notIn]: [6,7]}
                    }
                })
                .then( data =>{
                    console.log('');
                    
                    let pages = Math.ceil(data.count / limit);
                    offset = limit * (page - 1);
                    PedidoModel
                        .findAll({
                            attributes: [
                                'id', 'dt_criacao','valor_total',
                                [Sequelize.literal('_status.descricao'),'status'],
                                [Sequelize.literal('_usuario.nome'),'usuario']
                            ],
                            include: [
                                {
                                    association: '_status',
                                    attributes: []
                                },
                                {
                                    association: '_usuario',
                                    attributes: []
                                }
                            ],
                            where: {
                                status_id: {[Sequelize.Op.notIn]: [6,7]}
                            },
                            limit,
                            offset
                        }).then( dados =>{
                            resolve({result: dados, count: data.count, pages})
                        })
                })

        })
    }

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
                [Sequelize.literal('_status.descricao'),'status'],
                [Sequelize.literal('_usuario.nome'),'usuario']
            ],
            include: [
                {
                    association: '_status',
                    attributes: []
                },
                {
                    association: '_usuario',
                    attributes: []
                }
            ],
            where: {
                status_id: {[Sequelize.Op.notIn]: [6,7]}
            }
        })
      
    }

    update(id: number, pedido: Pedido){
        return PedidoModel.update( pedido, { where: {id}} )
    }

    findByPk( id: number ){
        return PedidoModel.findByPk(id);
    }

    

}

export default new PedidoRepository