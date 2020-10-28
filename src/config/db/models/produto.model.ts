import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class ProdutoModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.INTEGER,
            preco: DataTypes.DOUBLE,
            imagem: DataTypes.STRING,
            tags: DataTypes.STRING,
            status_id: DataTypes.INTEGER
        }, { 
            tableName: 'produto',
            sequelize 
        })
    }
}

export default ProdutoModel