import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {vazir} from "@/styles/fonts/fonts";
import NextThemeProvider from "@/components/providers/next-theme-provider";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";
import {Toaster} from "@/components/ui/sonner";
import ReactQueryClientProvider from "@/lib/providers/ReactQueryClientProvider";
import {AccountInfoProvider} from "@/lib/providers/AccountInfoProvider";


export const metadata: Metadata = {
    title: "دستیار مالی ان وی",
    description: "Finance App For Managing Your Money",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    return (
        <html lang={locale} suppressHydrationWarning={true}>
        <body dir="rtl"
              cz-shortcut-listen="true"
              className={`antialiased ${vazir.className}`}
        >
        <NextIntlClientProvider>
            <ReactQueryClientProvider>
                <AccountInfoProvider>
                    <NextThemeProvider defaultTheme={"dark"}
                                       attribute={"class"}>
                        {children}
                        <Toaster richColors={true} position={"top-left"} expand={true} dir={"rtl"}/>
                    </NextThemeProvider>
                </AccountInfoProvider>
            </ReactQueryClientProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
