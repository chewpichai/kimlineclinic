import { MAIN_MENU } from "@/constants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import classNames from "classnames";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

export default async function MenuDropdown({
  className,
}: {
  className?: string;
}) {
  const t = await getTranslations("Menu");

  return (
    <Menu as="div" className={classNames("relative flex", className)}>
      <MenuButton className="inline-flex items-center gap-1 ml-auto">
        <FaBars />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-8 w-24 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {MAIN_MENU.map(({ name, href }) => (
            <MenuItem key={name}>
              <Link
                href={href}
                className="flex gap-1 px-4 py-2 text-sm data-focus:bg-accent data-focus:text-accent data-focus:outline-hidden"
              >
                {t(name)}
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
