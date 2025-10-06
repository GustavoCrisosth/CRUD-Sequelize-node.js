import { Model, DataTypes } from "sequelize";

class Compra extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            quantidade: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                },
            },
            data: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            clienteId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'clientes',
                    key: 'id',
                },
            },
            produtoId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'produtos',
                    key: 'id',
                },
            }
        }, {
            sequelize,
            modelName: "compra",
            tableName: "compras",
            timestamps: false,
        });
    }

    static associate(models) {

        this.belongsTo(models.Cliente, { foreignKey: "clienteId", as: "cliente" });


        this.belongsTo(models.Produto, { foreignKey: "produtoId", as: "produto" });
    }
}

export { Compra };
