import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedant Singh | Software Developer Portfolio",
  description: "A modern portfolio of Vedant Singh, a Computer Science student and aspiring Software Developer specializing in Android and Web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-primary/30`}>
        {/* Global Animated Background */}
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] animate-pulse [animation-delay:4s]" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-white/[0.03]" />
        </div>
        {children}
      </body>
    </html>
  );
}
