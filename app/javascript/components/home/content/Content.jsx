import React, { useEffect, useState } from 'react';
import { Card, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Content = () => {

    const [topicsData, setTopicsData] = useState(null);

    useEffect(() => {
        const url = '/api/v1/topics';
        axios.get(url)
            .then(response => {
                setTopicsData(response.data);
            });
    }, [])

    if (topicsData === null) {
        return (null);
    }
    else {
        console.log(topicsData['data']);
        return (
            <Container fluid className="mt-5">
                <Col sm={8}>

                    {topicsData['data'].map(row => (
                        <Card key={row['id']}>
                            <Card.Header>{row['attributes']['subject']}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>{row['attributes']['content']}</p>
                                    <footer className="blockquote-footer">
                                        By <cite title="Source Title">{row['attributes']['creator']['name']}</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Container>
        );
    }
}

export default Content;