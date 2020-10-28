import { Router } from 'express'
import PedidoController from '../api/controllers/pedido.controller'

const router = Router()

router.route('/:id').patch( PedidoController.finalizar )
router.route('/').get( PedidoController.findAll )
router.route('/:id').put( PedidoController.update )



export default router