import { z } from 'zod'

const requiredNameSchema = z
  .string()
  .trim()
  .min(1, 'Informe o nome.')

const companionSchema = z.object({
  name: requiredNameSchema,
  drinksAlcohol: z.boolean(),
})

export const rsvpSchema = z.object({
  name: requiredNameSchema,
  drinksAlcohol: z.boolean(),
  companions: z.array(companionSchema),
  message: z.string().trim().optional(),
})

export type RSVPFormData = z.infer<typeof rsvpSchema>