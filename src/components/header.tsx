import { MAIN_MENU } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./ui/language-dropdown";
import MenuDropdown from "./ui/menu-dropdown";

export default function Header() {
  return (
    <header className="flex py-2 px-4 items-center shadow">
      <div className="flex-1">
        <Image
          className="size-12 sm:size-16"
          src="/logo.svg"
          alt="The Kimline Clicnic"
          width={144}
          height={137}
        />
      </div>

      <div className="items-center flex">
        <MenuDropdown className="mr-2 sm:hidden" />

        <ul className="hidden sm:flex">
          {MAIN_MENU.map(({ name, href }) => (
            <li
              key={name}
              className="px-6 not-last:border-r border-r-secondary]"
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>

        <Link className="pill ml-2 mr-4" href="/">
          จองคิว
        </Link>

        <LanguageDropdown />
      </div>
    </header>
  );
}
