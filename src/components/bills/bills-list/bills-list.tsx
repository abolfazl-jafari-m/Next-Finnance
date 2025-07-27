import React from 'react';
import {Bill} from "@/interfaces/bills";
import BillsListItem from "@/components/bills/bills-list-item/bills-list-item";
import {Button} from "@/components/ui/button";

function BillsList({bills}: { bills: Bill[] }) {
    return (
        bills?.length > 0 ?
            bills.map((bill: Bill) => <BillsListItem bill={bill} key={bill.id}/>)
            :
            <div className={"flex items-center flex-col gap-y-2 mt-2"}>
                <p className={"text-center text-lg"}>قبضی برای پرداخت کردن ندارید</p>
                <Button variant={"outline"} size={"sm"}>مشاهده چزییات</Button>
            </div>

    );
}

export default BillsList;