import CarrinhoModel from "../../config/db/models/carrinho.model";
import { Carrinho } from "../model/carrinho";
import { CarrinhoProduto } from "../model/carrinho_produto";
import CarrinhoProdutoModel from "../../config/db/models/carrinho-produto.model";
import ProdutoModel from "../../config/db/models/produto.model";




class CarrinhoRepository {
    getCartItensByUser(userId: number) {
       
        return CarrinhoModel
                .findOne({
                    where: {usuario_id: userId}
                })
    }

    create( carrinho: Carrinho ){
        return CarrinhoModel.create( carrinho )
    }

    findByPK( id: number ){
        return CarrinhoModel.findByPk( id )
    }


    findCart(  ){
        return CarrinhoModel.findOne()
    }

    findByUser( usuario_id: number ){
        return CarrinhoModel.findOne({
            where: {usuario_id}
        })
    }

    addCart( carrinhoProduto: CarrinhoProduto ){
        
        return CarrinhoProdutoModel.create( carrinhoProduto )
    }

    getCartItens( cartId: number ){
        
        return CarrinhoProdutoModel
                .findAll({
                    include: [{
                        model: ProdutoModel,
                        as: '_produto'
                    }],
                    where: {carrinho_id: cartId}
                })
    }

    cleanCart( id: number ){
        return CarrinhoModel.destroy({where: {id}})        
    }

    removeProdutos( cartId ){
        return CarrinhoProdutoModel.destroy({where: {carrinho_id: cartId}})
    }

    limparCarrinhoProdutos(){
        
        return    CarrinhoProdutoModel.destroy({ truncate : true, cascade: false })
                
        
    }

    limparCarrinho(){
        return new Promise((resolve, reject)=>{
            CarrinhoModel.destroy({ truncate : true, cascade: false })
            .then( () => resolve())

        })
    }

}

export default new CarrinhoRepository