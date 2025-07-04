import type {Metadata} from "next";
import "./globals.css";
// import {poppins} from "@/styles/fonts/fonts";
import React from "react";
import {vazir} from "@/styles/fonts/fonts";


export const metadata: Metadata = {
    title: "NV Finance",
    description: "Finance App For Managing Your Money",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            cz-shortcut-listen="true"
            className={`antialiased ${vazir.className}`}
        >
        {children}
        </body>
        </html>
    );
}
