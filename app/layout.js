import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeButton from "@/components/ThemeButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marco Busico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body
        className={
          inter.className + " text-black bg-white dark:text-white dark:bg-black"
        }
      >
        <ThemeProvider attribute="class">
          <ThemeButton />
          <br />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
