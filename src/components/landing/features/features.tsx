import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import safe from "@/assets/images/safe-money-svgrepo-com.svg"
import lock from "@/assets/images/lock-svgrepo-com.svg"
import statistics from "@/assets/images/statistics-svgrepo-com.svg"
import Image from "next/image";

function Features() {
    return (
        <section className={"px-20 py-5"}>
            <div className={"grid grid-cols-3 items-center gap-5 w-3/4 mx-auto"}>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={safe.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg"}>ساده، سریع و امن</p>
                    </CardContent>
                </Card>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={statistics.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg"}>گزارش‌های شفاف و لحظه‌ای</p>
                    </CardContent>
                </Card>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={lock.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg"}>اطلاعات شما همیشه محفوظ می‌مونه</p>
                    </CardContent>
                </Card>
            </div>

        </section>
    );
}

export default Features;