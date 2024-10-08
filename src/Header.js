import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";
import Footer from "./Footer";
import Sevice from "./Sevice";


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Height } from "@mui/icons-material";
const Header = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="Logo.png"
              alt="Logo"
              style={{ padding: 10, height: "70px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav>
                <Link to="/" style={{ padding: 15, textDecoration: "none" }}>
                  หน้าหลัก
                </Link>
                <Link
                  to="/Profile"
                  style={{ padding: 15, textDecoration: "none" }}
                >
                  เกี่ยวกับเรา
                </Link>

                <Link
                  to="/Posts"
                  style={{ padding: 15, textDecoration: "none" }}
                >
                  บริการ
                </Link>


                <Link
                  to="/Sevice"
                  style={{ padding: 15, textDecoration: "none" }}
                >
                 ติดต่อเรา
                </Link>
              </Nav>
              <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
                style={{ padding: 7, textDecoration: "none" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Sevice" element={<Sevice />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Header;
