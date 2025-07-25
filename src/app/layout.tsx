import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: 
  Readonly<{
  children: React.ReactNode;
  }>){
  return (
    <html lang="en">
      <body className="__variable_5cfdac __variable_9a8899 antialiased">
        {children}
      </body>
    </html>
  );
}
