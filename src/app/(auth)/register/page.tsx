import React from 'react';
import RegisterForm from "@/components/auth/register/registerForm/registerForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ساخت حساب کاربری"
}

function RegisterPage() {
    return (
        <>
            <RegisterForm/>
        </>
    );
}

export default RegisterPage;