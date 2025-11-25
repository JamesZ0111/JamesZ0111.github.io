import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Haolin Zhan | Robotics & Software Engineer",
  description:
    "Portfolio of Haolin Zhan, a Melbourne-based robotics and software engineer specialising in automation, full-stack web development, and high-impact digital products.",
  openGraph: {
    title: "Haolin Zhan | Robotics & Software Engineer",
    description:
      "Showcasing robotics, automation, and full-stack web projects built with Next.js, TypeScript, and modern cloud tooling.",
    url: "https://jamesz0111.github.io",
    siteName: "Haolin Zhan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/j_logo.png" sizes="any" />
      </head>
  <body className={inter.className + " bg-black text-white antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
