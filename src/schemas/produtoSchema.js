import { z } from "zod";

export const produtoSchema = z.object({
    nome: z.string()
        .min(2, "Nome do produto deve ter pelo menos 2 caracteres")
        .max(100, "Nome do produto deve ter no máximo 100 caracteres"),

    preco: z.number({ invalid_type_error: "Preço deve ser um número" })
        .positive("Preço deve ser maior que zero"),
});
