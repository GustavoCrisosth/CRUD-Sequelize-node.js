import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Nome do Cliente deve ser preeenchido!" },
                    len: { args: [2, 50], msg: "Nome do Cliente deve ter entre 2 e 50 letras!" }
                }
            },
            cpf: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "CPF do Cliente deve ser preeenchido!" },
                    is: { args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do Cliente deve seguir o padrão NNN.NNN.NNN-NN!" }
                }
            },
            nascimento: {
                type: DataTypes.DATEONLY,
                validate: {
                    isDate: { msg: "Nascimento do Cliente deve ser preenchido!" },
                    is: { args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Nascimento do Cliente deve seguir o padrão yyyy-MM-dd!" }
                }
            }
        }, { sequelize, modelName: 'cliente', tableName: 'clientes' })
    }

    static associate(models) {
        this.hasMany(models.Compra, { foreignKey: "clienteId", as: "compras" });

        this.belongsToMany(models.Produto, {
            through: models.Compra,
            foreignKey: "clienteId",
            otherKey: "produtoId",
            as: "produtos",
        });

        this.hasOne(models.Endereco, {
            foreignKey: "clienteId",
            as: "endereco"
        });
    }

}

export { Cliente }; 