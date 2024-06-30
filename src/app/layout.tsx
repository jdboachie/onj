import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className={`dark:text-neutral-50 text-neutral-700 dark:bg-neutral-900 h-screen ${GeistMono.variable} ${GeistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <main className="md:px-24 px-12 py-12 max-w-5xl mx-auto grid grid-rows-3 grid-cols-1 md:gap-6 gap-2 justify-content-start h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
