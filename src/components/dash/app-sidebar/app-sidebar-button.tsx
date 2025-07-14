"use client";
import React, {ReactNode} from 'react';
import {SidebarMenuButton} from "@/components/ui/sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";

function AppSidebarButton({children , href}: {children: ReactNode , href: string}) {
    const pathname = usePathname();
    return (
        <SidebarMenuButton size={"lg"} asChild={true} isActive={href === pathname}>
            <Link href={href}>
                {children}
            </Link>
        </SidebarMenuButton>
    );
}

export default AppSidebarButton;