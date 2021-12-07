import styled from "styled-components";
import { SECONDARY } from "../../shared/colors";

export const Background = styled.div`
  margin: -8px;
  height: calc(100vh - 72px);
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 30vw 30vw;
  grid-row: auto auto;
`;
