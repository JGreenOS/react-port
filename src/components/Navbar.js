import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';


const Navigation = () => {
   return (
       <Navbar bg='dark' variant='white'>
           <Container>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>

           </Container>
       </Navbar>
   )
}

export default Navigation;
