import { z } from "zod"

export const participantSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
})

export type Participant = z.infer<typeof participantSchema>

export const settingsSchema = z.object({
  rotationInterval: z.number().min(1, "L'intervalle doit être d'au moins 1 jour"),
  startDate: z.date(),
})

export type Settings = z.infer<typeof settingsSchema>

export type ParticipantWithDate = Participant & { participationDate: Date }

