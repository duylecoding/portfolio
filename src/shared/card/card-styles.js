import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { B_GRAY, PRIMARY } from "../colors";

export const Container = styled(Flex)`
  width: 25vw;
  height: 30vh;
  background-color: ${PRIMARY};
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  text-shadow: 1px 1px ${B_GRAY};
  cursor: pointer;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.6);
  transition: top ease 0.5s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6);
    margin-top: -4px;
  }
`;
