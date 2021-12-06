import { Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { FooterNav, LinkBox, FooterLink } from "./footer-styles";

function Footer({}) {
  return (
    <FooterNav>
      <Text color="white">© Duy Le</Text>
      <LinkBox>
        <FooterLink to="https://www.linkedin.com/in/duyhale/">
          LinkedIn
        </FooterLink>
        <FooterLink to="https://github.com/duylecoding">GitHub</FooterLink>
      </LinkBox>
    </FooterNav>
  );
}

export default Footer;
