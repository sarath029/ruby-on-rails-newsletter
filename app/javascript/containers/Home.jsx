import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import './Home.scss'

const Home = (props) => {
  return (
    <Container fluid className="m-0 p-0 w-100">
      <Row className=" border-bottom border-info">
        <Col><Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Avaamo Forum</Navbar.Brand>

          <Nav className="pl-5">
            <Nav.Link className="pl-4" href="/home">Home</Nav.Link>
            <Nav.Link className="pl-4" href="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline className="ml-auto pr-5">
            <FormControl type="text" placeholder="Search Topic" className="mr-sm-2" />
            <Search className="ml-3" />
          </Form>
          <Nav>
            <Nav.Link href="/profile">Logout</Nav.Link>
          </Nav>
        </Navbar>
        </Col>
      </Row>

      <Row>
      </Row>
    </Container>
  )

    ;
}
export default Home;