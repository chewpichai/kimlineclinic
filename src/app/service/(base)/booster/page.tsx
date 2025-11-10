import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/booster/banner-booster-4-3-th.jpg"
          alt="บูสต์ผิว (Skin Booster) เติมผิวฉ่ำวาว"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/booster/banner-booster-16-9-th.jpg"
          alt="บูสต์ผิว (Skin Booster) เติมผิวฉ่ำวาว"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            บูสต์ผิว (Skin Booster) เติมผิวฉ่ำวาว
            <br />
            ดูสุขภาพดีแบบ Glass Skin
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/booster/model-booster.jpg"
              alt="บูสต์ผิว (Skin Booster) เติมผิวฉ่ำวาว"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">Skin Booster คืออะไร</h3>
              <p>
                บูสต์ผิว (Skin Booster)
                คือการฉีดสารบำรุงเข้าสู่ผิวโดยตรงเพื่อฟื้นฟูผิวจากภายในสู่ภายนอก
                เติมความชุ่มชื้นลดความหมองคล้ำ และกระตุ้นคอลลาเจนให้ผิวเนียนเด้ง
                มีออร่าแบบสาวเกาหลี
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่ เราคัดสรรเฉพาะผลิตภัณฑ์ Skin
                Booster ของแท้นำเข้าจากเกาหลี
                และยุโรปพร้อมฉีดโดยแพทย์ผู้เชี่ยวชาญเพื่อผลลัพธ์ที่ปลอดภัย
                และเห็นผลจริงตั้งแต่ครั้งแรก
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container flex flex-col gap-4 sm:flex-row items-center sm:items-start">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">
              ประเภทของบูสต์ผิว (Skin Booster Programs)
            </h3>
            <ol className="list-decimal pl-4">
              <li>
                Made Collagen
                <p className="font-light">
                  บูสต์ผิวสูตรคลาสสิกจากอิตาลีช่วยดีท็อกซ์ผิวฟื้นฟูสมดุล
                  และปรับผิวให้ใสสุขภาพดีเหมาะกับผิวอ่อนล้า
                </p>
              </li>
              <li>
                Rejuran Healer
                <p className="font-light">
                  สารสกัดจาก DNA
                  ของปลาแซลมอนช่วยซ่อมแซมเซลล์ผิวระดับลึกฟื้นฟูผิวที่โทรมจากแสงแดด
                  และมลภาวะให้ผิวเรียบเนียนเด้งขึ้น
                </p>
              </li>
              <li>
                Juveelook
                <p className="font-light">
                  ผสาน Hyaluronic Acid + PLLA ช่วยเติมเต็มร่องตื้น
                  และกระตุ้นคอลลาเจนระยะยาวผิวดูฟูใส และเต่งตึงขึ้น
                </p>
              </li>
              <li>
                Glass Skin Program
                <p className="font-light">
                  สูตรพิเศษเฉพาะของ The Kimline Clinic
                  ที่รวมบูสต์ผิวหลากหลายชนิดเพื่อผิวฉ่ำวาวใสเด้งแบบเกาหลีเหมาะกับทุกสภาพผิว
                </p>
              </li>
            </ol>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/booster/boosterprogram-th.jpg"
            alt="ประเภทของบูสต์ผิว"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เหมาะสำหรับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่มีผิวแห้งขาดน้ำหมองคล้ำ</li>
            <li>ผู้ที่ต้องการผิวใสเด้งดูสุขภาพดี</li>
            <li>ผู้ที่อยากฟื้นฟูผิวก่อนแต่งหน้า หรือเตรียมผิวก่อนทำเลเซอร์</li>
            <li>ผู้ที่อยากได้ลุคผิว "Glass Skin" แบบเกาหลี</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องบูสต์ผิวที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้ผลิตภัณฑ์แท้นำเข้ามี อย.รับรอง</li>
            <li>ฉีดโดยแพทย์ผู้เชี่ยวชาญด้านผิว และความงาม</li>
            <li>
              เทคนิคเฉพาะ "Kimline Signature Glow" ฉีดทั่วหน้าอย่างอ่อนโยน
            </li>
            <li>เห็นผลตั้งแต่ครั้งแรกผิวดูเนียนเด้งขึ้นทันที</li>
            <li>คลินิกสะอาด ปลอดภัยได้มาตรฐาน</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ผลลัพธ์หลังทำ</h3>
          <ul className="list-disc pl-4">
            <li>ผิวดูฉ่ำวาวอิ่มน้ำใสสุขภาพดี</li>
            <li>รูขุมขนกระชับริ้วรอยตื้นขึ้น</li>
            <li>แต่งหน้าติดง่ายขึ้น</li>
            <li>เห็นผลตั้งแต่ครั้งแรก และยิ่งชัดเจนขึ้นเมื่อทำต่อเนื่อง</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
