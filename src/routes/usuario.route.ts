import { Router } from 'express'
import UsuarioController from '../api/controllers/usuario.controller'

const router = Router()

router.route('/').post( UsuarioController.create )
router.route('/logar').post( UsuarioController.auth )


export default router