import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("Botox");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Botox");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/botox/banner-botox-4-3-${locale}.webp`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/botox/banner-botox-16-9-${locale}.webp`}
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
              src="/service/botox/model-botox.webp"
              alt={t("msg01")}
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">{t("msg02")}</h3>
              <p>{t("msg03")}</p>
              <p>{t("msg04")}</p>
              <p>{t("msg05")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg06")}</h3>
          <ol className="list-decimal pl-4">
            <li>
              {t("msg07")}
              <p className="font-light">{t("msg08")}</p>
            </li>
            <li>
              {t("msg09")}
              <p className="font-light">{t("msg10")}</p>
            </li>
            <li>
              {t("msg11")}
              <p className="font-light">{t("msg12")}</p>
            </li>
            <li>
              {t("msg13")}
              <p className="font-light">{t("msg14")}</p>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">{t("msg15")}</h3>
            <ul className="list-disc pl-4">
              <li>
                {t("msg16")}
                <br />
                <span className="font-light">{t("msg17")}</span>
              </li>
              <li>
                {t("msg18")}
                <br />
                <span className="font-light">{t("msg19")}</span>
              </li>
              <li>
                {t("msg20")}
                <br />
                <span className="font-light">{t("msg21")}</span>
              </li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/botox/popular-brands-th.webp"
            alt={t("msg15")}
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg22")}</h3>
          <ol className="list-decimal pl-4">
            <li>{t("msg23")}</li>
            <li>{t("msg24")}</li>
            <li>{t("msg25")}</li>
            <li>{t("msg26")}</li>
            <li>{t("msg27")}</li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg28")}</h3>
          <div>
            <p>Q: {t("msg29")}</p>
            <p>A: {t("msg30")}</p>
          </div>
          <div>
            <p>Q: {t("msg31")}</p>
            <p>A: {t("msg32")}</p>
          </div>
          <div>
            <p>Q: {t("msg33")}</p>
            <p>A: {t("msg34")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
