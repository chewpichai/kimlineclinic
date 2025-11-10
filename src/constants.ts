export const MAIN_MENU = [
  { name: "หน้าแรก", href: "/" },
  { name: "แพ็คเกจ", href: "/package" },
  { name: "บริการ", href: "/service" },
] as const;

export const REVIEWS = [
  { name: "หน้าเรียว", href: "/service/v-shaped-face" },
  { name: "ยกกระชับ", href: "/service/face-lifting" },
  { name: "หน้าใส", href: "/service/glowing-skin" },
  { name: "ผิวเรียบเนียน", href: "/service/smooth-skin" },
];

export const SERVICES = [
  { name: "ONDA PRO", image: "onda", href: "/service/onda" },
  { name: "MYOUNG", image: "myoung", href: "/service/myoung" },
  { name: "ฟิลเลอร์", image: "filler", href: "/service/filler" },
  { name: "โบท็อกซ์", image: "botox", href: "/service/botox" },
  { name: "ร้อยไหม", image: "thread-lifting", href: "/service/thread-lifting" },
  { name: "บูสผิว", image: "booster", href: "/service/booster" },
  {
    name: "ดริปวิตามิน และทรีทเมนต์",
    image: "drip-treatment",
    href: "/service/drip-treatment",
  },
  { name: "หน้าเรียว", image: "face-lifting", href: "/service/face-lifting" },
  { name: "กำจัดขน", image: "hair-removal", href: "/service/hair-removal" },
  { name: "ปากกาลดน้ำหนัก", image: "weight-loss-pen", href: "weight-loss-pen" },
] as const;
