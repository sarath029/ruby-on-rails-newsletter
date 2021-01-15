import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory, useParams, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { useAlert } from 'react-alert'

const Content = (props) => {
    let { id } = useParams();
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const alert = useAlert();
    const history = useHistory();

    const performValidation = () => {
        return content.length > 0 && subject.length > 0;
    }
    const addTopic = (event) => {

        if (performValidation()) {
            const devices_url = '/api/v1/topics/';
            const device = {

                "topic": {
                    "creator_id": props.currentUser,
                    "subject": subject,
                    "content": content,
                    "status": "PUBLISHED"
                }

            }

            axios.post(devices_url, device)
                .then(comment_response => {
                    history.push("/topics");
                });
        }
        else{

            alert.show('please enter subject and content')
        }

    }

    return (
        <Container className="mt-3">
            <Col sm={10}>
                <Card className="mt-3">
                    <Card.Body className="p-5">
                        <h6>Create Topic</h6>
                        <input style={{ width: "100%", marginTop: "10px" }} type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)}></input>
                        <textarea style={{ width: "100%", height: "200px", marginTop: "10px" }} type="textarea" onChange={e => setContent(e.target.value)}></textarea>
                        <Button variant="outline-primary" onClick={addTopic} style={{ marginLeft: "90%" }}>Submit</Button>
                    </Card.Body>
                </Card>

            </Col>

        </Container>
    );
}


const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(withRouter(Content));