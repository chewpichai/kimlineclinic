"use client";

import { setLocale } from "@/actions/i18n";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GB, TH } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";

export default function LanguageDropdown() {
  const locale = useLocale();
  const handleClick = async (locale: string) => {
    await setLocale(locale);
    window.location.reload();
  };

  return (
    <Menu as="div" className="relative flex">
      <MenuButton className="inline-flex items-center gap-1 ml-auto">
        {locale === "th" ? (
          <TH title="Thai" className="size-5 rounded-full" />
        ) : (
          <GB title="Thai" className="size-5 rounded-full" />
        )}
        <FaChevronDown className="text-xs" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-8 w-20 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleClick("th")}
              className="flex w-full gap-1 px-4 py-2 text-sm data-focus:bg-accent data-focus:outline-hidden"
            >
              <TH title="Thai" className="size-5" />
              TH
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => handleClick("en")}
              className="flex w-full gap-1 px-4 py-2 text-sm data-focus:bg-accent data-focus:outline-hidden"
            >
              <GB title="English" className="size-5" />
              EN
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
