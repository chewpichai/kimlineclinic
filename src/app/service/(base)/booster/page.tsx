import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Booster");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/booster/banner-booster-4-3-${locale}.jpg`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/booster/banner-booster-16-9-${locale}.jpg`}
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
              src="/service/booster/model-booster.jpg"
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
        <div className="container flex flex-col gap-4 sm:flex-row items-center sm:items-start">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">{t("msg05")}</h3>
            <ol className="list-decimal pl-4">
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
            </ol>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/booster/boosterprogram-th.jpg"
            alt={t("msg05")}
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg14")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg15")}</li>
            <li>{t("msg16")}</li>
            <li>{t("msg17")}</li>
            <li>{t("msg18")}</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg19")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg20")}</li>
            <li>{t("msg21")}</li>
            <li>{t("msg22")}</li>
            <li>{t("msg23")}</li>
            <li>{t("msg24")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg25")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg26")}</li>
            <li>{t("msg27")}</li>
            <li>{t("msg28")}</li>
            <li>{t("msg29")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
