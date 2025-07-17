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
import {toast} from "sonner";
import {Bell} from "lucide-react";

function NotificationSettingForm() {
    const form = useForm<z.infer<typeof notificationSchemas>>({
        resolver: zodResolver(notificationSchemas),
        defaultValues: {
            notification: false,
            email: false
        }
    })

    const handleNotificationSubmit = (data : z.infer<typeof notificationSchemas>) => {
            toast.success("well Done", {
                position: "top-left",
                description : "Notification Settings",
               richColors : true,
                icon : <Bell size={16}/>
            })
        toast(JSON.stringify(data, null, 2));
    }
    return (
        <Form {...form}>
            <form className={"p-5 space-y-4"} onSubmit={form.handleSubmit(handleNotificationSubmit)}>
                <FormField control={form.control} render={({field}) => (
                    <FormItem className={"flex flex-row items-center justify-between"}>
                        <div className={"space-y-2"}>
                            <FormLabel>روشن کردن اعلان ها</FormLabel>
                            <FormDescription>دریافت اعلان ها از اپ بر روی ویندوز</FormDescription>
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
                            <FormLabel>دریافت ایمیل</FormLabel>
                            <FormDescription>دریافت اعلان ها بر روی ایمیل خود</FormDescription>
                        </div>
                        <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange}/>
                        </FormControl>
                    </FormItem>
                )} name={"email"}/>
                <Button type={"submit"} className={"mr-auto block"}>ذخیره</Button>
            </form>
        </Form>
    );
}

export default NotificationSettingForm;