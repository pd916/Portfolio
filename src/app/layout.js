import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner"
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Arti-Web ",
  description: "Arti-Web Portfolio for Everyone",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <div className="bg-[#0B0036] px-10">
      {children}
      <Toaster />
      </div>
      <Footer/>
      </body>
    </html>
  );
}
