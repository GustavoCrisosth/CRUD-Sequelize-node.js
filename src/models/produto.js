
import { Model, DataTypes } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            preco: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'produto',
            tableName: 'produtos'
        });
    }

    static associate(models) {
        this.hasMany(models.Compra, { foreignKey: "produtoId", as: "compras" });

        this.belongsToMany(models.Cliente, {
            through: models.Compra,
            foreignKey: "produtoId",
            otherKey: "clienteId",
            as: "clientes",
        });
    }

}

export { Produto };
