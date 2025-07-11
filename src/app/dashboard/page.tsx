import React from 'react';
import ComparisonsCharts from "@/components/dash/charts/comparisons-charts/comparisons-charts";
import CategoryChart from "@/components/dash/charts/category-chart/category-chart";
import TotalBalance from "@/components/dash/total-balance/total-balance";
import RecentTransactions from "@/components/dash/recent-tranractions/recent-transactions";
import UpcomingBills from "@/components/dash/upcoming-bils/upcoming-bills";
import Calender from "@/components/dash/calender/calender";
import BankingCard from "@/components/dash/banking-card/banking-card";


function DashboardPage() {
    return (
        <main className={"grid grid-cols-4 grid-rows-[1fr 1fr 3fr] justify-items-center gap-10 p-10"}>
            <TotalBalance />
            <BankingCard/>
            <RecentTransactions />
            <UpcomingBills />
            <Calender />
            <ComparisonsCharts />
            <CategoryChart />
        </main>
    );
}

export default DashboardPage;