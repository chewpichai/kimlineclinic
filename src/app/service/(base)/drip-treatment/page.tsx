import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("DripTreatment");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("DripTreatment");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/drip-treatment/banner-drip-treatment-4-3-${locale}.webp`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/drip-treatment/banner-drip-treatment-16-9-${locale}.webp`}
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
              src="/service/drip-treatment/what-drip-treatment-th.webp"
              alt={t("msg01")}
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
        <div className="container space-y-2">
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src={`/service/drip-treatment/drip-programs2-${locale}.webp`}
            alt={t("msg05")}
            width={1200}
            height={1200}
          />
          <h3 className="text-2xl text-start">{t("msg05")}</h3>
          <ul className="list-disc pl-4">
            <li>
              {t("msg06")}
              <br />
              <span className="font-light">{t("msg07")}</span>
            </li>
            <li>
              {t("msg08")}
              <br />
              <span className="font-light">{t("msg09")}</span>
            </li>
            <li>
              {t("msg10")}
              <br />
              <span className="font-light">{t("msg11")}</span>
            </li>
            <li>
              {t("msg12")}
              <br />
              <span className="font-light">{t("msg13")}</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg14")}</h3>
          <ul className="list-disc pl-4">
            <li>
              {t("msg15")}
              <br />
              <span className="font-light">{t("msg16")}</span>
            </li>
            <li>
              {t("msg17")}
              <br />
              <span className="font-light">{t("msg18")}</span>
            </li>
            <li>
              {t("msg19")}
              <br />
              <span className="font-light">{t("msg20")}</span>
            </li>
            <li>
              {t("msg21")}
              <br />
              <span className="font-light">{t("msg22")}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
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

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg28")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg29")}</li>
            <li>{t("msg30")}</li>
            <li>{t("msg31")}</li>
            <li>{t("msg32")}</li>
            <li>{t("msg33")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
