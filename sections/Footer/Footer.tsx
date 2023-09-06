import Socials from "@/components/shared/Socials/Socials";

export default function Footer() {
    return (
        <footer className="pt-4 bg-transparent">
            <div className="container">
                <div className="mb-6">
                </div>
                <p className="mb-6 text-header dark:text-pale md:text-lg">All our PRO level features at your fingertips.</p>
                <div className="mb-6 md:flex md:justify-end md:border-t md:border-t-semiPale dark:md:border-t-pale">
                    <span className="block md:hidden mb-3 text-header text-slate-200 text-lg font-semibold">Follow us on</span>
                    <Socials />
                </div>
            </div>
                <p className=" py-1 bg-header dark:bg-semiPale text-white text-center">Developed by I_Ground</p>
        </footer>
    );
}