import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Button, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ChatDots } from 'react-bootstrap-icons';
import { useHistory, withRouter } from "react-router-dom";

const Content = (props) => {

    const history = useHistory();
    const showTopic = (link) => {
        const url = '/topic/' + link;
        history.push(url);
    }

    const createTopicSubmit = () =>{
        history.push('/create-topic')
    }

    useEffect(() => {
        const url = '/api/v1/topics';
        axios.get(url)
            .then(response => {
                props.setTopicsData(response.data);
            });
    }, [])

    if (props.topicsData === null) {
        return (null);
    }
    else {
        console.log(props.topicsData['data']);
        return (
            <Container fluid className="p-4">
                <Row>
                <Col sm={9}>
                    {props.topicsData['data'].map(row => (
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
                        <Button variant="outline-primary" className="m-3" onClick={createTopicSubmit}>Create a New Topic</Button>
                </Col>
                </Row>
                
            </Container >
        );
    }
}

export default withRouter(Content);