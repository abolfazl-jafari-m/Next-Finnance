"use client";
import React from 'react';
import {ThemeProvider} from "next-themes";
function NextThemeProvider({children , ...props}  : React.ComponentProps<typeof  ThemeProvider>) {
    return (
        <ThemeProvider {...props}>
            {children}
        </ThemeProvider>
    );
}

export default NextThemeProvider;