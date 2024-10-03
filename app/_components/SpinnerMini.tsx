import Image from "next/image";

import spinner from "@/public/spinner.png";

export default function SpinnerMini() {
  return (
    <div className="spinner mini">
      <Image src={spinner} alt="bini logo" />
    </div>
  );
}
