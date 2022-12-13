import { NextPage } from "next";
import { Box, Button, Checkbox, Container, Flex, Grid, Image, Input, Label, Link, Paragraph, Radio, Select, Slider, Textarea } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Courses: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: "2em" }}>
        <Flex sx={{ flexDirection: "column", gap: "1em", pt: "1em" }}>
          <Flex sx={{ flexDirection: "column" }}>
            <Paragraph
              sx={{
                fontSize: 2,
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              "AYR guidet meg gjennom grunnleggende verktøy for kommunikasjon og
              samarbeid på tvers av hele arbeidsflaten. Et verdifullt kurs som
              jeg kan anbefale videre"
            </Paragraph>
            <Paragraph
              sx={{
                fontSize: 0,
                fontWeight: "300",
                textAlign: "right",
              }}
            >
              {" "}
              - Janne Syversen, Miles
            </Paragraph>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              borderRadius: 0,
              backgroundColor: "offwhite",
              mt: "1em",
            }}
          >
            <Image
              src="google-tutorial-gif.gif"
              sx={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                p: "2em",
                backgroundColor: "imagebackground"
              }}
            />
            <Flex sx={{ flexDirection: "column", p: "2em", gap: "0.625em" }}>
              <Paragraph sx={{ fontSize: 2, fontWeight: "700" }}>
                Kurs i Google Workspace
              </Paragraph>
              <Paragraph variant="standard">
                Enten bedriften er helt ny på Google Workspace - eller dere
                ønsker å jobbe smartere med enkeltprogrammene, så har vi kursene
                for dere. Våre kurs vil gi deg innføring i verktøyene, slik de
                er ment til å brukes og kan holdes både hos dere eller digitalt
                på Google Meet.
              </Paragraph>
              <Paragraph variant="standard">
              Våre kursholdere har kurset mer enn 3000 Google Workspace-brukere i hele Norge, og hjelper bedrifter hver eneste uke med overgangen fra en plattform til Google Workspace.
              </Paragraph>
              <Link href="/course-google-workspace">
                <Paragraph sx={{ color: "black" }}>Finn ut mer</Paragraph>
              </Link>
            </Flex>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              borderRadius: 0,
              backgroundColor: "offwhite",
              mt: "1em",
            }}
          >
            <Image
              src="courseman.png"
              sx={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                p: "2em",
                backgroundColor: "imagebackground"
              }}
            />
            <Flex sx={{ flexDirection: "column", p: "2em", gap: "0.625em" }}>
              <Paragraph sx={{ fontSize: 2, fontWeight: "700" }}>
              Skreddersydde kurs
              </Paragraph>
              <Paragraph variant="standard">
              Alle som jobber i AYR brenner for sitt fagfelt - og er stadig oppdatert på de nyeste trendene både innenfor digitalisering og teknologi. Er du på jakt etter dyktige kurs- eller foredragsholdere innenfor disse temaene, så ta gjerne kontakt med oss! Vi skreddersyr og tilpasser, slik at vi treffer målgruppen best mulig. Våre kursholdere er vandt med å holde kurs og foredrag både live og via Google Meet.
              </Paragraph>
              <Link href="/course-google-workspace">
                <Paragraph sx={{ color: "black" }}>Ta kontakt</Paragraph>
              </Link>
            </Flex>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              borderRadius: 0,
              backgroundColor: "offwhite",
              mt: "1em",
              p: "2em", gap: "0.625em"
            }}
          >
            <Flex sx={{ flexDirection: "column", alignItems: "center", gap: "1em", mb:"1em"}}>
              <Paragraph variant="partheader">
               Kontakt oss
               </Paragraph>
               <Paragraph variant="standard">
               Ønsker du å få mer informasjon om noen av våre Google-produkter, fyll ut skjemaet under og en i teamet vårt vil ta kontakt i løpet av kort tid.
               </Paragraph>
               </Flex>
<Flex as="form" onSubmit={(e) => e.preventDefault()} sx={{ flexDirection: "column", fontFamily: "DM Sans", fontSize: 1 }}>
  <Label htmlFor="name" >Navn</Label>
  <Input name="name" id="navn" mb={3} />
  <Label htmlFor="tlfnr">Telefonnummer</Label>
  <Input type="tel" name="tlfnr" id="tlfnr" mb={3} />
  <Label htmlFor="epost">E-postadresse</Label>
  <Input type="email" name="epost" id="epost" mb={3} />
  <Label htmlFor="company">Bedrift</Label>
  <Input type="name" name="company" id="company" mb={3} />
  <Label htmlFor="comment">Legg til melding</Label>
  <Textarea name="comment" id="comment" rows={6} mb={3} />
  <Button>Send inn</Button>
</Flex>

          </Flex>
        </Flex>
      </Grid>
    </Layout>
  );
};

export default Courses;
