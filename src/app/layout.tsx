import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desserts",
  description: "Dessert list with cart",
};

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatText.className} antialiased`}>{children}</body>
    </html>
  );
}
