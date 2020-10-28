

import CarrinhoService from "../services/carrinho.service"

import { Request, Response } from "express";


class CarrinhoController{
    
    /**
     * Adicionando primeiro produto no carrinho
     */
    create( req: Request, resp: Response ){    
        const { produto }  = req.body        
        const carrinhoService = new CarrinhoService(  )        
        const cartProduct = produto
        carrinhoService.create( cartProduct )
                      .then( (response: any) =>{
                          resp.status(200).json( {msg: "Produto adicionado com suceso ao carrinho!", cartId: response.id} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado produto ao carrinho!"} )
                      })
    }




    
}

export default new  CarrinhoController