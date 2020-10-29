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

    finalizar( usuario: number ){        
        return new Promise( (resolve, reject)=>{
            /* Verificar se o usuário tem carrinho */           
            this.cartService
                .getCartItensByUser( usuario )
                .then( async res => {
                    if( res ){            
                        /* Se o usuário possui carrinho,
                           Deve trazer os itens do carrinho
                        */
                        let cartId = res.dataValues.id
                        console.log(cartId);
                        
                        let hasItem = await this.cartService.getCartItens( cartId )
                        console.log(hasItem);
                        
                        if( hasItem.length == 0 ){
                            resolve({status: false, msg: 'O carrinho está vazio'})
                        }else{
                            const valor_total = hasItem.map( cart => cart._produto.dataValues.preco).reduce( (prev, value)=> prev + value, 0 )
                            
                            if( valor_total < 10  ){
                                resolve({status: false, msg: 'O valor total deve ser no mínimo R$ 10,00 '})
                            }else{
                                this.pedido.valor_total = valor_total
                                this.pedido.status_id = 3
                                this.pedido.usuario_id = usuario
                                //Salvando primeiro o pedido
                                pedidoRepository
                                    .create( this.pedido )
                                    .then( response =>{
                                        const pedidoId = response.dataValues.id
                                        const produtos: PedidoItens[]    = hasItem.map( cart => {
                                            return {
                                                pedido_id: pedidoId,
                                                produto_id: cart.produto_id,
                                                preco: cart._produto.dataValues.preco,
                                                qtde: cart.qtde
                                            }
                                        })
                                        //Adicionando itens do pedido
                                        pedidoRepository
                                            .addItens( produtos )
                                            .then( _response =>{
                                                this.cartService.cleanCart(cartId)
                                                resolve({status: true, msg: 'Pedido Finalizdo com sucesso!'})
                                            })
                                    })
                            }
                        }

                    }else{
                        resolve({status: false, msg: 'Ainda não possui carrinho'})
                    }

                })

        })
        
    }

     findAll(){
        return new Promise(async(resolve, reject)=>{
            let pedidos: any = await pedidoRepository.findAll()
            let pedidosItens = pedidos.map( async p =>{                
                
                let itens = await pedidoRepository.getItens( p.id )
                
                let obj = {...p.dataValues, itens: itens.length > 0 ? itens : []}
                
                return obj
            })
            let dados = Promise.all( pedidosItens )
            resolve( dados )
        })
    }

    update( id: number ){
        return new Promise(async (resolve, reject)=>{
            pedidoRepository
                .findByPk(id)
                .then( async _pedido =>{
                    
                    switch (this.pedido.status_id) {
                        case 7:
                            await this._update( id )
                            resolve({msg: 'Pedido atualizado com sucesso!', status: true})
                            break;
                        case 4:
                            if( _pedido.dataValues.status_id == 3 ){
                                await this._update( id )
                                resolve({msg: 'Pedido atualizado com sucesso!', status: true})
                            }else{
                                resolve({msg: 'Atualização não permitida!', status: false})
                            }
                        case 6:
                            if( _pedido.dataValues.status_id == 5 ){
                                await this._update( id )
                                resolve({msg: 'Pedido atualizado com sucesso!', status: true})
                            }else{
                                resolve({msg: 'Atualização não permitida!', status: false})
                            }
        
                        break;
                        default:
                            resolve({msg: 'Atualização não permitida!', status: false})
                            break;
                    }
                }).catch( e => {
                    reject()
                })


        })
        
    }
    
    private _update(id: number){
        return pedidoRepository.update( id, this.pedido )

    }


}

export default PedidoService