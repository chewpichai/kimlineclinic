import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/weight-loss-pen/banner-weight-loss-pen-4-3-th.jpg"
          alt="ปากกาลดน้ำหนักตัวช่วยลดหิว"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/weight-loss-pen/banner-weight-loss-pen-16-9-th.jpg"
          alt="ปากกาลดน้ำหนักตัวช่วยลดหิว"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            ปากกาลดน้ำหนักตัวช่วยลดหิว
            <br />
            ควบคุมความอยากอาหารลดน้ำหนักได้อย่างปลอดภัย
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/weight-loss-pen/weight-loss-pen.jpg"
              alt="Face Lifting หน้าเรียว"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">ปากกาลดน้ำหนักคืออะไร</h3>
              <p>
                ปากกาลดน้ำหนัก (Weight Loss Pen)
                คือเทคโนโลยีทางการแพทย์รูปแบบใหม่ที่ช่วยควบคุมความอยากอาหาร
                ลดหิว และปรับพฤติกรรมการกิน
                <br />
                โดยออกฤทธิ์คล้ายฮอร์โมนที่ร่างกายสร้างขึ้นตามธรรมชาติ (GLP-1)
                ซึ่งช่วยชะลอการย่อยอาหารทำให้รู้สึกอิ่มนาน
                และลดปริมาณอาหารที่รับประทานในแต่ละวัน
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่ เราใช้เฉพาะปากกาลดน้ำหนักที่ผ่าน
                อย.ไทยภายใต้การดูแลของแพทย์ผู้เชี่ยวชาญด้านการลดน้ำหนัก
                และเวชศาสตร์ความงาม
                เพื่อให้การลดน้ำหนักเป็นไปอย่างปลอดภัยเห็นผลจริง
                และเหมาะสมกับร่างกายของแต่ละบุคคล
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">
              กลไกการทำงานของปากกาลดน้ำหนัก
            </h3>
            <ul className="list-disc pl-4">
              <li>ควบคุมความอยากอาหารทำให้รู้สึกอิ่มไว</li>
              <li>ช่วยชะลอการย่อยอาหาร และดูดซึมสารอาหาร</li>
              <li>ควบคุมระดับน้ำตาลในเลือดให้สมดุล</li>
              <li>ช่วยให้ร่างกายเผาผลาญพลังงานได้ดีขึ้น</li>
              <li>เหมาะกับผู้ที่ลดน้ำหนักยากจากฮอร์โมน หรือระบบเผาผลาญต่ำ</li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-xl object-cover"
            src="/service/weight-loss-pen/how-it-works.jpg"
            alt="กลไกการทำงานของปากกาลดน้ำหนัก"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">เหมาะสำหรับใคร</h3>
          <ul className="list-disc pl-4">
            <li>ผู้ที่ต้องการลดน้ำหนักอย่างปลอดภัยไม่พึ่งยากดประสาท</li>
            <li>ผู้ที่มีความอยากอาหารมาก หรือมักทานจุบจิบ</li>
            <li>ผู้ที่มีภาวะอ้วนหรือไขมันสะสมเฉพาะจุด</li>
            <li>ผู้ที่ต้องการควบคุมระดับน้ำตาลในเลือดร่วมกับการลดน้ำหนัก</li>
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องใช้ปากกาลดน้ำหนักที่ The Kimline Clinic
          </h3>
          <ul className="list-disc pl-4">
            <li>ใช้ผลิตภัณฑ์ของแท้ผ่านการรับรองจาก อย.ไทย</li>
            <li>ดูแลโดยแพทย์ผู้เชี่ยวชาญด้านการลดน้ำหนักโดยเฉพาะ</li>
            <li>มีการประเมินสุขภาพ และดัชนีมวลกาย (BMI) ก่อนเริ่มโปรแกรม</li>
            <li>ปรับสูตรและปริมาณยาตามน้ำหนัก และเป้าหมายของแต่ละคน</li>
            <li>
              ดูแลอย่างต่อเนื่องตลอดคอร์สเพื่อความปลอดภัยและผลลัพธ์ที่ยั่งยืน
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ผลลัพธ์ที่คาดหวังได้</h3>
          <ul className="list-disc pl-4">
            <li>น้ำหนักเริ่มลดลงอย่างเห็นได้ในช่วง 2-4 สัปดาห์</li>
            <li>ลดไขมันสะสมโดยเฉพาะบริเวณหน้าท้อง ต้นแขน และต้นขา</li>
            <li>ควบคุมความอยากอาหารได้ดีขึ้น</li>
            <li>ระบบเผาผลาญทำงานสมดุลมากขึ้น</li>
            <li>
              น้ำหนักคงที่ยาวนานเมื่อทำต่อเนื่องควบคู่กับการปรับพฤติกรรมการกิน
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
