import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "../lib/QueryProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
