import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telaynew Ambachew | AI Software Engineer & Full Stack Developer",
  description:
    "AI Software Engineer and Full Stack Developer building Enterprise AI Applications and Scalable Backend Systems",
  keywords: ["AI", "Full Stack", "Software Engineer", "React", "Next.js", "NestJS", "Azure OpenAI"],
  openGraph: {
    title: "Telaynew Ambachew | AI Software Engineer",
    description: "Building Enterprise AI Applications and Scalable Backend Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
