export interface UserInterface {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    avatar?: string;
    createdAt: string;
}

export interface UserAccountInterface {
    id: string;
    createdAt: string;
    accountNumber: string;
    cvv: string;
    expireDate: string;
}