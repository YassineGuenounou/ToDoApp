import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Navi = () => {
    const navigate=useNavigate();
    return (
        <Navbar bg="dark" variant="dark">

        <Container>
            <Nav.Link>
          <Navbar.Brand onClick={()=>navigate("/")} style={{display:"flex"}}>
            <img
              src="https://static-s.aa-cdn.net/img/gp/20600010996155/v6Z5TBhdRvmP52gJgJjKlaY_yyotslsyV7qsytfHl76MfMxMShHv4DSD29NsT6Xemw=s300?v=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
             <p style={{color:"white",marginLeft:"5px"}}>TODOAPP</p>
             
          </Navbar.Brand>
          </Nav.Link>
          <Nav className="mr-auto" >
      <Nav.Link  onClick={()=>navigate("/")}>Home</Nav.Link>
      <Nav.Link  onClick={()=>navigate("/admin")}>Admin</Nav.Link>

    </Nav>

        </Container>
        </Navbar>
    )
}

export default Navi
