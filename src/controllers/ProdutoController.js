import { ProdutoService } from "../services/ProdutoService.js";

class ProdutoController {
    static async findAll(req, res) {
        ProdutoService.findAll()
            .then(objs => res.json(objs))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async findByPk(req, res) {
        ProdutoService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async create(req, res) {
        ProdutoService.create(req)
            .then(obj => res.status(201).json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async update(req, res) {
        ProdutoService.update(req)
            .then(obj => res.json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async delete(req, res) {
        ProdutoService.delete(req)
            .then(msg => res.json(msg))
            .catch(err => res.status(400).json({ erro: err.message }));
    }
}

export { ProdutoController };
