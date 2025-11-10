import ReviewList from "@/components/review-list";
import ReviewDropdown from "@/components/ui/review-dropdown";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div>
        <div className="container">
          <h2 className="text-start">รีวิวคุณ xxxxxx</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              className="sm:w-1/3 object-cover"
              src="/review/model.jpg"
              alt="review"
              width={1200}
              height={1200}
            />
            <div>
              <h3 className="text-start">บริการที่ทำ</h3>
              <ul className="list-disc pl-4">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
                facilis neque atque corrupti odit qui quaerat, sapiente, in
                perferendis iste vitae magni, officiis iure libero itaque nam
                reiciendis autem.
              </p>
            </div>
          </div>
          <Link href="#" className="pill block mx-auto w-fit mt-4">
            ดูโปรโมชั่น
          </Link>
          <div className="mt-8">
            <h2>รีวิวผู้ใช้บริการ</h2>
            <ReviewDropdown />
            <ReviewList />
          </div>
        </div>
      </div>
    </main>
  );
}
