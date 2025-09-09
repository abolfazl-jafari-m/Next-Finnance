import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import safe from "@/assets/images/safe-money-svgrepo-com.svg"
import lock from "@/assets/images/lock-svgrepo-com.svg"
import statistics from "@/assets/images/statistics-svgrepo-com.svg"
import Image from "next/image";

function Features() {
    return (
        <section className={"px-20 max-sm:px-5 py-5"}>
            <div className={"grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 w-3/4 max-xl:w-full mx-auto"}>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white hover:bg-linear-120 hover:scale-105 transition-all duration-300 cursor-pointer"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={safe.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg text-center"}>ساده، سریع و امن</p>
                    </CardContent>
                </Card>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white  hover:bg-linear-120 hover:scale-105 transition-all duration-300 cursor-pointer"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={statistics.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg text-center"}>گزارش‌های شفاف و لحظه‌ای</p>
                    </CardContent>
                </Card>
                <Card className={"bg-gradient-to-tr from-primary to-black text-white  hover:bg-linear-120 hover:scale-105 transition-all duration-300 cursor-pointer"}>
                    <CardContent className={"flex flex-col items-center gap-4"}>
                        <div className={"rounded-full bg-white size-24 p-3"}>
                            <Image src={lock.src} alt={"safe"} width={72} height={72}/>
                        </div>
                        <p className={"text-lg text-center"}>اطلاعات شما همیشه محفوظ می‌مونه</p>
                    </CardContent>
                </Card>
            </div>

        </section>
    );
}

export default Features;