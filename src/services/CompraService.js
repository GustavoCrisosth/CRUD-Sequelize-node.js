import { Compra } from "../models/compra.js";
import { Cliente } from "../models/cliente.js";
import { Produto } from "../models/produto.js";

class CompraService {

    static async findAll() {
        return await Compra.findAll({
            include: [
                { model: Cliente, as: 'cliente' },
                { model: Produto, as: 'produto' }
            ]
        });
    }

    static async create(req) {
        const { clienteId, produtoId, quantidade, data } = req.body;


        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) throw new Error("Cliente não encontrado");

        const produto = await Produto.findByPk(produtoId);
        if (!produto) throw new Error("Produto não encontrado");

        return await Compra.create({ clienteId, produtoId, quantidade, data });
    }

    static async findByCliente(req) {
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id, {
            include: [
                {
                    model: Produto,
                    as: "produtos",
                    through: { attributes: ['quantidade', 'data'] }
                }
            ]
        });

        if (!cliente) throw new Error("Cliente não encontrado");

        return cliente;
    }
}

export { CompraService };
