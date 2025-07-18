"use client";
import React, {Dispatch} from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {transactionSchema} from "@/schemas/transaction";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Transaction} from "@/interfaces/transactions";
import {useTranslations} from "next-intl";


function TransactionForm({transaction, setOpen} : {transaction ?: Transaction, setOpen  : Dispatch<React.SetStateAction<boolean>>}) {
    const t= useTranslations("dashboard.transactions.addTransaction.transaction-form");
    const form = useForm<z.infer<typeof transactionSchema>>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            title:transaction ? transaction.title :"",
            amount: transaction ? transaction.amount : "",
            category: transaction ? transaction.category :"",
            type:transaction ? transaction.type : "",
            note: transaction ?  transaction.note :"",
        }
    })

    const handleTransactionSubmit = (data: z.infer<typeof transactionSchema>) => {
        console.log(data);
        setOpen(false)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleTransactionSubmit)} className={"flex flex-col gap-y-2"}>
                <FormField control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("title")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("titlePlaceholder")} {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"title"}/>
                <FormField control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("amount")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("amountPlaceholder")} {...field} />
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
                                        <SelectValue placeholder={t("typePlaceholder")}/>
                                    </SelectTrigger>
                                    <SelectContent side={"bottom"} align={"start"}>
                                        <SelectItem value={"income"}>{t("income")}</SelectItem>
                                        <SelectItem value={"outcome"}>{t("outcome")}</SelectItem>
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
                                        <SelectValue placeholder={t("categoryPlaceholder")}/>
                                    </SelectTrigger>
                                    <SelectContent side={"bottom"} align={"start"}>
                                        <SelectItem value={"rent"}>{t("rent")}</SelectItem>
                                        <SelectItem value={"shopping"}>{t("shopping")}</SelectItem>
                                        <SelectItem value={"enjoyment"}>{t("enjoyment")}</SelectItem>
                                        <SelectItem value={"food"}>{t("food")}</SelectItem>
                                        <SelectItem value={"others"}>{t("others")}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} name={"category"}/>
                </div>
                <FormField render={({field}) => (
                    <FormItem>
                        <FormLabel>{t("note")}</FormLabel>
                        <FormControl>
                            <Textarea placeholder={t("notePlaceholder")} {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} name={"note"} control={form.control}/>
                <Button>{t("save")}</Button>
            </form>
        </Form>
    );
}

export default TransactionForm;