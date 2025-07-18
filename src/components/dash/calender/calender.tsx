"use client";
import React, {useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Calendar} from "@/components/ui/calendar";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";


function Calender({className , ...props}: React.ComponentProps<"div">) {
    const t = useTranslations("dashboard.mainPage.calender")
    const today =new Date();
    const  [month, setMonth] = useState(today) ;
    const goToday = ()=>{
        setMonth(today) ;
    }
    return (
        <Card className={className} {...props}>
            <CardContent>
                <Calendar className={"w-full"} month={month} onMonthChange={setMonth}/>
            </CardContent>
            <CardFooter>
                <Button variant={"default"} className={"w-full"} onClick={goToday}>{t("goToday")}</Button>
            </CardFooter>
        </Card>
    );
}

export default Calender;