import { Cliente } from "../models/cliente.js";
import { Endereco } from '../models/endereco.js';

class ClienteService {

    static async findAll(req, res) {
        const objs = await Cliente.findAll();

        return objs;
    }

    static async findByPk(req, res) {
        const { id } = req.params;
        const obj = await Cliente.findByPk(parseInt(id));
        return obj;
    }

    static async findClienteComEndereco(id) {

        const cliente = await Cliente.findByPk(id, {
            include: {
                model: Endereco,
                as: "endereco",
            },
        });

        if (!cliente) throw new Error("Cliente não encontrado");

        return cliente;
    }

    static async create(req, res) {
        const { nome, cpf, nascimento } = req.body;
        const obj = await Cliente.create({ nome, cpf, nascimento });
        return obj;
    }

    static async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, nascimento } = req.body;
        var obj = await Cliente.findOne({ where: { id: id } });
        Object.assign(obj, { nome, cpf, nascimento });
        obj = await obj.save();
        return obj;
    }

    static async delete(req, res) {
        const { id } = req.params;
        var obj = await Cliente.findByPk(parseInt(id));
        obj = await obj.destroy();
        return obj;
    }

}

export { ClienteService };