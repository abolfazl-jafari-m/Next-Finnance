import {z} from "zod";

export const transactionSchema = z.object({
    title : z.string().nonempty().min(3),
    amount : z.string().nonempty().regex(/^0*?[1-9]\d*$/),
    category : z.string().nonempty(),
    type : z.string().nonempty(),
    note : z.string().nonempty().min(10).max(100),
})

