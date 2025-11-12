import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("ThreadLifting");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("ThreadLifting");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/thread-lifting/banner-thread-lift-4-3-${locale}.jpg`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/thread-lifting/banner-thread-lift-16-9-${locale}.jpg`}
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
              src="/service/thread-lifting/model-thread-lift.jpg"
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
          </ul>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/thread-lifting/thread-types.jpg"
            alt={t("msg05")}
            width={1550}
            height={570}
          />
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
            src="/service/thread-lifting/thread-lift.jpg"
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
            <li>{t("msg19")}</li>
            <li>{t("msg20")}</li>
            <li>{t("msg21")}</li>
            <li>{t("msg22")}</li>
            <li>{t("msg23")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg24")}</h3>
          <p>{t("msg25")}</p>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg26")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg27")}</li>
            <li>{t("msg28")}</li>
            <li>{t("msg29")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
