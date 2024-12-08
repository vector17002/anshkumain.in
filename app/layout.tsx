import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/navbar";


export const metadata: Metadata = {
  title: "Ansh Kumain",
  description: "Explore Ansh Kumain's portfolio with cutting-edge web projects, industry insights, and a seamless way to connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="shortcut icon" href="./logo.png" />
      </head>
      <body
        className={`bg-slate-50 dark:bg-zinc-900 antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
        storageKey="resume-theme">
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
