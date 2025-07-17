import type {Metadata} from "next";
import "./globals.css";
// import {poppins} from "@/styles/fonts/fonts";
import React from "react";
import {vazir} from "@/styles/fonts/fonts";
import NextThemeProvider from "@/components/providers/next-theme-provider";


export const metadata: Metadata = {
    title: "دستیار مالی ان وی",
    description: "Finance App For Managing Your Money",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" suppressHydrationWarning={true}>
        <body dir="rtl"
              cz-shortcut-listen="true"
              className={`antialiased ${vazir.className}`}
        >
        <NextThemeProvider defaultTheme={"system"} enableSystem={true} disableTransitionOnChange={true}
                           attribute={"class"}>
            {children}
        </NextThemeProvider>
        </body>
        </html>
    );
}
