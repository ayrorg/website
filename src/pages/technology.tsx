import { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Technology: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>
          <Paragraph variant="heading">
            {" "}
            Tilgjengelig teknologi gjør at vi oppnår mer
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi mener at å gjøre teknologi enklere, mer automatisert, lettere å
            få tak i og ikke minst forståelig bidrar vi til at mennesker kan
            oppnå mer.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Det gjør vi blant annet ved å være et landets første
            Google-partnere.
          </Paragraph>
          <Box
            sx={{
              padding: "16px",
              gap: "10px",
              width: "100%",
              height: "55px",
              mt: "30px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between",  }}>
                <Box ml="0">Kurs og kompetanse</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
          <Box
            sx={{
              padding: "16px",
              gap: "10px",
              width: "100%",
              height: "55px",
              mt: "10px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Box ml="0">Konsulent og rådgivning</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
          <Box
            sx={{
              padding: "16px",
              gap: "10px",
              width: "100%",
              height: "55px",
              mt: "10px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Box ml="0">Drift</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
          <Box
            sx={{
              padding: "16px",
              gap: "10px",
              width: "100%",
              height: "55px",
              mt: "10px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Box ml="0">Maskinvare og infrastruktur</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
          <Box
            sx={{
              padding: "14px",
              gap: "10px",
              width: "100%",
              height: "55px",
              mt: "10px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Box ml="0">Skytjenester</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
          <Paragraph variant="standard" mt="32px">
            Du kan forvente av oss at vi er nysgjerrige teknologer, som jakter
            etter å forstå problemer, hvordan de løses og menneskene vi jobber
            sammen med. Vi verdsetter de vi har rundt oss og spiller hverandre
            gode gjennom å være åpne og ærlige.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi ønsker å bli valgt fordi vi har bevist at vi er en partner som er
            fremoverlent, som forstår de utfordringene og evner å gi den verdien
            som er nødvendig. Mål for alle som velger AYR er over tid å bygge
            tillit, som gjør at vi blir valgt oss helhetlig samarbeidspartner på
            IT.
          </Paragraph>
        </Container>
        <Container mt="32px" mb="32px" sx={{}}>
          <Flex sx={{ justifyContent: "center" }}>
            <Image src="/google-workspace.svg" sx={{}}></Image>
          </Flex>
          <Box
            sx={{
              padding: "16px",
              gap: "10px",
              width: "364px",
              height: "55px",
              mt: "32px",
              border: "3px solid #D9EBFF",
              borderRadius: "8px",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Box ml="0">Sett i gang med Google Workspace</Box>
                <Box mr="0">→</Box>
              </Flex>
            </Link>
          </Box>
        </Container>
      </Grid>
    </Layout>
  );
};
export default Technology;
