import test from 'ava'
import inicializarDB from './setup'
inicializarDB()
import ProdutoService from '../api/services/produto.service'
import { Produto } from '../api/model/produto'

let produto: Produto = {	
	nome: "PRODUTO TESTE 1",
	descricao: "TV PLASMA",
    preco: 1300.0,
    status_id: 1
}
let produtoService: any

const create = () => produtoService.create(  )

test.beforeEach(t => {
    produtoService = new ProdutoService
    produtoService.truncate()
} )
test.after.always(t => {
    produtoService = new ProdutoService
    produtoService.truncate()
})

test('deveCarregarAListaDeProdutos', async t =>{
    produtoService =  new ProdutoService( produto )
    await create()
    const list = await produtoService.findAll()
    t.not(list.length, 0)    
})


test('deveSalvarOProduto', async t =>{
    produtoService =  new ProdutoService( produto )
    const result = await create()
    t.is(result.nome, 'PRODUTO TESTE 1')
})

test('deveAtualizarUmProduto', async t => {
    await create()
    produto.id = 1
    produto.nome = 'PRODUTO TESTE 2'
    produtoService =  new ProdutoService( produto )
    const updated = await produtoService.update()    
    t.is(updated.length, 1)
  })
  
  