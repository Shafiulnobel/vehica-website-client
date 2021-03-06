import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo_white.webp'
import empty from '../../../images/user.png'
const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
    <Navbar style={{backgroundColor:'#222732'}} expand="lg">
  <Container>
    <Navbar.Brand >
        <NavLink to="/">
            <img className="w-25" src={logo} alt="" />
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink
        
        style={{color:'white',textDecoration:'none'}}
        activeStyle={{
          fontWeight: "bold",
          color: "salmon"
        }}
        to="/home">Home</NavLink>
        <NavLink 
        className="px-2"
        style={{color:'white',textDecoration:'none'}}
        activeStyle={{
          fontWeight: "bold",
          color: "salmon"
        }}
        to="/explore">Explore</NavLink>
        
       {user?.email&&
      
       <NavLink
       style={{color:'white',textDecoration:'none'}}
        activeStyle={{
          fontWeight: "bold",
          color: "salmon"
        }}
       to="/dashboard">Dashboard</NavLink>
      }
       
      </Nav>
      <Row className="ms-auto text-white">

        <Col xs={12}md={12}>
        {user?.email && !user?.photoURL ?
        <img className="rounded-circle" roundedCircle style={{ width: "40px" }} src={empty} alt="" />
         
                :
                <Image
                style={{ width: "40px" }}
               src={user?.photoURL}
                roundedCircle
                     />
                }
        </Col>   
      <Col xs={12}md={12}>
      {user?.displayName}
       </Col>
       
      </Row>
      {user?.email?
       <>
        <Button
        onClick={logOut}
        variant="danger">Logout
        <i className="ps-3 fas fa-sign-out-alt"></i>
        </Button>
        </>
         :
        <NavLink to="/login"> <Button variant="primary">Login
        </Button></NavLink>
     

      }
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;