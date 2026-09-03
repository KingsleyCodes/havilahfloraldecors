import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Adjust this path if your Navbar is stored elsewhere
import Footer from "@/components/Footer"; // Adjust this path if your Footer is stored elsewhere
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Havilah Floral Decor",
  description: "Bespoke floral and environmental styling concept",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="flex min-h-screen flex-col antialiased">
        {/* Persistent Navigation Bar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}