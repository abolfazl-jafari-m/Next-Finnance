import React from 'react';
import LoginForm from "@/components/auth/login/loginForm/loginForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ورود به حساب کاربری"
}

function LoginPage() {
    return (
        <>
            <LoginForm/>
        </>
    );
}

export default LoginPage;