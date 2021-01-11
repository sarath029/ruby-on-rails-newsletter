import React, { useEffect, useState } from 'react';
import { Card, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ChatDots } from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";

const Content = () => {

    const [topicsData, setTopicsData] = useState(null);
    const history = useHistory();
    const showTopic = (link) => {
        const url = '/topic/' + link;
        history.push(url);
    }


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
            <Container fluid className="mt-3">
                <Col sm={8}>
                    {topicsData['data'].map(row => (
                        <Card key={row['id']} className="mt-3" onClick={() => showTopic(row['attributes']['permalink'])}>
                            <Card.Body className="p-3">
                                <h5>{row['attributes']['subject']}</h5>
                                <div>
                                    <p>{row['attributes']['truncated_content']}</p>
                                    <footer className="blockquote-footer">
                                        By <cite title="Source Title">{row['attributes']['creator']['name']}</cite>
                                        <p>{row['attributes']['created_at_string']} <ChatDots style={{ marginLeft: "70%" }} /> {row['relationships']['comments']['data'].length} comments</p>
                                    </footer>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col sm={3}>
                </Col>
            </Container>
        );
    }
}

export default Content;