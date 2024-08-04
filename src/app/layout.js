import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Points Calculator for Arcade",
  description: "A Next.js web app based on web scraping to help you calculate the Arcade Points you have earned.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " >
      <head>
      <title>Points Calculator for Arcade</title>
      <link rel="icon" href="./favicon.ico" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className} >{children}</body>
    </html>
  );
}
