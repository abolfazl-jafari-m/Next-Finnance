export interface UserInterface {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    avatar?: string;
    created_at: string;
}

export interface UserAccountInterface {
    id: string;
    created_at: string;
    accountNumber: string;
    cvv: string;
    expireDate: string;
}