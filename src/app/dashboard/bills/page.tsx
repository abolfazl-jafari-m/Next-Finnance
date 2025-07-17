import React from 'react';
import BillsTable from "@/components/bills/bills-table/bills-table";
import {bills} from "@/interfaces/bills";
import {columns} from "@/components/bills/bills-table/columns";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "قبض ها"
}

function Page() {
    return (
        <main>
            <BillsTable columns={columns} data={bills}/>
        </main>
    );
}

export default Page;