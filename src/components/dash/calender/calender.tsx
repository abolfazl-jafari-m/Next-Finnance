"use client";
import React, {useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Calendar} from "@/components/ui/calendar";
import {Button} from "@/components/ui/button";


function Calender() {
    const today =new Date();
    const  [month, setMonth] = useState(today) ;
    const goToday = ()=>{
        setMonth(today) ;
    }
    return (
        <Card className={"w-full row-start-1 row-end-3 "}>
            <CardContent>
                <Calendar className={"w-full"} month={month} onMonthChange={setMonth}/>
            </CardContent>
            <CardFooter>
                <Button variant={"default"} className={"w-full"} onClick={goToday}>برو به امروز</Button>
            </CardFooter>
        </Card>
    );
}

export default Calender;