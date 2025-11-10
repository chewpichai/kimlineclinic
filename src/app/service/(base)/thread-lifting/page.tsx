import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/thread-lifting/banner-thread-lift-4-3-th.jpg"
          alt="ร้อยไหม (Thread Lift) ยกกระชับหน้า"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/thread-lifting/banner-thread-lift-16-9-th.jpg"
          alt="ร้อยไหม (Thread Lift) ยกกระชับหน้า"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            ร้อยไหม (Thread Lift) ยกกระชับหน้าย้อนวัยผิวแบบไม่ต้องผ่าตัด
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/thread-lifting/model-thread-lift.jpg"
              alt="ร้อยไหม (Thread Lift) ยกกระชับหน้า"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">ร้อยไหมคืออะไร</h3>
              <p>
                ร้อยไหม (Thread Lift) คือเทคนิคการ
                ยกกระชับผิวหน้าโดยไม่ต้องผ่าตัดใช้ไหมละลายทางการแพทย์ชนิดพิเศษ
                เช่น PDO, PLLA และ PCL ร้อยเข้าไปใต้ผิว
                เพื่อช่วยยกกระชับชั้นผิวที่หย่อนคล้อย
                และกระตุ้นการสร้างคอลลาเจนใหม่
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่เราเลือกใช้ไหมแท้นำเข้าที่ผ่าน
                อย.ไทย
                และใช้เทคนิคเฉพาะของแพทย์ผู้เชี่ยวชาญเพื่อผลลัพธ์ที่ยกจริงปลอดภัย
                และดูเป็นธรรมชาติ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ประเภทของไหม</h3>
          <ul className="list-disc pl-4">
            <li>
              ไหม PDO (Polydioxanone)
              <p className="font-light">
                นิยมที่สุดยกกระชับได้ดีกระตุ้นคอลลาเจนเหมาะกับคนที่ต้องการเห็นผลไว
              </p>
            </li>
            <li>
              ไหม PLLA (Poly L-Lactic Acid)
              <p className="font-light">
                ช่วยกระตุ้นคอลลาเจนระยะยาวให้ผิวยืดหยุ่นและเรียบเนียนขึ้น
              </p>
            </li>
            <li>
              ไหม PCL (Polycaprolactone)
              <p className="font-light">
                รุ่นใหม่ล่าสุดอยู่ได้นาน 18-24 เดือนให้ผลลัพธ์ยกกระชับ
                และผิวแน่นฟู
              </p>
            </li>
          </ul>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/thread-lifting/thread-types.jpg"
            alt="ประเภทของไหม"
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">บริเวณที่นิยมร้อยไหม</h3>
          <ul className="list-disc pl-4">
            <li>กรอบหน้า และแนวขากรรไกร</li>
            <li>แก้มที่หย่อนคล้อย</li>
            <li>คิ้ว และหางตา</li>
            <li>คาง และใต้คาง (Double Chin)</li>
            <li>ลำคอ</li>
          </ul>
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/thread-lifting/thread-lift.jpg"
            alt="บริเวณที่นิยมร้อยไหม"
            width={1550}
            height={570}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมถึงเลือกร้อยไหมที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้ไหมแท้ผ่าน อย.ไทยเท่านั้น</li>
            <li>ทำโดยแพทย์ผู้เชี่ยวชาญด้านปรับรูปหน้า</li>
            <li>เทคนิคเฉพาะ "Kimline Signature Lift"</li>
            <li>เห็นผลยกกระชับทันทีหลังทำ และดีขึ้นต่อเนื่อง</li>
            <li>ไม่มีแผลใหญ่ไม่ต้องพักฟื้น</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ผลลัพธ์ และระยะเวลาอยู่ได้นานเท่าไหร่
          </h3>
          <p>
            ผลลัพธ์เห็นชัดทันทีหลังทำ และจะกระชับขึ้นเรื่อยๆ ใน 2-4
            สัปดาห์อยู่ได้นานประมาณ 12-24 เดือนขึ้นอยู่กับชนิดของไหม
            และการดูแลผิว
          </p>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ข้อควรระวังหลังร้อยไหม</h3>
          <ul className="list-disc pl-4">
            <li>หลีกเลี่ยงการนวดหน้า หรือทำทรีตเมนต์แรง ๆ ภายใน 1 สัปดาห์</li>
            <li>งดออกกำลังกายหนักและโดนความร้อนจัด 3-5 วัน</li>
            <li>ควรมาพบแพทย์เพื่อติดตามผลตามนัด</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
