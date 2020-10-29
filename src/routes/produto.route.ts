import { Router } from 'express'
import ProdutoController from '../api/controllers/produto.controller'

const router = Router()

router.route('/').post( ProdutoController.create )

router.route('/:id').put( ProdutoController.update )

router.route('/:id').delete( ProdutoController.destroy )

router.route('/:id').get( ProdutoController.findByPk )

router.route('/').get( ProdutoController.findAll )

router.route('/produtos/ativos/:limit/:page').get( ProdutoController.productForBuy )

router.route('/nome/:produto').get( ProdutoController.productByName )

router.route('/tag/:produto').get( ProdutoController.productByTag )



export default router