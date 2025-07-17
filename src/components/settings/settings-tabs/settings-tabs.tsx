"use client";
import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import NotificationSettingForm from "@/components/settings/notification-settings-from/notification-setting-form";
import PrivacySettingsForm from "@/components/settings/privacy-setting-form/privacy-settings-form";
import ProfileSettingsForm from '@/components/profile/profile-settings-form/profile-settings-form';
import {useSearchParams} from "next/navigation";

function SettingsTabs() {
    const searchParams = useSearchParams();
    return (
        <Card>
            <CardContent className={"min-h-64"}>
                <Tabs defaultValue={searchParams.get("tab") ?? "notification"} orientation={"vertical"}
                      className={"flex-row items-start h-full"}
                      dir={"rtl"}>
                    <TabsList className={"flex-col h-fit items-stretch  w-44"}>
                        <TabsTrigger value={"notification"}>اعلان ها</TabsTrigger>
                        <TabsTrigger value={"privacy"}>امنیت</TabsTrigger>
                        <TabsTrigger value={"profile"}>پروفایل</TabsTrigger>
                    </TabsList>
                    <TabsContent value={"notification"}>
                        <NotificationSettingForm/>
                    </TabsContent>
                    <TabsContent value={"privacy"}>
                        <PrivacySettingsForm/>
                    </TabsContent>
                    <TabsContent value={"profile"}>
                        <ProfileSettingsForm/>
                    </TabsContent>

                </Tabs>
            </CardContent>
        </Card>
    );
}

export default SettingsTabs;