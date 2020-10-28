import { PedidoItens } from './../model/pedido_itens';

import { Pedido } from "../model/pedido";
import pedidoRepository from "../repository/pedido.repository";
import CarrinhoService from "./carrinho.service";

class PedidoService {
    pedido: Pedido
    cartService = new CarrinhoService
    constructor(pedidoDTO?: any){
        this.pedido = pedidoDTO
    }

    finalizar( cartId: number ){
        console.log('cart', this.pedido);
        return new Promise(async (resolve, reject)=>{
            let hasItem = await this.cartService.getCartItens( cartId )            
            if( hasItem.length == 0 ){
                resolve({status: false, msg: 'O carrinho está vazio'})
            }else{
                const valor_total = hasItem.map( cart => cart.ProdutoModel.dataValues.preco).reduce( (prev, value)=> prev + value, 0 )
               
                
                if( valor_total < 10  ){
                    resolve({status: false, msg: 'O valor total deve ser no mínimo R$ 10,00 '})
                }else{
                    this.pedido.valor_total = valor_total
                    this.pedido.status_id = 3
                    pedidoRepository
                        .create( this.pedido )
                        .then( response =>{
                            const pedidoId = response.dataValues.id
                            const produtos: PedidoItens[]    = hasItem.map( cart => {
                                return {
                                    pedido_id: pedidoId,
                                    produto_id: cart.produto_id,
                                    preco: cart.ProdutoModel.dataValues.preco,
                                    qtde: cart.qtde
                                }
                            })
                            console.log('produtos', produtos);
                            pedidoRepository
                                .addItens( produtos )
                                .then( _response =>{
                                    this.cartService.cleanCart(cartId)
                                    resolve({status: true, msg: 'Pedido Finalizdo com sucesso!'})
                                })
                        })
                }
            }

        })
        
    }

    findAll(){
        return pedidoRepository.findAll()
    }

    update( id: number ){
        return pedidoRepository.update( id, this.pedido )
    }


}

export default PedidoService