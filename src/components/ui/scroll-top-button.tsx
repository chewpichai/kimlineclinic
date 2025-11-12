"use client";

import Image from "next/image";

export default function ScrollTopButton() {
  return (
    <button
      className="bg-secondary size-10 flex items-center justify-center rounded-full text-white shadow-md"
      onClick={() => (document.documentElement.scrollTop = 0)}
    >
      <Image
        className="size-5"
        src="/icon-up.svg"
        alt="scroll to top"
        width={50}
        height={53}
      />
    </button>
  );
}
