import type { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>
          <Image
            src="happy.png"
            sx={{ borderRadius: "40px", size: "stretch", pt: 4 }}
          />
        </Container>
        <Paragraph variant="heading" mb="20px">
          Ved å gjøre teknologi mer tilgjengelig, hjelper vi mennesker oppnå
          mer.
        </Paragraph>
        <Paragraph variant="standard">
          Gjennom å tilrettelegge og gjøre teknologi enklere og mer tilgjengelig
          hjelper vi mennesker å oppnå sitt potensiale.
        </Paragraph>
        <Paragraph variant="standard">
          {" "}
          Vi er stolte av å være et av nordens mest fremoverlente IT-selskaper
          og første Google Cloud-partnere.
        </Paragraph>
        <Link href="/technology" sx={{ color: "black", mb: "10px" }}>
          <Paragraph variant="standard">Les om hvordan →</Paragraph>
        </Link>
        <Container
          sx={{ backgroundColor: "blue00", borderRadius: "32px", mb: "20px" }}
        >
          <Paragraph
            sx={{
              fontSize: "24px",
              color: "ayrblue10",
              fontWeight: "500",
              px: 4,
              pt: 4,
              pb: 2,
            }}
          >
            Få noen velmente råd
          </Paragraph>
          <Paragraph variant="standardwhite" px="4" pb="2">
            Book et møte for å høre mer om hvilke arbeidsverktøy som kan gjøre
            arbeidshverdagen mer effektiv.
          </Paragraph>
          <Link href="/booking">
            <Paragraph variant="standardwhite" px="4" pb="4">
              Book en tid med oss →
            </Paragraph>
          </Link>
        </Container>

        <Grid
          columns={["1fr 1fr", "1fr 1fr"]}
          sx={{
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Image src="./brand-logos/grid-branding.svg"></Image>
          <Image src="./brand-logos/layer.svg"></Image>
          <Image src="./brand-logos/hubster.svg"></Image>
          <Image src="./brand-logos/kahoot.svg"></Image>
          <Image src="./brand-logos/schibsted.svg"></Image>
          <Image src="./brand-logos/amedia.svg"></Image>
          <Image src="./brand-logos/dyreparken.svg"></Image>
          <Image src="./brand-logos/hensikt.svg"></Image>
          <Image src="./brand-logos/hyperion.svg"></Image>
          <Image src="./brand-logos/kolonihagen.svg"></Image>
        </Grid>
        <Container backgroundColor="offwhite" sx={{ borderRadius: "8px" }}>
          <Image src="computer.svg"></Image>
          <Paragraph sx={{ fontSize: "24px", fontWeight: "700", p: 4, pb: 0 }}>
            Derfor valgte vi Google - og hvorfor vi anbefaler deg å gjøre det
            også
          </Paragraph>
          <Paragraph variant="standard" px="4" pt="3">
            Vi er stolte av å være landets aller første Google Partner. Vi har
            faktisk vært det helt siden 2009! Men hvorfor jobber vi egentlig med
            Google-teknologi?
          </Paragraph>
          <Link href="/google">
            <Paragraph p="4" sx={{ color: "black" }}>
              Les videre →
            </Paragraph>
          </Link>
        </Container>
        <Container backgroundColor="offwhite" sx={{ borderRadius: "8px" }}>
          <Image src="safety.svg"></Image>
          <Paragraph sx={{ fontSize: "24px", fontWeight: "700", p: 4, pb: 0 }}>
            Slik øker du sikkerheten i Google Workspace - 6 tips til din bedrift
          </Paragraph>
          <Paragraph variant="standard" px="4" pt="3">
            IT-sikkerhet er noe som får mye fokus nå, og dette med god grunn. Vi
            hører ofte fra media om bedrifter som blir utsatt for angrep, og om
            konsekvensene dette medfører.
          </Paragraph>
          <Link href="/safety">
            <Paragraph p="4" sx={{ color: "black" }}>
              Les videre →
            </Paragraph>
          </Link>
        </Container>
        <Container backgroundColor="offwhite" sx={{ borderRadius: "8px" }}>
          <Image src="trick.svg"></Image>
          <Paragraph sx={{ fontSize: "24px", fontWeight: "700", p: 4, pb: 0 }}>
            Ikke gå glipp av dette i Google Kalender{" "}
          </Paragraph>
          <Paragraph variant="standard" px="4" pt="3">
            Dette er de nye triksene i Google kalender om vil gjøre
            arbeidshverdagen din enda enklere.
          </Paragraph>
          <Link href="/tips">
            <Paragraph p="4" sx={{ color: "black" }}>
              Les videre →
            </Paragraph>
          </Link>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Home;
