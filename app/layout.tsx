import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeCraftAI",
  description: "Your all-in-one AI content generator!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
    </ClerkProvider>
  );
}
