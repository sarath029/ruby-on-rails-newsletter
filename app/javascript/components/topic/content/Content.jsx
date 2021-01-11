import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ChatDots } from 'react-bootstrap-icons';
import { useHistory, useParams } from "react-router-dom";

const Content = () => {

    const [topicData, setTopicsData] = useState(null);
    let { id } = useParams();

    // const history = useHistory();
    // const showTopic = (link) => {
    //     const url = '/topic/' + link;
    //     history.push(url);
    // }


    useEffect(() => {
        const url = '/api/v1/topics/' + id;
        axios.get(url)
            .then(response => {
                setTopicsData(response.data);
            });
    }, [])

    if (topicData === null) {
        return (null);
    }
    else {
        console.log(topicData['data']);
        return (
            <Container className="mt-3">
                <Col>
                    <Card key={topicData['data']['id']} className="mt-3" onClick={() => showTopic(topicData['data']['attributes']['permalink'])}>
                        <Card.Body className="p-3">
                            <h4>{topicData['data']['attributes']['subject']}</h4>
                            <div>
                                <p>{topicData['data']['attributes']['content']}</p>
                                <footer className="blockquote-footer">
                                    By <cite title="Source Title">{topicData['data']['attributes']['creator']['name']}</cite>
                                    <p>{topicData['data']['attributes']['created_at_string']}</p>
                                </footer>
                            </div>
                            <Col className="ml-auto p-5" >
                                {topicData['included'].map(row => (
                                    <Card key={row['id']} className="mt-3">
                                        <Card.Body className="p-3">
                                            <div>
                                                <p dangerouslySetInnerHTML={{ __html: row['attributes']['content'] }}></p>
                                                <footer className="blockquote-footer">
                                                    By <cite title="Source Title">{row['attributes']['creator']['name']}</cite>
                                                    <p>{row['attributes']['created_at_string']}</p>
                                                </footer>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}

                                <Card className="mt-3">
                                    <Card.Body className="p-3">
                                        <div>
                                            <h6>Add Comment</h6>
                                            <textarea style={{width:"100%", height:"100px", margin:"10px"}} type="textarea"></textarea>
                                            <Button style={{marginLeft:"90%"}}>Submit</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Card.Body>

                    </Card>

                </Col>

            </Container>
        );
    }
}

export default Content;