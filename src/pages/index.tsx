import type { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: "2em" }}>
        <Flex sx={{ flexDirection: "column", py: "1em" }}>
          <Image src="happy.png" sx={{ borderRadius: 1, size: "stretch" }} />
        </Flex>
        <Flex sx={{ flexDirection: "column", py: "1em", gap: "1em" }}>
          <Paragraph variant="heading" sx={{ mt: 1 }}>
            Ved å gjøre teknologi mer tilgjengelig, hjelper vi mennesker oppnå
            mer.
          </Paragraph>
          <Paragraph variant="standard">
            Gjennom å tilrettelegge og gjøre teknologi enklere og mer
            tilgjengelig hjelper vi mennesker å oppnå sitt potensiale.
          </Paragraph>
          <Paragraph variant="standard">
            {" "}
            Vi er stolte av å være et av nordens mest fremoverlente IT-selskaper
            og første Google Cloud-partnere.
          </Paragraph>
          <Link href="/technology" sx={{ color: "black" }}>
            <Paragraph variant="standard">Les om hvordan</Paragraph>
          </Link>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            backgroundColor: "blue00",
            borderRadius: 1,
            p: "2em",
            gap: "0.625em",
          }}
        >
          <Paragraph
            sx={{
              fontSize: 2,
              color: "ayrblue10",
              fontWeight: "500",
            }}
          >
            Få noen velmente råd
          </Paragraph>
          <Paragraph variant="standardwhite">
            Book et møte for å høre mer om hvilke arbeidsverktøy som kan gjøre
            arbeidshverdagen mer effektiv.
          </Paragraph>
          <Link href="/booking">
            <Paragraph
              variant="standardwhite"
              sx={{ textDecorationLine: "underline" }}
            >
              Book en tid med oss
            </Paragraph>
          </Link>
        </Flex>

        <Grid
          columns={["1fr 1fr", "1fr 1fr"]}
          sx={{
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 4,
            py: "1em",
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
        <Flex
          sx={{
            flexDirection: "column",
            borderRadius: 0,
            backgroundColor: "offwhite",
          }}
        >
          <Image
            src="computer.png"
            sx={{
              size: "stretch",
            }}
          />
          <Flex sx={{ flexDirection: "column", p: "2em", gap: "0.625em" }}>
            <Paragraph sx={{ fontSize: 2, fontWeight: "700" }}>
              Derfor valgte vi Google - og hvorfor vi anbefaler deg å gjøre det
              også
            </Paragraph>
            <Paragraph variant="standard">
              Vi er stolte av å være landets aller første Google Partner. Vi har
              faktisk vært det helt siden 2009! Men hvorfor jobber vi egentlig
              med Google-teknologi?
            </Paragraph>
            <Link href="/google">
              <Paragraph sx={{ color: "black" }}>Les videre</Paragraph>
            </Link>
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            borderRadius: 0,
            backgroundColor: "offwhite",
          }}
        >
          <Image
            src="./safety.png"
            sx={{
              size: "stretch",
            }}
          />
          <Flex sx={{ flexDirection: "column", p: "2em", gap: "0.625em" }}>
            <Paragraph sx={{ fontSize: 2, fontWeight: "700" }}>
              Slik øker du sikkerheten i Google Workspace - 6 tips til din
              bedrift
            </Paragraph>
            <Paragraph variant="standard">
              IT-sikkerhet er noe som får mye fokus nå, og dette med god grunn.
              Vi hører ofte fra media om bedrifter som blir utsatt for angrep,
              og om konsekvensene dette medfører.
            </Paragraph>
            <Link href="/safety">
              <Paragraph sx={{ color: "black" }}>Les videre</Paragraph>
            </Link>
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            borderRadius: 0,
            backgroundColor: "offwhite",
          }}
        >
          <Image
            src="trick.png"
            sx={{
              size: "stretch",
            }}
          />
          <Flex sx={{ flexDirection: "column", p: "2em", gap: "0.625em" }}>
            <Paragraph sx={{ fontSize: 2, fontWeight: "700" }}>
              Ikke gå glipp av dette i Google Kalender{" "}
            </Paragraph>
            <Paragraph variant="standard">
              Dette er de nye triksene i Google kalender om vil gjøre
              arbeidshverdagen din enda enklere.
            </Paragraph>
            <Link href="/tips">
              <Paragraph sx={{ color: "black" }}>Les videre</Paragraph>
            </Link>
          </Flex>
        </Flex>
      </Grid>
    </Layout>
  );
};

export default Home;
