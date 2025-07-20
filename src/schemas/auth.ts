import {z} from "zod";

export const loginSchemas = z.object({
    email: z.string().nonempty({message: "لطفا ایمیل خود را وارد کنید"}).email("ایمیل وارد شده صحیح نمیباشد"),
    password: z.string().nonempty("لطفن رمز عبور خود را وارد کنید")
})

export const registerSchemas = z.object({
    username: z.string().nonempty("وارد کردن نام کاربری الزامیست").min(3, "حداقل سه کاراکتر وارد کنید"),
    email: z.string().nonempty("وارد کردن ایمیل الزامیست").email("فرمت ایمیل وارد شده صحیح نمیباشد"),
    password: z.string().nonempty("وارد کردن رمز عبور الزامیست").min(6, "حداقل شش  کاراکتر")
        .refine((value) => /[A-Z]/.test(value), "حداقل یک حرف بزرگ وارد کنید")
        .refine((value) => /[^A-Za-z0-9]/.test(value), "حداقل یک کاراکتر خاص وارد کنید")
    ,
    rePassword: z.string().nonempty("وارد کردن رمز عبور الزامیست").min(6, "حداقل شش  کاراکتر")
        .refine((value) => /[A-Z]/.test(value), "حداقل یک حرف بزرگ وارد کنید")
        .refine((value) => /[^A-Za-z0-9]/.test(value), "حداقل یک کاراکتر خاص وارد کنید")
    ,
    phoneNumber: z.string().nonempty("وارد کردن تلفن همراه الزامیست").regex(/^(\+98|0)?9\d{9}$/, "فرمت واردشده صحیح نمیباشد")
}).superRefine(((data, ctx) => {
    if (data.password !== data.rePassword) {
        ctx.addIssue({
            code: "custom",
            message: "لطفا در وارد کردن تکرار پسورد دقت کنید",
            path: ["rePassword"]
        })
    }
}))

export const otpSchema = z.object({
    otp: z.string().min(6, "لطفا رمز عبور شش رقمی ارسال شده را وارد کنید")

})