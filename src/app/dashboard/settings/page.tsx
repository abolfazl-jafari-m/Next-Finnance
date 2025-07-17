import React from 'react';
import SettingsTabs from "@/components/settings/settings-tabs/settings-tabs";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "تنظیمات"
}

function Page() {
    return (
        <div className={"p-5 space-y-5"}>
            <h2 className={"text-2xl font-semibold"}>تنظیمات</h2>
            <SettingsTabs/>
        </div>
    );
}

export default Page;