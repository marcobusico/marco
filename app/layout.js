import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marco Busico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-white bg-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
