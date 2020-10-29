import { Router } from 'express'
import PedidoController from '../api/controllers/pedido.controller'

const router = Router()

router.route('/').patch( PedidoController.finalizar )
router.route('/').get( PedidoController.findAll )
router.route('/:id').put( PedidoController.update )
router.route('/paginate/:limit/:page').get( PedidoController.paginate )



export default router