import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
import PedidoItensModel from './pedido-itens.model'
class ProdutoModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.INTEGER,
            preco: DataTypes.DOUBLE,
            imagem: DataTypes.STRING,
            tags: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            isDeleted: DataTypes.INTEGER
        }, { 
            tableName: 'produto',
            sequelize 
        })
    }

    static associate(model, foreign: string, as: string){
        this.belongsTo( model, {
           foreignKey: {
               name:  foreign
           },
           as
       } ) 
    }
   
}

export default ProdutoModel