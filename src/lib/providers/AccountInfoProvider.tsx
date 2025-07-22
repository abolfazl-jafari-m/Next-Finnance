"use client";
import React, {createContext, ReactNode, useContext, useRef} from 'react';
import {AccountInfoStore, createAccountInfoStore} from "@/stores/account-info-store";
import {useStore} from "zustand/react";


export type AccountInfoStoreApi = ReturnType<typeof createAccountInfoStore>

export const AccountInfoContext = createContext<AccountInfoStoreApi | undefined>(undefined,);


export function AccountInfoProvider({children}: { children: ReactNode }) {
    const storeRef = useRef<AccountInfoStoreApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createAccountInfoStore()
    }
    return (
        <AccountInfoContext.Provider value={storeRef.current}>
            {children}
        </AccountInfoContext.Provider>
    );
}

export const useAccountInfoStore = <T, >(
    selector: (store: AccountInfoStore) => T
): T => {
    const accountInfoContext = useContext(AccountInfoContext);
    if (!accountInfoContext) {
        throw new Error(`useAccountInfoStore must be used within AccountInfoProvider`)
    }
    return useStore(accountInfoContext, selector);
}


