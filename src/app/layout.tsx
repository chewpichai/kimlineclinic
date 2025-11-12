import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: `${t("title")} | The Kimline Clinic`,
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${kanit.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
