
import { Produto } from "../model/produto"
import produtoRepository from "../repository/produto.repository"

class ProdutoService{
    produto: Produto
    constructor(produtoDTO: any = null){
        if( produtoDTO ){
            if( produtoDTO.id ) produtoDTO.id
            if( produtoDTO.descricao ) this.produto.descricao = produtoDTO.descricao
            if( produtoDTO.tags ) this.produto.tags = produtoDTO.tags    
            this.produto.nome = produtoDTO.nome
            this.produto.preco = produtoDTO.preco
            this.produto.status_id = produtoDTO.status_id            
        } 
            
        
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