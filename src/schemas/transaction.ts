import {z} from "zod";

export const transactionSchema = z.object({
    title: z.string().nonempty("لطفا عنوان تراکنش را وارد کنید").min(3, "حداقل سه کارکتر"),
    amount: z.string().nonempty("فیلد مقدار الزامیست").regex(/^0*?[1-9]\d*$/, "فرمت صحیح عدد میباشد"),
    category: z.string().nonempty("لطفا دسته بندی را اتنخاب کنید"),
    transactionType: z.string().nonempty("لطفا نوع تراکنش خود را اتنخاب کنید"),
    note: z.string().nonempty("توضیح کوتاه درباره تراکنش خود بنویسید").min(10, "حداقل ده کارکتر").max(100, "حداکثر صد کاراکتر"),
})

