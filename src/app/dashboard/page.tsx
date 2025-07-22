import React from 'react';
import ComparisonsCharts from "@/components/dash/charts/comparisons-charts/comparisons-charts";
import CategoryChart from "@/components/dash/charts/category-chart/category-chart";
import TotalBalance from "@/components/dash/total-balance/total-balance";
import RecentTransactions from "@/components/dash/recent-tranractions/recent-transactions";
import UpcomingBills from "@/components/dash/upcoming-bils/upcoming-bills";
import Calender from "@/components/dash/calender/calender";
import BankingCard from "@/components/dash/banking-card/banking-card";
import {Metadata} from "next";

export const metadata : Metadata = {
    title : "داشبورد"
}

function DashboardPage() {
    return (
        <main className={"grid grid-cols-4 max-2xl:grid-cols-3 max-xl:gap-5 max-xl:p-5 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 p-10"}>
            <div className="flex flex-col gap-y-10 max-xl:gap-y-5">
                <TotalBalance/>
                <BankingCard />
            </div>
            <RecentTransactions/>
            <UpcomingBills/>
            <Calender/>
            <ComparisonsCharts className={"2xl:col-span-3 max-2xl:col-span-full"}/>
            <CategoryChart className={"max-2xl:row-start-2 max-md:row-start-auto"}/>
        </main>
    );
}

export default DashboardPage;