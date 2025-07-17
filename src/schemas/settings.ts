import {z} from "zod";


export const notificationSchemas = z.object({
    notification: z.boolean().default(false).optional(),
    email: z.boolean().default(false).optional(),
})

export const privacySchemas = z.object({
    newPassword: z.string().nonempty().min(6).refine((value) => /[A-Z]/.test(value))
        .refine((value) => /[^A-Za-z0-9]/.test(value))
    , confirmPassword:
        z.string().nonempty().min(6).refine((value) => /[A-Z]/.test(value))
            .refine((value) => /[^A-Za-z0-9]/.test(value))
    , email: z.string().nonempty().email()
    , twoFactorPassword: z.boolean().default(false).optional()
})