import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientProvider from "@/providers/ClientProvider";

export const metadata: Metadata = {
  title: "Sepatu, Celana & Baju + Free Pengiriman | DNDN Shop",
  description: "DNDN Shop e-commerce website",
  category: 'e-commerce',
  keywords: ["e-commerce", "shop", "dndn"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FBFBFB]">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
