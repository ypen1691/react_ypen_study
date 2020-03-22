import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
                <Container>
                    <h2 className='text-center m-4'>Our Team</h2>
                    <CardDeck>
                          <Card bg='warning' border='primary' text='success'>
                              <Card.Img variant='top' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Card.Img>
                              <Card.Body>
                                  <Card.Title>Developers</Card.Title>
                                  <Card.Text>
                                      lorem ipsum dolor es remi
                                  </Card.Text>
                                  <Button variant='primary'>About team</Button>
                              </Card.Body>
                          </Card>
                        <Card bg='info'>
                            <Card.Img variant='top' src='https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Card.Img>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor es remi
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='success'>
                            <Card.Img variant='top' src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Card.Img>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor es remi
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='success'>
                            <Card.Img variant='top' src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Card.Img>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor es remi
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='success'>
                            <Card.Img variant='top' src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Card.Img>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor es remi
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;