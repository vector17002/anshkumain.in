import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/navbar";


export const metadata: Metadata = {
  title: "Ansh Kumain",
  description: "Ansh Kumain Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-50 dark:bg-zinc-900 antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
