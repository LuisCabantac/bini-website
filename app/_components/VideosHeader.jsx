import Button from "@/app/_components/Button";
import HeaderTitle from "@/app/_components/HeaderTitle";

export default function VideosHeader({ href, children }) {
  return (
    <div className="flex justify-between items-center md:mb-6 mb-4">
      <HeaderTitle type="h2">{children}</HeaderTitle>
      <Button href={href} size="medium">
        See all
      </Button>
    </div>
  );
}
