import { NextPage } from "next";
import { Box, Container, Flex, Grid, Image, Link, Paragraph } from "theme-ui";
import { Layout } from "../components/layout/layout";

const Courses: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: "100%", px: 4 }}>
        <Container>
          <Paragraph
            sx={{
              fontSize: "25px",
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
              fontSize: "10px",
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
