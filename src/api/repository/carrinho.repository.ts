import CarrinhoModel from "../../config/db/models/carrinho.model";
import { Carrinho } from "../model/carrinho";
import { CarrinhoProduto } from "../model/carrinho_produto";
import CarrinhoProdutoModel from "../../config/db/models/carrinho-produto.model";




class CarrinhoRepository {

    create( Carrinho: Carrinho ){
        return CarrinhoModel.create( Carrinho )
    }


    findCart(  ){
        return CarrinhoModel.findOne()
    }

    addCart( carrinhoProduto: CarrinhoProduto ){
        CarrinhoProdutoModel.removeAttribute("id")
        return CarrinhoProdutoModel.create( carrinhoProduto )
    }

    getCartItens( cartId: number ){
        CarrinhoProdutoModel.removeAttribute("id")
        return CarrinhoProdutoModel
                .findAll({where: {carrinho_id: cartId}})
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