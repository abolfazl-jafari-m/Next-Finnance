import Header from "@/components/landing/header/header";
import Cta from "@/components/landing/cta/cta";
import Features from "@/components/landing/features/features";

export default function LandingPage() {

    return (
        <>
            <Header/>
            <main className={"bg-gray-100"}>
                <Cta/>
                <Features />
            </main>
            <footer>

            </footer>
        </>
    );
}
