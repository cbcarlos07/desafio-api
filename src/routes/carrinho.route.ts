import { Router } from 'express'
import CarrinhoController from '../api/controllers/carrinho.controller'

const router = Router()

router.route('/').post( CarrinhoController.create )



export default router