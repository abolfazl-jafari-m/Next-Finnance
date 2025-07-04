import Logo from "@/components/onboarding/logo/logo";


export default function Onboarding() {

    return (
        <main
            className={"bg-[url('/images/onboard-back.jpg')] bg-center bg-cover bg-no-repeat w-full h-screen flex items-center justify-center"}>
            <Logo/>
        </main>
    );
}
