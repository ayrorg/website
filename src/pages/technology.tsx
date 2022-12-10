import { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Technology: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: "2em" }}>
        <Flex sx={{ flexDirection: "column", py: "1em", gap: "2em" }}>
          <Paragraph variant="heading">
            {" "}
            Tilgjengelig teknologi gjør at vi oppnår mer
          </Paragraph>
          <Paragraph variant="standard">
            Vi mener at å gjøre teknologi enklere, mer automatisert, lettere å
            få tak i og ikke minst forståelig bidrar vi til at mennesker kan
            oppnå mer.
          </Paragraph>
          <Paragraph variant="standard">
            Det gjør vi blant annet ved å være et landets første
            Google-partnere.
          </Paragraph>
          <Flex
            sx={{
              flexDirection: "column",
              gap: "0.5em",
              fontFamily: "DM Sans",
            }}
          >
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  alignItems: "center",
                  p: "1em",
                  justifyContent: "space-between",
                }}
              >
                <Flex>Kurs og kompetanse</Flex>
                <Flex>→</Flex>
              </Flex>
            </Link>
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  alignItems: "center",
                  p: "1em",
                  justifyContent: "space-between",
                }}
              >
                <Flex>Konsulent og rådgiving</Flex>
                <Flex>→</Flex>
              </Flex>
            </Link>
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  alignItems: "center",
                  p: "1em",
                  justifyContent: "space-between",
                }}
              >
                <Flex>Drift</Flex>
                <Flex>→</Flex>
              </Flex>
            </Link>
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  alignItems: "center",
                  p: "1em",
                  justifyContent: "space-between",
                }}
              >
                <Flex>Maskinvare og infrastruktur</Flex>
                <Flex>→</Flex>
              </Flex>
            </Link>
            <Link
              href="/courses"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <Flex
                sx={{
                  height: "3em",
                  border: "0.17em solid #D9EBFF",
                  borderRadius: 0,
                  alignItems: "center",
                  p: "1em",
                  justifyContent: "space-between",
                }}
              >
                <Flex>Skytjenester</Flex>
                <Flex>→</Flex>
              </Flex>
            </Link>
          </Flex>
          <Paragraph variant="standard">
            Du kan forvente av oss at vi er nysgjerrige teknologer, som jakter
            etter å forstå problemer, hvordan de løses og menneskene vi jobber
            sammen med. Vi verdsetter de vi har rundt oss og spiller hverandre
            gode gjennom å være åpne og ærlige.
          </Paragraph>
          <Paragraph variant="standard">
            Vi ønsker å bli valgt fordi vi har bevist at vi er en partner som er
            fremoverlent, som forstår de utfordringene og evner å gi den verdien
            som er nødvendig. Mål for alle som velger AYR er over tid å bygge
            tillit, som gjør at vi blir valgt oss helhetlig samarbeidspartner på
            IT.
          </Paragraph>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            fontFamily: "DM Sans",
            gap: "2em",
            py: "2em",
          }}
        >
          <Flex sx={{ justifyContent: "center" }}>
            <Image src="/google-workspace.svg" sx={{}}></Image>
          </Flex>
          <Link href="/courses" sx={{ color: "black", textDecoration: "none" }}>
            <Flex
              sx={{
                height: "3em",
                border: "0.17em solid #D9EBFF",
                borderRadius: 0,
                alignItems: "center",
                p: "1em",
                justifyContent: "space-between",
              }}
            >
              <Flex>Sett i gang med Google Workspace</Flex>
              <Flex>→</Flex>
            </Flex>
          </Link>
        </Flex>
      </Grid>
    </Layout>
  );
};
export default Technology;
