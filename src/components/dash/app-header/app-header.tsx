"use client";
import React from 'react';
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, ChevronsLeft} from "lucide-react";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(()=>import("@/components/dash/theme-toggle/theme-toggle") , {ssr: false});

function AppHeader() {
    return (
        <header
            className={"w-full sticky top-0 left-0 right-0 bg-background text-foreground   px-6 py-4.5 shadow-md shadow-neutral-300 dark:shadow-none   dark:bg-sidebar-accent flex items-center justify-between z-50"}>
            <div className={"flex items-center gap-x-3"}>
                <SidebarTrigger variant={"outline"} size={"lg"}/>
                <p className={"font-light"}>خوش امدی ابوالفضل</p>
                <ChevronsLeft />
                <span className={"text-foreground/50"}>{new Date(Date.now()).toLocaleDateString("fa", {
                    year: "2-digit",
                    month: "long",
                    day: "numeric"
                })}</span>
            </div>
            <div className={"flex items-center gap-x-5"}>
                <ThemeToggle />
                <Bell size={18}/>
            </div>

        </header>
    );
}

export default AppHeader;