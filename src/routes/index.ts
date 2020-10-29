import produtoRoute from './produto.route'
import carrinhoRoute from './carrinho.route'
import pedidoRoute from './pedido.route'
import usuarioRoute from './usuario.route'

const prefix = '/api/v1'

const routerConfig = deps => {
    const {app} = deps
    app.use(`${prefix}/produto`, produtoRoute)
    app.use(`${prefix}/cart`, carrinhoRoute)
    app.use(`${prefix}/pedido`, pedidoRoute)
    app.use(`${prefix}/usuario`, usuarioRoute)
}

export default routerConfig

