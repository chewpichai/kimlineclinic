import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Filler");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/filler/banner-filler-4-3-${locale}.jpg`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/filler/banner-filler-16-9-${locale}.jpg`}
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
              src="/service/filler/model-filler.jpg"
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
          <Image
            className="rounded-xl sm:rounded-2xl lg:rounded-4xl"
            src="/service/filler/before-after-filler.jpg"
            alt={t("msg05")}
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
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
            </ul>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/filler/popular-brands-th.jpg"
            alt={t("msg14")}
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg21")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg22")}</li>
            <li>{t("msg23")}</li>
            <li>{t("msg24")}</li>
            <li>{t("msg25")}</li>
            <li>{t("msg26")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg27")}</h3>
          <div>
            <p>Q: {t("msg28")}</p>
            <p>A: {t("msg29")}</p>
          </div>
          <div>
            <p>Q: {t("msg30")}</p>
            <p>A: {t("msg31")}</p>
          </div>
          <div>
            <p>Q: {t("msg32")}</p>
            <p>A: {t("msg33")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
