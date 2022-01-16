import { Container } from "./card-styles";

function Card({ content, show, ...rootDOMAttributes }) {
  return show ? <Container {...rootDOMAttributes}>{content}</Container> : <></>;
}

export default Card;
