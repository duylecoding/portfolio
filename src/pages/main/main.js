import Card from "../../shared/card/card";
import { CenteredContainer } from "../../shared/styles";
import Header from "../header/header";
import { Background, CardContainer } from "./main-styles";

function Main({ title }) {
  return (
    <>
      <Header title={title} />
      <Background>
        <CenteredContainer>
          <CardContainer>
            <Card content="Projects"></Card>
            <Card content="Leadership"></Card>
            <Card content="Experience"></Card>
            <Card content="About me"></Card>
          </CardContainer>
        </CenteredContainer>
      </Background>
    </>
  );
}

export default Main;
