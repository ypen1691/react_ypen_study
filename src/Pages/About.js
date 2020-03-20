import React, {Component} from 'react';
import img1 from '../assets/about/design.jpeg';
import img2 from '../assets/about/team.jpg';
import img3 from '../assets/about/programming.jpeg';
import img4 from '../assets/about/frameworks.png';
import img5 from '../assets/about/libraries.jpeg';
import {Container, Tab, Nav, Row, Col } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Programming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        FrameWorks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img src={img1} alt=""/>
                                <p>Lorem ipsum dolor es remi text 123</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src={img2} alt=""/>
                                <p>Lorem ipsum dolor es remi text 123</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src={img3} alt=""/>
                                <p>Lorem ipsum dolor es remi text 123</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src={img4} alt=""/>
                                <p>Lorem ipsum dolor es remi text 123</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src={img5} alt=""/>
                                <p>Lorem ipsum dolor es remi text 123</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;