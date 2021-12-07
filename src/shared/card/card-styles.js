import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { PRIMARY } from "../colors";

export const Container = styled(Flex)`
  width: 25vw;
  height: 30vh;
  background-color: ${PRIMARY};
  margin: 16px;
  padding: 16px;
  box-shadow: 8px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`;
