"use client";
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {profileSchema} from "@/schemas/profile";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import AvatarUpload from "@/components/profile/avatar-upload/avatar-upload";
import {Separator} from "@/components/ui/separator";
import {useTranslations} from "next-intl";

function ProfileSettingsForm() {
    const t= useTranslations("dashboard.settings.profile-tab");
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: "",
            username: "",
            avatar: "",
        }
    });

    const handleSubmit = (data: z.infer<typeof profileSchema>) => {
        console.log(data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className={"space-y-4 p-5"}>
                    <AvatarUpload />
                <Separator />
                <div className={"space-y-2"}>
                    <FormField render={({field}) => (
                        <FormItem>
                            <FormLabel>{t("email")}</FormLabel>
                            <FormControl>
                                <Input {...field} className={"max-w-72"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"email"} control={form.control}/>
                    <Separator />
                    <FormField render={({field}) => (
                        <FormItem>
                            <FormLabel>{t("username")}</FormLabel>
                            <FormControl>
                                <Input {...field} className={"max-w-72"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"username"} control={form.control}/>
                </div>
                <Button type={"submit"} className={"w-fit block mr-auto"}>{t("save")}</Button>
            </form>
        </Form>
    );
}

export default ProfileSettingsForm;