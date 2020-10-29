

import UsuarioService from "../services/usuario.service"

import { Request, Response } from "express";

class UsuarioController{
    
    /**
     * Criação de usuario
     */
    create( req: Request, resp: Response ){
        const usuarioService = new UsuarioService( req.body )
        usuarioService.create()
                      .then( response =>{                         
                          resp.status(200).json( {msg: "Usuario adicionado com sucesso!", id: response.dataValues.id} )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado usuario!"} )
                      })
    }

    auth( req: Request, resp: Response ){
        const usuarioService = new UsuarioService(  )
        usuarioService.auth( req.body )
                      .then( response =>{                         
                          resp.status(200).json( response )
                      }).catch( e => {
                        resp.status(204).json( {msg: "Falha ao adicionado usuario!"} )
                      })
    }

    
}

export default new  UsuarioController