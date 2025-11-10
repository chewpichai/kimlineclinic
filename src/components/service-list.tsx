"use client";

import { SERVICES } from "@/constants";
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
      {SERVICES.map(({ name, image, href }) => (
        <div className="p-3">
          <Link href={href}>
            <Image
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              src={`/service/${image}-th.jpg`}
              alt={name}
              width={1200}
              height={1200}
            />
            <p className="text-center mt-4">{name}</p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
