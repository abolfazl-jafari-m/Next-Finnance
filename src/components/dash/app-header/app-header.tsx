"use client";
import React from 'react';
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, ChevronsLeft} from "lucide-react";
import dynamic from "next/dynamic";
import {useAccountInfoStore} from "@/lib/providers/AccountInfoProvider";

const ThemeToggle = dynamic(() => import("@/components/dash/theme-toggle/theme-toggle"), {ssr: false});

function AppHeader() {
    const user = useAccountInfoStore(state => state.user);
    return (
        <header
            className={"w-full sticky top-0 left-0 right-0 bg-background text-foreground   px-6 max-sm:px-3 py-4.5 shadow-md shadow-neutral-300 dark:shadow-none   dark:bg-sidebar-accent flex items-center justify-between z-50"}>
            <div className={"flex items-center gap-x-3 max-sm:gap-x-1"}>
                <SidebarTrigger variant={"outline"} size={"icon"}/>
                <p className={"font-light text-sm"}> خوش امدی {user ? user.username : "Guest"}</p>
                <ChevronsLeft/>
                <span className={"text-foreground/50 max-sm:text-sm"}>{new Date(Date.now()).toLocaleDateString("fa", {
                    year: "2-digit",
                    month: "long",
                    day: "numeric"
                })}</span>
            </div>
            <div className={"flex items-center gap-x-5 max-sm:gap-x-3"}>
                <ThemeToggle/>
                <Bell size={18}/>
            </div>

        </header>
    );
}

export default AppHeader;