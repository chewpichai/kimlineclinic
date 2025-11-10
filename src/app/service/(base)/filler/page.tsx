import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/filler/banner-filler-4-3-th.jpg"
          alt="ฟิลเลอร์ (Filler) ปรับรูปหน้า"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/filler/banner-filler-16-9-th.jpg"
          alt="ฟิลเลอร์ (Filler) ปรับรูปหน้า"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            ฟิลเลอร์ (Filler) ปรับรูปหน้าเติมเต็มความสวยอย่างเป็นธรรมชาติ
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/filler/model-filler.jpg"
              alt="ฟิลเลอร์ (Filler) ปรับรูปหน้า"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">ฟิลเลอร์คืออะไร</h3>
              <p>
                ฟิลเลอร์ (Filler)
                คือสารเติมเต็มที่ช่วยแก้ปัญหาร่องลึกเพิ่มวอลลุ่ม
                และปรับรูปหน้าให้ดูอ่อนเยาว์ขึ้นอย่างเป็นธรรมชาติ
                เหมาะสำหรับผู้ที่ต้องการเห็นผลทันทีโดยไม่ต้องผ่าตัดปลอดภัย
                และสลายได้เองตามเวลา
              </p>
              <p>
                The Kimline Clinic
                หาดใหญ่ใช้เฉพาะฟิลเลอร์แท้จากแบรนด์ชั้นนำระดับโลก
                พร้อมฉีดโดยแพทย์ผู้เชี่ยวชาญด้านปรับรูปหน้าโดยเฉพาะ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ประเภทของฟิลเลอร์</h3>
          <ul className="list-disc pl-4">
            <li>
              ฟิลเลอร์เติมเต็มร่องลึก (Filler for Wrinkle Reduction)
              เหมาะสำหรับเติมเต็มบริเวณร่องแก้ม ร่องน้ำหมาก ใต้ตา หรือขมับ
              ช่วยให้ใบหน้าดูอ่อนวัยและสดใสขึ้นทันที
            </li>
            <li>
              ฟิลเลอร์ปรับรูปหน้า (Facial Contour Filler)
              สำหรับผู้ที่ต้องการปรับรูปหน้าให้สมส่วน เช่น คาง จมูก ขมับ
              หรือกรอบหน้า ช่วยเพิ่มมิติให้ใบหน้าเรียวได้รูปอย่างเป็นธรรมชาติ
            </li>
            <li>
              ฟิลเลอร์ปาก (Lip Filler) เติมความอวบอิ่มให้ริมฝีปากดูมีมิติ
              ชุ่มชื้น และได้รูปตามสไตล์ที่ต้องการ เช่น ปากสายเกาหลี ปากกระจับ
            </li>
            <li>
              ฟิลเลอร์ใต้ตา (Tear Trough Filler) แก้ปัญหาตาคล้ำ เบ้าตาลึก
              และดูโทรม ให้ดวงตาดูสดใสอ่อนเยาว์ขึ้นทันที
            </li>
          </ul>
          <Image
            className="rounded-xl sm:rounded-2xl lg:rounded-4xl"
            src="/service/filler/before-after-filler.jpg"
            alt="ประเภทของฟิลเลอร์"
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">ยี่ห้อที่นิยม</h3>
            <ul className="list-disc pl-4">
              <li>
                Juvederm (จูวีเดิร์ม) จากอเมริกา
                <br />
                <span className="font-light">
                  ให้ความเรียบเนียน และคงผลลัพธ์ได้นานถึง 12-18 เดือน
                </span>
              </li>
              <li>
                Restylane (เรสไทเลน) จากสวีเดน
                <br />
                <span className="font-light">
                  เนื้อฟิลเลอร์ละเอียดเหมาะสำหรับบริเวณใต้ตา และริมฝีปาก
                </span>
              </li>
              <li>
                Neuramis (นูรามิส) จากเกาหลี
                <br />
                <span className="font-light">
                  ราคาคุ้มค่าเหมาะสำหรับผู้เริ่มต้นทดลองฟิลเลอร์
                </span>
              </li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/filler/popular-brands-th.jpg"
            alt="ประเภทของฟิลเลอร์"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ข้อดีของการฉีดฟิลเลอร์ที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้ฟิลเลอร์แท้ 100% พร้อมใบรับรองจากบริษัทผู้นำเข้าโดยตรง</li>
            <li>ฉีดโดยแพทย์ผู้เชี่ยวชาญด้านการปรับรูปหน้า</li>
            <li>
              มีเทคนิคฉีดเฉพาะแบบ "Kimline Signature"
              ที่ให้ผลลัพธ์ดูเป็นธรรมชาติ
            </li>
            <li>ดูแลความสะอาด และความปลอดภัยในทุกขั้นตอน</li>
            <li>มีบริการประเมินรูปหน้าฟรีก่อนฉีด</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            คำถามที่พบบ่อยเกี่ยวกับฟิลเลอร์
          </h3>
          <div>
            <p>Q: ฟิลเลอร์อยู่ได้นานแค่ไหน</p>
            <p>
              A: โดยทั่วไปอยู่ได้ประมาณ 8-18 เดือนขึ้นอยู่กับชนิดฟิลเลอร์
              และจุดที่ฉีด
            </p>
          </div>
          <div>
            <p>Q: ฟิลเลอร์แท้ดูยังไง</p>
            <p>
              A: ต้องมีกล่องซีลครบมีสติ๊กเกอร์เลขล็อต
              และสามารถตรวจสอบกับบริษัทผู้นำเข้าได้
            </p>
          </div>
          <div>
            <p>Q: หลังฉีดฟิลเลอร์ควรดูแลอย่างไร</p>
            <p>
              A: หลีกเลี่ยงความร้อนจัดการนวดหน้า และการออกกำลังกายหนักใน 24
              ชั่วโมงแรก
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
