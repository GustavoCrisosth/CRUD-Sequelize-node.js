import { produtoSchema } from "../schemas/produtoSchema.js";

export function validarProduto(req, res, next) {
    try {
        produtoSchema.parse(req.body);
        next();
    } catch (e) {
        if (e.errors && Array.isArray(e.errors)) {
            return res.status(400).json({ erro: e.errors.map(err => err.message).join(", ") });
        }

        return res.status(500).json({ erro: e.message || 'Erro interno do servidor' });
    }
}

