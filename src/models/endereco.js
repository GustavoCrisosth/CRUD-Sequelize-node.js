import { Model, DataTypes } from 'sequelize';


export class Endereco extends Model {
    static init(sequelize) {
        super.init({
            rua: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false
            },
            clienteId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'clientes', key: 'id' }
            }


        }, {
            sequelize,
            modelName: 'endereco',
            tableName: 'enderecos'
        });
    }

    static associate(models) {
        this.belongsTo(models.Cliente, {
            foreignKey: "clienteId",
            as: "cliente"
        });
    }
}

