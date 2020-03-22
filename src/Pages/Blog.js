import React, {Component} from 'react';
import {Media, Container, Col, Row, Card, ListGroup} from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
           <>
            <Container className='mt-4'>
                <Row>
                    <Col md='9'>
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Category</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Java1</ListGroup.Item>
                                <ListGroup.Item>Java11</ListGroup.Item>
                                <ListGroup.Item>Java111</ListGroup.Item>
                                <ListGroup.Item>Java1111</ListGroup.Item>
                                <ListGroup.Item>Java11111</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3'>
                            <Card.Body>
                                <Card.Title>
                                    Side widget
                                </Card.Title>
                                <Card.Text>
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
           </>
        );
    }
}

export default Blog;