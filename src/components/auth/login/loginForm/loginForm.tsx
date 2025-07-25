"use client";
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchemas} from "@/schemas/auth";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {FiGithub} from "react-icons/fi";
import Link from "next/link";
import {PasswordInput} from "@/components/ui/password-input";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {login} from "@/services/auth";
import {toast} from "sonner";
import {setCookie} from "cookies-next/client";


function LoginForm() {
    const t = useTranslations("login");
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const form = useForm<z.infer<typeof loginSchemas>>({
        resolver: zodResolver(loginSchemas),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const handleLogin = (data: z.infer<typeof loginSchemas>) => {
        setLoading(true);
        login(data)
            .then((res) => {
                toast.success("ورود موفقیت آمیز بود")
                setCookie("access-token", res.accessToken);
                router.push("/dashboard");
            })
            .catch((err) => {
                if (err.status === 401) {
                    toast.error("نام کاربری یا رمز عبور صحیح نمیباشد")
                } else {
                    toast.error("خطایی رخ داد.لطفن دوباره امتحان کنید")
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleGuess = () => {
        const accessToken = `guess-${Date.now()}`;
        setCookie("access-token", accessToken);
        router.push("/dashboard");
    }
    return (
        <Card className={"w-1/4 max-xl:w-1/3 max-lg:w-2/5 max-md:w-1/2 max-sm:w-3/4 pb-2 gap-5"}>
            <CardHeader>
                <CardTitle className={"text-center"}>{t("title")}</CardTitle>
            </CardHeader>
            <CardContent className={"px-3"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleLogin)} className={"space-y-5"}>
                        <FormField control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder={t("emailPlaceholder")} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={"email"}/> <FormField control={form.control} render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput placeholder={t("passwordPlaceholder")}  {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"password"}/>
                        <Button className={"w-full"} type={"submit"} disabled={loading}>{t("login")}</Button>
                        <Button className={"w-full"} type={"button"} disabled={loading} variant={"outline"}
                                onClick={handleGuess}>ورود به عنوان مهمان</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className={"px-3 flex flex-col gap-y-2"}>
                <div className={"flex items-center gap-x-3 w-full"}>
                    <Button variant={"outline"} className={"flex-1/2"}><FcGoogle/></Button>
                    <Button variant={"outline"} className={"flex-1/2"}><FiGithub/></Button>
                </div>
                <Button variant={"link"} className={"p-1"}>
                    <Link href={"/register"}>{t("notHavingAccount")}</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default LoginForm;