import LatestRelease from "@/components/LatestRelease";
import Albums from "@/components/Albums";
import Singles from "@/components/Singles";

export const metadata = {
  title: "Music",
};

export default async function Page() {
  return (
    <div className="mb-12 mt-12 flex flex-col gap-12 md:mb-20 md:mt-14 md:gap-16">
      <LatestRelease />
      <Albums />
      <Singles />
    </div>
  );
}
