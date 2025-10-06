import { z } from 'zod';

export const clienteSchema = z.object({
    nome: z.string().min(2, "Nome do Cliente deve ter pelo menos 2 letras").max(50),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF do Cliente deve seguir o padrão NNN.NNN.NNN-NN"),
    nascimento: z.string().regex(/^\d{4}\-\d{2}\-\d{2}$/, "Nascimento deve seguir o padrão yyyy-MM-dd"),
});
