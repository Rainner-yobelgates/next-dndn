import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "../Icons"

const Footer = ({ fontClass }: { fontClass: string }) => {
    return (
        <>
            <div className="bg-gray-200">
                <footer className={cn(
                    "container",
                    "text-base-content p-10",
                    "grid grid-cols-1 md:grid-cols-3 gap-10",
                )}>
                    <aside>
                        <Link href="/" className={`text-2xl py-2 ${fontClass}`}>
                            DNDN
                        </Link>
                        <p>
                            DNDN Luxury
                            <br />
                            Fo of branded items since 2019
                        </p>
                    </aside>
                    <nav className="flex flex-col items-start">
                        <h6 className="font-bold text-lg">Links</h6>
                        <Link href={'/'} className={cn(
                            buttonVariants({
                                variant: "link",                            
                            }),
                            "px-0",
                        )}>Home</Link>
                        <Link href={'/'} className={cn(
                            buttonVariants({
                                variant: "link",                            
                            }),
                            "px-0",
                        )}>New Products</Link>
                        <Link href={'/'} className={cn(
                            buttonVariants({
                                variant: "link",                            
                            }),
                            "px-0",
                        )}>Testimoni</Link>
                        <Link href={'/'} className={cn(
                            buttonVariants({
                                variant: "link",                            
                            }),
                            "px-0",
                        )}>Terms Condition & FAQ</Link>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-lg">Contact Us</h6>
                        <p className="w-80 link link-hover">Stay connected with us through our Contact Us page for any inquiries or further support</p>
                        <div className="flex justify-center gap-5 pt-3">
                            {/* <Link href={"https://api.whatsapp.com/send?phone=6281617171488&"} target="_blank"><FaWhatsapp size={36} color="#25D366" /></Link> */}
                            {/* <Link href={"https://www.instagram.com/dndn.luxury/"} target="_blank"><FaInstagram size={36} color="#E1306C" /></Link> */}
                        </div>
                    </nav>
                </footer>
            </div>
            {/* <div className="fixed bottom-32 right-[6%] w-26 h-26 rounded-full overflow-hidden z-5"> */}
            {/* <Link href="https://api.whatsapp.com/send?phone=6281617171488" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/wa.png"
                        alt="WhatsApp"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                    />
                </Link> */}
            <Link href="https://api.whatsapp.com/send?phone=6281617171488" target="_blank" rel="noopener noreferrer" className={cn(
                buttonVariants({
                    variant: 'outline',
                }),
                "fixed bottom-10 right-[6%] w-26 h-26 rounded-full overflow-hidden z-5",
                "shadow-2xl font-bold text-primary hover:text-primary flex space-x-2 items-center justify-center px-4 py-2",
            )}>
                <Icons.whatsapp className="h-6 w-6" />
                <span>Chat</span>
            </Link>
            {/* </div> */}
        </>
    )
}

export default Footer