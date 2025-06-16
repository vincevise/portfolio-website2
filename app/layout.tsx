import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
 

// Import the Open Sans font from `next/font/google`
import { Inter } from 'next/font/google';
import Navbar from "@/components/ui-components/navbar";

// Configure the font object
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "Vuram Vincent | Front end Developer",
  description: "Portfolio of Vincent Vuram, a passionate Frontend Developer specializing in React.js. Showcasing professional experience, projects, and contact information.",
  icons: {
    icon: "/dp2.png", // default
    shortcut: "/dp2.png", // optional
    apple: "/dp2.png", // optional
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
        {/* Favicon links */}
        <link rel="icon" type="image/png" href="/dp2.png" sizes="32x32" />
        <link rel="icon" href="/dp2.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
<link rel="shortcut icon" href="/favicon.png" />


        {/* <meta name="theme-color" content="#ffffff" /> */}
      </head>
      <body
        className={` antialiased ${inter.className} bg-gray-100`}
        style={{ 
          backgroundColor: "white",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: `50px 50px` /* Adjust grid cell size */,
        } }
      >
      <Navbar />

        <ThemeProvider attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
