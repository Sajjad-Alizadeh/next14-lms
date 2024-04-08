import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

const iranYekan = localFont({
  src: [
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${figtree.variable} ${iranYekan.variable}`}>
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          سجاد علیزاده
        </header>
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          FOOTER
        </footer>
      </body>
    </html>
  );
}
