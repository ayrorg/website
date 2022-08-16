import { NextPage } from "next";
import { Container, Grid, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>
          <Paragraph variant="heading">Personvernerklæring</Paragraph>
        </Container>
        <Container sx={{}}>
          <Paragraph variant="smallheader" sx={{ mt: "20px" }}>
            1. Innledning
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            IT- og kommunikasjonsselskapet AYR AS er opptatt av å håndtere dine
            personopplysninger på en trygg og sikker måte, i tråd med gjeldende
            regelverk. Under finner du informasjon om hvordan vi håndterer
            personopplysninger som vi innhenter fra brukere av nettsiden vår,
            deltakere på kurs, leverandører, samarbeidspartnere og andre brukere
            av våre tjenester og funksjonaliteter.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            AYR AS er behandlingsansvarlig for personopplysningene som vi
            behandler. Du er alltid velkommen til å ta kontakt med oss dersom du
            har spørsmål vedrørende vår behandling av personopplysninger. Når
            det nedenfor vises til GDPR, skal dette forstås som en henvisning
            til forordning (EU) 2016/679 («GDPR»).
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            2. Hvilke opplysninger har AYR om deg og hva bruker vi det til?
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Avhengig av hvilken informasjon du gir oss, hvordan du bruker våre
            tjenester, og hvilke tillatelser du gir oss, så vil vi ha følgende
            opplysninger om deg.
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            Nettside{" "}
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Når du besøker ayr.no samler vi inn og lagrer informasjon om
            brukeratferd, vi bruker verktøyene Google analytics og Freshworks.
            Dette omfatter opplysninger om IP-leverandør, nettleser, lokasjon,
            hvilken nettside du kommer fra, hvor lang tid du bruker på siden og
            aktivitet på vår nettside. Grunnen til at vi samler inn disse
            opplysningene er fordi vi vil optimalisere våre nettsider til våre
            besøkende, i tillegg til at vi ønsker å gjøre analyser av mønstre og
            trender på bruken av nettsiden vår. Anonymiserte opplysninger som
            ikke kan knyttes til deg vil bli brukt og beholdt for statistiske og
            analytiske formål.{" "}
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            Chat og e-post{" "}
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Dersom du chatter med oss på nettsiden eller sender oss en e-post
            vil vi registrere og behandle meldingen i den grad det er nødvendig
            for å svare på henvendelsen din. Chat og e-postkorrespondanse vil
            bli lagret så lenge det er nødvendig for disse formålene.
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            Google{" "}
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            AYR er Google Cloud Partner og reseller av Google Workspace og GCP,
            og bistår kunder i å bruke disse produktene.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi vil derfor ha tilgang til følgende informasjon: <br></br>
            Brukerens navn <br></br>
            Brukerens epostadresse <br></br>
            Brukerens private epostadresse <br></br>
            ​Brukerens tlf (Når nødvendig){" "}
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            Freshdesk{" "}
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Freshdesk er programmet vi bruker til å håndtere spørsmål og
            e-poster fra kundene våre.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi vil derfor ha tilgang til følgende informasjon: Brukerens navn{" "}
            <br></br>
            Brukerens epostadresse <br></br>
            Brukerens tlf (Når nødvendig) <br></br>
            Brukerens arbeidssted (bedrift)<br></br>
            Innholdet i sakene som brukeren har sendt inn{" "}
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            Nyhetsbrev og digital markedsføring
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Nyhetsbrev og digital markedsføring Tar du kontakt med oss ved å
            fylle ut kontaktskjema eller lignende så kan innsamlede opplysninger
            bli brukt til å sende deg tips, informasjon og nyhetsbrev om våre
            produkter via e-post. I våre kontaktskjema henter vi inn eksempelvis
            e-postadresse, navn, telefonnummer og andre opplysninger som du
            legger igjen. Opplysningene du legger igjen vil bli brukt for å
            tilpasse nyhetsbrev og budskap til deg.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Tilpasning av budskap gjøres ved hjelp av analyse av opplysninger du
            har oppgitt til oss i kombinasjon med opplysninger om aktiviteten
            din på ayr.no. Vi vil ikke sende deg tilbud via e-post eller andre
            elektroniske kommunikasjonsmetoder med mindre det foreligger et
            eksisterende kundeforhold, eller du uttrykkelig har samtykket til
            dette.
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            3. Informasjonskapsler(Cookies)
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi bruker cookies på våre nettsider for å sikre funksjonalitet på
            nettsiden, analysere nettrafikk og se hvilke områder på vårt
            nettsted du har besøkt. Informasjonskapsler er små informasjonsfiler
            som blir liggende igjen i nettleseren din for at tjenesten vår skal
            fungere best mulig. Ved å benytte våre nettsider, hente informasjon
            eller benytte deg av våre tjenester, samtykker du i at det settes
            informasjonskapsler i din nettleser. De fleste nettlesere er
            innstilt slik at de automatisk aksepterer cookies. Dersom du ikke
            vil akseptere vår bruk av cookies, kan du trekke tilbake ditt
            samtykke ved å endre innstillingene i nettleseren.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            På ayr.no bruker vi cookies fra følgende nettsteder: <br></br>-
            Google Analytics <br></br>- Google Ads<br></br>- Google Tag Manager
            <br></br>- Freshworks<br></br>- Facebook<br></br>- Instagram
            <br></br>- LinkedIn<br></br>
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            4. Dine rettigheter
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Du kan ha rett til å be oss å: <br></br>- Gi deg ytterligere
            informasjon om hvordan vi behandler dine personopplysninger.{" "}
            <br></br>- Gi deg en kopi av personopplysninger om deg.<br></br>-
            Oppdatere dine personopplysninger.<br></br>- Slette opplysninger som
            vi ikke lengre har grunnlag til å oppbevare.<br></br>- Begrense
            eller stoppe behandlingen av dine opplysninger<br></br>- Motsette
            deg automatiske individuelle avgjørelser, inkludert profilering.
            <br></br>- Gi deg opplysninger du har gitt til oss i en strukturert,
            alminnelig anvendt og maskinlesbart format eller, der det er teknisk
            mulig, be oss om å overføre disse til en annen virksomhet.<br></br>-
            Trekke tilbake eventuelle samtykker du har gitt oss.<br></br>
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Ta gjerne kontakt med oss hvis du vil ha mer informasjon om dette.
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Hvis du mener at vi behandler personopplysninger i strid med
            personopplysningsloven, har du rett til å klage til Datatilsynet.
            Før du eventuelt gjør dette, vil vi gjerne at du kontakter oss slik
            at vi kan besvare dine spørsmål eller oppklare eventuelle
            misforståelser. Kontaktinformasjon finner du under punkt nummer 6.
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            5. Endringer i personvernerklæringen
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Vi vil kunne oppdatere personvernerklæringen fra tid til annen. Du
            vil få beskjed om endringer av betydning. Du vil alltid finne siste
            versjon av vår personvernerklæring på nettsiden ayr.no
          </Paragraph>
          <Paragraph variant="smallheader" sx={{ mt: "32px" }}>
            6. Kontaktinformasjon
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Hvis du ønsker å komme i kontakt med oss, kan du benytte følgende
            kontaktinformasjon:<br></br>
            AYR AS<br></br>
            Dronningens gate 8B<br></br>
            0152 Oslo<br></br>
            Tlf: 459 69 999<br></br>
          </Paragraph>
          <Paragraph variant="standard" mt="32px">
            Personvernansvarlig: Bjørn Niklas Sjøstrøm E-post: bns@ayr.no
          </Paragraph>
        </Container>
      </Grid>
    </Layout>
  );
};
export default PrivacyPolicy;
