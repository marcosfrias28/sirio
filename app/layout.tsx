import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
// import { Toaster } from '@/components/ui/toaster';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sirio Star - The wait is almost over",
  description:
    "Revolutionize your style with jumpsuits that will take you to another dimension.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
