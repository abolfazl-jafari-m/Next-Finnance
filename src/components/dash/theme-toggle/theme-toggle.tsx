"use client";
import React from 'react';
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";
import {Switch} from "@/components/ui/switch";

function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    return (
        <div className={"flex items-center gap-x-1"}>
            <Sun size={14}/>
            <Switch onClick={() => setTheme(theme !== "dark" ? "dark" : "light")} checked={theme === "dark"} className={"data-[state=checked]:bg-input"}/>
            <Moon size={14}/>
        </div>
    );
}

export default ThemeToggle;