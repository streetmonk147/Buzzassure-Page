import type { Metadata } from "next";
import { Kanit } from 'next/font/google';
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/layout/ContactFooter";
import "@/styles/globals.css";

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: "Buzz It - Your Digital Solutions Partner",
  description: "Professional web development and digital solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${kanit.className} antialiased min-h-screen bg-background font-kanit`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
