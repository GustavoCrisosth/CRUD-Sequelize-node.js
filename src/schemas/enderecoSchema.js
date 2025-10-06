import { z } from "zod";

export const enderecoSchema = z.object({
    rua: z.string()
        .min(2, "Rua deve ter pelo menos 2 caracteres")
        .max(100, "Rua deve ter no máximo 100 caracteres"),

    cidade: z.string()
        .min(2, "Cidade deve ter pelo menos 2 caracteres")
        .max(50, "Cidade deve ter no máximo 50 caracteres"),

    estado: z.string()
        .transform((val) => val.toUpperCase()).refine((v) => v.length === 2, {
            message: "Estado deve ter exatamente 2 letras (ex: SP, RJ)"
        })
});
