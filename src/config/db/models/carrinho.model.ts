import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class CarrinhoModel extends Model {

    static init( sequelize ){
        super.init({
            data: DataTypes.DATE,
            usuario_id: DataTypes.INTEGER
        }, { 
            tableName: 'carrinho',
            sequelize 
        })
    }

    static associate(model, foreign, alias){
        
         this.belongsTo( model, {
            foreignKey: {
                name:  foreign
            },
            as: alias
        } ) 
    }

    

     
}

export default CarrinhoModel