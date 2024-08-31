import type { Metadata } from "next";
import "./globals.css";
import { rajdhani } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "PantriPal",
  description: "Recipe finder Based On Available Ingredients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} min-h-screen`}>{children}</body>
    </html>
  );
}
