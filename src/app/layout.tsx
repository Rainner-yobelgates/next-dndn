import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientProvider from "@/providers/ClientProvider";

// export const metadata: Metadata = {
//   title: "Sepatu, Celana & Baju + Free Pengiriman | DNDN Shop",
//   description: "DNDN Shop e-commerce website",
//   category: 'e-commerce',
//   icons: new URL("https://panel.rdtopup.com/storage/assets/logo/Ie9eEWInnk6vNq5n9rTwNaUOetepAKhy72Sf1CGx.png"),
//   keywords: ["e-commerce", "shop", "dndn"],
// };

export async function generateMetadata({ params }: { params: any }) {

  return {
    title: "Sepatu, Celana & Baju + Free Pengiriman | DNDN Shop",
    description: "DNDN Shop e-commerce website",
    generator: "Next.js",
    keywords: ["web topup", "topup murah", "topup mudah", "topup games"],
    // icons: new URL('https://panel.rdshop.id/storage/assets/logo/3ZOngm3vY1kH0BAiIt2tMKwhNsGRqpAx8izihy8s.png'),
    // https://panel.rdtopup.com/storage/assets/logo/Ie9eEWInnk6vNq5n9rTwNaUOetepAKhy72Sf1CGx.png
    icons: new URL("https://panel.rdtopup.com/storage/assets/logo/Ie9eEWInnk6vNq5n9rTwNaUOetepAKhy72Sf1CGx.png"),    
  }
}

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
