import Hero from "@/components/hero";
import PromotionList from "@/components/promotion-list";
import ReviewList from "@/components/review-list";
import ServiceList from "@/components/service-list";
import ReviewDropdown from "@/components/ui/review-dropdown";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Hero />

      <section>
        <div className="container flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-6/12 lg:w-7/12">
            <Image
              className="rounded-4xl"
              src="/home/image-01.webp"
              alt="The Kimline Clinic"
              width={800}
              height={450}
            />
          </div>
          <div className="md:w-6/12 lg:w-5/12">
            <h1 className="text-primary text-3xl font-bold mb-4">
              The Kimline Clinic
              <p className="text-base lg:text-xl font-light">
                คลินิกความงามหาดใหญ่มาตรฐานเดียวกับเกาหลี
              </p>
            </h1>
            <p>
              โปรแกรมฟิลเลอร์ โบท็อกซ์ ยกกระชับ หน้าใส ดริปผิว เลเซอร์
              คิมไลน์ตอกย้ำจุดแข็งด้วย{" "}
              <strong>นวัตกรรมความงามสไตล์เกาหลี</strong>{" "}
              เชื่อมั่นว่าไม่ต้องบินไกลไปถึงเกาหลีก็ได้รับการดูแลแบบเดียวกัน
              ทั้งด้านคุณภาพของแท้ ปลอดภัย ไม่ผสม ไม่ลดสเปก
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <h2>โปรโมชั่นล่าสุด</h2>
          <PromotionList />
          <Link className="pill mx-auto block w-fit" href="#">
            ดูโปรโมชั่นทั้งหมด
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>บริการของเรา</h2>
          <ServiceList />
          <Link className="pill mx-auto block w-fit" href="#">
            ดูบริการทั้งหมด
          </Link>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <h2>รีวิวผู้ใช้บริการ</h2>
          <ReviewDropdown />
          <ReviewList />
        </div>
      </section>

      <section>
        <div className="container pb-16!">
          <h2 className="mb-4!">ทำไมต้อง คิมไลน์</h2>
          <p className="text-center mb-8 font-extralight">
            ทุกการดูแลเหมือนเลือกสิ่งที่ดีที่สุดให้ตัวเอง <br />
            "เพราะสวย ไม่จำเป็นต้องเจ็บ"
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-64 sm:max-w-xl mx-auto">
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-01.webp"
                alt="เทคโนโลยีใหม่"
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                เทคโนโลยีใหม่
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-02.webp"
                alt="เจ็บน้อย"
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                เจ็บน้อย
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-03.webp"
                alt="ปลอดภัย"
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                ปลอดภัย
              </p>
            </div>
            <div className="aspect-square flex flex-col justify-center rounded-2xl bg-secondary">
              <Image
                className="rounded-full mx-auto size-16"
                src="/home/why-04.webp"
                alt="นวัตกรรมเกาหลี"
                width={220}
                height={220}
              />
              <p className="text-primary-200 text-center mt-2 text-sm">
                นวัตกรรมเกาหลี
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container pt-0!">
          <h2 className="bg-secondary text-primary-200 border-4 border-white rounded-full w-fit mx-auto px-16 py-4 -translate-y-1/2 my-0!">
            เกี่ยวกับเรา
          </h2>
          <h3 className="text-primary-200!">เดอะ คิมไลน์ คลินิก</h3>
          <div className="bg-white h-px w-1/6 my-4 mx-auto" />
          <p className="mx-auto text-primary max-w-2xl">
            คลินิกความงามหาดใหญ่เกิดจากความหลงใหลในความงามสไตล์เกาหลีของผู้ก่อตั้ง
            ที่รักทั้งวัฒนธรรม การบริการ และเทรนด์ความงามจากเกาหลี
            ด้วยประสบการณ์ตรงจากการอัปเดตเทรนด์ และเทคโนโลยี K-Beauty
            จากคลินิกชั้นนำในเกาหลีเพื่อนำมาตรฐานการดูแลระดับเกาหลีมาบริการให้คนหาดใหญ่ได้สัมผัสใกล้บ้าน
          </p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-2 sm:gap-4 container">
        <div className="sm:w-1/2 border-6 border-secondary rounded-xl">
          <iframe
            className="aspect-video rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d705.9723542919397!2d100.48945605990504!3d7.029265175215334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1762531634004!5m2!1sen!2sth"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3 className="text-2xl mb-4">THE KIMLINE CLINIC</h3>
          <p className="font-extralight">
            บริษัท เดอะคิมไลน์ จำกัด
            <br />
            สำนักงานเลขที่ 91 ซอย3 จุฑากาญจน์
            <br />
            ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110
            <br />
            เปิดให้บริการทุกวัน
            <br />
            ตั้งแต่เวลา 10:00 - 20:00 น.
          </p>
        </div>
      </section>
    </main>
  );
}
