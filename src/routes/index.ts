import produtoRoute from './produto.route'

const prefix = '/api/v1'

const routerConfig = deps => {
    const {server} = deps
    server.use(`${prefix}/produto`, produtoRoute)
}

export default routerConfig

