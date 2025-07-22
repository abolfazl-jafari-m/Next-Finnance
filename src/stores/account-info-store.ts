import {createStore} from "zustand/vanilla";
import {UserAccountInterface, UserInterface} from "@/interfaces/user";

export type AccountInfoState = {
    user: Omit<UserInterface, "password"> | undefined,
    accounts: UserAccountInterface []
}


export type AccountInfoActions = {
    setUserInfo: (user: UserInterface) => void,
    setAccount: (accounts: UserAccountInterface[]) => void,
}

export type AccountInfoStore = AccountInfoActions & AccountInfoState;

const initialState: AccountInfoState = {
    user: undefined,
    accounts: []
}

export const createAccountInfoStore = (init: AccountInfoState = initialState,) => {
    return createStore<AccountInfoStore>()((set) => ({
        ...init,
        setAccount: (accounts: UserAccountInterface[]) => set(() => ({accounts})),
        setUserInfo: (user: Omit<UserInterface, "password">) => set(() => ({user})),
    }))
}