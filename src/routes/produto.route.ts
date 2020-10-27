import { Router } from 'express'
import ProdutoService from '../api/services/produto.service'

const router = Router()

router.route('/').post( (req, res, next) =>{
    let produtoService = new ProdutoService(req.body)
    let objRetorno =  produtoService.create(  )
    let obj = {
        res, 
        next,
        objRetorno
    }
    returnResponse( obj )

})


const returnResponse = response => {
    let res = response.res
    let next = response.next
    response.objRetorno
            .then( resp=>{
                res.json( resp )
                next()
            })
}

export default router