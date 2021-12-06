import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TERTIARY } from "../../shared/colors";

export const FooterNav = styled(Flex)`
  height: 24px;
  background-color: ${TERTIARY};
  margin: -8px;
  margin-top: 8px;
  padding: 12px;
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

export const FooterLink = styled(Link)`
  margin: 0px 16px 0px 16px;
  color: white;
  font-weight: bold;
`;
