const produto = {
    id: {
        type: 'number',
        description: 'Código do produto'
    },
    nome: {
        type: 'string',
        description: 'Nome do produto'
    },
    descricao: {
        type: 'string',
        description: 'Descricao do produto'
    },
    preco: {
        type: 'number',
        description: 'Preco do produto'
    },
    tags: {
        type: 'string',
        description: 'Descricao do produto'
    },
    status: {
        type: 'string',
        description: 'Status do produto'
    },
    
}


const produtoObject = {
    id: {
        type: 'number',
        description: 'Código do produto'
    },
    nome: {
        type: 'string',
        description: 'Nome do produto'
    },
    descricao: {
        type: 'string',
        description: 'Descricao do produto'
    },
    preco: {
        type: 'number',
        description: 'Preco do produto'
    },
    tags: {
        type: 'string',
        description: 'Descricao do produto'
    },
    status_id: {
        type: 'integer',
        description: 'Status do produto'
    },
    isDeleted: {
        type: 'integer',
        description: 'Soft delete'
    },
}

const list = {
    result: {
        type: 'array',
        items: produtoObject
    },
    count: {
        type: 'integer',
        description: 'Total de produtos'
    },
    page: {
        type: 'integer',
        description: 'Página atual'
    },
}

export const findAll = {
    tags: ['Produto'],
    description: "Returna lista de todos os produtos ",
    operationId: 'findAll',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    responses: {
        "200": {          
            description: "Uma lista de produtos.",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: produto
                    }
                }
            }
        }
    }
} 

export const findAById = {
    tags: ['Produto'],
    description: "Returna um objeto específico ",
    operationId: 'findById',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            type: 'integer',
            example: 1,
            required: true,
            description: 'Código do produto'
          },
    ],
    responses: {
        "200": {          
            description: "Produto específico",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: produtoObject
                    }
                }
            }
        }
    }
} 

export const create = {
    tags: ['Produto'],
    description: "Insere um novo produto ",
    operationId: 'create',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    parameters: [],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        nome: {
                            type: 'string',
                            description: 'Nome do produto'
                        },
                        descricao: {
                            type: 'string',
                            description: 'Descrição do produto'
                        },	
                        preco: {
                            type: 'number',
                            description: 'Preco do produto'
                        }
                        
                    }
                },
                example: {	
                    nome: "PRODUTO TESTE 1",
                    descricao: "TV PLASMA",
                    preco: 1300.0	
                }
            }
        }
    },
    responses: {
        "200": {          
            description: "Salvar produto",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            msg: {
                                type: 'string',
                                description: 'Menagem de retorno'
                            },
                            id: {
                                type: 'number',
                                description: 'Id mais atual salvo'
                            }                            
                        }
                    }
                }
            }
        }
    }
} 



export const update = {
    tags: ['Produto'],
    description: "Atualiza um novo produto ",
    operationId: 'update',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            type: 'integer',
            example: 1,
            required: true,
            description: 'Código do produto'
          },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        nome: {
                            type: 'string',
                            description: 'Nome do produto'
                        },
                        descricao: {
                            type: 'string',
                            description: 'Descrição do produto'
                        },	
                        preco: {
                            type: 'number',
                            description: 'Preco do produto'
                        }
                        
                    }
                },
                example: {	
                    nome: "PRODUTO TESTE 1",
                    descricao: "TV PLASMA",
                    preco: 1300.0	
                }
            }
        }
    },
    responses: {
        "200": {          
            description: "Atualizar produto",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            msg: {
                                type: 'string',
                                description: 'Menagem de retorno'
                            }                           
                        }
                    }
                }
            }
        }
    }
} 




export const destroy = {
    tags: ['Produto'],
    description: "'Remove' um produto ",
    operationId: 'destroy',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            type: 'integer',
            example: 1,
            required: true,
            description: 'Código do produto'
          },
    ],
    
    responses: {
        "200": {          
            description: "Remover produto",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        property: {
                            msg: {
                                type: 'string',
                                description: 'Menagem de retorno'
                            }                            
                        }
                    }
                }
            }
        }
    }
} 


export const pagination = {
    tags: ['Produto'],
    description: "'Paginação de produtos ",
    operationId: 'pagination',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    parameters: [
        {
            in: 'path',
            name: 'limit',
            type: 'integer',
            example: 2,
            required: true,
            description: 'Limite por página'
        },
        {
            name: 'page',
            in: 'path',
            type: 'integer',
            example: 1,
            required: true,
            description: 'Número da página'
        },
    ],
    
    responses: {
        "200": {          
            description: "Paginação produto",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: list
                    }
                }
            }
        }
    }
} 