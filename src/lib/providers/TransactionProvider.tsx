"use client"

import {createTransactionStore, transactionStore} from "@/stores/transaction-store";
import {createContext, ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand/react";

export type transactionStoreApi = ReturnType<typeof createTransactionStore>;

export const TransactionStoreContext = createContext<transactionStoreApi | undefined>(undefined,);

export const TransactionProvider = ({children}: { children: ReactNode }) => {
    const storeRef = useRef<transactionStoreApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createTransactionStore()
    }

    return <TransactionStoreContext.Provider value={storeRef.current}>
        {children}
    </TransactionStoreContext.Provider>
}

export const useTransactionStore = <T, >(selector: (store: transactionStore) => T): T => {
    const transactionStoreContext = useContext(TransactionStoreContext);
    if (!transactionStoreContext) {
        throw new Error("useTransactionStore must be use in TransactionProvider");
    }
    return useStore(transactionStoreContext, selector);
}