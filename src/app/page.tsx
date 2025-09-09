import Header from "@/components/landing/header/header";
import Cta from "@/components/landing/cta/cta";
import Features from "@/components/landing/features/features";
import Preview from "@/components/landing/preview/preview";
import Download from "@/components/landing/download/download";
import Footer from "@/components/landing/footer/footer";

export default function LandingPage() {

    return (
        <div className={"bg-gray-100 dark:bg-linear-150 dark:from-gray-800 dark:to-black"}>
            <Header/>
            <main className={"p-10"}>
                <Cta/>
                <Features/>
                <Preview/>
                <Download/>
            </main>
            <Footer/>
        </div>
    );
}
