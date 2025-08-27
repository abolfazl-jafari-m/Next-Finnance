

export interface Transaction  {
    id: string;
    transactionType: string;
    title: string;
    amount: string;
    category: string;
    note?: string;
    createdAt: string;
}

export const transactions: Transaction[] = [
    {
        id: "trx-002",
        transactionType: "outcome",
        title: "اجاره خانه",
        amount: "6000000",
        category: "rent",
        createdAt: "2025-07-02T12:00:00.000Z",
        note: "اجاره تیرماه",
    },
    {
        id: "trx-001",
        transactionType: "income",
        title: "حقوق تیر",
        amount: "15000000",
        category: "salary",
        createdAt: "2025-07-01T09:00:00.000Z",
        note: "واریز ماهانه شرکت",
    },
    {
        id: "trx-003",
        transactionType: "outcome",
        title: "خرید اینترنت",
        amount: "250000",
        category: "utilities",
        createdAt: "2025-07-03T08:30:00.000Z",
    },
];
