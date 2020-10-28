
export interface Pedido{
    id?: number
    forma_pagamento: string
    endereco_entrega: string
    dt_criacao?: string
    valor_total?: number
    status_id: number
}