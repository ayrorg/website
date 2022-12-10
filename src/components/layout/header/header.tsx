import { useRouter } from "next/router";
import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  NavLink,
  Paragraph,
} from "theme-ui";
import { Cross } from "./cross";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "transparent",
      }}
    >
      {menuIsOpen && (
        <Flex
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            backgroundColor: "blue04",
            width: "100%",
            height: "26em",
            zIndex: 2,
            display: "flex",
            p: 4,
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
          }}
        >
          <Flex
            sx={{ alignItems: "center", height: "fit-content", width: "100%" }}
          >
            <IconButton
              sx={{
                width: "3em",
                backgroundColor: "dark100",
                mt: "0.6em",
                ml: "auto",
              }}
              onClick={() => setMenuIsOpen(false)}
            >
              <Cross />
            </IconButton>
          </Flex>

          <Flex
            sx={{
              flexDirection: "column",
              fontFamily: "DM Sans",
              mr: "auto",

              mt: 1,
              gap: 4,
              width: "100%",
              height: "70%",
            }}
          >
            <Link
              href="/about"
              sx={{ color: "black", textDecoration: "none", ml: 1 }}
            >
              Om oss
            </Link>
            <Link
              href="/principles"
              sx={{ color: "black", textDecoration: "none", ml: 1 }}
            >
              Våre prinsipper
            </Link>
            <Link
              href="/people"
              sx={{ color: "black", textDecoration: "none", ml: 1 }}
            >
              Folkene bak
            </Link>
            <Link
              href="/customer-service"
              sx={{
                color: "black",
                textDecoration: "none",
                mb: 1,
                ml: 1,
              }}
            >
              Kundestøtte
            </Link>
            <Link
              href="/become-customer"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  alignItems: "center",
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  justifyContent: "center",
                }}
              >
                <Box sx={{}}>Bli kunde →</Box>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}

      <Container variant="header">
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Link href={"/"}>
            <Logo />
          </Link>

          <IconButton
            sx={{
              p: "0",
              m: "0.6em",
            }}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <Hamburger />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
};
