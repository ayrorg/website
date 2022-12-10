import { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Courses: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: "2em" }}>
        <Container>
          <Paragraph
            sx={{
              fontSize: 2,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            "AYR guidet meg gjennom grunnleggende verktøy for kommunikasjon og
            samarbeid på tvers av hele arbeidsflaten. Et verdifullt kurs som jeg
            kan anbefale videre"
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
        </Container>
      </Grid>
    </Layout>
  );
};

export default Courses;
