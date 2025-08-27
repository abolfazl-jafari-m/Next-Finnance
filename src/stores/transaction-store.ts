import {Transaction} from "@/interfaces/transactions";
import {createStore} from "zustand/vanilla";


export type transactionState = {
    transaction: Transaction | null
}

export type  transactionAction = {
    setTransaction: (transaction: Transaction) => void,
    reset: () => void
}

export type transactionStore = transactionAction & transactionState;

const defaultState: transactionState = {
    transaction: null
}

export const createTransactionStore = (initState: transactionState = defaultState) =>
    createStore<transactionStore>()((set) => ({
        ...initState,
        setTransaction: (transaction) => set(() => ({transaction})),
        reset: () => set(() => ({transaction: null}))
    }))