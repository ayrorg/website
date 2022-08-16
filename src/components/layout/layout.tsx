import React from "react";
import { Flex } from "theme-ui";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export interface InputProps {
  children: React.ReactElement;
}

export const Layout: React.FC<InputProps> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      //gap: 0,
      pb: 0,
      backgroundColor: "blue06",
    }}
  >
    <Header />
    <Flex
      sx={{
        alignItems: "stretch",
      }}
    >
      {children}
    </Flex>

    <Footer />
  </Flex>
);
