"use client"
import React, {ReactNode, useEffect} from 'react';
import AppSidebar from "@/components/dash/app-sidebar/app-sidebar";
import AppHeader from "@/components/dash/app-header/app-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {useQuery} from "@tanstack/react-query";
import {getAccountInfo, getUser} from "@/services/user";
import {getCookie} from "cookies-next/client";
import {useAccountInfoStore} from "@/lib/providers/AccountInfoProvider";
import Loading from "@/components/dash/loading/loading";


function Layout({children}: { children: ReactNode }) {
    const accessToken = getCookie("access-token");
    const setUserInfo = useAccountInfoStore(state => state.setUserInfo);
    const setAccount = useAccountInfoStore(state => state.setAccount);
    const {isLoading, data, isError} = useQuery({
        queryKey: ['accountInfos'],
        queryFn: async () => {
            const [userData, accountInfo] = await Promise.all([
                getUser(accessToken as string),
                getAccountInfo()
            ]);
            return {userData, accountInfo};
        },
        enabled: !!accessToken && !accessToken.startsWith("guest")
    })
    useEffect(() => {
        if (data) {
            setUserInfo(data.userData);
            setAccount(data.accountInfo.records)
        }
    }, [data]);

    if (isLoading) {
        return <Loading/>
    }
    if (isError) {
        throw new Error("Unable to load user info");
    }
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