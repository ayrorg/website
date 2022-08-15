import { Box, Container, Flex, Image, Link, Paragraph } from 'theme-ui';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: 'text', p:4}}>
        <Container
          sx={{ borderRadius: "8px", backgroundColor: "blue00", p: 4 }}
        >
          <Paragraph
            sx={{ fontSize: "18px", fontWeight: "700", mb:'20px' }}
            color="offwhite"
          >
            AYR AS
          </Paragraph>
          <Paragraph
            sx={{ fontSize: "18px", fontWeight: "400" }}
            color="offwhite"
          >
            Org.nr: 912519627 <br/>
            <br/>

            Adresseveien 34, 0000 Hadeland
            Myntgata 2, 0151 Oslo </Paragraph>
            
            <Box mt='20px' sx={{fontFamily:'DM Sans'}}>
            <Link href={'tel:+4745969999'} color='offwhite' >+47 4596 9999</Link>
            </Box>
          <Link href='/privacy-policy'><Paragraph sx={{color:'offwhite', fontSize:'18px', mt:'20px'}}>Personvernserklæring</Paragraph></Link>
        <Flex sx={{alignItems: 'center', mt:'32px', justifyContent:'center', gap:4}}>
          <Image src='./facebook.svg'/>
          <Image src='./linkedin.svg'/>
        </Flex>
        </Container>
        <Image src='gcpartner.svg' mt='30px'></Image>
  </Box>
);
