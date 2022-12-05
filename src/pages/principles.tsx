import type { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Principles: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>
        <Paragraph variant='heading'>Våre Prinsipper</Paragraph>
        <Paragraph mt='32px' variant='smallheader'>
        Vi har et ønske om å skape gode opplevelser og tillit, både i vårt møte møte med kunden 
        og i våre kunderelasjoner. I tillegg til å eat, pray and love vårt hvorfor, har vi noen leveregler 
        som vi jobber tett opp mot hver eneste dag. 
        </Paragraph>
        <Paragraph mt='32px' variant='smallheader'>Nysgjerrighet</Paragraph>
            <Paragraph variant='standard' mt='20px'>
            Vi vil jakte på innsikt og spørre “hvorfor”. Det tror vi at gjør oss i stand til å
            forstå problemet som skal løses, og ikke minst menneskene som har problemet.            </Paragraph>
        </Container>
        </Grid>
        </Layout>)
};
export default Principles;
