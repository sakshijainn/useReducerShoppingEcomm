import React from "react";
import {
  Navbar,
  Nav,
  Badge,
  Container,
  NavbarBrand,
  FormControl,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import {BsFillCartCheckFill} from "react-icons/bs"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
      <Container>
        <Navbar.Brand>
          <Link to ="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>

        <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant= "success">
                    <BsFillCartCheckFill color ="white" fontSize ="25px"/>
                    <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth :200}}>
                    <span style={{padding:10}}>Cart is Empty</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
