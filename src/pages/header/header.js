import { Title, NavBar } from "./header-styles";

function Header({ title }) {
  return (
    <NavBar>
      <Title>{title}</Title>
    </NavBar>
  );
}

export default Header;
