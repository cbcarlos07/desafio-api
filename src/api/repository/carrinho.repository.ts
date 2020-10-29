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
        console.log(carrinho);
        
        return CarrinhoModel.create( carrinho )
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
        return new Promise((resolve, reject)=>{
            /*Limpando primeiro os itens do carrinho */
            CarrinhoProdutoModel
                .destroy({where: {carrinho_id: id}})
                .then( (retorno: any) =>{
                    /* Removendo o carrinho */
                    CarrinhoModel
                        .destroy({where: {id}})
                        .then( () =>{
                            resolve({status: true})
                        })
                })

        })
    }

}

export default new CarrinhoRepository