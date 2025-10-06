import { Sequelize } from 'sequelize';
import { Cliente } from './cliente.js';
import { Endereco } from './endereco.js';
import { Produto } from './produto.js';
import { Compra } from './compra.js';


import { sequelize } from '../config/database.js';


Cliente.init(sequelize);
Endereco.init(sequelize);
Produto.init(sequelize);
Compra.init(sequelize);


Cliente.hasOne(Endereco, {
    foreignKey: "clienteId", as: "endereco"
});

Endereco.belongsTo(Cliente, {
    foreignKey: "clienteId", as: "cliente"
});


Cliente.belongsToMany(Produto, {
    through: Compra,
    foreignKey: 'clienteId',
    otherKey: 'produtoId',
    as: 'produtos'
});

Produto.belongsToMany(Cliente, {
    through: Compra,
    foreignKey: 'produtoId',
    otherKey: 'clienteId',
    as: 'clientes'
});


Compra.belongsTo(Cliente, { foreignKey: 'clienteId' });
Compra.belongsTo(Produto, { foreignKey: 'produtoId' });

export {
    sequelize,
    Cliente,
    Endereco,
    Produto,
    Compra
};
