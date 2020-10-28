import produtoRoute from './produto.route'
import carrinhoRoute from './carrinho.route'

const prefix = '/api/v1'

const routerConfig = deps => {
    const {app} = deps
    app.use(`${prefix}/produto`, produtoRoute)
    app.use(`${prefix}/cart`, carrinhoRoute)
}

export default routerConfig

