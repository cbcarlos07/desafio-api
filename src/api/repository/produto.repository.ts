import ProdutoModel from "../../config/db/models/produto.model";
import { Produto } from "../model/produto";




class ProdutoRepository {

    /**
     * Retorna somente produtos ativos
     */
    productForBy() {
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
        return ProdutoModel.findAll()
    }

    findByPk( id: number ){
        return ProdutoModel.findByPk(id)
    }

    testConnection(){
        return ProdutoModel.sequelize.query('select 1')
    }

}

export default new ProdutoRepository