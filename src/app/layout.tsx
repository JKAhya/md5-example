import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수학 함수 발표용",
  description: "swh1.j1kahya.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body className="bg-slate-50 antialiased">{children}</body>
    </html>
  );
}
