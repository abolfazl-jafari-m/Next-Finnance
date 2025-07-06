import React, {ReactNode} from 'react';
import AppSidebar from "@/components/dash/app-sidebar/app-sidebar";
import AppHeader from "@/components/dash/app-header/app-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";

function Layout({children}: { children: ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <AppHeader/>
                </SidebarInset>
                {children}
            </SidebarProvider>
        </div>
    );
}

export default Layout;