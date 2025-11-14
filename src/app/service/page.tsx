import { SERVICES } from "@/constants";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("Service");

  return (
    <main>
      <div>
        <div className="container">
          <h2>{t("msg01")}</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <div className="relative group">
                    <Image
                      className="rounded-2xl shadow"
                      src={`/service/${name}-${locale}.webp`}
                      alt={t(name)}
                      width={1200}
                      height={1200}
                    />
                    <Image
                      className="hidden xl:block absolute top-0 left-0 group-hover:hidden rounded-2xl"
                      src={`/service/${name}.webp`}
                      alt={t(name)}
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <p className="text-center mt-2">{t(name)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
