"use client";
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {REGEXP_ONLY_DIGITS} from "input-otp";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {otpSchema} from "@/schemas/auth";
import dynamic from "next/dynamic";
const CountdownOtp = dynamic(()=>import("@/components/auth/countdown-otp/countdown-otp") , {ssr: false});

function OtpForm() {
    const form = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: ""
        }
    });
    const handleSubmit = (data: z.infer<typeof otpSchema>) => {
        console.log(data);
    }
    return (
        <Card className={"w-1/4 max-xl:w-1/3 max-lg:w-2/5 max-md:w-1/2 max-sm:w-3/4 pb-5 gap-5"}>
            <CardHeader>
                <CardTitle className={"text-center"}>تایید دو مرحله ای</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className={"space-y-2"} onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField render={({field}) => (
                            <FormItem>
                                <FormDescription className={"text-center line-clamp-2"}>
                                    رمز یک بار مصرف ارسال شده به موبایل خود را وارد کنید
                                </FormDescription>
                                <FormControl>
                                    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                                        <InputOTPGroup dir={"ltr"} className={"mx-auto"}>
                                            <InputOTPSlot index={0}/>
                                            <InputOTPSlot index={1}/>
                                            <InputOTPSlot index={2}/>
                                            <InputOTPSlot index={3}/>
                                            <InputOTPSlot index={4}/>
                                            <InputOTPSlot index={5}/>
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <CountdownOtp target={30}/>
                                <FormMessage className={"text-xs"}/>
                            </FormItem>
                        )} name={"otp"} control={form.control}/>
                        <Button type={"submit"}>
                            تایید و ورود
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default OtpForm;