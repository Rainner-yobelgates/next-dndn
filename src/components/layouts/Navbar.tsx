'use client'
import { cn } from "@/lib/utils";
import { NextFont } from "next/dist/compiled/@next/font";
import DekstopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import CartButton from "../cart/CartButton";
import SearchButton from "./SearchButton";
import useCollectionByMen from "@/hooks/home/useCollectionByMen";
import useCollectionByWomen from "@/hooks/home/useCollectionByWomen";
import useBrand from "@/hooks/brand/useBrand";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useTypeBrand from "@/hooks/brand/useTypeBrand";
import useCategory from "@/hooks/useCategory";

const Navbar = ({
    logoFont,
}: {
    logoFont: NextFont;
}) => {
    const { data: dataBrandMen, isLoading: isLoadingBrandMen } = useTypeBrand('man');
    const { data: dataBrandWoman, isLoading: isLoadingBrandWoman } = useTypeBrand('woman');
    const { data: dataBrand, isLoading: isLoadingBrand } = useBrand();
    const { data: dataCategoryMen, isLoading: isLoadingCategoryMen } = useCategory('man');
    const { data: dataCategoryWomen, isLoading: isLoadingCategoryWomen } = useCategory('woman');

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        if (!isLoadingBrandMen && !isLoadingBrandWoman && !isLoadingBrand && !isLoadingCategoryMen && !isLoadingCategoryWomen) {
            setIsNavbarVisible(true);
        }
    }, [isLoadingBrandMen, isLoadingBrandWoman, isLoadingBrand, isLoadingCategoryMen, isLoadingCategoryWomen]);

    if (!isNavbarVisible) {
        return null;
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
                "sticky top-0 z-50 w-full bg-background"
            )}
        >
            <nav className={cn(
                // "sticky top-0 z-50 w-full",
                "w-full px-10 lg:px-20",
                "border-b",
            )}>
                <div className={cn(
                    "flex justify-between px-2 sm:px-4 lg:px-6 items-center",
                    "py-3",
                    // "border-b",
                )}>
                    <div className={cn(
                        "hidden lg:flex justify-start",
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
                    <DekstopNav logoFont={logoFont} dataBrandMen={dataBrandMen!} dataBrandWomen={dataBrandWoman!} dataBrand={dataBrand!} dataCategoryMen={dataCategoryMen!} dataCategoryWomen={dataCategoryWomen!} />

                    <div className="flex justify-end space-x-4">
                        {/* Btn Keranjang & Search */}
                        <SearchButton />
                        <CartButton />
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}

export default Navbar