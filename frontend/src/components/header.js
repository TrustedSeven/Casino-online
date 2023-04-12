import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from '@mui/material/Button';

import './header.css'
import logo from '../assets/logo.jpg'

function Header() {
  return (
    <>
      <div className="inline header-lay row">
        <div className="col-md-2 mid"><img className="logo" src={logo}/></div>
        <div className="col-md-8 mid">
          <Navbar>
            <Container>
              <Nav>
                <Nav.Link href="/"><span className="mg-std">Casino</span></Nav.Link>
                <Nav.Link href="/esports"><span className="mg-std">eSports</span></Nav.Link>
                <Nav.Link href="/lottery"><span className="mg-std">Lottery</span></Nav.Link>
                <Nav.Link href="/scratchcards"><span className="mg-std">ScratchCards</span></Nav.Link>
                <Nav.Link href="/virtual"><span className="mg-std">Virtual</span></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="inline col-md-2 mid">
          <Button variant="outlined" style={{marginRight:"1vw", color:"white"}}>Sign In</Button>
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
    </>
  );
}


export default Header;
