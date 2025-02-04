import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Frozen Hope',
  description: 'Raising the standard of care for frozen eggs and embryos in the US',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
