import { Pedido } from "../model/pedido";
import CarrinhoService from "./carrinho.service";

class PedidoService {
    pedido: Pedido
    cartService = new CarrinhoService
    constructor(pedidoDTO?: any){
        this.pedido = pedidoDTO
    }

    async finalizar( cartId: number ){
        let hasItem = await this.cartService.getCartItens( cartId )
        console.log('hasItem', hasItem);
        
    }


}

export default PedidoService