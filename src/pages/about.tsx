import type { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const About: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>

          <Paragraph variant="heading">
            Bruk mer tid på det du synes er gøy!
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi hjelper deg med IT-drift og smart-jobbing med Google-teknologi
          </Paragraph>
          <Grid mt="32px" columns={["1fr 1fr", "1fr 1fr"]}>
            <Image
              src="anita_cathrine.png"
              sx={{ borderRadius: "8px" }}
            ></Image>
            <Image src="simenbns.png" sx={{ borderRadius: "8px" }}></Image>
          </Grid>

          <Paragraph mt="32px" variant="smallheader">
            Om Oss
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            AYR er Norges eldste Google Cloud Partner - og har spisskompetanse
            innenfor Google-teknologi. Dette betyr at vi kan hjelpe med alt fra
            supportspørsmål når det kommer til Google Workspace til arkitektur
            innenfor Google Cloud Platform.{" "}
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Som en IT-partner kan vi drifte hele kontoret til bedriften din -
            selvsagt med utgangspunkt i teknologien fra Google.
          </Paragraph>

          <Paragraph mt="32px" variant="smallheader">
            Våre kunder
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Vi er i dag Google Partneren til mange små og store bedrifter - og
            bistår dem i arbeidshverdagen med alle IT-relaterte spørsmål. Tillit
            og partnerskap er to ting som er viktige i alle våre kundeforhold.
            Når man blir kjent med hverandre over tid så vet vi hva dere har
            behov for - og hvordan vi kan gjøre arbeidshverdagen deres lettere.
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Resultatet er at våre kunder bruker mindre tid på IT - og mer på det
            de faktisk synes er gøy å drive med.
          </Paragraph>
          <Paragraph mt="32px" variant="smallheader">
            Google-jentene
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Helt fra starten har AYR vært et nytenkende firma som har fokus på
            vekst og utvikling. Som trolig det eneste tech-firmaet i Norge
            består ledergruppen i AYR kun av kvinner - eller Google-jentene som
            trekløveret kaller seg.
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Alle vi i AYR gleder oss til hver eneste arbeidsdag med de beste
            kundene, de dyktigste kollegaene og de mest spennende
            arbeidsoppgavene.
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Har du lyst å bli bedre kjent med oss - vi tar gjerne en digital
            kaffe på Google Meet - send oss en e-post til <s></s>
            <Link href="mailto:kontoret@ayr.no" color="black">
              kontoret@ayr.no
            </Link>
          </Paragraph>
          <Paragraph variant="standard" mt="20px">
            Lurer du på hvordan vi behandler dine personopplysninger, ta gjerne
            en kikk på vår <s></s>
            <Link href="/privacy-policy" color="black">
              {" "}
              personvernerklæring{" "}
            </Link>
          </Paragraph>
        </Container>
      </Grid>
    </Layout>
  );
};

export default About;
