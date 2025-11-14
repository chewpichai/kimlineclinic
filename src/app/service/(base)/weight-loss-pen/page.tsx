import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("WeightLossPen");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("WeightLossPen");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/weight-loss-pen/banner-weight-loss-pen-4-3-${locale}.webp`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/weight-loss-pen/banner-weight-loss-pen-16-9-${locale}.webp`}
          alt={t("msg01")}
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">{t("msg01")}</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/weight-loss-pen/weight-loss-pen.webp"
              alt={t("msg02")}
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">{t("msg02")}</h3>
              <p>{t("msg03")}</p>
              <p>{t("msg04")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">{t("msg05")}</h3>
            <ul className="list-disc pl-4">
              <li>{t("msg06")}</li>
              <li>{t("msg07")}</li>
              <li>{t("msg08")}</li>
              <li>{t("msg09")}</li>
              <li>{t("msg10")}</li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-xl object-cover"
            src="/service/weight-loss-pen/how-it-works.webp"
            alt={t("msg05")}
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg11")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg12")}</li>
            <li>{t("msg13")}</li>
            <li>{t("msg14")}</li>
            <li>{t("msg15")}</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg16")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg17")}</li>
            <li>{t("msg18")}</li>
            <li>{t("msg19")}</li>
            <li>{t("msg20")}</li>
            <li>{t("msg21")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg22")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg23")}</li>
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
