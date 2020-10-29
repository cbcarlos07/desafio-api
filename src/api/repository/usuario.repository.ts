
import UsuarioModel from "../../config/db/models/usaurio.model";
import { Usuario } from "../model/usuario";
const { Sequelize } = require('sequelize')

class UsuarioRepository {
    /**
     * 
     * @param usuario 
     */
    create( usuario: Usuario ){
        return UsuarioModel.create( usuario )
    }

    auth( dados: any ){
        return UsuarioModel.findOne({
            attributes: {exclude: ['senha']},
            where: Sequelize.and(
                {senha: dados.senha},
                Sequelize.or(
                    { email: dados.auth },
                    { telefone: dados.auth }
                )
            )
        })
    }


}

export default new UsuarioRepository