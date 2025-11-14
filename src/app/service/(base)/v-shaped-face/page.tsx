import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("VShapedFace");

  return {
    title: `${t("msg01")} | The Kimline Clinic`,
    description: t("msg03"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("VShapedFace");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/v-shaped-face/banner-v-shaped-face-4-3-${locale}.webp`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/v-shaped-face/banner-v-shaped-face-16-9-${locale}.webp`}
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
              src="/service/v-shaped-face/thread-lift.webp"
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
            src={`/service/v-shaped-face/v-shaped-face-${locale}.webp`}
            alt={t("msg05")}
            width={1200}
            height={1200}
          />
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
          </ol>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg10")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg11")}</li>
            <li>{t("msg12")}</li>
            <li>{t("msg13")}</li>
            <li>{t("msg14")}</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg15")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg16")}</li>
            <li>{t("msg17")}</li>
            <li>{t("msg18")}</li>
            <li>{t("msg19")}</li>
            <li>{t("msg20")}</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg21")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg22")}</li>
            <li>{t("msg23")}</li>
            <li>{t("msg24")}</li>
            <li>{t("msg25")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
