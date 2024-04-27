import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import  "./global.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeProvider from "../components/themeProvider/ThemeProvider";
import React from "react";
import { NextAuthProviderr } from "../components/AuthProvider/AuthProvider";
import Toast from "../components/Toast/Toast";

const poppins = Poppins({ subsets: ["latin"],
  weight:['400','500','700','900'],
  style:["italic",'normal'],
  variable: "--font"
});

export const metadata: Metadata = {
  title: "Hote Management App",
  description: "Discover best hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
        <NextAuthProviderr>
        <ThemeProvider>
          <Toast/>
        <main className="font-normal">
          <Header/>
          {children}
          <Footer/>
        </main>
        </ThemeProvider>
        </NextAuthProviderr>
        </body>
    </html>
  );
}
