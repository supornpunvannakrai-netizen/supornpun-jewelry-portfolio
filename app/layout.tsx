import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supornpun Wannakrai | Jewelry Visual Production Specialist",
  description:
    "Luxury minimal portfolio for Supornpun Wannakrai, Jewelry Visual Production Specialist with 15+ years in the jewelry industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
