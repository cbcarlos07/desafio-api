
import { Produto } from "../model/produto"
import produtoRepository from "../repository/produto.repository"

class ProdutoService{
    produto: Produto 
    constructor(produtoDTO: any = null){        
        this.produto = produtoDTO       
    }
    create(  ){
        return produtoRepository.create( this.produto )
    }

    update(  ){
        const id = this.produto.id
        delete this.produto.id        
        return produtoRepository.update(id, this.produto )
    }

    destroy( id: number ){
        return produtoRepository.destroy( id )
    }

    findAll(){
        return produtoRepository.findAll()
    }

    findByPk( id: number ){
        return produtoRepository.findByPk(id)
    }

    testConnection(){
        return produtoRepository.testConnection()
    }
}

export default ProdutoService