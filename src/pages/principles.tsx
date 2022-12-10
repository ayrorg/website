import type { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Principles: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: "2em" }}>
        <Flex sx={{ flexDirection: "column", gap: "1em" }}>
          <Paragraph variant="heading">Våre Prinsipper</Paragraph>
          <Paragraph variant="smallheader">
            Vi har et ønske om å skape gode opplevelser og tillit, både i vårt
            møte møte med kunden og i våre kunderelasjoner. I tillegg til å eat,
            pray and love vårt hvorfor, har vi noen leveregler som vi jobber
            tett opp mot hver eneste dag.
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "1em" }}>
            Nysgjerrighet
          </Paragraph>
          <Paragraph variant="standard">
            Vi vil jakte på innsikt og spørre “hvorfor”. Det tror vi at gjør oss
            i stand til å forstå problemet som skal løses, og ikke minst
            menneskene som har problemet.{" "}
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "1em" }}>
            Gjennomtenkt Tidsforbruk
          </Paragraph>
          <Paragraph variant="standard">
            Vi vil at våre kunder skal bruke tiden sin smart, og derfor vil vi
            også gjøre det samme. Vi spør oss selv hvilke oppgave vi skal
            prioritere og hvordan vi skal løse disse best mulig for å lykkes med
            det vi gjør.{" "}
          </Paragraph>

          <Paragraph sx={{ mt: "1em" }} variant="smallheader">
            Hverdagsfeiring
          </Paragraph>
          <Paragraph variant="standard">
            Vi har en sterk feiringskultur, hvor vi støtter hverandre og feirer
            både de små og de store tingene. Hos oss har vi hver fredag
            “feedback friday”.{" "}
          </Paragraph>

          <Paragraph sx={{ mt: "1em" }} variant="smallheader">
            Kjærlig Ærlighet
          </Paragraph>
          <Paragraph variant="standard">
            I tillegg til å feire både de små og de store tingene, er det viktig
            for oss med konkrete og ærlige tilbakemeldinger. Selvfølgelig
            servert med en god porsjon kjærlighet.{" "}
          </Paragraph>

          <Paragraph sx={{ mt: "1em" }} variant="smallheader">
            Spille Hverandre Gode
          </Paragraph>
          <Paragraph variant="standard">
            Teamwork makes the dream work! Kanskje et godt brukt ordtak, men
            veldig sant. Vi gjør det vi kan for at andre rundt oss skal lykkes.{" "}
          </Paragraph>

          <Paragraph sx={{ mt: "1em" }} variant="smallheader">
            Åpen Dialog
          </Paragraph>
          <Paragraph variant="standard">
            Å være best på intern kommunikasjon. Derfor dytter vi informasjon ut
            i stedet for å vente på å bli spurt.{" "}
          </Paragraph>
        </Flex>
      </Grid>
    </Layout>
  );
};
export default Principles;
