import styled from "styled-components";
import { Text, Flex } from "@chakra-ui/layout";
import { PRIMARY } from "../../shared/colors";
import { MEDIUM } from "../../shared/screensizes";
import { Image } from "@chakra-ui/react";

export const Background = styled.div`
  margin: -8px;
  height: calc(100vh - 72px);
`;

export const CardContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const AboutMe = styled(Text)`
  font-size: 2em;
  font-weight: bold;
  @media (max-width: ${MEDIUM}px) {
    font-size: 1.5em;
  }
`;

export const More = styled(Text)`
  font-size: 1.5em;
  color: ${PRIMARY};
  margin-bottom: auto;
  font-weight: bold;
  @media (max-width: ${MEDIUM}px) {
    font-size: 1.2em;
  }
`;

export const Me = styled(Image)`
  max-height: 50vh;
`;
