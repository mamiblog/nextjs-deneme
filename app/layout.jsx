import "./globals.css";

import "atropos/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        suppressHydrationWarning
        className={inter.className + "dark text-foreground bg-background"}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}