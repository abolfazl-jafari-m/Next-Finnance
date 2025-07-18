"use client";
import React, {useState} from 'react';
import Image from "next/image";
import logo from "@/assets/images/Logo.svg"
import {Button} from "@/components/ui/button";
import {Loader2Icon} from "lucide-react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

function Logo() {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const t = useTranslations("onboarding");
    const handleStart = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/login");
        }, 2000)
    }
    return (
        <div className={"flex flex-col items-center justify-center gap-y-6"}>
            <Image src={logo.src} alt={"logo"} width={128} height={128}
                   className={"bg-white/80 p-2 rounded-md shadow-md shadow-black"}/>
            <h1 className={"text-4xl font-bold text-white"}>{t("title")}</h1>
            <Button size={"lg"} className={"cursor-pointer disabled:opacity-80"} onClick={handleStart} disabled={loading}>
                {
                    loading ? (
                            <>
                                <Loader2Icon className={"animate-spin"}/>
                                {t("please-wait")}
                            </>
                        )
                        :
                        <>
                            {t("start")}
                        </>
                }
            </Button>
        </div>
    );
}

export default Logo;