import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          className="w-full sm:hidden"
          src="/service/botox/banner-botox-4-3-th.jpg"
          alt="โบท็อกซ์ (Botox) ปรับรูปหน้าลดริ้วรอย"
          width={1024}
          height={768}
        />
        <Image
          className="w-full hidden sm:block"
          src="/service/botox/banner-botox-16-9-th.jpg"
          alt="โบท็อกซ์ (Botox) ปรับรูปหน้าลดริ้วรอย"
          width={1920}
          height={720}
        />
      </section>

      <section>
        <div className="container">
          <h1 className="border-b border-b-secondary pb-4">
            โบท็อกซ์ (Botox)
            ปรับรูปหน้าลดริ้วรอยคืนความอ่อนเยาว์อย่างเป็นธรรมชาติ
            <br />
            ที่ The Kimline Clinic หาดใหญ่
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Image
              className="size-72 rounded-4xl object-cover"
              src="/service/botox/model-botox.jpg"
              alt="โบท็อกซ์ (Botox) ปรับรูปหน้าลดริ้วรอย"
              width={1200}
              height={1200}
            />
            <div className="space-y-2">
              <h3 className="text-start">โบท็อกซ์คืออะไร</h3>
              <p>
                โบท็อกซ์ (Botox) เป็นหนึ่งในทรีตเมนต์ยอดนิยมที่ช่วยลดริ้วรอย
                ปรับรูปหน้า และยกกระชับผิวโดยไม่ต้องผ่าตัด
              </p>
              <p>
                สารโบทูลินัมท็อกซิน (Botulinum Toxin Type A)
                จะช่วยยับยั้งการทำงานของกล้ามเนื้อชั่วคราวทำให้ริ้วรอยตื้นขึ้น
                และรูปหน้าดูเรียวขึ้นอย่างเป็นธรรมชาติ
              </p>
              <p>
                ที่ The Kimline Clinic หาดใหญ่เราใช้เฉพาะ
                โบท็อกซ์แท้จากบริษัทนำเข้าถูกต้องตามมาตรฐาน อย.
                พร้อมเทคนิคฉีดเฉพาะ "Kimline Signature"
                ที่ให้ผลลัพธ์สวยเป็นธรรมชาติ ไม่แข็ง ไม่ปลอม
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">ประเภทของการฉีดโบท็อกซ์</h3>
          <ol className="list-decimal pl-4">
            <li>
              โบท็อกซ์ลดริ้วรอย (Wrinkle Reduction Botox)
              <p className="font-light">
                เหมาะสำหรับลดเลือนริ้วรอยบนใบหน้า เช่น หน้าผาก หางตา ระหว่างคิ้ว
                ทำให้ใบหน้าดูเรียบเนียนอ่อนเยาว์ขึ้น
              </p>
            </li>
            <li>
              โบท็อกซ์ปรับรูปหน้า (Facial Slimming Botox)
              <p className="font-light">
                ช่วยลดกราม
                และปรับรูปหน้าให้เรียวเล็กเหมาะสำหรับผู้ที่มีกล้ามเนื้อกรามใหญ่ใบหน้าดูเรียวขึ้นโดยไม่ต้องศัลยกรรม
              </p>
            </li>
            <li>
              โบท็อกซ์ลิฟต์กรอบหน้า (Face Lift Botox)
              <p className="font-light">
                ใช้เทคนิคการฉีดบริเวณแนวกรามเพื่อยกผิวให้ตึงกระชับช่วยให้กรอบหน้าคมชัดดูกระชับขึ้น
              </p>
            </li>
            <li>
              โบท็อกซ์ลดเหงื่อ (Sweat Control Botox)
              <p className="font-light">
                ฉีดบริเวณรักแร้ ฝ่ามือ หรือฝ่าเท้า เพื่อลดเหงื่อ
                และกลิ่นกายเหมาะสำหรับผู้ที่มีเหงื่อออกมากผิดปกติ
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl text-start">ยี่ห้อที่นิยม</h3>
            <ul className="list-disc pl-4">
              <li>
                Allergan (อัลเลอร์แกน)
                <br />
                <span className="font-light">
                  โบท็อกซ์พรีเมียมจากอเมริกาผลลัพธ์แม่นยำเรียบเนียนอยู่ได้นาน
                  4-6 เดือน
                </span>
              </li>
              <li>
                Nabota (นาโบตะ)
                <br />
                <span className="font-light">
                  โบท็อกซ์เกาหลีคุณภาพสูง ผ่าน อย.ไทย และ US FDA
                  ให้ผลลัพธ์ธรรมชาติ
                </span>
              </li>
              <li>
                Neuronox (นิวรูนอคซ์)
                <br />
                <span className="font-light">
                  โบท็อกซ์ยอดนิยมราคาเข้าถึงง่าย เห็นผลไว เนื้อยากระจายตัวดี
                </span>
              </li>
            </ul>
          </div>
          <Image
            className="size-72 rounded-4xl"
            src="/service/botox/popular-brands-th.jpg"
            alt="ประเภทของฟิลเลอร์"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-accent">
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            ทำไมต้องฉีดโบท็อกซ์ที่ The Kimline Clinic
          </h3>
          <ol className="list-decimal pl-4">
            <li>ใช้โบท็อกซ์แท้ 100% จากบริษัทนำเข้าโดยตรง</li>
            <li>ฉีดโดยแพทย์ผู้เชี่ยวชาญด้านการปรับรูปหน้า</li>
            <li>
              เทคนิคเฉพาะ "Kimline Signature" ให้ผลลัพธ์ดูเป็นธรรมชาติ ไม่แข็ง
              ไม่หลอกตา
            </li>
            <li>ประเมินรูปหน้า และให้คำแนะนำฟรีก่อนทำ</li>
            <li>ห้องบริการสะอาด ปลอดภัยได้มาตรฐานคลินิกความงามระดับสากล</li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container space-y-2">
          <h3 className="text-2xl text-start">
            คำถามที่พบบ่อยเกี่ยวกับโบท็อกซ์
          </h3>
          <div>
            <p>Q: โบท็อกซ์อยู่ได้นานแค่ไหน</p>
            <p>
              A: โดยทั่วไปจะอยู่ได้ประมาณ 4-6 เดือนขึ้นอยู่กับแบรนด์
              และตำแหน่งที่ฉีด
            </p>
          </div>
          <div>
            <p>Q: หลังฉีดโบท็อกซ์ต้องดูแลอย่างไร</p>
            <p>
              A: ควรหลีกเลี่ยงการนอนราบภายใน 4 ชั่วโมงแรก
              และไม่ควรนวดหน้าหรือออกกำลังกายหนักใน 24 ชั่วโมงหลังทำ
            </p>
          </div>
          <div>
            <p>Q: โบท็อกซ์แท้ดูยังไง</p>
            <p>
              A: ต้องมีกล่องซีลครบ
              มีเลขล็อตสามารถตรวจสอบได้จากบริษัทผู้นำเข้าโดยตรง
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
