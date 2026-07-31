import { Geist, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust",
  description: "Travel Booking",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme='light'
      lang="en"
      className={`${geistSans.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
