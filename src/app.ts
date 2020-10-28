import express from 'express'
import ProdutoService from './api/services/produto.service'
import bodyParser from 'body-parser'
import cors from 'cors';
import routerConfig from './routes'
const environments = require('./config/environments')

class Application{
    app: express.Application
    port: any
    connection: any

    constructor(){
        this.app = express()
        this.port = environments.SERVER_PORT
        this.connection = new ProdutoService()
    }

    listen(){
        require('./config/db/database')
        let http = require("http").Server(this.app);
        let io = require("socket.io")(http);

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded( { extended:false } ));
        

        this.connection
            .testConnection()
            .then(() => {
                this.enableCors()
                this.routes( io )
                http.listen( this.port, () =>{
                    console.log(`Api rodando da porta ${this.port}`);
                    
                })
                
            })
    }

    enableCors(){

        const options: cors.CorsOptions = {
            methods: 'GET, OPTIONS, POST, PUT, DELETE',
            origin: '*'
        }

        this.app.use(cors(options));

    }

    routes( io ){
        let deps = {
            app: this.app,
            io
        }
        routerConfig( deps )
    }
}

export default new Application