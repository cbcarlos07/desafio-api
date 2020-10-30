
import { Produto } from "../model/produto"
import produtoRepository from "../repository/produto.repository"

class ProdutoService{

    produto: Produto
    constructor(produtoDTO?: any){
        this.produto = produtoDTO
    }
    
    create(  ){
        return produtoRepository.create( this.produto )
    }

    update(  ){        
        
        let id = this.produto.id
        delete this.produto.id
        return produtoRepository.update(id, this.produto )
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
    /**
     * Pesquisar produto para compra
     * @param limit 
     * @param page 
     */
    productForBuy(limit: number, page: number){
        return produtoRepository.productForBuy(limit, page)
    }

    productByName( nome: string ){
        return produtoRepository.productByName( nome )
    }

    productByTag(nome: string) {
        return produtoRepository.productByTag( nome )
    }

    truncate(){
        return produtoRepository.truncate()
    }
}

export default ProdutoService