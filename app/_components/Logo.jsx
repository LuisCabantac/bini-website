import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="z-20 md:w-16 w-12">
      <Image src={logo} alt="bini logo" priority />
    </Link>
  );
}
