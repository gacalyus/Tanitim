import React, { useState } from "react";
import "./header.css";
import { FiPhone } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Media,
  Container,
  Row,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <Container>
          <Row xs="12" lg="9">
            <Media left href="./">
              <Media object data-src="./" />
            </Media>

            <NavbarText className="titleNavbar">
              <FiGitlab style={{ marginRight: "14px", marginBottom: "9px" }} />
              İsmail GÖKTAŞ
            </NavbarText>
          </Row>

          <Row xs="12" lg="3">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Hakkımda</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://boring-franklin-c38f4e.netlify.app/">
                    Projeler
                  </NavLink>
                </NavItem>

                <NavLink>Yorumlar</NavLink>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    İletişim
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <FiPhone /> 539 613 4631
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
