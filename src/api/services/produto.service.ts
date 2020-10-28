
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

    async destroy( id: number ){
        let produto = await this.findByPk( id )
        console.log(produto);
        
        //return produtoRepository.destroy( id )
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
     * Retorna somente produtos ativos
     */
    productForBuy(){
        return produtoRepository.productForBuy()
    }
}

export default ProdutoService