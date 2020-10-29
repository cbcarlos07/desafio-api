
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

import ProdutoModel from "../models/produto.model"
import StatusModel from "../models/status.model"
import CarrinhoProdutoModel from "../models/carrinho-produto.model"
import CarrinhoModel from "../models/carrinho.model"
import PedidoModel from "../models/pedido.model"
import PedidoItensModel from "../models/pedido-itens.model"
import UsuarioModel from "../models/usaurio.model"

const connection = new Sequelize( dbConfig )

ProdutoModel.init( connection )
StatusModel.init( connection )
CarrinhoModel.init( connection )
CarrinhoProdutoModel.init( connection )
PedidoModel.init( connection )
PedidoItensModel.init( connection )
UsuarioModel.init( connection )

CarrinhoProdutoModel.removeAttribute("id")

//Associações
PedidoModel.associate( StatusModel, 'status_id', '_status' )
PedidoModel.associate( UsuarioModel, 'usuario_id','_usuario' )
PedidoItensModel.associate( ProdutoModel )
ProdutoModel.associate( StatusModel, 'status_id', '_status' )
CarrinhoModel.associate( UsuarioModel, 'usuario_id', '_usuario' )
CarrinhoProdutoModel.associate( ProdutoModel, 'produto_id', '_produto' )
export default connection