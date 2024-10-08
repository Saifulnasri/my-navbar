import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <p>sqiiful_; {new Date().getFullYear()} </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
