import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory, useParams, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const Content = (props) => {
    console.log('current user -' + props.currentUser)
    const [topicData, setTopicsData] = useState(null);
    let { id } = useParams();
    const [newComment, setNewComment] = useState();

    const history = useHistory();

    const addComment = (event) => {
        const comment_url = '/api/v1/comments/';
        const comment = {

            "comment": {
                "creator_id": props.currentUser,
                "topic_id": topicData['data']['id'],
                "content": newComment
            }

        }

        axios.post(comment_url, comment)
            .then(comment_response => {

                const url = '/api/v1/topics/' + id;
        
                axios.get(url)
                    .then(response => {
                        setTopicsData(response.data);
                        console.log(response.data)
                    });
        
            });
    }

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
        return (
            <Container className="mt-3">
                <Col>
                    <Card key={topicData['data']['id']} className="mt-3">
                        <Card.Body className="p-3">
                            <h4>{topicData['data']['attributes']['subject']}</h4>
                            <div>
                                <p>{topicData['data']['attributes']['content']}</p>
                                <footer className="blockquote-footer">
                                    By <cite title="Source Title">{topicData['data']['attributes']['creator']['name']}</cite>
                                    <p>{topicData['data']['attributes']['created_at_string']}</p>
                                </footer>
                            </div>
                            <Col className="ml-auto pr-5 pl-5 pb-5" >
                                {topicData['included'].map(row => (
                                    <Card key={row['id']} className="mt-3">
                                        <Card.Body className="p-3">
                                            <div>
                                                <p dangerouslySetInnerHTML={{ __html: row['attributes']['content'] }}></p>
                                                <footer className="blockquote-footer">
                                                    Commented by <cite title="Source Title">{row['attributes']['creator']['name']}</cite>
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
                                            <textarea style={{ width: "100%", height: "100px", margin: "10px" }} type="textarea" onChange={e => setNewComment(e.target.value)}></textarea>
                                            <Button variant="outline-primary" onClick={addComment} style={{ marginLeft: "90%" }}>Submit</Button>
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

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(withRouter(Content));