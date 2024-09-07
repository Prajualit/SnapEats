import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar.js'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnapEats - Your Instant Food Delivery App",
  description: "SnapEats is a food delivery app. It provides India's food from India's most trusted suppliers. Order now!",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>
        {children}
        <div className="" id="cart-root"></div>
      </body>
    </html>
  );
}
