import { Produto } from "../models/produto.js";

class ProdutoService {
    static async findAll() {
        return await Produto.findAll();
    }

    static async findByPk(req) {
        const { id } = req.params;
        return await Produto.findByPk(id);
    }

    static async create(req) {
        const { nome, preco } = req.body;
        return await Produto.create({ nome, preco });
    }

    static async update(req) {
        const { id } = req.params;
        const { nome, preco } = req.body;

        let produto = await Produto.findByPk(id);
        if (!produto) throw new Error("Produto não encontrado");

        Object.assign(produto, { nome, preco });
        return await produto.save();
    }

    static async delete(req) {
        const { id } = req.params;

        let produto = await Produto.findByPk(id);
        if (!produto) throw new Error("Produto não encontrado");

        await produto.destroy();
        return { mensagem: "Produto removido com sucesso" };
    }
}

export { ProdutoService };
