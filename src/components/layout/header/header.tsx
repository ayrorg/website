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
            height: "460px",
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
                width: "45px",
                height: "25px",
                backgroundColor: "dark100",
                ml: "auto",
                mt: "12px",
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
              ml: "20px",
              mt: "20px",
              gap: 4,
              height: "70%",
            }}
          >
            <Link href="/about" sx={{ color: "black", textDecoration: "none" }}>
              Om oss
            </Link>
            <Link
              href="/principles"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Våre prinsipper
            </Link>
            <Link
              href="/people"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Folkene bak
            </Link>
            <Link
              href="/customer-service"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Kundestøtte
            </Link>
            <Box
              sx={{
                padding: "16px",
                gap: "10px",
                width: "364px",
                height: "55px",
                mt: "20px",
                border: "3px solid #D9EBFF",
                borderRadius: "8px",
                ml: "-20px",
              }}
            >
              <Link
                href="/become-customer"
                sx={{ color: "black", textDecoration: "none" }}
              >
                <Box sx={{ ml: "110px" }}>Bli kunde →</Box>
              </Link>
            </Box>
          </Flex>
        </Flex>
      )}

      <Container variant="header">
        <Flex sx={{ alignItems: "center", gap: 6 }}>
          <Link href={"/"}>
            <Logo
              sx={{
                maxWidth: "100px",
                cursor: "pointer",
                height: "40.87px",
                color: "text",
              }}
            />
          </Link>

          <IconButton
            sx={{
              ml: "auto",
              width: "100px",
              mr: "-30px",
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
