import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const persone = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/persone' }),
  schema: z.object({
    nome: z.string(),
    ruolo: z.string(),
    organizzazione: z.string(),
    bio: z.string(),
    foto: z.string().optional(),
    interno: z.boolean().default(false),
  }),
});

const incontri = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/incontri' }),
  schema: z
    .object({
      titolo: z.string(),
      formato: z.enum(['tavolo', 'ospite']),
      data: z.coerce.date().optional(),
      ora: z.string().optional(),
      luogo: z.string().optional(),
      stato: z.enum(['bozza', 'confermato', 'concluso']),
      posti: z.number().int().positive().optional(),
      relatori: z.array(reference('persone')).default([]),
      temi: z.array(z.string()).default([]),
      sintesi: z.string(),
    })
    .refine((i) => i.stato === 'bozza' || (i.data && i.ora && i.luogo), {
      message: 'Un incontro confermato o concluso deve avere data, ora e luogo.',
    }),
});

const note = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/note' }),
  schema: z.object({
    numero: z.number().int().positive(),
    titolo: z.string(),
    data: z.coerce.date(),
    sintesi: z.string(),
  }),
});

export const collections = { persone, incontri, note };
