import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Hunter's Bar",
  description: "Good Cocktails And A Hunting Environment Are Waiting You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="cocktail.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
