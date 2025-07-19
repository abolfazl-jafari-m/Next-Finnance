"use client";
import React from 'react';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Switch} from "@/components/ui/switch";
import {zodResolver} from "@hookform/resolvers/zod";
import {notificationSchemas} from "@/schemas/settings";
import {z} from "zod";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

function NotificationSettingForm() {
    const t = useTranslations("dashboard.settings.notification-tab");
    const form = useForm<z.infer<typeof notificationSchemas>>({
        resolver: zodResolver(notificationSchemas),
        defaultValues: {
            notification: false,
            email: false
        }
    })

    const handleNotificationSubmit = (data : z.infer<typeof notificationSchemas>) => {
            console.log(data);
    }
    return (
        <Form {...form}>
            <form className={"p-5 space-y-4"} onSubmit={form.handleSubmit(handleNotificationSubmit)}>
                <FormField control={form.control} render={({field}) => (
                    <FormItem className={"flex flex-row items-center justify-between"}>
                        <div className={"space-y-2"}>
                            <FormLabel>{t("enable-notif")}</FormLabel>
                            <FormDescription>{t("description-enable-notif")}</FormDescription>
                        </div>
                        <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange}/>
                        </FormControl>
                    </FormItem>
                )} name={"notification"}/>
                <Separator/>
                <FormField control={form.control} render={({field}) => (
                    <FormItem className={"flex flex-row items-center justify-between"}>
                        <div className={"space-y-2"}>
                            <FormLabel>{t("enable-email")}</FormLabel>
                            <FormDescription>{t("description-enable-email")}</FormDescription>
                        </div>
                        <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange}/>
                        </FormControl>
                    </FormItem>
                )} name={"email"}/>
                <Button type={"submit"} className={"mr-auto block"}>{t("save")}</Button>
            </form>
        </Form>
    );
}

export default NotificationSettingForm;