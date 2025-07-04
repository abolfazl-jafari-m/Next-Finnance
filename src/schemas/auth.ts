import {z} from "zod";

export const loginSchemas = z.object({
    email: z.string().nonempty().email(),
    password: z.string().nonempty()
})

export const registerSchemas = z.object({
    username: z.string().nonempty().min(3),
    email: z.string().nonempty().email(),
    password: z.string().nonempty().min(6)
        .refine((value) => /[A-Z]/.test(value))
        .refine((value) => /[^A-Za-z0-9]/.test(value))
    ,
    rePassword: z.string().nonempty().min(6)
        .refine((value) => /[A-Z]/.test(value))
        .refine((value) => /[^A-Za-z0-9]/.test(value))
    ,
    phone: z.string().nonempty().regex(/^(\+98|0)?9\d{9}$/)
}).superRefine(((data, ctx) => {
    if (data.password !== data.rePassword) {
        ctx.addIssue({
            code: "custom",
            message: "passwords doesnt match",
            path: ["rePassword"]
        })
    }
}))