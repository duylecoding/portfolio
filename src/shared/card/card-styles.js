import { Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { B_GRAY, TERTIARY } from "../colors";
import { SECONDARY_PRINT } from "../typefaces";
import { MEDIUM } from "../screensizes";

export const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 30vh;
  background-color: ${TERTIARY};
  margin: 16px;
  padding: 16px;

  font-family: ${SECONDARY_PRINT}, sans-serif;
  border-radius: 16px;
  font-weight: 700;
  font-size: 64px;
  text-shadow: 1px 1px ${B_GRAY};

  cursor: pointer;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6);
    margin-top: -2px;
  }
  @media (max-width: ${MEDIUM}px) {
    font-size: 32px;
  }
`;
