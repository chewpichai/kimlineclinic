import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/onda/service-onda-banner-4-3-th.jpg"
          alt="เครื่องยกกระชับ สลายไขมัน Onda Pro"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/onda/service-onda-banner-16-9-th.jpg"
          alt="เครื่องยกกระชับ สลายไขมัน Onda Pro"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            เครื่องยกกระชับสลายไขมัน Onda Pro
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/onda/onda-1200x1200.jpg"
              alt="Onda Pro คืออะไร"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">Onda Pro คืออะไร</h3>
              <p>
                Onda Pro คือเทคโนโลยีระดับพรีเมียมจากอิตาลีที่ใช้คลื่นไมโครเวฟ
                (Microwave Technology) ในการสลายไขมัน กระชับผิว และลดเซลลูไลต์
                ได้อย่างมีประสิทธิภาพโดยไม่ต้องผ่าตัด ได้รับการรับรองจาก US FDA
                และ CE Medical Europe ว่าปลอดภัย และให้ผลลัพธ์จริง
              </p>
              <p>
                ใช้พลังงานไมโครเวฟความถี่เฉพาะ Coolwaves™ 2.45 GHz ปัจจุบัน Onda
                Pro เป็นเทคโนโลยีที่ได้รับความนิยมอย่างมากในประเทศเกาหลีใต้
                เพราะเป็นหนึ่งในเทคนิค Body Contouring
                ที่คลินิกเกาหลีชั้นนำเลือกใช้เพื่อช่วยปรับรูปร่าง ยกกระชับ
                และลดไขมันอย่างเห็นผลโดยไม่ต้องพักฟื้น
                และเป็นแรงบันดาลใจให้คลินิกในไทยอย่าง The Kimline Clinic
                นำเข้ามาให้บริการเพื่อให้ลูกค้าในหาดใหญ่ได้สัมผัสเทคโนโลยีระดับเดียวกับคลินิกเกาหลี
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เทคโนโลยี 3 หัวของ Onda Pro</h3>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/onda/pocket-shallow-deep.jpg"
            alt="เทคโนโลยี 3 หัวของ Onda Pro"
            width={1550}
            height={570}
          />
          <p>
            <strong>Onda Pro มีหัวทิปทั้งหมด 3 รูปแบบ</strong>{" "}
            ที่ออกแบบเฉพาะสำหรับปัญหาผิว และไขมันแต่ละประเภท
          </p>
          <ol className="list-decimal pl-4">
            <li>
              <strong>Deep Handpiece</strong> สำหรับสลายไขมันชั้นลึก เช่น
              หน้าท้อง ต้นขา สะโพก หรือพุงล่าง
            </li>
            <li>
              <strong>Shallow Handpiece</strong> สำหรับลดเซลลูไลต์ผิวไม่เรียบ
              ผิวเปลือกส้ม ให้เรียบเนียน และกระชับขึ้น
            </li>
            <li>
              <strong>Pocket Handpiece</strong> สำหรับยกกระชับผิวบริเวณใบหน้า
              เหนียง คอ หรือต้นแขน
            </li>
          </ol>
          <p>
            เทคโนโลยีทั้งสามหัวนี้ทำงานร่วมกันอย่างแม่นยำเพื่อผลลัพธ์ที่เห็นชัดในทุกชั้นของผิว
          </p>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ระบบ Cooling -5°C ของ Onda Pro
          </h3>
          <p>
            หนึ่งในเทคโนโลยีที่ทำให้ Onda Pro แตกต่างจากเครื่องสลายไขมันทั่วไป
            คือระบบ Cooling ที่สามารถทำความเย็นได้ถึง -5°C
            โดยหัวทิปของเครื่องจะปล่อยพลังงานไมโครเวฟเฉพาะจุดลงไปยังชั้นไขมัน
            พร้อมกับระบบทำความเย็นที่คงอุณหภูมิไว้ในระดับติดลบเพื่อปกป้องผิวชั้นบนจากความร้อน
          </p>
          <p>ข้อดีของระบบ Cooling -5°C</p>
          <ul className="list-disc pl-4">
            <li>ลดอุณหภูมิผิวทันทีทำให้รู้สึกเย็นสบายขณะทำ</li>
            <li>ช่วยป้องกันการระคายเคือง แสบ หรือร้อนผิว</li>
            <li>ทำให้สามารถใช้พลังงานได้ลึก และแรงขึ้นโดยยังคงความปลอดภัย</li>
            <li>ช่วยกระตุ้นการไหลเวียนโลหิต และทำให้ผิวดูสดใสขึ้นหลังทำ</li>
          </ul>
          <p>
            ระบบนี้ทำให้การทำ Onda Pro ไม่เพียงแต่ "เห็นผลจริง" ในการสลายไขมัน
            และกระชับผิว แต่ยัง "รู้สึกสบาย" ตลอดขั้นตอนการทำ
            เหมาะสำหรับผู้ที่ต้องการผลลัพธ์ระดับมืออาชีพโดยไม่ต้องทนเจ็บ
          </p>
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row gap-4 items-center">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">Onda Pro ทำได้บริเวณไหนบ้าง</h3>
            <p>
              สามารถทำได้แทบทุกจุดที่มีไขมันสะสมหรือผิวหย่อนคล้อย เช่น ใบหน้า
              เหนียง ต้นแขน หน้าท้อง สะโพก เอว ข้างลำตัว หลัง ต้นขา น่อง
            </p>
            <p>ไม่ต้องพักฟื้นหลังทำสามารถกลับไปใช้ชีวิตประจำวันได้ทันที</p>
          </div>
          <Image
            className="size-72 object-cover"
            src="/service/onda/face-body-leg.jpg"
            alt="Onda Pro ทำได้บริเวณไหนบ้าง"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">Onda Pro เหมาะกับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่มีไขมันส่วนเกินเฉพาะจุดที่ออกกำลังกายแล้วยังไม่ลด</li>
            <li>ผู้ที่มีผิวไม่เรียบมีเซลลูไลต์</li>
            <li>ผู้ที่ต้องการกระชับผิวหลังลดน้ำหนัก</li>
            <li>คุณแม่หลังคลอดที่อยากคืนรูปร่าง</li>
            <li>ผู้ที่ต้องการเห็นผลโดยไม่ต้องผ่าตัดหรือดูดไขมัน</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
