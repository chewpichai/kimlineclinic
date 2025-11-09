"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ServiceList() {
  const responsive = {
    lg: {
      breakpoint: { max: 9999, min: 1024 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="p-2" centerMode infinite>
      {[
        "ONDA PRO",
        "MYOUNG",
        "ฟิลเลอร์",
        "โบท็อกซ์",
        "ร้อยไหม",
        "บูสผิว",
        "ดริปวิตามิน และทรีทเมนต์",
        "หน้าเรียว",
        "ยกกระชับ",
        "หน้าใส",
      ].map((name, i) => (
        <div className="p-3">
          <Link href="#">
            <Image
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              src={`/home/service-${String(Math.min(i + 1, 4)).padStart(
                2,
                "0"
              )}.webp`}
              alt="โปรโมชั่นล่าสุด"
              width={738}
              height={738}
            />
            <p className="text-center mt-4">{name}</p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
