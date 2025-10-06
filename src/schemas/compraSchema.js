import { z } from "zod";

export const compraSchema = z.object({
    clienteId: z.number({ invalid_type_error: "clienteId deve ser um número" }).int().positive(),
    produtoId: z.number({ invalid_type_error: "produtoId deve ser um número" }).int().positive(),
    quantidade: z.number({ invalid_type_error: "quantidade deve ser um número" }).int().positive(),
    data: z.string().optional(),
});
