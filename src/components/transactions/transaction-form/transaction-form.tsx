"use client";
import React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {transactionSchema} from "@/schemas/transaction";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";


function TransactionForm() {
    const form = useForm<z.infer<typeof transactionSchema>>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            title: "",
            amount: "",
            category: "",
            type: "",
            note: "",
        }
    })

    const handleAddTransaction = (data: z.infer<typeof transactionSchema>) => {
        console.log(data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddTransaction)} className={"flex flex-col gap-y-2"}>
                <FormField control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>عنوان</FormLabel>
                        <FormControl>
                            <Input placeholder={"عنوان تراکنش"} {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"title"}/>
                <FormField control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>مقدار</FormLabel>
                        <FormControl>
                            <Input placeholder={"مقدار تراکنش"} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"amount"}/>
                <div className={"flex items-center gap-x-4"}>
                    <FormField control={form.control} render={({field}) => (
                        <FormItem className={"flex-1/2"}>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value} dir={"rtl"}>
                                    <SelectTrigger className={"w-full"}>
                                        <SelectValue placeholder={"نوع تراکنش"}/>
                                    </SelectTrigger>
                                    <SelectContent side={"bottom"} align={"start"}>
                                        <SelectItem value={"income"}>درآمد</SelectItem>
                                        <SelectItem value={"outcome"}>مخارج</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"type"}/>
                    <FormField control={form.control} render={({field}) => (
                        <FormItem className={"flex-1/2"}>
                            <FormControl >
                                <Select dir={"rtl"} onValueChange={field.onChange} defaultValue={field.value} >
                                    <SelectTrigger className={"w-full"}>
                                        <SelectValue placeholder={"دسته بندی تراکنش"}/>
                                    </SelectTrigger>
                                    <SelectContent side={"bottom"} align={"start"}>
                                        <SelectItem value={"rent"}>اجاره</SelectItem>
                                        <SelectItem value={"shopping"}>خرید</SelectItem>
                                        <SelectItem value={"enjoyment"}>تفریح</SelectItem>
                                        <SelectItem value={"food"}>غذا</SelectItem>
                                        <SelectItem value={"others"}>سایر</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"category"}/>
                </div>
                <FormField render={({field}) => (
                    <FormItem>
                        <FormLabel>یادداشت</FormLabel>
                        <FormControl>
                            <Textarea placeholder={"توضیح کوتاه درباره تراکنش"} {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"note"} control={form.control}/>
                <Button>ذخیره</Button>
            </form>
        </Form>
    );
}

export default TransactionForm;