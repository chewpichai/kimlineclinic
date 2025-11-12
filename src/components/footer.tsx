import { REVIEWS, SERVICES } from "@/constants";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import ScrollTopButton from "./ui/scroll-top-button";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer>
      <div className="bg-accent">
        <div className="container mx-auto py-8 px-16">
          <h2 className="text-3xl text-center mb-8">{t("msg01")}</h2>
          <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-52 sm:max-w-104 mx-auto">
            <li>
              <Link
                href="https://www.facebook.com/thekimlineclinic/"
                target="_blank"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaFacebookF className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/thekimlineclinic/"
                target="_blank"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://lin.ee/h7WJ6IU"
                target="_blank"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <Image
                  className="w-8 h-8"
                  src="/icon-line.svg"
                  alt="line"
                  width={171}
                  height={171}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@kimlineclinic"
                target="_blank"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaTiktok className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/66961622292"
                target="_blank"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaWhatsapp className="w-9 h-9" />
              </Link>
            </li>
            <li>
              <Link
                href="tel:66961622292"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaPhone className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container gap-4 hidden lg:flex">
          <div className="space-y-4 w-1/5">
            <Image
              className="w-[100px] aspect-220/158 mx-auto"
              src="/logo-white.svg"
              alt="The Kimline Clinic"
              width={220}
              height={158}
            />
            <Image
              className="w-[100px] aspect-square mx-auto"
              src="/qrcode.svg"
              alt="The Kimline Clinic"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">{t("msg02")}</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              <li>
                <Link href="/promotion">{t("msg03")}</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">{t("msg04")}</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              {SERVICES.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{t(name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">{t("msg05")}</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              {REVIEWS.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{t(name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">{t("msg06")}</h6>
            <ul className="text-white list-inside text-xs mt-2 space-y-1 font-light">
              <li className="flex gap-2 items-center">
                <FaClock />
                <p dangerouslySetInnerHTML={{ __html: t.raw("msg07") }} />
              </li>
              <li className="flex gap-2 items-center">
                <FaPhone />
                <p>{t("msg08")}</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaEnvelope />
                <p>thekimlinehatyai@gmail.com</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p dangerouslySetInnerHTML={{ __html: t.raw("msg09") }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center py-2 text-white">
          &copy; 2025 The Kimline Clinic
        </div>
      </div>

      <div className="space-y-2 fixed bottom-4 right-4">
        <Link
          href="https://www.facebook.com/thekimlineclinic/"
          target="_blank"
          className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.instagram.com/thekimlineclinic/"
          target="_blank"
          className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaInstagram className="size-5" />
        </Link>
        <Link
          href="https://lin.ee/h7WJ6IU"
          target="_blank"
          className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
        >
          <Image
            className="size-5"
            src="/icon-line.svg"
            alt="line"
            width={171}
            height={171}
          />
        </Link>
        <Link
          href="https://wa.me/66961622292"
          target="_blank"
          className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaWhatsapp className="size-5" />
        </Link>
        <ScrollTopButton />
      </div>
    </footer>
  );
}
