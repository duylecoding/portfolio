import { useState } from "react";
import Card from "../../shared/card/card";
import { SECONDARY } from "../../shared/colors";
import { CenteredContainer } from "../../shared/styles";
import Header from "../header/header";
import { AboutMe, Background, CardContainer, Me, More } from "./main-styles";
import Duy from "../../lib/duy.jpg";

function Main({ title }) {
  const [projects, setProjects] = useState(false);
  const [experience, setExperience] = useState(false);

  return (
    <>
      <Header title={title} />
      <Background>
        <CenteredContainer>
          <AboutMe>Motivated, Driven, Pays Attention in Meetings</AboutMe>
          <Me src={Duy} alt="Duy Le"></Me>
          <More>
            "Do you just <span color={SECONDARY}>sit there </span>and refresh
            the pull requests page?"
          </More>
          <CardContainer>
            <Card
              content="Projects"
              onClick={() => setProjects(!projects)}
              show={!experience}
            ></Card>
            <Card
              content="Experience"
              onClick={() => setExperience(!experience)}
              show={!projects}
            ></Card>
          </CardContainer>
        </CenteredContainer>
      </Background>
    </>
  );
}

export default Main;
