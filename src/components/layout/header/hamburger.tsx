import { FC, SVGProps } from "react";
import { ThemeUIStyleObject } from "theme-ui";

type Props = ThemeUIStyleObject & SVGProps<SVGSVGElement>;

export const Hamburger: FC<Props> = () => {
  return (
    <svg
      width="50"
      height="46"
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" y="16" width="18" height="2" fill="#2B2B2A" />
      <rect x="16" y="22" width="18" height="2" fill="#2B2B2A" />
      <rect x="16" y="28" width="18" height="2" fill="#2B2B2A" />
    </svg>
  );
};
