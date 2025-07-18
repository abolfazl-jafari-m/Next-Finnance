"use client";
import React from 'react';
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

function RegisterForm() {
    const t = useTranslations("register");
    const form = useForm<z.infer<typeof registerSchemas>>({
        resolver: zodResolver(registerSchemas),
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            rePassword: "",
            username: ""
        }
    })
    const handleRegister = (data: z.infer<typeof registerSchemas>) => {
        console.log(data);
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
                        )} name={"phone"}/>
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
                        <Button className={"w-full"} type={"submit"}> ثبت نام</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className={"px-3 flex flex-col gap-y-2"}>
                <div className={"flex items-center gap-x-3 w-full"}>
                    <Button variant={"outline"} className={"flex-1/2"}><FcGoogle/></Button>
                    <Button variant={"outline"} className={"flex-1/2"}><FiGithub/></Button>
                </div>
                <Button variant={"link"} className={"p-1"}>
                    <Link href={"/login"}>قبلا ثبت نام کردید؟</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default RegisterForm;