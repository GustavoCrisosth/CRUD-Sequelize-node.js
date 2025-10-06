import { Endereco } from "../models/endereco.js";

class EnderecoService {
    static async findAll() {
        return await Endereco.findAll();
    }

    static async findByPk(req) {
        const { id } = req.params;
        return await Endereco.findByPk(id);
    }

    static async findByCliente(clienteId) {
        return await Endereco.findAll({ where: { clienteId } });
    }

    static async create(req) {
        const { rua, cidade, estado, clienteId } = req.body;
        return await Endereco.create({ rua, cidade, estado, clienteId });
    }

    static async update(req) {
        const { id } = req.params;
        const { rua, cidade, estado } = req.body;

        let endereco = await Endereco.findByPk(id);
        if (!endereco) throw new Error("Endereço não encontrado");

        Object.assign(endereco, { rua, cidade, estado });
        return await endereco.save();
    }

    static async delete(req) {
        const { id } = req.params;

        let endereco = await Endereco.findByPk(id);
        if (!endereco) throw new Error("Endereço não encontrado");

        await endereco.destroy();
        return { mensagem: "Endereço removido com sucesso" };
    }
}

export { EnderecoService };
