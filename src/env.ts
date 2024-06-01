import { z } from 'zod'

const envSchema = z.object({
  VITE_BASE_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
