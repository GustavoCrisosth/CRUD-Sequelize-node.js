import { compraSchema } from "../schemas/compraSchema.js";

export function validarCompra(req, res, next) {
    try {
        compraSchema.parse(req.body);
        next();
    } catch (e) {
        if (e.errors && Array.isArray(e.errors)) {
            return res.status(400).json({ erro: e.errors.map(err => err.message).join(", ") });
        }

        return res.status(500).json({ erro: e.message || 'Erro interno do servidor' });
    }
}
