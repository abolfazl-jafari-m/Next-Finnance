type TransactionType = "income" | "outcome";

export interface Transaction  {
    id: string;
    type: TransactionType;
    title: string;
    amount: number;
    category: string;
    date: string;
    note?: string;
    balanceAfter?: number;
}
