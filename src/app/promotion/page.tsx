import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Promotion");

  return (
    <main>
      <div>
        <Image
          className="w-full sm:hidden"
          src={`/promotion/opening-4-3-${locale}.jpg`}
          alt={t("msg02")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/promotion/opening-16-9-${locale}.jpg`}
          alt={t("msg02")}
          width={1920}
          height={720}
        />
      </div>

      <div>
        <div className="container">
          <h2>{t("msg01")}</h2>
          <div className="max-w-md space-y-4 mx-auto">
            <Image
              src={`/promotion/promotion-opening-${locale}.jpg`}
              alt={t("msg02")}
              width={960}
              height={1200}
            />
            <div>
              <p>{t("msg03")}</p>
              <ul className="list-disc pl-4">
                <li>{t("msg04")}</li>
                <li>{t("msg05")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
