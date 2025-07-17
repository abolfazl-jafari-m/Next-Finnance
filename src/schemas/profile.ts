import {z} from "zod";

export const profileSchema = z.object({
    username: z.string().nonempty(),
    email: z.string().nonempty().email(),
    avatar : z.string().nonempty(),
})