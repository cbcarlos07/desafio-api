

import PedidoService from "../services/pedido.service"

import { Request, Response } from "express";


class PedidoController{
    
    /**
     * Adicionando primeiro produto no pedido
     */
    finalizar( req: Request, resp: Response ){    
        
        const pedidoService = new PedidoService( req.body )
        
        pedidoService.finalizar( Number( req.params.id ) )
                      .then( (response: any) =>{
                          resp.status(201).json( {msg: response.msg, status: response.status} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado produto ao pedido!"} )
                      })
    }

    findAll( req: Request, resp: Response ){    
        const pedidoService = new PedidoService(  )
        pedidoService
            .findAll()
            .then( (response: any) =>{
                resp.status(201).json( response )
            }).catch( e => {
                console.log('e',e);
                
              resp.status(204).json( {msg: "Falha ao tentar buscar pedidos!"} )
            })

    }

    update( req: Request, resp: Response ){
        const { id } = req.params
        const pedidoService = new PedidoService( req.body )
        pedidoService.update( Number(id) )
                    .then( (response: any) =>{
                        resp.status(201).json( {msg: 'Pedido atualizdo com sucesso!'} )
                    }).catch( e => {
                    resp.status(204).json( {msg: "Falha ao tentar atualizar pedido!"} )
                    })
    }

    
}

export default new  PedidoController