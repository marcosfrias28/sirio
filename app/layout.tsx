import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
// import { Toaster } from '@/components/ui/toaster';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sirio Star - L'attesa sta per finire",
  description:
    "Rivoluziona il tuo stile con le tute che ti porteranno in un'altra dimensione.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark">
      <body className={spaceGrotesk.className}>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
