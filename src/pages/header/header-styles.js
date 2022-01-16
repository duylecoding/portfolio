import { Flex, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { B_GRAY, PRIMARY, SECONDARY } from "../../shared/colors";
import { MAIN_PRINT } from "../../shared/typefaces";
import { MEDIUM } from "../../shared/screensizes";

export const NavBar = styled(Flex)`
  height: 48px;
  margin: -8px;
  padding: 12px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: ${MAIN_PRINT};
  color: ${SECONDARY};
  font-weight: bold;
  margin: 0px;
  margin-left: 25%;
  font-size: 32px;

  @media (max-width: ${MEDIUM}px) {
    font-size: 24px;
  }
`;

export const Role = styled(Text)`
  font-family: ${MAIN_PRINT};
  color: ${PRIMARY};
  font-weight: bold;
  margin: 0px;
  font-size: 32px;
  margin-left: 25%;

  @media (max-width: ${MEDIUM}px) {
    font-size: 24px;
    margin-left: 22%;
  }
`;

export const Break = styled.hr`
  border: 1px solid ${SECONDARY};
  width: 50%;
`;
