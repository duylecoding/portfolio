import { Title, NavBar, Break, Role } from "./header-styles";

function Header({ title }) {
  return (
    <>
      <NavBar>
        <Title>{title}</Title>
        <Role>Software Engineer</Role>
      </NavBar>
      <Break />
    </>
  );
}

export default Header;
