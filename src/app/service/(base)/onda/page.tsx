import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Onda");

  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src={`/service/onda/service-onda-banner-4-3-${locale}.jpg`}
          alt={t("msg01")}
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src={`/service/onda/service-onda-banner-16-9-${locale}.jpg`}
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
              src="/service/onda/onda-1200x1200.jpg"
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

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg05")}</h3>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/onda/pocket-shallow-deep.jpg"
            alt={t("msg05")}
            width={1550}
            height={570}
          />
          <p dangerouslySetInnerHTML={{ __html: t.raw("msg06") }} />
          <ol className="list-decimal pl-4">
            <li>
              Deep Handpiece
              <br />
              <span className="font-light">{t("msg07")}</span>
            </li>
            <li>
              Shallow Handpiece
              <br />
              <span className="font-light">{t("msg08")}</span>
            </li>
            <li>
              Pocket Handpiece
              <br />
              <span className="font-light">{t("msg09")}</span>
            </li>
          </ol>
          <p>{t("msg10")}</p>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg11")}</h3>
          <p>{t("msg12")}</p>
          <p>{t("msg13")}</p>
          <ul className="list-disc pl-4">
            <li>{t("msg14")}</li>
            <li>{t("msg15")}</li>
            <li>{t("msg16")}</li>
            <li>{t("msg17")}</li>
          </ul>
          <p>{t("msg18")}</p>
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-start">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">{t("msg19")}</h3>
            <p>{t("msg20")}</p>
            <ul className="list-disc pl-4">
              <li>{t("msg21")}</li>
              <li>{t("msg22")}</li>
              <li>{t("msg23")}</li>
              <li>{t("msg24")}</li>
              <li>{t("msg25")}</li>
              <li>{t("msg26")}</li>
              <li>{t("msg27")}</li>
              <li>{t("msg28")}</li>
              <li>{t("msg29")}</li>
              <li>{t("msg30")}</li>
            </ul>
            <p>{t("msg31")}</p>
          </div>
          <Image
            className="size-72 object-cover"
            src="/service/onda/face-body-leg.jpg"
            alt={t("msg19")}
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">{t("msg32")}</h3>
          <ul className="list-disc pl-4">
            <li>{t("msg33")}</li>
            <li>{t("msg34")}</li>
            <li>{t("msg35")}</li>
            <li>{t("msg36")}</li>
            <li>{t("msg37")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
