import React, {ReactNode} from 'react';
import AppSidebar from "@/components/dash/app-sidebar/app-sidebar";
import AppHeader from "@/components/dash/app-header/app-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {Metadata} from "next";

export const metadata : Metadata = {
    title : "داشبورد"
}


function Layout({children}: { children: ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <AppHeader/>
                    {children}

                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}

export default Layout;