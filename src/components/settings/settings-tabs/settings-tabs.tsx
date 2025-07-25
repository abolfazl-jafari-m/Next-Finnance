"use client";
import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import NotificationSettingForm from "@/components/settings/notification-settings-from/notification-setting-form";
import PrivacySettingsForm from "@/components/settings/privacy-setting-form/privacy-settings-form";
import ProfileSettingsForm from '@/components/profile/profile-settings-form/profile-settings-form';
import {useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";

function SettingsTabs() {
    const t = useTranslations("dashboard.settings")
    const searchParams = useSearchParams();
    const router = useRouter();
    return (
        <Card>
            <CardContent className={"min-h-64 max-md:min-h-fit"}>
                <Tabs onValueChange={(value)=>router.push(`/dashboard/settings?tab=${value}`)} defaultValue={searchParams.get("tab") ?? "notification"} orientation={"vertical"}
                      className={"flex-row max-sm:flex-col items-start h-full"}
                      dir={"rtl"}>
                    <TabsList className={"flex-col max-sm:flex-row h-fit items-stretch  w-44 max-sm:w-fit"}>
                        <TabsTrigger value={"notification"}>{t("notification")}</TabsTrigger>
                        <TabsTrigger value={"privacy"}>{t("privacy")}</TabsTrigger>
                        <TabsTrigger value={"profile"}>{t("profile")}</TabsTrigger>
                    </TabsList>
                    <TabsContent value={"notification"} className={"max-sm:w-full"}>
                        <NotificationSettingForm/>
                    </TabsContent>
                    <TabsContent value={"privacy"} className={"max-sm:w-full"}>
                        <PrivacySettingsForm/>
                    </TabsContent>
                    <TabsContent value={"profile"} className={"max-sm:w-full"}>
                        <ProfileSettingsForm/>
                    </TabsContent>

                </Tabs>
            </CardContent>
        </Card>
    );
}

export default SettingsTabs;