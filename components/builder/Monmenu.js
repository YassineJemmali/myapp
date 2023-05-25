import { Container, Nav, Navbar } from "react-bootstrap";
import MonLogo from "../images/lelogo.png";
import "./Monmenu.css";

function MonMenu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img id="idLogo" src={MonLogo} alt="ml" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/">Accueil</Nav.Link>
            <Nav.Link href="../../lespages/Contact.js">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MonMenu;
