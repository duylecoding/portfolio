import { ListItem, UnorderedList } from "@chakra-ui/react";
import Card from "../../shared/card/card";
import { PRIMARY, SECONDARY } from "../../shared/colors";
import { CenteredContainer } from "../../shared/styles";
import Header from "../header/header";
import { AboutMe, Background, CardContainer, More } from "./main-styles";

function Main({ title }) {
  return (
    <>
      <Header title={title} />
      <Background>
        <CenteredContainer>
          <AboutMe>Motivated, Driven, Pays Attention during Meetings</AboutMe>
          <More>
            "Do you just <span color={SECONDARY}>sit there </span>and refresh
            the pull requests page?"
          </More>
          <CardContainer>
            <Card content="Projects"></Card>
            <Card content="Experience"></Card>
          </CardContainer>
        </CenteredContainer>
      </Background>
    </>
  );
}

export default Main;
