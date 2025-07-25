import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/assets/images/Logo.svg"

import {
    BadgeDollarSign,
    BanknoteArrowUp,
    LayoutDashboard,
    Settings,
    Wallet
} from "lucide-react";
import AppSidebarButton from "@/components/dash/app-sidebar/app-sidebar-button";
import UserActions from "@/components/dash/user-actions/user-actions";
import {useTranslations} from "next-intl";


function AppSidebar() {
    const t = useTranslations("dashboard.sidebar")
    return (
        <Sidebar side={"right"}>
            <SidebarHeader className={"flex items-center justify-center flex-row p-4 gap-x-4 text-white bg-teal-950"}>
                <Image src={logo.src} alt={"logo"} width={32} height={32}
                       className={"bg-white p-1.5 rounded-md shadow-black shadow-md"}/>
                <h1 className={"font-bold text-lg"}>{t("title")}</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard"}>
                                    <LayoutDashboard/>
                                    <span>{t("dashboard")}</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/transactions"}>
                                    <BadgeDollarSign/>
                                    <span>{t("transactions")}</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/bills"}>
                                    <BanknoteArrowUp/>
                                    <span>{t("bills")}</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/wallet"}>
                                    <Wallet/>
                                    <span>{t("wallet")}</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/settings"}>
                                    <Settings/>
                                    <span>{t("settings")}</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className={"py-4"}>
               <UserActions />
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;