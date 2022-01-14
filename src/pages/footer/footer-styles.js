import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { SECONDARY } from "../../shared/colors";

export const FooterNav = styled(Flex)`
  height: 20px;
  background-color: ${SECONDARY};
  margin: -8px;
  margin-top: 8px;
  padding: 4px 12px 12px 12px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

export const LinkBox = styled(Flex)`
  justify-content: space-between;
`;

export const FooterLink = styled.a`
  margin: 0px 16px 0px 16px;
  color: white;
  font-weight: bold;
`;
