import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/drip-treatment/banner-drip-treatment-4-3-th.jpg"
          alt="ดริปวิตามิน และทรีตเมนต์ฟื้นฟูร่างกาย"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/drip-treatment/banner-drip-treatment-16-9-th.jpg"
          alt="ดริปวิตามิน และทรีตเมนต์ฟื้นฟูร่างกาย"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            ดริปวิตามิน และทรีตเมนต์ฟื้นฟูร่างกาย
            <br />
            บำรุงผิวให้เปล่งประกายจากภายในสู่ภายนอก
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/drip-treatment/what-drip-treatment-th.jpg"
              alt="ดริปวิตามิน และทรีตเมนต์ฟื้นฟูร่างกาย"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">ดริปวิตามิน และทรีตเมนต์คืออะไร</h3>
              <p>
                ดริปวิตามิน และทรีตเมนต์คือการฟื้นฟูสุขภาพ
                และผิวพรรณด้วยการเติมวิตามิน สารต้านอนุมูลอิสระ
                และแร่ธาตุที่จำเป็นเข้าสู่ร่างกายโดยตรง
                ช่วยบำรุงผิวให้ใสสุขภาพดีลดความอ่อนล้า
                และเพิ่มพลังให้ร่างกายจากภายใน
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่
                เรามีโปรแกรมดริปและทรีตเมนต์หลากหลายสูตร
                ที่คิดค้นโดยแพทย์ผู้เชี่ยวชาญ
                เพื่อให้เหมาะกับความต้องการของแต่ละคนทั้งสูตรผิวใส สูตรดีท็อกซ์
                ฟื้นฟูผิวโทรม และสูตรเพิ่มพลังร่างกาย
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/drip-treatment/drip-programs2-th.jpg"
            alt="ประเภทของบูสต์ผิว"
            width={1200}
            height={1200}
          />
          <h3 className="text-2xl text-start">
            ประเภทของดริปวิตามิน (Vitamin Drip Programs)
          </h3>
          <ul className="list-disc pl-4">
            <li>
              สูตรผิวขาวใส (Bright & Glow Drip)
              <p className="font-light">
                ช่วยปรับผิวให้กระจ่างใสลดความหมองคล้ำเติมความชุ่มชื้นให้ผิวใสเปล่งประกาย
              </p>
            </li>
            <li>
              สูตรดีท็อกซ์ตับ (Detox Drip)
              <p className="font-light">
                ขับสารพิษออกจากร่างกายฟื้นฟูระบบภูมิคุ้มกัน และลดความอ่อนเพลีย
              </p>
            </li>
            <li>
              สูตรฟื้นฟูผิวโทรม (Revitalize Drip)
              <p className="font-light">
                เหมาะสำหรับผู้ที่พักผ่อนน้อยผิวแห้ง ขาดน้ำคืนความสดชื่น
                และสุขภาพดีให้ผิว
              </p>
            </li>
            <li>
              สูตรเพิ่มพลัง และภูมิคุ้มกัน (Energy & Immune Boost Drip)
              <p className="font-light">
                เสริมวิตามินซี
                และสารอาหารที่ช่วยให้ร่างกายแข็งแรงสดชื่นพร้อมรับวันใหม่
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เหมาะสำหรับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่ต้องการฟื้นฟูสุขภาพ และผิวจากภายใน</li>
            <li>ผู้ที่มีผิวหมองคล้ำเหนื่อยล้าพักผ่อนน้อย</li>
            <li>ผู้ที่อยากให้ผิวกระจ่างใสสุขภาพดีแบบธรรมชาติ</li>
            <li>ผู้ที่เตรียมตัวก่อนออกงานหรือท่องเที่ยว</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องดริปวิตามิน และทรีตเมนต์ที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้วิตามินแท้นำเข้าผ่าน อย.ไทยปลอดภัย 100%</li>
            <li>ดูแลโดยแพทย์ผู้เชี่ยวชาญด้านผิว และสุขภาพ</li>
            <li>
              มีสูตรเฉพาะ "Kimline Signature Drip" ปรับตามสภาพผิว
              และร่างกายแต่ละบุคคล
            </li>
            <li>ห้องดริปสะอาดผ่อนคลายพร้อมบรรยากาศสบายแบบสปา</li>
            <li>เห็นผลหลังทำทันทีผิวใสดูสุขภาพดีขึ้น</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
