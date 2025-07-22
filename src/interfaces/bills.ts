export type Bill = {
    id: string;
    type: "آب" | "برق" | "گاز" | "تلفن" ;
    amount: number;
    dueDate: string;
    paid: boolean;
    trackingCode?: string;
    description?: string;
    createdAt: string;
}

export const bills: Bill[] = [
    {
        id: "1",
        type: "برق",
        amount: 120000,
        dueDate: "2025-07-20T00:00:00Z",
        paid: true,
        trackingCode: "BRK-784512",
        description: "قبض برق خرداد ماه"
    },
    {
        id: "2",
        type: "گاز",
        amount: 89000,
        dueDate: "2025-07-15T00:00:00Z",
        paid: false,
        description: "گاز منطقه 2"
    },
    {
        id: "3",
        type: "آب",
        amount: 56000,
        dueDate: "2025-07-18T00:00:00Z",
        paid: true,
        trackingCode: "AB-994120",
    },
    {
        id: "4",
        type: "تلفن",
        amount: 45000,
        dueDate: "2025-07-10T00:00:00Z",
        paid: false,
    }
]
