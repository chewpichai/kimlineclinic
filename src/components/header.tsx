import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./ui/language-dropdown";

export default function Header() {
  return (
    <div className="flex py-2 px-4 items-center shadow">
      <div className="flex-1">
        <Image
          className="aspect-square w-16"
          src="/logo.svg"
          alt="The Kimline Clicnic"
          width={144}
          height={137}
        />
      </div>
      <div className="items-center flex">
        <ul className="hidden sm:flex">
          <li className="px-6 border-r border-r-secondary">
            <Link href="/">หน้าแรก</Link>
          </li>
          <li className="px-6 border-r border-r-secondary">
            <Link href="/">แพ็คเกจ</Link>
          </li>
          <li className="px-6">
            <Link href="/">บริการ</Link>
          </li>
        </ul>

        <Link className="pill ml-2 mr-4" href="/">
          จองคิว
        </Link>

        <LanguageDropdown />
      </div>
    </div>
  );
}
