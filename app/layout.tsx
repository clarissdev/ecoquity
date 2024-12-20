import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fontRoboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-family-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontRoboto.variable}>
      {children}
    </html>
  );
}
