import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/hair-removal/banner-hair-removal-4-3-th.jpg"
          alt="กำจัดขนถาวรด้วยเทคโนโลยี Diode Laser"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/hair-removal/banner-hair-removal-16-9-th.jpg"
          alt="กำจัดขนถาวรด้วยเทคโนโลยี Diode Laser"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            กำจัดขนถาวรด้วยเทคโนโลยี Diode Laser
            <br />
            ขนหลุดเกลี้ยงผิวเนียนใส ไม่ระคายเคือง
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="space-y-2">
            <h3 className="text-start">กำจัดขนด้วย Diode Laser คืออะไร</h3>
            <p>
              Diode Laser Hair Removal คือเทคโนโลยีเลเซอร์รุ่นใหม่ที่ช่วย
              กำจัดขนถาวรได้อย่างอ่อนโยน ปลอดภัย เหมาะกับทุกสภาพผิว
              พลังงานเลเซอร์จะลงลึกถึงรากขนโดยไม่ทำร้ายผิวรอบข้าง ช่วยให้
              ขนหลุดง่ายรูขุมขนเล็กลงผิวเรียบเนียนขึ้นอย่างเป็นธรรมชาติ
            </p>
            <p>
              ที่ The Kimline Clinic หาดใหญ่ เราใช้เครื่อง Diode Laser
              แท้มาตรฐานระดับสากลพร้อมดูแลโดยแพทย์
              และผู้เชี่ยวชาญเฉพาะทางเพื่อให้ได้ผลลัพธ์ที่เห็นชัด
              และปลอดภัยสูงสุด
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/hair-removal/popular-treatment-areas-th.jpg"
            alt="บริเวณยอดนิยมในการกำจัดขน"
            width={1550}
            height={570}
          />
          <h3 className="text-2xl text-start">บริเวณยอดนิยมในการกำจัดขน</h3>
          <ul className="list-disc pl-4">
            <li>รักแร้</li>
            <li>แขน ขา</li>
            <li>ใบหน้า หนวด คาง</li>
            <li>บิกินี ขอบบิกินี</li>
            <li>หลัง หน้าอก</li>
            <li>ลำคอ หรือกรอบหน้า</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ข้อดีของการกำจัดขนด้วย Diode Laser
          </h3>
          <ul className="list-disc pl-4">
            <li>เห็นผลตั้งแต่ครั้งแรกขนลดลงทันทีหลังทำ</li>
            <li>ผิวเรียบเนียนรูขุมขนเล็กลง</li>
            <li>ไม่เจ็บไม่แสบไม่ต้องพักฟื้น</li>
            <li>เหมาะกับทุกสีผิวและทุกบริเวณของร่างกาย</li>
            <li>ปลอดภัยได้มาตรฐานผ่าน อย.ไทย</li>
          </ul>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/hair-removal/before-after-hair-loss.jpg"
            alt="ข้อดีของการกำจัดขนด้วย Diode Laser"
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องกำจัดขนที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้เครื่อง Diode Laser ของแท้รุ่นใหม่ล่าสุด</li>
            <li>ดูแลโดยแพทย์ผู้เชี่ยวชาญ และผู้เชี่ยวชาญผิวหนัง</li>
            <li>
              เทคนิคเฉพาะ "Kimline Smooth Glow Technique"
              ที่ให้ผลลัพธ์เนียนใสไร้ขนอย่างอ่อนโยน
            </li>
            <li>ห้องทรีตเมนต์สะอาดเป็นส่วนตัวปลอดภัย</li>
            <li>เหมาะทั้งสำหรับผู้หญิง และผู้ชาย</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ผลลัพธ์หลังทำ</h3>
          <ul className="list-disc pl-4">
            <li>ขนบางตั้งแต่ครั้งแรกที่ทำ</li>
            <li>ขนขึ้นใหม่ช้าลงบางลง และสีจางลง</li>
            <li>ผิวเรียบเนียนไม่เป็นหนังไก่</li>
            <li>เมื่อทำต่อเนื่อง 5-6 ครั้งขนลดลงอย่างถาวร</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
