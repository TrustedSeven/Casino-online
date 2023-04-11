import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
      <>
        <Navbar>
          <Container>
            <Nav>
              <Nav.Link href="/">Casino</Nav.Link>
              <Nav.Link href="/esports">eSports</Nav.Link>
              <Nav.Link href="/lottery">Lottery</Nav.Link>
              <Nav.Link href="/scratchcards">ScratchCards</Nav.Link>
              <Nav.Link href="/virtual">Virtual</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Header;