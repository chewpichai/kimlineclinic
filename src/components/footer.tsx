import { REVIEWS, SERVICES } from "@/constants";
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

export default function Footer() {
  return (
    <footer>
      <div className="bg-accent">
        <div className="container mx-auto py-8 px-16">
          <h2 className="text-3xl text-center mb-8">ติดต่อเรา</h2>
          <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-52 sm:max-w-104 mx-auto">
            <li>
              <Link
                href="#"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaFacebookF className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
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
                href="#"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaTiktok className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center"
              >
                <FaWhatsapp className="w-9 h-9" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
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
            <h6 className="pill bg-white text-secondary">แพ็คเกจ โปรโมชั่น</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              <li>
                <Link href="#">โปรโมชั่นเปิดคลินิกใหม่</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">บริการของเรา</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              {SERVICES.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">รีวิวผู้ใช้บริการ</h6>
            <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
              {REVIEWS.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <h6 className="pill bg-white text-secondary">เกี่ยวกับเรา</h6>
            <ul className="text-white list-inside text-xs mt-2 space-y-1 font-light">
              <li className="flex gap-2 items-center">
                <FaClock />
                <p>
                  เปิดให้บริการทุกวัน
                  <br />
                  ตั้งแต่เวลา 10:00 - 20:00 น.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <FaPhone />
                <p>โทร. 096-162-2292</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaEnvelope />
                <p>thekimlinehatyai@gmail.com</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>
                  บริษัท เดอะคิมไลน์ จำกัด
                  <br />
                  สำนักงานเลขที่ 91 ซอย 3<br />
                  จุฑากาญจน์ ต.คอหงส์
                  <br />
                  อ.หาดใหญ่ จ.สงขลา 90110
                </p>
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
          href="#"
          className="bg-secondary size-10 hidden md:flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          className="bg-secondary size-10 hidden md:flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaInstagram className="size-5" />
        </Link>
        <Link
          href="#"
          className="bg-secondary size-10 hidden md:flex items-center justify-center rounded-full text-white shadow-md"
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
          href="#"
          className="bg-secondary size-10 hidden md:flex items-center justify-center rounded-full text-white shadow-md"
        >
          <FaWhatsapp className="size-5" />
        </Link>
        <Link
          href="#"
          className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
        >
          <Image
            className="size-5"
            src="/icon-up.svg"
            alt="scroll to top"
            width={50}
            height={53}
          />
        </Link>
      </div>
    </footer>
  );
}
