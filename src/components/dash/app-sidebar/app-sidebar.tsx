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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {BiExit} from "react-icons/bi";
import {
    BadgeDollarSign,
    BanknoteArrowUp,
    EllipsisVertical,
    LayoutDashboard,
    Settings,
    Wallet
} from "lucide-react";
import AppSidebarButton from "@/components/dash/app-sidebar/app-sidebar-button";


function AppSidebar() {
    return (
        <Sidebar side={"right"}>
            <SidebarHeader className={"flex items-center justify-center flex-row p-4 gap-x-4 text-white bg-teal-950"}>
                <Image src={logo.src} alt={"logo"} width={32} height={32}
                       className={"bg-white p-1.5 rounded-md shadow-black shadow-md"}/>
                <h1 className={"font-bold text-lg"}>دستیار مالی ان وی</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard"}>
                                    <LayoutDashboard/>
                                    <span>داشبورد</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/transactions"}>
                                    <BadgeDollarSign/>
                                    <span>تراکنش ها</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/bills"}>
                                    <BanknoteArrowUp/>
                                    <span>قبض ها</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/wallet"}>
                                    <Wallet/>
                                    <span>کیف پول</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AppSidebarButton href={"/dashboard/settings"}>
                                    <Settings/>
                                    <span>تنظیمات</span>
                                </AppSidebarButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className={"py-4"}>
                <DropdownMenu dir={"rtl"}>
                    <DropdownMenuTrigger>
                        <Card
                            className={"rounded-sm  px-2 py-1.5 w-full flex items-center flex-row cursor-pointer justify-between "}>
                            <div className={"flex items-center gap-1"}>
                                <Avatar>
                                    <AvatarImage src={"https://github.com/shadcn.png"}/>
                                    <AvatarFallback>NV</AvatarFallback>
                                </Avatar>
                                <div className={"flex flex-col"}>
                                    <h3 className={"font-semibold text-sm"}>Abolfazl</h3>
                                    <p className={"text-xs"}>abolfazljafari563@gmail.com</p>
                                </div>
                            </div>
                            <EllipsisVertical size={14}/>
                        </Card>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side={"left"} align={"end"}>
                        <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>
                        <DropdownMenuItem>پروفایل</DropdownMenuItem>
                        <DropdownMenuItem>اعلان ها</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem variant={"destructive"}>
                            خروج
                            <DropdownMenuShortcut className={"ml-0 mr-auto"}><BiExit/></DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;