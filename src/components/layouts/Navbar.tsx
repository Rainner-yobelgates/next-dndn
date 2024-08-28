'use client'
import { cn } from "@/lib/utils";
import { NextFont } from "next/dist/compiled/@next/font";
import DekstopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import CartButton from "../cart/CartButton";
import SearchButton from "./SearchButton";

const Navbar = ({
    logoFont,
}: {
    logoFont: NextFont;
}) => {
    return (
        <header className={cn(
            "sticky top-0 z-50",
            // "w-full border-b",            
            "w-full",
            "bg-background",
        )}>
            <nav className={cn(
                // "sticky top-0 z-50 w-full",
                "w-full px-10 lg:px-20",
                "border-b",
            )}>
                <div className={cn(
                    "flex px-2 sm:px-4 lg:px-6 items-center",
                    "py-3",
                    // "border-b",
                )}>
                    <div className={cn(
                        "hidden lg:flex w-full justify-start",
                    )}>
                        <a href="/" className={cn(
                            "text-2xl font-bold text-primary",
                            logoFont.className,
                            "text-[#302e2e]",
                            "flex items-center"
                        )}>
                            <span>DNDN</span>
                        </a>
                    </div>
                    <MobileNav />                    
                    <DekstopNav logoFont={logoFont} />

                    <div className="w-full flex justify-end space-x-4">
                        {/* Btn Keranjang & Search */}
                        <SearchButton />
                        <CartButton />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar