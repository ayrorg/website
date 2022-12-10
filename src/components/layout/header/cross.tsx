import { FC, SVGProps } from "react";
import { ThemeUIStyleObject } from "theme-ui";

type Props = ThemeUIStyleObject & SVGProps<SVGSVGElement>;

export const Cross: FC<Props> = () => {
  return (
    <svg
      width="45"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.11084"
        width="45.8892"
        height="45.9234"
        rx="8"
        fill="#7FBCFF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.0577 21.6977L17.3943 16L16.1278 17.2588L21.795 22.9603L16.1108 28.6445L17.3735 29.9072L23.0539 24.2268L28.7162 29.9234L29.9827 28.6645L24.3165 22.9641L30 17.2807L28.7374 16.018L23.0577 21.6977Z"
        fill="#232323"
      />
    </svg>
  );
};
