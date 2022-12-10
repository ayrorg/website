import { Box, Container, Flex, Image, Link, Paragraph } from "theme-ui";

export const Footer: React.FC = () => (
  <Flex
    sx={{ flexDirection: "column", background: "text", m: "2em", gap: "1em" }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        borderRadius: 0,
        backgroundColor: "blue00",
        p: "2em",
        gap: "1em",
      }}
    >
      <Paragraph
        sx={{ fontSize: 1, fontWeight: "700", mb: 1, fontFamily: "Work Sans" }}
        color="offwhite"
      >
        AYR AS
      </Paragraph>
      <Paragraph
        sx={{ fontSize: 1, fontWeight: "400", fontFamily: "Work Sans" }}
        color="offwhite"
      >
        Org.nr: 912519627 <br />
        <br />
        Adresseveien 34, 0000 Hadeland <br />
        Myntgata 2, 0151 Oslo{" "}
      </Paragraph>

      <Box sx={{ fontFamily: "Work Sans", mt: 1 }}>
        <Link href={"tel:+4745969999"} color="offwhite">
          +47 4596 9999
        </Link>
      </Box>
      <Link href="/privacy-policy">
        <Paragraph
          sx={{
            color: "offwhite",
            fontSize: 1,
            mt: 1,
            textDecorationLine: "underline",
            fontFamily: "Work Sans",
          }}
        >
          Personvernserklæring
        </Paragraph>
      </Link>
      <Flex
        sx={{
          alignItems: "center",
          mt: 2,
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <Link href="https://www.facebook.com/ayrnorge/" sx={{ p: "0.5em" }}>
          <Image src="./facebook.svg" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/ayr-as/"
          sx={{ p: "0.5em" }}
        >
          <Image src="./linkedin.svg" />
        </Link>
      </Flex>
    </Flex>
    <Flex sx={{ justifyContent: "center" }}>
      <Image src="gcpartner.svg" sx={{ mt: 2 }}></Image>
    </Flex>
  </Flex>
);
