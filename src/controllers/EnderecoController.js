import { EnderecoService } from "../services/EnderecoService.js";

class EnderecoController {
    static async findAll(req, res) {
        EnderecoService.findAll()
            .then(objs => res.json(objs))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async findByPk(req, res) {
        EnderecoService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async create(req, res) {
        EnderecoService.create(req)
            .then(obj => res.status(201).json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async update(req, res) {
        EnderecoService.update(req)
            .then(obj => res.json(obj))
            .catch(err => res.status(400).json({ erro: err.message }));
    }

    static async delete(req, res) {
        EnderecoService.delete(req)
            .then(msg => res.json(msg))
            .catch(err => res.status(400).json({ erro: err.message }));
    }
}

export { EnderecoController };
