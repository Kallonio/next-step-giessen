import { z } from "zod";

export const seminarOptions = [
  "Excel für Einsteiger",
  "Bewerbung und Gehaltsverhandlung",
  "KI im Studium und Beruf",
  "Thesis mit System",
  "Steuerguide für Studium und Berufseinstieg",
  "Financial Education",
  "Allgemeine Anfrage",
] as const;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Bitte gib deinen Vor- und Nachnamen an.")
    .max(120, "Der Name ist zu lang."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  phone: z
    .string()
    .min(6, "Bitte gib eine Telefonnummer an.")
    .max(30, "Die Telefonnummer ist zu lang."),
  subject: z.string().max(150, "Das Thema ist zu lang."),
  interest: z.enum(seminarOptions),
  message: z
    .string()
    .min(20, "Bitte beschreibe dein Anliegen mit mindestens 20 Zeichen.")
    .max(2000, "Die Nachricht ist zu lang."),
  privacy: z.boolean().refine((value) => value, {
    message: "Bitte bestätige den Datenschutzhinweis.",
  }),
  company: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
