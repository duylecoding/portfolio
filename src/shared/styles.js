import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { SECONDARY } from "./colors";

export const CenteredContainer = styled(Flex)`
  flex-direction: column;
  margin: 0vh 16vw 0vh 16vw;
  color: ${SECONDARY};
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;
