import ButtonLink from "@/app/_components/ButtonLink";
import HeaderTitle from "@/app/_components/HeaderTitle";
import { seeAllLinkBtn } from "@/app/_lib/themes";

export default function VideosHeader({ href, children }) {
  return (
    <div className="flex justify-between items-center md:mb-6 mb-4">
      <HeaderTitle type="h2">{children}</HeaderTitle>
      <ButtonLink href={href} btnTheme={seeAllLinkBtn}>
        See all
      </ButtonLink>
    </div>
  );
}
