import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Weight } from "lucide-react";
import { Montserrat, Yeseva_One } from "next/font/google";

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
})
const yasevaOne = Yeseva_One({
    weight: "400",
    subsets: ["latin"],
})

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className={montserrat.className}>
            <Navbar logoFont={yasevaOne} />
            {children}
            <Footer fontClass={yasevaOne.className} />
        </div>
    );
}

export default layout