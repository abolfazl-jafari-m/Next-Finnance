"use client";
import React, {useState} from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchemas} from "@/schemas/auth";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {FiGithub} from "react-icons/fi";
import Link from "next/link";
import {PasswordInput} from "@/components/ui/password-input";
import {useTranslations} from "next-intl";
import {register} from "@/services/auth";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

function RegisterForm() {
    const t = useTranslations("register");
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const form = useForm<z.infer<typeof registerSchemas>>({
        resolver: zodResolver(registerSchemas),
        defaultValues: {
            email: "",
            password: "",
            phoneNumber: "",
            rePassword: "",
            username: ""
        }
    })
    const handleRegister = (data: z.infer<typeof registerSchemas>) => {
        setLoading(true);
        register(data)
            .then(() => {
                toast.success("ثبت نام با موفقیت انجام شد");
                setTimeout(() => {
                    router.push("/login")
                }, 1000)
            })
            .catch(() => {
                toast.error("خطایی رخ داده دوباره امتحان کنید")
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <Card className={"w-1/4 max-xl:w-1/3 max-lg:w-2/5 max-md:w-1/2 max-sm:w-3/4 pb-2 gap-5"}>
            <CardHeader>
                <CardTitle className={"text-center"}>{t("title")}</CardTitle>
            </CardHeader>
            <CardContent className={"px-3"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRegister)} className={"space-y-5"}>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder={t("usernamePlaceholder")} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"username"}/>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder={t("emailPlaceholder")} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"email"}/>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder={t("phonePlaceholder")} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"phoneNumber"}/>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInput placeholder={t("passwordPlaceholder")}  {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"password"}/>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInput placeholder={t("confirmPassPlaceholder")}  {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"rePassword"}/>
                        <Button className={"w-full"} type={"submit"}>{t("register")}</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className={"px-3 flex flex-col gap-y-2"}>
                <div className={"flex items-center gap-x-3 w-full"}>
                    <Button variant={"outline"} className={"flex-1/2"}><FcGoogle/></Button>
                    <Button variant={"outline"} className={"flex-1/2"}><FiGithub/></Button>
                </div>
                <Button variant={"link"} className={"p-1"} disabled={loading}>
                    <Link href={"/login"}>{t("alreadyHavingAccount")}</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default RegisterForm;