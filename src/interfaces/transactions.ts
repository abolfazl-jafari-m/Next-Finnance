type TransactionType = "income" | "outcome";

export interface Transaction  {
    id: string;
    type: TransactionType;
    title: string;
    amount: string;
    category: string;
    date: string;
    note?: string;
    balanceAfter?: number;
}

export const transactions: Transaction[] = [
    {
        id: "trx-002",
        type: "outcome",
        title: "اجاره خانه",
        amount: "6000000",
        category: "rent",
        date: "2025-07-02T12:00:00.000Z",
        note: "اجاره تیرماه",
        balanceAfter: 9000000,
    },
    {
        id: "trx-001",
        type: "income",
        title: "حقوق تیر",
        amount: "15000000",
        category: "salary",
        date: "2025-07-01T09:00:00.000Z",
        note: "واریز ماهانه شرکت",
        balanceAfter: 15000000,
    },
    {
        id: "trx-003",
        type: "outcome",
        title: "خرید اینترنت",
        amount: "250000",
        category: "utilities",
        date: "2025-07-03T08:30:00.000Z",
        balanceAfter: 8750000,
    },
];
