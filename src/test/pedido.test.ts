import test from 'ava'
import inicializarDB from './setup'
inicializarDB()
import PedidoService from '../api/services/pedido.service'
import { CarrinhoProduto } from '../api/model/carrinho_produto'
import { Produto } from '../api/model/produto'
import { Usuario } from '../api/model/usuario'
import CarrinhoService from '../api/services/carrinho.service'
import UsuarioService from '../api/services/usuario.service'

let produto: Produto = {	
	"nome": "PRODUTO TESTE 1",
	"descricao": "TV PLASMA",
	"preco": 2	
}

let carrinhoProduto: CarrinhoProduto ={
    "carrinho_id": 0,
    "produto_id": 1,
    "qtde": 2
}

let usuario: Usuario = 
    {
        "nome": "Johnathan",
        "email": "jon@email.com",
        "telefone": "92977777777",
        "senha": "123",
        "endereco": "R. Dr. Rezende"
    }

let carrinhoService: any
let pedidoService: any
let usuarioService: any
const createCarrinho = ( produtos, usuario ) => carrinhoService.create( produtos, usuario )
const createUsuario = () => usuarioService.create(  )


test.serial('deveRetornarTaxaDe2ReaisSeUmItem', async t =>{
    pedidoService = new PedidoService( )
    let pedido = await pedidoService.calcularTaxa( 1 )    
    t.is(pedido, 2)
})


test.serial('deveRetornarTaxaDe3ReaisSeDoisItem', async t =>{
    pedidoService = new PedidoService( )
    let pedido = await pedidoService.calcularTaxa( 2 )    
    t.is(pedido, 3)
})


test.serial('deveRetornarTaxaDe5ReaisSeTresItem', async t =>{
    pedidoService = new PedidoService( )
    let pedido = await pedidoService.calcularTaxa( 3 )
    t.is(pedido, 5)
})

test.serial('deveRetornarTaxaDe8ReaisSe4Item', async t =>{
    pedidoService = new PedidoService( )
    let pedido = await pedidoService.calcularTaxa( 4 )
    t.is(pedido, 8)
})


test.serial('deveRetornarTaxaDe13ReaisSe5Item', async t =>{
    pedidoService = new PedidoService( )
    let pedido = await pedidoService.calcularTaxa( 5 )
    t.is(pedido, 13)
})

test.serial('naoDeveFinalizarPedidoComCarrinhoVazio', async t =>{
    
    let carrinho = []
    
    let pedido = await pedidoService.buscarItensDoCarrinho( 0, carrinho )
    t.is(pedido.length, 0)
})

test.serial('naoDeveFinalizarPedidoValorAbaixoDe10Reais', async t =>{
    let pedidos = [{
        _produto: {
            dataValues: {
                preco: 2
            }
        },
        qtde: 1
    }]
    let total  = pedidoService.calcularValorTotal( pedidos )
    t.is(total, 2)
})

test.serial('deveFinalizarPedido', async t =>{
    let pedidos = [{
        _produto: {
            dataValues: {
                preco: 2
            }
        },
        qtde: 1
    },
    {
        _produto: {
            dataValues: {
                preco: 5
            }
        },
        qtde: 3
    }]
    let total  = pedidoService.calcularValorTotal( pedidos )
    t.is(total, 17)
})