import "./globals.css";
import { sans } from "@/lib/fonts";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "onj",
  description: "Created by Jude Boachie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:text-neutral-50 text-neutral-700 dark:bg-neutral-900 h-screen ${GeistMono.variable} ${GeistSans.variable} ${sans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <main className="md:px-24 px-6 h-screen py-12 max-w-4xl mx-auto grid grid-rows-3 grid-cols-1 sm:gap-6 gap-2 justify-content-start">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
