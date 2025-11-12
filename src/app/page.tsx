import Hero from "@/components/hero";
import PromotionList from "@/components/promotion-list";
import ReviewList from "@/components/review-list";
import ServiceList from "@/components/service-list";
import ReviewDropdown from "@/components/ui/review-dropdown";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const t = await getTranslations("Home");

  return (
    <main>
      <Hero />

      <section>
        <div className="container flex flex-col md:flex-row gap-4">
          <div className="md:w-6/12 lg:w-7/12">
            <Image
              className="rounded-2xl max-w-xl w-full"
              src="/home/waiting.webp"
              alt="The Kimline Clinic"
              width={800}
              height={450}
            />
          </div>
          <div className="md:w-6/12 lg:w-5/12">
            <h1 className="text-primary text-3xl font-bold mb-4 text-start">
              The Kimline Clinic
              <p className="text-base lg:text-xl font-light">{t("msg01")}</p>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: t.raw("msg02") }} />
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <h2>{t("msg03")}</h2>
          <PromotionList />
          <Link className="pill mx-auto block w-fit" href="/package">
            {t("msg04")}
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>{t("msg05")}</h2>
          <ServiceList />
          <Link className="pill mx-auto block w-fit" href="/service">
            {t("msg06")}
          </Link>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <h2>{t("msg07")}</h2>
          <ReviewDropdown />
          <ReviewList />
        </div>
      </section>

      <section>
        <div className="container pb-16">
          <h2 className="mb-4">{t("msg08")}</h2>
          <p
            className="text-center mb-8 font-extralight"
            dangerouslySetInnerHTML={{ __html: t.raw("msg09") }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-64 sm:max-w-xl mx-auto">
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-01.webp"
                alt={t("msg10")}
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                {t("msg10")}
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-02.webp"
                alt={t("msg11")}
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                {t("msg11")}
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-03.webp"
                alt={t("msg12")}
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                {t("msg12")}
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-04.webp"
                alt={t("msg13")}
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                {t("msg13")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container pt-0">
          <h2 className="bg-secondary text-primary-200 border-4 border-white rounded-full w-fit mx-auto px-16 py-4 -translate-y-1/2 my-0">
            {t("msg14")}
          </h2>
          <h3 className="text-primary-200">THE KIMLINE CLINIC</h3>
          <div className="bg-white h-px w-1/6 my-4 mx-auto" />
          <p
            className="mx-auto text-primary max-w-2xl"
            dangerouslySetInnerHTML={{ __html: t.raw("msg15") }}
          />
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-2 sm:gap-4 container">
        <div className="sm:w-1/2 border-6 border-secondary rounded-xl">
          <iframe
            className="aspect-video rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d705.9723542919397!2d100.48945605990504!3d7.029265175215334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1762531634004!5m2!1sen!2sth"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <p
            className="font-extralight"
            dangerouslySetInnerHTML={{ __html: t.raw("msg16") }}
          />
        </div>
      </section>
    </main>
  );
}
