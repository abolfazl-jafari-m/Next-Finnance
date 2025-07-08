import React from 'react';
import ComparisonsCharts from "@/components/dash/charts/comparisons-charts/comparisons-charts";
import CategoryChart from "@/components/dash/charts/category-chart/category-chart";
import TotalBalance from "@/components/dash/total-balance/total-balance";

function DashboardPage() {
    return (
        <div className={"grid grid-cols-4  justify-items-center gap-10 p-10"}>
            <TotalBalance />
            <TotalBalance />
            <TotalBalance />
            <TotalBalance />
            <ComparisonsCharts />
            <CategoryChart />
        </div>
    );
}

export default DashboardPage;