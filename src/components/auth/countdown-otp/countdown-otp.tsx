"use client";
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";


function CountdownOtp({target}: { target: number }) {
    const [countDown, setCountDown] = useState(target * 1000);
    const [expired, setExpired] = useState<boolean>(false);
    const timezone = new Date().getTimezoneOffset() * 60 * 1000;
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(prev => {
                if (prev > 1000) {
                    return prev - 1000
                } else {
                    clearInterval(interval);
                    setExpired(true);

                    return 0;
                }
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [expired]);

    const resendOpt = () => {
        setExpired(false);
        setCountDown(target * 1000);
    }
    return (
        <div className={"flex items-center justify-center gap-x-3"}>
            { !expired && new Date(countDown - timezone).toLocaleTimeString("fa", {minute: "2-digit", second: "2-digit"})}
            {expired && (
                <div className={"flex items-center gap-x-0.5"}>
                    <p className={"text-xs"}>کد را دریافت نکریده اید؟</p>
                    <Button variant={"link"} type={"button"} size={"sm"} onClick={resendOpt} className={"text-xs px-0"}>ارسال
                        دوباره</Button>
                </div>)
            }
        </div>
    )
        ;
}

export default CountdownOtp;