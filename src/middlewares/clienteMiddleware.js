import { Cliente } from "../models/cliente.js";
import { clienteSchema } from "../schemas/clienteSchema.js";

export async function validarCliente(req, res, next) {
    try {
        clienteSchema.parse(req.body);

        if (req.method === "POST") {
            const existente = await Cliente.findOne({ where: { cpf: req.body.cpf } });
            if (existente) {
                return res.status(409).json({ erro: "Já existe um cliente com este CPF" });
            }
        }

        next();
    } catch (e) {
        if (e.errors && Array.isArray(e.errors)) {
            return res.status(400).json({ erro: e.errors.map(err => err.message).join(", ") });
        }

        return res.status(500).json({ erro: e.message || 'Erro interno do servidor' });
    }
}



export async function verificarClienteExiste(req, res, next) {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(parseInt(id));

    if (!cliente) {
        return res.status(404).json({ erro: "Cliente não encontrado" });
    }


    req.cliente = cliente;
    next();
}