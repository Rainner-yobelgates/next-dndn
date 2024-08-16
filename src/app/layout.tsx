import type { Metadata } from "next";
import { Montserrat, Yeseva_One } from "next/font/google";
import "./globals.css";
import FetchNavbar from "@/utils/FetchNavbar";
import Footer from "@/components/Footer/Index";
import { CartProvider } from "@/context/CartContext"

const montserrat = Montserrat({ subsets: ["latin"] });
const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CartProvider>
          <FetchNavbar fontClass={yeseva.className} />
          {children}
          <section className="pt-24 lg:pt-28">
            <Footer fontClass={yeseva.className} />
          </section>
        </CartProvider>
        </body>
    </html>
  );
}
