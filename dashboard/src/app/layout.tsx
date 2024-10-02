import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ServerClientQueryClientProvider from '@/provider/ServerClientQueryClientProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZeeZip",
  description: "share files easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ServerClientQueryClientProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </ServerClientQueryClientProvider>
    </html>
  );
}
