import { Produto } from "../model/produto"
import produtoRepository from "../repository/produto.repository"

export default {
    create: ( produto: Produto ) =>{
        return produtoRepository.create( produto )
    },

    update: ( id: number, produto: Produto ) => {
        return produtoRepository.update(id, produto )
    },

    destroy: ( id: number ) => {
        return produtoRepository.destroy( id )
    },

    findAll: ()=> {
        return produtoRepository.findAll()
    },

    findByPk: ( id: number ) => {
        return produtoRepository.findByPk(id)
    },

    testConnection: ()=> {
        return produtoRepository.testConnection()
    }
}