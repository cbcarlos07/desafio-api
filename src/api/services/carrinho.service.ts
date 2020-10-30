import { Carrinho } from "../model/carrinho"
import carrinhoRepository from "../repository/carrinho.repository"
import { CarrinhoProduto } from "../model/carrinho_produto"
import agendamento from '../../jobs/schedule'

class CarrinhoService{
    
    constructor(  ){
    
    }

    create( carrinhoProduto: CarrinhoProduto, usuario: number ){
        return new Promise((resolve, reject)=>{
            /*
            Adicionar produtos no carrinho
            Primeiro verificando se possui carrinho cadastrado
            */
            carrinhoRepository
                .findByUser( usuario )
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
                            
                            .create( {usuario_id: usuario} )
                            .then( async _response =>{
                                let data = await this.findByPK( _response.dataValues.id )                                
                                agendamento.configurarLimpeza( data.dataValues )                            
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

    findByPK(id: number){
        return carrinhoRepository.findByPK( id )
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

    getCartItensByUser( userId: number ){
        return carrinhoRepository.getCartItensByUser( userId )
    }

    cleanCart( id: number ){
        return carrinhoRepository.cleanCart( id )
    }

    removeProdutos( cartId ){
        return carrinhoRepository.removeProdutos( cartId )
    }

    limparCarrinhoProdutos(){
        return carrinhoRepository.limparCarrinhoProdutos()
    }

    limparCarrinho(){
        return carrinhoRepository.limparCarrinho()
    }
}

export default CarrinhoService