import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Words Typing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-50 font-mono text-blue-950">{children}</body>
    </html>
  );
}
