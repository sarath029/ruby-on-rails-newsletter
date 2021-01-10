import React from 'react'
import './Navigation.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';



const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" className=" border-bottom border-info">
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
    )
}

export default Navigation;