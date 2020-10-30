
import { Usuario} from "../model/usuario"
import usuarioRepository from "../repository/usuario.repository"
import * as jwt from 'jsonwebtoken'
const environments = require('../../config/environments')
class UsuarioService{

    usuario: Usuario
    /**
     * 
     * @param usuarioDTO 
     */
    constructor(usuarioDTO?: any){
        this.usuario = usuarioDTO
    }
    
    create(  ){
        return usuarioRepository.create( this.usuario )
    }

    auth( dados: any ){
        return new Promise((resolve, reject)=>{
            usuarioRepository
                .auth( dados )
                .then( response =>{
                    if( response ){                        
                        const  user: Usuario = response.dataValues
                        
                        const token = jwt.sign( user, environments.JWT_SECRET, { expiresIn: 60 * 60 * 24 }  )
    
                        resolve({token})
                    }else{
                        resolve({msg: 'Usuário não encontrado!', status: false})
                    }
                })

        })
    }

}

export default UsuarioService