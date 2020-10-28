import { Router } from 'express'
import ProdutoController from '../api/controllers/produto.controller'

const router = Router()

router.route('/').post( ProdutoController.create )

router.route('/:id').put( ProdutoController.update )

router.route('/:id').delete( ProdutoController.destroy )

router.route('/:id').get( ProdutoController.findByPk )

router.route('/').get( ProdutoController.findAll )

router.route('/produtos/ativos').get( ProdutoController.productForBuy )

export default router