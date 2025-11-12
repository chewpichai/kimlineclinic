import { REVIEWS } from "@/constants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default async function ReviewDropdown() {
  const t = await getTranslations("Review");

  return (
    <div className="pb-4 mb-4 border-b-2 border-b-secondary">
      <Menu as="div" className="relative flex sm:hidden">
        <MenuButton className="pill inline-flex items-center gap-1 ml-auto">
          {t("msg01")}
          <FaChevronDown className="text-sm" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-secondary shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {[{ name: "msg01", href: "/review" }, ...REVIEWS].map(
              ({ name, href }) => (
                <MenuItem key={name}>
                  <Link
                    href={href}
                    className="block px-4 py-2 text-sm text-white data-focus:bg-accent data-focus:text-accent data-focus:outline-hidden"
                  >
                    {t(name)}
                  </Link>
                </MenuItem>
              )
            )}
          </div>
        </MenuItems>
      </Menu>

      <ul className="gap-1 hidden sm:flex">
        <li className="mr-auto">
          <Link className="pill" href="/review">
            {t("msg01")}
          </Link>
        </li>
        {REVIEWS.map(({ name, href }) => (
          <li key={name}>
            <Link className="pill" href={href}>
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
