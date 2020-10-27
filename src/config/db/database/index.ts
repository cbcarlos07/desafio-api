
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

import ProdutoModel from "../models/produto.model"
import StatusModel from "../models/status.model"

const connection = new Sequelize( dbConfig )

ProdutoModel.init( connection )
StatusModel.init( connection )

export default connection