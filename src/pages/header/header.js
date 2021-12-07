import { Title, NavBar, Break } from "./header-styles";

function Header({ title }) {
  return (
    <>
      <NavBar>
        <Title>{title}</Title>
      </NavBar>
      <Break />
    </>
  );
}

export default Header;
