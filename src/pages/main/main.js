import { CenteredContainer } from "../../shared/styles";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Background } from "./main-styles";

function Main({ title }) {
  return (
    <>
      <Header title={title} />
      <Background>
        <CenteredContainer>hi</CenteredContainer>
      </Background>
    </>
  );
}

export default Main;
