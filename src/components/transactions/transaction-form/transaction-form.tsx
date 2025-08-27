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
import {addTransaction, updateTransaction} from "@/services/transaction";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";


function TransactionForm({transaction, setOpen}: {
    transaction?: Transaction,
    setOpen: Dispatch<React.SetStateAction<boolean>>
}) {
    const t = useTranslations("dashboard.transactions.addTransaction.transaction-form");


    const queryClient = useQueryClient();
    const {mutate: createTransaction, isPending} = useMutation({
        mutationKey: ["addTransaction"],
        mutationFn: addTransaction,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["transactions"]});
            toast.success(t("success-add-message"))
        },
        onError: () => toast.error(t("fail-message")),
        onSettled: () => setOpen(false)
    })

    const {mutate: editTransaction, isPending: isPendingUpdate} = useMutation({
        mutationKey: ["editTransaction"],
        mutationFn: ({id , transaction} : {id :string , transaction : Omit<Transaction, "id" | "createdAt">})=>updateTransaction(id , transaction),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["transactions"]});
            toast.success(t("success-edit-message"))
        },
        onError: () => toast.error(t("fail-message")),
        onSettled: () => setOpen(false)
    })


    const form = useForm<z.infer<typeof transactionSchema>>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            title: transaction ? transaction.title : "",
            amount: transaction ? transaction.amount : "",
            category: transaction ? transaction.category : "",
            transactionType: transaction ? transaction.transactionType : "",
            note: transaction ? transaction.note : "",
        }
    })

    const handleTransactionSubmit = (data: z.infer<typeof transactionSchema>) => {
        console.log(data);
        if (!transaction) {
            createTransaction(data)
        } else {
            editTransaction({id: transaction.id, transaction: data})
        }

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
                    )} name={"transactionType"}/>
                    <FormField control={form.control} render={({field}) => (
                        <FormItem className={"flex-1/2"}>
                            <FormControl>
                                <Select dir={"rtl"} onValueChange={field.onChange} defaultValue={field.value}>
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
                <Button disabled={isPending || isPendingUpdate}>{t("save")}</Button>
            </form>
        </Form>
    );
}

export default TransactionForm;