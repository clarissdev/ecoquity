import "./globals.css";
import cx from "clsx";
import { Fira_Code, Manrope, Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fontRoboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-family-roboto",
});

// If loading a variable font, you don't need to specify the font weight
const fontManrope = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-manrope",
});

const fontFiraCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        fontRoboto.variable,
        fontManrope.variable,
        fontFiraCode.variable,
      )}
    >
      {children}
    </html>
  );
}
