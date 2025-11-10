import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/myoung/myoung-banner-4-3-th.jpg"
          alt="Myoung ยกกระชับผิวด้วยพลังงาน SFMS + RF"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/myoung/myoung-banner-16-9-th.jpg"
          alt="Myoung ยกกระชับผิวด้วยพลังงาน SFMS + RF"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            Myoung ยกกระชับผิวด้วยพลังงาน SFMS + RF
            <br />
            ยกถึงชั้นกล้ามเนื้อหน้าเฟิร์มกระชับดูเด็กขึ้น
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/myoung/model-myoung.jpg"
              alt="Myoung ยกกระชับผิวด้วยพลังงาน SFMS + RF"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">Myoung คืออะไร</h3>
              <p>
                Myoung by The Kimline Clinic หาดใหญ่
                คือเทคโนโลยียกกระชับผิวรุ่นใหม่ที่ใช้พลังงาน SFMS (Super Fine
                Micro-Stimulation) ยกได้ลึกถึงชั้น SMAS
                ชั้นเดียวกับที่ใช้ในการดึงหน้าโดยไม่ต้องผ่าตัด
              </p>
              <p>
                พร้อมพลังงาน RF (Radio Frequency) กระตุ้นการสร้างคอลลาเจน และ
                อีลาสตินช่วยให้ผิวเรียบเนียนใส และเฟิร์มขึ้นอย่างเป็นธรรมชาติ
              </p>
              <p>
                ที่ The Kimline Clinic เราเน้นความปลอดภัยผลลัพธ์เป็นธรรมชาติ
                และเครื่องมือแท้ที่ผ่านการรับรองมาตรฐาน
              </p>
              <ul className="list-disc pl-4">
                <li>ไม่ต้องใช้ยาชา</li>
                <li>ไม่ต้องผ่าตัด</li>
                <li>ไม่มีรอย ไม่มีแผล</li>
                <li>เห็นผลยกกระชับจากภายในสู่ภายนอก</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">
              บริเวณที่ทำได้ (7 จุดหัตถการ)
            </h3>
            <ul className="list-disc pl-4">
              <li>หน้าผาก</li>
              <li>ใต้ตา 2 ข้าง</li>
              <li>แก้ม 2 ข้าง</li>
              <li>ใต้คาง</li>
              <li>ท้ายทอย (ช่วยบรรเทาอาการออฟฟิศซินโดรม)</li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/myoung/treatment-areas.jpg"
            alt="myoung บริเวณที่ทำได้ (7 จุดหัตถการ)"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เหมาะสำหรับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่ไม่ต้องการผ่าตัดหรือฉีดสารแปลกปลอม</li>
            <li>ผู้ที่กลัวเข็มแต่ต้องการให้ใบหน้ากระชับขึ้น</li>
            <li>ผู้ที่อยากให้ผิวหน้าเฟิร์มเต่งตึงเหมือนออกกำลังกายให้ผิว</li>
          </ul>
          <p>ไม่ต้องพักฟื้นหลังทำสามารถกลับไปใช้ชีวิตประจำวันได้ทันที</p>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            แนะนำโปรแกรมจาก The Kimline Clinic
          </h3>
          <p>
            เพื่อผลลัพธ์ที่ดีที่สุดแนะนำทำ 4 ครั้งห่างกัน 1 สัปดาห์ภายใน 1
            เดือนเห็นการเปลี่ยนแปลงตั้งแต่ครั้งแรกผิวค่อยๆ
            ยกกระชับเรียวขึ้นอย่างเป็นธรรมชาติ
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ไม่เหมาะสำหรับ</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ป่วยโรคลมชัก</li>
            <li>ผู้ป่วยโรคหัวใจ หรือหลอดเลือดหัวใจ</li>
            <li>ผู้ที่มีไข้ หรืออยู่ระหว่างรักษาโรคมะเร็ง เนื้องอก</li>
            <li>ผู้ที่ฝังเครื่องกระตุ้นหัวใจ หรือเครื่องกระตุ้นประสาท</li>
            <li>ผู้ที่มีอุปกรณ์ไฟฟ้าในร่างกายบริเวณใบหน้า</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
