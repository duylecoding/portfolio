import styled from "styled-components";
import { Text, Flex } from "@chakra-ui/layout";
import { PRIMARY } from "../../shared/colors";

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
`;

export const More = styled(Text)`
  font-size: 1.5em;
  margin-top: -16px;
  color: ${PRIMARY};
`;
