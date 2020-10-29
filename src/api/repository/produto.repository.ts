
import ProdutoModel from "../../config/db/models/produto.model";
import { Produto } from "../model/produto";


const { Sequelize } = require('sequelize')
class ProdutoRepository {
    productByName(nome: string) {
        const _nome = `%${nome}%`
        return ProdutoModel.findAll({
            where: {
                nome: {
                    [Sequelize.Op.like]: _nome
                }
            }
        })
    }
    productByTag(nome: string) {
        const _nome = `%${nome}%`
        return ProdutoModel.findAll({
            where: {
                tags: {
                    [Sequelize.Op.like]: _nome
                }
            }
        })
    }

    /**
     * Retorna somente produtos ativos
     */
    productForBuy(limit: number, page: number ) {        
        let offset = 0;
        return new Promise((resolve, reject)=>{
            ProdutoModel
                .findAndCountAll({
                    where: {status_id: 1}
                })
                .then( data =>{
                    let pages = Math.ceil(data.count / limit);
                    offset = limit * (page - 1);
                    ProdutoModel
                        .findAll({
                            where: {status_id: 1},
                            limit,
                            offset,
                            order: [
                               [ 'nome','asc']
                            ]
                        }).then( dados =>{
                            resolve({result: dados, count: data.count, pages})
                        })
                })

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