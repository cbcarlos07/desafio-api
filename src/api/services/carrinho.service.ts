import { Carrinho } from "../model/carrinho"
import carrinhoRepository from "../repository/carrinho.repository"
import { CarrinhoProduto } from "../model/carrinho_produto"


class CarrinhoService{
    
    constructor(  ){
    
    }

    create( carrinhoProduto: CarrinhoProduto ){
        return new Promise((resolve, reject)=>{
            /*
            Adicionar produtos no carrinho
            Primeiro verificando se possui carrinho cadastrado
            */
            carrinhoRepository
                .findCart()
                .then( response =>{                    
                    if( response ){
                        const id = response.dataValues.id
                        carrinhoProduto.carrinho_id = id
                        carrinhoRepository
                            .addCart( carrinhoProduto )
                            .then( retorno =>{
                                resolve({id})
                            })                        
                    }else{
                        //Se não possui carrinho: adicionar
                        carrinhoRepository
                            .create( {} )
                            .then( _response =>{                                
                                //Após adicionar carrinho, adicionar o produto ao carrinho                                
                                const id = _response.dataValues.id
                                carrinhoProduto.carrinho_id = id
                                carrinhoRepository
                                    .addCart( carrinhoProduto )
                                    .then( retorno =>{
                                        
                                        
                                        resolve({id})
                                    })

                            })
                    }// fim do else
                }).catch(e => console.log(e))
        })
        
    }

    findCart(){
        return carrinhoRepository.findCart()
    }

    addCart( carrinhoProduto: CarrinhoProduto ){
        return carrinhoRepository.addCart( carrinhoProduto )
    }

    getCartItens( cartId: number ){
        return carrinhoRepository.getCartItens( cartId )
    }

    cleanCart( id: number ){
        return carrinhoRepository.cleanCart( id )
    }
}

export default CarrinhoService