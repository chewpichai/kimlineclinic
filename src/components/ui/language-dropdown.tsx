import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GB, TH } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default function LanguageDropdown() {
  return (
    <Menu as="div" className="relative flex">
      <MenuButton className="inline-flex items-center gap-1 ml-auto">
        <TH title="Thai" className="size-5 rounded-full" />
        <FaChevronDown className="text-xs" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-8 w-20 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href="#"
              className="flex gap-1 px-4 py-2 text-sm data-focus:bg-accent data-focus:text-accent data-focus:outline-hidden"
            >
              <TH title="Thai" className="size-5" />
              TH
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="flex gap-1 px-4 py-2 text-sm data-focus:bg-accent data-focus:text-accent data-focus:outline-hidden"
            >
              <GB title="English" className="size-5" />
              EN
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
