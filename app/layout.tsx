import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Newsletter Sign-up | FScode",
  description: "A Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} grid min-h-dvh grid-cols-1 place-items-center bg-nl-white antialiased sm:bg-nl-charcoal-grey`}
      >
        {children}
      </body>
    </html>
  );
}
