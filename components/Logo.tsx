import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="z-20 w-12 md:w-14">
      <Image src={logo} alt="bini logo" priority />
    </Link>
  );
}
