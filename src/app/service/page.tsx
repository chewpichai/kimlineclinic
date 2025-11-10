import { SERVICES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div>
        <div className="container">
          <h2>บริการของเรา</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({ name, image, href }) => (
              <li key={name}>
                <Link href={href}>
                  <div className="relative group">
                    <Image
                      className="rounded-2xl shadow"
                      src={`/service/${image}-th.jpg`}
                      alt={name}
                      width={1200}
                      height={1200}
                    />
                    <Image
                      className="hidden xl:block absolute top-0 left-0 group-hover:hidden rounded-2xl"
                      src={`/service/${image}.jpg`}
                      alt={name}
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <p className="text-center mt-2">{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
