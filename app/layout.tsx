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
        className={`${roboto.className} flex-cols mx-auto flex min-h-dvh justify-center bg-nl-white antialiased sm:items-center sm:bg-nl-charcoal-grey sm:px-4`}
      >
        {children}
      </body>
    </html>
  );
}
