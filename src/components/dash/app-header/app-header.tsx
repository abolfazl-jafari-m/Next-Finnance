import React from 'react';
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, ChevronsLeft} from "lucide-react";
import SearchInput from "@/components/dash/serach-input/search-input";

function AppHeader() {
    return (
        <header
            className={"w-full sticky top-0 left-0 right-0 bg-neutral-50  px-6 py-4.5 shadow-md shadow-neutral-200 flex items-center justify-between z-50"}>
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
            <div className={"flex items-center gap-x-4"}>
                <Bell size={18}/>
                <SearchInput />
            </div>

        </header>
    );
}

export default AppHeader;