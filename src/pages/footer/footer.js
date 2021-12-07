import { Text } from "@chakra-ui/layout";
import { FooterNav, LinkBox, FooterLink } from "./footer-styles";

function Footer({}) {
  return (
    <FooterNav>
      <Text color="white">© Duy Le</Text>
      <LinkBox>
        <FooterLink href="https://www.linkedin.com/in/duyhale/" target="_blank">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/duylecoding" target="_blank">
          GitHub
        </FooterLink>
      </LinkBox>
    </FooterNav>
  );
}

export default Footer;
