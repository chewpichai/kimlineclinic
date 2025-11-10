import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/face-lifting/banner-face-lifting-4-3-th.jpg"
          alt="Face Lifting หน้าเรียว"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/face-lifting/banner-face-lifting-16-9-th.jpg"
          alt="Face Lifting หน้าเรียว"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            Face Lifting หน้าเรียวยกกระชับได้รูปอย่างเป็นธรรมชาติ
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/face-lifting/thread-lift.jpg"
              alt="Face Lifting หน้าเรียว"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">Face Lifting คืออะไร</h3>
              <p>
                โปรแกรมหน้าเรียว ยกกระชับ (Face Lifting) คือการรวมเทคโนโลยี
                และหัตถการเพื่อช่วยยกกระชับผิวลดไขมันส่วนเกิน
                และปรับรูปหน้าให้เรียวสวยได้สัดส่วนโดยไม่ต้องผ่าตัด
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่ เราใช้ทั้งเทคโนโลยีทันสมัยอย่าง
                Ultraformer MPT และการฉีดสลายไขมัน (Fat Dissolve)
                รวมถึงการดูแลด้วยเทคนิคเฉพาะ "Kimline Signature Lift"
                เพื่อให้ผลลัพธ์ดูเป็นธรรมชาติ และเหมาะกับโครงหน้าของแต่ละบุคคล
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <Image
            className="rounded-lg sm:rounded-2xl lg:rounded-3xl"
            src="/service/face-lifting/face-lifting-th.jpg"
            alt="บริการในโปรแกรม Face Lifting"
            width={1200}
            height={1200}
          />
          <h3 className="text-2xl text-start">
            บริการในโปรแกรม Face Lifting ที่ The Kimline Clinic
          </h3>
          <ol className="list-decimal pl-4">
            <li>
              อัลตร้าฟอร์เมอร์ เอ็มพีที (Ultraformer MPT)
              <p className="font-light">
                เทคโนโลยียกกระชับผิวด้วยคลื่นอัลตราซาวด์ (HIFU)
                ที่สามารถยกถึงชั้น SMAS
                ชั้นกล้ามเนื้อใต้ผิวที่ศัลยแพทย์ใช้ในการดึงหน้าช่วยยกกระชับผิวหย่อนคล้อย
                ลดเหนียงกรอบหน้าชัดขึ้นเห็นผลทันทีหลังทำ
              </p>
            </li>
            <li>
              ฉีดสลายไขมัน (Fat Dissolve Injection)
              <p className="font-light">
                ช่วยกำจัดไขมันสะสมเฉพาะจุด เช่น แก้ม เหนียง กรอบหน้า
                ทำให้ใบหน้าเรียวเล็กลงอย่างเป็นธรรมชาติเหมาะกับผู้ที่มีไขมันส่วนเกินโดยไม่อยากผ่าตัด
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เหมาะสำหรับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่มีผิวหย่อนคล้อย หรือกรอบหน้าไม่ชัด</li>
            <li>ผู้ที่มีไขมันสะสมบริเวณแก้ม เหนียง</li>
            <li>ผู้ที่ต้องการหน้าเรียวได้รูปโดยไม่ต้องผ่าตัด</li>
            <li>ผู้ที่อยากให้ใบหน้าดูอ่อนเยาว์ กระชับดูเฟิร์มขึ้น</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องยกกระชับหน้าเรียวที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้เครื่อง Ultraformer MPT ของแท้มาตรฐานระดับโลก</li>
            <li>ฉีดโดยแพทย์ผู้เชี่ยวชาญด้านปรับรูปหน้า และยกกระชับผิว</li>
            <li>
              เทคนิคเฉพาะ "Kimline Signature Lift" เพื่อผลลัพธ์ที่เป็นธรรมชาติ
              และปลอดภัย
            </li>
            <li>เห็นผลตั้งแต่ครั้งแรกไม่ต้องพักฟื้น</li>
            <li>คลินิกได้มาตรฐานปลอดภัย สะอาดทุกขั้นตอน</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ผลลัพธ์หลังทำ</h3>
          <ul className="list-disc pl-4">
            <li>ผิวหน้าดูกระชับเรียวขึ้นอย่างเป็นธรรมชาติ</li>
            <li>กรอบหน้าคมชัดลดเหนียง และความหย่อนคล้อย</li>
            <li>ผิวเรียบเนียน และยืดหยุ่นขึ้น</li>
            <li>ผลลัพธ์อยู่ได้นาน 6-12 เดือน (ขึ้นอยู่กับสภาพผิวและการดูแล)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
