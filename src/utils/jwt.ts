import * as jwt from 'jsonwebtoken'
const environments = require('../config/environments')

const jwtMiddleware = deps => {
    return async (req, res, next) => {  
        
        let find = deps.blocks.filter( e => req.url.includes( e ))
      
        
        if( find.length > 0 ){
            const token = req.headers['x-access-token']
            if( !token ){
                res.status( 403 ).send( {error: 'Token não fornecido'} )
                return false
            }
            try {
                req.decoded = jwt.verify( token, environments.JWT_SECRET )
            } catch (error) {
                res.status( 403 ).send(  {error: 'Falha ao autenticar o token'} )
            }
        }
        next()
    }
}

export default jwtMiddleware
