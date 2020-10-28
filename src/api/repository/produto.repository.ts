
import ProdutoModel from "../../config/db/models/produto.model";
import { Produto } from "../model/produto";


const { Sequelize } = require('sequelize')
class ProdutoRepository {

    /**
     * Retorna somente produtos ativos
     */
    productForBuy() {
        return ProdutoModel.findAll({
            where: {
                status_id: 1
            }
        })
    }

    create( produto: Produto ){
        return ProdutoModel.create( produto )
    }

    update( id: number, produto: Produto ){
        return ProdutoModel.update(produto, {where: {id}})
    }

    destroy( id: number ){
        return ProdutoModel.destroy( {where: {id}} )
    }

    findAll(){
        return ProdutoModel.findAll({
            attributes: [
                'id', 'nome', 'descricao','preco','tags',
                [Sequelize.literal('_status.descricao'),'status']
            ],
            include: [
                {
                    association: '_status',
                    attributes: []
                }
            ]
        })
    }

    findByPk( id: number ){
        return ProdutoModel.findByPk(id)
    }

    testConnection(){
        return ProdutoModel.sequelize.query('select 1')
    }

}

export default new ProdutoRepository