import React from 'react';
import BillsTable from "@/components/bills/bills-table/bills-table";
import {bills} from "@/interfaces/bills";
import {columns} from "@/components/bills/bills-table/columns";

function Page() {
    return (
        <div>
            <BillsTable columns={columns} data={bills} />
        </div>
    );
}

export default Page;