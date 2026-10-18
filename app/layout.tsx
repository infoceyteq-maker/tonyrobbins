import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Brand & National PR Campaign — Ceyteq Digital Solutions",
  description:
    "Strategic PR & personal brand proposal: positioning a four-time entrepreneur, consumer health CEO, Kellogg MBA, and AI strategist as a nationally recognized voice in entrepreneurship, innovation, and leadership.",
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
