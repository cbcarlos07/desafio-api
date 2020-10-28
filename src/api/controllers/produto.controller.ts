

import ProdutoService from "../services/produto.service"

import { Request, Response } from "express";

class ProdutoController{
    
    /**
     * Criação de produto
     */
    create( req: Request, resp: Response ){
        const produtoService = new ProdutoService( req.body )
        produtoService.create()
                      .then( response =>{                         
                          resp.status(200).json( {msg: "Produto adicionado com sucesso!", id: response.dataValues.id} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado produto!"} )
                      })
    }

    
    update( req: Request, resp: Response ){
        const { id } = req.params
        const produto = req.body
        produto.id = id
        const produtoService = new ProdutoService( produto )
        produtoService.update()
                      .then( response =>{ 
                        console.log(response);
                                 
                          resp.status(200).json( {msg: "Produto atualizado com sucesso!"} )
                      }).catch( e => {                          
                        resp.status(404).json( {msg: "Falha ao atualizar produto!"} )
                      })
    }

    destroy( req: Request, resp: Response ){
        const { id } = req.params        
        const produtoService = new ProdutoService(  )
        produtoService.destroy( Number( id ) )
                      .then( response =>{
                        console.log(response);
                        
                          resp.status(200).json( {msg: "Produto removido com sucesso!"} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha Produto removido!"} )
                      })

    }

    findAll(req: Request, resp: Response){
        const produtoService = new ProdutoService(  )
        produtoService.findAll(  )
                      .then( response =>{                         
                          resp.status(200).json( response )
                      }).catch( e => {
                        console.log(e);
                        
                        resp.status(204).json( {msg: "Falha em buscar produto!"} )
                      })
    }

    findByPk( req: Request, resp: Response ){
        const produtoService = new ProdutoService(  )
        produtoService.findByPk( Number( req.params.id ) )
                      .then( response =>{
                          resp.status(200).json( response )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha em buscar produto!"} )
                      })
    }


    productForBuy( req: Request, resp: Response ){
        const produtoService = new ProdutoService(  )
        produtoService.productForBuy(  )
                      .then( response =>{
                          resp.status(200).json( response )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha em buscar produto!"} )
                      })
    }

    
}

export default new  ProdutoController