import Image from "next/image";
import spinner from "@/public/spinner.png";

export default function Spinner() {
  return (
    <div className="spinner">
      <Image src={spinner} alt="bini logo" />
    </div>
  );
}
