import { Flex, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { SECONDARY } from "../../shared/colors";
import { MAIN_PRINT } from "../../shared/typefaces";

export const NavBar = styled(Flex)`
  height: 48px;
  background-color: ${SECONDARY};
  margin: -8px;
  margin-bottom: 8px;
  padding: 12px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: ${MAIN_PRINT};
  color: white;
  font-weight: bold;
  margin: 0px;
  font-size: 32px;
`;
