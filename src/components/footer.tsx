import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
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
            <li>
              <Link href="#">ONDA PRO</Link>
            </li>
            <li>
              <Link href="#">MYOUNG</Link>
            </li>
            <li>
              <Link href="#">ฟิลเลอร์</Link>
            </li>
            <li>
              <Link href="#">โบท็อกซ์</Link>
            </li>
            <li>
              <Link href="#">ร้อยไหม</Link>
            </li>
            <li>
              <Link href="#">บูสผิว</Link>
            </li>
            <li>
              <Link href="#">ดริปวิตามิน และทรีทเมนต์</Link>
            </li>
            <li>
              <Link href="#">หน้าเรียว</Link>
            </li>
            <li>
              <Link href="#">กำจัดขน</Link>
            </li>
            <li>
              <Link href="#">ปากกาลดน้ำหนัก</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/5">
          <h6 className="pill bg-white text-secondary">รีวิวผู้ใช้บริการ</h6>
          <ul className="text-white list-disc list-inside text-xs mt-2 space-y-1 font-light">
            <li>
              <Link href="#">หน้าเรียว</Link>
            </li>
            <li>
              <Link href="#">ยกกระชับ</Link>
            </li>
            <li>
              <Link href="#">หน้าใส</Link>
            </li>
            <li>
              <Link href="#">ผิวเรียบเนียน</Link>
            </li>
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
  );
}
