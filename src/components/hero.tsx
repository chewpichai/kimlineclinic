"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hero() {
  const responsive = {
    xs: {
      breakpoint: { max: 9999, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite>
      <div>
        <Image
          className="w-full sm:hidden"
          src="/home/grand-opening-4-3-th.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/home/grand-opening-16-9-th.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1920}
          height={720}
        />
      </div>
      <div>
        <Image
          className="w-full sm:hidden"
          src="/home/comming-soon-th-4-3.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/home/comming-soon-th-16-9.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1920}
          height={720}
        />
      </div>
    </Carousel>
  );
}
