import ServiceList from "@/components/service-list";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const t = await getTranslations("Service");

  return (
    <>
      {children}
      <section>
        <div className="container">
          <h2>{t("msg01")}</h2>
          <ServiceList />
        </div>
      </section>
    </>
  );
}
