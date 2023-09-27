"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import initDatadogRum from "./utils/datadog";

const inter = Inter({ subsets: ["latin"] });

initDatadogRum();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
