import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div>
        <Image
          className="w-full sm:hidden"
          src="/package/promotion-opening-th-4_3.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/package/promotion-opening-th-16_9.jpg"
          alt="Grand opening โปรโมชั่นเปิดคลินิกใหม่"
          width={1920}
          height={720}
        />
      </div>

      <div>
        <div className="container">
          <h2>โปรโมชั่น</h2>
          <div className="max-w-md space-y-4 mx-auto">
            <Image
              src="/package/promotion-01.webp"
              alt="โปรโมชั่นล่าสุด"
              width={1008}
              height={1008}
            />
            <Image
              src="/package/promotion-opening-th.jpg"
              alt="โปรโมชั่นล่าสุด"
              width={960}
              height={1200}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
