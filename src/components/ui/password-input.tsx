"use client";

import {cn} from "@/lib/utils"
import {EyeIcon, EyeOffIcon} from "lucide-react";
import React, {useState} from "react";

function PasswordInput({className, ...props}: React.ComponentProps<"input">) {
    const [showPass, setShowPass] = useState<boolean>(false);
    return (
        <div
            className={"flex items-center gap-x-2 h-9 has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-md border px-3 py-1 "}>
            <input
                type={showPass ? "text" :"password"}
                data-slot="input"
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                {...props}
            />
            <div onClick={()=>setShowPass(!showPass)} >
                {
                    showPass ?
                        <EyeOffIcon size={16}/>
                        :
                        <EyeIcon size={16}/>
                }

            </div>
        </div>
    )
}

export {PasswordInput}
