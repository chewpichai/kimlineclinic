import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("HairRemoval");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("HairRemoval");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/hair-removal/banner-hair-removal-4-3-${locale}.jpg`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/hair-removal/banner-hair-removal-16-9-${locale}.jpg`}
          alt={t("msg01")}
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">{t("msg01")}</h1>
          <div className="space-y-2">
            <h3 className="text-start">{t("msg02")}</h3>
            <p>{t("msg03")}</p>
            <p>{t("msg04")}</p>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src={`/service/hair-removal/popular-treatment-areas-${locale}.jpg`}
            alt={t("msg05")}
            width={1550}
            height={570}
          />
          <h3 className="text-2xl text-start">{t("msg05")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg06")}</li>
            <li>{t("msg07")}</li>
            <li>{t("msg08")}</li>
            <li>{t("msg09")}</li>
            <li>{t("msg10")}</li>
            <li>{t("msg11")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg12")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg13")}</li>
            <li>{t("msg14")}</li>
            <li>{t("msg15")}</li>
            <li>{t("msg16")}</li>
            <li>{t("msg17")}</li>
          </ul>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/hair-removal/before-after-hair-loss.jpg"
            alt={t("msg12")}
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg18")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg18")}</li>
            <li>{t("msg19")}</li>
            <li>{t("msg20")}</li>
            <li>{t("msg21")}</li>
            <li>{t("msg22")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg23")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg24")}</li>
            <li>{t("msg25")}</li>
            <li>{t("msg26")}</li>
            <li>{t("msg27")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
