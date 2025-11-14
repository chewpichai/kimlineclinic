import { REVIEWS } from "@/constants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

export default async function Page() {
  const t = await getTranslations("Review");

  return (
    <main>
      <div>
        <div className="container">
          <h2>{t("msg02")}</h2>

          <div className="pb-2 mb-4 border-b-2 border-b-secondary">
            <Menu as="div" className="relative flex lg:hidden">
              <MenuButton className="pill inline-flex items-center gap-1 ml-auto">
                {t("msg01")}
                <FaChevronDown className="text-sm" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-secondary shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {REVIEWS.map(({ name }) => (
                    <MenuItem key={name}>
                      <button className="block px-4 py-2 text-sm text-white data-focus:bg-accent data-focus:text-accent data-focus:outline-hidden">
                        {t(name)}
                      </button>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            <ul className="gap-1 text-sm font-light hidden lg:flex">
              {REVIEWS.map(({ name }) => (
                <li key={name}>
                  <button className="pill px-4 bg-transparent text-black hover:bg-secondary hover:text-white">
                    {t(name)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <Link href={`/review/${i + 1}`}>
                  <Image
                    className="rounded-2xl shadow"
                    src="/review/model.webp"
                    alt="model"
                    width={1200}
                    height={1200}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center gap-1 mt-4">
            <li>
              <Link
                href="#"
                className="size-6 rounded-full bg-secondary flex items-center justify-center text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="size-6 rounded-full flex items-center justify-center"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="size-6 rounded-full flex items-center justify-center"
              >
                3
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaChevronRight className="text-xs" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
