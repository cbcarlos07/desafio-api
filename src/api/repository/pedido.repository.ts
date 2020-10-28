import PedidoModel from "../../config/db/models/pedido.model";
import { Pedido } from "../model/pedido";
import { PedidoItens } from "../model/pedido_itens";
import PedidoItensModel from "../../config/db/models/pedido-itens.model";




class PedidoRepository {

    create( pedido: Pedido ){
        return PedidoModel.create( pedido )
    }

    addItens( pedidoItens: PedidoItens[] = [] ){
        return PedidoItensModel.bulkCreate( pedidoItens )
    }    

}

export default new PedidoRepository