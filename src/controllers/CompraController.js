import { CompraService } from "../services/CompraService.js";

class CompraController {
    static async findAll(req, res) {
        CompraService.findAll()
            .then(objs => res.json(objs))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async create(req, res) {
        CompraService.create(req)
            .then(obj => res.status(201).json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async findByCliente(req, res) {
        CompraService.findByCliente(req)
            .then(obj => res.json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }
}

export { CompraController };
