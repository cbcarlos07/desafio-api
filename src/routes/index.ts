import produtoRoute from './produto.route'

const prefix = '/api/v1'

const routerConfig = deps => {
    const {app} = deps
    app.use(`${prefix}/produto`, produtoRoute)
}

export default routerConfig

