import type {Metadata} from "next";
import "./globals.css";
// import {poppins} from "@/styles/fonts/fonts";
import React from "react";
import {vazir} from "@/styles/fonts/fonts";
import NextThemeProvider from "@/components/providers/next-theme-provider";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";


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
            <NextThemeProvider defaultTheme={"system"} enableSystem={true} disableTransitionOnChange={true}
                               attribute={"class"}>
                {children}
            </NextThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
