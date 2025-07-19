"use client";
import React from 'react';
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {privacySchemas} from "@/schemas/settings";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

function PrivacySettingsForm() {
    const t= useTranslations("dashboard.settings.privacy-tab");
    const form = useForm<z.infer<typeof privacySchemas>>({
        resolver: zodResolver(privacySchemas),
        defaultValues: {
            confirmPassword: "",
            newPassword: "",
            email: ""
        }
    })

    const handlePrivacySettings = (data : z.infer<typeof privacySchemas>) => {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form className={"space-y-5 p-5"} onSubmit={form.handleSubmit(handlePrivacySettings)}>
                <FormField render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("password")}</FormLabel>
                        <FormControl>
                            <Input {...field} className={"max-w-72"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"newPassword"} control={form.control}/>
                <Separator/>
                <FormField render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("confirm-pass")}</FormLabel>
                        <FormControl>
                            <Input {...field} className={"max-w-72"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"confirmPassword"} control={form.control}/>
                <Separator/>
                <FormField render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("email")}</FormLabel>
                        <FormControl>
                            <Input {...field} className={"max-w-72"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"email"} control={form.control}/>
                <Separator/>
                <FormField render={({field}) => (
                    <FormItem className={"flex items-center justify-between"}>
                        <div className={"space-y-2"}>
                            <FormLabel>{t("two-factor")}</FormLabel>
                            <FormDescription>{t("description-two-factor")}</FormDescription>
                        </div>
                        <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange}/>
                        </FormControl>
                    </FormItem>
                )} name={"twoFactorPassword"} control={form.control}/>
                <Button type={"submit"} className={"mr-auto block"}>{t("save")}</Button>
            </form>
        </Form>
    );
}

export default PrivacySettingsForm;