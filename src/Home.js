import React, { useEffect } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Home() {
    // ใช้ useEffect เพื่อแก้ไข title ของ document
    useEffect(() => {
        document.title = "Home - MY Portfolio";
    }, []); // ทำงานครั้งเดียวหลังจาก component mount

    return (
        <div className="App">
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">MY Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* สามารถเพิ่มลิงก์ใน Nav ได้ */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src="ss.jpg" alt="Profile" />
                            <Card.Body>
                                <Card.Title>ซัยฟุลนัสรี เจ๊ะอามะ</Card.Title>
                                <Card.Text>
                                    "Stay positive, work hard, and make it happen."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
