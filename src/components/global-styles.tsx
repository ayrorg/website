import { Global } from "@emotion/react";
import { Theme } from "theme-ui";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={(_: Theme) => ({
      html: {},
      body: { margin: 0 },
      "*": {
      },
    })}
  />
);
