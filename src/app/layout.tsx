import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "คลินิกความงามหาดใหญ่ มาตรฐานเดียวกับเกาหลี | The Kimline Clinic",
  description:
    "ปรแกรมฟิลเลอร์ โบท็อกซ์ ยกกระชับ หน้าใส ดริปผิว เลเซอร์ คิมไลน์ตอกย้ำจุดแข็งด้วย นวัตกรรมความงามสไตล์เกาหลี เชื่อมั่นว่าไม่ต้องบินไกลไปถึงเกาหลี ก็ได้รับการดูแลแบบเดียวกัน ทั้งด้านคุณภาพของแท้ ปลอดภัย ไม่ผสม ไม่ลดสเปก",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
