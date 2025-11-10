import ServiceList from "@/components/service-list";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <section>
        <div className="container">
          <h2>บริการของเรา</h2>
          <ServiceList />
        </div>
      </section>
    </>
  );
}
