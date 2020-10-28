

import PedidoService from "../services/pedido.service"

import { Request, Response } from "express";


class PedidoController{
    
    /**
     * Adicionando primeiro produto no pedido
     */
    create( req: Request, resp: Response ){    
        
        const pedidoService = new PedidoService( req.body )
        
        pedidoService.finalizar( Number( req.params.id ) )
                      .then( (response: any) =>{
                          resp.status(200).json( {msg: "Produto adicionado com suceso ao pedido!", cartId: response.id} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado produto ao pedido!"} )
                      })
    }




    
}

export default new  PedidoController