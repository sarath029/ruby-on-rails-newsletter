import React, {useEffect} from 'react';
import { Card, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Content = () => {

    useEffect(() => {
        const url = '/api/v1/topics';
        axios.get(url)
            .then(response => {
                console.log(response.data);
            });

    }, [])

    return (
        <Container fluid className="mt-5">
            <Col sm={8}>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Col>
        </Container>
    );
}

export default Content;