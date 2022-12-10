import { FC, SVGProps } from "react";
import { ThemeUIStyleObject } from "theme-ui";

type Props = ThemeUIStyleObject & SVGProps<SVGSVGElement>;

export const Hamburger: FC<Props> = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="2" fill="#2B2B2A" />
      <rect y="6" width="18" height="2" fill="#2B2B2A" />
      <rect y="12" width="18" height="2" fill="#2B2B2A" />
    </svg>
  );
};
