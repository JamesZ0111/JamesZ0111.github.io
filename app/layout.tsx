import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "James Zhan | Robotics & Software Engineer",
  description:
    "Portfolio of James Zhan, a Melbourne-based robotics and software engineer specialising in automation, full-stack web development, and high-impact digital products.",
  openGraph: {
    title: "James Zhan | Robotics & Software Engineer",
    description:
      "Showcasing robotics, automation, and full-stack web projects built with Next.js, TypeScript, and modern cloud tooling.",
    url: "https://jamesz0111.github.io",
    siteName: "James Zhan Portfolio",
    type: "website",
  },
  icons: {
    icon: "/images/tab%20picture.jpg",
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
        <link rel="icon" href="/images/tab%20picture.jpg" sizes="any" />
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
