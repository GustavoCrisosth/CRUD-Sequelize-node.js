import Sequelize from "sequelize";
import { Cliente } from "../models/cliente.js";
import { Produto } from "../models/produto.js";
import { Compra } from "../models/compra.js";
import { Endereco } from "../models/endereco.js";

const sequelize = new Sequelize('crud', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3334,
    dialectOptions: {
        ssl: false
    }
});

Cliente.init(sequelize);
Produto.init(sequelize);
Compra.init(sequelize);
Endereco.init(sequelize);

Cliente.associate({ Compra, Produto, Endereco });
Produto.associate({ Compra, Cliente });
Compra.associate({ Cliente, Produto });
Endereco.associate({ Cliente });

export { sequelize };