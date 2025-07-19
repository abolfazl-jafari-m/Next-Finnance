import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Pencil, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

function AvatarUpload() {
    const t= useTranslations("dashboard.settings.profile-tab");
    return (
        <div className={"space-y-5 flex items-center gap-6"}>
            <Avatar className={"size-24 overflow-visible"}>
                <AvatarImage src={"/images/avatar.png"}/>
                <AvatarFallback>
                    <User className={"size-18"}/>
                </AvatarFallback>
                <Button type={"button"} className={"absolute bottom-1 right-1 size-5 rounded-full p-1"} asChild={true}>
                    <Pencil />
                </Button>
            </Avatar>
            <div>
                <Button variant={"destructive"} size={"sm"} type={"button"}>{t("delete-avatar")}</Button>
            </div>
        </div>
    );
}

export default AvatarUpload;