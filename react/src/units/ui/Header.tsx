import { Link } from "react-router-dom";
import Container from "./Container";

const CSS = `
  bg-indigo-500
  py-3
  text-white
`;

const Header = () => {
  return (
    <header className={CSS}>
      <Container>
        <h1 className="text-xl font-medium">MistiBoard</h1>
        <Link to="/cats">Chats</Link>
        <Link to="/families">FA</Link>
      </Container>
    </header>
  );
};

export default Header;
