

import PedidoService from "../services/pedido.service"

import { Request, Response } from "express";

import * as jwt from 'jsonwebtoken'
const environments = require('../../config/environments')
class PedidoController{
    
    /**
     * Adicionando primeiro produto no pedido
     */
    finalizar( req, resp: Response ){    
        
        const token = req.headers['x-access-token']        
        const decoded: any = jwt.verify(token, environments.JWT_SECRET);
        //id = Id do Usuário
        const { id } = decoded

        const pedidoService = new PedidoService( req.body )
        
        pedidoService.finalizar( id )
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
              resp.status(204).json( {msg: "Falha ao tentar buscar pedidos!"} )
            })

    }

    update( req: Request, resp: Response ){
        const { id } = req.params
        const pedidoService = new PedidoService( req.body )
        pedidoService.update( Number(id) )
                    .then( (response: any) =>{
                        resp.status(201).json( response )
                    }).catch( e => {
                    resp.status(204).json( {msg: "Falha ao tentar atualizar pedido!"} )
                    })
    }

    
}

export default new  PedidoController